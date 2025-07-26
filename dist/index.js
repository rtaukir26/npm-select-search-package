import Je, { useState as M, useRef as Fe, useEffect as De } from "react";
var K = { exports: {} }, W = {};
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
  if (Ye) return W;
  Ye = 1;
  var k = Je, y = Symbol.for("react.element"), j = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, F = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(g, p, T) {
    var A, E = {}, b = null, D = null;
    T !== void 0 && (b = "" + T), p.key !== void 0 && (b = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (A in p) C.call(p, A) && !x.hasOwnProperty(A) && (E[A] = p[A]);
    if (g && g.defaultProps) for (A in p = g.defaultProps, p) E[A] === void 0 && (E[A] = p[A]);
    return { $$typeof: y, type: g, key: b, ref: D, props: E, _owner: F.current };
  }
  return W.Fragment = j, W.jsx = O, W.jsxs = O, W;
}
var X = {};
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
    var k = Je, y = Symbol.for("react.element"), j = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), g = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), L = Symbol.iterator, q = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[q];
      return typeof r == "function" ? r : null;
    }
    var _ = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          n[t - 1] = arguments[t];
        Z("error", e, n);
      }
    }
    function Z(e, r, n) {
      {
        var t = _.ReactDebugCurrentFrame, l = t.getStackAddendum();
        l !== "" && (r += "%s", n = n.concat([l]));
        var u = n.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ee = !1, a = !1, s = !1, c = !1, Y = !1, w;
    w = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === x || Y || e === F || e === T || e === A || c || e === D || ee || a || s || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === E || e.$$typeof === O || e.$$typeof === g || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === w || e.getModuleId !== void 0));
    }
    function Ve(e, r, n) {
      var t = e.displayName;
      if (t)
        return t;
      var l = r.displayName || r.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case j:
          return "Portal";
        case x:
          return "Profiler";
        case F:
          return "StrictMode";
        case T:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ce(r) + ".Consumer";
          case O:
            var n = e;
            return ce(n._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case E:
            var t = e.displayName || null;
            return t !== null ? t : P(e.type) || "Memo";
          case b: {
            var l = e, u = l._payload, i = l._init;
            try {
              return P(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, U = 0, ue, fe, de, ve, pe, Ae, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Me() {
      {
        if (U === 0) {
          ue = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, Ae = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        U++;
      }
    }
    function We() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: ue
            }),
            info: B({}, e, {
              value: fe
            }),
            warn: B({}, e, {
              value: de
            }),
            error: B({}, e, {
              value: ve
            }),
            group: B({}, e, {
              value: pe
            }),
            groupCollapsed: B({}, e, {
              value: Ae
            }),
            groupEnd: B({}, e, {
              value: he
            })
          });
        }
        U < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = _.ReactCurrentDispatcher, ne;
    function z(e, r, n) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (l) {
            var t = l.stack.trim().match(/\n( *(at )?)/);
            ne = t && t[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, Q;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Xe();
    }
    function me(e, r) {
      if (!e || ae)
        return "";
      {
        var n = Q.get(e);
        if (n !== void 0)
          return n;
      }
      var t;
      ae = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = re.current, re.current = null, Me();
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
            } catch (R) {
              t = R;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (R) {
              t = R;
            }
            e.call(i.prototype);
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
          for (var o = R.stack.split(`
`), m = t.stack.split(`
`), d = o.length - 1, v = m.length - 1; d >= 1 && v >= 0 && o[d] !== m[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (o[d] !== m[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || o[d] !== m[v]) {
                    var S = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, S), S;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ae = !1, re.current = u, We(), Error.prepareStackTrace = l;
      }
      var J = e ? e.displayName || e.name : "", N = J ? z(J) : "";
      return typeof e == "function" && Q.set(e, N), N;
    }
    function Le(e, r, n) {
      return me(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, ze(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case T:
          return z("Suspense");
        case A:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Le(e.render);
          case E:
            return H(e.type, r, n);
          case b: {
            var t = e, l = t._payload, u = t._init;
            try {
              return H(u(l), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Re = {}, Ee = _.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Qe(e, r, n, t, l) {
      {
        var u = Function.call.bind(V);
        for (var i in e)
          if (u(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((t || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              o = e[i](r, i, t, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (G(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", n, i, typeof o), G(null)), o instanceof Error && !(o.message in Re) && (Re[o.message] = !0, G(l), h("Failed %s type: %s", n, o.message), G(null));
          }
      }
    }
    var He = Array.isArray;
    function te(e) {
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
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), be(e);
    }
    var Ce = _.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, xe;
    function $e(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (V.call(e, "key")) {
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
          Se || (Se = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          xe || (xe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, n, t, l, u, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
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
        var u, i = {}, o = null, m = null;
        n !== void 0 && (ye(n), o = "" + n), Ze(r) && (ye(r.key), o = "" + r.key), $e(r) && (m = r.ref, er(r, l));
        for (u in r)
          V.call(r, u) && !qe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            i[u] === void 0 && (i[u] = d[u]);
        }
        if (o || m) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, v), m && nr(i, v);
        }
        return ar(e, o, m, l, t, Ce.current, i);
      }
    }
    var oe = _.ReactCurrentOwner, je = _.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function we() {
      {
        if (oe.current) {
          var e = P(oe.current.type);
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
    var Te = {};
    function ir(e) {
      {
        var r = we();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ir(r);
        if (Te[n])
          return;
        Te[n] = !0;
        var t = "";
        e && e._owner && e._owner !== oe.current && (t = " It was passed a child from " + P(e._owner.type) + "."), I(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, t), I(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var n = 0; n < e.length; n++) {
            var t = e[n];
            se(t) && Oe(t, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = $(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), i; !(i = u.next()).done; )
              se(i.value) && Oe(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          n = r.propTypes;
        else
          return;
        if (n) {
          var t = P(r);
          Qe(n, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var l = P(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var t = r[n];
          if (t !== "children" && t !== "key") {
            I(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Pe = {};
    function ke(e, r, n, t, l, u) {
      {
        var i = Ue(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = or();
          m ? o += m : o += we();
          var d;
          e === null ? d = "null" : te(e) ? d = "array" : e !== void 0 && e.$$typeof === y ? (d = "<" + (P(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var v = tr(e, r, n, l, u);
        if (v == null)
          return v;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (t)
              if (te(S)) {
                for (var J = 0; J < S.length; J++)
                  _e(S[J], e);
                Object.freeze && Object.freeze(S);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(S, e);
        }
        if (V.call(r, "key")) {
          var N = P(e), R = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), le = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[N + le]) {
            var vr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, N, vr, N), Pe[N + le] = !0;
          }
        }
        return e === C ? lr(v) : sr(v), v;
      }
    }
    function cr(e, r, n) {
      return ke(e, r, n, !0);
    }
    function ur(e, r, n) {
      return ke(e, r, n, !1);
    }
    var fr = ur, dr = cr;
    X.Fragment = C, X.jsx = fr, X.jsxs = dr;
  }()), X;
}
var Ne;
function gr() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? K.exports = Ar() : K.exports = hr()), K.exports;
}
var f = gr();
const mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgB7Y/BDcMgDEU/TNCVGKTtCE0mwExAs0LTjlGxWQi+RZGcmFMufpIlJMx7AjAM4zry5z9Mc4maPR7p3stPPSpAR5HpV6JzPqP6m2wRGB/h3QJJirC8LqA2aXwGkjwOJ+S5UFuKbeh1D6lHrgrsI/xnrVwd2Eb4rJV3w5H8LQMMw+hiBeyjRYOLAB1MAAAAAElFTkSuQmCC", Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACRwAAAkcB0xsw9QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIbSURBVHic5ZtNTgJBEEYfngUTXZK4caNXERPxfmqI3sME5Qz+EYwux8WkEqIwdM30T1X7Jazo6a73gKa7YaDNJfAErIB74Ij6cgjMgQ/gGZgBI4Ap0Px6fALnRcpMkwnwyl/Oa4DHLU80tO+G0wLFxs4J8M52xiVsN1OLhC74BlgD3HQ08CxhH3xDO98xDmjoTUII/Ao4lgt2TRIeJ8ZQlrO+F1qW0Bte24FFCYPhtR1ZkhANXtuhBQnR4bUdl5SQDF47QAkJyeG1A+WUkA1eO2AOCdnhtQOnlFAMXltACgnF4bWFxJRgBl5bUAwJ5uC1hQ2RYBZeW2AfCebhJSkkuIGXxJTgDl4SQ4JbeMkQCe7hJX0kVAMv0UioDl4SAvZFezpbHbwkREK18JK+EqqAl2glVAUvmdD+NL0P/puM8Ae5BlJmVLqA2OnzEehaMbrKkEnQvYQYX4NuJcRcCLmToFneToCXgLZuJPRZ21cjYcjGxr2EGLs6txJibmndSUixn3cjIeVhhnkJOU5yzErIeYxlTkKJMzwzEkoeYBaXYOH0tpgEC/CbtWSVYAl+s6YsEizCb9aWVIJleEkyCR7gJdEleIKXRJPgEV4yWIJneElvCTXAS9QSar1p6o39TMcAtwENPcFLQiQ8QP03TnZJWMP/uHV2l4QlwMWWJ7xMeKHZNTHOpMEUWNC+6nPqvH1+DNzR/kdhAVwBox8H7DcRrNVqlAAAAABJRU5ErkJggg==", Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOzSURBVHic7dpPaB5FHMbxj29TKakp1WAohXoI1npRPImgovYS9CTYiyg9aC9CsdCDRWhzE+nJHho8qKjnoigFb4oWhSKoCAVpKzZQ0Bo0Fg3poW3iYXadeUP+vH92532L+4VlJuR953nm987Ozv5maGhoaGhoaGj4n3Jbze1P4kk8jN3YhVG0sIhfcRHf4yucq9lPFsZwSOjUcpfXBUxjIrvrCtiCo5i3euf+xo/4BmeEAP25xmcXcQLbs/agDx4ThnLaiWs4hRdxzzrfncBzeA9XV7TxO/bV5roijuC6aHoex3BXD22N4iAuaw/ESYxUYbZKWpjRbvRD3F1B21txHDeStk8LARoa0s4v4oUaNPZiLtH5DJtr0OmaI6Kpv4Q5oC7uw6VE790atTricfGeXyz+rptJ/CYGYX8GzVXZon22r2PYr8WjYuCvYkdG7f84qn3Cy82xRP+D3OJj4iJnXjWzfbfcjvOFhxu4N6f4ITH60zmFV/B84mMmp3C5tr+mt0VOVWzCbOHlD2FU1M6kGPVTOQQ34A3Rz1Q/DbU6/NxTSf3TfgQr4nRSfyKH4NtixNd7scnFCBYEP5/nEPxCfKUdFso56XI/jXR6C+wsytl+xCrmUlHu1Edmq9MAjBXlMI2A0ktLH2+JnQagjPByr0I1cDOp95wr6DQAC0V5R69CNbCtKJdFf13TaQCuFOWuXoVqoPQyp300dEWnAbhYlOOGI2Pbwv1F/ed+G+qEH5J6jvf/jXhAzBh/209DnQbgy6T+TD+CFfF0Uj+TS/SCmIwYdHLynDj5ZfMyLS6HD+YSXYWpxMf7OYUnhBxgufzcmlO8oIWzhYclPJTbwAkx+sdzi+NAov/RAPRtF7arypTU3ozae/CPmI3enVG7jX3irzAn5O3rZhw/JbqHM2iuy0nRzKx6k5PjwrO+1PtE/ecaNmREyMqUpq4Iefuq2aP9l1/GqzXo9MSosFdXGrsu5O2rSFK2hAmvvOfT62bxv6Fgs7BXlxo8L6SuN/XY5pT4qEuH/SGh80MXBMJe3crDDbNC9vYR67+vt/AgXhdXeOmu82Hxnj9giIOwQ9iuSvf0y2sB3+Fj4STIO0J6/aywu7zy80vCc361R91QB4HwRJix9vmf9a4FYXm70Qpv6INAmAyn8KaQVV557KV8enyNt/Cs7l5sbokgrMY23FlRW7dsEKrkJTEIS3hlsHYGQxMEvKz9dhjYMZpBkgbhlwF7GRj7hc6/NmgjDQ0NDQ0NDQ1Dzb8hO0M7jZ69bgAAAABJRU5ErkJggg==", br = ({
  options: k = [],
  selectedOption: y,
  setSelectedOption: j = () => {
  },
  multi: C = !1
}) => {
  const [F, x] = M([]), [O, g] = M([]), [p, T] = M(""), [A, E] = M(!1), b = Fe(null), D = Fe(null), [L, q] = M(!1);
  De(() => {
    g(
      () => k?.map((a) => ({ ...a, isSelected: !1 }))
    ), x(
      () => k?.map((a) => ({ ...a, isSelected: !1 }))
    );
  }, []);
  const $ = () => {
    if (E(!A), b.current) {
      const a = b.current.getBoundingClientRect(), s = 200, c = window.innerHeight - a.bottom;
      q(c < s);
    }
  };
  De(() => {
    const a = (s) => {
      b?.current && !b?.current?.contains(s.target) && !D?.current?.contains(s.target) && E(!1);
    };
    return document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, []);
  const _ = (a) => {
    if (g(
      (s) => s?.map((c) => ({
        ...c,
        isSelected: c?.value === a?.value ? !a?.isSelected : c?.isSelected
      }))
    ), x(
      (s) => s?.map((c) => ({
        ...c,
        isSelected: c?.value === a?.value ? !a?.isSelected : c?.isSelected
      }))
    ), y?.some((s) => s?.value === a?.value))
      j(
        (s) => s.filter((c) => c?.value !== a?.value)
      );
    else {
      let { isSelected: s, ...c } = a;
      j((Y) => [...Y, c]);
    }
  }, h = (a) => {
    E(!1), g(
      (Y) => Y?.map((w) => ({
        ...w,
        isSelected: w?.value === a?.value ? !a?.isSelected : w?.isSelected
      }))
    ), x(
      (Y) => Y?.map((w) => ({
        ...w,
        isSelected: w?.value === a?.value ? !a?.isSelected : w?.isSelected
      }))
    );
    let { isSelected: s, ...c } = a;
    j([c]);
  }, Z = (a) => {
    a.target.checked ? (g(
      (s) => s?.map((c) => ({ ...c, isSelected: !0 }))
    ), x(
      (s) => s?.map((c) => ({ ...c, isSelected: !0 }))
    ), j(k)) : (g(
      (s) => s?.map((c) => ({ ...c, isSelected: !1 }))
    ), x(
      (s) => s?.map((c) => ({ ...c, isSelected: !1 }))
    ), j([]));
  }, ee = (a) => {
    T(a.target.value);
    let s = F?.filter((c) => c?.name?.toLowerCase()?.includes(a.target.value?.toLowerCase()));
    g(s);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "main-select-container", "data-as": "options", children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: b,
        className: "selected-items",
        onClick: $,
        children: y?.length > 0 ? /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs("span", { className: "ellipsis-text", children: [
          y?.slice(0, 4).map((a) => a?.name).join(", "),
          y?.length > 4 && /* @__PURE__ */ f.jsx("span", { className: "more-span", children: ", Rest.." })
        ] }) }) : /* @__PURE__ */ f.jsx("span", { children: "Select" })
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "right-tools", children: [
      y?.length > 0 && /* @__PURE__ */ f.jsx("div", { className: "close-div", children: /* @__PURE__ */ f.jsx(
        "img",
        {
          title: "Clear",
          onClick: () => {
            j([]), g(
              (a) => a?.map((s) => ({ ...s, isSelected: !1 }))
            ), x(
              (a) => a?.map((s) => ({ ...s, isSelected: !1 }))
            );
          },
          className: "close zoom-anim",
          src: Ie,
          alt: "close"
        }
      ) }),
      /* @__PURE__ */ f.jsx(
        "img",
        {
          className: `down-arrow zoom-anim ${A && "up-arrow"}`,
          src: mr,
          alt: "arrow"
        }
      )
    ] }),
    A && /* @__PURE__ */ f.jsxs(
      "div",
      {
        className: `option-container ${L ? "drop-up" : "drop-down"}`,
        ref: D,
        id: "options",
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "search-container", children: [
            C && /* @__PURE__ */ f.jsx("div", { className: "select-all", children: /* @__PURE__ */ f.jsxs("label", { className: "select-all-label", htmlFor: "selectAll", children: [
              /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "selectAll",
                  checked: O?.every((a) => a?.isSelected),
                  onChange: Z
                }
              ),
              /* @__PURE__ */ f.jsx("span", { children: "Select all" })
            ] }) }),
            /* @__PURE__ */ f.jsxs("div", { className: "search-wrapper", children: [
              /* @__PURE__ */ f.jsx(
                "input",
                {
                  className: "search-input ",
                  type: "text",
                  placeholder: "Search",
                  value: p,
                  onChange: ee
                }
              ),
              /* @__PURE__ */ f.jsx("img", { className: "search-icon", src: Rr, alt: "search" }),
              p && /* @__PURE__ */ f.jsx(
                "img",
                {
                  onClick: () => {
                    g(F), T("");
                  },
                  className: "close-img zoom-anim",
                  src: Ie,
                  alt: "close"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ f.jsx("ul", { children: O?.map((a, s) => /* @__PURE__ */ f.jsx(
            "li",
            {
              className: !C && y[0]?.name === a?.name ? "active" : "",
              onClick: () => C ? null : h(a),
              children: /* @__PURE__ */ f.jsxs("label", { htmlFor: a?.name, children: [
                C && /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: a?.isSelected,
                    value: a?.value,
                    onChange: () => C ? _(a) : null,
                    id: a?.name
                  }
                ),
                /* @__PURE__ */ f.jsx("span", { children: a?.name })
              ] })
            },
            s
          )) })
        ]
      }
    )
  ] });
};
export {
  br as default
};
