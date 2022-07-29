/*!For license information please see 5.d1ef7450.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [5],
  {
    1003: function (A, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return s;
      });
      var n = e(11),
        r = e(117),
        o = e(14),
        a = e(0),
        i = e(947),
        c = e(1019);
      function u() {
        u = function () {
          return A;
        };
        var A = {},
          t = Object.prototype,
          e = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function i(A, t, e) {
          return (
            Object.defineProperty(A, t, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            A[t]
          );
        }
        try {
          i({}, "");
        } catch (Y) {
          i = function (A, t, e) {
            return (A[t] = e);
          };
        }
        function c(A, t, e, n) {
          var r = t && t.prototype instanceof E ? t : E,
            o = Object.create(r.prototype),
            a = new M(n || []);
          return (
            (o._invoke = (function (A, t, e) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return G();
                }
                for (e.method = r, e.arg = o; ; ) {
                  var a = e.delegate;
                  if (a) {
                    var i = m(a, e);
                    if (i) {
                      if (i === l) continue;
                      return i;
                    }
                  }
                  if ("next" === e.method) e.sent = e._sent = e.arg;
                  else if ("throw" === e.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), e.arg);
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  n = "executing";
                  var c = s(A, t, e);
                  if ("normal" === c.type) {
                    if (
                      ((n = e.done ? "completed" : "suspendedYield"),
                      c.arg === l)
                    )
                      continue;
                    return { value: c.arg, done: e.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (e.method = "throw"), (e.arg = c.arg));
                }
              };
            })(A, e, a)),
            o
          );
        }
        function s(A, t, e) {
          try {
            return { type: "normal", arg: A.call(t, e) };
          } catch (Y) {
            return { type: "throw", arg: Y };
          }
        }
        A.wrap = c;
        var l = {};
        function E() {}
        function h() {}
        function f() {}
        var B = {};
        i(B, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          d = g && g(g(b([])));
        d && d !== t && e.call(d, r) && (B = d);
        var p = (f.prototype = E.prototype = Object.create(B));
        function w(A) {
          ["next", "throw", "return"].forEach(function (t) {
            i(A, t, function (A) {
              return this._invoke(t, A);
            });
          });
        }
        function v(A, t) {
          var n;
          this._invoke = function (r, o) {
            function a() {
              return new t(function (n, a) {
                !(function n(r, o, a, i) {
                  var c = s(A[r], A, o);
                  if ("throw" !== c.type) {
                    var u = c.arg,
                      l = u.value;
                    return l && "object" == typeof l && e.call(l, "__await")
                      ? t.resolve(l.__await).then(
                          function (A) {
                            n("next", A, a, i);
                          },
                          function (A) {
                            n("throw", A, a, i);
                          }
                        )
                      : t.resolve(l).then(
                          function (A) {
                            (u.value = A), a(u);
                          },
                          function (A) {
                            return n("throw", A, a, i);
                          }
                        );
                  }
                  i(c.arg);
                })(r, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function m(A, t) {
          var e = A.iterator[t.method];
          if (void 0 === e) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                A.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                m(A, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = s(e, A.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[A.resultName] = r.value),
                (t.next = A.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function Q(A) {
          var t = { tryLoc: A[0] };
          1 in A && (t.catchLoc = A[1]),
            2 in A && ((t.finallyLoc = A[2]), (t.afterLoc = A[3])),
            this.tryEntries.push(t);
        }
        function y(A) {
          var t = A.completion || {};
          (t.type = "normal"), delete t.arg, (A.completion = t);
        }
        function M(A) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            A.forEach(Q, this),
            this.reset(!0);
        }
        function b(A) {
          if (A) {
            var t = A[r];
            if (t) return t.call(A);
            if ("function" == typeof A.next) return A;
            if (!isNaN(A.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < A.length; )
                    if (e.call(A, n)) return (t.value = A[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: G };
        }
        function G() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = f),
          i(p, "constructor", f),
          i(f, "constructor", h),
          (h.displayName = i(f, a, "GeneratorFunction")),
          (A.isGeneratorFunction = function (A) {
            var t = "function" == typeof A && A.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (A.mark = function (A) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(A, f)
                : ((A.__proto__ = f), i(A, a, "GeneratorFunction")),
              (A.prototype = Object.create(p)),
              A
            );
          }),
          (A.awrap = function (A) {
            return { __await: A };
          }),
          w(v.prototype),
          i(v.prototype, o, function () {
            return this;
          }),
          (A.AsyncIterator = v),
          (A.async = function (t, e, n, r, o) {
            void 0 === o && (o = Promise);
            var a = new v(c(t, e, n, r), o);
            return A.isGeneratorFunction(e)
              ? a
              : a.next().then(function (A) {
                  return A.done ? A.value : a.next();
                });
          }),
          w(p),
          i(p, a, "Generator"),
          i(p, r, function () {
            return this;
          }),
          i(p, "toString", function () {
            return "[object Generator]";
          }),
          (A.keys = function (A) {
            var t = [];
            for (var e in A) t.push(e);
            return (
              t.reverse(),
              function e() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in A) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (A.values = b),
          (M.prototype = {
            constructor: M,
            reset: function (A) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(y),
                !A)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    e.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var A = this.tryEntries[0].completion;
              if ("throw" === A.type) throw A.arg;
              return this.rval;
            },
            dispatchException: function (A) {
              if (this.done) throw A;
              var t = this;
              function n(e, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = A),
                  (t.next = e),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = e.call(o, "catchLoc"),
                    c = e.call(o, "finallyLoc");
                  if (i && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (A, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  e.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === A || "continue" === A) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = A),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(a)
              );
            },
            complete: function (A, t) {
              if ("throw" === A.type) throw A.arg;
              return (
                "break" === A.type || "continue" === A.type
                  ? (this.next = A.arg)
                  : "return" === A.type
                  ? ((this.rval = this.arg = A.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === A.type && t && (this.next = t),
                l
              );
            },
            finish: function (A) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var e = this.tryEntries[t];
                if (e.finallyLoc === A)
                  return this.complete(e.completion, e.afterLoc), y(e), l;
              }
            },
            catch: function (A) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var e = this.tryEntries[t];
                if (e.tryLoc === A) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    y(e);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (A, t, e) {
              return (
                (this.delegate = { iterator: b(A), resultName: t, nextLoc: e }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          A
        );
      }
      var s,
        l = r.a.constants.MaxUint256,
        E = o.a.from("1000000000000000000000000");
      !(function (A) {
        (A[(A.UNKNOWN = 0)] = "UNKNOWN"),
          (A[(A.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (A[(A.PENDING = 2)] = "PENDING"),
          (A[(A.APPROVED = 3)] = "APPROVED");
      })(s || (s = {})),
        (t.b = function (A, t) {
          var e = Object(i.a)(A.address, t),
            r = Object(c.a)(A, t, e),
            o = Object(a.useMemo)(
              function () {
                return r
                  ? r.lt(E)
                    ? e
                      ? s.PENDING
                      : s.NOT_APPROVED
                    : s.APPROVED
                  : s.UNKNOWN;
              },
              [r, e]
            ),
            h = Object(i.b)(),
            f = Object(a.useCallback)(
              Object(n.a)(
                u().mark(function e() {
                  var n;
                  return u().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o === s.NOT_APPROVED) {
                            e.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            e.abrupt("return")
                          );
                        case 3:
                          return (e.next = 5), A.approve(t, l);
                        case 5:
                          (n = e.sent),
                            h(n, {
                              summary: "Approve ".concat(A.symbol),
                              approval: { tokenAddress: A.address, spender: t },
                            });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [o, A, t, h]
            );
          return [o, f];
        });
    },
    1014: function (A, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return h;
      });
      var n,
        r,
        o,
        a = e(43),
        i = e(0),
        c = e.n(i),
        u = e(37),
        s = u.e.div(
          n ||
            (n = Object(a.a)([
              "\n  align-items: center;\n  background-color: ",
              "00;\n  display: flex;\n  height: 96px;\n  margin: ",
              "px ",
              "px\n    ",
              "px;\n  padding: 0 ",
              "px;\n",
            ])),
          function (A) {
            return A.theme.color.grey[100];
          },
          function (A) {
            return A.theme.spacing[4];
          },
          function (A) {
            return -A.theme.spacing[4];
          },
          function (A) {
            return -A.theme.spacing[4];
          },
          function (A) {
            return A.theme.spacing[4];
          }
        ),
        l = u.e.div(r || (r = Object(a.a)(["\n  flex: 1;\n"]))),
        E = u.e.div(
          o || (o = Object(a.a)(["\n  width: ", "px;\n"])),
          function (A) {
            return A.theme.spacing[4];
          }
        ),
        h = function (A) {
          var t = A.children,
            e = c.a.Children.toArray(t).length;
          return c.a.createElement(
            s,
            null,
            c.a.Children.map(t, function (A, t) {
              return c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(l, null, A),
                t < e - 1 && c.a.createElement(E, null)
              );
            })
          );
        };
    },
    1019: function (A, t, e) {
      "use strict";
      var n = e(11),
        r = e(26),
        o = e(0),
        a = e(68);
      function i() {
        i = function () {
          return A;
        };
        var A = {},
          t = Object.prototype,
          e = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.asyncIterator || "@@asyncIterator",
          a = n.toStringTag || "@@toStringTag";
        function c(A, t, e) {
          return (
            Object.defineProperty(A, t, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            A[t]
          );
        }
        try {
          c({}, "");
        } catch (Y) {
          c = function (A, t, e) {
            return (A[t] = e);
          };
        }
        function u(A, t, e, n) {
          var r = t && t.prototype instanceof E ? t : E,
            o = Object.create(r.prototype),
            a = new M(n || []);
          return (
            (o._invoke = (function (A, t, e) {
              var n = "suspendedStart";
              return function (r, o) {
                if ("executing" === n)
                  throw new Error("Generator is already running");
                if ("completed" === n) {
                  if ("throw" === r) throw o;
                  return G();
                }
                for (e.method = r, e.arg = o; ; ) {
                  var a = e.delegate;
                  if (a) {
                    var i = m(a, e);
                    if (i) {
                      if (i === l) continue;
                      return i;
                    }
                  }
                  if ("next" === e.method) e.sent = e._sent = e.arg;
                  else if ("throw" === e.method) {
                    if ("suspendedStart" === n)
                      throw ((n = "completed"), e.arg);
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  n = "executing";
                  var c = s(A, t, e);
                  if ("normal" === c.type) {
                    if (
                      ((n = e.done ? "completed" : "suspendedYield"),
                      c.arg === l)
                    )
                      continue;
                    return { value: c.arg, done: e.done };
                  }
                  "throw" === c.type &&
                    ((n = "completed"), (e.method = "throw"), (e.arg = c.arg));
                }
              };
            })(A, e, a)),
            o
          );
        }
        function s(A, t, e) {
          try {
            return { type: "normal", arg: A.call(t, e) };
          } catch (Y) {
            return { type: "throw", arg: Y };
          }
        }
        A.wrap = u;
        var l = {};
        function E() {}
        function h() {}
        function f() {}
        var B = {};
        c(B, r, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          d = g && g(g(b([])));
        d && d !== t && e.call(d, r) && (B = d);
        var p = (f.prototype = E.prototype = Object.create(B));
        function w(A) {
          ["next", "throw", "return"].forEach(function (t) {
            c(A, t, function (A) {
              return this._invoke(t, A);
            });
          });
        }
        function v(A, t) {
          var n;
          this._invoke = function (r, o) {
            function a() {
              return new t(function (n, a) {
                !(function n(r, o, a, i) {
                  var c = s(A[r], A, o);
                  if ("throw" !== c.type) {
                    var u = c.arg,
                      l = u.value;
                    return l && "object" == typeof l && e.call(l, "__await")
                      ? t.resolve(l.__await).then(
                          function (A) {
                            n("next", A, a, i);
                          },
                          function (A) {
                            n("throw", A, a, i);
                          }
                        )
                      : t.resolve(l).then(
                          function (A) {
                            (u.value = A), a(u);
                          },
                          function (A) {
                            return n("throw", A, a, i);
                          }
                        );
                  }
                  i(c.arg);
                })(r, o, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function m(A, t) {
          var e = A.iterator[t.method];
          if (void 0 === e) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                A.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                m(A, t),
                "throw" === t.method)
              )
                return l;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var n = s(e, A.iterator, t.arg);
          if ("throw" === n.type)
            return (
              (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
            );
          var r = n.arg;
          return r
            ? r.done
              ? ((t[A.resultName] = r.value),
                (t.next = A.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : r
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function Q(A) {
          var t = { tryLoc: A[0] };
          1 in A && (t.catchLoc = A[1]),
            2 in A && ((t.finallyLoc = A[2]), (t.afterLoc = A[3])),
            this.tryEntries.push(t);
        }
        function y(A) {
          var t = A.completion || {};
          (t.type = "normal"), delete t.arg, (A.completion = t);
        }
        function M(A) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            A.forEach(Q, this),
            this.reset(!0);
        }
        function b(A) {
          if (A) {
            var t = A[r];
            if (t) return t.call(A);
            if ("function" == typeof A.next) return A;
            if (!isNaN(A.length)) {
              var n = -1,
                o = function t() {
                  for (; ++n < A.length; )
                    if (e.call(A, n)) return (t.value = A[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: G };
        }
        function G() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = f),
          c(p, "constructor", f),
          c(f, "constructor", h),
          (h.displayName = c(f, a, "GeneratorFunction")),
          (A.isGeneratorFunction = function (A) {
            var t = "function" == typeof A && A.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (A.mark = function (A) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(A, f)
                : ((A.__proto__ = f), c(A, a, "GeneratorFunction")),
              (A.prototype = Object.create(p)),
              A
            );
          }),
          (A.awrap = function (A) {
            return { __await: A };
          }),
          w(v.prototype),
          c(v.prototype, o, function () {
            return this;
          }),
          (A.AsyncIterator = v),
          (A.async = function (t, e, n, r, o) {
            void 0 === o && (o = Promise);
            var a = new v(u(t, e, n, r), o);
            return A.isGeneratorFunction(e)
              ? a
              : a.next().then(function (A) {
                  return A.done ? A.value : a.next();
                });
          }),
          w(p),
          c(p, a, "Generator"),
          c(p, r, function () {
            return this;
          }),
          c(p, "toString", function () {
            return "[object Generator]";
          }),
          (A.keys = function (A) {
            var t = [];
            for (var e in A) t.push(e);
            return (
              t.reverse(),
              function e() {
                for (; t.length; ) {
                  var n = t.pop();
                  if (n in A) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (A.values = b),
          (M.prototype = {
            constructor: M,
            reset: function (A) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(y),
                !A)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    e.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var A = this.tryEntries[0].completion;
              if ("throw" === A.type) throw A.arg;
              return this.rval;
            },
            dispatchException: function (A) {
              if (this.done) throw A;
              var t = this;
              function n(e, n) {
                return (
                  (a.type = "throw"),
                  (a.arg = A),
                  (t.next = e),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  a = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = e.call(o, "catchLoc"),
                    c = e.call(o, "finallyLoc");
                  if (i && c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (A, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  e.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === A || "continue" === A) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = A),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(a)
              );
            },
            complete: function (A, t) {
              if ("throw" === A.type) throw A.arg;
              return (
                "break" === A.type || "continue" === A.type
                  ? (this.next = A.arg)
                  : "return" === A.type
                  ? ((this.rval = this.arg = A.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === A.type && t && (this.next = t),
                l
              );
            },
            finish: function (A) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var e = this.tryEntries[t];
                if (e.finallyLoc === A)
                  return this.complete(e.completion, e.afterLoc), y(e), l;
              }
            },
            catch: function (A) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var e = this.tryEntries[t];
                if (e.tryLoc === A) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var r = n.arg;
                    y(e);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (A, t, e) {
              return (
                (this.delegate = { iterator: b(A), resultName: t, nextLoc: e }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          A
        );
      }
      t.a = function (A, t, e) {
        var c = Object(o.useState)(null),
          u = Object(r.a)(c, 2),
          s = u[0],
          l = u[1],
          E = Object(a.c)().account,
          h = Object(o.useCallback)(
            Object(n.a)(
              i().mark(function e() {
                var n;
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), A.allowance(E, t);
                      case 2:
                        (n = e.sent), l(n);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [E, t, A]
          );
        return (
          Object(o.useEffect)(
            function () {
              E &&
                t &&
                A &&
                h().catch(function (A) {
                  return console.error(
                    "Failed to fetch allowance: ".concat(A.stack)
                  );
                });
            },
            [E, t, A, e, h]
          ),
          s
        );
      };
    },
    1055: function (A, t, e) {
      "use strict";
      e.d(t, "c", function () {
        return w;
      }),
        e.d(t, "b", function () {
          return d;
        }),
        e.d(t, "a", function () {
          return p;
        });
      var n = e(4),
        r = e(5),
        o = e(9),
        a = e(10),
        i = e(0),
        c = e.n(i),
        u = e(1058),
        s = e(931),
        l = e(1134),
        E = e(1190),
        h = e(1099),
        f = e.n(h),
        B = e(1100),
        g = e.n(B),
        d =
          (e(34),
          (function (A) {
            Object(o.a)(e, A);
            var t = Object(a.a)(e);
            function e() {
              return Object(n.a)(this, e), t.apply(this, arguments);
            }
            return (
              Object(r.a)(e, [
                {
                  key: "render",
                  value: function () {
                    return c.a.createElement(
                      c.a.Fragment,
                      null,
                      this.props.children
                    );
                  },
                },
              ]),
              e
            );
          })(c.a.Component)),
        p = (function (A) {
          Object(o.a)(e, A);
          var t = Object(a.a)(e);
          function e() {
            return Object(n.a)(this, e), t.apply(this, arguments);
          }
          return (
            Object(r.a)(e, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    this.props.children
                  );
                },
              },
            ]),
            e
          );
        })(c.a.Component);
      var w = function (A) {
        var t,
          e,
          n = !1,
          r = [];
        return (
          c.a.Children.map(A.children, function (A) {
            A.type === p
              ? ((n = !0), r.push(A))
              : A.type === d && ((n = !0), (t = A));
          }),
          (e = n
            ? c.a.createElement(
                l.a,
                null,
                c.a.createElement(
                  E.a,
                  {
                    align: "center",
                    style: {
                      backgroundImage: "url(".concat(g.a, ")"),
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#8b67d3",
                      position: "relative",
                    },
                  },
                  t
                ),
                Object.values(r).map(function (A) {
                  return c.a.createElement(
                    E.a,
                    { align: "center", style: { background: "#8b67d3" } },
                    A
                  );
                })
              )
            : c.a.createElement(
                l.a,
                null,
                c.a.createElement(
                  E.a,
                  {
                    align: "center",
                    style: {
                      position: "relative",
                      backgroundImage: "url(".concat(f.a, ")"),
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPositionX: 0.5,
                      backgroundPositionY: 0.5,
                    },
                  },
                  A.children
                )
              )),
          c.a.createElement(
            "div",
            null,
            c.a.createElement(
              u.a,
              null,
              c.a.createElement(s.a, { symbol: A.symbol })
            ),
            e
          )
        );
      };
    },
    1058: function (A, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return u;
      });
      var n,
        r,
        o = e(43),
        a = e(0),
        i = e.n(a),
        c = e(37),
        u = function (A) {
          var t,
            e = A.children,
            a = A.vcenter;
          return (
            (t =
              a && a.valueOf()
                ? c.e.div(
                    n ||
                      (n = Object(o.a)([
                        "\n      font-size: 36px;\n      height: 100px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      margin: 0 auto ",
                        "px;\n      position:relative;",
                      ])),
                    function (A) {
                      return A.theme.spacing[3];
                    }
                  )
                : c.e.div(
                    r ||
                      (r = Object(o.a)([
                        "\n      font-size: 36px;\n      height: 100px;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      margin: 0 auto ",
                        "px;\n      position:relative;\n      bottom: -60px;\n      z-index: 1;\n      overflow: visible;",
                      ])),
                    function (A) {
                      return A.theme.spacing[3];
                    }
                  )),
            i.a.createElement(t, null, e)
          );
        };
    },
    1099: function (A, t, e) {
      A.exports = e.p + "static/media/envelope-card.299803ba.svg";
    },
    1100: function (A, t) {
      A.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABCYAAAIFCAYAAAAOQ/ydAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAHIRJREFUeNrs3f1540aSB+CGInAIcgQnR7ByBrMRWI7g7Ai8jGClCBaM4HgRLBzB6iJYbAbOANc9AC3NjGZEUQALH+/7PG2ObX2QRfkP/VzVVXVZAgAAAAhwpQQAAABAFMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAAAIQRTAAAAABhBBMAAABAGMEEAAAAEEYwAQAA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";
    },
    922: function (A, t, e) {
      "use strict";
      var n = e(0),
        r = e(947),
        o = e(125);
      t.a = function () {
        var A = Object(r.b)(),
          t = Object(o.b)();
        return Object(n.useCallback)(
          function (e, n) {
            e.then(function (t) {
              return A(t, { summary: n });
            }).catch(function (A) {
              if (!A.message.includes("User denied")) {
                var e = "Unable to "
                  .concat(n[0].toLowerCase())
                  .concat(n.slice(1));
                console.error("".concat(e, ": ").concat(A.message || A.stack)),
                  t({ error: { message: e, stack: A.message || A.stack } });
              }
            });
          },
          [t, A]
        );
      };
    },
    923: function (A, t, e) {
      A.exports = e.p + "static/media/background.a537c370.jpg";
    },
    925: function (A, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return w;
      });
      var n,
        r,
        o,
        a,
        i,
        c = e(43),
        u = e(0),
        s = e.n(u),
        l = e(37),
        E = e(1180),
        h = l.e.div(
          n ||
            (n = Object(c.a)([
              "\n  align-items: center;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  display: flex;\n  padding: 0 ",
              "px;\n  width: 100%;\n  box-sizing: border-box;\n",
            ])),
          function (A) {
            return A.theme.spacing[3];
          }
        ),
        f = l.e.input(
          r ||
            (r = Object(c.a)([
              "\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 45px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (A) {
            return A.theme.color.grey[600];
          }
        ),
        B = function (A) {
          var t = A.endAdornment,
            e = A.onChange,
            n = A.placeholder,
            r = A.startAdornment,
            o = A.value,
            a = A.disabled;
          return s.a.createElement(
            h,
            null,
            !!r && r,
            s.a.createElement(f, {
              placeholder: n,
              value: o,
              onChange: e,
              disabled: a,
            }),
            !!t && t
          );
        },
        g = l.e.button(
          o ||
            (o = Object(c.a)([
              "\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  padding: 5px 35px;\n  border-radius: 3px;\n  color: #FFFFFF;\n  font-weight: 700;\n  cursor: pointer;\n",
            ]))
        ),
        d = l.e.div(
          a ||
            (a = Object(c.a)([
              "\n  display: flex;\n  gap: 15px;\n  width: 100%;\n  \n  @media (max-width: 430px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        p = l.e.div(
          i ||
            (i = Object(c.a)([
              "\n  align-items: center;\n  margin-bottom: 10px;\n  color: #FFFFFF;\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 35px;\n",
            ]))
        ),
        w = function (A) {
          var t = A.max,
            e = A.symbol,
            n = A.onChange,
            r = A.onSelectMax,
            o = A.value,
            a = A.disabled,
            i = A.section,
            c = A.rightSection;
          return s.a.createElement(
            "div",
            null,
            s.a.createElement(
              p,
              null,
              s.a.createElement(
                E.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                },
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement("div", null, i),
                  "Balance: ",
                  t.toLocaleString(),
                  " ",
                  e
                ),
                s.a.createElement("div", null, c)
              )
            ),
            s.a.createElement(
              d,
              null,
              s.a.createElement(B, {
                onChange: n,
                placeholder: "0",
                value: o,
                disabled: a,
              }),
              s.a.createElement(g, { onClick: r }, "Max")
            )
          );
        };
    },
    947: function (A, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return i;
      }),
        e.d(t, "a", function () {
          return u;
        });
      var n = e(0),
        r = e(55),
        o = e(68),
        a = e(111);
      function i() {
        var A = Object(o.c)(),
          t = A.chainId,
          e = A.account,
          i = Object(r.c)();
        return Object(n.useCallback)(
          function (A) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.summary,
              o = n.approval;
            if (e && t) {
              var c = A.hash;
              if (!c) throw Error("No transaction hash found.");
              i(
                Object(a.a)({
                  hash: c,
                  from: e,
                  chainId: t,
                  approval: o,
                  summary: r,
                })
              );
            }
          },
          [i, t, e]
        );
      }
      function c() {
        var A,
          t = Object(o.c)().chainId,
          e = Object(r.d)(function (A) {
            return A.transactions;
          });
        return t && null !== (A = e[t]) && void 0 !== A ? A : {};
      }
      function u(A, t) {
        var e = c();
        return Object(n.useMemo)(
          function () {
            return (
              "string" === typeof A &&
              "string" === typeof t &&
              Object.keys(e).some(function (n) {
                var r = e[n];
                if (!r) return !1;
                if (r.receipt) return !1;
                var o = r.approval;
                return (
                  !!o &&
                  o.spender === t &&
                  o.tokenAddress === A &&
                  (function (A) {
                    return new Date().getTime() - A.addedTime < 864e5;
                  })(r)
                );
              })
            );
          },
          [e, t, A]
        );
      }
    },
  },
]);
