(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = i(s);
    fetch(s.href, c);
  }
})();
function im(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ed = { exports: {} },
  Ci = {};
var ov;
function px() {
  if (ov) return Ci;
  ov = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function i(o, s, c) {
    var d = null;
    if (
      (c !== void 0 && (d = "" + c),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      c = {};
      for (var m in s) m !== "key" && (c[m] = s[m]);
    } else c = s;
    return (
      (s = c.ref),
      { $$typeof: n, type: o, key: d, ref: s !== void 0 ? s : null, props: c }
    );
  }
  return ((Ci.Fragment = r), (Ci.jsx = i), (Ci.jsxs = i), Ci);
}
var sv;
function yx() {
  return (sv || ((sv = 1), (ed.exports = px())), ed.exports);
}
var R = yx(),
  td = { exports: {} },
  Ee = {};
var uv;
function gx() {
  if (uv) return Ee;
  uv = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function S(U) {
    return U === null || typeof U != "object"
      ? null
      : ((U = (b && U[b]) || U["@@iterator"]),
        typeof U == "function" ? U : null);
  }
  var C = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    E = {};
  function _(U, X, le) {
    ((this.props = U),
      (this.context = X),
      (this.refs = E),
      (this.updater = le || C));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (U, X) {
      if (typeof U != "object" && typeof U != "function" && U != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, U, X, "setState");
    }),
    (_.prototype.forceUpdate = function (U) {
      this.updater.enqueueForceUpdate(this, U, "forceUpdate");
    }));
  function N() {}
  N.prototype = _.prototype;
  function w(U, X, le) {
    ((this.props = U),
      (this.context = X),
      (this.refs = E),
      (this.updater = le || C));
  }
  var z = (w.prototype = new N());
  ((z.constructor = w), x(z, _.prototype), (z.isPureReactComponent = !0));
  var M = Array.isArray;
  function j() {}
  var O = { H: null, A: null, T: null, S: null },
    B = Object.prototype.hasOwnProperty;
  function D(U, X, le) {
    var ee = le.ref;
    return {
      $$typeof: n,
      type: U,
      key: X,
      ref: ee !== void 0 ? ee : null,
      props: le,
    };
  }
  function H(U, X) {
    return D(U.type, X, U.props);
  }
  function L(U) {
    return typeof U == "object" && U !== null && U.$$typeof === n;
  }
  function q(U) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      U.replace(/[=:]/g, function (le) {
        return X[le];
      })
    );
  }
  var Y = /\/+/g;
  function G(U, X) {
    return typeof U == "object" && U !== null && U.key != null
      ? q("" + U.key)
      : X.toString(36);
  }
  function ne(U) {
    switch (U.status) {
      case "fulfilled":
        return U.value;
      case "rejected":
        throw U.reason;
      default:
        switch (
          (typeof U.status == "string"
            ? U.then(j, j)
            : ((U.status = "pending"),
              U.then(
                function (X) {
                  U.status === "pending" &&
                    ((U.status = "fulfilled"), (U.value = X));
                },
                function (X) {
                  U.status === "pending" &&
                    ((U.status = "rejected"), (U.reason = X));
                },
              )),
          U.status)
        ) {
          case "fulfilled":
            return U.value;
          case "rejected":
            throw U.reason;
        }
    }
    throw U;
  }
  function Q(U, X, le, ee, ue) {
    var ce = typeof U;
    (ce === "undefined" || ce === "boolean") && (U = null);
    var oe = !1;
    if (U === null) oe = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (U.$$typeof) {
            case n:
            case r:
              oe = !0;
              break;
            case y:
              return ((oe = U._init), Q(oe(U._payload), X, le, ee, ue));
          }
      }
    if (oe)
      return (
        (ue = ue(U)),
        (oe = ee === "" ? "." + G(U, 0) : ee),
        M(ue)
          ? ((le = ""),
            oe != null && (le = oe.replace(Y, "$&/") + "/"),
            Q(ue, X, le, "", function (ge) {
              return ge;
            }))
          : ue != null &&
            (L(ue) &&
              (ue = H(
                ue,
                le +
                  (ue.key == null || (U && U.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(Y, "$&/") + "/") +
                  oe,
              )),
            X.push(ue)),
        1
      );
    oe = 0;
    var he = ee === "" ? "." : ee + ":";
    if (M(U))
      for (var de = 0; de < U.length; de++)
        ((ee = U[de]), (ce = he + G(ee, de)), (oe += Q(ee, X, le, ce, ue)));
    else if (((de = S(U)), typeof de == "function"))
      for (U = de.call(U), de = 0; !(ee = U.next()).done; )
        ((ee = ee.value),
          (ce = he + G(ee, de++)),
          (oe += Q(ee, X, le, ce, ue)));
    else if (ce === "object") {
      if (typeof U.then == "function") return Q(ne(U), X, le, ee, ue);
      throw (
        (X = String(U)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(U).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return oe;
  }
  function K(U, X, le) {
    if (U == null) return U;
    var ee = [],
      ue = 0;
    return (
      Q(U, ee, "", "", function (ce) {
        return X.call(le, ce, ue++);
      }),
      ee
    );
  }
  function F(U) {
    if (U._status === -1) {
      var X = U._result;
      ((X = X()),
        X.then(
          function (le) {
            (U._status === 0 || U._status === -1) &&
              ((U._status = 1), (U._result = le));
          },
          function (le) {
            (U._status === 0 || U._status === -1) &&
              ((U._status = 2), (U._result = le));
          },
        ),
        U._status === -1 && ((U._status = 0), (U._result = X)));
    }
    if (U._status === 1) return U._result.default;
    throw U._result;
  }
  var W =
      typeof reportError == "function"
        ? reportError
        : function (U) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var X = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof U == "object" &&
                  U !== null &&
                  typeof U.message == "string"
                    ? String(U.message)
                    : String(U),
                error: U,
              });
              if (!window.dispatchEvent(X)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", U);
              return;
            }
            console.error(U);
          },
    se = {
      map: K,
      forEach: function (U, X, le) {
        K(
          U,
          function () {
            X.apply(this, arguments);
          },
          le,
        );
      },
      count: function (U) {
        var X = 0;
        return (
          K(U, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (U) {
        return (
          K(U, function (X) {
            return X;
          }) || []
        );
      },
      only: function (U) {
        if (!L(U))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return U;
      },
    };
  return (
    (Ee.Activity = g),
    (Ee.Children = se),
    (Ee.Component = _),
    (Ee.Fragment = i),
    (Ee.Profiler = s),
    (Ee.PureComponent = w),
    (Ee.StrictMode = o),
    (Ee.Suspense = h),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (U) {
        return O.H.useMemoCache(U);
      },
    }),
    (Ee.cache = function (U) {
      return function () {
        return U.apply(null, arguments);
      };
    }),
    (Ee.cacheSignal = function () {
      return null;
    }),
    (Ee.cloneElement = function (U, X, le) {
      if (U == null)
        throw Error(
          "The argument must be a React element, but you passed " + U + ".",
        );
      var ee = x({}, U.props),
        ue = U.key;
      if (X != null)
        for (ce in (X.key !== void 0 && (ue = "" + X.key), X))
          !B.call(X, ce) ||
            ce === "key" ||
            ce === "__self" ||
            ce === "__source" ||
            (ce === "ref" && X.ref === void 0) ||
            (ee[ce] = X[ce]);
      var ce = arguments.length - 2;
      if (ce === 1) ee.children = le;
      else if (1 < ce) {
        for (var oe = Array(ce), he = 0; he < ce; he++)
          oe[he] = arguments[he + 2];
        ee.children = oe;
      }
      return D(U.type, ue, ee);
    }),
    (Ee.createContext = function (U) {
      return (
        (U = {
          $$typeof: d,
          _currentValue: U,
          _currentValue2: U,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (U.Provider = U),
        (U.Consumer = { $$typeof: c, _context: U }),
        U
      );
    }),
    (Ee.createElement = function (U, X, le) {
      var ee,
        ue = {},
        ce = null;
      if (X != null)
        for (ee in (X.key !== void 0 && (ce = "" + X.key), X))
          B.call(X, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (ue[ee] = X[ee]);
      var oe = arguments.length - 2;
      if (oe === 1) ue.children = le;
      else if (1 < oe) {
        for (var he = Array(oe), de = 0; de < oe; de++)
          he[de] = arguments[de + 2];
        ue.children = he;
      }
      if (U && U.defaultProps)
        for (ee in ((oe = U.defaultProps), oe))
          ue[ee] === void 0 && (ue[ee] = oe[ee]);
      return D(U, ce, ue);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (U) {
      return { $$typeof: m, render: U };
    }),
    (Ee.isValidElement = L),
    (Ee.lazy = function (U) {
      return { $$typeof: y, _payload: { _status: -1, _result: U }, _init: F };
    }),
    (Ee.memo = function (U, X) {
      return { $$typeof: p, type: U, compare: X === void 0 ? null : X };
    }),
    (Ee.startTransition = function (U) {
      var X = O.T,
        le = {};
      O.T = le;
      try {
        var ee = U(),
          ue = O.S;
        (ue !== null && ue(le, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(j, W));
      } catch (ce) {
        W(ce);
      } finally {
        (X !== null && le.types !== null && (X.types = le.types), (O.T = X));
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return O.H.useCacheRefresh();
    }),
    (Ee.use = function (U) {
      return O.H.use(U);
    }),
    (Ee.useActionState = function (U, X, le) {
      return O.H.useActionState(U, X, le);
    }),
    (Ee.useCallback = function (U, X) {
      return O.H.useCallback(U, X);
    }),
    (Ee.useContext = function (U) {
      return O.H.useContext(U);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (U, X) {
      return O.H.useDeferredValue(U, X);
    }),
    (Ee.useEffect = function (U, X) {
      return O.H.useEffect(U, X);
    }),
    (Ee.useEffectEvent = function (U) {
      return O.H.useEffectEvent(U);
    }),
    (Ee.useId = function () {
      return O.H.useId();
    }),
    (Ee.useImperativeHandle = function (U, X, le) {
      return O.H.useImperativeHandle(U, X, le);
    }),
    (Ee.useInsertionEffect = function (U, X) {
      return O.H.useInsertionEffect(U, X);
    }),
    (Ee.useLayoutEffect = function (U, X) {
      return O.H.useLayoutEffect(U, X);
    }),
    (Ee.useMemo = function (U, X) {
      return O.H.useMemo(U, X);
    }),
    (Ee.useOptimistic = function (U, X) {
      return O.H.useOptimistic(U, X);
    }),
    (Ee.useReducer = function (U, X, le) {
      return O.H.useReducer(U, X, le);
    }),
    (Ee.useRef = function (U) {
      return O.H.useRef(U);
    }),
    (Ee.useState = function (U) {
      return O.H.useState(U);
    }),
    (Ee.useSyncExternalStore = function (U, X, le) {
      return O.H.useSyncExternalStore(U, X, le);
    }),
    (Ee.useTransition = function () {
      return O.H.useTransition();
    }),
    (Ee.version = "19.2.0"),
    Ee
  );
}
var cv;
function su() {
  return (cv || ((cv = 1), (td.exports = gx())), td.exports);
}
var T = su();
const j0 = im(T);
var nd = { exports: {} },
  Ti = {},
  ad = { exports: {} },
  rd = {};
var fv;
function vx() {
  return (
    fv ||
      ((fv = 1),
      (function (n) {
        function r(Q, K) {
          var F = Q.length;
          Q.push(K);
          e: for (; 0 < F; ) {
            var W = (F - 1) >>> 1,
              se = Q[W];
            if (0 < s(se, K)) ((Q[W] = K), (Q[F] = se), (F = W));
            else break e;
          }
        }
        function i(Q) {
          return Q.length === 0 ? null : Q[0];
        }
        function o(Q) {
          if (Q.length === 0) return null;
          var K = Q[0],
            F = Q.pop();
          if (F !== K) {
            Q[0] = F;
            e: for (var W = 0, se = Q.length, U = se >>> 1; W < U; ) {
              var X = 2 * (W + 1) - 1,
                le = Q[X],
                ee = X + 1,
                ue = Q[ee];
              if (0 > s(le, F))
                ee < se && 0 > s(ue, le)
                  ? ((Q[W] = ue), (Q[ee] = F), (W = ee))
                  : ((Q[W] = le), (Q[X] = F), (W = X));
              else if (ee < se && 0 > s(ue, F))
                ((Q[W] = ue), (Q[ee] = F), (W = ee));
              else break e;
            }
          }
          return K;
        }
        function s(Q, K) {
          var F = Q.sortIndex - K.sortIndex;
          return F !== 0 ? F : Q.id - K.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            m = d.now();
          n.unstable_now = function () {
            return d.now() - m;
          };
        }
        var h = [],
          p = [],
          y = 1,
          g = null,
          b = 3,
          S = !1,
          C = !1,
          x = !1,
          E = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          N = typeof clearTimeout == "function" ? clearTimeout : null,
          w = typeof setImmediate < "u" ? setImmediate : null;
        function z(Q) {
          for (var K = i(p); K !== null; ) {
            if (K.callback === null) o(p);
            else if (K.startTime <= Q)
              (o(p), (K.sortIndex = K.expirationTime), r(h, K));
            else break;
            K = i(p);
          }
        }
        function M(Q) {
          if (((x = !1), z(Q), !C))
            if (i(h) !== null) ((C = !0), j || ((j = !0), q()));
            else {
              var K = i(p);
              K !== null && ne(M, K.startTime - Q);
            }
        }
        var j = !1,
          O = -1,
          B = 5,
          D = -1;
        function H() {
          return E ? !0 : !(n.unstable_now() - D < B);
        }
        function L() {
          if (((E = !1), j)) {
            var Q = n.unstable_now();
            D = Q;
            var K = !0;
            try {
              e: {
                ((C = !1), x && ((x = !1), N(O), (O = -1)), (S = !0));
                var F = b;
                try {
                  t: {
                    for (
                      z(Q), g = i(h);
                      g !== null && !(g.expirationTime > Q && H());

                    ) {
                      var W = g.callback;
                      if (typeof W == "function") {
                        ((g.callback = null), (b = g.priorityLevel));
                        var se = W(g.expirationTime <= Q);
                        if (((Q = n.unstable_now()), typeof se == "function")) {
                          ((g.callback = se), z(Q), (K = !0));
                          break t;
                        }
                        (g === i(h) && o(h), z(Q));
                      } else o(h);
                      g = i(h);
                    }
                    if (g !== null) K = !0;
                    else {
                      var U = i(p);
                      (U !== null && ne(M, U.startTime - Q), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (b = F), (S = !1));
                }
                K = void 0;
              }
            } finally {
              K ? q() : (j = !1);
            }
          }
        }
        var q;
        if (typeof w == "function")
          q = function () {
            w(L);
          };
        else if (typeof MessageChannel < "u") {
          var Y = new MessageChannel(),
            G = Y.port2;
          ((Y.port1.onmessage = L),
            (q = function () {
              G.postMessage(null);
            }));
        } else
          q = function () {
            _(L, 0);
          };
        function ne(Q, K) {
          O = _(function () {
            Q(n.unstable_now());
          }, K);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (Q) {
            Q.callback = null;
          }),
          (n.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (B = 0 < Q ? Math.floor(1e3 / Q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_next = function (Q) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = b;
            }
            var F = b;
            b = K;
            try {
              return Q();
            } finally {
              b = F;
            }
          }),
          (n.unstable_requestPaint = function () {
            E = !0;
          }),
          (n.unstable_runWithPriority = function (Q, K) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Q = 3;
            }
            var F = b;
            b = Q;
            try {
              return K();
            } finally {
              b = F;
            }
          }),
          (n.unstable_scheduleCallback = function (Q, K, F) {
            var W = n.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? W + F : W))
                : (F = W),
              Q)
            ) {
              case 1:
                var se = -1;
                break;
              case 2:
                se = 250;
                break;
              case 5:
                se = 1073741823;
                break;
              case 4:
                se = 1e4;
                break;
              default:
                se = 5e3;
            }
            return (
              (se = F + se),
              (Q = {
                id: y++,
                callback: K,
                priorityLevel: Q,
                startTime: F,
                expirationTime: se,
                sortIndex: -1,
              }),
              F > W
                ? ((Q.sortIndex = F),
                  r(p, Q),
                  i(h) === null &&
                    Q === i(p) &&
                    (x ? (N(O), (O = -1)) : (x = !0), ne(M, F - W)))
                : ((Q.sortIndex = se),
                  r(h, Q),
                  C || S || ((C = !0), j || ((j = !0), q()))),
              Q
            );
          }),
          (n.unstable_shouldYield = H),
          (n.unstable_wrapCallback = function (Q) {
            var K = b;
            return function () {
              var F = b;
              b = K;
              try {
                return Q.apply(this, arguments);
              } finally {
                b = F;
              }
            };
          }));
      })(rd)),
    rd
  );
}
var dv;
function bx() {
  return (dv || ((dv = 1), (ad.exports = vx())), ad.exports);
}
var ld = { exports: {} },
  xt = {};
var mv;
function Sx() {
  if (mv) return xt;
  mv = 1;
  var n = su();
  function r(h) {
    var p = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        p += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var o = {
      d: {
        f: i,
        r: function () {
          throw Error(r(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function c(h, p, y) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: g == null ? null : "" + g,
      children: h,
      containerInfo: p,
      implementation: y,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (xt.createPortal = function (h, p) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(r(299));
      return c(h, p, null, y);
    }),
    (xt.flushSync = function (h) {
      var p = d.T,
        y = o.p;
      try {
        if (((d.T = null), (o.p = 2), h)) return h();
      } finally {
        ((d.T = p), (o.p = y), o.d.f());
      }
    }),
    (xt.preconnect = function (h, p) {
      typeof h == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        o.d.C(h, p));
    }),
    (xt.prefetchDNS = function (h) {
      typeof h == "string" && o.d.D(h);
    }),
    (xt.preinit = function (h, p) {
      if (typeof h == "string" && p && typeof p.as == "string") {
        var y = p.as,
          g = m(y, p.crossOrigin),
          b = typeof p.integrity == "string" ? p.integrity : void 0,
          S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        y === "style"
          ? o.d.S(h, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: g,
              integrity: b,
              fetchPriority: S,
            })
          : y === "script" &&
            o.d.X(h, {
              crossOrigin: g,
              integrity: b,
              fetchPriority: S,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (xt.preinitModule = function (h, p) {
      if (typeof h == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var y = m(p.as, p.crossOrigin);
            o.d.M(h, {
              crossOrigin: y,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && o.d.M(h);
    }),
    (xt.preload = function (h, p) {
      if (
        typeof h == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var y = p.as,
          g = m(y, p.crossOrigin);
        o.d.L(h, y, {
          crossOrigin: g,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (xt.preloadModule = function (h, p) {
      if (typeof h == "string")
        if (p) {
          var y = m(p.as, p.crossOrigin);
          o.d.m(h, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: y,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else o.d.m(h);
    }),
    (xt.requestFormReset = function (h) {
      o.d.r(h);
    }),
    (xt.unstable_batchedUpdates = function (h, p) {
      return h(p);
    }),
    (xt.useFormState = function (h, p, y) {
      return d.H.useFormState(h, p, y);
    }),
    (xt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (xt.version = "19.2.0"),
    xt
  );
}
var hv;
function D0() {
  if (hv) return ld.exports;
  hv = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (ld.exports = Sx()), ld.exports);
}
var pv;
function xx() {
  if (pv) return Ti;
  pv = 1;
  var n = bx(),
    r = su(),
    i = D0();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (c(e) !== e) throw Error(o(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((l = u.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === a) return (h(u), e);
          if (f === l) return (h(u), t);
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) ((a = u), (l = f));
      else {
        for (var v = !1, A = u.child; A; ) {
          if (A === a) {
            ((v = !0), (a = u), (l = f));
            break;
          }
          if (A === l) {
            ((v = !0), (l = u), (a = f));
            break;
          }
          A = A.sibling;
        }
        if (!v) {
          for (A = f.child; A; ) {
            if (A === a) {
              ((v = !0), (a = f), (l = u));
              break;
            }
            if (A === l) {
              ((v = !0), (l = f), (a = u));
              break;
            }
            A = A.sibling;
          }
          if (!v) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    N = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    j = Symbol.for("react.suspense_list"),
    O = Symbol.for("react.memo"),
    B = Symbol.for("react.lazy"),
    D = Symbol.for("react.activity"),
    H = Symbol.for("react.memo_cache_sentinel"),
    L = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (L && e[L]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Y = Symbol.for("react.client.reference");
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Y ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case _:
        return "Profiler";
      case E:
        return "StrictMode";
      case M:
        return "Suspense";
      case j:
        return "SuspenseList";
      case D:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case C:
          return "Portal";
        case w:
          return e.displayName || "Context";
        case N:
          return (e._context.displayName || "Context") + ".Consumer";
        case z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case O:
          return (
            (t = e.displayName || null),
            t !== null ? t : G(e.type) || "Memo"
          );
        case B:
          ((t = e._payload), (e = e._init));
          try {
            return G(e(t));
          } catch {}
      }
    return null;
  }
  var ne = Array.isArray,
    Q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    W = [],
    se = -1;
  function U(e) {
    return { current: e };
  }
  function X(e) {
    0 > se || ((e.current = W[se]), (W[se] = null), se--);
  }
  function le(e, t) {
    (se++, (W[se] = e.current), (e.current = t));
  }
  var ee = U(null),
    ue = U(null),
    ce = U(null),
    oe = U(null);
  function he(e, t) {
    switch ((le(ce, t), le(ue, e), le(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Ng(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Ng(t)), (e = zg(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (X(ee), le(ee, e));
  }
  function de() {
    (X(ee), X(ue), X(ce));
  }
  function ge(e) {
    e.memoizedState !== null && le(oe, e);
    var t = ee.current,
      a = zg(t, e.type);
    t !== a && (le(ue, e), le(ee, a));
  }
  function xe(e) {
    (ue.current === e && (X(ee), X(ue)),
      oe.current === e && (X(oe), (bi._currentValue = F)));
  }
  var fe, Ce;
  function Re(e) {
    if (fe === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((fe = (t && t[1]) || ""),
          (Ce =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      fe +
      e +
      Ce
    );
  }
  var Oe = !1;
  function qe(e, t) {
    if (!e || Oe) return "";
    Oe = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var re = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(re.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(re, []);
                } catch (J) {
                  var I = J;
                }
                Reflect.construct(e, [], re);
              } else {
                try {
                  re.call();
                } catch (J) {
                  I = J;
                }
                e.call(re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                I = J;
              }
              (re = e()) &&
                typeof re.catch == "function" &&
                re.catch(function () {});
            }
          } catch (J) {
            if (J && I && typeof J.stack == "string") return [J.stack, I.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = l.DetermineComponentFrameRoot(),
        v = f[0],
        A = f[1];
      if (v && A) {
        var $ = v.split(`
`),
          P = A.split(`
`);
        for (
          u = l = 0;
          l < $.length && !$[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; u < P.length && !P[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === $.length || u === P.length)
          for (
            l = $.length - 1, u = P.length - 1;
            1 <= l && 0 <= u && $[l] !== P[u];

          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if ($[l] !== P[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || $[l] !== P[u])) {
                  var te =
                    `
` + $[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      te.includes("<anonymous>") &&
                      (te = te.replace("<anonymous>", e.displayName)),
                    te
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ((Oe = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Re(a) : "";
  }
  function nt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Re(e.type);
      case 16:
        return Re("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Re("Suspense Fallback")
          : Re("Suspense");
      case 19:
        return Re("SuspenseList");
      case 0:
      case 15:
        return qe(e.type, !1);
      case 11:
        return qe(e.type.render, !1);
      case 1:
        return qe(e.type, !0);
      case 31:
        return Re("Activity");
      default:
        return "";
    }
  }
  function dt(e) {
    try {
      var t = "",
        a = null;
      do ((t += nt(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var ot = Object.prototype.hasOwnProperty,
    ut = n.unstable_scheduleCallback,
    _t = n.unstable_cancelCallback,
    Et = n.unstable_shouldYield,
    Al = n.unstable_requestPaint,
    St = n.unstable_now,
    yo = n.unstable_getCurrentPriorityLevel,
    go = n.unstable_ImmediatePriority,
    Ml = n.unstable_UserBlockingPriority,
    xr = n.unstable_NormalPriority,
    Nl = n.unstable_LowPriority,
    Dn = n.unstable_IdlePriority,
    zl = n.log,
    Ol = n.unstable_setDisableYieldValue,
    Cn = null,
    Ct = null;
  function Tn(e) {
    if (
      (typeof zl == "function" && Ol(e),
      Ct && typeof Ct.setStrictMode == "function")
    )
      try {
        Ct.setStrictMode(Cn, e);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : vo,
    $u = Math.log,
    qu = Math.LN2;
  function vo(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - (($u(e) / qu) | 0)) | 0);
  }
  var Er = 256,
    qa = 262144,
    Qa = 4194304;
  function wn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Cr(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      f = e.suspendedLanes,
      v = e.pingedLanes;
    e = e.warmLanes;
    var A = l & 134217727;
    return (
      A !== 0
        ? ((l = A & ~f),
          l !== 0
            ? (u = wn(l))
            : ((v &= A),
              v !== 0
                ? (u = wn(v))
                : a || ((a = A & ~e), a !== 0 && (u = wn(a)))))
        : ((A = l & ~f),
          A !== 0
            ? (u = wn(A))
            : v !== 0
              ? (u = wn(v))
              : a || ((a = l & ~e), a !== 0 && (u = wn(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & f) === 0 &&
            ((f = u & -u),
            (a = t & -t),
            f >= a || (f === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function ua(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function bo(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function So() {
    var e = Qa;
    return ((Qa <<= 1), (Qa & 62914560) === 0 && (Qa = 4194304), e);
  }
  function Qu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function jl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function aS(e, t, a, l, u, f) {
    var v = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var A = e.entanglements,
      $ = e.expirationTimes,
      P = e.hiddenUpdates;
    for (a = v & ~a; 0 < a; ) {
      var te = 31 - Tt(a),
        re = 1 << te;
      ((A[te] = 0), ($[te] = -1));
      var I = P[te];
      if (I !== null)
        for (P[te] = null, te = 0; te < I.length; te++) {
          var J = I[te];
          J !== null && (J.lane &= -536870913);
        }
      a &= ~re;
    }
    (l !== 0 && dh(e, l, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(v & ~t)));
  }
  function dh(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Tt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 261930)));
  }
  function mh(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - Tt(a),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (a &= ~u));
    }
  }
  function hh(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : ku(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function ku(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Yu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ph() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ev(e.type));
  }
  function yh(e, t) {
    var a = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = a;
    }
  }
  var ca = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + ca,
    At = "__reactProps$" + ca,
    Tr = "__reactContainer$" + ca,
    Vu = "__reactEvents$" + ca,
    rS = "__reactListeners$" + ca,
    lS = "__reactHandles$" + ca,
    gh = "__reactResources$" + ca,
    Dl = "__reactMarker$" + ca;
  function Gu(e) {
    (delete e[mt], delete e[At], delete e[Vu], delete e[rS], delete e[lS]);
  }
  function wr(e) {
    var t = e[mt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[Tr] || a[mt])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Hg(e); e !== null; ) {
            if ((a = e[mt])) return a;
            e = Hg(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Rr(e) {
    if ((e = e[mt] || e[Tr])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ul(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function _r(e) {
    var t = e[gh];
    return (
      t ||
        (t = e[gh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ct(e) {
    e[Dl] = !0;
  }
  var vh = new Set(),
    bh = {};
  function ka(e, t) {
    (Ar(e, t), Ar(e + "Capture", t));
  }
  function Ar(e, t) {
    for (bh[e] = t, e = 0; e < t.length; e++) vh.add(t[e]);
  }
  var iS = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Sh = {},
    xh = {};
  function oS(e) {
    return ot.call(xh, e)
      ? !0
      : ot.call(Sh, e)
        ? !1
        : iS.test(e)
          ? (xh[e] = !0)
          : ((Sh[e] = !0), !1);
  }
  function xo(e, t, a) {
    if (oS(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Eo(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Un(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function Kt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Eh(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function sS(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        f = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (v) {
            ((a = "" + v), f.call(this, v));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (v) {
            a = "" + v;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Xu(e) {
    if (!e._valueTracker) {
      var t = Eh(e) ? "checked" : "value";
      e._valueTracker = sS(e, t, "" + e[t]);
    }
  }
  function Ch(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = Eh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Co(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var uS = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(uS, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Zu(e, t, a, l, u, f, v, A) {
    ((e.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.type = v)
        : e.removeAttribute("type"),
      t != null
        ? v === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Kt(t))
          : e.value !== "" + Kt(t) && (e.value = "" + Kt(t))
        : (v !== "submit" && v !== "reset") || e.removeAttribute("value"),
      t != null
        ? Pu(e, v, Kt(t))
        : a != null
          ? Pu(e, v, Kt(a))
          : l != null && e.removeAttribute("value"),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      A != null &&
      typeof A != "function" &&
      typeof A != "symbol" &&
      typeof A != "boolean"
        ? (e.name = "" + Kt(A))
        : e.removeAttribute("name"));
  }
  function Th(e, t, a, l, u, f, v, A) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      t != null || a != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || t != null)) {
        Xu(e);
        return;
      }
      ((a = a != null ? "" + Kt(a) : ""),
        (t = t != null ? "" + Kt(t) : a),
        A || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = A ? e.checked : !!l),
      (e.defaultChecked = !!l),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (e.name = v),
      Xu(e));
  }
  function Pu(e, t, a) {
    (t === "number" && Co(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Mr(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        ((u = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && l && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + Kt(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wh(e, t, a) {
    if (
      t != null &&
      ((t = "" + Kt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Kt(a) : "";
  }
  function Rh(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (ne(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = Kt(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l),
      Xu(e));
  }
  function Nr(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var cS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function _h(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || cS.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Ah(e, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var u in t)
        ((l = t[u]), t.hasOwnProperty(u) && a[u] !== l && _h(e, u, l));
    } else for (var f in t) t.hasOwnProperty(f) && _h(e, f, t[f]);
  }
  function Iu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var fS = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    dS =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function To(e) {
    return dS.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ln() {}
  var Ku = null;
  function Fu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zr = null,
    Or = null;
  function Mh(e) {
    var t = Rr(e);
    if (t && (e = t.stateNode)) {
      var a = e[At] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Zu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ft("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var u = l[At] || null;
                if (!u) throw Error(o(90));
                Zu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((l = a[t]), l.form === e.form && Ch(l));
          }
          break e;
        case "textarea":
          wh(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Mr(e, !!a.multiple, t, !1));
      }
    }
  }
  var Ju = !1;
  function Nh(e, t, a) {
    if (Ju) return e(t, a);
    Ju = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Ju = !1),
        (zr !== null || Or !== null) &&
          (fs(), zr && ((t = zr), (e = Or), (Or = zr = null), Mh(t), e)))
      )
        for (t = 0; t < e.length; t++) Mh(e[t]);
    }
  }
  function Ll(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[At] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Bn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Wu = !1;
  if (Bn)
    try {
      var Bl = {};
      (Object.defineProperty(Bl, "passive", {
        get: function () {
          Wu = !0;
        },
      }),
        window.addEventListener("test", Bl, Bl),
        window.removeEventListener("test", Bl, Bl));
    } catch {
      Wu = !1;
    }
  var fa = null,
    ec = null,
    wo = null;
  function zh() {
    if (wo) return wo;
    var e,
      t = ec,
      a = t.length,
      l,
      u = "value" in fa ? fa.value : fa.textContent,
      f = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++);
    var v = a - e;
    for (l = 1; l <= v && t[a - l] === u[f - l]; l++);
    return (wo = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Ro(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function _o() {
    return !0;
  }
  function Oh() {
    return !1;
  }
  function Mt(e) {
    function t(a, l, u, f, v) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = v),
        (this.currentTarget = null));
      for (var A in e)
        e.hasOwnProperty(A) && ((a = e[A]), (this[A] = a ? a(f) : f[A]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? _o
          : Oh),
        (this.isPropagationStopped = Oh),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = _o));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = _o));
        },
        persist: function () {},
        isPersistent: _o,
      }),
      t
    );
  }
  var Ya = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ao = Mt(Ya),
    Hl = g({}, Ya, { view: 0, detail: 0 }),
    mS = Mt(Hl),
    tc,
    nc,
    $l,
    Mo = g({}, Hl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: rc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== $l &&
              ($l && e.type === "mousemove"
                ? ((tc = e.screenX - $l.screenX), (nc = e.screenY - $l.screenY))
                : (nc = tc = 0),
              ($l = e)),
            tc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nc;
      },
    }),
    jh = Mt(Mo),
    hS = g({}, Mo, { dataTransfer: 0 }),
    pS = Mt(hS),
    yS = g({}, Hl, { relatedTarget: 0 }),
    ac = Mt(yS),
    gS = g({}, Ya, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vS = Mt(gS),
    bS = g({}, Ya, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    SS = Mt(bS),
    xS = g({}, Ya, { data: 0 }),
    Dh = Mt(xS),
    ES = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    CS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    TS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = TS[e])
        ? !!t[e]
        : !1;
  }
  function rc() {
    return wS;
  }
  var RS = g({}, Hl, {
      key: function (e) {
        if (e.key) {
          var t = ES[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? CS[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rc,
      charCode: function (e) {
        return e.type === "keypress" ? Ro(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ro(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    _S = Mt(RS),
    AS = g({}, Mo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uh = Mt(AS),
    MS = g({}, Hl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rc,
    }),
    NS = Mt(MS),
    zS = g({}, Ya, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    OS = Mt(zS),
    jS = g({}, Mo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    DS = Mt(jS),
    US = g({}, Ya, { newState: 0, oldState: 0 }),
    LS = Mt(US),
    BS = [9, 13, 27, 32],
    lc = Bn && "CompositionEvent" in window,
    ql = null;
  Bn && "documentMode" in document && (ql = document.documentMode);
  var HS = Bn && "TextEvent" in window && !ql,
    Lh = Bn && (!lc || (ql && 8 < ql && 11 >= ql)),
    Bh = " ",
    Hh = !1;
  function $h(e, t) {
    switch (e) {
      case "keyup":
        return BS.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qh(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var jr = !1;
  function $S(e, t) {
    switch (e) {
      case "compositionend":
        return qh(t);
      case "keypress":
        return t.which !== 32 ? null : ((Hh = !0), Bh);
      case "textInput":
        return ((e = t.data), e === Bh && Hh ? null : e);
      default:
        return null;
    }
  }
  function qS(e, t) {
    if (jr)
      return e === "compositionend" || (!lc && $h(e, t))
        ? ((e = zh()), (wo = ec = fa = null), (jr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Lh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var QS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!QS[e.type] : t === "textarea";
  }
  function kh(e, t, a, l) {
    (zr ? (Or ? Or.push(l) : (Or = [l])) : (zr = l),
      (t = vs(t, "onChange")),
      0 < t.length &&
        ((a = new Ao("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t })));
  }
  var Ql = null,
    kl = null;
  function kS(e) {
    Tg(e, 0);
  }
  function No(e) {
    var t = Ul(e);
    if (Ch(t)) return e;
  }
  function Yh(e, t) {
    if (e === "change") return t;
  }
  var Vh = !1;
  if (Bn) {
    var ic;
    if (Bn) {
      var oc = "oninput" in document;
      if (!oc) {
        var Gh = document.createElement("div");
        (Gh.setAttribute("oninput", "return;"),
          (oc = typeof Gh.oninput == "function"));
      }
      ic = oc;
    } else ic = !1;
    Vh = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Xh() {
    Ql && (Ql.detachEvent("onpropertychange", Zh), (kl = Ql = null));
  }
  function Zh(e) {
    if (e.propertyName === "value" && No(kl)) {
      var t = [];
      (kh(t, kl, e, Fu(e)), Nh(kS, t));
    }
  }
  function YS(e, t, a) {
    e === "focusin"
      ? (Xh(), (Ql = t), (kl = a), Ql.attachEvent("onpropertychange", Zh))
      : e === "focusout" && Xh();
  }
  function VS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return No(kl);
  }
  function GS(e, t) {
    if (e === "click") return No(t);
  }
  function XS(e, t) {
    if (e === "input" || e === "change") return No(t);
  }
  function ZS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var qt = typeof Object.is == "function" ? Object.is : ZS;
  function Yl(e, t) {
    if (qt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!ot.call(t, u) || !qt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Ph(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ih(e, t) {
    var a = Ph(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ph(a);
    }
  }
  function Kh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Kh(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Fh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Co(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Co(e.document);
    }
    return t;
  }
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var PS = Bn && "documentMode" in document && 11 >= document.documentMode,
    Dr = null,
    uc = null,
    Vl = null,
    cc = !1;
  function Jh(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    cc ||
      Dr == null ||
      Dr !== Co(l) ||
      ((l = Dr),
      "selectionStart" in l && sc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Vl && Yl(Vl, l)) ||
        ((Vl = l),
        (l = vs(uc, "onSelect")),
        0 < l.length &&
          ((t = new Ao("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = Dr))));
  }
  function Va(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Ur = {
      animationend: Va("Animation", "AnimationEnd"),
      animationiteration: Va("Animation", "AnimationIteration"),
      animationstart: Va("Animation", "AnimationStart"),
      transitionrun: Va("Transition", "TransitionRun"),
      transitionstart: Va("Transition", "TransitionStart"),
      transitioncancel: Va("Transition", "TransitionCancel"),
      transitionend: Va("Transition", "TransitionEnd"),
    },
    fc = {},
    Wh = {};
  Bn &&
    ((Wh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ur.animationend.animation,
      delete Ur.animationiteration.animation,
      delete Ur.animationstart.animation),
    "TransitionEvent" in window || delete Ur.transitionend.transition);
  function Ga(e) {
    if (fc[e]) return fc[e];
    if (!Ur[e]) return e;
    var t = Ur[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Wh) return (fc[e] = t[a]);
    return e;
  }
  var ep = Ga("animationend"),
    tp = Ga("animationiteration"),
    np = Ga("animationstart"),
    IS = Ga("transitionrun"),
    KS = Ga("transitionstart"),
    FS = Ga("transitioncancel"),
    ap = Ga("transitionend"),
    rp = new Map(),
    dc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  dc.push("scrollEnd");
  function cn(e, t) {
    (rp.set(e, t), ka(t, [e]));
  }
  var zo =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Jt = [],
    Lr = 0,
    mc = 0;
  function Oo() {
    for (var e = Lr, t = (mc = Lr = 0); t < e; ) {
      var a = Jt[t];
      Jt[t++] = null;
      var l = Jt[t];
      Jt[t++] = null;
      var u = Jt[t];
      Jt[t++] = null;
      var f = Jt[t];
      if (((Jt[t++] = null), l !== null && u !== null)) {
        var v = l.pending;
        (v === null ? (u.next = u) : ((u.next = v.next), (v.next = u)),
          (l.pending = u));
      }
      f !== 0 && lp(a, u, f);
    }
  }
  function jo(e, t, a, l) {
    ((Jt[Lr++] = e),
      (Jt[Lr++] = t),
      (Jt[Lr++] = a),
      (Jt[Lr++] = l),
      (mc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function hc(e, t, a, l) {
    return (jo(e, t, a, l), Do(e));
  }
  function Xa(e, t) {
    return (jo(e, null, null, t), Do(e));
  }
  function lp(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, f = e.return; f !== null; )
      ((f.childLanes |= a),
        (l = f.alternate),
        l !== null && (l.childLanes |= a),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = f),
        (f = f.return));
    return e.tag === 3
      ? ((f = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Tt(a)),
          (e = f.hiddenUpdates),
          (l = e[u]),
          l === null ? (e[u] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        f)
      : null;
  }
  function Do(e) {
    if (50 < di) throw ((di = 0), (Tf = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Br = {};
  function JS(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Qt(e, t, a, l) {
    return new JS(e, t, a, l);
  }
  function pc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Hn(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Qt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function ip(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Uo(e, t, a, l, u, f) {
    var v = 0;
    if (((l = e), typeof e == "function")) pc(e) && (v = 1);
    else if (typeof e == "string")
      v = ax(e, a, ee.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case D:
          return ((e = Qt(31, a, t, u)), (e.elementType = D), (e.lanes = f), e);
        case x:
          return Za(a.children, u, f, t);
        case E:
          ((v = 8), (u |= 24));
          break;
        case _:
          return (
            (e = Qt(12, a, t, u | 2)),
            (e.elementType = _),
            (e.lanes = f),
            e
          );
        case M:
          return ((e = Qt(13, a, t, u)), (e.elementType = M), (e.lanes = f), e);
        case j:
          return ((e = Qt(19, a, t, u)), (e.elementType = j), (e.lanes = f), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case w:
                v = 10;
                break e;
              case N:
                v = 9;
                break e;
              case z:
                v = 11;
                break e;
              case O:
                v = 14;
                break e;
              case B:
                ((v = 16), (l = null));
                break e;
            }
          ((v = 29),
            (a = Error(o(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = Qt(v, a, t, u)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = f),
      t
    );
  }
  function Za(e, t, a, l) {
    return ((e = Qt(7, e, l, t)), (e.lanes = a), e);
  }
  function yc(e, t, a) {
    return ((e = Qt(6, e, null, t)), (e.lanes = a), e);
  }
  function op(e) {
    var t = Qt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function gc(e, t, a) {
    return (
      (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var sp = new WeakMap();
  function Wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = sp.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: dt(t) }), sp.set(e, t), t);
    }
    return { value: e, source: t, stack: dt(t) };
  }
  var Hr = [],
    $r = 0,
    Lo = null,
    Gl = 0,
    en = [],
    tn = 0,
    da = null,
    Rn = 1,
    _n = "";
  function $n(e, t) {
    ((Hr[$r++] = Gl), (Hr[$r++] = Lo), (Lo = e), (Gl = t));
  }
  function up(e, t, a) {
    ((en[tn++] = Rn), (en[tn++] = _n), (en[tn++] = da), (da = e));
    var l = Rn;
    e = _n;
    var u = 32 - Tt(l) - 1;
    ((l &= ~(1 << u)), (a += 1));
    var f = 32 - Tt(t) + u;
    if (30 < f) {
      var v = u - (u % 5);
      ((f = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (u -= v),
        (Rn = (1 << (32 - Tt(t) + u)) | (a << u) | l),
        (_n = f + e));
    } else ((Rn = (1 << f) | (a << u) | l), (_n = e));
  }
  function vc(e) {
    e.return !== null && ($n(e, 1), up(e, 1, 0));
  }
  function bc(e) {
    for (; e === Lo; )
      ((Lo = Hr[--$r]), (Hr[$r] = null), (Gl = Hr[--$r]), (Hr[$r] = null));
    for (; e === da; )
      ((da = en[--tn]),
        (en[tn] = null),
        (_n = en[--tn]),
        (en[tn] = null),
        (Rn = en[--tn]),
        (en[tn] = null));
  }
  function cp(e, t) {
    ((en[tn++] = Rn),
      (en[tn++] = _n),
      (en[tn++] = da),
      (Rn = t.id),
      (_n = t.overflow),
      (da = e));
  }
  var ht = null,
    Ge = null,
    je = !1,
    ma = null,
    nn = !1,
    Sc = Error(o(519));
  function ha(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Xl(Wt(t, e)), Sc);
  }
  function fp(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[mt] = e), (t[At] = l), a)) {
      case "dialog":
        (Ae("cancel", t), Ae("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hi.length; a++) Ae(hi[a], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ae("error", t), Ae("load", t));
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        (Ae("invalid", t),
          Th(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        (Ae("invalid", t), Rh(t, l.value, l.defaultValue, l.children));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      Ag(t.textContent, a)
        ? (l.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)),
          l.onScroll != null && Ae("scroll", t),
          l.onScrollEnd != null && Ae("scrollend", t),
          l.onClick != null && (t.onclick = Ln),
          (t = !0))
        : (t = !1),
      t || ha(e, !0));
  }
  function dp(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function qr(e) {
    if (e !== ht) return !1;
    if (!je) return (dp(e), (je = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || $f(e.type, e.memoizedProps))),
        (a = !a)),
      a && Ge && ha(e),
      dp(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Ge = Bg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Ge = Bg(e);
    } else
      t === 27
        ? ((t = Ge), Aa(e.type) ? ((e = Vf), (Vf = null), (Ge = e)) : (Ge = t))
        : (Ge = ht ? rn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Pa() {
    ((Ge = ht = null), (je = !1));
  }
  function xc() {
    var e = ma;
    return (
      e !== null &&
        (jt === null ? (jt = e) : jt.push.apply(jt, e), (ma = null)),
      e
    );
  }
  function Xl(e) {
    ma === null ? (ma = [e]) : ma.push(e);
  }
  var Ec = U(null),
    Ia = null,
    qn = null;
  function pa(e, t, a) {
    (le(Ec, t._currentValue), (t._currentValue = a));
  }
  function Qn(e) {
    ((e._currentValue = Ec.current), X(Ec));
  }
  function Cc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Tc(e, t, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var v = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var A = f;
          f = u;
          for (var $ = 0; $ < t.length; $++)
            if (A.context === t[$]) {
              ((f.lanes |= a),
                (A = f.alternate),
                A !== null && (A.lanes |= a),
                Cc(f.return, a, e),
                l || (v = null));
              break e;
            }
          f = A.next;
        }
      } else if (u.tag === 18) {
        if (((v = u.return), v === null)) throw Error(o(341));
        ((v.lanes |= a),
          (f = v.alternate),
          f !== null && (f.lanes |= a),
          Cc(v, a, e),
          (v = null));
      } else v = u.child;
      if (v !== null) v.return = u;
      else
        for (v = u; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (((u = v.sibling), u !== null)) {
            ((u.return = v.return), (v = u));
            break;
          }
          v = v.return;
        }
      u = v;
    }
  }
  function Qr(e, t, a, l) {
    e = null;
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var v = u.alternate;
        if (v === null) throw Error(o(387));
        if (((v = v.memoizedProps), v !== null)) {
          var A = u.type;
          qt(u.pendingProps.value, v.value) ||
            (e !== null ? e.push(A) : (e = [A]));
        }
      } else if (u === oe.current) {
        if (((v = u.alternate), v === null)) throw Error(o(387));
        v.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(bi) : (e = [bi]));
      }
      u = u.return;
    }
    (e !== null && Tc(t, e, a, l), (t.flags |= 262144));
  }
  function Bo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ka(e) {
    ((Ia = e),
      (qn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function pt(e) {
    return mp(Ia, e);
  }
  function Ho(e, t) {
    return (Ia === null && Ka(e), mp(e, t));
  }
  function mp(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), qn === null)) {
      if (e === null) throw Error(o(308));
      ((qn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else qn = qn.next = t;
    return a;
  }
  var WS =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    e2 = n.unstable_scheduleCallback,
    t2 = n.unstable_NormalPriority,
    at = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wc() {
    return { controller: new WS(), data: new Map(), refCount: 0 };
  }
  function Zl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        e2(t2, function () {
          e.controller.abort();
        }));
  }
  var Pl = null,
    Rc = 0,
    kr = 0,
    Yr = null;
  function n2(e, t) {
    if (Pl === null) {
      var a = (Pl = []);
      ((Rc = 0),
        (kr = Nf()),
        (Yr = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (Rc++, t.then(hp, hp), t);
  }
  function hp() {
    if (--Rc === 0 && Pl !== null) {
      Yr !== null && (Yr.status = "fulfilled");
      var e = Pl;
      ((Pl = null), (kr = 0), (Yr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function a2(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      l
    );
  }
  var pp = Q.S;
  Q.S = function (e, t) {
    ((Jy = St()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        n2(e, t),
      pp !== null && pp(e, t));
  };
  var Fa = U(null);
  function _c() {
    var e = Fa.current;
    return e !== null ? e : Ve.pooledCache;
  }
  function $o(e, t) {
    t === null ? le(Fa, Fa.current) : le(Fa, t.pool);
  }
  function yp() {
    var e = _c();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var Vr = Error(o(460)),
    Ac = Error(o(474)),
    qo = Error(o(542)),
    Qo = { then: function () {} };
  function gp(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function vp(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Ln, Ln), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Sp(e), e);
      default:
        if (typeof t.status == "string") t.then(Ln, Ln);
        else {
          if (((e = Ve), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Sp(e), e);
        }
        throw ((Wa = t), Vr);
    }
  }
  function Ja(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Wa = a), Vr)
        : a;
    }
  }
  var Wa = null;
  function bp() {
    if (Wa === null) throw Error(o(459));
    var e = Wa;
    return ((Wa = null), e);
  }
  function Sp(e) {
    if (e === Vr || e === qo) throw Error(o(483));
  }
  var Gr = null,
    Il = 0;
  function ko(e) {
    var t = Il;
    return ((Il += 1), Gr === null && (Gr = []), vp(Gr, e, t));
  }
  function Kl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Yo(e, t) {
    throw t.$$typeof === b
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function xp(e) {
    function t(V, k) {
      if (e) {
        var Z = V.deletions;
        Z === null ? ((V.deletions = [k]), (V.flags |= 16)) : Z.push(k);
      }
    }
    function a(V, k) {
      if (!e) return null;
      for (; k !== null; ) (t(V, k), (k = k.sibling));
      return null;
    }
    function l(V) {
      for (var k = new Map(); V !== null; )
        (V.key !== null ? k.set(V.key, V) : k.set(V.index, V), (V = V.sibling));
      return k;
    }
    function u(V, k) {
      return ((V = Hn(V, k)), (V.index = 0), (V.sibling = null), V);
    }
    function f(V, k, Z) {
      return (
        (V.index = Z),
        e
          ? ((Z = V.alternate),
            Z !== null
              ? ((Z = Z.index), Z < k ? ((V.flags |= 67108866), k) : Z)
              : ((V.flags |= 67108866), k))
          : ((V.flags |= 1048576), k)
      );
    }
    function v(V) {
      return (e && V.alternate === null && (V.flags |= 67108866), V);
    }
    function A(V, k, Z, ae) {
      return k === null || k.tag !== 6
        ? ((k = yc(Z, V.mode, ae)), (k.return = V), k)
        : ((k = u(k, Z)), (k.return = V), k);
    }
    function $(V, k, Z, ae) {
      var ve = Z.type;
      return ve === x
        ? te(V, k, Z.props.children, ae, Z.key)
        : k !== null &&
            (k.elementType === ve ||
              (typeof ve == "object" &&
                ve !== null &&
                ve.$$typeof === B &&
                Ja(ve) === k.type))
          ? ((k = u(k, Z.props)), Kl(k, Z), (k.return = V), k)
          : ((k = Uo(Z.type, Z.key, Z.props, null, V.mode, ae)),
            Kl(k, Z),
            (k.return = V),
            k);
    }
    function P(V, k, Z, ae) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== Z.containerInfo ||
        k.stateNode.implementation !== Z.implementation
        ? ((k = gc(Z, V.mode, ae)), (k.return = V), k)
        : ((k = u(k, Z.children || [])), (k.return = V), k);
    }
    function te(V, k, Z, ae, ve) {
      return k === null || k.tag !== 7
        ? ((k = Za(Z, V.mode, ae, ve)), (k.return = V), k)
        : ((k = u(k, Z)), (k.return = V), k);
    }
    function re(V, k, Z) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return ((k = yc("" + k, V.mode, Z)), (k.return = V), k);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case S:
            return (
              (Z = Uo(k.type, k.key, k.props, null, V.mode, Z)),
              Kl(Z, k),
              (Z.return = V),
              Z
            );
          case C:
            return ((k = gc(k, V.mode, Z)), (k.return = V), k);
          case B:
            return ((k = Ja(k)), re(V, k, Z));
        }
        if (ne(k) || q(k))
          return ((k = Za(k, V.mode, Z, null)), (k.return = V), k);
        if (typeof k.then == "function") return re(V, ko(k), Z);
        if (k.$$typeof === w) return re(V, Ho(V, k), Z);
        Yo(V, k);
      }
      return null;
    }
    function I(V, k, Z, ae) {
      var ve = k !== null ? k.key : null;
      if (
        (typeof Z == "string" && Z !== "") ||
        typeof Z == "number" ||
        typeof Z == "bigint"
      )
        return ve !== null ? null : A(V, k, "" + Z, ae);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case S:
            return Z.key === ve ? $(V, k, Z, ae) : null;
          case C:
            return Z.key === ve ? P(V, k, Z, ae) : null;
          case B:
            return ((Z = Ja(Z)), I(V, k, Z, ae));
        }
        if (ne(Z) || q(Z)) return ve !== null ? null : te(V, k, Z, ae, null);
        if (typeof Z.then == "function") return I(V, k, ko(Z), ae);
        if (Z.$$typeof === w) return I(V, k, Ho(V, Z), ae);
        Yo(V, Z);
      }
      return null;
    }
    function J(V, k, Z, ae, ve) {
      if (
        (typeof ae == "string" && ae !== "") ||
        typeof ae == "number" ||
        typeof ae == "bigint"
      )
        return ((V = V.get(Z) || null), A(k, V, "" + ae, ve));
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case S:
            return (
              (V = V.get(ae.key === null ? Z : ae.key) || null),
              $(k, V, ae, ve)
            );
          case C:
            return (
              (V = V.get(ae.key === null ? Z : ae.key) || null),
              P(k, V, ae, ve)
            );
          case B:
            return ((ae = Ja(ae)), J(V, k, Z, ae, ve));
        }
        if (ne(ae) || q(ae))
          return ((V = V.get(Z) || null), te(k, V, ae, ve, null));
        if (typeof ae.then == "function") return J(V, k, Z, ko(ae), ve);
        if (ae.$$typeof === w) return J(V, k, Z, Ho(k, ae), ve);
        Yo(k, ae);
      }
      return null;
    }
    function me(V, k, Z, ae) {
      for (
        var ve = null, Ue = null, pe = k, we = (k = 0), ze = null;
        pe !== null && we < Z.length;
        we++
      ) {
        pe.index > we ? ((ze = pe), (pe = null)) : (ze = pe.sibling);
        var Le = I(V, pe, Z[we], ae);
        if (Le === null) {
          pe === null && (pe = ze);
          break;
        }
        (e && pe && Le.alternate === null && t(V, pe),
          (k = f(Le, k, we)),
          Ue === null ? (ve = Le) : (Ue.sibling = Le),
          (Ue = Le),
          (pe = ze));
      }
      if (we === Z.length) return (a(V, pe), je && $n(V, we), ve);
      if (pe === null) {
        for (; we < Z.length; we++)
          ((pe = re(V, Z[we], ae)),
            pe !== null &&
              ((k = f(pe, k, we)),
              Ue === null ? (ve = pe) : (Ue.sibling = pe),
              (Ue = pe)));
        return (je && $n(V, we), ve);
      }
      for (pe = l(pe); we < Z.length; we++)
        ((ze = J(pe, V, we, Z[we], ae)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              pe.delete(ze.key === null ? we : ze.key),
            (k = f(ze, k, we)),
            Ue === null ? (ve = ze) : (Ue.sibling = ze),
            (Ue = ze)));
      return (
        e &&
          pe.forEach(function (ja) {
            return t(V, ja);
          }),
        je && $n(V, we),
        ve
      );
    }
    function Se(V, k, Z, ae) {
      if (Z == null) throw Error(o(151));
      for (
        var ve = null,
          Ue = null,
          pe = k,
          we = (k = 0),
          ze = null,
          Le = Z.next();
        pe !== null && !Le.done;
        we++, Le = Z.next()
      ) {
        pe.index > we ? ((ze = pe), (pe = null)) : (ze = pe.sibling);
        var ja = I(V, pe, Le.value, ae);
        if (ja === null) {
          pe === null && (pe = ze);
          break;
        }
        (e && pe && ja.alternate === null && t(V, pe),
          (k = f(ja, k, we)),
          Ue === null ? (ve = ja) : (Ue.sibling = ja),
          (Ue = ja),
          (pe = ze));
      }
      if (Le.done) return (a(V, pe), je && $n(V, we), ve);
      if (pe === null) {
        for (; !Le.done; we++, Le = Z.next())
          ((Le = re(V, Le.value, ae)),
            Le !== null &&
              ((k = f(Le, k, we)),
              Ue === null ? (ve = Le) : (Ue.sibling = Le),
              (Ue = Le)));
        return (je && $n(V, we), ve);
      }
      for (pe = l(pe); !Le.done; we++, Le = Z.next())
        ((Le = J(pe, V, we, Le.value, ae)),
          Le !== null &&
            (e &&
              Le.alternate !== null &&
              pe.delete(Le.key === null ? we : Le.key),
            (k = f(Le, k, we)),
            Ue === null ? (ve = Le) : (Ue.sibling = Le),
            (Ue = Le)));
      return (
        e &&
          pe.forEach(function (hx) {
            return t(V, hx);
          }),
        je && $n(V, we),
        ve
      );
    }
    function Ye(V, k, Z, ae) {
      if (
        (typeof Z == "object" &&
          Z !== null &&
          Z.type === x &&
          Z.key === null &&
          (Z = Z.props.children),
        typeof Z == "object" && Z !== null)
      ) {
        switch (Z.$$typeof) {
          case S:
            e: {
              for (var ve = Z.key; k !== null; ) {
                if (k.key === ve) {
                  if (((ve = Z.type), ve === x)) {
                    if (k.tag === 7) {
                      (a(V, k.sibling),
                        (ae = u(k, Z.props.children)),
                        (ae.return = V),
                        (V = ae));
                      break e;
                    }
                  } else if (
                    k.elementType === ve ||
                    (typeof ve == "object" &&
                      ve !== null &&
                      ve.$$typeof === B &&
                      Ja(ve) === k.type)
                  ) {
                    (a(V, k.sibling),
                      (ae = u(k, Z.props)),
                      Kl(ae, Z),
                      (ae.return = V),
                      (V = ae));
                    break e;
                  }
                  a(V, k);
                  break;
                } else t(V, k);
                k = k.sibling;
              }
              Z.type === x
                ? ((ae = Za(Z.props.children, V.mode, ae, Z.key)),
                  (ae.return = V),
                  (V = ae))
                : ((ae = Uo(Z.type, Z.key, Z.props, null, V.mode, ae)),
                  Kl(ae, Z),
                  (ae.return = V),
                  (V = ae));
            }
            return v(V);
          case C:
            e: {
              for (ve = Z.key; k !== null; ) {
                if (k.key === ve)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === Z.containerInfo &&
                    k.stateNode.implementation === Z.implementation
                  ) {
                    (a(V, k.sibling),
                      (ae = u(k, Z.children || [])),
                      (ae.return = V),
                      (V = ae));
                    break e;
                  } else {
                    a(V, k);
                    break;
                  }
                else t(V, k);
                k = k.sibling;
              }
              ((ae = gc(Z, V.mode, ae)), (ae.return = V), (V = ae));
            }
            return v(V);
          case B:
            return ((Z = Ja(Z)), Ye(V, k, Z, ae));
        }
        if (ne(Z)) return me(V, k, Z, ae);
        if (q(Z)) {
          if (((ve = q(Z)), typeof ve != "function")) throw Error(o(150));
          return ((Z = ve.call(Z)), Se(V, k, Z, ae));
        }
        if (typeof Z.then == "function") return Ye(V, k, ko(Z), ae);
        if (Z.$$typeof === w) return Ye(V, k, Ho(V, Z), ae);
        Yo(V, Z);
      }
      return (typeof Z == "string" && Z !== "") ||
        typeof Z == "number" ||
        typeof Z == "bigint"
        ? ((Z = "" + Z),
          k !== null && k.tag === 6
            ? (a(V, k.sibling), (ae = u(k, Z)), (ae.return = V), (V = ae))
            : (a(V, k), (ae = yc(Z, V.mode, ae)), (ae.return = V), (V = ae)),
          v(V))
        : a(V, k);
    }
    return function (V, k, Z, ae) {
      try {
        Il = 0;
        var ve = Ye(V, k, Z, ae);
        return ((Gr = null), ve);
      } catch (pe) {
        if (pe === Vr || pe === qo) throw pe;
        var Ue = Qt(29, pe, null, V.mode);
        return ((Ue.lanes = ae), (Ue.return = V), Ue);
      } finally {
      }
    };
  }
  var er = xp(!0),
    Ep = xp(!1),
    ya = !1;
  function Mc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Nc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function ga(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function va(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Be & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        (t = Do(e)),
        lp(e, null, a),
        t
      );
    }
    return (jo(e, l, t, a), Do(e));
  }
  function Fl(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), mh(e, a));
    }
  }
  function zc(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var u = null,
        f = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var v = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (f === null ? (u = f = v) : (f = f.next = v), (a = a.next));
        } while (a !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var Oc = !1;
  function Jl() {
    if (Oc) {
      var e = Yr;
      if (e !== null) throw e;
    }
  }
  function Wl(e, t, a, l) {
    Oc = !1;
    var u = e.updateQueue;
    ya = !1;
    var f = u.firstBaseUpdate,
      v = u.lastBaseUpdate,
      A = u.shared.pending;
    if (A !== null) {
      u.shared.pending = null;
      var $ = A,
        P = $.next;
      (($.next = null), v === null ? (f = P) : (v.next = P), (v = $));
      var te = e.alternate;
      te !== null &&
        ((te = te.updateQueue),
        (A = te.lastBaseUpdate),
        A !== v &&
          (A === null ? (te.firstBaseUpdate = P) : (A.next = P),
          (te.lastBaseUpdate = $)));
    }
    if (f !== null) {
      var re = u.baseState;
      ((v = 0), (te = P = $ = null), (A = f));
      do {
        var I = A.lane & -536870913,
          J = I !== A.lane;
        if (J ? (Ne & I) === I : (l & I) === I) {
          (I !== 0 && I === kr && (Oc = !0),
            te !== null &&
              (te = te.next =
                {
                  lane: 0,
                  tag: A.tag,
                  payload: A.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var me = e,
              Se = A;
            I = t;
            var Ye = a;
            switch (Se.tag) {
              case 1:
                if (((me = Se.payload), typeof me == "function")) {
                  re = me.call(Ye, re, I);
                  break e;
                }
                re = me;
                break e;
              case 3:
                me.flags = (me.flags & -65537) | 128;
              case 0:
                if (
                  ((me = Se.payload),
                  (I = typeof me == "function" ? me.call(Ye, re, I) : me),
                  I == null)
                )
                  break e;
                re = g({}, re, I);
                break e;
              case 2:
                ya = !0;
            }
          }
          ((I = A.callback),
            I !== null &&
              ((e.flags |= 64),
              J && (e.flags |= 8192),
              (J = u.callbacks),
              J === null ? (u.callbacks = [I]) : J.push(I)));
        } else
          ((J = {
            lane: I,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null,
          }),
            te === null ? ((P = te = J), ($ = re)) : (te = te.next = J),
            (v |= I));
        if (((A = A.next), A === null)) {
          if (((A = u.shared.pending), A === null)) break;
          ((J = A),
            (A = J.next),
            (J.next = null),
            (u.lastBaseUpdate = J),
            (u.shared.pending = null));
        }
      } while (!0);
      (te === null && ($ = re),
        (u.baseState = $),
        (u.firstBaseUpdate = P),
        (u.lastBaseUpdate = te),
        f === null && (u.shared.lanes = 0),
        (Ca |= v),
        (e.lanes = v),
        (e.memoizedState = re));
    }
  }
  function Cp(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function Tp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Cp(a[e], t);
  }
  var Xr = U(null),
    Vo = U(0);
  function wp(e, t) {
    ((e = Kn), le(Vo, e), le(Xr, t), (Kn = e | t.baseLanes));
  }
  function jc() {
    (le(Vo, Kn), le(Xr, Xr.current));
  }
  function Dc() {
    ((Kn = Vo.current), X(Xr), X(Vo));
  }
  var kt = U(null),
    an = null;
  function ba(e) {
    var t = e.alternate;
    (le(et, et.current & 1),
      le(kt, e),
      an === null &&
        (t === null || Xr.current !== null || t.memoizedState !== null) &&
        (an = e));
  }
  function Uc(e) {
    (le(et, et.current), le(kt, e), an === null && (an = e));
  }
  function Rp(e) {
    e.tag === 22
      ? (le(et, et.current), le(kt, e), an === null && (an = e))
      : Sa();
  }
  function Sa() {
    (le(et, et.current), le(kt, kt.current));
  }
  function Yt(e) {
    (X(kt), an === e && (an = null), X(et));
  }
  var et = U(0);
  function Go(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || kf(a) || Yf(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var kn = 0,
    Te = null,
    Qe = null,
    rt = null,
    Xo = !1,
    Zr = !1,
    tr = !1,
    Zo = 0,
    ei = 0,
    Pr = null,
    r2 = 0;
  function Je() {
    throw Error(o(321));
  }
  function Lc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!qt(e[a], t[a])) return !1;
    return !0;
  }
  function Bc(e, t, a, l, u, f) {
    return (
      (kn = f),
      (Te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Q.H = e === null || e.memoizedState === null ? uy : Jc),
      (tr = !1),
      (f = a(l, u)),
      (tr = !1),
      Zr && (f = Ap(t, a, l, u)),
      _p(e),
      f
    );
  }
  function _p(e) {
    Q.H = ai;
    var t = Qe !== null && Qe.next !== null;
    if (((kn = 0), (rt = Qe = Te = null), (Xo = !1), (ei = 0), (Pr = null), t))
      throw Error(o(300));
    e === null ||
      lt ||
      ((e = e.dependencies), e !== null && Bo(e) && (lt = !0));
  }
  function Ap(e, t, a, l) {
    Te = e;
    var u = 0;
    do {
      if ((Zr && (Pr = null), (ei = 0), (Zr = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (rt = Qe = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        ((f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0));
      }
      ((Q.H = cy), (f = t(a, l)));
    } while (Zr);
    return f;
  }
  function l2() {
    var e = Q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ti(t) : t),
      (e = e.useState()[0]),
      (Qe !== null ? Qe.memoizedState : null) !== e && (Te.flags |= 1024),
      t
    );
  }
  function Hc() {
    var e = Zo !== 0;
    return ((Zo = 0), e);
  }
  function $c(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function qc(e) {
    if (Xo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Xo = !1;
    }
    ((kn = 0), (rt = Qe = Te = null), (Zr = !1), (ei = Zo = 0), (Pr = null));
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (rt === null ? (Te.memoizedState = rt = e) : (rt = rt.next = e), rt);
  }
  function tt() {
    if (Qe === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = rt === null ? Te.memoizedState : rt.next;
    if (t !== null) ((rt = t), (Qe = e));
    else {
      if (e === null)
        throw Te.alternate === null ? Error(o(467)) : Error(o(310));
      ((Qe = e),
        (e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null,
        }),
        rt === null ? (Te.memoizedState = rt = e) : (rt = rt.next = e));
    }
    return rt;
  }
  function Po() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ti(e) {
    var t = ei;
    return (
      (ei += 1),
      Pr === null && (Pr = []),
      (e = vp(Pr, e, t)),
      (t = Te),
      (rt === null ? t.memoizedState : rt.next) === null &&
        ((t = t.alternate),
        (Q.H = t === null || t.memoizedState === null ? uy : Jc)),
      e
    );
  }
  function Io(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ti(e);
      if (e.$$typeof === w) return pt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Qc(e) {
    var t = null,
      a = Te.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = Te.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Po()), (Te.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = H;
    return (t.index++, a);
  }
  function Yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ko(e) {
    var t = tt();
    return kc(t, Qe, e);
  }
  function kc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var v = u.next;
        ((u.next = f.next), (f.next = v));
      }
      ((t.baseQueue = u = f), (l.pending = null));
    }
    if (((f = e.baseState), u === null)) e.memoizedState = f;
    else {
      t = u.next;
      var A = (v = null),
        $ = null,
        P = t,
        te = !1;
      do {
        var re = P.lane & -536870913;
        if (re !== P.lane ? (Ne & re) === re : (kn & re) === re) {
          var I = P.revertLane;
          if (I === 0)
            ($ !== null &&
              ($ = $.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: P.action,
                  hasEagerState: P.hasEagerState,
                  eagerState: P.eagerState,
                  next: null,
                }),
              re === kr && (te = !0));
          else if ((kn & I) === I) {
            ((P = P.next), I === kr && (te = !0));
            continue;
          } else
            ((re = {
              lane: 0,
              revertLane: P.revertLane,
              gesture: null,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null,
            }),
              $ === null ? ((A = $ = re), (v = f)) : ($ = $.next = re),
              (Te.lanes |= I),
              (Ca |= I));
          ((re = P.action),
            tr && a(f, re),
            (f = P.hasEagerState ? P.eagerState : a(f, re)));
        } else
          ((I = {
            lane: re,
            revertLane: P.revertLane,
            gesture: P.gesture,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          }),
            $ === null ? ((A = $ = I), (v = f)) : ($ = $.next = I),
            (Te.lanes |= re),
            (Ca |= re));
        P = P.next;
      } while (P !== null && P !== t);
      if (
        ($ === null ? (v = f) : ($.next = A),
        !qt(f, e.memoizedState) && ((lt = !0), te && ((a = Yr), a !== null)))
      )
        throw a;
      ((e.memoizedState = f),
        (e.baseState = v),
        (e.baseQueue = $),
        (l.lastRenderedState = f));
    }
    return (u === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Yc(e) {
    var t = tt(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      u = a.pending,
      f = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var v = (u = u.next);
      do ((f = e(f, v.action)), (v = v.next));
      while (v !== u);
      (qt(f, t.memoizedState) || (lt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (a.lastRenderedState = f));
    }
    return [f, l];
  }
  function Mp(e, t, a) {
    var l = Te,
      u = tt(),
      f = je;
    if (f) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var v = !qt((Qe || u).memoizedState, a);
    if (
      (v && ((u.memoizedState = a), (lt = !0)),
      (u = u.queue),
      Xc(Op.bind(null, l, u, e), [e]),
      u.getSnapshot !== t || v || (rt !== null && rt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Ir(9, { destroy: void 0 }, zp.bind(null, l, u, a, t), null),
        Ve === null)
      )
        throw Error(o(349));
      f || (kn & 127) !== 0 || Np(l, t, a);
    }
    return a;
  }
  function Np(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = Te.updateQueue),
      t === null
        ? ((t = Po()), (Te.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function zp(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), jp(t) && Dp(e));
  }
  function Op(e, t, a) {
    return a(function () {
      jp(t) && Dp(e);
    });
  }
  function jp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !qt(e, a);
    } catch {
      return !0;
    }
  }
  function Dp(e) {
    var t = Xa(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function Vc(e) {
    var t = wt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), tr)) {
        Tn(!0);
        try {
          a();
        } finally {
          Tn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Up(e, t, a, l) {
    return ((e.baseState = a), kc(e, Qe, typeof l == "function" ? l : Yn));
  }
  function i2(e, t, a, l, u) {
    if (Wo(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          f.listeners.push(v);
        },
      };
      (Q.T !== null ? a(!0) : (f.isTransition = !1),
        l(f),
        (a = t.pending),
        a === null
          ? ((f.next = t.pending = f), Lp(t, f))
          : ((f.next = a.next), (t.pending = a.next = f)));
    }
  }
  function Lp(e, t) {
    var a = t.action,
      l = t.payload,
      u = e.state;
    if (t.isTransition) {
      var f = Q.T,
        v = {};
      Q.T = v;
      try {
        var A = a(u, l),
          $ = Q.S;
        ($ !== null && $(v, A), Bp(e, t, A));
      } catch (P) {
        Gc(e, t, P);
      } finally {
        (f !== null && v.types !== null && (f.types = v.types), (Q.T = f));
      }
    } else
      try {
        ((f = a(u, l)), Bp(e, t, f));
      } catch (P) {
        Gc(e, t, P);
      }
  }
  function Bp(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Hp(e, t, l);
          },
          function (l) {
            return Gc(e, t, l);
          },
        )
      : Hp(e, t, a);
  }
  function Hp(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      $p(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Lp(e, a))));
  }
  function Gc(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = a), $p(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function $p(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function qp(e, t) {
    return t;
  }
  function Qp(e, t) {
    if (je) {
      var a = Ve.formState;
      if (a !== null) {
        e: {
          var l = Te;
          if (je) {
            if (Ge) {
              t: {
                for (var u = Ge, f = nn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (((u = rn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((f = u.data), (u = f === "F!" || f === "F" ? u : null));
              }
              if (u) {
                ((Ge = rn(u.nextSibling)), (l = u.data === "F!"));
                break e;
              }
            }
            ha(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = wt()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qp,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = iy.bind(null, Te, l)),
      (l.dispatch = a),
      (l = Vc(!1)),
      (f = Fc.bind(null, Te, !1, l.queue)),
      (l = wt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (a = i2.bind(null, Te, u, f, a)),
      (u.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function kp(e) {
    var t = tt();
    return Yp(t, Qe, e);
  }
  function Yp(e, t, a) {
    if (
      ((t = kc(e, t, qp)[0]),
      (e = Ko(Yn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = ti(t);
      } catch (v) {
        throw v === Vr ? qo : v;
      }
    else l = t;
    t = tt();
    var u = t.queue,
      f = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((Te.flags |= 2048),
        Ir(9, { destroy: void 0 }, o2.bind(null, u, a), null)),
      [l, f, e]
    );
  }
  function o2(e, t) {
    e.action = t;
  }
  function Vp(e) {
    var t = tt(),
      a = Qe;
    if (a !== null) return Yp(t, a, e);
    (tt(), (t = t.memoizedState), (a = tt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function Ir(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = Te.updateQueue),
      t === null && ((t = Po()), (Te.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Gp() {
    return tt().memoizedState;
  }
  function Fo(e, t, a, l) {
    var u = wt();
    ((Te.flags |= e),
      (u.memoizedState = Ir(
        1 | t,
        { destroy: void 0 },
        a,
        l === void 0 ? null : l,
      )));
  }
  function Jo(e, t, a, l) {
    var u = tt();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    Qe !== null && l !== null && Lc(l, Qe.memoizedState.deps)
      ? (u.memoizedState = Ir(t, f, a, l))
      : ((Te.flags |= e), (u.memoizedState = Ir(1 | t, f, a, l)));
  }
  function Xp(e, t) {
    Fo(8390656, 8, e, t);
  }
  function Xc(e, t) {
    Jo(2048, 8, e, t);
  }
  function s2(e) {
    Te.flags |= 4;
    var t = Te.updateQueue;
    if (t === null) ((t = Po()), (Te.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function Zp(e) {
    var t = tt().memoizedState;
    return (
      s2({ ref: t, nextImpl: e }),
      function () {
        if ((Be & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Pp(e, t) {
    return Jo(4, 2, e, t);
  }
  function Ip(e, t) {
    return Jo(4, 4, e, t);
  }
  function Kp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Fp(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Jo(4, 4, Kp.bind(null, t, e), a));
  }
  function Zc() {}
  function Jp(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Lc(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Wp(e, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Lc(t, l[1])) return l[0];
    if (((l = e()), tr)) {
      Tn(!0);
      try {
        e();
      } finally {
        Tn(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function Pc(e, t, a) {
    return a === void 0 || ((kn & 1073741824) !== 0 && (Ne & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = eg()), (Te.lanes |= e), (Ca |= e), a);
  }
  function ey(e, t, a, l) {
    return qt(a, t)
      ? a
      : Xr.current !== null
        ? ((e = Pc(e, a, l)), qt(e, t) || (lt = !0), e)
        : (kn & 42) === 0 || ((kn & 1073741824) !== 0 && (Ne & 261930) === 0)
          ? ((lt = !0), (e.memoizedState = a))
          : ((e = eg()), (Te.lanes |= e), (Ca |= e), t);
  }
  function ty(e, t, a, l, u) {
    var f = K.p;
    K.p = f !== 0 && 8 > f ? f : 8;
    var v = Q.T,
      A = {};
    ((Q.T = A), Fc(e, !1, t, a));
    try {
      var $ = u(),
        P = Q.S;
      if (
        (P !== null && P(A, $),
        $ !== null && typeof $ == "object" && typeof $.then == "function")
      ) {
        var te = a2($, l);
        ni(e, t, te, Xt(e));
      } else ni(e, t, l, Xt(e));
    } catch (re) {
      ni(e, t, { then: function () {}, status: "rejected", reason: re }, Xt());
    } finally {
      ((K.p = f),
        v !== null && A.types !== null && (v.types = A.types),
        (Q.T = v));
    }
  }
  function u2() {}
  function Ic(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = ny(e).queue;
    ty(
      e,
      u,
      t,
      F,
      a === null
        ? u2
        : function () {
            return (ay(e), a(l));
          },
    );
  }
  function ny(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: F,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function ay(e) {
    var t = ny(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ni(e, t.next.queue, {}, Xt()));
  }
  function Kc() {
    return pt(bi);
  }
  function ry() {
    return tt().memoizedState;
  }
  function ly() {
    return tt().memoizedState;
  }
  function c2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Xt();
          e = ga(a);
          var l = va(t, e, a);
          (l !== null && (Dt(l, t, a), Fl(l, t, a)),
            (t = { cache: wc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function f2(e, t, a) {
    var l = Xt();
    ((a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Wo(e)
        ? oy(t, a)
        : ((a = hc(e, t, a, l)), a !== null && (Dt(a, e, l), sy(a, t, l))));
  }
  function iy(e, t, a) {
    var l = Xt();
    ni(e, t, a, l);
  }
  function ni(e, t, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Wo(e)) oy(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var v = t.lastRenderedState,
            A = f(v, a);
          if (((u.hasEagerState = !0), (u.eagerState = A), qt(A, v)))
            return (jo(e, t, u, 0), Ve === null && Oo(), !1);
        } catch {
        } finally {
        }
      if (((a = hc(e, t, u, l)), a !== null))
        return (Dt(a, e, l), sy(a, t, l), !0);
    }
    return !1;
  }
  function Fc(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Nf(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Wo(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = hc(e, a, l, 2)), t !== null && Dt(t, e, 2));
  }
  function Wo(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function oy(e, t) {
    Zr = Xo = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function sy(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), mh(e, a));
    }
  }
  var ai = {
    readContext: pt,
    use: Io,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useLayoutEffect: Je,
    useInsertionEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useSyncExternalStore: Je,
    useId: Je,
    useHostTransitionStatus: Je,
    useFormState: Je,
    useActionState: Je,
    useOptimistic: Je,
    useMemoCache: Je,
    useCacheRefresh: Je,
  };
  ai.useEffectEvent = Je;
  var uy = {
      readContext: pt,
      use: Io,
      useCallback: function (e, t) {
        return ((wt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: pt,
      useEffect: Xp,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          Fo(4194308, 4, Kp.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return Fo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Fo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = wt();
        t = t === void 0 ? null : t;
        var l = e();
        if (tr) {
          Tn(!0);
          try {
            e();
          } finally {
            Tn(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = wt();
        if (a !== void 0) {
          var u = a(t);
          if (tr) {
            Tn(!0);
            try {
              a(t);
            } finally {
              Tn(!1);
            }
          }
        } else u = t;
        return (
          (l.memoizedState = l.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (l.queue = e),
          (e = e.dispatch = f2.bind(null, Te, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = wt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Vc(e);
        var t = e.queue,
          a = iy.bind(null, Te, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Zc,
      useDeferredValue: function (e, t) {
        var a = wt();
        return Pc(a, e, t);
      },
      useTransition: function () {
        var e = Vc(!1);
        return (
          (e = ty.bind(null, Te, e.queue, !0, !1)),
          (wt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = Te,
          u = wt();
        if (je) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), Ve === null)) throw Error(o(349));
          (Ne & 127) !== 0 || Np(l, t, a);
        }
        u.memoizedState = a;
        var f = { value: a, getSnapshot: t };
        return (
          (u.queue = f),
          Xp(Op.bind(null, l, f, e), [e]),
          (l.flags |= 2048),
          Ir(9, { destroy: void 0 }, zp.bind(null, l, f, a, t), null),
          a
        );
      },
      useId: function () {
        var e = wt(),
          t = Ve.identifierPrefix;
        if (je) {
          var a = _n,
            l = Rn;
          ((a = (l & ~(1 << (32 - Tt(l) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Zo++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = r2++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Kc,
      useFormState: Qp,
      useActionState: Qp,
      useOptimistic: function (e) {
        var t = wt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Fc.bind(null, Te, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Qc,
      useCacheRefresh: function () {
        return (wt().memoizedState = c2.bind(null, Te));
      },
      useEffectEvent: function (e) {
        var t = wt(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((Be & 2) !== 0) throw Error(o(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Jc = {
      readContext: pt,
      use: Io,
      useCallback: Jp,
      useContext: pt,
      useEffect: Xc,
      useImperativeHandle: Fp,
      useInsertionEffect: Pp,
      useLayoutEffect: Ip,
      useMemo: Wp,
      useReducer: Ko,
      useRef: Gp,
      useState: function () {
        return Ko(Yn);
      },
      useDebugValue: Zc,
      useDeferredValue: function (e, t) {
        var a = tt();
        return ey(a, Qe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ko(Yn)[0],
          t = tt().memoizedState;
        return [typeof e == "boolean" ? e : ti(e), t];
      },
      useSyncExternalStore: Mp,
      useId: ry,
      useHostTransitionStatus: Kc,
      useFormState: kp,
      useActionState: kp,
      useOptimistic: function (e, t) {
        var a = tt();
        return Up(a, Qe, e, t);
      },
      useMemoCache: Qc,
      useCacheRefresh: ly,
    };
  Jc.useEffectEvent = Zp;
  var cy = {
    readContext: pt,
    use: Io,
    useCallback: Jp,
    useContext: pt,
    useEffect: Xc,
    useImperativeHandle: Fp,
    useInsertionEffect: Pp,
    useLayoutEffect: Ip,
    useMemo: Wp,
    useReducer: Yc,
    useRef: Gp,
    useState: function () {
      return Yc(Yn);
    },
    useDebugValue: Zc,
    useDeferredValue: function (e, t) {
      var a = tt();
      return Qe === null ? Pc(a, e, t) : ey(a, Qe.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Yc(Yn)[0],
        t = tt().memoizedState;
      return [typeof e == "boolean" ? e : ti(e), t];
    },
    useSyncExternalStore: Mp,
    useId: ry,
    useHostTransitionStatus: Kc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function (e, t) {
      var a = tt();
      return Qe !== null
        ? Up(a, Qe, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: Qc,
    useCacheRefresh: ly,
  };
  cy.useEffectEvent = Zp;
  function Wc(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : g({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var ef = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = Xt(),
        u = ga(l);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = va(e, u, l)),
        t !== null && (Dt(t, e, l), Fl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = Xt(),
        u = ga(l);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = va(e, u, l)),
        t !== null && (Dt(t, e, l), Fl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Xt(),
        l = ga(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = va(e, l, a)),
        t !== null && (Dt(t, e, a), Fl(t, e, a)));
    },
  };
  function fy(e, t, a, l, u, f, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, v)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yl(a, l) || !Yl(u, f)
          : !0
    );
  }
  function dy(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && ef.enqueueReplaceState(t, t.state, null));
  }
  function nr(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = g({}, a));
      for (var u in e) a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function my(e) {
    zo(e);
  }
  function hy(e) {
    console.error(e);
  }
  function py(e) {
    zo(e);
  }
  function es(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function yy(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function tf(e, t, a) {
    return (
      (a = ga(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        es(e, t);
      }),
      a
    );
  }
  function gy(e) {
    return ((e = ga(e)), (e.tag = 3), e);
  }
  function vy(e, t, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      ((e.payload = function () {
        return u(f);
      }),
        (e.callback = function () {
          yy(t, a, l);
        }));
    }
    var v = a.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (e.callback = function () {
        (yy(t, a, l),
          typeof u != "function" &&
            (Ta === null ? (Ta = new Set([this])) : Ta.add(this)));
        var A = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: A !== null ? A : "",
        });
      });
  }
  function d2(e, t, a, l, u) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Qr(t, a, u, !0),
        (a = kt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              an === null ? ds() : a.alternate === null && We === 0 && (We = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              l === Qo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  _f(e, l, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Qo
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  _f(e, l, u)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (_f(e, l, u), ds(), !1);
    }
    if (je)
      return (
        (t = kt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            l !== Sc && ((e = Error(o(422), { cause: l })), Xl(Wt(e, a))))
          : (l !== Sc && ((t = Error(o(423), { cause: l })), Xl(Wt(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = Wt(l, a)),
            (u = tf(e.stateNode, l, u)),
            zc(e, u),
            We !== 4 && (We = 2)),
        !1
      );
    var f = Error(o(520), { cause: l });
    if (
      ((f = Wt(f, a)),
      fi === null ? (fi = [f]) : fi.push(f),
      We !== 4 && (We = 2),
      t === null)
    )
      return !0;
    ((l = Wt(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = tf(a.stateNode, l, e)),
            zc(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (f = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (Ta === null || !Ta.has(f)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = gy(u)),
              vy(u, e, a, l),
              zc(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var nf = Error(o(461)),
    lt = !1;
  function yt(e, t, a, l) {
    t.child = e === null ? Ep(t, null, a, l) : er(t, e.child, a, l);
  }
  function by(e, t, a, l, u) {
    a = a.render;
    var f = t.ref;
    if ("ref" in l) {
      var v = {};
      for (var A in l) A !== "ref" && (v[A] = l[A]);
    } else v = l;
    return (
      Ka(t),
      (l = Bc(e, t, a, v, f, u)),
      (A = Hc()),
      e !== null && !lt
        ? ($c(e, t, u), Vn(e, t, u))
        : (je && A && vc(t), (t.flags |= 1), yt(e, t, l, u), t.child)
    );
  }
  function Sy(e, t, a, l, u) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" &&
        !pc(f) &&
        f.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = f), xy(e, t, f, l, u))
        : ((e = Uo(a.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !ff(e, u))) {
      var v = f.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Yl), a(v, l) && e.ref === t.ref)
      )
        return Vn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Hn(f, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function xy(e, t, a, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Yl(f, l) && e.ref === t.ref)
        if (((lt = !1), (t.pendingProps = l = f), ff(e, u)))
          (e.flags & 131072) !== 0 && (lt = !0);
        else return ((t.lanes = e.lanes), Vn(e, t, u));
    }
    return af(e, t, a, l, u);
  }
  function Ey(e, t, a, l) {
    var u = l.children,
      f = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | a : a), e !== null)) {
          for (l = t.child = e.child, u = 0; l !== null; )
            ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          l = u & ~f;
        } else ((l = 0), (t.child = null));
        return Cy(e, t, f, a, l);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && $o(t, f !== null ? f.cachePool : null),
          f !== null ? wp(t, f) : jc(),
          Rp(t));
      else
        return (
          (l = t.lanes = 536870912),
          Cy(e, t, f !== null ? f.baseLanes | a : a, a, l)
        );
    } else
      f !== null
        ? ($o(t, f.cachePool), wp(t, f), Sa(), (t.memoizedState = null))
        : (e !== null && $o(t, null), jc(), Sa());
    return (yt(e, t, u, a), t.child);
  }
  function ri(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Cy(e, t, a, l, u) {
    var f = _c();
    return (
      (f = f === null ? null : { parent: at._currentValue, pool: f }),
      (t.memoizedState = { baseLanes: a, cachePool: f }),
      e !== null && $o(t, null),
      jc(),
      Rp(t),
      e !== null && Qr(e, t, l, !0),
      (t.childLanes = u),
      null
    );
  }
  function ts(e, t) {
    return (
      (t = as({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ty(e, t, a) {
    return (
      er(t, e.child, null, a),
      (e = ts(t, t.pendingProps)),
      (e.flags |= 2),
      Yt(t),
      (t.memoizedState = null),
      e
    );
  }
  function m2(e, t, a) {
    var l = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (je) {
        if (l.mode === "hidden")
          return ((e = ts(t, l)), (t.lanes = 536870912), ri(null, e));
        if (
          (Uc(t),
          (e = Ge)
            ? ((e = Lg(e, nn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: da !== null ? { id: Rn, overflow: _n } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = op(e)),
                (a.return = t),
                (t.child = a),
                (ht = t),
                (Ge = null)))
            : (e = null),
          e === null)
        )
          throw ha(t);
        return ((t.lanes = 536870912), null);
      }
      return ts(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if ((Uc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Ty(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (lt || Qr(e, t, a, !1), (u = (a & e.childLanes) !== 0), lt || u)
      ) {
        if (
          ((l = Ve),
          l !== null && ((v = hh(l, a)), v !== 0 && v !== f.retryLane))
        )
          throw ((f.retryLane = v), Xa(e, v), Dt(l, e, v), nf);
        (ds(), (t = Ty(e, t, a)));
      } else
        ((e = f.treeContext),
          (Ge = rn(v.nextSibling)),
          (ht = t),
          (je = !0),
          (ma = null),
          (nn = !1),
          e !== null && cp(t, e),
          (t = ts(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Hn(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ns(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function af(e, t, a, l, u) {
    return (
      Ka(t),
      (a = Bc(e, t, a, l, void 0, u)),
      (l = Hc()),
      e !== null && !lt
        ? ($c(e, t, u), Vn(e, t, u))
        : (je && l && vc(t), (t.flags |= 1), yt(e, t, a, u), t.child)
    );
  }
  function wy(e, t, a, l, u, f) {
    return (
      Ka(t),
      (t.updateQueue = null),
      (a = Ap(t, l, a, u)),
      _p(e),
      (l = Hc()),
      e !== null && !lt
        ? ($c(e, t, f), Vn(e, t, f))
        : (je && l && vc(t), (t.flags |= 1), yt(e, t, a, f), t.child)
    );
  }
  function Ry(e, t, a, l, u) {
    if ((Ka(t), t.stateNode === null)) {
      var f = Br,
        v = a.contextType;
      (typeof v == "object" && v !== null && (f = pt(v)),
        (f = new a(l, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = ef),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = l),
        (f.state = t.memoizedState),
        (f.refs = {}),
        Mc(t),
        (v = a.contextType),
        (f.context = typeof v == "object" && v !== null ? pt(v) : Br),
        (f.state = t.memoizedState),
        (v = a.getDerivedStateFromProps),
        typeof v == "function" && (Wc(t, a, v, l), (f.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((v = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          v !== f.state && ef.enqueueReplaceState(f, f.state, null),
          Wl(t, l, f, u),
          Jl(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      f = t.stateNode;
      var A = t.memoizedProps,
        $ = nr(a, A);
      f.props = $;
      var P = f.context,
        te = a.contextType;
      ((v = Br), typeof te == "object" && te !== null && (v = pt(te)));
      var re = a.getDerivedStateFromProps;
      ((te =
        typeof re == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (A = t.pendingProps !== A),
        te ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((A || P !== v) && dy(t, f, l, v)),
        (ya = !1));
      var I = t.memoizedState;
      ((f.state = I),
        Wl(t, l, f, u),
        Jl(),
        (P = t.memoizedState),
        A || I !== P || ya
          ? (typeof re == "function" &&
              (Wc(t, a, re, l), (P = t.memoizedState)),
            ($ = ya || fy(t, a, $, l, I, P, v))
              ? (te ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = P)),
            (f.props = l),
            (f.state = P),
            (f.context = v),
            (l = $))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((f = t.stateNode),
        Nc(e, t),
        (v = t.memoizedProps),
        (te = nr(a, v)),
        (f.props = te),
        (re = t.pendingProps),
        (I = f.context),
        (P = a.contextType),
        ($ = Br),
        typeof P == "object" && P !== null && ($ = pt(P)),
        (A = a.getDerivedStateFromProps),
        (P =
          typeof A == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v !== re || I !== $) && dy(t, f, l, $)),
        (ya = !1),
        (I = t.memoizedState),
        (f.state = I),
        Wl(t, l, f, u),
        Jl());
      var J = t.memoizedState;
      v !== re ||
      I !== J ||
      ya ||
      (e !== null && e.dependencies !== null && Bo(e.dependencies))
        ? (typeof A == "function" && (Wc(t, a, A, l), (J = t.memoizedState)),
          (te =
            ya ||
            fy(t, a, te, l, I, J, $) ||
            (e !== null && e.dependencies !== null && Bo(e.dependencies)))
            ? (P ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(l, J, $),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(l, J, $)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (v === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (v === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = J)),
          (f.props = l),
          (f.state = J),
          (f.context = $),
          (l = te))
        : (typeof f.componentDidUpdate != "function" ||
            (v === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (v === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      ns(e, t),
      (l = (t.flags & 128) !== 0),
      f || l
        ? ((f = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = er(t, e.child, null, u)),
              (t.child = er(t, null, a, u)))
            : yt(e, t, a, u),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = Vn(e, t, u)),
      e
    );
  }
  function _y(e, t, a, l) {
    return (Pa(), (t.flags |= 256), yt(e, t, a, l), t.child);
  }
  var rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function lf(e) {
    return { baseLanes: e, cachePool: yp() };
  }
  function of(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Gt), e);
  }
  function Ay(e, t, a) {
    var l = t.pendingProps,
      u = !1,
      f = (t.flags & 128) !== 0,
      v;
    if (
      ((v = f) ||
        (v =
          e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0),
      v && ((u = !0), (t.flags &= -129)),
      (v = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (je) {
        if (
          (u ? ba(t) : Sa(),
          (e = Ge)
            ? ((e = Lg(e, nn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: da !== null ? { id: Rn, overflow: _n } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = op(e)),
                (a.return = t),
                (t.child = a),
                (ht = t),
                (Ge = null)))
            : (e = null),
          e === null)
        )
          throw ha(t);
        return (Yf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var A = l.children;
      return (
        (l = l.fallback),
        u
          ? (Sa(),
            (u = t.mode),
            (A = as({ mode: "hidden", children: A }, u)),
            (l = Za(l, u, a, null)),
            (A.return = t),
            (l.return = t),
            (A.sibling = l),
            (t.child = A),
            (l = t.child),
            (l.memoizedState = lf(a)),
            (l.childLanes = of(e, v, a)),
            (t.memoizedState = rf),
            ri(null, l))
          : (ba(t), sf(t, A))
      );
    }
    var $ = e.memoizedState;
    if ($ !== null && ((A = $.dehydrated), A !== null)) {
      if (f)
        t.flags & 256
          ? (ba(t), (t.flags &= -257), (t = uf(e, t, a)))
          : t.memoizedState !== null
            ? (Sa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Sa(),
              (A = l.fallback),
              (u = t.mode),
              (l = as({ mode: "visible", children: l.children }, u)),
              (A = Za(A, u, a, null)),
              (A.flags |= 2),
              (l.return = t),
              (A.return = t),
              (l.sibling = A),
              (t.child = l),
              er(t, e.child, null, a),
              (l = t.child),
              (l.memoizedState = lf(a)),
              (l.childLanes = of(e, v, a)),
              (t.memoizedState = rf),
              (t = ri(null, l)));
      else if ((ba(t), Yf(A))) {
        if (((v = A.nextSibling && A.nextSibling.dataset), v)) var P = v.dgst;
        ((v = P),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = v),
          Xl({ value: l, source: null, stack: null }),
          (t = uf(e, t, a)));
      } else if (
        (lt || Qr(e, t, a, !1), (v = (a & e.childLanes) !== 0), lt || v)
      ) {
        if (
          ((v = Ve),
          v !== null && ((l = hh(v, a)), l !== 0 && l !== $.retryLane))
        )
          throw (($.retryLane = l), Xa(e, l), Dt(v, e, l), nf);
        (kf(A) || ds(), (t = uf(e, t, a)));
      } else
        kf(A)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = $.treeContext),
            (Ge = rn(A.nextSibling)),
            (ht = t),
            (je = !0),
            (ma = null),
            (nn = !1),
            e !== null && cp(t, e),
            (t = sf(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Sa(),
        (A = l.fallback),
        (u = t.mode),
        ($ = e.child),
        (P = $.sibling),
        (l = Hn($, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = $.subtreeFlags & 65011712),
        P !== null ? (A = Hn(P, A)) : ((A = Za(A, u, a, null)), (A.flags |= 2)),
        (A.return = t),
        (l.return = t),
        (l.sibling = A),
        (t.child = l),
        ri(null, l),
        (l = t.child),
        (A = e.child.memoizedState),
        A === null
          ? (A = lf(a))
          : ((u = A.cachePool),
            u !== null
              ? (($ = at._currentValue),
                (u = u.parent !== $ ? { parent: $, pool: $ } : u))
              : (u = yp()),
            (A = { baseLanes: A.baseLanes | a, cachePool: u })),
        (l.memoizedState = A),
        (l.childLanes = of(e, v, a)),
        (t.memoizedState = rf),
        ri(e.child, l))
      : (ba(t),
        (a = e.child),
        (e = a.sibling),
        (a = Hn(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((v = t.deletions),
          v === null ? ((t.deletions = [e]), (t.flags |= 16)) : v.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function sf(e, t) {
    return (
      (t = as({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function as(e, t) {
    return ((e = Qt(22, e, null, t)), (e.lanes = 0), e);
  }
  function uf(e, t, a) {
    return (
      er(t, e.child, null, a),
      (e = sf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function My(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Cc(e.return, t, a));
  }
  function cf(e, t, a, l, u, f) {
    var v = e.memoizedState;
    v === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: u,
          treeForkCount: f,
        })
      : ((v.isBackwards = t),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = l),
        (v.tail = a),
        (v.tailMode = u),
        (v.treeForkCount = f));
  }
  function Ny(e, t, a) {
    var l = t.pendingProps,
      u = l.revealOrder,
      f = l.tail;
    l = l.children;
    var v = et.current,
      A = (v & 2) !== 0;
    if (
      (A ? ((v = (v & 1) | 2), (t.flags |= 128)) : (v &= 1),
      le(et, v),
      yt(e, t, l, a),
      (l = je ? Gl : 0),
      !A && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && My(e, a, t);
        else if (e.tag === 19) My(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((e = a.alternate),
            e !== null && Go(e) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          cf(t, !1, u, a, f, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Go(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = a), (a = u), (u = e));
        }
        cf(t, !0, a, null, f, l);
        break;
      case "together":
        cf(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vn(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ca |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Qr(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Hn(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (a = a.sibling = Hn(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function ff(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Bo(e)));
  }
  function h2(e, t, a) {
    switch (t.tag) {
      case 3:
        (he(t, t.stateNode.containerInfo),
          pa(t, at, e.memoizedState.cache),
          Pa());
        break;
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        he(t, t.stateNode.containerInfo);
        break;
      case 10:
        pa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Uc(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ba(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Ay(e, t, a)
              : (ba(t), (e = Vn(e, t, a)), e !== null ? e.sibling : null);
        ba(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (Qr(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (l) return Ny(e, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          le(et, et.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ey(e, t, a, t.pendingProps));
      case 24:
        pa(t, at, e.memoizedState.cache);
    }
    return Vn(e, t, a);
  }
  function zy(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) lt = !0;
      else {
        if (!ff(e, a) && (t.flags & 128) === 0) return ((lt = !1), h2(e, t, a));
        lt = (e.flags & 131072) !== 0;
      }
    else ((lt = !1), je && (t.flags & 1048576) !== 0 && up(t, Gl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Ja(t.elementType)), (t.type = e), typeof e == "function"))
            pc(e)
              ? ((l = nr(e, l)), (t.tag = 1), (t = Ry(null, t, e, l, a)))
              : ((t.tag = 0), (t = af(null, t, e, l, a)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === z) {
                ((t.tag = 11), (t = by(null, t, e, l, a)));
                break e;
              } else if (u === O) {
                ((t.tag = 14), (t = Sy(null, t, e, l, a)));
                break e;
              }
            }
            throw ((t = G(e) || e), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return af(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (u = nr(l, t.pendingProps)), Ry(e, t, l, u, a));
      case 3:
        e: {
          if ((he(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          ((u = f.element), Nc(e, t), Wl(t, l, null, a));
          var v = t.memoizedState;
          if (
            ((l = v.cache),
            pa(t, at, l),
            l !== f.cache && Tc(t, [at], a, !0),
            Jl(),
            (l = v.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: l, isDehydrated: !1, cache: v.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = _y(e, t, l, a);
              break e;
            } else if (l !== u) {
              ((u = Wt(Error(o(424)), t)), Xl(u), (t = _y(e, t, l, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ge = rn(e.firstChild),
                  ht = t,
                  je = !0,
                  ma = null,
                  nn = !0,
                  a = Ep(t, null, l, a),
                  t.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Pa(), l === u)) {
              t = Vn(e, t, a);
              break e;
            }
            yt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ns(e, t),
          e === null
            ? (a = kg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : je ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = bs(ce.current).createElement(a)),
                (l[mt] = t),
                (l[At] = e),
                gt(l, a, e),
                ct(l),
                (t.stateNode = l))
            : (t.memoizedState = kg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ge(t),
          e === null &&
            je &&
            ((l = t.stateNode = $g(t.type, t.pendingProps, ce.current)),
            (ht = t),
            (nn = !0),
            (u = Ge),
            Aa(t.type) ? ((Vf = u), (Ge = rn(l.firstChild))) : (Ge = u)),
          yt(e, t, t.pendingProps.children, a),
          ns(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            je &&
            ((u = l = Ge) &&
              ((l = V2(l, t.type, t.pendingProps, nn)),
              l !== null
                ? ((t.stateNode = l),
                  (ht = t),
                  (Ge = rn(l.firstChild)),
                  (nn = !1),
                  (u = !0))
                : (u = !1)),
            u || ha(t)),
          ge(t),
          (u = t.type),
          (f = t.pendingProps),
          (v = e !== null ? e.memoizedProps : null),
          (l = f.children),
          $f(u, f) ? (l = null) : v !== null && $f(u, v) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Bc(e, t, l2, null, null, a)), (bi._currentValue = u)),
          ns(e, t),
          yt(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            je &&
            ((e = a = Ge) &&
              ((a = G2(a, t.pendingProps, nn)),
              a !== null
                ? ((t.stateNode = a), (ht = t), (Ge = null), (e = !0))
                : (e = !1)),
            e || ha(t)),
          null
        );
      case 13:
        return Ay(e, t, a);
      case 4:
        return (
          he(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = er(t, null, l, a)) : yt(e, t, l, a),
          t.child
        );
      case 11:
        return by(e, t, t.type, t.pendingProps, a);
      case 7:
        return (yt(e, t, t.pendingProps, a), t.child);
      case 8:
        return (yt(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (yt(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          pa(t, t.type, l.value),
          yt(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (l = t.pendingProps.children),
          Ka(t),
          (u = pt(u)),
          (l = l(u)),
          (t.flags |= 1),
          yt(e, t, l, a),
          t.child
        );
      case 14:
        return Sy(e, t, t.type, t.pendingProps, a);
      case 15:
        return xy(e, t, t.type, t.pendingProps, a);
      case 19:
        return Ny(e, t, a);
      case 31:
        return m2(e, t, a);
      case 22:
        return Ey(e, t, a, t.pendingProps);
      case 24:
        return (
          Ka(t),
          (l = pt(at)),
          e === null
            ? ((u = _c()),
              u === null &&
                ((u = Ve),
                (f = wc()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= a),
                (u = f)),
              (t.memoizedState = { parent: l, cache: u }),
              Mc(t),
              pa(t, at, u))
            : ((e.lanes & a) !== 0 && (Nc(e, t), Wl(t, null, null, a), Jl()),
              (u = e.memoizedState),
              (f = t.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  pa(t, at, l))
                : ((l = f.cache),
                  pa(t, at, l),
                  l !== u.cache && Tc(t, [at], a, !0))),
          yt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Gn(e) {
    e.flags |= 4;
  }
  function df(e, t, a, l, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rg()) e.flags |= 8192;
        else throw ((Wa = Qo), Ac);
    } else e.flags &= -16777217;
  }
  function Oy(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Zg(t)))
      if (rg()) e.flags |= 8192;
      else throw ((Wa = Qo), Ac);
  }
  function rs(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? So() : 536870912), (e.lanes |= t), (Wr |= t)));
  }
  function li(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 65011712),
          (l |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function p2(e, t, a) {
    var l = t.pendingProps;
    switch ((bc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Xe(t), null);
      case 1:
        return (Xe(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Qn(at),
          de(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (qr(t)
              ? Gn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), xc())),
          Xe(t),
          null
        );
      case 26:
        var u = t.type,
          f = t.memoizedState;
        return (
          e === null
            ? (Gn(t),
              f !== null ? (Xe(t), Oy(t, f)) : (Xe(t), df(t, u, null, l, a)))
            : f
              ? f !== e.memoizedState
                ? (Gn(t), Xe(t), Oy(t, f))
                : (Xe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && Gn(t),
                Xe(t),
                df(t, u, e, l, a)),
          null
        );
      case 27:
        if (
          (xe(t),
          (a = ce.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && Gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (Xe(t), null);
          }
          ((e = ee.current),
            qr(t) ? fp(t) : ((e = $g(u, l, a)), (t.stateNode = e), Gn(t)));
        }
        return (Xe(t), null);
      case 5:
        if ((xe(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (Xe(t), null);
          }
          if (((f = ee.current), qr(t))) fp(t);
          else {
            var v = bs(ce.current);
            switch (f) {
              case 1:
                f = v.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    f = v.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    f = v.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((f = v.createElement("div")),
                      (f.innerHTML = "<script><\/script>"),
                      (f = f.removeChild(f.firstChild)));
                    break;
                  case "select":
                    ((f =
                      typeof l.is == "string"
                        ? v.createElement("select", { is: l.is })
                        : v.createElement("select")),
                      l.multiple
                        ? (f.multiple = !0)
                        : l.size && (f.size = l.size));
                    break;
                  default:
                    f =
                      typeof l.is == "string"
                        ? v.createElement(u, { is: l.is })
                        : v.createElement(u);
                }
            }
            ((f[mt] = t), (f[At] = l));
            e: for (v = t.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                ((v.child.return = v), (v = v.child));
                continue;
              }
              if (v === t) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === t) break e;
                v = v.return;
              }
              ((v.sibling.return = v.return), (v = v.sibling));
            }
            t.stateNode = f;
            e: switch ((gt(f, u, l), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Gn(t);
          }
        }
        return (
          Xe(t),
          df(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Gn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = ce.current), qr(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (u = ht),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            ((e[mt] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Ag(e.nodeValue, a)
              )),
              e || ha(t, !0));
          } else
            ((e = bs(e).createTextNode(l)), (e[mt] = t), (t.stateNode = e));
        }
        return (Xe(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = qr(t)), a !== null)) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[mt] = t;
            } else
              (Pa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Xe(t), (e = !1));
          } else
            ((a = xc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (Xe(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = qr(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[mt] = t;
            } else
              (Pa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Xe(t), (u = !1));
          } else
            ((u = xc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        return (
          Yt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = l !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((l = t.child),
                (u = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (u = l.alternate.memoizedState.cachePool.pool),
                (f = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (f = l.memoizedState.cachePool.pool),
                f !== u && (l.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              rs(t, t.updateQueue),
              Xe(t),
              null)
        );
      case 4:
        return (de(), e === null && Df(t.stateNode.containerInfo), Xe(t), null);
      case 10:
        return (Qn(t.type), Xe(t), null);
      case 19:
        if ((X(et), (l = t.memoizedState), l === null)) return (Xe(t), null);
        if (((u = (t.flags & 128) !== 0), (f = l.rendering), f === null))
          if (u) li(l, !1);
          else {
            if (We !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = Go(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      li(l, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      rs(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    (ip(a, e), (a = a.sibling));
                  return (
                    le(et, (et.current & 1) | 2),
                    je && $n(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              St() > us &&
              ((t.flags |= 128), (u = !0), li(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Go(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                rs(t, e),
                li(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !f.alternate &&
                  !je)
              )
                return (Xe(t), null);
            } else
              2 * St() - l.renderingStartTime > us &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), li(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = l.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (l.last = f));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = St()),
            (e.sibling = null),
            (a = et.current),
            le(et, u ? (a & 1) | 2 : a & 1),
            je && $n(t, l.treeForkCount),
            e)
          : (Xe(t), null);
      case 22:
      case 23:
        return (
          Yt(t),
          Dc(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Xe(t),
          (a = t.updateQueue),
          a !== null && rs(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && X(Fa),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qn(at),
          Xe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function y2(e, t) {
    switch ((bc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qn(at),
          de(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (xe(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Yt(t), t.alternate === null)) throw Error(o(340));
          Pa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Yt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Pa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (X(et), null);
      case 4:
        return (de(), null);
      case 10:
        return (Qn(t.type), null);
      case 22:
      case 23:
        return (
          Yt(t),
          Dc(),
          e !== null && X(Fa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Qn(at), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jy(e, t) {
    switch ((bc(t), t.tag)) {
      case 3:
        (Qn(at), de());
        break;
      case 26:
      case 27:
      case 5:
        xe(t);
        break;
      case 4:
        de();
        break;
      case 31:
        t.memoizedState !== null && Yt(t);
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        X(et);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        (Yt(t), Dc(), e !== null && X(Fa));
        break;
      case 24:
        Qn(at);
    }
  }
  function ii(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var f = a.create,
              v = a.inst;
            ((l = f()), (v.destroy = l));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (A) {
      $e(t, t.return, A);
    }
  }
  function xa(e, t, a) {
    try {
      var l = t.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var v = l.inst,
              A = v.destroy;
            if (A !== void 0) {
              ((v.destroy = void 0), (u = t));
              var $ = a,
                P = A;
              try {
                P();
              } catch (te) {
                $e(u, $, te);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (te) {
      $e(t, t.return, te);
    }
  }
  function Dy(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Tp(t, a);
      } catch (l) {
        $e(e, e.return, l);
      }
    }
  }
  function Uy(e, t, a) {
    ((a.props = nr(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      $e(e, t, l);
    }
  }
  function oi(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (u) {
      $e(e, t, u);
    }
  }
  function An(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          $e(e, t, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          $e(e, t, u);
        }
      else a.current = null;
  }
  function Ly(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      $e(e, e.return, u);
    }
  }
  function mf(e, t, a) {
    try {
      var l = e.stateNode;
      (H2(l, e.type, a, t), (l[At] = t));
    } catch (u) {
      $e(e, e.return, u);
    }
  }
  function By(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Aa(e.type)) ||
      e.tag === 4
    );
  }
  function hf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || By(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Aa(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function pf(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ln)));
    else if (
      l !== 4 &&
      (l === 27 && Aa(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (pf(e, t, a), e = e.sibling; e !== null; )
        (pf(e, t, a), (e = e.sibling));
  }
  function ls(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Aa(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (ls(e, t, a), e = e.sibling; e !== null; )
        (ls(e, t, a), (e = e.sibling));
  }
  function Hy(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (gt(t, l, a), (t[mt] = e), (t[At] = a));
    } catch (f) {
      $e(e, e.return, f);
    }
  }
  var Xn = !1,
    it = !1,
    yf = !1,
    $y = typeof WeakSet == "function" ? WeakSet : Set,
    ft = null;
  function g2(e, t) {
    if (((e = e.containerInfo), (Bf = Rs), (e = Fh(e)), sc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, f.nodeType);
            } catch {
              a = null;
              break e;
            }
            var v = 0,
              A = -1,
              $ = -1,
              P = 0,
              te = 0,
              re = e,
              I = null;
            t: for (;;) {
              for (
                var J;
                re !== a || (u !== 0 && re.nodeType !== 3) || (A = v + u),
                  re !== f || (l !== 0 && re.nodeType !== 3) || ($ = v + l),
                  re.nodeType === 3 && (v += re.nodeValue.length),
                  (J = re.firstChild) !== null;

              )
                ((I = re), (re = J));
              for (;;) {
                if (re === e) break t;
                if (
                  (I === a && ++P === u && (A = v),
                  I === f && ++te === l && ($ = v),
                  (J = re.nextSibling) !== null)
                )
                  break;
                ((re = I), (I = re.parentNode));
              }
              re = J;
            }
            a = A === -1 || $ === -1 ? null : { start: A, end: $ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Hf = { focusedElem: e, selectionRange: a }, Rs = !1, ft = t;
      ft !== null;

    )
      if (
        ((t = ft), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ft = e));
      else
        for (; ft !== null; ) {
          switch (((t = ft), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((u = e[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                ((e = void 0),
                  (a = t),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = a.stateNode));
                try {
                  var me = nr(a.type, u);
                  ((e = l.getSnapshotBeforeUpdate(me, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Se) {
                  $e(a, a.return, Se);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Qf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ft = e));
            break;
          }
          ft = t.return;
        }
  }
  function qy(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Pn(e, a), l & 4 && ii(5, a));
        break;
      case 1:
        if ((Pn(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (v) {
              $e(a, a.return, v);
            }
          else {
            var u = nr(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              $e(a, a.return, v);
            }
          }
        (l & 64 && Dy(a), l & 512 && oi(a, a.return));
        break;
      case 3:
        if ((Pn(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Tp(e, t);
          } catch (v) {
            $e(a, a.return, v);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Hy(a);
      case 26:
      case 5:
        (Pn(e, a), t === null && l & 4 && Ly(a), l & 512 && oi(a, a.return));
        break;
      case 12:
        Pn(e, a);
        break;
      case 31:
        (Pn(e, a), l & 4 && Yy(e, a));
        break;
      case 13:
        (Pn(e, a),
          l & 4 && Vy(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = R2.bind(null, a)), X2(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Xn), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || it), (u = Xn));
          var f = it;
          ((Xn = l),
            (it = t) && !f ? In(e, a, (a.subtreeFlags & 8772) !== 0) : Pn(e, a),
            (Xn = u),
            (it = f));
        }
        break;
      case 30:
        break;
      default:
        Pn(e, a);
    }
  }
  function Qy(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Qy(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Gu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Pe = null,
    Nt = !1;
  function Zn(e, t, a) {
    for (a = a.child; a !== null; ) (ky(e, t, a), (a = a.sibling));
  }
  function ky(e, t, a) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
        Ct.onCommitFiberUnmount(Cn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (it || An(a, t),
          Zn(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        it || An(a, t);
        var l = Pe,
          u = Nt;
        (Aa(a.type) && ((Pe = a.stateNode), (Nt = !1)),
          Zn(e, t, a),
          yi(a.stateNode),
          (Pe = l),
          (Nt = u));
        break;
      case 5:
        it || An(a, t);
      case 6:
        if (
          ((l = Pe),
          (u = Nt),
          (Pe = null),
          Zn(e, t, a),
          (Pe = l),
          (Nt = u),
          Pe !== null)
        )
          if (Nt)
            try {
              (Pe.nodeType === 9
                ? Pe.body
                : Pe.nodeName === "HTML"
                  ? Pe.ownerDocument.body
                  : Pe
              ).removeChild(a.stateNode);
            } catch (f) {
              $e(a, t, f);
            }
          else
            try {
              Pe.removeChild(a.stateNode);
            } catch (f) {
              $e(a, t, f);
            }
        break;
      case 18:
        Pe !== null &&
          (Nt
            ? ((e = Pe),
              Dg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              ol(e))
            : Dg(Pe, a.stateNode));
        break;
      case 4:
        ((l = Pe),
          (u = Nt),
          (Pe = a.stateNode.containerInfo),
          (Nt = !0),
          Zn(e, t, a),
          (Pe = l),
          (Nt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xa(2, a, t), it || xa(4, a, t), Zn(e, t, a));
        break;
      case 1:
        (it ||
          (An(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && Uy(a, t, l)),
          Zn(e, t, a));
        break;
      case 21:
        Zn(e, t, a);
        break;
      case 22:
        ((it = (l = it) || a.memoizedState !== null), Zn(e, t, a), (it = l));
        break;
      default:
        Zn(e, t, a);
    }
  }
  function Yy(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ol(e);
      } catch (a) {
        $e(t, t.return, a);
      }
    }
  }
  function Vy(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ol(e);
      } catch (a) {
        $e(t, t.return, a);
      }
  }
  function v2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new $y()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $y()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function is(e, t) {
    var a = v2(e);
    t.forEach(function (l) {
      if (!a.has(l)) {
        a.add(l);
        var u = _2.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function zt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l],
          f = e,
          v = t,
          A = v;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (Aa(A.type)) {
                ((Pe = A.stateNode), (Nt = !1));
                break e;
              }
              break;
            case 5:
              ((Pe = A.stateNode), (Nt = !1));
              break e;
            case 3:
            case 4:
              ((Pe = A.stateNode.containerInfo), (Nt = !0));
              break e;
          }
          A = A.return;
        }
        if (Pe === null) throw Error(o(160));
        (ky(f, v, u),
          (Pe = null),
          (Nt = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Gy(t, e), (t = t.sibling));
  }
  var fn = null;
  function Gy(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (zt(t, e),
          Ot(e),
          l & 4 && (xa(3, e, e.return), ii(3, e), xa(5, e, e.return)));
        break;
      case 1:
        (zt(t, e),
          Ot(e),
          l & 512 && (it || a === null || An(a, a.return)),
          l & 64 &&
            Xn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var u = fn;
        if (
          (zt(t, e),
          Ot(e),
          l & 512 && (it || a === null || An(a, a.return)),
          l & 4)
        ) {
          var f = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (a = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (l) {
                    case "title":
                      ((f = u.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Dl] ||
                          f[mt] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = u.createElement(l)),
                          u.head.insertBefore(
                            f,
                            u.querySelector("head > title"),
                          )),
                        gt(f, l, a),
                        (f[mt] = e),
                        ct(f),
                        (l = f));
                      break e;
                    case "link":
                      var v = Gg("link", "href", u).get(l + (a.href || ""));
                      if (v) {
                        for (var A = 0; A < v.length; A++)
                          if (
                            ((f = v[A]),
                            f.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              f.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              f.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              f.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            v.splice(A, 1);
                            break t;
                          }
                      }
                      ((f = u.createElement(l)),
                        gt(f, l, a),
                        u.head.appendChild(f));
                      break;
                    case "meta":
                      if (
                        (v = Gg("meta", "content", u).get(
                          l + (a.content || ""),
                        ))
                      ) {
                        for (A = 0; A < v.length; A++)
                          if (
                            ((f = v[A]),
                            f.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              f.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              f.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              f.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            v.splice(A, 1);
                            break t;
                          }
                      }
                      ((f = u.createElement(l)),
                        gt(f, l, a),
                        u.head.appendChild(f));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((f[mt] = e), ct(f), (l = f));
                }
                e.stateNode = l;
              } else Xg(u, e.type, e.stateNode);
            else e.stateNode = Vg(u, l, e.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : f.count--,
                l === null
                  ? Xg(u, e.type, e.stateNode)
                  : Vg(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                mf(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (zt(t, e),
          Ot(e),
          l & 512 && (it || a === null || An(a, a.return)),
          a !== null && l & 4 && mf(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (zt(t, e),
          Ot(e),
          l & 512 && (it || a === null || An(a, a.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Nr(u, "");
          } catch (me) {
            $e(e, e.return, me);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), mf(e, u, a !== null ? a.memoizedProps : u)),
          l & 1024 && (yf = !0));
        break;
      case 6:
        if ((zt(t, e), Ot(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (me) {
            $e(e, e.return, me);
          }
        }
        break;
      case 3:
        if (
          ((Es = null),
          (u = fn),
          (fn = Ss(t.containerInfo)),
          zt(t, e),
          (fn = u),
          Ot(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ol(t.containerInfo);
          } catch (me) {
            $e(e, e.return, me);
          }
        yf && ((yf = !1), Xy(e));
        break;
      case 4:
        ((l = fn),
          (fn = Ss(e.stateNode.containerInfo)),
          zt(t, e),
          Ot(e),
          (fn = l));
        break;
      case 12:
        (zt(t, e), Ot(e));
        break;
      case 31:
        (zt(t, e),
          Ot(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), is(e, l))));
        break;
      case 13:
        (zt(t, e),
          Ot(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (ss = St()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), is(e, l))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var $ = a !== null && a.memoizedState !== null,
          P = Xn,
          te = it;
        if (
          ((Xn = P || u),
          (it = te || $),
          zt(t, e),
          (it = te),
          (Xn = P),
          Ot(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || $ || Xn || it || ar(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                $ = a = t;
                try {
                  if (((f = $.stateNode), u))
                    ((v = f.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none"));
                  else {
                    A = $.stateNode;
                    var re = $.memoizedProps.style,
                      I =
                        re != null && re.hasOwnProperty("display")
                          ? re.display
                          : null;
                    A.style.display =
                      I == null || typeof I == "boolean" ? "" : ("" + I).trim();
                  }
                } catch (me) {
                  $e($, $.return, me);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                $ = t;
                try {
                  $.stateNode.nodeValue = u ? "" : $.memoizedProps;
                } catch (me) {
                  $e($, $.return, me);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                $ = t;
                try {
                  var J = $.stateNode;
                  u ? Ug(J, !0) : Ug($.stateNode, !1);
                } catch (me) {
                  $e($, $.return, me);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), is(e, a))));
        break;
      case 19:
        (zt(t, e),
          Ot(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), is(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (zt(t, e), Ot(e));
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (By(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              f = hf(e);
            ls(e, f, u);
            break;
          case 5:
            var v = a.stateNode;
            a.flags & 32 && (Nr(v, ""), (a.flags &= -33));
            var A = hf(e);
            ls(e, A, v);
            break;
          case 3:
          case 4:
            var $ = a.stateNode.containerInfo,
              P = hf(e);
            pf(e, P, $);
            break;
          default:
            throw Error(o(161));
        }
      } catch (te) {
        $e(e, e.return, te);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xy(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Xy(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Pn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (qy(e, t.alternate, t), (t = t.sibling));
  }
  function ar(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (xa(4, t, t.return), ar(t));
          break;
        case 1:
          An(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Uy(t, t.return, a),
            ar(t));
          break;
        case 27:
          yi(t.stateNode);
        case 26:
        case 5:
          (An(t, t.return), ar(t));
          break;
        case 22:
          t.memoizedState === null && ar(t);
          break;
        case 30:
          ar(t);
          break;
        default:
          ar(t);
      }
      e = e.sibling;
    }
  }
  function In(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        u = e,
        f = t,
        v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (In(u, f, a), ii(4, f));
          break;
        case 1:
          if (
            (In(u, f, a),
            (l = f),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (P) {
              $e(l, l.return, P);
            }
          if (((l = f), (u = l.updateQueue), u !== null)) {
            var A = l.stateNode;
            try {
              var $ = u.shared.hiddenCallbacks;
              if ($ !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < $.length; u++)
                  Cp($[u], A);
            } catch (P) {
              $e(l, l.return, P);
            }
          }
          (a && v & 64 && Dy(f), oi(f, f.return));
          break;
        case 27:
          Hy(f);
        case 26:
        case 5:
          (In(u, f, a), a && l === null && v & 4 && Ly(f), oi(f, f.return));
          break;
        case 12:
          In(u, f, a);
          break;
        case 31:
          (In(u, f, a), a && v & 4 && Yy(u, f));
          break;
        case 13:
          (In(u, f, a), a && v & 4 && Vy(u, f));
          break;
        case 22:
          (f.memoizedState === null && In(u, f, a), oi(f, f.return));
          break;
        case 30:
          break;
        default:
          In(u, f, a);
      }
      t = t.sibling;
    }
  }
  function gf(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Zl(a)));
  }
  function vf(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Zl(e)));
  }
  function dn(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Zy(e, t, a, l), (t = t.sibling));
  }
  function Zy(e, t, a, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (dn(e, t, a, l), u & 2048 && ii(9, t));
        break;
      case 1:
        dn(e, t, a, l);
        break;
      case 3:
        (dn(e, t, a, l),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Zl(e))));
        break;
      case 12:
        if (u & 2048) {
          (dn(e, t, a, l), (e = t.stateNode));
          try {
            var f = t.memoizedProps,
              v = f.id,
              A = f.onPostCommit;
            typeof A == "function" &&
              A(
                v,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch ($) {
            $e(t, t.return, $);
          }
        } else dn(e, t, a, l);
        break;
      case 31:
        dn(e, t, a, l);
        break;
      case 13:
        dn(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((f = t.stateNode),
          (v = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? dn(e, t, a, l)
              : si(e, t)
            : f._visibility & 2
              ? dn(e, t, a, l)
              : ((f._visibility |= 2),
                Kr(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && gf(v, t));
        break;
      case 24:
        (dn(e, t, a, l), u & 2048 && vf(t.alternate, t));
        break;
      default:
        dn(e, t, a, l);
    }
  }
  function Kr(e, t, a, l, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var f = e,
        v = t,
        A = a,
        $ = l,
        P = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          (Kr(f, v, A, $, u), ii(8, v));
          break;
        case 23:
          break;
        case 22:
          var te = v.stateNode;
          (v.memoizedState !== null
            ? te._visibility & 2
              ? Kr(f, v, A, $, u)
              : si(f, v)
            : ((te._visibility |= 2), Kr(f, v, A, $, u)),
            u && P & 2048 && gf(v.alternate, v));
          break;
        case 24:
          (Kr(f, v, A, $, u), u && P & 2048 && vf(v.alternate, v));
          break;
        default:
          Kr(f, v, A, $, u);
      }
      t = t.sibling;
    }
  }
  function si(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (si(a, l), u & 2048 && gf(l.alternate, l));
            break;
          case 24:
            (si(a, l), u & 2048 && vf(l.alternate, l));
            break;
          default:
            si(a, l);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function Fr(e, t, a) {
    if (e.subtreeFlags & ui)
      for (e = e.child; e !== null; ) (Py(e, t, a), (e = e.sibling));
  }
  function Py(e, t, a) {
    switch (e.tag) {
      case 26:
        (Fr(e, t, a),
          e.flags & ui &&
            e.memoizedState !== null &&
            rx(a, fn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Fr(e, t, a);
        break;
      case 3:
      case 4:
        var l = fn;
        ((fn = Ss(e.stateNode.containerInfo)), Fr(e, t, a), (fn = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ui), (ui = 16777216), Fr(e, t, a), (ui = l))
            : Fr(e, t, a));
        break;
      default:
        Fr(e, t, a);
    }
  }
  function Iy(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ci(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((ft = l), Fy(l, e));
        }
      Iy(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Ky(e), (e = e.sibling));
  }
  function Ky(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ci(e), e.flags & 2048 && xa(9, e, e.return));
        break;
      case 3:
        ci(e);
        break;
      case 12:
        ci(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), os(e))
          : ci(e);
        break;
      default:
        ci(e);
    }
  }
  function os(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((ft = l), Fy(l, e));
        }
      Iy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (xa(8, t, t.return), os(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), os(t)));
          break;
        default:
          os(t);
      }
      e = e.sibling;
    }
  }
  function Fy(e, t) {
    for (; ft !== null; ) {
      var a = ft;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Zl(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (ft = l));
      else
        e: for (a = e; ft !== null; ) {
          l = ft;
          var u = l.sibling,
            f = l.return;
          if ((Qy(l), l === a)) {
            ft = null;
            break e;
          }
          if (u !== null) {
            ((u.return = f), (ft = u));
            break e;
          }
          ft = f;
        }
    }
  }
  var b2 = {
      getCacheForType: function (e) {
        var t = pt(at),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return pt(at).controller.signal;
      },
    },
    S2 = typeof WeakMap == "function" ? WeakMap : Map,
    Be = 0,
    Ve = null,
    _e = null,
    Ne = 0,
    He = 0,
    Vt = null,
    Ea = !1,
    Jr = !1,
    bf = !1,
    Kn = 0,
    We = 0,
    Ca = 0,
    rr = 0,
    Sf = 0,
    Gt = 0,
    Wr = 0,
    fi = null,
    jt = null,
    xf = !1,
    ss = 0,
    Jy = 0,
    us = 1 / 0,
    cs = null,
    Ta = null,
    st = 0,
    wa = null,
    el = null,
    Fn = 0,
    Ef = 0,
    Cf = null,
    Wy = null,
    di = 0,
    Tf = null;
  function Xt() {
    return (Be & 2) !== 0 && Ne !== 0 ? Ne & -Ne : Q.T !== null ? Nf() : ph();
  }
  function eg() {
    if (Gt === 0)
      if ((Ne & 536870912) === 0 || je) {
        var e = qa;
        ((qa <<= 1), (qa & 3932160) === 0 && (qa = 262144), (Gt = e));
      } else Gt = 536870912;
    return ((e = kt.current), e !== null && (e.flags |= 32), Gt);
  }
  function Dt(e, t, a) {
    (((e === Ve && (He === 2 || He === 9)) || e.cancelPendingCommit !== null) &&
      (tl(e, 0), Ra(e, Ne, Gt, !1)),
      jl(e, a),
      ((Be & 2) === 0 || e !== Ve) &&
        (e === Ve &&
          ((Be & 2) === 0 && (rr |= a), We === 4 && Ra(e, Ne, Gt, !1)),
        Mn(e)));
  }
  function tg(e, t, a) {
    if ((Be & 6) !== 0) throw Error(o(327));
    var l = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || ua(e, t),
      u = l ? C2(e, t) : Rf(e, t, !0),
      f = l;
    do {
      if (u === 0) {
        Jr && !l && Ra(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), f && !x2(a))) {
          ((u = Rf(e, t, !1)), (f = !1));
          continue;
        }
        if (u === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var v = 0;
          else
            ((v = e.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0));
          if (v !== 0) {
            t = v;
            e: {
              var A = e;
              u = fi;
              var $ = A.current.memoizedState.isDehydrated;
              if (($ && (tl(A, v).flags |= 256), (v = Rf(A, v, !1)), v !== 2)) {
                if (bf && !$) {
                  ((A.errorRecoveryDisabledLanes |= f), (rr |= f), (u = 4));
                  break e;
                }
                ((f = jt),
                  (jt = u),
                  f !== null &&
                    (jt === null ? (jt = f) : jt.push.apply(jt, f)));
              }
              u = v;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (tl(e, 0), Ra(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (f = u), f)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ra(l, t, Gt, !Ea);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((u = ss + 300 - St()), 10 < u)) {
            if ((Ra(l, t, Gt, !Ea), Cr(l, 0, !0) !== 0)) break e;
            ((Fn = t),
              (l.timeoutHandle = Og(
                ng.bind(
                  null,
                  l,
                  a,
                  jt,
                  cs,
                  xf,
                  t,
                  Gt,
                  rr,
                  Wr,
                  Ea,
                  f,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break e;
          }
          ng(l, a, jt, cs, xf, t, Gt, rr, Wr, Ea, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mn(e);
  }
  function ng(e, t, a, l, u, f, v, A, $, P, te, re, I, J) {
    if (
      ((e.timeoutHandle = -1),
      (re = t.subtreeFlags),
      re & 8192 || (re & 16785408) === 16785408)
    ) {
      ((re = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ln,
      }),
        Py(t, f, re));
      var me =
        (f & 62914560) === f ? ss - St() : (f & 4194048) === f ? Jy - St() : 0;
      if (((me = lx(re, me)), me !== null)) {
        ((Fn = f),
          (e.cancelPendingCommit = me(
            cg.bind(null, e, t, f, a, l, u, v, A, $, te, re, null, I, J),
          )),
          Ra(e, f, v, !P));
        return;
      }
    }
    cg(e, t, f, a, l, u, v, A, $);
  }
  function x2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var u = a[l],
            f = u.getSnapshot;
          u = u.value;
          try {
            if (!qt(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Ra(e, t, a, l) {
    ((t &= ~Sf),
      (t &= ~rr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var f = 31 - Tt(u),
        v = 1 << f;
      ((l[f] = -1), (u &= ~v));
    }
    a !== 0 && dh(e, a, t);
  }
  function fs() {
    return (Be & 6) === 0 ? (mi(0), !1) : !0;
  }
  function wf() {
    if (_e !== null) {
      if (He === 0) var e = _e.return;
      else ((e = _e), (qn = Ia = null), qc(e), (Gr = null), (Il = 0), (e = _e));
      for (; e !== null; ) (jy(e.alternate, e), (e = e.return));
      _e = null;
    }
  }
  function tl(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Q2(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Fn = 0),
      wf(),
      (Ve = e),
      (_e = a = Hn(e.current, null)),
      (Ne = t),
      (He = 0),
      (Vt = null),
      (Ea = !1),
      (Jr = ua(e, t)),
      (bf = !1),
      (Wr = Gt = Sf = rr = Ca = We = 0),
      (jt = fi = null),
      (xf = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - Tt(l),
          f = 1 << u;
        ((t |= e[u]), (l &= ~f));
      }
    return ((Kn = t), Oo(), a);
  }
  function ag(e, t) {
    ((Te = null),
      (Q.H = ai),
      t === Vr || t === qo
        ? ((t = bp()), (He = 3))
        : t === Ac
          ? ((t = bp()), (He = 4))
          : (He =
              t === nf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Vt = t),
      _e === null && ((We = 1), es(e, Wt(t, e.current))));
  }
  function rg() {
    var e = kt.current;
    return e === null
      ? !0
      : (Ne & 4194048) === Ne
        ? an === null
        : (Ne & 62914560) === Ne || (Ne & 536870912) !== 0
          ? e === an
          : !1;
  }
  function lg() {
    var e = Q.H;
    return ((Q.H = ai), e === null ? ai : e);
  }
  function ig() {
    var e = Q.A;
    return ((Q.A = b2), e);
  }
  function ds() {
    ((We = 4),
      Ea || ((Ne & 4194048) !== Ne && kt.current !== null) || (Jr = !0),
      ((Ca & 134217727) === 0 && (rr & 134217727) === 0) ||
        Ve === null ||
        Ra(Ve, Ne, Gt, !1));
  }
  function Rf(e, t, a) {
    var l = Be;
    Be |= 2;
    var u = lg(),
      f = ig();
    ((Ve !== e || Ne !== t) && ((cs = null), tl(e, t)), (t = !1));
    var v = We;
    e: do
      try {
        if (He !== 0 && _e !== null) {
          var A = _e,
            $ = Vt;
          switch (He) {
            case 8:
              (wf(), (v = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              kt.current === null && (t = !0);
              var P = He;
              if (((He = 0), (Vt = null), nl(e, A, $, P), a && Jr)) {
                v = 0;
                break e;
              }
              break;
            default:
              ((P = He), (He = 0), (Vt = null), nl(e, A, $, P));
          }
        }
        (E2(), (v = We));
        break;
      } catch (te) {
        ag(e, te);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (qn = Ia = null),
      (Be = l),
      (Q.H = u),
      (Q.A = f),
      _e === null && ((Ve = null), (Ne = 0), Oo()),
      v
    );
  }
  function E2() {
    for (; _e !== null; ) og(_e);
  }
  function C2(e, t) {
    var a = Be;
    Be |= 2;
    var l = lg(),
      u = ig();
    Ve !== e || Ne !== t
      ? ((cs = null), (us = St() + 500), tl(e, t))
      : (Jr = ua(e, t));
    e: do
      try {
        if (He !== 0 && _e !== null) {
          t = _e;
          var f = Vt;
          t: switch (He) {
            case 1:
              ((He = 0), (Vt = null), nl(e, t, f, 1));
              break;
            case 2:
            case 9:
              if (gp(f)) {
                ((He = 0), (Vt = null), sg(t));
                break;
              }
              ((t = function () {
                ((He !== 2 && He !== 9) || Ve !== e || (He = 7), Mn(e));
              }),
                f.then(t, t));
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              gp(f)
                ? ((He = 0), (Vt = null), sg(t))
                : ((He = 0), (Vt = null), nl(e, t, f, 7));
              break;
            case 5:
              var v = null;
              switch (_e.tag) {
                case 26:
                  v = _e.memoizedState;
                case 5:
                case 27:
                  var A = _e;
                  if (v ? Zg(v) : A.stateNode.complete) {
                    ((He = 0), (Vt = null));
                    var $ = A.sibling;
                    if ($ !== null) _e = $;
                    else {
                      var P = A.return;
                      P !== null ? ((_e = P), ms(P)) : (_e = null);
                    }
                    break t;
                  }
              }
              ((He = 0), (Vt = null), nl(e, t, f, 5));
              break;
            case 6:
              ((He = 0), (Vt = null), nl(e, t, f, 6));
              break;
            case 8:
              (wf(), (We = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        T2();
        break;
      } catch (te) {
        ag(e, te);
      }
    while (!0);
    return (
      (qn = Ia = null),
      (Q.H = l),
      (Q.A = u),
      (Be = a),
      _e !== null ? 0 : ((Ve = null), (Ne = 0), Oo(), We)
    );
  }
  function T2() {
    for (; _e !== null && !Et(); ) og(_e);
  }
  function og(e) {
    var t = zy(e.alternate, e, Kn);
    ((e.memoizedProps = e.pendingProps), t === null ? ms(e) : (_e = t));
  }
  function sg(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = wy(a, t, t.pendingProps, t.type, void 0, Ne);
        break;
      case 11:
        t = wy(a, t, t.pendingProps, t.type.render, t.ref, Ne);
        break;
      case 5:
        qc(t);
      default:
        (jy(a, t), (t = _e = ip(t, Kn)), (t = zy(a, t, Kn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ms(e) : (_e = t));
  }
  function nl(e, t, a, l) {
    ((qn = Ia = null), qc(t), (Gr = null), (Il = 0));
    var u = t.return;
    try {
      if (d2(e, u, t, a, Ne)) {
        ((We = 1), es(e, Wt(a, e.current)), (_e = null));
        return;
      }
    } catch (f) {
      if (u !== null) throw ((_e = u), f);
      ((We = 1), es(e, Wt(a, e.current)), (_e = null));
      return;
    }
    t.flags & 32768
      ? (je || l === 1
          ? (e = !0)
          : Jr || (Ne & 536870912) !== 0
            ? (e = !1)
            : ((Ea = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = kt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        ug(t, e))
      : ms(t);
  }
  function ms(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ug(t, Ea);
        return;
      }
      e = t.return;
      var a = p2(t.alternate, t, Kn);
      if (a !== null) {
        _e = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    We === 0 && (We = 5);
  }
  function ug(e, t) {
    do {
      var a = y2(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (_e = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        _e = e;
        return;
      }
      _e = e = a;
    } while (e !== null);
    ((We = 6), (_e = null));
  }
  function cg(e, t, a, l, u, f, v, A, $) {
    e.cancelPendingCommit = null;
    do hs();
    while (st !== 0);
    if ((Be & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= mc),
        aS(e, a, f, v, A, $),
        e === Ve && ((_e = Ve = null), (Ne = 0)),
        (el = t),
        (wa = e),
        (Fn = a),
        (Ef = f),
        (Cf = u),
        (Wy = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            A2(xr, function () {
              return (pg(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = Q.T), (Q.T = null), (u = K.p), (K.p = 2), (v = Be), (Be |= 4));
        try {
          g2(e, t, a);
        } finally {
          ((Be = v), (K.p = u), (Q.T = l));
        }
      }
      ((st = 1), fg(), dg(), mg());
    }
  }
  function fg() {
    if (st === 1) {
      st = 0;
      var e = wa,
        t = el,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = Q.T), (Q.T = null));
        var l = K.p;
        K.p = 2;
        var u = Be;
        Be |= 4;
        try {
          Gy(t, e);
          var f = Hf,
            v = Fh(e.containerInfo),
            A = f.focusedElem,
            $ = f.selectionRange;
          if (
            v !== A &&
            A &&
            A.ownerDocument &&
            Kh(A.ownerDocument.documentElement, A)
          ) {
            if ($ !== null && sc(A)) {
              var P = $.start,
                te = $.end;
              if ((te === void 0 && (te = P), "selectionStart" in A))
                ((A.selectionStart = P),
                  (A.selectionEnd = Math.min(te, A.value.length)));
              else {
                var re = A.ownerDocument || document,
                  I = (re && re.defaultView) || window;
                if (I.getSelection) {
                  var J = I.getSelection(),
                    me = A.textContent.length,
                    Se = Math.min($.start, me),
                    Ye = $.end === void 0 ? Se : Math.min($.end, me);
                  !J.extend && Se > Ye && ((v = Ye), (Ye = Se), (Se = v));
                  var V = Ih(A, Se),
                    k = Ih(A, Ye);
                  if (
                    V &&
                    k &&
                    (J.rangeCount !== 1 ||
                      J.anchorNode !== V.node ||
                      J.anchorOffset !== V.offset ||
                      J.focusNode !== k.node ||
                      J.focusOffset !== k.offset)
                  ) {
                    var Z = re.createRange();
                    (Z.setStart(V.node, V.offset),
                      J.removeAllRanges(),
                      Se > Ye
                        ? (J.addRange(Z), J.extend(k.node, k.offset))
                        : (Z.setEnd(k.node, k.offset), J.addRange(Z)));
                  }
                }
              }
            }
            for (re = [], J = A; (J = J.parentNode); )
              J.nodeType === 1 &&
                re.push({ element: J, left: J.scrollLeft, top: J.scrollTop });
            for (
              typeof A.focus == "function" && A.focus(), A = 0;
              A < re.length;
              A++
            ) {
              var ae = re[A];
              ((ae.element.scrollLeft = ae.left),
                (ae.element.scrollTop = ae.top));
            }
          }
          ((Rs = !!Bf), (Hf = Bf = null));
        } finally {
          ((Be = u), (K.p = l), (Q.T = a));
        }
      }
      ((e.current = t), (st = 2));
    }
  }
  function dg() {
    if (st === 2) {
      st = 0;
      var e = wa,
        t = el,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = Q.T), (Q.T = null));
        var l = K.p;
        K.p = 2;
        var u = Be;
        Be |= 4;
        try {
          qy(e, t.alternate, t);
        } finally {
          ((Be = u), (K.p = l), (Q.T = a));
        }
      }
      st = 3;
    }
  }
  function mg() {
    if (st === 4 || st === 3) {
      ((st = 0), Al());
      var e = wa,
        t = el,
        a = Fn,
        l = Wy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (st = 5)
        : ((st = 0), (el = wa = null), hg(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Ta = null),
        Yu(a),
        (t = t.stateNode),
        Ct && typeof Ct.onCommitFiberRoot == "function")
      )
        try {
          Ct.onCommitFiberRoot(Cn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = Q.T), (u = K.p), (K.p = 2), (Q.T = null));
        try {
          for (var f = e.onRecoverableError, v = 0; v < l.length; v++) {
            var A = l[v];
            f(A.value, { componentStack: A.stack });
          }
        } finally {
          ((Q.T = t), (K.p = u));
        }
      }
      ((Fn & 3) !== 0 && hs(),
        Mn(e),
        (u = e.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? e === Tf
            ? di++
            : ((di = 0), (Tf = e))
          : (di = 0),
        mi(0));
    }
  }
  function hg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Zl(t)));
  }
  function hs() {
    return (fg(), dg(), mg(), pg());
  }
  function pg() {
    if (st !== 5) return !1;
    var e = wa,
      t = Ef;
    Ef = 0;
    var a = Yu(Fn),
      l = Q.T,
      u = K.p;
    try {
      ((K.p = 32 > a ? 32 : a), (Q.T = null), (a = Cf), (Cf = null));
      var f = wa,
        v = Fn;
      if (((st = 0), (el = wa = null), (Fn = 0), (Be & 6) !== 0))
        throw Error(o(331));
      var A = Be;
      if (
        ((Be |= 4),
        Ky(f.current),
        Zy(f, f.current, v, a),
        (Be = A),
        mi(0, !1),
        Ct && typeof Ct.onPostCommitFiberRoot == "function")
      )
        try {
          Ct.onPostCommitFiberRoot(Cn, f);
        } catch {}
      return !0;
    } finally {
      ((K.p = u), (Q.T = l), hg(e, t));
    }
  }
  function yg(e, t, a) {
    ((t = Wt(a, t)),
      (t = tf(e.stateNode, t, 2)),
      (e = va(e, t, 2)),
      e !== null && (jl(e, 2), Mn(e)));
  }
  function $e(e, t, a) {
    if (e.tag === 3) yg(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yg(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ta === null || !Ta.has(l)))
          ) {
            ((e = Wt(a, e)),
              (a = gy(2)),
              (l = va(t, a, 2)),
              l !== null && (vy(a, l, t, e), jl(l, 2), Mn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function _f(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new S2();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(a) ||
      ((bf = !0), u.add(a), (e = w2.bind(null, e, t, a)), t.then(e, e));
  }
  function w2(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ve === e &&
        (Ne & a) === a &&
        (We === 4 || (We === 3 && (Ne & 62914560) === Ne && 300 > St() - ss)
          ? (Be & 2) === 0 && tl(e, 0)
          : (Sf |= a),
        Wr === Ne && (Wr = 0)),
      Mn(e));
  }
  function gg(e, t) {
    (t === 0 && (t = So()), (e = Xa(e, t)), e !== null && (jl(e, t), Mn(e)));
  }
  function R2(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), gg(e, a));
  }
  function _2(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), gg(e, a));
  }
  function A2(e, t) {
    return ut(e, t);
  }
  var ps = null,
    al = null,
    Af = !1,
    ys = !1,
    Mf = !1,
    _a = 0;
  function Mn(e) {
    (e !== al &&
      e.next === null &&
      (al === null ? (ps = al = e) : (al = al.next = e)),
      (ys = !0),
      Af || ((Af = !0), N2()));
  }
  function mi(e, t) {
    if (!Mf && ys) {
      Mf = !0;
      do
        for (var a = !1, l = ps; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var v = l.suspendedLanes,
                A = l.pingedLanes;
              ((f = (1 << (31 - Tt(42 | e) + 1)) - 1),
                (f &= u & ~(v & ~A)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0));
            }
            f !== 0 && ((a = !0), xg(l, f));
          } else
            ((f = Ne),
              (f = Cr(
                l,
                l === Ve ? f : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || ua(l, f) || ((a = !0), xg(l, f)));
          l = l.next;
        }
      while (a);
      Mf = !1;
    }
  }
  function M2() {
    vg();
  }
  function vg() {
    ys = Af = !1;
    var e = 0;
    _a !== 0 && q2() && (e = _a);
    for (var t = St(), a = null, l = ps; l !== null; ) {
      var u = l.next,
        f = bg(l, t);
      (f === 0
        ? ((l.next = null),
          a === null ? (ps = u) : (a.next = u),
          u === null && (al = a))
        : ((a = l), (e !== 0 || (f & 3) !== 0) && (ys = !0)),
        (l = u));
    }
    ((st !== 0 && st !== 5) || mi(e), _a !== 0 && (_a = 0));
  }
  function bg(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var v = 31 - Tt(f),
        A = 1 << v,
        $ = u[v];
      ($ === -1
        ? ((A & a) === 0 || (A & l) !== 0) && (u[v] = bo(A, t))
        : $ <= t && (e.expiredLanes |= A),
        (f &= ~A));
    }
    if (
      ((t = Ve),
      (a = Ne),
      (a = Cr(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && (He === 2 || He === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && _t(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || ua(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && _t(l), Yu(a))) {
        case 2:
        case 8:
          a = Ml;
          break;
        case 32:
          a = xr;
          break;
        case 268435456:
          a = Dn;
          break;
        default:
          a = xr;
      }
      return (
        (l = Sg.bind(null, e)),
        (a = ut(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && _t(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Sg(e, t) {
    if (st !== 0 && st !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (hs() && e.callbackNode !== a) return null;
    var l = Ne;
    return (
      (l = Cr(
        e,
        e === Ve ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (tg(e, l, t),
          bg(e, St()),
          e.callbackNode != null && e.callbackNode === a
            ? Sg.bind(null, e)
            : null)
    );
  }
  function xg(e, t) {
    if (hs()) return null;
    tg(e, t, !0);
  }
  function N2() {
    k2(function () {
      (Be & 6) !== 0 ? ut(go, M2) : vg();
    });
  }
  function Nf() {
    if (_a === 0) {
      var e = kr;
      (e === 0 && ((e = Er), (Er <<= 1), (Er & 261888) === 0 && (Er = 256)),
        (_a = e));
    }
    return _a;
  }
  function Eg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : To("" + e);
  }
  function Cg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function z2(e, t, a, l, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var f = Eg((u[At] || null).action),
        v = l.submitter;
      v &&
        ((t = (t = v[At] || null)
          ? Eg(t.formAction)
          : v.getAttribute("formAction")),
        t !== null && ((f = t), (v = null)));
      var A = new Ao("action", "action", null, l, u);
      e.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (_a !== 0) {
                  var $ = v ? Cg(u, v) : new FormData(u);
                  Ic(
                    a,
                    { pending: !0, data: $, method: u.method, action: f },
                    null,
                    $,
                  );
                }
              } else
                typeof f == "function" &&
                  (A.preventDefault(),
                  ($ = v ? Cg(u, v) : new FormData(u)),
                  Ic(
                    a,
                    { pending: !0, data: $, method: u.method, action: f },
                    f,
                    $,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var zf = 0; zf < dc.length; zf++) {
    var Of = dc[zf],
      O2 = Of.toLowerCase(),
      j2 = Of[0].toUpperCase() + Of.slice(1);
    cn(O2, "on" + j2);
  }
  (cn(ep, "onAnimationEnd"),
    cn(tp, "onAnimationIteration"),
    cn(np, "onAnimationStart"),
    cn("dblclick", "onDoubleClick"),
    cn("focusin", "onFocus"),
    cn("focusout", "onBlur"),
    cn(IS, "onTransitionRun"),
    cn(KS, "onTransitionStart"),
    cn(FS, "onTransitionCancel"),
    cn(ap, "onTransitionEnd"),
    Ar("onMouseEnter", ["mouseout", "mouseover"]),
    Ar("onMouseLeave", ["mouseout", "mouseover"]),
    Ar("onPointerEnter", ["pointerout", "pointerover"]),
    Ar("onPointerLeave", ["pointerout", "pointerover"]),
    ka(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ka(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ka("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ka(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ka(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ka(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var hi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    D2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(hi),
    );
  function Tg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var v = l.length - 1; 0 <= v; v--) {
            var A = l[v],
              $ = A.instance,
              P = A.currentTarget;
            if (((A = A.listener), $ !== f && u.isPropagationStopped()))
              break e;
            ((f = A), (u.currentTarget = P));
            try {
              f(u);
            } catch (te) {
              zo(te);
            }
            ((u.currentTarget = null), (f = $));
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((A = l[v]),
              ($ = A.instance),
              (P = A.currentTarget),
              (A = A.listener),
              $ !== f && u.isPropagationStopped())
            )
              break e;
            ((f = A), (u.currentTarget = P));
            try {
              f(u);
            } catch (te) {
              zo(te);
            }
            ((u.currentTarget = null), (f = $));
          }
      }
    }
  }
  function Ae(e, t) {
    var a = t[Vu];
    a === void 0 && (a = t[Vu] = new Set());
    var l = e + "__bubble";
    a.has(l) || (wg(t, e, 2, !1), a.add(l));
  }
  function jf(e, t, a) {
    var l = 0;
    (t && (l |= 4), wg(a, e, l, t));
  }
  var gs = "_reactListening" + Math.random().toString(36).slice(2);
  function Df(e) {
    if (!e[gs]) {
      ((e[gs] = !0),
        vh.forEach(function (a) {
          a !== "selectionchange" && (D2.has(a) || jf(a, !1, e), jf(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gs] || ((t[gs] = !0), jf("selectionchange", !1, t));
    }
  }
  function wg(e, t, a, l) {
    switch (ev(t)) {
      case 2:
        var u = sx;
        break;
      case 8:
        u = ux;
        break;
      default:
        u = If;
    }
    ((a = u.bind(null, t, a, e)),
      (u = void 0),
      !Wu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: u })
          : e.addEventListener(t, a, !0)
        : u !== void 0
          ? e.addEventListener(t, a, { passive: u })
          : e.addEventListener(t, a, !1));
  }
  function Uf(e, t, a, l, u) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var A = l.stateNode.containerInfo;
          if (A === u) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var $ = v.tag;
              if (($ === 3 || $ === 4) && v.stateNode.containerInfo === u)
                return;
              v = v.return;
            }
          for (; A !== null; ) {
            if (((v = wr(A)), v === null)) return;
            if ((($ = v.tag), $ === 5 || $ === 6 || $ === 26 || $ === 27)) {
              l = f = v;
              continue e;
            }
            A = A.parentNode;
          }
        }
        l = l.return;
      }
    Nh(function () {
      var P = f,
        te = Fu(a),
        re = [];
      e: {
        var I = rp.get(e);
        if (I !== void 0) {
          var J = Ao,
            me = e;
          switch (e) {
            case "keypress":
              if (Ro(a) === 0) break e;
            case "keydown":
            case "keyup":
              J = _S;
              break;
            case "focusin":
              ((me = "focus"), (J = ac));
              break;
            case "focusout":
              ((me = "blur"), (J = ac));
              break;
            case "beforeblur":
            case "afterblur":
              J = ac;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = jh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = pS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = NS;
              break;
            case ep:
            case tp:
            case np:
              J = vS;
              break;
            case ap:
              J = OS;
              break;
            case "scroll":
            case "scrollend":
              J = mS;
              break;
            case "wheel":
              J = DS;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = SS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Uh;
              break;
            case "toggle":
            case "beforetoggle":
              J = LS;
          }
          var Se = (t & 4) !== 0,
            Ye = !Se && (e === "scroll" || e === "scrollend"),
            V = Se ? (I !== null ? I + "Capture" : null) : I;
          Se = [];
          for (var k = P, Z; k !== null; ) {
            var ae = k;
            if (
              ((Z = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                Z === null ||
                V === null ||
                ((ae = Ll(k, V)), ae != null && Se.push(pi(k, ae, Z))),
              Ye)
            )
              break;
            k = k.return;
          }
          0 < Se.length &&
            ((I = new J(I, me, null, a, te)),
            re.push({ event: I, listeners: Se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            I &&
              a !== Ku &&
              (me = a.relatedTarget || a.fromElement) &&
              (wr(me) || me[Tr]))
          )
            break e;
          if (
            (J || I) &&
            ((I =
              te.window === te
                ? te
                : (I = te.ownerDocument)
                  ? I.defaultView || I.parentWindow
                  : window),
            J
              ? ((me = a.relatedTarget || a.toElement),
                (J = P),
                (me = me ? wr(me) : null),
                me !== null &&
                  ((Ye = c(me)),
                  (Se = me.tag),
                  me !== Ye || (Se !== 5 && Se !== 27 && Se !== 6)) &&
                  (me = null))
              : ((J = null), (me = P)),
            J !== me)
          ) {
            if (
              ((Se = jh),
              (ae = "onMouseLeave"),
              (V = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Se = Uh),
                (ae = "onPointerLeave"),
                (V = "onPointerEnter"),
                (k = "pointer")),
              (Ye = J == null ? I : Ul(J)),
              (Z = me == null ? I : Ul(me)),
              (I = new Se(ae, k + "leave", J, a, te)),
              (I.target = Ye),
              (I.relatedTarget = Z),
              (ae = null),
              wr(te) === P &&
                ((Se = new Se(V, k + "enter", me, a, te)),
                (Se.target = Z),
                (Se.relatedTarget = Ye),
                (ae = Se)),
              (Ye = ae),
              J && me)
            )
              t: {
                for (Se = U2, V = J, k = me, Z = 0, ae = V; ae; ae = Se(ae))
                  Z++;
                ae = 0;
                for (var ve = k; ve; ve = Se(ve)) ae++;
                for (; 0 < Z - ae; ) ((V = Se(V)), Z--);
                for (; 0 < ae - Z; ) ((k = Se(k)), ae--);
                for (; Z--; ) {
                  if (V === k || (k !== null && V === k.alternate)) {
                    Se = V;
                    break t;
                  }
                  ((V = Se(V)), (k = Se(k)));
                }
                Se = null;
              }
            else Se = null;
            (J !== null && Rg(re, I, J, Se, !1),
              me !== null && Ye !== null && Rg(re, Ye, me, Se, !0));
          }
        }
        e: {
          if (
            ((I = P ? Ul(P) : window),
            (J = I.nodeName && I.nodeName.toLowerCase()),
            J === "select" || (J === "input" && I.type === "file"))
          )
            var Ue = Yh;
          else if (Qh(I))
            if (Vh) Ue = XS;
            else {
              Ue = VS;
              var pe = YS;
            }
          else
            ((J = I.nodeName),
              !J ||
              J.toLowerCase() !== "input" ||
              (I.type !== "checkbox" && I.type !== "radio")
                ? P && Iu(P.elementType) && (Ue = Yh)
                : (Ue = GS));
          if (Ue && (Ue = Ue(e, P))) {
            kh(re, Ue, a, te);
            break e;
          }
          (pe && pe(e, I, P),
            e === "focusout" &&
              P &&
              I.type === "number" &&
              P.memoizedProps.value != null &&
              Pu(I, "number", I.value));
        }
        switch (((pe = P ? Ul(P) : window), e)) {
          case "focusin":
            (Qh(pe) || pe.contentEditable === "true") &&
              ((Dr = pe), (uc = P), (Vl = null));
            break;
          case "focusout":
            Vl = uc = Dr = null;
            break;
          case "mousedown":
            cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((cc = !1), Jh(re, a, te));
            break;
          case "selectionchange":
            if (PS) break;
          case "keydown":
          case "keyup":
            Jh(re, a, te);
        }
        var we;
        if (lc)
          e: {
            switch (e) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          jr
            ? $h(e, a) && (ze = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (ze = "onCompositionStart");
        (ze &&
          (Lh &&
            a.locale !== "ko" &&
            (jr || ze !== "onCompositionStart"
              ? ze === "onCompositionEnd" && jr && (we = zh())
              : ((fa = te),
                (ec = "value" in fa ? fa.value : fa.textContent),
                (jr = !0))),
          (pe = vs(P, ze)),
          0 < pe.length &&
            ((ze = new Dh(ze, e, null, a, te)),
            re.push({ event: ze, listeners: pe }),
            we
              ? (ze.data = we)
              : ((we = qh(a)), we !== null && (ze.data = we)))),
          (we = HS ? $S(e, a) : qS(e, a)) &&
            ((ze = vs(P, "onBeforeInput")),
            0 < ze.length &&
              ((pe = new Dh("onBeforeInput", "beforeinput", null, a, te)),
              re.push({ event: pe, listeners: ze }),
              (pe.data = we))),
          z2(re, e, P, a, te));
      }
      Tg(re, t);
    });
  }
  function pi(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function vs(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = Ll(e, a)),
          u != null && l.unshift(pi(e, u, f)),
          (u = Ll(e, t)),
          u != null && l.push(pi(e, u, f))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function U2(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rg(e, t, a, l, u) {
    for (var f = t._reactName, v = []; a !== null && a !== l; ) {
      var A = a,
        $ = A.alternate,
        P = A.stateNode;
      if (((A = A.tag), $ !== null && $ === l)) break;
      ((A !== 5 && A !== 26 && A !== 27) ||
        P === null ||
        (($ = P),
        u
          ? ((P = Ll(a, f)), P != null && v.unshift(pi(a, P, $)))
          : u || ((P = Ll(a, f)), P != null && v.push(pi(a, P, $)))),
        (a = a.return));
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var L2 = /\r\n?/g,
    B2 = /\u0000|\uFFFD/g;
  function _g(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        L2,
        `
`,
      )
      .replace(B2, "");
  }
  function Ag(e, t) {
    return ((t = _g(t)), _g(e) === t);
  }
  function ke(e, t, a, l, u, f) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Nr(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Nr(e, "" + l);
        break;
      case "className":
        Eo(e, "class", l);
        break;
      case "tabIndex":
        Eo(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Eo(e, a, l);
        break;
      case "style":
        Ah(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          Eo(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((l = To("" + l)), e.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == "function" &&
            (a === "formAction"
              ? (t !== "input" && ke(e, t, "name", u.name, u, null),
                ke(e, t, "formEncType", u.formEncType, u, null),
                ke(e, t, "formMethod", u.formMethod, u, null),
                ke(e, t, "formTarget", u.formTarget, u, null))
              : (ke(e, t, "encType", u.encType, u, null),
                ke(e, t, "method", u.method, u, null),
                ke(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = To("" + l)), e.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (e.onclick = Ln);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = To("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        (Ae("beforetoggle", e), Ae("toggle", e), xo(e, "popover", l));
        break;
      case "xlinkActuate":
        Un(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Un(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Un(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Un(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Un(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Un(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Un(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Un(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Un(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        xo(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = fS.get(a) || a), xo(e, a, l));
    }
  }
  function Lf(e, t, a, l, u, f) {
    switch (a) {
      case "style":
        Ah(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Nr(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Nr(e, "" + l);
        break;
      case "onScroll":
        l != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ae("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Ln);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!bh.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (f = e[At] || null),
              (f = f != null ? f[a] : null),
              typeof f == "function" && e.removeEventListener(t, f, u),
              typeof l == "function")
            ) {
              (typeof f != "function" &&
                f !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, u));
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
                ? e.setAttribute(a, "")
                : xo(e, a, l);
          }
    }
  }
  function gt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ae("error", e), Ae("load", e));
        var l = !1,
          u = !1,
          f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var v = a[f];
            if (v != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  ke(e, t, f, v, a, null);
              }
          }
        (u && ke(e, t, "srcSet", a.srcSet, a, null),
          l && ke(e, t, "src", a.src, a, null));
        return;
      case "input":
        Ae("invalid", e);
        var A = (f = v = u = null),
          $ = null,
          P = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var te = a[l];
            if (te != null)
              switch (l) {
                case "name":
                  u = te;
                  break;
                case "type":
                  v = te;
                  break;
                case "checked":
                  $ = te;
                  break;
                case "defaultChecked":
                  P = te;
                  break;
                case "value":
                  f = te;
                  break;
                case "defaultValue":
                  A = te;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (te != null) throw Error(o(137, t));
                  break;
                default:
                  ke(e, t, l, te, a, null);
              }
          }
        Th(e, f, A, $, P, v, u, !1);
        return;
      case "select":
        (Ae("invalid", e), (l = v = f = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((A = a[u]), A != null))
            switch (u) {
              case "value":
                f = A;
                break;
              case "defaultValue":
                v = A;
                break;
              case "multiple":
                l = A;
              default:
                ke(e, t, u, A, a, null);
            }
        ((t = f),
          (a = v),
          (e.multiple = !!l),
          t != null ? Mr(e, !!l, t, !1) : a != null && Mr(e, !!l, a, !0));
        return;
      case "textarea":
        (Ae("invalid", e), (f = u = l = null));
        for (v in a)
          if (a.hasOwnProperty(v) && ((A = a[v]), A != null))
            switch (v) {
              case "value":
                l = A;
                break;
              case "defaultValue":
                u = A;
                break;
              case "children":
                f = A;
                break;
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(o(91));
                break;
              default:
                ke(e, t, v, A, a, null);
            }
        Rh(e, l, u, f);
        return;
      case "option":
        for ($ in a)
          if (a.hasOwnProperty($) && ((l = a[$]), l != null))
            switch ($) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ke(e, t, $, l, a, null);
            }
        return;
      case "dialog":
        (Ae("beforetoggle", e),
          Ae("toggle", e),
          Ae("cancel", e),
          Ae("close", e));
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < hi.length; l++) Ae(hi[l], e);
        break;
      case "image":
        (Ae("error", e), Ae("load", e));
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ae("error", e), Ae("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (P in a)
          if (a.hasOwnProperty(P) && ((l = a[P]), l != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                ke(e, t, P, l, a, null);
            }
        return;
      default:
        if (Iu(t)) {
          for (te in a)
            a.hasOwnProperty(te) &&
              ((l = a[te]), l !== void 0 && Lf(e, t, te, l, a, void 0));
          return;
        }
    }
    for (A in a)
      a.hasOwnProperty(A) && ((l = a[A]), l != null && ke(e, t, A, l, a, null));
  }
  function H2(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          f = null,
          v = null,
          A = null,
          $ = null,
          P = null,
          te = null;
        for (J in a) {
          var re = a[J];
          if (a.hasOwnProperty(J) && re != null)
            switch (J) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                $ = re;
              default:
                l.hasOwnProperty(J) || ke(e, t, J, null, l, re);
            }
        }
        for (var I in l) {
          var J = l[I];
          if (((re = a[I]), l.hasOwnProperty(I) && (J != null || re != null)))
            switch (I) {
              case "type":
                f = J;
                break;
              case "name":
                u = J;
                break;
              case "checked":
                P = J;
                break;
              case "defaultChecked":
                te = J;
                break;
              case "value":
                v = J;
                break;
              case "defaultValue":
                A = J;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null) throw Error(o(137, t));
                break;
              default:
                J !== re && ke(e, t, I, J, l, re);
            }
        }
        Zu(e, v, A, $, P, te, f, u);
        return;
      case "select":
        J = v = A = I = null;
        for (f in a)
          if ((($ = a[f]), a.hasOwnProperty(f) && $ != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                J = $;
              default:
                l.hasOwnProperty(f) || ke(e, t, f, null, l, $);
            }
        for (u in l)
          if (
            ((f = l[u]),
            ($ = a[u]),
            l.hasOwnProperty(u) && (f != null || $ != null))
          )
            switch (u) {
              case "value":
                I = f;
                break;
              case "defaultValue":
                A = f;
                break;
              case "multiple":
                v = f;
              default:
                f !== $ && ke(e, t, u, f, l, $);
            }
        ((t = A),
          (a = v),
          (l = J),
          I != null
            ? Mr(e, !!a, I, !1)
            : !!l != !!a &&
              (t != null ? Mr(e, !!a, t, !0) : Mr(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        J = I = null;
        for (A in a)
          if (
            ((u = a[A]),
            a.hasOwnProperty(A) && u != null && !l.hasOwnProperty(A))
          )
            switch (A) {
              case "value":
                break;
              case "children":
                break;
              default:
                ke(e, t, A, null, l, u);
            }
        for (v in l)
          if (
            ((u = l[v]),
            (f = a[v]),
            l.hasOwnProperty(v) && (u != null || f != null))
          )
            switch (v) {
              case "value":
                I = u;
                break;
              case "defaultValue":
                J = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== f && ke(e, t, v, u, l, f);
            }
        wh(e, I, J);
        return;
      case "option":
        for (var me in a)
          if (
            ((I = a[me]),
            a.hasOwnProperty(me) && I != null && !l.hasOwnProperty(me))
          )
            switch (me) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ke(e, t, me, null, l, I);
            }
        for ($ in l)
          if (
            ((I = l[$]),
            (J = a[$]),
            l.hasOwnProperty($) && I !== J && (I != null || J != null))
          )
            switch ($) {
              case "selected":
                e.selected =
                  I && typeof I != "function" && typeof I != "symbol";
                break;
              default:
                ke(e, t, $, I, l, J);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Se in a)
          ((I = a[Se]),
            a.hasOwnProperty(Se) &&
              I != null &&
              !l.hasOwnProperty(Se) &&
              ke(e, t, Se, null, l, I));
        for (P in l)
          if (
            ((I = l[P]),
            (J = a[P]),
            l.hasOwnProperty(P) && I !== J && (I != null || J != null))
          )
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null) throw Error(o(137, t));
                break;
              default:
                ke(e, t, P, I, l, J);
            }
        return;
      default:
        if (Iu(t)) {
          for (var Ye in a)
            ((I = a[Ye]),
              a.hasOwnProperty(Ye) &&
                I !== void 0 &&
                !l.hasOwnProperty(Ye) &&
                Lf(e, t, Ye, void 0, l, I));
          for (te in l)
            ((I = l[te]),
              (J = a[te]),
              !l.hasOwnProperty(te) ||
                I === J ||
                (I === void 0 && J === void 0) ||
                Lf(e, t, te, I, l, J));
          return;
        }
    }
    for (var V in a)
      ((I = a[V]),
        a.hasOwnProperty(V) &&
          I != null &&
          !l.hasOwnProperty(V) &&
          ke(e, t, V, null, l, I));
    for (re in l)
      ((I = l[re]),
        (J = a[re]),
        !l.hasOwnProperty(re) ||
          I === J ||
          (I == null && J == null) ||
          ke(e, t, re, I, l, J));
  }
  function Mg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function $2() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          f = u.transferSize,
          v = u.initiatorType,
          A = u.duration;
        if (f && A && Mg(v)) {
          for (v = 0, A = u.responseEnd, l += 1; l < a.length; l++) {
            var $ = a[l],
              P = $.startTime;
            if (P > A) break;
            var te = $.transferSize,
              re = $.initiatorType;
            te &&
              Mg(re) &&
              (($ = $.responseEnd),
              (v += te * ($ < A ? 1 : (A - P) / ($ - P))));
          }
          if ((--l, (t += (8 * (f + v)) / (u.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Bf = null,
    Hf = null;
  function bs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ng(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $f(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var qf = null;
  function q2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === qf
        ? !1
        : ((qf = e), !0)
      : ((qf = null), !1);
  }
  var Og = typeof setTimeout == "function" ? setTimeout : void 0,
    Q2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jg = typeof Promise == "function" ? Promise : void 0,
    k2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jg < "u"
          ? function (e) {
              return jg.resolve(null).then(e).catch(Y2);
            }
          : Og;
  function Y2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Aa(e) {
    return e === "head";
  }
  function Dg(e, t) {
    var a = t,
      l = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (l === 0) {
            (e.removeChild(u), ol(t));
            return;
          }
          l--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          l++;
        else if (a === "html") yi(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), yi(a));
          for (var f = a.firstChild; f; ) {
            var v = f.nextSibling,
              A = f.nodeName;
            (f[Dl] ||
              A === "SCRIPT" ||
              A === "STYLE" ||
              (A === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(f),
              (f = v));
          }
        } else a === "body" && yi(e.ownerDocument.body);
      a = u;
    } while (a);
    ol(t);
  }
  function Ug(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((a = l.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = l;
    } while (a);
  }
  function Qf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Qf(a), Gu(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function V2(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Dl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = rn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function G2(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = rn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Lg(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = rn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function kf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Yf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function X2(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function rn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Vf = null;
  function Bg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return rn(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Hg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function $g(e, t, a) {
    switch (((t = bs(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function yi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Gu(e);
  }
  var ln = new Map(),
    qg = new Set();
  function Ss(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Jn = K.d;
  K.d = { f: Z2, r: P2, D: I2, C: K2, L: F2, m: J2, X: ex, S: W2, M: tx };
  function Z2() {
    var e = Jn.f(),
      t = fs();
    return e || t;
  }
  function P2(e) {
    var t = Rr(e);
    t !== null && t.tag === 5 && t.type === "form" ? ay(t) : Jn.r(e);
  }
  var rl = typeof document > "u" ? null : document;
  function Qg(e, t, a) {
    var l = rl;
    if (l && typeof t == "string" && t) {
      var u = Ft(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        qg.has(u) ||
          (qg.add(u),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(u) === null &&
            ((t = l.createElement("link")),
            gt(t, "link", e),
            ct(t),
            l.head.appendChild(t))));
    }
  }
  function I2(e) {
    (Jn.D(e), Qg("dns-prefetch", e, null));
  }
  function K2(e, t) {
    (Jn.C(e, t), Qg("preconnect", e, t));
  }
  function F2(e, t, a) {
    Jn.L(e, t, a);
    var l = rl;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + Ft(a.imageSizes) + '"]'))
        : (u += '[href="' + Ft(e) + '"]');
      var f = u;
      switch (t) {
        case "style":
          f = ll(e);
          break;
        case "script":
          f = il(e);
      }
      ln.has(f) ||
        ((e = g(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        ln.set(f, e),
        l.querySelector(u) !== null ||
          (t === "style" && l.querySelector(gi(f))) ||
          (t === "script" && l.querySelector(vi(f))) ||
          ((t = l.createElement("link")),
          gt(t, "link", e),
          ct(t),
          l.head.appendChild(t)));
    }
  }
  function J2(e, t) {
    Jn.m(e, t);
    var a = rl;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Ft(l) + '"][href="' + Ft(e) + '"]',
        f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = il(e);
      }
      if (
        !ln.has(f) &&
        ((e = g({ rel: "modulepreload", href: e }, t)),
        ln.set(f, e),
        a.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vi(f))) return;
        }
        ((l = a.createElement("link")),
          gt(l, "link", e),
          ct(l),
          a.head.appendChild(l));
      }
    }
  }
  function W2(e, t, a) {
    Jn.S(e, t, a);
    var l = rl;
    if (l && e) {
      var u = _r(l).hoistableStyles,
        f = ll(e);
      t = t || "default";
      var v = u.get(f);
      if (!v) {
        var A = { loading: 0, preload: null };
        if ((v = l.querySelector(gi(f)))) A.loading = 5;
        else {
          ((e = g({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = ln.get(f)) && Gf(e, a));
          var $ = (v = l.createElement("link"));
          (ct($),
            gt($, "link", e),
            ($._p = new Promise(function (P, te) {
              (($.onload = P), ($.onerror = te));
            })),
            $.addEventListener("load", function () {
              A.loading |= 1;
            }),
            $.addEventListener("error", function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            xs(v, t, l));
        }
        ((v = { type: "stylesheet", instance: v, count: 1, state: A }),
          u.set(f, v));
      }
    }
  }
  function ex(e, t) {
    Jn.X(e, t);
    var a = rl;
    if (a && e) {
      var l = _r(a).hoistableScripts,
        u = il(e),
        f = l.get(u);
      f ||
        ((f = a.querySelector(vi(u))),
        f ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = ln.get(u)) && Xf(e, t),
          (f = a.createElement("script")),
          ct(f),
          gt(f, "link", e),
          a.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(u, f));
    }
  }
  function tx(e, t) {
    Jn.M(e, t);
    var a = rl;
    if (a && e) {
      var l = _r(a).hoistableScripts,
        u = il(e),
        f = l.get(u);
      f ||
        ((f = a.querySelector(vi(u))),
        f ||
          ((e = g({ src: e, async: !0, type: "module" }, t)),
          (t = ln.get(u)) && Xf(e, t),
          (f = a.createElement("script")),
          ct(f),
          gt(f, "link", e),
          a.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(u, f));
    }
  }
  function kg(e, t, a, l) {
    var u = (u = ce.current) ? Ss(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = ll(a.href)),
            (a = _r(u).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = ll(a.href);
          var f = _r(u).hoistableStyles,
            v = f.get(e);
          if (
            (v ||
              ((u = u.ownerDocument || u),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, v),
              (f = u.querySelector(gi(e))) &&
                !f._p &&
                ((v.instance = f), (v.state.loading = 5)),
              ln.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                ln.set(e, a),
                f || nx(u, e, a, v.state))),
            t && l === null)
          )
            throw Error(o(528, ""));
          return v;
        }
        if (t && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = il(a)),
              (a = _r(u).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function ll(e) {
    return 'href="' + Ft(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Yg(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function nx(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        gt(t, "link", a),
        ct(t),
        e.head.appendChild(t));
  }
  function il(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function vi(e) {
    return "script[async]" + e;
  }
  function Vg(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Ft(a.href) + '"]');
          if (l) return ((t.instance = l), ct(l), l);
          var u = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            ct(l),
            gt(l, "style", u),
            xs(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          u = ll(a.href);
          var f = e.querySelector(gi(u));
          if (f) return ((t.state.loading |= 4), (t.instance = f), ct(f), f);
          ((l = Yg(a)),
            (u = ln.get(u)) && Gf(l, u),
            (f = (e.ownerDocument || e).createElement("link")),
            ct(f));
          var v = f;
          return (
            (v._p = new Promise(function (A, $) {
              ((v.onload = A), (v.onerror = $));
            })),
            gt(f, "link", l),
            (t.state.loading |= 4),
            xs(f, a.precedence, e),
            (t.instance = f)
          );
        case "script":
          return (
            (f = il(a.src)),
            (u = e.querySelector(vi(f)))
              ? ((t.instance = u), ct(u), u)
              : ((l = a),
                (u = ln.get(f)) && ((l = g({}, a)), Xf(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                ct(u),
                gt(u, "link", l),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), xs(l, a.precedence, e));
    return t.instance;
  }
  function xs(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = l.length ? l[l.length - 1] : null,
        f = u,
        v = 0;
      v < l.length;
      v++
    ) {
      var A = l[v];
      if (A.dataset.precedence === t) f = A;
      else if (f !== u) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Gf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Xf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Es = null;
  function Gg(e, t, a) {
    if (Es === null) {
      var l = new Map(),
        u = (Es = new Map());
      u.set(a, l);
    } else ((u = Es), (l = u.get(a)), l || ((l = new Map()), u.set(a, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), u = 0;
      u < a.length;
      u++
    ) {
      var f = a[u];
      if (
        !(
          f[Dl] ||
          f[mt] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = f.getAttribute(t) || "";
        v = e + v;
        var A = l.get(v);
        A ? A.push(f) : l.set(v, [f]);
      }
    }
    return l;
  }
  function Xg(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function ax(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Zg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function rx(e, t, a, l) {
    if (
      a.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = ll(l.href),
          f = t.querySelector(gi(u));
        if (f) {
          ((t = f._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Cs.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = f),
            ct(f));
          return;
        }
        ((f = t.ownerDocument || t),
          (l = Yg(l)),
          (u = ln.get(u)) && Gf(l, u),
          (f = f.createElement("link")),
          ct(f));
        var v = f;
        ((v._p = new Promise(function (A, $) {
          ((v.onload = A), (v.onerror = $));
        })),
          gt(f, "link", l),
          (a.instance = f));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Cs.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Zf = 0;
  function lx(e, t) {
    return (
      e.stylesheets && e.count === 0 && ws(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var l = setTimeout(function () {
              if ((e.stylesheets && ws(e, e.stylesheets), e.unsuspend)) {
                var f = e.unsuspend;
                ((e.unsuspend = null), f());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Zf === 0 && (Zf = 62500 * $2());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && ws(e, e.stylesheets), e.unsuspend))
                ) {
                  var f = e.unsuspend;
                  ((e.unsuspend = null), f());
                }
              },
              (e.imgBytes > Zf ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Cs() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ws(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ts = null;
  function ws(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ts = new Map()),
        t.forEach(ix, e),
        (Ts = null),
        Cs.call(e)));
  }
  function ix(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ts.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Ts.set(e, a));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            f = 0;
          f < u.length;
          f++
        ) {
          var v = u[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (a.set(v.dataset.precedence, v), (l = v));
        }
        l && a.set(null, l);
      }
      ((u = t.instance),
        (v = u.getAttribute("data-precedence")),
        (f = a.get(v) || l),
        f === l && a.set(null, u),
        a.set(v, u),
        this.count++,
        (l = Cs.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var bi = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function ox(e, t, a, l, u, f, v, A, $) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Qu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qu(0)),
      (this.hiddenUpdates = Qu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = $),
      (this.incompleteTransitions = new Map()));
  }
  function Pg(e, t, a, l, u, f, v, A, $, P, te, re) {
    return (
      (e = new ox(e, t, a, v, $, P, te, re, A)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Qt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = wc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: l, isDehydrated: a, cache: t }),
      Mc(f),
      e
    );
  }
  function Ig(e) {
    return e ? ((e = Br), e) : Br;
  }
  function Kg(e, t, a, l, u, f) {
    ((u = Ig(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = ga(t)),
      (l.payload = { element: a }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (a = va(e, l, t)),
      a !== null && (Dt(a, e, t), Fl(a, e, t)));
  }
  function Fg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pf(e, t) {
    (Fg(e, t), (e = e.alternate) && Fg(e, t));
  }
  function Jg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xa(e, 67108864);
      (t !== null && Dt(t, e, 67108864), Pf(e, 67108864));
    }
  }
  function Wg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xt();
      t = ku(t);
      var a = Xa(e, t);
      (a !== null && Dt(a, e, t), Pf(e, t));
    }
  }
  var Rs = !0;
  function sx(e, t, a, l) {
    var u = Q.T;
    Q.T = null;
    var f = K.p;
    try {
      ((K.p = 2), If(e, t, a, l));
    } finally {
      ((K.p = f), (Q.T = u));
    }
  }
  function ux(e, t, a, l) {
    var u = Q.T;
    Q.T = null;
    var f = K.p;
    try {
      ((K.p = 8), If(e, t, a, l));
    } finally {
      ((K.p = f), (Q.T = u));
    }
  }
  function If(e, t, a, l) {
    if (Rs) {
      var u = Kf(l);
      if (u === null) (Uf(e, t, l, _s, a), tv(e, l));
      else if (fx(u, e, t, a, l)) l.stopPropagation();
      else if ((tv(e, l), t & 4 && -1 < cx.indexOf(e))) {
        for (; u !== null; ) {
          var f = Rr(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var v = wn(f.pendingLanes);
                  if (v !== 0) {
                    var A = f;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; v; ) {
                      var $ = 1 << (31 - Tt(v));
                      ((A.entanglements[1] |= $), (v &= ~$));
                    }
                    (Mn(f), (Be & 6) === 0 && ((us = St() + 500), mi(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((A = Xa(f, 2)), A !== null && Dt(A, f, 2), fs(), Pf(f, 2));
            }
          if (((f = Kf(l)), f === null && Uf(e, t, l, _s, a), f === u)) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else Uf(e, t, l, null, a);
    }
  }
  function Kf(e) {
    return ((e = Fu(e)), Ff(e));
  }
  var _s = null;
  function Ff(e) {
    if (((_s = null), (e = wr(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((_s = e), null);
  }
  function ev(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yo()) {
          case go:
            return 2;
          case Ml:
            return 8;
          case xr:
          case Nl:
            return 32;
          case Dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jf = !1,
    Ma = null,
    Na = null,
    za = null,
    Si = new Map(),
    xi = new Map(),
    Oa = [],
    cx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function tv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ma = null;
        break;
      case "dragenter":
      case "dragleave":
        Na = null;
        break;
      case "mouseover":
      case "mouseout":
        za = null;
        break;
      case "pointerover":
      case "pointerout":
        Si.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xi.delete(t.pointerId);
    }
  }
  function Ei(e, t, a, l, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = Rr(t)), t !== null && Jg(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function fx(e, t, a, l, u) {
    switch (t) {
      case "focusin":
        return ((Ma = Ei(Ma, e, t, a, l, u)), !0);
      case "dragenter":
        return ((Na = Ei(Na, e, t, a, l, u)), !0);
      case "mouseover":
        return ((za = Ei(za, e, t, a, l, u)), !0);
      case "pointerover":
        var f = u.pointerId;
        return (Si.set(f, Ei(Si.get(f) || null, e, t, a, l, u)), !0);
      case "gotpointercapture":
        return (
          (f = u.pointerId),
          xi.set(f, Ei(xi.get(f) || null, e, t, a, l, u)),
          !0
        );
    }
    return !1;
  }
  function nv(e) {
    var t = wr(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = d(a)), t !== null)) {
            ((e.blockedOn = t),
              yh(e.priority, function () {
                Wg(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = m(a)), t !== null)) {
            ((e.blockedOn = t),
              yh(e.priority, function () {
                Wg(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function As(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Kf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Ku = l), a.target.dispatchEvent(l), (Ku = null));
      } else return ((t = Rr(a)), t !== null && Jg(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function av(e, t, a) {
    As(e) && a.delete(t);
  }
  function dx() {
    ((Jf = !1),
      Ma !== null && As(Ma) && (Ma = null),
      Na !== null && As(Na) && (Na = null),
      za !== null && As(za) && (za = null),
      Si.forEach(av),
      xi.forEach(av));
  }
  function Ms(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jf ||
        ((Jf = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, dx)));
  }
  var Ns = null;
  function rv(e) {
    Ns !== e &&
      ((Ns = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Ns === e && (Ns = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            u = e[t + 2];
          if (typeof l != "function") {
            if (Ff(l || a) === null) continue;
            break;
          }
          var f = Rr(a);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ic(f, { pending: !0, data: u, method: a.method, action: l }, l, u));
        }
      }));
  }
  function ol(e) {
    function t($) {
      return Ms($, e);
    }
    (Ma !== null && Ms(Ma, e),
      Na !== null && Ms(Na, e),
      za !== null && Ms(za, e),
      Si.forEach(t),
      xi.forEach(t));
    for (var a = 0; a < Oa.length; a++) {
      var l = Oa[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Oa.length && ((a = Oa[0]), a.blockedOn === null); )
      (nv(a), a.blockedOn === null && Oa.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var u = a[l],
          f = a[l + 1],
          v = u[At] || null;
        if (typeof f == "function") v || rv(a);
        else if (v) {
          var A = null;
          if (f && f.hasAttribute("formAction")) {
            if (((u = f), (v = f[At] || null))) A = v.formAction;
            else if (Ff(u) !== null) continue;
          } else A = v.action;
          (typeof A == "function" ? (a[l + 1] = A) : (a.splice(l, 3), (l -= 3)),
            rv(a));
        }
      }
  }
  function lv() {
    function e(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (v) {
              return (u = v);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), l || setTimeout(a, 20));
    }
    function a() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Wf(e) {
    this._internalRoot = e;
  }
  ((zs.prototype.render = Wf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        l = Xt();
      Kg(a, l, e, t, null, null);
    }),
    (zs.prototype.unmount = Wf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Kg(e.current, 2, null, e, null, null), fs(), (t[Tr] = null));
        }
      }));
  function zs(e) {
    this._internalRoot = e;
  }
  zs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ph();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Oa.length && t !== 0 && t < Oa[a].priority; a++);
      (Oa.splice(a, 0, e), a === 0 && nv(e));
    }
  };
  var iv = r.version;
  if (iv !== "19.2.0") throw Error(o(527, iv, "19.2.0"));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var mx = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Q,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Os.isDisabled && Os.supportsFiber)
      try {
        ((Cn = Os.inject(mx)), (Ct = Os));
      } catch {}
  }
  return (
    (Ti.createRoot = function (e, t) {
      if (!s(e)) throw Error(o(299));
      var a = !1,
        l = "",
        u = my,
        f = hy,
        v = py;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (v = t.onRecoverableError)),
        (t = Pg(e, 1, !1, null, null, a, l, null, u, f, v, lv)),
        (e[Tr] = t.current),
        Df(e),
        new Wf(t)
      );
    }),
    (Ti.hydrateRoot = function (e, t, a) {
      if (!s(e)) throw Error(o(299));
      var l = !1,
        u = "",
        f = my,
        v = hy,
        A = py,
        $ = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
          a.onCaughtError !== void 0 && (v = a.onCaughtError),
          a.onRecoverableError !== void 0 && (A = a.onRecoverableError),
          a.formState !== void 0 && ($ = a.formState)),
        (t = Pg(e, 1, !0, t, a ?? null, l, u, $, f, v, A, lv)),
        (t.context = Ig(null)),
        (a = t.current),
        (l = Xt()),
        (l = ku(l)),
        (u = ga(l)),
        (u.callback = null),
        va(a, u, l),
        (a = l),
        (t.current.lanes = a),
        jl(t, a),
        Mn(t),
        (e[Tr] = t.current),
        Df(e),
        new zs(t)
      );
    }),
    (Ti.version = "19.2.0"),
    Ti
  );
}
var yv;
function Ex() {
  if (yv) return nd.exports;
  yv = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (nd.exports = xx()), nd.exports);
}
var Cx = Ex();
const Tx = im(Cx);
var gv = "popstate";
function wx(n = {}) {
  function r(s, c) {
    let {
      pathname: d = "/",
      search: m = "",
      hash: h = "",
    } = yr(s.location.hash.substring(1));
    return (
      !d.startsWith("/") && !d.startsWith(".") && (d = "/" + d),
      Dd(
        "",
        { pathname: d, search: m, hash: h },
        (c.state && c.state.usr) || null,
        (c.state && c.state.key) || "default",
      )
    );
  }
  function i(s, c) {
    let d = s.document.querySelector("base"),
      m = "";
    if (d && d.getAttribute("href")) {
      let h = s.location.href,
        p = h.indexOf("#");
      m = p === -1 ? h : h.slice(0, p);
    }
    return m + "#" + (typeof c == "string" ? c : Qi(c));
  }
  function o(s, c) {
    Pt(
      s.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`,
    );
  }
  return _x(r, i, o, n);
}
function Ie(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
function Pt(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function Rx() {
  return Math.random().toString(36).substring(2, 10);
}
function vv(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function Dd(n, r, i = null, o) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? yr(r) : r),
    state: i,
    key: (r && r.key) || o || Rx(),
  };
}
function Qi({ pathname: n = "/", search: r = "", hash: i = "" }) {
  return (
    r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i),
    n
  );
}
function yr(n) {
  let r = {};
  if (n) {
    let i = n.indexOf("#");
    i >= 0 && ((r.hash = n.substring(i)), (n = n.substring(0, i)));
    let o = n.indexOf("?");
    (o >= 0 && ((r.search = n.substring(o)), (n = n.substring(0, o))),
      n && (r.pathname = n));
  }
  return r;
}
function _x(n, r, i, o = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = o,
    d = s.history,
    m = "POP",
    h = null,
    p = y();
  p == null && ((p = 0), d.replaceState({ ...d.state, idx: p }, ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function g() {
    m = "POP";
    let E = y(),
      _ = E == null ? null : E - p;
    ((p = E), h && h({ action: m, location: x.location, delta: _ }));
  }
  function b(E, _) {
    m = "PUSH";
    let N = Dd(x.location, E, _);
    (i && i(N, E), (p = y() + 1));
    let w = vv(N, p),
      z = x.createHref(N);
    try {
      d.pushState(w, "", z);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      s.location.assign(z);
    }
    c && h && h({ action: m, location: x.location, delta: 1 });
  }
  function S(E, _) {
    m = "REPLACE";
    let N = Dd(x.location, E, _);
    (i && i(N, E), (p = y()));
    let w = vv(N, p),
      z = x.createHref(N);
    (d.replaceState(w, "", z),
      c && h && h({ action: m, location: x.location, delta: 0 }));
  }
  function C(E) {
    return Ax(E);
  }
  let x = {
    get action() {
      return m;
    },
    get location() {
      return n(s, d);
    },
    listen(E) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(gv, g),
        (h = E),
        () => {
          (s.removeEventListener(gv, g), (h = null));
        }
      );
    },
    createHref(E) {
      return r(s, E);
    },
    createURL: C,
    encodeLocation(E) {
      let _ = C(E);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: b,
    replace: S,
    go(E) {
      return d.go(E);
    },
  };
  return x;
}
function Ax(n, r = !1) {
  let i = "http://localhost";
  (typeof window < "u" &&
    (i =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ie(i, "No window.location.(origin|href) available to create URL"));
  let o = typeof n == "string" ? n : Qi(n);
  return (
    (o = o.replace(/ $/, "%20")),
    !r && o.startsWith("//") && (o = i + o),
    new URL(o, i)
  );
}
function U0(n, r, i = "/") {
  return Mx(n, r, i, !1);
}
function Mx(n, r, i, o) {
  let s = typeof r == "string" ? yr(r) : r,
    c = na(s.pathname || "/", i);
  if (c == null) return null;
  let d = L0(n);
  Nx(d);
  let m = null;
  for (let h = 0; m == null && h < d.length; ++h) {
    let p = Qx(c);
    m = $x(d[h], p, o);
  }
  return m;
}
function L0(n, r = [], i = [], o = "", s = !1) {
  let c = (d, m, h = s, p) => {
    let y = {
      relativePath: p === void 0 ? d.path || "" : p,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: m,
      route: d,
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(o) && h) return;
      (Ie(
        y.relativePath.startsWith(o),
        `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(o.length)));
    }
    let g = ta([o, y.relativePath]),
      b = i.concat(y);
    (d.children &&
      d.children.length > 0 &&
      (Ie(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      L0(d.children, r, b, g, h)),
      !(d.path == null && !d.index) &&
        r.push({ path: g, score: Bx(g, d.index), routesMeta: b }));
  };
  return (
    n.forEach((d, m) => {
      if (d.path === "" || !d.path?.includes("?")) c(d, m);
      else for (let h of B0(d.path)) c(d, m, !0, h);
    }),
    r
  );
}
function B0(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [i, ...o] = r,
    s = i.endsWith("?"),
    c = i.replace(/\?$/, "");
  if (o.length === 0) return s ? [c, ""] : [c];
  let d = B0(o.join("/")),
    m = [];
  return (
    m.push(...d.map((h) => (h === "" ? c : [c, h].join("/")))),
    s && m.push(...d),
    m.map((h) => (n.startsWith("/") && h === "" ? "/" : h))
  );
}
function Nx(n) {
  n.sort((r, i) =>
    r.score !== i.score
      ? i.score - r.score
      : Hx(
          r.routesMeta.map((o) => o.childrenIndex),
          i.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var zx = /^:[\w-]+$/,
  Ox = 3,
  jx = 2,
  Dx = 1,
  Ux = 10,
  Lx = -2,
  bv = (n) => n === "*";
function Bx(n, r) {
  let i = n.split("/"),
    o = i.length;
  return (
    i.some(bv) && (o += Lx),
    r && (o += jx),
    i
      .filter((s) => !bv(s))
      .reduce((s, c) => s + (zx.test(c) ? Ox : c === "" ? Dx : Ux), o)
  );
}
function Hx(n, r) {
  return n.length === r.length && n.slice(0, -1).every((o, s) => o === r[s])
    ? n[n.length - 1] - r[r.length - 1]
    : 0;
}
function $x(n, r, i = !1) {
  let { routesMeta: o } = n,
    s = {},
    c = "/",
    d = [];
  for (let m = 0; m < o.length; ++m) {
    let h = o[m],
      p = m === o.length - 1,
      y = c === "/" ? r : r.slice(c.length) || "/",
      g = Fs(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
        y,
      ),
      b = h.route;
    if (
      (!g &&
        p &&
        i &&
        !o[o.length - 1].route.index &&
        (g = Fs(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          y,
        )),
      !g)
    )
      return null;
    (Object.assign(s, g.params),
      d.push({
        params: s,
        pathname: ta([c, g.pathname]),
        pathnameBase: Xx(ta([c, g.pathnameBase])),
        route: b,
      }),
      g.pathnameBase !== "/" && (c = ta([c, g.pathnameBase])));
  }
  return d;
}
function Fs(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [i, o] = qx(n.path, n.caseSensitive, n.end),
    s = r.match(i);
  if (!s) return null;
  let c = s[0],
    d = c.replace(/(.)\/+$/, "$1"),
    m = s.slice(1);
  return {
    params: o.reduce((p, { paramName: y, isOptional: g }, b) => {
      if (y === "*") {
        let C = m[b] || "";
        d = c.slice(0, c.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const S = m[b];
      return (
        g && !S ? (p[y] = void 0) : (p[y] = (S || "").replace(/%2F/g, "/")),
        p
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: n,
  };
}
function qx(n, r = !1, i = !0) {
  Pt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`,
  );
  let o = [],
    s =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, m, h) => (
            o.push({ paramName: m, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (s += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
        ? (s += "\\/*$")
        : n !== "" && n !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, r ? void 0 : "i"), o]
  );
}
function Qx(n) {
  try {
    return n
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Pt(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      n
    );
  }
}
function na(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let i = r.endsWith("/") ? r.length - 1 : r.length,
    o = n.charAt(i);
  return o && o !== "/" ? null : n.slice(i) || "/";
}
var kx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yx = (n) => kx.test(n);
function Vx(n, r = "/") {
  let {
      pathname: i,
      search: o = "",
      hash: s = "",
    } = typeof n == "string" ? yr(n) : n,
    c;
  if (i)
    if (Yx(i)) c = i;
    else {
      if (i.includes("//")) {
        let d = i;
        ((i = i.replace(/\/\/+/g, "/")),
          Pt(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${d} -> ${i}`,
          ));
      }
      i.startsWith("/") ? (c = Sv(i.substring(1), "/")) : (c = Sv(i, r));
    }
  else c = r;
  return { pathname: c, search: Zx(o), hash: Px(s) };
}
function Sv(n, r) {
  let i = r.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function id(n, r, i, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Gx(n) {
  return n.filter(
    (r, i) => i === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function om(n) {
  let r = Gx(n);
  return r.map((i, o) => (o === r.length - 1 ? i.pathname : i.pathnameBase));
}
function sm(n, r, i, o = !1) {
  let s;
  typeof n == "string"
    ? (s = yr(n))
    : ((s = { ...n }),
      Ie(
        !s.pathname || !s.pathname.includes("?"),
        id("?", "pathname", "search", s),
      ),
      Ie(
        !s.pathname || !s.pathname.includes("#"),
        id("#", "pathname", "hash", s),
      ),
      Ie(!s.search || !s.search.includes("#"), id("#", "search", "hash", s)));
  let c = n === "" || s.pathname === "",
    d = c ? "/" : s.pathname,
    m;
  if (d == null) m = i;
  else {
    let g = r.length - 1;
    if (!o && d.startsWith("..")) {
      let b = d.split("/");
      for (; b[0] === ".."; ) (b.shift(), (g -= 1));
      s.pathname = b.join("/");
    }
    m = g >= 0 ? r[g] : "/";
  }
  let h = Vx(s, m),
    p = d && d !== "/" && d.endsWith("/"),
    y = (c || d === ".") && i.endsWith("/");
  return (!h.pathname.endsWith("/") && (p || y) && (h.pathname += "/"), h);
}
var ta = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Xx = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zx = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Px = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function Ix(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var H0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(H0);
var Kx = ["GET", ...H0];
new Set(Kx);
var Sl = T.createContext(null);
Sl.displayName = "DataRouter";
var uu = T.createContext(null);
uu.displayName = "DataRouterState";
T.createContext(!1);
var $0 = T.createContext({ isTransitioning: !1 });
$0.displayName = "ViewTransition";
var Fx = T.createContext(new Map());
Fx.displayName = "Fetchers";
var Jx = T.createContext(null);
Jx.displayName = "Await";
var Sn = T.createContext(null);
Sn.displayName = "Navigation";
var Wi = T.createContext(null);
Wi.displayName = "Location";
var xn = T.createContext({ outlet: null, matches: [], isDataRoute: !1 });
xn.displayName = "Route";
var um = T.createContext(null);
um.displayName = "RouteError";
function Wx(n, { relative: r } = {}) {
  Ie(
    xl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: i, navigator: o } = T.useContext(Sn),
    { hash: s, pathname: c, search: d } = eo(n, { relative: r }),
    m = c;
  return (
    i !== "/" && (m = c === "/" ? i : ta([i, c])),
    o.createHref({ pathname: m, search: d, hash: s })
  );
}
function xl() {
  return T.useContext(Wi) != null;
}
function la() {
  return (
    Ie(
      xl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    T.useContext(Wi).location
  );
}
var q0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Q0(n) {
  T.useContext(Sn).static || T.useLayoutEffect(n);
}
function cu() {
  let { isDataRoute: n } = T.useContext(xn);
  return n ? mE() : eE();
}
function eE() {
  Ie(
    xl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let n = T.useContext(Sl),
    { basename: r, navigator: i } = T.useContext(Sn),
    { matches: o } = T.useContext(xn),
    { pathname: s } = la(),
    c = JSON.stringify(om(o)),
    d = T.useRef(!1);
  return (
    Q0(() => {
      d.current = !0;
    }),
    T.useCallback(
      (h, p = {}) => {
        if ((Pt(d.current, q0), !d.current)) return;
        if (typeof h == "number") {
          i.go(h);
          return;
        }
        let y = sm(h, JSON.parse(c), s, p.relative === "path");
        (n == null &&
          r !== "/" &&
          (y.pathname = y.pathname === "/" ? r : ta([r, y.pathname])),
          (p.replace ? i.replace : i.push)(y, p.state, p));
      },
      [r, i, c, s, n],
    )
  );
}
T.createContext(null);
function tE() {
  let { matches: n } = T.useContext(xn),
    r = n[n.length - 1];
  return r ? r.params : {};
}
function eo(n, { relative: r } = {}) {
  let { matches: i } = T.useContext(xn),
    { pathname: o } = la(),
    s = JSON.stringify(om(i));
  return T.useMemo(() => sm(n, JSON.parse(s), o, r === "path"), [n, s, o, r]);
}
function nE(n, r) {
  return k0(n, r);
}
function k0(n, r, i, o, s) {
  Ie(
    xl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: c } = T.useContext(Sn),
    { matches: d } = T.useContext(xn),
    m = d[d.length - 1],
    h = m ? m.params : {},
    p = m ? m.pathname : "/",
    y = m ? m.pathnameBase : "/",
    g = m && m.route;
  {
    let N = (g && g.path) || "";
    Y0(
      p,
      !g || N.endsWith("*") || N.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N === "/" ? "*" : `${N}/*`}">.`,
    );
  }
  let b = la(),
    S;
  if (r) {
    let N = typeof r == "string" ? yr(r) : r;
    (Ie(
      y === "/" || N.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${N.pathname}" was given in the \`location\` prop.`,
    ),
      (S = N));
  } else S = b;
  let C = S.pathname || "/",
    x = C;
  if (y !== "/") {
    let N = y.replace(/^\//, "").split("/");
    x = "/" + C.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let E = U0(n, { pathname: x });
  (Pt(
    g || E != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `,
  ),
    Pt(
      E == null ||
        E[E.length - 1].route.element !== void 0 ||
        E[E.length - 1].route.Component !== void 0 ||
        E[E.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let _ = oE(
    E &&
      E.map((N) =>
        Object.assign({}, N, {
          params: Object.assign({}, h, N.params),
          pathname: ta([
            y,
            c.encodeLocation
              ? c.encodeLocation(
                  N.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : N.pathname,
          ]),
          pathnameBase:
            N.pathnameBase === "/"
              ? y
              : ta([
                  y,
                  c.encodeLocation
                    ? c.encodeLocation(
                        N.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : N.pathnameBase,
                ]),
        }),
      ),
    d,
    i,
    o,
    s,
  );
  return r && _
    ? T.createElement(
        Wi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...S,
            },
            navigationType: "POP",
          },
        },
        _,
      )
    : _;
}
function aE() {
  let n = dE(),
    r = Ix(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    i = n instanceof Error ? n.stack : null,
    o = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: o },
    c = { padding: "2px 4px", backgroundColor: o },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (d = T.createElement(
      T.Fragment,
      null,
      T.createElement("p", null, "💿 Hey developer 👋"),
      T.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        T.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        T.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    T.createElement(
      T.Fragment,
      null,
      T.createElement("h2", null, "Unexpected Application Error!"),
      T.createElement("h3", { style: { fontStyle: "italic" } }, r),
      i ? T.createElement("pre", { style: s }, i) : null,
      d,
    )
  );
}
var rE = T.createElement(aE, null),
  lE = class extends T.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, r) {
      return r.location !== n.location ||
        (r.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : r.error,
            location: r.location,
            revalidation: n.revalidation || r.revalidation,
          };
    }
    componentDidCatch(n, r) {
      this.props.onError
        ? this.props.onError(n, r)
        : console.error(
            "React Router caught the following error during render",
            n,
          );
    }
    render() {
      return this.state.error !== void 0
        ? T.createElement(
            xn.Provider,
            { value: this.props.routeContext },
            T.createElement(um.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function iE({ routeContext: n, match: r, children: i }) {
  let o = T.useContext(Sl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    T.createElement(xn.Provider, { value: n }, i)
  );
}
function oE(n, r = [], i = null, o = null, s = null) {
  if (n == null) {
    if (!i) return null;
    if (i.errors) n = i.matches;
    else if (r.length === 0 && !i.initialized && i.matches.length > 0)
      n = i.matches;
    else return null;
  }
  let c = n,
    d = i?.errors;
  if (d != null) {
    let y = c.findIndex((g) => g.route.id && d?.[g.route.id] !== void 0);
    (Ie(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, y + 1))));
  }
  let m = !1,
    h = -1;
  if (i)
    for (let y = 0; y < c.length; y++) {
      let g = c[y];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = y),
        g.route.id)
      ) {
        let { loaderData: b, errors: S } = i,
          C =
            g.route.loader &&
            !b.hasOwnProperty(g.route.id) &&
            (!S || S[g.route.id] === void 0);
        if (g.route.lazy || C) {
          ((m = !0), h >= 0 ? (c = c.slice(0, h + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  let p =
    i && o
      ? (y, g) => {
          o(y, {
            location: i.location,
            params: i.matches?.[0]?.params ?? {},
            errorInfo: g,
          });
        }
      : void 0;
  return c.reduceRight((y, g, b) => {
    let S,
      C = !1,
      x = null,
      E = null;
    i &&
      ((S = d && g.route.id ? d[g.route.id] : void 0),
      (x = g.route.errorElement || rE),
      m &&
        (h < 0 && b === 0
          ? (Y0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (C = !0),
            (E = null))
          : h === b &&
            ((C = !0), (E = g.route.hydrateFallbackElement || null))));
    let _ = r.concat(c.slice(0, b + 1)),
      N = () => {
        let w;
        return (
          S
            ? (w = x)
            : C
              ? (w = E)
              : g.route.Component
                ? (w = T.createElement(g.route.Component, null))
                : g.route.element
                  ? (w = g.route.element)
                  : (w = y),
          T.createElement(iE, {
            match: g,
            routeContext: { outlet: y, matches: _, isDataRoute: i != null },
            children: w,
          })
        );
      };
    return i && (g.route.ErrorBoundary || g.route.errorElement || b === 0)
      ? T.createElement(lE, {
          location: i.location,
          revalidation: i.revalidation,
          component: x,
          error: S,
          children: N(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          onError: p,
        })
      : N();
  }, null);
}
function cm(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sE(n) {
  let r = T.useContext(Sl);
  return (Ie(r, cm(n)), r);
}
function uE(n) {
  let r = T.useContext(uu);
  return (Ie(r, cm(n)), r);
}
function cE(n) {
  let r = T.useContext(xn);
  return (Ie(r, cm(n)), r);
}
function fm(n) {
  let r = cE(n),
    i = r.matches[r.matches.length - 1];
  return (
    Ie(
      i.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    i.route.id
  );
}
function fE() {
  return fm("useRouteId");
}
function dE() {
  let n = T.useContext(um),
    r = uE("useRouteError"),
    i = fm("useRouteError");
  return n !== void 0 ? n : r.errors?.[i];
}
function mE() {
  let { router: n } = sE("useNavigate"),
    r = fm("useNavigate"),
    i = T.useRef(!1);
  return (
    Q0(() => {
      i.current = !0;
    }),
    T.useCallback(
      async (s, c = {}) => {
        (Pt(i.current, q0),
          i.current &&
            (typeof s == "number"
              ? n.navigate(s)
              : await n.navigate(s, { fromRouteId: r, ...c })));
      },
      [n, r],
    )
  );
}
var xv = {};
function Y0(n, r, i) {
  !r && !xv[n] && ((xv[n] = !0), Pt(!1, i));
}
T.memo(hE);
function hE({ routes: n, future: r, state: i, unstable_onError: o }) {
  return k0(n, void 0, i, o, r);
}
function pE({ to: n, replace: r, state: i, relative: o }) {
  Ie(
    xl(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: s } = T.useContext(Sn);
  Pt(
    !s,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: c } = T.useContext(xn),
    { pathname: d } = la(),
    m = cu(),
    h = sm(n, om(c), d, o === "path"),
    p = JSON.stringify(h);
  return (
    T.useEffect(() => {
      m(JSON.parse(p), { replace: r, state: i, relative: o });
    }, [m, p, o, r, i]),
    null
  );
}
function or(n) {
  Ie(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function yE({
  basename: n = "/",
  children: r = null,
  location: i,
  navigationType: o = "POP",
  navigator: s,
  static: c = !1,
}) {
  Ie(
    !xl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let d = n.replace(/^\/*/, "/"),
    m = T.useMemo(
      () => ({ basename: d, navigator: s, static: c, future: {} }),
      [d, s, c],
    );
  typeof i == "string" && (i = yr(i));
  let {
      pathname: h = "/",
      search: p = "",
      hash: y = "",
      state: g = null,
      key: b = "default",
    } = i,
    S = T.useMemo(() => {
      let C = na(h, d);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: y, state: g, key: b },
            navigationType: o,
          };
    }, [d, h, p, y, g, b, o]);
  return (
    Pt(
      S != null,
      `<Router basename="${d}"> is not able to match the URL "${h}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    S == null
      ? null
      : T.createElement(
          Sn.Provider,
          { value: m },
          T.createElement(Wi.Provider, { children: r, value: S }),
        )
  );
}
function gE({ children: n, location: r }) {
  return nE(Ud(n), r);
}
function Ud(n, r = []) {
  let i = [];
  return (
    T.Children.forEach(n, (o, s) => {
      if (!T.isValidElement(o)) return;
      let c = [...r, s];
      if (o.type === T.Fragment) {
        i.push.apply(i, Ud(o.props.children, c));
        return;
      }
      (Ie(
        o.type === or,
        `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ie(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes.",
        ));
      let d = {
        id: o.props.id || c.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        middleware: o.props.middleware,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      (o.props.children && (d.children = Ud(o.props.children, c)), i.push(d));
    }),
    i
  );
}
var Zs = "get",
  Ps = "application/x-www-form-urlencoded";
function fu(n) {
  return n != null && typeof n.tagName == "string";
}
function vE(n) {
  return fu(n) && n.tagName.toLowerCase() === "button";
}
function bE(n) {
  return fu(n) && n.tagName.toLowerCase() === "form";
}
function SE(n) {
  return fu(n) && n.tagName.toLowerCase() === "input";
}
function xE(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function EE(n, r) {
  return n.button === 0 && (!r || r === "_self") && !xE(n);
}
var js = null;
function CE() {
  if (js === null)
    try {
      (new FormData(document.createElement("form"), 0), (js = !1));
    } catch {
      js = !0;
    }
  return js;
}
var TE = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function od(n) {
  return n != null && !TE.has(n)
    ? (Pt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ps}"`,
      ),
      null)
    : n;
}
function wE(n, r) {
  let i, o, s, c, d;
  if (bE(n)) {
    let m = n.getAttribute("action");
    ((o = m ? na(m, r) : null),
      (i = n.getAttribute("method") || Zs),
      (s = od(n.getAttribute("enctype")) || Ps),
      (c = new FormData(n)));
  } else if (vE(n) || (SE(n) && (n.type === "submit" || n.type === "image"))) {
    let m = n.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let h = n.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((o = h ? na(h, r) : null),
      (i = n.getAttribute("formmethod") || m.getAttribute("method") || Zs),
      (s =
        od(n.getAttribute("formenctype")) ||
        od(m.getAttribute("enctype")) ||
        Ps),
      (c = new FormData(m, n)),
      !CE())
    ) {
      let { name: p, type: y, value: g } = n;
      if (y === "image") {
        let b = p ? `${p}.` : "";
        (c.append(`${b}x`, "0"), c.append(`${b}y`, "0"));
      } else p && c.append(p, g);
    }
  } else {
    if (fu(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((i = Zs), (o = null), (s = Ps), (d = n));
  }
  return (
    c && s === "text/plain" && ((d = c), (c = void 0)),
    { action: o, method: i.toLowerCase(), encType: s, formData: c, body: d }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function dm(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
function RE(n, r, i) {
  let o =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : n;
  return (
    o.pathname === "/"
      ? (o.pathname = `_root.${i}`)
      : r && na(o.pathname, r) === "/"
        ? (o.pathname = `${r.replace(/\/$/, "")}/_root.${i}`)
        : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${i}`),
    o
  );
}
async function _E(n, r) {
  if (n.id in r) return r[n.id];
  try {
    let i = await import(n.module);
    return ((r[n.id] = i), i);
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function AE(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === "preload" &&
        typeof n.imageSrcSet == "string" &&
        typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string";
}
async function ME(n, r, i) {
  let o = await Promise.all(
    n.map(async (s) => {
      let c = r.routes[s.route.id];
      if (c) {
        let d = await _E(c, i);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return jE(
    o
      .flat(1)
      .filter(AE)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function Ev(n, r, i, o, s, c) {
  let d = (h, p) => (i[p] ? h.route.id !== i[p].route.id : !0),
    m = (h, p) =>
      i[p].pathname !== h.pathname ||
      (i[p].route.path?.endsWith("*") && i[p].params["*"] !== h.params["*"]);
  return c === "assets"
    ? r.filter((h, p) => d(h, p) || m(h, p))
    : c === "data"
      ? r.filter((h, p) => {
          let y = o.routes[h.route.id];
          if (!y || !y.hasLoader) return !1;
          if (d(h, p) || m(h, p)) return !0;
          if (h.route.shouldRevalidate) {
            let g = h.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: i[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: h.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == "boolean") return g;
          }
          return !0;
        })
      : [];
}
function NE(n, r, { includeHydrateFallback: i } = {}) {
  return zE(
    n
      .map((o) => {
        let s = r.routes[o.route.id];
        if (!s) return [];
        let c = [s.module];
        return (
          s.clientActionModule && (c = c.concat(s.clientActionModule)),
          s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)),
          i &&
            s.hydrateFallbackModule &&
            (c = c.concat(s.hydrateFallbackModule)),
          s.imports && (c = c.concat(s.imports)),
          c
        );
      })
      .flat(1),
  );
}
function zE(n) {
  return [...new Set(n)];
}
function OE(n) {
  let r = {},
    i = Object.keys(n).sort();
  for (let o of i) r[o] = n[o];
  return r;
}
function jE(n, r) {
  let i = new Set();
  return (
    new Set(r),
    n.reduce((o, s) => {
      let c = JSON.stringify(OE(s));
      return (i.has(c) || (i.add(c), o.push({ key: c, link: s })), o);
    }, [])
  );
}
function V0() {
  let n = T.useContext(Sl);
  return (
    dm(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    n
  );
}
function DE() {
  let n = T.useContext(uu);
  return (
    dm(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    n
  );
}
var mm = T.createContext(void 0);
mm.displayName = "FrameworkContext";
function G0() {
  let n = T.useContext(mm);
  return (
    dm(n, "You must render this element inside a <HydratedRouter> element"),
    n
  );
}
function UE(n, r) {
  let i = T.useContext(mm),
    [o, s] = T.useState(!1),
    [c, d] = T.useState(!1),
    {
      onFocus: m,
      onBlur: h,
      onMouseEnter: p,
      onMouseLeave: y,
      onTouchStart: g,
    } = r,
    b = T.useRef(null);
  (T.useEffect(() => {
    if ((n === "render" && d(!0), n === "viewport")) {
      let x = (_) => {
          _.forEach((N) => {
            d(N.isIntersecting);
          });
        },
        E = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        b.current && E.observe(b.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [n]),
    T.useEffect(() => {
      if (o) {
        let x = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [o]));
  let S = () => {
      s(!0);
    },
    C = () => {
      (s(!1), d(!1));
    };
  return i
    ? n !== "intent"
      ? [c, b, {}]
      : [
          c,
          b,
          {
            onFocus: wi(m, S),
            onBlur: wi(h, C),
            onMouseEnter: wi(p, S),
            onMouseLeave: wi(y, C),
            onTouchStart: wi(g, S),
          },
        ]
    : [!1, b, {}];
}
function wi(n, r) {
  return (i) => {
    (n && n(i), i.defaultPrevented || r(i));
  };
}
function LE({ page: n, ...r }) {
  let { router: i } = V0(),
    o = T.useMemo(() => U0(i.routes, n, i.basename), [i.routes, n, i.basename]);
  return o ? T.createElement(HE, { page: n, matches: o, ...r }) : null;
}
function BE(n) {
  let { manifest: r, routeModules: i } = G0(),
    [o, s] = T.useState([]);
  return (
    T.useEffect(() => {
      let c = !1;
      return (
        ME(n, r, i).then((d) => {
          c || s(d);
        }),
        () => {
          c = !0;
        }
      );
    }, [n, r, i]),
    o
  );
}
function HE({ page: n, matches: r, ...i }) {
  let o = la(),
    { manifest: s, routeModules: c } = G0(),
    { basename: d } = V0(),
    { loaderData: m, matches: h } = DE(),
    p = T.useMemo(() => Ev(n, r, h, s, o, "data"), [n, r, h, s, o]),
    y = T.useMemo(() => Ev(n, r, h, s, o, "assets"), [n, r, h, s, o]),
    g = T.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let C = new Set(),
        x = !1;
      if (
        (r.forEach((_) => {
          let N = s.routes[_.route.id];
          !N ||
            !N.hasLoader ||
            ((!p.some((w) => w.route.id === _.route.id) &&
              _.route.id in m &&
              c[_.route.id]?.shouldRevalidate) ||
            N.hasClientLoader
              ? (x = !0)
              : C.add(_.route.id));
        }),
        C.size === 0)
      )
        return [];
      let E = RE(n, d, "data");
      return (
        x &&
          C.size > 0 &&
          E.searchParams.set(
            "_routes",
            r
              .filter((_) => C.has(_.route.id))
              .map((_) => _.route.id)
              .join(","),
          ),
        [E.pathname + E.search]
      );
    }, [d, m, o, s, p, r, n, c]),
    b = T.useMemo(() => NE(y, s), [y, s]),
    S = BE(y);
  return T.createElement(
    T.Fragment,
    null,
    g.map((C) =>
      T.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...i,
      }),
    ),
    b.map((C) =>
      T.createElement("link", { key: C, rel: "modulepreload", href: C, ...i }),
    ),
    S.map(({ key: C, link: x }) =>
      T.createElement("link", { key: C, nonce: i.nonce, ...x }),
    ),
  );
}
function $E(...n) {
  return (r) => {
    n.forEach((i) => {
      typeof i == "function" ? i(r) : i != null && (i.current = r);
    });
  };
}
var X0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  X0 && (window.__reactRouterVersion = "7.9.6");
} catch {}
function qE({ basename: n, children: r, window: i }) {
  let o = T.useRef();
  o.current == null && (o.current = wx({ window: i, v5Compat: !0 }));
  let s = o.current,
    [c, d] = T.useState({ action: s.action, location: s.location }),
    m = T.useCallback(
      (h) => {
        T.startTransition(() => d(h));
      },
      [d],
    );
  return (
    T.useLayoutEffect(() => s.listen(m), [s, m]),
    T.createElement(yE, {
      basename: n,
      children: r,
      location: c.location,
      navigationType: c.action,
      navigator: s,
    })
  );
}
var Z0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  P0 = T.forwardRef(function (
    {
      onClick: r,
      discover: i = "render",
      prefetch: o = "none",
      relative: s,
      reloadDocument: c,
      replace: d,
      state: m,
      target: h,
      to: p,
      preventScrollReset: y,
      viewTransition: g,
      ...b
    },
    S,
  ) {
    let { basename: C } = T.useContext(Sn),
      x = typeof p == "string" && Z0.test(p),
      E,
      _ = !1;
    if (typeof p == "string" && x && ((E = p), X0))
      try {
        let D = new URL(window.location.href),
          H = p.startsWith("//") ? new URL(D.protocol + p) : new URL(p),
          L = na(H.pathname, C);
        H.origin === D.origin && L != null
          ? (p = L + H.search + H.hash)
          : (_ = !0);
      } catch {
        Pt(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let N = Wx(p, { relative: s }),
      [w, z, M] = UE(o, b),
      j = VE(p, {
        replace: d,
        state: m,
        target: h,
        preventScrollReset: y,
        relative: s,
        viewTransition: g,
      });
    function O(D) {
      (r && r(D), D.defaultPrevented || j(D));
    }
    let B = T.createElement("a", {
      ...b,
      ...M,
      href: E || N,
      onClick: _ || c ? r : O,
      ref: $E(S, z),
      target: h,
      "data-discover": !x && i === "render" ? "true" : void 0,
    });
    return w && !x
      ? T.createElement(T.Fragment, null, B, T.createElement(LE, { page: N }))
      : B;
  });
P0.displayName = "Link";
var QE = T.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: s = !1,
    style: c,
    to: d,
    viewTransition: m,
    children: h,
    ...p
  },
  y,
) {
  let g = eo(d, { relative: p.relative }),
    b = la(),
    S = T.useContext(uu),
    { navigator: C, basename: x } = T.useContext(Sn),
    E = S != null && IE(g) && m === !0,
    _ = C.encodeLocation ? C.encodeLocation(g).pathname : g.pathname,
    N = b.pathname,
    w =
      S && S.navigation && S.navigation.location
        ? S.navigation.location.pathname
        : null;
  (i ||
    ((N = N.toLowerCase()),
    (w = w ? w.toLowerCase() : null),
    (_ = _.toLowerCase())),
    w && x && (w = na(w, x) || w));
  const z = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let M = N === _ || (!s && N.startsWith(_) && N.charAt(z) === "/"),
    j =
      w != null &&
      (w === _ || (!s && w.startsWith(_) && w.charAt(_.length) === "/")),
    O = { isActive: M, isPending: j, isTransitioning: E },
    B = M ? r : void 0,
    D;
  typeof o == "function"
    ? (D = o(O))
    : (D = [
        o,
        M ? "active" : null,
        j ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let H = typeof c == "function" ? c(O) : c;
  return T.createElement(
    P0,
    {
      ...p,
      "aria-current": B,
      className: D,
      ref: y,
      style: H,
      to: d,
      viewTransition: m,
    },
    typeof h == "function" ? h(O) : h,
  );
});
QE.displayName = "NavLink";
var kE = T.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: r,
      navigate: i,
      reloadDocument: o,
      replace: s,
      state: c,
      method: d = Zs,
      action: m,
      onSubmit: h,
      relative: p,
      preventScrollReset: y,
      viewTransition: g,
      ...b
    },
    S,
  ) => {
    let C = ZE(),
      x = PE(m, { relative: p }),
      E = d.toLowerCase() === "get" ? "get" : "post",
      _ = typeof m == "string" && Z0.test(m),
      N = (w) => {
        if ((h && h(w), w.defaultPrevented)) return;
        w.preventDefault();
        let z = w.nativeEvent.submitter,
          M = z?.getAttribute("formmethod") || d;
        C(z || w.currentTarget, {
          fetcherKey: r,
          method: M,
          navigate: i,
          replace: s,
          state: c,
          relative: p,
          preventScrollReset: y,
          viewTransition: g,
        });
      };
    return T.createElement("form", {
      ref: S,
      method: E,
      action: x,
      onSubmit: o ? h : N,
      ...b,
      "data-discover": !_ && n === "render" ? "true" : void 0,
    });
  },
);
kE.displayName = "Form";
function YE(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function I0(n) {
  let r = T.useContext(Sl);
  return (Ie(r, YE(n)), r);
}
function VE(
  n,
  {
    target: r,
    replace: i,
    state: o,
    preventScrollReset: s,
    relative: c,
    viewTransition: d,
  } = {},
) {
  let m = cu(),
    h = la(),
    p = eo(n, { relative: c });
  return T.useCallback(
    (y) => {
      if (EE(y, r)) {
        y.preventDefault();
        let g = i !== void 0 ? i : Qi(h) === Qi(p);
        m(n, {
          replace: g,
          state: o,
          preventScrollReset: s,
          relative: c,
          viewTransition: d,
        });
      }
    },
    [h, m, p, i, o, r, n, s, c, d],
  );
}
var GE = 0,
  XE = () => `__${String(++GE)}__`;
function ZE() {
  let { router: n } = I0("useSubmit"),
    { basename: r } = T.useContext(Sn),
    i = fE();
  return T.useCallback(
    async (o, s = {}) => {
      let { action: c, method: d, encType: m, formData: h, body: p } = wE(o, r);
      if (s.navigate === !1) {
        let y = s.fetcherKey || XE();
        await n.fetch(y, i, s.action || c, {
          preventScrollReset: s.preventScrollReset,
          formData: h,
          body: p,
          formMethod: s.method || d,
          formEncType: s.encType || m,
          flushSync: s.flushSync,
        });
      } else
        await n.navigate(s.action || c, {
          preventScrollReset: s.preventScrollReset,
          formData: h,
          body: p,
          formMethod: s.method || d,
          formEncType: s.encType || m,
          replace: s.replace,
          state: s.state,
          fromRouteId: i,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [n, r, i],
  );
}
function PE(n, { relative: r } = {}) {
  let { basename: i } = T.useContext(Sn),
    o = T.useContext(xn);
  Ie(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1),
    c = { ...eo(n || ".", { relative: r }) },
    d = la();
  if (n == null) {
    c.search = d.search;
    let m = new URLSearchParams(c.search),
      h = m.getAll("index");
    if (h.some((y) => y === "")) {
      (m.delete("index"),
        h.filter((g) => g).forEach((g) => m.append("index", g)));
      let y = m.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      s.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (c.pathname = c.pathname === "/" ? i : ta([i, c.pathname])),
    Qi(c)
  );
}
function IE(n, { relative: r } = {}) {
  let i = T.useContext($0);
  Ie(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = I0("useViewTransitionState"),
    s = eo(n, { relative: r });
  if (!i.isTransitioning) return !1;
  let c = na(i.currentLocation.pathname, o) || i.currentLocation.pathname,
    d = na(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return Fs(s.pathname, d) != null || Fs(s.pathname, c) != null;
}
var K0 = D0();
const KE = im(K0);
var sd = { exports: {} },
  ud = {};
var Cv;
function FE() {
  if (Cv) return ud;
  Cv = 1;
  var n = su();
  function r(h, p) {
    return (h === p && (h !== 0 || 1 / h === 1 / p)) || (h !== h && p !== p);
  }
  var i = typeof Object.is == "function" ? Object.is : r,
    o = n.useSyncExternalStore,
    s = n.useRef,
    c = n.useEffect,
    d = n.useMemo,
    m = n.useDebugValue;
  return (
    (ud.useSyncExternalStoreWithSelector = function (h, p, y, g, b) {
      var S = s(null);
      if (S.current === null) {
        var C = { hasValue: !1, value: null };
        S.current = C;
      } else C = S.current;
      S = d(
        function () {
          function E(M) {
            if (!_) {
              if (((_ = !0), (N = M), (M = g(M)), b !== void 0 && C.hasValue)) {
                var j = C.value;
                if (b(j, M)) return (w = j);
              }
              return (w = M);
            }
            if (((j = w), i(N, M))) return j;
            var O = g(M);
            return b !== void 0 && b(j, O) ? ((N = M), j) : ((N = M), (w = O));
          }
          var _ = !1,
            N,
            w,
            z = y === void 0 ? null : y;
          return [
            function () {
              return E(p());
            },
            z === null
              ? void 0
              : function () {
                  return E(z());
                },
          ];
        },
        [p, y, g, b],
      );
      var x = o(h, S[0], S[1]);
      return (
        c(
          function () {
            ((C.hasValue = !0), (C.value = x));
          },
          [x],
        ),
        m(x),
        x
      );
    }),
    ud
  );
}
var Tv;
function JE() {
  return (Tv || ((Tv = 1), (sd.exports = FE())), sd.exports);
}
var WE = JE();
function F0(n) {
  n();
}
function eC() {
  let n = null,
    r = null;
  return {
    clear() {
      ((n = null), (r = null));
    },
    notify() {
      F0(() => {
        let i = n;
        for (; i; ) (i.callback(), (i = i.next));
      });
    },
    get() {
      const i = [];
      let o = n;
      for (; o; ) (i.push(o), (o = o.next));
      return i;
    },
    subscribe(i) {
      let o = !0;
      const s = (r = { callback: i, next: null, prev: r });
      return (
        s.prev ? (s.prev.next = s) : (n = s),
        function () {
          !o ||
            n === null ||
            ((o = !1),
            s.next ? (s.next.prev = s.prev) : (r = s.prev),
            s.prev ? (s.prev.next = s.next) : (n = s.next));
        }
      );
    },
  };
}
var wv = { notify() {}, get: () => [] };
function tC(n, r) {
  let i,
    o = wv,
    s = 0,
    c = !1;
  function d(x) {
    y();
    const E = o.subscribe(x);
    let _ = !1;
    return () => {
      _ || ((_ = !0), E(), g());
    };
  }
  function m() {
    o.notify();
  }
  function h() {
    C.onStateChange && C.onStateChange();
  }
  function p() {
    return c;
  }
  function y() {
    (s++, i || ((i = n.subscribe(h)), (o = eC())));
  }
  function g() {
    (s--, i && s === 0 && (i(), (i = void 0), o.clear(), (o = wv)));
  }
  function b() {
    c || ((c = !0), y());
  }
  function S() {
    c && ((c = !1), g());
  }
  const C = {
    addNestedSub: d,
    notifyNestedSubs: m,
    handleChangeWrapper: h,
    isSubscribed: p,
    trySubscribe: b,
    tryUnsubscribe: S,
    getListeners: () => o,
  };
  return C;
}
var nC = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  aC = nC(),
  rC = () => typeof navigator < "u" && navigator.product === "ReactNative",
  lC = rC(),
  iC = () => (aC || lC ? T.useLayoutEffect : T.useEffect),
  oC = iC();
function Rv(n, r) {
  return n === r ? n !== 0 || r !== 0 || 1 / n === 1 / r : n !== n && r !== r;
}
function Li(n, r) {
  if (Rv(n, r)) return !0;
  if (typeof n != "object" || n === null || typeof r != "object" || r === null)
    return !1;
  const i = Object.keys(n),
    o = Object.keys(r);
  if (i.length !== o.length) return !1;
  for (let s = 0; s < i.length; s++)
    if (!Object.prototype.hasOwnProperty.call(r, i[s]) || !Rv(n[i[s]], r[i[s]]))
      return !1;
  return !0;
}
var sC = Symbol.for("react-redux-context"),
  uC = typeof globalThis < "u" ? globalThis : {};
function cC() {
  if (!T.createContext) return {};
  const n = (uC[sC] ??= new Map());
  let r = n.get(T.createContext);
  return (r || ((r = T.createContext(null)), n.set(T.createContext, r)), r);
}
var Ua = cC();
function fC(n) {
  const { children: r, context: i, serverState: o, store: s } = n,
    c = T.useMemo(() => {
      const h = tC(s);
      return {
        store: s,
        subscription: h,
        getServerState: o ? () => o : void 0,
      };
    }, [s, o]),
    d = T.useMemo(() => s.getState(), [s]);
  oC(() => {
    const { subscription: h } = c;
    return (
      (h.onStateChange = h.notifyNestedSubs),
      h.trySubscribe(),
      d !== s.getState() && h.notifyNestedSubs(),
      () => {
        (h.tryUnsubscribe(), (h.onStateChange = void 0));
      }
    );
  }, [c, d]);
  const m = i || Ua;
  return T.createElement(m.Provider, { value: c }, r);
}
var dC = fC;
function hm(n = Ua) {
  return function () {
    return T.useContext(n);
  };
}
var J0 = hm();
function W0(n = Ua) {
  const r = n === Ua ? J0 : hm(n),
    i = () => {
      const { store: o } = r();
      return o;
    };
  return (Object.assign(i, { withTypes: () => i }), i);
}
var eb = W0();
function mC(n = Ua) {
  const r = n === Ua ? eb : W0(n),
    i = () => r().dispatch;
  return (Object.assign(i, { withTypes: () => i }), i);
}
var hC = mC(),
  pC = (n, r) => n === r;
function yC(n = Ua) {
  const r = n === Ua ? J0 : hm(n),
    i = (o, s = {}) => {
      const { equalityFn: c = pC } =
          typeof s == "function" ? { equalityFn: s } : s,
        d = r(),
        { store: m, subscription: h, getServerState: p } = d;
      T.useRef(!0);
      const y = T.useCallback(
          {
            [o.name](b) {
              return o(b);
            },
          }[o.name],
          [o],
        ),
        g = WE.useSyncExternalStoreWithSelector(
          h.addNestedSub,
          m.getState,
          p || m.getState,
          y,
          c,
        );
      return (T.useDebugValue(g), g);
    };
  return (Object.assign(i, { withTypes: () => i }), i);
}
var gC = yC(),
  vC = F0,
  zn = function () {
    return (
      (zn =
        Object.assign ||
        function (r) {
          for (var i, o = 1, s = arguments.length; o < s; o++) {
            i = arguments[o];
            for (var c in i)
              Object.prototype.hasOwnProperty.call(i, c) && (r[c] = i[c]);
          }
          return r;
        }),
      zn.apply(this, arguments)
    );
  };
function tb(n, r) {
  var i = {};
  for (var o in n)
    Object.prototype.hasOwnProperty.call(n, o) &&
      r.indexOf(o) < 0 &&
      (i[o] = n[o]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(n); s < o.length; s++)
      r.indexOf(o[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, o[s]) &&
        (i[o[s]] = n[o[s]]);
  return i;
}
function bC(n, r, i) {
  if (i || arguments.length === 2)
    for (var o = 0, s = r.length, c; o < s; o++)
      (c || !(o in r)) &&
        (c || (c = Array.prototype.slice.call(r, 0, o)), (c[o] = r[o]));
  return n.concat(c || Array.prototype.slice.call(r));
}
var Is = "right-scroll-bar-position",
  Ks = "width-before-scroll-bar",
  SC = "with-scroll-bars-hidden",
  xC = "--removed-body-scroll-bar-size";
function cd(n, r) {
  return (typeof n == "function" ? n(r) : n && (n.current = r), n);
}
function EC(n, r) {
  var i = T.useState(function () {
    return {
      value: n,
      callback: r,
      facade: {
        get current() {
          return i.value;
        },
        set current(o) {
          var s = i.value;
          s !== o && ((i.value = o), i.callback(o, s));
        },
      },
    };
  })[0];
  return ((i.callback = r), i.facade);
}
var CC = typeof window < "u" ? T.useLayoutEffect : T.useEffect,
  _v = new WeakMap();
function TC(n, r) {
  var i = EC(null, function (o) {
    return n.forEach(function (s) {
      return cd(s, o);
    });
  });
  return (
    CC(
      function () {
        var o = _v.get(i);
        if (o) {
          var s = new Set(o),
            c = new Set(n),
            d = i.current;
          (s.forEach(function (m) {
            c.has(m) || cd(m, null);
          }),
            c.forEach(function (m) {
              s.has(m) || cd(m, d);
            }));
        }
        _v.set(i, n);
      },
      [n],
    ),
    i
  );
}
function wC(n) {
  return n;
}
function RC(n, r) {
  r === void 0 && (r = wC);
  var i = [],
    o = !1,
    s = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return i.length ? i[i.length - 1] : n;
      },
      useMedium: function (c) {
        var d = r(c, o);
        return (
          i.push(d),
          function () {
            i = i.filter(function (m) {
              return m !== d;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (o = !0; i.length; ) {
          var d = i;
          ((i = []), d.forEach(c));
        }
        i = {
          push: function (m) {
            return c(m);
          },
          filter: function () {
            return i;
          },
        };
      },
      assignMedium: function (c) {
        o = !0;
        var d = [];
        if (i.length) {
          var m = i;
          ((i = []), m.forEach(c), (d = i));
        }
        var h = function () {
            var y = d;
            ((d = []), y.forEach(c));
          },
          p = function () {
            return Promise.resolve().then(h);
          };
        (p(),
          (i = {
            push: function (y) {
              (d.push(y), p());
            },
            filter: function (y) {
              return ((d = d.filter(y)), i);
            },
          }));
      },
    };
  return s;
}
function _C(n) {
  n === void 0 && (n = {});
  var r = RC(null);
  return ((r.options = zn({ async: !0, ssr: !1 }, n)), r);
}
var nb = function (n) {
  var r = n.sideCar,
    i = tb(n, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = r.read();
  if (!o) throw new Error("Sidecar medium not found");
  return T.createElement(o, zn({}, i));
};
nb.isSideCarExport = !0;
function AC(n, r) {
  return (n.useMedium(r), nb);
}
var ab = _C(),
  fd = function () {},
  du = T.forwardRef(function (n, r) {
    var i = T.useRef(null),
      o = T.useState({
        onScrollCapture: fd,
        onWheelCapture: fd,
        onTouchMoveCapture: fd,
      }),
      s = o[0],
      c = o[1],
      d = n.forwardProps,
      m = n.children,
      h = n.className,
      p = n.removeScrollBar,
      y = n.enabled,
      g = n.shards,
      b = n.sideCar,
      S = n.noRelative,
      C = n.noIsolation,
      x = n.inert,
      E = n.allowPinchZoom,
      _ = n.as,
      N = _ === void 0 ? "div" : _,
      w = n.gapMode,
      z = tb(n, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      M = b,
      j = TC([i, r]),
      O = zn(zn({}, z), s);
    return T.createElement(
      T.Fragment,
      null,
      y &&
        T.createElement(M, {
          sideCar: ab,
          removeScrollBar: p,
          shards: g,
          noRelative: S,
          noIsolation: C,
          inert: x,
          setCallbacks: c,
          allowPinchZoom: !!E,
          lockRef: i,
          gapMode: w,
        }),
      d
        ? T.cloneElement(T.Children.only(m), zn(zn({}, O), { ref: j }))
        : T.createElement(N, zn({}, O, { className: h, ref: j }), m),
    );
  });
du.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
du.classNames = { fullWidth: Ks, zeroRight: Is };
var MC = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function NC() {
  if (!document) return null;
  var n = document.createElement("style");
  n.type = "text/css";
  var r = MC();
  return (r && n.setAttribute("nonce", r), n);
}
function zC(n, r) {
  n.styleSheet
    ? (n.styleSheet.cssText = r)
    : n.appendChild(document.createTextNode(r));
}
function OC(n) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(n);
}
var jC = function () {
    var n = 0,
      r = null;
    return {
      add: function (i) {
        (n == 0 && (r = NC()) && (zC(r, i), OC(r)), n++);
      },
      remove: function () {
        (n--,
          !n && r && (r.parentNode && r.parentNode.removeChild(r), (r = null)));
      },
    };
  },
  DC = function () {
    var n = jC();
    return function (r, i) {
      T.useEffect(
        function () {
          return (
            n.add(r),
            function () {
              n.remove();
            }
          );
        },
        [r && i],
      );
    };
  },
  rb = function () {
    var n = DC(),
      r = function (i) {
        var o = i.styles,
          s = i.dynamic;
        return (n(o, s), null);
      };
    return r;
  },
  UC = { left: 0, top: 0, right: 0, gap: 0 },
  dd = function (n) {
    return parseInt(n || "", 10) || 0;
  },
  LC = function (n) {
    var r = window.getComputedStyle(document.body),
      i = r[n === "padding" ? "paddingLeft" : "marginLeft"],
      o = r[n === "padding" ? "paddingTop" : "marginTop"],
      s = r[n === "padding" ? "paddingRight" : "marginRight"];
    return [dd(i), dd(o), dd(s)];
  },
  BC = function (n) {
    if ((n === void 0 && (n = "margin"), typeof window > "u")) return UC;
    var r = LC(n),
      i = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, o - i + r[2] - r[0]),
    };
  },
  HC = rb(),
  hl = "data-scroll-locked",
  $C = function (n, r, i, o) {
    var s = n.left,
      c = n.top,
      d = n.right,
      m = n.gap;
    return (
      i === void 0 && (i = "margin"),
      `
  .`
        .concat(
          SC,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(m, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          hl,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(o, ";"),
            i === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(m, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            i === "padding" &&
              "padding-right: ".concat(m, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Is,
          ` {
    right: `,
        )
        .concat(m, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          Ks,
          ` {
    margin-right: `,
        )
        .concat(m, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Is, " .")
        .concat(
          Is,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Ks, " .")
        .concat(
          Ks,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          hl,
          `] {
    `,
        )
        .concat(xC, ": ")
        .concat(
          m,
          `px;
  }
`,
        )
    );
  },
  Av = function () {
    var n = parseInt(document.body.getAttribute(hl) || "0", 10);
    return isFinite(n) ? n : 0;
  },
  qC = function () {
    T.useEffect(function () {
      return (
        document.body.setAttribute(hl, (Av() + 1).toString()),
        function () {
          var n = Av() - 1;
          n <= 0
            ? document.body.removeAttribute(hl)
            : document.body.setAttribute(hl, n.toString());
        }
      );
    }, []);
  },
  QC = function (n) {
    var r = n.noRelative,
      i = n.noImportant,
      o = n.gapMode,
      s = o === void 0 ? "margin" : o;
    qC();
    var c = T.useMemo(
      function () {
        return BC(s);
      },
      [s],
    );
    return T.createElement(HC, { styles: $C(c, !r, s, i ? "" : "!important") });
  },
  Ld = !1;
if (typeof window < "u")
  try {
    var Ds = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Ld = !0), !0);
      },
    });
    (window.addEventListener("test", Ds, Ds),
      window.removeEventListener("test", Ds, Ds));
  } catch {
    Ld = !1;
  }
var sl = Ld ? { passive: !1 } : !1,
  kC = function (n) {
    return n.tagName === "TEXTAREA";
  },
  lb = function (n, r) {
    if (!(n instanceof Element)) return !1;
    var i = window.getComputedStyle(n);
    return (
      i[r] !== "hidden" &&
      !(i.overflowY === i.overflowX && !kC(n) && i[r] === "visible")
    );
  },
  YC = function (n) {
    return lb(n, "overflowY");
  },
  VC = function (n) {
    return lb(n, "overflowX");
  },
  Mv = function (n, r) {
    var i = r.ownerDocument,
      o = r;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var s = ib(n, o);
      if (s) {
        var c = ob(n, o),
          d = c[1],
          m = c[2];
        if (d > m) return !0;
      }
      o = o.parentNode;
    } while (o && o !== i.body);
    return !1;
  },
  GC = function (n) {
    var r = n.scrollTop,
      i = n.scrollHeight,
      o = n.clientHeight;
    return [r, i, o];
  },
  XC = function (n) {
    var r = n.scrollLeft,
      i = n.scrollWidth,
      o = n.clientWidth;
    return [r, i, o];
  },
  ib = function (n, r) {
    return n === "v" ? YC(r) : VC(r);
  },
  ob = function (n, r) {
    return n === "v" ? GC(r) : XC(r);
  },
  ZC = function (n, r) {
    return n === "h" && r === "rtl" ? -1 : 1;
  },
  PC = function (n, r, i, o, s) {
    var c = ZC(n, window.getComputedStyle(r).direction),
      d = c * o,
      m = i.target,
      h = r.contains(m),
      p = !1,
      y = d > 0,
      g = 0,
      b = 0;
    do {
      if (!m) break;
      var S = ob(n, m),
        C = S[0],
        x = S[1],
        E = S[2],
        _ = x - E - c * C;
      (C || _) && ib(n, m) && ((g += _), (b += C));
      var N = m.parentNode;
      m = N && N.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? N.host : N;
    } while ((!h && m !== document.body) || (h && (r.contains(m) || r === m)));
    return (((y && Math.abs(g) < 1) || (!y && Math.abs(b) < 1)) && (p = !0), p);
  },
  Us = function (n) {
    return "changedTouches" in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  Nv = function (n) {
    return [n.deltaX, n.deltaY];
  },
  zv = function (n) {
    return n && "current" in n ? n.current : n;
  },
  IC = function (n, r) {
    return n[0] === r[0] && n[1] === r[1];
  },
  KC = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        n,
        ` {pointer-events: all;}
`,
      );
  },
  FC = 0,
  ul = [];
function JC(n) {
  var r = T.useRef([]),
    i = T.useRef([0, 0]),
    o = T.useRef(),
    s = T.useState(FC++)[0],
    c = T.useState(rb)[0],
    d = T.useRef(n);
  (T.useEffect(
    function () {
      d.current = n;
    },
    [n],
  ),
    T.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var x = bC([n.lockRef.current], (n.shards || []).map(zv), !0).filter(
            Boolean,
          );
          return (
            x.forEach(function (E) {
              return E.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(s)),
                x.forEach(function (E) {
                  return E.classList.remove("allow-interactivity-".concat(s));
                }));
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards],
    ));
  var m = T.useCallback(function (x, E) {
      if (
        ("touches" in x && x.touches.length === 2) ||
        (x.type === "wheel" && x.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var _ = Us(x),
        N = i.current,
        w = "deltaX" in x ? x.deltaX : N[0] - _[0],
        z = "deltaY" in x ? x.deltaY : N[1] - _[1],
        M,
        j = x.target,
        O = Math.abs(w) > Math.abs(z) ? "h" : "v";
      if ("touches" in x && O === "h" && j.type === "range") return !1;
      var B = Mv(O, j);
      if (!B) return !0;
      if ((B ? (M = O) : ((M = O === "v" ? "h" : "v"), (B = Mv(O, j))), !B))
        return !1;
      if (
        (!o.current && "changedTouches" in x && (w || z) && (o.current = M), !M)
      )
        return !0;
      var D = o.current || M;
      return PC(D, E, x, D === "h" ? w : z);
    }, []),
    h = T.useCallback(function (x) {
      var E = x;
      if (!(!ul.length || ul[ul.length - 1] !== c)) {
        var _ = "deltaY" in E ? Nv(E) : Us(E),
          N = r.current.filter(function (M) {
            return (
              M.name === E.type &&
              (M.target === E.target || E.target === M.shadowParent) &&
              IC(M.delta, _)
            );
          })[0];
        if (N && N.should) {
          E.cancelable && E.preventDefault();
          return;
        }
        if (!N) {
          var w = (d.current.shards || [])
              .map(zv)
              .filter(Boolean)
              .filter(function (M) {
                return M.contains(E.target);
              }),
            z = w.length > 0 ? m(E, w[0]) : !d.current.noIsolation;
          z && E.cancelable && E.preventDefault();
        }
      }
    }, []),
    p = T.useCallback(function (x, E, _, N) {
      var w = { name: x, delta: E, target: _, should: N, shadowParent: WC(_) };
      (r.current.push(w),
        setTimeout(function () {
          r.current = r.current.filter(function (z) {
            return z !== w;
          });
        }, 1));
    }, []),
    y = T.useCallback(function (x) {
      ((i.current = Us(x)), (o.current = void 0));
    }, []),
    g = T.useCallback(function (x) {
      p(x.type, Nv(x), x.target, m(x, n.lockRef.current));
    }, []),
    b = T.useCallback(function (x) {
      p(x.type, Us(x), x.target, m(x, n.lockRef.current));
    }, []);
  T.useEffect(function () {
    return (
      ul.push(c),
      n.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: b,
      }),
      document.addEventListener("wheel", h, sl),
      document.addEventListener("touchmove", h, sl),
      document.addEventListener("touchstart", y, sl),
      function () {
        ((ul = ul.filter(function (x) {
          return x !== c;
        })),
          document.removeEventListener("wheel", h, sl),
          document.removeEventListener("touchmove", h, sl),
          document.removeEventListener("touchstart", y, sl));
      }
    );
  }, []);
  var S = n.removeScrollBar,
    C = n.inert;
  return T.createElement(
    T.Fragment,
    null,
    C ? T.createElement(c, { styles: KC(s) }) : null,
    S
      ? T.createElement(QC, { noRelative: n.noRelative, gapMode: n.gapMode })
      : null,
  );
}
function WC(n) {
  for (var r = null; n !== null; )
    (n instanceof ShadowRoot && ((r = n.host), (n = n.host)),
      (n = n.parentNode));
  return r;
}
const eT = AC(ab, JC);
var sb = T.forwardRef(function (n, r) {
  return T.createElement(du, zn({}, n, { ref: r, sideCar: eT }));
});
sb.classNames = du.classNames;
function On(n) {
  return Object.keys(n);
}
function md(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function pm(n, r) {
  const i = { ...n },
    o = r;
  return (
    md(n) &&
      md(r) &&
      Object.keys(r).forEach((s) => {
        md(o[s]) && s in n ? (i[s] = pm(i[s], o[s])) : (i[s] = o[s]);
      }),
    i
  );
}
function tT(n) {
  return n.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
}
function nT(n) {
  return typeof n != "string" || !n.includes("var(--mantine-scale)")
    ? n
    : n
        .match(/^calc\((.*?)\)$/)?.[1]
        .split("*")[0]
        .trim();
}
function aT(n) {
  const r = nT(n);
  return typeof r == "number"
    ? r
    : typeof r == "string"
      ? r.includes("calc") || r.includes("var")
        ? r
        : r.includes("px")
          ? Number(r.replace("px", ""))
          : r.includes("rem")
            ? Number(r.replace("rem", "")) * 16
            : r.includes("em")
              ? Number(r.replace("em", "")) * 16
              : Number(r)
      : NaN;
}
function Ov(n) {
  return n === "0rem" ? "0rem" : `calc(${n} * var(--mantine-scale))`;
}
function ub(n, { shouldScale: r = !1 } = {}) {
  function i(o) {
    if (o === 0 || o === "0") return `0${n}`;
    if (typeof o == "number") {
      const s = `${o / 16}${n}`;
      return r ? Ov(s) : s;
    }
    if (typeof o == "string") {
      if (
        o === "" ||
        o.startsWith("calc(") ||
        o.startsWith("clamp(") ||
        o.includes("rgba(")
      )
        return o;
      if (o.includes(","))
        return o
          .split(",")
          .map((c) => i(c))
          .join(",");
      if (o.includes(" "))
        return o
          .split(" ")
          .map((c) => i(c))
          .join(" ");
      const s = o.replace("px", "");
      if (!Number.isNaN(Number(s))) {
        const c = `${Number(s) / 16}${n}`;
        return r ? Ov(c) : c;
      }
    }
    return o;
  }
  return i;
}
const ie = ub("rem", { shouldScale: !0 }),
  jv = ub("em");
function ym(n) {
  return Object.keys(n).reduce(
    (r, i) => (n[i] !== void 0 && (r[i] = n[i]), r),
    {},
  );
}
function cb(n) {
  if (typeof n == "number") return !0;
  if (typeof n == "string") {
    if (
      n.startsWith("calc(") ||
      n.startsWith("var(") ||
      (n.includes(" ") && n.trim() !== "")
    )
      return !0;
    const r =
      /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return n
      .trim()
      .split(/\s+/)
      .every((o) => r.test(o));
  }
  return !1;
}
function rT(n) {
  return Array.isArray(n) || n === null
    ? !1
    : typeof n == "object"
      ? n.type !== T.Fragment
      : !1;
}
function to(n) {
  const r = T.createContext(null);
  return [
    ({ children: s, value: c }) => R.jsx(r.Provider, { value: c, children: s }),
    () => {
      const s = T.useContext(r);
      if (s === null) throw new Error(n);
      return s;
    },
  ];
}
function gm(n = null) {
  const r = T.createContext(n);
  return [
    ({ children: s, value: c }) => R.jsx(r.Provider, { value: c, children: s }),
    () => T.useContext(r),
  ];
}
function Dv(n, r) {
  return (i) => {
    if (typeof i != "string" || i.trim().length === 0) throw new Error(r);
    return `${n}-${i}`;
  };
}
function Bd(n, r) {
  let i = n;
  for (; (i = i.parentElement) && !i.matches(r); );
  return i;
}
function lT(n, r, i) {
  for (let o = n - 1; o >= 0; o -= 1) if (!r[o].disabled) return o;
  if (i) {
    for (let o = r.length - 1; o > -1; o -= 1) if (!r[o].disabled) return o;
  }
  return n;
}
function iT(n, r, i) {
  for (let o = n + 1; o < r.length; o += 1) if (!r[o].disabled) return o;
  if (i) {
    for (let o = 0; o < r.length; o += 1) if (!r[o].disabled) return o;
  }
  return n;
}
function oT(n, r, i) {
  return Bd(n, i) === Bd(r, i);
}
function sT({
  parentSelector: n,
  siblingSelector: r,
  onKeyDown: i,
  loop: o = !0,
  activateOnFocus: s = !1,
  dir: c = "rtl",
  orientation: d,
}) {
  return (m) => {
    i?.(m);
    const h = Array.from(
        Bd(m.currentTarget, n)?.querySelectorAll(r) || [],
      ).filter((C) => oT(m.currentTarget, C, n)),
      p = h.findIndex((C) => m.currentTarget === C),
      y = iT(p, h, o),
      g = lT(p, h, o),
      b = c === "rtl" ? g : y,
      S = c === "rtl" ? y : g;
    switch (m.key) {
      case "ArrowRight": {
        d === "horizontal" &&
          (m.stopPropagation(),
          m.preventDefault(),
          h[b].focus(),
          s && h[b].click());
        break;
      }
      case "ArrowLeft": {
        d === "horizontal" &&
          (m.stopPropagation(),
          m.preventDefault(),
          h[S].focus(),
          s && h[S].click());
        break;
      }
      case "ArrowUp": {
        d === "vertical" &&
          (m.stopPropagation(),
          m.preventDefault(),
          h[g].focus(),
          s && h[g].click());
        break;
      }
      case "ArrowDown": {
        d === "vertical" &&
          (m.stopPropagation(),
          m.preventDefault(),
          h[y].focus(),
          s && h[y].click());
        break;
      }
      case "Home": {
        (m.stopPropagation(),
          m.preventDefault(),
          !h[0].disabled && h[0].focus());
        break;
      }
      case "End": {
        (m.stopPropagation(), m.preventDefault());
        const C = h.length - 1;
        !h[C].disabled && h[C].focus();
        break;
      }
    }
  };
}
const uT = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function El(n) {
  return uT[n];
}
function Ze(n, r = "size", i = !0) {
  if (n !== void 0) return cb(n) ? (i ? ie(n) : n) : `var(--${r}-${n})`;
}
function no(n) {
  return Ze(n, "mantine-spacing");
}
function $t(n) {
  return n === void 0
    ? "var(--mantine-radius-default)"
    : Ze(n, "mantine-radius");
}
function Zt(n) {
  return Ze(n, "mantine-font-size");
}
function cT(n) {
  return Ze(n, "mantine-line-height", !1);
}
function fb(n) {
  if (n) return Ze(n, "mantine-shadow", !1);
}
function fT(n = "mantine-") {
  return `${n}${Math.random().toString(36).slice(2, 11)}`;
}
function ur(n) {
  const r = T.useRef(n);
  return (
    T.useEffect(() => {
      r.current = n;
    }),
    T.useMemo(
      () =>
        (...i) =>
          r.current?.(...i),
      [],
    )
  );
}
function mu(n, r) {
  const {
      delay: i,
      flushOnUnmount: o,
      leading: s,
    } = typeof r == "number"
      ? { delay: r, flushOnUnmount: !1, leading: !1 }
      : r,
    c = ur(n),
    d = T.useRef(0),
    m = T.useMemo(() => {
      const h = Object.assign(
        (...p) => {
          window.clearTimeout(d.current);
          const y = h._isFirstCall;
          h._isFirstCall = !1;
          function g() {
            (window.clearTimeout(d.current),
              (d.current = 0),
              (h._isFirstCall = !0));
          }
          if (s && y) {
            c(...p);
            const C = () => {
                g();
              },
              x = () => {
                d.current !== 0 && (g(), c(...p));
              },
              E = () => {
                g();
              };
            ((h.flush = x),
              (h.cancel = E),
              (d.current = window.setTimeout(C, i)));
            return;
          }
          if (s && !y) {
            const C = () => {
                d.current !== 0 && (g(), c(...p));
              },
              x = () => {
                g();
              };
            ((h.flush = C), (h.cancel = x));
            const E = () => {
              g();
            };
            d.current = window.setTimeout(E, i);
            return;
          }
          const b = () => {
              d.current !== 0 && (g(), c(...p));
            },
            S = () => {
              g();
            };
          ((h.flush = b),
            (h.cancel = S),
            (d.current = window.setTimeout(b, i)));
        },
        { flush: () => {}, cancel: () => {}, _isFirstCall: !0 },
      );
      return h;
    }, [c, i, s]);
  return (
    T.useEffect(
      () => () => {
        o ? m.flush() : m.cancel();
      },
      [m, o],
    ),
    m
  );
}
function dT(n, r) {
  try {
    return (
      n.addEventListener("change", r),
      () => n.removeEventListener("change", r)
    );
  } catch {
    return (n.addListener(r), () => n.removeListener(r));
  }
}
function mT(n, r) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(n).matches
    : !1;
}
function db(
  n,
  r,
  { getInitialValueInEffect: i } = { getInitialValueInEffect: !0 },
) {
  const [o, s] = T.useState(i ? r : mT(n));
  return (
    T.useEffect(() => {
      try {
        const c = window.matchMedia(n);
        return (s(c.matches), dT(c, (d) => s(d.matches)));
      } catch {
        return;
      }
    }, [n]),
    o || !1
  );
}
const ao = typeof document < "u" ? T.useLayoutEffect : T.useEffect;
function mb(n, r) {
  const i = T.useRef(!1);
  (T.useEffect(
    () => () => {
      i.current = !1;
    },
    [],
  ),
    T.useEffect(() => {
      if (i.current) return n();
      i.current = !0;
    }, r));
}
function hT({ opened: n, shouldReturnFocus: r = !0 }) {
  const i = T.useRef(null),
    o = () => {
      i.current &&
        "focus" in i.current &&
        typeof i.current.focus == "function" &&
        i.current?.focus({ preventScroll: !0 });
    };
  return (
    mb(() => {
      let s = -1;
      const c = (d) => {
        d.key === "Tab" && window.clearTimeout(s);
      };
      return (
        document.addEventListener("keydown", c),
        n
          ? (i.current = document.activeElement)
          : r && (s = window.setTimeout(o, 10)),
        () => {
          (window.clearTimeout(s), document.removeEventListener("keydown", c));
        }
      );
    }, [n, r]),
    o
  );
}
const pT = /input|select|textarea|button|object/,
  hb = "a, input, select, textarea, button, object, [tabindex]";
function yT(n) {
  return n.style.display === "none";
}
function gT(n) {
  if (
    n.getAttribute("aria-hidden") ||
    n.getAttribute("hidden") ||
    n.getAttribute("type") === "hidden"
  )
    return !1;
  let i = n;
  for (; i && !(i === document.body || i.nodeType === 11); ) {
    if (yT(i)) return !1;
    i = i.parentNode;
  }
  return !0;
}
function pb(n) {
  let r = n.getAttribute("tabindex");
  return (r === null && (r = void 0), parseInt(r, 10));
}
function Hd(n) {
  const r = n.nodeName.toLowerCase(),
    i = !Number.isNaN(pb(n));
  return (
    ((pT.test(r) && !n.disabled) ||
      (n instanceof HTMLAnchorElement && n.href) ||
      i) &&
    gT(n)
  );
}
function yb(n) {
  const r = pb(n);
  return (Number.isNaN(r) || r >= 0) && Hd(n);
}
function vT(n) {
  return Array.from(n.querySelectorAll(hb)).filter(yb);
}
function bT(n, r) {
  const i = vT(n);
  if (!i.length) {
    r.preventDefault();
    return;
  }
  const o = i[r.shiftKey ? 0 : i.length - 1],
    s = n.getRootNode();
  let c = o === s.activeElement || n === s.activeElement;
  const d = s.activeElement;
  if (
    (d.tagName === "INPUT" &&
      d.getAttribute("type") === "radio" &&
      (c = i
        .filter(
          (y) =>
            y.getAttribute("type") === "radio" &&
            y.getAttribute("name") === d.getAttribute("name"),
        )
        .includes(o)),
    !c)
  )
    return;
  r.preventDefault();
  const h = i[r.shiftKey ? i.length - 1 : 0];
  h && h.focus();
}
function ST(n = !0) {
  const r = T.useRef(null),
    i = (s) => {
      let c = s.querySelector("[data-autofocus]");
      if (!c) {
        const d = Array.from(s.querySelectorAll(hb));
        ((c = d.find(yb) || d.find(Hd) || null), !c && Hd(s) && (c = s));
      }
      c && c.focus({ preventScroll: !0 });
    },
    o = T.useCallback(
      (s) => {
        n &&
          s !== null &&
          r.current !== s &&
          (s
            ? (setTimeout(() => {
                s.getRootNode() && i(s);
              }),
              (r.current = s))
            : (r.current = null));
      },
      [n],
    );
  return (
    T.useEffect(() => {
      if (!n) return;
      r.current && setTimeout(() => i(r.current));
      const s = (c) => {
        c.key === "Tab" && r.current && bT(r.current, c);
      };
      return (
        document.addEventListener("keydown", s),
        () => document.removeEventListener("keydown", s)
      );
    }, [n]),
    o
  );
}
const xT = j0.useId || (() => {});
function ET() {
  const n = xT();
  return n ? `mantine-${n.replace(/:/g, "")}` : "";
}
function ro(n) {
  const r = ET(),
    [i, o] = T.useState(r);
  return (
    ao(() => {
      o(fT());
    }, []),
    typeof n == "string" ? n : typeof window > "u" ? r : i
  );
}
function CT(n, r, i) {
  T.useEffect(
    () => (
      window.addEventListener(n, r, i),
      () => window.removeEventListener(n, r, i)
    ),
    [n, r],
  );
}
function $d(n, r) {
  if (typeof n == "function") return n(r);
  typeof n == "object" && n !== null && "current" in n && (n.current = r);
}
function TT(...n) {
  const r = new Map();
  return (i) => {
    if (
      (n.forEach((o) => {
        const s = $d(o, i);
        s && r.set(o, s);
      }),
      r.size > 0)
    )
      return () => {
        (n.forEach((o) => {
          const s = r.get(o);
          s && typeof s == "function" ? s() : $d(o, null);
        }),
          r.clear());
      };
  };
}
function gr(...n) {
  return T.useCallback(TT(...n), n);
}
function gb({
  value: n,
  defaultValue: r,
  finalValue: i,
  onChange: o = () => {},
}) {
  const [s, c] = T.useState(r !== void 0 ? r : i),
    d = (m, ...h) => {
      (c(m), o?.(m, ...h));
    };
  return n !== void 0 ? [n, o, !0] : [s, d, !1];
}
function vb(n, r) {
  return db("(prefers-reduced-motion: reduce)", n, r);
}
function wT(n = !1, r = {}) {
  const [i, o] = T.useState(n),
    s = T.useCallback(() => {
      o((m) => m || (r.onOpen?.(), !0));
    }, [r.onOpen]),
    c = T.useCallback(() => {
      o((m) => m && (r.onClose?.(), !1));
    }, [r.onClose]),
    d = T.useCallback(() => {
      i ? c() : s();
    }, [c, s, i]);
  return [i, { open: s, close: c, toggle: d }];
}
function bb(n) {
  var r,
    i,
    o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var s = n.length;
      for (r = 0; r < s; r++)
        n[r] && (i = bb(n[r])) && (o && (o += " "), (o += i));
    } else for (i in n) n[i] && (o && (o += " "), (o += i));
  return o;
}
function Lt() {
  for (var n, r, i = 0, o = "", s = arguments.length; i < s; i++)
    (n = arguments[i]) && (r = bb(n)) && (o && (o += " "), (o += r));
  return o;
}
const RT = {};
function _T(n) {
  const r = {};
  return (
    n.forEach((i) => {
      Object.entries(i).forEach(([o, s]) => {
        r[o] ? (r[o] = Lt(r[o], s)) : (r[o] = s);
      });
    }),
    r
  );
}
function hu({ theme: n, classNames: r, props: i, stylesCtx: o }) {
  const c = (Array.isArray(r) ? r : [r]).map((d) =>
    typeof d == "function" ? d(n, i, o) : d || RT,
  );
  return _T(c);
}
function Js({ theme: n, styles: r, props: i, stylesCtx: o }) {
  return (Array.isArray(r) ? r : [r]).reduce(
    (c, d) =>
      typeof d == "function" ? { ...c, ...d(n, i, o) } : { ...c, ...d },
    {},
  );
}
const Sb = T.createContext(null);
function $a() {
  const n = T.useContext(Sb);
  if (!n)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return n;
}
function AT() {
  return $a().cssVariablesResolver;
}
function MT() {
  return $a().classNamesPrefix;
}
function vm() {
  return $a().getStyleNonce;
}
function NT() {
  return $a().withStaticClasses;
}
function zT() {
  return $a().headless;
}
function OT() {
  return $a().stylesTransform?.sx;
}
function jT() {
  return $a().stylesTransform?.styles;
}
function xb() {
  return $a().env || "default";
}
function DT(n) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(n);
}
function UT(n) {
  let r = n.replace("#", "");
  if (r.length === 3) {
    const d = r.split("");
    r = [d[0], d[0], d[1], d[1], d[2], d[2]].join("");
  }
  if (r.length === 8) {
    const d = parseInt(r.slice(6, 8), 16) / 255;
    return {
      r: parseInt(r.slice(0, 2), 16),
      g: parseInt(r.slice(2, 4), 16),
      b: parseInt(r.slice(4, 6), 16),
      a: d,
    };
  }
  const i = parseInt(r, 16),
    o = (i >> 16) & 255,
    s = (i >> 8) & 255,
    c = i & 255;
  return { r: o, g: s, b: c, a: 1 };
}
function LT(n) {
  const [r, i, o, s] = n
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r, g: i, b: o, a: s === void 0 ? 1 : s };
}
function BT(n) {
  const r =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    i = n.match(r);
  if (!i) return { r: 0, g: 0, b: 0, a: 1 };
  const o = parseInt(i[1], 10),
    s = parseInt(i[2], 10) / 100,
    c = parseInt(i[3], 10) / 100,
    d = i[5] ? parseFloat(i[5]) : void 0,
    m = (1 - Math.abs(2 * c - 1)) * s,
    h = o / 60,
    p = m * (1 - Math.abs((h % 2) - 1)),
    y = c - m / 2;
  let g, b, S;
  return (
    h >= 0 && h < 1
      ? ((g = m), (b = p), (S = 0))
      : h >= 1 && h < 2
        ? ((g = p), (b = m), (S = 0))
        : h >= 2 && h < 3
          ? ((g = 0), (b = m), (S = p))
          : h >= 3 && h < 4
            ? ((g = 0), (b = p), (S = m))
            : h >= 4 && h < 5
              ? ((g = p), (b = 0), (S = m))
              : ((g = m), (b = 0), (S = p)),
    {
      r: Math.round((g + y) * 255),
      g: Math.round((b + y) * 255),
      b: Math.round((S + y) * 255),
      a: d || 1,
    }
  );
}
function bm(n) {
  return DT(n)
    ? UT(n)
    : n.startsWith("rgb")
      ? LT(n)
      : n.startsWith("hsl")
        ? BT(n)
        : { r: 0, g: 0, b: 0, a: 1 };
}
function Ls(n, r) {
  if (n.startsWith("var("))
    return `color-mix(in srgb, ${n}, black ${r * 100}%)`;
  const { r: i, g: o, b: s, a: c } = bm(n),
    d = 1 - r,
    m = (h) => Math.round(h * d);
  return `rgba(${m(i)}, ${m(o)}, ${m(s)}, ${c})`;
}
function ki(n, r) {
  return typeof n.primaryShade == "number"
    ? n.primaryShade
    : r === "dark"
      ? n.primaryShade.dark
      : n.primaryShade.light;
}
function hd(n) {
  return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
}
function HT(n) {
  const r = n.match(/oklch\((.*?)%\s/);
  return r ? parseFloat(r[1]) : null;
}
function $T(n) {
  if (n.startsWith("oklch(")) return (HT(n) || 0) / 100;
  const { r, g: i, b: o } = bm(n),
    s = r / 255,
    c = i / 255,
    d = o / 255,
    m = hd(s),
    h = hd(c),
    p = hd(d);
  return 0.2126 * m + 0.7152 * h + 0.0722 * p;
}
function Ri(n, r = 0.179) {
  return n.startsWith("var(") ? !1 : $T(n) > r;
}
function lo({ color: n, theme: r, colorScheme: i }) {
  if (typeof n != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof n}`,
    );
  if (n === "bright")
    return {
      color: n,
      value: i === "dark" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Ri(i === "dark" ? r.white : r.black, r.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (n === "dimmed")
    return {
      color: n,
      value: i === "dark" ? r.colors.dark[2] : r.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: Ri(
        i === "dark" ? r.colors.dark[2] : r.colors.gray[6],
        r.luminanceThreshold,
      ),
      variable: "--mantine-color-dimmed",
    };
  if (n === "white" || n === "black")
    return {
      color: n,
      value: n === "white" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: Ri(n === "white" ? r.white : r.black, r.luminanceThreshold),
      variable: `--mantine-color-${n}`,
    };
  const [o, s] = n.split("."),
    c = s ? Number(s) : void 0,
    d = o in r.colors;
  if (d) {
    const m = c !== void 0 ? r.colors[o][c] : r.colors[o][ki(r, i || "light")];
    return {
      color: o,
      value: m,
      shade: c,
      isThemeColor: d,
      isLight: Ri(m, r.luminanceThreshold),
      variable: s ? `--mantine-color-${o}-${c}` : `--mantine-color-${o}-filled`,
    };
  }
  return {
    color: n,
    value: n,
    isThemeColor: d,
    isLight: Ri(n, r.luminanceThreshold),
    shade: c,
    variable: void 0,
  };
}
function La(n, r) {
  const i = lo({ color: n || r.primaryColor, theme: r });
  return i.variable ? `var(${i.variable})` : n;
}
function qd(n, r) {
  const i = {
      from: n?.from || r.defaultGradient.from,
      to: n?.to || r.defaultGradient.to,
      deg: n?.deg ?? r.defaultGradient.deg ?? 0,
    },
    o = La(i.from, r),
    s = La(i.to, r);
  return `linear-gradient(${i.deg}deg, ${o} 0%, ${s} 100%)`;
}
function Nn(n, r) {
  if (typeof n != "string" || r > 1 || r < 0) return "rgba(0, 0, 0, 1)";
  if (n.startsWith("var(")) {
    const c = (1 - r) * 100;
    return `color-mix(in srgb, ${n}, transparent ${c}%)`;
  }
  if (n.startsWith("oklch"))
    return n.includes("/")
      ? n.replace(/\/\s*[\d.]+\s*\)/, `/ ${r})`)
      : n.replace(")", ` / ${r})`);
  const { r: i, g: o, b: s } = bm(n);
  return `rgba(${i}, ${o}, ${s}, ${r})`;
}
const cl = Nn,
  qT = ({ color: n, theme: r, variant: i, gradient: o, autoContrast: s }) => {
    const c = lo({ color: n, theme: r }),
      d = typeof s == "boolean" ? s : r.autoContrast;
    if (i === "none")
      return {
        background: "transparent",
        hover: "transparent",
        color: "inherit",
        border: "none",
      };
    if (i === "filled") {
      const m =
        d && c.isLight
          ? "var(--mantine-color-black)"
          : "var(--mantine-color-white)";
      return c.isThemeColor
        ? c.shade === void 0
          ? {
              background: `var(--mantine-color-${n}-filled)`,
              hover: `var(--mantine-color-${n}-filled-hover)`,
              color: m,
              border: `${ie(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${c.color}-${c.shade})`,
              hover: `var(--mantine-color-${c.color}-${c.shade === 9 ? 8 : c.shade + 1})`,
              color: m,
              border: `${ie(1)} solid transparent`,
            }
        : {
            background: n,
            hover: Ls(n, 0.1),
            color: m,
            border: `${ie(1)} solid transparent`,
          };
    }
    if (i === "light") {
      if (c.isThemeColor) {
        if (c.shade === void 0)
          return {
            background: `var(--mantine-color-${n}-light)`,
            hover: `var(--mantine-color-${n}-light-hover)`,
            color: `var(--mantine-color-${n}-light-color)`,
            border: `${ie(1)} solid transparent`,
          };
        const m = r.colors[c.color][c.shade];
        return {
          background: Nn(m, 0.1),
          hover: Nn(m, 0.12),
          color: `var(--mantine-color-${c.color}-${Math.min(c.shade, 6)})`,
          border: `${ie(1)} solid transparent`,
        };
      }
      return {
        background: Nn(n, 0.1),
        hover: Nn(n, 0.12),
        color: n,
        border: `${ie(1)} solid transparent`,
      };
    }
    if (i === "outline")
      return c.isThemeColor
        ? c.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${n}-outline-hover)`,
              color: `var(--mantine-color-${n}-outline)`,
              border: `${ie(1)} solid var(--mantine-color-${n}-outline)`,
            }
          : {
              background: "transparent",
              hover: Nn(r.colors[c.color][c.shade], 0.05),
              color: `var(--mantine-color-${c.color}-${c.shade})`,
              border: `${ie(1)} solid var(--mantine-color-${c.color}-${c.shade})`,
            }
        : {
            background: "transparent",
            hover: Nn(n, 0.05),
            color: n,
            border: `${ie(1)} solid ${n}`,
          };
    if (i === "subtle") {
      if (c.isThemeColor) {
        if (c.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${n}-light-hover)`,
            color: `var(--mantine-color-${n}-light-color)`,
            border: `${ie(1)} solid transparent`,
          };
        const m = r.colors[c.color][c.shade];
        return {
          background: "transparent",
          hover: Nn(m, 0.12),
          color: `var(--mantine-color-${c.color}-${Math.min(c.shade, 6)})`,
          border: `${ie(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: Nn(n, 0.12),
        color: n,
        border: `${ie(1)} solid transparent`,
      };
    }
    return i === "transparent"
      ? c.isThemeColor
        ? c.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${n}-light-color)`,
              border: `${ie(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${c.color}-${Math.min(c.shade, 6)})`,
              border: `${ie(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: n,
            border: `${ie(1)} solid transparent`,
          }
      : i === "white"
        ? c.isThemeColor
          ? c.shade === void 0
            ? {
                background: "var(--mantine-color-white)",
                hover: Ls(r.white, 0.01),
                color: `var(--mantine-color-${n}-filled)`,
                border: `${ie(1)} solid transparent`,
              }
            : {
                background: "var(--mantine-color-white)",
                hover: Ls(r.white, 0.01),
                color: `var(--mantine-color-${c.color}-${c.shade})`,
                border: `${ie(1)} solid transparent`,
              }
          : {
              background: "var(--mantine-color-white)",
              hover: Ls(r.white, 0.01),
              color: n,
              border: `${ie(1)} solid transparent`,
            }
        : i === "gradient"
          ? {
              background: qd(o, r),
              hover: qd(o, r),
              color: "var(--mantine-color-white)",
              border: "none",
            }
          : i === "default"
            ? {
                background: "var(--mantine-color-default)",
                hover: "var(--mantine-color-default-hover)",
                color: "var(--mantine-color-default-color)",
                border: `${ie(1)} solid var(--mantine-color-default-border)`,
              }
            : {};
  },
  QT = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  Uv =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Sm = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: QT,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: qT,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Uv,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Uv,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: ie(34), lineHeight: "1.3" },
        h2: { fontSize: ie(26), lineHeight: "1.35" },
        h3: { fontSize: ie(22), lineHeight: "1.4" },
        h4: { fontSize: ie(18), lineHeight: "1.45" },
        h5: { fontSize: ie(16), lineHeight: "1.5" },
        h6: { fontSize: ie(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: ie(12), sm: ie(14), md: ie(16), lg: ie(18), xl: ie(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: ie(2), sm: ie(4), md: ie(8), lg: ie(16), xl: ie(32) },
    spacing: { xs: ie(10), sm: ie(12), md: ie(16), lg: ie(20), xl: ie(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${ie(1)} ${ie(3)} rgba(0, 0, 0, 0.05), 0 ${ie(1)} ${ie(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${ie(1)} ${ie(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ie(10)} ${ie(15)} ${ie(-5)}, rgba(0, 0, 0, 0.04) 0 ${ie(7)} ${ie(7)} ${ie(-5)}`,
      md: `0 ${ie(1)} ${ie(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ie(20)} ${ie(25)} ${ie(-5)}, rgba(0, 0, 0, 0.04) 0 ${ie(10)} ${ie(10)} ${ie(-5)}`,
      lg: `0 ${ie(1)} ${ie(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ie(28)} ${ie(23)} ${ie(-7)}, rgba(0, 0, 0, 0.04) 0 ${ie(12)} ${ie(12)} ${ie(-7)}`,
      xl: `0 ${ie(1)} ${ie(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${ie(36)} ${ie(28)} ${ie(-7)}, rgba(0, 0, 0, 0.04) 0 ${ie(17)} ${ie(17)} ${ie(-7)}`,
    },
    other: {},
    components: {},
  };
function Lv(n) {
  return n === "auto" || n === "dark" || n === "light";
}
function kT({ key: n = "mantine-color-scheme-value" } = {}) {
  let r;
  return {
    get: (i) => {
      if (typeof window > "u") return i;
      try {
        const o = window.localStorage.getItem(n);
        return Lv(o) ? o : i;
      } catch {
        return i;
      }
    },
    set: (i) => {
      try {
        window.localStorage.setItem(n, i);
      } catch (o) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          o,
        );
      }
    },
    subscribe: (i) => {
      ((r = (o) => {
        o.storageArea === window.localStorage &&
          o.key === n &&
          Lv(o.newValue) &&
          i(o.newValue);
      }),
        window.addEventListener("storage", r));
    },
    unsubscribe: () => {
      window.removeEventListener("storage", r);
    },
    clear: () => {
      window.localStorage.removeItem(n);
    },
  };
}
const YT =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Bv =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function pd(n) {
  return n < 0 || n > 9 ? !1 : parseInt(n.toString(), 10) === n;
}
function Hv(n) {
  if (!(n.primaryColor in n.colors)) throw new Error(YT);
  if (
    typeof n.primaryShade == "object" &&
    (!pd(n.primaryShade.dark) || !pd(n.primaryShade.light))
  )
    throw new Error(Bv);
  if (typeof n.primaryShade == "number" && !pd(n.primaryShade))
    throw new Error(Bv);
}
function VT(n, r) {
  if (!r) return (Hv(n), n);
  const i = pm(n, r);
  return (
    r.fontFamily &&
      !r.headings?.fontFamily &&
      (i.headings.fontFamily = r.fontFamily),
    Hv(i),
    i
  );
}
const xm = T.createContext(null),
  GT = () => T.useContext(xm) || Sm;
function ia() {
  const n = T.useContext(xm);
  if (!n)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app",
    );
  return n;
}
function Eb({ theme: n, children: r, inherit: i = !0 }) {
  const o = GT(),
    s = T.useMemo(() => VT(i ? o : Sm, n), [n, o, i]);
  return R.jsx(xm.Provider, { value: s, children: r });
}
Eb.displayName = "@mantine/core/MantineThemeProvider";
function XT() {
  const n = ia(),
    r = vm(),
    i = On(n.breakpoints).reduce((o, s) => {
      const c = n.breakpoints[s].includes("px"),
        d = aT(n.breakpoints[s]),
        m = c ? `${d - 0.1}px` : jv(d - 0.1),
        h = c ? `${d}px` : jv(d);
      return `${o}@media (max-width: ${m}) {.mantine-visible-from-${s} {display: none !important;}}@media (min-width: ${h}) {.mantine-hidden-from-${s} {display: none !important;}}`;
    }, "");
  return R.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: r?.(),
    dangerouslySetInnerHTML: { __html: i },
  });
}
function yd(n) {
  return Object.entries(n)
    .map(([r, i]) => `${r}: ${i};`)
    .join("");
}
function _i(n, r) {
  return (Array.isArray(n) ? n : [n]).reduce((o, s) => `${s}{${o}}`, r);
}
function ZT(n, r) {
  const i = yd(n.variables),
    o = i ? _i(r, i) : "",
    s = yd(n.dark),
    c = yd(n.light),
    d = s
      ? _i(
          r === ":host"
            ? `${r}([data-mantine-color-scheme="dark"])`
            : `${r}[data-mantine-color-scheme="dark"]`,
          s,
        )
      : "",
    m = c
      ? _i(
          r === ":host"
            ? `${r}([data-mantine-color-scheme="light"])`
            : `${r}[data-mantine-color-scheme="light"]`,
          c,
        )
      : "";
  return `${o}

${d}

${m}`;
}
function Cb({ color: n, theme: r, autoContrast: i }) {
  return (typeof i == "boolean" ? i : r.autoContrast) &&
    lo({ color: n || r.primaryColor, theme: r }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function $v(n, r) {
  return Cb({
    color: n.colors[n.primaryColor][ki(n, r)],
    theme: n,
    autoContrast: null,
  });
}
function Bs({
  theme: n,
  color: r,
  colorScheme: i,
  name: o = r,
  withColorValues: s = !0,
}) {
  if (!n.colors[r]) return {};
  if (i === "light") {
    const m = ki(n, "light"),
      h = {
        [`--mantine-color-${o}-text`]: `var(--mantine-color-${o}-filled)`,
        [`--mantine-color-${o}-filled`]: `var(--mantine-color-${o}-${m})`,
        [`--mantine-color-${o}-filled-hover`]: `var(--mantine-color-${o}-${m === 9 ? 8 : m + 1})`,
        [`--mantine-color-${o}-light`]: cl(n.colors[r][m], 0.1),
        [`--mantine-color-${o}-light-hover`]: cl(n.colors[r][m], 0.12),
        [`--mantine-color-${o}-light-color`]: `var(--mantine-color-${o}-${m})`,
        [`--mantine-color-${o}-outline`]: `var(--mantine-color-${o}-${m})`,
        [`--mantine-color-${o}-outline-hover`]: cl(n.colors[r][m], 0.05),
      };
    return s
      ? {
          [`--mantine-color-${o}-0`]: n.colors[r][0],
          [`--mantine-color-${o}-1`]: n.colors[r][1],
          [`--mantine-color-${o}-2`]: n.colors[r][2],
          [`--mantine-color-${o}-3`]: n.colors[r][3],
          [`--mantine-color-${o}-4`]: n.colors[r][4],
          [`--mantine-color-${o}-5`]: n.colors[r][5],
          [`--mantine-color-${o}-6`]: n.colors[r][6],
          [`--mantine-color-${o}-7`]: n.colors[r][7],
          [`--mantine-color-${o}-8`]: n.colors[r][8],
          [`--mantine-color-${o}-9`]: n.colors[r][9],
          ...h,
        }
      : h;
  }
  const c = ki(n, "dark"),
    d = {
      [`--mantine-color-${o}-text`]: `var(--mantine-color-${o}-4)`,
      [`--mantine-color-${o}-filled`]: `var(--mantine-color-${o}-${c})`,
      [`--mantine-color-${o}-filled-hover`]: `var(--mantine-color-${o}-${c === 9 ? 8 : c + 1})`,
      [`--mantine-color-${o}-light`]: cl(n.colors[r][Math.max(0, c - 2)], 0.15),
      [`--mantine-color-${o}-light-hover`]: cl(
        n.colors[r][Math.max(0, c - 2)],
        0.2,
      ),
      [`--mantine-color-${o}-light-color`]: `var(--mantine-color-${o}-${Math.max(c - 5, 0)})`,
      [`--mantine-color-${o}-outline`]: `var(--mantine-color-${o}-${Math.max(c - 4, 0)})`,
      [`--mantine-color-${o}-outline-hover`]: cl(
        n.colors[r][Math.max(c - 4, 0)],
        0.05,
      ),
    };
  return s
    ? {
        [`--mantine-color-${o}-0`]: n.colors[r][0],
        [`--mantine-color-${o}-1`]: n.colors[r][1],
        [`--mantine-color-${o}-2`]: n.colors[r][2],
        [`--mantine-color-${o}-3`]: n.colors[r][3],
        [`--mantine-color-${o}-4`]: n.colors[r][4],
        [`--mantine-color-${o}-5`]: n.colors[r][5],
        [`--mantine-color-${o}-6`]: n.colors[r][6],
        [`--mantine-color-${o}-7`]: n.colors[r][7],
        [`--mantine-color-${o}-8`]: n.colors[r][8],
        [`--mantine-color-${o}-9`]: n.colors[r][9],
        ...d,
      }
    : d;
}
function PT(n) {
  return !!n && typeof n == "object" && "mantine-virtual-color" in n;
}
function fl(n, r, i) {
  On(r).forEach((o) => Object.assign(n, { [`--mantine-${i}-${o}`]: r[o] }));
}
const Tb = (n) => {
  const r = ki(n, "light"),
    i =
      n.defaultRadius in n.radius
        ? n.radius[n.defaultRadius]
        : ie(n.defaultRadius),
    o = {
      variables: {
        "--mantine-z-index-app": "100",
        "--mantine-z-index-modal": "200",
        "--mantine-z-index-popover": "300",
        "--mantine-z-index-overlay": "400",
        "--mantine-z-index-max": "9999",
        "--mantine-scale": n.scale.toString(),
        "--mantine-cursor-type": n.cursorType,
        "--mantine-webkit-font-smoothing": n.fontSmoothing
          ? "antialiased"
          : "unset",
        "--mantine-moz-font-smoothing": n.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": n.white,
        "--mantine-color-black": n.black,
        "--mantine-line-height": n.lineHeights.md,
        "--mantine-font-family": n.fontFamily,
        "--mantine-font-family-monospace": n.fontFamilyMonospace,
        "--mantine-font-family-headings": n.headings.fontFamily,
        "--mantine-heading-font-weight": n.headings.fontWeight,
        "--mantine-heading-text-wrap": n.headings.textWrap,
        "--mantine-radius-default": i,
        "--mantine-primary-color-filled": `var(--mantine-color-${n.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${n.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${n.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${n.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${n.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-color-scheme": "light",
        "--mantine-primary-color-contrast": $v(n, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": n.black,
        "--mantine-color-body": n.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${n.primaryColor}-${r})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
        "--mantine-color-disabled": "var(--mantine-color-gray-2)",
        "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
        "--mantine-color-disabled-border": "var(--mantine-color-gray-3)",
      },
      dark: {
        "--mantine-color-scheme": "dark",
        "--mantine-primary-color-contrast": $v(n, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${n.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
        "--mantine-color-disabled": "var(--mantine-color-dark-6)",
        "--mantine-color-disabled-color": "var(--mantine-color-dark-3)",
        "--mantine-color-disabled-border": "var(--mantine-color-dark-4)",
      },
    };
  (fl(o.variables, n.breakpoints, "breakpoint"),
    fl(o.variables, n.spacing, "spacing"),
    fl(o.variables, n.fontSizes, "font-size"),
    fl(o.variables, n.lineHeights, "line-height"),
    fl(o.variables, n.shadows, "shadow"),
    fl(o.variables, n.radius, "radius"),
    n.colors[n.primaryColor].forEach((c, d) => {
      o.variables[`--mantine-primary-color-${d}`] =
        `var(--mantine-color-${n.primaryColor}-${d})`;
    }),
    On(n.colors).forEach((c) => {
      const d = n.colors[c];
      if (PT(d)) {
        (Object.assign(
          o.light,
          Bs({
            theme: n,
            name: d.name,
            color: d.light,
            colorScheme: "light",
            withColorValues: !0,
          }),
        ),
          Object.assign(
            o.dark,
            Bs({
              theme: n,
              name: d.name,
              color: d.dark,
              colorScheme: "dark",
              withColorValues: !0,
            }),
          ));
        return;
      }
      (d.forEach((m, h) => {
        o.variables[`--mantine-color-${c}-${h}`] = m;
      }),
        Object.assign(
          o.light,
          Bs({ theme: n, color: c, colorScheme: "light", withColorValues: !1 }),
        ),
        Object.assign(
          o.dark,
          Bs({ theme: n, color: c, colorScheme: "dark", withColorValues: !1 }),
        ));
    }));
  const s = n.headings.sizes;
  return (
    On(s).forEach((c) => {
      ((o.variables[`--mantine-${c}-font-size`] = s[c].fontSize),
        (o.variables[`--mantine-${c}-line-height`] = s[c].lineHeight),
        (o.variables[`--mantine-${c}-font-weight`] =
          s[c].fontWeight || n.headings.fontWeight));
    }),
    o
  );
};
function IT({ theme: n, generator: r }) {
  const i = Tb(n),
    o = r?.(n);
  return o ? pm(i, o) : i;
}
const gd = Tb(Sm);
function KT(n) {
  const r = { variables: {}, light: {}, dark: {} };
  return (
    On(n.variables).forEach((i) => {
      gd.variables[i] !== n.variables[i] && (r.variables[i] = n.variables[i]);
    }),
    On(n.light).forEach((i) => {
      gd.light[i] !== n.light[i] && (r.light[i] = n.light[i]);
    }),
    On(n.dark).forEach((i) => {
      gd.dark[i] !== n.dark[i] && (r.dark[i] = n.dark[i]);
    }),
    r
  );
}
function FT(n) {
  return `
  ${n}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${n}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function wb({ cssVariablesSelector: n, deduplicateCssVariables: r }) {
  const i = ia(),
    o = vm(),
    s = AT(),
    c = IT({ theme: i, generator: s }),
    d = n === ":root" && r,
    m = d ? KT(c) : c,
    h = ZT(m, n);
  return h
    ? R.jsx("style", {
        "data-mantine-styles": !0,
        nonce: o?.(),
        dangerouslySetInnerHTML: { __html: `${h}${d ? "" : FT(n)}` },
      })
    : null;
}
wb.displayName = "@mantine/CssVariables";
function dl(n, r) {
  const i =
      typeof window < "u" &&
      "matchMedia" in window &&
      window.matchMedia("(prefers-color-scheme: dark)")?.matches,
    o = n !== "auto" ? n : i ? "dark" : "light";
  r()?.setAttribute("data-mantine-color-scheme", o);
}
function JT({
  manager: n,
  defaultColorScheme: r,
  getRootElement: i,
  forceColorScheme: o,
}) {
  const s = T.useRef(null),
    [c, d] = T.useState(() => n.get(r)),
    m = o || c,
    h = T.useCallback(
      (y) => {
        o || (dl(y, i), d(y), n.set(y));
      },
      [n.set, m, o],
    ),
    p = T.useCallback(() => {
      (d(r), dl(r, i), n.clear());
    }, [n.clear, r]);
  return (
    T.useEffect(
      () => (n.subscribe(h), n.unsubscribe),
      [n.subscribe, n.unsubscribe],
    ),
    ao(() => {
      dl(n.get(r), i);
    }, []),
    T.useEffect(() => {
      if (o) return (dl(o, i), () => {});
      (o === void 0 && dl(c, i),
        typeof window < "u" &&
          "matchMedia" in window &&
          (s.current = window.matchMedia("(prefers-color-scheme: dark)")));
      const y = (g) => {
        c === "auto" && dl(g.matches ? "dark" : "light", i);
      };
      return (
        s.current?.addEventListener("change", y),
        () => s.current?.removeEventListener("change", y)
      );
    }, [c, o]),
    { colorScheme: m, setColorScheme: h, clearColorScheme: p }
  );
}
function WT({ respectReducedMotion: n, getRootElement: r }) {
  ao(() => {
    n && r()?.setAttribute("data-respect-reduced-motion", "true");
  }, [n]);
}
function Em({
  theme: n,
  children: r,
  getStyleNonce: i,
  withStaticClasses: o = !0,
  withGlobalClasses: s = !0,
  deduplicateCssVariables: c = !0,
  withCssVariables: d = !0,
  cssVariablesSelector: m = ":root",
  classNamesPrefix: h = "mantine",
  colorSchemeManager: p = kT(),
  defaultColorScheme: y = "light",
  getRootElement: g = () => document.documentElement,
  cssVariablesResolver: b,
  forceColorScheme: S,
  stylesTransform: C,
  env: x,
}) {
  const {
    colorScheme: E,
    setColorScheme: _,
    clearColorScheme: N,
  } = JT({
    defaultColorScheme: y,
    forceColorScheme: S,
    manager: p,
    getRootElement: g,
  });
  return (
    WT({
      respectReducedMotion: n?.respectReducedMotion || !1,
      getRootElement: g,
    }),
    R.jsx(Sb.Provider, {
      value: {
        colorScheme: E,
        setColorScheme: _,
        clearColorScheme: N,
        getRootElement: g,
        classNamesPrefix: h,
        getStyleNonce: i,
        cssVariablesResolver: b,
        cssVariablesSelector: m,
        withStaticClasses: o,
        stylesTransform: C,
        env: x,
      },
      children: R.jsxs(Eb, {
        theme: n,
        children: [
          d &&
            R.jsx(wb, { cssVariablesSelector: m, deduplicateCssVariables: c }),
          s && R.jsx(XT, {}),
          r,
        ],
      }),
    })
  );
}
Em.displayName = "@mantine/core/MantineProvider";
function Rb({ classNames: n, styles: r, props: i, stylesCtx: o }) {
  const s = ia();
  return {
    resolvedClassNames: hu({
      theme: s,
      classNames: n,
      props: i,
      stylesCtx: o || void 0,
    }),
    resolvedStyles: Js({
      theme: s,
      styles: r,
      props: i,
      stylesCtx: o || void 0,
    }),
  };
}
const e3 = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function t3({ theme: n, options: r, unstyled: i }) {
  return Lt(
    r?.focusable && !i && (n.focusClassName || e3[n.focusRing]),
    r?.active && !i && n.activeClassName,
  );
}
function n3({ selector: n, stylesCtx: r, options: i, props: o, theme: s }) {
  return hu({
    theme: s,
    classNames: i?.classNames,
    props: i?.props || o,
    stylesCtx: r,
  })[n];
}
function qv({ selector: n, stylesCtx: r, theme: i, classNames: o, props: s }) {
  return hu({ theme: i, classNames: o, props: s, stylesCtx: r })[n];
}
function a3({ rootSelector: n, selector: r, className: i }) {
  return n === r ? i : void 0;
}
function r3({ selector: n, classes: r, unstyled: i }) {
  return i ? void 0 : r[n];
}
function l3({
  themeName: n,
  classNamesPrefix: r,
  selector: i,
  withStaticClass: o,
}) {
  return o === !1 ? [] : n.map((s) => `${r}-${s}-${i}`);
}
function i3({ themeName: n, theme: r, selector: i, props: o, stylesCtx: s }) {
  return n.map(
    (c) =>
      hu({
        theme: r,
        classNames: r.components[c]?.classNames,
        props: o,
        stylesCtx: s,
      })?.[i],
  );
}
function o3({ options: n, classes: r, selector: i, unstyled: o }) {
  return n?.variant && !o ? r[`${i}--${n.variant}`] : void 0;
}
function s3({
  theme: n,
  options: r,
  themeName: i,
  selector: o,
  classNamesPrefix: s,
  classNames: c,
  classes: d,
  unstyled: m,
  className: h,
  rootSelector: p,
  props: y,
  stylesCtx: g,
  withStaticClasses: b,
  headless: S,
  transformedStyles: C,
}) {
  return Lt(
    t3({ theme: n, options: r, unstyled: m || S }),
    i3({ theme: n, themeName: i, selector: o, props: y, stylesCtx: g }),
    o3({ options: r, classes: d, selector: o, unstyled: m }),
    qv({ selector: o, stylesCtx: g, theme: n, classNames: c, props: y }),
    qv({ selector: o, stylesCtx: g, theme: n, classNames: C, props: y }),
    n3({ selector: o, stylesCtx: g, options: r, props: y, theme: n }),
    a3({ rootSelector: p, selector: o, className: h }),
    r3({ selector: o, classes: d, unstyled: m || S }),
    b &&
      !S &&
      l3({
        themeName: i,
        classNamesPrefix: s,
        selector: o,
        withStaticClass: r?.withStaticClass,
      }),
    r?.className,
  );
}
function u3({ theme: n, themeName: r, props: i, stylesCtx: o, selector: s }) {
  return r
    .map(
      (c) =>
        Js({
          theme: n,
          styles: n.components[c]?.styles,
          props: i,
          stylesCtx: o,
        })[s],
    )
    .reduce((c, d) => ({ ...c, ...d }), {});
}
function Qd({ style: n, theme: r }) {
  return Array.isArray(n)
    ? [...n].reduce((i, o) => ({ ...i, ...Qd({ style: o, theme: r }) }), {})
    : typeof n == "function"
      ? n(r)
      : (n ?? {});
}
function c3(n) {
  return n.reduce(
    (r, i) => (
      i &&
        Object.keys(i).forEach((o) => {
          r[o] = { ...r[o], ...ym(i[o]) };
        }),
      r
    ),
    {},
  );
}
function f3({
  vars: n,
  varsResolver: r,
  theme: i,
  props: o,
  stylesCtx: s,
  selector: c,
  themeName: d,
  headless: m,
}) {
  return c3([
    m ? {} : r?.(i, o, s),
    ...d.map((h) => i.components?.[h]?.vars?.(i, o, s)),
    n?.(i, o, s),
  ])?.[c];
}
function d3({
  theme: n,
  themeName: r,
  selector: i,
  options: o,
  props: s,
  stylesCtx: c,
  rootSelector: d,
  styles: m,
  style: h,
  vars: p,
  varsResolver: y,
  headless: g,
  withStylesTransform: b,
}) {
  return {
    ...(!b &&
      u3({ theme: n, themeName: r, props: s, stylesCtx: c, selector: i })),
    ...(!b && Js({ theme: n, styles: m, props: s, stylesCtx: c })[i]),
    ...(!b &&
      Js({ theme: n, styles: o?.styles, props: o?.props || s, stylesCtx: c })[
        i
      ]),
    ...f3({
      theme: n,
      props: s,
      stylesCtx: c,
      vars: p,
      varsResolver: y,
      selector: i,
      themeName: r,
      headless: g,
    }),
    ...(d === i ? Qd({ style: h, theme: n }) : null),
    ...Qd({ style: o?.style, theme: n }),
  };
}
function m3({ props: n, stylesCtx: r, themeName: i }) {
  const o = ia(),
    s = jT()?.();
  return {
    getTransformedStyles: (d) =>
      s
        ? [
            ...d.map((h) => s(h, { props: n, theme: o, ctx: r })),
            ...i.map((h) =>
              s(o.components[h]?.styles, { props: n, theme: o, ctx: r }),
            ),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!s,
  };
}
function De({
  name: n,
  classes: r,
  props: i,
  stylesCtx: o,
  className: s,
  style: c,
  rootSelector: d = "root",
  unstyled: m,
  classNames: h,
  styles: p,
  vars: y,
  varsResolver: g,
  attributes: b,
}) {
  const S = ia(),
    C = MT(),
    x = NT(),
    E = zT(),
    _ = (Array.isArray(n) ? n : [n]).filter((z) => z),
    { withStylesTransform: N, getTransformedStyles: w } = m3({
      props: i,
      stylesCtx: o,
      themeName: _,
    });
  return (z, M) => ({
    className: s3({
      theme: S,
      options: M,
      themeName: _,
      selector: z,
      classNamesPrefix: C,
      classNames: h,
      classes: r,
      unstyled: m,
      className: s,
      rootSelector: d,
      props: i,
      stylesCtx: o,
      withStaticClasses: x,
      headless: E,
      transformedStyles: w([M?.styles, p]),
    }),
    style: d3({
      theme: S,
      themeName: _,
      selector: z,
      options: M,
      props: i,
      stylesCtx: o,
      rootSelector: d,
      styles: p,
      style: c,
      vars: y,
      varsResolver: g,
      headless: E,
      withStylesTransform: N,
    }),
    ...b?.[z],
  });
}
function h3(n, r) {
  return typeof n == "boolean" ? n : r.autoContrast;
}
function be(n, r, i) {
  const o = ia(),
    s = o.components[n]?.defaultProps,
    c = typeof s == "function" ? s(o) : s;
  return { ...r, ...c, ...ym(i) };
}
function vd(n) {
  return On(n)
    .reduce((r, i) => (n[i] !== void 0 ? `${r}${tT(i)}:${n[i]};` : r), "")
    .trim();
}
function p3({ selector: n, styles: r, media: i, container: o }) {
  const s = r ? vd(r) : "",
    c = Array.isArray(i)
      ? i.map((m) => `@media${m.query}{${n}{${vd(m.styles)}}}`)
      : [],
    d = Array.isArray(o)
      ? o.map((m) => `@container ${m.query}{${n}{${vd(m.styles)}}}`)
      : [];
  return `${s ? `${n}{${s}}` : ""}${c.join("")}${d.join("")}`.trim();
}
function y3(n) {
  const r = vm();
  return R.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: r?.(),
    dangerouslySetInnerHTML: { __html: p3(n) },
  });
}
function pu(n) {
  const {
    m: r,
    mx: i,
    my: o,
    mt: s,
    mb: c,
    ml: d,
    mr: m,
    me: h,
    ms: p,
    p: y,
    px: g,
    py: b,
    pt: S,
    pb: C,
    pl: x,
    pr: E,
    pe: _,
    ps: N,
    bd: w,
    bdrs: z,
    bg: M,
    c: j,
    opacity: O,
    ff: B,
    fz: D,
    fw: H,
    lts: L,
    ta: q,
    lh: Y,
    fs: G,
    tt: ne,
    td: Q,
    w: K,
    miw: F,
    maw: W,
    h: se,
    mih: U,
    mah: X,
    bgsz: le,
    bgp: ee,
    bgr: ue,
    bga: ce,
    pos: oe,
    top: he,
    left: de,
    bottom: ge,
    right: xe,
    inset: fe,
    display: Ce,
    flex: Re,
    hiddenFrom: Oe,
    visibleFrom: qe,
    lightHidden: nt,
    darkHidden: dt,
    sx: ot,
    ...ut
  } = n;
  return {
    styleProps: ym({
      m: r,
      mx: i,
      my: o,
      mt: s,
      mb: c,
      ml: d,
      mr: m,
      me: h,
      ms: p,
      p: y,
      px: g,
      py: b,
      pt: S,
      pb: C,
      pl: x,
      pr: E,
      pe: _,
      ps: N,
      bd: w,
      bg: M,
      c: j,
      opacity: O,
      ff: B,
      fz: D,
      fw: H,
      lts: L,
      ta: q,
      lh: Y,
      fs: G,
      tt: ne,
      td: Q,
      w: K,
      miw: F,
      maw: W,
      h: se,
      mih: U,
      mah: X,
      bgsz: le,
      bgp: ee,
      bgr: ue,
      bga: ce,
      pos: oe,
      top: he,
      left: de,
      bottom: ge,
      right: xe,
      inset: fe,
      display: Ce,
      flex: Re,
      bdrs: z,
      hiddenFrom: Oe,
      visibleFrom: qe,
      lightHidden: nt,
      darkHidden: dt,
      sx: ot,
    }),
    rest: ut,
  };
}
const g3 = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bdrs: { type: "radius", property: "borderRadius" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function Cm(n, r) {
  const i = lo({ color: n, theme: r });
  return i.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : i.color === "bright"
      ? "var(--mantine-color-bright)"
      : i.variable
        ? `var(${i.variable})`
        : i.color;
}
function v3(n, r) {
  const i = lo({ color: n, theme: r });
  return i.isThemeColor && i.shade === void 0
    ? `var(--mantine-color-${i.color}-text)`
    : Cm(n, r);
}
function b3(n, r) {
  if (typeof n == "number") return ie(n);
  if (typeof n == "string") {
    const [i, o, ...s] = n.split(" ").filter((d) => d.trim() !== "");
    let c = `${ie(i)}`;
    return (
      o && (c += ` ${o}`),
      s.length > 0 && (c += ` ${Cm(s.join(" "), r)}`),
      c.trim()
    );
  }
  return n;
}
const Qv = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function S3(n) {
  return typeof n == "string" && n in Qv ? Qv[n] : n;
}
const x3 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function E3(n, r) {
  return typeof n == "string" && n in r.fontSizes
    ? `var(--mantine-font-size-${n})`
    : typeof n == "string" && x3.includes(n)
      ? `var(--mantine-${n}-font-size)`
      : typeof n == "number" || typeof n == "string"
        ? ie(n)
        : n;
}
function C3(n) {
  return n;
}
const T3 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function w3(n, r) {
  return typeof n == "string" && n in r.lineHeights
    ? `var(--mantine-line-height-${n})`
    : typeof n == "string" && T3.includes(n)
      ? `var(--mantine-${n}-line-height)`
      : n;
}
function R3(n, r) {
  return typeof n == "string" && n in r.radius
    ? `var(--mantine-radius-${n})`
    : typeof n == "number" || typeof n == "string"
      ? ie(n)
      : n;
}
function _3(n) {
  return typeof n == "number" ? ie(n) : n;
}
function A3(n, r) {
  if (typeof n == "number") return ie(n);
  if (typeof n == "string") {
    const i = n.replace("-", "");
    if (!(i in r.spacing)) return ie(n);
    const o = `--mantine-spacing-${i}`;
    return n.startsWith("-") ? `calc(var(${o}) * -1)` : `var(${o})`;
  }
  return n;
}
const bd = {
  color: Cm,
  textColor: v3,
  fontSize: E3,
  spacing: A3,
  radius: R3,
  identity: C3,
  size: _3,
  lineHeight: w3,
  fontFamily: S3,
  border: b3,
};
function kv(n) {
  return n.replace("(min-width: ", "").replace("em)", "");
}
function M3({ media: n, ...r }) {
  const o = Object.keys(n)
    .sort((s, c) => Number(kv(s)) - Number(kv(c)))
    .map((s) => ({ query: s, styles: n[s] }));
  return { ...r, media: o };
}
function N3(n) {
  if (typeof n != "object" || n === null) return !1;
  const r = Object.keys(n);
  return !(r.length === 1 && r[0] === "base");
}
function z3(n) {
  return typeof n == "object" && n !== null
    ? "base" in n
      ? n.base
      : void 0
    : n;
}
function O3(n) {
  return typeof n == "object" && n !== null
    ? On(n).filter((r) => r !== "base")
    : [];
}
function j3(n, r) {
  return typeof n == "object" && n !== null && r in n ? n[r] : n;
}
function D3({ styleProps: n, data: r, theme: i }) {
  return M3(
    On(n).reduce(
      (o, s) => {
        if (s === "hiddenFrom" || s === "visibleFrom" || s === "sx") return o;
        const c = r[s],
          d = Array.isArray(c.property) ? c.property : [c.property],
          m = z3(n[s]);
        if (!N3(n[s]))
          return (
            d.forEach((p) => {
              o.inlineStyles[p] = bd[c.type](m, i);
            }),
            o
          );
        o.hasResponsiveStyles = !0;
        const h = O3(n[s]);
        return (
          d.forEach((p) => {
            (m != null && (o.styles[p] = bd[c.type](m, i)),
              h.forEach((y) => {
                const g = `(min-width: ${i.breakpoints[y]})`;
                o.media[g] = { ...o.media[g], [p]: bd[c.type](j3(n[s], y), i) };
              }));
          }),
          o
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} },
    ),
  );
}
function U3() {
  return `__m__-${T.useId().replace(/[:«»]/g, "")}`;
}
function _b(n) {
  return n.startsWith("data-") ? n : `data-${n}`;
}
function L3(n) {
  return Object.keys(n).reduce((r, i) => {
    const o = n[i];
    return (
      o === void 0 || o === "" || o === !1 || o === null || (r[_b(i)] = n[i]),
      r
    );
  }, {});
}
function Ab(n) {
  return n
    ? typeof n == "string"
      ? { [_b(n)]: !0 }
      : Array.isArray(n)
        ? [...n].reduce((r, i) => ({ ...r, ...Ab(i) }), {})
        : L3(n)
    : null;
}
function kd(n, r) {
  return Array.isArray(n)
    ? [...n].reduce((i, o) => ({ ...i, ...kd(o, r) }), {})
    : typeof n == "function"
      ? n(r)
      : (n ?? {});
}
function B3({ theme: n, style: r, vars: i, styleProps: o }) {
  const s = kd(r, n),
    c = kd(i, n);
  return { ...s, ...c, ...o };
}
const Mb = T.forwardRef(
  (
    {
      component: n,
      style: r,
      __vars: i,
      className: o,
      variant: s,
      mod: c,
      size: d,
      hiddenFrom: m,
      visibleFrom: h,
      lightHidden: p,
      darkHidden: y,
      renderRoot: g,
      __size: b,
      ...S
    },
    C,
  ) => {
    const x = ia(),
      E = n || "div",
      { styleProps: _, rest: N } = pu(S),
      z = OT()?.()?.(_.sx),
      M = U3(),
      j = D3({ styleProps: _, theme: x, data: g3 }),
      O = {
        ref: C,
        style: B3({ theme: x, style: r, vars: i, styleProps: j.inlineStyles }),
        className: Lt(o, z, {
          [M]: j.hasResponsiveStyles,
          "mantine-light-hidden": p,
          "mantine-dark-hidden": y,
          [`mantine-hidden-from-${m}`]: m,
          [`mantine-visible-from-${h}`]: h,
        }),
        "data-variant": s,
        "data-size": cb(d) ? void 0 : d || void 0,
        size: b,
        ...Ab(c),
        ...N,
      };
    return R.jsxs(R.Fragment, {
      children: [
        j.hasResponsiveStyles &&
          R.jsx(y3, { selector: `.${M}`, styles: j.styles, media: j.media }),
        typeof g == "function" ? g(O) : R.jsx(E, { ...O }),
      ],
    });
  },
);
Mb.displayName = "@mantine/core/Box";
const ye = Mb;
function Nb(n) {
  return n;
}
function Me(n) {
  const r = T.forwardRef(n);
  return (
    (r.extend = Nb),
    (r.withProps = (i) => {
      const o = T.forwardRef((s, c) => R.jsx(r, { ...i, ...s, ref: c }));
      return (
        (o.extend = r.extend),
        (o.displayName = `WithProps(${r.displayName})`),
        o
      );
    }),
    r
  );
}
function It(n) {
  const r = T.forwardRef(n);
  return (
    (r.withProps = (i) => {
      const o = T.forwardRef((s, c) => R.jsx(r, { ...i, ...s, ref: c }));
      return (
        (o.extend = r.extend),
        (o.displayName = `WithProps(${r.displayName})`),
        o
      );
    }),
    (r.extend = Nb),
    r
  );
}
const H3 = T.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function zb() {
  return T.useContext(H3);
}
function Ob(n) {
  const r = T.useRef(void 0),
    i = T.useCallback((o) => {
      const s = n.map((c) => {
        if (c != null) {
          if (typeof c == "function") {
            const d = c,
              m = d(o);
            return typeof m == "function"
              ? m
              : () => {
                  d(null);
                };
          }
          return (
            (c.current = o),
            () => {
              c.current = null;
            }
          );
        }
      });
      return () => {
        s.forEach((c) => c?.());
      };
    }, n);
  return T.useMemo(
    () =>
      n.every((o) => o == null)
        ? null
        : (o) => {
            (r.current && (r.current(), (r.current = void 0)),
              o != null && (r.current = i(o)));
          },
    n,
  );
}
const [$3, sn] = to("ScrollArea.Root component was not found in tree");
function pl(n, r) {
  const i = ur(r);
  ao(() => {
    let o = 0;
    if (n) {
      const s = new ResizeObserver(() => {
        (cancelAnimationFrame(o), (o = window.requestAnimationFrame(i)));
      });
      return (
        s.observe(n),
        () => {
          (window.cancelAnimationFrame(o), s.unobserve(n));
        }
      );
    }
  }, [n, i]);
}
const q3 = T.forwardRef((n, r) => {
    const { style: i, ...o } = n,
      s = sn(),
      [c, d] = T.useState(0),
      [m, h] = T.useState(0),
      p = !!(c && m);
    return (
      pl(s.scrollbarX, () => {
        const y = s.scrollbarX?.offsetHeight || 0;
        (s.onCornerHeightChange(y), h(y));
      }),
      pl(s.scrollbarY, () => {
        const y = s.scrollbarY?.offsetWidth || 0;
        (s.onCornerWidthChange(y), d(y));
      }),
      p
        ? R.jsx("div", { ...o, ref: r, style: { ...i, width: c, height: m } })
        : null
    );
  }),
  Q3 = T.forwardRef((n, r) => {
    const i = sn(),
      o = !!(i.scrollbarX && i.scrollbarY);
    return i.type !== "scroll" && o ? R.jsx(q3, { ...n, ref: r }) : null;
  }),
  k3 = { scrollHideDelay: 1e3, type: "hover" },
  jb = T.forwardRef((n, r) => {
    const {
        type: i,
        scrollHideDelay: o,
        scrollbars: s,
        getStyles: c,
        ...d
      } = be("ScrollAreaRoot", k3, n),
      [m, h] = T.useState(null),
      [p, y] = T.useState(null),
      [g, b] = T.useState(null),
      [S, C] = T.useState(null),
      [x, E] = T.useState(null),
      [_, N] = T.useState(0),
      [w, z] = T.useState(0),
      [M, j] = T.useState(!1),
      [O, B] = T.useState(!1),
      D = gr(r, (H) => h(H));
    return R.jsx($3, {
      value: {
        type: i,
        scrollHideDelay: o,
        scrollArea: m,
        viewport: p,
        onViewportChange: y,
        content: g,
        onContentChange: b,
        scrollbarX: S,
        onScrollbarXChange: C,
        scrollbarXEnabled: M,
        onScrollbarXEnabledChange: j,
        scrollbarY: x,
        onScrollbarYChange: E,
        scrollbarYEnabled: O,
        onScrollbarYEnabledChange: B,
        onCornerWidthChange: N,
        onCornerHeightChange: z,
        getStyles: c,
      },
      children: R.jsx(ye, {
        ...d,
        ref: D,
        __vars: {
          "--sa-corner-width": s !== "xy" ? "0px" : `${_}px`,
          "--sa-corner-height": s !== "xy" ? "0px" : `${w}px`,
        },
      }),
    });
  });
jb.displayName = "@mantine/core/ScrollAreaRoot";
function Db(n, r) {
  const i = n / r;
  return Number.isNaN(i) ? 0 : i;
}
function yu(n) {
  const r = Db(n.viewport, n.content),
    i = n.scrollbar.paddingStart + n.scrollbar.paddingEnd,
    o = (n.scrollbar.size - i) * r;
  return Math.max(o, 18);
}
function Ub(n, r) {
  return (i) => {
    if (n[0] === n[1] || r[0] === r[1]) return r[0];
    const o = (r[1] - r[0]) / (n[1] - n[0]);
    return r[0] + o * (i - n[0]);
  };
}
function Y3(n, [r, i]) {
  return Math.min(i, Math.max(r, n));
}
function Yv(n, r, i = "ltr") {
  const o = yu(r),
    s = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
    c = r.scrollbar.size - s,
    d = r.content - r.viewport,
    m = c - o,
    h = i === "ltr" ? [0, d] : [d * -1, 0],
    p = Y3(n, h);
  return Ub([0, d], [0, m])(p);
}
function V3(n, r, i, o = "ltr") {
  const s = yu(i),
    c = s / 2,
    d = r || c,
    m = s - d,
    h = i.scrollbar.paddingStart + d,
    p = i.scrollbar.size - i.scrollbar.paddingEnd - m,
    y = i.content - i.viewport,
    g = o === "ltr" ? [0, y] : [y * -1, 0];
  return Ub([h, p], g)(n);
}
function Lb(n, r) {
  return n > 0 && n < r;
}
function Ws(n) {
  return n ? parseInt(n, 10) : 0;
}
function fr(n, r, { checkForDefaultPrevented: i = !0 } = {}) {
  return (o) => {
    (n?.(o), (i === !1 || !o.defaultPrevented) && r?.(o));
  };
}
const [G3, Bb] = to("ScrollAreaScrollbar was not found in tree"),
  Hb = T.forwardRef((n, r) => {
    const {
        sizes: i,
        hasThumb: o,
        onThumbChange: s,
        onThumbPointerUp: c,
        onThumbPointerDown: d,
        onThumbPositionChange: m,
        onDragScroll: h,
        onWheelScroll: p,
        onResize: y,
        ...g
      } = n,
      b = sn(),
      [S, C] = T.useState(null),
      x = gr(r, (B) => C(B)),
      E = T.useRef(null),
      _ = T.useRef(""),
      { viewport: N } = b,
      w = i.content - i.viewport,
      z = ur(p),
      M = ur(m),
      j = mu(y, 10),
      O = (B) => {
        if (E.current) {
          const D = B.clientX - E.current.left,
            H = B.clientY - E.current.top;
          h({ x: D, y: H });
        }
      };
    return (
      T.useEffect(() => {
        const B = (D) => {
          const H = D.target;
          S?.contains(H) && z(D, w);
        };
        return (
          document.addEventListener("wheel", B, { passive: !1 }),
          () => document.removeEventListener("wheel", B, { passive: !1 })
        );
      }, [N, S, w, z]),
      T.useEffect(M, [i, M]),
      pl(S, j),
      pl(b.content, j),
      R.jsx(G3, {
        value: {
          scrollbar: S,
          hasThumb: o,
          onThumbChange: ur(s),
          onThumbPointerUp: ur(c),
          onThumbPositionChange: M,
          onThumbPointerDown: ur(d),
        },
        children: R.jsx("div", {
          ...g,
          ref: x,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...g.style },
          onPointerDown: fr(n.onPointerDown, (B) => {
            (B.preventDefault(),
              B.button === 0 &&
                (B.target.setPointerCapture(B.pointerId),
                (E.current = S.getBoundingClientRect()),
                (_.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                O(B)));
          }),
          onPointerMove: fr(n.onPointerMove, O),
          onPointerUp: fr(n.onPointerUp, (B) => {
            const D = B.target;
            D.hasPointerCapture(B.pointerId) &&
              (B.preventDefault(), D.releasePointerCapture(B.pointerId));
          }),
          onLostPointerCapture: () => {
            ((document.body.style.webkitUserSelect = _.current),
              (E.current = null));
          },
        }),
      })
    );
  }),
  $b = T.forwardRef((n, r) => {
    const { sizes: i, onSizesChange: o, style: s, ...c } = n,
      d = sn(),
      [m, h] = T.useState(),
      p = T.useRef(null),
      y = gr(r, p, d.onScrollbarXChange);
    return (
      T.useEffect(() => {
        p.current && h(getComputedStyle(p.current));
      }, [p]),
      R.jsx(Hb, {
        "data-orientation": "horizontal",
        ...c,
        ref: y,
        sizes: i,
        style: { ...s, "--sa-thumb-width": `${yu(i)}px` },
        onThumbPointerDown: (g) => n.onThumbPointerDown(g.x),
        onDragScroll: (g) => n.onDragScroll(g.x),
        onWheelScroll: (g, b) => {
          if (d.viewport) {
            const S = d.viewport.scrollLeft + g.deltaX;
            (n.onWheelScroll(S), Lb(S, b) && g.preventDefault());
          }
        },
        onResize: () => {
          p.current &&
            d.viewport &&
            m &&
            o({
              content: d.viewport.scrollWidth,
              viewport: d.viewport.offsetWidth,
              scrollbar: {
                size: p.current.clientWidth,
                paddingStart: Ws(m.paddingLeft),
                paddingEnd: Ws(m.paddingRight),
              },
            });
        },
      })
    );
  });
$b.displayName = "@mantine/core/ScrollAreaScrollbarX";
const qb = T.forwardRef((n, r) => {
  const { sizes: i, onSizesChange: o, style: s, ...c } = n,
    d = sn(),
    [m, h] = T.useState(),
    p = T.useRef(null),
    y = gr(r, p, d.onScrollbarYChange);
  return (
    T.useEffect(() => {
      p.current && h(window.getComputedStyle(p.current));
    }, []),
    R.jsx(Hb, {
      ...c,
      "data-orientation": "vertical",
      ref: y,
      sizes: i,
      style: { "--sa-thumb-height": `${yu(i)}px`, ...s },
      onThumbPointerDown: (g) => n.onThumbPointerDown(g.y),
      onDragScroll: (g) => n.onDragScroll(g.y),
      onWheelScroll: (g, b) => {
        if (d.viewport) {
          const S = d.viewport.scrollTop + g.deltaY;
          (n.onWheelScroll(S), Lb(S, b) && g.preventDefault());
        }
      },
      onResize: () => {
        p.current &&
          d.viewport &&
          m &&
          o({
            content: d.viewport.scrollHeight,
            viewport: d.viewport.offsetHeight,
            scrollbar: {
              size: p.current.clientHeight,
              paddingStart: Ws(m.paddingTop),
              paddingEnd: Ws(m.paddingBottom),
            },
          });
      },
    })
  );
});
qb.displayName = "@mantine/core/ScrollAreaScrollbarY";
const gu = T.forwardRef((n, r) => {
  const { orientation: i = "vertical", ...o } = n,
    { dir: s } = zb(),
    c = sn(),
    d = T.useRef(null),
    m = T.useRef(0),
    [h, p] = T.useState({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
    }),
    y = Db(h.viewport, h.content),
    g = {
      ...o,
      sizes: h,
      onSizesChange: p,
      hasThumb: y > 0 && y < 1,
      onThumbChange: (S) => {
        d.current = S;
      },
      onThumbPointerUp: () => {
        m.current = 0;
      },
      onThumbPointerDown: (S) => {
        m.current = S;
      },
    },
    b = (S, C) => V3(S, m.current, h, C);
  return i === "horizontal"
    ? R.jsx($b, {
        ...g,
        ref: r,
        onThumbPositionChange: () => {
          if (c.viewport && d.current) {
            const S = c.viewport.scrollLeft,
              C = Yv(S, h, s);
            d.current.style.transform = `translate3d(${C}px, 0, 0)`;
          }
        },
        onWheelScroll: (S) => {
          c.viewport && (c.viewport.scrollLeft = S);
        },
        onDragScroll: (S) => {
          c.viewport && (c.viewport.scrollLeft = b(S, s));
        },
      })
    : i === "vertical"
      ? R.jsx(qb, {
          ...g,
          ref: r,
          onThumbPositionChange: () => {
            if (c.viewport && d.current) {
              const S = c.viewport.scrollTop,
                C = Yv(S, h);
              (h.scrollbar.size === 0
                ? d.current.style.setProperty("--thumb-opacity", "0")
                : d.current.style.setProperty("--thumb-opacity", "1"),
                (d.current.style.transform = `translate3d(0, ${C}px, 0)`));
            }
          },
          onWheelScroll: (S) => {
            c.viewport && (c.viewport.scrollTop = S);
          },
          onDragScroll: (S) => {
            c.viewport && (c.viewport.scrollTop = b(S));
          },
        })
      : null;
});
gu.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
const Tm = T.forwardRef((n, r) => {
  const i = sn(),
    { forceMount: o, ...s } = n,
    [c, d] = T.useState(!1),
    m = n.orientation === "horizontal",
    h = mu(() => {
      if (i.viewport) {
        const p = i.viewport.offsetWidth < i.viewport.scrollWidth,
          y = i.viewport.offsetHeight < i.viewport.scrollHeight;
        d(m ? p : y);
      }
    }, 10);
  return (
    pl(i.viewport, h),
    pl(i.content, h),
    o || c
      ? R.jsx(gu, { "data-state": c ? "visible" : "hidden", ...s, ref: r })
      : null
  );
});
Tm.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
const Qb = T.forwardRef((n, r) => {
  const { forceMount: i, ...o } = n,
    s = sn(),
    [c, d] = T.useState(!1);
  return (
    T.useEffect(() => {
      const { scrollArea: m } = s;
      let h = 0;
      if (m) {
        const p = () => {
            (window.clearTimeout(h), d(!0));
          },
          y = () => {
            h = window.setTimeout(() => d(!1), s.scrollHideDelay);
          };
        return (
          m.addEventListener("pointerenter", p),
          m.addEventListener("pointerleave", y),
          () => {
            (window.clearTimeout(h),
              m.removeEventListener("pointerenter", p),
              m.removeEventListener("pointerleave", y));
          }
        );
      }
    }, [s.scrollArea, s.scrollHideDelay]),
    i || c
      ? R.jsx(Tm, { "data-state": c ? "visible" : "hidden", ...o, ref: r })
      : null
  );
});
Qb.displayName = "@mantine/core/ScrollAreaScrollbarHover";
const X3 = T.forwardRef((n, r) => {
    const { forceMount: i, ...o } = n,
      s = sn(),
      c = n.orientation === "horizontal",
      [d, m] = T.useState("hidden"),
      h = mu(() => m("idle"), 100);
    return (
      T.useEffect(() => {
        if (d === "idle") {
          const p = window.setTimeout(() => m("hidden"), s.scrollHideDelay);
          return () => window.clearTimeout(p);
        }
      }, [d, s.scrollHideDelay]),
      T.useEffect(() => {
        const { viewport: p } = s,
          y = c ? "scrollLeft" : "scrollTop";
        if (p) {
          let g = p[y];
          const b = () => {
            const S = p[y];
            (g !== S && (m("scrolling"), h()), (g = S));
          };
          return (
            p.addEventListener("scroll", b),
            () => p.removeEventListener("scroll", b)
          );
        }
      }, [s.viewport, c, h]),
      i || d !== "hidden"
        ? R.jsx(gu, {
            "data-state": d === "hidden" ? "hidden" : "visible",
            ...o,
            ref: r,
            onPointerEnter: fr(n.onPointerEnter, () => m("interacting")),
            onPointerLeave: fr(n.onPointerLeave, () => m("idle")),
          })
        : null
    );
  }),
  Yd = T.forwardRef((n, r) => {
    const { forceMount: i, ...o } = n,
      s = sn(),
      { onScrollbarXEnabledChange: c, onScrollbarYEnabledChange: d } = s,
      m = n.orientation === "horizontal";
    return (
      T.useEffect(
        () => (
          m ? c(!0) : d(!0),
          () => {
            m ? c(!1) : d(!1);
          }
        ),
        [m, c, d],
      ),
      s.type === "hover"
        ? R.jsx(Qb, { ...o, ref: r, forceMount: i })
        : s.type === "scroll"
          ? R.jsx(X3, { ...o, ref: r, forceMount: i })
          : s.type === "auto"
            ? R.jsx(Tm, { ...o, ref: r, forceMount: i })
            : s.type === "always"
              ? R.jsx(gu, { ...o, ref: r })
              : null
    );
  });
Yd.displayName = "@mantine/core/ScrollAreaScrollbar";
function Z3(n, r = () => {}) {
  let i = { left: n.scrollLeft, top: n.scrollTop },
    o = 0;
  return (
    (function s() {
      const c = { left: n.scrollLeft, top: n.scrollTop },
        d = i.left !== c.left,
        m = i.top !== c.top;
      ((d || m) && r(), (i = c), (o = window.requestAnimationFrame(s)));
    })(),
    () => window.cancelAnimationFrame(o)
  );
}
const kb = T.forwardRef((n, r) => {
  const { style: i, ...o } = n,
    s = sn(),
    c = Bb(),
    { onThumbPositionChange: d } = c,
    m = gr(r, (y) => c.onThumbChange(y)),
    h = T.useRef(void 0),
    p = mu(() => {
      h.current && (h.current(), (h.current = void 0));
    }, 100);
  return (
    T.useEffect(() => {
      const { viewport: y } = s;
      if (y) {
        const g = () => {
          if ((p(), !h.current)) {
            const b = Z3(y, d);
            ((h.current = b), d());
          }
        };
        return (
          d(),
          y.addEventListener("scroll", g),
          () => y.removeEventListener("scroll", g)
        );
      }
    }, [s.viewport, p, d]),
    R.jsx("div", {
      "data-state": c.hasThumb ? "visible" : "hidden",
      ...o,
      ref: m,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...i,
      },
      onPointerDownCapture: fr(n.onPointerDownCapture, (y) => {
        const b = y.target.getBoundingClientRect(),
          S = y.clientX - b.left,
          C = y.clientY - b.top;
        c.onThumbPointerDown({ x: S, y: C });
      }),
      onPointerUp: fr(n.onPointerUp, c.onThumbPointerUp),
    })
  );
});
kb.displayName = "@mantine/core/ScrollAreaThumb";
const Vd = T.forwardRef((n, r) => {
  const { forceMount: i, ...o } = n,
    s = Bb();
  return i || s.hasThumb ? R.jsx(kb, { ref: r, ...o }) : null;
});
Vd.displayName = "@mantine/core/ScrollAreaThumb";
const Yb = T.forwardRef(({ children: n, style: r, ...i }, o) => {
  const s = sn(),
    c = gr(o, s.onViewportChange);
  return R.jsx(ye, {
    ...i,
    ref: c,
    style: {
      overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
      ...r,
    },
    children: R.jsx("div", {
      ...s.getStyles("content"),
      ref: s.onContentChange,
      children: n,
    }),
  });
});
Yb.displayName = "@mantine/core/ScrollAreaViewport";
var wm = {
  root: "m_d57069b5",
  content: "m_b1336c6",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const Vb = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  P3 = (n, { scrollbarSize: r, overscrollBehavior: i }) => ({
    root: {
      "--scrollarea-scrollbar-size": ie(r),
      "--scrollarea-over-scroll-behavior": i,
    },
  }),
  vr = Me((n, r) => {
    const i = be("ScrollArea", Vb, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        scrollbarSize: h,
        vars: p,
        type: y,
        scrollHideDelay: g,
        viewportProps: b,
        viewportRef: S,
        onScrollPositionChange: C,
        children: x,
        offsetScrollbars: E,
        scrollbars: _,
        onBottomReached: N,
        onTopReached: w,
        overscrollBehavior: z,
        attributes: M,
        ...j
      } = i,
      [O, B] = T.useState(!1),
      [D, H] = T.useState(!1),
      [L, q] = T.useState(!1),
      Y = De({
        name: "ScrollArea",
        props: i,
        classes: wm,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: M,
        vars: p,
        varsResolver: P3,
      }),
      G = T.useRef(null),
      ne = Ob([S, G]);
    return (
      T.useEffect(() => {
        if (!G.current || E !== "present") return;
        const Q = G.current,
          K = new ResizeObserver(() => {
            const {
              scrollHeight: F,
              clientHeight: W,
              scrollWidth: se,
              clientWidth: U,
            } = Q;
            (H(F > W), q(se > U));
          });
        return (K.observe(Q), () => K.disconnect());
      }, [G, E]),
      R.jsxs(jb, {
        getStyles: Y,
        type: y === "never" ? "always" : y,
        scrollHideDelay: g,
        ref: r,
        scrollbars: _,
        ...Y("root"),
        ...j,
        children: [
          R.jsx(Yb, {
            ...b,
            ...Y("viewport", { style: b?.style }),
            ref: ne,
            "data-offset-scrollbars": E === !0 ? "xy" : E || void 0,
            "data-scrollbars": _ || void 0,
            "data-horizontal-hidden": E === "present" && !L ? "true" : void 0,
            "data-vertical-hidden": E === "present" && !D ? "true" : void 0,
            onScroll: (Q) => {
              (b?.onScroll?.(Q),
                C?.({
                  x: Q.currentTarget.scrollLeft,
                  y: Q.currentTarget.scrollTop,
                }));
              const {
                scrollTop: K,
                scrollHeight: F,
                clientHeight: W,
              } = Q.currentTarget;
              (K - (F - W) >= -0.6 && N?.(), K === 0 && w?.());
            },
            children: x,
          }),
          (_ === "xy" || _ === "x") &&
            R.jsx(Yd, {
              ...Y("scrollbar"),
              orientation: "horizontal",
              "data-hidden":
                y === "never" || (E === "present" && !L) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => B(!0),
              onMouseLeave: () => B(!1),
              children: R.jsx(Vd, { ...Y("thumb") }),
            }),
          (_ === "xy" || _ === "y") &&
            R.jsx(Yd, {
              ...Y("scrollbar"),
              orientation: "vertical",
              "data-hidden":
                y === "never" || (E === "present" && !D) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => B(!0),
              onMouseLeave: () => B(!1),
              children: R.jsx(Vd, { ...Y("thumb") }),
            }),
          R.jsx(Q3, {
            ...Y("corner"),
            "data-hovered": O || void 0,
            "data-hidden": y === "never" || void 0,
          }),
        ],
      })
    );
  });
vr.displayName = "@mantine/core/ScrollArea";
const Rm = Me((n, r) => {
  const {
      children: i,
      classNames: o,
      styles: s,
      scrollbarSize: c,
      scrollHideDelay: d,
      type: m,
      dir: h,
      offsetScrollbars: p,
      viewportRef: y,
      onScrollPositionChange: g,
      unstyled: b,
      variant: S,
      viewportProps: C,
      scrollbars: x,
      style: E,
      vars: _,
      onBottomReached: N,
      onTopReached: w,
      onOverflowChange: z,
      ...M
    } = be("ScrollAreaAutosize", Vb, n),
    j = T.useRef(null),
    O = Ob([y, j]),
    [B, D] = T.useState(!1),
    H = T.useRef(!1);
  return (
    T.useEffect(() => {
      if (!z) return;
      const L = j.current;
      if (!L) return;
      const q = () => {
        const G = L.scrollHeight > L.clientHeight;
        G !== B &&
          (H.current ? z?.(G) : ((H.current = !0), G && z?.(!0)), D(G));
      };
      q();
      const Y = new ResizeObserver(q);
      return (Y.observe(L), () => Y.disconnect());
    }, [z, B]),
    R.jsx(ye, {
      ...M,
      ref: r,
      style: [{ display: "flex", overflow: "hidden" }, E],
      children: R.jsx(ye, {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
          ...(x === "y" && { minWidth: 0 }),
          ...(x === "x" && { minHeight: 0 }),
          ...(x === "xy" && { minWidth: 0, minHeight: 0 }),
          ...(x === !1 && { minWidth: 0, minHeight: 0 }),
        },
        children: R.jsx(vr, {
          classNames: o,
          styles: s,
          scrollHideDelay: d,
          scrollbarSize: c,
          type: m,
          dir: h,
          offsetScrollbars: p,
          viewportRef: O,
          onScrollPositionChange: g,
          unstyled: b,
          variant: S,
          viewportProps: C,
          vars: _,
          scrollbars: x,
          onBottomReached: N,
          onTopReached: w,
          "data-autosize": "true",
          children: i,
        }),
      }),
    })
  );
});
vr.classes = wm;
Rm.displayName = "@mantine/core/ScrollAreaAutosize";
Rm.classes = wm;
vr.Autosize = Rm;
var Gb = { root: "m_87cf2631" };
const I3 = { __staticSelector: "UnstyledButton" },
  Cl = It((n, r) => {
    const i = be("UnstyledButton", I3, n),
      {
        className: o,
        component: s = "button",
        __staticSelector: c,
        unstyled: d,
        classNames: m,
        styles: h,
        style: p,
        attributes: y,
        ...g
      } = i,
      b = De({
        name: c,
        props: i,
        classes: Gb,
        className: o,
        style: p,
        classNames: m,
        styles: h,
        unstyled: d,
        attributes: y,
      });
    return R.jsx(ye, {
      ...b("root", { focusable: !0 }),
      component: s,
      ref: r,
      type: s === "button" ? "button" : void 0,
      ...g,
    });
  });
Cl.classes = Gb;
Cl.displayName = "@mantine/core/UnstyledButton";
var Xb = { root: "m_515a97f8" };
const _m = Me((n, r) => {
  const i = be("VisuallyHidden", null, n),
    {
      classNames: o,
      className: s,
      style: c,
      styles: d,
      unstyled: m,
      vars: h,
      attributes: p,
      ...y
    } = i,
    g = De({
      name: "VisuallyHidden",
      classes: Xb,
      props: i,
      className: s,
      style: c,
      classNames: o,
      styles: d,
      unstyled: m,
      attributes: p,
    });
  return R.jsx(ye, { component: "span", ref: r, ...g("root"), ...y });
});
_m.classes = Xb;
_m.displayName = "@mantine/core/VisuallyHidden";
var Zb = { root: "m_1b7284a3" };
const K3 = (n, { radius: r, shadow: i }) => ({
    root: {
      "--paper-radius": r === void 0 ? void 0 : $t(r),
      "--paper-shadow": fb(i),
    },
  }),
  br = It((n, r) => {
    const i = be("Paper", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        withBorder: h,
        vars: p,
        radius: y,
        shadow: g,
        variant: b,
        mod: S,
        attributes: C,
        ...x
      } = i,
      E = De({
        name: "Paper",
        props: i,
        classes: Zb,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: C,
        vars: p,
        varsResolver: K3,
      });
    return R.jsx(ye, {
      ref: r,
      mod: [{ "data-with-border": h }, S],
      ...E("root"),
      variant: b,
      ...x,
    });
  });
br.classes = Zb;
br.displayName = "@mantine/core/Paper";
var Pb = { root: "m_9814e45f" };
const F3 = { zIndex: El("modal") },
  J3 = (
    n,
    {
      gradient: r,
      color: i,
      backgroundOpacity: o,
      blur: s,
      radius: c,
      zIndex: d,
    },
  ) => ({
    root: {
      "--overlay-bg":
        r ||
        ((i !== void 0 || o !== void 0) && Nn(i || "#000", o ?? 0.6)) ||
        void 0,
      "--overlay-filter": s ? `blur(${ie(s)})` : void 0,
      "--overlay-radius": c === void 0 ? void 0 : $t(c),
      "--overlay-z-index": d?.toString(),
    },
  }),
  Am = It((n, r) => {
    const i = be("Overlay", F3, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        fixed: p,
        center: y,
        children: g,
        radius: b,
        zIndex: S,
        gradient: C,
        blur: x,
        color: E,
        backgroundOpacity: _,
        mod: N,
        attributes: w,
        ...z
      } = i,
      M = De({
        name: "Overlay",
        props: i,
        classes: Pb,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: w,
        vars: h,
        varsResolver: J3,
      });
    return R.jsx(ye, {
      ref: r,
      ...M("root"),
      mod: [{ center: y, fixed: p }, N],
      ...z,
      children: g,
    });
  });
Am.classes = Pb;
Am.displayName = "@mantine/core/Overlay";
function Sd(n) {
  const r = document.createElement("div");
  return (
    r.setAttribute("data-portal", "true"),
    typeof n.className == "string" &&
      r.classList.add(...n.className.split(" ").filter(Boolean)),
    typeof n.style == "object" && Object.assign(r.style, n.style),
    typeof n.id == "string" && r.setAttribute("id", n.id),
    r
  );
}
function W3({ target: n, reuseTargetNode: r, ...i }) {
  if (n) return typeof n == "string" ? document.querySelector(n) || Sd(i) : n;
  if (r) {
    const o = document.querySelector("[data-mantine-shared-portal-node]");
    if (o) return o;
    const s = Sd(i);
    return (
      s.setAttribute("data-mantine-shared-portal-node", "true"),
      document.body.appendChild(s),
      s
    );
  }
  return Sd(i);
}
const ew = { reuseTargetNode: !0 },
  Ib = Me((n, r) => {
    const {
        children: i,
        target: o,
        reuseTargetNode: s,
        ...c
      } = be("Portal", ew, n),
      [d, m] = T.useState(!1),
      h = T.useRef(null);
    return (
      ao(
        () => (
          m(!0),
          (h.current = W3({ target: o, reuseTargetNode: s, ...c })),
          $d(r, h.current),
          !o && !s && h.current && document.body.appendChild(h.current),
          () => {
            !o && !s && h.current && document.body.removeChild(h.current);
          }
        ),
        [o],
      ),
      !d || !h.current
        ? null
        : K0.createPortal(R.jsx(R.Fragment, { children: i }), h.current)
    );
  });
Ib.displayName = "@mantine/core/Portal";
const Kb = Me(({ withinPortal: n = !0, children: r, ...i }, o) =>
  xb() === "test" || !n
    ? R.jsx(R.Fragment, { children: r })
    : R.jsx(Ib, { ref: o, ...i, children: r }),
);
Kb.displayName = "@mantine/core/OptionalPortal";
const Ai = (n) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${n === "bottom" ? 10 : -10}px)`,
    },
    transitionProperty: "transform, opacity",
  }),
  Hs = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-30px)" },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...Ai("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...Ai("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...Ai("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...Ai("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Ai("top"), common: { transformOrigin: "top right" } },
  },
  Vv = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function tw({ transition: n, state: r, duration: i, timingFunction: o }) {
  const s = {
    WebkitBackfaceVisibility: "hidden",
    transitionDuration: `${i}ms`,
    transitionTimingFunction: o,
  };
  return typeof n == "string"
    ? n in Hs
      ? {
          transitionProperty: Hs[n].transitionProperty,
          ...s,
          ...Hs[n].common,
          ...Hs[n][Vv[r]],
        }
      : {}
    : {
        transitionProperty: n.transitionProperty,
        ...s,
        ...n.common,
        ...n[Vv[r]],
      };
}
function nw({
  duration: n,
  exitDuration: r,
  timingFunction: i,
  mounted: o,
  onEnter: s,
  onExit: c,
  onEntered: d,
  onExited: m,
  enterDelay: h,
  exitDelay: p,
}) {
  const y = ia(),
    g = vb(),
    b = y.respectReducedMotion ? g : !1,
    [S, C] = T.useState(b ? 0 : n),
    [x, E] = T.useState(o ? "entered" : "exited"),
    _ = T.useRef(-1),
    N = T.useRef(-1),
    w = T.useRef(-1);
  function z() {
    (window.clearTimeout(_.current),
      window.clearTimeout(N.current),
      cancelAnimationFrame(w.current));
  }
  const M = (O) => {
      z();
      const B = O ? s : c,
        D = O ? d : m,
        H = b ? 0 : O ? n : r;
      (C(H),
        H === 0
          ? (typeof B == "function" && B(),
            typeof D == "function" && D(),
            E(O ? "entered" : "exited"))
          : (w.current = requestAnimationFrame(() => {
              (KE.flushSync(() => {
                E(O ? "pre-entering" : "pre-exiting");
              }),
                (w.current = requestAnimationFrame(() => {
                  (typeof B == "function" && B(),
                    E(O ? "entering" : "exiting"),
                    (_.current = window.setTimeout(() => {
                      (typeof D == "function" && D(),
                        E(O ? "entered" : "exited"));
                    }, H)));
                })));
            })));
    },
    j = (O) => {
      if ((z(), typeof (O ? h : p) != "number")) {
        M(O);
        return;
      }
      N.current = window.setTimeout(
        () => {
          M(O);
        },
        O ? h : p,
      );
    };
  return (
    mb(() => {
      j(o);
    }, [o]),
    T.useEffect(
      () => () => {
        z();
      },
      [],
    ),
    {
      transitionDuration: S,
      transitionStatus: x,
      transitionTimingFunction: i || "ease",
    }
  );
}
function io({
  keepMounted: n,
  transition: r = "fade",
  duration: i = 250,
  exitDuration: o = i,
  mounted: s,
  children: c,
  timingFunction: d = "ease",
  onExit: m,
  onEntered: h,
  onEnter: p,
  onExited: y,
  enterDelay: g,
  exitDelay: b,
}) {
  const S = xb(),
    {
      transitionDuration: C,
      transitionStatus: x,
      transitionTimingFunction: E,
    } = nw({
      mounted: s,
      exitDuration: o,
      duration: i,
      timingFunction: d,
      onExit: m,
      onEntered: h,
      onEnter: p,
      onExited: y,
      enterDelay: g,
      exitDelay: b,
    });
  return C === 0 || S === "test"
    ? s
      ? R.jsx(R.Fragment, { children: c({}) })
      : n
        ? c({ display: "none" })
        : null
    : x === "exited"
      ? n
        ? c({ display: "none" })
        : null
      : R.jsx(R.Fragment, {
          children: c(
            tw({ transition: r, duration: C, state: x, timingFunction: E }),
          ),
        });
}
io.displayName = "@mantine/core/Transition";
function Mm({ children: n, active: r = !0, refProp: i = "ref", innerRef: o }) {
  const s = ST(r),
    c = gr(s, o);
  return rT(n) ? T.cloneElement(n, { [i]: c }) : n;
}
function Fb(n) {
  return R.jsx(_m, { tabIndex: -1, "data-autofocus": !0, ...n });
}
Mm.displayName = "@mantine/core/FocusTrap";
Fb.displayName = "@mantine/core/FocusTrapInitialFocus";
Mm.InitialFocus = Fb;
var hn = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b",
};
const Jb = T.forwardRef(({ className: n, ...r }, i) =>
  R.jsxs(ye, {
    component: "span",
    className: Lt(hn.barsLoader, n),
    ...r,
    ref: i,
    children: [
      R.jsx("span", { className: hn.bar }),
      R.jsx("span", { className: hn.bar }),
      R.jsx("span", { className: hn.bar }),
    ],
  }),
);
Jb.displayName = "@mantine/core/Bars";
const Wb = T.forwardRef(({ className: n, ...r }, i) =>
  R.jsxs(ye, {
    component: "span",
    className: Lt(hn.dotsLoader, n),
    ...r,
    ref: i,
    children: [
      R.jsx("span", { className: hn.dot }),
      R.jsx("span", { className: hn.dot }),
      R.jsx("span", { className: hn.dot }),
    ],
  }),
);
Wb.displayName = "@mantine/core/Dots";
const e1 = T.forwardRef(({ className: n, ...r }, i) =>
  R.jsx(ye, {
    component: "span",
    className: Lt(hn.ovalLoader, n),
    ...r,
    ref: i,
  }),
);
e1.displayName = "@mantine/core/Oval";
const t1 = { bars: Jb, oval: e1, dots: Wb },
  aw = { loaders: t1, type: "oval" },
  rw = (n, { size: r, color: i }) => ({
    root: {
      "--loader-size": Ze(r, "loader-size"),
      "--loader-color": i ? La(i, n) : void 0,
    },
  }),
  Sr = Me((n, r) => {
    const i = be("Loader", aw, n),
      {
        size: o,
        color: s,
        type: c,
        vars: d,
        className: m,
        style: h,
        classNames: p,
        styles: y,
        unstyled: g,
        loaders: b,
        variant: S,
        children: C,
        attributes: x,
        ...E
      } = i,
      _ = De({
        name: "Loader",
        props: i,
        classes: hn,
        className: m,
        style: h,
        classNames: p,
        styles: y,
        unstyled: g,
        attributes: x,
        vars: d,
        varsResolver: rw,
      });
    return C
      ? R.jsx(ye, { ..._("root"), ref: r, ...E, children: C })
      : R.jsx(ye, {
          ..._("root"),
          ref: r,
          component: b[c],
          variant: S,
          size: o,
          ...E,
        });
  });
Sr.defaultLoaders = t1;
Sr.classes = hn;
Sr.displayName = "@mantine/core/Loader";
var Tl = {
  root: "m_8d3f4000",
  icon: "m_8d3afb97",
  loader: "m_302b9fb1",
  group: "m_1a0f1b21",
  groupSection: "m_437b6484",
};
const Gv = { orientation: "horizontal" },
  lw = (n, { borderWidth: r }) => ({ group: { "--ai-border-width": ie(r) } }),
  Nm = Me((n, r) => {
    const i = be("ActionIconGroup", Gv, n),
      {
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        orientation: h,
        vars: p,
        borderWidth: y,
        variant: g,
        mod: b,
        attributes: S,
        ...C
      } = be("ActionIconGroup", Gv, n),
      x = De({
        name: "ActionIconGroup",
        props: i,
        classes: Tl,
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        attributes: S,
        vars: p,
        varsResolver: lw,
        rootSelector: "group",
      });
    return R.jsx(ye, {
      ...x("group"),
      ref: r,
      variant: g,
      mod: [{ "data-orientation": h }, b],
      role: "group",
      ...C,
    });
  });
Nm.classes = Tl;
Nm.displayName = "@mantine/core/ActionIconGroup";
const iw = (
    n,
    { radius: r, color: i, gradient: o, variant: s, autoContrast: c, size: d },
  ) => {
    const m = n.variantColorResolver({
      color: i || n.primaryColor,
      theme: n,
      gradient: o,
      variant: s || "filled",
      autoContrast: c,
    });
    return {
      groupSection: {
        "--section-height": Ze(d, "section-height"),
        "--section-padding-x": Ze(d, "section-padding-x"),
        "--section-fz": Zt(d),
        "--section-radius": r === void 0 ? void 0 : $t(r),
        "--section-bg": i || s ? m.background : void 0,
        "--section-color": m.color,
        "--section-bd": i || s ? m.border : void 0,
      },
    };
  },
  zm = Me((n, r) => {
    const i = be("ActionIconGroupSection", null, n),
      {
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        vars: h,
        variant: p,
        gradient: y,
        radius: g,
        autoContrast: b,
        attributes: S,
        ...C
      } = i,
      x = De({
        name: "ActionIconGroupSection",
        props: i,
        classes: Tl,
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        attributes: S,
        vars: h,
        varsResolver: iw,
        rootSelector: "groupSection",
      });
    return R.jsx(ye, { ...x("groupSection"), ref: r, variant: p, ...C });
  });
zm.classes = Tl;
zm.displayName = "@mantine/core/ActionIconGroupSection";
const ow = (
    n,
    { size: r, radius: i, variant: o, gradient: s, color: c, autoContrast: d },
  ) => {
    const m = n.variantColorResolver({
      color: c || n.primaryColor,
      theme: n,
      gradient: s,
      variant: o || "filled",
      autoContrast: d,
    });
    return {
      root: {
        "--ai-size": Ze(r, "ai-size"),
        "--ai-radius": i === void 0 ? void 0 : $t(i),
        "--ai-bg": c || o ? m.background : void 0,
        "--ai-hover": c || o ? m.hover : void 0,
        "--ai-hover-color": c || o ? m.hoverColor : void 0,
        "--ai-color": m.color,
        "--ai-bd": c || o ? m.border : void 0,
      },
    };
  },
  jn = It((n, r) => {
    const i = be("ActionIcon", null, n),
      {
        className: o,
        unstyled: s,
        variant: c,
        classNames: d,
        styles: m,
        style: h,
        loading: p,
        loaderProps: y,
        size: g,
        color: b,
        radius: S,
        __staticSelector: C,
        gradient: x,
        vars: E,
        children: _,
        disabled: N,
        "data-disabled": w,
        autoContrast: z,
        mod: M,
        attributes: j,
        ...O
      } = i,
      B = De({
        name: ["ActionIcon", C],
        props: i,
        className: o,
        style: h,
        classes: Tl,
        classNames: d,
        styles: m,
        unstyled: s,
        attributes: j,
        vars: E,
        varsResolver: ow,
      });
    return R.jsxs(Cl, {
      ...B("root", { active: !N && !p && !w }),
      ...O,
      unstyled: s,
      variant: c,
      size: g,
      disabled: N || p,
      ref: r,
      mod: [{ loading: p, disabled: N || w }, M],
      children: [
        typeof p == "boolean" &&
          R.jsx(io, {
            mounted: p,
            transition: "slide-down",
            duration: 150,
            children: (D) =>
              R.jsx(ye, {
                component: "span",
                ...B("loader", { style: D }),
                "aria-hidden": !0,
                children: R.jsx(Sr, {
                  color: "var(--ai-color)",
                  size: "calc(var(--ai-size) * 0.55)",
                  ...y,
                }),
              }),
          }),
        R.jsx(ye, {
          component: "span",
          mod: { loading: p },
          ...B("icon"),
          children: _,
        }),
      ],
    });
  });
jn.classes = Tl;
jn.displayName = "@mantine/core/ActionIcon";
jn.Group = Nm;
jn.GroupSection = zm;
const n1 = T.forwardRef(
  ({ size: n = "var(--cb-icon-size, 70%)", style: r, ...i }, o) =>
    R.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: n, height: n },
      ref: o,
      ...i,
      children: R.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    }),
);
n1.displayName = "@mantine/core/CloseIcon";
var a1 = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const sw = { variant: "subtle" },
  uw = (n, { size: r, radius: i, iconSize: o }) => ({
    root: {
      "--cb-size": Ze(r, "cb-size"),
      "--cb-radius": i === void 0 ? void 0 : $t(i),
      "--cb-icon-size": ie(o),
    },
  }),
  oo = It((n, r) => {
    const i = be("CloseButton", sw, n),
      {
        iconSize: o,
        children: s,
        vars: c,
        radius: d,
        className: m,
        classNames: h,
        style: p,
        styles: y,
        unstyled: g,
        "data-disabled": b,
        disabled: S,
        variant: C,
        icon: x,
        mod: E,
        attributes: _,
        __staticSelector: N,
        ...w
      } = i,
      z = De({
        name: N || "CloseButton",
        props: i,
        className: m,
        style: p,
        classes: a1,
        classNames: h,
        styles: y,
        unstyled: g,
        attributes: _,
        vars: c,
        varsResolver: uw,
      });
    return R.jsxs(Cl, {
      ref: r,
      ...w,
      unstyled: g,
      variant: C,
      disabled: S,
      mod: [{ disabled: S || b }, E],
      ...z("root", { variant: C, active: !S && !b }),
      children: [x || R.jsx(n1, {}), s],
    });
  });
oo.classes = a1;
oo.displayName = "@mantine/core/CloseButton";
function cw(n) {
  return T.Children.toArray(n).filter(Boolean);
}
var r1 = { root: "m_4081bf90" };
const fw = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  dw = (
    n,
    { grow: r, preventGrowOverflow: i, gap: o, align: s, justify: c, wrap: d },
    { childWidth: m },
  ) => ({
    root: {
      "--group-child-width": r && i ? m : void 0,
      "--group-gap": no(o),
      "--group-align": s,
      "--group-justify": c,
      "--group-wrap": d,
    },
  }),
  ea = Me((n, r) => {
    const i = be("Group", fw, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        children: h,
        gap: p,
        align: y,
        justify: g,
        wrap: b,
        grow: S,
        preventGrowOverflow: C,
        vars: x,
        variant: E,
        __size: _,
        mod: N,
        attributes: w,
        ...z
      } = i,
      M = cw(h),
      j = M.length,
      O = no(p ?? "md"),
      D = { childWidth: `calc(${100 / j}% - (${O} - ${O} / ${j}))` },
      H = De({
        name: "Group",
        props: i,
        stylesCtx: D,
        className: s,
        style: c,
        classes: r1,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: w,
        vars: x,
        varsResolver: dw,
      });
    return R.jsx(ye, {
      ...H("root"),
      ref: r,
      variant: E,
      mod: [{ grow: S }, N],
      size: _,
      ...z,
      children: M,
    });
  });
ea.classes = r1;
ea.displayName = "@mantine/core/Group";
const [mw, oa] = to("ModalBase component was not found in tree");
function hw({ opened: n, transitionDuration: r }) {
  const [i, o] = T.useState(n),
    s = T.useRef(-1),
    d = vb() ? 0 : r;
  return (
    T.useEffect(
      () => (
        n
          ? (o(!0), window.clearTimeout(s.current))
          : d === 0
            ? o(!1)
            : (s.current = window.setTimeout(() => o(!1), d)),
        () => window.clearTimeout(s.current)
      ),
      [n, d],
    ),
    i
  );
}
function pw({
  id: n,
  transitionProps: r,
  opened: i,
  trapFocus: o,
  closeOnEscape: s,
  onClose: c,
  returnFocus: d,
}) {
  const m = ro(n),
    [h, p] = T.useState(!1),
    [y, g] = T.useState(!1),
    b = typeof r?.duration == "number" ? r?.duration : 200,
    S = hw({ opened: i, transitionDuration: b });
  return (
    CT(
      "keydown",
      (C) => {
        C.key === "Escape" &&
          s &&
          !C.isComposing &&
          i &&
          C.target?.getAttribute("data-mantine-stop-propagation") !== "true" &&
          c();
      },
      { capture: !0 },
    ),
    hT({ opened: i, shouldReturnFocus: o && d }),
    {
      _id: m,
      titleMounted: h,
      bodyMounted: y,
      shouldLockScroll: S,
      setTitleMounted: p,
      setBodyMounted: g,
    }
  );
}
const l1 = T.forwardRef(
  (
    {
      keepMounted: n,
      opened: r,
      onClose: i,
      id: o,
      transitionProps: s,
      onExitTransitionEnd: c,
      onEnterTransitionEnd: d,
      trapFocus: m,
      closeOnEscape: h,
      returnFocus: p,
      closeOnClickOutside: y,
      withinPortal: g,
      portalProps: b,
      lockScroll: S,
      children: C,
      zIndex: x,
      shadow: E,
      padding: _,
      __vars: N,
      unstyled: w,
      removeScrollProps: z,
      ...M
    },
    j,
  ) => {
    const {
        _id: O,
        titleMounted: B,
        bodyMounted: D,
        shouldLockScroll: H,
        setTitleMounted: L,
        setBodyMounted: q,
      } = pw({
        id: o,
        transitionProps: s,
        opened: r,
        trapFocus: m,
        closeOnEscape: h,
        onClose: i,
        returnFocus: p,
      }),
      { key: Y, ...G } = z || {};
    return R.jsx(Kb, {
      ...b,
      withinPortal: g,
      children: R.jsx(mw, {
        value: {
          opened: r,
          onClose: i,
          closeOnClickOutside: y,
          onExitTransitionEnd: c,
          onEnterTransitionEnd: d,
          transitionProps: { ...s, keepMounted: n },
          getTitleId: () => `${O}-title`,
          getBodyId: () => `${O}-body`,
          titleMounted: B,
          bodyMounted: D,
          setTitleMounted: L,
          setBodyMounted: q,
          trapFocus: m,
          closeOnEscape: h,
          zIndex: x,
          unstyled: w,
        },
        children: R.jsx(
          sb,
          {
            enabled: H && S,
            ...G,
            children: R.jsx(ye, {
              ref: j,
              ...M,
              __vars: {
                ...N,
                "--mb-z-index": (x || El("modal")).toString(),
                "--mb-shadow": fb(E),
                "--mb-padding": no(_),
              },
              children: C,
            }),
          },
          Y,
        ),
      }),
    });
  },
);
l1.displayName = "@mantine/core/ModalBase";
function yw() {
  const n = oa();
  return (
    T.useEffect(() => (n.setBodyMounted(!0), () => n.setBodyMounted(!1)), []),
    n.getBodyId()
  );
}
var yl = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const i1 = T.forwardRef(({ className: n, ...r }, i) => {
  const o = yw(),
    s = oa();
  return R.jsx(ye, {
    ref: i,
    ...r,
    id: o,
    className: Lt({ [yl.body]: !s.unstyled }, n),
  });
});
i1.displayName = "@mantine/core/ModalBaseBody";
const o1 = T.forwardRef(({ className: n, onClick: r, ...i }, o) => {
  const s = oa();
  return R.jsx(oo, {
    ref: o,
    ...i,
    onClick: (c) => {
      (s.onClose(), r?.(c));
    },
    className: Lt({ [yl.close]: !s.unstyled }, n),
    unstyled: s.unstyled,
  });
});
o1.displayName = "@mantine/core/ModalBaseCloseButton";
const s1 = T.forwardRef(
  (
    {
      transitionProps: n,
      className: r,
      innerProps: i,
      onKeyDown: o,
      style: s,
      ...c
    },
    d,
  ) => {
    const m = oa();
    return R.jsx(io, {
      mounted: m.opened,
      transition: "pop",
      ...m.transitionProps,
      onExited: () => {
        (m.onExitTransitionEnd?.(), m.transitionProps?.onExited?.());
      },
      onEntered: () => {
        (m.onEnterTransitionEnd?.(), m.transitionProps?.onEntered?.());
      },
      ...n,
      children: (h) =>
        R.jsx("div", {
          ...i,
          className: Lt({ [yl.inner]: !m.unstyled }, i.className),
          children: R.jsx(Mm, {
            active: m.opened && m.trapFocus,
            innerRef: d,
            children: R.jsx(br, {
              ...c,
              component: "section",
              role: "dialog",
              tabIndex: -1,
              "aria-modal": !0,
              "aria-describedby": m.bodyMounted ? m.getBodyId() : void 0,
              "aria-labelledby": m.titleMounted ? m.getTitleId() : void 0,
              style: [s, h],
              className: Lt({ [yl.content]: !m.unstyled }, r),
              unstyled: m.unstyled,
              children: c.children,
            }),
          }),
        }),
    });
  },
);
s1.displayName = "@mantine/core/ModalBaseContent";
const u1 = T.forwardRef(({ className: n, ...r }, i) => {
  const o = oa();
  return R.jsx(ye, {
    component: "header",
    ref: i,
    className: Lt({ [yl.header]: !o.unstyled }, n),
    ...r,
  });
});
u1.displayName = "@mantine/core/ModalBaseHeader";
const gw = { duration: 200, timingFunction: "ease", transition: "fade" };
function vw(n) {
  const r = oa();
  return { ...gw, ...r.transitionProps, ...n };
}
const c1 = T.forwardRef(
  ({ onClick: n, transitionProps: r, style: i, visible: o, ...s }, c) => {
    const d = oa(),
      m = vw(r);
    return R.jsx(io, {
      mounted: o !== void 0 ? o : d.opened,
      ...m,
      transition: "fade",
      children: (h) =>
        R.jsx(Am, {
          ref: c,
          fixed: !0,
          style: [i, h],
          zIndex: d.zIndex,
          unstyled: d.unstyled,
          onClick: (p) => {
            (n?.(p), d.closeOnClickOutside && d.onClose());
          },
          ...s,
        }),
    });
  },
);
c1.displayName = "@mantine/core/ModalBaseOverlay";
function bw() {
  const n = oa();
  return (
    T.useEffect(() => (n.setTitleMounted(!0), () => n.setTitleMounted(!1)), []),
    n.getTitleId()
  );
}
const f1 = T.forwardRef(({ className: n, ...r }, i) => {
  const o = bw(),
    s = oa();
  return R.jsx(ye, {
    component: "h2",
    ref: i,
    className: Lt({ [yl.title]: !s.unstyled }, n),
    ...r,
    id: o,
  });
});
f1.displayName = "@mantine/core/ModalBaseTitle";
function Sw({ children: n }) {
  return R.jsx(R.Fragment, { children: n });
}
const [xw, Ew] = gm({ size: "sm" }),
  d1 = Me((n, r) => {
    const i = be("InputClearButton", null, n),
      { size: o, variant: s, vars: c, classNames: d, styles: m, ...h } = i,
      p = Ew(),
      { resolvedClassNames: y, resolvedStyles: g } = Rb({
        classNames: d,
        styles: m,
        props: i,
      });
    return R.jsx(oo, {
      variant: s || "transparent",
      ref: r,
      size: o || p?.size || "sm",
      classNames: y,
      styles: g,
      __staticSelector: "InputClearButton",
      style: {
        pointerEvents: "all",
        background: "var(--input-bg)",
        ...h.style,
      },
      ...h,
    });
  });
d1.displayName = "@mantine/core/InputClearButton";
const Cw = { xs: 7, sm: 8, md: 10, lg: 12, xl: 15 };
function Tw({
  __clearable: n,
  __clearSection: r,
  rightSection: i,
  __defaultRightSection: o,
  size: s = "sm",
}) {
  const c = n && r;
  return c && (i || o)
    ? R.jsxs("div", {
        "data-combined-clear-section": !0,
        style: {
          display: "flex",
          gap: 2,
          alignItems: "center",
          paddingInlineEnd: Cw[s],
        },
        children: [c, i || o],
      })
    : i === null
      ? null
      : i || c || o;
}
const [ww, vu] = gm({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var un = {
  wrapper: "m_6c018570",
  input: "m_8fb7ebe7",
  section: "m_82577fc2",
  placeholder: "m_88bacfd0",
  root: "m_46b77525",
  label: "m_8fdc1311",
  required: "m_78a94662",
  error: "m_8f816625",
  description: "m_fe47ce59",
};
const Rw = (n, { size: r }) => ({
    description: {
      "--input-description-size":
        r === void 0 ? void 0 : `calc(${Zt(r)} - ${ie(2)})`,
    },
  }),
  bu = Me((n, r) => {
    const i = be("InputDescription", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        size: p,
        __staticSelector: y,
        __inheritStyles: g = !0,
        attributes: b,
        variant: S,
        ...C
      } = be("InputDescription", null, i),
      x = vu(),
      E = De({
        name: ["InputWrapper", y],
        props: i,
        classes: un,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: b,
        rootSelector: "description",
        vars: h,
        varsResolver: Rw,
      }),
      _ = (g && x?.getStyles) || E;
    return R.jsx(ye, {
      component: "p",
      ref: r,
      variant: S,
      size: p,
      ..._("description", x?.getStyles ? { className: s, style: c } : void 0),
      ...C,
    });
  });
bu.classes = un;
bu.displayName = "@mantine/core/InputDescription";
const _w = (n, { size: r }) => ({
    error: {
      "--input-error-size": r === void 0 ? void 0 : `calc(${Zt(r)} - ${ie(2)})`,
    },
  }),
  Su = Me((n, r) => {
    const i = be("InputError", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        size: p,
        attributes: y,
        __staticSelector: g,
        __inheritStyles: b = !0,
        variant: S,
        ...C
      } = i,
      x = De({
        name: ["InputWrapper", g],
        props: i,
        classes: un,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: y,
        rootSelector: "error",
        vars: h,
        varsResolver: _w,
      }),
      E = vu(),
      _ = (b && E?.getStyles) || x;
    return R.jsx(ye, {
      component: "p",
      ref: r,
      variant: S,
      size: p,
      ..._("error", E?.getStyles ? { className: s, style: c } : void 0),
      ...C,
    });
  });
Su.classes = un;
Su.displayName = "@mantine/core/InputError";
const Xv = { labelElement: "label" },
  Aw = (n, { size: r }) => ({
    label: { "--input-label-size": Zt(r), "--input-asterisk-color": void 0 },
  }),
  xu = Me((n, r) => {
    const i = be("InputLabel", Xv, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        labelElement: p,
        size: y,
        required: g,
        htmlFor: b,
        onMouseDown: S,
        children: C,
        __staticSelector: x,
        variant: E,
        mod: _,
        attributes: N,
        ...w
      } = be("InputLabel", Xv, i),
      z = De({
        name: ["InputWrapper", x],
        props: i,
        classes: un,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: N,
        rootSelector: "label",
        vars: h,
        varsResolver: Aw,
      }),
      M = vu(),
      j = M?.getStyles || z;
    return R.jsxs(ye, {
      ...j("label", M?.getStyles ? { className: s, style: c } : void 0),
      component: p,
      variant: E,
      size: y,
      ref: r,
      htmlFor: p === "label" ? b : void 0,
      mod: [{ required: g }, _],
      onMouseDown: (O) => {
        (S?.(O), !O.defaultPrevented && O.detail > 1 && O.preventDefault());
      },
      ...w,
      children: [
        C,
        g &&
          R.jsx("span", {
            ...j("required"),
            "aria-hidden": !0,
            children: " *",
          }),
      ],
    });
  });
xu.classes = un;
xu.displayName = "@mantine/core/InputLabel";
const Om = Me((n, r) => {
  const i = be("InputPlaceholder", null, n),
    {
      classNames: o,
      className: s,
      style: c,
      styles: d,
      unstyled: m,
      vars: h,
      __staticSelector: p,
      variant: y,
      error: g,
      mod: b,
      attributes: S,
      ...C
    } = i,
    x = De({
      name: ["InputPlaceholder", p],
      props: i,
      classes: un,
      className: s,
      style: c,
      classNames: o,
      styles: d,
      unstyled: m,
      attributes: S,
      rootSelector: "placeholder",
    });
  return R.jsx(ye, {
    ...x("placeholder"),
    mod: [{ error: !!g }, b],
    component: "span",
    variant: y,
    ref: r,
    ...C,
  });
});
Om.classes = un;
Om.displayName = "@mantine/core/InputPlaceholder";
function Mw(n, { hasDescription: r, hasError: i }) {
  const o = n.findIndex((h) => h === "input"),
    s = n.slice(0, o),
    c = n.slice(o + 1),
    d = (r && s.includes("description")) || (i && s.includes("error"));
  return {
    offsetBottom:
      (r && c.includes("description")) || (i && c.includes("error")),
    offsetTop: d,
  };
}
const Nw = {
    labelElement: "label",
    inputContainer: (n) => n,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  zw = (n, { size: r }) => ({
    label: { "--input-label-size": Zt(r), "--input-asterisk-color": void 0 },
    error: {
      "--input-error-size": r === void 0 ? void 0 : `calc(${Zt(r)} - ${ie(2)})`,
    },
    description: {
      "--input-description-size":
        r === void 0 ? void 0 : `calc(${Zt(r)} - ${ie(2)})`,
    },
  }),
  jm = Me((n, r) => {
    const i = be("InputWrapper", Nw, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        size: p,
        variant: y,
        __staticSelector: g,
        inputContainer: b,
        inputWrapperOrder: S,
        label: C,
        error: x,
        description: E,
        labelProps: _,
        descriptionProps: N,
        errorProps: w,
        labelElement: z,
        children: M,
        withAsterisk: j,
        id: O,
        required: B,
        __stylesApiProps: D,
        mod: H,
        attributes: L,
        ...q
      } = i,
      Y = De({
        name: ["InputWrapper", g],
        props: D || i,
        classes: un,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: L,
        vars: h,
        varsResolver: zw,
      }),
      G = { size: p, variant: y, __staticSelector: g },
      ne = ro(O),
      Q = typeof j == "boolean" ? j : B,
      K = w?.id || `${ne}-error`,
      F = N?.id || `${ne}-description`,
      W = ne,
      se = !!x && typeof x != "boolean",
      U = !!E,
      X = `${se ? K : ""} ${U ? F : ""}`,
      le = X.trim().length > 0 ? X.trim() : void 0,
      ee = _?.id || `${ne}-label`,
      ue =
        C &&
        R.jsx(
          xu,
          {
            labelElement: z,
            id: ee,
            htmlFor: W,
            required: Q,
            ...G,
            ..._,
            children: C,
          },
          "label",
        ),
      ce =
        U &&
        R.jsx(
          bu,
          { ...N, ...G, size: N?.size || G.size, id: N?.id || F, children: E },
          "description",
        ),
      oe = R.jsx(T.Fragment, { children: b(M) }, "input"),
      he =
        se &&
        T.createElement(
          Su,
          { ...w, ...G, size: w?.size || G.size, key: "error", id: w?.id || K },
          x,
        ),
      de = S.map((ge) => {
        switch (ge) {
          case "label":
            return ue;
          case "input":
            return oe;
          case "description":
            return ce;
          case "error":
            return he;
          default:
            return null;
        }
      });
    return R.jsx(ww, {
      value: {
        getStyles: Y,
        describedBy: le,
        inputId: W,
        labelId: ee,
        ...Mw(S, { hasDescription: U, hasError: se }),
      },
      children: R.jsx(ye, {
        ref: r,
        variant: y,
        size: p,
        mod: [{ error: !!x }, H],
        ...Y("root"),
        ...q,
        children: de,
      }),
    });
  });
jm.classes = un;
jm.displayName = "@mantine/core/InputWrapper";
const Ow = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
    size: "sm",
  },
  jw = (n, r, i) => ({
    wrapper: {
      "--input-margin-top": i.offsetTop
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-margin-bottom": i.offsetBottom
        ? "calc(var(--mantine-spacing-xs) / 2)"
        : void 0,
      "--input-height": Ze(r.size, "input-height"),
      "--input-fz": Zt(r.size),
      "--input-radius": r.radius === void 0 ? void 0 : $t(r.radius),
      "--input-left-section-width":
        r.leftSectionWidth !== void 0 ? ie(r.leftSectionWidth) : void 0,
      "--input-right-section-width":
        r.rightSectionWidth !== void 0 ? ie(r.rightSectionWidth) : void 0,
      "--input-padding-y": r.multiline ? Ze(r.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": r.leftSectionPointerEvents,
      "--input-right-section-pointer-events": r.rightSectionPointerEvents,
    },
  }),
  Bt = It((n, r) => {
    const i = be("Input", Ow, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        required: h,
        __staticSelector: p,
        __stylesApiProps: y,
        size: g,
        wrapperProps: b,
        error: S,
        disabled: C,
        leftSection: x,
        leftSectionProps: E,
        leftSectionWidth: _,
        rightSection: N,
        rightSectionProps: w,
        rightSectionWidth: z,
        rightSectionPointerEvents: M,
        leftSectionPointerEvents: j,
        variant: O,
        vars: B,
        pointer: D,
        multiline: H,
        radius: L,
        id: q,
        withAria: Y,
        withErrorStyles: G,
        mod: ne,
        inputSize: Q,
        attributes: K,
        __clearSection: F,
        __clearable: W,
        __defaultRightSection: se,
        ...U
      } = i,
      { styleProps: X, rest: le } = pu(U),
      ee = vu(),
      ue = { offsetBottom: ee?.offsetBottom, offsetTop: ee?.offsetTop },
      ce = De({
        name: ["Input", p],
        props: y || i,
        classes: un,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: K,
        stylesCtx: ue,
        rootSelector: "wrapper",
        vars: B,
        varsResolver: jw,
      }),
      oe = Y
        ? {
            required: h,
            disabled: C,
            "aria-invalid": !!S,
            "aria-describedby": ee?.describedBy,
            id: ee?.inputId || q,
          }
        : {},
      he = Tw({
        __clearable: W,
        __clearSection: F,
        rightSection: N,
        __defaultRightSection: se,
        size: g,
      });
    return R.jsx(xw, {
      value: { size: g || "sm" },
      children: R.jsxs(ye, {
        ...ce("wrapper"),
        ...X,
        ...b,
        mod: [
          {
            error: !!S && G,
            pointer: D,
            disabled: C,
            multiline: H,
            "data-with-right-section": !!he,
            "data-with-left-section": !!x,
          },
          ne,
        ],
        variant: O,
        size: g,
        children: [
          x &&
            R.jsx("div", {
              ...E,
              "data-position": "left",
              ...ce("section", { className: E?.className, style: E?.style }),
              children: x,
            }),
          R.jsx(ye, {
            component: "input",
            ...le,
            ...oe,
            ref: r,
            required: h,
            mod: { disabled: C, error: !!S && G },
            variant: O,
            __size: Q,
            ...ce("input"),
          }),
          he &&
            R.jsx("div", {
              ...w,
              "data-position": "right",
              ...ce("section", { className: w?.className, style: w?.style }),
              children: he,
            }),
        ],
      }),
    });
  });
Bt.classes = un;
Bt.Wrapper = jm;
Bt.Label = xu;
Bt.Error = Su;
Bt.Description = bu;
Bt.Placeholder = Om;
Bt.ClearButton = d1;
Bt.displayName = "@mantine/core/Input";
function Dw(n, r, i) {
  const o = be(n, r, i),
    {
      label: s,
      description: c,
      error: d,
      required: m,
      classNames: h,
      styles: p,
      className: y,
      unstyled: g,
      __staticSelector: b,
      __stylesApiProps: S,
      errorProps: C,
      labelProps: x,
      descriptionProps: E,
      wrapperProps: _,
      id: N,
      size: w,
      style: z,
      inputContainer: M,
      inputWrapperOrder: j,
      withAsterisk: O,
      variant: B,
      vars: D,
      mod: H,
      attributes: L,
      ...q
    } = o,
    { styleProps: Y, rest: G } = pu(q),
    ne = {
      label: s,
      description: c,
      error: d,
      required: m,
      classNames: h,
      className: y,
      __staticSelector: b,
      __stylesApiProps: S || o,
      errorProps: C,
      labelProps: x,
      descriptionProps: E,
      unstyled: g,
      styles: p,
      size: w,
      style: z,
      inputContainer: M,
      inputWrapperOrder: j,
      withAsterisk: O,
      variant: B,
      id: N,
      mod: H,
      attributes: L,
      ..._,
    };
  return {
    ...G,
    classNames: h,
    styles: p,
    unstyled: g,
    wrapperProps: { ...ne, ...Y },
    inputProps: {
      required: m,
      classNames: h,
      styles: p,
      unstyled: g,
      size: w,
      __staticSelector: b,
      __stylesApiProps: S || o,
      error: d,
      variant: B,
      id: N,
      attributes: L,
    },
  };
}
const Uw = { __staticSelector: "InputBase", withAria: !0, size: "sm" },
  so = It((n, r) => {
    const { inputProps: i, wrapperProps: o, ...s } = Dw("InputBase", Uw, n);
    return R.jsx(Bt.Wrapper, {
      ...o,
      children: R.jsx(Bt, { ...i, ...s, ref: r }),
    });
  });
so.classes = { ...Bt.classes, ...Bt.Wrapper.classes };
so.displayName = "@mantine/core/InputBase";
var m1 = {
  root: "m_66836ed3",
  wrapper: "m_a5d60502",
  body: "m_667c2793",
  title: "m_6a03f287",
  label: "m_698f4f23",
  icon: "m_667f2a6a",
  message: "m_7fa78076",
  closeButton: "m_87f54839",
};
const Lw = (n, { radius: r, color: i, variant: o, autoContrast: s }) => {
    const c = n.variantColorResolver({
      color: i || n.primaryColor,
      theme: n,
      variant: o || "light",
      autoContrast: s,
    });
    return {
      root: {
        "--alert-radius": r === void 0 ? void 0 : $t(r),
        "--alert-bg": i || o ? c.background : void 0,
        "--alert-color": c.color,
        "--alert-bd": i || o ? c.border : void 0,
      },
    };
  },
  Dm = Me((n, r) => {
    const i = be("Alert", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        radius: p,
        color: y,
        title: g,
        children: b,
        id: S,
        icon: C,
        withCloseButton: x,
        onClose: E,
        closeButtonLabel: _,
        variant: N,
        autoContrast: w,
        role: z,
        attributes: M,
        ...j
      } = i,
      O = De({
        name: "Alert",
        classes: m1,
        props: i,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: M,
        vars: h,
        varsResolver: Lw,
      }),
      B = ro(S),
      D = (g && `${B}-title`) || void 0,
      H = `${B}-body`;
    return R.jsx(ye, {
      id: B,
      ...O("root", { variant: N }),
      variant: N,
      ref: r,
      role: z || "alert",
      ...j,
      "aria-describedby": b ? H : void 0,
      "aria-labelledby": g ? D : void 0,
      children: R.jsxs("div", {
        ...O("wrapper"),
        children: [
          C && R.jsx("div", { ...O("icon"), children: C }),
          R.jsxs("div", {
            ...O("body"),
            children: [
              g &&
                R.jsx("div", {
                  ...O("title"),
                  "data-with-close-button": x || void 0,
                  children: R.jsx("span", {
                    id: D,
                    ...O("label"),
                    children: g,
                  }),
                }),
              b &&
                R.jsx("div", {
                  id: H,
                  ...O("message"),
                  "data-variant": N,
                  children: b,
                }),
            ],
          }),
          x &&
            R.jsx(oo, {
              ...O("closeButton"),
              onClick: E,
              variant: "transparent",
              size: 16,
              iconSize: 16,
              "aria-label": _,
              unstyled: m,
            }),
        ],
      }),
    });
  });
Dm.classes = m1;
Dm.displayName = "@mantine/core/Alert";
var h1 = { root: "m_b6d8b162" };
function Bw(n) {
  if (n === "start") return "start";
  if (n === "end" || n) return "end";
}
const Hw = { inherit: !1 },
  $w = (n, { variant: r, lineClamp: i, gradient: o, size: s, color: c }) => ({
    root: {
      "--text-fz": Zt(s),
      "--text-lh": cT(s),
      "--text-gradient": r === "gradient" ? qd(o, n) : void 0,
      "--text-line-clamp": typeof i == "number" ? i.toString() : void 0,
      "--text-color": c ? La(c, n) : void 0,
    },
  }),
  Ke = It((n, r) => {
    const i = be("Text", Hw, n),
      {
        lineClamp: o,
        truncate: s,
        inline: c,
        inherit: d,
        gradient: m,
        span: h,
        __staticSelector: p,
        vars: y,
        className: g,
        style: b,
        classNames: S,
        styles: C,
        unstyled: x,
        variant: E,
        mod: _,
        size: N,
        attributes: w,
        ...z
      } = i,
      M = De({
        name: ["Text", p],
        props: i,
        classes: h1,
        className: g,
        style: b,
        classNames: S,
        styles: C,
        unstyled: x,
        attributes: w,
        vars: y,
        varsResolver: $w,
      });
    return R.jsx(ye, {
      ...M("root", { focusable: !0 }),
      ref: r,
      component: h ? "span" : "p",
      variant: E,
      mod: [
        {
          "data-truncate": Bw(s),
          "data-line-clamp": typeof o == "number",
          "data-inline": c,
          "data-inherit": d,
        },
        _,
      ],
      size: N,
      ...z,
    });
  });
Ke.classes = h1;
Ke.displayName = "@mantine/core/Text";
const p1 = T.createContext(null),
  qw = p1.Provider;
function Qw() {
  return { withinGroup: !!T.useContext(p1) };
}
var Eu = {
  group: "m_11def92b",
  root: "m_f85678b6",
  image: "m_11f8ac07",
  placeholder: "m_104cd71f",
};
const kw = (n, { spacing: r }) => ({ group: { "--ag-spacing": no(r) } }),
  Um = Me((n, r) => {
    const i = be("AvatarGroup", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        spacing: p,
        attributes: y,
        ...g
      } = i,
      b = De({
        name: "AvatarGroup",
        classes: Eu,
        props: i,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: y,
        vars: h,
        varsResolver: kw,
        rootSelector: "group",
      });
    return R.jsx(qw, {
      value: !0,
      children: R.jsx(ye, { ref: r, ...b("group"), ...g }),
    });
  });
Um.classes = Eu;
Um.displayName = "@mantine/core/AvatarGroup";
function Yw(n) {
  return R.jsx("svg", {
    ...n,
    "data-avatar-placeholder-icon": !0,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: R.jsx("path", {
      d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function Vw(n) {
  let r = 0;
  for (let i = 0; i < n.length; i += 1) {
    const o = n.charCodeAt(i);
    ((r = (r << 5) - r + o), (r |= 0));
  }
  return r;
}
const Gw = [
  "blue",
  "cyan",
  "grape",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "red",
  "teal",
  "violet",
];
function Xw(n, r = Gw) {
  const i = Vw(n),
    o = Math.abs(i) % r.length;
  return r[o];
}
function Zw(n, r = 2) {
  const i = n.split(" ");
  return i.length === 1
    ? n.slice(0, r).toUpperCase()
    : i
        .map((o) => o[0])
        .slice(0, r)
        .join("")
        .toUpperCase();
}
const Pw = (
    n,
    {
      size: r,
      radius: i,
      variant: o,
      gradient: s,
      color: c,
      autoContrast: d,
      name: m,
      allowedInitialsColors: h,
    },
  ) => {
    const p = c === "initials" && typeof m == "string" ? Xw(m, h) : c,
      y = n.variantColorResolver({
        color: p || "gray",
        theme: n,
        gradient: s,
        variant: o || "light",
        autoContrast: d,
      });
    return {
      root: {
        "--avatar-size": Ze(r, "avatar-size"),
        "--avatar-radius": i === void 0 ? void 0 : $t(i),
        "--avatar-bg": p || o ? y.background : void 0,
        "--avatar-color": p || o ? y.color : void 0,
        "--avatar-bd": p || o ? y.border : void 0,
      },
    };
  },
  Yi = It((n, r) => {
    const i = be("Avatar", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        src: p,
        alt: y,
        radius: g,
        color: b,
        gradient: S,
        imageProps: C,
        children: x,
        autoContrast: E,
        mod: _,
        name: N,
        allowedInitialsColors: w,
        attributes: z,
        ...M
      } = i,
      j = Qw(),
      [O, B] = T.useState(!p),
      D = De({
        name: "Avatar",
        props: i,
        classes: Eu,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: z,
        vars: h,
        varsResolver: Pw,
      });
    return (
      T.useEffect(() => B(!p), [p]),
      R.jsx(ye, {
        ...D("root"),
        mod: [{ "within-group": j.withinGroup }, _],
        ref: r,
        ...M,
        children:
          O || !p
            ? R.jsx("span", {
                ...D("placeholder"),
                title: y,
                children: x || (typeof N == "string" && Zw(N)) || R.jsx(Yw, {}),
              })
            : R.jsx("img", {
                ...C,
                ...D("image"),
                src: p,
                alt: y,
                onError: (H) => {
                  (B(!0), C?.onError?.(H));
                },
              }),
      })
    );
  });
Yi.classes = Eu;
Yi.displayName = "@mantine/core/Avatar";
Yi.Group = Um;
var y1 = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b",
};
const Iw = (
    n,
    { radius: r, color: i, gradient: o, variant: s, size: c, autoContrast: d },
  ) => {
    const m = n.variantColorResolver({
      color: i || n.primaryColor,
      theme: n,
      gradient: o,
      variant: s || "filled",
      autoContrast: d,
    });
    return {
      root: {
        "--badge-height": Ze(c, "badge-height"),
        "--badge-padding-x": Ze(c, "badge-padding-x"),
        "--badge-fz": Ze(c, "badge-fz"),
        "--badge-radius": r === void 0 ? void 0 : $t(r),
        "--badge-bg": i || s ? m.background : void 0,
        "--badge-color": i || s ? m.color : void 0,
        "--badge-bd": i || s ? m.border : void 0,
        "--badge-dot-color": s === "dot" ? La(i, n) : void 0,
      },
    };
  },
  Lm = It((n, r) => {
    const i = be("Badge", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        radius: p,
        color: y,
        gradient: g,
        leftSection: b,
        rightSection: S,
        children: C,
        variant: x,
        fullWidth: E,
        autoContrast: _,
        circle: N,
        mod: w,
        attributes: z,
        ...M
      } = i,
      j = De({
        name: "Badge",
        props: i,
        classes: y1,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: z,
        vars: h,
        varsResolver: Iw,
      });
    return R.jsxs(ye, {
      variant: x,
      mod: [
        {
          block: E,
          circle: N,
          "with-right-section": !!S,
          "with-left-section": !!b,
        },
        w,
      ],
      ...j("root", { variant: x }),
      ref: r,
      ...M,
      children: [
        b &&
          R.jsx("span", {
            ...j("section"),
            "data-position": "left",
            children: b,
          }),
        R.jsx("span", { ...j("label"), children: C }),
        S &&
          R.jsx("span", {
            ...j("section"),
            "data-position": "right",
            children: S,
          }),
      ],
    });
  });
Lm.classes = y1;
Lm.displayName = "@mantine/core/Badge";
var wl = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
  groupSection: "m_70be2a01",
};
const Zv = { orientation: "horizontal" },
  Kw = (n, { borderWidth: r }) => ({
    group: { "--button-border-width": ie(r) },
  }),
  Bm = Me((n, r) => {
    const i = be("ButtonGroup", Zv, n),
      {
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        orientation: h,
        vars: p,
        borderWidth: y,
        variant: g,
        mod: b,
        attributes: S,
        ...C
      } = be("ButtonGroup", Zv, n),
      x = De({
        name: "ButtonGroup",
        props: i,
        classes: wl,
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        attributes: S,
        vars: p,
        varsResolver: Kw,
        rootSelector: "group",
      });
    return R.jsx(ye, {
      ...x("group"),
      ref: r,
      variant: g,
      mod: [{ "data-orientation": h }, b],
      role: "group",
      ...C,
    });
  });
Bm.classes = wl;
Bm.displayName = "@mantine/core/ButtonGroup";
const Fw = (
    n,
    { radius: r, color: i, gradient: o, variant: s, autoContrast: c, size: d },
  ) => {
    const m = n.variantColorResolver({
      color: i || n.primaryColor,
      theme: n,
      gradient: o,
      variant: s || "filled",
      autoContrast: c,
    });
    return {
      groupSection: {
        "--section-height": Ze(d, "section-height"),
        "--section-padding-x": Ze(d, "section-padding-x"),
        "--section-fz": d?.includes("compact")
          ? Zt(d.replace("compact-", ""))
          : Zt(d),
        "--section-radius": r === void 0 ? void 0 : $t(r),
        "--section-bg": i || s ? m.background : void 0,
        "--section-color": m.color,
        "--section-bd": i || s ? m.border : void 0,
      },
    };
  },
  Hm = Me((n, r) => {
    const i = be("ButtonGroupSection", null, n),
      {
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        vars: h,
        variant: p,
        gradient: y,
        radius: g,
        autoContrast: b,
        attributes: S,
        ...C
      } = i,
      x = De({
        name: "ButtonGroupSection",
        props: i,
        classes: wl,
        className: o,
        style: s,
        classNames: c,
        styles: d,
        unstyled: m,
        attributes: S,
        vars: h,
        varsResolver: Fw,
        rootSelector: "groupSection",
      });
    return R.jsx(ye, { ...x("groupSection"), ref: r, variant: p, ...C });
  });
Hm.classes = wl;
Hm.displayName = "@mantine/core/ButtonGroupSection";
const Jw = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${ie(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  Ww = (
    n,
    {
      radius: r,
      color: i,
      gradient: o,
      variant: s,
      size: c,
      justify: d,
      autoContrast: m,
    },
  ) => {
    const h = n.variantColorResolver({
      color: i || n.primaryColor,
      theme: n,
      gradient: o,
      variant: s || "filled",
      autoContrast: m,
    });
    return {
      root: {
        "--button-justify": d,
        "--button-height": Ze(c, "button-height"),
        "--button-padding-x": Ze(c, "button-padding-x"),
        "--button-fz": c?.includes("compact")
          ? Zt(c.replace("compact-", ""))
          : Zt(c),
        "--button-radius": r === void 0 ? void 0 : $t(r),
        "--button-bg": i || s ? h.background : void 0,
        "--button-hover": i || s ? h.hover : void 0,
        "--button-color": h.color,
        "--button-bd": i || s ? h.border : void 0,
        "--button-hover-color": i || s ? h.hoverColor : void 0,
      },
    };
  },
  Ut = It((n, r) => {
    const i = be("Button", null, n),
      {
        style: o,
        vars: s,
        className: c,
        color: d,
        disabled: m,
        children: h,
        leftSection: p,
        rightSection: y,
        fullWidth: g,
        variant: b,
        radius: S,
        loading: C,
        loaderProps: x,
        gradient: E,
        classNames: _,
        styles: N,
        unstyled: w,
        "data-disabled": z,
        autoContrast: M,
        mod: j,
        attributes: O,
        ...B
      } = i,
      D = De({
        name: "Button",
        props: i,
        classes: wl,
        className: c,
        style: o,
        classNames: _,
        styles: N,
        unstyled: w,
        attributes: O,
        vars: s,
        varsResolver: Ww,
      }),
      H = !!p,
      L = !!y;
    return R.jsxs(Cl, {
      ref: r,
      ...D("root", { active: !m && !C && !z }),
      unstyled: w,
      variant: b,
      disabled: m || C,
      mod: [
        {
          disabled: m || z,
          loading: C,
          block: g,
          "with-left-section": H,
          "with-right-section": L,
        },
        j,
      ],
      ...B,
      children: [
        typeof C == "boolean" &&
          R.jsx(io, {
            mounted: C,
            transition: Jw,
            duration: 150,
            children: (q) =>
              R.jsx(ye, {
                component: "span",
                ...D("loader", { style: q }),
                "aria-hidden": !0,
                children: R.jsx(Sr, {
                  color: "var(--button-color)",
                  size: "calc(var(--button-height) / 1.8)",
                  ...x,
                }),
              }),
          }),
        R.jsxs("span", {
          ...D("inner"),
          children: [
            p &&
              R.jsx(ye, {
                component: "span",
                ...D("section"),
                mod: { position: "left" },
                children: p,
              }),
            R.jsx(ye, {
              component: "span",
              mod: { loading: C },
              ...D("label"),
              children: h,
            }),
            y &&
              R.jsx(ye, {
                component: "span",
                ...D("section"),
                mod: { position: "right" },
                children: y,
              }),
          ],
        }),
      ],
    });
  });
Ut.classes = wl;
Ut.displayName = "@mantine/core/Button";
Ut.Group = Bm;
Ut.GroupSection = Hm;
var g1 = { root: "m_4451eb3a" };
const $m = It((n, r) => {
  const i = be("Center", null, n),
    {
      classNames: o,
      className: s,
      style: c,
      styles: d,
      unstyled: m,
      vars: h,
      inline: p,
      mod: y,
      attributes: g,
      ...b
    } = i,
    S = De({
      name: "Center",
      props: i,
      classes: g1,
      className: s,
      style: c,
      classNames: o,
      styles: d,
      unstyled: m,
      attributes: g,
      vars: h,
    });
  return R.jsx(ye, { ref: r, mod: [{ inline: p }, y], ...S("root"), ...b });
});
$m.classes = g1;
$m.displayName = "@mantine/core/Center";
var v1 = { root: "m_7485cace" };
const eR = (n, { size: r, fluid: i }) => ({
    root: { "--container-size": i ? void 0 : Ze(r, "container-size") },
  }),
  qm = Me((n, r) => {
    const i = be("Container", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        fluid: p,
        mod: y,
        attributes: g,
        strategy: b,
        ...S
      } = i,
      C = De({
        name: "Container",
        classes: v1,
        props: i,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: g,
        vars: h,
        varsResolver: eR,
      });
    return R.jsx(ye, {
      ref: r,
      mod: [{ fluid: p, strategy: b || "block" }, y],
      ...C("root"),
      ...S,
    });
  });
qm.classes = v1;
qm.displayName = "@mantine/core/Container";
var b1 = { root: "m_3eebeb36", label: "m_9e365f20" };
const tR = { orientation: "horizontal" },
  nR = (n, { color: r, variant: i, size: o }) => ({
    root: {
      "--divider-color": r ? La(r, n) : void 0,
      "--divider-border-style": i,
      "--divider-size": Ze(o, "divider-size"),
    },
  }),
  Qm = Me((n, r) => {
    const i = be("Divider", tR, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        color: p,
        orientation: y,
        label: g,
        labelPosition: b,
        mod: S,
        attributes: C,
        ...x
      } = i,
      E = De({
        name: "Divider",
        classes: b1,
        props: i,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: C,
        vars: h,
        varsResolver: nR,
      });
    return R.jsx(ye, {
      ref: r,
      mod: [{ orientation: y, "with-label": !!g }, S],
      ...E("root"),
      ...x,
      role: "separator",
      children:
        g &&
        R.jsx(ye, {
          component: "span",
          mod: { position: b },
          ...E("label"),
          children: g,
        }),
    });
  });
Qm.classes = b1;
Qm.displayName = "@mantine/core/Divider";
var S1 = { root: "m_9e117634" };
const aR = (n, { radius: r, fit: i }) => ({
    root: {
      "--image-radius": r === void 0 ? void 0 : $t(r),
      "--image-object-fit": i,
    },
  }),
  km = It((n, r) => {
    const i = be("Image", null, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        onError: p,
        src: y,
        radius: g,
        fit: b,
        fallbackSrc: S,
        mod: C,
        attributes: x,
        ...E
      } = i,
      [_, N] = T.useState(!y);
    T.useEffect(() => N(!y), [y]);
    const w = De({
      name: "Image",
      classes: S1,
      props: i,
      className: s,
      style: c,
      classNames: o,
      styles: d,
      unstyled: m,
      attributes: x,
      vars: h,
      varsResolver: aR,
    });
    return _ && S
      ? R.jsx(ye, {
          component: "img",
          ref: r,
          src: S,
          ...w("root"),
          onError: p,
          mod: ["fallback", C],
          ...E,
        })
      : R.jsx(ye, {
          component: "img",
          ref: r,
          ...w("root"),
          src: y,
          onError: (z) => {
            (p?.(z), N(!0));
          },
          mod: C,
          ...E,
        });
  });
km.classes = S1;
km.displayName = "@mantine/core/Image";
const [rR, Rl] = to("Modal component was not found in tree");
var sa = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd",
};
const Cu = Me((n, r) => {
  const i = be("ModalBody", null, n),
    { classNames: o, className: s, style: c, styles: d, vars: m, ...h } = i,
    p = Rl();
  return R.jsx(i1, {
    ref: r,
    ...p.getStyles("body", {
      classNames: o,
      style: c,
      styles: d,
      className: s,
    }),
    ...h,
  });
});
Cu.classes = sa;
Cu.displayName = "@mantine/core/ModalBody";
const Tu = Me((n, r) => {
  const i = be("ModalCloseButton", null, n),
    { classNames: o, className: s, style: c, styles: d, vars: m, ...h } = i,
    p = Rl();
  return R.jsx(o1, {
    ref: r,
    ...p.getStyles("close", {
      classNames: o,
      style: c,
      styles: d,
      className: s,
    }),
    ...h,
  });
});
Tu.classes = sa;
Tu.displayName = "@mantine/core/ModalCloseButton";
const wu = Me((n, r) => {
  const i = be("ModalContent", null, n),
    {
      classNames: o,
      className: s,
      style: c,
      styles: d,
      vars: m,
      children: h,
      __hidden: p,
      ...y
    } = i,
    g = Rl(),
    b = g.scrollAreaComponent || Sw;
  return R.jsx(s1, {
    ...g.getStyles("content", {
      className: s,
      style: c,
      styles: d,
      classNames: o,
    }),
    innerProps: g.getStyles("inner", {
      className: s,
      style: c,
      styles: d,
      classNames: o,
    }),
    "data-full-screen": g.fullScreen || void 0,
    "data-modal-content": !0,
    "data-hidden": p || void 0,
    ref: r,
    ...y,
    children: R.jsx(b, {
      style: {
        maxHeight: g.fullScreen
          ? "100dvh"
          : `calc(100dvh - (${ie(g.yOffset)} * 2))`,
      },
      children: h,
    }),
  });
});
wu.classes = sa;
wu.displayName = "@mantine/core/ModalContent";
const Ru = Me((n, r) => {
  const i = be("ModalHeader", null, n),
    { classNames: o, className: s, style: c, styles: d, vars: m, ...h } = i,
    p = Rl();
  return R.jsx(u1, {
    ref: r,
    ...p.getStyles("header", {
      classNames: o,
      style: c,
      styles: d,
      className: s,
    }),
    ...h,
  });
});
Ru.classes = sa;
Ru.displayName = "@mantine/core/ModalHeader";
const _u = Me((n, r) => {
  const i = be("ModalOverlay", null, n),
    { classNames: o, className: s, style: c, styles: d, vars: m, ...h } = i,
    p = Rl();
  return R.jsx(c1, {
    ref: r,
    ...p.getStyles("overlay", {
      classNames: o,
      style: c,
      styles: d,
      className: s,
    }),
    ...h,
  });
});
_u.classes = sa;
_u.displayName = "@mantine/core/ModalOverlay";
const lR = {
    __staticSelector: "Modal",
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: El("modal"),
    transitionProps: { duration: 200, transition: "fade-down" },
    yOffset: "5dvh",
  },
  iR = (n, { radius: r, size: i, yOffset: o, xOffset: s }) => ({
    root: {
      "--modal-radius": r === void 0 ? void 0 : $t(r),
      "--modal-size": Ze(i, "modal-size"),
      "--modal-y-offset": ie(o),
      "--modal-x-offset": ie(s),
    },
  }),
  Au = Me((n, r) => {
    const i = be("ModalRoot", lR, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        yOffset: p,
        scrollAreaComponent: y,
        radius: g,
        fullScreen: b,
        centered: S,
        xOffset: C,
        __staticSelector: x,
        attributes: E,
        ..._
      } = i,
      N = De({
        name: x,
        classes: sa,
        props: i,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: E,
        vars: h,
        varsResolver: iR,
      });
    return R.jsx(rR, {
      value: {
        yOffset: p,
        scrollAreaComponent: y,
        getStyles: N,
        fullScreen: b,
      },
      children: R.jsx(l1, {
        ref: r,
        ...N("root"),
        "data-full-screen": b || void 0,
        "data-centered": S || void 0,
        "data-offset-scrollbars": y === vr.Autosize || void 0,
        unstyled: m,
        ..._,
      }),
    });
  });
Au.classes = sa;
Au.displayName = "@mantine/core/ModalRoot";
const [oR, sR] = gm();
function x1({ children: n }) {
  const [r, i] = T.useState([]),
    [o, s] = T.useState(El("modal"));
  return R.jsx(oR, {
    value: {
      stack: r,
      addModal: (c, d) => {
        (i((m) => [...new Set([...m, c])]),
          s((m) =>
            typeof d == "number" && typeof m == "number" ? Math.max(m, d) : m,
          ));
      },
      removeModal: (c) => i((d) => d.filter((m) => m !== c)),
      getZIndex: (c) => `calc(${o} + ${r.indexOf(c)} + 1)`,
      currentId: r[r.length - 1],
      maxZIndex: o,
    },
    children: n,
  });
}
x1.displayName = "@mantine/core/ModalStack";
const Mu = Me((n, r) => {
  const i = be("ModalTitle", null, n),
    { classNames: o, className: s, style: c, styles: d, vars: m, ...h } = i,
    p = Rl();
  return R.jsx(f1, {
    ref: r,
    ...p.getStyles("title", {
      classNames: o,
      style: c,
      styles: d,
      className: s,
    }),
    ...h,
  });
});
Mu.classes = sa;
Mu.displayName = "@mantine/core/ModalTitle";
const uR = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: El("modal"),
    transitionProps: { duration: 200, transition: "fade-down" },
    withOverlay: !0,
    withCloseButton: !0,
  },
  En = Me((n, r) => {
    const {
        title: i,
        withOverlay: o,
        overlayProps: s,
        withCloseButton: c,
        closeButtonProps: d,
        children: m,
        radius: h,
        opened: p,
        stackId: y,
        zIndex: g,
        ...b
      } = be("Modal", uR, n),
      S = sR(),
      C = !!i || c,
      x =
        S && y
          ? {
              closeOnEscape: S.currentId === y,
              trapFocus: S.currentId === y,
              zIndex: S.getZIndex(y),
            }
          : {},
      E = o === !1 ? !1 : y && S ? S.currentId === y : p;
    return (
      T.useEffect(() => {
        S && y && (p ? S.addModal(y, g || El("modal")) : S.removeModal(y));
      }, [p, y, g]),
      R.jsxs(Au, {
        ref: r,
        radius: h,
        opened: p,
        zIndex: S && y ? S.getZIndex(y) : g,
        ...b,
        ...x,
        children: [
          o &&
            R.jsx(_u, {
              visible: E,
              transitionProps: S && y ? { duration: 0 } : void 0,
              ...s,
            }),
          R.jsxs(wu, {
            radius: h,
            __hidden: S && y && p ? y !== S.currentId : !1,
            children: [
              C &&
                R.jsxs(Ru, {
                  children: [
                    i && R.jsx(Mu, { children: i }),
                    c && R.jsx(Tu, { ...d }),
                  ],
                }),
              R.jsx(Cu, { children: m }),
            ],
          }),
        ],
      })
    );
  });
En.classes = sa;
En.displayName = "@mantine/core/Modal";
En.Root = Au;
En.Overlay = _u;
En.Content = wu;
En.Body = Cu;
En.Header = Ru;
En.Title = Mu;
En.CloseButton = Tu;
En.Stack = x1;
const cR = ({ reveal: n }) =>
  R.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "var(--psi-icon-size)", height: "var(--psi-icon-size)" },
    children: R.jsx("path", {
      d: n
        ? "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z"
        : "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
var Gd = {
  root: "m_f61ca620",
  input: "m_ccf8da4c",
  innerInput: "m_f2d85dd2",
  visibilityToggle: "m_b1072d44",
};
const fR = { visibilityToggleIcon: cR },
  dR = (n, { size: r }) => ({
    root: {
      "--psi-icon-size": Ze(r, "psi-icon-size"),
      "--psi-button-size": Ze(r, "psi-button-size"),
    },
  }),
  Bi = Me((n, r) => {
    const i = be("PasswordInput", fR, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        required: p,
        error: y,
        leftSection: g,
        disabled: b,
        id: S,
        variant: C,
        inputContainer: x,
        description: E,
        label: _,
        size: N,
        errorProps: w,
        descriptionProps: z,
        labelProps: M,
        withAsterisk: j,
        inputWrapperOrder: O,
        wrapperProps: B,
        radius: D,
        rightSection: H,
        rightSectionWidth: L,
        rightSectionPointerEvents: q,
        leftSectionWidth: Y,
        visible: G,
        defaultVisible: ne,
        onVisibilityChange: Q,
        visibilityToggleIcon: K,
        visibilityToggleButtonProps: F,
        rightSectionProps: W,
        leftSectionProps: se,
        leftSectionPointerEvents: U,
        withErrorStyles: X,
        mod: le,
        attributes: ee,
        ...ue
      } = i,
      ce = ro(S),
      [oe, he] = gb({
        value: G,
        defaultValue: ne,
        finalValue: !1,
        onChange: Q,
      }),
      de = () => he(!oe),
      ge = De({
        name: "PasswordInput",
        classes: Gd,
        props: i,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: ee,
        vars: h,
        varsResolver: dR,
      }),
      { resolvedClassNames: xe, resolvedStyles: fe } = Rb({
        classNames: o,
        styles: d,
        props: i,
      }),
      { styleProps: Ce, rest: Re } = pu(ue),
      Oe = w?.id || `${ce}-error`,
      qe = z?.id || `${ce}-description`,
      ot = `${!!y && typeof y != "boolean" ? Oe : ""} ${!!E ? qe : ""}`,
      ut = ot.trim().length > 0 ? ot.trim() : void 0,
      _t = R.jsx(jn, {
        ...ge("visibilityToggle"),
        disabled: b,
        radius: D,
        "aria-hidden": !F,
        "aria-pressed": oe,
        tabIndex: -1,
        ...F,
        variant: F?.variant ?? "subtle",
        color: "gray",
        unstyled: m,
        onTouchEnd: (Et) => {
          (Et.preventDefault(), F?.onTouchEnd?.(Et), de());
        },
        onMouseDown: (Et) => {
          (Et.preventDefault(), F?.onMouseDown?.(Et), de());
        },
        onKeyDown: (Et) => {
          (F?.onKeyDown?.(Et), Et.key === " " && (Et.preventDefault(), de()));
        },
        children: R.jsx(K, { reveal: oe }),
      });
    return R.jsx(Bt.Wrapper, {
      required: p,
      id: ce,
      label: _,
      error: y,
      description: E,
      size: N,
      classNames: xe,
      styles: fe,
      __staticSelector: "PasswordInput",
      unstyled: m,
      withAsterisk: j,
      inputWrapperOrder: O,
      inputContainer: x,
      variant: C,
      labelProps: { ...M, htmlFor: ce },
      descriptionProps: { ...z, id: qe },
      errorProps: { ...w, id: Oe },
      mod: le,
      attributes: ee,
      ...ge("root"),
      ...Ce,
      ...B,
      children: R.jsx(Bt, {
        component: "div",
        error: y,
        leftSection: g,
        size: N,
        classNames: { ...xe, input: Lt(Gd.input, xe.input) },
        styles: fe,
        radius: D,
        disabled: b,
        __staticSelector: "PasswordInput",
        rightSectionWidth: L,
        rightSection: H ?? _t,
        variant: C,
        unstyled: m,
        leftSectionWidth: Y,
        rightSectionPointerEvents: q || "all",
        rightSectionProps: W,
        leftSectionProps: se,
        leftSectionPointerEvents: U,
        withAria: !1,
        withErrorStyles: X,
        attributes: ee,
        children: R.jsx("input", {
          required: p,
          "data-invalid": !!y || void 0,
          "data-with-left-section": !!g || void 0,
          ...ge("innerInput"),
          disabled: b,
          id: ce,
          ref: r,
          ...Re,
          "aria-describedby": ut,
          autoComplete: Re.autoComplete || "off",
          type: oe ? "text" : "password",
        }),
      }),
    });
  });
Bi.classes = { ...so.classes, ...Gd };
Bi.displayName = "@mantine/core/PasswordInput";
var E1 = { root: "m_6d731127" };
const mR = { gap: "md", align: "stretch", justify: "flex-start" },
  hR = (n, { gap: r, align: i, justify: o }) => ({
    root: { "--stack-gap": no(r), "--stack-align": i, "--stack-justify": o },
  }),
  on = Me((n, r) => {
    const i = be("Stack", mR, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        vars: h,
        align: p,
        justify: y,
        gap: g,
        variant: b,
        attributes: S,
        ...C
      } = i,
      x = De({
        name: "Stack",
        props: i,
        classes: E1,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: S,
        vars: h,
        varsResolver: hR,
      });
    return R.jsx(ye, { ref: r, ...x("root"), variant: b, ...C });
  });
on.classes = E1;
on.displayName = "@mantine/core/Stack";
const [pR, Ym] = to("Tabs component was not found in the tree");
var uo = {
  root: "m_89d60db1",
  "list--default": "m_576c9d4",
  list: "m_89d33d6d",
  tab: "m_4ec4dce6",
  panel: "m_b0c91715",
  tabSection: "m_fc420b1f",
  tabLabel: "m_42bbd1ae",
  "tab--default": "m_539e827b",
  "list--outline": "m_6772fbd5",
  "tab--outline": "m_b59ab47c",
  "tab--pills": "m_c3381914",
};
const Vm = Me((n, r) => {
  const i = be("TabsList", null, n),
    {
      children: o,
      className: s,
      grow: c,
      justify: d,
      classNames: m,
      styles: h,
      style: p,
      mod: y,
      ...g
    } = i,
    b = Ym();
  return R.jsx(ye, {
    ...g,
    ...b.getStyles("list", {
      className: s,
      style: p,
      classNames: m,
      styles: h,
      props: i,
      variant: b.variant,
    }),
    ref: r,
    role: "tablist",
    variant: b.variant,
    mod: [
      {
        grow: c,
        orientation: b.orientation,
        placement: b.orientation === "vertical" && b.placement,
        inverted: b.inverted,
      },
      y,
    ],
    "aria-orientation": b.orientation,
    __vars: { "--tabs-justify": d },
    children: o,
  });
});
Vm.classes = uo;
Vm.displayName = "@mantine/core/TabsList";
const Gm = Me((n, r) => {
  const i = be("TabsPanel", null, n),
    {
      children: o,
      className: s,
      value: c,
      classNames: d,
      styles: m,
      style: h,
      mod: p,
      keepMounted: y,
      ...g
    } = i,
    b = Ym(),
    S = b.value === c,
    C = b.keepMounted || y || S ? o : null;
  return R.jsx(ye, {
    ...b.getStyles("panel", {
      className: s,
      classNames: d,
      styles: m,
      style: [h, S ? void 0 : { display: "none" }],
      props: i,
    }),
    ref: r,
    mod: [{ orientation: b.orientation }, p],
    role: "tabpanel",
    id: b.getPanelId(c),
    "aria-labelledby": b.getTabId(c),
    ...g,
    children: C,
  });
});
Gm.classes = uo;
Gm.displayName = "@mantine/core/TabsPanel";
const Xm = Me((n, r) => {
  const i = be("TabsTab", null, n),
    {
      className: o,
      children: s,
      rightSection: c,
      leftSection: d,
      value: m,
      onClick: h,
      onKeyDown: p,
      disabled: y,
      color: g,
      style: b,
      classNames: S,
      styles: C,
      vars: x,
      mod: E,
      tabIndex: _,
      ...N
    } = i,
    w = ia(),
    { dir: z } = zb(),
    M = Ym(),
    j = m === M.value,
    O = (D) => {
      (M.onChange(M.allowTabDeactivation && m === M.value ? null : m), h?.(D));
    },
    B = { classNames: S, styles: C, props: i };
  return R.jsxs(Cl, {
    ...M.getStyles("tab", { className: o, style: b, variant: M.variant, ...B }),
    disabled: y,
    unstyled: M.unstyled,
    variant: M.variant,
    mod: [
      {
        active: j,
        disabled: y,
        orientation: M.orientation,
        inverted: M.inverted,
        placement: M.orientation === "vertical" && M.placement,
      },
      E,
    ],
    ref: r,
    role: "tab",
    id: M.getTabId(m),
    "aria-selected": j,
    tabIndex: _ !== void 0 ? _ : j || M.value === null ? 0 : -1,
    "aria-controls": M.getPanelId(m),
    onClick: O,
    __vars: { "--tabs-color": g ? La(g, w) : void 0 },
    onKeyDown: sT({
      siblingSelector: '[role="tab"]',
      parentSelector: '[role="tablist"]',
      activateOnFocus: M.activateTabWithKeyboard,
      loop: M.loop,
      orientation: M.orientation || "horizontal",
      dir: z,
      onKeyDown: p,
    }),
    ...N,
    children: [
      d &&
        R.jsx("span", {
          ...M.getStyles("tabSection", B),
          "data-position": "left",
          children: d,
        }),
      s && R.jsx("span", { ...M.getStyles("tabLabel", B), children: s }),
      c &&
        R.jsx("span", {
          ...M.getStyles("tabSection", B),
          "data-position": "right",
          children: c,
        }),
    ],
  });
});
Xm.classes = uo;
Xm.displayName = "@mantine/core/TabsTab";
const Pv =
    "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",
  yR = {
    keepMounted: !0,
    orientation: "horizontal",
    loop: !0,
    activateTabWithKeyboard: !0,
    variant: "default",
    placement: "left",
  },
  gR = (n, { radius: r, color: i, autoContrast: o }) => ({
    root: {
      "--tabs-radius": $t(r),
      "--tabs-color": La(i, n),
      "--tabs-text-color": h3(o, n)
        ? Cb({ color: i, theme: n, autoContrast: o })
        : void 0,
    },
  }),
  Rt = Me((n, r) => {
    const i = be("Tabs", yR, n),
      {
        defaultValue: o,
        value: s,
        onChange: c,
        orientation: d,
        children: m,
        loop: h,
        id: p,
        activateTabWithKeyboard: y,
        allowTabDeactivation: g,
        variant: b,
        color: S,
        radius: C,
        inverted: x,
        placement: E,
        keepMounted: _,
        classNames: N,
        styles: w,
        unstyled: z,
        className: M,
        style: j,
        vars: O,
        autoContrast: B,
        mod: D,
        attributes: H,
        ...L
      } = i,
      q = ro(p),
      [Y, G] = gb({ value: s, defaultValue: o, finalValue: null, onChange: c }),
      ne = De({
        name: "Tabs",
        props: i,
        classes: uo,
        className: M,
        style: j,
        classNames: N,
        styles: w,
        unstyled: z,
        attributes: H,
        vars: O,
        varsResolver: gR,
      });
    return R.jsx(pR, {
      value: {
        placement: E,
        value: Y,
        orientation: d,
        id: q,
        loop: h,
        activateTabWithKeyboard: y,
        getTabId: Dv(`${q}-tab`, Pv),
        getPanelId: Dv(`${q}-panel`, Pv),
        onChange: G,
        allowTabDeactivation: g,
        variant: b,
        color: S,
        radius: C,
        inverted: x,
        keepMounted: _,
        unstyled: z,
        getStyles: ne,
      },
      children: R.jsx(ye, {
        ref: r,
        id: q,
        variant: b,
        mod: [
          {
            orientation: d,
            inverted: d === "horizontal" && x,
            placement: d === "vertical" && E,
          },
          D,
        ],
        ...ne("root"),
        ...L,
        children: m,
      }),
    });
  });
Rt.classes = uo;
Rt.displayName = "@mantine/core/Tabs";
Rt.Tab = Xm;
Rt.Panel = Gm;
Rt.List = Vm;
const cr = Me((n, r) => {
  const i = be("TextInput", null, n);
  return R.jsx(so, {
    component: "input",
    ref: r,
    ...i,
    __staticSelector: "TextInput",
  });
});
cr.classes = so.classes;
cr.displayName = "@mantine/core/TextInput";
const vR = ["h1", "h2", "h3", "h4", "h5", "h6"],
  bR = ["xs", "sm", "md", "lg", "xl"];
function SR(n, r) {
  const i = r !== void 0 ? r : `h${n}`;
  return vR.includes(i)
    ? {
        fontSize: `var(--mantine-${i}-font-size)`,
        fontWeight: `var(--mantine-${i}-font-weight)`,
        lineHeight: `var(--mantine-${i}-line-height)`,
      }
    : bR.includes(i)
      ? {
          fontSize: `var(--mantine-font-size-${i})`,
          fontWeight: `var(--mantine-h${n}-font-weight)`,
          lineHeight: `var(--mantine-h${n}-line-height)`,
        }
      : {
          fontSize: ie(i),
          fontWeight: `var(--mantine-h${n}-font-weight)`,
          lineHeight: `var(--mantine-h${n}-line-height)`,
        };
}
var C1 = { root: "m_8a5d1357" };
const xR = { order: 1 },
  ER = (n, { order: r, size: i, lineClamp: o, textWrap: s }) => {
    const c = SR(r || 1, i);
    return {
      root: {
        "--title-fw": c.fontWeight,
        "--title-lh": c.lineHeight,
        "--title-fz": c.fontSize,
        "--title-line-clamp": typeof o == "number" ? o.toString() : void 0,
        "--title-text-wrap": s,
      },
    };
  },
  Da = Me((n, r) => {
    const i = be("Title", xR, n),
      {
        classNames: o,
        className: s,
        style: c,
        styles: d,
        unstyled: m,
        order: h,
        vars: p,
        size: y,
        variant: g,
        lineClamp: b,
        textWrap: S,
        mod: C,
        attributes: x,
        ...E
      } = i,
      _ = De({
        name: "Title",
        props: i,
        classes: C1,
        className: s,
        style: c,
        classNames: o,
        styles: d,
        unstyled: m,
        attributes: x,
        vars: p,
        varsResolver: ER,
      });
    return [1, 2, 3, 4, 5, 6].includes(h)
      ? R.jsx(ye, {
          ..._("root"),
          component: `h${h}`,
          variant: g,
          ref: r,
          mod: [{ order: h, "data-line-clamp": typeof b == "number" }, C],
          size: y,
          ...E,
        })
      : null;
  });
Da.classes = C1;
Da.displayName = "@mantine/core/Title";
function vt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var CR = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Iv = CR,
  xd = () => Math.random().toString(36).substring(7).split("").join("."),
  TR = {
    INIT: `@@redux/INIT${xd()}`,
    REPLACE: `@@redux/REPLACE${xd()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${xd()}`,
  },
  eu = TR;
function Ba(n) {
  if (typeof n != "object" || n === null) return !1;
  let r = n;
  for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(n) === r || Object.getPrototypeOf(n) === null;
}
function T1(n, r, i) {
  if (typeof n != "function") throw new Error(vt(2));
  if (
    (typeof r == "function" && typeof i == "function") ||
    (typeof i == "function" && typeof arguments[3] == "function")
  )
    throw new Error(vt(0));
  if (
    (typeof r == "function" && typeof i > "u" && ((i = r), (r = void 0)),
    typeof i < "u")
  ) {
    if (typeof i != "function") throw new Error(vt(1));
    return i(T1)(n, r);
  }
  let o = n,
    s = r,
    c = new Map(),
    d = c,
    m = 0,
    h = !1;
  function p() {
    d === c &&
      ((d = new Map()),
      c.forEach((E, _) => {
        d.set(_, E);
      }));
  }
  function y() {
    if (h) throw new Error(vt(3));
    return s;
  }
  function g(E) {
    if (typeof E != "function") throw new Error(vt(4));
    if (h) throw new Error(vt(5));
    let _ = !0;
    p();
    const N = m++;
    return (
      d.set(N, E),
      function () {
        if (_) {
          if (h) throw new Error(vt(6));
          ((_ = !1), p(), d.delete(N), (c = null));
        }
      }
    );
  }
  function b(E) {
    if (!Ba(E)) throw new Error(vt(7));
    if (typeof E.type > "u") throw new Error(vt(8));
    if (typeof E.type != "string") throw new Error(vt(17));
    if (h) throw new Error(vt(9));
    try {
      ((h = !0), (s = o(s, E)));
    } finally {
      h = !1;
    }
    return (
      (c = d).forEach((N) => {
        N();
      }),
      E
    );
  }
  function S(E) {
    if (typeof E != "function") throw new Error(vt(10));
    ((o = E), b({ type: eu.REPLACE }));
  }
  function C() {
    const E = g;
    return {
      subscribe(_) {
        if (typeof _ != "object" || _ === null) throw new Error(vt(11));
        function N() {
          const z = _;
          z.next && z.next(y());
        }
        return (N(), { unsubscribe: E(N) });
      },
      [Iv]() {
        return this;
      },
    };
  }
  return (
    b({ type: eu.INIT }),
    { dispatch: b, subscribe: g, getState: y, replaceReducer: S, [Iv]: C }
  );
}
function wR(n) {
  Object.keys(n).forEach((r) => {
    const i = n[r];
    if (typeof i(void 0, { type: eu.INIT }) > "u") throw new Error(vt(12));
    if (typeof i(void 0, { type: eu.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(vt(13));
  });
}
function w1(n) {
  const r = Object.keys(n),
    i = {};
  for (let c = 0; c < r.length; c++) {
    const d = r[c];
    typeof n[d] == "function" && (i[d] = n[d]);
  }
  const o = Object.keys(i);
  let s;
  try {
    wR(i);
  } catch (c) {
    s = c;
  }
  return function (d = {}, m) {
    if (s) throw s;
    let h = !1;
    const p = {};
    for (let y = 0; y < o.length; y++) {
      const g = o[y],
        b = i[g],
        S = d[g],
        C = b(S, m);
      if (typeof C > "u") throw (m && m.type, new Error(vt(14)));
      ((p[g] = C), (h = h || C !== S));
    }
    return ((h = h || o.length !== Object.keys(d).length), h ? p : d);
  };
}
function tu(...n) {
  return n.length === 0
    ? (r) => r
    : n.length === 1
      ? n[0]
      : n.reduce(
          (r, i) =>
            (...o) =>
              r(i(...o)),
        );
}
function RR(...n) {
  return (r) => (i, o) => {
    const s = r(i, o);
    let c = () => {
      throw new Error(vt(15));
    };
    const d = { getState: s.getState, dispatch: (h, ...p) => c(h, ...p) },
      m = n.map((h) => h(d));
    return ((c = tu(...m)(s.dispatch)), { ...s, dispatch: c });
  };
}
function R1(n) {
  return Ba(n) && "type" in n && typeof n.type == "string";
}
var Zm = Symbol.for("immer-nothing"),
  Hi = Symbol.for("immer-draftable"),
  Ht = Symbol.for("immer-state");
function bt(n, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var gl = Object.getPrototypeOf;
function vn(n) {
  return !!n && !!n[Ht];
}
function bn(n) {
  return n
    ? _1(n) ||
        Array.isArray(n) ||
        !!n[Hi] ||
        !!n.constructor?.[Hi] ||
        _l(n) ||
        co(n)
    : !1;
}
var _R = Object.prototype.constructor.toString(),
  Kv = new WeakMap();
function _1(n) {
  if (!n || typeof n != "object") return !1;
  const r = Object.getPrototypeOf(n);
  if (r === null || r === Object.prototype) return !0;
  const i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  if (i === Object) return !0;
  if (typeof i != "function") return !1;
  let o = Kv.get(i);
  return (
    o === void 0 && ((o = Function.toString.call(i)), Kv.set(i, o)),
    o === _R
  );
}
function AR(n) {
  return (vn(n) || bt(15, n), n[Ht].base_);
}
function Vi(n, r, i = !0) {
  dr(n) === 0
    ? (i ? Reflect.ownKeys(n) : Object.keys(n)).forEach((s) => {
        r(s, n[s], n);
      })
    : n.forEach((o, s) => r(s, o, n));
}
function dr(n) {
  const r = n[Ht];
  return r ? r.type_ : Array.isArray(n) ? 1 : _l(n) ? 2 : co(n) ? 3 : 0;
}
function Gi(n, r) {
  return dr(n) === 2 ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function Ed(n, r) {
  return dr(n) === 2 ? n.get(r) : n[r];
}
function A1(n, r, i) {
  const o = dr(n);
  o === 2 ? n.set(r, i) : o === 3 ? n.add(i) : (n[r] = i);
}
function MR(n, r) {
  return n === r ? n !== 0 || 1 / n === 1 / r : n !== n && r !== r;
}
function _l(n) {
  return n instanceof Map;
}
function co(n) {
  return n instanceof Set;
}
function sr(n) {
  return n.copy_ || n.base_;
}
function Xd(n, r) {
  if (_l(n)) return new Map(n);
  if (co(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const i = _1(n);
  if (r === !0 || (r === "class_only" && !i)) {
    const o = Object.getOwnPropertyDescriptors(n);
    delete o[Ht];
    let s = Reflect.ownKeys(o);
    for (let c = 0; c < s.length; c++) {
      const d = s[c],
        m = o[d];
      (m.writable === !1 && ((m.writable = !0), (m.configurable = !0)),
        (m.get || m.set) &&
          (o[d] = {
            configurable: !0,
            writable: !0,
            enumerable: m.enumerable,
            value: n[d],
          }));
    }
    return Object.create(gl(n), o);
  } else {
    const o = gl(n);
    if (o !== null && i) return { ...n };
    const s = Object.create(o);
    return Object.assign(s, n);
  }
}
function Pm(n, r = !1) {
  return (
    Nu(n) ||
      vn(n) ||
      !bn(n) ||
      (dr(n) > 1 &&
        Object.defineProperties(n, { set: $s, add: $s, clear: $s, delete: $s }),
      Object.freeze(n),
      r && Object.values(n).forEach((i) => Pm(i, !0))),
    n
  );
}
function NR() {
  bt(2);
}
var $s = { value: NR };
function Nu(n) {
  return n === null || typeof n != "object" ? !0 : Object.isFrozen(n);
}
var Zd = {};
function mr(n) {
  const r = Zd[n];
  return (r || bt(0, n), r);
}
function zR(n, r) {
  Zd[n] || (Zd[n] = r);
}
var Xi;
function M1() {
  return Xi;
}
function OR(n, r) {
  return {
    drafts_: [],
    parent_: n,
    immer_: r,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Fv(n, r) {
  r &&
    (mr("Patches"),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = r));
}
function Pd(n) {
  (Id(n), n.drafts_.forEach(jR), (n.drafts_ = null));
}
function Id(n) {
  n === Xi && (Xi = n.parent_);
}
function Jv(n) {
  return (Xi = OR(Xi, n));
}
function jR(n) {
  const r = n[Ht];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function Wv(n, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const i = r.drafts_[0];
  return (
    n !== void 0 && n !== i
      ? (i[Ht].modified_ && (Pd(r), bt(4)),
        bn(n) && ((n = nu(r, n)), r.parent_ || au(r, n)),
        r.patches_ &&
          mr("Patches").generateReplacementPatches_(
            i[Ht].base_,
            n,
            r.patches_,
            r.inversePatches_,
          ))
      : (n = nu(r, i, [])),
    Pd(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    n !== Zm ? n : void 0
  );
}
function nu(n, r, i) {
  if (Nu(r)) return r;
  const o = n.immer_.shouldUseStrictIteration(),
    s = r[Ht];
  if (!s) return (Vi(r, (c, d) => e0(n, s, r, c, d, i), o), r);
  if (s.scope_ !== n) return r;
  if (!s.modified_) return (au(n, s.base_, !0), s.base_);
  if (!s.finalized_) {
    ((s.finalized_ = !0), s.scope_.unfinalizedDrafts_--);
    const c = s.copy_;
    let d = c,
      m = !1;
    (s.type_ === 3 && ((d = new Set(c)), c.clear(), (m = !0)),
      Vi(d, (h, p) => e0(n, s, c, h, p, i, m), o),
      au(n, c, !1),
      i &&
        n.patches_ &&
        mr("Patches").generatePatches_(s, i, n.patches_, n.inversePatches_));
  }
  return s.copy_;
}
function e0(n, r, i, o, s, c, d) {
  if (s == null || (typeof s != "object" && !d)) return;
  const m = Nu(s);
  if (!(m && !d)) {
    if (vn(s)) {
      const h =
          c && r && r.type_ !== 3 && !Gi(r.assigned_, o) ? c.concat(o) : void 0,
        p = nu(n, s, h);
      if ((A1(i, o, p), vn(p))) n.canAutoFreeze_ = !1;
      else return;
    } else d && i.add(s);
    if (bn(s) && !m) {
      if (
        (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) ||
        (r && r.base_ && r.base_[o] === s && m)
      )
        return;
      (nu(n, s),
        (!r || !r.scope_.parent_) &&
          typeof o != "symbol" &&
          (_l(i)
            ? i.has(o)
            : Object.prototype.propertyIsEnumerable.call(i, o)) &&
          au(n, s));
    }
  }
}
function au(n, r, i = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && Pm(r, i);
}
function DR(n, r) {
  const i = Array.isArray(n),
    o = {
      type_: i ? 1 : 0,
      scope_: r ? r.scope_ : M1(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let s = o,
    c = Im;
  i && ((s = [o]), (c = Zi));
  const { revoke: d, proxy: m } = Proxy.revocable(s, c);
  return ((o.draft_ = m), (o.revoke_ = d), m);
}
var Im = {
    get(n, r) {
      if (r === Ht) return n;
      const i = sr(n);
      if (!Gi(i, r)) return UR(n, i, r);
      const o = i[r];
      return n.finalized_ || !bn(o)
        ? o
        : o === Cd(n.base_, r)
          ? (Td(n), (n.copy_[r] = Fd(o, n)))
          : o;
    },
    has(n, r) {
      return r in sr(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(sr(n));
    },
    set(n, r, i) {
      const o = N1(sr(n), r);
      if (o?.set) return (o.set.call(n.draft_, i), !0);
      if (!n.modified_) {
        const s = Cd(sr(n), r),
          c = s?.[Ht];
        if (c && c.base_ === i)
          return ((n.copy_[r] = i), (n.assigned_[r] = !1), !0);
        if (MR(i, s) && (i !== void 0 || Gi(n.base_, r))) return !0;
        (Td(n), Kd(n));
      }
      return (
        (n.copy_[r] === i && (i !== void 0 || r in n.copy_)) ||
          (Number.isNaN(i) && Number.isNaN(n.copy_[r])) ||
          ((n.copy_[r] = i), (n.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(n, r) {
      return (
        Cd(n.base_, r) !== void 0 || r in n.base_
          ? ((n.assigned_[r] = !1), Td(n), Kd(n))
          : delete n.assigned_[r],
        n.copy_ && delete n.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(n, r) {
      const i = sr(n),
        o = Reflect.getOwnPropertyDescriptor(i, r);
      return (
        o && {
          writable: !0,
          configurable: n.type_ !== 1 || r !== "length",
          enumerable: o.enumerable,
          value: i[r],
        }
      );
    },
    defineProperty() {
      bt(11);
    },
    getPrototypeOf(n) {
      return gl(n.base_);
    },
    setPrototypeOf() {
      bt(12);
    },
  },
  Zi = {};
Vi(Im, (n, r) => {
  Zi[n] = function () {
    return ((arguments[0] = arguments[0][0]), r.apply(this, arguments));
  };
});
Zi.deleteProperty = function (n, r) {
  return Zi.set.call(this, n, r, void 0);
};
Zi.set = function (n, r, i) {
  return Im.set.call(this, n[0], r, i, n[0]);
};
function Cd(n, r) {
  const i = n[Ht];
  return (i ? sr(i) : n)[r];
}
function UR(n, r, i) {
  const o = N1(r, i);
  return o ? ("value" in o ? o.value : o.get?.call(n.draft_)) : void 0;
}
function N1(n, r) {
  if (!(r in n)) return;
  let i = gl(n);
  for (; i; ) {
    const o = Object.getOwnPropertyDescriptor(i, r);
    if (o) return o;
    i = gl(i);
  }
}
function Kd(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && Kd(n.parent_));
}
function Td(n) {
  n.copy_ || (n.copy_ = Xd(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var LR = class {
  constructor(n) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !0),
      (this.produce = (r, i, o) => {
        if (typeof r == "function" && typeof i != "function") {
          const c = i;
          i = r;
          const d = this;
          return function (h = c, ...p) {
            return d.produce(h, (y) => i.call(this, y, ...p));
          };
        }
        (typeof i != "function" && bt(6),
          o !== void 0 && typeof o != "function" && bt(7));
        let s;
        if (bn(r)) {
          const c = Jv(this),
            d = Fd(r, void 0);
          let m = !0;
          try {
            ((s = i(d)), (m = !1));
          } finally {
            m ? Pd(c) : Id(c);
          }
          return (Fv(c, o), Wv(s, c));
        } else if (!r || typeof r != "object") {
          if (
            ((s = i(r)),
            s === void 0 && (s = r),
            s === Zm && (s = void 0),
            this.autoFreeze_ && Pm(s, !0),
            o)
          ) {
            const c = [],
              d = [];
            (mr("Patches").generateReplacementPatches_(r, s, c, d), o(c, d));
          }
          return s;
        } else bt(1, r);
      }),
      (this.produceWithPatches = (r, i) => {
        if (typeof r == "function")
          return (d, ...m) => this.produceWithPatches(d, (h) => r(h, ...m));
        let o, s;
        return [
          this.produce(r, i, (d, m) => {
            ((o = d), (s = m));
          }),
          o,
          s,
        ];
      }),
      typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze),
      typeof n?.useStrictShallowCopy == "boolean" &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy),
      typeof n?.useStrictIteration == "boolean" &&
        this.setUseStrictIteration(n.useStrictIteration));
  }
  createDraft(n) {
    (bn(n) || bt(8), vn(n) && (n = z1(n)));
    const r = Jv(this),
      i = Fd(n, void 0);
    return ((i[Ht].isManual_ = !0), Id(r), i);
  }
  finishDraft(n, r) {
    const i = n && n[Ht];
    (!i || !i.isManual_) && bt(9);
    const { scope_: o } = i;
    return (Fv(o, r), Wv(void 0, o));
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  setUseStrictIteration(n) {
    this.useStrictIteration_ = n;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(n, r) {
    let i;
    for (i = r.length - 1; i >= 0; i--) {
      const s = r[i];
      if (s.path.length === 0 && s.op === "replace") {
        n = s.value;
        break;
      }
    }
    i > -1 && (r = r.slice(i + 1));
    const o = mr("Patches").applyPatches_;
    return vn(n) ? o(n, r) : this.produce(n, (s) => o(s, r));
  }
};
function Fd(n, r) {
  const i = _l(n)
    ? mr("MapSet").proxyMap_(n, r)
    : co(n)
      ? mr("MapSet").proxySet_(n, r)
      : DR(n, r);
  return ((r ? r.scope_ : M1()).drafts_.push(i), i);
}
function z1(n) {
  return (vn(n) || bt(10, n), O1(n));
}
function O1(n) {
  if (!bn(n) || Nu(n)) return n;
  const r = n[Ht];
  let i,
    o = !0;
  if (r) {
    if (!r.modified_) return r.base_;
    ((r.finalized_ = !0),
      (i = Xd(n, r.scope_.immer_.useStrictShallowCopy_)),
      (o = r.scope_.immer_.shouldUseStrictIteration()));
  } else i = Xd(n, !0);
  return (
    Vi(
      i,
      (s, c) => {
        A1(i, s, O1(c));
      },
      o,
    ),
    r && (r.finalized_ = !1),
    i
  );
}
function BR() {
  const r = "replace",
    o = "remove";
  function s(b, S, C, x) {
    switch (b.type_) {
      case 0:
      case 2:
        return d(b, S, C, x);
      case 1:
        return c(b, S, C, x);
      case 3:
        return m(b, S, C, x);
    }
  }
  function c(b, S, C, x) {
    let { base_: E, assigned_: _ } = b,
      N = b.copy_;
    N.length < E.length && (([E, N] = [N, E]), ([C, x] = [x, C]));
    for (let w = 0; w < E.length; w++)
      if (_[w] && N[w] !== E[w]) {
        const z = S.concat([w]);
        (C.push({ op: r, path: z, value: g(N[w]) }),
          x.push({ op: r, path: z, value: g(E[w]) }));
      }
    for (let w = E.length; w < N.length; w++) {
      const z = S.concat([w]);
      C.push({ op: "add", path: z, value: g(N[w]) });
    }
    for (let w = N.length - 1; E.length <= w; --w) {
      const z = S.concat([w]);
      x.push({ op: o, path: z });
    }
  }
  function d(b, S, C, x) {
    const { base_: E, copy_: _ } = b;
    Vi(b.assigned_, (N, w) => {
      const z = Ed(E, N),
        M = Ed(_, N),
        j = w ? (Gi(E, N) ? r : "add") : o;
      if (z === M && j === r) return;
      const O = S.concat(N);
      (C.push(j === o ? { op: j, path: O } : { op: j, path: O, value: M }),
        x.push(
          j === "add"
            ? { op: o, path: O }
            : j === o
              ? { op: "add", path: O, value: g(z) }
              : { op: r, path: O, value: g(z) },
        ));
    });
  }
  function m(b, S, C, x) {
    let { base_: E, copy_: _ } = b,
      N = 0;
    (E.forEach((w) => {
      if (!_.has(w)) {
        const z = S.concat([N]);
        (C.push({ op: o, path: z, value: w }),
          x.unshift({ op: "add", path: z, value: w }));
      }
      N++;
    }),
      (N = 0),
      _.forEach((w) => {
        if (!E.has(w)) {
          const z = S.concat([N]);
          (C.push({ op: "add", path: z, value: w }),
            x.unshift({ op: o, path: z, value: w }));
        }
        N++;
      }));
  }
  function h(b, S, C, x) {
    (C.push({ op: r, path: [], value: S === Zm ? void 0 : S }),
      x.push({ op: r, path: [], value: b }));
  }
  function p(b, S) {
    return (
      S.forEach((C) => {
        const { path: x, op: E } = C;
        let _ = b;
        for (let M = 0; M < x.length - 1; M++) {
          const j = dr(_);
          let O = x[M];
          (typeof O != "string" && typeof O != "number" && (O = "" + O),
            (j === 0 || j === 1) &&
              (O === "__proto__" || O === "constructor") &&
              bt(19),
            typeof _ == "function" && O === "prototype" && bt(19),
            (_ = Ed(_, O)),
            typeof _ != "object" && bt(18, x.join("/")));
        }
        const N = dr(_),
          w = y(C.value),
          z = x[x.length - 1];
        switch (E) {
          case r:
            switch (N) {
              case 2:
                return _.set(z, w);
              case 3:
                bt(16);
              default:
                return (_[z] = w);
            }
          case "add":
            switch (N) {
              case 1:
                return z === "-" ? _.push(w) : _.splice(z, 0, w);
              case 2:
                return _.set(z, w);
              case 3:
                return _.add(w);
              default:
                return (_[z] = w);
            }
          case o:
            switch (N) {
              case 1:
                return _.splice(z, 1);
              case 2:
                return _.delete(z);
              case 3:
                return _.delete(C.value);
              default:
                return delete _[z];
            }
          default:
            bt(17, E);
        }
      }),
      b
    );
  }
  function y(b) {
    if (!bn(b)) return b;
    if (Array.isArray(b)) return b.map(y);
    if (_l(b))
      return new Map(Array.from(b.entries()).map(([C, x]) => [C, y(x)]));
    if (co(b)) return new Set(Array.from(b).map(y));
    const S = Object.create(gl(b));
    for (const C in b) S[C] = y(b[C]);
    return (Gi(b, Hi) && (S[Hi] = b[Hi]), S);
  }
  function g(b) {
    return vn(b) ? y(b) : b;
  }
  zR("Patches", {
    applyPatches_: p,
    generatePatches_: s,
    generateReplacementPatches_: h,
  });
}
var hr = new LR(),
  fo = hr.produce,
  j1 = hr.produceWithPatches.bind(hr),
  HR = hr.setUseStrictIteration.bind(hr),
  t0 = hr.applyPatches.bind(hr);
function $R(n, r = `expected a function, instead received ${typeof n}`) {
  if (typeof n != "function") throw new TypeError(r);
}
function qR(n, r = `expected an object, instead received ${typeof n}`) {
  if (typeof n != "object") throw new TypeError(r);
}
function QR(
  n,
  r = "expected all items to be functions, instead received the following types: ",
) {
  if (!n.every((i) => typeof i == "function")) {
    const i = n
      .map((o) =>
        typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o,
      )
      .join(", ");
    throw new TypeError(`${r}[${i}]`);
  }
}
var n0 = (n) => (Array.isArray(n) ? n : [n]);
function kR(n) {
  const r = Array.isArray(n[0]) ? n[0] : n;
  return (
    QR(
      r,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    r
  );
}
function YR(n, r) {
  const i = [],
    { length: o } = n;
  for (let s = 0; s < o; s++) i.push(n[s].apply(null, r));
  return i;
}
var VR = class {
    constructor(n) {
      this.value = n;
    }
    deref() {
      return this.value;
    }
  },
  GR = typeof WeakRef < "u" ? WeakRef : VR,
  XR = 0,
  a0 = 1;
function qs() {
  return { s: XR, v: void 0, o: null, p: null };
}
function ru(n, r = {}) {
  let i = qs();
  const { resultEqualityCheck: o } = r;
  let s,
    c = 0;
  function d() {
    let m = i;
    const { length: h } = arguments;
    for (let g = 0, b = h; g < b; g++) {
      const S = arguments[g];
      if (typeof S == "function" || (typeof S == "object" && S !== null)) {
        let C = m.o;
        C === null && (m.o = C = new WeakMap());
        const x = C.get(S);
        x === void 0 ? ((m = qs()), C.set(S, m)) : (m = x);
      } else {
        let C = m.p;
        C === null && (m.p = C = new Map());
        const x = C.get(S);
        x === void 0 ? ((m = qs()), C.set(S, m)) : (m = x);
      }
    }
    const p = m;
    let y;
    if (m.s === a0) y = m.v;
    else if (((y = n.apply(null, arguments)), c++, o)) {
      const g = s?.deref?.() ?? s;
      (g != null && o(g, y) && ((y = g), c !== 0 && c--),
        (s =
          (typeof y == "object" && y !== null) || typeof y == "function"
            ? new GR(y)
            : y));
    }
    return ((p.s = a0), (p.v = y), y);
  }
  return (
    (d.clearCache = () => {
      ((i = qs()), d.resetResultsCount());
    }),
    (d.resultsCount = () => c),
    (d.resetResultsCount = () => {
      c = 0;
    }),
    d
  );
}
function ZR(n, ...r) {
  const i = typeof n == "function" ? { memoize: n, memoizeOptions: r } : n,
    o = (...s) => {
      let c = 0,
        d = 0,
        m,
        h = {},
        p = s.pop();
      (typeof p == "object" && ((h = p), (p = s.pop())),
        $R(
          p,
          `createSelector expects an output function after the inputs, but received: [${typeof p}]`,
        ));
      const y = { ...i, ...h },
        {
          memoize: g,
          memoizeOptions: b = [],
          argsMemoize: S = ru,
          argsMemoizeOptions: C = [],
        } = y,
        x = n0(b),
        E = n0(C),
        _ = kR(s),
        N = g(
          function () {
            return (c++, p.apply(null, arguments));
          },
          ...x,
        ),
        w = S(
          function () {
            d++;
            const M = YR(_, arguments);
            return ((m = N.apply(null, M)), m);
          },
          ...E,
        );
      return Object.assign(w, {
        resultFunc: p,
        memoizedResultFunc: N,
        dependencies: _,
        dependencyRecomputations: () => d,
        resetDependencyRecomputations: () => {
          d = 0;
        },
        lastResult: () => m,
        recomputations: () => c,
        resetRecomputations: () => {
          c = 0;
        },
        memoize: g,
        argsMemoize: S,
      });
    };
  return (Object.assign(o, { withTypes: () => o }), o);
}
var Km = ZR(ru),
  PR = Object.assign(
    (n, r = Km) => {
      qR(
        n,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`,
      );
      const i = Object.keys(n),
        o = i.map((c) => n[c]);
      return r(o, (...c) => c.reduce((d, m, h) => ((d[i[h]] = m), d), {}));
    },
    { withTypes: () => PR },
  );
function D1(n) {
  return ({ dispatch: i, getState: o }) =>
    (s) =>
    (c) =>
      typeof c == "function" ? c(i, o, n) : s(c);
}
var IR = D1(),
  KR = D1,
  FR =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? tu
              : tu.apply(null, arguments);
        },
  JR = (n) => n && typeof n.match == "function";
function pn(n, r) {
  function i(...o) {
    if (r) {
      let s = r(...o);
      if (!s) throw new Error(yn(0));
      return {
        type: n,
        payload: s.payload,
        ...("meta" in s && { meta: s.meta }),
        ...("error" in s && { error: s.error }),
      };
    }
    return { type: n, payload: o[0] };
  }
  return (
    (i.toString = () => `${n}`),
    (i.type = n),
    (i.match = (o) => R1(o) && o.type === n),
    i
  );
}
var U1 = class Oi extends Array {
  constructor(...r) {
    (super(...r), Object.setPrototypeOf(this, Oi.prototype));
  }
  static get [Symbol.species]() {
    return Oi;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0])
      ? new Oi(...r[0].concat(this))
      : new Oi(...r.concat(this));
  }
};
function r0(n) {
  return bn(n) ? fo(n, () => {}) : n;
}
function Qs(n, r, i) {
  return n.has(r) ? n.get(r) : n.set(r, i(r)).get(r);
}
function WR(n) {
  return typeof n == "boolean";
}
var e_ = () =>
    function (r) {
      const {
        thunk: i = !0,
        immutableCheck: o = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: c = !0,
      } = r ?? {};
      let d = new U1();
      return (i && (WR(i) ? d.push(IR) : d.push(KR(i.extraArgument))), d);
    },
  zu = "RTK_autoBatch",
  Mi = () => (n) => ({ payload: n, meta: { [zu]: !0 } }),
  l0 = (n) => (r) => {
    setTimeout(r, n);
  },
  t_ =
    (n = { type: "raf" }) =>
    (r) =>
    (...i) => {
      const o = r(...i);
      let s = !0,
        c = !1,
        d = !1;
      const m = new Set(),
        h =
          n.type === "tick"
            ? queueMicrotask
            : n.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : l0(10)
              : n.type === "callback"
                ? n.queueNotification
                : l0(n.timeout),
        p = () => {
          ((d = !1), c && ((c = !1), m.forEach((y) => y())));
        };
      return Object.assign({}, o, {
        subscribe(y) {
          const g = () => s && y(),
            b = o.subscribe(g);
          return (
            m.add(y),
            () => {
              (b(), m.delete(y));
            }
          );
        },
        dispatch(y) {
          try {
            return (
              (s = !y?.meta?.[zu]),
              (c = !s),
              c && (d || ((d = !0), h(p))),
              o.dispatch(y)
            );
          } finally {
            s = !0;
          }
        },
      });
    },
  n_ = (n) =>
    function (i) {
      const { autoBatch: o = !0 } = i ?? {};
      let s = new U1(n);
      return (o && s.push(t_(typeof o == "object" ? o : void 0)), s);
    };
function a_(n) {
  const r = e_(),
    {
      reducer: i = void 0,
      middleware: o,
      devTools: s = !0,
      preloadedState: c = void 0,
      enhancers: d = void 0,
    } = n || {};
  let m;
  if (typeof i == "function") m = i;
  else if (Ba(i)) m = w1(i);
  else throw new Error(yn(1));
  let h;
  typeof o == "function" ? (h = o(r)) : (h = r());
  let p = tu;
  s && (p = FR({ trace: !1, ...(typeof s == "object" && s) }));
  const y = RR(...h),
    g = n_(y);
  let b = typeof d == "function" ? d(g) : g();
  const S = p(...b);
  return T1(m, c, S);
}
function L1(n) {
  const r = {},
    i = [];
  let o;
  const s = {
    addCase(c, d) {
      const m = typeof c == "string" ? c : c.type;
      if (!m) throw new Error(yn(28));
      if (m in r) throw new Error(yn(29));
      return ((r[m] = d), s);
    },
    addAsyncThunk(c, d) {
      return (
        d.pending && (r[c.pending.type] = d.pending),
        d.rejected && (r[c.rejected.type] = d.rejected),
        d.fulfilled && (r[c.fulfilled.type] = d.fulfilled),
        d.settled && i.push({ matcher: c.settled, reducer: d.settled }),
        s
      );
    },
    addMatcher(c, d) {
      return (i.push({ matcher: c, reducer: d }), s);
    },
    addDefaultCase(c) {
      return ((o = c), s);
    },
  };
  return (n(s), [r, i, o]);
}
HR(!1);
function r_(n) {
  return typeof n == "function";
}
function l_(n, r) {
  let [i, o, s] = L1(r),
    c;
  if (r_(n)) c = () => r0(n());
  else {
    const m = r0(n);
    c = () => m;
  }
  function d(m = c(), h) {
    let p = [
      i[h.type],
      ...o.filter(({ matcher: y }) => y(h)).map(({ reducer: y }) => y),
    ];
    return (
      p.filter((y) => !!y).length === 0 && (p = [s]),
      p.reduce((y, g) => {
        if (g)
          if (vn(y)) {
            const S = g(y, h);
            return S === void 0 ? y : S;
          } else {
            if (bn(y)) return fo(y, (b) => g(b, h));
            {
              const b = g(y, h);
              if (b === void 0) {
                if (y === null) return y;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return b;
            }
          }
        return y;
      }, m)
    );
  }
  return ((d.getInitialState = c), d);
}
var B1 = (n, r) => (JR(n) ? n.match(r) : n(r));
function aa(...n) {
  return (r) => n.some((i) => B1(i, r));
}
function $i(...n) {
  return (r) => n.every((i) => B1(i, r));
}
function Ou(n, r) {
  if (!n || !n.meta) return !1;
  const i = typeof n.meta.requestId == "string",
    o = r.indexOf(n.meta.requestStatus) > -1;
  return i && o;
}
function mo(n) {
  return (
    typeof n[0] == "function" &&
    "pending" in n[0] &&
    "fulfilled" in n[0] &&
    "rejected" in n[0]
  );
}
function Fm(...n) {
  return n.length === 0
    ? (r) => Ou(r, ["pending"])
    : mo(n)
      ? aa(...n.map((r) => r.pending))
      : Fm()(n[0]);
}
function vl(...n) {
  return n.length === 0
    ? (r) => Ou(r, ["rejected"])
    : mo(n)
      ? aa(...n.map((r) => r.rejected))
      : vl()(n[0]);
}
function ju(...n) {
  const r = (i) => i && i.meta && i.meta.rejectedWithValue;
  return n.length === 0
    ? $i(vl(...n), r)
    : mo(n)
      ? $i(vl(...n), r)
      : ju()(n[0]);
}
function Ha(...n) {
  return n.length === 0
    ? (r) => Ou(r, ["fulfilled"])
    : mo(n)
      ? aa(...n.map((r) => r.fulfilled))
      : Ha()(n[0]);
}
function Jd(...n) {
  return n.length === 0
    ? (r) => Ou(r, ["pending", "fulfilled", "rejected"])
    : mo(n)
      ? aa(...n.flatMap((r) => [r.pending, r.rejected, r.fulfilled]))
      : Jd()(n[0]);
}
var i_ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Jm = (n = 21) => {
    let r = "",
      i = n;
    for (; i--; ) r += i_[(Math.random() * 64) | 0];
    return r;
  },
  o_ = ["name", "message", "stack", "code"],
  wd = class {
    constructor(n, r) {
      ((this.payload = n), (this.meta = r));
    }
    _type;
  },
  i0 = class {
    constructor(n, r) {
      ((this.payload = n), (this.meta = r));
    }
    _type;
  },
  s_ = (n) => {
    if (typeof n == "object" && n !== null) {
      const r = {};
      for (const i of o_) typeof n[i] == "string" && (r[i] = n[i]);
      return r;
    }
    return { message: String(n) };
  },
  o0 = "External signal was aborted",
  s0 = (() => {
    function n(r, i, o) {
      const s = pn(r + "/fulfilled", (h, p, y, g) => ({
          payload: h,
          meta: {
            ...(g || {}),
            arg: y,
            requestId: p,
            requestStatus: "fulfilled",
          },
        })),
        c = pn(r + "/pending", (h, p, y) => ({
          payload: void 0,
          meta: {
            ...(y || {}),
            arg: p,
            requestId: h,
            requestStatus: "pending",
          },
        })),
        d = pn(r + "/rejected", (h, p, y, g, b) => ({
          payload: g,
          error: ((o && o.serializeError) || s_)(h || "Rejected"),
          meta: {
            ...(b || {}),
            arg: y,
            requestId: p,
            rejectedWithValue: !!g,
            requestStatus: "rejected",
            aborted: h?.name === "AbortError",
            condition: h?.name === "ConditionError",
          },
        }));
      function m(h, { signal: p } = {}) {
        return (y, g, b) => {
          const S = o?.idGenerator ? o.idGenerator(h) : Jm(),
            C = new AbortController();
          let x, E;
          function _(w) {
            ((E = w), C.abort());
          }
          p &&
            (p.aborted
              ? _(o0)
              : p.addEventListener("abort", () => _(o0), { once: !0 }));
          const N = (async function () {
            let w;
            try {
              let M = o?.condition?.(h, { getState: g, extra: b });
              if ((c_(M) && (M = await M), M === !1 || C.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const j = new Promise((O, B) => {
                ((x = () => {
                  B({ name: "AbortError", message: E || "Aborted" });
                }),
                  C.signal.addEventListener("abort", x));
              });
              (y(
                c(
                  S,
                  h,
                  o?.getPendingMeta?.(
                    { requestId: S, arg: h },
                    { getState: g, extra: b },
                  ),
                ),
              ),
                (w = await Promise.race([
                  j,
                  Promise.resolve(
                    i(h, {
                      dispatch: y,
                      getState: g,
                      extra: b,
                      requestId: S,
                      signal: C.signal,
                      abort: _,
                      rejectWithValue: (O, B) => new wd(O, B),
                      fulfillWithValue: (O, B) => new i0(O, B),
                    }),
                  ).then((O) => {
                    if (O instanceof wd) throw O;
                    return O instanceof i0
                      ? s(O.payload, S, h, O.meta)
                      : s(O, S, h);
                  }),
                ])));
            } catch (M) {
              w =
                M instanceof wd ? d(null, S, h, M.payload, M.meta) : d(M, S, h);
            } finally {
              x && C.signal.removeEventListener("abort", x);
            }
            return (
              (o &&
                !o.dispatchConditionRejection &&
                d.match(w) &&
                w.meta.condition) ||
                y(w),
              w
            );
          })();
          return Object.assign(N, {
            abort: _,
            requestId: S,
            arg: h,
            unwrap() {
              return N.then(u_);
            },
          });
        };
      }
      return Object.assign(m, {
        pending: c,
        rejected: d,
        fulfilled: s,
        settled: aa(d, s),
        typePrefix: r,
      });
    }
    return ((n.withTypes = () => n), n);
  })();
function u_(n) {
  if (n.meta && n.meta.rejectedWithValue) throw n.payload;
  if (n.error) throw n.error;
  return n.payload;
}
function c_(n) {
  return n !== null && typeof n == "object" && typeof n.then == "function";
}
var f_ = Symbol.for("rtk-slice-createasyncthunk");
function d_(n, r) {
  return `${n}/${r}`;
}
function m_({ creators: n } = {}) {
  const r = n?.asyncThunk?.[f_];
  return function (o) {
    const { name: s, reducerPath: c = s } = o;
    if (!s) throw new Error(yn(11));
    const d =
        (typeof o.reducers == "function" ? o.reducers(p_()) : o.reducers) || {},
      m = Object.keys(d),
      h = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      p = {
        addCase(w, z) {
          const M = typeof w == "string" ? w : w.type;
          if (!M) throw new Error(yn(12));
          if (M in h.sliceCaseReducersByType) throw new Error(yn(13));
          return ((h.sliceCaseReducersByType[M] = z), p);
        },
        addMatcher(w, z) {
          return (h.sliceMatchers.push({ matcher: w, reducer: z }), p);
        },
        exposeAction(w, z) {
          return ((h.actionCreators[w] = z), p);
        },
        exposeCaseReducer(w, z) {
          return ((h.sliceCaseReducersByName[w] = z), p);
        },
      };
    m.forEach((w) => {
      const z = d[w],
        M = {
          reducerName: w,
          type: d_(s, w),
          createNotation: typeof o.reducers == "function",
        };
      g_(z) ? b_(M, z, p, r) : y_(M, z, p);
    });
    function y() {
      const [w = {}, z = [], M = void 0] =
          typeof o.extraReducers == "function"
            ? L1(o.extraReducers)
            : [o.extraReducers],
        j = { ...w, ...h.sliceCaseReducersByType };
      return l_(o.initialState, (O) => {
        for (let B in j) O.addCase(B, j[B]);
        for (let B of h.sliceMatchers) O.addMatcher(B.matcher, B.reducer);
        for (let B of z) O.addMatcher(B.matcher, B.reducer);
        M && O.addDefaultCase(M);
      });
    }
    const g = (w) => w,
      b = new Map(),
      S = new WeakMap();
    let C;
    function x(w, z) {
      return (C || (C = y()), C(w, z));
    }
    function E() {
      return (C || (C = y()), C.getInitialState());
    }
    function _(w, z = !1) {
      function M(O) {
        let B = O[w];
        return (typeof B > "u" && z && (B = Qs(S, M, E)), B);
      }
      function j(O = g) {
        const B = Qs(b, z, () => new WeakMap());
        return Qs(B, O, () => {
          const D = {};
          for (const [H, L] of Object.entries(o.selectors ?? {}))
            D[H] = h_(L, O, () => Qs(S, O, E), z);
          return D;
        });
      }
      return {
        reducerPath: w,
        getSelectors: j,
        get selectors() {
          return j(M);
        },
        selectSlice: M,
      };
    }
    const N = {
      name: s,
      reducer: x,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: E,
      ..._(c),
      injectInto(w, { reducerPath: z, ...M } = {}) {
        const j = z ?? c;
        return (
          w.inject({ reducerPath: j, reducer: x }, M),
          { ...N, ..._(j, !0) }
        );
      },
    };
    return N;
  };
}
function h_(n, r, i, o) {
  function s(c, ...d) {
    let m = r(c);
    return (typeof m > "u" && o && (m = i()), n(m, ...d));
  }
  return ((s.unwrapped = n), s);
}
var ml = m_();
function p_() {
  function n(r, i) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: r, ...i };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(r) {
        return Object.assign(
          {
            [r.name](...i) {
              return r(...i);
            },
          }[r.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(r, i) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: r,
          reducer: i,
        };
      },
      asyncThunk: n,
    }
  );
}
function y_({ type: n, reducerName: r, createNotation: i }, o, s) {
  let c, d;
  if ("reducer" in o) {
    if (i && !v_(o)) throw new Error(yn(17));
    ((c = o.reducer), (d = o.prepare));
  } else c = o;
  s.addCase(n, c)
    .exposeCaseReducer(r, c)
    .exposeAction(r, d ? pn(n, d) : pn(n));
}
function g_(n) {
  return n._reducerDefinitionType === "asyncThunk";
}
function v_(n) {
  return n._reducerDefinitionType === "reducerWithPrepare";
}
function b_({ type: n, reducerName: r }, i, o, s) {
  if (!s) throw new Error(yn(18));
  const {
      payloadCreator: c,
      fulfilled: d,
      pending: m,
      rejected: h,
      settled: p,
      options: y,
    } = i,
    g = s(n, c, y);
  (o.exposeAction(r, g),
    d && o.addCase(g.fulfilled, d),
    m && o.addCase(g.pending, m),
    h && o.addCase(g.rejected, h),
    p && o.addMatcher(g.settled, p),
    o.exposeCaseReducer(r, {
      fulfilled: d || ks,
      pending: m || ks,
      rejected: h || ks,
      settled: p || ks,
    }));
}
function ks() {}
function yn(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var S_ = class extends Error {
    issues;
    constructor(n) {
      (super(n[0].message), (this.name = "SchemaError"), (this.issues = n));
    }
  },
  H1 = ((n) => (
    (n.uninitialized = "uninitialized"),
    (n.pending = "pending"),
    (n.fulfilled = "fulfilled"),
    (n.rejected = "rejected"),
    n
  ))(H1 || {}),
  ra = "uninitialized",
  Wd = "pending",
  ji = "fulfilled",
  Di = "rejected";
function u0(n) {
  return {
    status: n,
    isUninitialized: n === ra,
    isLoading: n === Wd,
    isSuccess: n === ji,
    isError: n === Di,
  };
}
var c0 = Ba;
function Wm(n, r) {
  if (n === r || !((c0(n) && c0(r)) || (Array.isArray(n) && Array.isArray(r))))
    return r;
  const i = Object.keys(r),
    o = Object.keys(n);
  let s = i.length === o.length;
  const c = Array.isArray(r) ? [] : {};
  for (const d of i) ((c[d] = Wm(n[d], r[d])), s && (s = n[d] === c[d]));
  return s ? n : c;
}
function em(n, r, i) {
  return n.reduce((o, s, c) => (r(s, c) && o.push(i(s, c)), o), []).flat();
}
function x_(n) {
  return new RegExp("(^|:)//").test(n);
}
function E_() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function eh(n) {
  return n != null;
}
function f0(n) {
  return [...(n?.values() ?? [])].filter(eh);
}
function C_() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var T_ = (n) => n.replace(/\/$/, ""),
  w_ = (n) => n.replace(/^\//, "");
function R_(n, r) {
  if (!n) return r;
  if (!r) return n;
  if (x_(r)) return r;
  const i = n.endsWith("/") || !r.startsWith("?") ? "/" : "";
  return ((n = T_(n)), (r = w_(r)), `${n}${i}${r}`);
}
function lu(n, r, i) {
  return n.has(r) ? n.get(r) : n.set(r, i(r)).get(r);
}
var tm = () => new Map(),
  d0 = (...n) => fetch(...n),
  __ = (n) => n.status >= 200 && n.status <= 299,
  A_ = (n) => /ion\/(vnd\.api\+)?json/.test(n.get("content-type") || "");
function m0(n) {
  if (!Ba(n)) return n;
  const r = { ...n };
  for (const [i, o] of Object.entries(r)) o === void 0 && delete r[i];
  return r;
}
var M_ = (n) =>
  typeof n == "object" &&
  (Ba(n) || Array.isArray(n) || typeof n.toJSON == "function");
function th({
  baseUrl: n,
  prepareHeaders: r = (g) => g,
  fetchFn: i = d0,
  paramsSerializer: o,
  isJsonContentType: s = A_,
  jsonContentType: c = "application/json",
  jsonReplacer: d,
  timeout: m,
  responseHandler: h,
  validateStatus: p,
  ...y
} = {}) {
  return (
    typeof fetch > "u" &&
      i === d0 &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (b, S, C) => {
      const { getState: x, extra: E, endpoint: _, forced: N, type: w } = S;
      let z,
        {
          url: M,
          headers: j = new Headers(y.headers),
          params: O = void 0,
          responseHandler: B = h ?? "json",
          validateStatus: D = p ?? __,
          timeout: H = m,
          ...L
        } = typeof b == "string" ? { url: b } : b,
        q,
        Y = S.signal;
      H &&
        ((q = new AbortController()),
        S.signal.addEventListener("abort", q.abort),
        (Y = q.signal));
      let G = { ...y, signal: Y, ...L };
      ((j = new Headers(m0(j))),
        (G.headers =
          (await r(j, {
            getState: x,
            arg: b,
            extra: E,
            endpoint: _,
            forced: N,
            type: w,
            extraOptions: C,
          })) || j));
      const ne = M_(G.body);
      if (
        (G.body != null &&
          !ne &&
          typeof G.body != "string" &&
          G.headers.delete("content-type"),
        !G.headers.has("content-type") &&
          ne &&
          G.headers.set("content-type", c),
        ne && s(G.headers) && (G.body = JSON.stringify(G.body, d)),
        G.headers.has("accept") ||
          (B === "json"
            ? G.headers.set("accept", "application/json")
            : B === "text" &&
              G.headers.set("accept", "text/plain, text/html, */*")),
        O)
      ) {
        const ee = ~M.indexOf("?") ? "&" : "?",
          ue = o ? o(O) : new URLSearchParams(m0(O));
        M += ee + ue;
      }
      M = R_(n, M);
      const Q = new Request(M, G);
      z = { request: new Request(M, G) };
      let F,
        W = !1,
        se =
          q &&
          setTimeout(() => {
            ((W = !0), q.abort());
          }, H);
      try {
        F = await i(Q);
      } catch (ee) {
        return {
          error: {
            status: W ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(ee),
          },
          meta: z,
        };
      } finally {
        (se && clearTimeout(se),
          q?.signal.removeEventListener("abort", q.abort));
      }
      const U = F.clone();
      z.response = U;
      let X,
        le = "";
      try {
        let ee;
        if (
          (await Promise.all([
            g(F, B).then(
              (ue) => (X = ue),
              (ue) => (ee = ue),
            ),
            U.text().then(
              (ue) => (le = ue),
              () => {},
            ),
          ]),
          ee)
        )
          throw ee;
      } catch (ee) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: F.status,
            data: le,
            error: String(ee),
          },
          meta: z,
        };
      }
      return D(F, X)
        ? { data: X, meta: z }
        : { error: { status: F.status, data: X }, meta: z };
    }
  );
  async function g(b, S) {
    if (typeof S == "function") return S(b);
    if (
      (S === "content-type" && (S = s(b.headers) ? "json" : "text"),
      S === "json")
    ) {
      const C = await b.text();
      return C.length ? JSON.parse(C) : null;
    }
    return b.text();
  }
}
var h0 = class {
    constructor(n, r = void 0) {
      ((this.value = n), (this.meta = r));
    }
  },
  Du = "__rtkq/",
  N_ = "online",
  z_ = "offline",
  $1 = "focused",
  nh = pn(`${Du}${$1}`),
  q1 = pn(`${Du}un${$1}`),
  ah = pn(`${Du}${N_}`),
  Q1 = pn(`${Du}${z_}`),
  ho = "query",
  k1 = "mutation",
  Y1 = "infinitequery";
function Uu(n) {
  return n.type === ho;
}
function O_(n) {
  return n.type === k1;
}
function Lu(n) {
  return n.type === Y1;
}
function iu(n) {
  return Uu(n) || Lu(n);
}
function rh(n, r, i, o, s, c) {
  const d = j_(n) ? n(r, i, o, s) : n;
  return d ? em(d, eh, (m) => c(V1(m))) : [];
}
function j_(n) {
  return typeof n == "function";
}
function V1(n) {
  return typeof n == "string" ? { type: n } : n;
}
function D_(n, r) {
  return n.catch(r);
}
var bl = (n, r) => n.endpointDefinitions[r],
  Pi = Symbol("forceQueryFn"),
  nm = (n) => typeof n[Pi] == "function";
function U_({
  serializeQueryArgs: n,
  queryThunk: r,
  infiniteQueryThunk: i,
  mutationThunk: o,
  api: s,
  context: c,
  getInternalState: d,
}) {
  const m = (z) => d(z)?.runningQueries,
    h = (z) => d(z)?.runningMutations,
    {
      unsubscribeQueryResult: p,
      removeMutationResult: y,
      updateSubscriptionOptions: g,
    } = s.internalActions;
  return {
    buildInitiateQuery: _,
    buildInitiateInfiniteQuery: N,
    buildInitiateMutation: w,
    getRunningQueryThunk: b,
    getRunningMutationThunk: S,
    getRunningQueriesThunk: C,
    getRunningMutationsThunk: x,
  };
  function b(z, M) {
    return (j) => {
      const O = bl(c, z),
        B = n({ queryArgs: M, endpointDefinition: O, endpointName: z });
      return m(j)?.get(B);
    };
  }
  function S(z, M) {
    return (j) => h(j)?.get(M);
  }
  function C() {
    return (z) => f0(m(z));
  }
  function x() {
    return (z) => f0(h(z));
  }
  function E(z, M) {
    const j =
      (
        O,
        {
          subscribe: B = !0,
          forceRefetch: D,
          subscriptionOptions: H,
          [Pi]: L,
          ...q
        } = {},
      ) =>
      (Y, G) => {
        const ne = n({ queryArgs: O, endpointDefinition: M, endpointName: z });
        let Q;
        const K = {
          ...q,
          type: ho,
          subscribe: B,
          forceRefetch: D,
          subscriptionOptions: H,
          endpointName: z,
          originalArgs: O,
          queryCacheKey: ne,
          [Pi]: L,
        };
        if (Uu(M)) Q = r(K);
        else {
          const { direction: oe, initialPageParam: he } = q;
          Q = i({ ...K, direction: oe, initialPageParam: he });
        }
        const F = s.endpoints[z].select(O),
          W = Y(Q),
          se = F(G()),
          { requestId: U, abort: X } = W,
          le = se.requestId !== U,
          ee = m(Y)?.get(ne),
          ue = () => F(G()),
          ce = Object.assign(
            L
              ? W.then(ue)
              : le && !ee
                ? Promise.resolve(se)
                : Promise.all([ee, W]).then(ue),
            {
              arg: O,
              requestId: U,
              subscriptionOptions: H,
              queryCacheKey: ne,
              abort: X,
              async unwrap() {
                const oe = await ce;
                if (oe.isError) throw oe.error;
                return oe.data;
              },
              refetch: () => Y(j(O, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                B && Y(p({ queryCacheKey: ne, requestId: U }));
              },
              updateSubscriptionOptions(oe) {
                ((ce.subscriptionOptions = oe),
                  Y(
                    g({
                      endpointName: z,
                      requestId: U,
                      queryCacheKey: ne,
                      options: oe,
                    }),
                  ));
              },
            },
          );
        if (!ee && !le && !L) {
          const oe = m(Y);
          (oe.set(ne, ce),
            ce.then(() => {
              oe.delete(ne);
            }));
        }
        return ce;
      };
    return j;
  }
  function _(z, M) {
    return E(z, M);
  }
  function N(z, M) {
    return E(z, M);
  }
  function w(z) {
    return (M, { track: j = !0, fixedCacheKey: O } = {}) =>
      (B, D) => {
        const H = o({
            type: "mutation",
            endpointName: z,
            originalArgs: M,
            track: j,
            fixedCacheKey: O,
          }),
          L = B(H),
          { requestId: q, abort: Y, unwrap: G } = L,
          ne = D_(
            L.unwrap().then((W) => ({ data: W })),
            (W) => ({ error: W }),
          ),
          Q = () => {
            B(y({ requestId: q, fixedCacheKey: O }));
          },
          K = Object.assign(ne, {
            arg: L.arg,
            requestId: q,
            abort: Y,
            unwrap: G,
            reset: Q,
          }),
          F = h(B);
        return (
          F.set(q, K),
          K.then(() => {
            F.delete(q);
          }),
          O &&
            (F.set(O, K),
            K.then(() => {
              F.get(O) === K && F.delete(O);
            })),
          K
        );
      };
  }
}
var G1 = class extends S_ {
    constructor(n, r, i, o) {
      (super(n), (this.value = r), (this.schemaName = i), (this._bqMeta = o));
    }
  },
  lr = (n, r) => (Array.isArray(n) ? n.includes(r) : !!n);
async function ir(n, r, i, o) {
  const s = await n["~standard"].validate(r);
  if (s.issues) throw new G1(s.issues, r, i, o);
  return s.value;
}
function p0(n) {
  return n;
}
var Ni = (n = {}) => ({ ...n, [zu]: !0 });
function L_({
  reducerPath: n,
  baseQuery: r,
  context: { endpointDefinitions: i },
  serializeQueryArgs: o,
  api: s,
  assertTagType: c,
  selectors: d,
  onSchemaFailure: m,
  catchSchemaFailure: h,
  skipSchemaValidation: p,
}) {
  const y = (L, q, Y, G) => (ne, Q) => {
    const K = i[L],
      F = o({ queryArgs: q, endpointDefinition: K, endpointName: L });
    if (
      (ne(
        s.internalActions.queryResultPatched({ queryCacheKey: F, patches: Y }),
      ),
      !G)
    )
      return;
    const W = s.endpoints[L].select(q)(Q()),
      se = rh(K.providesTags, W.data, void 0, q, {}, c);
    ne(
      s.internalActions.updateProvidedBy([
        { queryCacheKey: F, providedTags: se },
      ]),
    );
  };
  function g(L, q, Y = 0) {
    const G = [q, ...L];
    return Y && G.length > Y ? G.slice(0, -1) : G;
  }
  function b(L, q, Y = 0) {
    const G = [...L, q];
    return Y && G.length > Y ? G.slice(1) : G;
  }
  const S =
      (L, q, Y, G = !0) =>
      (ne, Q) => {
        const F = s.endpoints[L].select(q)(Q()),
          W = {
            patches: [],
            inversePatches: [],
            undo: () => ne(s.util.patchQueryData(L, q, W.inversePatches, G)),
          };
        if (F.status === ra) return W;
        let se;
        if ("data" in F)
          if (bn(F.data)) {
            const [U, X, le] = j1(F.data, Y);
            (W.patches.push(...X), W.inversePatches.push(...le), (se = U));
          } else
            ((se = Y(F.data)),
              W.patches.push({ op: "replace", path: [], value: se }),
              W.inversePatches.push({
                op: "replace",
                path: [],
                value: F.data,
              }));
        return (
          W.patches.length === 0 ||
            ne(s.util.patchQueryData(L, q, W.patches, G)),
          W
        );
      },
    C = (L, q, Y) => (G) =>
      G(
        s.endpoints[L].initiate(q, {
          subscribe: !1,
          forceRefetch: !0,
          [Pi]: () => ({ data: Y }),
        }),
      ),
    x = (L, q) => (L.query && L[q] ? L[q] : p0),
    E = async (
      L,
      {
        signal: q,
        abort: Y,
        rejectWithValue: G,
        fulfillWithValue: ne,
        dispatch: Q,
        getState: K,
        extra: F,
      },
    ) => {
      const W = i[L.endpointName],
        { metaSchema: se, skipSchemaValidation: U = p } = W,
        X = L.type === ho;
      try {
        let le = p0;
        const ee = {
            signal: q,
            abort: Y,
            dispatch: Q,
            getState: K,
            extra: F,
            endpoint: L.endpointName,
            type: L.type,
            forced: X ? _(L, K()) : void 0,
            queryCacheKey: X ? L.queryCacheKey : void 0,
          },
          ue = X ? L[Pi] : void 0;
        let ce;
        const oe = async (de, ge, xe, fe) => {
          if (ge == null && de.pages.length)
            return Promise.resolve({ data: de });
          const Ce = { queryArg: L.originalArgs, pageParam: ge },
            Re = await he(Ce),
            Oe = fe ? g : b;
          return {
            data: {
              pages: Oe(de.pages, Re.data, xe),
              pageParams: Oe(de.pageParams, ge, xe),
            },
            meta: Re.meta,
          };
        };
        async function he(de) {
          let ge;
          const {
            extraOptions: xe,
            argSchema: fe,
            rawResponseSchema: Ce,
            responseSchema: Re,
          } = W;
          if (
            (fe && !lr(U, "arg") && (de = await ir(fe, de, "argSchema", {})),
            ue
              ? (ge = ue())
              : W.query
                ? ((le = x(W, "transformResponse")),
                  (ge = await r(W.query(de), ee, xe)))
                : (ge = await W.queryFn(de, ee, xe, (nt) => r(nt, ee, xe))),
            typeof process < "u",
            ge.error)
          )
            throw new h0(ge.error, ge.meta);
          let { data: Oe } = ge;
          Ce &&
            !lr(U, "rawResponse") &&
            (Oe = await ir(Ce, ge.data, "rawResponseSchema", ge.meta));
          let qe = await le(Oe, ge.meta, de);
          return (
            Re &&
              !lr(U, "response") &&
              (qe = await ir(Re, qe, "responseSchema", ge.meta)),
            { ...ge, data: qe }
          );
        }
        if (X && "infiniteQueryOptions" in W) {
          const { infiniteQueryOptions: de } = W,
            { maxPages: ge = 1 / 0 } = de;
          let xe;
          const fe = { pages: [], pageParams: [] },
            Ce = d.selectQueryEntry(K(), L.queryCacheKey)?.data,
            Oe = (_(L, K()) && !L.direction) || !Ce ? fe : Ce;
          if ("direction" in L && L.direction && Oe.pages.length) {
            const qe = L.direction === "backward",
              dt = (qe ? X1 : am)(de, Oe, L.originalArgs);
            xe = await oe(Oe, dt, ge, qe);
          } else {
            const { initialPageParam: qe = de.initialPageParam } = L,
              nt = Ce?.pageParams ?? [],
              dt = nt[0] ?? qe,
              ot = nt.length;
            ((xe = await oe(Oe, dt, ge)),
              ue && (xe = { data: xe.data.pages[0] }));
            for (let ut = 1; ut < ot; ut++) {
              const _t = am(de, xe.data, L.originalArgs);
              xe = await oe(xe.data, _t, ge);
            }
          }
          ce = xe;
        } else ce = await he(L.originalArgs);
        return (
          se &&
            !lr(U, "meta") &&
            ce.meta &&
            (ce.meta = await ir(se, ce.meta, "metaSchema", ce.meta)),
          ne(
            ce.data,
            Ni({ fulfilledTimeStamp: Date.now(), baseQueryMeta: ce.meta }),
          )
        );
      } catch (le) {
        let ee = le;
        if (ee instanceof h0) {
          let ue = x(W, "transformErrorResponse");
          const { rawErrorResponseSchema: ce, errorResponseSchema: oe } = W;
          let { value: he, meta: de } = ee;
          try {
            (ce &&
              !lr(U, "rawErrorResponse") &&
              (he = await ir(ce, he, "rawErrorResponseSchema", de)),
              se &&
                !lr(U, "meta") &&
                (de = await ir(se, de, "metaSchema", de)));
            let ge = await ue(he, de, L.originalArgs);
            return (
              oe &&
                !lr(U, "errorResponse") &&
                (ge = await ir(oe, ge, "errorResponseSchema", de)),
              G(ge, Ni({ baseQueryMeta: de }))
            );
          } catch (ge) {
            ee = ge;
          }
        }
        try {
          if (ee instanceof G1) {
            const ue = {
              endpoint: L.endpointName,
              arg: L.originalArgs,
              type: L.type,
              queryCacheKey: X ? L.queryCacheKey : void 0,
            };
            (W.onSchemaFailure?.(ee, ue), m?.(ee, ue));
            const { catchSchemaFailure: ce = h } = W;
            if (ce) return G(ce(ee, ue), Ni({ baseQueryMeta: ee._bqMeta }));
          }
        } catch (ue) {
          ee = ue;
        }
        throw (console.error(ee), ee);
      }
    };
  function _(L, q) {
    const Y = d.selectQueryEntry(q, L.queryCacheKey),
      G = d.selectConfig(q).refetchOnMountOrArgChange,
      ne = Y?.fulfilledTimeStamp,
      Q = L.forceRefetch ?? (L.subscribe && G);
    return Q ? Q === !0 || (Number(new Date()) - Number(ne)) / 1e3 >= Q : !1;
  }
  const N = () =>
      s0(`${n}/executeQuery`, E, {
        getPendingMeta({ arg: q }) {
          const Y = i[q.endpointName];
          return Ni({
            startedTimeStamp: Date.now(),
            ...(Lu(Y) ? { direction: q.direction } : {}),
          });
        },
        condition(q, { getState: Y }) {
          const G = Y(),
            ne = d.selectQueryEntry(G, q.queryCacheKey),
            Q = ne?.fulfilledTimeStamp,
            K = q.originalArgs,
            F = ne?.originalArgs,
            W = i[q.endpointName],
            se = q.direction;
          return nm(q)
            ? !0
            : ne?.status === "pending"
              ? !1
              : _(q, G) ||
                  (Uu(W) &&
                    W?.forceRefetch?.({
                      currentArg: K,
                      previousArg: F,
                      endpointState: ne,
                      state: G,
                    }))
                ? !0
                : !(Q && !se);
        },
        dispatchConditionRejection: !0,
      }),
    w = N(),
    z = N(),
    M = s0(`${n}/executeMutation`, E, {
      getPendingMeta() {
        return Ni({ startedTimeStamp: Date.now() });
      },
    }),
    j = (L) => "force" in L,
    O = (L) => "ifOlderThan" in L,
    B =
      (L, q, Y = {}) =>
      (G, ne) => {
        const Q = j(Y) && Y.force,
          K = O(Y) && Y.ifOlderThan,
          F = (se = !0) => {
            const U = { forceRefetch: se, subscribe: !1 };
            return s.endpoints[L].initiate(q, U);
          },
          W = s.endpoints[L].select(q)(ne());
        if (Q) G(F());
        else if (K) {
          const se = W?.fulfilledTimeStamp;
          if (!se) {
            G(F());
            return;
          }
          (Number(new Date()) - Number(new Date(se))) / 1e3 >= K && G(F());
        } else G(F(!1));
      };
  function D(L) {
    return (q) => q?.meta?.arg?.endpointName === L;
  }
  function H(L, q) {
    return {
      matchPending: $i(Fm(L), D(q)),
      matchFulfilled: $i(Ha(L), D(q)),
      matchRejected: $i(vl(L), D(q)),
    };
  }
  return {
    queryThunk: w,
    mutationThunk: M,
    infiniteQueryThunk: z,
    prefetch: B,
    updateQueryData: S,
    upsertQueryData: C,
    patchQueryData: y,
    buildMatchThunkActions: H,
  };
}
function am(n, { pages: r, pageParams: i }, o) {
  const s = r.length - 1;
  return n.getNextPageParam(r[s], r, i[s], i, o);
}
function X1(n, { pages: r, pageParams: i }, o) {
  return n.getPreviousPageParam?.(r[0], r, i[0], i, o);
}
function Z1(n, r, i, o) {
  return rh(
    i[n.meta.arg.endpointName][r],
    Ha(n) ? n.payload : void 0,
    ju(n) ? n.payload : void 0,
    n.meta.arg.originalArgs,
    "baseQueryMeta" in n.meta ? n.meta.baseQueryMeta : void 0,
    o,
  );
}
function y0(n) {
  return vn(n) ? z1(n) : n;
}
function Ys(n, r, i) {
  const o = n[r];
  o && i(o);
}
function Ii(n) {
  return ("arg" in n ? n.arg.fixedCacheKey : n.fixedCacheKey) ?? n.requestId;
}
function g0(n, r, i) {
  const o = n[Ii(r)];
  o && i(o);
}
var Vs = {};
function B_({
  reducerPath: n,
  queryThunk: r,
  mutationThunk: i,
  serializeQueryArgs: o,
  context: {
    endpointDefinitions: s,
    apiUid: c,
    extractRehydrationInfo: d,
    hasRehydrationInfo: m,
  },
  assertTagType: h,
  config: p,
}) {
  const y = pn(`${n}/resetApiState`);
  function g(D, H, L, q) {
    ((D[H.queryCacheKey] ??= { status: ra, endpointName: H.endpointName }),
      Ys(D, H.queryCacheKey, (Y) => {
        ((Y.status = Wd),
          (Y.requestId = L && Y.requestId ? Y.requestId : q.requestId),
          H.originalArgs !== void 0 && (Y.originalArgs = H.originalArgs),
          (Y.startedTimeStamp = q.startedTimeStamp));
        const G = s[q.arg.endpointName];
        Lu(G) && "direction" in H && (Y.direction = H.direction);
      }));
  }
  function b(D, H, L, q) {
    Ys(D, H.arg.queryCacheKey, (Y) => {
      if (Y.requestId !== H.requestId && !q) return;
      const { merge: G } = s[H.arg.endpointName];
      if (((Y.status = ji), G))
        if (Y.data !== void 0) {
          const {
            fulfilledTimeStamp: ne,
            arg: Q,
            baseQueryMeta: K,
            requestId: F,
          } = H;
          let W = fo(Y.data, (se) =>
            G(se, L, {
              arg: Q.originalArgs,
              baseQueryMeta: K,
              fulfilledTimeStamp: ne,
              requestId: F,
            }),
          );
          Y.data = W;
        } else Y.data = L;
      else
        Y.data =
          (s[H.arg.endpointName].structuralSharing ?? !0)
            ? Wm(vn(Y.data) ? AR(Y.data) : Y.data, L)
            : L;
      (delete Y.error, (Y.fulfilledTimeStamp = H.fulfilledTimeStamp));
    });
  }
  const S = ml({
      name: `${n}/queries`,
      initialState: Vs,
      reducers: {
        removeQueryResult: {
          reducer(D, { payload: { queryCacheKey: H } }) {
            delete D[H];
          },
          prepare: Mi(),
        },
        cacheEntriesUpserted: {
          reducer(D, H) {
            for (const L of H.payload) {
              const { queryDescription: q, value: Y } = L;
              (g(D, q, !0, {
                arg: q,
                requestId: H.meta.requestId,
                startedTimeStamp: H.meta.timestamp,
              }),
                b(
                  D,
                  {
                    arg: q,
                    requestId: H.meta.requestId,
                    fulfilledTimeStamp: H.meta.timestamp,
                    baseQueryMeta: {},
                  },
                  Y,
                  !0,
                ));
            }
          },
          prepare: (D) => ({
            payload: D.map((q) => {
              const { endpointName: Y, arg: G, value: ne } = q,
                Q = s[Y];
              return {
                queryDescription: {
                  type: ho,
                  endpointName: Y,
                  originalArgs: q.arg,
                  queryCacheKey: o({
                    queryArgs: G,
                    endpointDefinition: Q,
                    endpointName: Y,
                  }),
                },
                value: ne,
              };
            }),
            meta: { [zu]: !0, requestId: Jm(), timestamp: Date.now() },
          }),
        },
        queryResultPatched: {
          reducer(D, { payload: { queryCacheKey: H, patches: L } }) {
            Ys(D, H, (q) => {
              q.data = t0(q.data, L.concat());
            });
          },
          prepare: Mi(),
        },
      },
      extraReducers(D) {
        D.addCase(r.pending, (H, { meta: L, meta: { arg: q } }) => {
          const Y = nm(q);
          g(H, q, Y, L);
        })
          .addCase(r.fulfilled, (H, { meta: L, payload: q }) => {
            const Y = nm(L.arg);
            b(H, L, q, Y);
          })
          .addCase(
            r.rejected,
            (
              H,
              {
                meta: { condition: L, arg: q, requestId: Y },
                error: G,
                payload: ne,
              },
            ) => {
              Ys(H, q.queryCacheKey, (Q) => {
                if (!L) {
                  if (Q.requestId !== Y) return;
                  ((Q.status = Di), (Q.error = ne ?? G));
                }
              });
            },
          )
          .addMatcher(m, (H, L) => {
            const { queries: q } = d(L);
            for (const [Y, G] of Object.entries(q))
              (G?.status === ji || G?.status === Di) && (H[Y] = G);
          });
      },
    }),
    C = ml({
      name: `${n}/mutations`,
      initialState: Vs,
      reducers: {
        removeMutationResult: {
          reducer(D, { payload: H }) {
            const L = Ii(H);
            L in D && delete D[L];
          },
          prepare: Mi(),
        },
      },
      extraReducers(D) {
        D.addCase(
          i.pending,
          (
            H,
            { meta: L, meta: { requestId: q, arg: Y, startedTimeStamp: G } },
          ) => {
            Y.track &&
              (H[Ii(L)] = {
                requestId: q,
                status: Wd,
                endpointName: Y.endpointName,
                startedTimeStamp: G,
              });
          },
        )
          .addCase(i.fulfilled, (H, { payload: L, meta: q }) => {
            q.arg.track &&
              g0(H, q, (Y) => {
                Y.requestId === q.requestId &&
                  ((Y.status = ji),
                  (Y.data = L),
                  (Y.fulfilledTimeStamp = q.fulfilledTimeStamp));
              });
          })
          .addCase(i.rejected, (H, { payload: L, error: q, meta: Y }) => {
            Y.arg.track &&
              g0(H, Y, (G) => {
                G.requestId === Y.requestId &&
                  ((G.status = Di), (G.error = L ?? q));
              });
          })
          .addMatcher(m, (H, L) => {
            const { mutations: q } = d(L);
            for (const [Y, G] of Object.entries(q))
              (G?.status === ji || G?.status === Di) &&
                Y !== G?.requestId &&
                (H[Y] = G);
          });
      },
    }),
    x = { tags: {}, keys: {} },
    E = ml({
      name: `${n}/invalidation`,
      initialState: x,
      reducers: {
        updateProvidedBy: {
          reducer(D, H) {
            for (const { queryCacheKey: L, providedTags: q } of H.payload) {
              _(D, L);
              for (const { type: Y, id: G } of q) {
                const ne = ((D.tags[Y] ??= {})[G || "__internal_without_id"] ??=
                  []);
                ne.includes(L) || ne.push(L);
              }
              D.keys[L] = q;
            }
          },
          prepare: Mi(),
        },
      },
      extraReducers(D) {
        D.addCase(
          S.actions.removeQueryResult,
          (H, { payload: { queryCacheKey: L } }) => {
            _(H, L);
          },
        )
          .addMatcher(m, (H, L) => {
            const { provided: q } = d(L);
            for (const [Y, G] of Object.entries(q.tags ?? {}))
              for (const [ne, Q] of Object.entries(G)) {
                const K = ((H.tags[Y] ??= {})[ne || "__internal_without_id"] ??=
                  []);
                for (const F of Q)
                  (K.includes(F) || K.push(F), (H.keys[F] = q.keys[F]));
              }
          })
          .addMatcher(aa(Ha(r), ju(r)), (H, L) => {
            N(H, [L]);
          })
          .addMatcher(S.actions.cacheEntriesUpserted.match, (H, L) => {
            const q = L.payload.map(({ queryDescription: Y, value: G }) => ({
              type: "UNKNOWN",
              payload: G,
              meta: {
                requestStatus: "fulfilled",
                requestId: "UNKNOWN",
                arg: Y,
              },
            }));
            N(H, q);
          });
      },
    });
  function _(D, H) {
    const L = y0(D.keys[H] ?? []);
    for (const q of L) {
      const Y = q.type,
        G = q.id ?? "__internal_without_id",
        ne = D.tags[Y]?.[G];
      ne && (D.tags[Y][G] = y0(ne).filter((Q) => Q !== H));
    }
    delete D.keys[H];
  }
  function N(D, H) {
    const L = H.map((q) => {
      const Y = Z1(q, "providesTags", s, h),
        { queryCacheKey: G } = q.meta.arg;
      return { queryCacheKey: G, providedTags: Y };
    });
    E.caseReducers.updateProvidedBy(D, E.actions.updateProvidedBy(L));
  }
  const w = ml({
      name: `${n}/subscriptions`,
      initialState: Vs,
      reducers: {
        updateSubscriptionOptions(D, H) {},
        unsubscribeQueryResult(D, H) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    z = ml({
      name: `${n}/internalSubscriptions`,
      initialState: Vs,
      reducers: {
        subscriptionsUpdated: {
          reducer(D, H) {
            return t0(D, H.payload);
          },
          prepare: Mi(),
        },
      },
    }),
    M = ml({
      name: `${n}/config`,
      initialState: {
        online: C_(),
        focused: E_(),
        middlewareRegistered: !1,
        ...p,
      },
      reducers: {
        middlewareRegistered(D, { payload: H }) {
          D.middlewareRegistered =
            D.middlewareRegistered === "conflict" || c !== H ? "conflict" : !0;
        },
      },
      extraReducers: (D) => {
        D.addCase(ah, (H) => {
          H.online = !0;
        })
          .addCase(Q1, (H) => {
            H.online = !1;
          })
          .addCase(nh, (H) => {
            H.focused = !0;
          })
          .addCase(q1, (H) => {
            H.focused = !1;
          })
          .addMatcher(m, (H) => ({ ...H }));
      },
    }),
    j = w1({
      queries: S.reducer,
      mutations: C.reducer,
      provided: E.reducer,
      subscriptions: z.reducer,
      config: M.reducer,
    }),
    O = (D, H) => j(y.match(H) ? void 0 : D, H),
    B = {
      ...M.actions,
      ...S.actions,
      ...w.actions,
      ...z.actions,
      ...C.actions,
      ...E.actions,
      resetApiState: y,
    };
  return { reducer: O, actions: B };
}
var mn = Symbol.for("RTKQ/skipToken"),
  P1 = { status: ra },
  v0 = fo(P1, () => {}),
  b0 = fo(P1, () => {});
function H_({ serializeQueryArgs: n, reducerPath: r, createSelector: i }) {
  const o = (w) => v0,
    s = (w) => b0;
  return {
    buildQuerySelector: b,
    buildInfiniteQuerySelector: S,
    buildMutationSelector: C,
    selectInvalidatedBy: x,
    selectCachedArgsForQuery: E,
    selectApiState: d,
    selectQueries: m,
    selectMutations: p,
    selectQueryEntry: h,
    selectConfig: y,
  };
  function c(w) {
    return { ...w, ...u0(w.status) };
  }
  function d(w) {
    return w[r];
  }
  function m(w) {
    return d(w)?.queries;
  }
  function h(w, z) {
    return m(w)?.[z];
  }
  function p(w) {
    return d(w)?.mutations;
  }
  function y(w) {
    return d(w)?.config;
  }
  function g(w, z, M) {
    return (j) => {
      if (j === mn) return i(o, M);
      const O = n({ queryArgs: j, endpointDefinition: z, endpointName: w });
      return i((D) => h(D, O) ?? v0, M);
    };
  }
  function b(w, z) {
    return g(w, z, c);
  }
  function S(w, z) {
    const { infiniteQueryOptions: M } = z;
    function j(O) {
      const B = { ...O, ...u0(O.status) },
        { isLoading: D, isError: H, direction: L } = B,
        q = L === "forward",
        Y = L === "backward";
      return {
        ...B,
        hasNextPage: _(M, B.data, B.originalArgs),
        hasPreviousPage: N(M, B.data, B.originalArgs),
        isFetchingNextPage: D && q,
        isFetchingPreviousPage: D && Y,
        isFetchNextPageError: H && q,
        isFetchPreviousPageError: H && Y,
      };
    }
    return g(w, z, j);
  }
  function C() {
    return (w) => {
      let z;
      return (
        typeof w == "object" ? (z = Ii(w) ?? mn) : (z = w),
        i(z === mn ? s : (O) => d(O)?.mutations?.[z] ?? b0, c)
      );
    };
  }
  function x(w, z) {
    const M = w[r],
      j = new Set(),
      O = em(z, eh, V1);
    for (const B of O) {
      const D = M.provided.tags[B.type];
      if (!D) continue;
      let H = (B.id !== void 0 ? D[B.id] : Object.values(D).flat()) ?? [];
      for (const L of H) j.add(L);
    }
    return Array.from(j.values()).flatMap((B) => {
      const D = M.queries[B];
      return D
        ? {
            queryCacheKey: B,
            endpointName: D.endpointName,
            originalArgs: D.originalArgs,
          }
        : [];
    });
  }
  function E(w, z) {
    return em(
      Object.values(m(w)),
      (M) => M?.endpointName === z && M.status !== ra,
      (M) => M.originalArgs,
    );
  }
  function _(w, z, M) {
    return z ? am(w, z, M) != null : !1;
  }
  function N(w, z, M) {
    return !z || !w.getPreviousPageParam ? !1 : X1(w, z, M) != null;
  }
}
var S0 = WeakMap ? new WeakMap() : void 0,
  x0 = ({ endpointName: n, queryArgs: r }) => {
    let i = "";
    const o = S0?.get(r);
    if (typeof o == "string") i = o;
    else {
      const s = JSON.stringify(
        r,
        (c, d) => (
          (d = typeof d == "bigint" ? { $bigint: d.toString() } : d),
          (d = Ba(d)
            ? Object.keys(d)
                .sort()
                .reduce((m, h) => ((m[h] = d[h]), m), {})
            : d),
          d
        ),
      );
      (Ba(r) && S0?.set(r, s), (i = s));
    }
    return `${n}(${i})`;
  };
function I1(...n) {
  return function (i) {
    const o = ru((p) =>
        i.extractRehydrationInfo?.(p, { reducerPath: i.reducerPath ?? "api" }),
      ),
      s = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...i,
        extractRehydrationInfo: o,
        serializeQueryArgs(p) {
          let y = x0;
          if ("serializeQueryArgs" in p.endpointDefinition) {
            const g = p.endpointDefinition.serializeQueryArgs;
            y = (b) => {
              const S = g(b);
              return typeof S == "string" ? S : x0({ ...b, queryArgs: S });
            };
          } else i.serializeQueryArgs && (y = i.serializeQueryArgs);
          return y(p);
        },
        tagTypes: [...(i.tagTypes || [])],
      },
      c = {
        endpointDefinitions: {},
        batch(p) {
          p();
        },
        apiUid: Jm(),
        extractRehydrationInfo: o,
        hasRehydrationInfo: ru((p) => o(p) != null),
      },
      d = {
        injectEndpoints: h,
        enhanceEndpoints({ addTagTypes: p, endpoints: y }) {
          if (p)
            for (const g of p) s.tagTypes.includes(g) || s.tagTypes.push(g);
          if (y)
            for (const [g, b] of Object.entries(y))
              typeof b == "function"
                ? b(bl(c, g))
                : Object.assign(bl(c, g) || {}, b);
          return d;
        },
      },
      m = n.map((p) => p.init(d, s, c));
    function h(p) {
      const y = p.endpoints({
        query: (g) => ({ ...g, type: ho }),
        mutation: (g) => ({ ...g, type: k1 }),
        infiniteQuery: (g) => ({ ...g, type: Y1 }),
      });
      for (const [g, b] of Object.entries(y)) {
        if (p.overrideExisting !== !0 && g in c.endpointDefinitions) {
          if (p.overrideExisting === "throw") throw new Error(yn(39));
          continue;
        }
        c.endpointDefinitions[g] = b;
        for (const S of m) S.injectEndpoint(g, b);
      }
      return d;
    }
    return d.injectEndpoints({ endpoints: i.endpoints });
  };
}
function Wn(n, ...r) {
  return Object.assign(n, ...r);
}
var $_ = ({ api: n, queryThunk: r, internalState: i, mwApi: o }) => {
    const s = `${n.reducerPath}/subscriptions`;
    let c = null,
      d = null;
    const { updateSubscriptionOptions: m, unsubscribeQueryResult: h } =
        n.internalActions,
      p = (x, E) => {
        if (m.match(E)) {
          const { queryCacheKey: N, requestId: w, options: z } = E.payload,
            M = x.get(N);
          return (M?.has(w) && M.set(w, z), !0);
        }
        if (h.match(E)) {
          const { queryCacheKey: N, requestId: w } = E.payload,
            z = x.get(N);
          return (z && z.delete(w), !0);
        }
        if (n.internalActions.removeQueryResult.match(E))
          return (x.delete(E.payload.queryCacheKey), !0);
        if (r.pending.match(E)) {
          const {
              meta: { arg: N, requestId: w },
            } = E,
            z = lu(x, N.queryCacheKey, tm);
          return (
            N.subscribe && z.set(w, N.subscriptionOptions ?? z.get(w) ?? {}),
            !0
          );
        }
        let _ = !1;
        if (r.rejected.match(E)) {
          const {
            meta: { condition: N, arg: w, requestId: z },
          } = E;
          if (N && w.subscribe) {
            const M = lu(x, w.queryCacheKey, tm);
            (M.set(z, w.subscriptionOptions ?? M.get(z) ?? {}), (_ = !0));
          }
        }
        return _;
      },
      y = () => i.currentSubscriptions,
      S = {
        getSubscriptions: y,
        getSubscriptionCount: (x) => y().get(x)?.size ?? 0,
        isRequestSubscribed: (x, E) => !!y()?.get(x)?.get(E),
      };
    function C(x) {
      return JSON.parse(
        JSON.stringify(
          Object.fromEntries(
            [...x].map(([E, _]) => [E, Object.fromEntries(_)]),
          ),
        ),
      );
    }
    return (x, E) => {
      if ((c || (c = C(i.currentSubscriptions)), n.util.resetApiState.match(x)))
        return ((c = {}), i.currentSubscriptions.clear(), (d = null), [!0, !1]);
      if (n.internalActions.internal_getRTKQSubscriptions.match(x))
        return [!1, S];
      const _ = p(i.currentSubscriptions, x);
      let N = !0;
      if (_) {
        d ||
          (d = setTimeout(() => {
            const M = C(i.currentSubscriptions),
              [, j] = j1(c, () => M);
            (E.next(n.internalActions.subscriptionsUpdated(j)),
              (c = M),
              (d = null));
          }, 500));
        const w = typeof x.type == "string" && !!x.type.startsWith(s),
          z = r.rejected.match(x) && x.meta.condition && !!x.meta.arg.subscribe;
        N = !w && !z;
      }
      return [N, !1];
    };
  },
  q_ = 2147483647 / 1e3 - 1,
  Q_ = ({
    reducerPath: n,
    api: r,
    queryThunk: i,
    context: o,
    internalState: s,
    selectors: { selectQueryEntry: c, selectConfig: d },
    getRunningQueryThunk: m,
    mwApi: h,
  }) => {
    const {
        removeQueryResult: p,
        unsubscribeQueryResult: y,
        cacheEntriesUpserted: g,
      } = r.internalActions,
      b = aa(y.match, i.fulfilled, i.rejected, g.match);
    function S(w) {
      const z = s.currentSubscriptions.get(w);
      return z ? z.size > 0 : !1;
    }
    const C = {};
    function x(w) {
      for (const z of w.values()) z?.abort?.();
    }
    const E = (w, z) => {
      const M = z.getState(),
        j = d(M);
      if (b(w)) {
        let O;
        if (g.match(w))
          O = w.payload.map((B) => B.queryDescription.queryCacheKey);
        else {
          const { queryCacheKey: B } = y.match(w) ? w.payload : w.meta.arg;
          O = [B];
        }
        _(O, z, j);
      }
      if (r.util.resetApiState.match(w)) {
        for (const [O, B] of Object.entries(C))
          (B && clearTimeout(B), delete C[O]);
        (x(s.runningQueries), x(s.runningMutations));
      }
      if (o.hasRehydrationInfo(w)) {
        const { queries: O } = o.extractRehydrationInfo(w);
        _(Object.keys(O), z, j);
      }
    };
    function _(w, z, M) {
      const j = z.getState();
      for (const O of w) {
        const B = c(j, O);
        B?.endpointName && N(O, B.endpointName, z, M);
      }
    }
    function N(w, z, M, j) {
      const B = bl(o, z)?.keepUnusedDataFor ?? j.keepUnusedDataFor;
      if (B === 1 / 0) return;
      const D = Math.max(0, Math.min(B, q_));
      if (!S(w)) {
        const H = C[w];
        (H && clearTimeout(H),
          (C[w] = setTimeout(() => {
            if (!S(w)) {
              const L = c(M.getState(), w);
              (L?.endpointName &&
                M.dispatch(m(L.endpointName, L.originalArgs))?.abort(),
                M.dispatch(p({ queryCacheKey: w })));
            }
            delete C[w];
          }, D * 1e3)));
      }
    }
    return E;
  },
  E0 = new Error("Promise never resolved before cacheEntryRemoved."),
  k_ = ({
    api: n,
    reducerPath: r,
    context: i,
    queryThunk: o,
    mutationThunk: s,
    internalState: c,
    selectors: { selectQueryEntry: d, selectApiState: m },
  }) => {
    const h = Jd(o),
      p = Jd(s),
      y = Ha(o, s),
      g = {},
      {
        removeQueryResult: b,
        removeMutationResult: S,
        cacheEntriesUpserted: C,
      } = n.internalActions;
    function x(M, j, O) {
      const B = g[M];
      B?.valueResolved &&
        (B.valueResolved({ data: j, meta: O }), delete B.valueResolved);
    }
    function E(M) {
      const j = g[M];
      j && (delete g[M], j.cacheEntryRemoved());
    }
    function _(M) {
      const { arg: j, requestId: O } = M.meta,
        { endpointName: B, originalArgs: D } = j;
      return [B, D, O];
    }
    const N = (M, j, O) => {
      const B = w(M);
      function D(H, L, q, Y) {
        const G = d(O, L),
          ne = d(j.getState(), L);
        !G && ne && z(H, Y, L, j, q);
      }
      if (o.pending.match(M)) {
        const [H, L, q] = _(M);
        D(H, B, q, L);
      } else if (C.match(M))
        for (const { queryDescription: H, value: L } of M.payload) {
          const { endpointName: q, originalArgs: Y, queryCacheKey: G } = H;
          (D(q, G, M.meta.requestId, Y), x(G, L, {}));
        }
      else if (s.pending.match(M)) {
        if (j.getState()[r].mutations[B]) {
          const [L, q, Y] = _(M);
          z(L, q, B, j, Y);
        }
      } else if (y(M)) x(B, M.payload, M.meta.baseQueryMeta);
      else if (b.match(M) || S.match(M)) E(B);
      else if (n.util.resetApiState.match(M))
        for (const H of Object.keys(g)) E(H);
    };
    function w(M) {
      return h(M)
        ? M.meta.arg.queryCacheKey
        : p(M)
          ? (M.meta.arg.fixedCacheKey ?? M.meta.requestId)
          : b.match(M)
            ? M.payload.queryCacheKey
            : S.match(M)
              ? Ii(M.payload)
              : "";
    }
    function z(M, j, O, B, D) {
      const H = bl(i, M),
        L = H?.onCacheEntryAdded;
      if (!L) return;
      const q = {},
        Y = new Promise((W) => {
          q.cacheEntryRemoved = W;
        }),
        G = Promise.race([
          new Promise((W) => {
            q.valueResolved = W;
          }),
          Y.then(() => {
            throw E0;
          }),
        ]);
      (G.catch(() => {}), (g[O] = q));
      const ne = n.endpoints[M].select(iu(H) ? j : O),
        Q = B.dispatch((W, se, U) => U),
        K = {
          ...B,
          getCacheEntry: () => ne(B.getState()),
          requestId: D,
          extra: Q,
          updateCachedData: iu(H)
            ? (W) => B.dispatch(n.util.updateQueryData(M, j, W))
            : void 0,
          cacheDataLoaded: G,
          cacheEntryRemoved: Y,
        },
        F = L(j, K);
      Promise.resolve(F).catch((W) => {
        if (W !== E0) throw W;
      });
    }
    return N;
  },
  Y_ =
    ({ api: n, context: { apiUid: r }, reducerPath: i }) =>
    (o, s) => {
      n.util.resetApiState.match(o) &&
        s.dispatch(n.internalActions.middlewareRegistered(r));
    },
  V_ = ({
    reducerPath: n,
    context: r,
    context: { endpointDefinitions: i },
    mutationThunk: o,
    queryThunk: s,
    api: c,
    assertTagType: d,
    refetchQuery: m,
    internalState: h,
  }) => {
    const { removeQueryResult: p } = c.internalActions,
      y = aa(Ha(o), ju(o)),
      g = aa(Ha(s, o), vl(s, o));
    let b = [],
      S = 0;
    const C = (_, N) => {
      ((s.pending.match(_) || o.pending.match(_)) && S++,
        g(_) && (S = Math.max(0, S - 1)),
        y(_)
          ? E(Z1(_, "invalidatesTags", i, d), N)
          : g(_)
            ? E([], N)
            : c.util.invalidateTags.match(_) &&
              E(rh(_.payload, void 0, void 0, void 0, void 0, d), N));
    };
    function x() {
      return S > 0;
    }
    function E(_, N) {
      const w = N.getState(),
        z = w[n];
      if ((b.push(..._), z.config.invalidationBehavior === "delayed" && x()))
        return;
      const M = b;
      if (((b = []), M.length === 0)) return;
      const j = c.util.selectInvalidatedBy(w, M);
      r.batch(() => {
        const O = Array.from(j.values());
        for (const { queryCacheKey: B } of O) {
          const D = z.queries[B],
            H = lu(h.currentSubscriptions, B, tm);
          D &&
            (H.size === 0
              ? N.dispatch(p({ queryCacheKey: B }))
              : D.status !== ra && N.dispatch(m(D)));
        }
      });
    }
    return C;
  },
  G_ = ({
    reducerPath: n,
    queryThunk: r,
    api: i,
    refetchQuery: o,
    internalState: s,
  }) => {
    const { currentPolls: c, currentSubscriptions: d } = s,
      m = new Set();
    let h = null;
    const p = (E, _) => {
      ((i.internalActions.updateSubscriptionOptions.match(E) ||
        i.internalActions.unsubscribeQueryResult.match(E)) &&
        y(E.payload.queryCacheKey, _),
        (r.pending.match(E) || (r.rejected.match(E) && E.meta.condition)) &&
          y(E.meta.arg.queryCacheKey, _),
        (r.fulfilled.match(E) || (r.rejected.match(E) && !E.meta.condition)) &&
          g(E.meta.arg, _),
        i.util.resetApiState.match(E) &&
          (C(), h && (clearTimeout(h), (h = null)), m.clear()));
    };
    function y(E, _) {
      (m.add(E),
        h ||
          (h = setTimeout(() => {
            for (const N of m) b({ queryCacheKey: N }, _);
            (m.clear(), (h = null));
          }, 0)));
    }
    function g({ queryCacheKey: E }, _) {
      const N = _.getState()[n],
        w = N.queries[E],
        z = d.get(E);
      if (!w || w.status === ra) return;
      const { lowestPollingInterval: M, skipPollingIfUnfocused: j } = x(z);
      if (!Number.isFinite(M)) return;
      const O = c.get(E);
      O?.timeout && (clearTimeout(O.timeout), (O.timeout = void 0));
      const B = Date.now() + M;
      c.set(E, {
        nextPollTimestamp: B,
        pollingInterval: M,
        timeout: setTimeout(() => {
          ((N.config.focused || !j) && _.dispatch(o(w)),
            g({ queryCacheKey: E }, _));
        }, M),
      });
    }
    function b({ queryCacheKey: E }, _) {
      const w = _.getState()[n].queries[E],
        z = d.get(E);
      if (!w || w.status === ra) return;
      const { lowestPollingInterval: M } = x(z);
      if (!Number.isFinite(M)) {
        S(E);
        return;
      }
      const j = c.get(E),
        O = Date.now() + M;
      (!j || O < j.nextPollTimestamp) && g({ queryCacheKey: E }, _);
    }
    function S(E) {
      const _ = c.get(E);
      (_?.timeout && clearTimeout(_.timeout), c.delete(E));
    }
    function C() {
      for (const E of c.keys()) S(E);
    }
    function x(E = new Map()) {
      let _ = !1,
        N = Number.POSITIVE_INFINITY;
      for (const w of E.values())
        w.pollingInterval &&
          ((N = Math.min(w.pollingInterval, N)),
          (_ = w.skipPollingIfUnfocused || _));
      return { lowestPollingInterval: N, skipPollingIfUnfocused: _ };
    }
    return p;
  },
  X_ = ({ api: n, context: r, queryThunk: i, mutationThunk: o }) => {
    const s = Fm(i, o),
      c = vl(i, o),
      d = Ha(i, o),
      m = {};
    return (p, y) => {
      if (s(p)) {
        const {
            requestId: g,
            arg: { endpointName: b, originalArgs: S },
          } = p.meta,
          C = bl(r, b),
          x = C?.onQueryStarted;
        if (x) {
          const E = {},
            _ = new Promise((M, j) => {
              ((E.resolve = M), (E.reject = j));
            });
          (_.catch(() => {}), (m[g] = E));
          const N = n.endpoints[b].select(iu(C) ? S : g),
            w = y.dispatch((M, j, O) => O),
            z = {
              ...y,
              getCacheEntry: () => N(y.getState()),
              requestId: g,
              extra: w,
              updateCachedData: iu(C)
                ? (M) => y.dispatch(n.util.updateQueryData(b, S, M))
                : void 0,
              queryFulfilled: _,
            };
          x(S, z);
        }
      } else if (d(p)) {
        const { requestId: g, baseQueryMeta: b } = p.meta;
        (m[g]?.resolve({ data: p.payload, meta: b }), delete m[g]);
      } else if (c(p)) {
        const { requestId: g, rejectedWithValue: b, baseQueryMeta: S } = p.meta;
        (m[g]?.reject({
          error: p.payload ?? p.error,
          isUnhandledError: !b,
          meta: S,
        }),
          delete m[g]);
      }
    };
  },
  Z_ = ({
    reducerPath: n,
    context: r,
    api: i,
    refetchQuery: o,
    internalState: s,
  }) => {
    const { removeQueryResult: c } = i.internalActions,
      d = (h, p) => {
        (nh.match(h) && m(p, "refetchOnFocus"),
          ah.match(h) && m(p, "refetchOnReconnect"));
      };
    function m(h, p) {
      const y = h.getState()[n],
        g = y.queries,
        b = s.currentSubscriptions;
      r.batch(() => {
        for (const S of b.keys()) {
          const C = g[S],
            x = b.get(S);
          if (!x || !C) continue;
          const E = [...x.values()];
          (E.some((N) => N[p] === !0) ||
            (E.every((N) => N[p] === void 0) && y.config[p])) &&
            (x.size === 0
              ? h.dispatch(c({ queryCacheKey: S }))
              : C.status !== ra && h.dispatch(o(C)));
        }
      });
    }
    return d;
  };
function P_(n) {
  const {
      reducerPath: r,
      queryThunk: i,
      api: o,
      context: s,
      getInternalState: c,
    } = n,
    { apiUid: d } = s,
    m = { invalidateTags: pn(`${r}/invalidateTags`) },
    h = (b) => b.type.startsWith(`${r}/`),
    p = [Y_, Q_, V_, G_, k_, X_];
  return {
    middleware: (b) => {
      let S = !1;
      const C = c(b.dispatch),
        x = {
          ...n,
          internalState: C,
          refetchQuery: g,
          isThisApiSliceAction: h,
          mwApi: b,
        },
        E = p.map((w) => w(x)),
        _ = $_(x),
        N = Z_(x);
      return (w) => (z) => {
        if (!R1(z)) return w(z);
        S || ((S = !0), b.dispatch(o.internalActions.middlewareRegistered(d)));
        const M = { ...b, next: w },
          j = b.getState(),
          [O, B] = _(z, M, j);
        let D;
        if (
          (O ? (D = w(z)) : (D = B),
          b.getState()[r] && (N(z, M, j), h(z) || s.hasRehydrationInfo(z)))
        )
          for (const H of E) H(z, M, j);
        return D;
      };
    },
    actions: m,
  };
  function g(b) {
    return n.api.endpoints[b.endpointName].initiate(b.originalArgs, {
      subscribe: !1,
      forceRefetch: !0,
    });
  }
}
var C0 = Symbol(),
  K1 = ({ createSelector: n = Km } = {}) => ({
    name: C0,
    init(
      r,
      {
        baseQuery: i,
        tagTypes: o,
        reducerPath: s,
        serializeQueryArgs: c,
        keepUnusedDataFor: d,
        refetchOnMountOrArgChange: m,
        refetchOnFocus: h,
        refetchOnReconnect: p,
        invalidationBehavior: y,
        onSchemaFailure: g,
        catchSchemaFailure: b,
        skipSchemaValidation: S,
      },
      C,
    ) {
      BR();
      const x = (oe) => oe;
      Object.assign(r, {
        reducerPath: s,
        endpoints: {},
        internalActions: {
          onOnline: ah,
          onOffline: Q1,
          onFocus: nh,
          onFocusLost: q1,
        },
        util: {},
      });
      const E = H_({
          serializeQueryArgs: c,
          reducerPath: s,
          createSelector: n,
        }),
        {
          selectInvalidatedBy: _,
          selectCachedArgsForQuery: N,
          buildQuerySelector: w,
          buildInfiniteQuerySelector: z,
          buildMutationSelector: M,
        } = E;
      Wn(r.util, { selectInvalidatedBy: _, selectCachedArgsForQuery: N });
      const {
          queryThunk: j,
          infiniteQueryThunk: O,
          mutationThunk: B,
          patchQueryData: D,
          updateQueryData: H,
          upsertQueryData: L,
          prefetch: q,
          buildMatchThunkActions: Y,
        } = L_({
          baseQuery: i,
          reducerPath: s,
          context: C,
          api: r,
          serializeQueryArgs: c,
          assertTagType: x,
          selectors: E,
          onSchemaFailure: g,
          catchSchemaFailure: b,
          skipSchemaValidation: S,
        }),
        { reducer: G, actions: ne } = B_({
          context: C,
          queryThunk: j,
          mutationThunk: B,
          serializeQueryArgs: c,
          reducerPath: s,
          assertTagType: x,
          config: {
            refetchOnFocus: h,
            refetchOnReconnect: p,
            refetchOnMountOrArgChange: m,
            keepUnusedDataFor: d,
            reducerPath: s,
            invalidationBehavior: y,
          },
        });
      (Wn(r.util, {
        patchQueryData: D,
        updateQueryData: H,
        upsertQueryData: L,
        prefetch: q,
        resetApiState: ne.resetApiState,
        upsertQueryEntries: ne.cacheEntriesUpserted,
      }),
        Wn(r.internalActions, ne));
      const Q = new WeakMap(),
        K = (oe) =>
          lu(Q, oe, () => ({
            currentSubscriptions: new Map(),
            currentPolls: new Map(),
            runningQueries: new Map(),
            runningMutations: new Map(),
          })),
        {
          buildInitiateQuery: F,
          buildInitiateInfiniteQuery: W,
          buildInitiateMutation: se,
          getRunningMutationThunk: U,
          getRunningMutationsThunk: X,
          getRunningQueriesThunk: le,
          getRunningQueryThunk: ee,
        } = U_({
          queryThunk: j,
          mutationThunk: B,
          infiniteQueryThunk: O,
          api: r,
          serializeQueryArgs: c,
          context: C,
          getInternalState: K,
        });
      Wn(r.util, {
        getRunningMutationThunk: U,
        getRunningMutationsThunk: X,
        getRunningQueryThunk: ee,
        getRunningQueriesThunk: le,
      });
      const { middleware: ue, actions: ce } = P_({
        reducerPath: s,
        context: C,
        queryThunk: j,
        mutationThunk: B,
        infiniteQueryThunk: O,
        api: r,
        assertTagType: x,
        selectors: E,
        getRunningQueryThunk: ee,
        getInternalState: K,
      });
      return (
        Wn(r.util, ce),
        Wn(r, { reducer: G, middleware: ue }),
        {
          name: C0,
          injectEndpoint(oe, he) {
            const de = r,
              ge = (de.endpoints[oe] ??= {});
            (Uu(he) &&
              Wn(
                ge,
                { name: oe, select: w(oe, he), initiate: F(oe, he) },
                Y(j, oe),
              ),
              O_(he) &&
                Wn(ge, { name: oe, select: M(), initiate: se(oe) }, Y(B, oe)),
              Lu(he) &&
                Wn(
                  ge,
                  { name: oe, select: z(oe, he), initiate: W(oe, he) },
                  Y(j, oe),
                ));
          },
        }
      );
    },
  });
K1();
function Gs(n) {
  return n.replace(n[0], n[0].toUpperCase());
}
var I_ = "query",
  K_ = "mutation",
  F_ = "infinitequery";
function J_(n) {
  return n.type === I_;
}
function W_(n) {
  return n.type === K_;
}
function F1(n) {
  return n.type === F_;
}
function zi(n, ...r) {
  return Object.assign(n, ...r);
}
var Rd = Symbol();
function _d(n) {
  const r = T.useRef(n),
    i = T.useMemo(() => Wm(r.current, n), [n]);
  return (
    T.useEffect(() => {
      r.current !== i && (r.current = i);
    }, [i]),
    i
  );
}
function Xs(n) {
  const r = T.useRef(n);
  return (
    T.useEffect(() => {
      Li(r.current, n) || (r.current = n);
    }, [n]),
    Li(r.current, n) ? r.current : n
  );
}
var eA = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  tA = eA(),
  nA = () => typeof navigator < "u" && navigator.product === "ReactNative",
  aA = nA(),
  rA = () => (tA || aA ? T.useLayoutEffect : T.useEffect),
  lA = rA(),
  T0 = (n) =>
    n.isUninitialized
      ? {
          ...n,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: n.data === void 0,
          status: H1.pending,
        }
      : n;
function Ad(n, ...r) {
  const i = {};
  return (
    r.forEach((o) => {
      i[o] = n[o];
    }),
    i
  );
}
var Md = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function iA({
  api: n,
  moduleOptions: {
    batch: r,
    hooks: { useDispatch: i, useSelector: o, useStore: s },
    unstable__sideEffectsInRender: c,
    createSelector: d,
  },
  serializeQueryArgs: m,
  context: h,
}) {
  const p = c ? (j) => j() : T.useEffect,
    y = (j) => j.current?.unsubscribe?.(),
    g = h.endpointDefinitions;
  return {
    buildQueryHooks: w,
    buildInfiniteQueryHooks: z,
    buildMutationHook: M,
    usePrefetch: C,
  };
  function b(j, O, B) {
    if (O?.endpointName && j.isUninitialized) {
      const { endpointName: G } = O,
        ne = g[G];
      B !== mn &&
        m({
          queryArgs: O.originalArgs,
          endpointDefinition: ne,
          endpointName: G,
        }) === m({ queryArgs: B, endpointDefinition: ne, endpointName: G }) &&
        (O = void 0);
    }
    let D = j.isSuccess ? j.data : O?.data;
    D === void 0 && (D = j.data);
    const H = D !== void 0,
      L = j.isLoading,
      q = (!O || O.isLoading || O.isUninitialized) && !H && L,
      Y = j.isSuccess || (H && ((L && !O?.isError) || j.isUninitialized));
    return {
      ...j,
      data: D,
      currentData: j.data,
      isFetching: L,
      isLoading: q,
      isSuccess: Y,
    };
  }
  function S(j, O, B) {
    if (O?.endpointName && j.isUninitialized) {
      const { endpointName: G } = O,
        ne = g[G];
      B !== mn &&
        m({
          queryArgs: O.originalArgs,
          endpointDefinition: ne,
          endpointName: G,
        }) === m({ queryArgs: B, endpointDefinition: ne, endpointName: G }) &&
        (O = void 0);
    }
    let D = j.isSuccess ? j.data : O?.data;
    D === void 0 && (D = j.data);
    const H = D !== void 0,
      L = j.isLoading,
      q = (!O || O.isLoading || O.isUninitialized) && !H && L,
      Y = j.isSuccess || (L && H);
    return {
      ...j,
      data: D,
      currentData: j.data,
      isFetching: L,
      isLoading: q,
      isSuccess: Y,
    };
  }
  function C(j, O) {
    const B = i(),
      D = Xs(O);
    return T.useCallback(
      (H, L) => B(n.util.prefetch(j, H, { ...D, ...L })),
      [j, B, D],
    );
  }
  function x(
    j,
    O,
    {
      refetchOnReconnect: B,
      refetchOnFocus: D,
      refetchOnMountOrArgChange: H,
      skip: L = !1,
      pollingInterval: q = 0,
      skipPollingIfUnfocused: Y = !1,
      ...G
    } = {},
  ) {
    const { initiate: ne } = n.endpoints[j],
      Q = i(),
      K = T.useRef(void 0);
    if (!K.current) {
      const oe = Q(n.internalActions.internal_getRTKQSubscriptions());
      K.current = oe;
    }
    const F = _d(L ? mn : O),
      W = Xs({
        refetchOnReconnect: B,
        refetchOnFocus: D,
        pollingInterval: q,
        skipPollingIfUnfocused: Y,
      }),
      se = G.initialPageParam,
      U = Xs(se),
      X = T.useRef(void 0);
    let { queryCacheKey: le, requestId: ee } = X.current || {},
      ue = !1;
    le && ee && (ue = K.current.isRequestSubscribed(le, ee));
    const ce = !ue && X.current !== void 0;
    return (
      p(() => {
        ce && (X.current = void 0);
      }, [ce]),
      p(() => {
        const oe = X.current;
        if (F === mn) {
          (oe?.unsubscribe(), (X.current = void 0));
          return;
        }
        const he = X.current?.subscriptionOptions;
        if (!oe || oe.arg !== F) {
          oe?.unsubscribe();
          const de = Q(
            ne(F, {
              subscriptionOptions: W,
              forceRefetch: H,
              ...(F1(g[j]) ? { initialPageParam: U } : {}),
            }),
          );
          X.current = de;
        } else W !== he && oe.updateSubscriptionOptions(W);
      }, [Q, ne, H, F, W, ce, U, j]),
      [X, Q, ne, W]
    );
  }
  function E(j, O) {
    return (D, { skip: H = !1, selectFromResult: L } = {}) => {
      const { select: q } = n.endpoints[j],
        Y = _d(H ? mn : D),
        G = T.useRef(void 0),
        ne = T.useMemo(
          () =>
            d([q(Y), (se, U) => U, (se) => Y], O, {
              memoizeOptions: { resultEqualityCheck: Li },
            }),
          [q, Y],
        ),
        Q = T.useMemo(
          () =>
            L
              ? d([ne], L, {
                  devModeChecks: { identityFunctionCheck: "never" },
                })
              : ne,
          [ne, L],
        ),
        K = o((se) => Q(se, G.current), Li),
        F = s(),
        W = ne(F.getState(), G.current);
      return (
        lA(() => {
          G.current = W;
        }, [W]),
        K
      );
    };
  }
  function _(j) {
    T.useEffect(
      () => () => {
        (y(j), (j.current = void 0));
      },
      [j],
    );
  }
  function N(j) {
    if (!j.current) throw new Error(yn(38));
    return j.current.refetch();
  }
  function w(j) {
    const O = (H, L = {}) => {
        const [q] = x(j, H, L);
        return (_(q), T.useMemo(() => ({ refetch: () => N(q) }), [q]));
      },
      B = ({
        refetchOnReconnect: H,
        refetchOnFocus: L,
        pollingInterval: q = 0,
        skipPollingIfUnfocused: Y = !1,
      } = {}) => {
        const { initiate: G } = n.endpoints[j],
          ne = i(),
          [Q, K] = T.useState(Rd),
          F = T.useRef(void 0),
          W = Xs({
            refetchOnReconnect: H,
            refetchOnFocus: L,
            pollingInterval: q,
            skipPollingIfUnfocused: Y,
          });
        p(() => {
          const le = F.current?.subscriptionOptions;
          W !== le && F.current?.updateSubscriptionOptions(W);
        }, [W]);
        const se = T.useRef(W);
        p(() => {
          se.current = W;
        }, [W]);
        const U = T.useCallback(
            function (le, ee = !1) {
              let ue;
              return (
                r(() => {
                  (y(F),
                    (F.current = ue =
                      ne(
                        G(le, {
                          subscriptionOptions: se.current,
                          forceRefetch: !ee,
                        }),
                      )),
                    K(le));
                }),
                ue
              );
            },
            [ne, G],
          ),
          X = T.useCallback(() => {
            F.current?.queryCacheKey &&
              ne(
                n.internalActions.removeQueryResult({
                  queryCacheKey: F.current?.queryCacheKey,
                }),
              );
          }, [ne]);
        return (
          T.useEffect(
            () => () => {
              y(F);
            },
            [],
          ),
          T.useEffect(() => {
            Q !== Rd && !F.current && U(Q, !0);
          }, [Q, U]),
          T.useMemo(() => [U, Q, { reset: X }], [U, Q, X])
        );
      },
      D = E(j, b);
    return {
      useQueryState: D,
      useQuerySubscription: O,
      useLazyQuerySubscription: B,
      useLazyQuery(H) {
        const [L, q, { reset: Y }] = B(H),
          G = D(q, { ...H, skip: q === Rd }),
          ne = T.useMemo(() => ({ lastArg: q }), [q]);
        return T.useMemo(() => [L, { ...G, reset: Y }, ne], [L, G, Y, ne]);
      },
      useQuery(H, L) {
        const q = O(H, L),
          Y = D(H, {
            selectFromResult: H === mn || L?.skip ? void 0 : T0,
            ...L,
          }),
          G = Ad(Y, ...Md);
        return (T.useDebugValue(G), T.useMemo(() => ({ ...Y, ...q }), [Y, q]));
      },
    };
  }
  function z(j) {
    const O = (D, H = {}) => {
        const [L, q, Y, G] = x(j, D, H),
          ne = T.useRef(G);
        p(() => {
          ne.current = G;
        }, [G]);
        const Q = T.useCallback(
          function (W, se) {
            let U;
            return (
              r(() => {
                (y(L),
                  (L.current = U =
                    q(
                      Y(W, { subscriptionOptions: ne.current, direction: se }),
                    )));
              }),
              U
            );
          },
          [L, q, Y],
        );
        _(L);
        const K = _d(H.skip ? mn : D),
          F = T.useCallback(() => N(L), [L]);
        return T.useMemo(
          () => ({
            trigger: Q,
            refetch: F,
            fetchNextPage: () => Q(K, "forward"),
            fetchPreviousPage: () => Q(K, "backward"),
          }),
          [F, Q, K],
        );
      },
      B = E(j, S);
    return {
      useInfiniteQueryState: B,
      useInfiniteQuerySubscription: O,
      useInfiniteQuery(D, H) {
        const { refetch: L, fetchNextPage: q, fetchPreviousPage: Y } = O(D, H),
          G = B(D, {
            selectFromResult: D === mn || H?.skip ? void 0 : T0,
            ...H,
          }),
          ne = Ad(G, ...Md, "hasNextPage", "hasPreviousPage");
        return (
          T.useDebugValue(ne),
          T.useMemo(
            () => ({
              ...G,
              fetchNextPage: q,
              fetchPreviousPage: Y,
              refetch: L,
            }),
            [G, q, Y, L],
          )
        );
      },
    };
  }
  function M(j) {
    return ({ selectFromResult: O, fixedCacheKey: B } = {}) => {
      const { select: D, initiate: H } = n.endpoints[j],
        L = i(),
        [q, Y] = T.useState();
      T.useEffect(
        () => () => {
          q?.arg.fixedCacheKey || q?.reset();
        },
        [q],
      );
      const G = T.useCallback(
          function (le) {
            const ee = L(H(le, { fixedCacheKey: B }));
            return (Y(ee), ee);
          },
          [L, H, B],
        ),
        { requestId: ne } = q || {},
        Q = T.useMemo(
          () => D({ fixedCacheKey: B, requestId: q?.requestId }),
          [B, q, D],
        ),
        K = T.useMemo(() => (O ? d([Q], O) : Q), [O, Q]),
        F = o(K, Li),
        W = B == null ? q?.arg.originalArgs : void 0,
        se = T.useCallback(() => {
          r(() => {
            (q && Y(void 0),
              B &&
                L(
                  n.internalActions.removeMutationResult({
                    requestId: ne,
                    fixedCacheKey: B,
                  }),
                ));
          });
        }, [L, B, q, ne]),
        U = Ad(F, ...Md, "endpointName");
      T.useDebugValue(U);
      const X = T.useMemo(
        () => ({ ...F, originalArgs: W, reset: se }),
        [F, W, se],
      );
      return T.useMemo(() => [G, X], [G, X]);
    };
  }
}
var oA = Symbol(),
  sA = ({
    batch: n = vC,
    hooks: r = { useDispatch: hC, useSelector: gC, useStore: eb },
    createSelector: i = Km,
    unstable__sideEffectsInRender: o = !1,
    ...s
  } = {}) => ({
    name: oA,
    init(c, { serializeQueryArgs: d }, m) {
      const h = c,
        {
          buildQueryHooks: p,
          buildInfiniteQueryHooks: y,
          buildMutationHook: g,
          usePrefetch: b,
        } = iA({
          api: c,
          moduleOptions: {
            batch: n,
            hooks: r,
            unstable__sideEffectsInRender: o,
            createSelector: i,
          },
          serializeQueryArgs: d,
          context: m,
        });
      return (
        zi(h, { usePrefetch: b }),
        zi(m, { batch: n }),
        {
          injectEndpoint(S, C) {
            if (J_(C)) {
              const {
                useQuery: x,
                useLazyQuery: E,
                useLazyQuerySubscription: _,
                useQueryState: N,
                useQuerySubscription: w,
              } = p(S);
              (zi(h.endpoints[S], {
                useQuery: x,
                useLazyQuery: E,
                useLazyQuerySubscription: _,
                useQueryState: N,
                useQuerySubscription: w,
              }),
                (c[`use${Gs(S)}Query`] = x),
                (c[`useLazy${Gs(S)}Query`] = E));
            }
            if (W_(C)) {
              const x = g(S);
              (zi(h.endpoints[S], { useMutation: x }),
                (c[`use${Gs(S)}Mutation`] = x));
            } else if (F1(C)) {
              const {
                useInfiniteQuery: x,
                useInfiniteQuerySubscription: E,
                useInfiniteQueryState: _,
              } = y(S);
              (zi(h.endpoints[S], {
                useInfiniteQuery: x,
                useInfiniteQuerySubscription: E,
                useInfiniteQueryState: _,
              }),
                (c[`use${Gs(S)}InfiniteQuery`] = x));
            }
          },
        }
      );
    },
  }),
  lh = I1(K1(), sA());
const Nd = lh({
    reducerPath: "authApi",
    baseQuery: th({ baseUrl: "http://localhost:3000" }),
    endpoints: (n) => ({
      requestCode: n.mutation({
        query: (r) => ({ url: "/auth/request-code", method: "POST", body: r }),
      }),
      verifyCode: n.mutation({
        query: (r) => ({ url: "/auth/verify-code", method: "POST", body: r }),
      }),
    }),
  }),
  zd = lh({
    reducerPath: "personsApi",
    baseQuery: th({
      baseUrl: "http://localhost:3000/api",
      prepareHeaders: (n) => {
        const r = localStorage.getItem("token");
        return (r && n.set("Authorization", `Bearer ${r}`), n);
      },
    }),
    endpoints: (n) => ({
      getPerson: n.query({ query: (r) => `/persons/${r}` }),
      getFamily: n.query({
        query: ({ personId: r, branch: i = "base" }) =>
          `/persons/${r}/family?branch=${i}`,
      }),
      uploadPhoto: n.mutation({
        query: ({ personId: r, formData: i }) => ({
          url: `/persons/${r}/photos`,
          method: "POST",
          body: i,
        }),
      }),
    }),
  }),
  uA = th({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (n) => {
      const r = localStorage.getItem("token");
      return (r && n.set("Authorization", `Bearer ${r}`), n);
    },
  }),
  Od = lh({
    reducerPath: "photosApi",
    baseQuery: uA,
    endpoints: (n) => ({
      uploadPhotoFile: n.mutation({
        query: (r) => ({ url: "/upload-photo", method: "POST", body: r }),
      }),
      linkPhotoToPerson: n.mutation({
        query: ({ personId: r, photoUrl: i }) => ({
          url: `/persons/${r}/link-photo`,
          method: "POST",
          body: { photoUrl: i },
        }),
      }),
      deletePhoto: n.mutation({
        query: (r) => ({ url: `/photos/${r}`, method: "DELETE" }),
      }),
    }),
  }),
  cA = a_({
    reducer: {
      [Nd.reducerPath]: Nd.reducer,
      [zd.reducerPath]: zd.reducer,
      [Od.reducerPath]: Od.reducer,
    },
    middleware: (n) =>
      n().concat(Nd.middleware).concat(zd.middleware).concat(Od.middleware),
  }),
  J1 = T.createContext(void 0);
function fA({ children: n }) {
  const [r, i] = T.useState(null),
    [o, s] = T.useState(null),
    [c, d] = T.useState(!0);
  T.useEffect(() => {
    const p = localStorage.getItem("token"),
      y = localStorage.getItem("user");
    if (p && y)
      try {
        (s(p), i(JSON.parse(y)));
      } catch {
        (localStorage.removeItem("token"), localStorage.removeItem("user"));
      }
    d(!1);
  }, []);
  const m = (p, y) => {
      (localStorage.setItem("token", p),
        localStorage.setItem("user", JSON.stringify(y)),
        s(p),
        i(y));
    },
    h = () => {
      (localStorage.removeItem("token"),
        localStorage.removeItem("user"),
        s(null),
        i(null));
    };
  return R.jsx(J1.Provider, {
    value: {
      user: r,
      token: o,
      isAuthenticated: !!o && !!r,
      isLoading: c,
      login: m,
      logout: h,
    },
    children: n,
  });
}
function ih() {
  const n = T.useContext(J1);
  if (n === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return n;
}
function dA() {
  const { id: n } = tE();
  return R.jsxs("div", {
    style: { padding: "2rem" },
    children: [
      R.jsx(Da, { order: 2, children: "Карточка персоны" }),
      R.jsxs(Ke, { children: ["ID персоны: ", n || "не указан"] }),
      R.jsx(Ke, {
        children: "Здесь будет ФИО, фото, дата рождения, знаки и т.д.",
      }),
    ],
  });
}
const mA = {
    primaryColor: "blue",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    radius: { xs: "4px", sm: "8px", md: "12px", lg: "16px", xl: "24px" },
  },
  W1 = ({ children: n }) => R.jsx(Em, { theme: mA, children: n });
function hA() {
  const [n, r] = T.useState(""),
    [i, o] = T.useState(""),
    [s, c] = T.useState(""),
    [d, m] = T.useState(""),
    [h, p] = T.useState("email-code"),
    [y, g] = T.useState(!1),
    [b, S] = T.useState(null),
    [C, x] = T.useState(!1),
    E = cu(),
    { isAuthenticated: _, login: N } = ih();
  T.useEffect(() => {
    _ && E("/");
  }, [_, E]);
  const w = () =>
      localStorage.getItem("chat-api-url") || "http://localhost:3000",
    z = async () => {
      if (!n) {
        S("Пожалуйста, введите email");
        return;
      }
      (x(!0), S(null));
      try {
        const D = await fetch(`${w()}/auth/request-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: n }),
        });
        if (!D.ok) {
          const H = await D.json();
          throw new Error((H.error = "Ошибка при отправке кода"));
        }
        g(!0);
      } catch (D) {
        S(D.message || "Ошибка при отправке кода");
      } finally {
        x(!1);
      }
    },
    M = async () => {
      if (!i) {
        S("Пожалуйста, введите код");
        return;
      }
      (x(!0), S(null));
      try {
        const D = await fetch(`${w()}/auth/verify-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: n, code: i }),
        });
        if (!D.ok) {
          const L = await D.json();
          throw new Error(L.error || "Неверный код");
        }
        const H = await D.json();
        (N(H.token, H.user), E("/"));
      } catch (D) {
        S(D.message || "Неверный код");
      } finally {
        x(!1);
      }
    },
    j = async () => {
      if (!n || !s) {
        S("Пожалуйста, заполните все поля");
        return;
      }
      (x(!0), S(null));
      try {
        const D = await fetch(`${w()}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: n, name: s }),
        });
        if (!D.ok) {
          const L = await D.json();
          throw new Error(L.error || "Ошибка при регистрации");
        }
        const H = await D.json();
        (N(H.token, H.user), E("/"));
      } catch (D) {
        S(D.message || "Ошибка при регистрации");
      } finally {
        x(!1);
      }
    },
    O = async () => {
      if (!d) {
        S("Пожалуйста, введите код");
        return;
      }
      (x(!0), S(null), d === "1111" ? E("/tree") : S("Неверный код"), x(!1));
    },
    B = () => {
      (S(null), g(!1), o(""));
    };
  return R.jsx(W1, {
    children: R.jsx(qm, {
      size: "xs",
      py: "xl",
      children: R.jsxs(br, {
        shadow: "md",
        p: "xl",
        radius: "md",
        withBorder: !0,
        children: [
          R.jsx(Da, {
            order: 2,
            ta: "center",
            mb: "lg",
            children: "Вход в чат",
          }),
          b &&
            R.jsx(Dm, {
              color: "red",
              mb: "md",
              onClose: () => S(null),
              withCloseButton: !0,
              children: b,
            }),
          R.jsxs(Rt, {
            value: h,
            onChange: (D) => {
              (p(D), B());
            },
            children: [
              R.jsxs(Rt.List, {
                grow: !0,
                mb: "md",
                children: [
                  R.jsx(Rt.Tab, {
                    value: "email-code",
                    children: "По email и код",
                  }),
                  R.jsx(Rt.Tab, { value: "email", children: "По email" }),
                  R.jsx(Rt.Tab, { value: "register", children: "Регистрация" }),
                  R.jsx(Rt.Tab, { value: "anonymous", children: "Аноним" }),
                ],
              }),
              R.jsx(Rt.Panel, {
                value: "email-code",
                children: R.jsx(on, {
                  children: R.jsxs(R.Fragment, {
                    children: [
                      R.jsx(cr, {
                        label: "Email",
                        placeholder: "your@email.com",
                        value: n,
                        onChange: (D) => r(D.target.value),
                        required: !0,
                      }),
                      R.jsx(Bi, {
                        label: "Код подтверждения",
                        placeholder: "123456",
                        value: i,
                        onChange: (D) => o(D.target.value),
                        required: !0,
                      }),
                      R.jsx(Ut, {
                        fullWidth: !0,
                        onClick: M,
                        loading: C,
                        children: "Войти",
                      }),
                    ],
                  }),
                }),
              }),
              R.jsx(Rt.Panel, {
                value: "email",
                children: R.jsx(on, {
                  children: y
                    ? R.jsxs(R.Fragment, {
                        children: [
                          R.jsxs(Ke, {
                            size: "sm",
                            c: "dimmed",
                            children: ["Код отправлен на ", n],
                          }),
                          R.jsx(Bi, {
                            label: "Код подтверждения",
                            placeholder: "123456",
                            value: i,
                            onChange: (D) => o(D.target.value),
                            required: !0,
                          }),
                          R.jsx(Ut, {
                            fullWidth: !0,
                            onClick: M,
                            loading: C,
                            children: "Войти",
                          }),
                          R.jsx(Ut, {
                            variant: "subtle",
                            fullWidth: !0,
                            onClick: () => g(!1),
                            children: "Изменить email",
                          }),
                        ],
                      })
                    : R.jsxs(R.Fragment, {
                        children: [
                          R.jsx(cr, {
                            label: "Email",
                            placeholder: "your@email.com",
                            value: n,
                            onChange: (D) => r(D.target.value),
                            required: !0,
                          }),
                          R.jsx(Ut, {
                            fullWidth: !0,
                            onClick: z,
                            loading: C,
                            children: "Получить код",
                          }),
                        ],
                      }),
                }),
              }),
              R.jsx(Rt.Panel, {
                value: "register",
                children: R.jsxs(on, {
                  children: [
                    R.jsx(cr, {
                      label: "Имя",
                      placeholder: "Ваше имя",
                      value: s,
                      onChange: (D) => c(D.target.value),
                      required: !0,
                    }),
                    R.jsx(cr, {
                      label: "Email",
                      placeholder: "your@email.com",
                      value: n,
                      onChange: (D) => r(D.target.value),
                      required: !0,
                    }),
                    R.jsx(Ut, {
                      fullWidth: !0,
                      onClick: j,
                      loading: C,
                      children: "Зарегистрироваться",
                    }),
                  ],
                }),
              }),
              R.jsx(Rt.Panel, {
                value: "anonymous",
                children: R.jsxs(on, {
                  children: [
                    R.jsx(Ke, {
                      size: "sm",
                      c: "dimmed",
                      mb: "xs",
                      children: "Введите код для анонимного входа",
                    }),
                    R.jsx(Bi, {
                      label: "Код доступа",
                      placeholder: "Введите код",
                      value: d,
                      onChange: (D) => m(D.target.value),
                      required: !0,
                    }),
                    R.jsx(Ut, {
                      fullWidth: !0,
                      onClick: O,
                      loading: C,
                      children: "Войти анонимно",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const pA = () => {
    const n = ["Веселый", "Умный", "Быстрый", "Храбрый", "Мудрый"],
      r = ["Гость", "Путник", "Странник", "Посетитель", "Друг"],
      i = n[Math.floor(Math.random() * n.length)],
      o = r[Math.floor(Math.random() * r.length)],
      s = Math.floor(Math.random() * 1e3);
    return `${i}${o}${s}`;
  },
  w0 = () => {
    const n = localStorage.getItem("chat_guest_name");
    if (n) return n;
    const r = pA();
    return (localStorage.setItem("chat_guest_name", r), r);
  },
  yA = ({ currentUser: n }) => {
    const [r, { toggle: i }] = wT(!1),
      [o, s] = T.useState([]),
      [c, d] = T.useState(""),
      [m, h] = T.useState(!1),
      [p, y] = T.useState(!1),
      [g, b] = T.useState(null),
      S = T.useRef(null),
      C = n || { id: "guest-" + w0(), name: w0(), isGuest: !0 },
      x = 3e3,
      E = async () => {
        (h(!0), b(null));
        try {
          const M = await fetch(`${x}/messages`);
          if (!M.ok) throw new Error("Ошибка загрузки сообщений");
          const j = await M.json();
          s(j);
        } catch (M) {
          b(M instanceof Error ? M.message : "Ошибка сети");
        } finally {
          h(!1);
        }
      },
      _ = async () => {
        if (!(!c.trim() || !x)) {
          (y(!0), b(null));
          try {
            const M = await fetch(`${x}/messages`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: c.trim(),
                userName: C.name,
                isGuest: C.isGuest,
              }),
            });
            if (!M.ok) throw new Error("Ошибка отправки сообщения");
            const j = await M.json();
            (s((O) => [...O, j]), d(""));
          } catch (M) {
            b(M instanceof Error ? M.message : "Ошибка отправки");
          } finally {
            y(!1);
          }
        }
      };
    T.useEffect(() => {
      S.current &&
        S.current.scrollTo({ top: S.current.scrollHeight, behavior: "smooth" });
    }, [o]);
    const N = (M) => {
        M.key === "Enter" && !M.shiftKey && (M.preventDefault(), _());
      },
      w = (M) =>
        new Date(M).toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      z = (M) => M.slice(0, 2).toUpperCase();
    return r
      ? R.jsxs(br, {
          shadow: "xl",
          radius: "lg",
          style: {
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 380,
            height: 520,
            display: "flex",
            flexDirection: "column",
            zIndex: 1e3,
            overflow: "hidden",
          },
          children: [
            R.jsxs(ye, {
              style: {
                background: "linear-gradient(135deg, #228be6, #15aabf)",
                padding: "16px",
                color: "white",
              },
              children: [
                R.jsxs(ea, {
                  justify: "space-between",
                  children: [
                    R.jsxs(ea, {
                      gap: "sm",
                      children: [
                        R.jsx(Ke, { fw: 600, size: "lg", children: "Чат" }),
                        R.jsx(Lm, {
                          size: "sm",
                          variant: "light",
                          color: "white",
                          children: C.isGuest ? "Гость" : "Авторизован",
                        }),
                      ],
                    }),
                    R.jsx(jn, {
                      onClick: i,
                      variant: "subtle",
                      color: "white",
                      size: "lg",
                      children: R.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: R.jsx("path", { d: "M18 6 6 18M6 6l12 12" }),
                      }),
                    }),
                  ],
                }),
                R.jsx(Ke, {
                  size: "sm",
                  opacity: 0.9,
                  mt: 4,
                  children: C.name,
                }),
              ],
            }),
            R.jsx(vr, {
              style: { flex: 1, padding: "12px" },
              viewportRef: S,
              children:
                m && o.length === 0
                  ? R.jsxs(ye, {
                      ta: "center",
                      py: "xl",
                      children: [
                        R.jsx(Sr, { size: "sm" }),
                        R.jsx(Ke, {
                          c: "dimmed",
                          size: "sm",
                          mt: "sm",
                          children: "Загрузка сообщений...",
                        }),
                      ],
                    })
                  : g
                    ? R.jsxs(ye, {
                        ta: "center",
                        py: "xl",
                        children: [
                          R.jsx(Ke, { c: "red", size: "sm", children: g }),
                          R.jsx(Ut, {
                            size: "xs",
                            variant: "light",
                            mt: "sm",
                            onClick: E,
                            children: "Повторить",
                          }),
                        ],
                      })
                    : o.length === 0
                      ? R.jsx(ye, {
                          ta: "center",
                          py: "xl",
                          children: R.jsx(Ke, {
                            c: "dimmed",
                            size: "sm",
                            children: "Нет сообщений. Начните общение!",
                          }),
                        })
                      : R.jsx(on, {
                          gap: "md",
                          children: o.map((M) => {
                            const j = M.userName === C.name;
                            return R.jsxs(
                              ea,
                              {
                                align: "flex-start",
                                justify: j ? "flex-end" : "flex-start",
                                gap: "xs",
                                children: [
                                  !j &&
                                    R.jsx(Yi, {
                                      size: "sm",
                                      radius: "xl",
                                      color: M.isGuest ? "gray" : "blue",
                                      children: z(M.userName),
                                    }),
                                  R.jsxs(ye, {
                                    style: {
                                      maxWidth: "75%",
                                      padding: "10px 14px",
                                      borderRadius: j
                                        ? "16px 16px 4px 16px"
                                        : "16px 16px 16px 4px",
                                      background: j
                                        ? "linear-gradient(135deg, #228be6, #15aabf)"
                                        : "#f1f3f5",
                                      color: j ? "white" : "inherit",
                                    },
                                    children: [
                                      !j &&
                                        R.jsxs(Ke, {
                                          size: "xs",
                                          fw: 600,
                                          mb: 4,
                                          opacity: 0.8,
                                          children: [
                                            M.userName,
                                            M.isGuest &&
                                              R.jsx(Ke, {
                                                span: !0,
                                                size: "xs",
                                                c: "dimmed",
                                                ml: 4,
                                                children: "(гость)",
                                              }),
                                          ],
                                        }),
                                      R.jsx(Ke, {
                                        size: "sm",
                                        children: M.text,
                                      }),
                                      R.jsx(Ke, {
                                        size: "xs",
                                        ta: "right",
                                        mt: 4,
                                        opacity: 0.7,
                                        children: w(M.createdAt),
                                      }),
                                    ],
                                  }),
                                  j &&
                                    R.jsx(Yi, {
                                      size: "sm",
                                      radius: "xl",
                                      color: "blue",
                                      children: z(C.name),
                                    }),
                                ],
                              },
                              M.id,
                            );
                          }),
                        }),
            }),
            R.jsx(ye, {
              style: {
                padding: "12px 16px",
                borderTop: "1px solid #e9ecef",
                background: "#f8f9fa",
              },
              children: R.jsxs(ea, {
                gap: "sm",
                children: [
                  R.jsx(cr, {
                    flex: 1,
                    placeholder: "Введите сообщение...",
                    value: c,
                    onChange: (M) => d(M.target.value),
                    onKeyPress: N,
                    disabled: p,
                    radius: "xl",
                    styles: { input: { border: "1px solid #dee2e6" } },
                  }),
                  R.jsx(jn, {
                    size: 40,
                    radius: "xl",
                    variant: "filled",
                    color: "blue",
                    onClick: _,
                    disabled: !c.trim() || !x || p,
                    loading: p,
                    children: R.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        R.jsx("path", { d: "m22 2-7 20-4-9-9-4Z" }),
                        R.jsx("path", { d: "M22 2 11 13" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : R.jsx(jn, {
          onClick: i,
          size: 60,
          radius: "xl",
          variant: "filled",
          color: "blue",
          style: {
            position: "fixed",
            bottom: 50,
            right: 50,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            zIndex: 1e3,
          },
          children: R.jsx("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: R.jsx("path", {
              d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",
            }),
          }),
        });
  };
var gA = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none",
  },
};
const Bu = (n, r, i, o) => {
  const s = T.forwardRef(
    (
      {
        color: c = "currentColor",
        size: d = 24,
        stroke: m = 2,
        title: h,
        className: p,
        children: y,
        ...g
      },
      b,
    ) =>
      T.createElement(
        "svg",
        {
          ref: b,
          ...gA[n],
          width: d,
          height: d,
          className: ["tabler-icon", `tabler-icon-${r}`, p].join(" "),
          strokeWidth: m,
          stroke: c,
          ...g,
        },
        [
          h && T.createElement("title", { key: "svg-title" }, h),
          ...o.map(([S, C]) => T.createElement(S, C)),
          ...(Array.isArray(y) ? y : [y]),
        ],
      ),
  );
  return ((s.displayName = `${i}`), s);
};
const vA = [
    ["path", { d: "M5 12l14 0", key: "svg-0" }],
    ["path", { d: "M5 12l6 6", key: "svg-1" }],
    ["path", { d: "M5 12l6 -6", key: "svg-2" }],
  ],
  bA = Bu("outline", "arrow-left", "ArrowLeft", vA);
const SA = [
    ["path", { d: "M5 12l14 0", key: "svg-0" }],
    ["path", { d: "M13 18l6 -6", key: "svg-1" }],
    ["path", { d: "M13 6l6 6", key: "svg-2" }],
  ],
  xA = Bu("outline", "arrow-right", "ArrowRight", SA);
const EA = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]],
  CA = Bu("outline", "chevron-down", "ChevronDown", EA);
const TA = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]],
  wA = Bu("outline", "chevron-up", "ChevronUp", TA);
function RA(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function R0(n) {
  return RA(n) || Array.isArray(n);
}
function _A() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function oh(n, r) {
  const i = Object.keys(n),
    o = Object.keys(r);
  if (i.length !== o.length) return !1;
  const s = JSON.stringify(Object.keys(n.breakpoints || {})),
    c = JSON.stringify(Object.keys(r.breakpoints || {}));
  return s !== c
    ? !1
    : i.every((d) => {
        const m = n[d],
          h = r[d];
        return typeof m == "function"
          ? `${m}` == `${h}`
          : !R0(m) || !R0(h)
            ? m === h
            : oh(m, h);
      });
}
function _0(n) {
  return n
    .concat()
    .sort((r, i) => (r.name > i.name ? 1 : -1))
    .map((r) => r.options);
}
function AA(n, r) {
  if (n.length !== r.length) return !1;
  const i = _0(n),
    o = _0(r);
  return i.every((s, c) => {
    const d = o[c];
    return oh(s, d);
  });
}
function sh(n) {
  return typeof n == "number";
}
function rm(n) {
  return typeof n == "string";
}
function Hu(n) {
  return typeof n == "boolean";
}
function A0(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Fe(n) {
  return Math.abs(n);
}
function uh(n) {
  return Math.sign(n);
}
function qi(n, r) {
  return Fe(n - r);
}
function MA(n, r) {
  if (n === 0 || r === 0 || Fe(n) <= Fe(r)) return 0;
  const i = qi(Fe(n), Fe(r));
  return Fe(i / n);
}
function NA(n) {
  return Math.round(n * 100) / 100;
}
function Ki(n) {
  return Fi(n).map(Number);
}
function gn(n) {
  return n[po(n)];
}
function po(n) {
  return Math.max(0, n.length - 1);
}
function ch(n, r) {
  return r === po(n);
}
function M0(n, r = 0) {
  return Array.from(Array(n), (i, o) => r + o);
}
function Fi(n) {
  return Object.keys(n);
}
function eS(n, r) {
  return [n, r].reduce(
    (i, o) => (
      Fi(o).forEach((s) => {
        const c = i[s],
          d = o[s],
          m = A0(c) && A0(d);
        i[s] = m ? eS(c, d) : d;
      }),
      i
    ),
    {},
  );
}
function lm(n, r) {
  return typeof r.MouseEvent < "u" && n instanceof r.MouseEvent;
}
function zA(n, r) {
  const i = { start: o, center: s, end: c };
  function o() {
    return 0;
  }
  function s(h) {
    return c(h) / 2;
  }
  function c(h) {
    return r - h;
  }
  function d(h, p) {
    return rm(n) ? i[n](h) : n(r, h, p);
  }
  return { measure: d };
}
function Ji() {
  let n = [];
  function r(s, c, d, m = { passive: !0 }) {
    let h;
    if ("addEventListener" in s)
      (s.addEventListener(c, d, m), (h = () => s.removeEventListener(c, d, m)));
    else {
      const p = s;
      (p.addListener(d), (h = () => p.removeListener(d)));
    }
    return (n.push(h), o);
  }
  function i() {
    n = n.filter((s) => s());
  }
  const o = { add: r, clear: i };
  return o;
}
function OA(n, r, i, o) {
  const s = Ji(),
    c = 1e3 / 60;
  let d = null,
    m = 0,
    h = 0;
  function p() {
    s.add(n, "visibilitychange", () => {
      n.hidden && C();
    });
  }
  function y() {
    (S(), s.clear());
  }
  function g(E) {
    if (!h) return;
    d || ((d = E), i(), i());
    const _ = E - d;
    for (d = E, m += _; m >= c; ) (i(), (m -= c));
    const N = m / c;
    (o(N), h && (h = r.requestAnimationFrame(g)));
  }
  function b() {
    h || (h = r.requestAnimationFrame(g));
  }
  function S() {
    (r.cancelAnimationFrame(h), (d = null), (m = 0), (h = 0));
  }
  function C() {
    ((d = null), (m = 0));
  }
  return { init: p, destroy: y, start: b, stop: S, update: i, render: o };
}
function jA(n, r) {
  const i = r === "rtl",
    o = n === "y",
    s = o ? "y" : "x",
    c = o ? "x" : "y",
    d = !o && i ? -1 : 1,
    m = y(),
    h = g();
  function p(C) {
    const { height: x, width: E } = C;
    return o ? x : E;
  }
  function y() {
    return o ? "top" : i ? "right" : "left";
  }
  function g() {
    return o ? "bottom" : i ? "left" : "right";
  }
  function b(C) {
    return C * d;
  }
  return {
    scroll: s,
    cross: c,
    startEdge: m,
    endEdge: h,
    measureSize: p,
    direction: b,
  };
}
function pr(n = 0, r = 0) {
  const i = Fe(n - r);
  function o(p) {
    return p < n;
  }
  function s(p) {
    return p > r;
  }
  function c(p) {
    return o(p) || s(p);
  }
  function d(p) {
    return c(p) ? (o(p) ? n : r) : p;
  }
  function m(p) {
    return i ? p - i * Math.ceil((p - r) / i) : p;
  }
  return {
    length: i,
    max: r,
    min: n,
    constrain: d,
    reachedAny: c,
    reachedMax: s,
    reachedMin: o,
    removeOffset: m,
  };
}
function tS(n, r, i) {
  const { constrain: o } = pr(0, n),
    s = n + 1;
  let c = d(r);
  function d(b) {
    return i ? Fe((s + b) % s) : o(b);
  }
  function m() {
    return c;
  }
  function h(b) {
    return ((c = d(b)), g);
  }
  function p(b) {
    return y().set(m() + b);
  }
  function y() {
    return tS(n, m(), i);
  }
  const g = { get: m, set: h, add: p, clone: y };
  return g;
}
function DA(n, r, i, o, s, c, d, m, h, p, y, g, b, S, C, x, E, _, N) {
  const { cross: w, direction: z } = n,
    M = ["INPUT", "SELECT", "TEXTAREA"],
    j = { passive: !1 },
    O = Ji(),
    B = Ji(),
    D = pr(50, 225).constrain(S.measure(20)),
    H = { mouse: 300, touch: 400 },
    L = { mouse: 500, touch: 600 },
    q = C ? 43 : 25;
  let Y = !1,
    G = 0,
    ne = 0,
    Q = !1,
    K = !1,
    F = !1,
    W = !1;
  function se(fe) {
    if (!N) return;
    function Ce(Oe) {
      (Hu(N) || N(fe, Oe)) && ce(Oe);
    }
    const Re = r;
    O.add(Re, "dragstart", (Oe) => Oe.preventDefault(), j)
      .add(Re, "touchmove", () => {}, j)
      .add(Re, "touchend", () => {})
      .add(Re, "touchstart", Ce)
      .add(Re, "mousedown", Ce)
      .add(Re, "touchcancel", he)
      .add(Re, "contextmenu", he)
      .add(Re, "click", de, !0);
  }
  function U() {
    (O.clear(), B.clear());
  }
  function X() {
    const fe = W ? i : r;
    B.add(fe, "touchmove", oe, j)
      .add(fe, "touchend", he)
      .add(fe, "mousemove", oe, j)
      .add(fe, "mouseup", he);
  }
  function le(fe) {
    const Ce = fe.nodeName || "";
    return M.includes(Ce);
  }
  function ee() {
    return (C ? L : H)[W ? "mouse" : "touch"];
  }
  function ue(fe, Ce) {
    const Re = g.add(uh(fe) * -1),
      Oe = y.byDistance(fe, !C).distance;
    return C || Fe(fe) < D
      ? Oe
      : E && Ce
        ? Oe * 0.5
        : y.byIndex(Re.get(), 0).distance;
  }
  function ce(fe) {
    const Ce = lm(fe, o);
    ((W = Ce),
      (F = C && Ce && !fe.buttons && Y),
      (Y = qi(s.get(), d.get()) >= 2),
      !(Ce && fe.button !== 0) &&
        (le(fe.target) ||
          ((Q = !0),
          c.pointerDown(fe),
          p.useFriction(0).useDuration(0),
          s.set(d),
          X(),
          (G = c.readPoint(fe)),
          (ne = c.readPoint(fe, w)),
          b.emit("pointerDown"))));
  }
  function oe(fe) {
    if (!lm(fe, o) && fe.touches.length >= 2) return he(fe);
    const Re = c.readPoint(fe),
      Oe = c.readPoint(fe, w),
      qe = qi(Re, G),
      nt = qi(Oe, ne);
    if (!K && !W && (!fe.cancelable || ((K = qe > nt), !K))) return he(fe);
    const dt = c.pointerMove(fe);
    (qe > x && (F = !0),
      p.useFriction(0.3).useDuration(0.75),
      m.start(),
      s.add(z(dt)),
      fe.preventDefault());
  }
  function he(fe) {
    const Re = y.byDistance(0, !1).index !== g.get(),
      Oe = c.pointerUp(fe) * ee(),
      qe = ue(z(Oe), Re),
      nt = MA(Oe, qe),
      dt = q - 10 * nt,
      ot = _ + nt / 50;
    ((K = !1),
      (Q = !1),
      B.clear(),
      p.useDuration(dt).useFriction(ot),
      h.distance(qe, !C),
      (W = !1),
      b.emit("pointerUp"));
  }
  function de(fe) {
    F && (fe.stopPropagation(), fe.preventDefault(), (F = !1));
  }
  function ge() {
    return Q;
  }
  return { init: se, destroy: U, pointerDown: ge };
}
function UA(n, r) {
  let o, s;
  function c(g) {
    return g.timeStamp;
  }
  function d(g, b) {
    const C = `client${(b || n.scroll) === "x" ? "X" : "Y"}`;
    return (lm(g, r) ? g : g.touches[0])[C];
  }
  function m(g) {
    return ((o = g), (s = g), d(g));
  }
  function h(g) {
    const b = d(g) - d(s),
      S = c(g) - c(o) > 170;
    return ((s = g), S && (o = g), b);
  }
  function p(g) {
    if (!o || !s) return 0;
    const b = d(s) - d(o),
      S = c(g) - c(o),
      C = c(g) - c(s) > 170,
      x = b / S;
    return S && !C && Fe(x) > 0.1 ? x : 0;
  }
  return { pointerDown: m, pointerMove: h, pointerUp: p, readPoint: d };
}
function LA() {
  function n(i) {
    const { offsetTop: o, offsetLeft: s, offsetWidth: c, offsetHeight: d } = i;
    return {
      top: o,
      right: s + c,
      bottom: o + d,
      left: s,
      width: c,
      height: d,
    };
  }
  return { measure: n };
}
function BA(n) {
  function r(o) {
    return n * (o / 100);
  }
  return { measure: r };
}
function HA(n, r, i, o, s, c, d) {
  const m = [n].concat(o);
  let h,
    p,
    y = [],
    g = !1;
  function b(E) {
    return s.measureSize(d.measure(E));
  }
  function S(E) {
    if (!c) return;
    ((p = b(n)), (y = o.map(b)));
    function _(N) {
      for (const w of N) {
        if (g) return;
        const z = w.target === n,
          M = o.indexOf(w.target),
          j = z ? p : y[M],
          O = b(z ? n : o[M]);
        if (Fe(O - j) >= 0.5) {
          (E.reInit(), r.emit("resize"));
          break;
        }
      }
    }
    ((h = new ResizeObserver((N) => {
      (Hu(c) || c(E, N)) && _(N);
    })),
      i.requestAnimationFrame(() => {
        m.forEach((N) => h.observe(N));
      }));
  }
  function C() {
    ((g = !0), h && h.disconnect());
  }
  return { init: S, destroy: C };
}
function $A(n, r, i, o, s, c) {
  let d = 0,
    m = 0,
    h = s,
    p = c,
    y = n.get(),
    g = 0;
  function b() {
    const j = o.get() - n.get(),
      O = !h;
    let B = 0;
    return (
      O
        ? ((d = 0), i.set(o), n.set(o), (B = j))
        : (i.set(n), (d += j / h), (d *= p), (y += d), n.add(d), (B = y - g)),
      (m = uh(B)),
      (g = y),
      M
    );
  }
  function S() {
    const j = o.get() - r.get();
    return Fe(j) < 0.001;
  }
  function C() {
    return h;
  }
  function x() {
    return m;
  }
  function E() {
    return d;
  }
  function _() {
    return w(s);
  }
  function N() {
    return z(c);
  }
  function w(j) {
    return ((h = j), M);
  }
  function z(j) {
    return ((p = j), M);
  }
  const M = {
    direction: x,
    duration: C,
    velocity: E,
    seek: b,
    settled: S,
    useBaseFriction: N,
    useBaseDuration: _,
    useFriction: z,
    useDuration: w,
  };
  return M;
}
function qA(n, r, i, o, s) {
  const c = s.measure(10),
    d = s.measure(50),
    m = pr(0.1, 0.99);
  let h = !1;
  function p() {
    return !(h || !n.reachedAny(i.get()) || !n.reachedAny(r.get()));
  }
  function y(S) {
    if (!p()) return;
    const C = n.reachedMin(r.get()) ? "min" : "max",
      x = Fe(n[C] - r.get()),
      E = i.get() - r.get(),
      _ = m.constrain(x / d);
    (i.subtract(E * _),
      !S &&
        Fe(E) < c &&
        (i.set(n.constrain(i.get())), o.useDuration(25).useBaseFriction()));
  }
  function g(S) {
    h = !S;
  }
  return { shouldConstrain: p, constrain: y, toggleActive: g };
}
function QA(n, r, i, o, s) {
  const c = pr(-r + n, 0),
    d = g(),
    m = y(),
    h = b();
  function p(C, x) {
    return qi(C, x) <= 1;
  }
  function y() {
    const C = d[0],
      x = gn(d),
      E = d.lastIndexOf(C),
      _ = d.indexOf(x) + 1;
    return pr(E, _);
  }
  function g() {
    return i
      .map((C, x) => {
        const { min: E, max: _ } = c,
          N = c.constrain(C),
          w = !x,
          z = ch(i, x);
        return w ? _ : z || p(E, N) ? E : p(_, N) ? _ : N;
      })
      .map((C) => parseFloat(C.toFixed(3)));
  }
  function b() {
    if (r <= n + s) return [c.max];
    if (o === "keepSnaps") return d;
    const { min: C, max: x } = m;
    return d.slice(C, x);
  }
  return { snapsContained: h, scrollContainLimit: m };
}
function kA(n, r, i) {
  const o = r[0],
    s = i ? o - n : gn(r);
  return { limit: pr(s, o) };
}
function YA(n, r, i, o) {
  const c = r.min + 0.1,
    d = r.max + 0.1,
    { reachedMin: m, reachedMax: h } = pr(c, d);
  function p(b) {
    return b === 1 ? h(i.get()) : b === -1 ? m(i.get()) : !1;
  }
  function y(b) {
    if (!p(b)) return;
    const S = n * (b * -1);
    o.forEach((C) => C.add(S));
  }
  return { loop: y };
}
function VA(n) {
  const { max: r, length: i } = n;
  function o(c) {
    const d = c - r;
    return i ? d / -i : 0;
  }
  return { get: o };
}
function GA(n, r, i, o, s) {
  const { startEdge: c, endEdge: d } = n,
    { groupSlides: m } = s,
    h = g().map(r.measure),
    p = b(),
    y = S();
  function g() {
    return m(o)
      .map((x) => gn(x)[d] - x[0][c])
      .map(Fe);
  }
  function b() {
    return o.map((x) => i[c] - x[c]).map((x) => -Fe(x));
  }
  function S() {
    return m(p)
      .map((x) => x[0])
      .map((x, E) => x + h[E]);
  }
  return { snaps: p, snapsAligned: y };
}
function XA(n, r, i, o, s, c) {
  const { groupSlides: d } = s,
    { min: m, max: h } = o,
    p = y();
  function y() {
    const b = d(c),
      S = !n || r === "keepSnaps";
    return i.length === 1
      ? [c]
      : S
        ? b
        : b.slice(m, h).map((C, x, E) => {
            const _ = !x,
              N = ch(E, x);
            if (_) {
              const w = gn(E[0]) + 1;
              return M0(w);
            }
            if (N) {
              const w = po(c) - gn(E)[0] + 1;
              return M0(w, gn(E)[0]);
            }
            return C;
          });
  }
  return { slideRegistry: p };
}
function ZA(n, r, i, o, s) {
  const { reachedAny: c, removeOffset: d, constrain: m } = o;
  function h(C) {
    return C.concat().sort((x, E) => Fe(x) - Fe(E))[0];
  }
  function p(C) {
    const x = n ? d(C) : m(C),
      E = r
        .map((N, w) => ({ diff: y(N - x, 0), index: w }))
        .sort((N, w) => Fe(N.diff) - Fe(w.diff)),
      { index: _ } = E[0];
    return { index: _, distance: x };
  }
  function y(C, x) {
    const E = [C, C + i, C - i];
    if (!n) return C;
    if (!x) return h(E);
    const _ = E.filter((N) => uh(N) === x);
    return _.length ? h(_) : gn(E) - i;
  }
  function g(C, x) {
    const E = r[C] - s.get(),
      _ = y(E, x);
    return { index: C, distance: _ };
  }
  function b(C, x) {
    const E = s.get() + C,
      { index: _, distance: N } = p(E),
      w = !n && c(E);
    if (!x || w) return { index: _, distance: C };
    const z = r[_] - N,
      M = C + y(z, 0);
    return { index: _, distance: M };
  }
  return { byDistance: b, byIndex: g, shortcut: y };
}
function PA(n, r, i, o, s, c, d) {
  function m(g) {
    const b = g.distance,
      S = g.index !== r.get();
    (c.add(b),
      b && (o.duration() ? n.start() : (n.update(), n.render(1), n.update())),
      S && (i.set(r.get()), r.set(g.index), d.emit("select")));
  }
  function h(g, b) {
    const S = s.byDistance(g, b);
    m(S);
  }
  function p(g, b) {
    const S = r.clone().set(g),
      C = s.byIndex(S.get(), b);
    m(C);
  }
  return { distance: h, index: p };
}
function IA(n, r, i, o, s, c, d, m) {
  const h = { passive: !0, capture: !0 };
  let p = 0;
  function y(S) {
    if (!m) return;
    function C(x) {
      if (new Date().getTime() - p > 10) return;
      (d.emit("slideFocusStart"), (n.scrollLeft = 0));
      const N = i.findIndex((w) => w.includes(x));
      sh(N) && (s.useDuration(0), o.index(N, 0), d.emit("slideFocus"));
    }
    (c.add(document, "keydown", g, !1),
      r.forEach((x, E) => {
        c.add(
          x,
          "focus",
          (_) => {
            (Hu(m) || m(S, _)) && C(E);
          },
          h,
        );
      }));
  }
  function g(S) {
    S.code === "Tab" && (p = new Date().getTime());
  }
  return { init: y };
}
function Ui(n) {
  let r = n;
  function i() {
    return r;
  }
  function o(h) {
    r = d(h);
  }
  function s(h) {
    r += d(h);
  }
  function c(h) {
    r -= d(h);
  }
  function d(h) {
    return sh(h) ? h : h.get();
  }
  return { get: i, set: o, add: s, subtract: c };
}
function nS(n, r) {
  const i = n.scroll === "x" ? d : m,
    o = r.style;
  let s = null,
    c = !1;
  function d(b) {
    return `translate3d(${b}px,0px,0px)`;
  }
  function m(b) {
    return `translate3d(0px,${b}px,0px)`;
  }
  function h(b) {
    if (c) return;
    const S = NA(n.direction(b));
    S !== s && ((o.transform = i(S)), (s = S));
  }
  function p(b) {
    c = !b;
  }
  function y() {
    c ||
      ((o.transform = ""),
      r.getAttribute("style") || r.removeAttribute("style"));
  }
  return { clear: y, to: h, toggleActive: p };
}
function KA(n, r, i, o, s, c, d, m, h) {
  const y = Ki(s),
    g = Ki(s).reverse(),
    b = _().concat(N());
  function S(O, B) {
    return O.reduce((D, H) => D - s[H], B);
  }
  function C(O, B) {
    return O.reduce((D, H) => (S(D, B) > 0 ? D.concat([H]) : D), []);
  }
  function x(O) {
    return c.map((B, D) => ({
      start: B - o[D] + 0.5 + O,
      end: B + r - 0.5 + O,
    }));
  }
  function E(O, B, D) {
    const H = x(B);
    return O.map((L) => {
      const q = D ? 0 : -i,
        Y = D ? i : 0,
        G = D ? "end" : "start",
        ne = H[L][G];
      return {
        index: L,
        loopPoint: ne,
        slideLocation: Ui(-1),
        translate: nS(n, h[L]),
        target: () => (m.get() > ne ? q : Y),
      };
    });
  }
  function _() {
    const O = d[0],
      B = C(g, O);
    return E(B, i, !1);
  }
  function N() {
    const O = r - d[0] - 1,
      B = C(y, O);
    return E(B, -i, !0);
  }
  function w() {
    return b.every(({ index: O }) => {
      const B = y.filter((D) => D !== O);
      return S(B, r) <= 0.1;
    });
  }
  function z() {
    b.forEach((O) => {
      const { target: B, translate: D, slideLocation: H } = O,
        L = B();
      L !== H.get() && (D.to(L), H.set(L));
    });
  }
  function M() {
    b.forEach((O) => O.translate.clear());
  }
  return { canLoop: w, clear: M, loop: z, loopPoints: b };
}
function FA(n, r, i) {
  let o,
    s = !1;
  function c(h) {
    if (!i) return;
    function p(y) {
      for (const g of y)
        if (g.type === "childList") {
          (h.reInit(), r.emit("slidesChanged"));
          break;
        }
    }
    ((o = new MutationObserver((y) => {
      s || ((Hu(i) || i(h, y)) && p(y));
    })),
      o.observe(n, { childList: !0 }));
  }
  function d() {
    (o && o.disconnect(), (s = !0));
  }
  return { init: c, destroy: d };
}
function JA(n, r, i, o) {
  const s = {};
  let c = null,
    d = null,
    m,
    h = !1;
  function p() {
    ((m = new IntersectionObserver(
      (C) => {
        h ||
          (C.forEach((x) => {
            const E = r.indexOf(x.target);
            s[E] = x;
          }),
          (c = null),
          (d = null),
          i.emit("slidesInView"));
      },
      { root: n.parentElement, threshold: o },
    )),
      r.forEach((C) => m.observe(C)));
  }
  function y() {
    (m && m.disconnect(), (h = !0));
  }
  function g(C) {
    return Fi(s).reduce((x, E) => {
      const _ = parseInt(E),
        { isIntersecting: N } = s[_];
      return (((C && N) || (!C && !N)) && x.push(_), x);
    }, []);
  }
  function b(C = !0) {
    if (C && c) return c;
    if (!C && d) return d;
    const x = g(C);
    return (C && (c = x), C || (d = x), x);
  }
  return { init: p, destroy: y, get: b };
}
function WA(n, r, i, o, s, c) {
  const { measureSize: d, startEdge: m, endEdge: h } = n,
    p = i[0] && s,
    y = C(),
    g = x(),
    b = i.map(d),
    S = E();
  function C() {
    if (!p) return 0;
    const N = i[0];
    return Fe(r[m] - N[m]);
  }
  function x() {
    if (!p) return 0;
    const N = c.getComputedStyle(gn(o));
    return parseFloat(N.getPropertyValue(`margin-${h}`));
  }
  function E() {
    return i
      .map((N, w, z) => {
        const M = !w,
          j = ch(z, w);
        return M ? b[w] + y : j ? b[w] + g : z[w + 1][m] - N[m];
      })
      .map(Fe);
  }
  return { slideSizes: b, slideSizesWithGaps: S, startGap: y, endGap: g };
}
function e5(n, r, i, o, s, c, d, m, h) {
  const { startEdge: p, endEdge: y, direction: g } = n,
    b = sh(i);
  function S(_, N) {
    return Ki(_)
      .filter((w) => w % N === 0)
      .map((w) => _.slice(w, w + N));
  }
  function C(_) {
    return _.length
      ? Ki(_)
          .reduce((N, w, z) => {
            const M = gn(N) || 0,
              j = M === 0,
              O = w === po(_),
              B = s[p] - c[M][p],
              D = s[p] - c[w][y],
              H = !o && j ? g(d) : 0,
              L = !o && O ? g(m) : 0,
              q = Fe(D - L - (B + H));
            return (z && q > r + h && N.push(w), O && N.push(_.length), N);
          }, [])
          .map((N, w, z) => {
            const M = Math.max(z[w - 1] || 0);
            return _.slice(M, N);
          })
      : [];
  }
  function x(_) {
    return b ? S(_, i) : C(_);
  }
  return { groupSlides: x };
}
function t5(n, r, i, o, s, c, d) {
  const {
      align: m,
      axis: h,
      direction: p,
      startIndex: y,
      loop: g,
      duration: b,
      dragFree: S,
      dragThreshold: C,
      inViewThreshold: x,
      slidesToScroll: E,
      skipSnaps: _,
      containScroll: N,
      watchResize: w,
      watchSlides: z,
      watchDrag: M,
      watchFocus: j,
    } = c,
    O = 2,
    B = LA(),
    D = B.measure(r),
    H = i.map(B.measure),
    L = jA(h, p),
    q = L.measureSize(D),
    Y = BA(q),
    G = zA(m, q),
    ne = !g && !!N,
    Q = g || !!N,
    {
      slideSizes: K,
      slideSizesWithGaps: F,
      startGap: W,
      endGap: se,
    } = WA(L, D, H, i, Q, s),
    U = e5(L, q, E, g, D, H, W, se, O),
    { snaps: X, snapsAligned: le } = GA(L, G, D, H, U),
    ee = -gn(X) + gn(F),
    { snapsContained: ue, scrollContainLimit: ce } = QA(q, ee, le, N, O),
    oe = ne ? ue : le,
    { limit: he } = kA(ee, oe, g),
    de = tS(po(oe), y, g),
    ge = de.clone(),
    xe = Ki(i),
    fe = ({
      dragHandler: Dn,
      scrollBody: zl,
      scrollBounds: Ol,
      options: { loop: Cn },
    }) => {
      (Cn || Ol.constrain(Dn.pointerDown()), zl.seek());
    },
    Ce = (
      {
        scrollBody: Dn,
        translate: zl,
        location: Ol,
        offsetLocation: Cn,
        previousLocation: Ct,
        scrollLooper: Tn,
        slideLooper: Tt,
        dragHandler: $u,
        animation: qu,
        eventHandler: vo,
        scrollBounds: Er,
        options: { loop: qa },
      },
      Qa,
    ) => {
      const wn = Dn.settled(),
        Cr = !Er.shouldConstrain(),
        ua = qa ? wn : wn && Cr,
        bo = ua && !$u.pointerDown();
      bo && qu.stop();
      const So = Ol.get() * Qa + Ct.get() * (1 - Qa);
      (Cn.set(So),
        qa && (Tn.loop(Dn.direction()), Tt.loop()),
        zl.to(Cn.get()),
        bo && vo.emit("settle"),
        ua || vo.emit("scroll"));
    },
    Re = OA(
      o,
      s,
      () => fe(Nl),
      (Dn) => Ce(Nl, Dn),
    ),
    Oe = 0.68,
    qe = oe[de.get()],
    nt = Ui(qe),
    dt = Ui(qe),
    ot = Ui(qe),
    ut = Ui(qe),
    _t = $A(nt, ot, dt, ut, b, Oe),
    Et = ZA(g, oe, ee, he, ut),
    Al = PA(Re, de, ge, _t, Et, ut, d),
    St = VA(he),
    yo = Ji(),
    go = JA(r, i, d, x),
    { slideRegistry: Ml } = XA(ne, N, oe, ce, U, xe),
    xr = IA(n, i, Ml, Al, _t, yo, d, j),
    Nl = {
      ownerDocument: o,
      ownerWindow: s,
      eventHandler: d,
      containerRect: D,
      slideRects: H,
      animation: Re,
      axis: L,
      dragHandler: DA(
        L,
        n,
        o,
        s,
        ut,
        UA(L, s),
        nt,
        Re,
        Al,
        _t,
        Et,
        de,
        d,
        Y,
        S,
        C,
        _,
        Oe,
        M,
      ),
      eventStore: yo,
      percentOfView: Y,
      index: de,
      indexPrevious: ge,
      limit: he,
      location: nt,
      offsetLocation: ot,
      previousLocation: dt,
      options: c,
      resizeHandler: HA(r, d, s, i, L, w, B),
      scrollBody: _t,
      scrollBounds: qA(he, ot, ut, _t, Y),
      scrollLooper: YA(ee, he, ot, [nt, ot, dt, ut]),
      scrollProgress: St,
      scrollSnapList: oe.map(St.get),
      scrollSnaps: oe,
      scrollTarget: Et,
      scrollTo: Al,
      slideLooper: KA(L, q, ee, K, F, X, oe, ot, i),
      slideFocus: xr,
      slidesHandler: FA(r, d, z),
      slidesInView: go,
      slideIndexes: xe,
      slideRegistry: Ml,
      slidesToScroll: U,
      target: ut,
      translate: nS(L, r),
    };
  return Nl;
}
function n5() {
  let n = {},
    r;
  function i(p) {
    r = p;
  }
  function o(p) {
    return n[p] || [];
  }
  function s(p) {
    return (o(p).forEach((y) => y(r, p)), h);
  }
  function c(p, y) {
    return ((n[p] = o(p).concat([y])), h);
  }
  function d(p, y) {
    return ((n[p] = o(p).filter((g) => g !== y)), h);
  }
  function m() {
    n = {};
  }
  const h = { init: i, emit: s, off: d, on: c, clear: m };
  return h;
}
const a5 = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function r5(n) {
  function r(c, d) {
    return eS(c, d || {});
  }
  function i(c) {
    const d = c.breakpoints || {},
      m = Fi(d)
        .filter((h) => n.matchMedia(h).matches)
        .map((h) => d[h])
        .reduce((h, p) => r(h, p), {});
    return r(c, m);
  }
  function o(c) {
    return c
      .map((d) => Fi(d.breakpoints || {}))
      .reduce((d, m) => d.concat(m), [])
      .map(n.matchMedia);
  }
  return { mergeOptions: r, optionsAtMedia: i, optionsMediaQueries: o };
}
function l5(n) {
  let r = [];
  function i(c, d) {
    return (
      (r = d.filter(({ options: m }) => n.optionsAtMedia(m).active !== !1)),
      r.forEach((m) => m.init(c, n)),
      d.reduce((m, h) => Object.assign(m, { [h.name]: h }), {})
    );
  }
  function o() {
    r = r.filter((c) => c.destroy());
  }
  return { init: i, destroy: o };
}
function ou(n, r, i) {
  const o = n.ownerDocument,
    s = o.defaultView,
    c = r5(s),
    d = l5(c),
    m = Ji(),
    h = n5(),
    { mergeOptions: p, optionsAtMedia: y, optionsMediaQueries: g } = c,
    { on: b, off: S, emit: C } = h,
    x = L;
  let E = !1,
    _,
    N = p(a5, ou.globalOptions),
    w = p(N),
    z = [],
    M,
    j,
    O;
  function B() {
    const { container: xe, slides: fe } = w;
    j = (rm(xe) ? n.querySelector(xe) : xe) || n.children[0];
    const Re = rm(fe) ? j.querySelectorAll(fe) : fe;
    O = [].slice.call(Re || j.children);
  }
  function D(xe) {
    const fe = t5(n, j, O, o, s, xe, h);
    if (xe.loop && !fe.slideLooper.canLoop()) {
      const Ce = Object.assign({}, xe, { loop: !1 });
      return D(Ce);
    }
    return fe;
  }
  function H(xe, fe) {
    E ||
      ((N = p(N, xe)),
      (w = y(N)),
      (z = fe || z),
      B(),
      (_ = D(w)),
      g([N, ...z.map(({ options: Ce }) => Ce)]).forEach((Ce) =>
        m.add(Ce, "change", L),
      ),
      w.active &&
        (_.translate.to(_.location.get()),
        _.animation.init(),
        _.slidesInView.init(),
        _.slideFocus.init(ge),
        _.eventHandler.init(ge),
        _.resizeHandler.init(ge),
        _.slidesHandler.init(ge),
        _.options.loop && _.slideLooper.loop(),
        j.offsetParent && O.length && _.dragHandler.init(ge),
        (M = d.init(ge, z))));
  }
  function L(xe, fe) {
    const Ce = U();
    (q(), H(p({ startIndex: Ce }, xe), fe), h.emit("reInit"));
  }
  function q() {
    (_.dragHandler.destroy(),
      _.eventStore.clear(),
      _.translate.clear(),
      _.slideLooper.clear(),
      _.resizeHandler.destroy(),
      _.slidesHandler.destroy(),
      _.slidesInView.destroy(),
      _.animation.destroy(),
      d.destroy(),
      m.clear());
  }
  function Y() {
    E || ((E = !0), m.clear(), q(), h.emit("destroy"), h.clear());
  }
  function G(xe, fe, Ce) {
    !w.active ||
      E ||
      (_.scrollBody.useBaseFriction().useDuration(fe === !0 ? 0 : w.duration),
      _.scrollTo.index(xe, Ce || 0));
  }
  function ne(xe) {
    const fe = _.index.add(1).get();
    G(fe, xe, -1);
  }
  function Q(xe) {
    const fe = _.index.add(-1).get();
    G(fe, xe, 1);
  }
  function K() {
    return _.index.add(1).get() !== U();
  }
  function F() {
    return _.index.add(-1).get() !== U();
  }
  function W() {
    return _.scrollSnapList;
  }
  function se() {
    return _.scrollProgress.get(_.offsetLocation.get());
  }
  function U() {
    return _.index.get();
  }
  function X() {
    return _.indexPrevious.get();
  }
  function le() {
    return _.slidesInView.get();
  }
  function ee() {
    return _.slidesInView.get(!1);
  }
  function ue() {
    return M;
  }
  function ce() {
    return _;
  }
  function oe() {
    return n;
  }
  function he() {
    return j;
  }
  function de() {
    return O;
  }
  const ge = {
    canScrollNext: K,
    canScrollPrev: F,
    containerNode: he,
    internalEngine: ce,
    destroy: Y,
    off: S,
    on: b,
    emit: C,
    plugins: ue,
    previousScrollSnap: X,
    reInit: x,
    rootNode: oe,
    scrollNext: ne,
    scrollPrev: Q,
    scrollProgress: se,
    scrollSnapList: W,
    scrollTo: G,
    selectedScrollSnap: U,
    slideNodes: de,
    slidesInView: le,
    slidesNotInView: ee,
  };
  return (H(r, i), setTimeout(() => h.emit("init"), 0), ge);
}
ou.globalOptions = void 0;
function fh(n = {}, r = []) {
  const i = T.useRef(n),
    o = T.useRef(r),
    [s, c] = T.useState(),
    [d, m] = T.useState(),
    h = T.useCallback(() => {
      s && s.reInit(i.current, o.current);
    }, [s]);
  return (
    T.useEffect(() => {
      oh(i.current, n) || ((i.current = n), h());
    }, [n, h]),
    T.useEffect(() => {
      AA(o.current, r) || ((o.current = r), h());
    }, [r, h]),
    T.useEffect(() => {
      if (_A() && d) {
        ou.globalOptions = fh.globalOptions;
        const p = ou(d, i.current, o.current);
        return (c(p), () => p.destroy());
      } else c(void 0);
    }, [d, c]),
    [m, s]
  );
}
fh.globalOptions = void 0;
function i5({ fullscreenPhoto: n, onClose: r, backColor: i }) {
  return R.jsx(En, {
    opened: !!n,
    onClose: r,
    withCloseButton: !1,
    size: "100%",
    styles: {
      body: { padding: 0 },
      content: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `rgba(${i},0.75)`,
        border: "none",
        zIndex: 1e4,
      },
      root: { zIndex: 1e4 },
    },
    children:
      n &&
      R.jsx("img", {
        src: n,
        alt: "Полный экран",
        style: {
          maxWidth: "95vw",
          maxHeight: "95vh",
          objectFit: "contain",
          cursor: "zoom-out",
        },
        onClick: r,
      }),
  });
}
const o5 = "_hiddenFileInput_1k4tc_2",
  s5 = "_visuallyHidden_1k4tc_6",
  N0 = { hiddenFileInput: o5, visuallyHidden: s5 };
function u5({ photoUrls: n, editable: r = !1, borderColor: i, onPhotoAdd: o }) {
  const [s, c] = fh({ loop: !0 }),
    [d, m] = T.useState(0),
    [h, p] = T.useState(null),
    y = T.useRef(null),
    g = n.length > 0,
    b = (x) => {
      p(x);
    },
    S = (x) => {
      const E = x.target.files?.[0];
      E && o && (o(E), (x.target.value = ""));
    },
    C = () => {
      y.current?.click();
    };
  return (
    T.useEffect(() => {
      if (!c) return;
      const x = () => {
        m(c.selectedScrollSnap());
      };
      return (
        c.on("select", x),
        x(),
        () => {
          c.off("select", x);
        }
      );
    }, [c]),
    g
      ? R.jsxs(R.Fragment, {
          children: [
            R.jsxs("div", {
              style: { position: "relative", display: "inline-block" },
              children: [
                R.jsx("div", {
                  ref: s,
                  style: {
                    overflow: "hidden",
                    borderRadius: "15px",
                    border: `5px solid rgba(${i} , 0.4 `,
                    boxShadow: `0px 0px 20px rgba(${i},  0.8)`,
                  },
                  children: R.jsx("div", {
                    style: { display: "flex" },
                    children: n.map((x, E) =>
                      R.jsx(
                        "div",
                        {
                          style: {
                            flex: "0 0 100%",
                            position: "relative",
                            minWidth: "0",
                          },
                          children: R.jsx(km, {
                            src: x,
                            fallbackSrc: "/assets/placeholder-person.jpg",
                            alt: "нет фото",
                            fit: "cover",
                            onClick: () => b(x),
                            style: {
                              cursor: "zoom-in",
                              width: "100%",
                              height: "100%",
                            },
                          }),
                        },
                        E,
                      ),
                    ),
                  }),
                }),
                n.length > 1 &&
                  R.jsx("div", {
                    style: {
                      position: "absolute",
                      bottom: 12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: 6,
                      zIndex: 20,
                    },
                    children: n.map((x, E) =>
                      R.jsx(
                        "button",
                        {
                          onClick: () => c?.scrollTo(E),
                          style: {
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor:
                              E === d ? "#fff" : "rgba(255,255,255,0.5)",
                            cursor: "pointer",
                            padding: 0,
                          },
                          "aria-label": `Перейти к фото ${E + 1}`,
                        },
                        E,
                      ),
                    ),
                  }),
                r &&
                  n.length < 5 &&
                  R.jsxs(R.Fragment, {
                    children: [
                      R.jsx("label", {
                        htmlFor: "person-photo-upload",
                        className: N0.visuallyHidden,
                        children: "Загрузить фото персоны",
                      }),
                      R.jsx("input", {
                        id: "person-photo-upload",
                        ref: y,
                        type: "file",
                        accept: "image/*",
                        className: N0.hiddenFileInput,
                        onChange: S,
                      }),
                      R.jsx("button", {
                        type: "button",
                        onClick: C,
                        style: {
                          marginTop: "8px",
                          fontSize: "12px",
                          color: "#1c7ed6",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          userSelect: "none",
                        },
                        children: "+ Добавить фото",
                      }),
                    ],
                  }),
                r &&
                  n.length >= 5 &&
                  R.jsx("div", {
                    style: {
                      marginTop: "4px",
                      fontSize: "11px",
                      color: "#999",
                      textAlign: "center",
                    },
                    children: "Максимум 5 фото",
                  }),
              ],
            }),
            R.jsx(i5, {
              fullscreenPhoto: h,
              onClose: () => p(null),
              backColor: i,
            }),
          ],
        })
      : R.jsx("div", {
          style: {
            width: 120,
            height: 120,
            background: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgb(#999)",
            fontSize: "12px",
          },
          children: "Нет фото",
        })
  );
}
function c5(n) {
  const r = n.getDate(),
    i = n.getMonth() + 1;
  return (i === 3 && r >= 21) || (i === 4 && r <= 19)
    ? "Овен"
    : (i === 4 && r >= 20) || (i === 5 && r <= 20)
      ? "Телец"
      : (i === 5 && r >= 21) || (i === 6 && r <= 20)
        ? "Близнецы"
        : (i === 6 && r >= 21) || (i === 7 && r <= 22)
          ? "Рак"
          : (i === 7 && r >= 23) || (i === 8 && r <= 22)
            ? "Лев"
            : (i === 8 && r >= 23) || (i === 9 && r <= 22)
              ? "Дева"
              : (i === 9 && r >= 23) || (i === 10 && r <= 22)
                ? "Весы"
                : (i === 10 && r >= 23) || (i === 11 && r <= 21)
                  ? "Скорпион"
                  : (i === 11 && r >= 22) || (i === 12 && r <= 21)
                    ? "Стрелец"
                    : (i === 12 && r >= 22) || (i === 1 && r <= 19)
                      ? "Козерог"
                      : (i === 1 && r >= 20) || (i === 2 && r <= 18)
                        ? "Водолей"
                        : "Рыбы";
}
function f5(n) {
  const r = n.getFullYear(),
    i = [
      "Крыса",
      "Бык",
      "Тигр",
      "Кролик",
      "Дракон",
      "Змея",
      "Лошадь",
      "Коза",
      "Обезьяна",
      "Петух",
      "Собака",
      "Свинья",
    ],
    o = (r - 1900) % 12;
  return i[o >= 0 ? o : o + 12];
}
function jd({
  person: n,
  typePerson: r,
  isMobile: i,
  handleNavigateUp: o,
  handleNavigateDown: s,
}) {
  function c(x, E) {
    const _ = E ? new Date(E) : new Date(),
      N = new Date(x);
    let w = _.getFullYear() - N.getFullYear();
    const z = _.getMonth() - N.getMonth();
    return ((z < 0 || (z === 0 && _.getDate() < N.getDate())) && w--, w);
  }
  function d(x) {
    if (x % 100 >= 11 && x % 100 <= 14) return "лет";
    switch (x % 10) {
      case 1:
        return "год";
      case 2:
      case 3:
      case 4:
        return "года";
      default:
        return "лет";
    }
  }
  const m = `${n.firstName} ${n.patronynicName}`.trim(),
    h = n.birthDate ? new Date(n.birthDate) : void 0,
    p = n.deathDate ? new Date(n.deathDate) : void 0,
    y = h ? c(h, p) : null,
    g = p ? "0,0,0" : "0,255,255";
  let b = "",
    S = "",
    C = " ";
  return (
    h && ((b = c5(h)), (S = f5(h))),
    r === "child" && (C = n.id),
    R.jsx(br, {
      withBorder: !0,
      p: "md",
      radius: "md",
      style: {
        maxWidth: 320,
        maiWidth: 120,
        width: "100%",
        height: r === "parent" && !i ? "700px" : "100%",
        border: "2px,solid, rgba(235, 223, 223, 1)",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgb(250, 250, 250)",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
      children: R.jsxs(on, {
        gap: "xs",
        style: { alignItems: "center", textAlign: "center", padding: "1rem" },
        children: [
          R.jsxs(ea, {
            justify: "center",
            align: "flex-start",
            children: [
              R.jsxs("div", {
                children: [
                  r === "parent" &&
                    R.jsxs(Ut, {
                      style: {
                        backgroundColor: "rgba(235, 223, 223, 1)",
                        color: "rgba(90, 85, 85, 1)",
                        border: "1px solid rgba(201, 186, 186, 1) ",
                      },
                      fullWidth: !0,
                      radius: "md",
                      onClick: o,
                      children: [" ", R.jsx(wA, { width: 100 })],
                    }),
                  R.jsx(Da, {
                    order: 2,
                    children: n.lastName || "Без фамилии",
                  }),
                  n.parentLastName &&
                    R.jsx(Da, { order: 3, children: `(${n.parentLastName})` }),
                  R.jsx(Da, { order: 3, children: m || "Без имени" }),
                ],
              }),
              R.jsx(u5, {
                photoUrls: n.photoUrls.map((x) => x.url),
                photoIds: n.photoUrls.map((x) => x.id),
                personId: n.id,
                borderColor: g,
              }),
            ],
          }),
          R.jsxs(Ke, {
            size: "lg",
            c: "dimmed",
            children: [
              h && `${h.toLocaleDateString("ru-RU")}`,
              p && ` — ${p.toLocaleDateString("ru-RU")}`,
            ],
          }),
          R.jsx(Ke, { size: "md", children: y && ` (${y} ${d(y)})` }),
          n.phone && R.jsxs(Ke, { size: "lg", children: ["📱 ", n.phone] }),
          h &&
            R.jsxs(R.Fragment, {
              children: [
                R.jsx(Qm, {}),
                R.jsxs(on, {
                  align: "center",
                  gap: "xs",
                  children: [
                    R.jsxs(Ke, {
                      size: "lg",
                      children: [R.jsx("b", { children: "Знак:" }), " ", b],
                    }),
                    R.jsxs(Ke, {
                      size: "lg",
                      children: [R.jsx("b", { children: "Год:" }), " ", S],
                    }),
                    r === "child" &&
                      R.jsxs(Ut, {
                        style: {
                          backgroundColor: "rgba(235, 223, 223, 1)",
                          color: "rgba(90, 85, 85, 1)",
                          border: "1px solid rgba(201, 186, 186, 1) ",
                        },
                        fullWidth: !0,
                        radius: "lg",
                        onClick: () => s?.(C),
                        children: [" ", R.jsx(CA, { width: 100 })],
                      }),
                  ],
                }),
              ],
            }),
        ],
      }),
    })
  );
}
const d5 = { id: "ph11", url: "/family-tree/assets/p1-1.jpg" },
  m5 = { id: "ph12", url: "/family-tree/assets/p1-2.jpg" },
  h5 = { id: "ph13", url: "/family-tree/assets/p1-3.jpg" },
  p5 = { id: "ph21", url: "/family-tree/assets/p2-1.jpg" },
  y5 = { id: "ph22", url: "/family-tree/assets/p2-2.jpg" },
  g5 = { id: "ph31", url: "/family-tree/assets/p3-1.jpg" },
  v5 = { id: "ph32", url: "/family-tree/assets/p3-2.jpg" },
  b5 = { id: "ph33", url: "/family-tree/assets/p3-3.jpg" },
  S5 = { id: "ph41", url: "/family-tree/assets/p4-1.jpg" },
  x5 = { id: "ph42", url: "/family-tree/assets/p4-2.jpg" },
  E5 = { id: "ph43", url: "/family-tree/assets/p4-3.jpg" },
  C5 = { id: "ph51", url: "/family-tree/assets/p5-1.jpg" },
  T5 = { id: "ph52", url: "/family-tree/assets/p5-2.jpg" },
  w5 = { id: "ph53", url: "/family-tree/assets/p5-3.jpg" },
  R5 = { id: "ph54", url: "/family-tree/assets/p5-4.jpg" },
  _5 = { id: "ph61", url: "/family-tree/assets/p6-1.jpg" },
  A5 = { id: "ph62", url: "/family-tree/assets/p6-2.jpg" },
  M5 = { id: "ph63", url: "/family-tree/assets/p6-3.jpg" },
  N5 = {
    id: "p1",
    firstName: "Иван",
    lastName: "Демидович",
    parentLastName: null,
    patronynicName: "Семенович",
    birthDate: "1914-08-15T00:00:00.000Z",
    deathDate: "1992-01-01T00:00:00.000Z",
    gender: "male",
    phone: null,
    parentId: "p10",
    userId: "u1",
    branch: "base",
    photoUrls: [d5, m5, h5],
  },
  z5 = {
    id: "p2",
    firstName: "Ольга",
    lastName: "Демидович",
    parentLastName: "Калько",
    patronynicName: "Константиновна",
    birthDate: "1918-04-13T00:00:00.000Z",
    deathDate: "2008-01-25T00:00:00.000Z",
    gender: "female",
    phone: null,
    parentId: null,
    userId: null,
    branch: "base",
    photoUrls: [p5, y5],
  },
  O5 = {
    id: "p3",
    firstName: "Константин",
    lastName: "Демидович",
    parentLastName: null,
    patronynicName: "Иванович",
    birthDate: "1950-02-26T00:00:00.000Z",
    deathDate: null,
    gender: "male",
    phone: null,
    parentId: "p1",
    userId: null,
    branch: "base",
    photoUrls: [g5, v5, b5],
  },
  j5 = {
    id: "p4",
    firstName: "Иван",
    lastName: "Демидович",
    parentLastName: null,
    patronynicName: "Иванович",
    birthDate: "1944-07-10T00:00:00.000Z",
    deathDate: "1973-08-19T00:00:00.000Z",
    gender: "male",
    phone: null,
    parentId: "p1",
    userId: null,
    branch: "base",
    photoUrls: [S5, x5, E5],
  },
  D5 = {
    id: "p5",
    firstName: "Лариса",
    lastName: "Жданок",
    parentLastName: "Демидович",
    patronynicName: "Ивановна",
    birthDate: "1939-01-01T00:00:00.000Z",
    deathDate: "2004-10-23T00:00:00.000Z",
    gender: "female",
    phone: null,
    parentId: "p1",
    userId: null,
    branch: "base",
    photoUrls: [C5, T5, w5, R5],
  },
  U5 = {
    id: "p6",
    firstName: "Раиса",
    lastName: "Павлова",
    parentLastName: "Демидович",
    patronynicName: "Ивановна",
    birthDate: "1942-02-20T00:00:00.000Z",
    deathDate: null,
    gender: "male",
    phone: "+375299228668",
    parentId: "p1",
    userId: null,
    branch: "base",
    photoUrls: [_5, A5, M5],
  },
  L5 = {
    husband: N5,
    wife: z5,
    otherPartnersHusband: [],
    otherPartnersWife: [],
    children: [O5, j5, D5, U5],
    parentId: "p10",
  };
function B5() {
  const n = db("(max-width: 599px)"),
    [r] = T.useState(L5),
    i = () => {
      alert("Переход к родителям");
    },
    o = (c) => {
      alert(`Переход к семье ребёнка ${c}`);
    },
    s = (c) => {
      alert(`Переключение партнёра: ${c}`);
    };
  return R.jsxs(on, {
    p: "md",
    style: { minHeight: "100vh", alignItems: "center" },
    children: [
      R.jsx("div", {
        style: {
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 10,
          padding: "8px 0",
        },
        children: R.jsx("div", {
          children: "🔍 Поиск | 📂 Выбор базы | ➕ Добавить",
        }),
      }),
      R.jsxs(vr, {
        style: { height: 1e3 },
        children: [
          R.jsx("div", {
            style: {
              backgroundColor: "rgba(245, 242, 242, 1)",
              padding: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              borderRadius: "10px",
              border: "1px solid rgba(201, 186, 186, 1) ",
            },
            children: R.jsxs(ea, {
              justify: "center",
              style: {
                flexWrap: "nowrap",
                flexDirection: n ? "column" : "row",
                alignItems: n ? "center" : "flex-start",
                gap: n ? "1.5rem" : "0.5rem",
              },
              children: [
                r.otherPartnersHusband.length !== 0 &&
                  R.jsx(jn, {
                    style: {
                      backgroundColor: "rgba(235, 223, 223, 1)",
                      color: "rgba(90, 85, 85, 1)",
                      height: "200px",
                      border: "1px solid rgba(201, 186, 186, 1) ",
                    },
                    onClick: () => s("left"),
                    children: R.jsx(bA, {}),
                  }),
                r.husband &&
                  R.jsx(jd, {
                    person: r.husband,
                    handleNavigateUp: i,
                    typePerson: "parent",
                    isMobile: n,
                  }),
                r.wife &&
                  R.jsx(jd, {
                    person: r.wife,
                    handleNavigateUp: i,
                    typePerson: "parent",
                    isMobile: n,
                  }),
                r.otherPartnersWife.length !== 0 &&
                  R.jsx(jn, {
                    style: {
                      backgroundColor: "rgba(235, 223, 223, 1)",
                      color: "rgba(90, 85, 85, 1)",
                      border: "1px solid rgba(201, 186, 186, 1) ",
                    },
                    onClick: () => s("right"),
                    children: R.jsx(xA, {}),
                  }),
              ],
            }),
          }),
          R.jsx("div", {
            style: { marginTop: "1rem", width: "100%" },
            children: R.jsx(on, {
              gap: "md",
              style: { alignItems: "center" },
              children: r.children.map((c) =>
                R.jsx(
                  "div",
                  {
                    style: { position: "relative", marginTop: "10px" },
                    children: R.jsx(jd, {
                      person: c,
                      typePerson: "child",
                      isMobile: n,
                      handleNavigateDown: (d) => o(d),
                    }),
                  },
                  c.id,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
const z0 = () => {
  const { user: n, logout: r } = ih(),
    i = cu(),
    o = () => {
      (r(), i("/login"));
    };
  return R.jsx(W1, {
    children: R.jsxs("div", {
      className:
        "flex min-h-screen items-center justify-center bg-background p-4",
      children: [
        R.jsx(br, {
          shadow: "md",
          p: "xl",
          radius: "lg",
          className: "w-full max-w-md",
          children: R.jsx(on, {
            gap: "lg",
            children: R.jsxs(ea, {
              justify: "space-between",
              align: "center",
              children: [
                R.jsxs(ye, {
                  children: [
                    R.jsx(Ke, { size: "xl", fw: 700, children: "Мини-чат" }),
                    R.jsxs(Ke, {
                      size: "sm",
                      c: "dimmed",
                      children: ["Привет, ", n?.name || "Пользователь", "!"],
                    }),
                  ],
                }),
                R.jsx(Ut, {
                  variant: "subtle",
                  color: "red",
                  size: "xs",
                  onClick: o,
                  children: "Выйти",
                }),
              ],
            }),
          }),
        }),
        R.jsx(yA, {}),
        R.jsx(B5, {}),
      ],
    }),
  });
};
function O0() {
  return R.jsxs("div", {
    children: [
      R.jsx(Da, { children: "Страница ненайдена" }),
      R.jsx(Ke, { children: "Ошибка перехода" }),
    ],
  });
}
function H5({ children: n }) {
  const { isAuthenticated: r, isLoading: i } = ih(),
    o = la();
  return i
    ? R.jsx($m, { h: "100vh", children: R.jsx(Sr, { size: "lg" }) })
    : r
      ? R.jsx(R.Fragment, { children: n })
      : R.jsx(pE, { to: "/login", state: { from: o }, replace: !0 });
}
function $5() {
  return R.jsx(fA, {
    children: R.jsxs(gE, {
      children: [
        R.jsx(or, {
          path: "/",
          element: R.jsx(H5, { children: R.jsx(z0, {}) }),
        }),
        R.jsx(or, { path: "/login", element: R.jsx(hA, {}) }),
        R.jsx(or, { path: "/register", element: R.jsx(O0, {}) }),
        R.jsx(or, { path: "/person/:id", element: R.jsx(dA, {}) }),
        R.jsx(or, { path: "/tree", element: R.jsx(z0, {}) }),
        R.jsx(or, { path: "*", element: R.jsx(O0, {}) }),
      ],
    }),
  });
}
const q5 = {};
Tx.createRoot(document.getElementById("root")).render(
  R.jsx(j0.StrictMode, {
    children: R.jsx(dC, {
      store: cA,
      children: R.jsx(qE, {
        children: R.jsx(Em, {
          theme: q5,
          defaultColorScheme: "light",
          children: R.jsx($5, {}),
        }),
      }),
    }),
  }),
);
