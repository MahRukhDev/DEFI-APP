/*!For license information please see 28.08b99970.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [28],
  {
    1064: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r(280),
        o = r(922),
        c = r(53);
      t.a = function () {
        var e = Object(a.a)(),
          t = Object(o.a)();
        return {
          onWrap: Object(n.useCallback)(
            function (r) {
              var n = Object(c.parseUnits)(r, e.WDEX.decimal);
              t(e.wrap(n), "Wrap ".concat(r));
            },
            [e, t]
          ),
        };
      };
    },
    1065: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r(280),
        o = r(922),
        c = r(53);
      t.a = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "Wdex",
          t = Object(a.a)(),
          r = Object(o.a)(),
          i = Object(n.useCallback)(
            function (n) {
              var a = Object(c.parseUnits)(n, t.WDEX.decimal);
              r(t.unwrap(e, a), "Unwrap ".concat(n));
            },
            [t, r]
          );
        return i;
      };
    },
    1066: function (e, t, r) {
      "use strict";
      var n = r(11),
        a = r(26),
        o = r(0),
        c = r(14),
        i = r(280),
        l = r(34);
      function u() {
        u = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          c = n.toStringTag || "@@toStringTag";
        function i(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (R) {
          i = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, n) {
          var a = t && t.prototype instanceof m ? t : m,
            o = Object.create(a.prototype),
            c = new w(n || []);
          return (
            (o._invoke = (function (e, t, r) {
              var n = "suspendedStart";
              return function (a, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === a) throw o;
                  return A();
                }
                for (r.method = a, r.arg = o; ; ) {
                  var c = r.delegate;
                  if (c) {
                    var i = O(c, r);
                    if (i) {
                      if (i === p) continue;
                      return i;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = "executing";
                  var l = s(e, t, r);
                  if ("normal" === l.type) {
                    if (
                      ((n = r.done ? "completed" : "suspendedYield"),
                      l.arg === p)
                    )
                      continue;
                    return { value: l.arg, done: r.done };
                  }
                  "throw" === l.type &&
                    ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
                }
              };
            })(e, r, c)),
            o
          );
        }
        function s(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (R) {
            return { type: "throw", arg: R };
          }
        }
        e.wrap = l;
        var p = {};
        function m() {}
        function f() {}
        function d() {}
        var h = {};
        i(h, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          E = b && b(b(N([])));
        E && E !== t && r.call(E, a) && (h = E);
        var v = (d.prototype = m.prototype = Object.create(h));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function g(e, t) {
          var n;
          this._invoke = function (a, o) {
            function c() {
              return new t(function (n, c) {
                !(function n(a, o, c, i) {
                  var l = s(e[a], e, o);
                  if ("throw" !== l.type) {
                    var u = l.arg,
                      p = u.value;
                    return p && "object" == typeof p && r.call(p, "__await")
                      ? t.resolve(p.__await).then(
                          function (e) {
                            n("next", e, c, i);
                          },
                          function (e) {
                            n("throw", e, c, i);
                          }
                        )
                      : t.resolve(p).then(
                          function (e) {
                            (u.value = e), c(u);
                          },
                          function (e) {
                            return n("throw", e, c, i);
                          }
                        );
                  }
                  i(l.arg);
                })(a, o, n, c);
              });
            }
            return (n = n ? n.then(c, c) : c());
          };
        }
        function O(e, t) {
          var r = e.iterator[t.method];
          if (void 0 === r) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                O(e, t),
                "throw" === t.method)
              )
                return p;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var n = s(r, e.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), p
            );
          var a = n.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function w(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = d),
          i(v, "constructor", d),
          i(d, "constructor", f),
          (f.displayName = i(d, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), i(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(g.prototype),
          i(g.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var c = new g(l(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          y(v),
          i(v, c, "Generator"),
          i(v, a, function () {
            return this;
          }),
          i(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return (
              t.reverse(),
              function r() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in e) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (e.values = N),
          (w.prototype = {
            constructor: w,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
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
              function n(r, n) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
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
              var c = o ? o.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(c)
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
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    x(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      t.a = function () {
        var e = Object(o.useState)(c.a.from(0)),
          t = Object(a.a)(e, 2),
          r = t[0],
          s = t[1],
          p = Object(i.a)(),
          m = null === p || void 0 === p ? void 0 : p.isUnlocked,
          f = Object(o.useCallback)(
            Object(n.a)(
              u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.t0 = s),
                          (e.next = 3),
                          p.contracts.WdexRatioCalculator.calculateMaxWrappable(
                            p.myAccount
                          )
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
            [p, p.contracts, p.contracts.WdexRatioCalculator, p.myAccount]
          );
        return (
          Object(o.useEffect)(
            function () {
              if (m) {
                f().catch(function (e) {
                  return console.error(
                    "Failed to fetch token balance: ".concat(e.stack)
                  );
                });
                var e = setInterval(f, l.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [m, f, p]
          ),
          r
        );
      };
    },
    1092: function (e, t, r) {
      "use strict";
      var n = r(77),
        a = r(26),
        o = r(0),
        c = r.n(o),
        i = r(916),
        l = r.n(i),
        u = r(2109),
        s = r(925),
        p = r(35),
        m = r(280),
        f = r(1064),
        d = r(1065),
        h = r(1066),
        b = r(928),
        E = r(1003),
        v = r(21),
        y = r(2106),
        g = Object(y.a)(function () {
          return {
            row: {
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            },
            buttonWrap: {
              display: "flex",
              border: "2px solid #ffffff",
              borderRadius: "10px 10px 0 0",
              justifyContent: "space-around",
              marginBottom: "20px",
            },
            active: { background: "#ffffff", color: "#000000" },
            linkButton: {
              padding: "10px 0",
              fontSize: "18px",
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
            },
            wrap: { marginTop: "20px" },
          };
        }),
        O = function (e) {
          var t = e.type,
            r = g(),
            i = Object(o.useState)(t === v.v.BOTH || t === v.v.WRAP),
            s = Object(a.a)(i, 2),
            y = s[0],
            O = s[1],
            w = Object(m.a)(),
            N = Object(E.b)(w.DEXIRA, w.WDEX.address),
            A = Object(a.a)(N, 2),
            R = A[0],
            D = A[1],
            S = Object(E.b)(w.DEXSHARE, w.WDEX.address),
            W = Object(a.a)(S, 2),
            C = W[0],
            k = W[1],
            P = Object(f.a)().onWrap,
            X = Object(d.a)(),
            I = Object(h.a)(),
            T = Object(o.useMemo)(
              function () {
                return Object(p.a)(I, w.WDEX.decimal);
              },
              [I]
            ),
            L = Object(b.a)(w.DEXSHARE),
            H = Object(o.useMemo)(
              function () {
                return Object(p.a)(L, w.DEXSHARE.decimal);
              },
              [L]
            ),
            B = Object(b.a)(w.DEXIRA),
            M = Object(o.useMemo)(
              function () {
                return Object(p.a)(B, w.DEXIRA.decimal);
              },
              [B]
            ),
            K = Object(b.a)(w.WDEX),
            z = Object(o.useMemo)(
              function () {
                return Object(p.a)(K, w.WDEX.decimal);
              },
              [K]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            t === v.v.BOTH &&
              c.a.createElement(
                "div",
                { className: r.buttonWrap },
                c.a.createElement(
                  "div",
                  {
                    className: l()(r.linkButton, Object(n.a)({}, r.active, y)),
                    onClick: function () {
                      return O(!0);
                    },
                  },
                  "Wrap"
                ),
                c.a.createElement(
                  "div",
                  {
                    className: l()(r.linkButton, Object(n.a)({}, r.active, !y)),
                    onClick: function () {
                      return O(!1);
                    },
                  },
                  "UnWrap"
                )
              ),
            c.a.createElement(
              "div",
              null,
              c.a.createElement(
                "div",
                { style: { width: "100%" } },
                c.a.createElement(
                  "div",
                  { className: r.row },
                  c.a.createElement("div", null, "dexIRA"),
                  c.a.createElement("div", null, M)
                ),
                c.a.createElement(
                  "div",
                  { className: r.row },
                  c.a.createElement("div", null, "dexSHARE"),
                  c.a.createElement("div", null, H)
                ),
                c.a.createElement(
                  "div",
                  { className: r.row },
                  c.a.createElement("div", null, "wDEX-SHARE"),
                  c.a.createElement("div", null, z)
                ),
                c.a.createElement(
                  "div",
                  { className: r.row },
                  c.a.createElement("div", null, "Wrappable wDEX-SHARE"),
                  c.a.createElement("div", null, T)
                )
              )
            ),
            c.a.createElement(
              "div",
              { className: r.wrap },
              R !== E.a.APPROVED || C !== E.a.APPROVED
                ? c.a.createElement(
                    c.a.Fragment,
                    null,
                    R !== E.a.APPROVED &&
                      c.a.createElement(
                        u.a,
                        {
                          className: "shinyButtonSecondary",
                          onClick: D,
                          style: { width: "100%", marginTop: "10px" },
                        },
                        "Approve dexIRA"
                      ),
                    C !== E.a.APPROVED &&
                      c.a.createElement(
                        u.a,
                        {
                          className: "shinyButtonSecondary",
                          onClick: k,
                          style: { width: "100%", marginTop: "10px" },
                        },
                        "Approve dexSHARE"
                      )
                  )
                : c.a.createElement(
                    c.a.Fragment,
                    null,
                    y
                      ? c.a.createElement(j, {
                          max: I,
                          decimals: w.WDEX.decimal,
                          onConfirm: function (e) {
                            Number(e) <= 0 || isNaN(Number(e)) || P(e);
                          },
                        })
                      : c.a.createElement(x, {
                          max: K,
                          decimals: w.WDEX.decimal,
                          onConfirm: function (e) {
                            Number(e) <= 0 || isNaN(Number(e)) || X(e);
                          },
                        })
                  )
            )
          );
        },
        j = function (e) {
          var t = e.max,
            r = e.decimals,
            n = e.onConfirm,
            i = Object(o.useState)(""),
            l = Object(a.a)(i, 2),
            m = l[0],
            f = l[1],
            d = Object(o.useMemo)(
              function () {
                return Object(p.b)(t, r, !1);
              },
              [t, r]
            ),
            h = Object(o.useCallback)(
              function (e) {
                f(e.currentTarget.value);
              },
              [f]
            ),
            b = Object(o.useCallback)(
              function () {
                f(d);
              },
              [d, f]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(s.a, {
              value: m,
              onSelectMax: b,
              onChange: h,
              max: d,
              symbol: "WDEX",
            }),
            c.a.createElement(
              u.a,
              {
                className: "shinyButtonSecondary",
                onClick: function () {
                  return n(m);
                },
                style: { width: "100%", marginTop: "10px" },
              },
              "Wrap"
            )
          );
        },
        x = function (e) {
          var t = e.onConfirm,
            r = e.max,
            n = e.tokenName,
            i = void 0 === n ? "" : n,
            l = e.decimals,
            m = void 0 === l ? 18 : l,
            f = Object(o.useState)(""),
            d = Object(a.a)(f, 2),
            h = d[0],
            b = d[1],
            E = Object(o.useMemo)(
              function () {
                return Object(p.b)(r, m, !1);
              },
              [r, m]
            ),
            v = Object(o.useCallback)(
              function (e) {
                b(e.currentTarget.value);
              },
              [b]
            ),
            y = Object(o.useCallback)(
              function () {
                b(E);
              },
              [E, b]
            );
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(s.a, {
              onSelectMax: y,
              onChange: v,
              value: h,
              max: E,
              symbol: i,
            }),
            c.a.createElement(
              u.a,
              {
                className: "shinyButtonSecondary",
                onClick: function () {
                  return t(h);
                },
                style: { width: "100%", marginTop: "10px" },
              },
              "UnWrap"
            )
          );
        };
      O.defaultProps = { type: v.v.BOTH };
      t.a = O;
    },
    1134: function (e, t, r) {
      "use strict";
      var n = r(6),
        a = r(44),
        o = r(0),
        c = r(281),
        i = r(2117),
        l = r(282),
        u = o.forwardRef(function (e, t) {
          var r = e.classes,
            l = e.className,
            u = e.raised,
            s = void 0 !== u && u,
            p = Object(a.a)(e, ["classes", "className", "raised"]);
          return o.createElement(
            i.a,
            Object(n.a)(
              {
                className: Object(c.default)(r.root, l),
                elevation: s ? 8 : 1,
                ref: t,
              },
              p
            )
          );
        });
      t.a = Object(l.a)({ root: { overflow: "hidden" } }, { name: "MuiCard" })(
        u
      );
    },
    1180: function (e, t, r) {
      "use strict";
      var n = r(189),
        a = r(6),
        o = r(187);
      function c(e, t) {
        var r = {};
        return (
          Object.keys(e).forEach(function (n) {
            -1 === t.indexOf(n) && (r[n] = e[n]);
          }),
          r
        );
      }
      function i(e) {
        var t = function (t) {
          var r = e(t);
          return t.css
            ? Object(a.a)(
                {},
                Object(o.a)(r, e(Object(a.a)({ theme: t.theme }, t.css))),
                c(t.css, [e.filterProps])
              )
            : t.sx
            ? Object(a.a)(
                {},
                Object(o.a)(r, e(Object(a.a)({ theme: t.theme }, t.sx))),
                c(t.sx, [e.filterProps])
              )
            : r;
        };
        return (
          (t.propTypes = {}),
          (t.filterProps = ["css", "sx"].concat(Object(n.a)(e.filterProps))),
          t
        );
      }
      var l = i;
      var u = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = function (e) {
            return t.reduce(function (t, r) {
              var n = r(e);
              return n ? Object(o.a)(t, n) : t;
            }, {});
          };
          return (
            (n.propTypes = {}),
            (n.filterProps = t.reduce(function (e, t) {
              return e.concat(t.filterProps);
            }, [])),
            n
          );
        },
        s = r(119),
        p = r(295);
      function m(e, t) {
        return t && "string" === typeof t
          ? t.split(".").reduce(function (e, t) {
              return e && e[t] ? e[t] : null;
            }, e)
          : null;
      }
      var f = function (e) {
        var t = e.prop,
          r = e.cssProperty,
          n = void 0 === r ? e.prop : r,
          a = e.themeKey,
          o = e.transform,
          c = function (e) {
            if (null == e[t]) return null;
            var r = e[t],
              c = m(e.theme, a) || {};
            return Object(p.a)(e, r, function (e) {
              var t;
              return (
                "function" === typeof c
                  ? (t = c(e))
                  : Array.isArray(c)
                  ? (t = c[e] || e)
                  : ((t = m(c, e) || e), o && (t = o(t))),
                !1 === n ? t : Object(s.a)({}, n, t)
              );
            });
          };
        return (c.propTypes = {}), (c.filterProps = [t]), c;
      };
      function d(e) {
        return "number" !== typeof e ? e : "".concat(e, "px solid");
      }
      var h = u(
          f({ prop: "border", themeKey: "borders", transform: d }),
          f({ prop: "borderTop", themeKey: "borders", transform: d }),
          f({ prop: "borderRight", themeKey: "borders", transform: d }),
          f({ prop: "borderBottom", themeKey: "borders", transform: d }),
          f({ prop: "borderLeft", themeKey: "borders", transform: d }),
          f({ prop: "borderColor", themeKey: "palette" }),
          f({ prop: "borderRadius", themeKey: "shape" })
        ),
        b = u(
          f({
            prop: "displayPrint",
            cssProperty: !1,
            transform: function (e) {
              return { "@media print": { display: e } };
            },
          }),
          f({ prop: "display" }),
          f({ prop: "overflow" }),
          f({ prop: "textOverflow" }),
          f({ prop: "visibility" }),
          f({ prop: "whiteSpace" })
        ),
        E = u(
          f({ prop: "flexBasis" }),
          f({ prop: "flexDirection" }),
          f({ prop: "flexWrap" }),
          f({ prop: "justifyContent" }),
          f({ prop: "alignItems" }),
          f({ prop: "alignContent" }),
          f({ prop: "order" }),
          f({ prop: "flex" }),
          f({ prop: "flexGrow" }),
          f({ prop: "flexShrink" }),
          f({ prop: "alignSelf" }),
          f({ prop: "justifyItems" }),
          f({ prop: "justifySelf" })
        ),
        v = u(
          f({ prop: "gridGap" }),
          f({ prop: "gridColumnGap" }),
          f({ prop: "gridRowGap" }),
          f({ prop: "gridColumn" }),
          f({ prop: "gridRow" }),
          f({ prop: "gridAutoFlow" }),
          f({ prop: "gridAutoColumns" }),
          f({ prop: "gridAutoRows" }),
          f({ prop: "gridTemplateColumns" }),
          f({ prop: "gridTemplateRows" }),
          f({ prop: "gridTemplateAreas" }),
          f({ prop: "gridArea" })
        ),
        y = u(
          f({ prop: "position" }),
          f({ prop: "zIndex", themeKey: "zIndex" }),
          f({ prop: "top" }),
          f({ prop: "right" }),
          f({ prop: "bottom" }),
          f({ prop: "left" })
        ),
        g = u(
          f({ prop: "color", themeKey: "palette" }),
          f({
            prop: "bgcolor",
            cssProperty: "backgroundColor",
            themeKey: "palette",
          })
        ),
        O = f({ prop: "boxShadow", themeKey: "shadows" });
      function j(e) {
        return e <= 1 ? "".concat(100 * e, "%") : e;
      }
      var x = f({ prop: "width", transform: j }),
        w = f({ prop: "maxWidth", transform: j }),
        N = f({ prop: "minWidth", transform: j }),
        A = f({ prop: "height", transform: j }),
        R = f({ prop: "maxHeight", transform: j }),
        D = f({ prop: "minHeight", transform: j }),
        S =
          (f({ prop: "size", cssProperty: "width", transform: j }),
          f({ prop: "size", cssProperty: "height", transform: j }),
          u(x, w, N, A, R, D, f({ prop: "boxSizing" }))),
        W = r(908),
        C = u(
          f({ prop: "fontFamily", themeKey: "typography" }),
          f({ prop: "fontSize", themeKey: "typography" }),
          f({ prop: "fontStyle", themeKey: "typography" }),
          f({ prop: "fontWeight", themeKey: "typography" }),
          f({ prop: "letterSpacing" }),
          f({ prop: "lineHeight" }),
          f({ prop: "textAlign" })
        ),
        k = r(44),
        P = r(0),
        X = r.n(P),
        I = r(281),
        T = r(87),
        L = r.n(T),
        H = r(907);
      function B(e, t) {
        var r = {};
        return (
          Object.keys(e).forEach(function (n) {
            -1 === t.indexOf(n) && (r[n] = e[n]);
          }),
          r
        );
      }
      var M = r(287),
        K = function (e) {
          var t = (function (e) {
            return function (t) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = r.name,
                o = Object(k.a)(r, ["name"]);
              var c,
                i = n,
                l =
                  "function" === typeof t
                    ? function (e) {
                        return {
                          root: function (r) {
                            return t(Object(a.a)({ theme: e }, r));
                          },
                        };
                      }
                    : { root: t },
                u = Object(H.a)(
                  l,
                  Object(a.a)(
                    {
                      Component: e,
                      name: n || e.displayName,
                      classNamePrefix: i,
                    },
                    o
                  )
                );
              t.filterProps && ((c = t.filterProps), delete t.filterProps),
                t.propTypes && (t.propTypes, delete t.propTypes);
              var s = X.a.forwardRef(function (t, r) {
                var n = t.children,
                  o = t.className,
                  i = t.clone,
                  l = t.component,
                  s = Object(k.a)(t, [
                    "children",
                    "className",
                    "clone",
                    "component",
                  ]),
                  p = u(t),
                  m = Object(I.default)(p.root, o),
                  f = s;
                if ((c && (f = B(f, c)), i))
                  return X.a.cloneElement(
                    n,
                    Object(a.a)(
                      { className: Object(I.default)(n.props.className, m) },
                      f
                    )
                  );
                if ("function" === typeof n)
                  return n(Object(a.a)({ className: m }, f));
                var d = l || e;
                return X.a.createElement(
                  d,
                  Object(a.a)({ ref: r, className: m }, f),
                  n
                );
              });
              return L()(s, e), s;
            };
          })(e);
          return function (e, r) {
            return t(e, Object(a.a)({ defaultTheme: M.a }, r));
          };
        },
        z = l(u(h, b, E, v, y, g, O, S, W.b, C)),
        F = K("div")(z, { name: "MuiBox" });
      t.a = F;
    },
    1190: function (e, t, r) {
      "use strict";
      var n = r(6),
        a = r(44),
        o = r(0),
        c = r(281),
        i = r(282),
        l = o.forwardRef(function (e, t) {
          var r = e.classes,
            i = e.className,
            l = e.component,
            u = void 0 === l ? "div" : l,
            s = Object(a.a)(e, ["classes", "className", "component"]);
          return o.createElement(
            u,
            Object(n.a)({ className: Object(c.default)(r.root, i), ref: t }, s)
          );
        });
      t.a = Object(i.a)(
        { root: { padding: 16, "&:last-child": { paddingBottom: 24 } } },
        { name: "MuiCardContent" }
      )(l);
    },
    1197: function (e, t, r) {
      "use strict";
      var n = r(0),
        a = r.n(n),
        o = r(918),
        c = r(919),
        i = r(1092);
      t.a = function () {
        return a.a.createElement(
          o.a,
          null,
          a.a.createElement(c.a, { text: "WRAP" }),
          a.a.createElement(i.a, null)
        );
      };
    },
    2140: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return B;
        });
      var n,
        a,
        o = r(26),
        c = r(77),
        i = r(43),
        l = r(0),
        u = r.n(l),
        s = r(68),
        p = r(37),
        m = r(2106),
        f = r(1180),
        d = r(2112),
        h = r(2109),
        b = r(934),
        E = r(918),
        v = r(1014),
        y = r(919),
        g = r(925),
        O = r(34),
        j = r(35),
        x = function (e) {
          var t = e.max,
            r = e.decimals,
            n = e.onConfirm,
            a = (e.onDismiss, Object(l.useState)("")),
            c = Object(o.a)(a, 2),
            i = c[0],
            s = c[1],
            p = Object(l.useMemo)(
              function () {
                return Object(j.b)(t, r, !1);
              },
              [t, r]
            ),
            m = Object(l.useCallback)(
              function (e) {
                s(e.currentTarget.value);
              },
              [s]
            ),
            f = Object(l.useCallback)(
              function () {
                s(p);
              },
              [p, s]
            );
          return u.a.createElement(
            E.a,
            null,
            u.a.createElement(y.a, { text: "Deposit dexIRA and dexSHARE" }),
            u.a.createElement(g.a, {
              value: i,
              onSelectMax: f,
              onChange: m,
              max: p,
              symbol: "WDEX",
            }),
            u.a.createElement(
              v.a,
              null,
              O.b.preLaunch
                ? u.a.createElement(
                    h.a,
                    { className: "shinyButtonSecondary", disabled: !0 },
                    "Coming Soon!"
                  )
                : u.a.createElement(
                    h.a,
                    {
                      className: "shinyButtonSecondary",
                      onClick: function () {
                        return n(i);
                      },
                    },
                    "Confirm"
                  )
            )
          );
        },
        w =
          (r(1197),
          function (e) {
            var t = e.onConfirm,
              r = (e.onDismiss, e.max),
              n = e.tokenName,
              a = void 0 === n ? "" : n,
              c = e.decimals,
              i = void 0 === c ? 18 : c,
              s = Object(l.useState)(""),
              p = Object(o.a)(s, 2),
              m = p[0],
              f = p[1],
              d = Object(l.useMemo)(
                function () {
                  return Object(j.b)(r, i, !1);
                },
                [r, i]
              ),
              b = Object(l.useCallback)(
                function (e) {
                  f(e.currentTarget.value);
                },
                [f]
              ),
              O = Object(l.useCallback)(
                function () {
                  f(d);
                },
                [d, f]
              );
            return u.a.createElement(
              E.a,
              null,
              u.a.createElement(y.a, { text: "Withdraw ".concat(a) }),
              u.a.createElement(g.a, {
                onSelectMax: O,
                onChange: b,
                value: m,
                max: d,
                symbol: a,
              }),
              u.a.createElement(
                v.a,
                null,
                u.a.createElement(
                  h.a,
                  {
                    className: "shinyButtonSecondary",
                    onClick: function () {
                      return t(m);
                    },
                  },
                  "Confirm"
                )
              )
            );
          }),
        N = r(930),
        A = r(1055),
        R = r(1066),
        D = r(1064),
        S = r(1065),
        W = r(926),
        C = r(1003),
        k = r(280),
        P = r(928),
        X = r(923),
        I = r.n(X),
        T = Object(p.c)(
          n ||
            (n = Object(i.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          I.a
        ),
        L = Object(m.a)(function (e) {
          return {
            gridItem: Object(c.a)({ height: "100%" }, e.breakpoints.up("md"), {
              height: "90px",
            }),
            inactive: {
              background: "#2989c3",
              padding: "0 50px 50px !important",
              textAlign: "center",
              borderRadius: "5px",
            },
            active: {
              padding: "0 50px 50px !important",
              textAlign: "center",
              borderRadius: "5px",
            },
            typeWrap: {
              fontSize: "32px",
              fontWeight: 600,
              color: "#ffffff",
              paddingTop: "10px",
            },
            title: {
              color: "rgb(20, 33, 61)",
              fontSize: "32px",
              fontWeight: 600,
            },
            text: {
              color: "rgb(255, 255, 255)",
              marginTop: "8px",
              lineHeight: "25px",
              marginBottom: "50px",
            },
          };
        }),
        H = p.e.hr(
          a ||
            (a = Object(i.a)([
              "\n  border: none;\n  border-top: 2px dotted white;\n",
            ]))
        ),
        B = function () {
          var e = Object(k.a)(),
            t = Object(R.a)(),
            r = Object(l.useMemo)(
              function () {
                return Object(j.a)(t, e.WDEX.decimal);
              },
              [t]
            ),
            n = L(),
            a = Object(s.c)().account,
            c = Object(C.b)(e.DEXIRA, e.WDEX.address, [e]),
            i = Object(o.a)(c, 2),
            p = i[0],
            m = i[1],
            E = Object(C.b)(e.DEXSHARE, e.WDEX.address, [e]),
            v = Object(o.a)(E, 2),
            y = v[0],
            g = v[1],
            O = Object(P.a)(e.DEXSHARE),
            X = Object(l.useMemo)(
              function () {
                return Object(j.a)(O, e.DEXSHARE.decimal);
              },
              [O]
            ),
            I = Object(P.a)(e.DEXIRA),
            B = Object(l.useMemo)(
              function () {
                return Object(j.a)(I, e.DEXIRA.decimal);
              },
              [I]
            ),
            M = Object(P.a)(e.WDEX),
            K = Object(l.useMemo)(
              function () {
                return Object(j.a)(M, e.WDEX.decimal);
              },
              [M]
            ),
            z = Object(D.a)().onWrap,
            F = Object(S.a)(),
            G = Object(S.a)("WdexOld"),
            _ = Object(P.a)(e.OLDWDEX),
            U = Object(l.useMemo)(
              function () {
                return Object(j.a)(_, e.OLDWDEX.decimal);
              },
              [_]
            ),
            V = Object(W.a)(
              u.a.createElement(x, {
                max: t,
                decimals: e.WDEX.decimal,
                onConfirm: function (e) {
                  Number(e) <= 0 || isNaN(Number(e)) || (z(e), q());
                },
              })
            ),
            J = Object(o.a)(V, 2),
            Y = J[0],
            q = J[1],
            Q = Object(W.a)(
              u.a.createElement(w, {
                max: M,
                decimals: e.WDEX.decimal,
                onConfirm: function (e) {
                  Number(e) <= 0 || isNaN(Number(e)) || (F(e), ee());
                },
              })
            ),
            Z = Object(o.a)(Q, 2),
            $ = Z[0],
            ee = Z[1],
            te = Object(W.a)(
              u.a.createElement(w, {
                max: _,
                decimals: e.OLDWDEX.decimal,
                onConfirm: function (e) {
                  Number(e) <= 0 || isNaN(Number(e)) || (G(e), ae());
                },
              })
            ),
            re = Object(o.a)(te, 2),
            ne = re[0],
            ae = re[1];
          return u.a.createElement(
            b.a,
            null,
            u.a.createElement(T, null),
            u.a.createElement(
              f.a,
              { mt: 5 },
              u.a.createElement(
                d.a,
                { container: !0, justify: "center", spacing: 3 },
                u.a.createElement(
                  d.a,
                  { item: !0, xs: 12, sm: 12 },
                  u.a.createElement("h3", { className: n.title }, "WRAP"),
                  u.a.createElement(
                    "div",
                    { className: n.text },
                    u.a.createElement(
                      "div",
                      null,
                      "Wrap your deFIRA and deFiSHARE tokens together. Then head over to our farms and deposit into the deFIRA/deFiSHARE farm to earn even more rewards."
                    ),
                    u.a.createElement(
                      "div",
                      null,
                      "Don\u2019t forget to come back and claim your deFIRA rewards here!"
                    )
                  )
                ),
                u.a.createElement(
                  d.a,
                  { item: !0, xs: 12, sm: 6, className: n.active },
                  u.a.createElement(
                    "div",
                    { className: n.typeWrap },
                    "UPDATED WRAPPER"
                  ),
                  u.a.createElement(
                    f.a,
                    null,
                    u.a.createElement(
                      A.c,
                      { symbol: "WDEX", logoSize: 50 },
                      u.a.createElement(
                        A.b,
                        null,
                        u.a.createElement(
                          "div",
                          { style: { height: "130px" } },
                          u.a.createElement(
                            "h3",
                            {
                              style: {
                                textAlign: "center",
                                fontSize: 32,
                                lineHeight: 1.1,
                                top: 30,
                                position: "relative",
                              },
                              "data-fontsize": "32",
                              "data-lineheight": "35.2px",
                            },
                            u.a.createElement(
                              "span",
                              { style: { color: "#8b67d3" } },
                              "WRAP"
                            ),
                            u.a.createElement("br", null),
                            u.a.createElement(
                              "span",
                              { style: { color: "#8b67d3" } },
                              "DEFIRA/DEFISHARE"
                            )
                          )
                        ),
                        u.a.createElement("div", { style: { height: "50px" } })
                      ),
                      u.a.createElement(
                        A.a,
                        null,
                        u.a.createElement(
                          "div",
                          { style: { height: "8em" } },
                          u.a.createElement(
                            "table",
                            { style: { width: "100%" } },
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement("td", null, "deFIRA"),
                              u.a.createElement("td", null, B)
                            ),
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement("td", null, "DefiSHARE"),
                              u.a.createElement("td", null, X)
                            ),
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement("td", null, "wDEFi-SHARE"),
                              u.a.createElement("td", null, K)
                            ),
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement(
                                "td",
                                null,
                                "Wrappable wDEFI-SHARE"
                              ),
                              u.a.createElement("td", null, r)
                            )
                          )
                        ),
                        u.a.createElement(H, null),
                        a
                          ? u.a.createElement(
                              u.a.Fragment,
                              null,
                              p !== C.a.APPROVED || y !== C.a.APPROVED
                                ? u.a.createElement(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginTop: "10px",
                                        gap: "10px",
                                      },
                                    },
                                    p !== C.a.APPROVED
                                      ? u.a.createElement(
                                          d.a,
                                          { item: !0, xs: 12, md: 6, lg: 5 },
                                          u.a.createElement(
                                            h.a,
                                            {
                                              disabled:
                                                p === C.a.PENDING ||
                                                p === C.a.UNKNOWN,
                                              onClick: m,
                                              className:
                                                p === C.a.PENDING ||
                                                p === C.a.UNKNOWN
                                                  ? "shinyButtonDisabled"
                                                  : "shinyButton",
                                              style: {
                                                width: 160,
                                                fontSize: 14,
                                              },
                                            },
                                            u.a.createElement(
                                              "span",
                                              { style: { fontSize: 14 } },
                                              "Approve dexIRA"
                                            )
                                          )
                                        )
                                      : u.a.createElement(u.a.Fragment, null),
                                    y !== C.a.APPROVED
                                      ? u.a.createElement(
                                          d.a,
                                          { item: !0, xs: 12, md: 6, lg: 5 },
                                          u.a.createElement(
                                            h.a,
                                            {
                                              disabled:
                                                y === C.a.PENDING ||
                                                y === C.a.UNKNOWN,
                                              onClick: g,
                                              className:
                                                y === C.a.PENDING ||
                                                y === C.a.UNKNOWN
                                                  ? "shinyButtonDisabled"
                                                  : "shinyButton",
                                              style: { width: 160 },
                                            },
                                            u.a.createElement(
                                              "span",
                                              { style: { fontSize: 14 } },
                                              " ",
                                              "Approve dexSHARE"
                                            )
                                          )
                                        )
                                      : u.a.createElement(u.a.Fragment, null)
                                  )
                                : u.a.createElement(
                                    u.a.Fragment,
                                    null,
                                    u.a.createElement(
                                      h.a,
                                      {
                                        className: "shinyButton",
                                        style: { marginRight: 8 },
                                        onClick: Y,
                                      },
                                      "+"
                                    ),
                                    u.a.createElement(
                                      h.a,
                                      { className: "shinyButton", onClick: $ },
                                      "-"
                                    )
                                  )
                            )
                          : u.a.createElement(N.a, null)
                      )
                    )
                  )
                ),
                u.a.createElement(
                  d.a,
                  { item: !0, xs: 12, sm: 6, className: n.inactive },
                  u.a.createElement(
                    "div",
                    { className: n.typeWrap },
                    "INACTIVE WRAPPER"
                  ),
                  u.a.createElement(
                    f.a,
                    null,
                    u.a.createElement(
                      A.c,
                      { symbol: "WDEX", logoSize: 50 },
                      u.a.createElement(
                        A.b,
                        null,
                        u.a.createElement(
                          "div",
                          { style: { height: "130px" } },
                          u.a.createElement(
                            "h3",
                            {
                              style: {
                                textAlign: "center",
                                fontSize: 32,
                                lineHeight: 1.1,
                                top: 30,
                                position: "relative",
                              },
                              "data-fontsize": "32",
                              "data-lineheight": "35.2px",
                            },
                            u.a.createElement(
                              "span",
                              { style: { color: "#8b67d3" } },
                              "WRAP"
                            ),
                            u.a.createElement("br", null),
                            u.a.createElement(
                              "span",
                              { style: { color: "#8b67d3" } },
                              "DEXIRA/DEXSHARE"
                            )
                          )
                        ),
                        u.a.createElement("div", { style: { height: "50px" } })
                      ),
                      u.a.createElement(
                        A.a,
                        null,
                        u.a.createElement(
                          "div",
                          { style: { height: "8em" } },
                          u.a.createElement(
                            "table",
                            { style: { width: "100%" } },
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement("td", null, "dexIRA"),
                              u.a.createElement("td", null, B)
                            ),
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement("td", null, "dexSHARE"),
                              u.a.createElement("td", null, X)
                            ),
                            u.a.createElement(
                              "tr",
                              null,
                              u.a.createElement("td", null, "wDEX-SHARE"),
                              u.a.createElement("td", null, U)
                            )
                          )
                        ),
                        u.a.createElement(H, null),
                        a
                          ? u.a.createElement(
                              h.a,
                              { className: "shinyButton", onClick: ne },
                              "-"
                            )
                          : u.a.createElement(N.a, null)
                      )
                    )
                  )
                )
              )
            )
          );
        };
    },
  },
]);
