/*!For license information please see 31.84b14ddd.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [31],
  {
    1002: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(23),
        a = n(0),
        o = n(1017),
        i = n(1018);
      function c(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var l = c(r),
        u = c(a),
        s = c(o),
        f = c(i);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? g(e)
          : t;
      }
      function w(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var a = b(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return x(this, n);
        };
      }
      function E(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              a,
              o = [],
              i = !0,
              c = !1;
            try {
              for (
                n = n.call(e);
                !(i = (r = n.next()).done) &&
                (o.push(r.value), !t || o.length !== t);
                i = !0
              );
            } catch (l) {
              (c = !0), (a = l);
            } finally {
              try {
                i || null == n.return || n.return();
              } finally {
                if (c) throw a;
              }
            }
            return o;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return O(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var j = function (e, t) {
          var n = t.decimal,
            r = t.decimals,
            a = t.duration,
            o = t.easingFn,
            i = t.end,
            c = t.formattingFn,
            l = t.prefix,
            u = t.separator,
            s = t.start,
            d = t.suffix,
            p = t.useEasing;
          return new f.default(e, s, i, r, a, {
            decimal: n,
            easingFn: o,
            formattingFn: c,
            separator: u,
            prefix: l,
            suffix: d,
            useEasing: p,
            useGrouping: !!u,
          });
        },
        N = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && y(e, t);
          })(o, e);
          var t,
            n,
            r,
            a = w(o);
          function o() {
            var e;
            m(this, o);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              h(
                g((e = a.call.apply(a, [this].concat(n)))),
                "checkProps",
                function (t) {
                  var n = e.props,
                    r = n.start,
                    a = n.suffix,
                    o = n.prefix,
                    i = n.redraw,
                    c = n.duration,
                    l = n.separator,
                    u = n.decimals,
                    s = n.decimal,
                    f = n.className;
                  return (
                    c !== t.duration ||
                    r !== t.start ||
                    a !== t.suffix ||
                    o !== t.prefix ||
                    l !== t.separator ||
                    u !== t.decimals ||
                    s !== t.decimal ||
                    f !== t.className ||
                    i
                  );
                }
              ),
              h(g(e), "createInstance", function () {
                return (
                  "function" === typeof e.props.children &&
                    s.default(
                      e.containerRef.current &&
                        (e.containerRef.current instanceof HTMLElement ||
                          e.containerRef.current instanceof SVGTextElement ||
                          e.containerRef.current instanceof SVGTSpanElement),
                      'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'
                    ),
                  j(e.containerRef.current, e.props)
                );
              }),
              h(g(e), "pauseResume", function () {
                var t = g(e),
                  n = t.reset,
                  r = t.restart,
                  a = t.update,
                  o = e.props.onPauseResume;
                e.instance.pauseResume(), o({ reset: n, start: r, update: a });
              }),
              h(g(e), "reset", function () {
                var t = g(e),
                  n = t.pauseResume,
                  r = t.restart,
                  a = t.update,
                  o = e.props.onReset;
                e.instance.reset(), o({ pauseResume: n, start: r, update: a });
              }),
              h(g(e), "restart", function () {
                e.reset(), e.start();
              }),
              h(g(e), "start", function () {
                var t = g(e),
                  n = t.pauseResume,
                  r = t.reset,
                  a = t.restart,
                  o = t.update,
                  i = e.props,
                  c = i.delay,
                  l = i.onEnd,
                  u = i.onStart,
                  s = function () {
                    return e.instance.start(function () {
                      return l({
                        pauseResume: n,
                        reset: r,
                        start: a,
                        update: o,
                      });
                    });
                  };
                c > 0 ? (e.timeoutId = setTimeout(s, 1e3 * c)) : s(),
                  u({ pauseResume: n, reset: r, update: o });
              }),
              h(g(e), "update", function (t) {
                var n = g(e),
                  r = n.pauseResume,
                  a = n.reset,
                  o = n.restart,
                  i = e.props.onUpdate;
                e.instance.update(t), i({ pauseResume: r, reset: a, start: o });
              }),
              h(g(e), "containerRef", u.default.createRef()),
              e
            );
          }
          return (
            (t = o),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.delay;
                  (this.instance = this.createInstance()),
                    ("function" === typeof t && 0 !== n) || this.start();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  var t = this.props.end;
                  return this.checkProps(e) || t !== e.end;
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    n = t.end,
                    r = t.preserveValue;
                  this.checkProps(e) &&
                    (this.instance.reset(),
                    (this.instance = this.createInstance()),
                    this.start()),
                    n !== e.end &&
                      (r || this.instance.reset(), this.instance.update(n));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.timeoutId && clearTimeout(this.timeoutId),
                    this.instance.reset();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    r = e.style,
                    a = this.containerRef,
                    o = this.pauseResume,
                    i = this.reset,
                    c = this.restart,
                    l = this.update;
                  return "function" === typeof t
                    ? t({
                        countUpRef: a,
                        pauseResume: o,
                        reset: i,
                        start: c,
                        update: l,
                      })
                    : u.default.createElement("span", {
                        className: n,
                        ref: a,
                        style: r,
                      });
                },
              },
            ]) && v(t.prototype, n),
            r && v(t, r),
            o
          );
        })(a.Component);
      h(N, "propTypes", {
        decimal: l.default.string,
        decimals: l.default.number,
        delay: l.default.number,
        easingFn: l.default.func,
        end: l.default.number.isRequired,
        formattingFn: l.default.func,
        onEnd: l.default.func,
        onStart: l.default.func,
        prefix: l.default.string,
        redraw: l.default.bool,
        separator: l.default.string,
        start: l.default.number,
        startOnMount: l.default.bool,
        suffix: l.default.string,
        style: l.default.object,
        useEasing: l.default.bool,
        preserveValue: l.default.bool,
      }),
        h(N, "defaultProps", {
          decimal: ".",
          decimals: 0,
          delay: null,
          duration: null,
          easingFn: null,
          formattingFn: null,
          onEnd: function () {},
          onPauseResume: function () {},
          onReset: function () {},
          onStart: function () {},
          onUpdate: function () {},
          prefix: "",
          redraw: !1,
          separator: "",
          start: 0,
          startOnMount: !0,
          suffix: "",
          style: void 0,
          useEasing: !0,
          preserveValue: !1,
        });
      var k = { innerHTML: null };
      (t.default = N),
        (t.useCountUp = function (e) {
          var t = p(p({}, N.defaultProps), e),
            n = t.start,
            r = t.formattingFn,
            o = E(a.useState("function" === typeof r ? r(n) : n), 2),
            i = o[0],
            c = o[1],
            l = a.useRef(null),
            u = a.useRef(null),
            s = function () {
              var e = l.current;
              if (null !== e) return e;
              var n = (function () {
                var e = j(k, t),
                  n = e.options.formattingFn;
                return (
                  (e.options.formattingFn = function () {
                    var e = n.apply(void 0, arguments);
                    c(e);
                  }),
                  e
                );
              })();
              return (l.current = n), n;
            },
            f = function () {
              var e = t.onReset;
              s().reset(), e({ pauseResume: m, start: d, update: v });
            },
            d = function e() {
              var n = t.onStart,
                r = t.onEnd;
              s().reset(),
                s().start(function () {
                  r({ pauseResume: m, reset: f, start: e, update: v });
                }),
                n({ pauseResume: m, reset: f, update: v });
            },
            m = function () {
              var e = t.onPauseResume;
              s().pauseResume(), e({ reset: f, start: d, update: v });
            },
            v = function (e) {
              var n = t.onUpdate;
              s().update(e), n({ pauseResume: m, reset: f, start: d });
            };
          return (
            a.useEffect(function () {
              var e = t.delay,
                n = t.onStart,
                r = t.onEnd;
              return (
                t.startOnMount &&
                  (u.current = setTimeout(function () {
                    n({ pauseResume: m, reset: f, update: v }),
                      s().start(function () {
                        clearTimeout(u.current),
                          r({ pauseResume: m, reset: f, start: d, update: v });
                      });
                  }, 1e3 * e)),
                function () {
                  clearTimeout(u.current), f();
                }
              );
            }, []),
            { countUp: i, start: d, pauseResume: m, reset: f, update: v }
          );
        });
    },
    1017: function (e, t, n) {
      "use strict";
      var r = function () {};
      e.exports = r;
    },
    1018: function (e, t, n) {
      var r, a;
      void 0 ===
        (a =
          "function" ===
          typeof (r = function (e, t, n) {
            return function (e, t, n, r, a, o) {
              function i(e) {
                return "number" == typeof e && !isNaN(e);
              }
              var c = this;
              if (
                ((c.version = function () {
                  return "1.9.3";
                }),
                (c.options = {
                  useEasing: !0,
                  useGrouping: !0,
                  separator: ",",
                  decimal: ".",
                  easingFn: function (e, t, n, r) {
                    return (
                      (n * (1 - Math.pow(2, (-10 * e) / r)) * 1024) / 1023 + t
                    );
                  },
                  formattingFn: function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i,
                      l = e < 0;
                    if (
                      ((e = Math.abs(e).toFixed(c.decimals)),
                      (n = (t = (e += "").split("."))[0]),
                      (r = t.length > 1 ? c.options.decimal + t[1] : ""),
                      c.options.useGrouping)
                    ) {
                      for (a = "", o = 0, i = n.length; o < i; ++o)
                        0 !== o && o % 3 === 0 && (a = c.options.separator + a),
                          (a = n[i - o - 1] + a);
                      n = a;
                    }
                    return (
                      c.options.numerals.length &&
                        ((n = n.replace(/[0-9]/g, function (e) {
                          return c.options.numerals[+e];
                        })),
                        (r = r.replace(/[0-9]/g, function (e) {
                          return c.options.numerals[+e];
                        }))),
                      (l ? "-" : "") +
                        c.options.prefix +
                        n +
                        r +
                        c.options.suffix
                    );
                  },
                  prefix: "",
                  suffix: "",
                  numerals: [],
                }),
                o && "object" == typeof o)
              )
                for (var l in c.options)
                  o.hasOwnProperty(l) && null !== o[l] && (c.options[l] = o[l]);
              "" === c.options.separator
                ? (c.options.useGrouping = !1)
                : (c.options.separator = "" + c.options.separator);
              for (
                var u = 0, s = ["webkit", "moz", "ms", "o"], f = 0;
                f < s.length && !window.requestAnimationFrame;
                ++f
              )
                (window.requestAnimationFrame =
                  window[s[f] + "RequestAnimationFrame"]),
                  (window.cancelAnimationFrame =
                    window[s[f] + "CancelAnimationFrame"] ||
                    window[s[f] + "CancelRequestAnimationFrame"]);
              window.requestAnimationFrame ||
                (window.requestAnimationFrame = function (e, t) {
                  var n = new Date().getTime(),
                    r = Math.max(0, 16 - (n - u)),
                    a = window.setTimeout(function () {
                      e(n + r);
                    }, r);
                  return (u = n + r), a;
                }),
                window.cancelAnimationFrame ||
                  (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e);
                  }),
                (c.initialize = function () {
                  return (
                    !!c.initialized ||
                    ((c.error = ""),
                    (c.d =
                      "string" == typeof e ? document.getElementById(e) : e),
                    c.d
                      ? ((c.startVal = Number(t)),
                        (c.endVal = Number(n)),
                        i(c.startVal) && i(c.endVal)
                          ? ((c.decimals = Math.max(0, r || 0)),
                            (c.dec = Math.pow(10, c.decimals)),
                            (c.duration = 1e3 * Number(a) || 2e3),
                            (c.countDown = c.startVal > c.endVal),
                            (c.frameVal = c.startVal),
                            (c.initialized = !0),
                            !0)
                          : ((c.error =
                              "[CountUp] startVal (" +
                              t +
                              ") or endVal (" +
                              n +
                              ") is not a number"),
                            !1))
                      : ((c.error = "[CountUp] target is null or undefined"),
                        !1))
                  );
                }),
                (c.printValue = function (e) {
                  var t = c.options.formattingFn(e);
                  "INPUT" === c.d.tagName
                    ? (this.d.value = t)
                    : "text" === c.d.tagName || "tspan" === c.d.tagName
                    ? (this.d.textContent = t)
                    : (this.d.innerHTML = t);
                }),
                (c.count = function (e) {
                  c.startTime || (c.startTime = e), (c.timestamp = e);
                  var t = e - c.startTime;
                  (c.remaining = c.duration - t),
                    c.options.useEasing
                      ? c.countDown
                        ? (c.frameVal =
                            c.startVal -
                            c.options.easingFn(
                              t,
                              0,
                              c.startVal - c.endVal,
                              c.duration
                            ))
                        : (c.frameVal = c.options.easingFn(
                            t,
                            c.startVal,
                            c.endVal - c.startVal,
                            c.duration
                          ))
                      : c.countDown
                      ? (c.frameVal =
                          c.startVal -
                          (c.startVal - c.endVal) * (t / c.duration))
                      : (c.frameVal =
                          c.startVal +
                          (c.endVal - c.startVal) * (t / c.duration)),
                    c.countDown
                      ? (c.frameVal =
                          c.frameVal < c.endVal ? c.endVal : c.frameVal)
                      : (c.frameVal =
                          c.frameVal > c.endVal ? c.endVal : c.frameVal),
                    (c.frameVal = Math.round(c.frameVal * c.dec) / c.dec),
                    c.printValue(c.frameVal),
                    t < c.duration
                      ? (c.rAF = requestAnimationFrame(c.count))
                      : c.callback && c.callback();
                }),
                (c.start = function (e) {
                  c.initialize() &&
                    ((c.callback = e),
                    (c.rAF = requestAnimationFrame(c.count)));
                }),
                (c.pauseResume = function () {
                  c.paused
                    ? ((c.paused = !1),
                      delete c.startTime,
                      (c.duration = c.remaining),
                      (c.startVal = c.frameVal),
                      requestAnimationFrame(c.count))
                    : ((c.paused = !0), cancelAnimationFrame(c.rAF));
                }),
                (c.reset = function () {
                  (c.paused = !1),
                    delete c.startTime,
                    (c.initialized = !1),
                    c.initialize() &&
                      (cancelAnimationFrame(c.rAF), c.printValue(c.startVal));
                }),
                (c.update = function (e) {
                  if (c.initialize()) {
                    if (!i((e = Number(e))))
                      return void (c.error =
                        "[CountUp] update() - new endVal is not a number: " +
                        e);
                    (c.error = ""),
                      e !== c.frameVal &&
                        (cancelAnimationFrame(c.rAF),
                        (c.paused = !1),
                        delete c.startTime,
                        (c.startVal = c.frameVal),
                        (c.endVal = e),
                        (c.countDown = c.startVal > c.endVal),
                        (c.rAF = requestAnimationFrame(c.count)));
                  }
                }),
                c.initialize() && c.printValue(c.startVal);
            };
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = a);
    },
    2142: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(77),
        a = n(43),
        o = n(0),
        i = n.n(o),
        c = n(37),
        l = n(916),
        u = n.n(l),
        s = n(2107),
        f = n(946),
        d = n(934),
        p = n(931),
        m = n(923),
        v = n.n(m),
        h = n(155),
        b = n(69),
        y = n(11),
        g = n(26),
        x = n(16),
        w = n.n(x),
        E = n(455),
        O = n(280),
        j = n(939),
        N = n(21),
        k = {
          asset: [
            { name: N.q, price: "0.00", balance: "0.00", value: "0.00" },
            { name: N.b, price: "0.00", balance: "0.00", value: "0.00" },
            { name: N.i, price: "0.00", balance: "0.00", value: "0.00" },
            { name: N.e, price: "0.00", balance: "0.00", value: "0.00" },
          ],
          liquidity: [
            { name: N.s, price: "0.00", balance: "0.00", value: "0.00" },
            { name: N.c, price: "0.00", balance: "0.00", value: "0.00" },
            { name: N.f, price: "0.00", balance: "0.00", value: "0.00" },
            { name: N.a, price: "0.00", balance: "0.00", value: "0.00" },
          ],
        },
        S = { backed: "0.00", sellable: "0.00", surplus: "0.00" },
        R = { usdex: "0.00", dexShare: "0.00", dexIra: "0.00" };
      function T() {
        T = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (k) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, r) {
          var a = t && t.prototype instanceof f ? t : f,
            o = Object.create(a.prototype),
            i = new O(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return N();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = x(i, n);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var l = u(e, t, n);
                  if ("normal" === l.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      l.arg === s)
                    )
                      continue;
                    return { value: l.arg, done: n.done };
                  }
                  "throw" === l.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
                }
              };
            })(e, n, i)),
            o
          );
        }
        function u(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = l;
        var s = {};
        function f() {}
        function d() {}
        function p() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          h = v && v(v(j([])));
        h && h !== t && n.call(h, a) && (m = h);
        var b = (p.prototype = f.prototype = Object.create(m));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function g(e, t) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new t(function (r, i) {
                !(function r(a, o, i, c) {
                  var l = u(e[a], e, o);
                  if ("throw" !== l.type) {
                    var s = l.arg,
                      f = s.value;
                    return f && "object" == typeof f && n.call(f, "__await")
                      ? t.resolve(f.__await).then(
                          function (e) {
                            r("next", e, i, c);
                          },
                          function (e) {
                            r("throw", e, i, c);
                          }
                        )
                      : t.resolve(f).then(
                          function (e) {
                            (s.value = e), i(s);
                          },
                          function (e) {
                            return r("throw", e, i, c);
                          }
                        );
                  }
                  c(l.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function x(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return s;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), s
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                s)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              s);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          c(b, "constructor", p),
          c(p, "constructor", d),
          (d.displayName = c(p, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), c(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(g.prototype),
          c(g.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new g(l(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(b),
          c(b, i, "Generator"),
          c(b, a, function () {
            return this;
          }),
          c(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), s)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                s
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), s;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          e
        );
      }
      var F,
        V = "0xa5f3d6a33c5a5bcdff8f81c88ca00f457b699e0f",
        A = function () {
          var e = Object(o.useState)(k),
            t = Object(g.a)(e, 2),
            n = t[0],
            r = t[1],
            a = Object(o.useState)("0.00"),
            i = Object(g.a)(a, 2),
            c = i[0],
            l = i[1],
            u = Object(o.useState)(S),
            s = Object(g.a)(u, 2),
            f = s[0],
            d = s[1],
            p = Object(o.useState)(R),
            m = Object(g.a)(p, 2),
            v = m[0],
            x = m[1],
            F = Object(j.a)(),
            A = Object(O.a)(),
            P = null === A || void 0 === A ? void 0 : A.isUnlocked;
          return (
            Object(o.useEffect)(
              function () {
                P &&
                  !Object(E.isEmpty)(F) &&
                  Object(y.a)(
                    T().mark(function e() {
                      var t, a, o, i, c, u, s, f, p;
                      return T().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = n.asset.map(function (e) {
                                  return e.name === N.i
                                    ? {
                                        contract: A.contracts.indexpool,
                                        symbol: N.i,
                                        decimal: 18,
                                        address: A.contracts.indexpool.address,
                                      }
                                    : A.externalTokens[e.name] || A[e.name];
                                })),
                                (a = n.liquidity.map(function (e) {
                                  return A.externalTokens[e.name];
                                })),
                                (e.next = 4),
                                Promise.all(
                                  t.map(
                                    (function () {
                                      var e = Object(y.a)(
                                        T().mark(function e(t) {
                                          var n, r, a, o, i;
                                          return T().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    A.getBnbUsdPrice()
                                                  );
                                                case 2:
                                                  if (
                                                    ((n = e.sent),
                                                    t.symbol !== N.t)
                                                  ) {
                                                    e.next = 9;
                                                    break;
                                                  }
                                                  return (
                                                    (e.next = 6),
                                                    A.provider.getBalance(V)
                                                  );
                                                case 6:
                                                  (e.t0 = e.sent),
                                                    (e.next = 12);
                                                  break;
                                                case 9:
                                                  return (
                                                    (e.next = 11),
                                                    t.contract.balanceOf(V)
                                                  );
                                                case 11:
                                                  e.t0 = e.sent;
                                                case 12:
                                                  if (
                                                    ((r = e.t0),
                                                    t.symbol !== N.t)
                                                  ) {
                                                    e.next = 19;
                                                    break;
                                                  }
                                                  return (
                                                    (e.next = 16),
                                                    t.contract.balanceOf(V)
                                                  );
                                                case 16:
                                                  (e.t1 = e.sent),
                                                    (e.next = 20);
                                                  break;
                                                case 19:
                                                  e.t1 = 0;
                                                case 20:
                                                  if (
                                                    ((a = e.t1),
                                                    t.symbol !== N.t)
                                                  ) {
                                                    e.next = 25;
                                                    break;
                                                  }
                                                  (e.t2 = n), (e.next = 28);
                                                  break;
                                                case 25:
                                                  return (
                                                    (e.next = 27),
                                                    A.getTokenPriceFromPancakeswap(
                                                      t
                                                    )
                                                  );
                                                case 27:
                                                  e.t2 = e.sent;
                                                case 28:
                                                  return (
                                                    (o = e.t2),
                                                    (i =
                                                      t.symbol === N.t
                                                        ? Number(n).toFixed(4)
                                                        : t.symbol === N.i
                                                        ? F.etfTokenPrice.toFixed(
                                                            4
                                                          )
                                                        : (
                                                            Number(o) *
                                                            Number(n)
                                                          ).toFixed(4)),
                                                    e.abrupt("return", {
                                                      name:
                                                        t.symbol === N.t
                                                          ? N.b
                                                          : t.symbol,
                                                      balance: new w.a(
                                                        r.toString()
                                                      )
                                                        .plus(
                                                          new w.a(a.toString())
                                                        )
                                                        .div(
                                                          Math.pow(
                                                            10,
                                                            t.decimal
                                                          )
                                                        )
                                                        .toFixed(2),
                                                      price: i,
                                                      value: new w.a(
                                                        r.toString()
                                                      )
                                                        .plus(
                                                          new w.a(a.toString())
                                                        )
                                                        .times(new w.a(i))
                                                        .div(
                                                          Math.pow(
                                                            10,
                                                            t.decimal
                                                          )
                                                        )
                                                        .toFixed(2),
                                                    })
                                                  );
                                                case 31:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 4:
                              return (
                                (o = e.sent),
                                (e.next = 7),
                                Promise.all(
                                  a.map(
                                    (function () {
                                      var e = Object(y.a)(
                                        T().mark(function e(t) {
                                          var n, r, a;
                                          return T().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    t.contract
                                                      .balanceOf(V)
                                                      .then(function (e) {
                                                        return new w.a(
                                                          e.toString()
                                                        );
                                                      })
                                                  );
                                                case 2:
                                                  return (
                                                    (n = e.sent),
                                                    (e.next = 5),
                                                    t.contract
                                                      .balanceOf(
                                                        "0xc765bddb93b0d1c1a88282ba0fa6b2d00e3e0c83"
                                                      )
                                                      .then(function (e) {
                                                        return new w.a(
                                                          e.toString()
                                                        );
                                                      })
                                                  );
                                                case 5:
                                                  return (
                                                    (r = e.sent),
                                                    (e.next = 8),
                                                    A.getDepositTokenPriceInDollars(
                                                      t.symbol,
                                                      t
                                                    )
                                                  );
                                                case 8:
                                                  return (
                                                    (a = e.sent),
                                                    e.abrupt("return", {
                                                      name: t.symbol,
                                                      balance: n
                                                        .plus(r)
                                                        .div(
                                                          Math.pow(
                                                            10,
                                                            t.decimal
                                                          )
                                                        )
                                                        .toFixed(2),
                                                      price:
                                                        Number(a).toFixed(2),
                                                      value: n
                                                        .plus(r)
                                                        .times(new w.a(a))
                                                        .div(
                                                          Math.pow(
                                                            10,
                                                            t.decimal
                                                          )
                                                        )
                                                        .toFixed(2),
                                                    })
                                                  );
                                                case 10:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                )
                              );
                            case 7:
                              return (
                                (i = e.sent),
                                (c = []
                                  .concat(Object(b.a)(o), Object(b.a)(i))
                                  .reduce(function (e, t) {
                                    return e + Number(t.value);
                                  }, 0)),
                                (e.next = 11),
                                A.getSellableUSDEX(V)
                              );
                            case 11:
                              return (
                                (u = e.sent),
                                (e.next = 14),
                                A.getOwnedUSDEXLp(V)
                              );
                            case 14:
                              return (
                                (s = e.sent),
                                (e.next = 17),
                                A.getOwnedDexSHARELp(V)
                              );
                            case 17:
                              return (
                                (f = e.sent),
                                (e.next = 20),
                                A.getOwnedDexIraLp(
                                  V,
                                  "0xc765bddb93b0d1c1a88282ba0fa6b2d00e3e0c83"
                                )
                              );
                            case 20:
                              (p = e.sent),
                                l(c.toFixed(2)),
                                d({
                                  backed: o.reduce(function (e, t) {
                                    return e + Number(t.value);
                                  }, 0),
                                  sellable: Number(u),
                                  surplus:
                                    o.reduce(function (e, t) {
                                      return e + Number(t.value);
                                    }, 0) - Number(u),
                                }),
                                x({
                                  usdex: s.toFixed(2),
                                  dexShare: f.toFixed(2),
                                  dexIra: p.toFixed(2),
                                }),
                                r(function (e) {
                                  return Object(h.a)(
                                    Object(h.a)({}, e),
                                    {},
                                    {
                                      asset: o.filter(function (t) {
                                        return (
                                          e.asset.some(function (e) {
                                            return e.name === t.name;
                                          }) && t
                                        );
                                      }),
                                      liquidity: i.filter(function (t) {
                                        return (
                                          e.liquidity.some(function (e) {
                                            return e.name === t.name;
                                          }) && t
                                        );
                                      }),
                                    }
                                  );
                                });
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
              },
              [P, F]
            ),
            { state: n, totalHoldings: c, assetStat: f, liquidityStat: v }
          );
        },
        P = n(2106),
        L = Object(P.a)(function () {
          return {
            container: {
              paddingTop: "70px",
              position: "relative",
              zIndex: 100,
            },
            headerColor: {
              background: "#2989c3",
              position: "absolute",
              height: "250px",
              left: 0,
              right: 0,
              "@media (max-width: 380px)": { height: "270px" },
            },
            text: { padding: "20px 0 20px", color: "#fff", fontSize: 16 },
            title: {
              fontSize: "32px",
              fontWeight: "600",
              color: "#ffffff",
              "& span": { color: "#8b67d3" },
            },
            grid: {
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              columnGap: "20px",
              rowGap: "20px",
              "@media (max-width: 990px)": { gridTemplateColumns: "1fr" },
            },
            smallCard: {
              background: "#8b67d3",
              borderRadius: "20px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            },
            bigCard: { background: "#ffffff", borderRadius: "20px" },
            tableHeader: {
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              padding: "20px 30px",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "#8b67d3",
              borderRadius: "20px 20px 0 0",
              fontSize: 22,
              "@media (max-width: 700px)": { gridTemplateColumns: "2fr 1fr " },
            },
            tableRow: {
              display: "grid",
              padding: "20px 30px",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              backgroundColor: "#e5f1fd",
              "&:last-child": { borderRadius: "0 0 20px 20px" },
              "@media (max-width: 700px)": { gridTemplateColumns: "2fr 1fr " },
            },
            tableColor: { backgroundColor: "#b5d8ee" },
            row: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            },
            cardTitle: {
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 600,
              borderBottom: "2px dotted #ffffff",
              paddingBottom: "20px",
            },
            block: {
              marginTop: "20px",
              color: "#ffffff",
              fontSize: "16px",
              "& span": { fontWeight: 600 },
            },
            wrap: {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "60%",
            },
          };
        }),
        C = n(1002),
        D = n.n(C),
        I = Object(c.c)(
          F ||
            (F = Object(a.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          v.a
        );
      t.default = function () {
        var e = L(),
          t = Object(s.a)("(max-width:700px)"),
          n = A(),
          a = n.state,
          o = n.totalHoldings,
          c = n.assetStat,
          l = n.liquidityStat;
        return i.a.createElement(
          d.a,
          null,
          i.a.createElement(I, null),
          i.a.createElement("div", { className: e.headerColor }),
          i.a.createElement(
            "div",
            { className: e.container },
            i.a.createElement(
              "div",
              { className: e.title },
              i.a.createElement("span", null, "dexDAO"),
              " TREASURY"
            ),
            i.a.createElement(
              "div",
              { className: e.text },
              "DEX Finance is a decentralized autonomous organization (DAO) providing an ecosystem of financial products governed by the community. Our goal is to build a policy-controlled currency system, in which the behavior of our tokens is controlled at a high level by the DAO."
            ),
            i.a.createElement(
              "div",
              { className: e.title },
              "TOTAL HOLDINGS: ",
              i.a.createElement(D.a, { end: o, separator: ",", prefix: "$" })
            )
          ),
          i.a.createElement(
            "div",
            { className: e.grid },
            i.a.createElement(
              "div",
              { className: e.smallCard },
              i.a.createElement(
                "div",
                { className: e.cardTitle },
                "ASSET TOTALS"
              ),
              i.a.createElement(
                "div",
                { className: e.wrap },
                i.a.createElement(
                  "div",
                  { className: e.block },
                  i.a.createElement("div", null, "Treasury"),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
                    i.a.createElement("div", null, "Backed Assets"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        "span",
                        null,
                        "$",
                        Object(f.a)(
                          Number(
                            null === c || void 0 === c ? void 0 : c.backed
                          ),
                          2
                        )
                      )
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: e.block },
                  i.a.createElement("div", null, "Sellable"),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
                    i.a.createElement("div", null, "USDEX at $1.00"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        "span",
                        null,
                        "$",
                        Object(f.a)(
                          Number(
                            null === c || void 0 === c ? void 0 : c.sellable
                          ),
                          2
                        )
                      )
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: e.block },
                  i.a.createElement("div", null, "Treasury"),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
                    i.a.createElement("div", null, "Surplus"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        "span",
                        null,
                        "$",
                        Object(f.a)(
                          Number(
                            null === c || void 0 === c ? void 0 : c.surplus
                          ),
                          2
                        )
                      )
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              "div",
              { className: e.bigCard },
              i.a.createElement(
                "div",
                { className: e.scroll },
                i.a.createElement(
                  "div",
                  { className: e.tableHeader },
                  i.a.createElement("div", null, "Asset"),
                  !t && i.a.createElement("div", null, "price"),
                  i.a.createElement("div", null, "balance"),
                  !t && i.a.createElement("div", null, "value")
                ),
                a.asset.map(function (n, a) {
                  return i.a.createElement(
                    "div",
                    {
                      className: u()(
                        e.tableRow,
                        Object(r.a)({}, e.tableColor, a % 2 === 0)
                      ),
                    },
                    i.a.createElement(
                      "div",
                      { className: e.row },
                      i.a.createElement(p.a, { symbol: n.name, size: 50 }),
                      i.a.createElement("div", null, n.name)
                    ),
                    !t &&
                      i.a.createElement(
                        "div",
                        { className: e.row },
                        "$",
                        null === n || void 0 === n ? void 0 : n.price
                      ),
                    i.a.createElement(
                      "div",
                      { className: e.row },
                      Object(f.a)(
                        null === n || void 0 === n ? void 0 : n.balance,
                        2
                      )
                    ),
                    !t &&
                      i.a.createElement(
                        "div",
                        { className: e.row },
                        "$",
                        Object(f.a)(
                          null === n || void 0 === n ? void 0 : n.value,
                          2
                        )
                      )
                  );
                })
              )
            )
          ),
          i.a.createElement(
            "div",
            { className: e.grid },
            i.a.createElement(
              "div",
              { className: e.smallCard },
              i.a.createElement(
                "div",
                { className: e.cardTitle },
                "LIQUIDITY TOTALS"
              ),
              i.a.createElement(
                "div",
                { className: e.wrap },
                i.a.createElement(
                  "div",
                  { className: e.block },
                  i.a.createElement("div", null, "Protocol"),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
                    i.a.createElement("div", null, "Owned USDEX"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement("span", null, l.usdex, "%")
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: e.block },
                  i.a.createElement("div", null, "Protocol"),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
                    i.a.createElement("div", null, "Owned dexSHARE"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement("span", null, l.dexShare, "%")
                    )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: e.block },
                  i.a.createElement("div", null, "Protocol"),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    },
                    i.a.createElement("div", null, "Owned dexIRA"),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement("span", null, l.dexIra, "%")
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              "div",
              { className: e.bigCard },
              i.a.createElement(
                "div",
                { className: e.tableHeader },
                i.a.createElement("div", null, "Liquidity"),
                !t && i.a.createElement("div", null, "price"),
                i.a.createElement("div", null, "balance"),
                !t && i.a.createElement("div", null, "value")
              ),
              a.liquidity.map(function (n, a) {
                return i.a.createElement(
                  "div",
                  {
                    className: u()(
                      e.tableRow,
                      Object(r.a)({}, e.tableColor, a % 2 === 0)
                    ),
                  },
                  i.a.createElement(
                    "div",
                    { className: e.row },
                    i.a.createElement(p.a, { symbol: n.name, size: 50 }),
                    i.a.createElement("div", null, n.name)
                  ),
                  !t &&
                    i.a.createElement(
                      "div",
                      { className: e.row },
                      "$",
                      null === n || void 0 === n ? void 0 : n.price
                    ),
                  i.a.createElement(
                    "div",
                    { className: e.row },
                    Object(f.a)(
                      null === n || void 0 === n ? void 0 : n.balance,
                      2
                    )
                  ),
                  !t &&
                    i.a.createElement(
                      "div",
                      { className: e.row },
                      "$",
                      Object(f.a)(
                        null === n || void 0 === n ? void 0 : n.value,
                        2
                      )
                    )
                );
              })
            )
          )
        );
      };
    },
    923: function (e, t, n) {
      e.exports = n.p + "static/media/background.a537c370.jpg";
    },
  },
]);
