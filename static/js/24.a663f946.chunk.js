/*!For license information please see 24.a663f946.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [24],
  {
    1004: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return o;
      });
      var n = r(26),
        o = function (t) {
          var e = {};
          return (
            t.split(";").forEach(function (t) {
              var r = t.split(":"),
                o = Object(n.a)(r, 2),
                a = o[0],
                i = o[1];
              if (a) {
                var c = (function (t) {
                  t.startsWith("--") && (t = t.substring(2));
                  var e = t.split("-");
                  return 1 === e.length
                    ? e[0]
                    : e[0] +
                        e
                          .slice(1)
                          .map(function (t) {
                            return t[0].toUpperCase() + t.slice(1);
                          })
                          .join("");
                })(a.trim());
                e[c] = i.trim();
              }
            }),
            e
          );
        };
    },
    1035: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(298);
      e.a = function () {
        return [Object(n.useContext)(o.a).banks];
      };
    },
    1056: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return g;
      }),
        r.d(e, "a", function () {
          return m;
        });
      var n = r(4),
        o = r(5),
        a = r(9),
        i = r(10),
        c = r(0),
        u = r.n(c),
        l = r(282),
        s = r(2112),
        f = r(1134),
        h = r(1190),
        p = r(1004),
        d = r(34),
        v = {
          card: {
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
        y = (function (t) {
          Object(a.a)(r, t);
          var e = Object(i.a)(r);
          function r() {
            return Object(n.a)(this, r), e.apply(this, arguments);
          }
          return (
            Object(o.a)(r, [
              {
                key: "render",
                value: function () {
                  return u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        "div",
                        null,
                        u.a.createElement(
                          "p",
                          { style: { textAlign: "center" } },
                          u.a.createElement(
                            "span",
                            { style: { color: "#d4d4d4" } },
                            this.props.title
                          )
                        )
                      )
                    ),
                    u.a.createElement(
                      "div",
                      { id: "kpi-heading" },
                      u.a.createElement(
                        "div",
                        null,
                        u.a.createElement(
                          "h3",
                          {
                            style: Object(p.a)(
                              "text-align: center; fontSize:32; line-height: 1.1;"
                            ),
                            "data-fontsize": "32",
                            "data-lineheight": "35.2px",
                          },
                          u.a.createElement(
                            "span",
                            { style: { color: "#ffffff", fontSize: "32px" } },
                            d.b.preLaunch ? "--" : this.props.value
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            r
          );
        })(u.a.Component),
        m = Object(l.a)(v)(y);
      var g = Object(l.a)(v)(function (t) {
        var e = [];
        u.a.Children.map(t.children, function (t) {
          t.type === m && e.push(t);
        });
        var r = 4;
        return (
          2 == e.length && (r = 6),
          u.a.createElement(
            s.a,
            { item: !0, xs: 12, sm: 8 },
            u.a.createElement(
              f.a,
              { className: t.classes.card },
              u.a.createElement(
                h.a,
                null,
                u.a.createElement(
                  s.a,
                  { container: !0 },
                  Object.values(e).map(function (t) {
                    return u.a.createElement(
                      s.a,
                      { item: !0, xs: 12, sm: r },
                      t
                    );
                  })
                )
              )
            )
          )
        );
      });
    },
    1062: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(280),
        c = r(35),
        u = r(1035);
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = s(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function s(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = s(t[o], t, a);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      f = l.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function () {
        var t = Object(u.a)(),
          e = Object(o.a)(t, 1)[0].find(function (t) {
            return 4 === t.sectionInUI;
          }),
          r = Object(i.a)(),
          s = Object(a.useState)(),
          f = Object(o.a)(s, 2),
          h = f[0],
          p = f[1],
          d = Object(a.useCallback)(
            Object(n.a)(
              l().mark(function t() {
                var n, o, a, i, u, s, f, h, d, v, y, m, g, w, b;
                return l().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.depositToken),
                          (o = r.contracts[e.contract]),
                          (t.next = 4),
                          r.getDepositTokenPriceInDollars(e.depositTokenName, n)
                        );
                      case 4:
                        return (
                          (a = t.sent), (t.next = 7), n.balanceOf(e.address)
                        );
                      case 7:
                        return (
                          (i = t.sent),
                          (u = Number(a) * Number(Object(c.a)(i, n.decimal))),
                          (t.next = 11),
                          r.getDexEtfUsdPrice()
                        );
                      case 11:
                        return (
                          (s = t.sent), (t.next = 14), r.getDexIraUsdPrice()
                        );
                      case 14:
                        return (
                          (f = t.sent),
                          (t.next = 17),
                          r.getTokenPerSecond(
                            e.earnTokenName,
                            e.contract,
                            o,
                            e.depositTokenName
                          )
                        );
                      case 17:
                        return (
                          (h = t.sent),
                          (t.next = 20),
                          r.contracts.DexShareDexIraRewardPool.sharesPerSecond()
                        );
                      case 20:
                        (d = t.sent),
                          (v = d.mul(60).mul(60).div(1e9)),
                          (y = h.mul(60).mul(60)),
                          (m =
                            Number(s) *
                              Number(Object(c.a)(y.mul(24).mul(365))) +
                            Number(f) * Number(v.mul(24).mul(365))),
                          (g =
                            Number(s) * Number(Object(c.a)(y.mul(24))) +
                            Number(f) * Number(v.mul(24))),
                          (w = Number(a) * Number(Object(c.a)(i, n.decimal))),
                          (b = (m / w) * 100),
                          p({
                            dailyAPR: ((g / w) * 100).toFixed(2).toString(),
                            yearlyAPR: b.toFixed(2).toString(),
                            TVL: u.toFixed(2).toString(),
                          });
                      case 29:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [r, e]
          );
        return (
          Object(a.useEffect)(
            function () {
              r.isReady &&
                Object(n.a)(
                  l().mark(function t() {
                    return l().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              d().catch(function (t) {
                                return console.error(
                                  "Failed to fetch APR info: ".concat(t.stack)
                                );
                              })
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
            },
            [r.isReady, d]
          ),
          h
        );
      };
    },
    1093: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var n,
        o = r(43),
        a = r(0),
        i = r.n(a),
        c = r(289),
        u = r(37).e.div(
          n ||
            (n = Object(o.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))
        ),
        l = function (t) {
          var e = t.value;
          return i.a.createElement(
            u,
            null,
            i.a.createElement(
              "span",
              { style: { color: c.a.palette.text.primary } },
              e
            )
          );
        };
    },
    1096: function (t, e, r) {
      "use strict";
      var n = r(155),
        o = r(11),
        a = r(26),
        i = r(0),
        c = r(280),
        u = r(917),
        l = r(21);
      function s() {
        s = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = l(t[o], t, a);
                  if ("throw" !== u.type) {
                    var s = u.arg,
                      f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (s.value = t), i(s);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = l(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function () {
        var t = Object(i.useState)(),
          e = Object(a.a)(t, 2),
          r = e[0],
          f = e[1],
          h = Object(u.a)().fastRefresh,
          p = Object(c.a)();
        return (
          Object(i.useEffect)(
            function () {
              function t() {
                return (t = Object(o.a)(
                  s().mark(function t() {
                    var e, r, o, i, c, u;
                    return s().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch("".concat(l.k))
                                  .then(function (t) {
                                    return t.json();
                                  })
                                  .then(function (t) {
                                    return t;
                                  })
                              );
                            case 3:
                              return (
                                (e = t.sent),
                                (r = Object(a.a)(e, 1)),
                                (o = r[0]),
                                (i = o.price_change_percentage_24h),
                                (c = o.total_volume),
                                (t.next = 10),
                                p.getUsDexStat()
                              );
                            case 10:
                              (u = t.sent),
                                f(
                                  Object(n.a)(
                                    Object(n.a)({}, u),
                                    {},
                                    { volume24Hours: c, percent24Hours: i }
                                  )
                                ),
                                (t.next = 17);
                              break;
                            case 14:
                              (t.prev = 14),
                                (t.t0 = t.catch(0)),
                                console.error(t.t0);
                            case 17:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 14]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [f, p, h]
          ),
          r
        );
      };
    },
    1097: function (t, e, r) {
      "use strict";
      var n = r(155),
        o = r(11),
        a = r(26),
        i = r(0),
        c = r(280),
        u = r(917),
        l = r(21);
      function s() {
        s = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = l(t[o], t, a);
                  if ("throw" !== u.type) {
                    var s = u.arg,
                      f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (s.value = t), i(s);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = l(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function () {
        var t = Object(i.useState)(),
          e = Object(a.a)(t, 2),
          r = e[0],
          f = e[1],
          h = Object(u.a)().slowRefresh,
          p = Object(c.a)();
        return (
          Object(i.useEffect)(
            function () {
              function t() {
                return (t = Object(o.a)(
                  s().mark(function t() {
                    var e, r, o, i, c, u;
                    return s().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch("".concat(l.j))
                                  .then(function (t) {
                                    return t.json();
                                  })
                                  .then(function (t) {
                                    return t;
                                  })
                              );
                            case 3:
                              return (
                                (e = t.sent),
                                (r = Object(a.a)(e, 1)),
                                (o = r[0]),
                                (i = o.price_change_percentage_24h),
                                (c = o.total_volume),
                                (t.next = 10),
                                p.getShareStat()
                              );
                            case 10:
                              (u = t.sent),
                                f(
                                  Object(n.a)(
                                    Object(n.a)({}, u),
                                    {},
                                    { volume24Hours: c, percent24Hours: i }
                                  )
                                ),
                                (t.next = 17);
                              break;
                            case 14:
                              (t.prev = 14),
                                (t.t0 = t.catch(0)),
                                console.error(t.t0);
                            case 17:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 14]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [f, p, h]
          ),
          r
        );
      };
    },
    1098: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(280),
        c = r(917),
        u = r(939),
        l = r(455),
        s = r(1062);
      function f() {
        f = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === s)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var s = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = l(t[o], t, a);
                  if ("throw" !== u.type) {
                    var s = u.arg,
                      f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (s.value = t), i(s);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return s;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var n = l(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), s
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              s);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), s)
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
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      e.a = function () {
        var t = Object(a.useState)(0),
          e = Object(o.a)(t, 2),
          r = e[0],
          h = e[1],
          p = Object(c.a)().slowRefresh,
          d = Object(i.a)(),
          v = Object(u.a)(),
          y = Object(s.a)();
        return (
          Object(a.useEffect)(
            function () {
              !Object(l.isEmpty)(v) &&
                y &&
                Object(n.a)(
                  f().mark(function t() {
                    var e;
                    return f().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                d.getTotalValueLocked()
                              );
                            case 3:
                              (e = t.sent),
                                h(
                                  Number(
                                    null === v || void 0 === v ? void 0 : v.tvl
                                  ) + Number(e)
                                ),
                                (t.next = 10);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.error(t.t0);
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                )();
            },
            [d, p, v, y]
          ),
          r
        );
      };
    },
    1135: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(14),
        c = r(280),
        u = r(34);
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = s(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function s(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = s(t[o], t, a);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      f = l.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e, r) {
        var s = Object(a.useState)(i.a.from(0)),
          f = Object(o.a)(s, 2),
          h = f[0],
          p = f[1],
          d = Object(c.a)(),
          v = null === d || void 0 === d ? void 0 : d.isUnlocked,
          y = Object(a.useCallback)(
            Object(n.a)(
              l().mark(function n() {
                var o;
                return l().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2), d.earnedFromBank(t, e, r, d.myAccount)
                        );
                      case 2:
                        (o = n.sent), p(o);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [t, e, r, d]
          );
        return (
          Object(a.useEffect)(
            function () {
              if (v) {
                y().catch(function (t) {
                  return console.error(t.stack);
                });
                var t = setInterval(y, u.b.refreshInterval);
                return function () {
                  return clearInterval(t);
                };
              }
            },
            [v, t, d, y]
          ),
          h
        );
      };
    },
    1136: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(280),
        a = r(922);
      e.a = function (t) {
        var e = Object(o.a)(),
          r = Object(a.a)();
        return {
          onReward: Object(n.useCallback)(
            function () {
              r(
                e.harvest(t.contract, t.poolId),
                "Claim "
                  .concat(t.earnTokenName, " from ")
                  .concat(t.depositName, "   ")
              );
            },
            [t, e, r]
          ),
        };
      };
    },
    1137: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(280),
        a = r(922),
        i = r(53);
      e.a = function (t) {
        var e = Object(o.a)(),
          r = Object(a.a)();
        return {
          onStake: Object(n.useCallback)(
            function (n) {
              var o = Object(i.parseUnits)(n, t.depositToken.decimal);
              r(
                e.stake(t.contract, t.poolId, o),
                "Stake "
                  .concat(n, " ")
                  .concat(t.depositTokenName, " to ")
                  .concat(t.earnName, " farm   ")
              );
            },
            [t, e, r]
          ),
        };
      };
    },
    1138: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(14),
        c = r(280),
        u = r(34);
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = s(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function s(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = s(t[o], t, a);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      f = l.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e) {
        var r = Object(a.useState)(i.a.from(0)),
          s = Object(o.a)(r, 2),
          f = s[0],
          h = s[1],
          p = Object(c.a)(),
          d = null === p || void 0 === p ? void 0 : p.isUnlocked,
          v = Object(a.useCallback)(
            Object(n.a)(
              l().mark(function r() {
                var n;
                return l().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2), p.stakedBalanceOnBank(t, e, p.myAccount)
                        );
                      case 2:
                        (n = r.sent), h(n);
                      case 4:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            ),
            [t, e, p]
          );
        return (
          Object(a.useEffect)(
            function () {
              if (d) {
                v().catch(function (t) {
                  return console.error(t.stack);
                });
                var t = setInterval(v, u.b.refreshInterval);
                return function () {
                  return clearInterval(t);
                };
              }
            },
            [d, t]
          ),
          f
        );
      };
    },
    1139: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(280),
        c = r(34);
      function u() {
        u = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = s(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function s(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = l;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = s(t[o], t, a);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      f = l.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e) {
        var r = Object(a.useState)("0"),
          l = Object(o.a)(r, 2),
          s = l[0],
          f = l[1],
          h = Object(i.a)(),
          p = null === h || void 0 === h ? void 0 : h.isUnlocked,
          d = Object(a.useCallback)(
            Object(n.a)(
              u().mark(function r() {
                var n;
                return u().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2), h.getDepositTokenPriceInDollars(t, e)
                        );
                      case 2:
                        (n = r.sent), f(n);
                      case 4:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            ),
            [e, t, h]
          );
        return (
          Object(a.useEffect)(
            function () {
              if (p) {
                d().catch(function (t) {
                  return console.error(t.stack);
                });
                var t = setInterval(d, c.b.refreshInterval);
                return function () {
                  return clearInterval(t);
                };
              }
            },
            [p]
          ),
          s
        );
      };
    },
    1140: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(280),
        a = r(922),
        i = r(53);
      e.a = function (t) {
        var e = Object(o.a)(),
          r = Object(a.a)();
        return {
          onWithdraw: Object(n.useCallback)(
            function (n) {
              var o = Object(i.parseUnits)(n, t.depositToken.decimal);
              r(
                e.unstake(t.contract, t.poolId, o),
                "Withdraw "
                  .concat(n, " ")
                  .concat(t.depositTokenName, " from ")
                  .concat(t.contract)
              );
            },
            [t, e, r]
          ),
        };
      };
    },
    1181: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return N;
      });
      var n = r(26),
        o = r(0),
        a = r.n(o),
        i = r(2109),
        c = r(1192),
        u = r.n(c),
        l = r(1193),
        s = r.n(l),
        f = r(1194),
        h = r.n(f),
        p = r(1195),
        d = r.n(p),
        v = { USDEX: u.a, DEXSHARE: s.a, DEXETF: h.a, DEXIRA: d.a },
        y = function (t) {
          var e = t.symbol,
            r = t.size,
            n = "100%";
          if ((r && (n = r.toString() + "%"), !v[e]))
            throw new Error("Invalid Token Logo symbol: ".concat(e));
          return a.a.createElement(
            "div",
            { style: { height: "150px", position: "relative" } },
            a.a.createElement("img", {
              src: v[e],
              alt: "".concat(e, " Logo"),
              style: {
                maxHeight: n,
                maxWidth: n,
                left: 30,
                right: 30,
                top: 40,
                margin: "15px auto 15px auto",
                position: "absolute",
              },
            })
          );
        },
        m = r(1055),
        g = r(1196),
        w = r.n(g),
        b = r(280),
        E = r(11),
        x = r(34),
        L = r(955);
      function O() {
        O = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof f ? e : f,
            a = Object.create(o.prototype),
            i = new L(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = b(i, r);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === s)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = u;
        var s = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(j([])));
        y && y !== e && r.call(y, o) && (d = y);
        var m = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = l(t[o], t, a);
                  if ("throw" !== u.type) {
                    var s = u.arg,
                      f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (s.value = t), i(s);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function b(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return s;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var n = l(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), s
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              s);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = p),
          c(m, "constructor", p),
          c(p, "constructor", h),
          (h.displayName = c(p, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          g(m),
          c(m, i, "Generator"),
          c(m, o, function () {
            return this;
          }),
          c(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (L.prototype = {
            constructor: L,
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
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), s)
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
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), x(r), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      var j = (function () {
          var t = Object(E.a)(
            O().mark(function t(e, r) {
              var n, o, a, i, c, u, l;
              return O().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n = window),
                        (o = n.ethereum),
                        (a = null),
                        !o || o.networkVersion !== x.b.chainId.toString())
                      ) {
                        t.next = 25;
                        break;
                      }
                      (t.t0 = e),
                        (t.next =
                          "DEXIRA" === t.t0
                            ? 6
                            : "DEXETF" === t.t0
                            ? 9
                            : "DEXSHARE" === t.t0
                            ? 12
                            : "USDEX" === t.t0
                            ? 15
                            : "WDEX" === t.t0
                            ? 18
                            : 20);
                      break;
                    case 6:
                      return (
                        (i = "DexIra"), (a = r.DEXIRA), t.abrupt("break", 20)
                      );
                    case 9:
                      return (
                        (i = "indexpool"), (a = r.DEXETF), t.abrupt("break", 20)
                      );
                    case 12:
                      return (
                        (i = "DexShare"),
                        (a = r.DEXSHARE),
                        t.abrupt("break", 20)
                      );
                    case 15:
                      return (
                        (i = "UsDex"), (a = r.USDEX), t.abrupt("break", 20)
                      );
                    case 18:
                      return (i = "Wdex"), t.abrupt("break", 20);
                    case 20:
                      return (
                        (c = x.b.deployments[i].address),
                        (u = Object(L.a)(e)),
                        (l = a.decimal),
                        (t.next = 25),
                        o.request({
                          method: "wallet_watchAsset",
                          params: {
                            type: "ERC20",
                            options: {
                              address: c,
                              symbol: e,
                              decimals: l,
                              image: u,
                            },
                          },
                        })
                      );
                    case 25:
                      return t.abrupt("return", !0);
                    case 26:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, r) {
            return t.apply(this, arguments);
          };
        })(),
        k = r(926),
        A = r(1185);
      var N = function (t) {
        var e = Object(b.a)(),
          r = !0;
        t.hideMetamask && (r = !1);
        var o = Object(k.a)(A.a),
          c = Object(n.a)(o, 2),
          u = c[0],
          l =
            (c[1],
            function () {
              j(t.symbol, e);
            });
        return (
          x.b.preLaunch && (l = u),
          a.a.createElement(
            m.c,
            { symbol: t.symbol },
            a.a.createElement(
              m.b,
              null,
              a.a.createElement(y, { symbol: t.symbol, size: t.logoSize }),
              r
                ? a.a.createElement(
                    i.a,
                    {
                      onClick: l,
                      style: {
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      },
                    },
                    a.a.createElement("img", {
                      alt: "metamask",
                      src: w.a,
                      style: { zIndex: 2 },
                    })
                  )
                : a.a.createElement(a.a.Fragment, null)
            ),
            a.a.createElement(m.a, null, t.children)
          )
        );
      };
    },
    1185: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r.n(n),
        a = r(918),
        i = r(1191),
        c = r.n(i),
        u = r(1014),
        l = function () {
          return o.a.createElement(
            a.a,
            null,
            o.a.createElement("img", {
              src: c.a,
              alt: "dexfinance",
              height: "500px",
              style: {
                padding: "0",
                margin: "0",
                height: "auto",
                width: "auto",
                marginBottom: "-90px",
              },
            }),
            o.a.createElement(u.a, null)
          );
        };
      e.a = l;
    },
    1188: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(280),
        c = r(917);
      function u() {
        u = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (A) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
            a = Object.create(o.prototype),
            i = new O(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return k();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = E(i, r);
                    if (c) {
                      if (c === f) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = s(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === f)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function s(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (A) {
            return { type: "throw", arg: A };
          }
        }
        t.wrap = l;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        c(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function b(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = s(t[o], t, a);
                  if ("throw" !== u.type) {
                    var l = u.arg,
                      f = l.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (l.value = t), i(l);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function E(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                E(t, e),
                "throw" === e.method)
              )
                return f;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return f;
          }
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), f
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function x(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function L(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function j(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: k };
        }
        function k() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", p),
          (p.displayName = c(d, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === p || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(b.prototype),
          c(b.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = b),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new b(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          w(g),
          c(g, i, "Generator"),
          c(g, o, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
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
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    L(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: j(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      e.a = function () {
        var t = Object(a.useState)(),
          e = Object(o.a)(t, 2),
          r = e[0],
          l = e[1],
          s = Object(c.a)().fastRefresh,
          f = Object(i.a)();
        return (
          Object(a.useEffect)(
            function () {
              function t() {
                return (t = Object(n.a)(
                  u().mark(function t() {
                    return u().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.t0 = l),
                                (t.next = 4),
                                f.getDexIraStat()
                              );
                            case 4:
                              (t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t2 = t.catch(0)),
                                console.error(t.t2);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            },
            [l, f, s]
          ),
          r
        );
      };
    },
    1191: function (t, e, r) {
      t.exports = r.p + "static/media/coming-soon-square.53ad5426.png";
    },
    1192: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1193: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1194: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1195: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1196: function (t, e, r) {
      t.exports = r.p + "static/media/styled-metamask-fox.c5eb6252.png";
    },
    1306: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return l;
      });
      var n,
        o = r(43),
        a = r(0),
        i = r.n(a),
        c = r(37),
        u = c.e.div(
          n || (n = Object(o.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (t) {
            return t.size;
          },
          function (t) {
            return t.size;
          }
        ),
        l = function (t) {
          var e,
            r = t.size,
            n = void 0 === r ? "md" : r,
            o = Object(a.useContext)(c.a).spacing;
          switch (n) {
            case "lg":
              e = o[6];
              break;
            case "sm":
              e = o[2];
              break;
            case "md":
            default:
              e = o[4];
          }
          return i.a.createElement(u, { size: e });
        };
    },
    1490: function (t, e, r) {
      t.exports = r.p + "static/media/dexIRA_logo-white.62409bee.png";
    },
    2136: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function () {
          return Gt;
        });
      var n,
        o,
        a,
        i,
        c,
        u,
        l,
        s,
        f = r(26),
        h = r(77),
        p = r(43),
        d = r(0),
        v = r.n(d),
        y = (r(1489), r(1306), r(37)),
        m = r(1180),
        g = r(1190),
        w = r(2109),
        b = r(941),
        E = r(1093),
        x = r(1096),
        L = r(35),
        O = r(1181),
        j = r(289),
        k = r(1097),
        A = r(1136),
        N = r(1135),
        S = r(939),
        G = r(956),
        T = y.e.div(
          n ||
            (n = Object(p.a)([
              "\n  margin-top: 5em;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  color: white;\n",
            ]))
        ),
        I = y.e.div(
          o ||
            (o = Object(p.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: ",
              "px;\n  width: 100%;\n",
            ])),
          function (t) {
            return t.theme.spacing[6];
          }
        ),
        F =
          (y.e.div(
            a || (a = Object(p.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
            function (t) {
              return t.theme.spacing[4];
            },
            function (t) {
              return t.theme.spacing[4];
            }
          ),
          y.e.div(
            i ||
              (i = Object(p.a)([
                "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
              ]))
          )),
        P = function (t) {
          var e = t.bank,
            r = Object(x.a)(),
            n = Object(k.a)(),
            o = Object(S.a)(),
            a = Object(G.a)(),
            i = Object(d.useMemo)(
              function () {
                return "DexShare" === e.earnTokenName
                  ? { priceInDollars: a.dexShare }
                  : "DexEtf" === e.earnTokenName
                  ? o
                  : { priceInDollars: a.usDex };
              },
              [e.earnTokenName, r, n, o, a]
            ),
            c = Object(A.a)(e).onReward,
            u = Object(N.a)(e.contract, e.earnTokenName, e.poolId),
            l = Object(d.useMemo)(
              function () {
                return i ? Number(i.priceInDollars).toFixed(2) : null;
              },
              [i]
            ),
            s = (Number(l) * Number(Object(L.a)(u))).toFixed(2);
          return v.a.createElement(
            m.a,
            null,
            v.a.createElement(
              O.a,
              { symbol: "DEXETF", hideMetamask: !0, logoSize: 50 },
              v.a.createElement(
                g.a,
                null,
                v.a.createElement(
                  F,
                  null,
                  v.a.createElement(
                    T,
                    null,
                    v.a.createElement(E.a, { value: Object(L.a)(u) }),
                    v.a.createElement(b.a, {
                      color: j.a.palette.text.primary,
                      text: "\u2248 $".concat(s),
                      variant: "primary",
                    }),
                    v.a.createElement(b.a, {
                      color: j.a.palette.text.primary,
                      text: "dexETF Earned",
                    })
                  ),
                  v.a.createElement(
                    I,
                    null,
                    v.a.createElement(
                      w.a,
                      {
                        onClick: c,
                        disabled: u.eq(0),
                        className: u.eq(0)
                          ? "shinyButtonDisabled"
                          : "shinyButton",
                      },
                      "Claim Reward"
                    )
                  )
                )
              )
            )
          );
        },
        D = r(1003),
        C = r(926),
        R = r(928),
        B = r(918),
        Q = r(1014),
        W = r(919),
        U = r(925),
        H = r(34),
        Y = function (t) {
          var e = t.max,
            r = t.onConfirm,
            n = (t.onDismiss, t.tokenName),
            o = void 0 === n ? "" : n,
            a = (t.decimals, Object(d.useState)("")),
            i = Object(f.a)(a, 2),
            c = i[0],
            u = i[1],
            l = Object(d.useMemo)(
              function () {
                return Object(L.b)(e, "USDC" === o ? 6 : 18);
              },
              [e, o]
            ),
            s = Object(d.useCallback)(
              function (t) {
                u(t.currentTarget.value);
              },
              [u]
            ),
            h = Object(d.useCallback)(
              function () {
                u(l);
              },
              [l, u]
            );
          return v.a.createElement(
            B.a,
            null,
            v.a.createElement(W.a, { text: "Deposit ".concat(o) }),
            v.a.createElement(U.a, {
              value: c,
              onSelectMax: h,
              onChange: s,
              max: l,
              symbol: o,
            }),
            v.a.createElement(
              Q.a,
              null,
              H.b.preLaunch
                ? v.a.createElement(
                    w.a,
                    { color: "primary", variant: "contained" },
                    "COMING SOON!"
                  )
                : v.a.createElement(
                    w.a,
                    {
                      color: "primary",
                      variant: "contained",
                      onClick: function () {
                        return r(c);
                      },
                    },
                    "Confirm"
                  )
            )
          );
        },
        J = function (t) {
          var e = t.onConfirm,
            r = (t.onDismiss, t.max),
            n = t.tokenName,
            o = void 0 === n ? "" : n,
            a = (t.decimals, Object(d.useState)("")),
            i = Object(f.a)(a, 2),
            c = i[0],
            u = i[1],
            l = Object(d.useMemo)(
              function () {
                return Object(L.b)(r);
              },
              [r]
            ),
            s = Object(d.useCallback)(
              function (t) {
                u(t.currentTarget.value);
              },
              [u]
            ),
            h = Object(d.useCallback)(
              function () {
                u(l);
              },
              [l, u]
            );
          return v.a.createElement(
            B.a,
            null,
            v.a.createElement(W.a, { text: "Withdraw ".concat(o) }),
            v.a.createElement(U.a, {
              onSelectMax: h,
              onChange: s,
              value: c,
              max: l,
              symbol: o,
            }),
            v.a.createElement(
              Q.a,
              null,
              v.a.createElement(
                w.a,
                {
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    return e(c);
                  },
                },
                "Confirm"
              )
            )
          );
        },
        z = r(280),
        V = r(1139),
        q = r(1137),
        M = r(1140),
        X = r(1138),
        Z = y.e.div(
          c ||
            (c = Object(p.a)([
              "\n  margin-top: 5em;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  color: white;\n",
            ]))
        ),
        _ = y.e.div(
          u ||
            (u = Object(p.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: ",
              "px;\n  width: 100%;\n",
            ])),
          function (t) {
            return t.theme.spacing[6];
          }
        ),
        K = y.e.div(
          l || (l = Object(p.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (t) {
            return t.theme.spacing[4];
          },
          function (t) {
            return t.theme.spacing[4];
          }
        ),
        $ = y.e.div(
          s ||
            (s = Object(p.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
            ]))
        ),
        tt = function (t) {
          var e = t.bank,
            r = (Object(z.a)(), Object(D.b)(e.depositToken, e.address)),
            n = Object(f.a)(r, 2),
            o = n[0],
            a = n[1],
            i = Object(V.a)(e.depositTokenName, e.depositToken),
            c = Object(d.useMemo)(
              function () {
                return i || null;
              },
              [i]
            ),
            u = Object(q.a)(e).onStake,
            l = Object(M.a)(e).onWithdraw,
            s = Object(R.a)(e.depositToken),
            h = Object(X.a)(e.contract, e.poolId),
            p = (
              Number(c) * Number(Object(L.a)(h, e.depositToken.decimal))
            ).toFixed(2),
            y = Object(C.a)(
              v.a.createElement(Y, {
                max: s,
                decimals: e.depositToken.decimal,
                onConfirm: function (t) {
                  Number(t) <= 0 || isNaN(Number(t)) || (u(t), A());
                },
                tokenName: e.depositTokenName,
              })
            ),
            x = Object(f.a)(y, 2),
            k = x[0],
            A = x[1],
            N = Object(C.a)(
              v.a.createElement(J, {
                max: h,
                decimals: e.depositToken.decimal,
                onConfirm: function (t) {
                  Number(t) <= 0 || isNaN(Number(t)) || (l(t), T());
                },
                tokenName: e.depositTokenName,
              })
            ),
            S = Object(f.a)(N, 2),
            G = S[0],
            T = S[1];
          return v.a.createElement(
            m.a,
            null,
            v.a.createElement(
              O.a,
              { symbol: "DEXSHARE", hideMetamask: !0, logoSize: 50 },
              v.a.createElement(
                g.a,
                null,
                v.a.createElement(
                  $,
                  null,
                  v.a.createElement(
                    Z,
                    null,
                    v.a.createElement(E.a, { value: Object(L.a)(h) }),
                    v.a.createElement(b.a, {
                      color: j.a.palette.text.primary,
                      text: "\u2248 $".concat(p),
                    }),
                    v.a.createElement(b.a, {
                      color: j.a.palette.text.primary,
                      text: "dexSHARE Staked",
                    })
                  ),
                  v.a.createElement(
                    _,
                    null,
                    o !== D.a.APPROVED
                      ? v.a.createElement(
                          w.a,
                          {
                            disabled: o !== D.a.NOT_APPROVED,
                            className:
                              o !== D.a.NOT_APPROVED
                                ? "shinyButton"
                                : "shinyButtonDisabled",
                            onClick: a,
                          },
                          "Approve dexSHARE"
                        )
                      : v.a.createElement(
                          v.a.Fragment,
                          null,
                          v.a.createElement(
                            w.a,
                            { onClick: G, className: "shinyButton" },
                            "-"
                          ),
                          v.a.createElement(K, null),
                          v.a.createElement(
                            w.a,
                            { onClick: k, className: "shinyButton" },
                            "+"
                          )
                        )
                  )
                )
              )
            )
          );
        },
        et = r(2106),
        rt = r(2112),
        nt = r(934),
        ot = (r(1098), r(923)),
        at = r.n(ot),
        it = r(1004),
        ct = r(1002),
        ut = r.n(ct),
        lt = r(1056),
        st = (r(125), r(1062)),
        ft = r(1035),
        ht = r(1134),
        pt = r(900),
        dt = r(11),
        vt = r(14);
      function yt() {
        yt = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (k) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof f ? e : f,
            a = Object.create(o.prototype),
            i = new L(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = "suspendedStart";
              return function (o, a) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === o) throw a;
                  return j();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = b(i, r);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var u = l(t, e, r);
                  if ("normal" === u.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      u.arg === s)
                    )
                      continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function l(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var s = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(O([])));
        y && y !== e && r.call(y, o) && (d = y);
        var m = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function w(t, e) {
          var n;
          this._invoke = function (o, a) {
            function i() {
              return new e(function (n, i) {
                !(function n(o, a, i, c) {
                  var u = l(t[o], t, a);
                  if ("throw" !== u.type) {
                    var s = u.arg,
                      f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            n("next", t, i, c);
                          },
                          function (t) {
                            n("throw", t, i, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (s.value = t), i(s);
                          },
                          function (t) {
                            return n("throw", t, i, c);
                          }
                        );
                  }
                  c(u.arg);
                })(o, a, n, i);
              });
            }
            return (n = n ? n.then(i, i) : i());
          };
        }
        function b(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                b(t, e),
                "throw" === e.method)
              )
                return s;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var n = l(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), s
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                s)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              s);
        }
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function x(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(E, this),
            this.reset(!0);
        }
        function O(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                a = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = p),
          c(m, "constructor", p),
          c(p, "constructor", h),
          (h.displayName = c(p, i, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === h || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, p)
                : ((t.__proto__ = p), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(m)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(u(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          g(m),
          c(m, i, "Generator"),
          c(m, o, function () {
            return this;
          }),
          c(m, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = O),
          (L.prototype = {
            constructor: L,
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
                    r.call(this, e) &&
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
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  i = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (c && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), s)
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
                s
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), x(r), s;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    x(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: O(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      var mt,
        gt,
        wt,
        bt = function () {
          var t = Object(d.useState)(vt.a.from(0)),
            e = Object(f.a)(t, 2),
            r = e[0],
            n = e[1],
            o = Object(z.a)(),
            a = null === o || void 0 === o ? void 0 : o.isUnlocked,
            i = Object(d.useCallback)(
              Object(dt.a)(
                yt().mark(function t() {
                  var e;
                  return yt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            o.contracts.DexShareDexIraRewardPool.pendingRewards()
                          );
                        case 2:
                          (e = t.sent), n(vt.a.from(e));
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [o]
            );
          return (
            Object(d.useEffect)(
              function () {
                if (a) {
                  i().catch(function (t) {
                    return console.error(t.stack);
                  });
                  var t = setInterval(i, H.b.refreshInterval);
                  return function () {
                    return clearInterval(t);
                  };
                }
              },
              [a, o, i]
            ),
            r
          );
        },
        Et = r(922),
        xt = function () {
          var t = Object(z.a)(),
            e = Object(Et.a)();
          return Object(d.useCallback)(
            function () {
              e(t.contracts.DexShareDexIraRewardPool.claim(), "Claim DexIRA");
            },
            [t, e]
          );
        },
        Lt = r(1188),
        Ot = r(1490),
        jt = r.n(Ot),
        kt = y.e.div(
          mt ||
            (mt = Object(p.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  color: white;\n",
            ]))
        ),
        At = y.e.div(gt || (gt = Object(p.a)(["\n  margin-top: 1.5em;\n"]))),
        Nt = function () {
          var t = Object(Lt.a)(),
            e = Object(z.a)(),
            r = bt(),
            n = xt(),
            o = Object(d.useMemo)(
              function () {
                return t ? Number(t.priceInDollars).toFixed(4) : null;
              },
              [t]
            ),
            a = Object(d.useMemo)(
              function () {
                return o && r
                  ? (
                      Number(o) * Number(Object(L.a)(r, e.DEXIRA.decimal))
                    ).toFixed(2)
                  : null;
              },
              [t, o, r]
            );
          return v.a.createElement(
            ht.a,
            null,
            v.a.createElement(
              g.a,
              null,
              v.a.createElement(
                rt.a,
                { container: !0 },
                v.a.createElement(
                  rt.a,
                  { item: !0, xs: 12, lg: 3 },
                  v.a.createElement(
                    At,
                    null,
                    v.a.createElement(
                      kt,
                      null,
                      v.a.createElement("img", {
                        src: jt.a,
                        alt: "dexIRA Logo",
                        style: { maxHeight: "50%", maxWidth: "50%" },
                      }),
                      v.a.createElement(b.a, {
                        color: j.a.palette.text.primary,
                        text: "BONUS REWARDS",
                      })
                    )
                  )
                ),
                v.a.createElement(
                  rt.a,
                  { item: !0, xs: 12, lg: 5 },
                  v.a.createElement(
                    pt.a,
                    null,
                    "In honor of reaching significant milestones in our TVL the team has decided to donate 10 Million dexIRA tokens (paid for and taken directly from the teams personal wallets) and give them back to the community!"
                  )
                ),
                v.a.createElement(
                  rt.a,
                  { item: !0, xs: 12, lg: 2 },
                  v.a.createElement(
                    kt,
                    null,
                    v.a.createElement(E.a, {
                      value: r ? Object(L.a)(r, e.DEXIRA.decimal) : "--",
                    }),
                    v.a.createElement(b.a, {
                      color: j.a.palette.text.primary,
                      text: "\u2248 $".concat(a || "--.--"),
                      variant: "primary",
                    }),
                    v.a.createElement(b.a, {
                      color: j.a.palette.text.primary,
                      text: "dexIRA Earned",
                    })
                  )
                ),
                v.a.createElement(
                  rt.a,
                  { item: !0, xs: 12, lg: 2 },
                  v.a.createElement(
                    At,
                    null,
                    v.a.createElement(
                      kt,
                      null,
                      v.a.createElement(
                        w.a,
                        {
                          onClick: n,
                          disabled: r.eq(0),
                          className: r.eq(0)
                            ? "shinyButtonDisabled"
                            : "shinyButton",
                        },
                        "Claim Reward"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        St = Object(y.c)(
          wt ||
            (wt = Object(p.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          at.a
        ),
        Gt =
          (Object(et.a)(function (t) {
            return {
              gridItem: Object(h.a)(
                { height: "100%" },
                t.breakpoints.up("md"),
                { height: "90px" }
              ),
            };
          }),
          function () {
            var t = Object(ft.a)(),
              e = Object(f.a)(t, 1)[0].find(function (t) {
                return 4 === t.sectionInUI;
              }),
              r = Object(st.a)();
            return v.a.createElement(
              nt.a,
              null,
              v.a.createElement(St, null),
              v.a.createElement(
                m.a,
                { mt: 5 },
                v.a.createElement(
                  rt.a,
                  { container: !0, justify: "center", spacing: 3 },
                  v.a.createElement(
                    rt.a,
                    { item: !0, xs: 12, sm: 4 },
                    v.a.createElement(
                      "h3",
                      {
                        style: Object(it.a)(
                          "text-align: left; --fontSize:32px; line-height: 1.1;"
                        ),
                        "data-fontsize": "32",
                        "data-lineheight": "35.2px",
                      },
                      v.a.createElement(
                        "span",
                        { style: Object(it.a)("color: #8b67d3;") },
                        "REGULATION STAKING"
                      )
                    ),
                    v.a.createElement(
                      "div",
                      {
                        style: Object(it.a)(
                          "font-weight:normal;color:#ffffff;"
                        ),
                      },
                      v.a.createElement(
                        "p",
                        { style: Object(it.a)("text-align: left;") },
                        v.a.createElement(
                          "span",
                          { style: Object(it.a)("font-weight: 400;") },
                          "Stake your dexSHARE to earn dexETF tokens."
                        )
                      )
                    )
                  ),
                  v.a.createElement(
                    lt.b,
                    null,
                    v.a.createElement(lt.a, {
                      title: "TOTAL VALUE LOCKED",
                      value: v.a.createElement(ut.a, {
                        end: r
                          ? parseFloat(
                              null === r || void 0 === r ? void 0 : r.TVL
                            )
                          : 0,
                        separator: ",",
                        prefix: "$",
                      }),
                    }),
                    v.a.createElement(lt.a, {
                      title: "APR",
                      value:
                        (r
                          ? parseFloat(
                              null === r || void 0 === r ? void 0 : r.yearlyAPR
                            ).toFixed(2)
                          : "--") + "%",
                    }),
                    v.a.createElement(lt.a, {
                      title: "DAILY APR",
                      value:
                        (r
                          ? parseFloat(
                              null === r || void 0 === r ? void 0 : r.dailyAPR
                            ).toFixed(2)
                          : "--") + "%",
                    })
                  )
                ),
                v.a.createElement(
                  rt.a,
                  { container: !0, justify: "center", spacing: 3 },
                  v.a.createElement(
                    rt.a,
                    { item: !0, lg: 6, xs: 12 },
                    v.a.createElement(P, { bank: e })
                  ),
                  v.a.createElement(
                    rt.a,
                    { item: !0, lg: 6, xs: 12 },
                    v.a.createElement(tt, { bank: e })
                  ),
                  v.a.createElement(
                    rt.a,
                    { item: !0, lg: 12, xs: 12 },
                    v.a.createElement(Nt, { bank: e })
                  )
                )
              )
            );
          });
    },
  },
]);
