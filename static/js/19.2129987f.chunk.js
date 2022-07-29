/*! For license information please see 19.2129987f.chunk.js.LICENSE.txt */
(this["webpackJsonpdexfinance-frontend"] =
  this["webpackJsonpdexfinance-frontend"] || []).push([
  [19, 1],
  {
    1e3: function (t, e, n) {
      t.exports = n.p + "static/media/dex_icon_Circle_25x25-04.f629657c.svg";
    },
    1001: function (t, e, n) {
      t.exports = n.p + "static/media/dex_icon_Circle_25x25-01.386d3e76.svg";
    },
    1002: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(23),
        a = n(0),
        o = n(1017),
        i = n(1018);
      function c(t) {
        return t && "object" === typeof t && "default" in t
          ? t
          : { default: t };
      }
      var s = c(r),
        u = c(a),
        l = c(o),
        p = c(i);
      function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                h(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function m(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function A(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function h(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function g(t) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function y(t, e) {
        return (y =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function v(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function b(t, e) {
        return !e || ("object" !== typeof e && "function" !== typeof e)
          ? v(t)
          : e;
      }
      function w(t) {
        var e = (function () {
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
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g(t);
          if (e) {
            var a = g(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return b(this, n);
        };
      }
      function x(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null == n) return;
            var r,
              a,
              o = [],
              i = !0,
              c = !1;
            try {
              for (
                n = n.call(t);
                !(i = (r = n.next()).done) &&
                (o.push(r.value), !e || o.length !== e);
                i = !0
              );
            } catch (s) {
              (c = !0), (a = s);
            } finally {
              try {
                i || null == n.return || n.return();
              } finally {
                if (c) throw a;
              }
            }
            return o;
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" === typeof t) return E(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return E(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var k = function (t, e) {
          var n = e.decimal,
            r = e.decimals,
            a = e.duration,
            o = e.easingFn,
            i = e.end,
            c = e.formattingFn,
            s = e.prefix,
            u = e.separator,
            l = e.start,
            d = e.suffix,
            f = e.useEasing;
          return new p.default(t, l, i, r, a, {
            decimal: n,
            easingFn: o,
            formattingFn: c,
            separator: u,
            prefix: s,
            suffix: d,
            useEasing: f,
            useGrouping: !!u,
          });
        },
        O = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && y(t, e);
          })(o, t);
          var e,
            n,
            r,
            a = w(o);
          function o() {
            var t;
            m(this, o);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              h(
                v((t = a.call.apply(a, [this].concat(n)))),
                "checkProps",
                function (e) {
                  var n = t.props,
                    r = n.start,
                    a = n.suffix,
                    o = n.prefix,
                    i = n.redraw,
                    c = n.duration,
                    s = n.separator,
                    u = n.decimals,
                    l = n.decimal,
                    p = n.className;
                  return (
                    c !== e.duration ||
                    r !== e.start ||
                    a !== e.suffix ||
                    o !== e.prefix ||
                    s !== e.separator ||
                    u !== e.decimals ||
                    l !== e.decimal ||
                    p !== e.className ||
                    i
                  );
                }
              ),
              h(v(t), "createInstance", function () {
                return (
                  "function" === typeof t.props.children &&
                    l.default(
                      t.containerRef.current &&
                        (t.containerRef.current instanceof HTMLElement ||
                          t.containerRef.current instanceof SVGTextElement ||
                          t.containerRef.current instanceof SVGTSpanElement),
                      'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'
                    ),
                  k(t.containerRef.current, t.props)
                );
              }),
              h(v(t), "pauseResume", function () {
                var e = v(t),
                  n = e.reset,
                  r = e.restart,
                  a = e.update,
                  o = t.props.onPauseResume;
                t.instance.pauseResume(), o({ reset: n, start: r, update: a });
              }),
              h(v(t), "reset", function () {
                var e = v(t),
                  n = e.pauseResume,
                  r = e.restart,
                  a = e.update,
                  o = t.props.onReset;
                t.instance.reset(), o({ pauseResume: n, start: r, update: a });
              }),
              h(v(t), "restart", function () {
                t.reset(), t.start();
              }),
              h(v(t), "start", function () {
                var e = v(t),
                  n = e.pauseResume,
                  r = e.reset,
                  a = e.restart,
                  o = e.update,
                  i = t.props,
                  c = i.delay,
                  s = i.onEnd,
                  u = i.onStart,
                  l = function () {
                    return t.instance.start(function () {
                      return s({
                        pauseResume: n,
                        reset: r,
                        start: a,
                        update: o,
                      });
                    });
                  };
                c > 0 ? (t.timeoutId = setTimeout(l, 1e3 * c)) : l(),
                  u({ pauseResume: n, reset: r, update: o });
              }),
              h(v(t), "update", function (e) {
                var n = v(t),
                  r = n.pauseResume,
                  a = n.reset,
                  o = n.restart,
                  i = t.props.onUpdate;
                t.instance.update(e), i({ pauseResume: r, reset: a, start: o });
              }),
              h(v(t), "containerRef", u.default.createRef()),
              t
            );
          }
          return (
            (e = o),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  var t = this.props,
                    e = t.children,
                    n = t.delay;
                  (this.instance = this.createInstance()),
                    ("function" === typeof e && 0 !== n) || this.start();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (t) {
                  var e = this.props.end;
                  return this.checkProps(t) || e !== t.end;
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  var e = this.props,
                    n = e.end,
                    r = e.preserveValue;
                  this.checkProps(t) &&
                    (this.instance.reset(),
                    (this.instance = this.createInstance()),
                    this.start()),
                    n !== t.end &&
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
                  var t = this.props,
                    e = t.children,
                    n = t.className,
                    r = t.style,
                    a = this.containerRef,
                    o = this.pauseResume,
                    i = this.reset,
                    c = this.restart,
                    s = this.update;
                  return "function" === typeof e
                    ? e({
                        countUpRef: a,
                        pauseResume: o,
                        reset: i,
                        start: c,
                        update: s,
                      })
                    : u.default.createElement("span", {
                        className: n,
                        ref: a,
                        style: r,
                      });
                },
              },
            ]) && A(e.prototype, n),
            r && A(e, r),
            o
          );
        })(a.Component);
      h(O, "propTypes", {
        decimal: s.default.string,
        decimals: s.default.number,
        delay: s.default.number,
        easingFn: s.default.func,
        end: s.default.number.isRequired,
        formattingFn: s.default.func,
        onEnd: s.default.func,
        onStart: s.default.func,
        prefix: s.default.string,
        redraw: s.default.bool,
        separator: s.default.string,
        start: s.default.number,
        startOnMount: s.default.bool,
        suffix: s.default.string,
        style: s.default.object,
        useEasing: s.default.bool,
        preserveValue: s.default.bool,
      }),
        h(O, "defaultProps", {
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
      var L = { innerHTML: null };
      (e.default = O),
        (e.useCountUp = function (t) {
          var e = f(f({}, O.defaultProps), t),
            n = e.start,
            r = e.formattingFn,
            o = x(a.useState("function" === typeof r ? r(n) : n), 2),
            i = o[0],
            c = o[1],
            s = a.useRef(null),
            u = a.useRef(null),
            l = function () {
              var t = s.current;
              if (null !== t) return t;
              var n = (function () {
                var t = k(L, e),
                  n = t.options.formattingFn;
                return (
                  (t.options.formattingFn = function () {
                    var t = n.apply(void 0, arguments);
                    c(t);
                  }),
                  t
                );
              })();
              return (s.current = n), n;
            },
            p = function () {
              var t = e.onReset;
              l().reset(), t({ pauseResume: m, start: d, update: A });
            },
            d = function t() {
              var n = e.onStart,
                r = e.onEnd;
              l().reset(),
                l().start(function () {
                  r({ pauseResume: m, reset: p, start: t, update: A });
                }),
                n({ pauseResume: m, reset: p, update: A });
            },
            m = function () {
              var t = e.onPauseResume;
              l().pauseResume(), t({ reset: p, start: d, update: A });
            },
            A = function (t) {
              var n = e.onUpdate;
              l().update(t), n({ pauseResume: m, reset: p, start: d });
            };
          return (
            a.useEffect(function () {
              var t = e.delay,
                n = e.onStart,
                r = e.onEnd;
              return (
                e.startOnMount &&
                  (u.current = setTimeout(function () {
                    n({ pauseResume: m, reset: p, update: A }),
                      l().start(function () {
                        clearTimeout(u.current),
                          r({ pauseResume: m, reset: p, start: d, update: A });
                      });
                  }, 1e3 * t)),
                function () {
                  clearTimeout(u.current), p();
                }
              );
            }, []),
            { countUp: i, start: d, pauseResume: m, reset: p, update: A }
          );
        });
    },
    1013: function (t, e, n) {
      "use strict";
      n.d(e, "d", function () {
        return l;
      }),
        n.d(e, "a", function () {
          return d;
        }),
        n.d(e, "b", function () {
          return f;
        });
      n(77), n(155);
      var r = n(93);
      n(914);
      var a = n(5),
        o = n(4),
        i = n(9),
        c = n(10),
        s = (function (t) {
          Object(i.a)(n, t);
          var e = Object(c.a)(n);
          function n(t, r, a, i, c, s, u) {
            var l;
            return (
              Object(o.a)(this, n),
              ((l = e.call(this, t, r, a, c, s, u)).isLP = void 0),
              (l.isLP = i),
              l
            );
          }
          return Object(a.a)(n);
        })(r.h),
        u = r.a.MAINNET,
        l = {
          bnb: new s(
            u,
            "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            18,
            !1,
            "BNB"
          ),
          wbnb: new s(
            u,
            "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            18,
            !1,
            "WBNB"
          ),
          dex: new s(
            u,
            "0x147e07976e1ae78287c33aafaab87760d32e50a5",
            9,
            !1,
            "DEX"
          ),
          usdc: new s(
            u,
            "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
            18,
            !1,
            "USDC"
          ),
          cake: new s(
            u,
            "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
            18,
            !1,
            "CAKE"
          ),
          busd: new s(
            u,
            "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            18,
            !1,
            "BUSD"
          ),
          usdex: new s(
            u,
            "0x829c09fCc46D9fd31967272ABA245BEF9f727F93",
            18,
            !1,
            "USDEX"
          ),
          dexshare: new s(
            u,
            "0xf4914E6D97a75f014AcFcF4072f11be5CfFc4cA6",
            18,
            !1,
            "dexSHARE"
          ),
          dexshareBnb: new s(
            u,
            "0x65d83463fc023bffbd8ac9a1a2e1037f4bbdb399",
            18,
            !0,
            "DEXSHARE-BNB-LP"
          ),
          usdexUsdc: new s(
            u,
            "0x79F3bb5534b8f060b37b3e5deA032a39412F6B10",
            18,
            !0,
            "USDEX-USDC-LP"
          ),
          usdexBnb: new s(
            u,
            "0xB3a7a1AB8E85814C042AF4b6A9BED77906e417F3",
            18,
            !0,
            "USDEX-BNB-LP"
          ),
        },
        p = l,
        d =
          ((e.c = p),
          "115792089237316195423570985008687907853269984665640564039457584007913129639935"),
        f = "1000000000000000000000000000";
    },
    1017: function (t, e, n) {
      "use strict";
      var r = function () {};
      t.exports = r;
    },
    1018: function (t, e, n) {
      var r, a;
      void 0 ===
        (a =
          "function" ===
          typeof (r = function (t, e, n) {
            return function (t, e, n, r, a, o) {
              function i(t) {
                return "number" == typeof t && !isNaN(t);
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
                  easingFn: function (t, e, n, r) {
                    return (
                      (n * (1 - Math.pow(2, (-10 * t) / r)) * 1024) / 1023 + e
                    );
                  },
                  formattingFn: function (t) {
                    var e,
                      n,
                      r,
                      a,
                      o,
                      i,
                      s = t < 0;
                    if (
                      ((t = Math.abs(t).toFixed(c.decimals)),
                      (n = (e = (t += "").split("."))[0]),
                      (r = e.length > 1 ? c.options.decimal + e[1] : ""),
                      c.options.useGrouping)
                    ) {
                      for (a = "", o = 0, i = n.length; o < i; ++o)
                        0 !== o && o % 3 === 0 && (a = c.options.separator + a),
                          (a = n[i - o - 1] + a);
                      n = a;
                    }
                    return (
                      c.options.numerals.length &&
                        ((n = n.replace(/[0-9]/g, function (t) {
                          return c.options.numerals[+t];
                        })),
                        (r = r.replace(/[0-9]/g, function (t) {
                          return c.options.numerals[+t];
                        }))),
                      (s ? "-" : "") +
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
                for (var s in c.options)
                  o.hasOwnProperty(s) && null !== o[s] && (c.options[s] = o[s]);
              "" === c.options.separator
                ? (c.options.useGrouping = !1)
                : (c.options.separator = "" + c.options.separator);
              for (
                var u = 0, l = ["webkit", "moz", "ms", "o"], p = 0;
                p < l.length && !window.requestAnimationFrame;
                ++p
              )
                (window.requestAnimationFrame =
                  window[l[p] + "RequestAnimationFrame"]),
                  (window.cancelAnimationFrame =
                    window[l[p] + "CancelAnimationFrame"] ||
                    window[l[p] + "CancelRequestAnimationFrame"]);
              window.requestAnimationFrame ||
                (window.requestAnimationFrame = function (t, e) {
                  var n = new Date().getTime(),
                    r = Math.max(0, 16 - (n - u)),
                    a = window.setTimeout(function () {
                      t(n + r);
                    }, r);
                  return (u = n + r), a;
                }),
                window.cancelAnimationFrame ||
                  (window.cancelAnimationFrame = function (t) {
                    clearTimeout(t);
                  }),
                (c.initialize = function () {
                  return (
                    !!c.initialized ||
                    ((c.error = ""),
                    (c.d =
                      "string" == typeof t ? document.getElementById(t) : t),
                    c.d
                      ? ((c.startVal = Number(e)),
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
                              e +
                              ") or endVal (" +
                              n +
                              ") is not a number"),
                            !1))
                      : ((c.error = "[CountUp] target is null or undefined"),
                        !1))
                  );
                }),
                (c.printValue = function (t) {
                  var e = c.options.formattingFn(t);
                  "INPUT" === c.d.tagName
                    ? (this.d.value = e)
                    : "text" === c.d.tagName || "tspan" === c.d.tagName
                    ? (this.d.textContent = e)
                    : (this.d.innerHTML = e);
                }),
                (c.count = function (t) {
                  c.startTime || (c.startTime = t), (c.timestamp = t);
                  var e = t - c.startTime;
                  (c.remaining = c.duration - e),
                    c.options.useEasing
                      ? c.countDown
                        ? (c.frameVal =
                            c.startVal -
                            c.options.easingFn(
                              e,
                              0,
                              c.startVal - c.endVal,
                              c.duration
                            ))
                        : (c.frameVal = c.options.easingFn(
                            e,
                            c.startVal,
                            c.endVal - c.startVal,
                            c.duration
                          ))
                      : c.countDown
                      ? (c.frameVal =
                          c.startVal -
                          (c.startVal - c.endVal) * (e / c.duration))
                      : (c.frameVal =
                          c.startVal +
                          (c.endVal - c.startVal) * (e / c.duration)),
                    c.countDown
                      ? (c.frameVal =
                          c.frameVal < c.endVal ? c.endVal : c.frameVal)
                      : (c.frameVal =
                          c.frameVal > c.endVal ? c.endVal : c.frameVal),
                    (c.frameVal = Math.round(c.frameVal * c.dec) / c.dec),
                    c.printValue(c.frameVal),
                    e < c.duration
                      ? (c.rAF = requestAnimationFrame(c.count))
                      : c.callback && c.callback();
                }),
                (c.start = function (t) {
                  c.initialize() &&
                    ((c.callback = t),
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
                (c.update = function (t) {
                  if (c.initialize()) {
                    if (!i((t = Number(t))))
                      return void (c.error =
                        "[CountUp] update() - new endVal is not a number: " +
                        t);
                    (c.error = ""),
                      t !== c.frameVal &&
                        (cancelAnimationFrame(c.rAF),
                        (c.paused = !1),
                        delete c.startTime,
                        (c.startVal = c.frameVal),
                        (c.endVal = t),
                        (c.countDown = c.startVal > c.endVal),
                        (c.rAF = requestAnimationFrame(c.count)));
                  }
                }),
                c.initialize() && c.printValue(c.startVal);
            };
          })
            ? r.call(e, n, e, t)
            : r) || (t.exports = a);
    },
    1111: function (t, e, n) {
      "use strict";
      e.a = {
        multiCall: {
          56: "0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B",
          97: "0x8F3273Fb89B075b1645095ABaC6ed17B2d4Bc576",
        },
        predictionsDEX: {
          56: "0xe5a8F979DED45d209e9b3C7E0Cfa734B6821ee71",
          97: "",
        },
        predictionsUSDEX: {
          56: "0xcdA9ea8d9Eb114Ab37A9A0e113Fe8109e81461E7",
          97: "",
        },
        predictionsUSDEX_1H: {
          56: "0x48560eAedf779533Ac2864180b4C1299C638F886",
          97: "",
        },
        predictionsUSDEX_1D: {
          56: "0xdD4BCA88Dac502938C40bB0B4c05Be2476EF7d83",
          97: "",
        },
        predictionsUSDEX_1W: {
          56: "0xd8F5c6Ef0c11E198b02159C8738311cc691E19D4",
          97: "",
        },
        predictionsUSDEX_1M: {
          56: "0x72Fa50B2222da068a2089bdC9275De5c4D6D6d24",
          97: "",
        },
        predictionsZapper: {
          56: "0xEf629632C77261F554DA7e9c0bD5467a3b41fC23",
          97: "",
        },
        chainlinkOracle: {
          56: "0xD276fCF34D54A926773c399eBAa772C12ec394aC",
          97: "",
        },
        strategyZapper: {
          56: "0x943f2f394768214b29C3E8211092d4FA9c0e5681",
          97: "",
        },
      };
    },
    1154: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(93),
        a = n(1111),
        o = function (t) {
          return t[r.a.MAINNET];
        },
        i = function () {
          return o(a.a.predictionsZapper);
        },
        c = function () {
          return o(a.a.strategyZapper);
        };
    },
    1211: function (t, e, n) {
      "use strict";
      var r = n(11),
        a = n(26),
        o = n(0),
        i = n(68),
        c = n(285),
        s = n(113),
        u = n(280),
        l = n(117),
        p = n(1013);
      function d() {
        d = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (B) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = w(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (B) {
            return { type: "throw", arg: B };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function f() {}
        function m() {}
        var A = {};
        c(A, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          g = h && h(h(O([])));
        g && g !== e && n.call(g, a) && (A = g);
        var y = (m.prototype = p.prototype = Object.create(A));
        function v(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          c(y, "constructor", m),
          c(m, "constructor", f),
          (f.displayName = c(m, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(y),
          c(y, i, "Generator"),
          c(y, a, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
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
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e) {
        var n = Object(i.c)(),
          f = n.ethereum,
          m = n.account,
          A = n.chainId,
          h = Object(u.a)().provider,
          g = Object(c.useToasts)().addToast,
          y = Object(o.useState)(!1),
          v = Object(a.a)(y, 2),
          b = v[0],
          w = v[1];
        return {
          approve: Object(o.useCallback)(
            Object(r.a)(
              d().mark(function n() {
                var r, a, o, i;
                return d().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          w(!0),
                          (r = new s.a(e, h, "", 18)),
                          (a = new l.a.providers.Web3Provider(f, A)),
                          (o = a.getSigner(0)),
                          r.connect(o),
                          (n.next = 7),
                          r.contract.approve(t, p.a, { from: m })
                        );
                      case 7:
                        return (
                          (i = n.sent),
                          (n.next = 10),
                          i
                            .wait()
                            .then(function () {
                              w(!1);
                            })
                            .catch(function (t) {
                              console.error(t),
                                t.message.includes(
                                  "User denied transaction signature"
                                )
                                  ? (g("Denied Transaction", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    w(!1))
                                  : (g("Transaction Failed", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    w(!1));
                            })
                        );
                      case 10:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [t, e, m]
          ),
          approveLoading: b,
        };
      };
    },
    1212: function (t, e, n) {
      "use strict";
      var r = n(11),
        a = n(26),
        o = n(0),
        i = n(16),
        c = n.n(i),
        s = n(135),
        u = n.n(s),
        l = n(68),
        p = n(294),
        d = n(229);
      function f() {
        f = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (B) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = w(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (B) {
            return { type: "throw", arg: B };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function m() {}
        var A = {};
        c(A, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          g = h && h(h(O([])));
        g && g !== e && n.call(g, a) && (A = g);
        var y = (m.prototype = p.prototype = Object.create(A));
        function v(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = m),
          c(y, "constructor", m),
          c(m, "constructor", d),
          (d.displayName = c(m, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(y),
          c(y, i, "Generator"),
          c(y, a, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
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
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e) {
        var n = Object(l.c)(),
          i = n.account,
          s = n.ethereum,
          m = new u.a(s),
          A = Object(o.useState)(new c.a(0)),
          h = Object(a.a)(A, 2),
          g = h[0],
          y = h[1],
          v = Object(o.useState)(!0),
          b = Object(a.a)(v, 2),
          w = b[0],
          x = b[1],
          E = Object(d.a)(m, p, e),
          k = Object(o.useCallback)(
            Object(r.a)(
              f().mark(function e() {
                var n;
                return f().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            x(!0),
                            (e.next = 4),
                            E.methods.allowance(i, t).call()
                          );
                        case 4:
                          (n = e.sent), y(new c.a(n)), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            console.error(e.t0);
                        case 11:
                          return (e.prev = 11), x(!1), e.finish(11);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8, 11, 14]]
                );
              })
            ),
            [i, t, E]
          );
        return (
          Object(o.useEffect)(
            function () {
              i &&
                e &&
                t &&
                Object(r.a)(
                  f().mark(function t() {
                    return f().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), k();
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
            },
            [i, e, t]
          ),
          { allowance: g, updateAllowance: k, allowanceLoading: w }
        );
      };
    },
    1228: function (t, e, n) {
      "use strict";
      var r = n(11),
        a = n(26),
        o = n(0),
        i = n(280),
        c = n(34),
        s = n(294),
        u = n(156);
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (B) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof d ? e : d,
            o = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = w(i, n);
                    if (c) {
                      if (c === p) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === p)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (B) {
            return { type: "throw", arg: B };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function m() {}
        var A = {};
        c(A, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          g = h && h(h(O([])));
        g && g !== e && n.call(g, a) && (A = g);
        var y = (m.prototype = d.prototype = Object.create(A));
        function v(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return p;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), p
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          c(y, "constructor", m),
          c(m, "constructor", f),
          (f.displayName = c(m, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(y),
          c(y, i, "Generator"),
          c(y, a, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
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
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      e.a = function (t) {
        var e = Object(o.useState)(Object(u.e)(0)),
          n = Object(a.a)(e, 2),
          p = n[0],
          d = n[1],
          f = Object(i.a)(),
          m = f.myAccount,
          A = f.web3,
          h = f.isUnlocked,
          g = Object(o.useCallback)(
            Object(r.a)(
              l().mark(function e() {
                var n, r;
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((n = Object(u.e)(0)), "BNB" !== t.symbol)) {
                          e.next = 9;
                          break;
                        }
                        return (e.t0 = u.e), (e.next = 5), A.eth.getBalance(m);
                      case 5:
                        (e.t1 = e.sent), (n = (0, e.t0)(e.t1)), (e.next = 15);
                        break;
                      case 9:
                        return (
                          (r = new A.eth.Contract(s, t.address)),
                          (e.t2 = u.e),
                          (e.next = 13),
                          r.methods.balanceOf(m).call()
                        );
                      case 13:
                        (e.t3 = e.sent), (n = (0, e.t2)(e.t3));
                      case 15:
                        d(n);
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [t, m]
          );
        return (
          Object(o.useEffect)(
            function () {
              if (h) {
                g().catch(function (t) {
                  return console.error(
                    "Failed to fetch token balance: ".concat(t.stack)
                  );
                });
                var t = setInterval(g, c.b.refreshInterval);
                return function () {
                  return clearInterval(t);
                };
              }
            },
            [h, t, m]
          ),
          { balance: p, updateBalance: g }
        );
      };
    },
    1694: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_routerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"strategyAddress","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"strategyAddress","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"strategyAddress","type":"address"},{"internalType":"address","name":"lp","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"depositLP","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"native","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IPancakeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"strategyAddress","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    1695: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"components":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"dao","type":"address"},{"internalType":"address","name":"treasury","type":"address"},{"internalType":"address","name":"etfBurner","type":"address"},{"internalType":"address","name":"zapper","type":"address"}],"internalType":"struct DexStrategy.ConstructorAddresses","name":"addresses_","type":"tuple"},{"components":[{"internalType":"address","name":"depositFeeOutput","type":"address"},{"internalType":"uint256","name":"depositFee","type":"uint256"},{"internalType":"uint256","name":"harvestFee","type":"uint256"}],"internalType":"struct DexStrategy.ConstructorFee","name":"fee_","type":"tuple"},{"components":[{"internalType":"contract IDexShareRewardPool","name":"pool","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"bool","name":"isStakingTokenLP","type":"bool"}],"internalType":"struct DexStrategy.ConstructorFarm[]","name":"farms_","type":"tuple[]"},{"components":[{"internalType":"address","name":"etf","type":"address"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"}],"internalType":"struct DexStrategy.ConstructorETFBurnConfiguration[]","name":"etfConfigs_","type":"tuple[]"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"internalType":"struct DexStrategy.ConstructorERC20","name":"erc20Config_","type":"tuple"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"dao","type":"address"}],"name":"DaoUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"nativeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"syntheticAmount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"etf","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"indexed":false,"internalType":"address[]","name":"intermediaries","type":"address[]"}],"name":"ETFBurnConfigurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"burner","type":"address"}],"name":"ETFBurnerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"depositFeeOutput","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"harvestFee","type":"uint256"}],"name":"FeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"nativeAmount","type":"uint256"}],"name":"Harvested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"treasury","type":"address"}],"name":"TreasuryUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"uint256","name":"syntheticAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nativeAmount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"zapper","type":"address"}],"name":"ZapperUpdated","type":"event"},{"inputs":[],"name":"FEE_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_SUM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dao","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFeeOutput","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"etf","type":"address"}],"name":"etfBurnConfiguration","outputs":[{"components":[{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"}],"internalType":"struct DexStrategy.ETFBurnConfiguration","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"etfBurner","outputs":[{"internalType":"contract IETFBurner","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"farms","outputs":[{"internalType":"contract IDexShareRewardPool","name":"pool","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"bool","name":"isStakingTokenLP","type":"bool"},{"internalType":"address","name":"stakingToken","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farmsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[{"internalType":"uint256","name":"nativeAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"harvestFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"native","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IPancakeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenInformation","outputs":[{"internalType":"bool","name":"isLP","type":"bool"},{"internalType":"bool","name":"isETF","type":"bool"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dao_","type":"address"}],"name":"updateDao","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"etf","type":"address"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"}],"name":"updateETFBurnConfiguration","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"burner_","type":"address"}],"name":"updateETFBurner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositFeeOutput_","type":"address"},{"internalType":"uint256","name":"depositFee_","type":"uint256"},{"internalType":"uint256","name":"harvestFee_","type":"uint256"}],"name":"updateFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"updateTreasury","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"zapper_","type":"address"}],"name":"updateZapper","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"nativeOutput","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"zapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"zapperDeposit","outputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"from","type":"address"}],"name":"zapperWithdraw","outputs":[{"internalType":"uint256","name":"nativeOutput","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    1696: function (t) {
      t.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    1697: function (t, e, n) {
      t.exports = n.p + "static/media/usdxusdcLogo.f74c1eef.svg";
    },
    1698: function (t, e, n) {
      t.exports = n.p + "static/media/dexShareBnbLogo.76a1cc76.svg";
    },
    1699: function (t, e, n) {
      t.exports = n.p + "static/media/RegulationLogo.b6cbe4ca.svg";
    },
    1700: function (t, e, n) {
      t.exports = n.p + "static/media/conservative.f97b0e9a.png";
    },
    2133: function (t, e, n) {
      "use strict";
      n.r(e);
      var r,
        a = n(0),
        o = n.n(a),
        i = n(26),
        c = n(43),
        s = n(2112),
        u = n(37),
        l = n(1002),
        p = n.n(l),
        d = n(912),
        f = n(934),
        m = n(77),
        A = n(916),
        h = n.n(A),
        g = n(2106),
        y = Object(g.a)(function () {
          return {
            tabsWrapper: {
              marginTop: "30px",
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "10px",
            },
            tab: {
              padding: "20px",
              backgroundColor: "#2989C2",
              color: "#FFFFFF",
              fontSize: "20px",
              textAlign: "center",
            },
            active: { backgroundColor: "#8b67d3" },
          };
        });
      !(function (t) {
        (t[(t.COMPLETE = 0)] = "COMPLETE"),
          (t[(t.DUAL_FARMS = 1)] = "DUAL_FARMS"),
          (t[(t.SINGLE_FARM = 2)] = "SINGLE_FARM");
      })(r || (r = {}));
      var v,
        b = function (t) {
          var e = t.currentTab,
            n = t.setCurrentTab,
            a = y();
          return o.a.createElement(
            s.a,
            { container: !0, spacing: 1, className: a.tabsWrapper },
            o.a.createElement(
              s.a,
              { lg: 4, xs: 12 },
              o.a.createElement(
                "div",
                {
                  className: h()(
                    a.tab,
                    Object(m.a)({}, a.active, r.COMPLETE === e)
                  ),
                  onClick: function () {
                    return n(r.COMPLETE);
                  },
                },
                "COMPLETE STRATEGIES"
              )
            ),
            o.a.createElement(
              s.a,
              { lg: 4, xs: 12 },
              o.a.createElement(
                "div",
                {
                  className: h()(
                    a.tab,
                    Object(m.a)({}, a.active, r.DUAL_FARMS === e)
                  ),
                  onClick: function () {
                    return n(r.DUAL_FARMS);
                  },
                },
                "DUAL FARMS"
              )
            ),
            o.a.createElement(
              s.a,
              { lg: 4, xs: 12 },
              o.a.createElement(
                "div",
                {
                  className: h()(
                    a.tab,
                    Object(m.a)({}, a.active, r.SINGLE_FARM === e)
                  ),
                  onClick: function () {
                    return n(r.SINGLE_FARM);
                  },
                },
                "SINGLE FARMS"
              )
            )
          );
        },
        w = n(923),
        x = n.n(w),
        E = n(11),
        k = Object(g.a)(function () {
          return {
            strategyTitle: {
              fontSize: "20px",
              color: "#8b67d3 !important",
              marginTop: "48px",
              marginLeft: "12px",
            },
            strategyWrap: {
              backgroundColor: "#3292cc",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              marginTop: "24px",
              padding: "15px 65px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              "@media (max-width: 530px)": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "20px 15px",
              },
            },
            inputClose: {
              borderRadius: "10px",
              transition: "all .5s ease,  -webkit-transform .5s ease ",
            },
            strategyText: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#FFFFFF",
              "@media (max-width: 1280px)": {
                display: "flex",
                justifyContent: "space-between",
              },
            },
            strategyDiagram: {
              "& img": { maxHeight: "110px" },
              "@media (max-width: 1280px)": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& img": { paddingBottom: "15px" },
              },
            },
            contractProperties: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            },
          };
        }),
        O = Object(g.a)(function () {
          return {
            inputWrapper: {
              backgroundColor: "#3292cc !important",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              maxHeight: "0",
              overflow: "hidden",
            },
            inputOpened: {
              padding: "20px",
              transition: "all .5s ease , -webkit-transform .5s ease ",
              maxHeight: "350px",
              backgroundColor: "#8b67d3",
              boxSizing: "border-box",
              "@media (max-width: 1280px)": {
                padding: "20px",
                transition: "all .5s ease , -webkit-transform .5s ease ",
                maxHeight: "1000px",
              },
            },
            inputClosed: {
              transition: "all .5s ease , -webkit-transform .5s ease",
              maxHeight: "0",
            },
            disabled: { color: "grey !important" },
            selectWrapper: {
              display: "flex",
              flexDirection: "column",
              height: "90px",
              minWidth: "150px",
              justifyContent: "space-between",
              marginLeft: "15px",
              width: "100%",
            },
            selectText: {
              alignItems: "center",
              marginBottom: "10px",
              color: "#FFFFFF",
              display: "flex",
              fontSize: "14px",
              fontWeight: 700,
              height: "35px",
            },
            actionDescription: {
              marginTop: "20px",
              color: "#FFFFFF",
              textAlign: "center",
            },
            sliderWrapper: { marginTop: "25px", padding: "0px 10px" },
          };
        }),
        L = n(16),
        B = n.n(L),
        j = n(2109),
        T = n(925),
        D = n(156),
        C = n(1228);
      !(function (t) {
        (t[(t.Liquidity = 0)] = "Liquidity"),
          (t[(t.APY = 1)] = "APY"),
          (t[(t.Deposit = 2)] = "Deposit"),
          (t[(t.Hotness = 3)] = "Hotness");
      })(v || (v = {}));
      var N = n(1212),
        F = n(1211),
        S = n(1154),
        P = n(1013),
        Q = n(2120),
        X = n(282),
        I = n(2134),
        H = n(2119),
        M = Object(X.a)({
          root: {
            backgroundColor: "white",
            color: "#000000",
            "&:hover": { backgroundColor: "grey" },
            "&:after": { display: "none", borderBottom: "none !important" },
          },
          selected: { color: "#ffffff" },
        })(H.a),
        G = function (t) {
          var e = t.items,
            n = t.onChange,
            r = t.value;
          return o.a.createElement(
            R,
            {
              onChange: function (t) {
                var e = t.target.value;
                n(e);
              },
              labelId: "label",
              id: "select",
              style: { width: "100%" },
              value: r,
              input: o.a.createElement(Q.a, {
                disableUnderline: !0,
                name: "age",
                id: "age-helper",
              }),
            },
            e.map(function (t) {
              return o.a.createElement(
                M,
                { value: t.value, key: t.title },
                t.title
              );
            })
          );
        },
        R = Object(X.a)({
          root: {
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            color: "#000000 !important",
            padding: "10px",
            height: "25px",
            "&:hover": { borderBottom: "none !important" },
            "&:active": {
              borderRadius: "10px",
              backgroundColor: "white",
              color: "#000000",
              border: "none",
            },
            "&:focus": {
              borderRadius: "10px",
              backgroundColor: "white",
              border: "none",
            },
          },
          selected: { backgroundColor: "#ffffff" },
        })(I.a),
        z = n(189),
        U = n(296),
        V = n(44),
        W = n(6),
        Y = n(281),
        J = n(957),
        Z = n(188),
        q = n(1024),
        K = n(961),
        _ = n(1025),
        $ = n(927),
        tt = n(184),
        et = n(1037);
      var nt = Object(X.a)(
        function (t) {
          return {
            thumb: {
              "&$open": {
                "& $offset": { transform: "scale(1) translateY(-10px)" },
              },
            },
            open: {},
            offset: Object(W.a)({ zIndex: 1 }, t.typography.body2, {
              fontSize: t.typography.pxToRem(12),
              lineHeight: 1.2,
              transition: t.transitions.create(["transform"], {
                duration: t.transitions.duration.shortest,
              }),
              top: -34,
              transformOrigin: "bottom center",
              transform: "scale(0)",
              position: "absolute",
            }),
            circle: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50% 50% 50% 0",
              backgroundColor: "currentColor",
              transform: "rotate(-45deg)",
            },
            label: {
              color: t.palette.primary.contrastText,
              transform: "rotate(45deg)",
            },
          };
        },
        { name: "PrivateValueLabel" }
      )(function (t) {
        var e = t.children,
          n = t.classes,
          r = t.className,
          o = t.open,
          i = t.value,
          c = t.valueLabelDisplay;
        return "off" === c
          ? e
          : a.cloneElement(
              e,
              {
                className: Object(Y.default)(
                  e.props.className,
                  (o || "on" === c) && n.open,
                  n.thumb
                ),
              },
              a.createElement(
                "span",
                { className: Object(Y.default)(n.offset, r) },
                a.createElement(
                  "span",
                  { className: n.circle },
                  a.createElement("span", { className: n.label }, i)
                )
              )
            );
      });
      function rt(t, e) {
        return t - e;
      }
      function at(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }
      function ot(t, e) {
        return t.reduce(function (t, n, r) {
          var a = Math.abs(e - n);
          return null === t || a < t.distance || a === t.distance
            ? { distance: a, index: r }
            : t;
        }, null).index;
      }
      function it(t, e) {
        if (void 0 !== e.current && t.changedTouches) {
          for (var n = 0; n < t.changedTouches.length; n += 1) {
            var r = t.changedTouches[n];
            if (r.identifier === e.current)
              return { x: r.clientX, y: r.clientY };
          }
          return !1;
        }
        return { x: t.clientX, y: t.clientY };
      }
      function ct(t, e, n) {
        return (100 * (t - e)) / (n - e);
      }
      function st(t, e, n) {
        var r = Math.round((t - n) / e) * e + n;
        return Number(
          r.toFixed(
            (function (t) {
              if (Math.abs(t) < 1) {
                var e = t.toExponential().split("e-"),
                  n = e[0].split(".")[1];
                return (n ? n.length : 0) + parseInt(e[1], 10);
              }
              var r = t.toString().split(".")[1];
              return r ? r.length : 0;
            })(e)
          )
        );
      }
      function ut(t) {
        var e = t.values,
          n = t.source,
          r = t.newValue,
          a = t.index;
        if (e[a] === r) return n;
        var o = e.slice();
        return (o[a] = r), o;
      }
      function lt(t) {
        var e = t.sliderRef,
          n = t.activeIndex,
          r = t.setActive;
        (e.current.contains(document.activeElement) &&
          Number(document.activeElement.getAttribute("data-index")) === n) ||
          e.current
            .querySelector('[role="slider"][data-index="'.concat(n, '"]'))
            .focus(),
          r && r(n);
      }
      var pt = {
          horizontal: {
            offset: function (t) {
              return { left: "".concat(t, "%") };
            },
            leap: function (t) {
              return { width: "".concat(t, "%") };
            },
          },
          "horizontal-reverse": {
            offset: function (t) {
              return { right: "".concat(t, "%") };
            },
            leap: function (t) {
              return { width: "".concat(t, "%") };
            },
          },
          vertical: {
            offset: function (t) {
              return { bottom: "".concat(t, "%") };
            },
            leap: function (t) {
              return { height: "".concat(t, "%") };
            },
          },
        },
        dt = function (t) {
          return t;
        },
        ft = a.forwardRef(function (t, e) {
          var n = t["aria-label"],
            r = t["aria-labelledby"],
            o = t["aria-valuetext"],
            i = t.classes,
            c = t.className,
            s = t.color,
            u = void 0 === s ? "primary" : s,
            l = t.component,
            p = void 0 === l ? "span" : l,
            d = t.defaultValue,
            f = t.disabled,
            m = void 0 !== f && f,
            A = t.getAriaLabel,
            h = t.getAriaValueText,
            g = t.marks,
            y = void 0 !== g && g,
            v = t.max,
            b = void 0 === v ? 100 : v,
            w = t.min,
            x = void 0 === w ? 0 : w,
            E = t.name,
            k = t.onChange,
            O = t.onChangeCommitted,
            L = t.onMouseDown,
            B = t.orientation,
            j = void 0 === B ? "horizontal" : B,
            T = t.scale,
            D = void 0 === T ? dt : T,
            C = t.step,
            N = void 0 === C ? 1 : C,
            F = t.ThumbComponent,
            S = void 0 === F ? "span" : F,
            P = t.track,
            Q = void 0 === P ? "normal" : P,
            X = t.value,
            I = t.ValueLabelComponent,
            H = void 0 === I ? nt : I,
            M = t.valueLabelDisplay,
            G = void 0 === M ? "off" : M,
            R = t.valueLabelFormat,
            Z = void 0 === R ? dt : R,
            ft = Object(V.a)(t, [
              "aria-label",
              "aria-labelledby",
              "aria-valuetext",
              "classes",
              "className",
              "color",
              "component",
              "defaultValue",
              "disabled",
              "getAriaLabel",
              "getAriaValueText",
              "marks",
              "max",
              "min",
              "name",
              "onChange",
              "onChangeCommitted",
              "onMouseDown",
              "orientation",
              "scale",
              "step",
              "ThumbComponent",
              "track",
              "value",
              "ValueLabelComponent",
              "valueLabelDisplay",
              "valueLabelFormat",
            ]),
            mt = Object(J.a)(),
            At = a.useRef(),
            ht = a.useState(-1),
            gt = ht[0],
            yt = ht[1],
            vt = a.useState(-1),
            bt = vt[0],
            wt = vt[1],
            xt = Object(et.a)({ controlled: X, default: d, name: "Slider" }),
            Et = Object(U.a)(xt, 2),
            kt = Et[0],
            Ot = Et[1],
            Lt = Array.isArray(kt),
            Bt = Lt ? kt.slice().sort(rt) : [kt];
          Bt = Bt.map(function (t) {
            return at(t, x, b);
          });
          var jt =
              !0 === y && null !== N
                ? Object(z.a)(Array(Math.floor((b - x) / N) + 1)).map(function (
                    t,
                    e
                  ) {
                    return { value: x + N * e };
                  })
                : y || [],
            Tt = Object(q.a)(),
            Dt = Tt.isFocusVisible,
            Ct = Tt.onBlurVisible,
            Nt = Tt.ref,
            Ft = a.useState(-1),
            St = Ft[0],
            Pt = Ft[1],
            Qt = a.useRef(),
            Xt = Object($.a)(Nt, Qt),
            It = Object($.a)(e, Xt),
            Ht = Object(_.a)(function (t) {
              var e = Number(t.currentTarget.getAttribute("data-index"));
              Dt(t) && Pt(e), wt(e);
            }),
            Mt = Object(_.a)(function () {
              -1 !== St && (Pt(-1), Ct()), wt(-1);
            }),
            Gt = Object(_.a)(function (t) {
              var e = Number(t.currentTarget.getAttribute("data-index"));
              wt(e);
            }),
            Rt = Object(_.a)(function () {
              wt(-1);
            }),
            zt = "rtl" === mt.direction,
            Ut = Object(_.a)(function (t) {
              var e,
                n = Number(t.currentTarget.getAttribute("data-index")),
                r = Bt[n],
                a = (b - x) / 10,
                o = jt.map(function (t) {
                  return t.value;
                }),
                i = o.indexOf(r),
                c = zt ? "ArrowLeft" : "ArrowRight",
                s = zt ? "ArrowRight" : "ArrowLeft";
              switch (t.key) {
                case "Home":
                  e = x;
                  break;
                case "End":
                  e = b;
                  break;
                case "PageUp":
                  N && (e = r + a);
                  break;
                case "PageDown":
                  N && (e = r - a);
                  break;
                case c:
                case "ArrowUp":
                  e = N ? r + N : o[i + 1] || o[o.length - 1];
                  break;
                case s:
                case "ArrowDown":
                  e = N ? r - N : o[i - 1] || o[0];
                  break;
                default:
                  return;
              }
              if (
                (t.preventDefault(),
                N && (e = st(e, N, x)),
                (e = at(e, x, b)),
                Lt)
              ) {
                var u = e;
                (e = ut({ values: Bt, source: kt, newValue: e, index: n }).sort(
                  rt
                )),
                  lt({ sliderRef: Qt, activeIndex: e.indexOf(u) });
              }
              Ot(e), Pt(n), k && k(t, e), O && O(t, e);
            }),
            Vt = a.useRef(),
            Wt = j;
          zt && "vertical" !== j && (Wt += "-reverse");
          var Yt = function (t) {
              var e,
                n,
                r = t.finger,
                a = t.move,
                o = void 0 !== a && a,
                i = t.values,
                c = t.source,
                s = Qt.current.getBoundingClientRect(),
                u = s.width,
                l = s.height,
                p = s.bottom,
                d = s.left;
              if (
                ((e =
                  0 === Wt.indexOf("vertical") ? (p - r.y) / l : (r.x - d) / u),
                -1 !== Wt.indexOf("-reverse") && (e = 1 - e),
                (n = (function (t, e, n) {
                  return (n - e) * t + e;
                })(e, x, b)),
                N)
              )
                n = st(n, N, x);
              else {
                var f = jt.map(function (t) {
                  return t.value;
                });
                n = f[ot(f, n)];
              }
              n = at(n, x, b);
              var m = 0;
              if (Lt) {
                var A = n;
                (m = (n = ut({
                  values: i,
                  source: c,
                  newValue: n,
                  index: (m = o ? Vt.current : ot(i, n)),
                }).sort(rt)).indexOf(A)),
                  (Vt.current = m);
              }
              return { newValue: n, activeIndex: m };
            },
            Jt = Object(_.a)(function (t) {
              var e = it(t, At);
              if (e) {
                var n = Yt({ finger: e, move: !0, values: Bt, source: kt }),
                  r = n.newValue,
                  a = n.activeIndex;
                lt({ sliderRef: Qt, activeIndex: a, setActive: yt }),
                  Ot(r),
                  k && k(t, r);
              }
            }),
            Zt = Object(_.a)(function (t) {
              var e = it(t, At);
              if (e) {
                var n = Yt({ finger: e, values: Bt, source: kt }).newValue;
                yt(-1),
                  "touchend" === t.type && wt(-1),
                  O && O(t, n),
                  (At.current = void 0);
                var r = Object(K.a)(Qt.current);
                r.removeEventListener("mousemove", Jt),
                  r.removeEventListener("mouseup", Zt),
                  r.removeEventListener("touchmove", Jt),
                  r.removeEventListener("touchend", Zt);
              }
            }),
            qt = Object(_.a)(function (t) {
              t.preventDefault();
              var e = t.changedTouches[0];
              null != e && (At.current = e.identifier);
              var n = it(t, At),
                r = Yt({ finger: n, values: Bt, source: kt }),
                a = r.newValue,
                o = r.activeIndex;
              lt({ sliderRef: Qt, activeIndex: o, setActive: yt }),
                Ot(a),
                k && k(t, a);
              var i = Object(K.a)(Qt.current);
              i.addEventListener("touchmove", Jt),
                i.addEventListener("touchend", Zt);
            });
          a.useEffect(
            function () {
              var t = Qt.current;
              t.addEventListener("touchstart", qt);
              var e = Object(K.a)(t);
              return function () {
                t.removeEventListener("touchstart", qt),
                  e.removeEventListener("mousemove", Jt),
                  e.removeEventListener("mouseup", Zt),
                  e.removeEventListener("touchmove", Jt),
                  e.removeEventListener("touchend", Zt);
              };
            },
            [Zt, Jt, qt]
          );
          var Kt = Object(_.a)(function (t) {
              L && L(t), t.preventDefault();
              var e = it(t, At),
                n = Yt({ finger: e, values: Bt, source: kt }),
                r = n.newValue,
                a = n.activeIndex;
              lt({ sliderRef: Qt, activeIndex: a, setActive: yt }),
                Ot(r),
                k && k(t, r);
              var o = Object(K.a)(Qt.current);
              o.addEventListener("mousemove", Jt),
                o.addEventListener("mouseup", Zt);
            }),
            _t = ct(Lt ? Bt[0] : x, x, b),
            $t = ct(Bt[Bt.length - 1], x, b) - _t,
            te = Object(W.a)({}, pt[Wt].offset(_t), pt[Wt].leap($t));
          return a.createElement(
            p,
            Object(W.a)(
              {
                ref: It,
                className: Object(Y.default)(
                  i.root,
                  i["color".concat(Object(tt.a)(u))],
                  c,
                  m && i.disabled,
                  jt.length > 0 &&
                    jt.some(function (t) {
                      return t.label;
                    }) &&
                    i.marked,
                  !1 === Q && i.trackFalse,
                  "vertical" === j && i.vertical,
                  "inverted" === Q && i.trackInverted
                ),
                onMouseDown: Kt,
              },
              ft
            ),
            a.createElement("span", { className: i.rail }),
            a.createElement("span", { className: i.track, style: te }),
            a.createElement("input", {
              value: Bt.join(","),
              name: E,
              type: "hidden",
            }),
            jt.map(function (t, e) {
              var n,
                r = ct(t.value, x, b),
                o = pt[Wt].offset(r);
              return (
                (n =
                  !1 === Q
                    ? -1 !== Bt.indexOf(t.value)
                    : ("normal" === Q &&
                        (Lt
                          ? t.value >= Bt[0] && t.value <= Bt[Bt.length - 1]
                          : t.value <= Bt[0])) ||
                      ("inverted" === Q &&
                        (Lt
                          ? t.value <= Bt[0] || t.value >= Bt[Bt.length - 1]
                          : t.value >= Bt[0]))),
                a.createElement(
                  a.Fragment,
                  { key: t.value },
                  a.createElement("span", {
                    style: o,
                    "data-index": e,
                    className: Object(Y.default)(i.mark, n && i.markActive),
                  }),
                  null != t.label
                    ? a.createElement(
                        "span",
                        {
                          "aria-hidden": !0,
                          "data-index": e,
                          style: o,
                          className: Object(Y.default)(
                            i.markLabel,
                            n && i.markLabelActive
                          ),
                        },
                        t.label
                      )
                    : null
                )
              );
            }),
            Bt.map(function (t, e) {
              var c = ct(t, x, b),
                s = pt[Wt].offset(c);
              return a.createElement(
                H,
                {
                  key: e,
                  valueLabelFormat: Z,
                  valueLabelDisplay: G,
                  className: i.valueLabel,
                  value: "function" === typeof Z ? Z(D(t), e) : Z,
                  index: e,
                  open: bt === e || gt === e || "on" === G,
                  disabled: m,
                },
                a.createElement(S, {
                  className: Object(Y.default)(
                    i.thumb,
                    i["thumbColor".concat(Object(tt.a)(u))],
                    gt === e && i.active,
                    m && i.disabled,
                    St === e && i.focusVisible
                  ),
                  tabIndex: m ? null : 0,
                  role: "slider",
                  style: s,
                  "data-index": e,
                  "aria-label": A ? A(e) : n,
                  "aria-labelledby": r,
                  "aria-orientation": j,
                  "aria-valuemax": D(b),
                  "aria-valuemin": D(x),
                  "aria-valuenow": D(t),
                  "aria-valuetext": h ? h(D(t), e) : o,
                  onKeyDown: Ut,
                  onFocus: Ht,
                  onBlur: Mt,
                  onMouseOver: Gt,
                  onMouseLeave: Rt,
                })
              );
            })
          );
        }),
        mt = Object(X.a)(
          function (t) {
            return {
              root: {
                height: 2,
                width: "100%",
                boxSizing: "content-box",
                padding: "13px 0",
                display: "inline-block",
                position: "relative",
                cursor: "pointer",
                touchAction: "none",
                color: t.palette.primary.main,
                WebkitTapHighlightColor: "transparent",
                "&$disabled": {
                  pointerEvents: "none",
                  cursor: "default",
                  color: t.palette.grey[400],
                },
                "&$vertical": { width: 2, height: "100%", padding: "0 13px" },
                "@media (pointer: coarse)": {
                  padding: "20px 0",
                  "&$vertical": { padding: "0 20px" },
                },
                "@media print": { colorAdjust: "exact" },
              },
              colorPrimary: {},
              colorSecondary: { color: t.palette.secondary.main },
              marked: {
                marginBottom: 20,
                "&$vertical": { marginBottom: "auto", marginRight: 20 },
              },
              vertical: {},
              disabled: {},
              rail: {
                display: "block",
                position: "absolute",
                width: "100%",
                height: 2,
                borderRadius: 1,
                backgroundColor: "currentColor",
                opacity: 0.38,
                "$vertical &": { height: "100%", width: 2 },
              },
              track: {
                display: "block",
                position: "absolute",
                height: 2,
                borderRadius: 1,
                backgroundColor: "currentColor",
                "$vertical &": { width: 2 },
              },
              trackFalse: { "& $track": { display: "none" } },
              trackInverted: {
                "& $track": {
                  backgroundColor:
                    "light" === t.palette.type
                      ? Object(Z.e)(t.palette.primary.main, 0.62)
                      : Object(Z.b)(t.palette.primary.main, 0.5),
                },
                "& $rail": { opacity: 1 },
              },
              thumb: {
                position: "absolute",
                width: 12,
                height: 12,
                marginLeft: -6,
                marginTop: -5,
                boxSizing: "border-box",
                borderRadius: "50%",
                outline: 0,
                backgroundColor: "currentColor",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: t.transitions.create(["box-shadow"], {
                  duration: t.transitions.duration.shortest,
                }),
                "&::after": {
                  position: "absolute",
                  content: '""',
                  borderRadius: "50%",
                  left: -15,
                  top: -15,
                  right: -15,
                  bottom: -15,
                },
                "&$focusVisible,&:hover": {
                  boxShadow: "0px 0px 0px 8px ".concat(
                    Object(Z.a)(t.palette.primary.main, 0.16)
                  ),
                  "@media (hover: none)": { boxShadow: "none" },
                },
                "&$active": {
                  boxShadow: "0px 0px 0px 14px ".concat(
                    Object(Z.a)(t.palette.primary.main, 0.16)
                  ),
                },
                "&$disabled": {
                  width: 8,
                  height: 8,
                  marginLeft: -4,
                  marginTop: -3,
                  "&:hover": { boxShadow: "none" },
                },
                "$vertical &": { marginLeft: -5, marginBottom: -6 },
                "$vertical &$disabled": { marginLeft: -3, marginBottom: -4 },
              },
              thumbColorPrimary: {},
              thumbColorSecondary: {
                "&$focusVisible,&:hover": {
                  boxShadow: "0px 0px 0px 8px ".concat(
                    Object(Z.a)(t.palette.secondary.main, 0.16)
                  ),
                },
                "&$active": {
                  boxShadow: "0px 0px 0px 14px ".concat(
                    Object(Z.a)(t.palette.secondary.main, 0.16)
                  ),
                },
              },
              active: {},
              focusVisible: {},
              valueLabel: { left: "calc(-50% - 4px)" },
              mark: {
                position: "absolute",
                width: 2,
                height: 2,
                borderRadius: 1,
                backgroundColor: "currentColor",
              },
              markActive: {
                backgroundColor: t.palette.background.paper,
                opacity: 0.8,
              },
              markLabel: Object(W.a)({}, t.typography.body2, {
                color: t.palette.text.secondary,
                position: "absolute",
                top: 26,
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                "$vertical &": {
                  top: "auto",
                  left: 26,
                  transform: "translateY(50%)",
                },
                "@media (pointer: coarse)": {
                  top: 40,
                  "$vertical &": { left: 31 },
                },
              }),
              markLabelActive: { color: t.palette.text.primary },
            };
          },
          { name: "MuiSlider" }
        )(ft),
        At = function (t) {
          var e = t.onChange,
            n = t.max,
            r = t.min,
            i = t.step,
            c = t.marks,
            s = t.value,
            u = Object(a.useCallback)(
              function (t, n) {
                e(n);
              },
              [e]
            );
          return o.a.createElement(gt, {
            marks: c,
            step: i,
            min: r,
            max: n,
            onChange: u,
            value: s,
          });
        };
      At.defaultProps = { step: 1, marks: [], min: 0 };
      var ht =
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
        gt = Object(X.a)({
          root: { color: "#8b67d3", height: 2, padding: "15px 0" },
          thumb: {
            height: 16,
            width: 16,
            backgroundColor: "#ffffff",
            boxShadow: ht,
            marginTop: -8,
            marginLeft: -8,
            "&:focus, &:hover, &$active": {
              boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
              "@media (hover: none)": { boxShadow: ht },
            },
          },
          active: {},
          valueLabel: {
            left: "calc(-50% + 12px)",
            top: -22,
            "& *": { background: "transparent", color: "#000" },
          },
          track: { height: 2 },
          rail: { height: 2, opacity: 0.5, backgroundColor: "#bfbfbf" },
          mark: {
            backgroundColor: "#bfbfbf",
            height: 8,
            width: 1,
            marginTop: -3,
          },
          markActive: { opacity: 1, backgroundColor: "currentColor" },
        })(mt);
      function yt() {
        yt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var vt = [
          { value: 0, label: "0%" },
          { value: 25, label: "25%" },
          { value: 50, label: "50%" },
          { value: 75, label: "75%" },
          { value: 100, label: "100%" },
        ],
        bt = function (t) {
          var e = t.isOpened,
            n = t.handleDeposit,
            r = t.handleWithdraw,
            c = t.depositTokens,
            u = t.symbol,
            l = t.depositAmount,
            p = t.withdrawTokens,
            f = t.syntheticPrice,
            A = Object(a.useState)(""),
            g = Object(i.a)(A, 2),
            y = g[0],
            v = g[1],
            b = Object(a.useState)(""),
            w = Object(i.a)(b, 2),
            x = w[0],
            k = w[1],
            L = Object(a.useState)(!1),
            Q = Object(i.a)(L, 2),
            X = Q[0],
            I = Q[1],
            H = Object(a.useState)(0),
            M = Object(i.a)(H, 2),
            R = M[0],
            z = M[1],
            U = Object(a.useState)(0),
            V = Object(i.a)(U, 2),
            W = V[0],
            Y = V[1],
            J = Object(a.useState)(c[0]),
            Z = Object(i.a)(J, 2),
            q = Z[0],
            K = Z[1],
            _ = Object(a.useState)(p[0]),
            $ = Object(i.a)(_, 2),
            tt = $[0],
            et = ($[1], O()),
            nt = Object(C.a)(q),
            rt = nt.balance,
            at = nt.updateBalance,
            ot = Object(N.a)(Object(S.b)(), q.address),
            it = ot.allowance,
            ct = ot.updateAllowance,
            st = ot.allowanceLoading,
            ut = Object(F.a)(Object(S.b)(), q.address),
            lt = ut.approve,
            pt = ut.approveLoading,
            dt = Object(a.useMemo)(
              function () {
                return "BNB" === q.symbol;
              },
              [q]
            ),
            ft = Object(a.useMemo)(
              function () {
                return Object(D.b)(rt, 5, q.decimals);
              },
              [rt, q]
            ),
            mt = Object(a.useMemo)(
              function () {
                return Object(D.b)(l, 3, 18);
              },
              [l]
            ),
            ht = Object(a.useMemo)(
              function () {
                return Object(D.a)(y, q.decimals);
              },
              [y, q]
            ),
            gt = Object(a.useMemo)(
              function () {
                return Object(D.a)(x, 18);
              },
              [x]
            ),
            bt = Object(a.useMemo)(
              function () {
                if (gt.isNaN()) return "";
                var t = B.a.min(gt, l);
                return "You receive ~$".concat(Object(D.b)(t.times(f)));
              },
              [f, gt, l]
            ),
            wt = Object(a.useMemo)(
              function () {
                return ht.isNaN() || ht.gt(rt) || ht.lte(0) || X;
              },
              [ht, rt, X]
            ),
            xt = Object(a.useMemo)(
              function () {
                return gt.isNaN() || gt.gt(l) || gt.lte(0) || X;
              },
              [gt, l, X]
            ),
            Et = Object(a.useMemo)(
              function () {
                return Object(D.e)(P.b).lt(it);
              },
              [it]
            ),
            kt = c.map(function (t) {
              return { title: t.symbol, value: t.symbol };
            }),
            Ot = (function () {
              var t = Object(E.a)(
                yt().mark(function t() {
                  return yt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), lt();
                        case 2:
                          return (t.next = 4), ct();
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            Lt = (function () {
              var t = Object(E.a)(
                yt().mark(function t() {
                  return yt().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0), I(!0), (t.next = 4), n(ht, dt, q)
                            );
                          case 4:
                            return (t.next = 6), at();
                          case 6:
                            return (
                              (t.prev = 6), I(!1), v(""), z(0), t.finish(6)
                            );
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, , 6, 11]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            Bt = (function () {
              var t = Object(E.a)(
                yt().mark(function t() {
                  return yt().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0), I(!0), (t.next = 4), r(gt, dt, tt)
                            );
                          case 4:
                            return (t.next = 6), at();
                          case 6:
                            return (
                              (t.prev = 6), I(!1), k(""), Y(0), t.finish(6)
                            );
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, , 6, 11]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            s.a,
            {
              container: !0,
              className: h()(
                et.inputWrapper,
                Object(m.a)({}, et.inputOpened, e),
                Object(m.a)({}, et.inputClosed, !e)
              ),
            },
            o.a.createElement(
              s.a,
              { item: !0, lg: 5, xs: 12 },
              o.a.createElement(
                d.v,
                { alignItems: "flex-end", justifyContent: "center" },
                o.a.createElement(T.a, {
                  max: ft,
                  symbol: q.symbol,
                  onChange: function (t) {
                    v(t.currentTarget.value), z(0);
                  },
                  value: y,
                  onSelectMax: function () {
                    rt.eq(0) ||
                      (v(Object(D.b)(rt, q.decimals, q.decimals)), z(100));
                  },
                }),
                o.a.createElement(
                  "div",
                  { className: et.selectWrapper },
                  o.a.createElement(
                    "div",
                    { className: et.selectText },
                    "Deposit token"
                  ),
                  o.a.createElement(G, {
                    items: kt,
                    onChange: function (t) {
                      var e = c.find(function (e) {
                        return e.symbol === t;
                      });
                      K(e);
                    },
                    value: q.symbol,
                  })
                )
              ),
              o.a.createElement(
                "div",
                { className: et.sliderWrapper },
                o.a.createElement(At, {
                  marks: vt,
                  max: 100,
                  value: R,
                  onChange: function (t) {
                    rt.eq(0) ||
                      (z(t),
                      v(
                        100 === t
                          ? Object(D.b)(rt, q.decimals, q.decimals)
                          : Object(D.b)(
                              rt.times(t).div(100),
                              q.decimals,
                              q.decimals
                            )
                      ));
                  },
                })
              ),
              st
                ? o.a.createElement(
                    j.a,
                    {
                      className: h()(
                        "shinyButtonSecondary",
                        Object(m.a)({}, et.disabled, !0)
                      ),
                      style: { marginTop: "20px", width: "100%" },
                      disabled: !0,
                    },
                    "Loading..."
                  )
                : Et
                ? o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      j.a,
                      {
                        className: h()(
                          "shinyButtonSecondary",
                          Object(m.a)({}, et.disabled, wt)
                        ),
                        style: { marginTop: "20px", width: "100%" },
                        disabled: wt,
                        onClick: Lt,
                      },
                      " Deposit"
                    )
                  )
                : o.a.createElement(
                    j.a,
                    {
                      className: h()(
                        "shinyButtonSecondary",
                        Object(m.a)({}, et.disabled, pt)
                      ),
                      onClick: Ot,
                      style: { marginTop: "20px", width: "100%" },
                      disabled: pt,
                    },
                    "Approve ",
                    q.symbol
                  ),
              o.a.createElement(
                "div",
                { className: et.actionDescription },
                "You will receive ",
                u,
                " token as a receipt for your deposited assets. This token is needed to withdraw your assets, do not trade or transfer to strangers!"
              )
            ),
            o.a.createElement(
              s.a,
              { item: !0, lg: 5, xs: 12 },
              o.a.createElement(T.a, {
                max: mt,
                symbol: u,
                onChange: function (t) {
                  k(t.currentTarget.value);
                },
                value: x,
                onSelectMax: function () {
                  l.eq(0) || (k(Object(D.b)(l, 18, 18)), Y(100));
                },
                rightSection: bt,
              }),
              o.a.createElement(
                "div",
                { className: et.sliderWrapper },
                o.a.createElement(At, {
                  marks: vt,
                  max: 100,
                  value: W,
                  onChange: function (t) {
                    l.eq(0) ||
                      (Y(t),
                      k(
                        100 === t
                          ? Object(D.b)(l, tt.decimals, tt.decimals)
                          : Object(D.b)(
                              l.times(t).div(100),
                              tt.decimals,
                              tt.decimals
                            )
                      ));
                  },
                })
              ),
              o.a.createElement(
                j.a,
                {
                  className: h()(
                    "shinyButtonSecondary",
                    Object(m.a)({}, et.disabled, xt)
                  ),
                  style: { marginTop: "20px", width: "100%" },
                  onClick: Bt,
                  disabled: xt,
                },
                " Withdraw"
              ),
              o.a.createElement(
                "div",
                { className: et.actionDescription },
                "Redeem ",
                u,
                " token for USDC"
              )
            )
          );
        },
        wt = n(155),
        xt = n(280),
        Et = n(135),
        kt = n.n(Et),
        Ot = n(152),
        Lt = function (t, e, n) {
          return new (
            null !== n && void 0 !== n ? n : new kt.a(Object(Ot.a)().provider)
          ).eth.Contract(t, e);
        },
        Bt = n(1694);
      function jt(t) {
        return (function (t, e) {
          var n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r = Object(xt.a)(),
            o = r.provider,
            i = r.myAccount,
            c = Object(a.useMemo)(
              function () {
                return n ? new kt.a(o.provider) : null;
              },
              [n, o, i]
            ),
            s = Object(a.useMemo)(
              function () {
                return t && e && (!n || o);
              },
              [t, e, o, n]
            );
          return Object(a.useMemo)(
            function () {
              if (!s) return null;
              try {
                return Lt(e, t, c);
              } catch (n) {
                return console.error("Failed to get contract", n), null;
              }
            },
            [t, e, c, s]
          );
        })(Object(S.b)(), Bt, t);
      }
      var Tt = n(69);
      function Dt() {
        Dt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      function Ct(t, e, n, r) {
        return new Promise(function (a, o) {
          var i;
          (i = t.methods)[e]
            .apply(i, Object(Tt.a)(n))
            .send(Object(wt.a)({}, r))
            .once(
              "receipt",
              (function () {
                var t = Object(E.a)(
                  Dt().mark(function t(e) {
                    return Dt().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt("return", a(e));
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()
            )
            .on("error", function (t) {
              return o(t);
            });
        });
      }
      function Nt() {
        Nt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var Ft = { loading: !1, error: null };
      function St() {
        St = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var Pt = { loading: !1, error: null };
      function Qt() {
        Qt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var Xt = function (t) {
          var e = t.strategy,
            n = t.udpateStrategies,
            r = e.apy,
            c = e.tvlUsd,
            u = e.depositAmount,
            l = e.syntheticPrice,
            p = e.apyDaily,
            d = e.address,
            f = e.depositTokens,
            A = e.symbol,
            g = e.icon,
            y = e.nativeToken,
            v = e.title,
            b = e.withdrawTokens,
            w = k(),
            x = Object(xt.a)().isUnlocked,
            O = Object(a.useState)(!1),
            L = Object(i.a)(O, 2),
            B = L[0],
            j = L[1],
            T = Object(a.useMemo)(
              function () {
                return Object(D.c)(p.times(100));
              },
              [p]
            ),
            C = Object(a.useMemo)(
              function () {
                return Object(D.c)(r.times(100));
              },
              [r]
            ),
            N = Object(a.useMemo)(
              function () {
                return Object(D.c)(c);
              },
              [c]
            ),
            F = Object(a.useMemo)(
              function () {
                return Object(D.c)(u.times(l));
              },
              [u, l]
            ),
            S = (function (t, e) {
              var n = Object(xt.a)().myAccount,
                r = Object(a.useState)(Ft),
                o = Object(i.a)(r, 2),
                c = o[0],
                s = o[1],
                u = jt();
              return {
                deposit: Object(a.useCallback)(
                  (function () {
                    var r = Object(E.a)(
                      Nt().mark(function r(a, o, i) {
                        var c;
                        return Nt().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  if (t && n) {
                                    r.next = 2;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 2:
                                  if (
                                    ((r.prev = 2),
                                    s(function (t) {
                                      return Object(wt.a)(
                                        Object(wt.a)({}, t),
                                        {},
                                        { loading: !0 }
                                      );
                                    }),
                                    !i.isLP)
                                  ) {
                                    r.next = 10;
                                    break;
                                  }
                                  return (
                                    (r.next = 7),
                                    Ct(
                                      u,
                                      "depositLP",
                                      [t, i.address, a.toString()],
                                      { from: n }
                                    )
                                  );
                                case 7:
                                  (c = r.sent), (r.next = 19);
                                  break;
                                case 10:
                                  if (!o) {
                                    r.next = 16;
                                    break;
                                  }
                                  return (
                                    (r.next = 13),
                                    Ct(u, "deposit(address)", [t], {
                                      from: n,
                                      value: a.toString(),
                                    })
                                  );
                                case 13:
                                  (c = r.sent), (r.next = 19);
                                  break;
                                case 16:
                                  return (
                                    (r.next = 18),
                                    Ct(
                                      u,
                                      "deposit(address,uint256,address[])",
                                      [t, a.toString(), [i.address, e]],
                                      { from: n }
                                    )
                                  );
                                case 18:
                                  c = r.sent;
                                case 19:
                                  return (
                                    s(function (t) {
                                      return Object(wt.a)(
                                        Object(wt.a)({}, t),
                                        {},
                                        { loading: !1 }
                                      );
                                    }),
                                    r.abrupt("return", c)
                                  );
                                case 23:
                                  (r.prev = 23),
                                    (r.t0 = r.catch(2)),
                                    console.error(r.t0),
                                    s(function (t) {
                                      return Object(wt.a)(
                                        Object(wt.a)({}, t),
                                        {},
                                        { loading: !1, error: r.t0 }
                                      );
                                    });
                                case 27:
                                case "end":
                                  return r.stop();
                              }
                          },
                          r,
                          null,
                          [[2, 23]]
                        );
                      })
                    );
                    return function (t, e, n) {
                      return r.apply(this, arguments);
                    };
                  })(),
                  [t, n, e]
                ),
                state: c,
              };
            })(d, y).deposit,
            P = (function (t, e) {
              var n = Object(xt.a)().myAccount,
                r = Object(a.useState)(Pt),
                o = Object(i.a)(r, 2),
                c = o[0],
                s = o[1],
                u = jt();
              return {
                withdraw: Object(a.useCallback)(
                  (function () {
                    var r = Object(E.a)(
                      St().mark(function r(a, o, i) {
                        var c;
                        return St().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  if (t && n) {
                                    r.next = 2;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 2:
                                  if (
                                    ((r.prev = 2),
                                    s(function (t) {
                                      return Object(wt.a)(
                                        Object(wt.a)({}, t),
                                        {},
                                        { loading: !0 }
                                      );
                                    }),
                                    o)
                                  ) {
                                    r.next = 10;
                                    break;
                                  }
                                  return (
                                    (r.next = 7),
                                    Ct(u, "withdraw", [t, a, [e, i.address]], {
                                      from: n,
                                    })
                                  );
                                case 7:
                                  (c = r.sent), (r.next = 10);
                                  break;
                                case 10:
                                  return (
                                    s(function (t) {
                                      return Object(wt.a)(
                                        Object(wt.a)({}, t),
                                        {},
                                        { loading: !1 }
                                      );
                                    }),
                                    r.abrupt("return", c)
                                  );
                                case 14:
                                  (r.prev = 14),
                                    (r.t0 = r.catch(2)),
                                    console.error(r.t0),
                                    s(function (t) {
                                      return Object(wt.a)(
                                        Object(wt.a)({}, t),
                                        {},
                                        { loading: !1, error: r.t0 }
                                      );
                                    });
                                case 18:
                                case "end":
                                  return r.stop();
                              }
                          },
                          r,
                          null,
                          [[2, 14]]
                        );
                      })
                    );
                    return function (t, e, n) {
                      return r.apply(this, arguments);
                    };
                  })(),
                  [t, e, n]
                ),
                state: c,
              };
            })(d, y).withdraw,
            Q = (function () {
              var t = Object(E.a)(
                Qt().mark(function t(e, r, a) {
                  return Qt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), S(e, r, a);
                        case 2:
                          return (t.next = 4), n();
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n, r) {
                return t.apply(this, arguments);
              };
            })(),
            X = (function () {
              var t = Object(E.a)(
                Qt().mark(function t(e, r, a) {
                  return Qt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), P(e, r, a);
                        case 2:
                          return (t.next = 4), n();
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n, r) {
                return t.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement("h2", { className: w.strategyTitle }, v),
            o.a.createElement(
              s.a,
              {
                container: !0,
                className: h()(
                  w.strategyWrap,
                  Object(m.a)({}, w.inputClose, !B)
                ),
                onClick: function () {
                  x && j(!B);
                },
              },
              o.a.createElement(
                s.a,
                { item: !0, lg: 6, xs: 12 },
                o.a.createElement(
                  "div",
                  { className: w.strategyDiagram },
                  o.a.createElement("img", { src: g, alt: "StrategyDiagram" })
                )
              ),
              o.a.createElement(
                s.a,
                { item: !0, lg: 6, xs: 12 },
                o.a.createElement(
                  "div",
                  { className: w.strategyText },
                  o.a.createElement(
                    "div",
                    { className: w.contractProperties },
                    o.a.createElement("div", null, "$", F),
                    o.a.createElement("div", null, "Deposited")
                  ),
                  o.a.createElement(
                    "div",
                    { className: w.contractProperties },
                    o.a.createElement("div", null, C, "%"),
                    o.a.createElement("div", null, "APY")
                  ),
                  o.a.createElement(
                    "div",
                    { className: w.contractProperties },
                    o.a.createElement("div", null, T, "%"),
                    o.a.createElement("div", null, "Daily")
                  ),
                  o.a.createElement(
                    "div",
                    { className: w.contractProperties },
                    o.a.createElement("div", null, "$", N),
                    o.a.createElement("div", null, "TVL")
                  )
                )
              )
            ),
            o.a.createElement(bt, {
              depositTokens: f,
              withdrawTokens: b,
              isOpened: B,
              handleDeposit: Q,
              handleWithdraw: X,
              symbol: A,
              depositAmount: u,
              syntheticPrice: l,
            })
          );
        },
        It = n(283),
        Ht = o.a.createContext(null),
        Mt = function (t) {
          var e = t.config,
            n = t.children;
          return o.a.createElement(Ht.Provider, { value: e }, " ", n, " ");
        },
        Gt = n(229),
        Rt = n(1695),
        zt = n(294),
        Ut = n(1696),
        Vt = n(185);
      var Wt = function (t) {
        return new Array(t).fill(0).map(function (t, e) {
          return e;
        });
      };
      function Yt() {
        Yt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var Jt = function (t) {
          return (
            !t ||
            !t.lastUpdateTime ||
            t.lastUpdateTime.getTime() + 6e5 < Date.now()
          );
        },
        Zt = {};
      function qt(t, e, n, r) {
        return Kt.apply(this, arguments);
      }
      function Kt() {
        return (Kt = Object(E.a)(
          Yt().mark(function t(e, n, r, a) {
            var o, i;
            return Yt().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((o = []
                          .concat(Object(Tt.a)(r && r.length ? r : n), [e.name])
                          .map(function (t) {
                            return JSON.stringify(t);
                          })
                          .join("---")),
                        !Jt(Zt[o], a))
                      ) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        e.apply(void 0, Object(Tt.a)(n))
                      );
                    case 5:
                      (i = t.sent),
                        (Zt[o] = { data: i, lastUpdateTime: new Date() }),
                        (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(2)),
                        console.error(
                          "Failed to update cached data. Key: "
                            .concat(o, ", error: ")
                            .concat(t.t0)
                        );
                    case 12:
                      return t.abrupt("return", Zt[o].data);
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[2, 9]]
            );
          })
        )).apply(this, arguments);
      }
      var _t,
        $t,
        te = n(1697),
        ee = n.n(te),
        ne = n(1698),
        re = n.n(ne),
        ae = n(1699),
        oe = n.n(ae),
        ie = n(1700),
        ce = n.n(ie),
        se =
          ((_t = {}),
          Object(m.a)(_t, r.COMPLETE, {
            tokens: [
              { icon: ee.a, tokenName: "USDEX/USDC" },
              { icon: re.a, tokenName: "dexSHARE/BNB" },
              { icon: oe.a, tokenName: "dexSHARE" },
            ],
            title: "COMPLETE STRATEGIES",
          }),
          Object(m.a)(_t, r.DUAL_FARMS, { tokens: [], title: "DUAL FARMS" }),
          Object(m.a)(_t, r.SINGLE_FARM, { tokens: [], title: "SINGLE FARMS" }),
          _t),
        ue =
          (($t = {}),
          Object(m.a)($t, r.COMPLETE, [
            {
              address: "0x9963866dEb47189E2456A0f0b3ddBF6Fd37F1B5f",
              icon: ce.a,
              title: "Conservative",
              depositTokens: [
                P.c.usdex,
                P.c.dexshare,
                P.c.usdexUsdc,
                P.c.usdexBnb,
                P.c.dexshareBnb,
                P.c.usdc,
                P.c.bnb,
              ],
              withdrawTokens: [P.c.usdex],
              hotness: 1,
            },
          ]),
          Object(m.a)($t, r.DUAL_FARMS, []),
          Object(m.a)($t, r.SINGLE_FARM, []),
          $t);
      function le() {
        le = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new E(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return O();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = b(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(k([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function y(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function v(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function b(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function w(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(w, this),
            this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          y(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = v),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new v(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), x(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var pe = function (t) {
          return Object.keys(t).reduce(function (e, n) {
            return [].concat(
              Object(Tt.a)(e),
              Object(Tt.a)(
                t[n].map(function (t) {
                  return Object(wt.a)(
                    Object(wt.a)({}, t),
                    {},
                    {
                      type: Number(n),
                      totalSupply: Object(D.e)(0),
                      symbol: "",
                      tvlUsd: Object(D.e)(0),
                      syntheticPrice: Object(D.e)(0),
                      depositAmount: Object(D.e)(0),
                      apy: Object(D.e)(0),
                      apyDaily: Object(D.e)(0),
                    }
                  );
                })
              )
            );
          }, []);
        },
        de = o.a.createContext({
          strategies: [],
          loading: !0,
          udpateStrategies: (function () {
            var t = Object(E.a)(
              le().mark(function t() {
                return le().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
        });
      function fe(t, e, n) {
        return me.apply(this, arguments);
      }
      function me() {
        return (me = Object(E.a)(
          le().mark(function t(e, n, r) {
            var a, o, c, s, u, l, p, d;
            return le().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = new It.MultiCall(n, Vt.g[56])),
                      (o = e.map(function (t) {
                        return Object(Gt.a)(n, Rt, t.address);
                      })),
                      (t.next = 4),
                      a.all([
                        e.map(function (t, e) {
                          return {
                            symbol: o[e].methods.symbol(),
                            nativeToken: o[e].methods.native(),
                            farmsCount: o[e].methods.farmsCount(),
                            totalSupply: o[e].methods.totalSupply(),
                          };
                        }),
                      ])
                    );
                  case 4:
                    if (
                      ((c = t.sent),
                      (s = Object(i.a)(c, 1)),
                      (u = s[0]),
                      (l = []),
                      !r)
                    ) {
                      t.next = 12;
                      break;
                    }
                    return (
                      (t.next = 11),
                      a.all([
                        e.map(function (t, e) {
                          return { balanceOf: o[e].methods.balanceOf(r) };
                        }),
                      ])
                    );
                  case 11:
                    l = t.sent[0];
                  case 12:
                    return (
                      e.forEach(function (t, e) {
                        (t.totalSupply = Object(D.e)(u[e].totalSupply)),
                          (t.symbol = u[e].symbol),
                          (t.nativeToken = u[e].nativeToken),
                          (t.farmsInfo = []),
                          r && (t.depositAmount = Object(D.e)(l[e].balanceOf));
                      }),
                      (t.next = 15),
                      a.all(
                        e.map(function (t, e) {
                          return Wt(Number(u[e].farmsCount)).map(function (t) {
                            return { farm: o[e].methods.farms(t) };
                          });
                        })
                      )
                    );
                  case 15:
                    return (
                      t.sent.forEach(function (t, r) {
                        return t.forEach(function (t) {
                          var a = t.farm,
                            o = {
                              pool: a[0],
                              id: Number(a[1]),
                              percent: Number(a[2]),
                              depositToken: a[4],
                              rewardToken: a[5],
                              contract: Object(Gt.a)(n, Ut, a[0]),
                              sharePerSecods: Object(D.e)(0),
                              strategyDeposited: Object(D.e)(0),
                              totalDeposited: Object(D.e)(0),
                              rewards: Object(D.e)(0),
                              tvlUsd: Object(D.e)(0),
                              apy: Object(D.e)(0),
                              apyPerDay: Object(D.e)(0),
                            };
                          e[r].farmsInfo.push(o);
                        });
                      }),
                      (t.next = 19),
                      a.all(
                        e.map(function (t) {
                          var e = t.address;
                          return t.farmsInfo.map(function (t) {
                            return {
                              userInfo: t.contract.methods.userInfo(t.id, e),
                              poolInfo: t.contract.methods.poolInfo(t.id),
                              sharesPerSecond:
                                t.contract.methods.sharesPerSecond(),
                              totalAllocPoint:
                                t.contract.methods.totalAllocPoint(),
                              pendingShare: t.contract.methods.pendingShare(
                                t.id,
                                e
                              ),
                            };
                          });
                        })
                      )
                    );
                  case 19:
                    return (
                      (p = t.sent),
                      (t.next = 22),
                      a.all(
                        e.map(function (t) {
                          return t.farmsInfo.map(function (t) {
                            return {
                              totalDeposited: Object(Gt.a)(
                                n,
                                zt,
                                t.depositToken
                              ).methods.balanceOf(t.pool),
                            };
                          });
                        })
                      )
                    );
                  case 22:
                    return (
                      (d = t.sent),
                      e.forEach(function (t, e) {
                        return t.farmsInfo.forEach(function (t, n) {
                          var r = p[e][n],
                            a = d[e][n];
                          (t.strategyDeposited = Object(D.e)(r.userInfo[0])),
                            (t.totalDeposited = Object(D.e)(a.totalDeposited)),
                            (t.rewards = Object(D.e)(r.pendingShare)),
                            (t.sharePerSecods = Object(D.e)(r.sharesPerSecond)
                              .times(r.poolInfo[1])
                              .div(r.totalAllocPoint));
                        });
                      }),
                      t.abrupt("return", e)
                    );
                  case 25:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Ae(t, e) {
        return he.apply(this, arguments);
      }
      function he() {
        return (he = Object(E.a)(
          le().mark(function t(e, n) {
            var r, a;
            return le().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = Object(D.e)(0)),
                      (t.next = 3),
                      Promise.all(
                        e.farmsInfo.map(
                          (function () {
                            var t = Object(E.a)(
                              le().mark(function t(e) {
                                var a, o, i;
                                return le().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          (a = n.findERC20ByAddress(
                                            e.depositToken
                                          ))
                                        ) {
                                          t.next = 4;
                                          break;
                                        }
                                        return (
                                          console.warn(
                                            "Could not get price for deposit token ".concat(
                                              e.depositToken
                                            )
                                          ),
                                          t.abrupt("return")
                                        );
                                      case 4:
                                        return (
                                          (t.next = 6),
                                          qt(
                                            n.getDepositTokenPriceInDollars.bind(
                                              n
                                            ),
                                            [a.symbol, a],
                                            [a.symbol]
                                          )
                                        );
                                      case 6:
                                        (o = t.sent),
                                          (i = Object(D.e)(o)
                                            .times(e.strategyDeposited)
                                            .div(Math.pow(10, a.decimal))),
                                          (e.tvlUsd = i),
                                          (r = r.plus(i));
                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )
                      )
                    );
                  case 3:
                    return (
                      (a = e.totalSupply.gt(0)
                        ? r.div(e.totalSupply)
                        : Object(D.e)(0)),
                      (e.tvlUsd = r),
                      (e.syntheticPrice = a),
                      t.abrupt("return", r)
                    );
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function ge(t, e) {
        return ye.apply(this, arguments);
      }
      function ye() {
        return (ye = Object(E.a)(
          le().mark(function t(e, n) {
            var r;
            return le().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = []),
                      (t.next = 3),
                      Promise.all(
                        e.farmsInfo.map(
                          (function () {
                            var t = Object(E.a)(
                              le().mark(function t(e) {
                                var a, o, c, s, u, l, p, d, f, m;
                                return le().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((a = n.findERC20ByAddress(
                                            e.rewardToken
                                          )),
                                          (o = n.findERC20ByAddress(
                                            e.depositToken
                                          )),
                                          a)
                                        ) {
                                          t.next = 6;
                                          break;
                                        }
                                        return (
                                          console.warn(
                                            "Could not get price for deposit token ".concat(
                                              e.depositToken
                                            )
                                          ),
                                          r.push(Object(D.e)(0)),
                                          t.abrupt("return")
                                        );
                                      case 6:
                                        return (
                                          (t.next = 8),
                                          Promise.all([
                                            qt(
                                              n.getDepositTokenPriceInDollars.bind(
                                                n
                                              ),
                                              [a.symbol, a],
                                              [a.symbol]
                                            ),
                                            qt(
                                              n.getDepositTokenPriceInDollars.bind(
                                                n
                                              ),
                                              [o.symbol, o],
                                              [o.symbol]
                                            ),
                                          ])
                                        );
                                      case 8:
                                        (c = t.sent),
                                          (s = Object(i.a)(c, 2)),
                                          (u = s[0]),
                                          (l = s[1]),
                                          (p = e.sharePerSecods
                                            .times(31536e3)
                                            .times(u)),
                                          4380,
                                          (d = e.totalDeposited.times(l)),
                                          (f = p.div(d)),
                                          (m = f.div(4380)),
                                          (e.apy = Object(D.e)(
                                            Math.pow(Number(m) + 1, 4380) - 1
                                          )),
                                          (e.apyPerDay = Object(D.e)(
                                            Math.pow(Number(m) + 1, 12) - 1
                                          ));
                                      case 19:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )
                      )
                    );
                  case 3:
                    return (
                      (e.apy = e.farmsInfo.reduce(function (t, e) {
                        return t.plus(e.apy.times(e.percent).div(100));
                      }, Object(D.e)(0))),
                      (e.apyDaily = e.farmsInfo.reduce(function (t, e) {
                        return t.plus(e.apyPerDay.times(e.percent).div(100));
                      }, Object(D.e)(0))),
                      t.abrupt("return", B.a.sum.apply(B.a, r))
                    );
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var ve,
        be = function (t) {
          var e = t.children,
            n = o.a.useContext(Ht),
            r = Object(a.useState)(pe(n)),
            c = Object(i.a)(r, 2),
            s = c[0],
            u = c[1],
            l = Object(a.useState)(!0),
            p = Object(i.a)(l, 2),
            d = p[0],
            f = p[1],
            m = Object(xt.a)(),
            A = Object(a.useMemo)(
              function () {
                return m.isReady && new kt.a(m.provider.provider);
              },
              [m, m.isReady]
            );
          Object(a.useEffect)(
            function () {
              A &&
                Object(E.a)(
                  le().mark(function t() {
                    return le().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), h();
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
            },
            [A, n]
          );
          var h = (function () {
            var t = Object(E.a)(
              le().mark(function t() {
                var e, r;
                return le().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (e = m.myAccount),
                            f(!0),
                            (t.next = 5),
                            fe(pe(n), A, e)
                          );
                        case 5:
                          return (
                            (r = t.sent),
                            (t.next = 8),
                            Promise.all([
                              Promise.all(
                                r.map(
                                  (function () {
                                    var t = Object(E.a)(
                                      le().mark(function t(e) {
                                        return le().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (t.next = 2), Ae(e, m);
                                              case 2:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    );
                                    return function (e) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              ),
                              Promise.all(
                                r.map(
                                  (function () {
                                    var t = Object(E.a)(
                                      le().mark(function t(e) {
                                        return le().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (t.next = 2), ge(e, m);
                                              case 2:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    );
                                    return function (e) {
                                      return t.apply(this, arguments);
                                    };
                                  })()
                                )
                              ),
                            ])
                          );
                        case 8:
                          u(r), (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            console.error(t.t0);
                        case 14:
                          return (t.prev = 14), f(!1), t.finish(14);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11, 14, 17]]
                );
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return o.a.createElement(
            de.Provider,
            { value: { strategies: s, loading: d, udpateStrategies: h } },
            " ",
            e,
            " "
          );
        },
        we = n(929),
        xe = Object(g.a)(function () {
          return {
            gridContainer: {
              marginTop: "35px",
              backgroundColor: "#8b67d3",
              borderRadius: "10px",
              padding: "20px",
            },
            strategyTitle: {
              fontSize: "36px",
              color: "#8b67d3",
              "& span": { color: "#FFFFFF" },
            },
            strategyText: { color: "#FFFFFF", fontSize: "14px" },
            tvlValue: {
              fontSize: "36px",
              lineHeight: "44px",
              marginTop: "80px",
              color: "#FFFFFF",
              "@media (max-width: 1280px)": {
                marginTop: "20px",
                fontSize: "32px",
              },
            },
            tokenNames: {
              fontSize: "18px",
              marginTop: "80px",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "space-around",
              "& img": { width: "38px", height: "38px" },
              "@media (max-width: 1280px)": {
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
              },
            },
            wrapToken: { display: "flex", alignItems: "center", gap: "6px" },
            spinnerWrap: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 500px)",
            },
            comingSoonContainer: {
              marginTop: "10px",
              paddingTop: "50px",
              textAlign: "center",
              "& p": { fontSize: "36px", "& span": { color: "#FFFFFF" } },
            },
            filterWrapper: {
              display: "flex",
              width: "100%",
              justifyContent: "end",
            },
            filterSelect: {
              marginTop: 20,
              width: 200,
              "& .title": {
                alignItems: "center",
                marginBottom: "5px",
                color: "#FFFFFF",
                display: "flex",
                fontSize: "14px",
                fontWeight: 700,
                height: "35px",
              },
            },
          };
        });
      var Ee = Object(u.c)(
          ve ||
            (ve = Object(c.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          x.a
        ),
        ke = [
          { value: v.Hotness, title: "Hotness" },
          { value: v.Deposit, title: "Deposit" },
          { value: v.APY, title: "APY" },
          { value: v.Liquidity, title: "Liquidity" },
        ],
        Oe = function () {
          var t = xe(),
            e = Object(a.useState)(r.COMPLETE),
            n = Object(i.a)(e, 2),
            c = n[0],
            u = n[1],
            l = Object(a.useState)(v.Hotness),
            m = Object(i.a)(l, 2),
            A = m[0],
            h = m[1],
            g = o.a.useContext(de),
            y = g.strategies,
            w = g.loading,
            x = g.udpateStrategies,
            E = Object(a.useMemo)(
              function () {
                return y.filter(function (t) {
                  return t.type === c;
                });
              },
              [y, c, w]
            ),
            k = Object(a.useMemo)(
              function () {
                return (function (t, e) {
                  var n = Object(Tt.a)(t);
                  switch (e) {
                    case v.Hotness:
                      return n.sort(function (t, e) {
                        return t.hotness - e.hotness;
                      });
                    case v.Liquidity:
                      return n.sort(function (t, e) {
                        return e.tvlUsd.minus(t.tvlUsd).toNumber();
                      });
                    case v.APY:
                      return n.sort(function (t, e) {
                        return e.apy.minus(t.apy).toNumber();
                      });
                    case v.Deposit:
                      return n.sort(function (t, e) {
                        var n = t.depositAmount.times(t.syntheticPrice);
                        return e.depositAmount
                          .times(e.syntheticPrice)
                          .minus(n)
                          .toNumber();
                      });
                    default:
                      return n;
                  }
                })(E, A);
              },
              [E, A]
            ),
            O = Object(a.useMemo)(
              function () {
                return se[c];
              },
              [c]
            ),
            L = Object(a.useMemo)(
              function () {
                return y.reduce(function (t, e) {
                  var n = e.tvlUsd;
                  return t.plus(n);
                }, Object(we.b)(0));
              },
              [y, w]
            ),
            B = Object(a.useMemo)(
              function () {
                return L.gt(0);
              },
              [L]
            );
          return o.a.createElement(
            f.a,
            null,
            o.a.createElement(Ee, null),
            o.a.createElement(
              s.a,
              { container: !0, spacing: 1, className: t.gridContainer },
              o.a.createElement(
                s.a,
                { item: !0, lg: 12, xs: 12 },
                o.a.createElement(
                  "h1",
                  { className: t.strategyTitle },
                  o.a.createElement("span", null, "AUTO-COMPOUNDED "),
                  "INVESTMENT STRATEGIES"
                )
              ),
              o.a.createElement(
                s.a,
                { item: !0, lg: 12, xs: 12 },
                o.a.createElement(
                  "div",
                  { className: t.strategyText },
                  "DEFI Money Market is the only algorithmic reserve currency that employs multi-step auto compounded strategies. Investors can simply invest in a strategy and receive a single receipt token rather manually having to navigate in and out of multiple farming/staking pools. All strategies compounded between both farms and the regulation pool. Your risk tolerance will determine the initial allocation for each. Select a strategy and take profit amount after each cycle."
                )
              )
            ),
            B
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    s.a,
                    { container: !0 },
                    o.a.createElement(
                      s.a,
                      { item: !0, lg: 6, xs: 12, className: t.tvlValue },
                      o.a.createElement(
                        "div",
                        null,
                        "TVL ",
                        o.a.createElement(p.a, {
                          end: L.toNumber(),
                          separator: ",",
                          prefix: "$",
                        })
                      )
                    ),
                    o.a.createElement(
                      s.a,
                      { item: !0, lg: 6, xs: 12, className: t.tokenNames },
                      O.tokens.map(function (e) {
                        return o.a.createElement(
                          "div",
                          { className: t.wrapToken, key: e.tokenName },
                          o.a.createElement("img", { src: e.icon, alt: "" }),
                          e.tokenName
                        );
                      })
                    )
                  ),
                  o.a.createElement(
                    "div",
                    { className: t.filterWrapper },
                    o.a.createElement(
                      "div",
                      { className: t.filterSelect },
                      o.a.createElement(
                        "div",
                        { className: "title" },
                        "Sort by"
                      ),
                      o.a.createElement(G, { items: ke, onChange: h, value: A })
                    )
                  ),
                  o.a.createElement(b, { currentTab: c, setCurrentTab: u }),
                  k.length
                    ? k.map(function (t) {
                        return o.a.createElement(Xt, {
                          key: t.address,
                          strategy: t,
                          udpateStrategies: x,
                        });
                      })
                    : o.a.createElement(
                        "div",
                        { className: t.comingSoonContainer },
                        o.a.createElement("p", null, "Coming soon")
                      )
                )
              : o.a.createElement(
                  "div",
                  { className: t.spinnerWrap },
                  o.a.createElement(d.Q, null)
                )
          );
        };
      e.default = function () {
        return o.a.createElement(
          Mt,
          { config: ue },
          o.a.createElement(be, null, o.a.createElement(Oe, null))
        );
      };
    },
    914: function (t, e, n) {
      "use strict";
      n.d(e, "f", function () {
        return a;
      }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return m;
        }),
        n.d(e, "h", function () {
          return b;
        }),
        n.d(e, "e", function () {
          return A;
        }),
        n.d(e, "g", function () {
          return h;
        }),
        n.d(e, "c", function () {
          return g;
        }),
        n.d(e, "b", function () {
          return w;
        });
      var r,
        a,
        o = n(4),
        i = n(5),
        c = n(9),
        s = n(10),
        u = n(77),
        l = n(93),
        p = n(120);
      !(function (t) {
        (t.BNB = "BNB"),
          (t.CAKE = "CAKE"),
          (t.DEX = "DEX"),
          (t.USDEX = "USDEX"),
          (t.USDEX_1H = "USDEX_1H"),
          (t.USDEX_1D = "USDEX_1D"),
          (t.USDEX_1W = "USDEX_1W"),
          (t.USDEX_1M = "USDEX_1M");
      })(a || (a = {}));
      var d, f, m;
      (r = {}),
        Object(u.a)(r, a.USDEX, "5m"),
        Object(u.a)(r, a.USDEX_1H, "1h"),
        Object(u.a)(r, a.USDEX_1D, "1d"),
        Object(u.a)(r, a.USDEX_1W, "1w"),
        Object(u.a)(r, a.USDEX_1M, "1m");
      !(function (t) {
        t.TOKEN = "token";
      })(d || (d = {})),
        (function (t) {
          (t.CakeVaultV1 = "cakeVaultV1"),
            (t.CakeVault = "cakeVault"),
            (t.IfoPool = "ifoPool");
        })(f || (f = {})),
        (function (t) {
          (t.BULL = "Bull"), (t.BEAR = "Bear"), (t.HOUSE = "House");
        })(m || (m = {}));
      var A,
        h,
        g,
        y,
        v,
        b = (function (t) {
          Object(c.a)(n, t);
          var e = Object(s.a)(n);
          function n(t, r) {
            var a;
            return (
              Object(o.a)(this, n),
              ((a = e.call(
                this,
                t.chainId,
                t.address,
                t.decimals,
                t.symbol,
                t.name
              )).tokenInfo = void 0),
              (a.tags = void 0),
              (a.tokenInfo = t),
              (a.tags = r),
              a
            );
          }
          return (
            Object(i.a)(n, [
              {
                key: "logoURI",
                get: function () {
                  return this.tokenInfo.logoURI;
                },
              },
            ]),
            n
          );
        })(l.h);
      !(function (t) {
        (t.INITIAL = "initial"),
          (t.LIVE = "live"),
          (t.PAUSED = "paused"),
          (t.ERROR = "error");
      })(A || (A = {})),
        (function (t) {
          (t.TradingView = "TradingView"), (t.Chainlink = "Chainlink Oracle");
        })(h || (h = {})),
        (function (t) {
          (t.ALL = "all"),
            (t.COLLECTED = "collected"),
            (t.UNCOLLECTED = "uncollected");
        })(g || (g = {})),
        (function (t) {
          (t.Idle = "IDLE"),
            (t.Fetching = "FETCHING"),
            (t.Fetched = "FETCHED"),
            (t.Failed = "FAILED");
        })(y || (y = {})),
        (function (t) {
          (t.default = "5"),
            (t.fast = "6"),
            (t.instant = "7"),
            (t.testnet = "10");
        })(v || (v = {}));
      var w = {
        default: Object(p.parseUnits)(v.default, "gwei").toString(),
        fast: Object(p.parseUnits)(v.fast, "gwei").toString(),
        instant: Object(p.parseUnits)(v.instant, "gwei").toString(),
        testnet: Object(p.parseUnits)(v.testnet, "gwei").toString(),
      };
    },
    917: function (t, e, n) {
      "use strict";
      var r = n(0),
        a = n(291);
      e.a = function () {
        var t = Object(r.useContext)(a.a);
        return { fastRefresh: t.fast, slowRefresh: t.slow };
      };
    },
    918: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return y;
      });
      var r,
        a,
        o,
        i,
        c = n(43),
        s = n(0),
        u = n.n(s),
        l = n(37),
        p = l.e.div(
          r ||
            (r = Object(c.a)([
              "\n  background-color: #8b67d3;\n  color: #FFFFFF !important;\n  border-radius: 10px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n",
            ]))
        ),
        d = function (t) {
          var e = t.children,
            n = t.className;
          return u.a.createElement(p, { className: n }, e);
        },
        f = l.e.div(
          a ||
            (a = Object(c.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: ",
              "px;\n",
            ])),
          function (t) {
            return t.theme.spacing[4];
          }
        ),
        m = function (t) {
          var e = t.children;
          return u.a.createElement(f, null, e);
        },
        A = l.e.div(
          o ||
            (o = Object(c.a)([
              "\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: 800px;\n  padding: 0 ",
              "px;\n  width: 100%;\n",
            ])),
          function (t) {
            return t.theme.spacing[4];
          }
        ),
        h = function (t) {
          var e,
            n = t.children,
            r = t.size,
            a = void 0 === r ? "md" : r,
            o = Object(s.useContext)(l.a).siteWidth;
          switch (a) {
            case "sm":
              e = o / 2;
              break;
            case "md":
              e = (2 * o) / 3;
              break;
            case "lg":
            default:
              e = o;
          }
          return u.a.createElement(A, { width: e }, n);
        },
        g = l.e.div(
          i ||
            (i = Object(c.a)([
              "\n  border-radius: 12px;\n  position: relative;\n",
            ]))
        ),
        y = function (t) {
          var e = t.children,
            n = t.className;
          return u.a.createElement(
            h,
            { size: "sm" },
            u.a.createElement(
              g,
              null,
              u.a.createElement(
                d,
                { className: n },
                u.a.createElement(m, null, e)
              )
            )
          );
        };
    },
    919: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r,
        a = n(43),
        o = n(0),
        i = n.n(o),
        c = n(37).e.div(
          r ||
            (r = Object(a.a)([
              "\n  align-items: center;\n  display: flex;\n  font-size: 1.5rem;\n  font-weight: 700;\n  height: ",
              "px;\n  justify-content: center;\n  margin-top: ",
              "px;\n  text-transform: uppercase;\n",
            ])),
          function (t) {
            return t.theme.topBarSize;
          },
          function (t) {
            return -t.theme.spacing[4];
          }
        ),
        s = function (t) {
          var e = t.text;
          return i.a.createElement(c, null, e);
        };
    },
    921: function (t, e, n) {
      t.exports = n.p + "static/media/dex.f6174454.png";
    },
    923: function (t, e, n) {
      t.exports = n.p + "static/media/background.a537c370.jpg";
    },
    925: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return v;
      });
      var r,
        a,
        o,
        i,
        c,
        s = n(43),
        u = n(0),
        l = n.n(u),
        p = n(37),
        d = n(1180),
        f = p.e.div(
          r ||
            (r = Object(s.a)([
              "\n  align-items: center;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  display: flex;\n  padding: 0 ",
              "px;\n  width: 100%;\n  box-sizing: border-box;\n",
            ])),
          function (t) {
            return t.theme.spacing[3];
          }
        ),
        m = p.e.input(
          a ||
            (a = Object(s.a)([
              "\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 45px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (t) {
            return t.theme.color.grey[600];
          }
        ),
        A = function (t) {
          var e = t.endAdornment,
            n = t.onChange,
            r = t.placeholder,
            a = t.startAdornment,
            o = t.value,
            i = t.disabled;
          return l.a.createElement(
            f,
            null,
            !!a && a,
            l.a.createElement(m, {
              placeholder: r,
              value: o,
              onChange: n,
              disabled: i,
            }),
            !!e && e
          );
        },
        h = p.e.button(
          o ||
            (o = Object(s.a)([
              "\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  padding: 5px 35px;\n  border-radius: 3px;\n  color: #FFFFFF;\n  font-weight: 700;\n  cursor: pointer;\n",
            ]))
        ),
        g = p.e.div(
          i ||
            (i = Object(s.a)([
              "\n  display: flex;\n  gap: 15px;\n  width: 100%;\n  \n  @media (max-width: 430px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        y = p.e.div(
          c ||
            (c = Object(s.a)([
              "\n  align-items: center;\n  margin-bottom: 10px;\n  color: #FFFFFF;\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 35px;\n",
            ]))
        ),
        v = function (t) {
          var e = t.max,
            n = t.symbol,
            r = t.onChange,
            a = t.onSelectMax,
            o = t.value,
            i = t.disabled,
            c = t.section,
            s = t.rightSection;
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              y,
              null,
              l.a.createElement(
                d.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                },
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement("div", null, c),
                  "Balance: ",
                  e.toLocaleString(),
                  " ",
                  n
                ),
                l.a.createElement("div", null, s)
              )
            ),
            l.a.createElement(
              g,
              null,
              l.a.createElement(A, {
                onChange: r,
                placeholder: "0",
                value: o,
                disabled: i,
              }),
              l.a.createElement(h, { onClick: a }, "Max")
            )
          );
        };
    },
    926: function (t, e, n) {
      "use strict";
      var r = n(0),
        a = n(290);
      e.a = function (t) {
        var e = Object(r.useContext)(a.a),
          n = e.onDismiss,
          o = e.onPresent;
        return [
          Object(r.useCallback)(
            function () {
              o(t);
            },
            [t, o]
          ),
          n,
        ];
      };
    },
    928: function (t, e, n) {
      "use strict";
      var r = n(11),
        a = n(26),
        o = n(0),
        i = n(14),
        c = n(280),
        s = n(34);
      function u() {
        u = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (B) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof d ? e : d,
            o = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = w(i, n);
                    if (c) {
                      if (c === p) continue;
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
                  var s = l(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === p)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (B) {
            return { type: "throw", arg: B };
          }
        }
        t.wrap = s;
        var p = {};
        function d() {}
        function f() {}
        function m() {}
        var A = {};
        c(A, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          g = h && h(h(O([])));
        g && g !== e && n.call(g, a) && (A = g);
        var y = (m.prototype = d.prototype = Object.create(A));
        function v(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = l(t[a], t, o);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      p = u.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (u.value = t), i(u);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return p;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var r = l(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), p
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          c(y, "constructor", m),
          c(m, "constructor", f),
          (f.displayName = c(m, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(y),
          c(y, i, "Generator"),
          c(y, a, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
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
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      e.a = function (t) {
        var e = Object(o.useState)(i.a.from(0)),
          n = Object(a.a)(e, 2),
          l = n[0],
          p = n[1],
          d = Object(c.a)(),
          f = null === d || void 0 === d ? void 0 : d.isUnlocked,
          m = Object(o.useCallback)(
            Object(r.a)(
              u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.t0 = p), (e.next = 3), t.balanceOf(d.myAccount)
                        );
                      case 3:
                        (e.t1 = e.sent), (0, e.t0)(e.t1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [t, d.myAccount]
          );
        return (
          Object(o.useEffect)(
            function () {
              if (f) {
                m().catch(function (t) {
                  return console.error(
                    "Failed to fetch token balance: ".concat(t.stack)
                  );
                });
                var t = setInterval(m, s.b.refreshInterval);
                return function () {
                  return clearInterval(t);
                };
              }
            },
            [f, t]
          ),
          l
        );
      };
    },
    929: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(16),
        a = n.n(r),
        o = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (Number.isNaN(t)) throw new Error("".concat(t, " is NaN"));
          return (
            (void 0 !== t && null !== t) || (t = 0),
            t instanceof a.a
              ? t.div(new a.a(10).pow(e))
              : new a.a(t.toString()).div(new a.a(10).pow(e))
          );
        },
        i = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return Number(o(t, n).toFixed(e)).toString();
        },
        c = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return void 0 === t || null === t
            ? "-.".concat(new Array(e).fill("-").join(""))
            : Number.isNaN(t)
            ? "NaN"
            : Number(i(t.toString(), e, n)).toLocaleString("en-US", {
                maximumFractionDigits: e,
              });
        };
    },
    930: function (t, e, n) {
      "use strict";
      var r,
        a,
        o,
        i,
        c = n(26),
        s = n(0),
        u = n.n(s),
        l = n(2147),
        p = n(68),
        d = n(926),
        f = n(968),
        m = n(43),
        A = n(37),
        h = n(928),
        g = n(35),
        y = n(941),
        v = n(918),
        b = n(919),
        w = n(280),
        x = n(931),
        E = n(2107),
        k = A.e.div(
          r ||
            (r = Object(m.a)([
              "\n  //color: ",
              ";\n  font-size: 30px;\n  font-weight: 700;\n",
            ])),
          function (t) {
            return t.theme.color.grey[300];
          }
        ),
        O = A.e.div(
          a ||
            (a = Object(m.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        L = A.e.div(
          o ||
            (o = Object(m.a)([
              "\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: ",
              "px;\n",
            ])),
          function (t) {
            return t.theme.spacing[4];
          }
        ),
        B = A.e.div(
          i ||
            (i = Object(m.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin: 0 ",
              "px;\n",
            ])),
          function (t) {
            return t.theme.spacing[3];
          }
        ),
        j = function (t) {
          t.onDismiss;
          var e = Object(w.a)(),
            n = Object(h.a)(e.USDEX),
            r = Object(s.useMemo)(
              function () {
                return Object(g.a)(n);
              },
              [n]
            ),
            a = Object(h.a)(e.DEXSHARE),
            o = Object(s.useMemo)(
              function () {
                return Object(g.a)(a);
              },
              [a]
            ),
            i = Object(h.a)(e.DEXETF),
            c = Object(s.useMemo)(
              function () {
                return Object(g.a)(i, 18);
              },
              [i]
            ),
            l = Object(h.a)(e.DEXIRA),
            p = Object(s.useMemo)(
              function () {
                return Object(g.a)(l, e.DEXIRA.decimal);
              },
              [l]
            ),
            d = Object(E.a)("(min-width:900px)");
          return u.a.createElement(
            v.a,
            null,
            u.a.createElement(b.a, { text: "My Wallet" }),
            u.a.createElement(
              L,
              {
                style: { display: "flex", flexDirection: d ? "row" : "column" },
              },
              u.a.createElement(
                B,
                { style: { paddingBottom: "15px" } },
                u.a.createElement(x.a, { symbol: "USDEX", size: 100 }),
                u.a.createElement(
                  O,
                  null,
                  u.a.createElement(k, null, r),
                  u.a.createElement(y.a, {
                    variant: "white",
                    text: "USDEX Available",
                  })
                )
              ),
              u.a.createElement(
                B,
                { style: { paddingBottom: "15px" } },
                u.a.createElement(x.a, { symbol: "DEXSHARE", size: 100 }),
                u.a.createElement(
                  O,
                  null,
                  u.a.createElement(k, null, o),
                  u.a.createElement(y.a, {
                    variant: "white",
                    text: "DEXSHARE Available",
                  })
                )
              ),
              u.a.createElement(
                B,
                { style: { paddingBottom: "15px" } },
                u.a.createElement(x.a, { symbol: "DEXETF", size: 100 }),
                u.a.createElement(
                  O,
                  null,
                  u.a.createElement(k, null, c),
                  u.a.createElement(y.a, {
                    variant: "white",
                    text: "DEXETF Available",
                  })
                )
              ),
              u.a.createElement(
                B,
                { style: { paddingBottom: "15px" } },
                u.a.createElement(x.a, { symbol: "DEXIRA", size: 100 }),
                u.a.createElement(
                  O,
                  null,
                  u.a.createElement(k, null, Number(p).toFixed(0)),
                  u.a.createElement(y.a, {
                    variant: "white",
                    text: "DEXIRA Available",
                  })
                )
              )
            )
          );
        };
      e.a = function (t) {
        var e = t.text,
          n = Object(p.c)().account,
          r = Object(d.a)(u.a.createElement(j, null)),
          a = Object(c.a)(r, 1)[0],
          o = Object(s.useState)(!1),
          i = Object(c.a)(o, 2),
          m = i[0],
          A = i[1],
          h = e || "Connect Wallet";
        return u.a.createElement(
          "div",
          null,
          n
            ? u.a.createElement(l.a, {
                onClick: a,
                className: "shinyButtonSecondary2",
                label: "My Wallet",
              })
            : u.a.createElement(l.a, {
                onClick: function () {
                  A(!0);
                },
                className: "shinyButtonSecondary2",
                label: h,
              }),
          u.a.createElement(f.a, {
            open: m,
            handleClose: function () {
              A(!1);
            },
          })
        );
      };
    },
    931: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(0),
        a = n.n(r),
        o = n(955),
        i = function (t) {
          var e = t.symbol,
            n = t.size,
            r = void 0 === n ? 100 : n,
            i = Object(o.a)(e);
          return a.a.createElement("img", {
            src: i,
            alt: "".concat(e, " Logo"),
            height: r,
          });
        };
    },
    934: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return ct;
      });
      var r = n(0),
        a = n.n(r),
        o = n(2108),
        i = n(68),
        c = function () {
          var t = Object(i.c)(),
            e = t.account,
            n = t.connect,
            a = t.connector;
          e &&
            "" === window.localStorage.getItem("connectorId") &&
            window.localStorage.setItem("connectorId", a),
            Object(r.useEffect)(
              function () {
                var t = window.localStorage.getItem("connectorId");
                t && !e && n(t);
              },
              [n, e]
            );
        },
        s = n(77),
        u = n(2106),
        l = n(2107),
        p = n(969),
        d = n.n(p),
        f = n(970),
        m = n.n(f),
        A = n(971),
        h = n.n(A),
        g = n(972),
        y = n.n(g),
        v = n(973),
        b = n.n(v),
        w = n(974),
        x = n.n(w),
        E = n(975),
        k = n.n(E),
        O = n(976),
        L = n.n(O),
        B = n(977),
        j = n.n(B),
        T = n(978),
        D = n.n(T),
        C = n(916),
        N = n.n(C),
        F = [
          { icon: d.a, link: "https://t.me/dexfinance", mobile: !0 },
          {
            icon: m.a,
            link: "https://discord.com/invite/DexFinance",
            mobile: !0,
          },
          { icon: h.a, link: "https://twitter.com/DexFinance", mobile: !0 },
          { icon: y.a, link: "https://www.youtube.com/DexFinance", mobile: !0 },
          {
            icon: b.a,
            link: "https://www.facebook.com/dexIRAtoken",
            mobile: !1,
          },
          {
            icon: x.a,
            link: "https://www.instagram.com/dexiratoken/",
            mobile: !1,
          },
          {
            icon: k.a,
            link: "https://www.reddit.com/r/DexFinance/",
            mobile: !0,
          },
          { icon: L.a, link: "https://github.com/dexira", mobile: !0 },
          {
            icon: j.a,
            link: "https://www.linkedin.com/company/DexFinance",
            mobile: !1,
          },
          { icon: D.a, link: "mailto:info@dexfinance.com", mobile: !1 },
        ],
        S = Object(u.a)(function (t) {
          return {
            footer: Object(s.a)(
              {
                position: "absolute",
                bottom: "0",
                paddingTop: "15px",
                paddingBottom: "15px",
                width: "100%",
                color: "white",
                backgroundColor: "#191b26",
                textAlign: "center",
                height: "1.3rem",
              },
              t.breakpoints.down("xs"),
              { display: "none" }
            ),
            link: {
              width: "24px",
              height: "24px",
              display: "inline",
              marginLeft: "20px",
            },
            img: { width: "24px", height: "24px" },
            links: {
              backgroundColor: "rgb(14, 22, 43)",
              "& img": { width: "45px", height: "45px" },
            },
            linkWrap: {
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              maxWidth: "1128px",
              margin: "0 auto",
              "@media (max-width: 1100px)": { maxWidth: "900px" },
              "@media (max-width: 900px)": { maxWidth: "800px" },
              "@media (max-width: 800px)": { padding: "10px 20px" },
            },
            linkHidden: { display: "none" },
          };
        }),
        P = function () {
          var t = S(),
            e = Object(l.a)("(max-width:800px)");
          return a.a.createElement(
            "footer",
            null,
            a.a.createElement(
              "div",
              { className: t.links },
              a.a.createElement(
                "div",
                { className: t.linkWrap },
                F.map(function (n) {
                  return a.a.createElement(
                    "a",
                    {
                      href: n.link,
                      key: n.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: N()(
                        Object(s.a)({}, t.linkHidden, e && !n.mobile)
                      ),
                    },
                    a.a.createElement("img", { src: n.icon, alt: "" })
                  );
                })
              )
            ),
            a.a.createElement(
              o.a,
              { maxWidth: "lg" },
              a.a.createElement(
                "div",
                {
                  id: "footer",
                  className:
                    "vc_row wpb_row vc_row-fluid gradient-container-4 footer vc_custom_1639964876153 vc_row-has-fill mgt-vc-row-505593 ult-vc-hide-row",
                  "data-row-effect-mobile-disable": "true",
                  "data-rtl": "false",
                  style: {
                    position: "relative",
                    background: "rgb(20, 33, 61)",
                    width: "100vw !important",
                    display: "inline-block !important",
                    marginLeft: "0",
                    marginRight: "0",
                  },
                },
                a.a.createElement("div", {
                  className: "upb_row_bg",
                  "data-bg-override": "ex-full",
                  style: {
                    background: "rgb(20, 33, 61)",
                    minWidth: "100vw !important",
                    left: "0",
                    width: "250vw",
                    marginLeft: "-100vw",
                  },
                }),
                a.a.createElement(
                  "div",
                  {
                    className:
                      "gradient-column-8 footer-col-1 wpb_column vc_column_container vc_col-sm-4 vc_col-xs-12",
                  },
                  a.a.createElement(
                    "div",
                    { className: "vc_column-inner vc_custom_1641499995204" },
                    a.a.createElement(
                      "div",
                      { className: "wpb_wrapper" },
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "wpb_single_image wpb_content_element vc_align_left  vc_custom_1639974337030",
                        },
                        a.a.createElement(
                          "figure",
                          { className: "wpb_wrapper vc_figure" },
                          a.a.createElement(
                            "div",
                            {
                              className:
                                "vc_single_image-wrapper vc_box_border_grey",
                            },
                            a.a.createElement("img", {
                              width: 200,
                              height: 31,
                              src: "https://www.dexfinance.com/wp-content/uploads/2021/12/DF-web-logo-200x31-2.svg",
                              className: "vc_single_image-img attachment-full",
                              alt: "",
                            })
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "wpb_text_column wpb_content_element  vc_custom_1641508476492 footer-text",
                          style: {
                            textAlign: "left",
                            fontSize: "14px !important",
                          },
                        },
                        a.a.createElement(
                          "div",
                          { className: "wpb_wrapper" },
                          a.a.createElement(
                            "h4",
                            {
                              className:
                                "footer-text fusion-responsive-typography-calculated",
                              style: {
                                fontSize: "14px !important",
                                lineHeight: "1.1",
                              },
                              "data-fontsize": 14,
                              "data-lineheight": "15.4px",
                            },
                            a.a.createElement(
                              "span",
                              {
                                style: { color: "#f7f7f7", textAlign: "left" },
                              },
                              "AUTONOMOUSLY GOVERNED. YIELD DRIVEN."
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "wpb_text_column wpb_content_element  vc_custom_1639965372362 footer-text",
                          style: {
                            textAlign: "left",
                            fontSize: "14px !important",
                          },
                        },
                        a.a.createElement(
                          "div",
                          { className: "wpb_wrapper" },
                          a.a.createElement(
                            "div",
                            {
                              className: "footer-text",
                              style: { fontSize: "14px !important" },
                            },
                            a.a.createElement(
                              "span",
                              {
                                style: { color: "#f7f7f7", textAlign: "left" },
                              },
                              "DEFI Finance is a decentralized autonomous organization (DAO) providing an ecosystem of financial products that aims at providing the highest yields in the market."
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "wpb_text_column wpb_content_element  vc_custom_1639965350118 footer-text",
                          style: {
                            textAlign: "left",
                            fontSize: "14px !important",
                          },
                        },
                        a.a.createElement(
                          "div",
                          { className: "wpb_wrapper" },
                          a.a.createElement(
                            "div",
                            {
                              className: "footer-text",
                              style: { fontSize: "13px !important" },
                            },
                            a.a.createElement(
                              "span",
                              {
                                style: { color: "#f7f7f7", textAlign: "left" },
                              },
                              "Copyright \xa9 2022 ",
                              a.a.createElement(
                                "a",
                                {
                                  className: "footer-homepage-link",
                                  style: {
                                    decoration: "none",
                                    color: "#f7f7f7",
                                  },
                                  href: "https://www.dexfinance.com",
                                },
                                "dexfinance.com"
                              )
                            ),
                            a.a.createElement("br", null),
                            a.a.createElement(
                              "span",
                              {
                                style: { color: "#f7f7f7", textAlign: "left" },
                              },
                              "All Rights Reserved."
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                a.a.createElement(
                  "div",
                  {
                    className:
                      "gradient-column-9 footer-col-2 wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6 vc_hidden-xs",
                  },
                  a.a.createElement(
                    "div",
                    { className: "vc_column-inner vc_custom_1641504864563" },
                    a.a.createElement(
                      "div",
                      { className: "wpb_wrapper" },
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "wpb_text_column wpb_content_element  vc_custom_1551044161105 footer-title",
                          style: { textAlign: "left", marginTop: "0" },
                        },
                        a.a.createElement(
                          "div",
                          { className: "wpb_wrapper" },
                          a.a.createElement(
                            "h5",
                            {
                              className:
                                "footer-heading fusion-responsive-typography-calculated",
                              style: {
                                marginTop: "10px",
                                fontSize: "17px",
                                lineHeight: "1.1",
                              },
                            },
                            a.a.createElement(
                              "span",
                              { style: { color: "#f7f7f7" } },
                              "QUICK LINKS"
                            )
                          )
                        )
                      ),
                      a.a.createElement("div", {
                        className: "ult-spacer spacer-623d58310eec4",
                        "data-id": "623d58310eec4",
                        "data-height": 10,
                        "data-height-mobile": 5,
                        "data-height-tab": !0,
                        "data-height-tab-portrait": !0,
                        "data-height-mobile-landscape": 5,
                        style: { clear: "both", display: "block" },
                      }),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "elegant-footer-links display-vertical elegant-align-left",
                        },
                        a.a.createElement(
                          "ul",
                          {
                            className: "elegant-footer-link-items",
                            style: { fontSize: "14px", color: "#ffffff" },
                          },
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              {
                                href: "https://www.dexfinance.com/money-market/",
                              },
                              "MONEY MARKET"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/dexIRA" },
                              "dexIRA"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/dexETF/" },
                              "dexETF"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/dexPAD/" },
                              "dexPAD"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/dexDAO/" },
                              "dexDAO"
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className: "vc_empty_space",
                          style: { height: "10px" },
                        },
                        a.a.createElement("span", {
                          className: "vc_empty_space_inner",
                        })
                      )
                    )
                  )
                ),
                a.a.createElement(
                  "div",
                  {
                    className:
                      "gradient-column-10 footer-col-3 wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6 vc_hidden-xs",
                  },
                  a.a.createElement(
                    "div",
                    { className: "vc_column-inner vc_custom_1641504878423" },
                    a.a.createElement(
                      "div",
                      { className: "wpb_wrapper" },
                      a.a.createElement("div", {
                        className: "ult-spacer spacer-623d58310f29f",
                        "data-id": "623d58310f29f",
                        "data-height": 45,
                        "data-height-mobile": 40,
                        "data-height-tab": !0,
                        "data-height-tab-portrait": !0,
                        "data-height-mobile-landscape": 40,
                        style: { clear: "both", display: "block" },
                      }),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "elegant-footer-links display-vertical elegant-align-left",
                        },
                        a.a.createElement(
                          "ul",
                          {
                            className: "elegant-footer-link-items",
                            style: { fontSize: "14px", color: "#ffffff" },
                          },
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/team/" },
                              "TEAM / KYC"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/charts" },
                              "CHARTS"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/contact" },
                              "CONTACT"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/merch" },
                              "MERCHANDISE"
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                a.a.createElement(
                  "div",
                  {
                    className:
                      "gradient-column-11 wpb_column vc_column_container vc_col-sm-2 vc_col-xs-6 vc_hidden-xs",
                  },
                  a.a.createElement(
                    "div",
                    { className: "vc_column-inner vc_custom_1641504890393" },
                    a.a.createElement(
                      "div",
                      { className: "wpb_wrapper" },
                      a.a.createElement("div", {
                        className: "ult-spacer spacer-623d58310f4b5",
                        "data-id": "623d58310f4b5",
                        "data-height": 45,
                        "data-height-mobile": 5,
                        "data-height-tab": !0,
                        "data-height-tab-portrait": !0,
                        "data-height-mobile-landscape": 5,
                        style: { clear: "both", display: "block" },
                      }),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "elegant-footer-links display-vertical elegant-align-left",
                        },
                        a.a.createElement(
                          "ul",
                          {
                            className: "elegant-footer-link-items",
                            style: { fontSize: "14px", color: "#ffffff" },
                          },
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              {
                                href: "https://www.dexfinance.com/docs/money-market",
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              "DOCUMENTATION"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/roadmap" },
                              "ROADMAP"
                            )
                          ),
                          a.a.createElement(
                            "li",
                            {
                              className: "elegant-footer-link-item",
                              style: { marginBottom: "15px" },
                            },
                            a.a.createElement(
                              "a",
                              { href: "https://www.dexfinance.com/audits" },
                              "AUDITS"
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                a.a.createElement(
                  "div",
                  {
                    className:
                      "gradient-column-12 wpb_column vc_column_container vc_col-sm-2 vc_col-xs-12",
                  },
                  a.a.createElement(
                    "div",
                    { className: "vc_column-inner" },
                    a.a.createElement(
                      "div",
                      { className: "wpb_wrapper" },
                      a.a.createElement(
                        "div",
                        { className: "vc_row wpb_row vc_inner vc_row-fluid" },
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "wpb_column vc_column_container vc_col-sm-12 vc_hidden-xs",
                          },
                          a.a.createElement(
                            "div",
                            { className: "vc_column-inner" },
                            a.a.createElement(
                              "div",
                              { className: "wpb_wrapper" },
                              a.a.createElement("div", {
                                className: "ult-spacer spacer-623d58310f965",
                                "data-id": "623d58310f965",
                                "data-height": 30,
                                "data-height-mobile": 0,
                                "data-height-tab": !0,
                                "data-height-tab-portrait": !0,
                                "data-height-mobile-landscape": 0,
                                style: { clear: "both", display: "block" },
                              }),
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "elegant-fancy-button-wrapper elegant-align-left",
                                },
                                a.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "elegant-fancy-button-wrap elegant-fancy-button-1 footer-button",
                                    id: "footer-button",
                                  },
                                  a.a.createElement(
                                    "a",
                                    {
                                      className:
                                        "elegant-fancy-button-link elegant-button-swipe elegant-button-pill elegant-button-small elegant-fancy-button-icon-left",
                                      href: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x147e07976e1ae78287c33aafaab87760d32e50a5",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      style: {
                                        fontSize: "15px",
                                        lineHeight: "1em",
                                        minWidth: "90px !important",
                                      },
                                    },
                                    "BUY NOW"
                                  )
                                )
                              ),
                              a.a.createElement("div", {
                                className: "ult-spacer spacer-623d58310fa43",
                                "data-id": "623d58310fa43",
                                "data-height": 30,
                                "data-height-mobile": 30,
                                "data-height-tab": !0,
                                "data-height-tab-portrait": !0,
                                "data-height-mobile-landscape": 30,
                                style: { clear: "both", display: "block" },
                              }),
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "elegant-fancy-button-wrapper elegant-align-left",
                                },
                                a.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "elegant-fancy-button-wrap elegant-fancy-button-2 footer-button",
                                    id: "footer-button",
                                  },
                                  a.a.createElement(
                                    "a",
                                    {
                                      className:
                                        "elegant-fancy-button-link elegant-button-swipe elegant-button-pill elegant-button-small elegant-fancy-button-icon-left",
                                      style: {
                                        fontSize: "15px",
                                        lineHeight: "1em",
                                      },
                                      href: "/",
                                    },
                                    "DASHBOARD"
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "vc_row wpb_row vc_inner vc_row-fluid vc_custom_1642015162298",
                        },
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "wpb_column vc_column_container vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm",
                          },
                          a.a.createElement(
                            "div",
                            { className: "vc_column-inner" },
                            a.a.createElement(
                              "div",
                              { className: "wpb_wrapper" },
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "wpb_text_column wpb_content_element  vc_custom_1642015097157 footer-title",
                                  style: { textAlign: "left" },
                                },
                                a.a.createElement(
                                  "div",
                                  { className: "wpb_wrapper" },
                                  a.a.createElement(
                                    "h5",
                                    {
                                      className:
                                        "footer-heading fusion-responsive-typography-calculated",
                                      "data-fontsize": 17,
                                      style: { lineHeight: "1.1" },
                                      "data-lineheight": "18.7px",
                                    },
                                    a.a.createElement(
                                      "span",
                                      {
                                        style: {
                                          color: "#f7f7f7",
                                          marginTop: "0",
                                          width: "80px",
                                        },
                                      },
                                      "QUICK LINKS"
                                    )
                                  )
                                )
                              ),
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "vc_separator wpb_content_element vc_separator_align_center vc_sep_width_90 vc_sep_dotted vc_sep_border_width_2 vc_sep_pos_align_left vc_separator_no_text vc_custom_1642014955741  vc_custom_1642014955741",
                                },
                                a.a.createElement(
                                  "span",
                                  {
                                    className: "vc_sep_holder vc_sep_holder_l",
                                  },
                                  a.a.createElement("span", {
                                    style: {
                                      borderColor: "rgba(255,255,255,0.2)",
                                    },
                                    className: "vc_sep_line",
                                  })
                                ),
                                a.a.createElement(
                                  "span",
                                  {
                                    className: "vc_sep_holder vc_sep_holder_r",
                                  },
                                  a.a.createElement("span", {
                                    style: {
                                      borderColor: "rgba(255,255,255,0.2)",
                                    },
                                    className: "vc_sep_line",
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "vc_row wpb_row vc_inner vc_row-fluid vc_custom_1642015185346",
                        },
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "wpb_column vc_column_container vc_col-sm-6 vc_hidden-lg vc_hidden-md vc_hidden-sm vc_col-xs-6",
                          },
                          a.a.createElement(
                            "div",
                            { className: "vc_column-inner" },
                            a.a.createElement(
                              "div",
                              { className: "wpb_wrapper" },
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "elegant-footer-links display-vertical elegant-align-left",
                                },
                                a.a.createElement(
                                  "ul",
                                  {
                                    className: "elegant-footer-link-items",
                                    style: {
                                      fontSize: "14px",
                                      color: "#ffffff",
                                    },
                                  },
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/money-market/",
                                      },
                                      "MONEY MARKET"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/dexira/",
                                      },
                                      "dexIRA"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/dexETF/",
                                      },
                                      "dexETF"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/dexPAD/",
                                      },
                                      "dexPAD"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/charts/",
                                      },
                                      "CHARTS"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/team/",
                                      },
                                      "TEAM / KYC"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "wpb_column vc_column_container vc_col-sm-6 vc_hidden-lg vc_hidden-md vc_hidden-sm vc_col-xs-6",
                          },
                          a.a.createElement(
                            "div",
                            { className: "vc_column-inner" },
                            a.a.createElement(
                              "div",
                              { className: "wpb_wrapper" },
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "elegant-footer-links display-vertical elegant-align-left",
                                },
                                a.a.createElement(
                                  "ul",
                                  {
                                    className: "elegant-footer-link-items",
                                    style: {
                                      fontSize: "14px",
                                      color: "#ffffff",
                                    },
                                  },
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/contact",
                                      },
                                      "CONTACT"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/merch",
                                      },
                                      "MERCHANDISE"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://docs.dexfinance.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      },
                                      "DOCUMENTATION"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/roadmap",
                                      },
                                      "ROADMAP"
                                    )
                                  ),
                                  a.a.createElement(
                                    "li",
                                    {
                                      className: "elegant-footer-link-item",
                                      style: { marginBottom: "15px" },
                                    },
                                    a.a.createElement(
                                      "a",
                                      {
                                        href: "https://www.dexfinance.com/audits",
                                      },
                                      "AUDITS"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      a.a.createElement(
                        "div",
                        {
                          className:
                            "vc_row wpb_row vc_inner vc_row-fluid vc_custom_1642015194676",
                        },
                        a.a.createElement(
                          "div",
                          {
                            className:
                              "wpb_column vc_column_container vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm",
                          },
                          a.a.createElement(
                            "div",
                            { className: "vc_column-inner" },
                            a.a.createElement(
                              "div",
                              { className: "wpb_wrapper" },
                              a.a.createElement("div", {
                                className: "ult-spacer spacer-623d5831107d8",
                                "data-id": "623d5831107d8",
                                "data-height": 30,
                                "data-height-mobile": 35,
                                "data-height-tab": !0,
                                "data-height-tab-portrait": !0,
                                "data-height-mobile-landscape": 35,
                                style: { clear: "both", display: "block" },
                              }),
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "elegant-fancy-button-wrapper elegant-align-left",
                                },
                                a.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "elegant-fancy-button-wrap elegant-fancy-button-3 footer--mobile-button",
                                    id: "footer--mobile-button",
                                  },
                                  a.a.createElement(
                                    "a",
                                    {
                                      className:
                                        "elegant-fancy-button-link elegant-button-swipe elegant-button-pill elegant-button-small elegant-fancy-button-icon-left",
                                      style: {
                                        fontSize: "15px",
                                        lineHeight: "1em",
                                      },
                                      href: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x147e07976e1ae78287c33aafaab87760d32e50a5",
                                      target: "_blank",
                                    },
                                    "BUY NOW"
                                  )
                                )
                              ),
                              a.a.createElement("div", {
                                className: "ult-spacer spacer-623d58311088e",
                                "data-id": "623d58311088e",
                                "data-height": 30,
                                "data-height-mobile": 25,
                                "data-height-tab": !0,
                                "data-height-tab-portrait": !0,
                                "data-height-mobile-landscape": 25,
                                style: { clear: "both", display: "block" },
                              }),
                              a.a.createElement(
                                "div",
                                {
                                  className:
                                    "elegant-fancy-button-wrapper elegant-align-left",
                                },
                                a.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "elegant-fancy-button-wrap elegant-fancy-button-4 footer--mobile-button",
                                    id: "footer--mobile-button",
                                  },
                                  a.a.createElement(
                                    "a",
                                    {
                                      className:
                                        "elegant-fancy-button-link elegant-button-swipe elegant-button-pill elegant-button-small elegant-fancy-button-icon-left",
                                      style: {
                                        fontSize: "15px",
                                        lineHeight: "1em",
                                      },
                                      href: "/app/",
                                    },
                                    "DASHBOARD"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              a.a.createElement(
                "div",
                { className: "avada-footer-scripts" },
                a.a.createElement("style", {
                  type: "text/css",
                  "data-type": "vc_shortcodes-custom-css",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n        .vc_custom_1644880871281 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 50px !important;\n            padding-bottom: 0px !important;\n            padding-left: 50px !important;\n        }\n        .vc_custom_1644880871281 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 50px !important;\n            padding-bottom: 0px !important;\n            padding-left: 50px !important;\n        }\n        .vc_custom_1641492381339 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1639964876153 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            border-top-width: 0px !important;\n            border-bottom-width: 0px !important;\n            padding-top: 50px !important;\n            padding-right: 15px !important;\n            padding-bottom: 25px !important;\n            padding-left: 15px !important;\n        }\n        .vc_custom_1644880928918 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1644880516490 {\n            margin-top: -25px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1644912849111 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1644879417476 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1643420702275 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1643901021456 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1643066234035 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1644879613691 {\n            margin-top: -10px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n        .vc_custom_1643066253903 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1643066585767 {\n            margin-top: -10px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1644880938599 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1644912837582 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1644881432279 {\n            margin-top: -25px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1644879417476 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1643420702275 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1643901021456 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1643066234035 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1644879613691 {\n            margin-top: -10px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1643066253903 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1643066585767 {\n            margin-top: -10px !important;\n            margin-bottom: 0px !important;\n            padding-top: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1641493130734 {\n            margin-top: 10px !important;\n            padding-top: 5px !important;\n        }\n    \n        .vc_custom_1641493141014 {\n            margin-top: 10px !important;\n            padding-top: 5px !important;\n        }\n    \n        .vc_custom_1641493371639 {\n            margin-top: 10px !important;\n            padding-top: 5px !important;\n        }\n    \n        .vc_custom_1641493379811 {\n            margin-top: 10px !important;\n            padding-top: 5px !important;\n        }\n    \n        .vc_custom_1641493201721 {\n            margin-top: 10px !important;\n            padding-top: 5px !important;\n        }\n    \n        .vc_custom_1641499995204 {\n            margin-top: 0px !important;\n            margin-right: 10px !important;\n            margin-bottom: 0px !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 10px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n    \n        .vc_custom_1641504864563 {\n            margin-top: 0px !important;\n            margin-right: 0px !important;\n            margin-bottom: 0px !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 0px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n    \n        .vc_custom_1641504878423 {\n            margin-top: 0px !important;\n            margin-right: 0px !important;\n            margin-bottom: 0px !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 0px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n    \n        .vc_custom_1641504890393 {\n            margin-top: 0px !important;\n            margin-right: 0px !important;\n            margin-bottom: 0px !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 0px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n    \n        .vc_custom_1639974337030 {\n            margin-bottom: 10px !important;\n            padding-bottom: 10px !important;\n        }\n    \n        .vc_custom_1641508476492 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1639965372362 {\n            margin-top: 0px !important;\n            margin-bottom: 0px !important;\n            padding-bottom: 0px !important;\n        }\n    \n        .vc_custom_1639965350118 {\n            margin-top: 10px !important;\n            margin-right: 0px !important;\n            margin-bottom: 0px !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 0px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n    \n        .vc_custom_1551044161105 {\n            margin-top: 0px !important;\n            margin-right: 0px !important;\n            margin-bottom: 0.4em !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 0px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n    \n        .vc_custom_1642015162298 {\n            margin-left: -25px !important;\n        }\n        .vc_custom_1642015185346 {\n            margin-left: -25px !important;\n        }\n        .vc_custom_1642015194676 {\n            margin-left: -25px !important;\n        }\n        .vc_custom_1642015097157 {\n            margin-top: -40px !important;\n            margin-right: 0px !important;\n            margin-bottom: 0.4em !important;\n            margin-left: 0px !important;\n            padding-top: 0px !important;\n            padding-right: 0px !important;\n            padding-bottom: 0px !important;\n            padding-left: 0px !important;\n        }\n        .vc_custom_1642014955741 {\n            margin-top: 10px !important;\n            margin-bottom: 10px !important;\n        }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n    .spacer-623d583100b76 {\n        height: 35px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d583100b76 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d583100b76 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d583100b76 {\n        height: 0px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d583100b76 {\n        height: 0px\n        }\n    }\n\n    .spacer-623d58310224f {\n        height: 10px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310224f {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310224f {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310224f {\n        height: 10px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310224f {\n        height: 10px\n        }\n    }\n\n    .spacer-623d583102aa2 {\n        height: 35px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d583102aa2 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d583102aa2 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d583102aa2 {\n        height: 0px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d583102aa2 {\n        height: 0px\n        }\n    }\n\n    .spacer-623d583103697 {\n        height: 10px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d583103697 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d583103697 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d583103697 {\n        height: 10px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d583103697 {\n        height: 10px\n        }\n    }\n\n    .spacer-623d58310ee11 {\n        height: 10px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310ee11 {\n        height: 10px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310ee11 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310ee11 {\n        height: px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310ee11 {\n        height: 10px\n        }\n    }\n\n    .spacer-623d58310eec4 {\n        height: 10px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310eec4 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310eec4 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310eec4 {\n        height: 5px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310eec4 {\n        height: 5px\n        }\n    }\n\n    .spacer-623d58310f29f {\n        height: 45px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310f29f {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310f29f {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310f29f {\n        height: 40px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310f29f {\n        height: 40px\n        }\n    }\n\n    .spacer-623d58310f4b5 {\n        height: 45px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310f4b5 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310f4b5 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310f4b5 {\n        height: 5px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310f4b5 {\n        height: 5px\n        }\n    }\n\n    .spacer-623d58310f965 {\n        height: 30px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310f965 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310f965 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310f965 {\n        height: 0px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310f965 {\n        height: 0px\n        }\n    }\n\n    .spacer-623d58310fa43 {\n        height: 30px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58310fa43 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58310fa43 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58310fa43 {\n        height: 30px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58310fa43 {\n        height: 30px\n        }\n    }\n\n    .spacer-623d5831107d8 {\n        height: 30px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d5831107d8 {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d5831107d8 {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d5831107d8 {\n        height: 35px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d5831107d8 {\n        height: 35px\n        }\n    }\n\n    .spacer-623d58311088e {\n        height: 30px\n    }\n\n    @media (max-width: 1199px) {\n        .spacer-623d58311088e {\n        height: px\n        }\n    }\n\n    @media (max-width: 991px) {\n        .spacer-623d58311088e {\n        height: px\n        }\n    }\n\n    @media (max-width: 767px) {\n        .spacer-623d58311088e {\n        height: 25px\n        }\n    }\n\n    @media (max-width: 479px) {\n        .spacer-623d58311088e {\n        height: 25px\n        }\n    }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n    #ult-carousel-1961014614623d583100bbf .slick-slide {\n        margin: 0 10px;\n    }\n    #ult-carousel-2576648423623d583102c55 .slick-slide {\n        margin: 0 10px;\n    }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  id: "4k-icons-styles-inline-css",
                  type: "text/css",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n    @font-face {\n        font-family: 'ft';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack03/icons/fonts/ft.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack03/icons/fonts/ft.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack03/icons/fonts/ft.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack03/icons/fonts/ft.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack03/icons/fonts/ft.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk1 .ft-walk7:before {\n        font-family: 'ft';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk1 .ft-walk7:before {\n        content: \"\\e838\";\n    }\n\n    #fourk1 {\n        text-align: center\n    }\n\n    #fourk1 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 11px 0;\n        width: 45px;\n        height: 23px;\n        border-radius: 100%\n    }\n\n    #fourk1 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk1 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk1 i {\n        font-size: 23px;\n        line-height: 23px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk1 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk1 i {\n        text-align: center;\n    }\n\n    #fourk1 {\n        margin-bottom: 15px;\n    }\n\n    #fourk1 .fourk-icon,\n    #fourk1 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'bk';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack01/icons/fonts/bk.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack01/icons/fonts/bk.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack01/icons/fonts/bk.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack01/icons/fonts/bk.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack01/icons/fonts/bk.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk2 .bk-chat:before {\n        font-family: 'bk';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk2 .bk-chat:before {\n        content: \"\\e0dc\";\n    }\n\n    #fourk2 {\n        text-align: center\n    }\n\n    #fourk2 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 11px 0;\n        width: 45px;\n        height: 23px;\n        border-radius: 100%\n    }\n\n    #fourk2 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk2 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk2 i {\n        font-size: 23px;\n        line-height: 23px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk2 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk2 i {\n        text-align: center;\n    }\n\n    #fourk2 {\n        margin-bottom: 15px;\n    }\n\n    #fourk2 .fourk-icon,\n    #fourk2 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'zo';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk3 .zo-twitter:before {\n        font-family: 'zo';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk3 .zo-twitter:before {\n        content: \"\\e82f\";\n    }\n\n    #fourk3 {\n        text-align: center\n    }\n\n    #fourk3 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 13px 0;\n        width: 45px;\n        height: 19px;\n        border-radius: 100%\n    }\n\n    #fourk3 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk3 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk3 i {\n        font-size: 19px;\n        line-height: 19px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk3 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk3 i {\n        text-align: center;\n    }\n\n    #fourk3 {\n        margin-bottom: 15px;\n    }\n\n    #fourk3 .fourk-icon,\n    #fourk3 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'wb';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk4 .wb-reddit:before {\n        font-family: 'wb';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk4 .wb-reddit:before {\n        content: \"\\f154\";\n    }\n\n    #fourk4 {\n        text-align: center\n    }\n\n    #fourk4 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 11px 0;\n        width: 45px;\n        height: 23px;\n        border-radius: 100%\n    }\n\n    #fourk4 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk4 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk4 i {\n        font-size: 23px;\n        line-height: 23px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk4 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk4 i {\n        text-align: center;\n    }\n\n    #fourk4 {\n        margin-bottom: 15px;\n    }\n\n    #fourk4 .fourk-icon,\n    #fourk4 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'zo';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk5 .zo-facebook:before {\n        font-family: 'zo';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk5 .zo-facebook:before {\n        content: \"\\e83f\";\n    }\n\n    #fourk5 {\n        text-align: center\n    }\n\n    #fourk5 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 11.5px 0;\n        width: 45px;\n        height: 22px;\n        border-radius: 100%\n    }\n\n    #fourk5 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk5 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk5 i {\n        font-size: 22px;\n        line-height: 22px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk5 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk5 i {\n        text-align: center;\n    }\n\n    #fourk5 {\n        margin-bottom: 15px;\n    }\n\n    #fourk5 .fourk-icon,\n    #fourk5 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'wb';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk6 .wb-instagram:before {\n        font-family: 'wb';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk6 .wb-instagram:before {\n        content: \"\\f14a\";\n    }\n\n    #fourk6 {\n        text-align: center\n    }\n\n    #fourk6 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 12.5px 0;\n        width: 45px;\n        height: 20px;\n        border-radius: 100%\n    }\n\n    #fourk6 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk6 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk6 i {\n        font-size: 20px;\n        line-height: 20px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk6 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk6 i {\n        text-align: center;\n    }\n\n    #fourk6 {\n        margin-bottom: 15px;\n    }\n\n    #fourk6 .fourk-icon,\n    #fourk6 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'wb';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/wb.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk7 .wb-youtube:before {\n        font-family: 'wb';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk7 .wb-youtube:before {\n        content: \"\\f142\";\n    }\n\n    #fourk7 {\n        text-align: center\n    }\n\n    #fourk7 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 11.5px 0;\n        width: 45px;\n        height: 22px;\n        border-radius: 100%\n    }\n\n    #fourk7 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk7 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk7 i {\n        font-size: 22px;\n        line-height: 22px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk7 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk7 i {\n        text-align: center;\n    }\n\n    #fourk7 {\n        margin-bottom: 15px;\n    }\n\n    #fourk7 .fourk-icon,\n    #fourk7 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'zo';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk8 .zo-github-circled:before {\n        font-family: 'zo';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk8 .zo-github-circled:before {\n        content: \"\\e841\";\n    }\n\n    #fourk8 {\n        text-align: center\n    }\n\n    #fourk8 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 10.5px 0;\n        width: 45px;\n        height: 24px;\n        border-radius: 100%\n    }\n\n    #fourk8 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk8 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk8 i {\n        font-size: 24px;\n        line-height: 24px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk8 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk8 i {\n        text-align: center;\n    }\n\n    #fourk8 {\n        margin-bottom: 15px;\n    }\n\n    #fourk8 .fourk-icon,\n    #fourk8 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'zo';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk9 .zo-linkedin:before {\n        font-family: 'zo';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk9 .zo-linkedin:before {\n        content: \"\\e828\";\n    }\n\n    #fourk9 {\n        text-align: center\n    }\n\n    #fourk9 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 12.5px 0;\n        width: 45px;\n        height: 20px;\n        border-radius: 100%\n    }\n\n    #fourk9 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk9 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk9 i {\n        font-size: 20px;\n        line-height: 20px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk9 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk9 i {\n        text-align: center;\n    }\n\n    #fourk9 {\n        margin-bottom: 15px;\n    }\n\n    #fourk9 .fourk-icon,\n    #fourk9 .fourk-icon+* {\n        cursor: pointer;\n    }\n\n    @font-face {\n        font-family: 'zo';\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot');\n        src: url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.eot?#iefix') format('embedded-opentype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.woff') format('woff'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.ttf') format('truetype'), url('https://www.dexfinance.com/wp-content/plugins/4k-icons-pack05/icons/fonts/zo.svg#oi') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk10 .zo-email:before {\n        font-family: 'zo';\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    #fourk10 .zo-email:before {\n        content: \"\\e836\";\n    }\n\n    #fourk10 {\n        text-align: center\n    }\n\n    #fourk10 .fourk-icon {\n        background-color: rgba(0, 186, 2, 1);\n        padding: 12px 0;\n        width: 45px;\n        height: 21px;\n        border-radius: 100%\n    }\n\n    #fourk10 .fourk-icon:before {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        background: rgba(255, 255, 255, 0.15);\n        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk10 .fourk-icon:after {\n        border-color: rgba(255, 255, 255, 0.15);\n        border-radius: 100%;\n        box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk10 i {\n        font-size: 21px;\n        line-height: 21px;\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk10 .fourk-icon.hovered i {\n        color: rgba(255, 255, 255, 0.15)\n    }\n\n    #fourk10 i {\n        text-align: center;\n    }\n\n    #fourk10 {\n        margin-bottom: 15px;\n    }\n\n    #fourk10 .fourk-icon,\n    #fourk10 .fourk-icon+* {\n        cursor: pointer;\n    }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  type: "text/css",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n        .elegant-fancy-button-wrap.elegant-fancy-button-1 .elegant-fancy-button-link {\n        color: #ffffff !important;\n        border-color: #ffffff;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-1 .elegant-fancy-button-link:hover {\n        color: #ffffff !important;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-1 .elegant-fancy-button-link.elegant-button-swipe:before {\n        background: #8b67d3;\n        }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  type: "text/css",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n        .elegant-fancy-button-wrap.elegant-fancy-button-3 .elegant-fancy-button-link {\n        color: #ffffff !important;\n        border-color: #ffffff;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-3 .elegant-fancy-button-link:hover {\n        color: #ffffff !important;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-3 .elegant-fancy-button-link.elegant-button-swipe:before {\n        background: #8b67d3;\n        }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  type: "text/css",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n        .elegant-fancy-button-wrap.elegant-fancy-button-2 .elegant-fancy-button-link {\n            color: #ffffff !important;\n            border-color: #ffffff;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-2 .elegant-fancy-button-link:hover {\n            color: #ffffff !important;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-2 .elegant-fancy-button-link.elegant-button-swipe:before {\n            background: #8b67d3;\n        }\n    ",
                  },
                }),
                a.a.createElement("style", {
                  type: "text/css",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n        .elegant-fancy-button-wrap.elegant-fancy-button-4 .elegant-fancy-button-link {\n        color: #ffffff !important;\n        border-color: #ffffff;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-4 .elegant-fancy-button-link:hover {\n        color: #ffffff !important;\n        }\n\n        .elegant-fancy-button-wrap.elegant-fancy-button-4 .elegant-fancy-button-link.elegant-button-swipe:before {\n        background: #8b67d3;\n        }\n    ",
                  },
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "ultimate-vc-addons-background-style-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/Ultimate_VC_Addons/assets/min-css/background-style.min.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "4k-icons-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/4k-icons/4k-icons/css/icon-styles.css?ver=2.10",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "la-icon-maneger-style-css",
                  href: "https://www.dexfinance.com/wp-content/uploads/la_icon_sets/style.min.css?ver=5.9.2",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "infi-elegant-elements-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/elegant-elements-wpbakery/assets/css/min/elegant-elements.min.css?ver=1.7.0",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "infi-elegant-animations-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/elegant-elements-wpbakery/assets/css/min/infi-css-animations.min.css?ver=1.7.0",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "infi-elegant-combined-css-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/elegant-elements-wpbakery/assets/css/min/elegant-elements-combined.min.css?ver=1.7.0",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "dashicons-css",
                  href: "https://www.dexfinance.com/wp-includes/css/dashicons.min.css?ver=5.9.2",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "parent-style-css",
                  href: "https://www.dexfinance.com/wp-content/themes/Avada/style.css?ver=5.9.2",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "js_composer_front-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/js_composer/assets/css/js_composer.min.css?ver=6.7.0",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "bsf-Defaults-css",
                  href: "https://www.dexfinance.com/wp-content/uploads/smile_fonts/Defaults/Defaults.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "bsf-icomoon-css",
                  href: "https://www.dexfinance.com/wp-content/uploads/smile_fonts/icomoon/icomoon.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "ultimate-vc-addons-style-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/Ultimate_VC_Addons/assets/min-css/style.min.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "ultimate-vc-addons-slick-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/Ultimate_VC_Addons/assets/min-css/slick.min.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "ultimate-vc-addons-icons-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/Ultimate_VC_Addons/assets/css/icons.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "ultimate-vc-addons-animate-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/Ultimate_VC_Addons/assets/min-css/animate.min.css?ver=3.19.11",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "font-awesome-css",
                  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=4.7.0",
                  type: "text/css",
                  media: "all",
                }),
                a.a.createElement("link", {
                  rel: "stylesheet",
                  id: "smart-sections-css",
                  href: "https://www.dexfinance.com/wp-content/plugins/visucom-smart-sections/assets/css/style.css?ver=1.6.8",
                  type: "text/css",
                  media: "all",
                })
              )
            )
          );
        },
        Q = n(26),
        X = n(2116),
        I = n(2118),
        H = n(2144),
        M = n(979),
        G = n.n(M),
        R = n(2113),
        z = n(2112),
        U = n(900),
        V = n(2143),
        W = n(946),
        Y = n(930),
        J = n(996),
        Z = n.n(J),
        q = n(939),
        K = n(956),
        _ = Object(u.a)(function (t) {
          return {
            root: { flexGrow: 1 },
            dexImage: { marginLeft: "2em" },
            image: { height: "2em", paddingLeft: "2em" },
          };
        }),
        $ = function () {
          var t,
            e = Object(q.a)(),
            i = Object(K.a)(),
            c = Object(r.useMemo)(
              function () {
                return Number(i.usDex).toFixed(2);
              },
              [i]
            ),
            s = Object(r.useMemo)(
              function () {
                return Number(i.dexShare).toFixed(2);
              },
              [i]
            ),
            u = Object(r.useMemo)(
              function () {
                return Number(i.dexIra).toFixed(4);
              },
              [i]
            ),
            l = _();
          return a.a.createElement(
            o.a,
            { maxWidth: "lg" },
            a.a.createElement(
              z.a,
              { container: !0, className: l.root, alignItems: "center" },
              a.a.createElement(
                z.a,
                { item: !0 },
                a.a.createElement(
                  U.a,
                  { className: l.dexImage },
                  a.a.createElement(
                    R.a,
                    { href: "/" },
                    a.a.createElement("img", {
                      src: Z.a,
                      alt: "dexfinance",
                      style: {
                        paddingLeft: "2px",
                        paddingRight: "2px",
                        height: "31px",
                        width: "auto",
                      },
                    })
                  )
                )
              ),
              a.a.createElement(
                V.a,
                { xsDown: !0, mdDown: !0 },
                a.a.createElement(z.a, { item: !0, xs: 3, lg: 3 }),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "a",
                    {
                      href: "https://dexscreener.com/bsc/0x79f3bb5534b8f060b37b3e5dea032a39412f6b10",
                      target: "_blank",
                      style: { textDecoration: "none" },
                    },
                    a.a.createElement("img", {
                      src: n(998),
                      className: l.image,
                      alt: "USDEX",
                      style: {
                        marginLeft: "18px",
                        paddingLeft: "0",
                        paddingTop: "7px",
                        paddingRight: "4px",
                      },
                    })
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "div",
                    { className: "navTokenPrice" },
                    "$",
                    c ? Object(W.a)(Number(c), 2) : " --"
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "a",
                    {
                      href: "https://dexscreener.com/bsc/0x65d83463fc023bffbd8ac9a1a2e1037f4bbdb399",
                      target: "_blank",
                      style: { textDecoration: "none" },
                    },
                    a.a.createElement("img", {
                      src: n(999),
                      className: l.image,
                      alt: "dexSHARE",
                      style: {
                        marginLeft: "18px",
                        paddingLeft: "0",
                        paddingTop: "7px",
                        paddingRight: "4px",
                      },
                    })
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "div",
                    { className: "navTokenPrice" },
                    "$",
                    s ? Object(W.a)(Number(s), 2) : " --"
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "a",
                    {
                      href: "https://app.dexfinance.com/etf",
                      target: "_blank",
                      style: { textDecoration: "none" },
                    },
                    a.a.createElement("img", {
                      src: n(1e3),
                      className: l.image,
                      alt: "dexETF",
                      style: {
                        marginLeft: "18px",
                        paddingLeft: "0",
                        paddingTop: "7px",
                        paddingRight: "4px",
                      },
                    })
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "div",
                    { className: "navTokenPrice" },
                    "$",
                    (null === e || void 0 === e ? void 0 : e.etfTokenPrice)
                      ? null === e ||
                        void 0 === e ||
                        null === (t = e.etfTokenPrice) ||
                        void 0 === t
                        ? void 0
                        : t.toFixed(2)
                      : " --"
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "a",
                    {
                      href: "https://dexscreener.com/bsc/0x01b279a06f5f26bd3f469a3e730097184973fc8a",
                      target: "_blank",
                      style: { textDecoration: "none" },
                    },
                    a.a.createElement("img", {
                      src: n(1001),
                      className: l.image,
                      alt: "dexIRA",
                      style: {
                        marginLeft: "18px",
                        paddingLeft: "0",
                        paddingTop: "7px",
                        paddingRight: "4px",
                      },
                    })
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(
                    "div",
                    { className: "navTokenPrice" },
                    "$",
                    u ? Object(W.a)(Number(u), 4) : " --"
                  )
                ),
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(Y.a, null)
                )
              )
            )
          );
        },
        tt = n(2111),
        et = n(2114),
        nt = n(2115),
        rt = Object(u.a)(function (t) {
          return {
            drawerPaperHeader: { margin: t.spacing(1), width: t.spacing(16) },
            drawerPaper: { width: 240 },
            dashboardMenu: {
              width: "100%",
              maxWidth: 360,
              backgroundColor: t.palette.background.paper,
            },
            nested: {
              paddingLeft: t.spacing(4),
              paddingTop: "4px",
              paddingBottom: "4px",
            },
            imageSize: { width: 100, height: 100 },
          };
        }),
        at = function () {
          var t = rt();
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              z.a,
              {
                container: !0,
                spacing: 0,
                direction: "column",
                alignItems: "center",
                justifyContent: "center",
              },
              a.a.createElement(
                z.a,
                { item: !0, xs: !0 },
                a.a.createElement(
                  R.a,
                  { href: "/" },
                  a.a.createElement("img", {
                    src: n(921),
                    alt: "X",
                    className: t.imageSize,
                    style: { paddingTop: "15px" },
                  })
                )
              ),
              "DASHBOARD MENU",
              a.a.createElement(
                V.a,
                { smUp: !0 },
                a.a.createElement(
                  z.a,
                  { item: !0 },
                  a.a.createElement(Y.a, null)
                )
              )
            ),
            a.a.createElement(
              tt.a,
              { component: "nav", className: "navDrawer" },
              a.a.createElement(
                et.a,
                null,
                a.a.createElement(nt.a, {
                  primary: "MONEY MARKET",
                  style: {
                    borderBottom: "0 !important",
                    backgroundColor: "transparent !important",
                  },
                })
              ),
              a.a.createElement(
                tt.a,
                { component: "div", disablePadding: !0 },
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/",
                  },
                  a.a.createElement(nt.a, { primary: "Dashboard" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/farm",
                  },
                  a.a.createElement(nt.a, { primary: "Farms" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/wrap",
                  },
                  a.a.createElement(nt.a, { primary: "Wrap" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    target: "_blank",
                    href: "https://pro.olympusdao.finance/#/partners/DEX%20Finance",
                  },
                  a.a.createElement(nt.a, { primary: "dexBONDS" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/regulation",
                  },
                  a.a.createElement(nt.a, { primary: "Regulation" })
                )
              ),
              a.a.createElement(
                et.a,
                { button: !0, component: "a", href: "/etf" },
                a.a.createElement(nt.a, { primary: "dexETF" })
              ),
              a.a.createElement(
                et.a,
                null,
                a.a.createElement(nt.a, {
                  primary: "dexIRA",
                  style: {
                    borderBottom: "0 !important",
                    backgroundColor: "transparent !important",
                  },
                })
              ),
              a.a.createElement(
                tt.a,
                { component: "div", disablePadding: !0 },
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/dexIRA",
                  },
                  a.a.createElement(nt.a, { primary: "Earnings Manager" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "#te",
                  },
                  a.a.createElement(nt.a, { primary: "Tax Exemption" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/zapdexira",
                  },
                  a.a.createElement(nt.a, { primary: "ZAP dexIRA/BNB" })
                )
              ),
              a.a.createElement(
                et.a,
                { button: !0, component: "a", href: "/predictions" },
                a.a.createElement(nt.a, { primary: "dexBET" })
              ),
              a.a.createElement(
                et.a,
                { button: !0, component: "a", href: "/dexDAO" },
                a.a.createElement(nt.a, { primary: "dexDAO" })
              ),
              a.a.createElement(
                et.a,
                null,
                a.a.createElement(nt.a, {
                  primary: "dexPAD",
                  style: {
                    borderBottom: "0 !important",
                    backgroundColor: "transparent !important",
                  },
                })
              ),
              a.a.createElement(
                tt.a,
                { component: "div", disablePadding: !0 },
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/dexpad/projects",
                  },
                  a.a.createElement(nt.a, { primary: "Projects" })
                ),
                a.a.createElement(
                  et.a,
                  {
                    button: !0,
                    className: t.nested,
                    component: "a",
                    href: "/dexpad/locker",
                  },
                  a.a.createElement(nt.a, { primary: "dexLOCKER" })
                )
              ),
              a.a.createElement(
                et.a,
                {
                  button: !0,
                  component: "a",
                  target: "_blank",
                  href: "https://www.dexfinance.com/docs/money-market#app-menu",
                },
                a.a.createElement(nt.a, { primary: "dexDOCS" })
              )
            )
          );
        },
        ot = Object(u.a)(function (t) {
          return {
            drawer: { width: 240, flexShrink: 0 },
            drawerPaper: { width: 240 },
            hide: { display: "none" },
            toolbar: { flexWrap: "wrap" },
            logo: { width: "4.14em" },
          };
        }),
        it = function () {
          var t = ot(),
            e = a.a.useState(!1),
            n = Object(Q.a)(e, 2),
            r = n[0],
            o = n[1];
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              X.a,
              { position: "sticky" },
              a.a.createElement(
                I.a,
                { disableGutters: !0 },
                a.a.createElement("img", {
                  onClick: function () {
                    o(!0);
                  },
                  src: G.a,
                  alt: "company logo",
                  className: t.logo,
                }),
                a.a.createElement(
                  H.a,
                  {
                    className: t.drawer,
                    onClose: function () {
                      o(!1);
                    },
                    variant: "temporary",
                    anchor: "left",
                    open: r,
                    classes: { paper: t.drawerPaper },
                  },
                  a.a.createElement(at, null)
                ),
                a.a.createElement($, null)
              )
            )
          );
        },
        ct = function (t) {
          var e = t.noContainer,
            n = t.children;
          return (
            c(),
            a.a.createElement(
              "div",
              { style: { position: "relative", minHeight: "100vh" } },
              a.a.createElement(it, null),
              e
                ? a.a.createElement(a.a.Fragment, null, n)
                : a.a.createElement(
                    o.a,
                    { maxWidth: "lg", style: { paddingBottom: "5rem" } },
                    n
                  ),
              a.a.createElement(P, null)
            )
          );
        };
    },
    935: function (t, e, n) {
      t.exports = n.p + "static/media/usdex.c2510ce4.svg";
    },
    936: function (t, e, n) {
      t.exports = n.p + "static/media/dexshare.525bb921.svg";
    },
    937: function (t, e, n) {
      t.exports = n.p + "static/media/bshares.dd62d3f6.png";
    },
    938: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    939: function (t, e, n) {
      "use strict";
      var r = n(26),
        a = n(0),
        o = n(963),
        i = n(280),
        c = n(929);
      e.a = function () {
        var t = Object(a.useState)({}),
          e = Object(r.a)(t, 2),
          n = e[0],
          s = e[1],
          u = Object(i.a)().contracts.indexpool,
          l = Object(o.a)(u.address);
        return (
          Object(a.useEffect)(
            function () {
              if (l) {
                var t = Object(c.b)(
                    null === l || void 0 === l ? void 0 : l.totalSupply,
                    null === l || void 0 === l ? void 0 : l.decimals
                  ),
                  e = l.tvl.div(
                    Object(c.b)(
                      null === l || void 0 === l ? void 0 : l.totalSupply,
                      l.decimals
                    )
                  );
                s({
                  tvl: null === l || void 0 === l ? void 0 : l.tvl,
                  totalSupply: t,
                  etfTokenPrice: e,
                  marketCup: t.times(e),
                  priceInDollars: e,
                });
              }
            },
            [l]
          ),
          n
        );
      };
    },
    941: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r,
        a = n(43),
        o = n(0),
        i = n.n(o),
        c = n(37),
        s = c.e.div(
          r || (r = Object(a.a)(["\n  text-align: center;\n  color: ", ";\n"])),
          function (t) {
            return t.color;
          }
        ),
        u = function (t) {
          var e,
            n = t.text,
            r = t.variant,
            a = void 0 === r ? "secondary" : r,
            u = t.color,
            l = Object(o.useContext)(c.a).color;
          return (
            u
              ? (e = u)
              : "primary" === a
              ? (e = l.primary.main)
              : "secondary" === a || "normal" === a
              ? (e = "#2c2560")
              : "yellow" === a
              ? (e = "#f9d749")
              : "white" === a && (e = "#ffffff"),
            i.a.createElement(s, { color: e }, n)
          );
        };
    },
    942: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return g;
      }),
        n.d(e, "a", function () {
          return v;
        });
      var r,
        a = n(77),
        o = n(185),
        i = n(288),
        c = n.n(i),
        s = n(997),
        u = n.n(s),
        l = n(938),
        p = n.n(l),
        d = n(935),
        f = n.n(d),
        m = n(936),
        A = n.n(m),
        h = n(21),
        g = "0x0000000000000000000000000000000000000000",
        y = { bscMainnet: 56, bscTestnet: 97 },
        v = Object(a.a)({}, o.b, [
          {
            address: "0x0000000000000000000000000000000000000000",
            symbol: "BNB",
            name: "Binance Coin",
            priceId: "binancecoin",
            price: h.b,
            decimals: 18,
            img: u.a,
          },
          {
            address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            symbol: "BUSD",
            name: "binance-usd",
            priceId: h.q,
            price: h.q,
            decimals: 18,
            img: c.a,
          },
          {
            address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
            symbol: "USDC",
            name: "USDC",
            priceId: "binance-usd",
            price: h.q,
            decimals: 18,
            img: p.a,
          },
          {
            address: "0x829c09fcc46d9fd31967272aba245bef9f727f93",
            symbol: "USDEX",
            name: "USDEX",
            priceId: "usdex",
            price: h.r,
            decimals: 18,
            img: f.a,
          },
          {
            address: "0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6",
            symbol: "DEXShare",
            name: "DEXShare",
            priceId: "dexshare",
            price: h.g,
            decimals: 18,
            img: A.a,
          },
        ]);
      (r = {}),
        Object(a.a)(r, y.bscMainnet, 3),
        Object(a.a)(r, y.bscTestnet, 3);
    },
    946: function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = (function (t) {
          var e = t.toString(),
            n = /\B(?=(\d{3})+(?!\d))/g;
          if (-1 === e.indexOf(".")) e = e.replace(n, ",");
          else {
            var r = e.split("."),
              a = r[0].replace(n, ","),
              o = r[1];
            1 === o.length && "0" !== o && (o += "0"),
              (e = "".concat(a, ".").concat(o));
          }
          return e;
        })(
          (function (t, e) {
            var n = Math.pow(10, e || 0);
            return Math.round(t * n) / n;
          })(t, e)
        );
        return n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    955: function (t, e, n) {
      "use strict";
      var r = n(935),
        a = n.n(r),
        o = n(936),
        i = n.n(o),
        c = n(983),
        s = n.n(c),
        u = n(984),
        l = n.n(u),
        p = n(985),
        d = n.n(p),
        f = n(986),
        m = n.n(f),
        A = n(987),
        h = n.n(A),
        g = n(921),
        y = n.n(g),
        v = n(937),
        b = n.n(v),
        w = n(988),
        x = n.n(w),
        E = n(938),
        k = n.n(E),
        O = n(989),
        L = n.n(O),
        B = n(990),
        j = n.n(B),
        T = n(991),
        D = n.n(T),
        C = n(962),
        N = n.n(C),
        F = n(992),
        S = n.n(F),
        P = n(993),
        Q = n.n(P),
        X = n(994),
        I = n.n(X),
        H = n(995),
        M = n.n(H),
        G = {
          USDEX: a.a,
          DEXSHARE: i.a,
          DEXETF: s.a,
          DEXIRA: l.a,
          USDC: k.a,
          "USDEX-BUSD-LP": d.a,
          "USDEX-USDC-LP": m.a,
          "DEXSHARE-BNB-LP": h.a,
          "DEXSHARE-WDEX-LP": Q.a,
          "wDEXIRA-DEXSHARE": Q.a,
          "WDEX-SHARE": Q.a,
          BOMB: y.a,
          BOMBPNG: y.a,
          BSHAREPNG: b.a,
          BSHARE: b.a,
          BBOND: x.a,
          WBNB: N.a,
          BNB: N.a,
          BOO: N.a,
          SHIBA: N.a,
          ZOO: N.a,
          CAKE: N.a,
          SUSD: N.a,
          DEXMMETF: L.a,
          SBTC: S.a,
          BTCB: S.a,
          BTC: S.a,
          SVL: N.a,
          "BOMB-BNB-LP": j.a,
          "BOMB-BTCB-LP": j.a,
          "BSHARE-BNB-LP": D.a,
          "BSHARE-BNB-APELP": D.a,
          "BOMB-BTCB-APELP": j.a,
          "BNB-USDEX-LP": I.a,
          "BNB-DEXIRA-LP": M.a,
          WDEX: Q.a,
        };
      e.a = function (t) {
        if (!G[t]) throw new Error("Invalid Token Logo symbol: ".concat(t));
        return G[t];
      };
    },
    956: function (t, e, n) {
      "use strict";
      var r = n(11),
        a = n(26),
        o = n(0),
        i = n(280),
        c = n(917);
      function s() {
        s = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (B) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, r) {
          var a = e && e.prototype instanceof d ? e : d,
            o = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = w(i, n);
                    if (c) {
                      if (c === p) continue;
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
                  var s = l(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === p)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (B) {
            return { type: "throw", arg: B };
          }
        }
        t.wrap = u;
        var p = {};
        function d() {}
        function f() {}
        function m() {}
        var A = {};
        c(A, a, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          g = h && h(h(O([])));
        g && g !== e && n.call(g, a) && (A = g);
        var y = (m.prototype = d.prototype = Object.create(A));
        function v(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = l(t[a], t, o);
                  if ("throw" !== s.type) {
                    var u = s.arg,
                      p = u.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (u.value = t), i(u);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return p;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var r = l(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), p
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                p)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              p);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          c(y, "constructor", m),
          c(m, "constructor", f),
          (f.displayName = c(m, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === f || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(y),
          c(y, i, "Generator"),
          c(y, a, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                p
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
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
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          t
        );
      }
      e.a = function () {
        var t = Object(o.useState)({ dexShare: "0", dexIra: "0", usDex: "0" }),
          e = Object(a.a)(t, 2),
          n = e[0],
          u = e[1],
          l = Object(c.a)().fastRefresh,
          p = Object(i.a)();
        return (
          Object(o.useEffect)(
            function () {
              function t() {
                return (t = Object(r.a)(
                  s().mark(function t() {
                    var e, n, r, o, i;
                    return s().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                Promise.all([
                                  p.getDexShareUsdPrice(),
                                  p.getUsDexUsdPrice(),
                                  p.getDexIraUsdPrice(),
                                ])
                              );
                            case 3:
                              (e = t.sent),
                                (n = Object(a.a)(e, 3)),
                                (r = n[0]),
                                (o = n[1]),
                                (i = n[2]),
                                u({ dexShare: r, dexIra: i, usDex: o }),
                                (t.next = 14);
                              break;
                            case 11:
                              (t.prev = 11),
                                (t.t0 = t.catch(0)),
                                console.error(t.t0);
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 11]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [u, p, l]
          ),
          n
        );
      };
    },
    962: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADuVJREFUeNrsnX2IFOcdx2evhaap0bOEok2US1GIqcW9BGpQU1do0p4EXDEWU6jeBXz5R8/7Q8E3LuIb5P6I5/1RNdBbLa0hptwGghLb4mk90T/MrcRqQalXbTC0JT1NWlooXJ/v+ozMzD4z88wzzzPzPLPzg2H3XnZ3nuf57Pf38jzzjGXllltuueWWW265mWeFZmz0xMREiT61H6eQo8jx0ho57tPnw/UOLBSGc2CyA0YbBQHHYvrYquCjxuhxjkI1TEAaz4HRHxDAUKZwQD3aUjydMapCH2QJoEJGVASQrOF0K2lZlcJTNRmegsGgdFJISlFfe/evn1l3Pv2MPN6rP4eNXK6Fvm7h/Ic8znh6GjmmWzOfmlZ/LgoPAaeSA6NeTbrJ0ckbi1y7fovAMFp/vEsgGbk0Kv28Fr7Ybs2dM8ua+xw55syuP3IalKafHBUCz1gOjDxQig5QQtXj1G//QMCoWRcJKPcffJn4+U6ZPMlaML/dWvrKIqJK7bwqBLXZrTs4BQNAeTvM7diQvPub03Ul0c2gOKtWdFhLX36JBx6twSloCgpcT2+QokA5ThNIjgye1BKSIPe1asWP6wBxgNOjW4Bc0BCWN6n7afVTE0ACNUnD3ch0W+u7VlrryIHnATEO1OZgDkwjKHA7g361E4DyVv9gHZSsGdRma3dXkLtCCtdFwKk1PTC02Ab3s7nZQPEaFGcLASdAcQ4SaHqaFhga1A6xVAXu5ihxPXA/JrseUVcFcHRUm0KKsGymGVCDIZjdsWfgUVGtGQ3uaaBv+6NiISO26Umj8FdIAZRWGquUWaqyccuBOjC5cbmpxDOpQsKwtFEXVGSpCmBpJvcjSW3gmpYkBU0hQVjQ2rOsdHkncT+IVXILNmRSPrHNGDmWJxHXFBKCpUzdUKs3A1q9YbtRhbe0DYW/Y4f3sVzUOFWamtHA0FnlQe/vAUn5p5tyFyTooo4f3s+a5BynGVRV1We3pAELaipLXn0jh0XQoMz4sjGSAyj4EO13sxQmCBYEt7nJsYG+bX7zUstVKE1BESwlGuDmwW160CiJaQoKYGFmQ1CVZijvZx2aFsmwtLFg6WuSuaA0zecLiXE4S4ulegFDT2rICwsagcnD3LIBjUyFwbxQMQ9w04eGkT3ZKxf1iGFYE4mm11m++tjj1le+/rj133/+w7hzR1Gv+utDrDpNV9wJy4IEWECvayk+IHnhBz8xGpbvrttmfW3qk9Yfjx6w/nXvjnFtQHHv7Ie/8FaEYwfBLTFhsWeeXWa6sgCWb0yf6XpumqG4t2bDDlY8EyugjBvD9HrjFtRaTJ0bYgFiMjS4BquvMeEoki+6cDxTiKEuJctTnMPVg+XXN2UGFqf97z//NtY9VU8cYi2NaBdxTXGAGXWqi8lxC6+KmAqNTzxTI8C0J+KS6KUgRW86l2VYTHZPiGd8XNNm5QpDA93blqNAZ6orEgXAVKVhuCZkTc9EWa0nAgxQ7XT+7nniikxbsB1XLUyEBq7p4/PveX+NjQC6lLgkOlfkggVS12ywmOqefFxTJx1XJTFMr/MHxCymLVeQOdAmQuNznVevdGBY6oKai0mBrooBNg0ajFcclWkRVRfIm0lLFlQOrGnQQGUYYUSvNGBY6mLSkoUkBtQ0aN4SVBlehen0ypop6pLkQJoEjc92KZ2ygFnj/OGoIYFuGgNoEjSMceyODQy9CM0lVScMUJc0B84UaBgZbmvYJSotUdUFUqZ73UWHATMBGp/QYpkwMI6dtR/ZqTMXclgyBA1jPMtB63/DFKbsTaV13opD5gBhaaaMsr/u0GA8GR6jLAqMS55ONQksAOXqoV3S5op0h4YxrsukKIyuqbRsWAAKJhdlTjDqDA1jXH3dUktIduQKkHRceqkKFtuaAZr6tvqNbqkUVWEWe31ds8HSTNDgfgw8bikIGBdh2Lu/GWFpFmgY2RK/wlD/VQwhMFWbtXJtYrCogubZn3Vr058XG8e3jRXH+ClM0ZtO61as+/z6lURhUQHN59c/1qY/fWLUEi8wrn+8duOmdvHL365csG69/06isMiEBud/+8Nf6RX8No5zkReYed4oWkcThSYOLDKgiQu7ymwpKPEJAqbNHb/ULF0taufLgCUONLrC8lBhbgVyACv4BL0TrgCzuFT7pZjfemGRNeu1tYnBIpL16AyLbX//83k3IMQCFYa16sqEdbthgxEVloc3Ap0mTWlMgMVOcDw8lMJckhbuyE47o6TOfoMSFRbsq4JLS3Fw3DktFJqosKDNc9emU6fB3XaDLBSYtGCBxH/zuecjF7gwOHd/X40FCzbjwXXIOPbu2sh9l1gWNCKwoM2Tv/NsKsU93Jo5KGMOBebipdFUYLE7SqQqevd3Q9a9kTP1OocoLLYF7OYUCg3OQQQWtFm07bJdEm+WlKqyeDtIpONQ4/jTL/tjwRIHGiyPiFJn8cISp+2SbYqWwIR1jMqOC4JFFJoo5gdLGtAwYtZiGDCuYs0nCRTteDtERcfxwKISmjBYNFIaPoV58MWXWsCiouOiwKICGl5YdIImVZck2gEyOk4EFpnQRIVFF2haTINFxuvjwOKFBje8SgoWHaBJDRgZ61nQcTN+uDzy6/bu2hQLFic0AbcL9jWcsygscdtuLDC3Tr4Te00JXo/3iWo79xySMt2B98B7mdR2FcC49jub8dQ0JR8cd01JnIlEGdva47V4D5GlH2m2XQUwV50/zHx6mrIPF+04GR0WB5o4sOjQdmOzJJGOk9lhItDIgEWHtvsZYwPosUjATJYQHMrqOBUdFgUambDo0HZO+0sYMMPuFHS2FkqjssN4oFEBiw5tjyoQoQoz5YlJiaHs13EiHYbVd9/v/Tl36h4ETVRY8Jn47LAVgKraHscYAjEcBkzN/QazrCTN23GisGDJZtQCFwsaEVjsohzPslHZbY9rM0OyYq41vWns9I0On77oR9a9Cx8JwRInuLQrwTBRWJwWdRGVaNtlWNiaXj9gcFubkv3z6vU7tN4XJggWWbUPUVhEoUnD7KWpDhsnvEzliWFcqdT3EnZLsmGxv7Wq5l945oaiuqdUgJkzOzA8CQLGVbxbIDDBphMsKqGJMpGoOzSMePUcLzDuwHfOLONhUQGNyKyzztAsnN8upjDEb7lSKczKztXQLUWFRSY0cZYo6AiNzxhzu6SG/JtBn5GwyIAm7noWHaFZ0Di+Y0Q4xqIA4/JfC18sagXMY1OflJK6R4VGBiyP3uvb+mwoxBjfYdb/BQFTdf7Q8fJLUhYdyTJcQpL0blAyYbGLcrrYUjK+YQFvIDD0FrXjIbKVmiW9hZgKWNJaosDKjhjXkVejKkzDi5a+ssjSyZKCJsuwwBjXj9f8bhwaBswH3jfWyS0lAU3WYfFxR8f8/jcQGEJZ1euWOhrfPLPQNAMsUdwRj8I0vHjVax2WjqYCmqzDAlvftbIhO2Kl01GA6XfXY4paFvFUQJN1WBBedERwR1zA0GypFkJlJqHJMiw+MSlmpyuxgGGpDD5ohsKrCbIAje6w+HzxK2Gv4QWmIfh9fUWHpbOlCY0JsPh86fulAENzctebrSN06pZi6wCNCbDAtjZe4lsJCnajKgzsoFNlRK8rzjI0psDioy7HeF7LDQxLZeADdY5lkoTGFFjwRWeoy7B3SYsMhWlQGdi+XRstE0wlNKbAEvAl7+F9fSRgWCqDPH6h5ks4VUJjEiwAZR0jM6KlEz4GRD54YmLituXYnhWXoOBSFFNM1jJNk2CBHT+yz1uogwC08wS7oi6JKWEgd6sBAbBMpTENFoDCqOr2R4FFWGGoygxZnrvOLnn1DW1vlSNTaUyDBYHulfPvecsgWIL5TNT3irPdR483AD5+eL/2tZm4SmMaLLCBvm2scRFyCcLAUCnb7XVNew3JmkSgMREWZEUMV3SQN42W5pKCXNPGLQe0vSm6qHsyERbGpa91V0QD3fG0gMGdR5E1tZoczwRBYyIscEGAhVFzaY+SRsuMYZy1mYb9P+Pug6uLezIRFrv/WQW6OLBIAYZCM+yNZ+yNj02GxlRYEOQyFrlVyTgdjD3WMk+UuKdB8tDp/B3cEtyTaWavtjMRFtZVAIgSROMW6QrjSbUbdrBCI0wzgGIaLMiIGLDUQwYZsEgHhp7UEi80aISJ0Jhk6GNGSWOcKsuYrM+Rvk8vhabL8hT1cmjUKotP33bFDXKVxjCeeAZXd5/1ptsytm3PLTRmsWGpSBcElY3JockWLMqBCYJG5UbJWbeQG3wpg0VJDMOIaWqsQNiuRK7S/OoD3QyQYOaZAYudDVWUjmdSDaVTCFCahp1rMO+0c89A7qI4glufyV07G6opF4AkG0yhedvyFPdgWLW3esP23EX5uKBjR/az7jRiUeVeLjN1TtUleVNuciDl3u39G+Y94KJMWrmXhGFpAlyQDywV2XUWrRTGozYl8jDkDYZttdm49YA1cmm0aUHBF2igb7sfKLAeGXNDxgDjcFGYfyqz/o7t6neQ2Cbp+xyk7X4QqwRcJFizFBTkjADGAc5m8tDLUhtYX/+gdWTwZOaDYru8HzDDD0XZLWteyFhgKDRtNCBmqg1gOUqgOUEyqqwpDkBB7BZwFekYVZXhtM+1oFvnEXDKFJw2v/9BGg7FMTmjsl1PyKYG9QsHCShv6nLeBV07lICDTur2c1Owkcs16933T9djHVPcFbIe7EbKUbCs0MB2XKfzL+jcuTQo3hwGDmABNKfOXLAuXh7VDh5UZQEIdqvk2LygQuOUMR3HpGDCt5IXHGd2NXKpRhRoNBW3BShwbwZsxx5hB3WtQTEKGA84ZQoO180PoDbXbtyyLl4atT4h8Fy7cVNq0PzwLiCz6/USG5QIW6AADuzLUtEdFCOB8cBTpOCUeVTHa1Ce+18QmK7ftB5QF3aHgHT300aYJj8xyXVXOvuGYwFFtTDDFnDH6D7IRpmxwDAyq2Wi8CRkgAM7q1d1C2SbDhiG8gCcxZbjRqcpGCqxqJucM1FJmgYYBkAlGu/Msx7WdkqK4EAMcpVCUjNZRZoamIDguUjdlzMQmRfg0s55gtX6YUqwmltuueWWW24Zs/8LMADeWgOsNPVRrQAAAABJRU5ErkJggg==";
    },
    963: function (t, e, n) {
      "use strict";
      var r = n(26),
        a = n(11),
        o = n(0),
        i = n(283),
        c = n(68),
        s = n(135),
        u = n.n(s),
        l = n(280),
        p = n(226),
        d = n(46),
        f = n(942),
        m = n(185),
        A = n(964),
        h = n(929),
        g = n(123);
      function y() {
        y = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (B) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (o._invoke = (function (t, e, n) {
              var r = "suspendedStart";
              return function (a, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw o;
                  return L();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = w(i, n);
                    if (c) {
                      if (c === l) continue;
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
                  var s = u(t, e, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === l)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(t, n, i)),
            o
          );
        }
        function u(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (B) {
            return { type: "throw", arg: B };
          }
        }
        t.wrap = s;
        var l = {};
        function p() {}
        function d() {}
        function f() {}
        var m = {};
        c(m, a, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          h = A && A(A(O([])));
        h && h !== e && n.call(h, a) && (m = h);
        var g = (f.prototype = p.prototype = Object.create(m));
        function v(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var r;
          this._invoke = function (a, o) {
            function i() {
              return new e(function (r, i) {
                !(function r(a, o, i, c) {
                  var s = u(t[a], t, o);
                  if ("throw" !== s.type) {
                    var l = s.arg,
                      p = l.value;
                    return p && "object" == typeof p && n.call(p, "__await")
                      ? e.resolve(p.__await).then(
                          function (t) {
                            r("next", t, i, c);
                          },
                          function (t) {
                            r("throw", t, i, c);
                          }
                        )
                      : e.resolve(p).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return r("throw", t, i, c);
                          }
                        );
                  }
                  c(s.arg);
                })(a, o, r, i);
              });
            }
            return (r = r ? r.then(i, i) : i());
          };
        }
        function w(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                w(t, e),
                "throw" === e.method)
              )
                return l;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(n, t.iterator, e.arg);
          if ("throw" === r.type)
            return (
              (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), l
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function k(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                o = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = f),
          c(g, "constructor", f),
          c(f, "constructor", d),
          (d.displayName = c(f, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === d || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          v(b.prototype),
          c(b.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          v(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                for (; e.length; ) {
                  var r = e.pop();
                  if (r in t) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = O),
          (k.prototype = {
            constructor: k,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = n),
                  r && ((e.method = "next"), (e.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (c && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
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
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                l
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
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
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      }
      var v = (function () {
          var t = Object(a.a)(
            y().mark(function t(e, n, a, o, c) {
              var s, u, l, g, v, b, w, x, E, k, O;
              return y().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (s = new i.MultiCall(n, m.g[o])),
                        (u = Object(A.a)(n, o)),
                        (l = e.map(function (t) {
                          var e = Object(p.g)(n, d.a.indexpool, a).methods;
                          return {
                            balance: e.getBalance(t),
                            weight: e.getDenormalizedWeight(t),
                          };
                        })),
                        (g = e.map(function (t) {
                          var e = Object(p.g)(n, d.a.erc20, t).methods;
                          return {
                            name: e.name(),
                            symbol: e.symbol(),
                            decimals: e.decimals(),
                          };
                        })),
                        (t.next = 6),
                        Promise.all([
                          u.methods
                            .computeAverageTokenPrices(e, p.b, p.a)
                            .call(),
                          s.all([l, g]),
                        ])
                      );
                    case 6:
                      return (
                        (v = t.sent),
                        (b = Object(r.a)(v, 2)),
                        (w = b[0]),
                        (x = Object(r.a)(b[1], 2)),
                        (E = x[0]),
                        (k = x[1]),
                        (O = w.map(function (t, n) {
                          var a,
                            i = Object(r.a)(t, 1)[0],
                            s = e[n],
                            u = E[n],
                            l = u.balance,
                            d = u.weight,
                            m = k[n],
                            A = m.name,
                            g = m.symbol,
                            y = m.decimals,
                            v = Number(y),
                            b = Object(h.b)(i)
                              .div(Math.pow(2, 112))
                              .div(Math.pow(10, 18 - v)),
                            w =
                              null === c ||
                              void 0 === c ||
                              null === (a = c[f.a[o][0].priceId]) ||
                              void 0 === a
                                ? void 0
                                : a.usd;
                          return {
                            name: A,
                            symbol: g,
                            decimals: v,
                            address: s,
                            balance: Object(h.b)(l),
                            weight: Object(h.b)(d),
                            img: Object(p.e)(s, o),
                            priceBnb: b,
                            priceUsd: b.times(w),
                          };
                        })),
                        t.abrupt("return", O)
                      );
                    case 14:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n, r, a, o) {
            return t.apply(this, arguments);
          };
        })(),
        b = function (t) {
          return t.reduce(function (t, e) {
            var n = e.priceUsd,
              r = e.balance,
              a = e.decimals,
              o = Object(h.b)(r, a);
            return t.plus(o.times(n));
          }, Object(h.b)(0));
        };
      e.a = function (t) {
        var e = Object(c.c)().chainId,
          n = Object(o.useState)(),
          s = Object(r.a)(n, 2),
          A = s[0],
          w = s[1],
          x = Object(l.a)().provider,
          E = new u.a(x.provider),
          k = Object(g.c)();
        return (
          Object(o.useEffect)(
            function () {
              k &&
                e &&
                Object(a.a)(
                  y().mark(function n() {
                    var a, o, c, s, u, l, A, g;
                    return y().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = new i.MultiCall(E, m.g[e])),
                              (n.next = 3),
                              a.all([
                                [t].map(function (t) {
                                  var e = Object(p.g)(E, d.a.indexpool, t);
                                  return {
                                    name: e.methods.name(),
                                    symbol: e.methods.symbol(),
                                    decimals: e.methods.decimals(),
                                    totalSupply: e.methods.totalSupply(),
                                    tokens: e.methods.getCurrentTokens(),
                                    swapFee: e.methods.getSwapFee(),
                                    totalWeight:
                                      e.methods.getTotalDenormalizedWeight(),
                                  };
                                }),
                              ])
                            );
                          case 3:
                            return (
                              (o = n.sent),
                              (c = Object(r.a)(o, 1)),
                              (s = Object(r.a)(c[0], 1)),
                              (u = s[0]),
                              (l = u.tokens),
                              (n.next = 10),
                              v(l, E, t, e, k)
                            );
                          case 10:
                            (A = n.sent),
                              (g = {
                                address: t,
                                name: u.name,
                                symbol: u.symbol,
                                decimals: u.decimals,
                                img: Object(p.e)(t, e),
                                totalSupply: Object(h.b)(u.totalSupply),
                                totalWeight: Object(h.b)(u.totalWeight),
                                tokens: A,
                                tvl: b(A),
                                allTokensInfo: f.a[e],
                              }),
                              w(g);
                          case 13:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
            },
            [e, t, k]
          ),
          A
        );
      };
    },
    964: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(46),
        a = n(226),
        o = function (t, e) {
          var n;
          return Object(a.g)(
            t,
            null === r.a || void 0 === r.a ? void 0 : r.a.uniswapV2oracle,
            null === (n = r.b[e]) || void 0 === n ? void 0 : n.uniswapV2oracle
          );
        };
    },
    968: function (t, e, n) {
      "use strict";
      var r = n(0),
        a = n.n(r),
        o = n(2109),
        i = function (t) {
          var e = t.icon,
            n = t.onConnect,
            r = t.title;
          return a.a.createElement(
            o.a,
            { fullWidth: !0, onClick: n, className: "wallet-button" },
            a.a.createElement(
              "span",
              { style: { marginRight: "1rem", height: "2rem" } },
              e
            ),
            a.a.createElement("span", null, r)
          );
        },
        c = n(2138),
        s = n(2111),
        u = n(2106),
        l = n(980),
        p = n.n(l),
        d = n(981),
        f = n.n(d),
        m = n(982),
        A = n.n(m),
        h = n(68),
        g = Object(u.a)(function (t) {
          return {
            paper: {
              position: "absolute",
              width: "400px",
              maxWidth: "100%",
              backgroundColor: t.palette.background.paper,
              boxShadow: t.shadows[5],
              padding: t.spacing(4),
              outline: "none",
            },
          };
        }),
        y = function (t) {
          var e = t.open,
            n = t.handleClose,
            o = g(),
            u = Object(h.c)(),
            l = u.account,
            d = u.connect;
          return (
            Object(r.useEffect)(function () {
              l && n();
            }),
            a.a.createElement(
              c.a,
              {
                "aria-labelledby": "connect a wallet",
                "aria-describedby": "connect your crypto wallet",
                open: e,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                onClose: n,
              },
              a.a.createElement(
                "div",
                { className: o.paper },
                a.a.createElement("h2", null, "Connect Wallet"),
                a.a.createElement(
                  s.a,
                  { component: "nav", "aria-label": "main mailbox folders" },
                  a.a.createElement(i, {
                    icon: a.a.createElement("img", {
                      src: p.a,
                      alt: "Metamask logo",
                      style: { height: 32 },
                    }),
                    onConnect: function () {
                      d("injected");
                    },
                    title: "Metamask",
                  }),
                  a.a.createElement(i, {
                    icon: a.a.createElement("img", {
                      src: f.a,
                      alt: "Wallet Connect logo",
                      style: { height: 24, color: "white" },
                    }),
                    onConnect: function () {
                      d("walletconnect");
                    },
                    title: "WalletConnect",
                  }),
                  a.a.createElement(i, {
                    icon: a.a.createElement("img", {
                      src: A.a,
                      alt: "Coinbase wallet logo",
                      style: { height: 32, color: "white" },
                    }),
                    onConnect: function () {
                      d("walletlink");
                    },
                    title: "Coinbase Wallet",
                  })
                )
              )
            )
          );
        };
      e.a = y;
    },
    969: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    970: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    971: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    972: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    973: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    974: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    975: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAGb1JREFUeNrsnXtvGsnSxnsmIAxCxBayY3ljRSud7/+B3j+yipy1WFuIGHHACId9p+xqZ8LhMpfq+/NIyNmsA0N3/7ou3V2tFARBEARBEARBAShDE4Stf//9t1v86PJ/9kv/q/z3dfSzeK1L/73in5ssyzZocYAOmYO5V/z4wCBrgDsNQW6rLU8EG37Rn9eYBAA6VB/qQfHqMcj9gB6frP9zCf41ehSgQ29gDxjmQWBQ17H+S5oECvCX6HGAnpLFHkYKdhXwl2z5F3D3AXpscA8ZbnrlaJF3EeiL4jWHmw/QATeghwC6d/H2CHCLQD9n6OHeA3Qv4O4y3PTqokXERfH8UwH8HE0B0F1a7xFaw4ookTeDlQfotgAnsMew3k6l3Xos1wF0Ubgp3r7gF2Jvv9z6KYAH6AA8DVGWfoY4HqAD8DREsfs/sPAAHYDDpQfoiUOOJFucwE+QpQfoepmMAO+Di2g1Ywu/BehpuulXKux1cH06rFwsYs1/T/pZZztp6dw7qXzefcA/+4G31UOqCbssUcgv2IrngQFNMSe5oS+u4k+eIM/U23n5TunPobTlioFfA/R4Ae+xFe8HMBif+WcQ1Vu4bfVLF87wWeTKTwF6fJCP2Yr7KG2t/xtLppgtPwE/VL9KYPmmZJbjsgQAJ8ty7aGFWehXCkmiUomskYd9QZttHgE6YnFJuCkZtEw5A8wn/oaeQU9e1STW2D2LdCDlbMWHnsTbT6lY7obQ+3TM97HopxlA93/gkHt449iKbxnuH9isUavvtJV3PUEv2LpvAbq/rvqlY/cPhyvkrLzLrcg0Qd/H4spnkQwM16469lab61fqU5dbkycxTNxZBIPBZVZ9zoDDPTffzy7PIlCRiwlATy8eB+DpAU8u/F2ocXsWeIdfO3DRH1CO2Jv+v7I8yQcbt2eBdjIl3C4sdzAKGvgZw+u9Era0ZdiXAN1s55IVH1ns1GmM66qRAU9uPE3+NpOxQSXpsoA6k2bvP5S9AylzdtOxySWcMUI5m08W4/dgNtdkAUF+q+xk1uGmh+/Ojy2GdkFk5DNA/pvo2OIMVjwK4G0uu3oPewbIYcUjB95W4tZr2DNAjnpiicTuNvZbeAt7ljDkBDZlThdAIZnY3cY2aS9hzxKFnDY83GNnW5LA2zj45B3sWYKQB79vGQrClfdqnPkGOkFucp18giOkEI+1LsNu0qh4s86eedTwJne8UTx+hz3q0B4P0nRtfy+MS+ZJg5tcAkE8Drkcf4rHn9Okb+5BI48MQ34HyKGj1u6tAqzJePqaN/CkadE5KfLZ0Nsj6QY1MTqmjr5S+PjV1X6N3GGj6mQIIId8sewUS9+pX3fXSbN2y3mBNEDnL2tqeQOQQ21gXxuEXV8JloxFv1JmljUAOeQ77CPetBM36PwlR4AcShj2S85PxQk6Zx4vATkE2NWNzXg9twi5jssBOQTY39j7I0aLTjvfuoAcChT2BwNv3efrvOMAneNy6eOBK0AOWYSdlt5MjLexjc00uQXIyYpLz1o0w/6N4Qc5gH0aYrxuw6JfC3+OrquNijCQC9gJdOlDKiaMoT3Q2WXvC0OOveuQaz2wVympC5NLbrlByE3MUrgOCfLBqr8aHCWfif9kyoU3adGlXXbcOw75CHsQLrwR0PkUkKTLvuajhBDkE+zkXUqPywsTWfiOAch11Q7RuBzDKh5xLNpjQ7PliXwZKOyz4vuQUZNcPiZv+JvocxroROmSUN9xsUIUcOubTy+OeJIUms1D62/+bl+U7IYw0XpzufAX7glDPgPkUUDeYxDGJ8YcjZ3PZCxcndtuEa//I/y2Y8k2kG5MSZcdcXkckBO8tzWtHf2bL67LL9WEnQyS5GYafVmkX6AbSMBhe2v4kF+o5qsvNDFQRZZhQLAT6JLLvxe8TO2VRZdcFphivTxowLtco/9SYHzehGTZDRioa29A55lbKhGx5pkRChNwGph/Cnt3t6HAzgZKcvz2JXbMdQQ6VzSWgMseHNx6qWykzN16oi9I/BYI7FMOZaWMH/G1dAq6Or5cUlczuOxOYB2yBT5Tv9a3tbYH4s6eslvPoEdntwPy9igLL1XK/NWqt1mB6rQcIHptVEJbZeYIIHQc8MsTlidXZu/Dq2VUimeehXBykaAsnnWu5JabW1n1tjOypDV/wNFTq5CTK3yj5Kv+mBSNtWFAz/ug5A6+tIrV8xYDRdKar3BgxTrko0AfP6TlNoJc8jbVsXXQC30UtOZw2e1BPgoYcp0bUAHBTmNbqn5CY6veBtRzoYefY5urNcilDxy5UDfAZ5Y0ZOfWQBdeOoA1tydJLwyqbtUpLJVaTRo22S3XtNOlYvM5ykJZ1SiC77AK9Lklz22MjYNe2iABax6e296L4Ks8B2rVl4KT1LDuybYm6+hSVgHW3K7OGljOp+L1ssc49Eov2zFzyKszZNgkNtHoZca5EdB5FhkJfmnInupsepmcWO5clMZEl9/7ozK/sWYV8s5J3kSzFvKsxnVAr+u6f4Q1D1ZdIch3B++Gfr94Ubmv7wZjaFqTjuEchNS6erfOQZ+6oJ979mUhWdBbbVwii8XA3yv5Usj3MRgHbl+p73EhDjrPHhLx2AoHV7x13Z+EBjO59l8Frfsksr0WP4TeZygOupJbUoM1t6waLt5C0HJt2bq36W+yfN8i3B79JOTx5LynRRR0iT3GG57tIbuqsm1ybeJQEdf9+97AXZ0x5NF5f9zOUhxU4rJS1p2PM0rsqMLBFX/d9qXBgU3v/RePoxFPPPvG05oBSCFZO1MyK1iva+qnJumO5KwB0L1026se7XyxYMkW2pLxslx3ZzJIRuSpCC61nVxTzy2CvsCSmhNV7bu15YG+4Sz9MuFDTTNbfXwSdLjtwavqvuhnNJV1ScXpg9agC1nzLZJwTtz2yqcMUd3Hifu+FTKA+an691VAl9jWCMjdxOZXNX6/i1YL2qr3G4MuuEkGoNvXbc2Qq48mc2LViQ0Jb+qoRT+VdR8IPEA0bntp4tOZUu+u/GVLfq3qZ3OvKAvs67o1t/2HEiAxJfCIj7ZLbbT3vXso4d1pM0ukYM3ZpdV11roHfkdvgJi6XFlgGJpArr07utiQMsFz18DzhPVRHbgYovj/9COWdXcJ0LVX1gj0pONzujBAVStprY/vjop/M7V9yQADfiE0WF7vMGeQ9F71TWkA0d89m0ze1Wh3fSZ+zDXUp4ECL+WdkAc+rwW6xH1Pwl8iFMs45gzonRQMu5tL1K9bUkwXf+gfmvB5s4eoNW3Z7jTJ0S6xh9D2xtM4KZ57JWBYD/777MSs2vZOtRUfbAgN8rqJrL25CfV2tHLZ4llGyk5Bh7YiD6bxDSqlFQLJ6kWTwMYdeTCXAm/1176Jt3PCDUjKmgtCrt35z8V7ktV7rGr12Hqfc34klCWvccl9rnx/Hn/XMX9Xyeq0FEKpwGCXYqW3L07vGI7PV4lCXtaQXcoVu7q/Zel5sPe4vSULb7qQzlNsuO/pe+6rOWfju454FSGIY9G8930rMP56ak9erHNk0Es8/DJxyHcnzj5/nopcOqfgurz0ZdHWy4COui5V+5WugdpTjzE/MiskYc1L68642CBOXQf0rBLM9A7FkaZAXwY0EHrgwXtRONAk2dfjRFcqcXq+bzvzoRj9TOADvbfovAw2rPmdXuPs0kSp3wMegbwIbCq79EMnMznM0qsRVducEoVPvh/c4ThdKnTaVAFdIhH37DnkeQ237rXU8IGtvAueQW/gGYiKJtP/qfzK8fYjbUzi/qsyUetddiEk5qTW05dHXXehU0ybAI49Vtl5pTU5tl+fB+Odki9xnDLkd8eWJLn4JJWVrro55jyQ7y5hILtVYnQJ0F8CaNCqcdu6yqEcntgewKiI7msYigdVrfBkV2o1ycIkZwV0Cbfd60Rczao5dW4tmcOqt1atkmM8IVStkz4I4PtLGMleFdAlkkq+r1v2DH4XXE5hf+xUPTjl/Zl7ob0neRWoJTLuvls1kzP7Eqy20qoBHFU9gA+BtEHrQ0K7YYoRi55wVU/IgDVKUBLu+4dTjdo2YRFCjIqy03GEVbFKIvOem549Q4hR1wYHHixSOw3RBCLG8rDrLlhswnfVueRuiIFq16LXHYenSh2XFEpIKb6r1IT18b4xeUmm6i6pftWBV6eOOnRUn3jnYlVVLZCSUjXio657Mm4n13Wr6sLfnNpswVblCoyKiCbLL1Um2OJ3qh5K2gR0XFUih/Tb6lmnZTxq6iFtibat3lb43rpC6pytwnanDUMo9xQi7J9LtelWe8bqeQ0PahrKF6flQumaBR0Dz/kSUINSUT7aL/2lojejyz5DFmN2AQO0Cq1gZAgxemguPHkgE/AUrcj7+jvA5xb1jDsA/+1aHL644MLhYNR3h693zl4ParqoLgYk7TV/L9lUqoM3dOwBUbveBXqB5Itkn3eOBfAJxOi7MVydYgZSIrgn+wYjg0PFCGg58Er5FzbsvayCJyp66Qn01kG7ashx9sBE44d6NU7NJTcpUf3xk0cyS0dgfWrbxyo30jBod4AcMbpPmil7W3hrnV+veRzTtFZ1yigzcDbXsCeAHKCfgunJlsveIHb0ZfA28XxWFtsV13QD9NPutKXPqe2Ge3QqsMlz2JqkHjGEAXpVNxOn2057Pj5qHfj1yQDddgzq40MFUvPskDoWPgN1EAC6d25mE2i9WEuveeCkzfetK9TrA+jegd7kSLAvR2CHAT87QId7+S4bl0/kda4K4t1mvmyY+VhzTAwUju96BbpEjPMh9EaxmGwaV5kY2VW+8aiJ+lUnKX72T0ANrruv2lpq/9tjsJeudPbNU7o8BXvp2W1Zc3gNB9RBExyN0/uWYC+fdV+WYnjXh0KqwE4Hbn6o3/MaHfXr8kmbign0nu+g9xSWOZoo1LPuBNdljHDE5G3ne6wYwgEIcISvn8caZovGhiC3Elq5WpuG8gxdBQUOiWuJr1z9BjquUoIASZwhiAmLjmqoENROEl7J6hTorRNyDfdCQxD0JvFlwn1ASiTkEKdDThRJ+CkB+uYU6BL7vLERB4Icuu675/JNWXRsRYRcKPhjqhz2tg19N1Vcd4miCzHcyopKJeEphoKQEmHvSxXQf/rgegB0KNE+k2Dn+SToQmVycz4/DesAoc/sg76tYtGl3PfQrTo2D6HPQgV9VRX0Teqgc/EJ1AcPyG0P/dIGTsQZubo8N+gCxZCQA+jhaBXBd5BIxG33lbw2CXo/EtBRWRSTsi1JMLOX3fyA2yoS63BRwNDd95njx6B7xP6v+Pnds0mHBtR98frmAWSbSK5hkuBlWRl0QVcoBqs+cwgYXUs8L02+d560Cd0C+43goriYboR17DrPVRyya9FZElthg6/l7dCqb3evJeZk08Rxk9Dks+8ZHhw9jw9el4T3K8VKbdBFltgiOcnmwqqvD0w8c4bd9vPQePh26E50hxnvmcd3wdm25ptDd8/ldX39hK26bYvVOfI8c46N55YApzzBnYfLV1FYc0FOVk0G07awxtSxbdf1BjHEUAQX1zG3tT+gS8nMQ4lRnrknxe+QhdUVZKV2I1K/LzgWr7SnongOFxVspzFYc95FKtF3y9qgl/5h24Ed051b5DJ/sfh5VDf97thgZhAJ9ikPmD732Rl7bL0TFpGg/sk/6bWsCw+HZ2PboUTxnLDmbS0667/F66Llh9O+92EMyx/kurIFtTWoX286OQX7DvRWD3Yw5DZvY9ET1IOKRxLe0OaY95WfGDhLJZP0icaqczLKZqyqYfduSzF7EC6ui3oIfbvrThtKtN9RQ1olI74E6Htd+K1l2OnaprFHA3TIYYxtyOd6bwHc9mpue1XQJVzuXHCd0AsX3pHrSLev/uko8fVugYoXWfEbZf+yDlftblLnQmPyKKcdS6DrOGQREexz3uJrGzpy9a7ZulMYsbCReS59V1eTDEF+F8mauW7TnlBu4yRXnQoDmpbZFgIuxpCsQdXlmkBgn5Qy3coF8DxgFtzZotDzQBxx37ssJELfaRIT5KwLofdpD3rpjSRcb3qPWWSd9bdyf3/5+xXFBZwb9WupTC+fVQqv+DvQzzPlzzmFLVvyGCv+DH0EXSoeiQp09njuPIC9bOm7Ko4EKE1a9zFCznkWiRxHJS8urzqYhWDvxpSU22mfO4U6c9Ix+bdILblVt70y6MJW/SLGXgPsolqoyBJvO9Z8oOSKQMqCzmuXEg3fj6BC7CnY52C1sWj/+n2skLOkVi4qJ1/rxghSVn0caw9Sw/N57SmYrW2d7g8dg43ImncFQa9sUOqCLpVIG8Vq1UvA04D1rfyTr9Jn3VMoxill5DZ1Sr7lNQfvWjAGPY+9R7kjvipUkz1mxR/5rHv0N+O4suZNLLqkVf+Ywj3q7MpTTbV7WPe9VnyW0HeWNG4zo6ALJuXosy9S6WF2S78idn/f5ZaEFd+x5lLjfV43WdnUokrNwuPYY/U91p1A/0ull5nf8iT3NbLTZ7Zjc9Vk7GQNZyeaIP4jODtNEux4PcvTABgq+yfBbAJOhmEW+ZLZqX7+UyrkIW+o7j/qNPkk3vY5F0osUAZ+mpIbV2pHXfeNIP/I7dmL5Ott2PIkC3hJl4Lv9dRorIU8S0U6+/tyYqyp9Ck6bBpS77vgPktNnkW7/mUVdP4S10puueC71FVQkUE/YOh9vvVmVQJ8g577rQ8lq/BMmk6gbUGXtOqNZ6vErIOu8ipVtKCJXqvFMuBLuOYH+4uM4LUPfHTafDLN3oKxOp1sG8e+BbJley/VTg0/hr+jfh1PpZfkPdsv6u16Lvq5htdVGXLqgyvBt2zFRUfoAaTc9wuaOOD+1Yb/1IA7k3xPqJKulNxKyqZtzqMjMNAkrXrOrg4Sc3ITwVbJXa8FVQ+xJGvrTSXA8uJBSurz1UcQFKrL/knwLdcSKxgioJeuBZJSUjvmoKhEG6Akx+6jxJtI7saSvFpYu/AQFJrLLumNrqTyJWKgG7haGC48FJrLfiP8tmJbw0X3V3MsIVkz7dLHO8cgaI+upT1kydUnEwcpHqUbMIVz61DQ1pw8T8nqxvqkn/IWdI4pJIsJkEW/wnCCPIWcxuel8Ns+SO82NGUpp0q2msrI5cWCEGQxLl+ZOBBkBHSejaTPmF8jXoc80x9KdinNBDdGLbounSRdFPEW8TrkiTUnd136RKGxugymoZkIu/A5YIc8gJzCSOml35XJQplGgTHkwiM5B7mEnDbFSG/mMuay27Lo2oWXTi6MuOgFBNmEnIzMjYG3Nl5KzZYLTDvmNgZgRyYesgU5Jd1uDTCzsFHb3gro7MLfG3jra8AOWYBcL6NJ87Ix7bLbtuj6OqdHwA4FCDlZchNLu//YKsNlNXvNLsoCsEOA/PXOOWsFQVwsU00MxOuAHQoJ8oXtO+esg16K17eAHUoQ8rWtuNy1Rdfx+oOhtwfskK+Q6wsmt0mAzrDT2voUsEMeQd4zCLliyNdOePOgcSVve9nVFHXioZqQ5wYhd3ZNlQ97xh+UbFWassbYQQdVgHxoGPK567voMk8a2mRcRKKrg/7G1UHQnrFHh1MuDX6EF9eCe3EKzHAmnkTHCW9xnh3aEzaahNxk0jk8i24xTtJZzwWGedKAm/YgNeR3vniRmYedYBp2EpJ06UJOx0xvDI8vryD3EnSLsCNuTw9yukVlbPhjvIPcW9BLsH8x/DGvuQHcHho94HTElOLxvoXx9M3H24AzzzvIhptFmrE7D+seH+RDJX+5wj5t2GisfWyHLICOsuHGa5dr4mtHQbXHjb6/b2jh47x014MC3TLsJErSzWDdYcVjgTwY0B3ATm7YP4jdEYvHAHlQoJdgp460tfGF1tsffUyuQP/jptMOt7HFj10oRyfRoge91Km3FmGnjpzBnfd2PIwY8K7Fj/ViW2vUoJdgt5VoKbvzU9eHE6D3MTBgwPuWP/rRdnWYZEEvdfalkr8xA/E7AD/k2T2EOtFnEXT8SMnfnFFFK7bwAD5uwPXkfh/y0msWySDQN2h0HXz8muN3uPTxAa4n9OC3SmcRDQiK2/9wOCBo1v9RvJ6QtBPz1Cgsc3m0mCbwxxjaM4twgNg4uHAqllsoC/dpRdh35JFpwHPHfRjVceYs0gFja498JbdevdXxhpU/br2Hyu4qyjFXfRLbJJ1FPHhcLMEd05yBR9EL9b5NVb98ue8+2joFWQIDSu+Y8mUwadeeXsuULL2ncGvPK+oDTVkiA8z2Hug6WrC7uIxtoHG7D7ndh54+ZhJHlJMA3WPrvs/aL0MFn5c5KT/SY7i7Hj9uUseSkwK9ZGUuPbYwuyLon3lgvviyQYcTnh2G+sxTb+nQZDpLrWZgcqDvxIuXnludQ6KM8AtPAFueBOjnTykLxdb5A3s/Pf55xnB3A+32KDPqAP30YNbHG12v25oc2HXUj7Srkz+fkDToO+48xe64mDEukZczDfG0GUA3H3e63FcNyQklwQA6gI9Yc4XtxwAdwANwgA4B+PBi8Kfi9QOAA3Rp4EcKSTvX2rAFRwwO0I0CT1n68+L1UcW5LOeraLnwCUU+ALoL6EcMPNx6c+75gq03btEB6N5Yedpx10WLtNbrCT9Yb4DuM/S+Hsf0XWv169w+kmsAPUjofT/N5TLuXgBugB4T9L2Spe8l2gwbhnupUGILoCcAPbn0A7b0g4jBD/qMPUCHTIB/tgN+iPF9+fz8Cu44QIfqwd/lly8TAAH9k4Gm1wbWGqBD8pPAgP+owdeTgtr5+yYAl+Ppzc7fPyOuhiAIgiAIgiAIMqL/F2AAYsTgpmmrcy8AAAAASUVORK5CYII=";
    },
    976: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    977: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFLFJREFUeNrsnYtvGscWxneJEYEiUoScIKdR1fv//033KkprubYQCaJgRELvHnw2IX7u4zuz8/g+Cbmt6jU7M785j5kzk2UURVEURVEURVEURfmgnE0Qj/7999/Ryb8Oik+v4aN2xeeg/7zP83zP1iXolBuIBdrXJwDLz1ctgW46Adzqz23x+VZMBDv2EEGnmllmAfhM4R4G8LUF9r3+lAngtpgADuxNgk7dQd1XqAXmEvBYtFfoBf4NLT9BT80FF6DHCnc/odcXC78pPmuZABj7E/TY4B7cg5v6YfEF+n8K6DdsDoIeKtwThbvPFqlk7QX6dQH9ms1B0H2Ptyf6IdztoP9SfFaM6wm6TzG3WO1pFlcizSf3/rOAzyw+Qe/KNZ8q5D22iBOt1Moznifo5oCX1ptJte4k7vyyAH7FpiDoFu75jLG3d279SqGnW0/QWwE+1Q/dc38lkC8JPEEn4ASeoFM/QT5VF52AE3iCHiHgE8bgUcbwCybtCHpZKSaAM4seryRLf5PyslyeMODimr/N7naxhW61vurP/b3/dqpHy0ZP6txPdXbi2ZR172cReDti2a9TdOfzRCEPLQ4/qFW6VYCPtd9dVH/pNt+ytDakevnTthR3fknQ4wV8oFbc94G5VaiPtdwhlHPqBDDUCSCEuvqtWvcdQY8L8placV9jyLJGexNRmwvwv3gOvlj3BUGPw4rPPRtoZUnm8RCGFGLGk92FYwXfp7BJJtrLmA/CyCMfXBKLn3sGN+uts+81A+Wn50n/RBu755EOIhk47z2JxVeE+8X+mpxA37Wkn65i87LyCAeNuIUXHVsJ1lA36ztfDu7Yqyu/I+h+DpSuE26sl8a69l2XA9/E4srnkQwKsd7zjly/8tijzzzV1MzKz7LuNjZFsckmj2AgdJVVZ+FEN8B3kbwTF/5TyP2cB975Y4W8R8CTAb6rrcsHhX1H0N12+EQhd6kFAU/apT+oG78i6G46ee64g6VjF4zBvQ3dXG9rvgoN9pyQvxib3TCLHkwYJ5ujXC3LyerKFUG3ic0+ZG6SbklWOEUSv5eViYQ9NNAdQx7lzii682nDnhPyn6z4FbeqRgW8q3MHvIc9J+S04pHDLjH7hYMx5DXseeKQB7tcQtUeTy62R3sLe54w5Du14rytMx3YXRQ8eQl7nijkyR4SSNidlDB7B7uPoP9uDPkVXXWqGGey5j5NBfbcs8a33AwT9F5lymS8yVh7a+jKe1PmmicCefDVR5TZuBtoqGgFuxceZM+Txp4YQr4m5NSTlu7Ow/uoxsBCc51M0rboukf5IoU4ifLaslsmgcXIfOyyKCrvuHEt3SYpJ73hEKY8CSE7DR97HTZoL7Nb07wi5FRDV148QIuYujwJKbkYXdYy+0aQc/mM8hH2se7QSwN0fdkhIacShH2mO/TiBv3kPnJCTqUK+4WGrnGCfhKXE3IqZdjLbbjRWvT3Bn9zRcgpB7CjzykYuozXnYGuhwAMDSDnOjnlQjLO0JtqZq420/QcQS4vg77VdEvIKYdW/Vgrkd3dy4bU3EW87sqio9cPZWb9i8OP6gD2y+xupxtKYgRnwYOucQjSPTk2NveuUx3BvlPYkZpaL7n1jCG3mK0ueZEC1THscs4/euflu5AtOtpl52UKlC+wS505crWnb5mFNwNds+xIl33NCxUoz3SdYTPxMz21NgzQNYuInJ3EVWeGnfLNqh90XCLzRfNgQM/wx/Mw+Ub5CvtOLTtKQz2jwW/QNXuIrOe94TlvlOewS6yO3Dl3jl5bt7DoSJd9y7icCkRXGW4zjcTpU29B17PfUNtcD4zLqcDi9b+Bj5wiE3Noi4605guul1OBwS5Lv0sgmzPvQNc1QNQMRJedClWLDJeFn6Cseg8EeQ8cU9Blp0J24ZHjd+YN6Ao56ll02anQYZcM/NYnq94aTrA13wNjHIrqUl5ZdYQVRlrzG26MoSKx6nuN172w6ijQEdqqy0NRsUi8U5ThmnUGuq6bw2JzjgsqMqsukKO2x7ay6m0hRa3zrUIuP5UOkK2/J58BhzmlsMv2WFRy+demv3jWYnDLxnvUuvkiMLAFZPFmZF//4In/R37IHv2NTmTcr5+uZHwjqtLeFONq0SSPddbij6Ji81Uoy2knl09U3eY70I9sZ5TllgUPzkjTqoPOZxAPXAzsqskvNnJVM9ye9kUgkMsptr+1eG/5vd/0OVR6Qi0bz5rOEF3H5vsAIJ8DPZipPo9irN5E/SYHSTYFHVUYvwgA8vMMf1/2hLAnG6tDxo856MAltbXv1lxnzqnR4ycWJ4lQSVj1Sd2DKZoA+wb03p8D6Bvrg/Xnrm/VpDoXatyPzUAHJuF2vmefdQltaPxnesAwiApDXzLMbrmpGejAQRlC4crE0d+Zcuwn5b4L5Iit3oM6O+V6HQx+1Ita67Wjv8NddOkJZegmcNB19kAMynUgFWrOALS+d4vyzqrLLsmdl6An5rY38XYoyjUH/ap1FXUGM8Jt33HPN0Xdebag54xgoAPd9hX7l6K+J+UQPExgoAPd9pAOlnC5mecbhz6tekNVyr5XBR21dh7SoY+uQowDw5lkrbqAjkhMD1GgIyx6aG771tHf4fFZtOptNW4NOnDpZ51gB8Q4AVL+jbNRa9ATddvLUzytIdzyIIrkhej/3kvLbFVAH3nyMl0Ieb3Og9g8w96rTYUZp6N2io58sOj/BNoJe0MYr5mEo0rPDvCMYWPQQfH5IWT3VGuIkbduHO/m0udSFMrjbWXRh568hA+w/5m1X1uXmfsTIafuja8dYGw9G6e/dAosYjfcNpLO2BQN+TG7KyuV3Uj9mm3whYBTL4yRtsenC6+7JqAjXPdo4lBNnEiCbqGzZ3m2/WMddKvvvuXtsJQjToTXVS3QdVtdDwBHlMtHwFJDikKFuIMmMTriFpYt+4+iKhuOQxegIxJxt+xCinLnvj+VkLO26HRtKcoD952gU5Q/gtzk4tx1584vinJuGKtbdNClAoScotwbxkct+lPLa4ijjrl2nJg0ETTScfVafz428GQ15lv2Y58BK/h+NpBtNqoN6oB+BvrCVBpwy07BcVY9r1OGhWN9hvyQCq41dw+2r5YUj/z+kepndcx/qhZdNw+NdbZs0zYbHcyIZRQJr94oNK/0Z9O1WPleyzrn7etlm9MMd/69tO+4eO7b7O4o5GUg5/+jtcna58deZ/cy+E+BjojRv0YCuQxo1BXH0oGz4pniuv7VdCCrFb14ZNIZtPhe8p7/q/C3xTV/BzIGT409udxS7pEX2BeJgX4AtWEloBEx+m0EkPeBkD8AvsXvXxiA1tdJ7UkPovjI3/3NEPIHwBd/8/eqlxREFKO31cDCcj+qSNwuy5tOG10/rTBagTZ7bMVFrfh/sm5ufpVBK7DzMkqkiW/pAsYWn1takl7Dgz0sYZMJ5G0Ju1rxc7XiXV9RdV58l3nsQIJWIB6MW6sY/Wsk7d738Du9Mn7+MYNeQLXL7O+Hr/3dJENfwHCVUbXGCC8S7FZDR7/TxNMbetpmkwQs+8GiQy3EzTKUNeznEb9f24Tc2Yuggw6EJOiUtWT5bcxmqBZy0nWnQtYcVJcRvdhI6bl1sY3ft2wGgh6jDmyCB/H6KLJ3uiXoFPVQs8jeJ5isO91LyqWGiW2T9QZ0upeUa3GLLF13KgFxqY2gUymMZa6ruwd9yKaluojV2QSP64xNQNWU5F+kwkoOz9g9YjgENlnu6iI5NmL3EPQmYib3Z8Cvs7ujsJ5LtsrZb+VW6nPHbRhLf8EnLMbobJ8qEnj/Kwc3Vj1QROqqi49cM+30sMcIN8+YWXQWpFCnWrWp/5bf1VNeJ5ycPbJYoLu82diRWHLEIQ/6DFcGhOGWQyBfs2mjiMmRJ7n8zSZt5WnX0ZaWl6oq6LnqehaaC6seQ4wOP8LsKdB3Rs+lAgLd4Jmf2ax+ue5tZ3LGSeHH5hb1Ci7uWAt6yRhUnLOvCvo3jvW0Qbd4qKNrtPuBt/0rl6Aj7gbjema4sgRyy+Z17w0zlqZcW156i/ZMVs66I2ZdFhhQrr2FGLzJ4Cx6n2M6SNG1DjxGf+xap17V/5GgU5QTtfWED3UtOpfYKAvxmLGnQw6EcdzVBb31phnQF6cYo6cikzX0l0BHnC1N0CnKc9ARVx8z846X9c6vWzZxZ0KsFmxdu+6oL0659ZIYQ6dk0UGZdybkqC4U3EYwzWe1/d6Hp86TeOnBiIQcYadCtIyuhQhzd01nvl2ijU5RIcbnmy5BZ5xOuVaIS3idWvSNJy9AUbVi1QDjc0SStZlF1yqmto3WZ5xOUebGcP/cYSFVsnwIq073naJs+Xi2GKnX9gEVxcvvKMqWj01b0CFxeuG+85ALinoYn48yo8MmaoEOitNp1Snqcf0CeMbupYtXqs4ka4JOUWG67XVAR7jv4wDdd+77pizddlmNQiyr/YMCHXX8b2hWnbXTlKUQF08eqtSlVAJd1+cQ2fc37Fvvxdt03QnBQyUj3EM/8AUNeeqM9/rKJnDito8zTLZ94yPoKHeFop5TCIdnoDjAWnRN3+8IOuW7jO6NQ1pz8WoR+arKd+TVdR0QN2z21W2hqFSFMnarqv9jXdBR7vuUfU0R9FaSbPvaBHR1E5iUo6jmbrtAjhj7tThskvVbgd55xm6nEhRqiXlpCrq6C4hkxySAnXJnHJcU0JpLAQuq9nxnCrrqSyKxOsMLCimUF/u57i/0XP2hp0Bn+SpFa25vaBtBpmvqiKRcL2MGnsLK1zV0lDVfNdkn0Maa0qpTPsq7QiSwNW+0l6UxYFoxgyiA8Nmqb8kN5ZE139ZNwiEsumgBtOpMfFGMzQ2seWvQi9llBbTqKa6rN2m7nYffqa4nmJLOUf1SZycc2qIfkwOgF5l4eP67dW12k9DgYAwi69Fx1lx2waHGdCvvGQH6Ejj43nrWV5bWZ9sQKssSTFc5ibXhs289gbwHHM979Z67A11T/UvQCw11FvRFa0Orft3w9z4bvu/SUbuujJ57yHB5o7aaZbjrm1u/Uw84QGBW3ZflNp3ELsGWTiaOP5tmT9ULuARPQEdA2sSANd9B/s4VOAyR9vjkQy26hqColaTW1vzY5sCXm2XYTQFXnsVbA423ytWBOtfofMvukmg7JEz3Mrp1Luq7PYFMvtemC0B0Qh+dxLFN2rQMgzYejZXfgbH5lVeg6wv+keH2h/+ZYIaWClwFA2LJUZl2MQwfEQ9Cu8jI+Ogdd8xRgUHez7DLxDeoB0FBUhcDtc6LbjSKstYFkCloOGJhMW+Az5ryfDkqEGs+A8blx9gc+f3goOsshMzezunCU55DPgB7n0v0xiUrgMSqH4Df8T2HE+Up5D112VEy2QtgArrORsjNF0N1jSjKN80z7ElE1xZLnWYucfFlZVZCFmDMdN2Yonyx5rKUhswhbRFr5k5BP3HhkbpgOSvlCeRidM6BjxQrbrZJzBR0Tcwtwd/3gsk5qmPI++C4XLSwrBx0AYy48MgXGGhcRFFdQF4m35DsiMtuWlBkDromFv4GP3ZcNDhhp7rQ+wy7Xm7qsru06BYuvGjiWUkrFb81F+MyBD924eKwD2exbvEykphDH4M0J+yUI8gl8YYea2trl9056Cp0DXIJO5fdKEvIBXD0ScVOXPZOQNfDFq4NHn3h4XlzVDyQW+SDLl2eAeB8mUo3BKwM3uMDYacCgXzh+qyFrtajrw3idcJOhQD5WneNZtGDri6LRbxO2CmfId+5jMt9sOhlvH5l9E4fmI2nPIP8aNy6Orwy96BhkWds3deVVZEAFSXkAriVgbh0dcquVxb9xLLLOqIVjHOdSCiqS8hvuoTcC4t+0tAfMvyuo1LeHR9NeTPujqFeht3W6t3YyxNqcMkJeHHAP+XNmCsLpKKG3CvQT2CXw++tas73GivtOMyTh3yskFuFr14ZltzDDhioZbfqAGn4aybpkoYceatQEN5j7mlHWMN+dKsyo/O5KK/jcSkzHaYEubegO4T9uJZPVz4JyKXw6cLBePIyD5R73jkuYC9vEl0Sh2ituLjp1susXid78wA6ygXsoq1a9z3xiMqKv8vskrtBQB4E6I5hp3WnFY8O8mBAdwx7ad2vGbvTiscAeVCgn8BuucHhvpZq4ZmZ939sCNhSM+HqUk4xBn+FMjbyADvUegfdY+481939Hg9T/biq3QhuS3UecOfOHc7epZt24/pkEOrZcSBFKG8zt8VZSz3oNCPo7jrasuLoOZdtQeA7B3zmKA4/VbBlz3kknd7FZQ4EPh3AJXz7FHJyNo9kALjY9fQc8Muu640JuGnIdhn6/oo8osFQXnzX1XlxMhDk0L81s/Sw/izPU+/qgJRo6iHyCAfIeeZmo8Rzbt6X4vOZu+wae2eTzH3u5X4fRrXSkkc6WKxrjeu4fUta+crWe9KRe36/z6IrdMojHzwWl+I11br8EPrv/TNWuH05njvaDVJ5AgPK+pABQl+9LwTokWdwl676ZcwrKHlCA2zu2eA6dRUF+m1sA003No3Ucg89cMufmnSvYp9wkwDdc+t+X7Jct9EJYBPSAFR3fKgT6sjTibWUJEpvUlkWTQp0T2P3KgNyd/LZ+5Ao0uz4mcL8Wn/2AmnT5IqVkgP9ZKB2sU8aPQF8LT63GmOW/57pZLBv0TYC7Sv913JCLP/bIOA2S7b8OFnQT2JIVwcU+DIx3FfI4FZV8hWISYMesDtPVQdc3PRl6kuaBP1h3Dkj8FFopXE4dycS9Gfj966KKCgCTtAJPEXACboV8LLhY0qXnoAT9HRi+F8zt0dYUQ/FJBtBdwJ8X4F/k8W/NOWTdgo3D+ok6J3E8W/o1pta77UCznP2CboXVt6XmuoYVFb30XoTdG+hHyjwY0JfH+6MNfsEPWDofa/mItwEnQK690O19AJ+iom8Y/ltdld/z5NzCXoy1n6U/ajh7scMdhZYfT1Bpywt/iD7+eCGXmBQf//wcguCTlWHX0A/PdihdPm7ivcPCvI++3Eoxp5LXwSdsp0IRvqPZ/dc/1HDR5YAl9qW/53bTCmKoiiKoiiKoiiKotrp/wIMAE5+JNIR80DeAAAAAElFTkSuQmCC";
    },
    978: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    979: function (t, e, n) {
      t.exports = n.p + "static/media/M-Menu Icon v5-03.b7f82a61.png";
    },
    980: function (t, e, n) {
      t.exports = n.p + "static/media/metamask-fox.c06f3a3e.svg";
    },
    981: function (t, e, n) {
      t.exports = n.p + "static/media/wallet-connect.37f2bc6e.svg";
    },
    982: function (t, e, n) {
      t.exports = n.p + "static/media/coinbase_logo.3765bf16.jpeg";
    },
    983: function (t, e, n) {
      t.exports = n.p + "static/media/dexetf.6070e065.svg";
    },
    984: function (t, e, n) {
      t.exports = n.p + "static/media/dexira.d0480980.svg";
    },
    985: function (t, e, n) {
      t.exports = n.p + "static/media/usdex-busd.2ab5a22e.svg";
    },
    986: function (t, e, n) {
      t.exports = n.p + "static/media/usdex-usdc.29948508.svg";
    },
    987: function (t, e, n) {
      t.exports = n.p + "static/media/dexshare-bnb.f79dc166.svg";
    },
    988: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFqmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDEtMDVUMDQ6MzQ6MjEtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAxLTA1VDA1OjAxOjMwLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAxLTA1VDA1OjAxOjMwLTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE5ZjEwYmMyLWU0MGUt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";
    },
    989: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEuRJREFUeNrsXWuMFdUdn1lJxKrsatQUrbhYTPCVLvJBw6K71FYLMemSovGRuouJ4hdYScMmCgY2PjaVNLDwxUfi7toUrI9wbYhUW8OiYPQDeI0USCRwBWUtNPbuKlUrKZ3f7Bmde+55zTlzZubenX9yc+/evXd35sxvfv/3/zhOLrnkkksuueSSS+2JO1FP/PTp003eUwv5MfyaJ8PfL5rrDueAqV9gAAjNBBBtiuBQlaL3KHmPD8nrogemUg6Y2gNIOwFHOwFIklImbLQDzx6AijlgsgeSDu/p196jIwWAyKREAPSaB55CDpgaBsnefQed0S+/8l+/+94H3M9NmXKOc81VV/ivG8/F6xkm7APQ9Ncq87g1BhIA4yHv0UnsEiXZ9X7RA8fHztFPP3f27j/ovx4d+8roWBoJiK65coZz6U9+7LRePysqkMA8/d5j0ANPOQdMvEABOFZ7jy5VgGx78x0fHLsEzGFDWm+Y5YGnxZlDnhVZZ5CwTikHTAJAAVts+9s7zutv7vSfsyJgofm/vNFZcMtc/1lBAJzeLAPHrWWgBCB58dVtmWfJADx3LpqvwjzrCXDKOWDUbJRuniELNnl24GVnswcS2CS1KLB5eroX+wACkASqCqBZnwOGDRbETAZ4xizA8VT/gM8qpgZrllhnyeLbnQe8hwA48KaWZyW67GaEVQaIe8wFSi2oHcvAyYSacjPAKltY6idQPc94j3phFFXgrPDUlcAVX5hmDMdNESzriL3CNGZXPraxZm2UOGycjWsfERnHYJo1EwIwRAVtdxgJQABkaU9f4rGTrAqM4o1rH+apKUSMFyetotyEwdJCwFKlgmCjrPJYZaKonyhqCqDhxHGKBDTFugOMBxbEVNbRYAFAlq7oy1TALYsS2DYMtikTu2a4bgBDwDJAv4/k370PPjJhbZWoglzVC08/6ds4DAHTDNo+hoaEjNsBlgrquHtZDpYIghts3m33+bkyhgyQG7N2GcY7AQCl6iTW9g/4sZVc9AV2zZ2/mZ8407hJgwX2Sj0H4ZK2ax5/dGmioHEtgQUxgtU5WOwLWAZskxRoXAtgqTJwc0+ofkDjxgwW5IO25MySKdDMijNO48YIFmZQLgdL6qApE9CUMuNWk3D/lhws6UoQLafEvzbkGmUDMAQszeE3kGXOwZK8cNYd7L8uEyqJ5RHBuL13ycr86qUo27c+z+piWG5awecaggXIrUgtIxqJCG6eRExXkHPa/fZLdO4J9sw8EyO4wQAsTbRH5LvPPU/mYMmA4BrgxmXYM0YhdhMbZjVttyDkD4bJJRuCa7G2OgXTQsyI5FQSSxUhIdZx17L8KmVQCps3sKr3tOIzuoD5wAlVzIH+Zt90R66KMiooh4ARTNkzmCwxL+rfmqQBli6HKq8E7dkAyxJxFb1U0sqImxz3R54aiTuFghISXCMqUdmOaxk1deBGBAuMpsNOKEBnUxWhLPGFZ54wikkwAllCOfO8C5yLZt/oNE6f6ZwcOeJ8sW+3M3roQCLHHBiqtuxAhqtdIqpJuS44qtH7kENFc1c9tsHanYo7DRfd5E5X7Gn25fyrrnN+tuwx59KbO5wpl890prbe4lx9/8POjEX3K7uynHyOkth2GlY9XnXzNDuczg1jwBB26Q6/h4iiba8IDGHyP3ABOSWNlbp58o+cGbff7z/TctHsuc6lv1go/RtDzzyprYpMbw4VQTcGIwrcHSVt0KDLLqDPpGwEk9gOLiDqYGUCRmGBJcw+MjZTHO/BtDGQd0tCGNesKQrLNOiyC7oSk6rHBcNEtUXCAr3NqUz7Xs6++DLx76dOE3ohgm5FhRuiLzEPE9fMhGUadNnFNn3SgpM0SWbK7JmTxz4Rfh8GME/AYLqqCHZL0o17HJbpihMwnbS+TSPmssqwfVZkz3yxb4/z7b//xf0ufs8SjO3QnXkH5kzD9eexTCyAIVV0zVmIbwCk6GPSlXEvhv/9A3/sd0598x8mu4zsfIOp6nRVkem5WGCZZnKthXKG7ANr1qyBNTYzzC5Dm/6S2okeP/GFM+Yt9s/brtf6/jSPYVwSP6Llu69GnX++v935r/d8+tQp5+sTI85nO7Y6hwpDzv9OfVcFvtc2bdBWRQ8s63V2F/elto5Yw2s9wF/x0wrbbXJvb++fRd9zJewCZjkcfq/j7u5MNMsjOBYlxkKL6XnAiIZdpGuPJeUViYQTZJwuKueUqaQOWvdlZbICFtzEnhl6+gltdsCkTF2w4JhNPL44BdqCsYYdJjZMJ31nZEXGa2/071KABYE2re89rZ+ugN2SpSTt69V5q04twBB1VBGJ2mwRMOM5nPGIKoJkoiBaIGC7tQYGOAJtPRGNVsG8FiUvTzVqjTXAWmBNsDa2hBEeaSHXnimTVNURTtRGoA7AwMIgbxMWeCulrX9yju/eKbX2IwxRrhJ4OTCAVVQtdL6u3YT/oRK7AlBYKQqsA9aD5cWZuti4tlRoANd+fVSV1EbrOxsy87fdVWAJgISkH+t3VRy6xIzmVeyZ8TFieolFHBuOUSZgE6wHL5919QMPW7kGjGvbpmPDdEh0nbGAWZDDEcn02+6RUnLQimvTnkH8RlcV4dhkgMY5yrLiSE+oJEFjsGM6IgGGTLesuCA2stIXXTdX7XOzb1S6S0zSFVBpPM/HJLGIY1JhZ5VzjLJmUcTf1YUCNI0BGcNUfPjd9+240qrGHIqZ4jYqebEVOsxvEs2NkjRVPUdbBjDjGkcCTFulN1I7W/uYuq10InHjU3qqKGi5UZVvBHmsJIRxjduiAKal0sK3wzCiDLDO5wKr38SeCRu3JonFqNVzJ0c+Ufpc3F6S4Bq3KAGG+OBNNLXakJFdbyh97vjuaAY3bAaTIGMwH1dXFenYUyc8t1kFDCO73rRyLRjXuIkVj2ExTDMdP7AliC3I4ixYoCgME5c9w5kfZ43hgriTjGlZWfP4WKYoZZkGmcF79NMRq7rz4CvPOUffKlTdXfj5sLeAhyWLKLMhkg7Dm1TP4eZBiQWrLge/+8ezfdZU0jjLfCwFDCvS20jfMbbl6N+3+I/GUEwmSmuHiGYZ/TjWJI7qORRq4YGYy6SzxgN4J48dsQqUQMaqgX6ZCmAqUPVRgr3ScYCEFQdpvaHFqBRCFZxxFpbpqOE4VNIKgXnCU0kVBu/Yl7Xf/mpaCqGi/tKsnovvPL4U2rM8wLRI9FoNLoTdC7qqTrbqYTgJSoCpWux6ENNWFZ6YdjPUmriMOMzp8M8XXn5TZg8epQAXt97qR0kR01HR+5zRF9ouNGb/i26qoHwDRuzo4QO+W5yEAasre95+ie6sqBgL0kCBpV1CUZkCC0oBkO0OUv8qRVempRBhUUlDNN92j1+igeNEzzZ+zrIc+exzoU0rVEmjGTZ46ewuwHL2xdOU7JnOB80HNqqG/gFm0c+1Jg21euCs4Napr9WontOUHsn9VHWhafXzbcpJxgkLmGO7Km0BREJVYxeo+tcN/atWzwVCh/uPvrWlpgEzqVYPHHfqnt//zldDYBZVsPjdj0/plzqqVM+FBUBGQHLyeRckFrHNASOg+6jRYdV5MSxRrZ5jgbvWVVHNqyQdiTqRivYY1+a7yFUxTEV+O654hYogTuEP9TnrbH/0xpjHHHHSt8qMGJHdIsp8A4RL7rs9tll/8PjOv/o658zzLvTU7UnpZIkkJfXAXTAqjJ7wBLAggx1HwRDslsKmDdrVc4gQ8wqiwiPa49jLEjEbBPromBJAc/Dl56zbQCcOvU2/VdFrnbpKQsCNNQ4MC4YWk+kxBLpYxd2qIqueC3dCokIPHpiuACg4X1YAEmukGpyMlVGoxnwWYEo0lduSIGQuu+NknxEJ1IWJCy2qnmN1QsID0ykaRzcAIsEytT117q3WrofKcUsB0zjlXGsHKBs0GIhqz04VIA26FSGICPPsFt6IVd3/mWZf0g/kcIUjsml5gKkY8nvNlfYYRpU5dBnG5uw5UVO+bwRHHAeieo42G/OnnHuOEAs8wHxI3zG1KCZ2i6x6TqUp3+T/pyXXVh+vEsMUJTQVm6hGZ1EWEEVMBv7Iiq2iTPuO0gQ3emi/0udsutcMgI9GtmFsqiQbfUmmA39k1XNR5sNEif2o9iUd37PTnhNyyVT6rWEpYOg9dLA4ttSSSl8S2lCi3FWm49tFWWyd+TDw0FS+o9qXhNhUggyjpJKqkNV6/SxrB8nrSwJI0KMjA1RYTKYsqIwMuWvRr7T+tmr+yu89eq7Pj3LTYMIafbjhUWvXgRE/KrF2OeElH4Gs9grkvWrP2Ar6koJenG80knUmoX+ZCx3ISk9dzfFunqgMFswHVkkdIJk6eqjP94YmE4/IRvtNFWCqb7SiahwGsiP8wwLLPT1hysXiRAWL6gYUPEEkV6UBLdioSveCRJmnhzUYB8+BRNZ+TjXD7IgCmGHatc6yew1m0T2+qN0EPrg0+81NUwcJM8ywMmCI7iomZceYCIxKo9B/T3RmWrpCv2dbN3VgUxhGeZm3gago+ViBsAW3ZK942dRu0d0BzUQ1maYrbAjj2hZ4nxUBZohGYdbuDN3pUIELbTITz0Q1mSREE2KYHZEBQyipJPnDqdotuqF306mbcagmE7srbrAwbjothqn64p2L5mfmjtAN/ctcaJRczO75gzOnb8h/YBQqL+FnoppMPTub6ki0y6wMMEO0JZ32XWG6c6vIhUbxEmpSwgBB4xl2muWBxkQ1gSF7DLb+i2MtGVrjNdF3hIBhqSWTOzsOMQn9i1xoAII3ddzvj755oRXVlKarzVBHZdnG5yolmv20G5uW8Yu70Sj0L3ChGyUTyVGUbcNrStPVZrBbQfYdFcAAcWUJjSXiQpvs3Cpzoc+Q1MrKamlNVFMarjZYjWFe9BoDhhhABQkyretaEwNRZSeRMUkIfkwhRG+impJ2tRk337BoJ7YoDFOFPCAzyZMz6VZU7YVGHou3cyzkmELtjqlqSsrVbmVvF9Sr8l0lwBDkDabBMibdiuN3vXovNPp+WH1QKMEQgSku1ZSUq81gF5QyDCthQfWfkGFD28PviRq84rJbCgY7t+LYdMaUhUsLdBrowRLbtz5vVIBua6tnsEthUz/99mKZdxQZMAQ0OIuuMN3PvukOK3PwTLsVYeB23L0stRl9YEaTPJet3XsBZGpNwS7TVb8ftfOxl76oKyypphUGG0P4qiiFKeBxqSZbrjZAzFjTSBfQjfpPPZZZ5z09FH4PgwGzPA8vLcEFN+m6wMjbuEAf7gGnPKN5tgGDIXnY/LwpTP8ATS7ZFc7G8LN4dS9xqaQgLtNLG6dp5kRykcd4GGBZHxUsWgwTYhp4TO25asq+WmSoohJhl3LUv2cy7gOUUq401B7JXJHVRBdOsnaxDliMAEOCeVWqKamtZnJR84oYEd31qkG6WFWSSDXZDujlIhdOgA42yzxddokLMFVeE8RW4CkXuQgi5LN0DN24bJiw11Tly6MhvtbGXdSLkcuxJRebgiUWhgkxTZf3VJEAsZk6yIUNFk46ZdADSyxxj9iGIpLk1SDrBHLPKRnhdFIU4wJLrIAhoMGBFRT1aS4xCmqGGDVKRZa5kAmVRBnB8JyorQDTzR5PQLCUiZFbyjRgctAka7MgMMeItZSJ+xz7LvWurZPhgQZgAWjyFII1A9caWGK3YTjudpF1ollqu63FOAujEMo6WKwyjIxpIDZLEetVcKNxBjNaB0sigAmBBoVXXfTvMEUh6qZVE9lt5nSeGof8MwWYEHCqqvUgaM9Y2tOXpxI4gqJydBNwIufD3mNhEmBJHDAENF2EbZro3yFhCTWVs80PAkZBfTMnjoXM8/Ikj8dNYxE80MCewcDZ5pxt+KyCyZucXnKwCXJDhaSPy01rQYhdA4uXuecLbJuVkqnc9eouB6zCkSJRQaU0js9Ne4E84HQQ4FSpKKimZz01BVU1EdQUorUwbAVplF4PKGvSPEY3CwslY5t6Bw6AgiJ6QV910YmpPKEuAEOxzTqWbRMGzuZXt9W8qgKLAChQPwKglAmrrM/KcbtZW0jCNnC9u1lqKmzjbH7lr1r7SKcpcI2DAQOSDP6g91ielLtcs4ChgLPaYcRtaK/qdbILSVbzU2CQBWT+i0IV4jBRP6Usnoub9TvSA04zYZsuEeOEwbPrvWLqzANgLCANZIqlqmCUIZOK/hwwbFXVybNxaEEz/LvvfeB85DHP3v0fW7N7gh5qxEwAjgg7ngTTvXqzyig1CxiGcdzJ86p4AqN57/6DHnBGfPAc8R5HPxsHkazxPZh0iY00sTfiFAKSaZdobdwBbwc9IIWs2Sh1CRiKdboIeFoyfrglwib9tcImdQcYBnjAOG3kuSkDhwWA7CBMUqqHda4bwDAA1EJYp40822agElE1AEgx68ZrDhh1EIF52slbbaFftyvYHeXQ69HgvXoFRy655JJLLrlkWP4vwAC7OcGhM1B2BAAAAABJRU5ErkJggg==";
    },
    990: function (t, e, n) {
      t.exports = n.p + "static/media/bomb-bitcoin-LP.b425158e.png";
    },
    991: function (t, e, n) {
      t.exports = n.p + "static/media/bshare-bnb-LP.1bb28e56.png";
    },
    992: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    993: function (t, e, n) {
      t.exports = n.p + "static/media/dexSHARE-wdex.07197b6d.svg";
    },
    994: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    995: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    996: function (t, e, n) {
      t.exports = n.p + "static/media/dex-finance-logo-full.f529f702.png";
    },
    997: function (t, e, n) {
      t.exports = n.p + "static/media/bnb.db3c2a1d.svg";
    },
    998: function (t, e, n) {
      t.exports = n.p + "static/media/dex_icon_Circle_25x25-05.c0be4172.svg";
    },
    999: function (t, e, n) {
      t.exports = n.p + "static/media/dex_icon_Circle_25x25-07.633dff08.svg";
    },
  },
]);
