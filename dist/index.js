import Ue, { useState as W, useRef as De, useEffect as Ne } from "react";
var K = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Ar() {
  if (Ye) return X;
  Ye = 1;
  var D = Ue, E = Symbol.for("react.element"), x = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, B = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(j, d, T) {
    var h, R = {}, S = null, w = null;
    T !== void 0 && (S = "" + T), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (w = d.ref);
    for (h in d) b.call(d, h) && !_.hasOwnProperty(h) && (R[h] = d[h]);
    if (j && j.defaultProps) for (h in d = j.defaultProps, d) R[h] === void 0 && (R[h] = d[h]);
    return { $$typeof: E, type: j, key: S, ref: w, props: R, _owner: B.current };
  }
  return X.Fragment = x, X.jsx = y, X.jsxs = y, X;
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
var Be;
function hr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var D = Ue, E = Symbol.for("react.element"), x = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), j = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), U = Symbol.iterator, q = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[q];
      return typeof r == "function" ? r : null;
    }
    var P = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        Z("error", e, n);
      }
    }
    function Z(e, r, n) {
      {
        var t = P.ReactDebugCurrentFrame, l = t.getStackAddendum();
        l !== "" && (r += "%s", n = n.concat([l]));
        var f = n.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var ee = !1, re = !1, a = !1, s = !1, u = !1, k;
    k = Symbol.for("react.module.reference");
    function O(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === _ || u || e === B || e === T || e === h || s || e === w || ee || re || a || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === y || e.$$typeof === j || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === k || e.getModuleId !== void 0));
    }
    function Ve(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var l = r.displayName || r.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case x:
          return "Portal";
        case _:
          return "Profiler";
        case B:
          return "StrictMode";
        case T:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return ue(r) + ".Consumer";
          case y:
            var n = e;
            return ue(n._context) + ".Provider";
          case d:
            return Ve(e, e.render, "ForwardRef");
          case R:
            var t = e.displayName || null;
            return t !== null ? t : F(e.type) || "Memo";
          case S: {
            var l = e, f = l._payload, i = l._init;
            try {
              return F(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, V = 0, fe, de, ve, pe, Ae, he, ge;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Me() {
      {
        if (V === 0) {
          fe = console.log, de = console.info, ve = console.warn, pe = console.error, Ae = console.group, he = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        V++;
      }
    }
    function We() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: fe
            }),
            info: N({}, e, {
              value: de
            }),
            warn: N({}, e, {
              value: ve
            }),
            error: N({}, e, {
              value: pe
            }),
            group: N({}, e, {
              value: Ae
            }),
            groupCollapsed: N({}, e, {
              value: he
            }),
            groupEnd: N({}, e, {
              value: ge
            })
          });
        }
        V < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = P.ReactCurrentDispatcher, ae;
    function z(e, r, n) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            ae = t && t[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var te = !1, Q;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Xe();
    }
    function Re(e, r) {
      if (!e || te)
        return "";
      {
        var n = Q.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      te = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = ne.current, ne.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              t = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              t = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            t = m;
          }
          e();
        }
      } catch (m) {
        if (m && t && typeof m.stack == "string") {
          for (var o = m.stack.split(`
`), g = t.stack.split(`
`), v = o.length - 1, p = g.length - 1; v >= 1 && p >= 0 && o[v] !== g[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (o[v] !== g[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || o[v] !== g[p]) {
                    var C = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, C), C;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        te = !1, ne.current = f, We(), Error.prepareStackTrace = l;
      }
      var J = e ? e.displayName || e.name : "", Y = J ? z(J) : "";
      return typeof e == "function" && Q.set(e, Y), Y;
    }
    function Le(e, r, n) {
      return Re(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, ze(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case T:
          return z("Suspense");
        case h:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Le(e.render);
          case R:
            return H(e.type, r, n);
          case S: {
            var t = e, l = t._payload, f = t._init;
            try {
              return H(f(l), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, Ee = {}, be = P.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(n);
      } else
        be.setExtraStackFrame(null);
    }
    function Qe(e, r, n, t, l) {
      {
        var f = Function.call.bind(M);
        for (var i in e)
          if (f(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var g = Error((t || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              o = e[i](r, i, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (G(l), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, i, typeof o), G(null)), o instanceof Error && !(o.message in Ee) && (Ee[o.message] = !0, G(l), A("Failed %s type: %s", n, o.message), G(null));
          }
      }
    }
    var He = Array.isArray;
    function oe(e) {
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
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Ke(e))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ye(e);
    }
    var Se = P.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, je;
    function $e(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Se.current;
    }
    function rr(e, r) {
      {
        var n = function() {
          xe || (xe = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          je || (je = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, n, t, l, f, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function tr(e, r, n, t, l) {
      {
        var f, i = {}, o = null, g = null;
        n !== void 0 && (Ce(n), o = "" + n), Ze(r) && (Ce(r.key), o = "" + r.key), $e(r) && (g = r.ref, er(r, l));
        for (f in r)
          M.call(r, f) && !qe.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            i[f] === void 0 && (i[f] = v[f]);
        }
        if (o || g) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, p), g && nr(i, p);
        }
        return ar(e, o, g, l, t, Se.current, i);
      }
    }
    var ie = P.ReactCurrentOwner, we = P.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(n);
      } else
        we.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Te() {
      {
        if (ie.current) {
          var e = F(ie.current.type);
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
    var Oe = {};
    function ir(e) {
      {
        var r = Te();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ir(r);
        if (Oe[n])
          return;
        Oe[n] = !0;
        var t = "";
        e && e._owner && e._owner !== ie.current && (t = " It was passed a child from " + F(e._owner.type) + "."), I(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), I(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            le(t) && _e(t, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = $(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), i; !(i = f.next()).done; )
              le(i.value) && _e(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = F(r);
          Qe(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var l = F(r);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
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
    var ke = {};
    function Fe(e, r, n, t, l, f) {
      {
        var i = O(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = or();
          g ? o += g : o += Te();
          var v;
          e === null ? v = "null" : oe(e) ? v = "array" : e !== void 0 && e.$$typeof === E ? (v = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var p = tr(e, r, n, l, f);
        if (p == null)
          return p;
        if (i) {
          var C = r.children;
          if (C !== void 0)
            if (t)
              if (oe(C)) {
                for (var J = 0; J < C.length; J++)
                  Pe(C[J], e);
                Object.freeze && Object.freeze(C);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(C, e);
        }
        if (M.call(r, "key")) {
          var Y = F(e), m = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ce = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[Y + ce]) {
            var vr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, Y, vr, Y), ke[Y + ce] = !0;
          }
        }
        return e === b ? lr(p) : sr(p), p;
      }
    }
    function cr(e, r, n) {
      return Fe(e, r, n, !0);
    }
    function ur(e, r, n) {
      return Fe(e, r, n, !1);
    }
    var fr = ur, dr = cr;
    L.Fragment = b, L.jsx = fr, L.jsxs = dr;
  }()), L;
}
var Ie;
function gr() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? K.exports = Ar() : K.exports = hr()), K.exports;
}
var c = gr();
const mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgB7Y/BDcMgDEU/TNCVGKTtCE0mwExAs0LTjlGxWQi+RZGcmFMufpIlJMx7AjAM4zry5z9Mc4maPR7p3stPPSpAR5HpV6JzPqP6m2wRGB/h3QJJirC8LqA2aXwGkjwOJ+S5UFuKbeh1D6lHrgrsI/xnrVwd2Eb4rJV3w5H8LQMMw+hiBeyjRYOLAB1MAAAAAElFTkSuQmCC", Je = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACRwAAAkcB0xsw9QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIbSURBVHic5ZtNTgJBEEYfngUTXZK4caNXERPxfmqI3sME5Qz+EYwux8WkEqIwdM30T1X7Jazo6a73gKa7YaDNJfAErIB74Ij6cgjMgQ/gGZgBI4Ap0Px6fALnRcpMkwnwyl/Oa4DHLU80tO+G0wLFxs4J8M52xiVsN1OLhC74BlgD3HQ08CxhH3xDO98xDmjoTUII/Ao4lgt2TRIeJ8ZQlrO+F1qW0Bte24FFCYPhtR1ZkhANXtuhBQnR4bUdl5SQDF47QAkJyeG1A+WUkA1eO2AOCdnhtQOnlFAMXltACgnF4bWFxJRgBl5bUAwJ5uC1hQ2RYBZeW2AfCebhJSkkuIGXxJTgDl4SQ4JbeMkQCe7hJX0kVAMv0UioDl4SAvZFezpbHbwkREK18JK+EqqAl2glVAUvmdD+NL0P/puM8Ae5BlJmVLqA2OnzEehaMbrKkEnQvYQYX4NuJcRcCLmToFneToCXgLZuJPRZ21cjYcjGxr2EGLs6txJibmndSUixn3cjIeVhhnkJOU5yzErIeYxlTkKJMzwzEkoeYBaXYOH0tpgEC/CbtWSVYAl+s6YsEizCb9aWVIJleEkyCR7gJdEleIKXRJPgEV4yWIJneElvCTXAS9QSar1p6o39TMcAtwENPcFLQiQ8QP03TnZJWMP/uHV2l4QlwMWWJ7xMeKHZNTHOpMEUWNC+6nPqvH1+DNzR/kdhAVwBox8H7DcRrNVqlAAAAABJRU5ErkJggg==", Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOzSURBVHic7dpPaB5FHMbxj29TKakp1WAohXoI1npRPImgovYS9CTYiyg9aC9CsdCDRWhzE+nJHho8qKjnoigFb4oWhSKoCAVpKzZQ0Bo0Fg3poW3iYXadeUP+vH92532L+4VlJuR953nm987Ozv5maGhoaGhoaGj4n3Jbze1P4kk8jN3YhVG0sIhfcRHf4yucq9lPFsZwSOjUcpfXBUxjIrvrCtiCo5i3euf+xo/4BmeEAP25xmcXcQLbs/agDx4ThnLaiWs4hRdxzzrfncBzeA9XV7TxO/bV5roijuC6aHoex3BXD22N4iAuaw/ESYxUYbZKWpjRbvRD3F1B21txHDeStk8LARoa0s4v4oUaNPZiLtH5DJtr0OmaI6Kpv4Q5oC7uw6VE790atTricfGeXyz+rptJ/CYGYX8GzVXZon22r2PYr8WjYuCvYkdG7f84qn3Cy82xRP+D3OJj4iJnXjWzfbfcjvOFhxu4N6f4ITH60zmFV/B84mMmp3C5tr+mt0VOVWzCbOHlD2FU1M6kGPVTOQQ34A3Rz1Q/DbU6/NxTSf3TfgQr4nRSfyKH4NtixNd7scnFCBYEP5/nEPxCfKUdFso56XI/jXR6C+wsytl+xCrmUlHu1Edmq9MAjBXlMI2A0ktLH2+JnQagjPByr0I1cDOp95wr6DQAC0V5R69CNbCtKJdFf13TaQCuFOWuXoVqoPQyp300dEWnAbhYlOOGI2Pbwv1F/ed+G+qEH5J6jvf/jXhAzBh/209DnQbgy6T+TD+CFfF0Uj+TS/SCmIwYdHLynDj5ZfMyLS6HD+YSXYWpxMf7OYUnhBxgufzcmlO8oIWzhYclPJTbwAkx+sdzi+NAov/RAPRtF7arypTU3ozae/CPmI3enVG7jX3irzAn5O3rZhw/JbqHM2iuy0nRzKx6k5PjwrO+1PtE/ecaNmREyMqUpq4Iefuq2aP9l1/GqzXo9MSosFdXGrsu5O2rSFK2hAmvvOfT62bxv6Fgs7BXlxo8L6SuN/XY5pT4qEuH/SGh80MXBMJe3crDDbNC9vYR67+vt/AgXhdXeOmu82Hxnj9giIOwQ9iuSvf0y2sB3+Fj4STIO0J6/aywu7zy80vCc361R91QB4HwRJix9vmf9a4FYXm70Qpv6INAmAyn8KaQVV557KV8enyNt/Cs7l5sbokgrMY23FlRW7dsEKrkJTEIS3hlsHYGQxMEvKz9dhjYMZpBkgbhlwF7GRj7hc6/NmgjDQ0NDQ0NDQ1Dzb8hO0M7jZ69bgAAAABJRU5ErkJggg==", br = ({
  options: D = [],
  selectedOption: E,
  setSelectedOption: x = () => {
  },
  multi: b = !1,
  label: B = "Select"
}) => {
  const [_, y] = W([]), [j, d] = W([]), [T, h] = W(""), [R, S] = W(!1), w = De(null), U = De(null), [q, $] = W(!1);
  Ne(() => {
    d(
      () => D?.map((a) => ({ ...a, isSelected: !1 }))
    ), y(
      () => D?.map((a) => ({ ...a, isSelected: !1 }))
    );
  }, []);
  const P = () => {
    if (S(!R), w.current) {
      const a = w.current.getBoundingClientRect(), s = 200, u = window.innerHeight - a.bottom;
      $(u < s);
    }
  };
  Ne(() => {
    const a = (s) => {
      w?.current && !w?.current?.contains(s.target) && !U?.current?.contains(s.target) && S(!1);
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []);
  const A = (a) => {
    if (d(
      (s) => s?.map((u) => ({
        ...u,
        isSelected: u?.value === a?.value ? !a?.isSelected : u?.isSelected
      }))
    ), y(
      (s) => s?.map((u) => ({
        ...u,
        isSelected: u?.value === a?.value ? !a?.isSelected : u?.isSelected
      }))
    ), E?.some((s) => s?.value === a?.value))
      x(
        (s) => s.filter((u) => u?.value !== a?.value)
      );
    else {
      let { isSelected: s, ...u } = a;
      x((k) => [...k, u]);
    }
  }, Z = (a) => {
    S(!1), d(
      (k) => k?.map((O) => ({
        ...O,
        isSelected: O?.value === a?.value ? !a?.isSelected : O?.isSelected
      }))
    ), y(
      (k) => k?.map((O) => ({
        ...O,
        isSelected: O?.value === a?.value ? !a?.isSelected : O?.isSelected
      }))
    );
    let { isSelected: s, ...u } = a;
    x([u]);
  }, ee = (a) => {
    a.target.checked ? (d(
      (s) => s?.map((u) => ({ ...u, isSelected: !0 }))
    ), y(
      (s) => s?.map((u) => ({ ...u, isSelected: !0 }))
    ), x(D)) : (d(
      (s) => s?.map((u) => ({ ...u, isSelected: !1 }))
    ), y(
      (s) => s?.map((u) => ({ ...u, isSelected: !1 }))
    ), x([]));
  }, re = (a) => {
    h(a.target.value);
    let s = _?.filter((u) => u?.name?.toLowerCase()?.includes(a.target.value?.toLowerCase()));
    d(s);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "main-select-container", "data-as": "options", children: [
    /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: w,
        className: "selected-items",
        onClick: P,
        children: E?.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs("span", { className: "ellipsis-text", children: [
          E?.slice(0, 4).map((a) => a?.name).join(", "),
          E?.length > 4 && /* @__PURE__ */ c.jsx("span", { className: "more-span", children: ", Rest.." })
        ] }) }) : /* @__PURE__ */ c.jsx("span", { children: B })
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "right-tools", children: [
      E?.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "close-div", children: /* @__PURE__ */ c.jsx(
        "img",
        {
          title: "Clear",
          onClick: () => {
            x([]), d(
              (a) => a?.map((s) => ({ ...s, isSelected: !1 }))
            ), y(
              (a) => a?.map((s) => ({ ...s, isSelected: !1 }))
            );
          },
          className: "close zoom-anim",
          src: Je,
          alt: "close"
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        "img",
        {
          className: `down-arrow zoom-anim ${R && "up-arrow"}`,
          src: mr,
          alt: "arrow"
        }
      )
    ] }),
    R && /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: `option-container ${q ? "drop-up" : "drop-down"}`,
        ref: U,
        id: "options",
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "search-container", children: [
            b && /* @__PURE__ */ c.jsx("div", { className: "select-all", children: /* @__PURE__ */ c.jsxs("label", { className: "select-all-label", htmlFor: "selectAll", children: [
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "selectAll",
                  checked: _?.every((a) => a?.isSelected),
                  onChange: ee
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
                  placeholder: "Search",
                  value: T,
                  onChange: re
                }
              ),
              /* @__PURE__ */ c.jsx("img", { className: "search-icon", src: Rr, alt: "search" }),
              T && /* @__PURE__ */ c.jsx(
                "img",
                {
                  onClick: () => {
                    d(_), h("");
                  },
                  className: "close-img zoom-anim",
                  src: Je,
                  alt: "close"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("ul", { children: j?.length > 0 ? /* @__PURE__ */ c.jsx(c.Fragment, { children: j?.map((a, s) => /* @__PURE__ */ c.jsx(
            "li",
            {
              className: !b && E[0]?.name === a?.name ? "active" : "",
              onClick: () => b ? null : Z(a),
              children: /* @__PURE__ */ c.jsxs("label", { htmlFor: a?.name, children: [
                b && /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: a?.isSelected,
                    value: a?.value,
                    onChange: () => b ? A(a) : null,
                    id: a?.name
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { children: a?.name })
              ] })
            },
            s
          )) }) : /* @__PURE__ */ c.jsx("li", { className: "no-data-found", children: /* @__PURE__ */ c.jsx("span", { children: "No data found" }) }) })
        ]
      }
    )
  ] });
};
export {
  br as default
};
