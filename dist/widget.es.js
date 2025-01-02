function Jm(o, l) {
  for (var s = 0; s < l.length; s++) {
    const u = l[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in o)) {
          const f = Object.getOwnPropertyDescriptor(u, d);
          f && Object.defineProperty(o, d, f.get ? f : {
            enumerable: !0,
            get: () => u[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
function Vd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Hd = { exports: {} }, ro = {}, Ls = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function qm() {
  if (cd)
    return ce;
  cd = 1;
  var o = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), k = Symbol.iterator;
  function R(x) {
    return x === null || typeof x != "object" ? null : (x = k && x[k] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, S = {};
  function O(x, L, ie) {
    this.props = x, this.context = L, this.refs = S, this.updater = ie || b;
  }
  O.prototype.isReactComponent = {}, O.prototype.setState = function(x, L) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, L, "setState");
  }, O.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function z() {
  }
  z.prototype = O.prototype;
  function W(x, L, ie) {
    this.props = x, this.context = L, this.refs = S, this.updater = ie || b;
  }
  var B = W.prototype = new z();
  B.constructor = W, A(B, O.prototype), B.isPureReactComponent = !0;
  var I = Array.isArray, V = Object.prototype.hasOwnProperty, J = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(x, L, ie) {
    var ae, pe = {}, me = null, ve = null;
    if (L != null)
      for (ae in L.ref !== void 0 && (ve = L.ref), L.key !== void 0 && (me = "" + L.key), L)
        V.call(L, ae) && !G.hasOwnProperty(ae) && (pe[ae] = L[ae]);
    var ye = arguments.length - 2;
    if (ye === 1)
      pe.children = ie;
    else if (1 < ye) {
      for (var Ee = Array(ye), Qe = 0; Qe < ye; Qe++)
        Ee[Qe] = arguments[Qe + 2];
      pe.children = Ee;
    }
    if (x && x.defaultProps)
      for (ae in ye = x.defaultProps, ye)
        pe[ae] === void 0 && (pe[ae] = ye[ae]);
    return { $$typeof: o, type: x, key: me, ref: ve, props: pe, _owner: J.current };
  }
  function he(x, L) {
    return { $$typeof: o, type: x.type, key: L, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function fe(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function Se(x) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ie) {
      return L[ie];
    });
  }
  var te = /\/+/g;
  function de(x, L) {
    return typeof x == "object" && x !== null && x.key != null ? Se("" + x.key) : L.toString(36);
  }
  function ue(x, L, ie, ae, pe) {
    var me = typeof x;
    (me === "undefined" || me === "boolean") && (x = null);
    var ve = !1;
    if (x === null)
      ve = !0;
    else
      switch (me) {
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case o:
            case l:
              ve = !0;
          }
      }
    if (ve)
      return ve = x, pe = pe(ve), x = ae === "" ? "." + de(ve, 0) : ae, I(pe) ? (ie = "", x != null && (ie = x.replace(te, "$&/") + "/"), ue(pe, L, ie, "", function(Qe) {
        return Qe;
      })) : pe != null && (fe(pe) && (pe = he(pe, ie + (!pe.key || ve && ve.key === pe.key ? "" : ("" + pe.key).replace(te, "$&/") + "/") + x)), L.push(pe)), 1;
    if (ve = 0, ae = ae === "" ? "." : ae + ":", I(x))
      for (var ye = 0; ye < x.length; ye++) {
        me = x[ye];
        var Ee = ae + de(me, ye);
        ve += ue(me, L, ie, Ee, pe);
      }
    else if (Ee = R(x), typeof Ee == "function")
      for (x = Ee.call(x), ye = 0; !(me = x.next()).done; )
        me = me.value, Ee = ae + de(me, ye++), ve += ue(me, L, ie, Ee, pe);
    else if (me === "object")
      throw L = String(x), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return ve;
  }
  function ke(x, L, ie) {
    if (x == null)
      return x;
    var ae = [], pe = 0;
    return ue(x, ae, "", "", function(me) {
      return L.call(ie, me, pe++);
    }), ae;
  }
  function se(x) {
    if (x._status === -1) {
      var L = x._result;
      L = L(), L.then(function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ie);
      }, function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ie);
      }), x._status === -1 && (x._status = 0, x._result = L);
    }
    if (x._status === 1)
      return x._result.default;
    throw x._result;
  }
  var re = { current: null }, T = { transition: null }, H = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: T, ReactCurrentOwner: J };
  function $() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: ke, forEach: function(x, L, ie) {
    ke(x, function() {
      L.apply(this, arguments);
    }, ie);
  }, count: function(x) {
    var L = 0;
    return ke(x, function() {
      L++;
    }), L;
  }, toArray: function(x) {
    return ke(x, function(L) {
      return L;
    }) || [];
  }, only: function(x) {
    if (!fe(x))
      throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, ce.Component = O, ce.Fragment = s, ce.Profiler = d, ce.PureComponent = W, ce.StrictMode = u, ce.Suspense = w, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, ce.act = $, ce.cloneElement = function(x, L, ie) {
    if (x == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ae = A({}, x.props), pe = x.key, me = x.ref, ve = x._owner;
    if (L != null) {
      if (L.ref !== void 0 && (me = L.ref, ve = J.current), L.key !== void 0 && (pe = "" + L.key), x.type && x.type.defaultProps)
        var ye = x.type.defaultProps;
      for (Ee in L)
        V.call(L, Ee) && !G.hasOwnProperty(Ee) && (ae[Ee] = L[Ee] === void 0 && ye !== void 0 ? ye[Ee] : L[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1)
      ae.children = ie;
    else if (1 < Ee) {
      ye = Array(Ee);
      for (var Qe = 0; Qe < Ee; Qe++)
        ye[Qe] = arguments[Qe + 2];
      ae.children = ye;
    }
    return { $$typeof: o, type: x.type, key: pe, ref: me, props: ae, _owner: ve };
  }, ce.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: f, _context: x }, x.Consumer = x;
  }, ce.createElement = oe, ce.createFactory = function(x) {
    var L = oe.bind(null, x);
    return L.type = x, L;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, ce.isValidElement = fe, ce.lazy = function(x) {
    return { $$typeof: P, _payload: { _status: -1, _result: x }, _init: se };
  }, ce.memo = function(x, L) {
    return { $$typeof: y, type: x, compare: L === void 0 ? null : L };
  }, ce.startTransition = function(x) {
    var L = T.transition;
    T.transition = {};
    try {
      x();
    } finally {
      T.transition = L;
    }
  }, ce.unstable_act = $, ce.useCallback = function(x, L) {
    return re.current.useCallback(x, L);
  }, ce.useContext = function(x) {
    return re.current.useContext(x);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(x) {
    return re.current.useDeferredValue(x);
  }, ce.useEffect = function(x, L) {
    return re.current.useEffect(x, L);
  }, ce.useId = function() {
    return re.current.useId();
  }, ce.useImperativeHandle = function(x, L, ie) {
    return re.current.useImperativeHandle(x, L, ie);
  }, ce.useInsertionEffect = function(x, L) {
    return re.current.useInsertionEffect(x, L);
  }, ce.useLayoutEffect = function(x, L) {
    return re.current.useLayoutEffect(x, L);
  }, ce.useMemo = function(x, L) {
    return re.current.useMemo(x, L);
  }, ce.useReducer = function(x, L, ie) {
    return re.current.useReducer(x, L, ie);
  }, ce.useRef = function(x) {
    return re.current.useRef(x);
  }, ce.useState = function(x) {
    return re.current.useState(x);
  }, ce.useSyncExternalStore = function(x, L, ie) {
    return re.current.useSyncExternalStore(x, L, ie);
  }, ce.useTransition = function() {
    return re.current.useTransition();
  }, ce.version = "18.3.1", ce;
}
var dd;
function ra() {
  return dd || (dd = 1, Ls.exports = qm()), Ls.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd;
function eh() {
  if (fd)
    return ro;
  fd = 1;
  var o = ra(), l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, w, y) {
    var P, k = {}, R = null, b = null;
    y !== void 0 && (R = "" + y), w.key !== void 0 && (R = "" + w.key), w.ref !== void 0 && (b = w.ref);
    for (P in w)
      u.call(w, P) && !f.hasOwnProperty(P) && (k[P] = w[P]);
    if (m && m.defaultProps)
      for (P in w = m.defaultProps, w)
        k[P] === void 0 && (k[P] = w[P]);
    return { $$typeof: l, type: m, key: R, ref: b, props: k, _owner: d.current };
  }
  return ro.Fragment = s, ro.jsx = p, ro.jsxs = p, ro;
}
Hd.exports = eh();
var U = Hd.exports, Ks = {}, Qd = { exports: {} }, et = {}, Ms = { exports: {} }, Ds = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd;
function th() {
  return pd || (pd = 1, function(o) {
    function l(T, H) {
      var $ = T.length;
      T.push(H);
      e:
        for (; 0 < $; ) {
          var x = $ - 1 >>> 1, L = T[x];
          if (0 < d(L, H))
            T[x] = H, T[$] = L, $ = x;
          else
            break e;
        }
    }
    function s(T) {
      return T.length === 0 ? null : T[0];
    }
    function u(T) {
      if (T.length === 0)
        return null;
      var H = T[0], $ = T.pop();
      if ($ !== H) {
        T[0] = $;
        e:
          for (var x = 0, L = T.length, ie = L >>> 1; x < ie; ) {
            var ae = 2 * (x + 1) - 1, pe = T[ae], me = ae + 1, ve = T[me];
            if (0 > d(pe, $))
              me < L && 0 > d(ve, pe) ? (T[x] = ve, T[me] = $, x = me) : (T[x] = pe, T[ae] = $, x = ae);
            else if (me < L && 0 > d(ve, $))
              T[x] = ve, T[me] = $, x = me;
            else
              break e;
          }
      }
      return H;
    }
    function d(T, H) {
      var $ = T.sortIndex - H.sortIndex;
      return $ !== 0 ? $ : T.id - H.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      o.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      o.unstable_now = function() {
        return p.now() - m;
      };
    }
    var w = [], y = [], P = 1, k = null, R = 3, b = !1, A = !1, S = !1, O = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(T) {
      for (var H = s(y); H !== null; ) {
        if (H.callback === null)
          u(y);
        else if (H.startTime <= T)
          u(y), H.sortIndex = H.expirationTime, l(w, H);
        else
          break;
        H = s(y);
      }
    }
    function I(T) {
      if (S = !1, B(T), !A)
        if (s(w) !== null)
          A = !0, se(V);
        else {
          var H = s(y);
          H !== null && re(I, H.startTime - T);
        }
    }
    function V(T, H) {
      A = !1, S && (S = !1, z(oe), oe = -1), b = !0;
      var $ = R;
      try {
        for (B(H), k = s(w); k !== null && (!(k.expirationTime > H) || T && !Se()); ) {
          var x = k.callback;
          if (typeof x == "function") {
            k.callback = null, R = k.priorityLevel;
            var L = x(k.expirationTime <= H);
            H = o.unstable_now(), typeof L == "function" ? k.callback = L : k === s(w) && u(w), B(H);
          } else
            u(w);
          k = s(w);
        }
        if (k !== null)
          var ie = !0;
        else {
          var ae = s(y);
          ae !== null && re(I, ae.startTime - H), ie = !1;
        }
        return ie;
      } finally {
        k = null, R = $, b = !1;
      }
    }
    var J = !1, G = null, oe = -1, he = 5, fe = -1;
    function Se() {
      return !(o.unstable_now() - fe < he);
    }
    function te() {
      if (G !== null) {
        var T = o.unstable_now();
        fe = T;
        var H = !0;
        try {
          H = G(!0, T);
        } finally {
          H ? de() : (J = !1, G = null);
        }
      } else
        J = !1;
    }
    var de;
    if (typeof W == "function")
      de = function() {
        W(te);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), ke = ue.port2;
      ue.port1.onmessage = te, de = function() {
        ke.postMessage(null);
      };
    } else
      de = function() {
        O(te, 0);
      };
    function se(T) {
      G = T, J || (J = !0, de());
    }
    function re(T, H) {
      oe = O(function() {
        T(o.unstable_now());
      }, H);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, o.unstable_continueExecution = function() {
      A || b || (A = !0, se(V));
    }, o.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < T ? Math.floor(1e3 / T) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, o.unstable_getFirstCallbackNode = function() {
      return s(w);
    }, o.unstable_next = function(T) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = R;
      }
      var $ = R;
      R = H;
      try {
        return T();
      } finally {
        R = $;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(T, H) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var $ = R;
      R = T;
      try {
        return H();
      } finally {
        R = $;
      }
    }, o.unstable_scheduleCallback = function(T, H, $) {
      var x = o.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? x + $ : x) : $ = x, T) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = $ + L, T = { id: P++, callback: H, priorityLevel: T, startTime: $, expirationTime: L, sortIndex: -1 }, $ > x ? (T.sortIndex = $, l(y, T), s(w) === null && T === s(y) && (S ? (z(oe), oe = -1) : S = !0, re(I, $ - x))) : (T.sortIndex = L, l(w, T), A || b || (A = !0, se(V))), T;
    }, o.unstable_shouldYield = Se, o.unstable_wrapCallback = function(T) {
      var H = R;
      return function() {
        var $ = R;
        R = H;
        try {
          return T.apply(this, arguments);
        } finally {
          R = $;
        }
      };
    };
  }(Ds)), Ds;
}
var md;
function nh() {
  return md || (md = 1, Ms.exports = th()), Ms.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function rh() {
  if (hd)
    return et;
  hd = 1;
  var o = ra(), l = nh();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++)
      u.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, k = {};
  function R(e) {
    return w.call(k, e) ? !0 : w.call(P, e) ? !1 : y.test(e) ? k[e] = !0 : (P[e] = !0, !1);
  }
  function b(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, n, r) {
    if (t === null || typeof t > "u" || b(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function S(e, t, n, r, i, a, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = c;
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    O[e] = new S(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    O[t] = new S(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    O[e] = new S(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    O[e] = new S(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    O[e] = new S(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    O[e] = new S(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    O[e] = new S(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    O[e] = new S(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    O[e] = new S(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      z,
      W
    );
    O[t] = new S(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(z, W);
    O[t] = new S(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(z, W);
    O[t] = new S(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    O[e] = new S(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), O.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    O[e] = new S(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, n, r) {
    var i = O.hasOwnProperty(t) ? O[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, n, i, r) && (n = null), r || i === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var I = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), J = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), he = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), Se = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), ke = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = T && e[T] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var $ = Object.assign, x;
  function L(e) {
    if (x === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        x = t && t[1] || "";
      }
    return `
` + x + e;
  }
  var ie = !1;
  function ae(e, t) {
    if (!e || ie)
      return "";
    ie = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (_) {
            var r = _;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (_) {
            r = _;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          r = _;
        }
        e();
      }
    } catch (_) {
      if (_ && r && typeof _.stack == "string") {
        for (var i = _.stack.split(`
`), a = r.stack.split(`
`), c = i.length - 1, h = a.length - 1; 1 <= c && 0 <= h && i[c] !== a[h]; )
          h--;
        for (; 1 <= c && 0 <= h; c--, h--)
          if (i[c] !== a[h]) {
            if (c !== 1 || h !== 1)
              do
                if (c--, h--, 0 > h || i[c] !== a[h]) {
                  var g = `
` + i[c].replace(" at new ", " at ");
                  return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
                }
              while (1 <= c && 0 <= h);
            break;
          }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ae(e.type, !1), e;
      case 11:
        return e = ae(e.type.render, !1), e;
      case 1:
        return e = ae(e.type, !0), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case G:
        return "Fragment";
      case J:
        return "Portal";
      case he:
        return "Profiler";
      case oe:
        return "StrictMode";
      case de:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Se:
          return (e.displayName || "Context") + ".Consumer";
        case fe:
          return (e._context.displayName || "Context") + ".Provider";
        case te:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ke:
          return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
        case se:
          t = e._payload, e = e._init;
          try {
            return me(e(t));
          } catch {
          }
      }
    return null;
  }
  function ve(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return me(t);
      case 8:
        return t === oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function ye(e) {
    switch (typeof e) {
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
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qe(e) {
    var t = Ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, a = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(c) {
        r = "" + c, a.call(this, c);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(c) {
        r = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Mn(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function fo(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ee(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Tt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ui(e, t) {
    var n = t.checked;
    return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function va(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ye(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ya(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function Bi(e, t) {
    ya(e, t);
    var n = ye(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $i(e, t.type, n) : t.hasOwnProperty("defaultValue") && $i(e, t.type, ye(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function wa(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $i(e, t, n) {
    (t !== "number" || Tt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var yr = Array.isArray;
  function Dn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ye(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(s(91));
    return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function xa(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(s(92));
        if (yr(n)) {
          if (1 < n.length)
            throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ye(n) };
  }
  function Sa(e, t) {
    var n = ye(t.value), r = ye(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ka(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ea(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ea(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var po, Ca = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (po = po || document.createElement("div"), po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = po.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function wr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, np = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xr).forEach(function(e) {
    np.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), xr[t] = xr[e];
    });
  });
  function Pa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px";
  }
  function Na(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Pa(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var rp = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Qi(e, t) {
    if (t) {
      if (rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(s(62));
    }
  }
  function Ki(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
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
  var Yi = null;
  function Gi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xi = null, jn = null, Fn = null;
  function Ra(e) {
    if (e = Br(e)) {
      if (typeof Xi != "function")
        throw Error(s(280));
      var t = e.stateNode;
      t && (t = Do(t), Xi(e.stateNode, e.type, t));
    }
  }
  function _a(e) {
    jn ? Fn ? Fn.push(e) : Fn = [e] : jn = e;
  }
  function Oa() {
    if (jn) {
      var e = jn, t = Fn;
      if (Fn = jn = null, Ra(e), t)
        for (e = 0; e < t.length; e++)
          Ra(t[e]);
    }
  }
  function ba(e, t) {
    return e(t);
  }
  function Aa() {
  }
  var Zi = !1;
  function Ta(e, t, n) {
    if (Zi)
      return e(t, n);
    Zi = !0;
    try {
      return ba(e, t, n);
    } finally {
      Zi = !1, (jn !== null || Fn !== null) && (Aa(), Oa());
    }
  }
  function Sr(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Do(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
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
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(s(231, t, typeof n));
    return n;
  }
  var Ji = !1;
  if (m)
    try {
      var kr = {};
      Object.defineProperty(kr, "passive", { get: function() {
        Ji = !0;
      } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
    } catch {
      Ji = !1;
    }
  function op(e, t, n, r, i, a, c, h, g) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, _);
    } catch (D) {
      this.onError(D);
    }
  }
  var Er = !1, mo = null, ho = !1, qi = null, ip = { onError: function(e) {
    Er = !0, mo = e;
  } };
  function lp(e, t, n, r, i, a, c, h, g) {
    Er = !1, mo = null, op.apply(ip, arguments);
  }
  function sp(e, t, n, r, i, a, c, h, g) {
    if (lp.apply(this, arguments), Er) {
      if (Er) {
        var _ = mo;
        Er = !1, mo = null;
      } else
        throw Error(s(198));
      ho || (ho = !0, qi = _);
    }
  }
  function xn(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function za(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function La(e) {
    if (xn(e) !== e)
      throw Error(s(188));
  }
  function ap(e) {
    var t = e.alternate;
    if (!t) {
      if (t = xn(e), t === null)
        throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null)
        break;
      var a = i.alternate;
      if (a === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === a.child) {
        for (a = i.child; a; ) {
          if (a === n)
            return La(i), e;
          if (a === r)
            return La(i), t;
          a = a.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return)
        n = i, r = a;
      else {
        for (var c = !1, h = i.child; h; ) {
          if (h === n) {
            c = !0, n = i, r = a;
            break;
          }
          if (h === r) {
            c = !0, r = i, n = a;
            break;
          }
          h = h.sibling;
        }
        if (!c) {
          for (h = a.child; h; ) {
            if (h === n) {
              c = !0, n = a, r = i;
              break;
            }
            if (h === r) {
              c = !0, r = a, n = i;
              break;
            }
            h = h.sibling;
          }
          if (!c)
            throw Error(s(189));
        }
      }
      if (n.alternate !== r)
        throw Error(s(190));
    }
    if (n.tag !== 3)
      throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ma(e) {
    return e = ap(e), e !== null ? Da(e) : null;
  }
  function Da(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = Da(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var ja = l.unstable_scheduleCallback, Fa = l.unstable_cancelCallback, up = l.unstable_shouldYield, cp = l.unstable_requestPaint, Te = l.unstable_now, dp = l.unstable_getCurrentPriorityLevel, el = l.unstable_ImmediatePriority, Ia = l.unstable_UserBlockingPriority, go = l.unstable_NormalPriority, fp = l.unstable_LowPriority, Wa = l.unstable_IdlePriority, vo = null, kt = null;
  function pp(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
      try {
        kt.onCommitFiberRoot(vo, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : gp, mp = Math.log, hp = Math.LN2;
  function gp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mp(e) / hp | 0) | 0;
  }
  var yo = 64, wo = 4194304;
  function Cr(e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function xo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, a = e.pingedLanes, c = n & 268435455;
    if (c !== 0) {
      var h = c & ~i;
      h !== 0 ? r = Cr(h) : (a &= c, a !== 0 && (r = Cr(a)));
    } else
      c = n & ~i, c !== 0 ? r = Cr(c) : a !== 0 && (r = Cr(a));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - pt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function vp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var c = 31 - pt(a), h = 1 << c, g = i[c];
      g === -1 ? (!(h & n) || h & r) && (i[c] = vp(h, t)) : g <= t && (e.expiredLanes |= h), a &= ~h;
    }
  }
  function tl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ua() {
    var e = yo;
    return yo <<= 1, !(yo & 4194240) && (yo = 64), e;
  }
  function nl(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function Pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
  }
  function wp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - pt(n), a = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
    }
  }
  function rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - pt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var xe = 0;
  function Ba(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var $a, ol, Va, Ha, Qa, il = !1, So = [], Vt = null, Ht = null, Qt = null, Nr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), Kt = [], xp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ka(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        Qt = null;
        break;
      case "pointerover":
      case "pointerout":
        Nr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function _r(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && ol(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Sp(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return Vt = _r(Vt, e, t, n, r, i), !0;
      case "dragenter":
        return Ht = _r(Ht, e, t, n, r, i), !0;
      case "mouseover":
        return Qt = _r(Qt, e, t, n, r, i), !0;
      case "pointerover":
        var a = i.pointerId;
        return Nr.set(a, _r(Nr.get(a) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return a = i.pointerId, Rr.set(a, _r(Rr.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Ya(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var n = xn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = za(n), t !== null) {
            e.blockedOn = t, Qa(e.priority, function() {
              Va(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ko(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Yi = r, n.target.dispatchEvent(r), Yi = null;
      } else
        return t = Br(n), t !== null && ol(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ga(e, t, n) {
    ko(e) && n.delete(t);
  }
  function kp() {
    il = !1, Vt !== null && ko(Vt) && (Vt = null), Ht !== null && ko(Ht) && (Ht = null), Qt !== null && ko(Qt) && (Qt = null), Nr.forEach(Ga), Rr.forEach(Ga);
  }
  function Or(e, t) {
    e.blockedOn === t && (e.blockedOn = null, il || (il = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, kp)));
  }
  function br(e) {
    function t(i) {
      return Or(i, e);
    }
    if (0 < So.length) {
      Or(So[0], e);
      for (var n = 1; n < So.length; n++) {
        var r = So[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Vt !== null && Or(Vt, e), Ht !== null && Or(Ht, e), Qt !== null && Or(Qt, e), Nr.forEach(t), Rr.forEach(t), n = 0; n < Kt.length; n++)
      r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); )
      Ya(n), n.blockedOn === null && Kt.shift();
  }
  var In = I.ReactCurrentBatchConfig, Eo = !0;
  function Ep(e, t, n, r) {
    var i = xe, a = In.transition;
    In.transition = null;
    try {
      xe = 1, ll(e, t, n, r);
    } finally {
      xe = i, In.transition = a;
    }
  }
  function Cp(e, t, n, r) {
    var i = xe, a = In.transition;
    In.transition = null;
    try {
      xe = 4, ll(e, t, n, r);
    } finally {
      xe = i, In.transition = a;
    }
  }
  function ll(e, t, n, r) {
    if (Eo) {
      var i = sl(e, t, n, r);
      if (i === null)
        Cl(e, t, r, Co, n), Ka(e, r);
      else if (Sp(i, e, t, n, r))
        r.stopPropagation();
      else if (Ka(e, r), t & 4 && -1 < xp.indexOf(e)) {
        for (; i !== null; ) {
          var a = Br(i);
          if (a !== null && $a(a), a = sl(e, t, n, r), a === null && Cl(e, t, r, Co, n), a === i)
            break;
          i = a;
        }
        i !== null && r.stopPropagation();
      } else
        Cl(e, t, r, null, n);
    }
  }
  var Co = null;
  function sl(e, t, n, r) {
    if (Co = null, e = Gi(r), e = Sn(e), e !== null)
      if (t = xn(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = za(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return Co = e, null;
  }
  function Xa(e) {
    switch (e) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (dp()) {
          case el:
            return 1;
          case Ia:
            return 4;
          case go:
          case fp:
            return 16;
          case Wa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yt = null, al = null, Po = null;
  function Za() {
    if (Po)
      return Po;
    var e, t = al, n = t.length, r, i = "value" in Yt ? Yt.value : Yt.textContent, a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === i[a - r]; r++)
      ;
    return Po = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function No(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ro() {
    return !0;
  }
  function Ja() {
    return !1;
  }
  function tt(e) {
    function t(n, r, i, a, c) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = c, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(a) : a[h]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Ro : Ja, this.isPropagationStopped = Ja, this;
    }
    return $(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ro);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ro);
    }, persist: function() {
    }, isPersistent: Ro }), t;
  }
  var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ul = tt(Wn), Ar = $({}, Wn, { view: 0, detail: 0 }), Pp = tt(Ar), cl, dl, Tr, _o = $({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (cl = e.screenX - Tr.screenX, dl = e.screenY - Tr.screenY) : dl = cl = 0, Tr = e), cl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : dl;
  } }), qa = tt(_o), Np = $({}, _o, { dataTransfer: 0 }), Rp = tt(Np), _p = $({}, Ar, { relatedTarget: 0 }), fl = tt(_p), Op = $({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bp = tt(Op), Ap = $({}, Wn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Tp = tt(Ap), zp = $({}, Wn, { data: 0 }), eu = tt(zp), Lp = {
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
    MozPrintableKey: "Unidentified"
  }, Mp = {
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
    224: "Meta"
  }, Dp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function jp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
  }
  function pl() {
    return jp;
  }
  var Fp = $({}, Ar, { key: function(e) {
    if (e.key) {
      var t = Lp[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = No(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
    return e.type === "keypress" ? No(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? No(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ip = tt(Fp), Wp = $({}, _o, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tu = tt(Wp), Up = $({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), Bp = tt(Up), $p = $({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = tt($p), Hp = $({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qp = tt(Hp), Kp = [9, 13, 27, 32], ml = m && "CompositionEvent" in window, zr = null;
  m && "documentMode" in document && (zr = document.documentMode);
  var Yp = m && "TextEvent" in window && !zr, nu = m && (!ml || zr && 8 < zr && 11 >= zr), ru = String.fromCharCode(32), ou = !1;
  function iu(e, t) {
    switch (e) {
      case "keyup":
        return Kp.indexOf(t.keyCode) !== -1;
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
  function lu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Un = !1;
  function Gp(e, t) {
    switch (e) {
      case "compositionend":
        return lu(t);
      case "keypress":
        return t.which !== 32 ? null : (ou = !0, ru);
      case "textInput":
        return e = t.data, e === ru && ou ? null : e;
      default:
        return null;
    }
  }
  function Xp(e, t) {
    if (Un)
      return e === "compositionend" || !ml && iu(e, t) ? (e = Za(), Po = al = Yt = null, Un = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return nu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Zp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zp[e.type] : t === "textarea";
  }
  function au(e, t, n, r) {
    _a(r), t = zo(t, "onChange"), 0 < t.length && (n = new ul("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Lr = null, Mr = null;
  function Jp(e) {
    Nu(e, 0);
  }
  function Oo(e) {
    var t = Qn(e);
    if (fo(t))
      return e;
  }
  function qp(e, t) {
    if (e === "change")
      return t;
  }
  var uu = !1;
  if (m) {
    var hl;
    if (m) {
      var gl = "oninput" in document;
      if (!gl) {
        var cu = document.createElement("div");
        cu.setAttribute("oninput", "return;"), gl = typeof cu.oninput == "function";
      }
      hl = gl;
    } else
      hl = !1;
    uu = hl && (!document.documentMode || 9 < document.documentMode);
  }
  function du() {
    Lr && (Lr.detachEvent("onpropertychange", fu), Mr = Lr = null);
  }
  function fu(e) {
    if (e.propertyName === "value" && Oo(Mr)) {
      var t = [];
      au(t, Mr, e, Gi(e)), Ta(Jp, t);
    }
  }
  function em(e, t, n) {
    e === "focusin" ? (du(), Lr = t, Mr = n, Lr.attachEvent("onpropertychange", fu)) : e === "focusout" && du();
  }
  function tm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oo(Mr);
  }
  function nm(e, t) {
    if (e === "click")
      return Oo(t);
  }
  function rm(e, t) {
    if (e === "input" || e === "change")
      return Oo(t);
  }
  function om(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : om;
  function Dr(e, t) {
    if (mt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!w.call(t, i) || !mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function pu(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n = pu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = pu(n);
    }
  }
  function hu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function gu() {
    for (var e = window, t = Tt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = Tt(e.document);
    }
    return t;
  }
  function vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function im(e) {
    var t = gu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && hu(n.ownerDocument.documentElement, n)) {
      if (r !== null && vl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, a = Math.min(r.start, i);
          r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = mu(n, a);
          var c = mu(
            n,
            r
          );
          i && c && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var lm = m && "documentMode" in document && 11 >= document.documentMode, Bn = null, yl = null, jr = null, wl = !1;
  function vu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl || Bn == null || Bn !== Tt(r) || (r = Bn, "selectionStart" in r && vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && Dr(jr, r) || (jr = r, r = zo(yl, "onSelect"), 0 < r.length && (t = new ul("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bn)));
  }
  function bo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $n = { animationend: bo("Animation", "AnimationEnd"), animationiteration: bo("Animation", "AnimationIteration"), animationstart: bo("Animation", "AnimationStart"), transitionend: bo("Transition", "TransitionEnd") }, xl = {}, yu = {};
  m && (yu = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);
  function Ao(e) {
    if (xl[e])
      return xl[e];
    if (!$n[e])
      return e;
    var t = $n[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in yu)
        return xl[e] = t[n];
    return e;
  }
  var wu = Ao("animationend"), xu = Ao("animationiteration"), Su = Ao("animationstart"), ku = Ao("transitionend"), Eu = /* @__PURE__ */ new Map(), Cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gt(e, t) {
    Eu.set(e, t), f(t, [e]);
  }
  for (var Sl = 0; Sl < Cu.length; Sl++) {
    var kl = Cu[Sl], sm = kl.toLowerCase(), am = kl[0].toUpperCase() + kl.slice(1);
    Gt(sm, "on" + am);
  }
  Gt(wu, "onAnimationEnd"), Gt(xu, "onAnimationIteration"), Gt(Su, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(ku, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), um = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function Pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, sp(r, t, void 0, e), e.currentTarget = null;
  }
  function Nu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var h = r[c], g = h.instance, _ = h.currentTarget;
            if (h = h.listener, g !== a && i.isPropagationStopped())
              break e;
            Pu(i, h, _), a = g;
          }
        else
          for (c = 0; c < r.length; c++) {
            if (h = r[c], g = h.instance, _ = h.currentTarget, h = h.listener, g !== a && i.isPropagationStopped())
              break e;
            Pu(i, h, _), a = g;
          }
      }
    }
    if (ho)
      throw e = qi, ho = !1, qi = null, e;
  }
  function Pe(e, t) {
    var n = t[bl];
    n === void 0 && (n = t[bl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ru(t, e, 2, !1), n.add(r));
  }
  function El(e, t, n) {
    var r = 0;
    t && (r |= 4), Ru(n, e, r, t);
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function Ir(e) {
    if (!e[To]) {
      e[To] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (um.has(n) || El(n, !1, e), El(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[To] || (t[To] = !0, El("selectionchange", !1, t));
    }
  }
  function Ru(e, t, n, r) {
    switch (Xa(t)) {
      case 1:
        var i = Ep;
        break;
      case 4:
        i = Cp;
        break;
      default:
        i = ll;
    }
    n = i.bind(null, t, n, e), i = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Cl(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var c = r.tag;
          if (c === 3 || c === 4) {
            var h = r.stateNode.containerInfo;
            if (h === i || h.nodeType === 8 && h.parentNode === i)
              break;
            if (c === 4)
              for (c = r.return; c !== null; ) {
                var g = c.tag;
                if ((g === 3 || g === 4) && (g = c.stateNode.containerInfo, g === i || g.nodeType === 8 && g.parentNode === i))
                  return;
                c = c.return;
              }
            for (; h !== null; ) {
              if (c = Sn(h), c === null)
                return;
              if (g = c.tag, g === 5 || g === 6) {
                r = a = c;
                continue e;
              }
              h = h.parentNode;
            }
          }
          r = r.return;
        }
    Ta(function() {
      var _ = a, D = Gi(n), j = [];
      e: {
        var M = Eu.get(e);
        if (M !== void 0) {
          var Q = ul, Y = e;
          switch (e) {
            case "keypress":
              if (No(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              Q = Ip;
              break;
            case "focusin":
              Y = "focus", Q = fl;
              break;
            case "focusout":
              Y = "blur", Q = fl;
              break;
            case "beforeblur":
            case "afterblur":
              Q = fl;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = qa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Rp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Bp;
              break;
            case wu:
            case xu:
            case Su:
              Q = bp;
              break;
            case ku:
              Q = Vp;
              break;
            case "scroll":
              Q = Pp;
              break;
            case "wheel":
              Q = Qp;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Tp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = tu;
          }
          var X = (t & 4) !== 0, ze = !X && e === "scroll", E = X ? M !== null ? M + "Capture" : null : M;
          X = [];
          for (var v = _, N; v !== null; ) {
            N = v;
            var F = N.stateNode;
            if (N.tag === 5 && F !== null && (N = F, E !== null && (F = Sr(v, E), F != null && X.push(Wr(v, F, N)))), ze)
              break;
            v = v.return;
          }
          0 < X.length && (M = new Q(M, Y, null, n, D), j.push({ event: M, listeners: X }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", M && n !== Yi && (Y = n.relatedTarget || n.fromElement) && (Sn(Y) || Y[zt]))
            break e;
          if ((Q || M) && (M = D.window === D ? D : (M = D.ownerDocument) ? M.defaultView || M.parentWindow : window, Q ? (Y = n.relatedTarget || n.toElement, Q = _, Y = Y ? Sn(Y) : null, Y !== null && (ze = xn(Y), Y !== ze || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (Q = null, Y = _), Q !== Y)) {
            if (X = qa, F = "onMouseLeave", E = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (X = tu, F = "onPointerLeave", E = "onPointerEnter", v = "pointer"), ze = Q == null ? M : Qn(Q), N = Y == null ? M : Qn(Y), M = new X(F, v + "leave", Q, n, D), M.target = ze, M.relatedTarget = N, F = null, Sn(D) === _ && (X = new X(E, v + "enter", Y, n, D), X.target = N, X.relatedTarget = ze, F = X), ze = F, Q && Y)
              t: {
                for (X = Q, E = Y, v = 0, N = X; N; N = Vn(N))
                  v++;
                for (N = 0, F = E; F; F = Vn(F))
                  N++;
                for (; 0 < v - N; )
                  X = Vn(X), v--;
                for (; 0 < N - v; )
                  E = Vn(E), N--;
                for (; v--; ) {
                  if (X === E || E !== null && X === E.alternate)
                    break t;
                  X = Vn(X), E = Vn(E);
                }
                X = null;
              }
            else
              X = null;
            Q !== null && _u(j, M, Q, X, !1), Y !== null && ze !== null && _u(j, ze, Y, X, !0);
          }
        }
        e: {
          if (M = _ ? Qn(_) : window, Q = M.nodeName && M.nodeName.toLowerCase(), Q === "select" || Q === "input" && M.type === "file")
            var Z = qp;
          else if (su(M))
            if (uu)
              Z = rm;
            else {
              Z = tm;
              var q = em;
            }
          else
            (Q = M.nodeName) && Q.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (Z = nm);
          if (Z && (Z = Z(e, _))) {
            au(j, Z, n, D);
            break e;
          }
          q && q(e, M, _), e === "focusout" && (q = M._wrapperState) && q.controlled && M.type === "number" && $i(M, "number", M.value);
        }
        switch (q = _ ? Qn(_) : window, e) {
          case "focusin":
            (su(q) || q.contentEditable === "true") && (Bn = q, yl = _, jr = null);
            break;
          case "focusout":
            jr = yl = Bn = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wl = !1, vu(j, n, D);
            break;
          case "selectionchange":
            if (lm)
              break;
          case "keydown":
          case "keyup":
            vu(j, n, D);
        }
        var ee;
        if (ml)
          e: {
            switch (e) {
              case "compositionstart":
                var ne = "onCompositionStart";
                break e;
              case "compositionend":
                ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ne = "onCompositionUpdate";
                break e;
            }
            ne = void 0;
          }
        else
          Un ? iu(e, n) && (ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ne = "onCompositionStart");
        ne && (nu && n.locale !== "ko" && (Un || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && Un && (ee = Za()) : (Yt = D, al = "value" in Yt ? Yt.value : Yt.textContent, Un = !0)), q = zo(_, ne), 0 < q.length && (ne = new eu(ne, e, null, n, D), j.push({ event: ne, listeners: q }), ee ? ne.data = ee : (ee = lu(n), ee !== null && (ne.data = ee)))), (ee = Yp ? Gp(e, n) : Xp(e, n)) && (_ = zo(_, "onBeforeInput"), 0 < _.length && (D = new eu("onBeforeInput", "beforeinput", null, n, D), j.push({ event: D, listeners: _ }), D.data = ee));
      }
      Nu(j, t);
    });
  }
  function Wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function zo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, a = i.stateNode;
      i.tag === 5 && a !== null && (i = a, a = Sr(e, n), a != null && r.unshift(Wr(e, a, i)), a = Sr(e, t), a != null && r.push(Wr(e, a, i))), e = e.return;
    }
    return r;
  }
  function Vn(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function _u(e, t, n, r, i) {
    for (var a = t._reactName, c = []; n !== null && n !== r; ) {
      var h = n, g = h.alternate, _ = h.stateNode;
      if (g !== null && g === r)
        break;
      h.tag === 5 && _ !== null && (h = _, i ? (g = Sr(n, a), g != null && c.unshift(Wr(n, g, h))) : i || (g = Sr(n, a), g != null && c.push(Wr(n, g, h)))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var cm = /\r\n?/g, dm = /\u0000|\uFFFD/g;
  function Ou(e) {
    return (typeof e == "string" ? e : "" + e).replace(cm, `
`).replace(dm, "");
  }
  function Lo(e, t, n) {
    if (t = Ou(t), Ou(e) !== t && n)
      throw Error(s(425));
  }
  function Mo() {
  }
  var Pl = null, Nl = null;
  function Rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var _l = typeof setTimeout == "function" ? setTimeout : void 0, fm = typeof clearTimeout == "function" ? clearTimeout : void 0, bu = typeof Promise == "function" ? Promise : void 0, pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof bu < "u" ? function(e) {
    return bu.resolve(null).then(e).catch(mm);
  } : _l;
  function mm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ol(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), br(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    br(t);
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function Au(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Hn = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Hn, Ur = "__reactProps$" + Hn, zt = "__reactContainer$" + Hn, bl = "__reactEvents$" + Hn, hm = "__reactListeners$" + Hn, gm = "__reactHandles$" + Hn;
  function Sn(e) {
    var t = e[Et];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[zt] || n[Et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Au(e); e !== null; ) {
            if (n = e[Et])
              return n;
            e = Au(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Br(e) {
    return e = e[Et] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(s(33));
  }
  function Do(e) {
    return e[Ur] || null;
  }
  var Al = [], Kn = -1;
  function Zt(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Kn || (e.current = Al[Kn], Al[Kn] = null, Kn--);
  }
  function Ce(e, t) {
    Kn++, Al[Kn] = e.current, e.current = t;
  }
  var Jt = {}, Be = Zt(Jt), Ge = Zt(!1), kn = Jt;
  function Yn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, a;
    for (a in n)
      i[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function jo() {
    Ne(Ge), Ne(Be);
  }
  function Tu(e, t, n) {
    if (Be.current !== Jt)
      throw Error(s(168));
    Ce(Be, t), Ce(Ge, n);
  }
  function zu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(s(108, ve(e) || "Unknown", i));
    return $({}, n, r);
  }
  function Fo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, kn = Be.current, Ce(Be, e), Ce(Ge, Ge.current), !0;
  }
  function Lu(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(s(169));
    n ? (e = zu(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, Ne(Ge), Ne(Be), Ce(Be, e)) : Ne(Ge), Ce(Ge, n);
  }
  var Lt = null, Io = !1, Tl = !1;
  function Mu(e) {
    Lt === null ? Lt = [e] : Lt.push(e);
  }
  function vm(e) {
    Io = !0, Mu(e);
  }
  function qt() {
    if (!Tl && Lt !== null) {
      Tl = !0;
      var e = 0, t = xe;
      try {
        var n = Lt;
        for (xe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Lt = null, Io = !1;
      } catch (i) {
        throw Lt !== null && (Lt = Lt.slice(e + 1)), ja(el, qt), i;
      } finally {
        xe = t, Tl = !1;
      }
    }
    return null;
  }
  var Gn = [], Xn = 0, Wo = null, Uo = 0, st = [], at = 0, En = null, Mt = 1, Dt = "";
  function Cn(e, t) {
    Gn[Xn++] = Uo, Gn[Xn++] = Wo, Wo = e, Uo = t;
  }
  function Du(e, t, n) {
    st[at++] = Mt, st[at++] = Dt, st[at++] = En, En = e;
    var r = Mt;
    e = Dt;
    var i = 32 - pt(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - pt(t) + i;
    if (30 < a) {
      var c = i - i % 5;
      a = (r & (1 << c) - 1).toString(32), r >>= c, i -= c, Mt = 1 << 32 - pt(t) + i | n << i | r, Dt = a + e;
    } else
      Mt = 1 << a | n << i | r, Dt = e;
  }
  function zl(e) {
    e.return !== null && (Cn(e, 1), Du(e, 1, 0));
  }
  function Ll(e) {
    for (; e === Wo; )
      Wo = Gn[--Xn], Gn[Xn] = null, Uo = Gn[--Xn], Gn[Xn] = null;
    for (; e === En; )
      En = st[--at], st[at] = null, Dt = st[--at], st[at] = null, Mt = st[--at], st[at] = null;
  }
  var nt = null, rt = null, _e = !1, ht = null;
  function ju(e, t) {
    var n = ft(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = Xt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Mt, overflow: Dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ml(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Dl(e) {
    if (_e) {
      var t = rt;
      if (t) {
        var n = t;
        if (!Fu(e, t)) {
          if (Ml(e))
            throw Error(s(418));
          t = Xt(n.nextSibling);
          var r = nt;
          t && Fu(e, t) ? ju(r, n) : (e.flags = e.flags & -4097 | 2, _e = !1, nt = e);
        }
      } else {
        if (Ml(e))
          throw Error(s(418));
        e.flags = e.flags & -4097 | 2, _e = !1, nt = e;
      }
    }
  }
  function Iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    nt = e;
  }
  function Bo(e) {
    if (e !== nt)
      return !1;
    if (!_e)
      return Iu(e), _e = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps)), t && (t = rt)) {
      if (Ml(e))
        throw Wu(), Error(s(418));
      for (; t; )
        ju(e, t), t = Xt(t.nextSibling);
    }
    if (Iu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else
      rt = nt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wu() {
    for (var e = rt; e; )
      e = Xt(e.nextSibling);
  }
  function Zn() {
    rt = nt = null, _e = !1;
  }
  function jl(e) {
    ht === null ? ht = [e] : ht.push(e);
  }
  var ym = I.ReactCurrentBatchConfig;
  function $r(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(s(147, e));
        var i = r, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(c) {
          var h = i.refs;
          c === null ? delete h[a] : h[a] = c;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string")
        throw Error(s(284));
      if (!n._owner)
        throw Error(s(290, e));
    }
    return e;
  }
  function $o(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Uu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bu(e) {
    function t(E, v) {
      if (e) {
        var N = E.deletions;
        N === null ? (E.deletions = [v], E.flags |= 16) : N.push(v);
      }
    }
    function n(E, v) {
      if (!e)
        return null;
      for (; v !== null; )
        t(E, v), v = v.sibling;
      return null;
    }
    function r(E, v) {
      for (E = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? E.set(v.key, v) : E.set(v.index, v), v = v.sibling;
      return E;
    }
    function i(E, v) {
      return E = an(E, v), E.index = 0, E.sibling = null, E;
    }
    function a(E, v, N) {
      return E.index = N, e ? (N = E.alternate, N !== null ? (N = N.index, N < v ? (E.flags |= 2, v) : N) : (E.flags |= 2, v)) : (E.flags |= 1048576, v);
    }
    function c(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function h(E, v, N, F) {
      return v === null || v.tag !== 6 ? (v = _s(N, E.mode, F), v.return = E, v) : (v = i(v, N), v.return = E, v);
    }
    function g(E, v, N, F) {
      var Z = N.type;
      return Z === G ? D(E, v, N.props.children, F, N.key) : v !== null && (v.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === se && Uu(Z) === v.type) ? (F = i(v, N.props), F.ref = $r(E, v, N), F.return = E, F) : (F = pi(N.type, N.key, N.props, null, E.mode, F), F.ref = $r(E, v, N), F.return = E, F);
    }
    function _(E, v, N, F) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== N.containerInfo || v.stateNode.implementation !== N.implementation ? (v = Os(N, E.mode, F), v.return = E, v) : (v = i(v, N.children || []), v.return = E, v);
    }
    function D(E, v, N, F, Z) {
      return v === null || v.tag !== 7 ? (v = Tn(N, E.mode, F, Z), v.return = E, v) : (v = i(v, N), v.return = E, v);
    }
    function j(E, v, N) {
      if (typeof v == "string" && v !== "" || typeof v == "number")
        return v = _s("" + v, E.mode, N), v.return = E, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case V:
            return N = pi(v.type, v.key, v.props, null, E.mode, N), N.ref = $r(E, null, v), N.return = E, N;
          case J:
            return v = Os(v, E.mode, N), v.return = E, v;
          case se:
            var F = v._init;
            return j(E, F(v._payload), N);
        }
        if (yr(v) || H(v))
          return v = Tn(v, E.mode, N, null), v.return = E, v;
        $o(E, v);
      }
      return null;
    }
    function M(E, v, N, F) {
      var Z = v !== null ? v.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return Z !== null ? null : h(E, v, "" + N, F);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case V:
            return N.key === Z ? g(E, v, N, F) : null;
          case J:
            return N.key === Z ? _(E, v, N, F) : null;
          case se:
            return Z = N._init, M(
              E,
              v,
              Z(N._payload),
              F
            );
        }
        if (yr(N) || H(N))
          return Z !== null ? null : D(E, v, N, F, null);
        $o(E, N);
      }
      return null;
    }
    function Q(E, v, N, F, Z) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return E = E.get(N) || null, h(v, E, "" + F, Z);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case V:
            return E = E.get(F.key === null ? N : F.key) || null, g(v, E, F, Z);
          case J:
            return E = E.get(F.key === null ? N : F.key) || null, _(v, E, F, Z);
          case se:
            var q = F._init;
            return Q(E, v, N, q(F._payload), Z);
        }
        if (yr(F) || H(F))
          return E = E.get(N) || null, D(v, E, F, Z, null);
        $o(v, F);
      }
      return null;
    }
    function Y(E, v, N, F) {
      for (var Z = null, q = null, ee = v, ne = v = 0, Ie = null; ee !== null && ne < N.length; ne++) {
        ee.index > ne ? (Ie = ee, ee = null) : Ie = ee.sibling;
        var we = M(E, ee, N[ne], F);
        if (we === null) {
          ee === null && (ee = Ie);
          break;
        }
        e && ee && we.alternate === null && t(E, ee), v = a(we, v, ne), q === null ? Z = we : q.sibling = we, q = we, ee = Ie;
      }
      if (ne === N.length)
        return n(E, ee), _e && Cn(E, ne), Z;
      if (ee === null) {
        for (; ne < N.length; ne++)
          ee = j(E, N[ne], F), ee !== null && (v = a(ee, v, ne), q === null ? Z = ee : q.sibling = ee, q = ee);
        return _e && Cn(E, ne), Z;
      }
      for (ee = r(E, ee); ne < N.length; ne++)
        Ie = Q(ee, E, ne, N[ne], F), Ie !== null && (e && Ie.alternate !== null && ee.delete(Ie.key === null ? ne : Ie.key), v = a(Ie, v, ne), q === null ? Z = Ie : q.sibling = Ie, q = Ie);
      return e && ee.forEach(function(un) {
        return t(E, un);
      }), _e && Cn(E, ne), Z;
    }
    function X(E, v, N, F) {
      var Z = H(N);
      if (typeof Z != "function")
        throw Error(s(150));
      if (N = Z.call(N), N == null)
        throw Error(s(151));
      for (var q = Z = null, ee = v, ne = v = 0, Ie = null, we = N.next(); ee !== null && !we.done; ne++, we = N.next()) {
        ee.index > ne ? (Ie = ee, ee = null) : Ie = ee.sibling;
        var un = M(E, ee, we.value, F);
        if (un === null) {
          ee === null && (ee = Ie);
          break;
        }
        e && ee && un.alternate === null && t(E, ee), v = a(un, v, ne), q === null ? Z = un : q.sibling = un, q = un, ee = Ie;
      }
      if (we.done)
        return n(
          E,
          ee
        ), _e && Cn(E, ne), Z;
      if (ee === null) {
        for (; !we.done; ne++, we = N.next())
          we = j(E, we.value, F), we !== null && (v = a(we, v, ne), q === null ? Z = we : q.sibling = we, q = we);
        return _e && Cn(E, ne), Z;
      }
      for (ee = r(E, ee); !we.done; ne++, we = N.next())
        we = Q(ee, E, ne, we.value, F), we !== null && (e && we.alternate !== null && ee.delete(we.key === null ? ne : we.key), v = a(we, v, ne), q === null ? Z = we : q.sibling = we, q = we);
      return e && ee.forEach(function(Zm) {
        return t(E, Zm);
      }), _e && Cn(E, ne), Z;
    }
    function ze(E, v, N, F) {
      if (typeof N == "object" && N !== null && N.type === G && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case V:
            e: {
              for (var Z = N.key, q = v; q !== null; ) {
                if (q.key === Z) {
                  if (Z = N.type, Z === G) {
                    if (q.tag === 7) {
                      n(E, q.sibling), v = i(q, N.props.children), v.return = E, E = v;
                      break e;
                    }
                  } else if (q.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === se && Uu(Z) === q.type) {
                    n(E, q.sibling), v = i(q, N.props), v.ref = $r(E, q, N), v.return = E, E = v;
                    break e;
                  }
                  n(E, q);
                  break;
                } else
                  t(E, q);
                q = q.sibling;
              }
              N.type === G ? (v = Tn(N.props.children, E.mode, F, N.key), v.return = E, E = v) : (F = pi(N.type, N.key, N.props, null, E.mode, F), F.ref = $r(E, v, N), F.return = E, E = F);
            }
            return c(E);
          case J:
            e: {
              for (q = N.key; v !== null; ) {
                if (v.key === q)
                  if (v.tag === 4 && v.stateNode.containerInfo === N.containerInfo && v.stateNode.implementation === N.implementation) {
                    n(E, v.sibling), v = i(v, N.children || []), v.return = E, E = v;
                    break e;
                  } else {
                    n(E, v);
                    break;
                  }
                else
                  t(E, v);
                v = v.sibling;
              }
              v = Os(N, E.mode, F), v.return = E, E = v;
            }
            return c(E);
          case se:
            return q = N._init, ze(E, v, q(N._payload), F);
        }
        if (yr(N))
          return Y(E, v, N, F);
        if (H(N))
          return X(E, v, N, F);
        $o(E, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, v !== null && v.tag === 6 ? (n(E, v.sibling), v = i(v, N), v.return = E, E = v) : (n(E, v), v = _s(N, E.mode, F), v.return = E, E = v), c(E)) : n(E, v);
    }
    return ze;
  }
  var Jn = Bu(!0), $u = Bu(!1), Vo = Zt(null), Ho = null, qn = null, Fl = null;
  function Il() {
    Fl = qn = Ho = null;
  }
  function Wl(e) {
    var t = Vo.current;
    Ne(Vo), e._currentValue = t;
  }
  function Ul(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function er(e, t) {
    Ho = e, Fl = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
  }
  function ut(e) {
    var t = e._currentValue;
    if (Fl !== e)
      if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
        if (Ho === null)
          throw Error(s(308));
        qn = e, Ho.dependencies = { lanes: 0, firstContext: e };
      } else
        qn = qn.next = e;
    return t;
  }
  var Pn = null;
  function Bl(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function Vu(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Bl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r);
  }
  function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var en = !1;
  function $l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Hu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ft(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, ge & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Bl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n);
  }
  function Qo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  function Qu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          a === null ? i = a = c : a = a.next = c, n = n.next;
        } while (n !== null);
        a === null ? i = a = t : a = a.next = t;
      } else
        i = a = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ko(e, t, n, r) {
    var i = e.updateQueue;
    en = !1;
    var a = i.firstBaseUpdate, c = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var g = h, _ = g.next;
      g.next = null, c === null ? a = _ : c.next = _, c = g;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, h = D.lastBaseUpdate, h !== c && (h === null ? D.firstBaseUpdate = _ : h.next = _, D.lastBaseUpdate = g));
    }
    if (a !== null) {
      var j = i.baseState;
      c = 0, D = _ = g = null, h = a;
      do {
        var M = h.lane, Q = h.eventTime;
        if ((r & M) === M) {
          D !== null && (D = D.next = {
            eventTime: Q,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          e: {
            var Y = e, X = h;
            switch (M = t, Q = n, X.tag) {
              case 1:
                if (Y = X.payload, typeof Y == "function") {
                  j = Y.call(Q, j, M);
                  break e;
                }
                j = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = X.payload, M = typeof Y == "function" ? Y.call(Q, j, M) : Y, M == null)
                  break e;
                j = $({}, j, M);
                break e;
              case 2:
                en = !0;
            }
          }
          h.callback !== null && h.lane !== 0 && (e.flags |= 64, M = i.effects, M === null ? i.effects = [h] : M.push(h));
        } else
          Q = { eventTime: Q, lane: M, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, D === null ? (_ = D = Q, g = j) : D = D.next = Q, c |= M;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (1);
      if (D === null && (g = j), i.baseState = g, i.firstBaseUpdate = _, i.lastBaseUpdate = D, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          c |= i.lane, i = i.next;
        while (i !== t);
      } else
        a === null && (i.shared.lanes = 0);
      _n |= c, e.lanes = c, e.memoizedState = j;
    }
  }
  function Ku(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function")
            throw Error(s(191, i));
          i.call(r);
        }
      }
  }
  var Vr = {}, Ct = Zt(Vr), Hr = Zt(Vr), Qr = Zt(Vr);
  function Nn(e) {
    if (e === Vr)
      throw Error(s(174));
    return e;
  }
  function Vl(e, t) {
    switch (Ce(Qr, t), Ce(Hr, e), Ce(Ct, Vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Hi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hi(t, e);
    }
    Ne(Ct), Ce(Ct, t);
  }
  function tr() {
    Ne(Ct), Ne(Hr), Ne(Qr);
  }
  function Yu(e) {
    Nn(Qr.current);
    var t = Nn(Ct.current), n = Hi(t, e.type);
    t !== n && (Ce(Hr, e), Ce(Ct, n));
  }
  function Hl(e) {
    Hr.current === e && (Ne(Ct), Ne(Hr));
  }
  var Oe = Zt(0);
  function Yo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ql = [];
  function Kl() {
    for (var e = 0; e < Ql.length; e++)
      Ql[e]._workInProgressVersionPrimary = null;
    Ql.length = 0;
  }
  var Go = I.ReactCurrentDispatcher, Yl = I.ReactCurrentBatchConfig, Rn = 0, be = null, Me = null, je = null, Xo = !1, Kr = !1, Yr = 0, wm = 0;
  function $e() {
    throw Error(s(321));
  }
  function Gl(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mt(e[n], t[n]))
        return !1;
    return !0;
  }
  function Xl(e, t, n, r, i, a) {
    if (Rn = a, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Go.current = e === null || e.memoizedState === null ? Em : Cm, e = n(r, i), Kr) {
      a = 0;
      do {
        if (Kr = !1, Yr = 0, 25 <= a)
          throw Error(s(301));
        a += 1, je = Me = null, t.updateQueue = null, Go.current = Pm, e = n(r, i);
      } while (Kr);
    }
    if (Go.current = qo, t = Me !== null && Me.next !== null, Rn = 0, je = Me = be = null, Xo = !1, t)
      throw Error(s(300));
    return e;
  }
  function Zl() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? be.memoizedState = je = e : je = je.next = e, je;
  }
  function ct() {
    if (Me === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Me.next;
    var t = je === null ? be.memoizedState : je.next;
    if (t !== null)
      je = t, Me = e;
    else {
      if (e === null)
        throw Error(s(310));
      Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, je === null ? be.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Jl(e) {
    var t = ct(), n = t.queue;
    if (n === null)
      throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Me, i = r.baseQueue, a = n.pending;
    if (a !== null) {
      if (i !== null) {
        var c = i.next;
        i.next = a.next, a.next = c;
      }
      r.baseQueue = i = a, n.pending = null;
    }
    if (i !== null) {
      a = i.next, r = r.baseState;
      var h = c = null, g = null, _ = a;
      do {
        var D = _.lane;
        if ((Rn & D) === D)
          g !== null && (g = g.next = { lane: 0, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), r = _.hasEagerState ? _.eagerState : e(r, _.action);
        else {
          var j = {
            lane: D,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          };
          g === null ? (h = g = j, c = r) : g = g.next = j, be.lanes |= D, _n |= D;
        }
        _ = _.next;
      } while (_ !== null && _ !== a);
      g === null ? c = r : g.next = h, mt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = g, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        a = i.lane, be.lanes |= a, _n |= a, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ql(e) {
    var t = ct(), n = t.queue;
    if (n === null)
      throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, a = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var c = i = i.next;
      do
        a = e(a, c.action), c = c.next;
      while (c !== i);
      mt(a, t.memoizedState) || (Ze = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, r];
  }
  function Gu() {
  }
  function Xu(e, t) {
    var n = be, r = ct(), i = t(), a = !mt(r.memoizedState, i);
    if (a && (r.memoizedState = i, Ze = !0), r = r.queue, es(qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, Ju.bind(null, n, r, i, t), void 0, null), Fe === null)
        throw Error(s(349));
      Rn & 30 || Zu(n, t, i);
    }
    return i;
  }
  function Zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ju(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ec(t) && tc(e);
  }
  function qu(e, t, n) {
    return n(function() {
      ec(t) && tc(e);
    });
  }
  function ec(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function tc(e) {
    var t = jt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function nc(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = km.bind(null, be, e), [t.memoizedState, e];
  }
  function Xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function rc() {
    return ct().memoizedState;
  }
  function Zo(e, t, n, r) {
    var i = Pt();
    be.flags |= e, i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Jo(e, t, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Me !== null) {
      var c = Me.memoizedState;
      if (a = c.destroy, r !== null && Gl(r, c.deps)) {
        i.memoizedState = Xr(t, n, a, r);
        return;
      }
    }
    be.flags |= e, i.memoizedState = Xr(1 | t, n, a, r);
  }
  function oc(e, t) {
    return Zo(8390656, 8, e, t);
  }
  function es(e, t) {
    return Jo(2048, 8, e, t);
  }
  function ic(e, t) {
    return Jo(4, 2, e, t);
  }
  function lc(e, t) {
    return Jo(4, 4, e, t);
  }
  function sc(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ac(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Jo(4, 4, sc.bind(null, t, e), n);
  }
  function ts() {
  }
  function uc(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function cc(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function dc(e, t, n) {
    return Rn & 21 ? (mt(n, t) || (n = Ua(), be.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
  }
  function xm(e, t) {
    var n = xe;
    xe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), t();
    } finally {
      xe = n, Yl.transition = r;
    }
  }
  function fc() {
    return ct().memoizedState;
  }
  function Sm(e, t, n) {
    var r = ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, pc(e))
      mc(t, n);
    else if (n = Vu(e, t, n, r), n !== null) {
      var i = Ye();
      wt(n, e, r, i), hc(n, t, r);
    }
  }
  function km(e, t, n) {
    var r = ln(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (pc(e))
      mc(t, i);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
        try {
          var c = t.lastRenderedState, h = a(c, n);
          if (i.hasEagerState = !0, i.eagerState = h, mt(h, c)) {
            var g = t.interleaved;
            g === null ? (i.next = i, Bl(t)) : (i.next = g.next, g.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = Vu(e, t, i, r), n !== null && (i = Ye(), wt(n, e, r, i), hc(n, t, r));
    }
  }
  function pc(e) {
    var t = e.alternate;
    return e === be || t !== null && t === be;
  }
  function mc(e, t) {
    Kr = Xo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function hc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  var qo = { readContext: ut, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, Em = { readContext: ut, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ut, useEffect: oc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zo(
      4194308,
      4,
      sc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Zo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Zo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Sm.bind(null, be, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: nc, useDebugValue: ts, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = nc(!1), t = e[0];
    return e = xm.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = be, i = Pt();
    if (_e) {
      if (n === void 0)
        throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Fe === null)
        throw Error(s(349));
      Rn & 30 || Zu(r, t, n);
    }
    i.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return i.queue = a, oc(qu.bind(
      null,
      r,
      a,
      e
    ), [e]), r.flags |= 2048, Xr(9, Ju.bind(null, r, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = Fe.identifierPrefix;
    if (_e) {
      var n = Dt, r = Mt;
      n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = wm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Cm = {
    readContext: ut,
    useCallback: uc,
    useContext: ut,
    useEffect: es,
    useImperativeHandle: ac,
    useInsertionEffect: ic,
    useLayoutEffect: lc,
    useMemo: cc,
    useReducer: Jl,
    useRef: rc,
    useState: function() {
      return Jl(Gr);
    },
    useDebugValue: ts,
    useDeferredValue: function(e) {
      var t = ct();
      return dc(t, Me.memoizedState, e);
    },
    useTransition: function() {
      var e = Jl(Gr)[0], t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Gu,
    useSyncExternalStore: Xu,
    useId: fc,
    unstable_isNewReconciler: !1
  }, Pm = { readContext: ut, useCallback: uc, useContext: ut, useEffect: es, useImperativeHandle: ac, useInsertionEffect: ic, useLayoutEffect: lc, useMemo: cc, useReducer: ql, useRef: rc, useState: function() {
    return ql(Gr);
  }, useDebugValue: ts, useDeferredValue: function(e) {
    var t = ct();
    return Me === null ? t.memoizedState = e : dc(t, Me.memoizedState, e);
  }, useTransition: function() {
    var e = ql(Gr)[0], t = ct().memoizedState;
    return [e, t];
  }, useMutableSource: Gu, useSyncExternalStore: Xu, useId: fc, unstable_isNewReconciler: !1 };
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = $({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ns(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ei = { isMounted: function(e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), i = ln(e), a = Ft(r, i);
    a.payload = t, n != null && (a.callback = n), t = tn(e, a, i), t !== null && (wt(t, e, i, r), Qo(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), i = ln(e), a = Ft(r, i);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, i), t !== null && (wt(t, e, i, r), Qo(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ye(), r = ln(e), i = Ft(n, r);
    i.tag = 2, t != null && (i.callback = t), t = tn(e, i, r), t !== null && (wt(t, e, r, n), Qo(t, e, r));
  } };
  function gc(e, t, n, r, i, a, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, c) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, r) || !Dr(i, a) : !0;
  }
  function vc(e, t, n) {
    var r = !1, i = Jt, a = t.contextType;
    return typeof a == "object" && a !== null ? a = ut(a) : (i = Xe(t) ? kn : Be.current, r = t.contextTypes, a = (r = r != null) ? Yn(e, i) : Jt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ei, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function yc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ei.enqueueReplaceState(t, t.state, null);
  }
  function rs(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, $l(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = ut(a) : (a = Xe(t) ? kn : Be.current, i.context = Yn(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ns(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ei.enqueueReplaceState(i, i.state, null), Ko(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function nr(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
      while (r);
      var i = n;
    } catch (a) {
      i = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function os(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function is(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Nm = typeof WeakMap == "function" ? WeakMap : Map;
  function wc(e, t, n) {
    n = Ft(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      si || (si = !0, xs = r), is(e, t);
    }, n;
  }
  function xc(e, t, n) {
    n = Ft(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        is(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      is(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
    }), n;
  }
  function Sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nm();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Wm.bind(null, e, t, n), t.then(e, e));
  }
  function kc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ec(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
  }
  var Rm = I.ReactCurrentOwner, Ze = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? $u(t, null, n, r) : Jn(t, e.child, n, r);
  }
  function Cc(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return er(t, i), r = Xl(e, t, n, r, a, i), n = Zl(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, It(e, t, i)) : (_e && n && zl(t), t.flags |= 1, Ke(e, t, r, i), t.child);
  }
  function Pc(e, t, n, r, i) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !Rs(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Nc(e, t, a, r, i)) : (e = pi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, !(e.lanes & i)) {
      var c = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Dr, n(c, r) && e.ref === t.ref)
        return It(e, t, i);
    }
    return t.flags |= 1, e = an(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nc(e, t, n, r, i) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Dr(a, r) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = r = a, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ze = !0);
        else
          return t.lanes = e.lanes, It(e, t, i);
    }
    return ls(e, t, n, r, i);
  }
  function Rc(e, t, n) {
    var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(or, ot), ot |= n;
      else {
        if (!(n & 1073741824))
          return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(or, ot), ot |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Ce(or, ot), ot |= r;
      }
    else
      a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ce(or, ot), ot |= r;
    return Ke(e, t, i, n), t.child;
  }
  function _c(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ls(e, t, n, r, i) {
    var a = Xe(n) ? kn : Be.current;
    return a = Yn(t, a), er(t, i), n = Xl(e, t, n, r, a, i), r = Zl(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, It(e, t, i)) : (_e && r && zl(t), t.flags |= 1, Ke(e, t, n, i), t.child);
  }
  function Oc(e, t, n, r, i) {
    if (Xe(n)) {
      var a = !0;
      Fo(t);
    } else
      a = !1;
    if (er(t, i), t.stateNode === null)
      ni(e, t), vc(t, n, r), rs(t, n, r, i), r = !0;
    else if (e === null) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var g = c.context, _ = n.contextType;
      typeof _ == "object" && _ !== null ? _ = ut(_) : (_ = Xe(n) ? kn : Be.current, _ = Yn(t, _));
      var D = n.getDerivedStateFromProps, j = typeof D == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      j || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== r || g !== _) && yc(t, c, r, _), en = !1;
      var M = t.memoizedState;
      c.state = M, Ko(t, r, c, i), g = t.memoizedState, h !== r || M !== g || Ge.current || en ? (typeof D == "function" && (ns(t, n, D, r), g = t.memoizedState), (h = en || gc(t, n, h, r, M, g, _)) ? (j || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = g), c.props = r, c.state = g, c.context = _, r = h) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Hu(e, t), h = t.memoizedProps, _ = t.type === t.elementType ? h : gt(t.type, h), c.props = _, j = t.pendingProps, M = c.context, g = n.contextType, typeof g == "object" && g !== null ? g = ut(g) : (g = Xe(n) ? kn : Be.current, g = Yn(t, g));
      var Q = n.getDerivedStateFromProps;
      (D = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== j || M !== g) && yc(t, c, r, g), en = !1, M = t.memoizedState, c.state = M, Ko(t, r, c, i);
      var Y = t.memoizedState;
      h !== j || M !== Y || Ge.current || en ? (typeof Q == "function" && (ns(t, n, Q, r), Y = t.memoizedState), (_ = en || gc(t, n, _, r, M, Y, g) || !1) ? (D || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, Y, g), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, Y, g)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Y), c.props = r, c.state = Y, c.context = g, r = _) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ss(e, t, n, r, a, i);
  }
  function ss(e, t, n, r, i, a) {
    _c(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c)
      return i && Lu(t, n, !1), It(e, t, a);
    r = t.stateNode, Rm.current = t;
    var h = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && c ? (t.child = Jn(t, e.child, null, a), t.child = Jn(t, null, h, a)) : Ke(e, t, h, a), t.memoizedState = r.state, i && Lu(t, n, !0), t.child;
  }
  function bc(e) {
    var t = e.stateNode;
    t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), Vl(e, t.containerInfo);
  }
  function Ac(e, t, n, r, i) {
    return Zn(), jl(i), t.flags |= 256, Ke(e, t, n, r), t.child;
  }
  var as = { dehydrated: null, treeContext: null, retryLane: 0 };
  function us(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tc(e, t, n) {
    var r = t.pendingProps, i = Oe.current, a = !1, c = (t.flags & 128) !== 0, h;
    if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), h ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ce(Oe, i & 1), e === null)
      return Dl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, c = { mode: "hidden", children: c }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = c) : a = mi(c, r, 0, null), e = Tn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = us(n), t.memoizedState = as, e) : cs(t, c));
    if (i = e.memoizedState, i !== null && (h = i.dehydrated, h !== null))
      return _m(e, t, c, r, h, i, n);
    if (a) {
      a = r.fallback, c = t.mode, i = e.child, h = i.sibling;
      var g = { mode: "hidden", children: r.children };
      return !(c & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = g, t.deletions = null) : (r = an(i, g), r.subtreeFlags = i.subtreeFlags & 14680064), h !== null ? a = an(h, a) : (a = Tn(a, c, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, c = e.child.memoizedState, c = c === null ? us(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, a.memoizedState = c, a.childLanes = e.childLanes & ~n, t.memoizedState = as, r;
    }
    return a = e.child, e = a.sibling, r = an(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function cs(e, t) {
    return t = mi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ti(e, t, n, r) {
    return r !== null && jl(r), Jn(t, e.child, null, n), e = cs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function _m(e, t, n, r, i, a, c) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = os(Error(s(422))), ti(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = mi({ mode: "visible", children: r.children }, i, 0, null), a = Tn(a, i, c, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Jn(t, e.child, null, c), t.child.memoizedState = us(c), t.memoizedState = as, a);
    if (!(t.mode & 1))
      return ti(e, t, c, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var h = r.dgst;
      return r = h, a = Error(s(419)), r = os(a, r, void 0), ti(e, t, c, r);
    }
    if (h = (c & e.childLanes) !== 0, Ze || h) {
      if (r = Fe, r !== null) {
        switch (c & -c) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | c) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, jt(e, i), wt(r, e, i, -1));
      }
      return Ns(), r = os(Error(s(421))), ti(e, t, c, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Um.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, rt = Xt(i.nextSibling), nt = t, _e = !0, ht = null, e !== null && (st[at++] = Mt, st[at++] = Dt, st[at++] = En, Mt = e.id, Dt = e.overflow, En = t), t = cs(t, r.children), t.flags |= 4096, t);
  }
  function zc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ul(e.return, t, n);
  }
  function ds(e, t, n, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
  }
  function Lc(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, a = r.tail;
    if (Ke(e, t, r.children, n), r = Oe.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && zc(e, n, t);
            else if (e.tag === 19)
              zc(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (Ce(Oe, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && Yo(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ds(t, !1, i, n, a);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && Yo(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          ds(t, !0, n, null, a);
          break;
        case "together":
          ds(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ni(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function It(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Om(e, t, n) {
    switch (t.tag) {
      case 3:
        bc(t), Zn();
        break;
      case 5:
        Yu(t);
        break;
      case 1:
        Xe(t.type) && Fo(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ce(Vo, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(Oe, Oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tc(e, t, n) : (Ce(Oe, Oe.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
        Ce(Oe, Oe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Lc(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ce(Oe, Oe.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Rc(e, t, n);
    }
    return It(e, t, n);
  }
  var Mc, fs, Dc, jc;
  Mc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, fs = function() {
  }, Dc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Nn(Ct.current);
      var a = null;
      switch (n) {
        case "input":
          i = Ui(e, i), r = Ui(e, r), a = [];
          break;
        case "select":
          i = $({}, i, { value: void 0 }), r = $({}, r, { value: void 0 }), a = [];
          break;
        case "textarea":
          i = Vi(e, i), r = Vi(e, r), a = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Mo);
      }
      Qi(n, r);
      var c;
      n = null;
      for (_ in i)
        if (!r.hasOwnProperty(_) && i.hasOwnProperty(_) && i[_] != null)
          if (_ === "style") {
            var h = i[_];
            for (c in h)
              h.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
          } else
            _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (d.hasOwnProperty(_) ? a || (a = []) : (a = a || []).push(_, null));
      for (_ in r) {
        var g = r[_];
        if (h = i?.[_], r.hasOwnProperty(_) && g !== h && (g != null || h != null))
          if (_ === "style")
            if (h) {
              for (c in h)
                !h.hasOwnProperty(c) || g && g.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
              for (c in g)
                g.hasOwnProperty(c) && h[c] !== g[c] && (n || (n = {}), n[c] = g[c]);
            } else
              n || (a || (a = []), a.push(
                _,
                n
              )), n = g;
          else
            _ === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, h = h ? h.__html : void 0, g != null && h !== g && (a = a || []).push(_, g)) : _ === "children" ? typeof g != "string" && typeof g != "number" || (a = a || []).push(_, "" + g) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (d.hasOwnProperty(_) ? (g != null && _ === "onScroll" && Pe("scroll", e), a || h === g || (a = [])) : (a = a || []).push(_, g));
      }
      n && (a = a || []).push("style", n);
      var _ = a;
      (t.updateQueue = _) && (t.flags |= 4);
    }
  }, jc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zr(e, t) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function bm(e, t, n) {
    var r = t.pendingProps;
    switch (Ll(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Xe(t.type) && jo(), Ve(t), null;
      case 3:
        return r = t.stateNode, tr(), Ne(Ge), Ne(Be), Kl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Bo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ht !== null && (Es(ht), ht = null))), fs(e, t), Ve(t), null;
      case 5:
        Hl(t);
        var i = Nn(Qr.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Dc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ve(t), null;
          }
          if (e = Nn(Ct.current), Bo(t)) {
            r = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (r[Et] = t, r[Ur] = a, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Pe("cancel", r), Pe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++)
                  Pe(Fr[i], r);
                break;
              case "source":
                Pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Pe(
                  "error",
                  r
                ), Pe("load", r);
                break;
              case "details":
                Pe("toggle", r);
                break;
              case "input":
                va(r, a), Pe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!a.multiple }, Pe("invalid", r);
                break;
              case "textarea":
                xa(r, a), Pe("invalid", r);
            }
            Qi(n, a), i = null;
            for (var c in a)
              if (a.hasOwnProperty(c)) {
                var h = a[c];
                c === "children" ? typeof h == "string" ? r.textContent !== h && (a.suppressHydrationWarning !== !0 && Lo(r.textContent, h, e), i = ["children", h]) : typeof h == "number" && r.textContent !== "" + h && (a.suppressHydrationWarning !== !0 && Lo(
                  r.textContent,
                  h,
                  e
                ), i = ["children", "" + h]) : d.hasOwnProperty(c) && h != null && c === "onScroll" && Pe("scroll", r);
              }
            switch (n) {
              case "input":
                Mn(r), wa(r, a, !0);
                break;
              case "textarea":
                Mn(r), ka(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Mo);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            c = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ea(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Et] = t, e[Ur] = r, Mc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (c = Ki(n, r), n) {
                case "dialog":
                  Pe("cancel", e), Pe("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pe("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Fr.length; i++)
                    Pe(Fr[i], e);
                  i = r;
                  break;
                case "source":
                  Pe("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Pe(
                    "error",
                    e
                  ), Pe("load", e), i = r;
                  break;
                case "details":
                  Pe("toggle", e), i = r;
                  break;
                case "input":
                  va(e, r), i = Ui(e, r), Pe("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = $({}, r, { value: void 0 }), Pe("invalid", e);
                  break;
                case "textarea":
                  xa(e, r), i = Vi(e, r), Pe("invalid", e);
                  break;
                default:
                  i = r;
              }
              Qi(n, i), h = i;
              for (a in h)
                if (h.hasOwnProperty(a)) {
                  var g = h[a];
                  a === "style" ? Na(e, g) : a === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && Ca(e, g)) : a === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && wr(e, g) : typeof g == "number" && wr(e, "" + g) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (d.hasOwnProperty(a) ? g != null && a === "onScroll" && Pe("scroll", e) : g != null && B(e, a, g, c));
                }
              switch (n) {
                case "input":
                  Mn(e), wa(e, r, !1);
                  break;
                case "textarea":
                  Mn(e), ka(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ye(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, a = r.value, a != null ? Dn(e, !!r.multiple, a, !1) : r.defaultValue != null && Dn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Mo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null)
          jc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(s(166));
          if (n = Nn(Qr.current), Nn(Ct.current), Bo(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (a = r.nodeValue !== n) && (e = nt, e !== null))
              switch (e.tag) {
                case 3:
                  Lo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Lo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r;
        }
        return Ve(t), null;
      case 13:
        if (Ne(Oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (_e && rt !== null && t.mode & 1 && !(t.flags & 128))
            Wu(), Zn(), t.flags |= 98560, a = !1;
          else if (a = Bo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a)
                throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a)
                throw Error(s(317));
              a[Et] = t;
            } else
              Zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ve(t), a = !1;
          } else
            ht !== null && (Es(ht), ht = null), a = !0;
          if (!a)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Oe.current & 1 ? De === 0 && (De = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
      case 4:
        return tr(), fs(e, t), e === null && Ir(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Wl(t.type._context), Ve(t), null;
      case 17:
        return Xe(t.type) && jo(), Ve(t), null;
      case 19:
        if (Ne(Oe), a = t.memoizedState, a === null)
          return Ve(t), null;
        if (r = (t.flags & 128) !== 0, c = a.rendering, c === null)
          if (r)
            Zr(a, !1);
          else {
            if (De !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (c = Yo(e), c !== null) {
                  for (t.flags |= 128, Zr(a, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    a = n, e = r, a.flags &= 14680066, c = a.alternate, c === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = c.childLanes, a.lanes = c.lanes, a.child = c.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = c.memoizedProps, a.memoizedState = c.memoizedState, a.updateQueue = c.updateQueue, a.type = c.type, e = c.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return Ce(Oe, Oe.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Te() > ir && (t.flags |= 128, r = !0, Zr(a, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Yo(c), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(a, !0), a.tail === null && a.tailMode === "hidden" && !c.alternate && !_e)
                return Ve(t), null;
            } else
              2 * Te() - a.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(a, !1), t.lanes = 4194304);
          a.isBackwards ? (c.sibling = t.child, t.child = c) : (n = a.last, n !== null ? n.sibling = c : t.child = c, a.last = c);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Te(), t.sibling = null, n = Oe.current, Ce(Oe, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return Ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ot & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Am(e, t) {
    switch (Ll(t), t.tag) {
      case 1:
        return Xe(t.type) && jo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tr(), Ne(Ge), Ne(Be), Kl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Hl(t), null;
      case 13:
        if (Ne(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Zn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(Oe), null;
      case 4:
        return tr(), null;
      case 10:
        return Wl(t.type._context), null;
      case 22:
      case 23:
        return Ps(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ri = !1, He = !1, Tm = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function rr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ae(e, t, r);
        }
      else
        n.current = null;
  }
  function ps(e, t, n) {
    try {
      n();
    } catch (r) {
      Ae(e, t, r);
    }
  }
  var Fc = !1;
  function zm(e, t) {
    if (Pl = Eo, e = gu(), vl(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset, a = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, a.nodeType;
            } catch {
              n = null;
              break e;
            }
            var c = 0, h = -1, g = -1, _ = 0, D = 0, j = e, M = null;
            t:
              for (; ; ) {
                for (var Q; j !== n || i !== 0 && j.nodeType !== 3 || (h = c + i), j !== a || r !== 0 && j.nodeType !== 3 || (g = c + r), j.nodeType === 3 && (c += j.nodeValue.length), (Q = j.firstChild) !== null; )
                  M = j, j = Q;
                for (; ; ) {
                  if (j === e)
                    break t;
                  if (M === n && ++_ === i && (h = c), M === a && ++D === r && (g = c), (Q = j.nextSibling) !== null)
                    break;
                  j = M, M = j.parentNode;
                }
                j = Q;
              }
            n = h === -1 || g === -1 ? null : { start: h, end: g };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Nl = { focusedElem: e, selectionRange: n }, Eo = !1, K = t; K !== null; )
      if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, K = e;
      else
        for (; K !== null; ) {
          t = K;
          try {
            var Y = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Y !== null) {
                    var X = Y.memoizedProps, ze = Y.memoizedState, E = t.stateNode, v = E.getSnapshotBeforeUpdate(t.elementType === t.type ? X : gt(t.type, X), ze);
                    E.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (F) {
            Ae(t, t.return, F);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, K = e;
            break;
          }
          K = t.return;
        }
    return Y = Fc, Fc = !1, Y;
  }
  function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var a = i.destroy;
          i.destroy = void 0, a !== void 0 && ps(t, n, a);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function oi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ms(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Ic(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Ur], delete t[bl], delete t[hm], delete t[gm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Wc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uc(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Wc(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function hs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mo));
    else if (r !== 4 && (e = e.child, e !== null))
      for (hs(e, t, n), e = e.sibling; e !== null; )
        hs(e, t, n), e = e.sibling;
  }
  function gs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (gs(e, t, n), e = e.sibling; e !== null; )
        gs(e, t, n), e = e.sibling;
  }
  var We = null, vt = !1;
  function nn(e, t, n) {
    for (n = n.child; n !== null; )
      Bc(e, t, n), n = n.sibling;
  }
  function Bc(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(vo, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        He || rr(n, t);
      case 6:
        var r = We, i = vt;
        We = null, nn(e, t, n), We = r, vt = i, We !== null && (vt ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
        break;
      case 18:
        We !== null && (vt ? (e = We, n = n.stateNode, e.nodeType === 8 ? Ol(e.parentNode, n) : e.nodeType === 1 && Ol(e, n), br(e)) : Ol(We, n.stateNode));
        break;
      case 4:
        r = We, i = vt, We = n.stateNode.containerInfo, vt = !0, nn(e, t, n), We = r, vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!He && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var a = i, c = a.destroy;
            a = a.tag, c !== void 0 && (a & 2 || a & 4) && ps(n, t, c), i = i.next;
          } while (i !== r);
        }
        nn(e, t, n);
        break;
      case 1:
        if (!He && (rr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (h) {
            Ae(n, t, h);
          }
        nn(e, t, n);
        break;
      case 21:
        nn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (He = (r = He) || n.memoizedState !== null, nn(e, t, n), He = r) : nn(e, t, n);
        break;
      default:
        nn(e, t, n);
    }
  }
  function $c(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Tm()), t.forEach(function(r) {
        var i = Bm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var a = e, c = t, h = c;
          e:
            for (; h !== null; ) {
              switch (h.tag) {
                case 5:
                  We = h.stateNode, vt = !1;
                  break e;
                case 3:
                  We = h.stateNode.containerInfo, vt = !0;
                  break e;
                case 4:
                  We = h.stateNode.containerInfo, vt = !0;
                  break e;
              }
              h = h.return;
            }
          if (We === null)
            throw Error(s(160));
          Bc(a, c, i), We = null, vt = !1;
          var g = i.alternate;
          g !== null && (g.return = null), i.return = null;
        } catch (_) {
          Ae(i, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Vc(t, e), t = t.sibling;
  }
  function Vc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yt(t, e), Nt(e), r & 4) {
          try {
            Jr(3, e, e.return), oi(3, e);
          } catch (X) {
            Ae(e, e.return, X);
          }
          try {
            Jr(5, e, e.return);
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        break;
      case 1:
        yt(t, e), Nt(e), r & 512 && n !== null && rr(n, n.return);
        break;
      case 5:
        if (yt(t, e), Nt(e), r & 512 && n !== null && rr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            wr(i, "");
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var a = e.memoizedProps, c = n !== null ? n.memoizedProps : a, h = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null)
            try {
              h === "input" && a.type === "radio" && a.name != null && ya(i, a), Ki(h, c);
              var _ = Ki(h, a);
              for (c = 0; c < g.length; c += 2) {
                var D = g[c], j = g[c + 1];
                D === "style" ? Na(i, j) : D === "dangerouslySetInnerHTML" ? Ca(i, j) : D === "children" ? wr(i, j) : B(i, D, j, _);
              }
              switch (h) {
                case "input":
                  Bi(i, a);
                  break;
                case "textarea":
                  Sa(i, a);
                  break;
                case "select":
                  var M = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!a.multiple;
                  var Q = a.value;
                  Q != null ? Dn(i, !!a.multiple, Q, !1) : M !== !!a.multiple && (a.defaultValue != null ? Dn(
                    i,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  ) : Dn(i, !!a.multiple, a.multiple ? [] : "", !1));
              }
              i[Ur] = a;
            } catch (X) {
              Ae(e, e.return, X);
            }
        }
        break;
      case 6:
        if (yt(t, e), Nt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.stateNode, a = e.memoizedProps;
          try {
            i.nodeValue = a;
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        break;
      case 3:
        if (yt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            br(t.containerInfo);
          } catch (X) {
            Ae(e, e.return, X);
          }
        break;
      case 4:
        yt(t, e), Nt(e);
        break;
      case 13:
        yt(t, e), Nt(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (ws = Te())), r & 4 && $c(e);
        break;
      case 22:
        if (D = n !== null && n.memoizedState !== null, e.mode & 1 ? (He = (_ = He) || D, yt(t, e), He = _) : yt(t, e), Nt(e), r & 8192) {
          if (_ = e.memoizedState !== null, (e.stateNode.isHidden = _) && !D && e.mode & 1)
            for (K = e, D = e.child; D !== null; ) {
              for (j = K = D; K !== null; ) {
                switch (M = K, Q = M.child, M.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Jr(4, M, M.return);
                    break;
                  case 1:
                    rr(M, M.return);
                    var Y = M.stateNode;
                    if (typeof Y.componentWillUnmount == "function") {
                      r = M, n = M.return;
                      try {
                        t = r, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                      } catch (X) {
                        Ae(r, n, X);
                      }
                    }
                    break;
                  case 5:
                    rr(M, M.return);
                    break;
                  case 22:
                    if (M.memoizedState !== null) {
                      Kc(j);
                      continue;
                    }
                }
                Q !== null ? (Q.return = M, K = Q) : Kc(j);
              }
              D = D.sibling;
            }
          e:
            for (D = null, j = e; ; ) {
              if (j.tag === 5) {
                if (D === null) {
                  D = j;
                  try {
                    i = j.stateNode, _ ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (h = j.stateNode, g = j.memoizedProps.style, c = g != null && g.hasOwnProperty("display") ? g.display : null, h.style.display = Pa("display", c));
                  } catch (X) {
                    Ae(e, e.return, X);
                  }
                }
              } else if (j.tag === 6) {
                if (D === null)
                  try {
                    j.stateNode.nodeValue = _ ? "" : j.memoizedProps;
                  } catch (X) {
                    Ae(e, e.return, X);
                  }
              } else if ((j.tag !== 22 && j.tag !== 23 || j.memoizedState === null || j === e) && j.child !== null) {
                j.child.return = j, j = j.child;
                continue;
              }
              if (j === e)
                break e;
              for (; j.sibling === null; ) {
                if (j.return === null || j.return === e)
                  break e;
                D === j && (D = null), j = j.return;
              }
              D === j && (D = null), j.sibling.return = j.return, j = j.sibling;
            }
        }
        break;
      case 19:
        yt(t, e), Nt(e), r & 4 && $c(e);
        break;
      case 21:
        break;
      default:
        yt(
          t,
          e
        ), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Wc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (wr(i, ""), r.flags &= -33);
            var a = Uc(e);
            gs(e, a, i);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, h = Uc(e);
            hs(e, h, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (g) {
        Ae(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lm(e, t, n) {
    K = e, Hc(e);
  }
  function Hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var i = K, a = i.child;
      if (i.tag === 22 && r) {
        var c = i.memoizedState !== null || ri;
        if (!c) {
          var h = i.alternate, g = h !== null && h.memoizedState !== null || He;
          h = ri;
          var _ = He;
          if (ri = c, (He = g) && !_)
            for (K = i; K !== null; )
              c = K, g = c.child, c.tag === 22 && c.memoizedState !== null ? Yc(i) : g !== null ? (g.return = c, K = g) : Yc(i);
          for (; a !== null; )
            K = a, Hc(a), a = a.sibling;
          K = i, ri = h, He = _;
        }
        Qc(e);
      } else
        i.subtreeFlags & 8772 && a !== null ? (a.return = i, K = a) : Qc(e);
    }
  }
  function Qc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || oi(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !He)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var a = t.updateQueue;
                a !== null && Ku(t, a, r);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ku(t, c, n);
                }
                break;
              case 5:
                var h = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = h;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && n.focus();
                      break;
                    case "img":
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var _ = t.alternate;
                  if (_ !== null) {
                    var D = _.memoizedState;
                    if (D !== null) {
                      var j = D.dehydrated;
                      j !== null && br(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          He || t.flags & 512 && ms(t);
        } catch (M) {
          Ae(t, t.return, M);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Kc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Yc(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              oi(4, t);
            } catch (g) {
              Ae(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                Ae(t, i, g);
              }
            }
            var a = t.return;
            try {
              ms(t);
            } catch (g) {
              Ae(t, a, g);
            }
            break;
          case 5:
            var c = t.return;
            try {
              ms(t);
            } catch (g) {
              Ae(t, c, g);
            }
        }
      } catch (g) {
        Ae(t, t.return, g);
      }
      if (t === e) {
        K = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        h.return = t.return, K = h;
        break;
      }
      K = t.return;
    }
  }
  var Mm = Math.ceil, ii = I.ReactCurrentDispatcher, vs = I.ReactCurrentOwner, dt = I.ReactCurrentBatchConfig, ge = 0, Fe = null, Le = null, Ue = 0, ot = 0, or = Zt(0), De = 0, qr = null, _n = 0, li = 0, ys = 0, eo = null, Je = null, ws = 0, ir = 1 / 0, Wt = null, si = !1, xs = null, rn = null, ai = !1, on = null, ui = 0, to = 0, Ss = null, ci = -1, di = 0;
  function Ye() {
    return ge & 6 ? Te() : ci !== -1 ? ci : ci = Te();
  }
  function ln(e) {
    return e.mode & 1 ? ge & 2 && Ue !== 0 ? Ue & -Ue : ym.transition !== null ? (di === 0 && (di = Ua()), di) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xa(e.type)), e) : 1;
  }
  function wt(e, t, n, r) {
    if (50 < to)
      throw to = 0, Ss = null, Error(s(185));
    Pr(e, n, r), (!(ge & 2) || e !== Fe) && (e === Fe && (!(ge & 2) && (li |= n), De === 4 && sn(e, Ue)), qe(e, r), n === 1 && ge === 0 && !(t.mode & 1) && (ir = Te() + 500, Io && qt()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    yp(e, t);
    var r = xo(e, e === Fe ? Ue : 0);
    if (r === 0)
      n !== null && Fa(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fa(n), t === 1)
        e.tag === 0 ? vm(Xc.bind(null, e)) : Mu(Xc.bind(null, e)), pm(function() {
          !(ge & 6) && qt();
        }), n = null;
      else {
        switch (Ba(r)) {
          case 1:
            n = el;
            break;
          case 4:
            n = Ia;
            break;
          case 16:
            n = go;
            break;
          case 536870912:
            n = Wa;
            break;
          default:
            n = go;
        }
        n = od(n, Gc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Gc(e, t) {
    if (ci = -1, di = 0, ge & 6)
      throw Error(s(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n)
      return null;
    var r = xo(e, e === Fe ? Ue : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = fi(e, r);
    else {
      t = r;
      var i = ge;
      ge |= 2;
      var a = Jc();
      (Fe !== e || Ue !== t) && (Wt = null, ir = Te() + 500, bn(e, t));
      do
        try {
          Fm();
          break;
        } catch (h) {
          Zc(e, h);
        }
      while (1);
      Il(), ii.current = a, ge = i, Le !== null ? t = 0 : (Fe = null, Ue = 0, t = De);
    }
    if (t !== 0) {
      if (t === 2 && (i = tl(e), i !== 0 && (r = i, t = ks(e, i))), t === 1)
        throw n = qr, bn(e, 0), sn(e, r), qe(e, Te()), n;
      if (t === 6)
        sn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Dm(i) && (t = fi(e, r), t === 2 && (a = tl(e), a !== 0 && (r = a, t = ks(e, a))), t === 1))
          throw n = qr, bn(e, 0), sn(e, r), qe(e, Te()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            An(e, Je, Wt);
            break;
          case 3:
            if (sn(e, r), (r & 130023424) === r && (t = ws + 500 - Te(), 10 < t)) {
              if (xo(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ye(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = _l(An.bind(null, e, Je, Wt), t);
              break;
            }
            An(e, Je, Wt);
            break;
          case 4:
            if (sn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var c = 31 - pt(r);
              a = 1 << c, c = t[c], c > i && (i = c), r &= ~a;
            }
            if (r = i, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = _l(An.bind(null, e, Je, Wt), r);
              break;
            }
            An(e, Je, Wt);
            break;
          case 5:
            An(e, Je, Wt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return qe(e, Te()), e.callbackNode === n ? Gc.bind(null, e) : null;
  }
  function ks(e, t) {
    var n = eo;
    return e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256), e = fi(e, t), e !== 2 && (t = Je, Je = n, t !== null && Es(t)), e;
  }
  function Es(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function Dm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], a = i.getSnapshot;
            i = i.value;
            try {
              if (!mt(a(), i))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function sn(e, t) {
    for (t &= ~ys, t &= ~li, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - pt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Xc(e) {
    if (ge & 6)
      throw Error(s(327));
    lr();
    var t = xo(e, 0);
    if (!(t & 1))
      return qe(e, Te()), null;
    var n = fi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = tl(e);
      r !== 0 && (t = r, n = ks(e, r));
    }
    if (n === 1)
      throw n = qr, bn(e, 0), sn(e, t), qe(e, Te()), n;
    if (n === 6)
      throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, An(e, Je, Wt), qe(e, Te()), null;
  }
  function Cs(e, t) {
    var n = ge;
    ge |= 1;
    try {
      return e(t);
    } finally {
      ge = n, ge === 0 && (ir = Te() + 500, Io && qt());
    }
  }
  function On(e) {
    on !== null && on.tag === 0 && !(ge & 6) && lr();
    var t = ge;
    ge |= 1;
    var n = dt.transition, r = xe;
    try {
      if (dt.transition = null, xe = 1, e)
        return e();
    } finally {
      xe = r, dt.transition = n, ge = t, !(ge & 6) && qt();
    }
  }
  function Ps() {
    ot = or.current, Ne(or);
  }
  function bn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, fm(n)), Le !== null)
      for (n = Le.return; n !== null; ) {
        var r = n;
        switch (Ll(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && jo();
            break;
          case 3:
            tr(), Ne(Ge), Ne(Be), Kl();
            break;
          case 5:
            Hl(r);
            break;
          case 4:
            tr();
            break;
          case 13:
            Ne(Oe);
            break;
          case 19:
            Ne(Oe);
            break;
          case 10:
            Wl(r.type._context);
            break;
          case 22:
          case 23:
            Ps();
        }
        n = n.return;
      }
    if (Fe = e, Le = e = an(e.current, null), Ue = ot = t, De = 0, qr = null, ys = li = _n = 0, Je = eo = null, Pn !== null) {
      for (t = 0; t < Pn.length; t++)
        if (n = Pn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, a = n.pending;
          if (a !== null) {
            var c = a.next;
            a.next = i, r.next = c;
          }
          n.pending = r;
        }
      Pn = null;
    }
    return e;
  }
  function Zc(e, t) {
    do {
      var n = Le;
      try {
        if (Il(), Go.current = qo, Xo) {
          for (var r = be.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Xo = !1;
        }
        if (Rn = 0, je = Me = be = null, Kr = !1, Yr = 0, vs.current = null, n === null || n.return === null) {
          De = 1, qr = t, Le = null;
          break;
        }
        e: {
          var a = e, c = n.return, h = n, g = t;
          if (t = Ue, h.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var _ = g, D = h, j = D.tag;
            if (!(D.mode & 1) && (j === 0 || j === 11 || j === 15)) {
              var M = D.alternate;
              M ? (D.updateQueue = M.updateQueue, D.memoizedState = M.memoizedState, D.lanes = M.lanes) : (D.updateQueue = null, D.memoizedState = null);
            }
            var Q = kc(c);
            if (Q !== null) {
              Q.flags &= -257, Ec(Q, c, h, a, t), Q.mode & 1 && Sc(a, _, t), t = Q, g = _;
              var Y = t.updateQueue;
              if (Y === null) {
                var X = /* @__PURE__ */ new Set();
                X.add(g), t.updateQueue = X;
              } else
                Y.add(g);
              break e;
            } else {
              if (!(t & 1)) {
                Sc(a, _, t), Ns();
                break e;
              }
              g = Error(s(426));
            }
          } else if (_e && h.mode & 1) {
            var ze = kc(c);
            if (ze !== null) {
              !(ze.flags & 65536) && (ze.flags |= 256), Ec(ze, c, h, a, t), jl(nr(g, h));
              break e;
            }
          }
          a = g = nr(g, h), De !== 4 && (De = 2), eo === null ? eo = [a] : eo.push(a), a = c;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var E = wc(a, g, t);
                Qu(a, E);
                break e;
              case 1:
                h = g;
                var v = a.type, N = a.stateNode;
                if (!(a.flags & 128) && (typeof v.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (rn === null || !rn.has(N)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var F = xc(a, h, t);
                  Qu(a, F);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        ed(n);
      } catch (Z) {
        t = Z, Le === n && n !== null && (Le = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jc() {
    var e = ii.current;
    return ii.current = qo, e === null ? qo : e;
  }
  function Ns() {
    (De === 0 || De === 3 || De === 2) && (De = 4), Fe === null || !(_n & 268435455) && !(li & 268435455) || sn(Fe, Ue);
  }
  function fi(e, t) {
    var n = ge;
    ge |= 2;
    var r = Jc();
    (Fe !== e || Ue !== t) && (Wt = null, bn(e, t));
    do
      try {
        jm();
        break;
      } catch (i) {
        Zc(e, i);
      }
    while (1);
    if (Il(), ge = n, ii.current = r, Le !== null)
      throw Error(s(261));
    return Fe = null, Ue = 0, De;
  }
  function jm() {
    for (; Le !== null; )
      qc(Le);
  }
  function Fm() {
    for (; Le !== null && !up(); )
      qc(Le);
  }
  function qc(e) {
    var t = rd(e.alternate, e, ot);
    e.memoizedProps = e.pendingProps, t === null ? ed(e) : Le = t, vs.current = null;
  }
  function ed(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Am(n, t), n !== null) {
          n.flags &= 32767, Le = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          De = 6, Le = null;
          return;
        }
      } else if (n = bm(n, t, ot), n !== null) {
        Le = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function An(e, t, n) {
    var r = xe, i = dt.transition;
    try {
      dt.transition = null, xe = 1, Im(e, t, n, r);
    } finally {
      dt.transition = i, xe = r;
    }
    return null;
  }
  function Im(e, t, n, r) {
    do
      lr();
    while (on !== null);
    if (ge & 6)
      throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (wp(e, a), e === Fe && (Le = Fe = null, Ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ai || (ai = !0, od(go, function() {
      return lr(), null;
    })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
      a = dt.transition, dt.transition = null;
      var c = xe;
      xe = 1;
      var h = ge;
      ge |= 4, vs.current = null, zm(e, n), Vc(n, e), im(Nl), Eo = !!Pl, Nl = Pl = null, e.current = n, Lm(n), cp(), ge = h, xe = c, dt.transition = a;
    } else
      e.current = n;
    if (ai && (ai = !1, on = e, ui = i), a = e.pendingLanes, a === 0 && (rn = null), pp(n.stateNode), qe(e, Te()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (si)
      throw si = !1, e = xs, xs = null, e;
    return ui & 1 && e.tag !== 0 && lr(), a = e.pendingLanes, a & 1 ? e === Ss ? to++ : (to = 0, Ss = e) : to = 0, qt(), null;
  }
  function lr() {
    if (on !== null) {
      var e = Ba(ui), t = dt.transition, n = xe;
      try {
        if (dt.transition = null, xe = 16 > e ? 16 : e, on === null)
          var r = !1;
        else {
          if (e = on, on = null, ui = 0, ge & 6)
            throw Error(s(331));
          var i = ge;
          for (ge |= 4, K = e.current; K !== null; ) {
            var a = K, c = a.child;
            if (K.flags & 16) {
              var h = a.deletions;
              if (h !== null) {
                for (var g = 0; g < h.length; g++) {
                  var _ = h[g];
                  for (K = _; K !== null; ) {
                    var D = K;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, D, a);
                    }
                    var j = D.child;
                    if (j !== null)
                      j.return = D, K = j;
                    else
                      for (; K !== null; ) {
                        D = K;
                        var M = D.sibling, Q = D.return;
                        if (Ic(D), D === _) {
                          K = null;
                          break;
                        }
                        if (M !== null) {
                          M.return = Q, K = M;
                          break;
                        }
                        K = Q;
                      }
                  }
                }
                var Y = a.alternate;
                if (Y !== null) {
                  var X = Y.child;
                  if (X !== null) {
                    Y.child = null;
                    do {
                      var ze = X.sibling;
                      X.sibling = null, X = ze;
                    } while (X !== null);
                  }
                }
                K = a;
              }
            }
            if (a.subtreeFlags & 2064 && c !== null)
              c.return = a, K = c;
            else
              e:
                for (; K !== null; ) {
                  if (a = K, a.flags & 2048)
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(9, a, a.return);
                    }
                  var E = a.sibling;
                  if (E !== null) {
                    E.return = a.return, K = E;
                    break e;
                  }
                  K = a.return;
                }
          }
          var v = e.current;
          for (K = v; K !== null; ) {
            c = K;
            var N = c.child;
            if (c.subtreeFlags & 2064 && N !== null)
              N.return = c, K = N;
            else
              e:
                for (c = v; K !== null; ) {
                  if (h = K, h.flags & 2048)
                    try {
                      switch (h.tag) {
                        case 0:
                        case 11:
                        case 15:
                          oi(9, h);
                      }
                    } catch (Z) {
                      Ae(h, h.return, Z);
                    }
                  if (h === c) {
                    K = null;
                    break e;
                  }
                  var F = h.sibling;
                  if (F !== null) {
                    F.return = h.return, K = F;
                    break e;
                  }
                  K = h.return;
                }
          }
          if (ge = i, qt(), kt && typeof kt.onPostCommitFiberRoot == "function")
            try {
              kt.onPostCommitFiberRoot(vo, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        xe = n, dt.transition = t;
      }
    }
    return !1;
  }
  function td(e, t, n) {
    t = nr(n, t), t = wc(e, t, 1), e = tn(e, t, 1), t = Ye(), e !== null && (Pr(e, 1, t), qe(e, t));
  }
  function Ae(e, t, n) {
    if (e.tag === 3)
      td(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          td(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
            e = nr(n, e), e = xc(t, e, 1), t = tn(t, e, 1), e = Ye(), t !== null && (Pr(t, 1, e), qe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Wm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (Ue & n) === n && (De === 4 || De === 3 && (Ue & 130023424) === Ue && 500 > Te() - ws ? bn(e, 0) : ys |= n), qe(e, t);
  }
  function nd(e, t) {
    t === 0 && (e.mode & 1 ? (t = wo, wo <<= 1, !(wo & 130023424) && (wo = 4194304)) : t = 1);
    var n = Ye();
    e = jt(e, t), e !== null && (Pr(e, t, n), qe(e, n));
  }
  function Um(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), nd(e, n);
  }
  function Bm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), nd(e, n);
  }
  var rd;
  rd = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ge.current)
        Ze = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ze = !1, Om(e, t, n);
        Ze = !!(e.flags & 131072);
      }
    else
      Ze = !1, _e && t.flags & 1048576 && Du(t, Uo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ni(e, t), e = t.pendingProps;
        var i = Yn(t, Be.current);
        er(t, n), i = Xl(null, t, r, e, i, n);
        var a = Zl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, Fo(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, $l(t), i.updater = ei, t.stateNode = i, i._reactInternals = t, rs(t, r, e, n), t = ss(null, t, r, !0, a, n)) : (t.tag = 0, _e && a && zl(t), Ke(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ni(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Vm(r), e = gt(r, e), i) {
            case 0:
              t = ls(null, t, r, e, n);
              break e;
            case 1:
              t = Oc(null, t, r, e, n);
              break e;
            case 11:
              t = Cc(null, t, r, e, n);
              break e;
            case 14:
              t = Pc(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), ls(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Oc(e, t, r, i, n);
      case 3:
        e: {
          if (bc(t), e === null)
            throw Error(s(387));
          r = t.pendingProps, a = t.memoizedState, i = a.element, Hu(e, t), Ko(t, r, null, n);
          var c = t.memoizedState;
          if (r = c.element, a.isDehydrated)
            if (a = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
              i = nr(Error(s(423)), t), t = Ac(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = nr(Error(s(424)), t), t = Ac(e, t, r, n, i);
              break e;
            } else
              for (rt = Xt(t.stateNode.containerInfo.firstChild), nt = t, _e = !0, ht = null, n = $u(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Zn(), r === i) {
              t = It(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yu(t), e === null && Dl(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, c = i.children, Rl(r, i) ? c = null : a !== null && Rl(r, a) && (t.flags |= 32), _c(e, t), Ke(e, t, c, n), t.child;
      case 6:
        return e === null && Dl(t), null;
      case 13:
        return Tc(e, t, n);
      case 4:
        return Vl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : Ke(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Cc(e, t, r, i, n);
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, c = i.value, Ce(Vo, r._currentValue), r._currentValue = c, a !== null)
            if (mt(a.value, c)) {
              if (a.children === i.children && !Ge.current) {
                t = It(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var h = a.dependencies;
                if (h !== null) {
                  c = a.child;
                  for (var g = h.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (a.tag === 1) {
                        g = Ft(-1, n & -n), g.tag = 2;
                        var _ = a.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var D = _.pending;
                          D === null ? g.next = g : (g.next = D.next, D.next = g), _.pending = g;
                        }
                      }
                      a.lanes |= n, g = a.alternate, g !== null && (g.lanes |= n), Ul(
                        a.return,
                        n,
                        t
                      ), h.lanes |= n;
                      break;
                    }
                    g = g.next;
                  }
                } else if (a.tag === 10)
                  c = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (c = a.return, c === null)
                    throw Error(s(341));
                  c.lanes |= n, h = c.alternate, h !== null && (h.lanes |= n), Ul(c, n, t), c = a.sibling;
                } else
                  c = a.child;
                if (c !== null)
                  c.return = a;
                else
                  for (c = a; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (a = c.sibling, a !== null) {
                      a.return = c.return, c = a;
                      break;
                    }
                    c = c.return;
                  }
                a = c;
              }
          Ke(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, er(t, n), i = ut(i), r = r(i), t.flags |= 1, Ke(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = gt(r, t.pendingProps), i = gt(r.type, i), Pc(e, t, r, i, n);
      case 15:
        return Nc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), ni(e, t), t.tag = 1, Xe(r) ? (e = !0, Fo(t)) : e = !1, er(t, n), vc(t, r, i), rs(t, r, i, n), ss(null, t, r, !0, e, n);
      case 19:
        return Lc(e, t, n);
      case 22:
        return Rc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function od(e, t) {
    return ja(e, t);
  }
  function $m(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ft(e, t, n, r) {
    return new $m(e, t, n, r);
  }
  function Rs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Vm(e) {
    if (typeof e == "function")
      return Rs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === te)
        return 11;
      if (e === ke)
        return 14;
    }
    return 2;
  }
  function an(e, t) {
    var n = e.alternate;
    return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function pi(e, t, n, r, i, a) {
    var c = 2;
    if (r = e, typeof e == "function")
      Rs(e) && (c = 1);
    else if (typeof e == "string")
      c = 5;
    else
      e:
        switch (e) {
          case G:
            return Tn(n.children, i, a, t);
          case oe:
            c = 8, i |= 8;
            break;
          case he:
            return e = ft(12, n, t, i | 2), e.elementType = he, e.lanes = a, e;
          case de:
            return e = ft(13, n, t, i), e.elementType = de, e.lanes = a, e;
          case ue:
            return e = ft(19, n, t, i), e.elementType = ue, e.lanes = a, e;
          case re:
            return mi(n, i, a, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case fe:
                  c = 10;
                  break e;
                case Se:
                  c = 9;
                  break e;
                case te:
                  c = 11;
                  break e;
                case ke:
                  c = 14;
                  break e;
                case se:
                  c = 16, r = null;
                  break e;
              }
            throw Error(s(130, e == null ? e : typeof e, ""));
        }
    return t = ft(c, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
  }
  function Tn(e, t, n, r) {
    return e = ft(7, e, r, t), e.lanes = n, e;
  }
  function mi(e, t, n, r) {
    return e = ft(22, e, r, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function _s(e, t, n) {
    return e = ft(6, e, null, t), e.lanes = n, e;
  }
  function Os(e, t, n) {
    return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Hm(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nl(0), this.expirationTimes = nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function bs(e, t, n, r, i, a, c, h, g) {
    return e = new Hm(e, t, n, h, g), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ft(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $l(a), e;
  }
  function Qm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: J, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function id(e) {
    if (!e)
      return Jt;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1)
        throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n))
        return zu(e, n, t);
    }
    return t;
  }
  function ld(e, t, n, r, i, a, c, h, g) {
    return e = bs(n, r, !0, e, i, a, c, h, g), e.context = id(null), n = e.current, r = Ye(), i = ln(n), a = Ft(r, i), a.callback = t ?? null, tn(n, a, i), e.current.lanes = i, Pr(e, i, r), qe(e, r), e;
  }
  function hi(e, t, n, r) {
    var i = t.current, a = Ye(), c = ln(i);
    return n = id(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(a, c), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(i, t, c), e !== null && (wt(e, i, c, a), Qo(e, i, c)), c;
  }
  function gi(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function sd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function As(e, t) {
    sd(e, t), (e = e.alternate) && sd(e, t);
  }
  function Km() {
    return null;
  }
  var ad = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ts(e) {
    this._internalRoot = e;
  }
  vi.prototype.render = Ts.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(s(409));
    hi(e, t, null, null);
  }, vi.prototype.unmount = Ts.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      On(function() {
        hi(null, e, null, null);
      }), t[zt] = null;
    }
  };
  function vi(e) {
    this._internalRoot = e;
  }
  vi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ha();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++)
        ;
      Kt.splice(n, 0, e), n === 0 && Ya(e);
    }
  };
  function zs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function yi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ud() {
  }
  function Ym(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var a = r;
        r = function() {
          var _ = gi(c);
          a.call(_);
        };
      }
      var c = ld(t, r, e, 0, null, !1, !1, "", ud);
      return e._reactRootContainer = c, e[zt] = c.current, Ir(e.nodeType === 8 ? e.parentNode : e), On(), c;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var h = r;
      r = function() {
        var _ = gi(g);
        h.call(_);
      };
    }
    var g = bs(e, 0, !1, null, null, !1, !1, "", ud);
    return e._reactRootContainer = g, e[zt] = g.current, Ir(e.nodeType === 8 ? e.parentNode : e), On(function() {
      hi(t, g, n, r);
    }), g;
  }
  function wi(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
      var c = a;
      if (typeof i == "function") {
        var h = i;
        i = function() {
          var g = gi(c);
          h.call(g);
        };
      }
      hi(t, c, e, i);
    } else
      c = Ym(n, t, e, i, r);
    return gi(c);
  }
  $a = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Cr(t.pendingLanes);
          n !== 0 && (rl(t, n | 1), qe(t, Te()), !(ge & 6) && (ir = Te() + 500, qt()));
        }
        break;
      case 13:
        On(function() {
          var r = jt(e, 1);
          if (r !== null) {
            var i = Ye();
            wt(r, e, 1, i);
          }
        }), As(e, 1);
    }
  }, ol = function(e) {
    if (e.tag === 13) {
      var t = jt(e, 134217728);
      if (t !== null) {
        var n = Ye();
        wt(t, e, 134217728, n);
      }
      As(e, 134217728);
    }
  }, Va = function(e) {
    if (e.tag === 13) {
      var t = ln(e), n = jt(e, t);
      if (n !== null) {
        var r = Ye();
        wt(n, e, t, r);
      }
      As(e, t);
    }
  }, Ha = function() {
    return xe;
  }, Qa = function(e, t) {
    var n = xe;
    try {
      return xe = e, t();
    } finally {
      xe = n;
    }
  }, Xi = function(e, t, n) {
    switch (t) {
      case "input":
        if (Bi(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Do(r);
              if (!i)
                throw Error(s(90));
              fo(r), Bi(r, i);
            }
          }
        }
        break;
      case "textarea":
        Sa(e, n);
        break;
      case "select":
        t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
    }
  }, ba = Cs, Aa = On;
  var Gm = { usingClientEntryPoint: !1, Events: [Br, Qn, Do, _a, Oa, Cs] }, no = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xm = { bundleType: no.bundleType, version: no.version, rendererPackageName: no.rendererPackageName, rendererConfig: no.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ma(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: no.findFiberByHostInstance || Km, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber)
      try {
        vo = xi.inject(Xm), kt = xi;
      } catch {
      }
  }
  return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm, et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zs(t))
      throw Error(s(200));
    return Qm(e, t, null, n);
  }, et.createRoot = function(e, t) {
    if (!zs(e))
      throw Error(s(299));
    var n = !1, r = "", i = ad;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = bs(e, 1, !1, null, null, n, !1, r, i), e[zt] = t.current, Ir(e.nodeType === 8 ? e.parentNode : e), new Ts(t);
  }, et.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Ma(t), e = e === null ? null : e.stateNode, e;
  }, et.flushSync = function(e) {
    return On(e);
  }, et.hydrate = function(e, t, n) {
    if (!yi(t))
      throw Error(s(200));
    return wi(null, e, t, !0, n);
  }, et.hydrateRoot = function(e, t, n) {
    if (!zs(e))
      throw Error(s(405));
    var r = n != null && n.hydratedSources || null, i = !1, a = "", c = ad;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, i, !1, a, c), e[zt] = t.current, Ir(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new vi(t);
  }, et.render = function(e, t, n) {
    if (!yi(t))
      throw Error(s(200));
    return wi(null, e, t, !1, n);
  }, et.unmountComponentAtNode = function(e) {
    if (!yi(e))
      throw Error(s(40));
    return e._reactRootContainer ? (On(function() {
      wi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[zt] = null;
      });
    }), !0) : !1;
  }, et.unstable_batchedUpdates = Cs, et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!yi(n))
      throw Error(s(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(s(38));
    return wi(e, t, n, !1, r);
  }, et.version = "18.3.1-next-f1338f8080-20240426", et;
}
function Kd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd);
    } catch (o) {
      console.error(o);
    }
}
Kd(), Qd.exports = rh();
var Mi = Qd.exports;
const oh = /* @__PURE__ */ Vd(Mi);
var gd = Mi;
Ks.createRoot = gd.createRoot, Ks.hydrateRoot = gd.hydrateRoot;
var C = ra();
const ih = /* @__PURE__ */ Vd(C), lh = /* @__PURE__ */ Jm({
  __proto__: null,
  default: ih
}, [C]);
function vd(o, l) {
  if (typeof o == "function")
    return o(l);
  o != null && (o.current = l);
}
function Yd(...o) {
  return (l) => {
    let s = !1;
    const u = o.map((d) => {
      const f = vd(d, l);
      return !s && typeof f == "function" && (s = !0), f;
    });
    if (s)
      return () => {
        for (let d = 0; d < u.length; d++) {
          const f = u[d];
          typeof f == "function" ? f() : vd(o[d], null);
        }
      };
  };
}
function yn(...o) {
  return C.useCallback(Yd(...o), o);
}
var Di = C.forwardRef((o, l) => {
  const { children: s, ...u } = o, d = C.Children.toArray(s), f = d.find(ah);
  if (f) {
    const p = f.props.children, m = d.map((w) => w === f ? C.Children.count(p) > 1 ? C.Children.only(null) : C.isValidElement(p) ? p.props.children : null : w);
    return /* @__PURE__ */ U.jsx(Ys, { ...u, ref: l, children: C.isValidElement(p) ? C.cloneElement(p, void 0, m) : null });
  }
  return /* @__PURE__ */ U.jsx(Ys, { ...u, ref: l, children: s });
});
Di.displayName = "Slot";
var Ys = C.forwardRef((o, l) => {
  const { children: s, ...u } = o;
  if (C.isValidElement(s)) {
    const d = ch(s);
    return C.cloneElement(s, {
      ...uh(u, s.props),
      // @ts-ignore
      ref: l ? Yd(l, d) : d
    });
  }
  return C.Children.count(s) > 1 ? C.Children.only(null) : null;
});
Ys.displayName = "SlotClone";
var sh = ({ children: o }) => /* @__PURE__ */ U.jsx(U.Fragment, { children: o });
function ah(o) {
  return C.isValidElement(o) && o.type === sh;
}
function uh(o, l) {
  const s = { ...l };
  for (const u in l) {
    const d = o[u], f = l[u];
    /^on[A-Z]/.test(u) ? d && f ? s[u] = (...m) => {
      f(...m), d(...m);
    } : d && (s[u] = d) : u === "style" ? s[u] = { ...d, ...f } : u === "className" && (s[u] = [d, f].filter(Boolean).join(" "));
  }
  return { ...o, ...s };
}
function ch(o) {
  let l = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? o.ref : (l = Object.getOwnPropertyDescriptor(o, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? o.props.ref : o.props.ref || o.ref);
}
function Gd(o) {
  var l, s, u = "";
  if (typeof o == "string" || typeof o == "number")
    u += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var d = o.length;
      for (l = 0; l < d; l++)
        o[l] && (s = Gd(o[l])) && (u && (u += " "), u += s);
    } else
      for (s in o)
        o[s] && (u && (u += " "), u += s);
  return u;
}
function Xd() {
  for (var o, l, s = 0, u = "", d = arguments.length; s < d; s++)
    (o = arguments[s]) && (l = Gd(o)) && (u && (u += " "), u += l);
  return u;
}
const yd = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, wd = Xd, Zd = (o, l) => (s) => {
  var u;
  if (l?.variants == null)
    return wd(o, s?.class, s?.className);
  const { variants: d, defaultVariants: f } = l, p = Object.keys(d).map((y) => {
    const P = s?.[y], k = f?.[y];
    if (P === null)
      return null;
    const R = yd(P) || yd(k);
    return d[y][R];
  }), m = s && Object.entries(s).reduce((y, P) => {
    let [k, R] = P;
    return R === void 0 || (y[k] = R), y;
  }, {}), w = l == null || (u = l.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((y, P) => {
    let { class: k, className: R, ...b } = P;
    return Object.entries(b).every((A) => {
      let [S, O] = A;
      return Array.isArray(O) ? O.includes({
        ...f,
        ...m
      }[S]) : {
        ...f,
        ...m
      }[S] === O;
    }) ? [
      ...y,
      k,
      R
    ] : y;
  }, []);
  return wd(o, p, w, s?.class, s?.className);
}, oa = "-", dh = (o) => {
  const l = ph(o), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: u
  } = o;
  return {
    getClassGroupId: (p) => {
      const m = p.split(oa);
      return m[0] === "" && m.length !== 1 && m.shift(), Jd(m, l) || fh(p);
    },
    getConflictingClassGroupIds: (p, m) => {
      const w = s[p] || [];
      return m && u[p] ? [...w, ...u[p]] : w;
    }
  };
}, Jd = (o, l) => {
  if (o.length === 0)
    return l.classGroupId;
  const s = o[0], u = l.nextPart.get(s), d = u ? Jd(o.slice(1), u) : void 0;
  if (d)
    return d;
  if (l.validators.length === 0)
    return;
  const f = o.join(oa);
  return l.validators.find(({
    validator: p
  }) => p(f))?.classGroupId;
}, xd = /^\[(.+)\]$/, fh = (o) => {
  if (xd.test(o)) {
    const l = xd.exec(o)[1], s = l?.substring(0, l.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, ph = (o) => {
  const {
    theme: l,
    prefix: s
  } = o, u = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hh(Object.entries(o.classGroups), s).forEach(([f, p]) => {
    Gs(p, u, f, l);
  }), u;
}, Gs = (o, l, s, u) => {
  o.forEach((d) => {
    if (typeof d == "string") {
      const f = d === "" ? l : Sd(l, d);
      f.classGroupId = s;
      return;
    }
    if (typeof d == "function") {
      if (mh(d)) {
        Gs(d(u), l, s, u);
        return;
      }
      l.validators.push({
        validator: d,
        classGroupId: s
      });
      return;
    }
    Object.entries(d).forEach(([f, p]) => {
      Gs(p, Sd(l, f), s, u);
    });
  });
}, Sd = (o, l) => {
  let s = o;
  return l.split(oa).forEach((u) => {
    s.nextPart.has(u) || s.nextPart.set(u, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(u);
  }), s;
}, mh = (o) => o.isThemeGetter, hh = (o, l) => l ? o.map(([s, u]) => {
  const d = u.map((f) => typeof f == "string" ? l + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(([p, m]) => [l + p, m])) : f);
  return [s, d];
}) : o, gh = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  const d = (f, p) => {
    s.set(f, p), l++, l > o && (l = 0, u = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let p = s.get(f);
      if (p !== void 0)
        return p;
      if ((p = u.get(f)) !== void 0)
        return d(f, p), p;
    },
    set(f, p) {
      s.has(f) ? s.set(f, p) : d(f, p);
    }
  };
}, qd = "!", vh = (o) => {
  const {
    separator: l,
    experimentalParseClassName: s
  } = o, u = l.length === 1, d = l[0], f = l.length, p = (m) => {
    const w = [];
    let y = 0, P = 0, k;
    for (let O = 0; O < m.length; O++) {
      let z = m[O];
      if (y === 0) {
        if (z === d && (u || m.slice(O, O + f) === l)) {
          w.push(m.slice(P, O)), P = O + f;
          continue;
        }
        if (z === "/") {
          k = O;
          continue;
        }
      }
      z === "[" ? y++ : z === "]" && y--;
    }
    const R = w.length === 0 ? m : m.substring(P), b = R.startsWith(qd), A = b ? R.substring(1) : R, S = k && k > P ? k - P : void 0;
    return {
      modifiers: w,
      hasImportantModifier: b,
      baseClassName: A,
      maybePostfixModifierPosition: S
    };
  };
  return s ? (m) => s({
    className: m,
    parseClassName: p
  }) : p;
}, yh = (o) => {
  if (o.length <= 1)
    return o;
  const l = [];
  let s = [];
  return o.forEach((u) => {
    u[0] === "[" ? (l.push(...s.sort(), u), s = []) : s.push(u);
  }), l.push(...s.sort()), l;
}, wh = (o) => ({
  cache: gh(o.cacheSize),
  parseClassName: vh(o),
  ...dh(o)
}), xh = /\s+/, Sh = (o, l) => {
  const {
    parseClassName: s,
    getClassGroupId: u,
    getConflictingClassGroupIds: d
  } = l, f = [], p = o.trim().split(xh);
  let m = "";
  for (let w = p.length - 1; w >= 0; w -= 1) {
    const y = p[w], {
      modifiers: P,
      hasImportantModifier: k,
      baseClassName: R,
      maybePostfixModifierPosition: b
    } = s(y);
    let A = !!b, S = u(A ? R.substring(0, b) : R);
    if (!S) {
      if (!A) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (S = u(R), !S) {
        m = y + (m.length > 0 ? " " + m : m);
        continue;
      }
      A = !1;
    }
    const O = yh(P).join(":"), z = k ? O + qd : O, W = z + S;
    if (f.includes(W))
      continue;
    f.push(W);
    const B = d(S, A);
    for (let I = 0; I < B.length; ++I) {
      const V = B[I];
      f.push(z + V);
    }
    m = y + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function kh() {
  let o = 0, l, s, u = "";
  for (; o < arguments.length; )
    (l = arguments[o++]) && (s = ef(l)) && (u && (u += " "), u += s);
  return u;
}
const ef = (o) => {
  if (typeof o == "string")
    return o;
  let l, s = "";
  for (let u = 0; u < o.length; u++)
    o[u] && (l = ef(o[u])) && (s && (s += " "), s += l);
  return s;
};
function Eh(o, ...l) {
  let s, u, d, f = p;
  function p(w) {
    const y = l.reduce((P, k) => k(P), o());
    return s = wh(y), u = s.cache.get, d = s.cache.set, f = m, m(w);
  }
  function m(w) {
    const y = u(w);
    if (y)
      return y;
    const P = Sh(w, s);
    return d(w, P), P;
  }
  return function() {
    return f(kh.apply(null, arguments));
  };
}
const Re = (o) => {
  const l = (s) => s[o] || [];
  return l.isThemeGetter = !0, l;
}, tf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ch = /^\d+\/\d+$/, Ph = /* @__PURE__ */ new Set(["px", "full", "screen"]), Nh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _h = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Oh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ut = (o) => cr(o) || Ph.has(o) || Ch.test(o), cn = (o) => hr(o, "length", Fh), cr = (o) => !!o && !Number.isNaN(Number(o)), js = (o) => hr(o, "number", cr), oo = (o) => !!o && Number.isInteger(Number(o)), Ah = (o) => o.endsWith("%") && cr(o.slice(0, -1)), le = (o) => tf.test(o), dn = (o) => Nh.test(o), Th = /* @__PURE__ */ new Set(["length", "size", "percentage"]), zh = (o) => hr(o, Th, nf), Lh = (o) => hr(o, "position", nf), Mh = /* @__PURE__ */ new Set(["image", "url"]), Dh = (o) => hr(o, Mh, Wh), jh = (o) => hr(o, "", Ih), io = () => !0, hr = (o, l, s) => {
  const u = tf.exec(o);
  return u ? u[1] ? typeof l == "string" ? u[1] === l : l.has(u[1]) : s(u[2]) : !1;
}, Fh = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Rh.test(o) && !_h.test(o)
), nf = () => !1, Ih = (o) => Oh.test(o), Wh = (o) => bh.test(o), Uh = () => {
  const o = Re("colors"), l = Re("spacing"), s = Re("blur"), u = Re("brightness"), d = Re("borderColor"), f = Re("borderRadius"), p = Re("borderSpacing"), m = Re("borderWidth"), w = Re("contrast"), y = Re("grayscale"), P = Re("hueRotate"), k = Re("invert"), R = Re("gap"), b = Re("gradientColorStops"), A = Re("gradientColorStopPositions"), S = Re("inset"), O = Re("margin"), z = Re("opacity"), W = Re("padding"), B = Re("saturate"), I = Re("scale"), V = Re("sepia"), J = Re("skew"), G = Re("space"), oe = Re("translate"), he = () => ["auto", "contain", "none"], fe = () => ["auto", "hidden", "clip", "visible", "scroll"], Se = () => ["auto", le, l], te = () => [le, l], de = () => ["", Ut, cn], ue = () => ["auto", cr, le], ke = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], se = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], H = () => ["", "0", le], $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [cr, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [io],
      spacing: [Ut, cn],
      blur: ["none", "", dn, le],
      brightness: x(),
      borderColor: [o],
      borderRadius: ["none", "", "full", dn, le],
      borderSpacing: te(),
      borderWidth: de(),
      contrast: x(),
      grayscale: H(),
      hueRotate: x(),
      invert: H(),
      gap: te(),
      gradientColorStops: [o],
      gradientColorStopPositions: [Ah, cn],
      inset: Se(),
      margin: Se(),
      opacity: x(),
      padding: te(),
      saturate: x(),
      scale: x(),
      sepia: H(),
      skew: x(),
      space: te(),
      translate: te()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [dn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...ke(), le]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: fe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": fe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": fe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: he()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": he()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": he()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", oo, le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Se()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", oo, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [io]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", oo, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [io]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [oo, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [R]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [R]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [R]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...T()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...T(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...T(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [W]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [W]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [W]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [W]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [W]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [W]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [W]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [W]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [W]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [O]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [O]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [O]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [O]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [O]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [O]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [O]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [O]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [O]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [G]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [G]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, l]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, l, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, l, "none", "full", "min", "max", "fit", "prose", {
          screen: [dn]
        }, dn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, l, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, l, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", dn, cn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", js]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [io]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", cr, js]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [o]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [z]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [o]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [z]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ut, cn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ut, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [o]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: te()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [z]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...ke(), Lh]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [o]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [f]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [f]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [f]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [f]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [f]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [f]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [f]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [f]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [f]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [f]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [f]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [f]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [f]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [f]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [f]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [m]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [m]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [m]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [m]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [m]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [m]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [m]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [m]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [m]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [z]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...se(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [m]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [m]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [z]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: se()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [d]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [d]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [d]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [d]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [d]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [d]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [d]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [d]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [d]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [d]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...se()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ut, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ut, cn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [o]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: de()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [o]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [z]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ut, cn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [o]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", dn, jh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [io]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [s]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [u]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [w]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", dn, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [V]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [s]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [u]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [V]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [p]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [p]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [p]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: x()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: x()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [oo, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [oe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [oe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [J]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [J]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", o]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [o]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": te()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": te()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": te()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": te()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": te()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": te()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": te()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": te()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": te()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": te()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": te()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": te()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": te()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": te()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": te()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": te()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": te()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": te()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [o, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ut, cn, js]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [o, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Bh = /* @__PURE__ */ Eh(Uh);
function ao(...o) {
  return Bh(Xd(o));
}
const $h = Zd(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Xs = C.forwardRef(({ className: o, variant: l, size: s, asChild: u = !1, ...d }, f) => {
  const p = u ? Di : "button";
  return /* @__PURE__ */ U.jsx(
    p,
    {
      className: ao($h({ variant: l, size: s, className: o })),
      ref: f,
      ...d
    }
  );
});
Xs.displayName = "Button";
const Zs = C.forwardRef(({ className: o, type: l, ...s }, u) => /* @__PURE__ */ U.jsx(
  "input",
  {
    type: l,
    className: ao(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      o
    ),
    ref: u,
    ...s
  }
));
Zs.displayName = "Input";
var Vh = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], bt = Vh.reduce((o, l) => {
  const s = C.forwardRef((u, d) => {
    const { asChild: f, ...p } = u, m = f ? Di : l;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ U.jsx(m, { ...p, ref: d });
  });
  return s.displayName = `Primitive.${l}`, { ...o, [l]: s };
}, {});
function Hh(o, l) {
  o && Mi.flushSync(() => o.dispatchEvent(l));
}
var Qh = "Label", rf = C.forwardRef((o, l) => /* @__PURE__ */ U.jsx(
  bt.label,
  {
    ...o,
    ref: l,
    onMouseDown: (s) => {
      s.target.closest("button, input, select, textarea") || (o.onMouseDown?.(s), !s.defaultPrevented && s.detail > 1 && s.preventDefault());
    }
  }
));
rf.displayName = Qh;
var of = rf;
const Kh = Zd(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ri = C.forwardRef(({ className: o, ...l }, s) => /* @__PURE__ */ U.jsx(of, { ref: s, className: ao(Kh(), o), ...l }));
Ri.displayName = of.displayName;
const lf = C.forwardRef(({ className: o, ...l }, s) => /* @__PURE__ */ U.jsx(
  "textarea",
  {
    className: ao(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      o
    ),
    ref: s,
    ...l
  }
));
lf.displayName = "Textarea";
function pn(o, l, { checkForDefaultPrevented: s = !0 } = {}) {
  return function(d) {
    if (o?.(d), s === !1 || !d.defaultPrevented)
      return l?.(d);
  };
}
function sf(o, l = []) {
  let s = [];
  function u(f, p) {
    const m = C.createContext(p), w = s.length;
    s = [...s, p];
    const y = (k) => {
      const { scope: R, children: b, ...A } = k, S = R?.[o]?.[w] || m, O = C.useMemo(() => A, Object.values(A));
      return /* @__PURE__ */ U.jsx(S.Provider, { value: O, children: b });
    };
    y.displayName = f + "Provider";
    function P(k, R) {
      const b = R?.[o]?.[w] || m, A = C.useContext(b);
      if (A)
        return A;
      if (p !== void 0)
        return p;
      throw new Error(`\`${k}\` must be used within \`${f}\``);
    }
    return [y, P];
  }
  const d = () => {
    const f = s.map((p) => C.createContext(p));
    return function(m) {
      const w = m?.[o] || f;
      return C.useMemo(
        () => ({ [`__scope${o}`]: { ...m, [o]: w } }),
        [m, w]
      );
    };
  };
  return d.scopeName = o, [u, Yh(d, ...l)];
}
function Yh(...o) {
  const l = o[0];
  if (o.length === 1)
    return l;
  const s = () => {
    const u = o.map((d) => ({
      useScope: d(),
      scopeName: d.scopeName
    }));
    return function(f) {
      const p = u.reduce((m, { useScope: w, scopeName: y }) => {
        const k = w(f)[`__scope${y}`];
        return { ...m, ...k };
      }, {});
      return C.useMemo(() => ({ [`__scope${l.scopeName}`]: p }), [p]);
    };
  };
  return s.scopeName = l.scopeName, s;
}
function mn(o) {
  const l = C.useRef(o);
  return C.useEffect(() => {
    l.current = o;
  }), C.useMemo(() => (...s) => l.current?.(...s), []);
}
function Gh(o, l = globalThis?.document) {
  const s = mn(o);
  C.useEffect(() => {
    const u = (d) => {
      d.key === "Escape" && s(d);
    };
    return l.addEventListener("keydown", u, { capture: !0 }), () => l.removeEventListener("keydown", u, { capture: !0 });
  }, [s, l]);
}
var Xh = "DismissableLayer", Js = "dismissableLayer.update", Zh = "dismissableLayer.pointerDownOutside", Jh = "dismissableLayer.focusOutside", kd, af = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), uf = C.forwardRef(
  (o, l) => {
    const {
      disableOutsidePointerEvents: s = !1,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: m,
      ...w
    } = o, y = C.useContext(af), [P, k] = C.useState(null), R = P?.ownerDocument ?? globalThis?.document, [, b] = C.useState({}), A = yn(l, (G) => k(G)), S = Array.from(y.layers), [O] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), z = S.indexOf(O), W = P ? S.indexOf(P) : -1, B = y.layersWithOutsidePointerEventsDisabled.size > 0, I = W >= z, V = tg((G) => {
      const oe = G.target, he = [...y.branches].some((fe) => fe.contains(oe));
      !I || he || (d?.(G), p?.(G), G.defaultPrevented || m?.());
    }, R), J = ng((G) => {
      const oe = G.target;
      [...y.branches].some((fe) => fe.contains(oe)) || (f?.(G), p?.(G), G.defaultPrevented || m?.());
    }, R);
    return Gh((G) => {
      W === y.layers.size - 1 && (u?.(G), !G.defaultPrevented && m && (G.preventDefault(), m()));
    }, R), C.useEffect(() => {
      if (P)
        return s && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (kd = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(P)), y.layers.add(P), Ed(), () => {
          s && y.layersWithOutsidePointerEventsDisabled.size === 1 && (R.body.style.pointerEvents = kd);
        };
    }, [P, R, s, y]), C.useEffect(() => () => {
      P && (y.layers.delete(P), y.layersWithOutsidePointerEventsDisabled.delete(P), Ed());
    }, [P, y]), C.useEffect(() => {
      const G = () => b({});
      return document.addEventListener(Js, G), () => document.removeEventListener(Js, G);
    }, []), /* @__PURE__ */ U.jsx(
      bt.div,
      {
        ...w,
        ref: A,
        style: {
          pointerEvents: B ? I ? "auto" : "none" : void 0,
          ...o.style
        },
        onFocusCapture: pn(o.onFocusCapture, J.onFocusCapture),
        onBlurCapture: pn(o.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: pn(
          o.onPointerDownCapture,
          V.onPointerDownCapture
        )
      }
    );
  }
);
uf.displayName = Xh;
var qh = "DismissableLayerBranch", eg = C.forwardRef((o, l) => {
  const s = C.useContext(af), u = C.useRef(null), d = yn(l, u);
  return C.useEffect(() => {
    const f = u.current;
    if (f)
      return s.branches.add(f), () => {
        s.branches.delete(f);
      };
  }, [s.branches]), /* @__PURE__ */ U.jsx(bt.div, { ...o, ref: d });
});
eg.displayName = qh;
function tg(o, l = globalThis?.document) {
  const s = mn(o), u = C.useRef(!1), d = C.useRef(() => {
  });
  return C.useEffect(() => {
    const f = (m) => {
      if (m.target && !u.current) {
        let w = function() {
          cf(
            Zh,
            s,
            y,
            { discrete: !0 }
          );
        };
        const y = { originalEvent: m };
        m.pointerType === "touch" ? (l.removeEventListener("click", d.current), d.current = w, l.addEventListener("click", d.current, { once: !0 })) : w();
      } else
        l.removeEventListener("click", d.current);
      u.current = !1;
    }, p = window.setTimeout(() => {
      l.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(p), l.removeEventListener("pointerdown", f), l.removeEventListener("click", d.current);
    };
  }, [l, s]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => u.current = !0
  };
}
function ng(o, l = globalThis?.document) {
  const s = mn(o), u = C.useRef(!1);
  return C.useEffect(() => {
    const d = (f) => {
      f.target && !u.current && cf(Jh, s, { originalEvent: f }, {
        discrete: !1
      });
    };
    return l.addEventListener("focusin", d), () => l.removeEventListener("focusin", d);
  }, [l, s]), {
    onFocusCapture: () => u.current = !0,
    onBlurCapture: () => u.current = !1
  };
}
function Ed() {
  const o = new CustomEvent(Js);
  document.dispatchEvent(o);
}
function cf(o, l, s, { discrete: u }) {
  const d = s.originalEvent.target, f = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: s });
  l && d.addEventListener(o, l, { once: !0 }), u ? Hh(d, f) : d.dispatchEvent(f);
}
var Fs = 0;
function rg() {
  C.useEffect(() => {
    const o = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", o[0] ?? Cd()), document.body.insertAdjacentElement("beforeend", o[1] ?? Cd()), Fs++, () => {
      Fs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((l) => l.remove()), Fs--;
    };
  }, []);
}
function Cd() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.outline = "none", o.style.opacity = "0", o.style.position = "fixed", o.style.pointerEvents = "none", o;
}
var Is = "focusScope.autoFocusOnMount", Ws = "focusScope.autoFocusOnUnmount", Pd = { bubbles: !1, cancelable: !0 }, og = "FocusScope", df = C.forwardRef((o, l) => {
  const {
    loop: s = !1,
    trapped: u = !1,
    onMountAutoFocus: d,
    onUnmountAutoFocus: f,
    ...p
  } = o, [m, w] = C.useState(null), y = mn(d), P = mn(f), k = C.useRef(null), R = yn(l, (S) => w(S)), b = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (u) {
      let S = function(B) {
        if (b.paused || !m)
          return;
        const I = B.target;
        m.contains(I) ? k.current = I : fn(k.current, { select: !0 });
      }, O = function(B) {
        if (b.paused || !m)
          return;
        const I = B.relatedTarget;
        I !== null && (m.contains(I) || fn(k.current, { select: !0 }));
      }, z = function(B) {
        if (document.activeElement === document.body)
          for (const V of B)
            V.removedNodes.length > 0 && fn(m);
      };
      document.addEventListener("focusin", S), document.addEventListener("focusout", O);
      const W = new MutationObserver(z);
      return m && W.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", S), document.removeEventListener("focusout", O), W.disconnect();
      };
    }
  }, [u, m, b.paused]), C.useEffect(() => {
    if (m) {
      Rd.add(b);
      const S = document.activeElement;
      if (!m.contains(S)) {
        const z = new CustomEvent(Is, Pd);
        m.addEventListener(Is, y), m.dispatchEvent(z), z.defaultPrevented || (ig(cg(ff(m)), { select: !0 }), document.activeElement === S && fn(m));
      }
      return () => {
        m.removeEventListener(Is, y), setTimeout(() => {
          const z = new CustomEvent(Ws, Pd);
          m.addEventListener(Ws, P), m.dispatchEvent(z), z.defaultPrevented || fn(S ?? document.body, { select: !0 }), m.removeEventListener(Ws, P), Rd.remove(b);
        }, 0);
      };
    }
  }, [m, y, P, b]);
  const A = C.useCallback(
    (S) => {
      if (!s && !u || b.paused)
        return;
      const O = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey, z = document.activeElement;
      if (O && z) {
        const W = S.currentTarget, [B, I] = lg(W);
        B && I ? !S.shiftKey && z === I ? (S.preventDefault(), s && fn(B, { select: !0 })) : S.shiftKey && z === B && (S.preventDefault(), s && fn(I, { select: !0 })) : z === W && S.preventDefault();
      }
    },
    [s, u, b.paused]
  );
  return /* @__PURE__ */ U.jsx(bt.div, { tabIndex: -1, ...p, ref: R, onKeyDown: A });
});
df.displayName = og;
function ig(o, { select: l = !1 } = {}) {
  const s = document.activeElement;
  for (const u of o)
    if (fn(u, { select: l }), document.activeElement !== s)
      return;
}
function lg(o) {
  const l = ff(o), s = Nd(l, o), u = Nd(l.reverse(), o);
  return [s, u];
}
function ff(o) {
  const l = [], s = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (u) => {
      const d = u.tagName === "INPUT" && u.type === "hidden";
      return u.disabled || u.hidden || d ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); )
    l.push(s.currentNode);
  return l;
}
function Nd(o, l) {
  for (const s of o)
    if (!sg(s, { upTo: l }))
      return s;
}
function sg(o, { upTo: l }) {
  if (getComputedStyle(o).visibility === "hidden")
    return !0;
  for (; o; ) {
    if (l !== void 0 && o === l)
      return !1;
    if (getComputedStyle(o).display === "none")
      return !0;
    o = o.parentElement;
  }
  return !1;
}
function ag(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function fn(o, { select: l = !1 } = {}) {
  if (o && o.focus) {
    const s = document.activeElement;
    o.focus({ preventScroll: !0 }), o !== s && ag(o) && l && o.select();
  }
}
var Rd = ug();
function ug() {
  let o = [];
  return {
    add(l) {
      const s = o[0];
      l !== s && s?.pause(), o = _d(o, l), o.unshift(l);
    },
    remove(l) {
      o = _d(o, l), o[0]?.resume();
    }
  };
}
function _d(o, l) {
  const s = [...o], u = s.indexOf(l);
  return u !== -1 && s.splice(u, 1), s;
}
function cg(o) {
  return o.filter((l) => l.tagName !== "A");
}
var zn = globalThis?.document ? C.useLayoutEffect : () => {
}, dg = lh["useId".toString()] || (() => {
}), fg = 0;
function pg(o) {
  const [l, s] = C.useState(dg());
  return zn(() => {
    o || s((u) => u ?? String(fg++));
  }, [o]), o || (l ? `radix-${l}` : "");
}
const mg = ["top", "right", "bottom", "left"], hn = Math.min, it = Math.max, Ai = Math.round, Si = Math.floor, _t = (o) => ({
  x: o,
  y: o
}), hg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gg = {
  start: "end",
  end: "start"
};
function qs(o, l, s) {
  return it(o, hn(l, s));
}
function Bt(o, l) {
  return typeof o == "function" ? o(l) : o;
}
function $t(o) {
  return o.split("-")[0];
}
function gr(o) {
  return o.split("-")[1];
}
function ia(o) {
  return o === "x" ? "y" : "x";
}
function la(o) {
  return o === "y" ? "height" : "width";
}
function gn(o) {
  return ["top", "bottom"].includes($t(o)) ? "y" : "x";
}
function sa(o) {
  return ia(gn(o));
}
function vg(o, l, s) {
  s === void 0 && (s = !1);
  const u = gr(o), d = sa(o), f = la(d);
  let p = d === "x" ? u === (s ? "end" : "start") ? "right" : "left" : u === "start" ? "bottom" : "top";
  return l.reference[f] > l.floating[f] && (p = Ti(p)), [p, Ti(p)];
}
function yg(o) {
  const l = Ti(o);
  return [ea(o), l, ea(l)];
}
function ea(o) {
  return o.replace(/start|end/g, (l) => gg[l]);
}
function wg(o, l, s) {
  const u = ["left", "right"], d = ["right", "left"], f = ["top", "bottom"], p = ["bottom", "top"];
  switch (o) {
    case "top":
    case "bottom":
      return s ? l ? d : u : l ? u : d;
    case "left":
    case "right":
      return l ? f : p;
    default:
      return [];
  }
}
function xg(o, l, s, u) {
  const d = gr(o);
  let f = wg($t(o), s === "start", u);
  return d && (f = f.map((p) => p + "-" + d), l && (f = f.concat(f.map(ea)))), f;
}
function Ti(o) {
  return o.replace(/left|right|bottom|top/g, (l) => hg[l]);
}
function Sg(o) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...o
  };
}
function pf(o) {
  return typeof o != "number" ? Sg(o) : {
    top: o,
    right: o,
    bottom: o,
    left: o
  };
}
function zi(o) {
  const {
    x: l,
    y: s,
    width: u,
    height: d
  } = o;
  return {
    width: u,
    height: d,
    top: s,
    left: l,
    right: l + u,
    bottom: s + d,
    x: l,
    y: s
  };
}
function Od(o, l, s) {
  let {
    reference: u,
    floating: d
  } = o;
  const f = gn(l), p = sa(l), m = la(p), w = $t(l), y = f === "y", P = u.x + u.width / 2 - d.width / 2, k = u.y + u.height / 2 - d.height / 2, R = u[m] / 2 - d[m] / 2;
  let b;
  switch (w) {
    case "top":
      b = {
        x: P,
        y: u.y - d.height
      };
      break;
    case "bottom":
      b = {
        x: P,
        y: u.y + u.height
      };
      break;
    case "right":
      b = {
        x: u.x + u.width,
        y: k
      };
      break;
    case "left":
      b = {
        x: u.x - d.width,
        y: k
      };
      break;
    default:
      b = {
        x: u.x,
        y: u.y
      };
  }
  switch (gr(l)) {
    case "start":
      b[p] -= R * (s && y ? -1 : 1);
      break;
    case "end":
      b[p] += R * (s && y ? -1 : 1);
      break;
  }
  return b;
}
const kg = async (o, l, s) => {
  const {
    placement: u = "bottom",
    strategy: d = "absolute",
    middleware: f = [],
    platform: p
  } = s, m = f.filter(Boolean), w = await (p.isRTL == null ? void 0 : p.isRTL(l));
  let y = await p.getElementRects({
    reference: o,
    floating: l,
    strategy: d
  }), {
    x: P,
    y: k
  } = Od(y, u, w), R = u, b = {}, A = 0;
  for (let S = 0; S < m.length; S++) {
    const {
      name: O,
      fn: z
    } = m[S], {
      x: W,
      y: B,
      data: I,
      reset: V
    } = await z({
      x: P,
      y: k,
      initialPlacement: u,
      placement: R,
      strategy: d,
      middlewareData: b,
      rects: y,
      platform: p,
      elements: {
        reference: o,
        floating: l
      }
    });
    P = W ?? P, k = B ?? k, b = {
      ...b,
      [O]: {
        ...b[O],
        ...I
      }
    }, V && A <= 50 && (A++, typeof V == "object" && (V.placement && (R = V.placement), V.rects && (y = V.rects === !0 ? await p.getElementRects({
      reference: o,
      floating: l,
      strategy: d
    }) : V.rects), {
      x: P,
      y: k
    } = Od(y, R, w)), S = -1);
  }
  return {
    x: P,
    y: k,
    placement: R,
    strategy: d,
    middlewareData: b
  };
};
async function lo(o, l) {
  var s;
  l === void 0 && (l = {});
  const {
    x: u,
    y: d,
    platform: f,
    rects: p,
    elements: m,
    strategy: w
  } = o, {
    boundary: y = "clippingAncestors",
    rootBoundary: P = "viewport",
    elementContext: k = "floating",
    altBoundary: R = !1,
    padding: b = 0
  } = Bt(l, o), A = pf(b), O = m[R ? k === "floating" ? "reference" : "floating" : k], z = zi(await f.getClippingRect({
    element: (s = await (f.isElement == null ? void 0 : f.isElement(O))) == null || s ? O : O.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(m.floating)),
    boundary: y,
    rootBoundary: P,
    strategy: w
  })), W = k === "floating" ? {
    x: u,
    y: d,
    width: p.floating.width,
    height: p.floating.height
  } : p.reference, B = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(m.floating)), I = await (f.isElement == null ? void 0 : f.isElement(B)) ? await (f.getScale == null ? void 0 : f.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, V = zi(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: W,
    offsetParent: B,
    strategy: w
  }) : W);
  return {
    top: (z.top - V.top + A.top) / I.y,
    bottom: (V.bottom - z.bottom + A.bottom) / I.y,
    left: (z.left - V.left + A.left) / I.x,
    right: (V.right - z.right + A.right) / I.x
  };
}
const Eg = (o) => ({
  name: "arrow",
  options: o,
  async fn(l) {
    const {
      x: s,
      y: u,
      placement: d,
      rects: f,
      platform: p,
      elements: m,
      middlewareData: w
    } = l, {
      element: y,
      padding: P = 0
    } = Bt(o, l) || {};
    if (y == null)
      return {};
    const k = pf(P), R = {
      x: s,
      y: u
    }, b = sa(d), A = la(b), S = await p.getDimensions(y), O = b === "y", z = O ? "top" : "left", W = O ? "bottom" : "right", B = O ? "clientHeight" : "clientWidth", I = f.reference[A] + f.reference[b] - R[b] - f.floating[A], V = R[b] - f.reference[b], J = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(y));
    let G = J ? J[B] : 0;
    (!G || !await (p.isElement == null ? void 0 : p.isElement(J))) && (G = m.floating[B] || f.floating[A]);
    const oe = I / 2 - V / 2, he = G / 2 - S[A] / 2 - 1, fe = hn(k[z], he), Se = hn(k[W], he), te = fe, de = G - S[A] - Se, ue = G / 2 - S[A] / 2 + oe, ke = qs(te, ue, de), se = !w.arrow && gr(d) != null && ue !== ke && f.reference[A] / 2 - (ue < te ? fe : Se) - S[A] / 2 < 0, re = se ? ue < te ? ue - te : ue - de : 0;
    return {
      [b]: R[b] + re,
      data: {
        [b]: ke,
        centerOffset: ue - ke - re,
        ...se && {
          alignmentOffset: re
        }
      },
      reset: se
    };
  }
}), Cg = function(o) {
  return o === void 0 && (o = {}), {
    name: "flip",
    options: o,
    async fn(l) {
      var s, u;
      const {
        placement: d,
        middlewareData: f,
        rects: p,
        initialPlacement: m,
        platform: w,
        elements: y
      } = l, {
        mainAxis: P = !0,
        crossAxis: k = !0,
        fallbackPlacements: R,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: A = "none",
        flipAlignment: S = !0,
        ...O
      } = Bt(o, l);
      if ((s = f.arrow) != null && s.alignmentOffset)
        return {};
      const z = $t(d), W = gn(m), B = $t(m) === m, I = await (w.isRTL == null ? void 0 : w.isRTL(y.floating)), V = R || (B || !S ? [Ti(m)] : yg(m)), J = A !== "none";
      !R && J && V.push(...xg(m, S, A, I));
      const G = [m, ...V], oe = await lo(l, O), he = [];
      let fe = ((u = f.flip) == null ? void 0 : u.overflows) || [];
      if (P && he.push(oe[z]), k) {
        const ue = vg(d, p, I);
        he.push(oe[ue[0]], oe[ue[1]]);
      }
      if (fe = [...fe, {
        placement: d,
        overflows: he
      }], !he.every((ue) => ue <= 0)) {
        var Se, te;
        const ue = (((Se = f.flip) == null ? void 0 : Se.index) || 0) + 1, ke = G[ue];
        if (ke)
          return {
            data: {
              index: ue,
              overflows: fe
            },
            reset: {
              placement: ke
            }
          };
        let se = (te = fe.filter((re) => re.overflows[0] <= 0).sort((re, T) => re.overflows[1] - T.overflows[1])[0]) == null ? void 0 : te.placement;
        if (!se)
          switch (b) {
            case "bestFit": {
              var de;
              const re = (de = fe.filter((T) => {
                if (J) {
                  const H = gn(T.placement);
                  return H === W || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((H) => H > 0).reduce((H, $) => H + $, 0)]).sort((T, H) => T[1] - H[1])[0]) == null ? void 0 : de[0];
              re && (se = re);
              break;
            }
            case "initialPlacement":
              se = m;
              break;
          }
        if (d !== se)
          return {
            reset: {
              placement: se
            }
          };
      }
      return {};
    }
  };
};
function bd(o, l) {
  return {
    top: o.top - l.height,
    right: o.right - l.width,
    bottom: o.bottom - l.height,
    left: o.left - l.width
  };
}
function Ad(o) {
  return mg.some((l) => o[l] >= 0);
}
const Pg = function(o) {
  return o === void 0 && (o = {}), {
    name: "hide",
    options: o,
    async fn(l) {
      const {
        rects: s
      } = l, {
        strategy: u = "referenceHidden",
        ...d
      } = Bt(o, l);
      switch (u) {
        case "referenceHidden": {
          const f = await lo(l, {
            ...d,
            elementContext: "reference"
          }), p = bd(f, s.reference);
          return {
            data: {
              referenceHiddenOffsets: p,
              referenceHidden: Ad(p)
            }
          };
        }
        case "escaped": {
          const f = await lo(l, {
            ...d,
            altBoundary: !0
          }), p = bd(f, s.floating);
          return {
            data: {
              escapedOffsets: p,
              escaped: Ad(p)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ng(o, l) {
  const {
    placement: s,
    platform: u,
    elements: d
  } = o, f = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), p = $t(s), m = gr(s), w = gn(s) === "y", y = ["left", "top"].includes(p) ? -1 : 1, P = f && w ? -1 : 1, k = Bt(l, o);
  let {
    mainAxis: R,
    crossAxis: b,
    alignmentAxis: A
  } = typeof k == "number" ? {
    mainAxis: k,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: k.mainAxis || 0,
    crossAxis: k.crossAxis || 0,
    alignmentAxis: k.alignmentAxis
  };
  return m && typeof A == "number" && (b = m === "end" ? A * -1 : A), w ? {
    x: b * P,
    y: R * y
  } : {
    x: R * y,
    y: b * P
  };
}
const Rg = function(o) {
  return o === void 0 && (o = 0), {
    name: "offset",
    options: o,
    async fn(l) {
      var s, u;
      const {
        x: d,
        y: f,
        placement: p,
        middlewareData: m
      } = l, w = await Ng(l, o);
      return p === ((s = m.offset) == null ? void 0 : s.placement) && (u = m.arrow) != null && u.alignmentOffset ? {} : {
        x: d + w.x,
        y: f + w.y,
        data: {
          ...w,
          placement: p
        }
      };
    }
  };
}, _g = function(o) {
  return o === void 0 && (o = {}), {
    name: "shift",
    options: o,
    async fn(l) {
      const {
        x: s,
        y: u,
        placement: d
      } = l, {
        mainAxis: f = !0,
        crossAxis: p = !1,
        limiter: m = {
          fn: (O) => {
            let {
              x: z,
              y: W
            } = O;
            return {
              x: z,
              y: W
            };
          }
        },
        ...w
      } = Bt(o, l), y = {
        x: s,
        y: u
      }, P = await lo(l, w), k = gn($t(d)), R = ia(k);
      let b = y[R], A = y[k];
      if (f) {
        const O = R === "y" ? "top" : "left", z = R === "y" ? "bottom" : "right", W = b + P[O], B = b - P[z];
        b = qs(W, b, B);
      }
      if (p) {
        const O = k === "y" ? "top" : "left", z = k === "y" ? "bottom" : "right", W = A + P[O], B = A - P[z];
        A = qs(W, A, B);
      }
      const S = m.fn({
        ...l,
        [R]: b,
        [k]: A
      });
      return {
        ...S,
        data: {
          x: S.x - s,
          y: S.y - u,
          enabled: {
            [R]: f,
            [k]: p
          }
        }
      };
    }
  };
}, Og = function(o) {
  return o === void 0 && (o = {}), {
    options: o,
    fn(l) {
      const {
        x: s,
        y: u,
        placement: d,
        rects: f,
        middlewareData: p
      } = l, {
        offset: m = 0,
        mainAxis: w = !0,
        crossAxis: y = !0
      } = Bt(o, l), P = {
        x: s,
        y: u
      }, k = gn(d), R = ia(k);
      let b = P[R], A = P[k];
      const S = Bt(m, l), O = typeof S == "number" ? {
        mainAxis: S,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...S
      };
      if (w) {
        const B = R === "y" ? "height" : "width", I = f.reference[R] - f.floating[B] + O.mainAxis, V = f.reference[R] + f.reference[B] - O.mainAxis;
        b < I ? b = I : b > V && (b = V);
      }
      if (y) {
        var z, W;
        const B = R === "y" ? "width" : "height", I = ["top", "left"].includes($t(d)), V = f.reference[k] - f.floating[B] + (I && ((z = p.offset) == null ? void 0 : z[k]) || 0) + (I ? 0 : O.crossAxis), J = f.reference[k] + f.reference[B] + (I ? 0 : ((W = p.offset) == null ? void 0 : W[k]) || 0) - (I ? O.crossAxis : 0);
        A < V ? A = V : A > J && (A = J);
      }
      return {
        [R]: b,
        [k]: A
      };
    }
  };
}, bg = function(o) {
  return o === void 0 && (o = {}), {
    name: "size",
    options: o,
    async fn(l) {
      var s, u;
      const {
        placement: d,
        rects: f,
        platform: p,
        elements: m
      } = l, {
        apply: w = () => {
        },
        ...y
      } = Bt(o, l), P = await lo(l, y), k = $t(d), R = gr(d), b = gn(d) === "y", {
        width: A,
        height: S
      } = f.floating;
      let O, z;
      k === "top" || k === "bottom" ? (O = k, z = R === (await (p.isRTL == null ? void 0 : p.isRTL(m.floating)) ? "start" : "end") ? "left" : "right") : (z = k, O = R === "end" ? "top" : "bottom");
      const W = S - P.top - P.bottom, B = A - P.left - P.right, I = hn(S - P[O], W), V = hn(A - P[z], B), J = !l.middlewareData.shift;
      let G = I, oe = V;
      if ((s = l.middlewareData.shift) != null && s.enabled.x && (oe = B), (u = l.middlewareData.shift) != null && u.enabled.y && (G = W), J && !R) {
        const fe = it(P.left, 0), Se = it(P.right, 0), te = it(P.top, 0), de = it(P.bottom, 0);
        b ? oe = A - 2 * (fe !== 0 || Se !== 0 ? fe + Se : it(P.left, P.right)) : G = S - 2 * (te !== 0 || de !== 0 ? te + de : it(P.top, P.bottom));
      }
      await w({
        ...l,
        availableWidth: oe,
        availableHeight: G
      });
      const he = await p.getDimensions(m.floating);
      return A !== he.width || S !== he.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ji() {
  return typeof window < "u";
}
function vr(o) {
  return mf(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function lt(o) {
  var l;
  return (o == null || (l = o.ownerDocument) == null ? void 0 : l.defaultView) || window;
}
function At(o) {
  var l;
  return (l = (mf(o) ? o.ownerDocument : o.document) || window.document) == null ? void 0 : l.documentElement;
}
function mf(o) {
  return ji() ? o instanceof Node || o instanceof lt(o).Node : !1;
}
function xt(o) {
  return ji() ? o instanceof Element || o instanceof lt(o).Element : !1;
}
function Ot(o) {
  return ji() ? o instanceof HTMLElement || o instanceof lt(o).HTMLElement : !1;
}
function Td(o) {
  return !ji() || typeof ShadowRoot > "u" ? !1 : o instanceof ShadowRoot || o instanceof lt(o).ShadowRoot;
}
function uo(o) {
  const {
    overflow: l,
    overflowX: s,
    overflowY: u,
    display: d
  } = St(o);
  return /auto|scroll|overlay|hidden|clip/.test(l + u + s) && !["inline", "contents"].includes(d);
}
function Ag(o) {
  return ["table", "td", "th"].includes(vr(o));
}
function Fi(o) {
  return [":popover-open", ":modal"].some((l) => {
    try {
      return o.matches(l);
    } catch {
      return !1;
    }
  });
}
function aa(o) {
  const l = ua(), s = xt(o) ? St(o) : o;
  return s.transform !== "none" || s.perspective !== "none" || (s.containerType ? s.containerType !== "normal" : !1) || !l && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !l && (s.filter ? s.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((u) => (s.willChange || "").includes(u)) || ["paint", "layout", "strict", "content"].some((u) => (s.contain || "").includes(u));
}
function Tg(o) {
  let l = vn(o);
  for (; Ot(l) && !pr(l); ) {
    if (aa(l))
      return l;
    if (Fi(l))
      return null;
    l = vn(l);
  }
  return null;
}
function ua() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function pr(o) {
  return ["html", "body", "#document"].includes(vr(o));
}
function St(o) {
  return lt(o).getComputedStyle(o);
}
function Ii(o) {
  return xt(o) ? {
    scrollLeft: o.scrollLeft,
    scrollTop: o.scrollTop
  } : {
    scrollLeft: o.scrollX,
    scrollTop: o.scrollY
  };
}
function vn(o) {
  if (vr(o) === "html")
    return o;
  const l = (
    // Step into the shadow DOM of the parent of a slotted node.
    o.assignedSlot || // DOM Element detected.
    o.parentNode || // ShadowRoot detected.
    Td(o) && o.host || // Fallback.
    At(o)
  );
  return Td(l) ? l.host : l;
}
function hf(o) {
  const l = vn(o);
  return pr(l) ? o.ownerDocument ? o.ownerDocument.body : o.body : Ot(l) && uo(l) ? l : hf(l);
}
function so(o, l, s) {
  var u;
  l === void 0 && (l = []), s === void 0 && (s = !0);
  const d = hf(o), f = d === ((u = o.ownerDocument) == null ? void 0 : u.body), p = lt(d);
  if (f) {
    const m = ta(p);
    return l.concat(p, p.visualViewport || [], uo(d) ? d : [], m && s ? so(m) : []);
  }
  return l.concat(d, so(d, [], s));
}
function ta(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function gf(o) {
  const l = St(o);
  let s = parseFloat(l.width) || 0, u = parseFloat(l.height) || 0;
  const d = Ot(o), f = d ? o.offsetWidth : s, p = d ? o.offsetHeight : u, m = Ai(s) !== f || Ai(u) !== p;
  return m && (s = f, u = p), {
    width: s,
    height: u,
    $: m
  };
}
function ca(o) {
  return xt(o) ? o : o.contextElement;
}
function dr(o) {
  const l = ca(o);
  if (!Ot(l))
    return _t(1);
  const s = l.getBoundingClientRect(), {
    width: u,
    height: d,
    $: f
  } = gf(l);
  let p = (f ? Ai(s.width) : s.width) / u, m = (f ? Ai(s.height) : s.height) / d;
  return (!p || !Number.isFinite(p)) && (p = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: p,
    y: m
  };
}
const zg = /* @__PURE__ */ _t(0);
function vf(o) {
  const l = lt(o);
  return !ua() || !l.visualViewport ? zg : {
    x: l.visualViewport.offsetLeft,
    y: l.visualViewport.offsetTop
  };
}
function Lg(o, l, s) {
  return l === void 0 && (l = !1), !s || l && s !== lt(o) ? !1 : l;
}
function Ln(o, l, s, u) {
  l === void 0 && (l = !1), s === void 0 && (s = !1);
  const d = o.getBoundingClientRect(), f = ca(o);
  let p = _t(1);
  l && (u ? xt(u) && (p = dr(u)) : p = dr(o));
  const m = Lg(f, s, u) ? vf(f) : _t(0);
  let w = (d.left + m.x) / p.x, y = (d.top + m.y) / p.y, P = d.width / p.x, k = d.height / p.y;
  if (f) {
    const R = lt(f), b = u && xt(u) ? lt(u) : u;
    let A = R, S = ta(A);
    for (; S && u && b !== A; ) {
      const O = dr(S), z = S.getBoundingClientRect(), W = St(S), B = z.left + (S.clientLeft + parseFloat(W.paddingLeft)) * O.x, I = z.top + (S.clientTop + parseFloat(W.paddingTop)) * O.y;
      w *= O.x, y *= O.y, P *= O.x, k *= O.y, w += B, y += I, A = lt(S), S = ta(A);
    }
  }
  return zi({
    width: P,
    height: k,
    x: w,
    y
  });
}
function da(o, l) {
  const s = Ii(o).scrollLeft;
  return l ? l.left + s : Ln(At(o)).left + s;
}
function yf(o, l, s) {
  s === void 0 && (s = !1);
  const u = o.getBoundingClientRect(), d = u.left + l.scrollLeft - (s ? 0 : (
    // RTL <body> scrollbar.
    da(o, u)
  )), f = u.top + l.scrollTop;
  return {
    x: d,
    y: f
  };
}
function Mg(o) {
  let {
    elements: l,
    rect: s,
    offsetParent: u,
    strategy: d
  } = o;
  const f = d === "fixed", p = At(u), m = l ? Fi(l.floating) : !1;
  if (u === p || m && f)
    return s;
  let w = {
    scrollLeft: 0,
    scrollTop: 0
  }, y = _t(1);
  const P = _t(0), k = Ot(u);
  if ((k || !k && !f) && ((vr(u) !== "body" || uo(p)) && (w = Ii(u)), Ot(u))) {
    const b = Ln(u);
    y = dr(u), P.x = b.x + u.clientLeft, P.y = b.y + u.clientTop;
  }
  const R = p && !k && !f ? yf(p, w, !0) : _t(0);
  return {
    width: s.width * y.x,
    height: s.height * y.y,
    x: s.x * y.x - w.scrollLeft * y.x + P.x + R.x,
    y: s.y * y.y - w.scrollTop * y.y + P.y + R.y
  };
}
function Dg(o) {
  return Array.from(o.getClientRects());
}
function jg(o) {
  const l = At(o), s = Ii(o), u = o.ownerDocument.body, d = it(l.scrollWidth, l.clientWidth, u.scrollWidth, u.clientWidth), f = it(l.scrollHeight, l.clientHeight, u.scrollHeight, u.clientHeight);
  let p = -s.scrollLeft + da(o);
  const m = -s.scrollTop;
  return St(u).direction === "rtl" && (p += it(l.clientWidth, u.clientWidth) - d), {
    width: d,
    height: f,
    x: p,
    y: m
  };
}
function Fg(o, l) {
  const s = lt(o), u = At(o), d = s.visualViewport;
  let f = u.clientWidth, p = u.clientHeight, m = 0, w = 0;
  if (d) {
    f = d.width, p = d.height;
    const y = ua();
    (!y || y && l === "fixed") && (m = d.offsetLeft, w = d.offsetTop);
  }
  return {
    width: f,
    height: p,
    x: m,
    y: w
  };
}
function Ig(o, l) {
  const s = Ln(o, !0, l === "fixed"), u = s.top + o.clientTop, d = s.left + o.clientLeft, f = Ot(o) ? dr(o) : _t(1), p = o.clientWidth * f.x, m = o.clientHeight * f.y, w = d * f.x, y = u * f.y;
  return {
    width: p,
    height: m,
    x: w,
    y
  };
}
function zd(o, l, s) {
  let u;
  if (l === "viewport")
    u = Fg(o, s);
  else if (l === "document")
    u = jg(At(o));
  else if (xt(l))
    u = Ig(l, s);
  else {
    const d = vf(o);
    u = {
      x: l.x - d.x,
      y: l.y - d.y,
      width: l.width,
      height: l.height
    };
  }
  return zi(u);
}
function wf(o, l) {
  const s = vn(o);
  return s === l || !xt(s) || pr(s) ? !1 : St(s).position === "fixed" || wf(s, l);
}
function Wg(o, l) {
  const s = l.get(o);
  if (s)
    return s;
  let u = so(o, [], !1).filter((m) => xt(m) && vr(m) !== "body"), d = null;
  const f = St(o).position === "fixed";
  let p = f ? vn(o) : o;
  for (; xt(p) && !pr(p); ) {
    const m = St(p), w = aa(p);
    !w && m.position === "fixed" && (d = null), (f ? !w && !d : !w && m.position === "static" && !!d && ["absolute", "fixed"].includes(d.position) || uo(p) && !w && wf(o, p)) ? u = u.filter((P) => P !== p) : d = m, p = vn(p);
  }
  return l.set(o, u), u;
}
function Ug(o) {
  let {
    element: l,
    boundary: s,
    rootBoundary: u,
    strategy: d
  } = o;
  const p = [...s === "clippingAncestors" ? Fi(l) ? [] : Wg(l, this._c) : [].concat(s), u], m = p[0], w = p.reduce((y, P) => {
    const k = zd(l, P, d);
    return y.top = it(k.top, y.top), y.right = hn(k.right, y.right), y.bottom = hn(k.bottom, y.bottom), y.left = it(k.left, y.left), y;
  }, zd(l, m, d));
  return {
    width: w.right - w.left,
    height: w.bottom - w.top,
    x: w.left,
    y: w.top
  };
}
function Bg(o) {
  const {
    width: l,
    height: s
  } = gf(o);
  return {
    width: l,
    height: s
  };
}
function $g(o, l, s) {
  const u = Ot(l), d = At(l), f = s === "fixed", p = Ln(o, !0, f, l);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const w = _t(0);
  if (u || !u && !f)
    if ((vr(l) !== "body" || uo(d)) && (m = Ii(l)), u) {
      const R = Ln(l, !0, f, l);
      w.x = R.x + l.clientLeft, w.y = R.y + l.clientTop;
    } else
      d && (w.x = da(d));
  const y = d && !u && !f ? yf(d, m) : _t(0), P = p.left + m.scrollLeft - w.x - y.x, k = p.top + m.scrollTop - w.y - y.y;
  return {
    x: P,
    y: k,
    width: p.width,
    height: p.height
  };
}
function Us(o) {
  return St(o).position === "static";
}
function Ld(o, l) {
  if (!Ot(o) || St(o).position === "fixed")
    return null;
  if (l)
    return l(o);
  let s = o.offsetParent;
  return At(o) === s && (s = s.ownerDocument.body), s;
}
function xf(o, l) {
  const s = lt(o);
  if (Fi(o))
    return s;
  if (!Ot(o)) {
    let d = vn(o);
    for (; d && !pr(d); ) {
      if (xt(d) && !Us(d))
        return d;
      d = vn(d);
    }
    return s;
  }
  let u = Ld(o, l);
  for (; u && Ag(u) && Us(u); )
    u = Ld(u, l);
  return u && pr(u) && Us(u) && !aa(u) ? s : u || Tg(o) || s;
}
const Vg = async function(o) {
  const l = this.getOffsetParent || xf, s = this.getDimensions, u = await s(o.floating);
  return {
    reference: $g(o.reference, await l(o.floating), o.strategy),
    floating: {
      x: 0,
      y: 0,
      width: u.width,
      height: u.height
    }
  };
};
function Hg(o) {
  return St(o).direction === "rtl";
}
const Qg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mg,
  getDocumentElement: At,
  getClippingRect: Ug,
  getOffsetParent: xf,
  getElementRects: Vg,
  getClientRects: Dg,
  getDimensions: Bg,
  getScale: dr,
  isElement: xt,
  isRTL: Hg
};
function Kg(o, l) {
  let s = null, u;
  const d = At(o);
  function f() {
    var m;
    clearTimeout(u), (m = s) == null || m.disconnect(), s = null;
  }
  function p(m, w) {
    m === void 0 && (m = !1), w === void 0 && (w = 1), f();
    const {
      left: y,
      top: P,
      width: k,
      height: R
    } = o.getBoundingClientRect();
    if (m || l(), !k || !R)
      return;
    const b = Si(P), A = Si(d.clientWidth - (y + k)), S = Si(d.clientHeight - (P + R)), O = Si(y), W = {
      rootMargin: -b + "px " + -A + "px " + -S + "px " + -O + "px",
      threshold: it(0, hn(1, w)) || 1
    };
    let B = !0;
    function I(V) {
      const J = V[0].intersectionRatio;
      if (J !== w) {
        if (!B)
          return p();
        J ? p(!1, J) : u = setTimeout(() => {
          p(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      s = new IntersectionObserver(I, {
        ...W,
        // Handle <iframe>s
        root: d.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(I, W);
    }
    s.observe(o);
  }
  return p(!0), f;
}
function Yg(o, l, s, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: d = !0,
    ancestorResize: f = !0,
    elementResize: p = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: w = !1
  } = u, y = ca(o), P = d || f ? [...y ? so(y) : [], ...so(l)] : [];
  P.forEach((z) => {
    d && z.addEventListener("scroll", s, {
      passive: !0
    }), f && z.addEventListener("resize", s);
  });
  const k = y && m ? Kg(y, s) : null;
  let R = -1, b = null;
  p && (b = new ResizeObserver((z) => {
    let [W] = z;
    W && W.target === y && b && (b.unobserve(l), cancelAnimationFrame(R), R = requestAnimationFrame(() => {
      var B;
      (B = b) == null || B.observe(l);
    })), s();
  }), y && !w && b.observe(y), b.observe(l));
  let A, S = w ? Ln(o) : null;
  w && O();
  function O() {
    const z = Ln(o);
    S && (z.x !== S.x || z.y !== S.y || z.width !== S.width || z.height !== S.height) && s(), S = z, A = requestAnimationFrame(O);
  }
  return s(), () => {
    var z;
    P.forEach((W) => {
      d && W.removeEventListener("scroll", s), f && W.removeEventListener("resize", s);
    }), k?.(), (z = b) == null || z.disconnect(), b = null, w && cancelAnimationFrame(A);
  };
}
const Gg = Rg, Xg = _g, Zg = Cg, Jg = bg, qg = Pg, Md = Eg, ev = Og, tv = (o, l, s) => {
  const u = /* @__PURE__ */ new Map(), d = {
    platform: Qg,
    ...s
  }, f = {
    ...d.platform,
    _c: u
  };
  return kg(o, l, {
    ...d,
    platform: f
  });
};
var _i = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function Li(o, l) {
  if (o === l)
    return !0;
  if (typeof o != typeof l)
    return !1;
  if (typeof o == "function" && o.toString() === l.toString())
    return !0;
  let s, u, d;
  if (o && l && typeof o == "object") {
    if (Array.isArray(o)) {
      if (s = o.length, s !== l.length)
        return !1;
      for (u = s; u-- !== 0; )
        if (!Li(o[u], l[u]))
          return !1;
      return !0;
    }
    if (d = Object.keys(o), s = d.length, s !== Object.keys(l).length)
      return !1;
    for (u = s; u-- !== 0; )
      if (!{}.hasOwnProperty.call(l, d[u]))
        return !1;
    for (u = s; u-- !== 0; ) {
      const f = d[u];
      if (!(f === "_owner" && o.$$typeof) && !Li(o[f], l[f]))
        return !1;
    }
    return !0;
  }
  return o !== o && l !== l;
}
function Sf(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dd(o, l) {
  const s = Sf(o);
  return Math.round(l * s) / s;
}
function Bs(o) {
  const l = C.useRef(o);
  return _i(() => {
    l.current = o;
  }), l;
}
function nv(o) {
  o === void 0 && (o = {});
  const {
    placement: l = "bottom",
    strategy: s = "absolute",
    middleware: u = [],
    platform: d,
    elements: {
      reference: f,
      floating: p
    } = {},
    transform: m = !0,
    whileElementsMounted: w,
    open: y
  } = o, [P, k] = C.useState({
    x: 0,
    y: 0,
    strategy: s,
    placement: l,
    middlewareData: {},
    isPositioned: !1
  }), [R, b] = C.useState(u);
  Li(R, u) || b(u);
  const [A, S] = C.useState(null), [O, z] = C.useState(null), W = C.useCallback((T) => {
    T !== J.current && (J.current = T, S(T));
  }, []), B = C.useCallback((T) => {
    T !== G.current && (G.current = T, z(T));
  }, []), I = f || A, V = p || O, J = C.useRef(null), G = C.useRef(null), oe = C.useRef(P), he = w != null, fe = Bs(w), Se = Bs(d), te = Bs(y), de = C.useCallback(() => {
    if (!J.current || !G.current)
      return;
    const T = {
      placement: l,
      strategy: s,
      middleware: R
    };
    Se.current && (T.platform = Se.current), tv(J.current, G.current, T).then((H) => {
      const $ = {
        ...H,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: te.current !== !1
      };
      ue.current && !Li(oe.current, $) && (oe.current = $, Mi.flushSync(() => {
        k($);
      }));
    });
  }, [R, l, s, Se, te]);
  _i(() => {
    y === !1 && oe.current.isPositioned && (oe.current.isPositioned = !1, k((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [y]);
  const ue = C.useRef(!1);
  _i(() => (ue.current = !0, () => {
    ue.current = !1;
  }), []), _i(() => {
    if (I && (J.current = I), V && (G.current = V), I && V) {
      if (fe.current)
        return fe.current(I, V, de);
      de();
    }
  }, [I, V, de, fe, he]);
  const ke = C.useMemo(() => ({
    reference: J,
    floating: G,
    setReference: W,
    setFloating: B
  }), [W, B]), se = C.useMemo(() => ({
    reference: I,
    floating: V
  }), [I, V]), re = C.useMemo(() => {
    const T = {
      position: s,
      left: 0,
      top: 0
    };
    if (!se.floating)
      return T;
    const H = Dd(se.floating, P.x), $ = Dd(se.floating, P.y);
    return m ? {
      ...T,
      transform: "translate(" + H + "px, " + $ + "px)",
      ...Sf(se.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: s,
      left: H,
      top: $
    };
  }, [s, m, se.floating, P.x, P.y]);
  return C.useMemo(() => ({
    ...P,
    update: de,
    refs: ke,
    elements: se,
    floatingStyles: re
  }), [P, de, ke, se, re]);
}
const rv = (o) => {
  function l(s) {
    return {}.hasOwnProperty.call(s, "current");
  }
  return {
    name: "arrow",
    options: o,
    fn(s) {
      const {
        element: u,
        padding: d
      } = typeof o == "function" ? o(s) : o;
      return u && l(u) ? u.current != null ? Md({
        element: u.current,
        padding: d
      }).fn(s) : {} : u ? Md({
        element: u,
        padding: d
      }).fn(s) : {};
    }
  };
}, ov = (o, l) => ({
  ...Gg(o),
  options: [o, l]
}), iv = (o, l) => ({
  ...Xg(o),
  options: [o, l]
}), lv = (o, l) => ({
  ...ev(o),
  options: [o, l]
}), sv = (o, l) => ({
  ...Zg(o),
  options: [o, l]
}), av = (o, l) => ({
  ...Jg(o),
  options: [o, l]
}), uv = (o, l) => ({
  ...qg(o),
  options: [o, l]
}), cv = (o, l) => ({
  ...rv(o),
  options: [o, l]
});
var dv = "Arrow", kf = C.forwardRef((o, l) => {
  const { children: s, width: u = 10, height: d = 5, ...f } = o;
  return /* @__PURE__ */ U.jsx(
    bt.svg,
    {
      ...f,
      ref: l,
      width: u,
      height: d,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: o.asChild ? s : /* @__PURE__ */ U.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
kf.displayName = dv;
var fv = kf;
function pv(o) {
  const [l, s] = C.useState(void 0);
  return zn(() => {
    if (o) {
      s({ width: o.offsetWidth, height: o.offsetHeight });
      const u = new ResizeObserver((d) => {
        if (!Array.isArray(d) || !d.length)
          return;
        const f = d[0];
        let p, m;
        if ("borderBoxSize" in f) {
          const w = f.borderBoxSize, y = Array.isArray(w) ? w[0] : w;
          p = y.inlineSize, m = y.blockSize;
        } else
          p = o.offsetWidth, m = o.offsetHeight;
        s({ width: p, height: m });
      });
      return u.observe(o, { box: "border-box" }), () => u.unobserve(o);
    } else
      s(void 0);
  }, [o]), l;
}
var fa = "Popper", [Ef, Cf] = sf(fa), [mv, Pf] = Ef(fa), Nf = (o) => {
  const { __scopePopper: l, children: s } = o, [u, d] = C.useState(null);
  return /* @__PURE__ */ U.jsx(mv, { scope: l, anchor: u, onAnchorChange: d, children: s });
};
Nf.displayName = fa;
var Rf = "PopperAnchor", _f = C.forwardRef(
  (o, l) => {
    const { __scopePopper: s, virtualRef: u, ...d } = o, f = Pf(Rf, s), p = C.useRef(null), m = yn(l, p);
    return C.useEffect(() => {
      f.onAnchorChange(u?.current || p.current);
    }), u ? null : /* @__PURE__ */ U.jsx(bt.div, { ...d, ref: m });
  }
);
_f.displayName = Rf;
var pa = "PopperContent", [hv, gv] = Ef(pa), Of = C.forwardRef(
  (o, l) => {
    const {
      __scopePopper: s,
      side: u = "bottom",
      sideOffset: d = 0,
      align: f = "center",
      alignOffset: p = 0,
      arrowPadding: m = 0,
      avoidCollisions: w = !0,
      collisionBoundary: y = [],
      collisionPadding: P = 0,
      sticky: k = "partial",
      hideWhenDetached: R = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: A,
      ...S
    } = o, O = Pf(pa, s), [z, W] = C.useState(null), B = yn(l, (ve) => W(ve)), [I, V] = C.useState(null), J = pv(I), G = J?.width ?? 0, oe = J?.height ?? 0, he = u + (f !== "center" ? "-" + f : ""), fe = typeof P == "number" ? P : { top: 0, right: 0, bottom: 0, left: 0, ...P }, Se = Array.isArray(y) ? y : [y], te = Se.length > 0, de = {
      padding: fe,
      boundary: Se.filter(yv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: te
    }, { refs: ue, floatingStyles: ke, placement: se, isPositioned: re, middlewareData: T } = nv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: he,
      whileElementsMounted: (...ve) => Yg(...ve, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: O.anchor
      },
      middleware: [
        ov({ mainAxis: d + oe, alignmentAxis: p }),
        w && iv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: k === "partial" ? lv() : void 0,
          ...de
        }),
        w && sv({ ...de }),
        av({
          ...de,
          apply: ({ elements: ve, rects: ye, availableWidth: Ee, availableHeight: Qe }) => {
            const { width: Mn, height: fo } = ye.reference, Tt = ve.floating.style;
            Tt.setProperty("--radix-popper-available-width", `${Ee}px`), Tt.setProperty("--radix-popper-available-height", `${Qe}px`), Tt.setProperty("--radix-popper-anchor-width", `${Mn}px`), Tt.setProperty("--radix-popper-anchor-height", `${fo}px`);
          }
        }),
        I && cv({ element: I, padding: m }),
        wv({ arrowWidth: G, arrowHeight: oe }),
        R && uv({ strategy: "referenceHidden", ...de })
      ]
    }), [H, $] = Tf(se), x = mn(A);
    zn(() => {
      re && x?.();
    }, [re, x]);
    const L = T.arrow?.x, ie = T.arrow?.y, ae = T.arrow?.centerOffset !== 0, [pe, me] = C.useState();
    return zn(() => {
      z && me(window.getComputedStyle(z).zIndex);
    }, [z]), /* @__PURE__ */ U.jsx(
      "div",
      {
        ref: ue.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ke,
          transform: re ? ke.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: pe,
          "--radix-popper-transform-origin": [
            T.transformOrigin?.x,
            T.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...T.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: o.dir,
        children: /* @__PURE__ */ U.jsx(
          hv,
          {
            scope: s,
            placedSide: H,
            onArrowChange: V,
            arrowX: L,
            arrowY: ie,
            shouldHideArrow: ae,
            children: /* @__PURE__ */ U.jsx(
              bt.div,
              {
                "data-side": H,
                "data-align": $,
                ...S,
                ref: B,
                style: {
                  ...S.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: re ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Of.displayName = pa;
var bf = "PopperArrow", vv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Af = C.forwardRef(function(l, s) {
  const { __scopePopper: u, ...d } = l, f = gv(bf, u), p = vv[f.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ U.jsx(
      "span",
      {
        ref: f.onArrowChange,
        style: {
          position: "absolute",
          left: f.arrowX,
          top: f.arrowY,
          [p]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[f.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[f.placedSide],
          visibility: f.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ U.jsx(
          fv,
          {
            ...d,
            ref: s,
            style: {
              ...d.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Af.displayName = bf;
function yv(o) {
  return o !== null;
}
var wv = (o) => ({
  name: "transformOrigin",
  options: o,
  fn(l) {
    const { placement: s, rects: u, middlewareData: d } = l, p = d.arrow?.centerOffset !== 0, m = p ? 0 : o.arrowWidth, w = p ? 0 : o.arrowHeight, [y, P] = Tf(s), k = { start: "0%", center: "50%", end: "100%" }[P], R = (d.arrow?.x ?? 0) + m / 2, b = (d.arrow?.y ?? 0) + w / 2;
    let A = "", S = "";
    return y === "bottom" ? (A = p ? k : `${R}px`, S = `${-w}px`) : y === "top" ? (A = p ? k : `${R}px`, S = `${u.floating.height + w}px`) : y === "right" ? (A = `${-w}px`, S = p ? k : `${b}px`) : y === "left" && (A = `${u.floating.width + w}px`, S = p ? k : `${b}px`), { data: { x: A, y: S } };
  }
});
function Tf(o) {
  const [l, s = "center"] = o.split("-");
  return [l, s];
}
var xv = Nf, zf = _f, Sv = Of, kv = Af, Ev = "Portal", Lf = C.forwardRef((o, l) => {
  const { container: s, ...u } = o, [d, f] = C.useState(!1);
  zn(() => f(!0), []);
  const p = s || d && globalThis?.document?.body;
  return p ? oh.createPortal(/* @__PURE__ */ U.jsx(bt.div, { ...u, ref: l }), p) : null;
});
Lf.displayName = Ev;
function Cv(o, l) {
  return C.useReducer((s, u) => l[s][u] ?? s, o);
}
var ma = (o) => {
  const { present: l, children: s } = o, u = Pv(l), d = typeof s == "function" ? s({ present: u.isPresent }) : C.Children.only(s), f = yn(u.ref, Nv(d));
  return typeof s == "function" || u.isPresent ? C.cloneElement(d, { ref: f }) : null;
};
ma.displayName = "Presence";
function Pv(o) {
  const [l, s] = C.useState(), u = C.useRef({}), d = C.useRef(o), f = C.useRef("none"), p = o ? "mounted" : "unmounted", [m, w] = Cv(p, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return C.useEffect(() => {
    const y = ki(u.current);
    f.current = m === "mounted" ? y : "none";
  }, [m]), zn(() => {
    const y = u.current, P = d.current;
    if (P !== o) {
      const R = f.current, b = ki(y);
      o ? w("MOUNT") : b === "none" || y?.display === "none" ? w("UNMOUNT") : w(P && R !== b ? "ANIMATION_OUT" : "UNMOUNT"), d.current = o;
    }
  }, [o, w]), zn(() => {
    if (l) {
      let y;
      const P = l.ownerDocument.defaultView ?? window, k = (b) => {
        const S = ki(u.current).includes(b.animationName);
        if (b.target === l && S && (w("ANIMATION_END"), !d.current)) {
          const O = l.style.animationFillMode;
          l.style.animationFillMode = "forwards", y = P.setTimeout(() => {
            l.style.animationFillMode === "forwards" && (l.style.animationFillMode = O);
          });
        }
      }, R = (b) => {
        b.target === l && (f.current = ki(u.current));
      };
      return l.addEventListener("animationstart", R), l.addEventListener("animationcancel", k), l.addEventListener("animationend", k), () => {
        P.clearTimeout(y), l.removeEventListener("animationstart", R), l.removeEventListener("animationcancel", k), l.removeEventListener("animationend", k);
      };
    } else
      w("ANIMATION_END");
  }, [l, w]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: C.useCallback((y) => {
      y && (u.current = getComputedStyle(y)), s(y);
    }, [])
  };
}
function ki(o) {
  return o?.animationName || "none";
}
function Nv(o) {
  let l = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? o.ref : (l = Object.getOwnPropertyDescriptor(o, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? o.props.ref : o.props.ref || o.ref);
}
function Rv({
  prop: o,
  defaultProp: l,
  onChange: s = () => {
  }
}) {
  const [u, d] = _v({ defaultProp: l, onChange: s }), f = o !== void 0, p = f ? o : u, m = mn(s), w = C.useCallback(
    (y) => {
      if (f) {
        const k = typeof y == "function" ? y(o) : y;
        k !== o && m(k);
      } else
        d(y);
    },
    [f, o, d, m]
  );
  return [p, w];
}
function _v({
  defaultProp: o,
  onChange: l
}) {
  const s = C.useState(o), [u] = s, d = C.useRef(u), f = mn(l);
  return C.useEffect(() => {
    d.current !== u && (f(u), d.current = u);
  }, [u, d, f]), s;
}
var Ov = function(o) {
  if (typeof document > "u")
    return null;
  var l = Array.isArray(o) ? o[0] : o;
  return l.ownerDocument.body;
}, sr = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Ci = {}, $s = 0, Mf = function(o) {
  return o && (o.host || Mf(o.parentNode));
}, bv = function(o, l) {
  return l.map(function(s) {
    if (o.contains(s))
      return s;
    var u = Mf(s);
    return u && o.contains(u) ? u : (console.error("aria-hidden", s, "in not contained inside", o, ". Doing nothing"), null);
  }).filter(function(s) {
    return !!s;
  });
}, Av = function(o, l, s, u) {
  var d = bv(l, Array.isArray(o) ? o : [o]);
  Ci[s] || (Ci[s] = /* @__PURE__ */ new WeakMap());
  var f = Ci[s], p = [], m = /* @__PURE__ */ new Set(), w = new Set(d), y = function(k) {
    !k || m.has(k) || (m.add(k), y(k.parentNode));
  };
  d.forEach(y);
  var P = function(k) {
    !k || w.has(k) || Array.prototype.forEach.call(k.children, function(R) {
      if (m.has(R))
        P(R);
      else
        try {
          var b = R.getAttribute(u), A = b !== null && b !== "false", S = (sr.get(R) || 0) + 1, O = (f.get(R) || 0) + 1;
          sr.set(R, S), f.set(R, O), p.push(R), S === 1 && A && Ei.set(R, !0), O === 1 && R.setAttribute(s, "true"), A || R.setAttribute(u, "true");
        } catch (z) {
          console.error("aria-hidden: cannot operate on ", R, z);
        }
    });
  };
  return P(l), m.clear(), $s++, function() {
    p.forEach(function(k) {
      var R = sr.get(k) - 1, b = f.get(k) - 1;
      sr.set(k, R), f.set(k, b), R || (Ei.has(k) || k.removeAttribute(u), Ei.delete(k)), b || k.removeAttribute(s);
    }), $s--, $s || (sr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Ci = {});
  };
}, Tv = function(o, l, s) {
  s === void 0 && (s = "data-aria-hidden");
  var u = Array.from(Array.isArray(o) ? o : [o]), d = l || Ov(o);
  return d ? (u.push.apply(u, Array.from(d.querySelectorAll("[aria-live]"))), Av(u, d, s, "aria-hidden")) : function() {
    return null;
  };
}, Rt = function() {
  return Rt = Object.assign || function(l) {
    for (var s, u = 1, d = arguments.length; u < d; u++) {
      s = arguments[u];
      for (var f in s)
        Object.prototype.hasOwnProperty.call(s, f) && (l[f] = s[f]);
    }
    return l;
  }, Rt.apply(this, arguments);
};
function Df(o, l) {
  var s = {};
  for (var u in o)
    Object.prototype.hasOwnProperty.call(o, u) && l.indexOf(u) < 0 && (s[u] = o[u]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, u = Object.getOwnPropertySymbols(o); d < u.length; d++)
      l.indexOf(u[d]) < 0 && Object.prototype.propertyIsEnumerable.call(o, u[d]) && (s[u[d]] = o[u[d]]);
  return s;
}
function zv(o, l, s) {
  if (s || arguments.length === 2)
    for (var u = 0, d = l.length, f; u < d; u++)
      (f || !(u in l)) && (f || (f = Array.prototype.slice.call(l, 0, u)), f[u] = l[u]);
  return o.concat(f || Array.prototype.slice.call(l));
}
var Oi = "right-scroll-bar-position", bi = "width-before-scroll-bar", Lv = "with-scroll-bars-hidden", Mv = "--removed-body-scroll-bar-size";
function Vs(o, l) {
  return typeof o == "function" ? o(l) : o && (o.current = l), o;
}
function Dv(o, l) {
  var s = C.useState(function() {
    return {
      // value
      value: o,
      // last callback
      callback: l,
      // "memoized" public interface
      facade: {
        get current() {
          return s.value;
        },
        set current(u) {
          var d = s.value;
          d !== u && (s.value = u, s.callback(u, d));
        }
      }
    };
  })[0];
  return s.callback = l, s.facade;
}
var jv = typeof window < "u" ? C.useLayoutEffect : C.useEffect, jd = /* @__PURE__ */ new WeakMap();
function Fv(o, l) {
  var s = Dv(l || null, function(u) {
    return o.forEach(function(d) {
      return Vs(d, u);
    });
  });
  return jv(function() {
    var u = jd.get(s);
    if (u) {
      var d = new Set(u), f = new Set(o), p = s.current;
      d.forEach(function(m) {
        f.has(m) || Vs(m, null);
      }), f.forEach(function(m) {
        d.has(m) || Vs(m, p);
      });
    }
    jd.set(s, o);
  }, [o]), s;
}
function Iv(o) {
  return o;
}
function Wv(o, l) {
  l === void 0 && (l = Iv);
  var s = [], u = !1, d = {
    read: function() {
      if (u)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return s.length ? s[s.length - 1] : o;
    },
    useMedium: function(f) {
      var p = l(f, u);
      return s.push(p), function() {
        s = s.filter(function(m) {
          return m !== p;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (u = !0; s.length; ) {
        var p = s;
        s = [], p.forEach(f);
      }
      s = {
        push: function(m) {
          return f(m);
        },
        filter: function() {
          return s;
        }
      };
    },
    assignMedium: function(f) {
      u = !0;
      var p = [];
      if (s.length) {
        var m = s;
        s = [], m.forEach(f), p = s;
      }
      var w = function() {
        var P = p;
        p = [], P.forEach(f);
      }, y = function() {
        return Promise.resolve().then(w);
      };
      y(), s = {
        push: function(P) {
          p.push(P), y();
        },
        filter: function(P) {
          return p = p.filter(P), s;
        }
      };
    }
  };
  return d;
}
function Uv(o) {
  o === void 0 && (o = {});
  var l = Wv(null);
  return l.options = Rt({ async: !0, ssr: !1 }, o), l;
}
var jf = function(o) {
  var l = o.sideCar, s = Df(o, ["sideCar"]);
  if (!l)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var u = l.read();
  if (!u)
    throw new Error("Sidecar medium not found");
  return C.createElement(u, Rt({}, s));
};
jf.isSideCarExport = !0;
function Bv(o, l) {
  return o.useMedium(l), jf;
}
var Ff = Uv(), Hs = function() {
}, Wi = C.forwardRef(function(o, l) {
  var s = C.useRef(null), u = C.useState({
    onScrollCapture: Hs,
    onWheelCapture: Hs,
    onTouchMoveCapture: Hs
  }), d = u[0], f = u[1], p = o.forwardProps, m = o.children, w = o.className, y = o.removeScrollBar, P = o.enabled, k = o.shards, R = o.sideCar, b = o.noIsolation, A = o.inert, S = o.allowPinchZoom, O = o.as, z = O === void 0 ? "div" : O, W = o.gapMode, B = Df(o, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), I = R, V = Fv([s, l]), J = Rt(Rt({}, B), d);
  return C.createElement(
    C.Fragment,
    null,
    P && C.createElement(I, { sideCar: Ff, removeScrollBar: y, shards: k, noIsolation: b, inert: A, setCallbacks: f, allowPinchZoom: !!S, lockRef: s, gapMode: W }),
    p ? C.cloneElement(C.Children.only(m), Rt(Rt({}, J), { ref: V })) : C.createElement(z, Rt({}, J, { className: w, ref: V }), m)
  );
});
Wi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wi.classNames = {
  fullWidth: bi,
  zeroRight: Oi
};
var Fd, $v = function() {
  if (Fd)
    return Fd;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Vv() {
  if (!document)
    return null;
  var o = document.createElement("style");
  o.type = "text/css";
  var l = $v();
  return l && o.setAttribute("nonce", l), o;
}
function Hv(o, l) {
  o.styleSheet ? o.styleSheet.cssText = l : o.appendChild(document.createTextNode(l));
}
function Qv(o) {
  var l = document.head || document.getElementsByTagName("head")[0];
  l.appendChild(o);
}
var Kv = function() {
  var o = 0, l = null;
  return {
    add: function(s) {
      o == 0 && (l = Vv()) && (Hv(l, s), Qv(l)), o++;
    },
    remove: function() {
      o--, !o && l && (l.parentNode && l.parentNode.removeChild(l), l = null);
    }
  };
}, Yv = function() {
  var o = Kv();
  return function(l, s) {
    C.useEffect(function() {
      return o.add(l), function() {
        o.remove();
      };
    }, [l && s]);
  };
}, If = function() {
  var o = Yv(), l = function(s) {
    var u = s.styles, d = s.dynamic;
    return o(u, d), null;
  };
  return l;
}, Gv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Qs = function(o) {
  return parseInt(o || "", 10) || 0;
}, Xv = function(o) {
  var l = window.getComputedStyle(document.body), s = l[o === "padding" ? "paddingLeft" : "marginLeft"], u = l[o === "padding" ? "paddingTop" : "marginTop"], d = l[o === "padding" ? "paddingRight" : "marginRight"];
  return [Qs(s), Qs(u), Qs(d)];
}, Zv = function(o) {
  if (o === void 0 && (o = "margin"), typeof window > "u")
    return Gv;
  var l = Xv(o), s = document.documentElement.clientWidth, u = window.innerWidth;
  return {
    left: l[0],
    top: l[1],
    right: l[2],
    gap: Math.max(0, u - s + l[2] - l[0])
  };
}, Jv = If(), fr = "data-scroll-locked", qv = function(o, l, s, u) {
  var d = o.left, f = o.top, p = o.right, m = o.gap;
  return s === void 0 && (s = "margin"), `
  .`.concat(Lv, ` {
   overflow: hidden `).concat(u, `;
   padding-right: `).concat(m, "px ").concat(u, `;
  }
  body[`).concat(fr, `] {
    overflow: hidden `).concat(u, `;
    overscroll-behavior: contain;
    `).concat([
    l && "position: relative ".concat(u, ";"),
    s === "margin" && `
    padding-left: `.concat(d, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(p, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(u, `;
    `),
    s === "padding" && "padding-right: ".concat(m, "px ").concat(u, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Oi, ` {
    right: `).concat(m, "px ").concat(u, `;
  }
  
  .`).concat(bi, ` {
    margin-right: `).concat(m, "px ").concat(u, `;
  }
  
  .`).concat(Oi, " .").concat(Oi, ` {
    right: 0 `).concat(u, `;
  }
  
  .`).concat(bi, " .").concat(bi, ` {
    margin-right: 0 `).concat(u, `;
  }
  
  body[`).concat(fr, `] {
    `).concat(Mv, ": ").concat(m, `px;
  }
`);
}, Id = function() {
  var o = parseInt(document.body.getAttribute(fr) || "0", 10);
  return isFinite(o) ? o : 0;
}, ey = function() {
  C.useEffect(function() {
    return document.body.setAttribute(fr, (Id() + 1).toString()), function() {
      var o = Id() - 1;
      o <= 0 ? document.body.removeAttribute(fr) : document.body.setAttribute(fr, o.toString());
    };
  }, []);
}, ty = function(o) {
  var l = o.noRelative, s = o.noImportant, u = o.gapMode, d = u === void 0 ? "margin" : u;
  ey();
  var f = C.useMemo(function() {
    return Zv(d);
  }, [d]);
  return C.createElement(Jv, { styles: qv(f, !l, d, s ? "" : "!important") });
}, na = !1;
if (typeof window < "u")
  try {
    var Pi = Object.defineProperty({}, "passive", {
      get: function() {
        return na = !0, !0;
      }
    });
    window.addEventListener("test", Pi, Pi), window.removeEventListener("test", Pi, Pi);
  } catch {
    na = !1;
  }
var ar = na ? { passive: !1 } : !1, ny = function(o) {
  return o.tagName === "TEXTAREA";
}, Wf = function(o, l) {
  if (!(o instanceof Element))
    return !1;
  var s = window.getComputedStyle(o);
  return (
    // not-not-scrollable
    s[l] !== "hidden" && // contains scroll inside self
    !(s.overflowY === s.overflowX && !ny(o) && s[l] === "visible")
  );
}, ry = function(o) {
  return Wf(o, "overflowY");
}, oy = function(o) {
  return Wf(o, "overflowX");
}, Wd = function(o, l) {
  var s = l.ownerDocument, u = l;
  do {
    typeof ShadowRoot < "u" && u instanceof ShadowRoot && (u = u.host);
    var d = Uf(o, u);
    if (d) {
      var f = Bf(o, u), p = f[1], m = f[2];
      if (p > m)
        return !0;
    }
    u = u.parentNode;
  } while (u && u !== s.body);
  return !1;
}, iy = function(o) {
  var l = o.scrollTop, s = o.scrollHeight, u = o.clientHeight;
  return [
    l,
    s,
    u
  ];
}, ly = function(o) {
  var l = o.scrollLeft, s = o.scrollWidth, u = o.clientWidth;
  return [
    l,
    s,
    u
  ];
}, Uf = function(o, l) {
  return o === "v" ? ry(l) : oy(l);
}, Bf = function(o, l) {
  return o === "v" ? iy(l) : ly(l);
}, sy = function(o, l) {
  return o === "h" && l === "rtl" ? -1 : 1;
}, ay = function(o, l, s, u, d) {
  var f = sy(o, window.getComputedStyle(l).direction), p = f * u, m = s.target, w = l.contains(m), y = !1, P = p > 0, k = 0, R = 0;
  do {
    var b = Bf(o, m), A = b[0], S = b[1], O = b[2], z = S - O - f * A;
    (A || z) && Uf(o, m) && (k += z, R += A), m instanceof ShadowRoot ? m = m.host : m = m.parentNode;
  } while (
    // portaled content
    !w && m !== document.body || // self content
    w && (l.contains(m) || l === m)
  );
  return (P && (d && Math.abs(k) < 1 || !d && p > k) || !P && (d && Math.abs(R) < 1 || !d && -p > R)) && (y = !0), y;
}, Ni = function(o) {
  return "changedTouches" in o ? [o.changedTouches[0].clientX, o.changedTouches[0].clientY] : [0, 0];
}, Ud = function(o) {
  return [o.deltaX, o.deltaY];
}, Bd = function(o) {
  return o && "current" in o ? o.current : o;
}, uy = function(o, l) {
  return o[0] === l[0] && o[1] === l[1];
}, cy = function(o) {
  return `
  .block-interactivity-`.concat(o, ` {pointer-events: none;}
  .allow-interactivity-`).concat(o, ` {pointer-events: all;}
`);
}, dy = 0, ur = [];
function fy(o) {
  var l = C.useRef([]), s = C.useRef([0, 0]), u = C.useRef(), d = C.useState(dy++)[0], f = C.useState(If)[0], p = C.useRef(o);
  C.useEffect(function() {
    p.current = o;
  }, [o]), C.useEffect(function() {
    if (o.inert) {
      document.body.classList.add("block-interactivity-".concat(d));
      var S = zv([o.lockRef.current], (o.shards || []).map(Bd), !0).filter(Boolean);
      return S.forEach(function(O) {
        return O.classList.add("allow-interactivity-".concat(d));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(d)), S.forEach(function(O) {
          return O.classList.remove("allow-interactivity-".concat(d));
        });
      };
    }
  }, [o.inert, o.lockRef.current, o.shards]);
  var m = C.useCallback(function(S, O) {
    if ("touches" in S && S.touches.length === 2 || S.type === "wheel" && S.ctrlKey)
      return !p.current.allowPinchZoom;
    var z = Ni(S), W = s.current, B = "deltaX" in S ? S.deltaX : W[0] - z[0], I = "deltaY" in S ? S.deltaY : W[1] - z[1], V, J = S.target, G = Math.abs(B) > Math.abs(I) ? "h" : "v";
    if ("touches" in S && G === "h" && J.type === "range")
      return !1;
    var oe = Wd(G, J);
    if (!oe)
      return !0;
    if (oe ? V = G : (V = G === "v" ? "h" : "v", oe = Wd(G, J)), !oe)
      return !1;
    if (!u.current && "changedTouches" in S && (B || I) && (u.current = V), !V)
      return !0;
    var he = u.current || V;
    return ay(he, O, S, he === "h" ? B : I, !0);
  }, []), w = C.useCallback(function(S) {
    var O = S;
    if (!(!ur.length || ur[ur.length - 1] !== f)) {
      var z = "deltaY" in O ? Ud(O) : Ni(O), W = l.current.filter(function(V) {
        return V.name === O.type && (V.target === O.target || O.target === V.shadowParent) && uy(V.delta, z);
      })[0];
      if (W && W.should) {
        O.cancelable && O.preventDefault();
        return;
      }
      if (!W) {
        var B = (p.current.shards || []).map(Bd).filter(Boolean).filter(function(V) {
          return V.contains(O.target);
        }), I = B.length > 0 ? m(O, B[0]) : !p.current.noIsolation;
        I && O.cancelable && O.preventDefault();
      }
    }
  }, []), y = C.useCallback(function(S, O, z, W) {
    var B = { name: S, delta: O, target: z, should: W, shadowParent: py(z) };
    l.current.push(B), setTimeout(function() {
      l.current = l.current.filter(function(I) {
        return I !== B;
      });
    }, 1);
  }, []), P = C.useCallback(function(S) {
    s.current = Ni(S), u.current = void 0;
  }, []), k = C.useCallback(function(S) {
    y(S.type, Ud(S), S.target, m(S, o.lockRef.current));
  }, []), R = C.useCallback(function(S) {
    y(S.type, Ni(S), S.target, m(S, o.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ur.push(f), o.setCallbacks({
      onScrollCapture: k,
      onWheelCapture: k,
      onTouchMoveCapture: R
    }), document.addEventListener("wheel", w, ar), document.addEventListener("touchmove", w, ar), document.addEventListener("touchstart", P, ar), function() {
      ur = ur.filter(function(S) {
        return S !== f;
      }), document.removeEventListener("wheel", w, ar), document.removeEventListener("touchmove", w, ar), document.removeEventListener("touchstart", P, ar);
    };
  }, []);
  var b = o.removeScrollBar, A = o.inert;
  return C.createElement(
    C.Fragment,
    null,
    A ? C.createElement(f, { styles: cy(d) }) : null,
    b ? C.createElement(ty, { gapMode: o.gapMode }) : null
  );
}
function py(o) {
  for (var l = null; o !== null; )
    o instanceof ShadowRoot && (l = o.host, o = o.host), o = o.parentNode;
  return l;
}
const my = Bv(Ff, fy);
var $f = C.forwardRef(function(o, l) {
  return C.createElement(Wi, Rt({}, o, { ref: l, sideCar: my }));
});
$f.classNames = Wi.classNames;
const hy = $f;
var ha = "Popover", [Vf, My] = sf(ha, [
  Cf
]), co = Cf(), [gy, wn] = Vf(ha), Hf = (o) => {
  const {
    __scopePopover: l,
    children: s,
    open: u,
    defaultOpen: d,
    onOpenChange: f,
    modal: p = !1
  } = o, m = co(l), w = C.useRef(null), [y, P] = C.useState(!1), [k = !1, R] = Rv({
    prop: u,
    defaultProp: d,
    onChange: f
  });
  return /* @__PURE__ */ U.jsx(xv, { ...m, children: /* @__PURE__ */ U.jsx(
    gy,
    {
      scope: l,
      contentId: pg(),
      triggerRef: w,
      open: k,
      onOpenChange: R,
      onOpenToggle: C.useCallback(() => R((b) => !b), [R]),
      hasCustomAnchor: y,
      onCustomAnchorAdd: C.useCallback(() => P(!0), []),
      onCustomAnchorRemove: C.useCallback(() => P(!1), []),
      modal: p,
      children: s
    }
  ) });
};
Hf.displayName = ha;
var Qf = "PopoverAnchor", vy = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = wn(Qf, s), f = co(s), { onCustomAnchorAdd: p, onCustomAnchorRemove: m } = d;
    return C.useEffect(() => (p(), () => m()), [p, m]), /* @__PURE__ */ U.jsx(zf, { ...f, ...u, ref: l });
  }
);
vy.displayName = Qf;
var Kf = "PopoverTrigger", Yf = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = wn(Kf, s), f = co(s), p = yn(l, d.triggerRef), m = /* @__PURE__ */ U.jsx(
      bt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": d.open,
        "aria-controls": d.contentId,
        "data-state": qf(d.open),
        ...u,
        ref: p,
        onClick: pn(o.onClick, d.onOpenToggle)
      }
    );
    return d.hasCustomAnchor ? m : /* @__PURE__ */ U.jsx(zf, { asChild: !0, ...f, children: m });
  }
);
Yf.displayName = Kf;
var ga = "PopoverPortal", [yy, wy] = Vf(ga, {
  forceMount: void 0
}), Gf = (o) => {
  const { __scopePopover: l, forceMount: s, children: u, container: d } = o, f = wn(ga, l);
  return /* @__PURE__ */ U.jsx(yy, { scope: l, forceMount: s, children: /* @__PURE__ */ U.jsx(ma, { present: s || f.open, children: /* @__PURE__ */ U.jsx(Lf, { asChild: !0, container: d, children: u }) }) });
};
Gf.displayName = ga;
var mr = "PopoverContent", Xf = C.forwardRef(
  (o, l) => {
    const s = wy(mr, o.__scopePopover), { forceMount: u = s.forceMount, ...d } = o, f = wn(mr, o.__scopePopover);
    return /* @__PURE__ */ U.jsx(ma, { present: u || f.open, children: f.modal ? /* @__PURE__ */ U.jsx(xy, { ...d, ref: l }) : /* @__PURE__ */ U.jsx(Sy, { ...d, ref: l }) });
  }
);
Xf.displayName = mr;
var xy = C.forwardRef(
  (o, l) => {
    const s = wn(mr, o.__scopePopover), u = C.useRef(null), d = yn(l, u), f = C.useRef(!1);
    return C.useEffect(() => {
      const p = u.current;
      if (p)
        return Tv(p);
    }, []), /* @__PURE__ */ U.jsx(hy, { as: Di, allowPinchZoom: !0, children: /* @__PURE__ */ U.jsx(
      Zf,
      {
        ...o,
        ref: d,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: pn(o.onCloseAutoFocus, (p) => {
          p.preventDefault(), f.current || s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: pn(
          o.onPointerDownOutside,
          (p) => {
            const m = p.detail.originalEvent, w = m.button === 0 && m.ctrlKey === !0, y = m.button === 2 || w;
            f.current = y;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: pn(
          o.onFocusOutside,
          (p) => p.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Sy = C.forwardRef(
  (o, l) => {
    const s = wn(mr, o.__scopePopover), u = C.useRef(!1), d = C.useRef(!1);
    return /* @__PURE__ */ U.jsx(
      Zf,
      {
        ...o,
        ref: l,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          o.onCloseAutoFocus?.(f), f.defaultPrevented || (u.current || s.triggerRef.current?.focus(), f.preventDefault()), u.current = !1, d.current = !1;
        },
        onInteractOutside: (f) => {
          o.onInteractOutside?.(f), f.defaultPrevented || (u.current = !0, f.detail.originalEvent.type === "pointerdown" && (d.current = !0));
          const p = f.target;
          s.triggerRef.current?.contains(p) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && d.current && f.preventDefault();
        }
      }
    );
  }
), Zf = C.forwardRef(
  (o, l) => {
    const {
      __scopePopover: s,
      trapFocus: u,
      onOpenAutoFocus: d,
      onCloseAutoFocus: f,
      disableOutsidePointerEvents: p,
      onEscapeKeyDown: m,
      onPointerDownOutside: w,
      onFocusOutside: y,
      onInteractOutside: P,
      ...k
    } = o, R = wn(mr, s), b = co(s);
    return rg(), /* @__PURE__ */ U.jsx(
      df,
      {
        asChild: !0,
        loop: !0,
        trapped: u,
        onMountAutoFocus: d,
        onUnmountAutoFocus: f,
        children: /* @__PURE__ */ U.jsx(
          uf,
          {
            asChild: !0,
            disableOutsidePointerEvents: p,
            onInteractOutside: P,
            onEscapeKeyDown: m,
            onPointerDownOutside: w,
            onFocusOutside: y,
            onDismiss: () => R.onOpenChange(!1),
            children: /* @__PURE__ */ U.jsx(
              Sv,
              {
                "data-state": qf(R.open),
                role: "dialog",
                id: R.contentId,
                ...b,
                ...k,
                ref: l,
                style: {
                  ...k.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Jf = "PopoverClose", ky = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = wn(Jf, s);
    return /* @__PURE__ */ U.jsx(
      bt.button,
      {
        type: "button",
        ...u,
        ref: l,
        onClick: pn(o.onClick, () => d.onOpenChange(!1))
      }
    );
  }
);
ky.displayName = Jf;
var Ey = "PopoverArrow", Cy = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = co(s);
    return /* @__PURE__ */ U.jsx(kv, { ...d, ...u, ref: l });
  }
);
Cy.displayName = Ey;
function qf(o) {
  return o ? "open" : "closed";
}
var Py = Hf, Ny = Yf, Ry = Gf, ep = Xf;
const _y = Py, Oy = Ny, tp = C.forwardRef(({ className: o, align: l = "center", sideOffset: s = 4, ...u }, d) => /* @__PURE__ */ U.jsx(Ry, { children: /* @__PURE__ */ U.jsx(
  ep,
  {
    ref: d,
    align: l,
    sideOffset: s,
    className: ao(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      o
    ),
    ...u
  }
) }));
tp.displayName = ep.displayName;
const $d = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.widget{--background: 0 0% 100%;--foreground: 222.2 84% 4.9%;--card: 0 0% 100%;--card-foreground: 222.2 84% 4.9%;--popover: 0 0% 100%;--popover-foreground: 222.2 84% 4.9%;--primary: 222.2 47.4% 11.2%;--primary-foreground: 210 40% 98%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--accent: 210 40% 96.1%;--accent-foreground: 222.2 47.4% 11.2%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--ring: 222.2 84% 4.9%;--radius: .5rem}.dark .widget{--background: 222.2 84% 4.9%;--foreground: 210 40% 98%;--card: 222.2 84% 4.9%;--card-foreground: 210 40% 98%;--popover: 222.2 84% 4.9%;--popover-foreground: 210 40% 98%;--primary: 210 40% 98%;--primary-foreground: 222.2 47.4% 11.2%;--secondary: 217.2 32.6% 17.5%;--secondary-foreground: 210 40% 98%;--muted: 217.2 32.6% 17.5%;--muted-foreground: 215 20.2% 65.1%;--accent: 217.2 32.6% 17.5%;--accent-foreground: 210 40% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 210 40% 98%;--border: 217.2 32.6% 17.5%;--input: 217.2 32.6% 17.5%;--ring: 212.7 26.8% 83.9%}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.z-50{z-index:50}.mr-2{margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-5{height:1.25rem}.h-9{height:2.25rem}.min-h-\\[100px\\]{min-height:100px}.min-h-\\[80px\\]{min-height:80px}.w-10{width:2.5rem}.w-5{width:1.25rem}.w-72{width:18rem}.w-full{width:100%}.max-w-md{max-width:28rem}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.border{border-width:1px}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-card{background-color:hsl(var(--card))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.fill-muted{fill:hsl(var(--muted))}.fill-primary{fill:hsl(var(--primary))}.stroke-muted-foreground{stroke:hsl(var(--muted-foreground))}.p-4{padding:1rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.leading-none{line-height:1}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.file\\:text-foreground::file-selector-button{color:hsl(var(--foreground))}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}@media (min-width: 768px){.md\\:text-sm{font-size:.875rem;line-height:1.25rem}}.\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\&_svg\\]\\:size-4 svg{width:1rem;height:1rem}.\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}
`, by = () => {
  const [o, l] = C.useState({
    name: "",
    email: "",
    feedback: "",
    rating: 3
  }), [s, u] = C.useState(!1), d = (p, m) => {
    const w = { ...o };
    p === "rating" ? w[p] = +m + 1 : w[p] = m, l(w);
  }, f = (p) => {
    p && p?.preventDefault();
    const m = { ...o }, w = {
      name: m?.name || "",
      email: m?.email || "",
      feedback: m?.feedback || "",
      rating: m?.rating || ""
    };
    console.log({ payload: w }), u(!0);
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx("style", { children: $d }),
    /* @__PURE__ */ U.jsx("div", { className: "widget fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ U.jsxs(_y, { children: [
      /* @__PURE__ */ U.jsx(Oy, { asChild: !0, children: /* @__PURE__ */ U.jsxs(Xs, { className: "rounded-full shadow-lg hover:scale-105", children: [
        /* @__PURE__ */ U.jsx(Ty, { className: "mr-2 h-5 w-5" }),
        "Feedback"
      ] }) }),
      /* @__PURE__ */ U.jsxs(tp, { className: "widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md", children: [
        /* @__PURE__ */ U.jsx("style", { children: $d }),
        s ? /* @__PURE__ */ U.jsxs("div", { children: [
          /* @__PURE__ */ U.jsx("h3", { className: "text-lg font-bold", children: "Thank you for your feedback!" }),
          /* @__PURE__ */ U.jsx("p", { className: "mt-4", children: "We appreciate your feedback. It helps us improve our product and provide better service to our customers." })
        ] }) : /* @__PURE__ */ U.jsxs("div", { children: [
          /* @__PURE__ */ U.jsx("h3", { className: "text-lg font-bold", children: "Send us your feedback" }),
          /* @__PURE__ */ U.jsxs("form", { className: "space-y-2", onSubmit: f, children: [
            /* @__PURE__ */ U.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ U.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ U.jsx(Ri, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ U.jsx(
                  Zs,
                  {
                    id: "name",
                    placeholder: "Enter your name",
                    value: o?.name,
                    onChange: (p) => d("name", p.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ U.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ U.jsx(Ri, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ U.jsx(
                  Zs,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email",
                    value: o?.email,
                    onChange: (p) => d("email", p.target.value)
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ U.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ U.jsx(Ri, { htmlFor: "feedback", children: "Feedback" }),
              /* @__PURE__ */ U.jsx(
                lf,
                {
                  id: "feedback",
                  placeholder: "Tell us what you think",
                  className: "min-h-[100px]",
                  value: o?.feedback,
                  onChange: (p) => d("feedback", p.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ U.jsxs("div", { className: "flex flex-col items-center justify-between", children: [
              /* @__PURE__ */ U.jsx("div", { className: "flex items-start gap-2", children: [...Array(5)].map((p, m) => /* @__PURE__ */ U.jsx(
                Ay,
                {
                  className: `h-5 w-5 cursor-pointer ${o?.rating > m ? "fill-primary" : "fill-muted stroke-muted-foreground"}`,
                  onClick: () => d("rating", m)
                },
                m
              )) }),
              /* @__PURE__ */ U.jsx(Xs, { className: "mt-2", type: "submit", children: "Submit" })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function Ay(o) {
  return /* @__PURE__ */ U.jsx(
    "svg",
    {
      ...o,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ U.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    }
  );
}
function Ty(o) {
  return /* @__PURE__ */ U.jsx(
    "svg",
    {
      ...o,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "lucide lucide-message-circle",
      children: /* @__PURE__ */ U.jsx("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
    }
  );
}
const zy = (o) => o.replace(/-([a-z])/g, (l, s) => s?.toUpperCase());
class Ly extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const l = this.getPropsFromAttributes();
    Ks.createRoot(this.shadowRoot).render(/* @__PURE__ */ U.jsx(by, { ...l }));
  }
  getPropsFromAttributes = () => {
    const l = {};
    for (const { name: s, value: u } of this.attributes)
      l[zy(s)] = u;
    return l;
  };
}
customElements.define("feedback-widget", Ly);
