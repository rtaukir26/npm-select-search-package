import Ue, { useState as J, useRef as Ne, useEffect as Ye } from "react";
var q = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Ar() {
  if (Be) return V;
  Be = 1;
  var _ = Ue, y = Symbol.for("react.element"), x = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, C = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(O, A, b) {
    var g, h = {}, j = null, D = null;
    b !== void 0 && (j = "" + b), A.key !== void 0 && (j = "" + A.key), A.ref !== void 0 && (D = A.ref);
    for (g in A) E.call(A, g) && !N.hasOwnProperty(g) && (h[g] = A[g]);
    if (O && O.defaultProps) for (g in A = O.defaultProps, A) h[g] === void 0 && (h[g] = A[g]);
    return { $$typeof: y, type: O, key: j, ref: D, props: h, _owner: C.current };
  }
  return V.Fragment = x, V.jsx = k, V.jsxs = k, V;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function hr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = Ue, y = Symbol.for("react.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), O = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), Y = Symbol.iterator, M = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[M];
      return typeof r == "function" ? r : null;
    }
    var w = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        W("error", e, n);
      }
    }
    function W(e, r, n) {
      {
        var t = w.ReactDebugCurrentFrame, u = t.getStackAddendum();
        u !== "" && (r += "%s", n = n.concat([u]));
        var f = n.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Z = !1, ee = !1, re = !1, ne = !1, ae = !1, X;
    X = Symbol.for("react.module.reference");
    function te(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === N || ae || e === C || e === b || e === g || ne || e === D || Z || ee || re || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === h || e.$$typeof === k || e.$$typeof === O || e.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function oe(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var u = r.displayName || r.name || "";
      return u !== "" ? n + "(" + u + ")" : n;
    }
    function z(e) {
      return e.displayName || "Context";
    }
    function a(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case x:
          return "Portal";
        case N:
          return "Profiler";
        case C:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return z(r) + ".Consumer";
          case k:
            var n = e;
            return z(n._context) + ".Provider";
          case A:
            return oe(e, e.render, "ForwardRef");
          case h:
            var t = e.displayName || null;
            return t !== null ? t : a(e.type) || "Memo";
          case j: {
            var u = e, f = u._payload, l = u._init;
            try {
              return a(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var o = Object.assign, s = 0, P, T, pe, Ae, he, ge, me;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ve() {
      {
        if (s === 0) {
          P = console.log, T = console.info, pe = console.warn, Ae = console.error, he = console.group, ge = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        s++;
      }
    }
    function Le() {
      {
        if (s--, s === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: o({}, e, {
              value: P
            }),
            info: o({}, e, {
              value: T
            }),
            warn: o({}, e, {
              value: pe
            }),
            error: o({}, e, {
              value: Ae
            }),
            group: o({}, e, {
              value: he
            }),
            groupCollapsed: o({}, e, {
              value: ge
            }),
            groupEnd: o({}, e, {
              value: me
            })
          });
        }
        s < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = w.ReactCurrentDispatcher, se;
    function Q(e, r, n) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (u) {
            var t = u.stack.trim().match(/\n( *(at )?)/);
            se = t && t[1] || "";
          }
        return `
` + se + e;
      }
    }
    var le = !1, H;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      H = new We();
    }
    function Ee(e, r) {
      if (!e || le)
        return "";
      {
        var n = H.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      le = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = ie.current, ie.current = null, Ve();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (R) {
              t = R;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (R) {
              t = R;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            t = R;
          }
          e();
        }
      } catch (R) {
        if (R && t && typeof R.stack == "string") {
          for (var i = R.stack.split(`
`), m = t.stack.split(`
`), v = i.length - 1, p = m.length - 1; v >= 1 && p >= 0 && i[v] !== m[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (i[v] !== m[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || i[v] !== m[p]) {
                    var S = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, S), S;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        le = !1, ie.current = f, Le(), Error.prepareStackTrace = u;
      }
      var I = e ? e.displayName || e.name : "", F = I ? Q(I) : "";
      return typeof e == "function" && H.set(e, F), F;
    }
    function Xe(e, r, n) {
      return Ee(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, ze(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case b:
          return Q("Suspense");
        case g:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case A:
            return Xe(e.render);
          case h:
            return G(e.type, r, n);
          case j: {
            var t = e, u = t._payload, f = t._init;
            try {
              return G(f(u), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, be = {}, ye = w.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(n);
      } else
        ye.setExtraStackFrame(null);
    }
    function Qe(e, r, n, t, u) {
      {
        var f = Function.call.bind(U);
        for (var l in e)
          if (f(e, l)) {
            var i = void 0;
            try {
              if (typeof e[l] != "function") {
                var m = Error((t || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              i = e[l](r, l, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (K(u), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, l, typeof i), K(null)), i instanceof Error && !(i.message in be) && (be[i.message] = !0, K(u), d("Failed %s type: %s", n, i.message), K(null));
          }
      }
    }
    var He = Array.isArray;
    function ue(e) {
      return He(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ke(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function xe(e) {
      if (Ke(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Se(e);
    }
    var Ce = w.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, we;
    function $e(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Ce.current;
    }
    function rr(e, r) {
      {
        var n = function() {
          je || (je = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var n = function() {
          we || (we = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, n, t, u, f, l) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function tr(e, r, n, t, u) {
      {
        var f, l = {}, i = null, m = null;
        n !== void 0 && (xe(n), i = "" + n), Ze(r) && (xe(r.key), i = "" + r.key), $e(r) && (m = r.ref, er(r, u));
        for (f in r)
          U.call(r, f) && !qe.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            l[f] === void 0 && (l[f] = v[f]);
        }
        if (i || m) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(l, p), m && nr(l, p);
        }
        return ar(e, i, m, u, t, Ce.current, l);
      }
    }
    var ce = w.ReactCurrentOwner, Te = w.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Oe() {
      {
        if (ce.current) {
          var e = a(ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var _e = {};
    function ir(e) {
      {
        var r = Oe();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ir(r);
        if (_e[n])
          return;
        _e[n] = !0;
        var t = "";
        e && e._owner && e._owner !== ce.current && (t = " It was passed a child from " + a(e._owner.type) + "."), B(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), B(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            de(t) && Pe(t, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = $(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), l; !(l = f.next()).done; )
              de(l.value) && Pe(l.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = a(r);
          Qe(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var u = a(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            B(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var De = {};
    function Fe(e, r, n, t, u, f) {
      {
        var l = te(e);
        if (!l) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = or();
          m ? i += m : i += Oe();
          var v;
          e === null ? v = "null" : ue(e) ? v = "array" : e !== void 0 && e.$$typeof === y ? (v = "<" + (a(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var p = tr(e, r, n, u, f);
        if (p == null)
          return p;
        if (l) {
          var S = r.children;
          if (S !== void 0)
            if (t)
              if (ue(S)) {
                for (var I = 0; I < S.length; I++)
                  ke(S[I], e);
                Object.freeze && Object.freeze(S);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        if (U.call(r, "key")) {
          var F = a(e), R = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ve = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[F + ve]) {
            var vr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, F, vr, F), De[F + ve] = !0;
          }
        }
        return e === E ? lr(p) : sr(p), p;
      }
    }
    function ur(e, r, n) {
      return Fe(e, r, n, !0);
    }
    function cr(e, r, n) {
      return Fe(e, r, n, !1);
    }
    var fr = cr, dr = ur;
    L.Fragment = E, L.jsx = fr, L.jsxs = dr;
  }()), L;
}
var Je;
function gr() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? q.exports = Ar() : q.exports = hr()), q.exports;
}
var c = gr();
const mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgB7Y/BDcMgDEU/TNCVGKTtCE0mwExAs0LTjlGxWQi+RZGcmFMufpIlJMx7AjAM4zry5z9Mc4maPR7p3stPPSpAR5HpV6JzPqP6m2wRGB/h3QJJirC8LqA2aXwGkjwOJ+S5UFuKbeh1D6lHrgrsI/xnrVwd2Eb4rJV3w5H8LQMMw+hiBeyjRYOLAB1MAAAAAElFTkSuQmCC", Me = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACRwAAAkcB0xsw9QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIbSURBVHic5ZtNTgJBEEYfngUTXZK4caNXERPxfmqI3sME5Qz+EYwux8WkEqIwdM30T1X7Jazo6a73gKa7YaDNJfAErIB74Ij6cgjMgQ/gGZgBI4Ap0Px6fALnRcpMkwnwyl/Oa4DHLU80tO+G0wLFxs4J8M52xiVsN1OLhC74BlgD3HQ08CxhH3xDO98xDmjoTUII/Ao4lgt2TRIeJ8ZQlrO+F1qW0Bte24FFCYPhtR1ZkhANXtuhBQnR4bUdl5SQDF47QAkJyeG1A+WUkA1eO2AOCdnhtQOnlFAMXltACgnF4bWFxJRgBl5bUAwJ5uC1hQ2RYBZeW2AfCebhJSkkuIGXxJTgDl4SQ4JbeMkQCe7hJX0kVAMv0UioDl4SAvZFezpbHbwkREK18JK+EqqAl2glVAUvmdD+NL0P/puM8Ae5BlJmVLqA2OnzEehaMbrKkEnQvYQYX4NuJcRcCLmToFneToCXgLZuJPRZ21cjYcjGxr2EGLs6txJibmndSUixn3cjIeVhhnkJOU5yzErIeYxlTkKJMzwzEkoeYBaXYOH0tpgEC/CbtWSVYAl+s6YsEizCb9aWVIJleEkyCR7gJdEleIKXRJPgEV4yWIJneElvCTXAS9QSar1p6o39TMcAtwENPcFLQiQ8QP03TnZJWMP/uHV2l4QlwMWWJ7xMeKHZNTHOpMEUWNC+6nPqvH1+DNzR/kdhAVwBox8H7DcRrNVqlAAAAABJRU5ErkJggg==", Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOzSURBVHic7dpPaB5FHMbxj29TKakp1WAohXoI1npRPImgovYS9CTYiyg9aC9CsdCDRWhzE+nJHho8qKjnoigFb4oWhSKoCAVpKzZQ0Bo0Fg3poW3iYXadeUP+vH92532L+4VlJuR953nm987Ozv5maGhoaGhoaGj4n3Jbze1P4kk8jN3YhVG0sIhfcRHf4yucq9lPFsZwSOjUcpfXBUxjIrvrCtiCo5i3euf+xo/4BmeEAP25xmcXcQLbs/agDx4ThnLaiWs4hRdxzzrfncBzeA9XV7TxO/bV5roijuC6aHoex3BXD22N4iAuaw/ESYxUYbZKWpjRbvRD3F1B21txHDeStk8LARoa0s4v4oUaNPZiLtH5DJtr0OmaI6Kpv4Q5oC7uw6VE790atTricfGeXyz+rptJ/CYGYX8GzVXZon22r2PYr8WjYuCvYkdG7f84qn3Cy82xRP+D3OJj4iJnXjWzfbfcjvOFhxu4N6f4ITH60zmFV/B84mMmp3C5tr+mt0VOVWzCbOHlD2FU1M6kGPVTOQQ34A3Rz1Q/DbU6/NxTSf3TfgQr4nRSfyKH4NtixNd7scnFCBYEP5/nEPxCfKUdFso56XI/jXR6C+wsytl+xCrmUlHu1Edmq9MAjBXlMI2A0ktLH2+JnQagjPByr0I1cDOp95wr6DQAC0V5R69CNbCtKJdFf13TaQCuFOWuXoVqoPQyp300dEWnAbhYlOOGI2Pbwv1F/ed+G+qEH5J6jvf/jXhAzBh/209DnQbgy6T+TD+CFfF0Uj+TS/SCmIwYdHLynDj5ZfMyLS6HD+YSXYWpxMf7OYUnhBxgufzcmlO8oIWzhYclPJTbwAkx+sdzi+NAov/RAPRtF7arypTU3ozae/CPmI3enVG7jX3irzAn5O3rZhw/JbqHM2iuy0nRzKx6k5PjwrO+1PtE/ecaNmREyMqUpq4Iefuq2aP9l1/GqzXo9MSosFdXGrsu5O2rSFK2hAmvvOfT62bxv6Fgs7BXlxo8L6SuN/XY5pT4qEuH/SGh80MXBMJe3crDDbNC9vYR67+vt/AgXhdXeOmu82Hxnj9giIOwQ9iuSvf0y2sB3+Fj4STIO0J6/aywu7zy80vCc361R91QB4HwRJix9vmf9a4FYXm70Qpv6INAmAyn8KaQVV557KV8enyNt/Cs7l5sbokgrMY23FlRW7dsEKrkJTEIS3hlsHYGQxMEvKz9dhjYMZpBkgbhlwF7GRj7hc6/NmgjDQ0NDQ0NDQ1Dzb8hO0M7jZ69bgAAAABJRU5ErkJggg==", br = ({
  options: _ = [],
  selectedOption: y,
  setSelectedOption: x = () => {
  },
  handleChange: E = null,
  multi: C = !1,
  label: N = "Select",
  searchPlaceholder: k = "Search",
  notFound: O = "No data found"
}) => {
  const [A, b] = J([]), [g, h] = J([]), [j, D] = J(""), [Y, M] = J(!1), [$, w] = J(!1), d = Ne(null), W = Ne(null), [Z, ee] = J(!1);
  Ye(() => {
    h(
      () => _?.map((a) => ({ ...a, isSelected: !1 }))
    ), b(
      () => _?.map((a) => ({ ...a, isSelected: !1 }))
    );
  }, []);
  const re = () => {
    if (M(!Y), d.current) {
      const a = d.current.getBoundingClientRect(), o = 200, s = window.innerHeight - a.bottom;
      ee(s < o);
    }
  };
  Ye(() => {
    const a = (o) => {
      d?.current && !d?.current?.contains(o.target) && !W?.current?.contains(o.target) && M(!1);
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []);
  const ne = () => {
    w(!0);
  }, ae = () => {
    w(!1);
  }, X = (a) => {
    if (h(
      (o) => o?.map((s) => ({
        ...s,
        isSelected: s?.value === a?.value ? !a?.isSelected : s?.isSelected
      }))
    ), b(
      (o) => o?.map((s) => ({
        ...s,
        isSelected: s?.value === a?.value ? !a?.isSelected : s?.isSelected
      }))
    ), E) {
      let { isSelected: o, ...s } = a;
      return E(s);
    }
    if (y?.some((o) => o?.value === a?.value))
      x(
        (o) => o.filter((s) => s?.value !== a?.value)
      );
    else {
      let { isSelected: o, ...s } = a;
      x((P) => [...P, s]);
    }
  }, te = (a) => {
    M(!1), w(!1), h(
      (P) => P?.map((T) => ({
        ...T,
        isSelected: T?.value === a?.value ? !a?.isSelected : T?.isSelected
      }))
    ), b(
      (P) => P?.map((T) => ({
        ...T,
        isSelected: T?.value === a?.value ? !a?.isSelected : T?.isSelected
      }))
    );
    let { isSelected: o, ...s } = a;
    if (E)
      return E(s);
    x([s]);
  }, oe = (a) => {
    if (a.target.checked) {
      if (h(
        (o) => o?.map((s) => ({ ...s, isSelected: !0 }))
      ), b(
        (o) => o?.map((s) => ({ ...s, isSelected: !0 }))
      ), E)
        return E(_);
      x(_);
    } else
      h(
        (o) => o?.map((s) => ({ ...s, isSelected: !1 }))
      ), b(
        (o) => o?.map((s) => ({ ...s, isSelected: !1 }))
      ), x([]);
  }, z = (a) => {
    D(a.target.value);
    let o = A?.filter((s) => s?.name?.toLowerCase()?.includes(a.target.value?.toLowerCase()));
    h(o);
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "main-select-container",
      "data-as": "options",
      onMouseEnter: ne,
      onMouseLeave: ae,
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            ref: d,
            className: "selected-items",
            onClick: re,
            children: y?.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("span", { className: "ellipsis-text", children: [
              y?.slice(0, 4).map((a) => a?.name).join(", "),
              y?.length > 4 && /* @__PURE__ */ c.jsx("span", { className: "more-span", children: ", Rest.." })
            ] }) }) : /* @__PURE__ */ c.jsx("span", { children: N })
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "right-tools", children: [
          y?.length > 0 && $ && /* @__PURE__ */ c.jsx("div", { className: "close-div", children: /* @__PURE__ */ c.jsx(
            "img",
            {
              className: "close zoom-anim",
              title: "Clear",
              onClick: () => {
                x([]), h(
                  (a) => a?.map((o) => ({ ...o, isSelected: !1 }))
                ), b(
                  (a) => a?.map((o) => ({ ...o, isSelected: !1 }))
                );
              },
              src: Me,
              alt: "close"
            }
          ) }),
          /* @__PURE__ */ c.jsx(
            "img",
            {
              className: `down-arrow zoom-anim ${Y && "up-arrow"}`,
              src: mr,
              alt: "arrow"
            }
          )
        ] }),
        Y && /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: `option-container ${Z ? "drop-up" : "drop-down"}`,
            ref: W,
            id: "options",
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "search-container", children: [
                C && /* @__PURE__ */ c.jsx("div", { className: "select-all", children: /* @__PURE__ */ c.jsxs("label", { className: "select-all-label", htmlFor: "selectAll", children: [
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: "selectAll",
                      checked: A?.every((a) => a?.isSelected),
                      onChange: oe
                    }
                  ),
                  /* @__PURE__ */ c.jsx("span", { children: "Select all" })
                ] }) }),
                /* @__PURE__ */ c.jsxs("div", { className: "search-wrapper", children: [
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      className: "search-input ",
                      type: "text",
                      placeholder: k,
                      value: j,
                      onChange: z
                    }
                  ),
                  /* @__PURE__ */ c.jsx("img", { className: "search-icon", src: Rr, alt: "search" }),
                  j && /* @__PURE__ */ c.jsx(
                    "img",
                    {
                      onClick: () => {
                        h(A), D("");
                      },
                      className: "close-img zoom-anim",
                      src: Me,
                      alt: "close"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ c.jsx("ul", { className: "ul-list", children: g?.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: g?.map((a, o) => /* @__PURE__ */ c.jsx(
                "li",
                {
                  className: `ul-item ${!C && y[0]?.name === a?.name ? "active" : ""}`,
                  onClick: () => C ? null : te(a),
                  children: /* @__PURE__ */ c.jsxs("label", { htmlFor: a?.name, className: "lbl-checkbox", children: [
                    C && /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: a?.isSelected,
                        value: a?.value,
                        onChange: () => C ? X(a) : null,
                        id: a?.name
                      }
                    ),
                    /* @__PURE__ */ c.jsx("span", { children: a?.name })
                  ] })
                },
                o
              )) }) : /* @__PURE__ */ c.jsx("li", { className: "no-data-found", children: /* @__PURE__ */ c.jsx("span", { children: O }) }) })
            ]
          }
        )
      ]
    }
  );
};
export {
  br as default
};
