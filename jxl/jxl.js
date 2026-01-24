// This code implements the `-sMODULARIZE` settings by taking the generated
// JS program code (INNER_JS_CODE) and wrapping it in a factory function.

// When targeting node and ES6 we use `await import ..` in the generated code
// so the outer function needs to be marked as async.
async function jxl(moduleArg = {}) {
  var moduleRtn;

  (function () {
    function a(d) {
      d = d.split("-")[0];
      for (d = d.split(".").slice(0, 3); 3 > d.length; ) {
        d.push("00");
      }
      d = d.map((e) => e.padStart(2, "0"));
      return d.join("");
    }
    var b =
      "undefined" !== typeof process && process.cb?.node
        ? a(process.cb.node)
        : 2147483647;
    if (2147483647 > b) {
      throw Error(
        "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
      );
    }
    if (2147483647 > b) {
      throw Error(
        `This emscripten-generated code requires node v${"214748.36.47"} (detected v${[(b / 10000) | 0, ((b / 100) | 0) % 100, b % 100].join(".")})`,
      );
    }
    if ((b = "undefined" !== typeof navigator && navigator.userAgent)) {
      var c =
        b.includes("Safari/") &&
        !b.includes("Chrome/") &&
        b.match(/Version\/(\d+\.?\d*\.?\d*)/)
          ? a(b.match(/Version\/(\d+\.?\d*\.?\d*)/)[1])
          : 2147483647;
      if (150000 > c) {
        throw Error(
          `This emscripten-generated code requires Safari v${"15.0.0"} (detected v${c})`,
        );
      }
      c = b.match(/Firefox\/(\d+(?:\.\d+)?)/)
        ? parseFloat(b.match(/Firefox\/(\d+(?:\.\d+)?)/)[1])
        : 2147483647;
      if (79 > c) {
        throw Error(
          `This emscripten-generated code requires Firefox v79 (detected v${c})`,
        );
      }
      b = b.match(/Chrome\/(\d+(?:\.\d+)?)/)
        ? parseFloat(b.match(/Chrome\/(\d+(?:\.\d+)?)/)[1])
        : 2147483647;
      if (85 > b) {
        throw Error(
          `This emscripten-generated code requires Chrome v85 (detected v${b})`,
        );
      }
    }
  })();
  var k = moduleArg,
    aa = "./this.program",
    ba = import.meta.url,
    ca = "",
    da,
    ea;
  try {
    ca = new URL(".", ba).href;
  } catch {}
  if (!globalThis.window && !globalThis.WorkerGlobalScope) {
    throw Error(
      "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)",
    );
  }
  ea = (a) => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  };
  da = async (a) => {
    l(!fa(a), "readAsync does not work with file:// URLs");
    a = await fetch(a, { credentials: "same-origin" });
    if (a.ok) {
      return a.arrayBuffer();
    }
    throw Error(a.status + " : " + a.url);
  };
  var ha = console.log.bind(console),
    n = console.error.bind(console);
  l(
    !0,
    "web environment detected but not enabled at build time.  Add `web` to `-sENVIRONMENT` to enable.",
  );
  l(
    !0,
    "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.",
  );
  l(
    !0,
    "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.",
  );
  var ia;
  globalThis.WebAssembly || n("no native wasm support detected");
  var ja = !1;
  function l(a, b) {
    a || r("Assertion failed" + (b ? ": " + b : ""));
  }
  var fa = (a) => a.startsWith("file://");
  function ka() {
    var a = la();
    l(0 == (a & 3));
    0 == a && (a += 4);
    t[a >> 2] = 34821223;
    t[(a + 4) >> 2] = 2310721022;
    t[0] = 1668509029;
  }
  function ma() {
    if (!ja) {
      var a = la();
      0 == a && (a += 4);
      var b = t[a >> 2],
        c = t[(a + 4) >> 2];
      (34821223 == b && 2310721022 == c) ||
        r(
          `Stack overflow! Stack cookie has been overwritten at ${oa(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${oa(c)} ${oa(b)}`,
        );
      1668509029 != t[0] &&
        r(
          "Runtime error: The application has corrupted its heap memory area (address zero)!",
        );
    }
  }
  var pa = new Int16Array(1),
    qa = new Int8Array(pa.buffer);
  pa[0] = 25459;
  (115 === qa[0] && 99 === qa[1]) ||
    r(
      "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)",
    );
  function ra(a) {
    Object.getOwnPropertyDescriptor(k, a) ||
      Object.defineProperty(k, a, {
        configurable: !0,
        set() {
          r(
            `Attempt to set \`Module.${a}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`,
          );
        },
      });
  }
  function u(a) {
    return () =>
      l(
        !1,
        `call to '${a}' via reference taken before Wasm module initialization`,
      );
  }
  function sa(a) {
    Object.getOwnPropertyDescriptor(k, a) ||
      Object.defineProperty(k, a, {
        configurable: !0,
        get() {
          var b = `'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          ("FS_createPath" !== a &&
            "FS_createDataFile" !== a &&
            "FS_createPreloadedFile" !== a &&
            "FS_preloadFile" !== a &&
            "FS_unlink" !== a &&
            "addRunDependency" !== a &&
            "FS_createLazyFile" !== a &&
            "FS_createDevice" !== a &&
            "removeRunDependency" !== a) ||
            (b +=
              ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
          r(b);
        },
      });
  }
  var ta,
    ua,
    C,
    D,
    E,
    va,
    F,
    t,
    wa,
    xa,
    G,
    ya,
    za = !1;
  function Aa() {
    var a = Ba.buffer;
    C = new Int8Array(a);
    E = new Int16Array(a);
    D = new Uint8Array(a);
    va = new Uint16Array(a);
    F = new Int32Array(a);
    t = new Uint32Array(a);
    wa = new Float32Array(a);
    xa = new Float64Array(a);
    G = new BigInt64Array(a);
    ya = new BigUint64Array(a);
  }
  l(
    globalThis.Int32Array &&
      globalThis.Float64Array &&
      Int32Array.prototype.subarray &&
      Int32Array.prototype.set,
    "JS engine does not provide full typed array support",
  );
  function r(a) {
    k.onAbort?.(a);
    a = "Aborted(" + a + ")";
    n(a);
    ja = !0;
    a = new WebAssembly.RuntimeError(a);
    ua?.(a);
    throw a;
  }
  function H(a, b) {
    return (...c) => {
      l(za, `native function \`${a}\` called before runtime initialization`);
      var d = Ca[a];
      l(d, `exported native function \`${a}\` not found`);
      l(
        c.length <= b,
        `native function \`${a}\` called with ${c.length} args but expects ${b}`,
      );
      return d(...c);
    };
  }
  var Da;
  async function Ea(a) {
    if (!ia) {
      try {
        var b = await da(a);
        return new Uint8Array(b);
      } catch {}
    }
    if (a == Da && ia) {
      a = new Uint8Array(ia);
    } else {
      if (ea) {
        a = ea(a);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    }
    return a;
  }
  async function Fa(a, b) {
    try {
      var c = await Ea(a);
      return await WebAssembly.instantiate(c, b);
    } catch (d) {
      n(`failed to asynchronously prepare wasm: ${d}`),
        fa(a) &&
          n(
            `warning: Loading from a file URI (${a}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`,
          ),
        r(d);
    }
  }
  async function Ga(a) {
    var b = Da;
    if (!ia) {
      try {
        var c = fetch(b, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(c, a);
      } catch (d) {
        n(`wasm streaming compile failed: ${d}`),
          n("falling back to ArrayBuffer instantiation");
      }
    }
    return Fa(b, a);
  }
  var Ha = (a) => {
      for (; 0 < a.length; ) {
        a.shift()(k);
      }
    },
    Ia = [],
    Ja = [],
    Ka = () => {
      var a = k.preRun.shift();
      Ja.push(a);
    },
    oa = (a) => {
      l("number" === typeof a, `ptrToString expects a number, got ${typeof a}`);
      return "0x" + (a >>> 0).toString(16).padStart(8, "0");
    },
    La = (a) => {
      La.ra || (La.ra = {});
      La.ra[a] || ((La.ra[a] = 1), n(a));
    };
  class Ma {
    constructor(a) {
      this.l = a - 24;
    }
  }
  var Na = 0,
    I = () => {
      l(void 0 != Oa);
      var a = F[+Oa >> 2];
      Oa += 4;
      return a;
    },
    Pa = (a, b) => {
      for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e
          ? a.splice(d, 1)
          : ".." === e
            ? (a.splice(d, 1), c++)
            : c && (a.splice(d, 1), c--);
      }
      if (b) {
        for (; c; c--) {
          a.unshift("..");
        }
      }
      return a;
    },
    Qa = (a) => {
      var b = "/" === a.charAt(0),
        c = "/" === a.slice(-1);
      (a = Pa(
        a.split("/").filter((d) => !!d),
        !b,
      ).join("/")) ||
        b ||
        (a = ".");
      a && c && (a += "/");
      return (b ? "/" : "") + a;
    },
    Ra = (a) => {
      var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
        .exec(a)
        .slice(1);
      a = b[0];
      b = b[1];
      if (!a && !b) {
        return ".";
      }
      b &&= b.slice(0, -1);
      return a + b;
    },
    Sa = () => (a) => crypto.getRandomValues(a),
    Ta = (a) => {
      (Ta = Sa())(a);
    },
    Ua = (...a) => {
      for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
        c = 0 <= d ? a[d] : "/";
        if ("string" != typeof c) {
          throw new TypeError("Arguments to path.resolve must be strings");
        }
        if (!c) {
          return "";
        }
        b = c + "/" + b;
        c = "/" === c.charAt(0);
      }
      b = Pa(
        b.split("/").filter((e) => !!e),
        !c,
      ).join("/");
      return (c ? "/" : "") + b || ".";
    },
    Va = new TextDecoder(),
    Wa = (a, b, c, d) => {
      c = b + c;
      if (d) {
        return c;
      }
      for (; a[b] && !(b >= c); ) {
        ++b;
      }
      return b;
    },
    Xa = (a) => {
      var b = Wa(a, 0);
      return Va.decode(
        a.buffer ? a.subarray(0, b) : new Uint8Array(a.slice(0, b)),
      );
    },
    Ya = [],
    Za = (a) => {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        127 >= d
          ? b++
          : 2047 >= d
            ? (b += 2)
            : 55296 <= d && 57343 >= d
              ? ((b += 4), ++c)
              : (b += 3);
      }
      return b;
    },
    $a = [];
  function ab(a, b) {
    $a[a] = { input: [], output: [], R: b };
    bb(a, cb);
  }
  var cb = {
      open(a) {
        var b = $a[a.node.ba];
        if (!b) {
          throw new J(43);
        }
        a.o = b;
        a.seekable = !1;
      },
      close(a) {
        a.o.R.fa(a.o);
      },
      fa(a) {
        a.o.R.fa(a.o);
      },
      read(a, b, c, d) {
        if (!a.o || !a.o.R.va) {
          throw new J(60);
        }
        for (var e = 0, f = 0; f < d; f++) {
          try {
            var g = a.o.R.va(a.o);
          } catch (h) {
            throw new J(29);
          }
          if (void 0 === g && 0 === e) {
            throw new J(6);
          }
          if (null === g || void 0 === g) {
            break;
          }
          e++;
          b[c + f] = g;
        }
        e && (a.node.T = Date.now());
        return e;
      },
      write(a, b, c, d) {
        if (!a.o || !a.o.R.pa) {
          throw new J(60);
        }
        try {
          for (var e = 0; e < d; e++) {
            a.o.R.pa(a.o, b[c + e]);
          }
        } catch (f) {
          throw new J(29);
        }
        d && (a.node.H = a.node.F = Date.now());
        return e;
      },
    },
    db = {
      va() {
        return Ya.length ? Ya.shift() : null;
      },
      pa(a, b) {
        null === b || 10 === b
          ? (ha(Xa(a.output)), (a.output = []))
          : 0 != b && a.output.push(b);
      },
      fa(a) {
        0 < a.output?.length && (ha(Xa(a.output)), (a.output = []));
      },
      Qa() {
        return {
          hb: 25856,
          jb: 5,
          gb: 191,
          ib: 35387,
          fb: [
            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ],
        };
      },
      Ra() {
        return 0;
      },
      Sa() {
        return [24, 80];
      },
    },
    eb = {
      pa(a, b) {
        null === b || 10 === b
          ? (n(Xa(a.output)), (a.output = []))
          : 0 != b && a.output.push(b);
      },
      fa(a) {
        0 < a.output?.length && (n(Xa(a.output)), (a.output = []));
      },
    },
    K = {
      N: null,
      P() {
        return K.createNode(null, "/", 16895, 0);
      },
      createNode(a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440)) {
          throw new J(63);
        }
        K.N ||
          (K.N = {
            dir: {
              node: {
                L: K.i.L,
                O: K.i.O,
                $: K.i.$,
                ja: K.i.ja,
                Ca: K.i.Ca,
                Ea: K.i.Ea,
                Da: K.i.Da,
                qa: K.i.qa,
                la: K.i.la,
              },
              stream: { M: K.h.M },
            },
            file: {
              node: { L: K.i.L, O: K.i.O },
              stream: {
                M: K.h.M,
                read: K.h.read,
                write: K.h.write,
                ya: K.h.ya,
                Aa: K.h.Aa,
              },
            },
            link: { node: { L: K.i.L, O: K.i.O, ca: K.i.ca }, stream: {} },
            ta: { node: { L: K.i.L, O: K.i.O }, stream: fb },
          });
        c = gb(a, b, c, d);
        16384 === (c.mode & 61440)
          ? ((c.i = K.N.dir.node), (c.h = K.N.dir.stream), (c.j = {}))
          : 32768 === (c.mode & 61440)
            ? ((c.i = K.N.file.node),
              (c.h = K.N.file.stream),
              (c.u = 0),
              (c.j = null))
            : 40960 === (c.mode & 61440)
              ? ((c.i = K.N.link.node), (c.h = K.N.link.stream))
              : 8192 === (c.mode & 61440) &&
                ((c.i = K.N.ta.node), (c.h = K.N.ta.stream));
        c.T = c.H = c.F = Date.now();
        a && ((a.j[b] = c), (a.T = a.H = a.F = c.T));
        return c;
      },
      mb(a) {
        return a.j
          ? a.j.subarray
            ? a.j.subarray(0, a.u)
            : new Uint8Array(a.j)
          : new Uint8Array(0);
      },
      i: {
        L(a) {
          var b = {};
          b.Ia = 8192 === (a.mode & 61440) ? a.id : 1;
          b.Oa = a.id;
          b.mode = a.mode;
          b.Va = 1;
          b.uid = 0;
          b.Ma = 0;
          b.ba = a.ba;
          16384 === (a.mode & 61440)
            ? (b.size = 4096)
            : 32768 === (a.mode & 61440)
              ? (b.size = a.u)
              : 40960 === (a.mode & 61440)
                ? (b.size = a.link.length)
                : (b.size = 0);
          b.T = new Date(a.T);
          b.H = new Date(a.H);
          b.F = new Date(a.F);
          b.Fa = 4096;
          b.Ga = Math.ceil(b.size / b.Fa);
          return b;
        },
        O(a, b) {
          for (var c of ["mode", "atime", "mtime", "ctime"]) {
            null != b[c] && (a[c] = b[c]);
          }
          void 0 !== b.size &&
            ((b = b.size),
            a.u != b &&
              (0 == b
                ? ((a.j = null), (a.u = 0))
                : ((c = a.j),
                  (a.j = new Uint8Array(b)),
                  c && a.j.set(c.subarray(0, Math.min(b, a.u))),
                  (a.u = b))));
        },
        $() {
          throw new J(44);
        },
        ja(a, b, c, d) {
          return K.createNode(a, b, c, d);
        },
        Ca(a, b, c) {
          try {
            var d = hb(b, c);
          } catch (f) {}
          if (d) {
            if (16384 === (a.mode & 61440)) {
              for (var e in d.j) {
                throw new J(55);
              }
            }
            e = ib(d.parent.id, d.name);
            if (L[e] === d) {
              L[e] = d.X;
            } else {
              for (e = L[e]; e; ) {
                if (e.X === d) {
                  e.X = d.X;
                  break;
                }
                e = e.X;
              }
            }
          }
          delete a.parent.j[a.name];
          b.j[c] = a;
          a.name = c;
          b.F = b.H = a.parent.F = a.parent.H = Date.now();
        },
        Ea(a, b) {
          delete a.j[b];
          a.F = a.H = Date.now();
        },
        Da(a, b) {
          var c = hb(a, b),
            d;
          for (d in c.j) {
            throw new J(55);
          }
          delete a.j[b];
          a.F = a.H = Date.now();
        },
        qa(a) {
          return [".", "..", ...Object.keys(a.j)];
        },
        la(a, b, c) {
          a = K.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        },
        ca(a) {
          if (40960 !== (a.mode & 61440)) {
            throw new J(28);
          }
          return a.link;
        },
      },
      h: {
        read(a, b, c, d, e) {
          var f = a.node.j;
          if (e >= a.node.u) {
            return 0;
          }
          a = Math.min(a.node.u - e, d);
          l(0 <= a);
          if (8 < a && f.subarray) {
            b.set(f.subarray(e, e + a), c);
          } else {
            for (d = 0; d < a; d++) {
              b[c + d] = f[e + d];
            }
          }
          return a;
        },
        write(a, b, c, d, e, f) {
          l(!(b instanceof ArrayBuffer));
          b.buffer === C.buffer && (f = !1);
          if (!d) {
            return 0;
          }
          a = a.node;
          a.H = a.F = Date.now();
          if (b.subarray && (!a.j || a.j.subarray)) {
            if (f) {
              return (
                l(
                  0 === e,
                  "canOwn must imply no weird position inside the file",
                ),
                (a.j = b.subarray(c, c + d)),
                (a.u = d)
              );
            }
            if (0 === a.u && 0 === e) {
              return (a.j = b.slice(c, c + d)), (a.u = d);
            }
            if (e + d <= a.u) {
              return a.j.set(b.subarray(c, c + d), e), d;
            }
          }
          f = e + d;
          var g = a.j ? a.j.length : 0;
          g >= f ||
            ((f = Math.max(f, (g * (1048576 > g ? 2.0 : 1.125)) >>> 0)),
            0 != g && (f = Math.max(f, 256)),
            (g = a.j),
            (a.j = new Uint8Array(f)),
            0 < a.u && a.j.set(g.subarray(0, a.u), 0));
          if (a.j.subarray && b.subarray) {
            a.j.set(b.subarray(c, c + d), e);
          } else {
            for (f = 0; f < d; f++) {
              a.j[e + f] = b[c + f];
            }
          }
          a.u = Math.max(a.u, e + d);
          return d;
        },
        M(a, b, c) {
          1 === c
            ? (b += a.position)
            : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.u);
          if (0 > b) {
            throw new J(28);
          }
          return b;
        },
        ya(a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) {
            throw new J(43);
          }
          a = a.node.j;
          if (e & 2 || !a || a.buffer !== C.buffer) {
            d = !0;
            r(
              "internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported",
            );
            e = void 0;
            if (!e) {
              throw new J(48);
            }
            if (a) {
              if (0 < c || c + b < a.length) {
                a.subarray
                  ? (a = a.subarray(c, c + b))
                  : (a = Array.prototype.slice.call(a, c, c + b));
              }
              C.set(a, e);
            }
          } else {
            (d = !1), (e = a.byteOffset);
          }
          return { l: e, eb: d };
        },
        Aa(a, b, c, d) {
          K.h.write(a, b, 0, d, c, !1);
          return 0;
        },
      },
    },
    jb = (a, b) => {
      var c = 0;
      a && (c |= 365);
      b && (c |= 146);
      return c;
    },
    kb = (a, b, c) => {
      l(
        "number" == typeof a,
        `UTF8ToString expects a number (got ${typeof a})`,
      );
      return a ? Va.decode(D.subarray(a, Wa(D, a, b, c))) : "";
    },
    lb = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135,
    },
    nb = null,
    ob = {},
    pb = [],
    qb = 1,
    L = null,
    rb = !1,
    sb = !0,
    tb = {},
    J = class extends Error {
      name = "ErrnoError";
      constructor(a) {
        super(za ? kb(ub(a)) : "");
        this.G = a;
        for (var b in lb) {
          if (lb[b] === a) {
            this.code = b;
            break;
          }
        }
      }
    },
    vb = class {
      ga = {};
      node = null;
      get flags() {
        return this.ga.flags;
      }
      set flags(a) {
        this.ga.flags = a;
      }
      get position() {
        return this.ga.position;
      }
      set position(a) {
        this.ga.position = a;
      }
    },
    wb = class {
      i = {};
      h = {};
      ka = null;
      constructor(a, b, c, d) {
        a ||= this;
        this.parent = a;
        this.P = a.P;
        this.id = qb++;
        this.name = b;
        this.mode = c;
        this.ba = d;
        this.T = this.H = this.F = Date.now();
      }
      get read() {
        return 365 === (this.mode & 365);
      }
      set read(a) {
        a ? (this.mode |= 365) : (this.mode &= -366);
      }
      get write() {
        return 146 === (this.mode & 146);
      }
      set write(a) {
        a ? (this.mode |= 146) : (this.mode &= -147);
      }
    };
  function M(a, b = {}) {
    if (!a) {
      throw new J(44);
    }
    b.ma ?? (b.ma = !0);
    "/" === a.charAt(0) || (a = "//" + a);
    var c = 0;
    a: for (; 40 > c; c++) {
      a = a.split("/").filter((h) => !!h);
      for (var d = nb, e = "/", f = 0; f < a.length; f++) {
        var g = f === a.length - 1;
        if (g && b.parent) {
          break;
        }
        if ("." !== a[f]) {
          if (".." === a[f]) {
            if (((e = Ra(e)), d === d.parent)) {
              a = e + "/" + a.slice(f + 1).join("/");
              c--;
              continue a;
            } else {
              d = d.parent;
            }
          } else {
            e = Qa(e + "/" + a[f]);
            try {
              d = hb(d, a[f]);
            } catch (h) {
              if (44 === h?.G && g && b.Wa) {
                return { path: e };
              }
              throw h;
            }
            !d.ka || (g && !b.ma) || (d = d.ka.root);
            if (40960 === (d.mode & 61440) && (!g || b.ea)) {
              if (!d.i.ca) {
                throw new J(52);
              }
              d = d.i.ca(d);
              "/" === d.charAt(0) || (d = Ra(e) + "/" + d);
              a = d + "/" + a.slice(f + 1).join("/");
              continue a;
            }
          }
        }
      }
      return { path: e, node: d };
    }
    throw new J(32);
  }
  function ib(a, b) {
    for (var c = 0, d = 0; d < b.length; d++) {
      c = ((c << 5) - c + b.charCodeAt(d)) | 0;
    }
    return ((a + c) >>> 0) % L.length;
  }
  function hb(a, b) {
    var c =
      16384 === (a.mode & 61440) ? ((c = xb(a, "x")) ? c : a.i.$ ? 0 : 2) : 54;
    if (c) {
      throw new J(c);
    }
    for (c = L[ib(a.id, b)]; c; c = c.X) {
      var d = c.name;
      if (c.parent.id === a.id && d === b) {
        return c;
      }
    }
    return a.i.$(a, b);
  }
  function gb(a, b, c, d) {
    l("object" == typeof a);
    a = new wb(a, b, c, d);
    b = ib(a.parent.id, a.name);
    a.X = L[b];
    return (L[b] = a);
  }
  function yb(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b;
  }
  function xb(a, b) {
    if (sb) {
      return 0;
    }
    if (!b.includes("r") || a.mode & 292) {
      if (
        (b.includes("w") && !(a.mode & 146)) ||
        (b.includes("x") && !(a.mode & 73))
      ) {
        return 2;
      }
    } else {
      return 2;
    }
    return 0;
  }
  function zb(a, b) {
    if (16384 !== (a.mode & 61440)) {
      return 54;
    }
    try {
      return hb(a, b), 20;
    } catch (c) {}
    return xb(a, "wx");
  }
  function Ab(a) {
    if (!a) {
      throw new J(63);
    }
    return a;
  }
  function N(a) {
    a = pb[a];
    if (!a) {
      throw new J(8);
    }
    return a;
  }
  function Bb(a, b = -1) {
    l(-1 <= b);
    a = Object.assign(new vb(), a);
    if (-1 == b) {
      a: {
        for (b = 0; 4096 >= b; b++) {
          if (!pb[b]) {
            break a;
          }
        }
        throw new J(33);
      }
    }
    a.B = b;
    return (pb[b] = a);
  }
  function Cb(a, b = -1) {
    a = Bb(a, b);
    a.h?.lb?.(a);
    return a;
  }
  function Db(a, b) {
    var c = null?.h.O,
      d = c ? null : a;
    c ??= a.i.O;
    Ab(c);
    c(d, b);
  }
  var fb = {
    open(a) {
      a.h = ob[a.node.ba].h;
      a.h.open?.(a);
    },
    M() {
      throw new J(70);
    },
  };
  function bb(a, b) {
    ob[a] = { h: b };
  }
  function Eb(a, b) {
    if ("string" == typeof a) {
      throw a;
    }
    var c = "/" === b,
      d = !b;
    if (c && nb) {
      throw new J(10);
    }
    if (!c && !d) {
      var e = M(b, { ma: !1 });
      b = e.path;
      e = e.node;
      if (e.ka) {
        throw new J(10);
      }
      if (16384 !== (e.mode & 61440)) {
        throw new J(54);
      }
    }
    b = { type: a, nb: {}, za: b, Ua: [] };
    a = a.P(b);
    a.P = b;
    b.root = a;
    c ? (nb = a) : e && ((e.ka = b), e.P && e.P.Ua.push(b));
  }
  function Fb(a, b, c) {
    var d = M(a, { parent: !0 }).node;
    a = a && a.match(/([^\/]+|\/)\/*$/)[1];
    if (!a) {
      throw new J(28);
    }
    if ("." === a || ".." === a) {
      throw new J(20);
    }
    var e = zb(d, a);
    if (e) {
      throw new J(e);
    }
    if (!d.i.ja) {
      throw new J(63);
    }
    return d.i.ja(d, a, b, c);
  }
  function O(a) {
    return Fb(a, 16895, 0);
  }
  function Gb(a, b, c) {
    "undefined" == typeof c && ((c = b), (b = 438));
    Fb(a, b | 8192, c);
  }
  function Hb(a, b) {
    if (!Ua(a)) {
      throw new J(44);
    }
    var c = M(b, { parent: !0 }).node;
    if (!c) {
      throw new J(44);
    }
    b = b && b.match(/([^\/]+|\/)\/*$/)[1];
    var d = zb(c, b);
    if (d) {
      throw new J(d);
    }
    if (!c.i.la) {
      throw new J(63);
    }
    c.i.la(c, b, a);
  }
  function Ib(a, b) {
    a = M(a, { ea: !b }).node;
    return Ab(a.i.L)(a);
  }
  function Jb(a, b, c = 438) {
    if ("" === a) {
      throw new J(44);
    }
    if ("string" == typeof b) {
      var d = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[b];
      if ("undefined" == typeof d) {
        throw Error(`Unknown file open mode: ${b}`);
      }
      b = d;
    }
    c = b & 64 ? (c & 4095) | 32768 : 0;
    if ("object" == typeof a) {
      d = a;
    } else {
      var e = a.endsWith("/");
      a = M(a, { ea: !(b & 131072), Wa: !0 });
      d = a.node;
      a = a.path;
    }
    var f = !1;
    if (b & 64) {
      if (d) {
        if (b & 128) {
          throw new J(20);
        }
      } else {
        if (e) {
          throw new J(31);
        }
        d = Fb(a, c | 511, 0);
        f = !0;
      }
    }
    if (!d) {
      throw new J(44);
    }
    8192 === (d.mode & 61440) && (b &= -513);
    if (b & 65536 && 16384 !== (d.mode & 61440)) {
      throw new J(54);
    }
    if (
      !f &&
      (e = d
        ? 40960 === (d.mode & 61440)
          ? 32
          : 16384 === (d.mode & 61440) && ("r" !== yb(b) || b & 576)
            ? 31
            : xb(d, yb(b))
        : 44)
    ) {
      throw new J(e);
    }
    if (b & 512 && !f) {
      e = d;
      e = "string" == typeof e ? M(e, { ea: !0 }).node : e;
      if (16384 === (e.mode & 61440)) {
        throw new J(31);
      }
      if (32768 !== (e.mode & 61440)) {
        throw new J(28);
      }
      var g = xb(e, "w");
      if (g) {
        throw new J(g);
      }
      Db(e, { size: 0, timestamp: Date.now() });
    }
    b &= -131713;
    a: {
      for (e = d; ; ) {
        if (e === e.parent) {
          e = e.P.za;
          var h = h ? ("/" !== e[e.length - 1] ? `${e}/${h}` : e + h) : e;
          break a;
        }
        h = h ? `${e.name}/${h}` : e.name;
        e = e.parent;
      }
    }
    h = Bb({
      node: d,
      path: h,
      flags: b,
      seekable: !0,
      position: 0,
      h: d.h,
      bb: [],
      error: !1,
    });
    h.h.open && h.h.open(h);
    f &&
      ((c &= 511),
      (d = "string" == typeof d ? M(d, { ea: !0 }).node : d),
      Db(d, {
        mode: (c & 4095) | (d.mode & -4096),
        F: Date.now(),
        kb: void 0,
      }));
    !k.logReadFiles || b & 1 || a in tb || (tb[a] = 1);
    return h;
  }
  function Kb(a, b, c) {
    if (null === a.B) {
      throw new J(8);
    }
    if (!a.seekable || !a.h.M) {
      throw new J(70);
    }
    if (0 != c && 1 != c && 2 != c) {
      throw new J(28);
    }
    a.position = a.h.M(a, b, c);
    a.bb = [];
  }
  function Q(a, b, c) {
    a = Qa("/dev/" + a);
    var d = jb(!!b, !!c);
    Q.xa ?? (Q.xa = 64);
    var e = (Q.xa++ << 8) | 0;
    bb(e, {
      open(f) {
        f.seekable = !1;
      },
      close() {
        c?.buffer?.length && c(10);
      },
      read(f, g, h, m) {
        for (var p = 0, q = 0; q < m; q++) {
          try {
            var v = b();
          } catch (w) {
            throw new J(29);
          }
          if (void 0 === v && 0 === p) {
            throw new J(6);
          }
          if (null === v || void 0 === v) {
            break;
          }
          p++;
          g[h + q] = v;
        }
        p && (f.node.T = Date.now());
        return p;
      },
      write(f, g, h, m) {
        for (var p = 0; p < m; p++) {
          try {
            c(g[h + p]);
          } catch (q) {
            throw new J(29);
          }
        }
        m && (f.node.H = f.node.F = Date.now());
        return p;
      },
    });
    Gb(a, d, e);
  }
  var R = {};
  function Lb(a, b, c) {
    if ("/" === b.charAt(0)) {
      return b;
    }
    a = -100 === a ? "/" : N(a).path;
    if (0 == b.length) {
      if (!c) {
        throw new J(44);
      }
      return a;
    }
    return a + "/" + b;
  }
  function Mb(a, b) {
    t[a >> 2] = b.Ia;
    t[(a + 4) >> 2] = b.mode;
    t[(a + 8) >> 2] = b.Va;
    t[(a + 12) >> 2] = b.uid;
    t[(a + 16) >> 2] = b.Ma;
    t[(a + 20) >> 2] = b.ba;
    G[(a + 24) >> 3] = BigInt(b.size);
    F[(a + 32) >> 2] = 4096;
    F[(a + 36) >> 2] = b.Ga;
    var c = b.T.getTime(),
      d = b.H.getTime(),
      e = b.F.getTime();
    G[(a + 40) >> 3] = BigInt(Math.floor(c / 1000));
    t[(a + 48) >> 2] = (c % 1000) * 1e6;
    G[(a + 56) >> 3] = BigInt(Math.floor(d / 1000));
    t[(a + 64) >> 2] = (d % 1000) * 1e6;
    G[(a + 72) >> 3] = BigInt(Math.floor(e / 1000));
    t[(a + 80) >> 2] = (e % 1000) * 1e6;
    G[(a + 88) >> 3] = BigInt(b.Oa);
    return 0;
  }
  var Oa = void 0,
    S = (a) => {
      for (var b = ""; ; ) {
        var c = D[a++];
        if (!c) {
          return b;
        }
        b += String.fromCharCode(c);
      }
    },
    Nb = {},
    T = {},
    Ob = {},
    U = class extends Error {
      constructor(a) {
        super(a);
        this.name = "BindingError";
      }
    },
    Pb = (a) => {
      throw new U(a);
    };
  function Qb(a, b, c = {}) {
    var d = b.name;
    if (!a) {
      throw new U(`type "${d}" must have a positive integer typeid pointer`);
    }
    if (T.hasOwnProperty(a)) {
      if (c.Na) {
        return;
      }
      throw new U(`Cannot register type '${d}' twice`);
    }
    T[a] = b;
    delete Ob[a];
    Nb.hasOwnProperty(a) && ((b = Nb[a]), delete Nb[a], b.forEach((e) => e()));
  }
  function V(a, b, c = {}) {
    return Qb(a, b, c);
  }
  var Rb = (a, b, c) => {
      switch (b) {
        case 1:
          return c ? (d) => C[d] : (d) => D[d];
        case 2:
          return c ? (d) => E[d >> 1] : (d) => va[d >> 1];
        case 4:
          return c ? (d) => F[d >> 2] : (d) => t[d >> 2];
        case 8:
          return c ? (d) => G[d >> 3] : (d) => ya[d >> 3];
        default:
          throw new TypeError(`invalid integer width (${b}): ${a}`);
      }
    },
    W = (a) => {
      if (null === a) {
        return "null";
      }
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b
        ? a.toString()
        : "" + a;
    },
    Sb = (a, b, c, d) => {
      if (b < c || b > d) {
        throw new TypeError(
          `Passing a number "${W(b)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${c}, ${d}]!`,
        );
      }
    },
    Tb = (a) => {
      throw new U(a.g.s.m.name + " instance already deleted");
    },
    Ub = !1,
    Vb = () => {},
    Wb = (a, b, c) => {
      if (b === c) {
        return a;
      }
      if (void 0 === c.D) {
        return null;
      }
      a = Wb(a, b, c.D);
      return null === a ? null : c.Ja(a);
    },
    Xb = {},
    Yb = {},
    Zb = (a, b) => {
      if (void 0 === b) {
        throw new U("ptr should not be undefined");
      }
      for (; a.D; ) {
        (b = a.da(b)), (a = a.D);
      }
      return Yb[b];
    },
    $b = class extends Error {
      constructor(a) {
        super(a);
        this.name = "InternalError";
      }
    },
    bc = (a, b) => {
      if (!b.s || !b.l) {
        throw new $b("makeClassHandle requires ptr and ptrType");
      }
      if (!!b.I !== !!b.A) {
        throw new $b("Both smartPtrType and smartPtr must be specified");
      }
      b.count = { value: 1 };
      return ac(Object.create(a, { g: { value: b, writable: !0 } }));
    };
  function cc(a) {
    function b() {
      return this.ia
        ? bc(this.m.W, { s: this.Xa, l: c, I: this, A: a })
        : bc(this.m.W, { s: this, l: a });
    }
    var c = this.La(a);
    if (!c) {
      return this.ua(a), null;
    }
    var d = Zb(this.m, c);
    if (void 0 !== d) {
      if (0 === d.g.count.value) {
        return (d.g.l = c), (d.g.A = a), d.clone();
      }
      d = d.clone();
      this.ua(a);
      return d;
    }
    d = this.m.Ka(c);
    d = Xb[d];
    if (!d) {
      return b.call(this);
    }
    d = this.ha ? d.Ha : d.pointerType;
    var e = Wb(c, this.m, d.m);
    return null === e
      ? b.call(this)
      : this.ia
        ? bc(d.m.W, { s: d, l: e, I: this, A: a })
        : bc(d.m.W, { s: d, l: e });
  }
  var ac = (a) => {
      if (!globalThis.FinalizationRegistry) {
        return (ac = (b) => b), a;
      }
      Ub = new FinalizationRegistry((b) => {
        console.warn(b.Ta);
        b = b.g;
        --b.count.value;
        0 === b.count.value && (b.A ? b.I.U(b.A) : b.s.m.U(b.l));
      });
      ac = (b) => {
        var c = b.g;
        if (c.A) {
          var d = { g: c };
          c = Error(
            `Embind found a leaked C++ instance ${c.s.m.name} <${oa(c.l)}>.\n` +
              "We'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated",
          );
          "captureStackTrace" in Error && Error.captureStackTrace(c, cc);
          d.Ta = c.stack.replace(/^Error: /, "");
          Ub.register(b, d, b);
        }
        return b;
      };
      Vb = (b) => {
        Ub.unregister(b);
      };
      return ac(a);
    },
    dc = [];
  function ec() {}
  var fc = (a, b) => Object.defineProperty(b, "name", { value: a }),
    gc = (a, b, c) => {
      if (void 0 === a[b].v) {
        var d = a[b];
        a[b] = function (...e) {
          if (!a[b].v.hasOwnProperty(e.length)) {
            throw new U(
              `Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${a[b].v})!`,
            );
          }
          return a[b].v[e.length].apply(this, e);
        };
        a[b].v = [];
        a[b].v[d.Y] = d;
      }
    },
    hc = (a, b, c) => {
      if (k.hasOwnProperty(a)) {
        if (void 0 === c || (void 0 !== k[a].v && void 0 !== k[a].v[c])) {
          throw new U(`Cannot register public name '${a}' twice`);
        }
        gc(k, a, a);
        if (k[a].v.hasOwnProperty(c)) {
          throw new U(
            `Cannot register multiple overloads of a function with the same number of arguments (${c})!`,
          );
        }
        k[a].v[c] = b;
      } else {
        (k[a] = b), (k[a].Y = c);
      }
    },
    ic = (a) => {
      l("string" === typeof a);
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? `_${a}` : a;
    };
  function jc(a, b, c, d, e, f, g, h) {
    this.name = a;
    this.constructor = b;
    this.W = c;
    this.U = d;
    this.D = e;
    this.Ka = f;
    this.da = g;
    this.Ja = h;
    this.Ya = [];
  }
  var kc = (a, b, c) => {
    for (; b !== c; ) {
      if (!b.da) {
        throw new U(
          `Expected null or instance of ${c.name}, got an instance of ${b.name}`,
        );
      }
      a = b.da(a);
      b = b.D;
    }
    return a;
  };
  function lc(a, b) {
    if (null === b) {
      if (this.oa) {
        throw new U(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!b.g) {
      throw new U(`Cannot pass "${W(b)}" as a ${this.name}`);
    }
    if (!b.g.l) {
      throw new U(
        `Cannot pass deleted object as a pointer of type ${this.name}`,
      );
    }
    return kc(b.g.l, b.g.s.m, this.m);
  }
  function mc(a, b) {
    if (null === b) {
      if (this.oa) {
        throw new U(`null is not a valid ${this.name}`);
      }
      if (this.ia) {
        var c = this.Za();
        null !== a && a.push(this.U, c);
        return c;
      }
      return 0;
    }
    if (!b || !b.g) {
      throw new U(`Cannot pass "${W(b)}" as a ${this.name}`);
    }
    if (!b.g.l) {
      throw new U(
        `Cannot pass deleted object as a pointer of type ${this.name}`,
      );
    }
    if (!this.ha && b.g.s.ha) {
      throw new U(
        `Cannot convert argument of type ${b.g.I ? b.g.I.name : b.g.s.name} to parameter type ${this.name}`,
      );
    }
    c = kc(b.g.l, b.g.s.m, this.m);
    if (this.ia) {
      if (void 0 === b.g.A) {
        throw new U("Passing raw pointer to smart pointer is illegal");
      }
      switch (this.ab) {
        case 0:
          if (b.g.I === this) {
            c = b.g.A;
          } else {
            throw new U(
              `Cannot convert argument of type ${b.g.I ? b.g.I.name : b.g.s.name} to parameter type ${this.name}`,
            );
          }
          break;
        case 1:
          c = b.g.A;
          break;
        case 2:
          if (b.g.I === this) {
            c = b.g.A;
          } else {
            var d = b.clone();
            c = this.$a(
              c,
              nc(() => d["delete"]()),
            );
            null !== a && a.push(this.U, c);
          }
          break;
        default:
          throw new U("Unsupported sharing policy");
      }
    }
    return c;
  }
  function oc(a, b) {
    if (null === b) {
      if (this.oa) {
        throw new U(`null is not a valid ${this.name}`);
      }
      return 0;
    }
    if (!b.g) {
      throw new U(`Cannot pass "${W(b)}" as a ${this.name}`);
    }
    if (!b.g.l) {
      throw new U(
        `Cannot pass deleted object as a pointer of type ${this.name}`,
      );
    }
    if (b.g.s.ha) {
      throw new U(
        `Cannot convert argument of type ${b.g.s.name} to parameter type ${this.name}`,
      );
    }
    return kc(b.g.l, b.g.s.m, this.m);
  }
  function qc(a) {
    return this.C(t[a >> 2]);
  }
  function rc(a, b, c, d, e, f, g, h, m, p, q) {
    this.name = a;
    this.m = b;
    this.oa = c;
    this.ha = d;
    this.ia = e;
    this.Xa = f;
    this.ab = g;
    this.Ba = h;
    this.Za = m;
    this.$a = p;
    this.U = q;
    e || void 0 !== b.D
      ? (this.J = mc)
      : ((this.J = d ? lc : oc), (this.K = null));
  }
  var sc = (a, b, c) => {
      if (!k.hasOwnProperty(a)) {
        throw new $b("Replacing nonexistent public symbol");
      }
      void 0 !== k[a].v && void 0 !== c
        ? (k[a].v[c] = b)
        : ((k[a] = b), (k[a].Y = c));
    },
    tc = [],
    vc = (a) => {
      var b = tc[a];
      b || (tc[a] = b = uc.get(a));
      l(
        uc.get(a) == b,
        "JavaScript-side Wasm function table mirror is out of date!",
      );
      return b;
    },
    X = (a, b, c = !1) => {
      l(!c, "Async bindings are only supported with JSPI.");
      a = S(a);
      c = vc(b);
      if ("function" != typeof c) {
        throw new U(`unknown function pointer with signature ${a}: ${b}`);
      }
      return c;
    };
  class wc extends Error {}
  var yc = (a) => {
      a = xc(a);
      var b = S(a);
      Y(a);
      return b;
    },
    zc = (a, b) => {
      function c(f) {
        e[f] || T[f] || (Ob[f] ? Ob[f].forEach(c) : (d.push(f), (e[f] = !0)));
      }
      var d = [],
        e = {};
      b.forEach(c);
      throw new wc(`${a}: ` + d.map(yc).join([", "]));
    },
    Ac = (a, b, c) => {
      function d(h) {
        h = c(h);
        if (h.length !== a.length) {
          throw new $b("Mismatched type converter count");
        }
        for (var m = 0; m < a.length; ++m) {
          V(a[m], h[m]);
        }
      }
      a.forEach((h) => (Ob[h] = b));
      var e = Array(b.length),
        f = [],
        g = 0;
      for (let [h, m] of b.entries()) {
        T.hasOwnProperty(m)
          ? (e[h] = T[m])
          : (f.push(m),
            Nb.hasOwnProperty(m) || (Nb[m] = []),
            Nb[m].push(() => {
              e[h] = T[m];
              ++g;
              g === f.length && d(e);
            }));
      }
      0 === f.length && d(e);
    },
    Bc = (a, b) => {
      for (var c = [], d = 0; d < a; d++) {
        c.push(t[(b + 4 * d) >> 2]);
      }
      return c;
    },
    Cc = (a) => {
      for (; a.length; ) {
        var b = a.pop();
        a.pop()(b);
      }
    };
  function Dc(a) {
    for (var b = 1; b < a.length; ++b) {
      if (null !== a[b] && void 0 === a[b].K) {
        return !0;
      }
    }
    return !1;
  }
  function Ec(a, b, c, d, e) {
    (a < b || a > c) &&
      e(
        `function ${d} called with ${a} arguments, expected ${b == c ? b : `${b} to ${c}`}`,
      );
  }
  function Fc(a, b, c, d, e, f) {
    var g = b.length;
    if (2 > g) {
      throw new U(
        "argTypes array size mismatch! Must at least get return value and 'this' types!",
      );
    }
    l(!f, "Async bindings are only supported with JSPI.");
    var h = null !== b[1] && null !== c,
      m = Dc(b);
    c = !b[0].wa;
    var p = g - 2;
    var q = b.length - 2;
    for (var v = b.length - 1; 2 <= v && b[v].optional; --v) {
      q--;
    }
    v = b[0];
    var w = b[1];
    d = [a, Pb, d, e, Cc, v.C.bind(v), w?.J.bind(w)];
    for (e = 2; e < g; ++e) {
      (v = b[e]), d.push(v.J.bind(v));
    }
    if (!m) {
      for (e = h ? 1 : 2; e < b.length; ++e) {
        null !== b[e].K && d.push(b[e].K);
      }
    }
    d.push(Ec, q, p);
    m = Dc(b);
    p = b.length - 2;
    q = [];
    e = ["fn"];
    h && e.push("thisWired");
    for (g = 0; g < p; ++g) {
      q.push(`arg${g}`), e.push(`arg${g}Wired`);
    }
    q = q.join(",");
    e = e.join(",");
    q =
      `return function (${q}) {\n` +
      "checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);\n";
    m && (q += "var destructors = [];\n");
    w = m ? "destructors" : "null";
    v =
      "humanName throwBindingError invoker fn runDestructors fromRetWire toClassParamWire".split(
        " ",
      );
    h && (q += `var thisWired = toClassParamWire(${w}, this);\n`);
    for (g = 0; g < p; ++g) {
      var z = `toArg${g}Wire`;
      q += `var arg${g}Wired = ${z}(${w}, arg${g});\n`;
      v.push(z);
    }
    q += (c || f ? "var rv = " : "") + `invoker(${e});\n`;
    if (m) {
      q += "runDestructors(destructors);\n";
    } else {
      for (g = h ? 1 : 2; g < b.length; ++g) {
        (f = 1 === g ? "thisWired" : "arg" + (g - 2) + "Wired"),
          null !== b[g].K && ((q += `${f}_dtor(${f});\n`), v.push(`${f}_dtor`));
      }
    }
    c && (q += "var ret = fromRetWire(rv);\nreturn ret;\n");
    q += "}\n";
    v.push("checkArgCount", "minArgs", "maxArgs");
    q = `if (arguments.length !== ${v.length}){ throw new Error(humanName + "Expected ${v.length} closure arguments " + arguments.length + " given."); }\n${q}`;
    b = new Function(v, q)(...d);
    return fc(a, b);
  }
  var Gc = (a) => {
      a = a.trim();
      const b = a.indexOf("(");
      if (-1 === b) {
        return a;
      }
      l(a.endsWith(")"), "Parentheses for argument names should match.");
      return a.slice(0, b);
    },
    Hc = [],
    Z = [0, 1, , 1, null, 1, !0, 1, !1, 1],
    Ic = (a) => {
      9 < a &&
        0 === --Z[a + 1] &&
        (l(void 0 !== Z[a], "Decref for unallocated handle."),
        (Z[a] = void 0),
        Hc.push(a));
    },
    Jc = (a) => {
      if (!a) {
        throw new U(`Cannot use deleted val. handle = ${a}`);
      }
      l(2 === a || (void 0 !== Z[a] && 0 === a % 2), `invalid handle: ${a}`);
      return Z[a];
    },
    nc = (a) => {
      switch (a) {
        case void 0:
          return 2;
        case null:
          return 4;
        case !0:
          return 6;
        case !1:
          return 8;
        default:
          const b = Hc.pop() || Z.length;
          Z[b] = a;
          Z[b + 1] = 1;
          return b;
      }
    },
    Kc = {
      name: "emscripten::val",
      C: (a) => {
        var b = Jc(a);
        Ic(a);
        return b;
      },
      J: (a, b) => nc(b),
      S: qc,
      K: null,
    },
    Lc = (a, b) => {
      switch (b) {
        case 4:
          return function (c) {
            return this.C(wa[c >> 2]);
          };
        case 8:
          return function (c) {
            return this.C(xa[c >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${b}): ${a}`);
      }
    },
    Mc = Object.assign({ optional: !0 }, Kc),
    Nc = (a, b, c) => {
      l(
        "number" == typeof c,
        "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
      );
      var d = D;
      l(
        "string" === typeof a,
        `stringToUTF8Array expects a string (got ${typeof a})`,
      );
      if (0 < c) {
        var e = b;
        c = b + c - 1;
        for (var f = 0; f < a.length; ++f) {
          var g = a.codePointAt(f);
          if (127 >= g) {
            if (b >= c) {
              break;
            }
            d[b++] = g;
          } else if (2047 >= g) {
            if (b + 1 >= c) {
              break;
            }
            d[b++] = 192 | (g >> 6);
            d[b++] = 128 | (g & 63);
          } else if (65535 >= g) {
            if (b + 2 >= c) {
              break;
            }
            d[b++] = 224 | (g >> 12);
            d[b++] = 128 | ((g >> 6) & 63);
            d[b++] = 128 | (g & 63);
          } else {
            if (b + 3 >= c) {
              break;
            }
            1114111 < g &&
              La(
                "Invalid Unicode code point " +
                  oa(g) +
                  " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).",
              );
            d[b++] = 240 | (g >> 18);
            d[b++] = 128 | ((g >> 12) & 63);
            d[b++] = 128 | ((g >> 6) & 63);
            d[b++] = 128 | (g & 63);
            f++;
          }
        }
        d[b] = 0;
        a = b - e;
      } else {
        a = 0;
      }
      return a;
    },
    Oc = new TextDecoder("utf-16le"),
    Pc = (a, b, c) => {
      l(
        0 == a % 2,
        "Pointer passed to UTF16ToString must be aligned to two bytes!",
      );
      a >>= 1;
      return Oc.decode(va.subarray(a, Wa(va, a, b / 2, c)));
    },
    Qc = (a, b, c) => {
      l(
        0 == b % 2,
        "Pointer passed to stringToUTF16 must be aligned to two bytes!",
      );
      l(
        "number" == typeof c,
        "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
      );
      c ??= 2147483647;
      if (2 > c) {
        return 0;
      }
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;
      for (var e = 0; e < c; ++e) {
        (E[b >> 1] = a.charCodeAt(e)), (b += 2);
      }
      E[b >> 1] = 0;
      return b - d;
    },
    Rc = (a) => 2 * a.length,
    Sc = (a, b, c) => {
      l(
        0 == a % 4,
        "Pointer passed to UTF32ToString must be aligned to four bytes!",
      );
      var d = "";
      a >>= 2;
      for (var e = 0; !(e >= b / 4); e++) {
        var f = t[a + e];
        if (!f && !c) {
          break;
        }
        d += String.fromCodePoint(f);
      }
      return d;
    },
    Tc = (a, b, c) => {
      l(
        0 == b % 4,
        "Pointer passed to stringToUTF32 must be aligned to four bytes!",
      );
      l(
        "number" == typeof c,
        "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!",
      );
      c ??= 2147483647;
      if (4 > c) {
        return 0;
      }
      var d = b;
      c = d + c - 4;
      for (var e = 0; e < a.length; ++e) {
        var f = a.codePointAt(e);
        65535 < f && e++;
        F[b >> 2] = f;
        b += 4;
        if (b + 4 > c) {
          break;
        }
      }
      F[b >> 2] = 0;
      return b - d;
    },
    Uc = (a) => {
      for (var b = 0, c = 0; c < a.length; ++c) {
        65535 < a.codePointAt(c) && c++, (b += 4);
      }
      return b;
    },
    Vc = [],
    Wc = (a) => {
      var b = Vc.length;
      Vc.push(a);
      return b;
    },
    Xc = (a, b) => {
      for (var c = Array(a), d = 0; d < a; ++d) {
        var e = d,
          f = t[(b + 4 * d) >> 2],
          g = T[f];
        if (void 0 === g) {
          throw (
            ((a = `${`parameter ${d}`} has unknown type ${yc(f)}`), new U(a))
          );
        }
        c[e] = g;
      }
      return c;
    },
    Yc = (a, b, c) => {
      var d = [];
      a = a(d, c);
      d.length && (t[b >> 2] = nc(d));
      return a;
    },
    Zc = {},
    $c = (a) => {
      var b = Zc[a];
      return void 0 === b ? S(a) : b;
    },
    ad = {},
    cd = () => {
      if (!bd) {
        var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG:
              (globalThis.navigator?.language ?? "C").replace("-", "_") +
              ".UTF-8",
            _: aa || "./this.program",
          },
          b;
        for (b in ad) {
          void 0 === ad[b] ? delete a[b] : (a[b] = ad[b]);
        }
        var c = [];
        for (b in a) {
          c.push(`${b}=${a[b]}`);
        }
        bd = c;
      }
      return bd;
    },
    bd;
  L = Array(4096);
  Eb(K, "/");
  O("/tmp");
  O("/home");
  O("/home/web_user");
  (function () {
    O("/dev");
    bb(259, { read: () => 0, write: (d, e, f, g) => g, M: () => 0 });
    Gb("/dev/null", 259);
    ab(1280, db);
    ab(1536, eb);
    Gb("/dev/tty", 1280);
    Gb("/dev/tty1", 1536);
    var a = new Uint8Array(1024),
      b = 0,
      c = () => {
        0 === b && (Ta(a), (b = a.byteLength));
        return a[--b];
      };
    Q("random", c);
    Q("urandom", c);
    O("/dev/shm");
    O("/dev/shm/tmp");
  })();
  (function () {
    O("/proc");
    var a = O("/proc/self");
    O("/proc/self/fd");
    Eb(
      {
        P() {
          var b = gb(a, "fd", 16895, 73);
          b.h = { M: K.h.M };
          b.i = {
            $(c, d) {
              c = +d;
              var e = N(c);
              c = {
                parent: null,
                P: { za: "fake" },
                i: { ca: () => e.path },
                id: c + 1,
              };
              return (c.parent = c);
            },
            qa() {
              return Array.from(pb.entries())
                .filter(([, c]) => c)
                .map(([c]) => c.toString());
            },
          };
          return b;
        },
      },
      "/proc/self/fd",
    );
  })();
  (() => {
    let a = ec.prototype;
    Object.assign(a, {
      isAliasOf: function (c) {
        if (!(this instanceof ec && c instanceof ec)) {
          return !1;
        }
        var d = this.g.s.m,
          e = this.g.l;
        c.g = c.g;
        var f = c.g.s.m;
        for (c = c.g.l; d.D; ) {
          (e = d.da(e)), (d = d.D);
        }
        for (; f.D; ) {
          (c = f.da(c)), (f = f.D);
        }
        return d === f && e === c;
      },
      clone: function () {
        this.g.l || Tb(this);
        if (this.g.aa) {
          return (this.g.count.value += 1), this;
        }
        var c = ac,
          d = Object,
          e = d.create,
          f = Object.getPrototypeOf(this),
          g = this.g;
        c = c(
          e.call(d, f, {
            g: {
              value: {
                count: g.count,
                Z: g.Z,
                aa: g.aa,
                l: g.l,
                s: g.s,
                A: g.A,
                I: g.I,
              },
            },
          }),
        );
        c.g.count.value += 1;
        c.g.Z = !1;
        return c;
      },
      ["delete"]() {
        this.g.l || Tb(this);
        if (this.g.Z && !this.g.aa) {
          throw new U("Object already scheduled for deletion");
        }
        Vb(this);
        var c = this.g;
        --c.count.value;
        0 === c.count.value && (c.A ? c.I.U(c.A) : c.s.m.U(c.l));
        this.g.aa || ((this.g.A = void 0), (this.g.l = void 0));
      },
      isDeleted: function () {
        return !this.g.l;
      },
      deleteLater: function () {
        this.g.l || Tb(this);
        if (this.g.Z && !this.g.aa) {
          throw new U("Object already scheduled for deletion");
        }
        dc.push(this);
        this.g.Z = !0;
        return this;
      },
    });
    const b = Symbol.dispose;
    b && (a[b] = a["delete"]);
  })();
  Object.assign(rc.prototype, {
    La(a) {
      this.Ba && (a = this.Ba(a));
      return a;
    },
    ua(a) {
      this.U?.(a);
    },
    S: qc,
    C: cc,
  });
  l(10 === Z.length);
  k.print && (ha = k.print);
  k.printErr && (n = k.printErr);
  k.wasmBinary && (ia = k.wasmBinary);
  Object.getOwnPropertyDescriptor(k, "fetchSettings") &&
    r(
      "`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API",
    );
  k.thisProgram && (aa = k.thisProgram);
  l(
    "undefined" == typeof k.memoryInitializerPrefixURL,
    "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead",
  );
  l(
    "undefined" == typeof k.pthreadMainPrefixURL,
    "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead",
  );
  l(
    "undefined" == typeof k.cdInitializerPrefixURL,
    "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead",
  );
  l(
    "undefined" == typeof k.filePackagePrefixURL,
    "Module.filePackagePrefixURL option was removed, use Module.locateFile instead",
  );
  l("undefined" == typeof k.read, "Module.read option was removed");
  l(
    "undefined" == typeof k.readAsync,
    "Module.readAsync option was removed (modify readAsync in JS)",
  );
  l(
    "undefined" == typeof k.readBinary,
    "Module.readBinary option was removed (modify readBinary in JS)",
  );
  l(
    "undefined" == typeof k.setWindowTitle,
    "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)",
  );
  l(
    "undefined" == typeof k.TOTAL_MEMORY,
    "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY",
  );
  l(
    "undefined" == typeof k.ENVIRONMENT,
    "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)",
  );
  l(
    "undefined" == typeof k.STACK_SIZE,
    "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time",
  );
  l(
    "undefined" == typeof k.wasmMemory,
    "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally",
  );
  l(
    "undefined" == typeof k.INITIAL_MEMORY,
    "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically",
  );
  if (k.preInit) {
    for (
      "function" == typeof k.preInit && (k.preInit = [k.preInit]);
      0 < k.preInit.length;

    ) {
      k.preInit.shift()();
    }
  }
  ra("preInit");
  "writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 zeroMemory withStackSave inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr readEmAsmArgs jstoi_q autoResumeAudioContext getDynCaller dynCall runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle HandleAllocator addOnInit addOnPostCtor addOnPreMain addOnExit STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS ccall cwrap convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction intArrayToString stringToAscii stringToNewUTF8 writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags safeSetTimeout setImmediateWrapped safeRequestAnimationFrame clearImmediateWrapped registerPostMainLoop registerPreMainLoop getPromise makePromise idsToPromises makePromiseCallback findMatchingCatch Browser_asyncPrepareDataCounter isLeapYear ydayFromDate arraySum addDays getSocketFromFD getSocketAddress FS_mkdirTree _setNetworkCallback heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw webgl_enable_EXT_polygon_offset_clamp webgl_enable_EXT_clip_control webgl_enable_WEBGL_polygon_mode emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory allocateUTF8 allocateUTF8OnStack demangle stackTrace getNativeTypeSize getFunctionArgsName createJsInvokerSignature getEnumValueType PureVirtualError registerInheritedInstance unregisterInheritedInstance getInheritedInstanceCount getLiveInheritedInstances enumReadValueFromPointer setDelayFunction validateThis count_emval_handles"
    .split(" ")
    .forEach(function (a) {
      sa(a);
    });
  "run out err callMain abort wasmExports HEAPF32 HEAPF64 HEAP8 HEAPU8 HEAP16 HEAPU16 HEAP32 HEAPU32 HEAP64 HEAPU64 writeStackCookie checkStackCookie INT53_MAX INT53_MIN bigintToI53Checked stackSave stackRestore stackAlloc createNamedFunction ptrToString exitJS getHeapMax growMemory ENV ERRNO_CODES strError DNS Protocols Sockets timers warnOnce readEmAsmArgsArray getExecutableName handleException keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable wasmMemory getUniqueRunDependency noExitRuntime addRunDependency removeRunDependency addOnPreRun addOnPostRun freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString AsciiToString UTF16Decoder UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 stringToUTF8OnStack JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings doReadv doWritev initRandomFill randomFill emSetImmediate emClearImmediate_deps emClearImmediate promiseMap uncaughtExceptionCount exceptionLast exceptionCaught ExceptionInfo Browser requestFullscreen requestFullScreen setCanvasSize getUserMedia createContext getPreloadedImageData__data wget MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE SYSCALLS preloadPlugins FS_createPreloadedFile FS_preloadFile FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_unlink FS_createPath FS_createDevice FS_readFile FS FS_root FS_mounts FS_devices FS_streams FS_nextInode FS_nameTable FS_currentPath FS_initialized FS_ignorePermissions FS_filesystems FS_syncFSRequests FS_readFiles FS_lookupPath FS_getPath FS_hashName FS_hashAddNode FS_hashRemoveNode FS_lookupNode FS_createNode FS_destroyNode FS_isRoot FS_isMountpoint FS_isFile FS_isDir FS_isLink FS_isChrdev FS_isBlkdev FS_isFIFO FS_isSocket FS_flagsToPermissionString FS_nodePermissions FS_mayLookup FS_mayCreate FS_mayDelete FS_mayOpen FS_checkOpExists FS_nextfd FS_getStreamChecked FS_getStream FS_createStream FS_closeStream FS_dupStream FS_doSetAttr FS_chrdev_stream_ops FS_major FS_minor FS_makedev FS_registerDevice FS_getDevice FS_getMounts FS_syncfs FS_mount FS_unmount FS_lookup FS_mknod FS_statfs FS_statfsStream FS_statfsNode FS_create FS_mkdir FS_mkdev FS_symlink FS_rename FS_rmdir FS_readdir FS_readlink FS_stat FS_fstat FS_lstat FS_doChmod FS_chmod FS_lchmod FS_fchmod FS_doChown FS_chown FS_lchown FS_fchown FS_doTruncate FS_truncate FS_ftruncate FS_utime FS_open FS_close FS_isClosed FS_llseek FS_read FS_write FS_mmap FS_msync FS_ioctl FS_writeFile FS_cwd FS_chdir FS_createDefaultDirectories FS_createDefaultDevices FS_createSpecialDirectories FS_createStandardStreams FS_staticInit FS_init FS_quit FS_findObject FS_analyzePath FS_createFile FS_createDataFile FS_forceLoadFile FS_createLazyFile FS_absolutePath FS_createFolder FS_createLink FS_joinPath FS_mmapAlloc FS_standardizePath MEMFS TTY PIPEFS SOCKFS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx print printErr jstoi_s InternalError BindingError throwInternalError throwBindingError registeredTypes awaitingDependencies typeDependencies tupleRegistrations structRegistrations sharedRegisterType whenDependentTypesAreResolved getTypeName getFunctionName heap32VectorToArray requireRegisteredType usesDestructorStack checkArgCount getRequiredArgCount createJsInvoker UnboundTypeError EmValType EmValOptionalType throwUnboundTypeError ensureOverloadTable exposePublicSymbol replacePublicSymbol embindRepr registeredInstances getBasestPointer getInheritedInstance registeredPointers registerType integerReadValueFromPointer floatReadValueFromPointer assertIntegerRange readPointer runDestructors craftInvokerFunction embind__requireFunction genericPointerToWireType constNoSmartPtrRawPointerToWireType nonConstNoSmartPtrRawPointerToWireType init_RegisteredPointer RegisteredPointer RegisteredPointer_fromWireType runDestructor releaseClassHandle finalizationRegistry detachFinalizer_deps detachFinalizer attachFinalizer makeClassHandle init_ClassHandle ClassHandle throwInstanceAlreadyDeleted deletionQueue flushPendingDeletes delayFunction RegisteredClass shallowCopyInternalPointer downcastPointer upcastPointer char_0 char_9 makeLegalFunctionName emval_freelist emval_handles emval_symbols getStringOrSymbol Emval emval_returnValue emval_lookupTypes emval_methodCallers emval_addMethodCaller"
    .split(" ")
    .forEach(sa);
  var xc = u("___getTypeName"),
    dd = u("_malloc"),
    Y = u("_free"),
    ub = u("_strerror");
  k._main = u("_main");
  var la = u("_emscripten_stack_get_end"),
    ed = u("_setThrew"),
    fd = u("_emscripten_stack_init"),
    gd = u("__emscripten_stack_restore"),
    hd = u("_emscripten_stack_get_current"),
    Ba = u("wasmMemory"),
    uc = u("wasmTable"),
    md = {
      __cxa_throw: (a, b, c) => {
        a = new Ma(a);
        t[(a.l + 16) >> 2] = 0;
        t[(a.l + 4) >> 2] = b;
        t[(a.l + 8) >> 2] = c;
        Na++;
        l(
          !1,
          "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.",
        );
      },
      __syscall_fcntl64: function (a, b, c) {
        Oa = c;
        try {
          var d = N(a);
          switch (b) {
            case 0:
              var e = I();
              if (0 > e) {
                break;
              }
              for (; pb[e]; ) {
                e++;
              }
              return Cb(d, e).B;
            case 1:
            case 2:
              return 0;
            case 3:
              return d.flags;
            case 4:
              return (e = I()), (d.flags |= e), 0;
            case 12:
              return (e = I()), (E[(e + 0) >> 1] = 2), 0;
            case 13:
            case 14:
              return 0;
          }
          return -28;
        } catch (f) {
          if ("undefined" == typeof R || "ErrnoError" !== f.name) {
            throw f;
          }
          return -f.G;
        }
      },
      __syscall_fstat64: function (a, b) {
        try {
          var c = N(a),
            d = c.node,
            e = c.h.L;
          a = e ? c : d;
          e ??= d.i.L;
          Ab(e);
          var f = e(a);
          return Mb(b, f);
        } catch (g) {
          if ("undefined" == typeof R || "ErrnoError" !== g.name) {
            throw g;
          }
          return -g.G;
        }
      },
      __syscall_ioctl: function (a, b, c) {
        Oa = c;
        try {
          var d = N(a);
          switch (b) {
            case 21509:
              return d.o ? 0 : -59;
            case 21505:
              if (!d.o) {
                return -59;
              }
              if (d.o.R.Qa) {
                b = [
                  3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ];
                var e = I();
                F[e >> 2] = 25856;
                F[(e + 4) >> 2] = 5;
                F[(e + 8) >> 2] = 191;
                F[(e + 12) >> 2] = 35387;
                for (var f = 0; 32 > f; f++) {
                  C[e + f + 17] = b[f] || 0;
                }
              }
              return 0;
            case 21510:
            case 21511:
            case 21512:
              return d.o ? 0 : -59;
            case 21506:
            case 21507:
            case 21508:
              if (!d.o) {
                return -59;
              }
              if (d.o.R.Ra) {
                for (e = I(), b = [], f = 0; 32 > f; f++) {
                  b.push(C[e + f + 17]);
                }
              }
              return 0;
            case 21519:
              if (!d.o) {
                return -59;
              }
              e = I();
              return (F[e >> 2] = 0);
            case 21520:
              return d.o ? -28 : -59;
            case 21537:
            case 21531:
              e = I();
              if (!d.h.Pa) {
                throw new J(59);
              }
              return d.h.Pa(d, b, e);
            case 21523:
              if (!d.o) {
                return -59;
              }
              d.o.R.Sa &&
                ((f = [24, 80]),
                (e = I()),
                (E[e >> 1] = f[0]),
                (E[(e + 2) >> 1] = f[1]));
              return 0;
            case 21524:
              return d.o ? 0 : -59;
            case 21515:
              return d.o ? 0 : -59;
            default:
              return -28;
          }
        } catch (g) {
          if ("undefined" == typeof R || "ErrnoError" !== g.name) {
            throw g;
          }
          return -g.G;
        }
      },
      __syscall_lstat64: function (a, b) {
        try {
          return (a = kb(a)), Mb(b, Ib(a, !0));
        } catch (c) {
          if ("undefined" == typeof R || "ErrnoError" !== c.name) {
            throw c;
          }
          return -c.G;
        }
      },
      __syscall_newfstatat: function (a, b, c, d) {
        try {
          b = kb(b);
          var e = d & 256,
            f = d & 4096;
          d &= -6401;
          l(!d, `unknown flags in __syscall_newfstatat: ${d}`);
          b = Lb(a, b, f);
          return Mb(c, e ? Ib(b, !0) : Ib(b));
        } catch (g) {
          if ("undefined" == typeof R || "ErrnoError" !== g.name) {
            throw g;
          }
          return -g.G;
        }
      },
      __syscall_openat: function (a, b, c, d) {
        Oa = d;
        try {
          b = kb(b);
          b = Lb(a, b);
          var e = d ? I() : 0;
          return Jb(b, c, e).B;
        } catch (f) {
          if ("undefined" == typeof R || "ErrnoError" !== f.name) {
            throw f;
          }
          return -f.G;
        }
      },
      __syscall_stat64: function (a, b) {
        try {
          return (a = kb(a)), Mb(b, Ib(a));
        } catch (c) {
          if ("undefined" == typeof R || "ErrnoError" !== c.name) {
            throw c;
          }
          return -c.G;
        }
      },
      _abort_js: () => r("native code called abort()"),
      _embind_register_bigint: (a, b, c, d, e) => {
        b = S(b);
        const f = 0n === d;
        let g = (h) => h;
        if (f) {
          const h = 8 * c;
          g = (m) => BigInt.asUintN(h, m);
          e = g(e);
        }
        V(a, {
          name: b,
          C: g,
          J: (h, m) => {
            if ("number" == typeof m) {
              m = BigInt(m);
            } else if ("bigint" != typeof m) {
              throw new TypeError(`Cannot convert "${W(m)}" to ${this.name}`);
            }
            Sb(b, m, d, e);
            return m;
          },
          S: Rb(b, c, !f),
          K: null,
        });
      },
      _embind_register_bool: (a, b, c, d) => {
        b = S(b);
        V(a, {
          name: b,
          C: function (e) {
            return !!e;
          },
          J: function (e, f) {
            return f ? c : d;
          },
          S: function (e) {
            return this.C(D[e]);
          },
          K: null,
        });
      },
      _embind_register_class: (a, b, c, d, e, f, g, h, m, p, q, v, w) => {
        q = S(q);
        f = X(e, f);
        h &&= X(g, h);
        p &&= X(m, p);
        w = X(v, w);
        var z = ic(q);
        hc(z, function () {
          zc(`Cannot construct ${q} due to unbound types`, [d]);
        });
        Ac([a, b, c], d ? [d] : [], (x) => {
          x = x[0];
          if (d) {
            var A = x.m;
            var B = A.W;
          } else {
            B = ec.prototype;
          }
          x = fc(q, function (...mb) {
            if (Object.getPrototypeOf(this) !== P) {
              throw new U(`Use 'new' to construct ${q}`);
            }
            if (void 0 === y.V) {
              throw new U(`${q} has no accessible constructor`);
            }
            var pc = y.V[mb.length];
            if (void 0 === pc) {
              throw new U(
                `Tried to invoke ctor of ${q} with invalid number of parameters (${mb.length}) - expected (${Object.keys(y.V).toString()}) parameters instead!`,
              );
            }
            return pc.apply(this, mb);
          });
          var P = Object.create(B, { constructor: { value: x } });
          x.prototype = P;
          var y = new jc(q, x, P, w, A, f, h, p);
          if (y.D) {
            var na;
            (na = y.D).sa ?? (na.sa = []);
            y.D.sa.push(y);
          }
          A = new rc(q, y, !0, !1, !1);
          na = new rc(q + "*", y, !1, !1, !1);
          B = new rc(q + " const*", y, !1, !0, !1);
          Xb[a] = { pointerType: na, Ha: B };
          sc(z, x);
          return [A, na, B];
        });
      },
      _embind_register_class_constructor: (a, b, c, d, e, f) => {
        l(0 < b);
        var g = Bc(b, c);
        e = X(d, e);
        Ac([], [a], (h) => {
          h = h[0];
          var m = `constructor ${h.name}`;
          void 0 === h.m.V && (h.m.V = []);
          if (void 0 !== h.m.V[b - 1]) {
            throw new U(
              `Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${h.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
            );
          }
          h.m.V[b - 1] = () => {
            zc(`Cannot construct ${h.name} due to unbound types`, g);
          };
          Ac([], g, (p) => {
            p.splice(1, 0, null);
            h.m.V[b - 1] = Fc(m, p, null, e, f);
            return [];
          });
          return [];
        });
      },
      _embind_register_class_function: (a, b, c, d, e, f, g, h, m) => {
        var p = Bc(c, d);
        b = S(b);
        b = Gc(b);
        f = X(e, f, m);
        Ac([], [a], (q) => {
          function v() {
            zc(`Cannot call ${w} due to unbound types`, p);
          }
          q = q[0];
          var w = `${q.name}.${b}`;
          b.startsWith("@@") && (b = Symbol[b.substring(2)]);
          h && q.m.Ya.push(b);
          var z = q.m.W,
            x = z[b];
          void 0 === x ||
          (void 0 === x.v && x.className !== q.name && x.Y === c - 2)
            ? ((v.Y = c - 2), (v.className = q.name), (z[b] = v))
            : (gc(z, b, w), (z[b].v[c - 2] = v));
          Ac([], p, (A) => {
            A = Fc(w, A, q, f, g, m);
            void 0 === z[b].v
              ? ((A.Y = c - 2), (z[b] = A))
              : (z[b].v[c - 2] = A);
            return [];
          });
          return [];
        });
      },
      _embind_register_emval: (a) => V(a, Kc),
      _embind_register_float: (a, b, c) => {
        b = S(b);
        V(a, {
          name: b,
          C: (d) => d,
          J: (d, e) => {
            if ("number" != typeof e && "boolean" != typeof e) {
              throw new TypeError(`Cannot convert ${W(e)} to ${this.name}`);
            }
            return e;
          },
          S: Lc(b, c),
          K: null,
        });
      },
      _embind_register_function: (a, b, c, d, e, f, g) => {
        var h = Bc(b, c);
        a = S(a);
        a = Gc(a);
        e = X(d, e, g);
        hc(
          a,
          function () {
            zc(`Cannot call ${a} due to unbound types`, h);
          },
          b - 1,
        );
        Ac([], h, (m) => {
          sc(a, Fc(a, [m[0], null].concat(m.slice(1)), null, e, f, g), b - 1);
          return [];
        });
      },
      _embind_register_integer: (a, b, c, d, e) => {
        b = S(b);
        let f = (h) => h;
        if (0 === d) {
          var g = 32 - 8 * c;
          f = (h) => (h << g) >>> g;
          e = f(e);
        }
        V(a, {
          name: b,
          C: f,
          J: (h, m) => {
            if ("number" != typeof m && "boolean" != typeof m) {
              throw new TypeError(`Cannot convert "${W(m)}" to ${b}`);
            }
            Sb(b, m, d, e);
            return m;
          },
          S: Rb(b, c, 0 !== d),
          K: null,
        });
      },
      _embind_register_memory_view: (a, b, c) => {
        function d(f) {
          return new e(C.buffer, t[(f + 4) >> 2], t[f >> 2]);
        }
        var e = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          BigInt64Array,
          BigUint64Array,
        ][b];
        c = S(c);
        V(a, { name: c, C: d, S: d }, { Na: !0 });
      },
      _embind_register_optional: (a) => {
        V(a, Mc);
      },
      _embind_register_std_string: (a, b) => {
        b = S(b);
        V(a, {
          name: b,
          C(c) {
            var d = kb(c + 4, t[c >> 2], !0);
            Y(c);
            return d;
          },
          J(c, d) {
            d instanceof ArrayBuffer && (d = new Uint8Array(d));
            var e = "string" == typeof d;
            if (!(e || (ArrayBuffer.isView(d) && 1 == d.BYTES_PER_ELEMENT))) {
              throw new U("Cannot pass non-string to std::string");
            }
            var f = e ? Za(d) : d.length;
            var g = dd(4 + f + 1),
              h = g + 4;
            t[g >> 2] = f;
            e ? Nc(d, h, f + 1) : D.set(d, h);
            null !== c && c.push(Y, g);
            return g;
          },
          S: qc,
          K(c) {
            Y(c);
          },
        });
      },
      _embind_register_std_wstring: (a, b, c) => {
        c = S(c);
        if (2 === b) {
          var d = Pc;
          var e = Qc;
          var f = Rc;
        } else {
          l(4 === b, "only 2-byte and 4-byte strings are currently supported"),
            (d = Sc),
            (e = Tc),
            (f = Uc);
        }
        V(a, {
          name: c,
          C: (g) => {
            var h = d(g + 4, t[g >> 2] * b, !0);
            Y(g);
            return h;
          },
          J: (g, h) => {
            if ("string" != typeof h) {
              throw new U(`Cannot pass non-string to C++ string type ${c}`);
            }
            var m = f(h),
              p = dd(4 + m + b);
            t[p >> 2] = m / b;
            e(h, p + 4, m + b);
            null !== g && g.push(Y, p);
            return p;
          },
          S: qc,
          K(g) {
            Y(g);
          },
        });
      },
      _embind_register_void: (a, b) => {
        b = S(b);
        V(a, { wa: !0, name: b, C: () => {}, J: () => {} });
      },
      _emscripten_throw_longjmp: () => {
        throw Infinity;
      },
      _emval_create_invoker: (a, b, c) => {
        var [d, ...e] = Xc(a, b);
        b = d.J.bind(d);
        var f = e.map((m) => m.S.bind(m));
        a--;
        var g = { toValue: Jc };
        a = f.map((m, p) => {
          var q = `argFromPtr${p}`;
          g[q] = m;
          return `${q}(args${p ? "+" + 8 * p : ""})`;
        });
        switch (c) {
          case 0:
            var h = "toValue(handle)";
            break;
          case 2:
            h = "new (toValue(handle))";
            break;
          case 3:
            h = "";
            break;
          case 1:
            (g.getStringOrSymbol = $c),
              (h = "toValue(handle)[getStringOrSymbol(methodName)]");
        }
        h += `(${a})`;
        d.wa ||
          ((g.toReturnWire = b),
          (g.emval_returnValue = Yc),
          (h = `return emval_returnValue(toReturnWire, destructorsRef, ${h})`));
        h = `return function (handle, methodName, destructorsRef, args) {
  ${h}
  }`;
        c = new Function(Object.keys(g), h)(...Object.values(g));
        h = `methodCaller<(${e.map((m) => m.name)}) => ${d.name}>`;
        return Wc(fc(h, c));
      },
      _emval_decref: Ic,
      _emval_incref: (a) => {
        9 < a && (Z[a + 1] += 1);
      },
      _emval_invoke: (a, b, c, d, e) => Vc[a](b, c, d, e),
      _emval_run_destructors: (a) => {
        var b = Jc(a);
        Cc(b);
        Ic(a);
      },
      _tzset_js: (a, b, c, d) => {
        var e = new Date().getFullYear(),
          f = new Date(e, 0, 1).getTimezoneOffset();
        e = new Date(e, 6, 1).getTimezoneOffset();
        t[a >> 2] = 60 * Math.max(f, e);
        F[b >> 2] = Number(f != e);
        b = (g) => {
          var h = Math.abs(g);
          return `UTC${0 <= g ? "-" : "+"}${String(Math.floor(h / 60)).padStart(2, "0")}${String(h % 60).padStart(2, "0")}`;
        };
        a = b(f);
        b = b(e);
        l(a);
        l(b);
        l(16 >= Za(a), `timezone name truncated to fit in TZNAME_MAX (${a})`);
        l(16 >= Za(b), `timezone name truncated to fit in TZNAME_MAX (${b})`);
        e < f ? (Nc(a, c, 17), Nc(b, d, 17)) : (Nc(a, d, 17), Nc(b, c, 17));
      },
      emscripten_resize_heap: (a) => {
        var b = D.length;
        a >>>= 0;
        l(a > b);
        if (2147483648 < a) {
          return (
            n(
              `Cannot enlarge memory, requested ${a} bytes, but the limit is ${2147483648} bytes!`,
            ),
            !1
          );
        }
        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + 0.2 / c);
          d = Math.min(d, a + 100663296);
          var e = Math,
            f = e.min;
          d = Math.max(a, d);
          l(65536, "alignment argument is required");
          e = f.call(e, 2147483648, 65536 * Math.ceil(d / 65536));
          a: {
            f = e;
            d = Ba.buffer.byteLength;
            try {
              Ba.grow(((f - d + 65535) / 65536) | 0);
              Aa();
              var g = 1;
              break a;
            } catch (h) {
              n(
                `growMemory: Attempted to grow heap from ${d} bytes to ${f} bytes, but got error: ${h}`,
              );
            }
            g = void 0;
          }
          if (g) {
            return !0;
          }
        }
        n(
          `Failed to grow the heap from ${b} bytes to ${e} bytes, not enough memory!`,
        );
        return !1;
      },
      environ_get: (a, b) => {
        var c = 0,
          d = 0,
          e;
        for (e of cd()) {
          var f = b + c;
          t[(a + d) >> 2] = f;
          c += Nc(e, f, Infinity) + 1;
          d += 4;
        }
        return 0;
      },
      environ_sizes_get: (a, b) => {
        var c = cd();
        t[a >> 2] = c.length;
        a = 0;
        for (var d of c) {
          a += Za(d) + 1;
        }
        t[b >> 2] = a;
        return 0;
      },
      fd_close: function (a) {
        try {
          var b = N(a);
          if (null === b.B) {
            throw new J(8);
          }
          b.na && (b.na = null);
          try {
            b.h.close && b.h.close(b);
          } catch (c) {
            throw c;
          } finally {
            pb[b.B] = null;
          }
          b.B = null;
          return 0;
        } catch (c) {
          if ("undefined" == typeof R || "ErrnoError" !== c.name) {
            throw c;
          }
          return c.G;
        }
      },
      fd_read: function (a, b, c, d) {
        try {
          a: {
            var e = N(a);
            a = b;
            for (var f, g = (b = 0); g < c; g++) {
              var h = t[a >> 2],
                m = t[(a + 4) >> 2];
              a += 8;
              var p = e,
                q = h,
                v = m,
                w = f,
                z = C;
              l(0 <= q);
              if (0 > v || 0 > w) {
                throw new J(28);
              }
              if (null === p.B) {
                throw new J(8);
              }
              if (1 === (p.flags & 2097155)) {
                throw new J(8);
              }
              if (16384 === (p.node.mode & 61440)) {
                throw new J(31);
              }
              if (!p.h.read) {
                throw new J(28);
              }
              var x = "undefined" != typeof w;
              if (!x) {
                w = p.position;
              } else if (!p.seekable) {
                throw new J(70);
              }
              var A = p.h.read(p, z, q, v, w);
              x || (p.position += A);
              var B = A;
              if (0 > B) {
                var P = -1;
                break a;
              }
              b += B;
              if (B < m) {
                break;
              }
              "undefined" != typeof f && (f += B);
            }
            P = b;
          }
          t[d >> 2] = P;
          return 0;
        } catch (y) {
          if ("undefined" == typeof R || "ErrnoError" !== y.name) {
            throw y;
          }
          return y.G;
        }
      },
      fd_seek: function (a, b, c, d) {
        b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
        try {
          if (isNaN(b)) {
            return 61;
          }
          var e = N(a);
          Kb(e, b, c);
          G[d >> 3] = BigInt(e.position);
          e.na && 0 === b && 0 === c && (e.na = null);
          return 0;
        } catch (f) {
          if ("undefined" == typeof R || "ErrnoError" !== f.name) {
            throw f;
          }
          return f.G;
        }
      },
      fd_write: function (a, b, c, d) {
        try {
          a: {
            var e = N(a);
            a = b;
            for (var f, g = (b = 0); g < c; g++) {
              var h = t[a >> 2],
                m = t[(a + 4) >> 2];
              a += 8;
              var p = e,
                q = h,
                v = m,
                w = f,
                z = C;
              l(0 <= q);
              if (0 > v || 0 > w) {
                throw new J(28);
              }
              if (null === p.B) {
                throw new J(8);
              }
              if (0 === (p.flags & 2097155)) {
                throw new J(8);
              }
              if (16384 === (p.node.mode & 61440)) {
                throw new J(31);
              }
              if (!p.h.write) {
                throw new J(28);
              }
              p.seekable && p.flags & 1024 && Kb(p, 0, 2);
              var x = "undefined" != typeof w;
              if (!x) {
                w = p.position;
              } else if (!p.seekable) {
                throw new J(70);
              }
              var A = p.h.write(p, z, q, v, w, void 0);
              x || (p.position += A);
              var B = A;
              if (0 > B) {
                var P = -1;
                break a;
              }
              b += B;
              if (B < m) {
                break;
              }
              "undefined" != typeof f && (f += B);
            }
            P = b;
          }
          t[d >> 2] = P;
          return 0;
        } catch (y) {
          if ("undefined" == typeof R || "ErrnoError" !== y.name) {
            throw y;
          }
          return y.G;
        }
      },
      invoke_iii: jd,
      invoke_vii: kd,
      invoke_viiii: ld,
    };
  function ld(a, b, c, d, e) {
    var f = hd();
    try {
      vc(a)(b, c, d, e);
    } catch (g) {
      gd(f);
      if (g !== g + 0) {
        throw g;
      }
      ed(1, 0);
    }
  }
  function jd(a, b, c) {
    var d = hd();
    try {
      return vc(a)(b, c);
    } catch (e) {
      gd(d);
      if (e !== e + 0) {
        throw e;
      }
      ed(1, 0);
    }
  }
  function kd(a, b, c) {
    var d = hd();
    try {
      vc(a)(b, c);
    } catch (e) {
      gd(d);
      if (e !== e + 0) {
        throw e;
      }
      ed(1, 0);
    }
  }
  var nd, Ca;
  Ca = await (async function () {
    function a(d) {
      d = Ca = d.exports;
      l(
        "undefined" != typeof d.__getTypeName,
        "missing Wasm export: __getTypeName",
      );
      l("undefined" != typeof d.malloc, "missing Wasm export: malloc");
      l("undefined" != typeof d.free, "missing Wasm export: free");
      l("undefined" != typeof d.strerror, "missing Wasm export: strerror");
      l(
        "undefined" != typeof d.__main_argc_argv,
        "missing Wasm export: __main_argc_argv",
      );
      l("undefined" != typeof d.fflush, "missing Wasm export: fflush");
      l(
        "undefined" != typeof d.emscripten_stack_get_end,
        "missing Wasm export: emscripten_stack_get_end",
      );
      l(
        "undefined" != typeof d.emscripten_stack_get_base,
        "missing Wasm export: emscripten_stack_get_base",
      );
      l("undefined" != typeof d.setThrew, "missing Wasm export: setThrew");
      l(
        "undefined" != typeof d.emscripten_stack_init,
        "missing Wasm export: emscripten_stack_init",
      );
      l(
        "undefined" != typeof d.emscripten_stack_get_free,
        "missing Wasm export: emscripten_stack_get_free",
      );
      l(
        "undefined" != typeof d._emscripten_stack_restore,
        "missing Wasm export: _emscripten_stack_restore",
      );
      l(
        "undefined" != typeof d._emscripten_stack_alloc,
        "missing Wasm export: _emscripten_stack_alloc",
      );
      l(
        "undefined" != typeof d.emscripten_stack_get_current,
        "missing Wasm export: emscripten_stack_get_current",
      );
      l("undefined" != typeof d.memory, "missing Wasm export: memory");
      l(
        "undefined" != typeof d.__indirect_function_table,
        "missing Wasm export: __indirect_function_table",
      );
      xc = H("__getTypeName", 1);
      dd = H("malloc", 1);
      Y = H("free", 1);
      ub = H("strerror", 1);
      k._main = H("__main_argc_argv", 2);
      la = d.emscripten_stack_get_end;
      ed = H("setThrew", 2);
      fd = d.emscripten_stack_init;
      gd = d._emscripten_stack_restore;
      hd = d.emscripten_stack_get_current;
      Ba = d.memory;
      uc = d.__indirect_function_table;
      Aa();
      return Ca;
    }
    var b = k,
      c = { env: md, wasi_snapshot_preview1: md };
    if (k.instantiateWasm) {
      return new Promise((d, e) => {
        try {
          k.instantiateWasm(c, (f, g) => {
            d(a(f, g));
          });
        } catch (f) {
          n(`Module.instantiateWasm callback failed with error: ${f}`), e(f);
        }
      });
    }
    Da ??= k.locateFile
      ? k.locateFile
        ? k.locateFile("jxl.wasm", ca)
        : ca + "jxl.wasm"
      : new URL("jxl.wasm", import.meta.url).href;
    return (function (d) {
      l(
        k === b,
        "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?",
      );
      b = null;
      return a(d.instance);
    })(await Ga(c));
  })();
  (function () {
    function a() {
      l(!nd);
      nd = !0;
      k.calledRun = !0;
      if (!ja) {
        l(!za);
        za = !0;
        ma();
        if (!k.noFSInit && !rb) {
          l(
            !rb,
            "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)",
          );
          rb = !0;
          c ??= k.stdin;
          d ??= k.stdout;
          b ??= k.stderr;
          c ? Q("stdin", c) : Hb("/dev/tty", "/dev/stdin");
          d ? Q("stdout", null, d) : Hb("/dev/tty", "/dev/stdout");
          b ? Q("stderr", null, b) : Hb("/dev/tty1", "/dev/stderr");
          var b = Jb("/dev/stdin", 0);
          var c = Jb("/dev/stdout", 1);
          var d = Jb("/dev/stderr", 1);
          l(0 === b.B, `invalid handle for stdin (${b.B})`);
          l(1 === c.B, `invalid handle for stdout (${c.B})`);
          l(2 === d.B, `invalid handle for stderr (${d.B})`);
        }
        Ca.__wasm_call_ctors();
        sb = !1;
        ma();
        ta?.(k);
        k.onRuntimeInitialized?.();
        ra("onRuntimeInitialized");
        ma();
        if (k.postRun) {
          for (
            "function" == typeof k.postRun && (k.postRun = [k.postRun]);
            k.postRun.length;

          ) {
            (b = k.postRun.shift()), Ia.push(b);
          }
        }
        ra("postRun");
        Ha(Ia);
      }
    }
    fd();
    ka();
    if (k.preRun) {
      for (
        "function" == typeof k.preRun && (k.preRun = [k.preRun]);
        k.preRun.length;

      ) {
        Ka();
      }
    }
    ra("preRun");
    Ha(Ja);
    k.setStatus
      ? (k.setStatus("Running..."),
        setTimeout(() => {
          setTimeout(() => k.setStatus(""), 1);
          a();
        }, 1))
      : a();
    ma();
  })();
  za
    ? (moduleRtn = k)
    : (moduleRtn = new Promise((a, b) => {
        ta = a;
        ua = b;
      }));
  for (const a of Object.keys(k)) {
    a in moduleArg ||
      Object.defineProperty(moduleArg, a, {
        configurable: !0,
        get() {
          r(
            `Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`,
          );
        },
      });
  }
  return moduleRtn;
}

// Export using a UMD style export, or ES6 exports if selected
export default jxl;
