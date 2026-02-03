import { expose } from 'comlink';
import type { RenderResult, WorkerApi } from '../lib/types';
import { prettifyTree } from '../lib/prettier';

let module: any = null;

async function initModule() {
  if (module) return;
  
  const createModule = (await import('../../wasm/libjxl/jxl.js')).default;
  
  module = await createModule({
    locateFile: (path: string) => {
      if (path.endsWith('.wasm')) {
        return new URL('../../wasm/libjxl/jxl.wasm', import.meta.url).href;
      }
      return path;
    }
  });
  
  console.log('[Worker] libjxl loaded');
}

const workerApi: WorkerApi = {
  async render(code: string): Promise<RenderResult> {
    await initModule();
    
    // Encode tree to JXL
    const jxlResult = module.jxl_from_tree(code);
    if (typeof jxlResult === 'string') {
      throw new Error(jxlResult);
    }
    if (!jxlResult || jxlResult.length === 0) {
      throw new Error('jxl_from_tree returned empty result');
    }
    const jxlData = new Uint8Array(jxlResult);
    
    // Decode JXL to PNG
    const pngResult = module.decode(jxlData);
    if (!pngResult || pngResult.length === 0) {
      throw new Error('Failed to decode JXL to PNG');
    }
    const pngData = new Uint8Array(pngResult);

    return { jxlData, pngData };
  },

  prettier(code: string): string {
    return prettifyTree(code);
  }
};

expose(workerApi);
