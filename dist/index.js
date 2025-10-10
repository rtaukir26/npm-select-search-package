import Ue, { useState as M, useRef as Ne, useEffect as Ye } from "react";
var ee = { exports: {} }, X = {};
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
  if (Be) return X;
  Be = 1;
  var _ = Ue, b = Symbol.for("react.element"), x = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, C = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(O, h, j) {
    var v, y = {}, g = null, F = null;
    j !== void 0 && (g = "" + j), h.key !== void 0 && (g = "" + h.key), h.ref !== void 0 && (F = h.ref);
    for (v in h) E.call(h, v) && !B.hasOwnProperty(v) && (y[v] = h[v]);
    if (O && O.defaultProps) for (v in h = O.defaultProps, h) y[v] === void 0 && (y[v] = h[v]);
    return { $$typeof: b, type: O, key: g, ref: F, props: y, _owner: C.current };
  }
  return X.Fragment = x, X.jsx = D, X.jsxs = D, X;
}
var z = {};
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
    var _ = Ue, b = Symbol.for("react.element"), x = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), O = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), U = Symbol.iterator, V = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[V];
      return typeof r == "function" ? r : null;
    }
    var P = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        N("error", e, n);
      }
    }
    function N(e, r, n) {
      {
        var t = P.ReactDebugCurrentFrame, u = t.getStackAddendum();
        u !== "" && (r += "%s", n = n.concat([u]));
        var f = n.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Q = !1, re = !1, ne = !1, ae = !1, te = !1, H;
    H = Symbol.for("react.module.reference");
    function oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === B || te || e === C || e === j || e === v || ae || e === F || Q || re || ne || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === y || e.$$typeof === D || e.$$typeof === O || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === H || e.getModuleId !== void 0));
    }
    function ie(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var u = r.displayName || r.name || "";
      return u !== "" ? n + "(" + u + ")" : n;
    }
    function G(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case x:
          return "Portal";
        case B:
          return "Profiler";
        case C:
          return "StrictMode";
        case j:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var r = e;
            return G(r) + ".Consumer";
          case D:
            var n = e;
            return G(n._context) + ".Provider";
          case h:
            return ie(e, e.render, "ForwardRef");
          case y:
            var t = e.displayName || null;
            return t !== null ? t : w(e.type) || "Memo";
          case g: {
            var u = e, f = u._payload, s = u._init;
            try {
              return w(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var a = Object.assign, o = 0, l, k, T, Ae, he, ge, me;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ve() {
      {
        if (o === 0) {
          l = console.log, k = console.info, T = console.warn, Ae = console.error, he = console.group, ge = console.groupCollapsed, me = console.groupEnd;
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
        o++;
      }
    }
    function Le() {
      {
        if (o--, o === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: a({}, e, {
              value: l
            }),
            info: a({}, e, {
              value: k
            }),
            warn: a({}, e, {
              value: T
            }),
            error: a({}, e, {
              value: Ae
            }),
            group: a({}, e, {
              value: he
            }),
            groupCollapsed: a({}, e, {
              value: ge
            }),
            groupEnd: a({}, e, {
              value: me
            })
          });
        }
        o < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = P.ReactCurrentDispatcher, le;
    function K(e, r, n) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (u) {
            var t = u.stack.trim().match(/\n( *(at )?)/);
            le = t && t[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ue = !1, q;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      q = new We();
    }
    function Ee(e, r) {
      if (!e || ue)
        return "";
      {
        var n = q.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      ue = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = se.current, se.current = null, Ve();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (R) {
              t = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              t = R;
            }
            e.call(s.prototype);
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
`), d = i.length - 1, p = m.length - 1; d >= 1 && p >= 0 && i[d] !== m[p]; )
            p--;
          for (; d >= 1 && p >= 0; d--, p--)
            if (i[d] !== m[p]) {
              if (d !== 1 || p !== 1)
                do
                  if (d--, p--, p < 0 || i[d] !== m[p]) {
                    var S = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, S), S;
                  }
                while (d >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = f, Le(), Error.prepareStackTrace = u;
      }
      var J = e ? e.displayName || e.name : "", Y = J ? K(J) : "";
      return typeof e == "function" && q.set(e, Y), Y;
    }
    function Xe(e, r, n) {
      return Ee(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, ze(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case j:
          return K("Suspense");
        case v:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Xe(e.render);
          case y:
            return $(e.type, r, n);
          case g: {
            var t = e, u = t._payload, f = t._init;
            try {
              return $(f(u), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, be = {}, ye = P.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, n = $(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(n);
      } else
        ye.setExtraStackFrame(null);
    }
    function Qe(e, r, n, t, u) {
      {
        var f = Function.call.bind(W);
        for (var s in e)
          if (f(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var m = Error((t || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              i = e[s](r, s, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (Z(u), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, s, typeof i), Z(null)), i instanceof Error && !(i.message in be) && (be[i.message] = !0, Z(u), A("Failed %s type: %s", n, i.message), Z(null));
          }
      }
    }
    var He = Array.isArray;
    function ce(e) {
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
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Se(e);
    }
    var Ce = P.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, we;
    function $e(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (W.call(e, "key")) {
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
          je || (je = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, n, t, u, f, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: s,
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
        var f, s = {}, i = null, m = null;
        n !== void 0 && (xe(n), i = "" + n), Ze(r) && (xe(r.key), i = "" + r.key), $e(r) && (m = r.ref, er(r, u));
        for (f in r)
          W.call(r, f) && !qe.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (f in d)
            s[f] === void 0 && (s[f] = d[f]);
        }
        if (i || m) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && rr(s, p), m && nr(s, p);
        }
        return ar(e, i, m, u, t, Ce.current, s);
      }
    }
    var fe = P.ReactCurrentOwner, Te = P.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = $(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function Oe() {
      {
        if (fe.current) {
          var e = w(fe.current.type);
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
        e && e._owner && e._owner !== fe.current && (t = " It was passed a child from " + w(e._owner.type) + "."), I(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), I(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            ve(t) && Pe(t, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = L(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), s; !(s = f.next()).done; )
              ve(s.value) && Pe(s.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = w(r);
          Qe(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !de) {
          de = !0;
          var u = w(r);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            I(e), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), A("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var De = {};
    function Fe(e, r, n, t, u, f) {
      {
        var s = oe(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = or();
          m ? i += m : i += Oe();
          var d;
          e === null ? d = "null" : ce(e) ? d = "array" : e !== void 0 && e.$$typeof === b ? (d = "<" + (w(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var p = tr(e, r, n, u, f);
        if (p == null)
          return p;
        if (s) {
          var S = r.children;
          if (S !== void 0)
            if (t)
              if (ce(S)) {
                for (var J = 0; J < S.length; J++)
                  ke(S[J], e);
                Object.freeze && Object.freeze(S);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        if (W.call(r, "key")) {
          var Y = w(e), R = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), pe = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[Y + pe]) {
            var vr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, Y, vr, Y), De[Y + pe] = !0;
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
    z.Fragment = E, z.jsx = fr, z.jsxs = dr;
  }()), z;
}
var Je;
function gr() {
  return Je || (Je = 1, process.env.NODE_ENV === "production" ? ee.exports = Ar() : ee.exports = hr()), ee.exports;
}
var c = gr();
const mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgB7Y/BDcMgDEU/TNCVGKTtCE0mwExAs0LTjlGxWQi+RZGcmFMufpIlJMx7AjAM4zry5z9Mc4maPR7p3stPPSpAR5HpV6JzPqP6m2wRGB/h3QJJirC8LqA2aXwGkjwOJ+S5UFuKbeh1D6lHrgrsI/xnrVwd2Eb4rJV3w5H8LQMMw+hiBeyjRYOLAB1MAAAAAElFTkSuQmCC", Me = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACRwAAAkcB0xsw9QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIbSURBVHic5ZtNTgJBEEYfngUTXZK4caNXERPxfmqI3sME5Qz+EYwux8WkEqIwdM30T1X7Jazo6a73gKa7YaDNJfAErIB74Ij6cgjMgQ/gGZgBI4Ap0Px6fALnRcpMkwnwyl/Oa4DHLU80tO+G0wLFxs4J8M52xiVsN1OLhC74BlgD3HQ08CxhH3xDO98xDmjoTUII/Ao4lgt2TRIeJ8ZQlrO+F1qW0Bte24FFCYPhtR1ZkhANXtuhBQnR4bUdl5SQDF47QAkJyeG1A+WUkA1eO2AOCdnhtQOnlFAMXltACgnF4bWFxJRgBl5bUAwJ5uC1hQ2RYBZeW2AfCebhJSkkuIGXxJTgDl4SQ4JbeMkQCe7hJX0kVAMv0UioDl4SAvZFezpbHbwkREK18JK+EqqAl2glVAUvmdD+NL0P/puM8Ae5BlJmVLqA2OnzEehaMbrKkEnQvYQYX4NuJcRcCLmToFneToCXgLZuJPRZ21cjYcjGxr2EGLs6txJibmndSUixn3cjIeVhhnkJOU5yzErIeYxlTkKJMzwzEkoeYBaXYOH0tpgEC/CbtWSVYAl+s6YsEizCb9aWVIJleEkyCR7gJdEleIKXRJPgEV4yWIJneElvCTXAS9QSar1p6o39TMcAtwENPcFLQiQ8QP03TnZJWMP/uHV2l4QlwMWWJ7xMeKHZNTHOpMEUWNC+6nPqvH1+DNzR/kdhAVwBox8H7DcRrNVqlAAAAABJRU5ErkJggg==", Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOzSURBVHic7dpPaB5FHMbxj29TKakp1WAohXoI1npRPImgovYS9CTYiyg9aC9CsdCDRWhzE+nJHho8qKjnoigFb4oWhSKoCAVpKzZQ0Bo0Fg3poW3iYXadeUP+vH92532L+4VlJuR953nm987Ozv5maGhoaGhoaGj4n3Jbze1P4kk8jN3YhVG0sIhfcRHf4yucq9lPFsZwSOjUcpfXBUxjIrvrCtiCo5i3euf+xo/4BmeEAP25xmcXcQLbs/agDx4ThnLaiWs4hRdxzzrfncBzeA9XV7TxO/bV5roijuC6aHoex3BXD22N4iAuaw/ESYxUYbZKWpjRbvRD3F1B21txHDeStk8LARoa0s4v4oUaNPZiLtH5DJtr0OmaI6Kpv4Q5oC7uw6VE790atTricfGeXyz+rptJ/CYGYX8GzVXZon22r2PYr8WjYuCvYkdG7f84qn3Cy82xRP+D3OJj4iJnXjWzfbfcjvOFhxu4N6f4ITH60zmFV/B84mMmp3C5tr+mt0VOVWzCbOHlD2FU1M6kGPVTOQQ34A3Rz1Q/DbU6/NxTSf3TfgQr4nRSfyKH4NtixNd7scnFCBYEP5/nEPxCfKUdFso56XI/jXR6C+wsytl+xCrmUlHu1Edmq9MAjBXlMI2A0ktLH2+JnQagjPByr0I1cDOp95wr6DQAC0V5R69CNbCtKJdFf13TaQCuFOWuXoVqoPQyp300dEWnAbhYlOOGI2Pbwv1F/ed+G+qEH5J6jvf/jXhAzBh/209DnQbgy6T+TD+CFfF0Uj+TS/SCmIwYdHLynDj5ZfMyLS6HD+YSXYWpxMf7OYUnhBxgufzcmlO8oIWzhYclPJTbwAkx+sdzi+NAov/RAPRtF7arypTU3ozae/CPmI3enVG7jX3irzAn5O3rZhw/JbqHM2iuy0nRzKx6k5PjwrO+1PtE/ecaNmREyMqUpq4Iefuq2aP9l1/GqzXo9MSosFdXGrsu5O2rSFK2hAmvvOfT62bxv6Fgs7BXlxo8L6SuN/XY5pT4qEuH/SGh80MXBMJe3crDDbNC9vYR67+vt/AgXhdXeOmu82Hxnj9giIOwQ9iuSvf0y2sB3+Fj4STIO0J6/aywu7zy80vCc361R91QB4HwRJix9vmf9a4FYXm70Qpv6INAmAyn8KaQVV557KV8enyNt/Cs7l5sbokgrMY23FlRW7dsEKrkJTEIS3hlsHYGQxMEvKz9dhjYMZpBkgbhlwF7GRj7hc6/NmgjDQ0NDQ0NDQ1Dzb8hO0M7jZ69bgAAAABJRU5ErkJggg==", br = ({
  options: _ = [],
  selectedOption: b,
  setSelectedOption: x = () => {
  },
  handleChange: E = null,
  multi: C = !1,
  label: B = "Select",
  searchPlaceholder: D = "Search",
  notFound: O = "No data found",
  search: h = !1
}) => {
  const [j, v] = M([]), [y, g] = M([]), [F, U] = M(""), [V, L] = M(!1), [P, A] = M(!1), N = Ne(null), Q = Ne(null), [re, ne] = M(!1);
  Ye(() => {
    g(
      () => _?.map((a) => ({ ...a, isSelected: !1 }))
    ), v(
      () => _?.map((a) => ({ ...a, isSelected: !1 }))
    );
  }, []);
  const ae = () => {
    if (L(!V), N.current) {
      const a = N.current.getBoundingClientRect(), o = 200, l = window.innerHeight - a.bottom;
      ne(l < o);
    }
  };
  Ye(() => {
    const a = (o) => {
      N?.current && !N?.current?.contains(o.target) && !Q?.current?.contains(o.target) && L(!1);
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []);
  const te = () => {
    A(!0);
  }, H = () => {
    A(!1);
  }, oe = (a) => {
    if (g(
      (o) => o?.map((l) => ({
        ...l,
        isSelected: l?.value === a?.value ? !a?.isSelected : l?.isSelected
      }))
    ), v(
      (o) => o?.map((l) => ({
        ...l,
        isSelected: l?.value === a?.value ? !a?.isSelected : l?.isSelected
      }))
    ), E) {
      let { isSelected: o, ...l } = a;
      return E(l);
    }
    if (b?.some((o) => o?.value === a?.value))
      x(
        (o) => o.filter((l) => l?.value !== a?.value)
      );
    else {
      let { isSelected: o, ...l } = a;
      x((k) => [...k, l]);
    }
  }, ie = (a) => {
    L(!1), A(!1), g(
      (k) => k?.map((T) => ({
        ...T,
        isSelected: T?.value === a?.value ? !a?.isSelected : T?.isSelected
      }))
    ), v(
      (k) => k?.map((T) => ({
        ...T,
        isSelected: T?.value === a?.value ? !a?.isSelected : T?.isSelected
      }))
    );
    let { isSelected: o, ...l } = a;
    if (E)
      return E(l);
    x([l]);
  }, G = (a) => {
    if (a.target.checked) {
      if (g(
        (o) => o?.map((l) => ({ ...l, isSelected: !0 }))
      ), v(
        (o) => o?.map((l) => ({ ...l, isSelected: !0 }))
      ), E)
        return E(_);
      x(_);
    } else
      g(
        (o) => o?.map((l) => ({ ...l, isSelected: !1 }))
      ), v(
        (o) => o?.map((l) => ({ ...l, isSelected: !1 }))
      ), x([]);
  }, w = (a) => {
    U(a.target.value);
    let o = j?.filter((l) => l?.name?.toLowerCase()?.includes(a.target.value?.toLowerCase()));
    g(o);
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "main-select-container",
      "data-as": "options",
      onMouseEnter: te,
      onMouseLeave: H,
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            ref: N,
            className: "selected-items",
            onClick: ae,
            children: b?.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("span", { className: "ellipsis-text", children: [
              b?.slice(0, 4).map((a) => a?.name).join(", "),
              b?.length > 4 && /* @__PURE__ */ c.jsx("span", { className: "more-span", children: ", Rest.." })
            ] }) }) : /* @__PURE__ */ c.jsx("span", { children: B })
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "right-tools", children: [
          b?.length > 0 && P && /* @__PURE__ */ c.jsx("div", { className: "close-div", children: /* @__PURE__ */ c.jsx(
            "img",
            {
              className: "close zoom-anim",
              title: "Clear",
              onClick: () => {
                x([]), g(
                  (a) => a?.map((o) => ({ ...o, isSelected: !1 }))
                ), v(
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
              className: `down-arrow zoom-anim ${V && "up-arrow"}`,
              src: mr,
              alt: "arrow"
            }
          )
        ] }),
        V && /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: `option-container ${re ? "drop-up" : "drop-down"}`,
            ref: Q,
            id: "options",
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "search-container", children: [
                C && /* @__PURE__ */ c.jsx("div", { className: "select-all", children: /* @__PURE__ */ c.jsxs("label", { className: "select-all-label", htmlFor: "selectAll", children: [
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: "selectAll",
                      checked: j?.every((a) => a?.isSelected),
                      onChange: G
                    }
                  ),
                  /* @__PURE__ */ c.jsx("span", { children: "Select all" })
                ] }) }),
                h && /* @__PURE__ */ c.jsxs("div", { className: "search-wrapper", children: [
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      className: "search-input ",
                      type: "text",
                      placeholder: D,
                      value: F,
                      onChange: w
                    }
                  ),
                  /* @__PURE__ */ c.jsx("img", { className: "search-icon", src: Rr, alt: "search" }),
                  F && /* @__PURE__ */ c.jsx(
                    "img",
                    {
                      onClick: () => {
                        g(j), U("");
                      },
                      className: "close-img zoom-anim",
                      src: Me,
                      alt: "close"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ c.jsx("ul", { className: "ul-list", children: y?.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: y?.map((a, o) => /* @__PURE__ */ c.jsx(
                "li",
                {
                  className: `ul-item ${!C && b[0]?.name === a?.name ? "active" : ""}`,
                  onClick: () => C ? null : ie(a),
                  children: /* @__PURE__ */ c.jsxs("label", { htmlFor: a?.name, className: "lbl-checkbox", children: [
                    C && /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: a?.isSelected,
                        value: a?.value,
                        onChange: () => C ? oe(a) : null,
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
