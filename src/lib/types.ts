export interface RenderResult {
  jxlData: Uint8Array;
  pngData: Uint8Array;
}

export interface WorkerApi {
  render(code: string): Promise<RenderResult>;
  prettier(code: string): string;
}
