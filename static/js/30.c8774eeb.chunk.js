/*!For license information please see 30.c8774eeb.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [30],
  {
    1007: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(68),
        c = r(135),
        u = r.n(c),
        s = r(16),
        l = r.n(s),
        f = r(280),
        h = r(46),
        p = r(226),
        d = r(942);
      function m() {
        m = function () {
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
        } catch (N) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof f ? e : f,
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
                    var c = x(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = u;
        var l = {};
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
        var g = (p.prototype = f.prototype = Object.create(d));
        function b(t) {
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
        function x(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                x(t, e),
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function E(t) {
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
          c(g, "constructor", p),
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
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
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
          b(g),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), l;
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
                l
              );
            },
          }),
          t
        );
      }
      e.a = function (t) {
        var e = Object(i.c)().account,
          r = Object(f.a)().provider,
          c = new u.a(r.provider),
          s = Object(a.useState)(),
          v = Object(o.a)(s, 2),
          y = v[0],
          g = v[1];
        return (
          Object(a.useEffect)(
            function () {
              e &&
                c &&
                t &&
                Object(n.a)(
                  m().mark(function r() {
                    var n, o;
                    return m().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((n = Object(p.g)(c, h.a.erc20, t)), t !== d.b)
                            ) {
                              r.next = 7;
                              break;
                            }
                            return (r.next = 4), c.eth.getBalance(e);
                          case 4:
                            (r.t0 = r.sent), (r.next = 10);
                            break;
                          case 7:
                            return (r.next = 9), n.methods.balanceOf(e).call();
                          case 9:
                            r.t0 = r.sent;
                          case 10:
                            (o = r.t0), g(new l.a(o));
                          case 12:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
            },
            [e, t]
          ),
          y
        );
      };
    },
    1070: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(16),
        c = r.n(i),
        u = r(135),
        s = r.n(u),
        l = r(68),
        f = r(46),
        h = r(226),
        p = r(280);
      function d() {
        d = function () {
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
        } catch (N) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof f ? e : f,
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
                    var c = x(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var m = {};
        c(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(j([])));
        y && y !== e && r.call(y, o) && (m = y);
        var g = (p.prototype = f.prototype = Object.create(m));
        function b(t) {
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
        function x(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                x(t, e),
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function E(t) {
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
          c(g, "constructor", p),
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
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
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
          b(g),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), l;
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
                l
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e) {
        var r = Object(l.c)().account,
          i = Object(p.a)().provider,
          u = new s.a(i.provider),
          m = Object(a.useState)(new c.a(0)),
          v = Object(o.a)(m, 2),
          y = v[0],
          g = v[1],
          b = Object(h.g)(u, f.a.erc20, e);
        return (
          Object(a.useEffect)(
            function () {
              r &&
                e &&
                t &&
                Object(n.a)(
                  d().mark(function e() {
                    var n;
                    return d().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), b.methods.allowance(r, t).call()
                            );
                          case 2:
                            (n = e.sent), g(new c.a(n));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
            },
            [r, e, t]
          ),
          y
        );
      };
    },
    1071: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(0),
        a = r(68),
        i = r(285),
        c = r(135),
        u = r.n(c),
        s = r(113),
        l = r(280),
        f = r(185),
        h = r(117);
      function p() {
        p = function () {
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
        } catch (N) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function u(t, e, r, n) {
          var o = e && e.prototype instanceof f ? e : f,
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
                    var c = x(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function d() {}
        var m = {};
        c(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(j([])));
        y && y !== e && r.call(y, o) && (m = y);
        var g = (d.prototype = f.prototype = Object.create(m));
        function b(t) {
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
        function x(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                x(t, e),
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              l);
        }
        function E(t) {
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
          (h.prototype = d),
          c(g, "constructor", d),
          c(d, "constructor", h),
          (h.displayName = c(d, i, "GeneratorFunction")),
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
                ? Object.setPrototypeOf(t, d)
                : ((t.__proto__ = d), c(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
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
          b(g),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), L(r), l;
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
                l
              );
            },
          }),
          t
        );
      }
      e.a = function (t, e) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function () {},
          c = Object(a.c)(),
          d = c.ethereum,
          m = c.account,
          v = c.chainId,
          y = Object(l.a)(),
          g = y.provider,
          b = new u.a(g.provider),
          w = Object(i.useToasts)(),
          x = w.addToast,
          E = Object(o.useCallback)(
            Object(n.a)(
              p().mark(function o() {
                return p().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (o.next = 2),
                          Object(n.a)(
                            p().mark(function n() {
                              var o, a, i, c;
                              return p().wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (
                                          r(!0),
                                          x(
                                            "Waiting for transaction success...",
                                            {
                                              appearance: "info",
                                              autoDismiss: !0,
                                            }
                                          ),
                                          (o = new s.a(e, g, "", 18)),
                                          (a = new h.a.providers.Web3Provider(
                                            d,
                                            v
                                          )),
                                          (i = a.getSigner(0)),
                                          o.connect(i),
                                          (n.prev = 6),
                                          (n.next = 9),
                                          o.contract.approve(t, f.e, {
                                            from: m,
                                          })
                                        );
                                      case 9:
                                        return (
                                          (c = n.sent), (n.next = 12), c.wait()
                                        );
                                      case 12:
                                        x("Transaction Success!", {
                                          appearance: "success",
                                          autoDismiss: !0,
                                        }),
                                          r(!1),
                                          (n.next = 20);
                                        break;
                                      case 16:
                                        (n.prev = 16),
                                          (n.t0 = n.catch(6)),
                                          console.log(n.t0),
                                          n.t0.message.includes(
                                            "User denied transaction signature"
                                          )
                                            ? (x("Denied Transaction", {
                                                appearance: "error",
                                                autoDismiss: !0,
                                              }),
                                              r(!1))
                                            : (x("Transaction Failed", {
                                                appearance: "error",
                                                autoDismiss: !0,
                                              }),
                                              r(!1));
                                      case 20:
                                      case "end":
                                        return n.stop();
                                    }
                                },
                                n,
                                null,
                                [[6, 16]]
                              );
                            })
                          )()
                        );
                      case 2:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            ),
            [t, e, m, x, b, r]
          );
        return { onApprove: E };
      };
    },
    1101: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r.n(n),
        a = r(282),
        i = r(1491),
        c = Object(a.a)(function () {
          return {
            root: { height: 10, borderRadius: 9 },
            colorPrimary: { backgroundColor: "#303030" },
            bar: { borderRadius: 1, backgroundColor: "#3FA9F5" },
          };
        })(i.a);
      e.a = function (t) {
        var e = t.percentage;
        return o.a.createElement(c, {
          variant: "determinate",
          value: Number(e),
        });
      };
    },
    2130: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(0),
        o = r.n(n),
        a = r(26),
        i = r(43),
        c = r(2112),
        u = r(68),
        s = r(934),
        l = r(16),
        f = r.n(l),
        h = r(2149),
        p = r(1101),
        d = r(226),
        m = r(2106),
        v = Object(m.a)({
          root: { minWidth: "280px" },
          avatar: {
            minWidth: "50px",
            minHeight: "50px",
            marginRight: "12px",
            borderRadius: "50%",
          },
          wrap: { marginBottom: "12px" },
          tokenName: { color: "#9F9F9F", marginLeft: "8px" },
          row: { display: "flex" },
          column: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
          },
          tokenNameColumn: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
          text: { fontSize: "14px", color: "#9F9F9F" },
          textPercentage: { fontSize: "14px", color: "#9F9F9F" },
        }),
        y = r(929),
        g = function (t) {
          var e = t.tvl,
            r = t.poolToken,
            a = v(),
            i = (r.name, r.symbol),
            u = r.img,
            s = r.priceUsd,
            l = r.decimals,
            m = r.balance,
            g = Object(n.useMemo)(
              function () {
                return s.times(m).div(Object(d.h)(l));
              },
              [m, s, l]
            ),
            b = Object(n.useMemo)(
              function () {
                return g.div(e).times(100);
              },
              [e, g]
            ),
            w = Object(n.useMemo)(
              function () {
                return m && new f.a(m).div(Object(d.h)(l)).toNumber();
              },
              [m, l]
            );
          return o.a.createElement(
            c.a,
            { container: !0, spacing: 1, className: a.root, direction: "row" },
            o.a.createElement(
              c.a,
              { container: !0, item: !0, xs: !0 },
              o.a.createElement(
                c.a,
                {
                  container: !0,
                  item: !0,
                  xs: 12,
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  className: a.wrap,
                },
                o.a.createElement(
                  c.a,
                  { item: !0, className: a.row },
                  o.a.createElement(
                    c.a,
                    { item: !0 },
                    o.a.createElement(h.a, {
                      src: u,
                      variant: "square",
                      className: a.avatar,
                    })
                  ),
                  o.a.createElement(
                    c.a,
                    { item: !0, className: a.tokenNameColumn },
                    o.a.createElement(
                      c.a,
                      { item: !0 },
                      o.a.createElement(
                        "span",
                        null,
                        null === i || void 0 === i ? void 0 : i.toUpperCase()
                      )
                    ),
                    o.a.createElement(
                      c.a,
                      { item: !0, className: a.text },
                      d.d.format(w),
                      " = $",
                      Object(y.a)(g)
                    )
                  )
                ),
                o.a.createElement(
                  c.a,
                  { item: !0, className: a.column },
                  s &&
                    o.a.createElement(
                      c.a,
                      { item: !0 },
                      "$",
                      Object(y.a)(s, "DEX" === i ? 4 : 2)
                    ),
                  b &&
                    o.a.createElement(
                      c.a,
                      { item: !0, className: a.textPercentage },
                      Object(y.a)(b),
                      "%"
                    )
                )
              ),
              o.a.createElement(
                c.a,
                { item: !0, xs: 12 },
                o.a.createElement(p.a, { percentage: b || "0" })
              )
            )
          );
        };
      g.defaultProps = { handleSetUsdValue: function () {} };
      var b = g,
        w = Object(m.a)({
          content: {
            padding: "32px 24px",
            boxSizing: "border-box",
            background: "#8b67d3",
            borderRadius: "10px",
          },
          text: { marginBottom: "30px" },
          titleButton: {
            fontSize: "20px",
            fontWeight: "700",
            background: "none",
            outline: "inherit",
            cursor: "pointer",
            border: "none",
            marginRight: "32px",
            color: "#fafafa",
          },
          activeButton: { borderBottom: "1px solid #FFFFFF" },
          description: {
            fontSize: "14px",
            fontWeight: "400",
            color: "#9F9F9F",
          },
          title: { fontSize: 22, fontWeight: 700 },
        }),
        x = function (t) {
          var e = t.poolInfo,
            r = w();
          return o.a.createElement(
            c.a,
            {
              container: !0,
              item: !0,
              direction: "column",
              className: r.content,
            },
            o.a.createElement(
              c.a,
              {
                item: !0,
                spacing: 2,
                container: !0,
                direction: "column",
                className: r.text,
              },
              o.a.createElement(
                c.a,
                { item: !0, className: r.title },
                "Asset Allocation"
              ),
              o.a.createElement(
                c.a,
                { item: !0, className: r.description },
                "Breakdown of total assets in this fund"
              )
            ),
            o.a.createElement(
              c.a,
              { container: !0, spacing: 6, item: !0 },
              e.tokens.map(function (t) {
                return o.a.createElement(
                  c.a,
                  { container: !0, item: !0, lg: 6, key: t.address },
                  o.a.createElement(b, {
                    tvl: null === e || void 0 === e ? void 0 : e.tvl,
                    poolToken: t,
                  })
                );
              })
            )
          );
        },
        E = r(916),
        L = r.n(E),
        O = Object(m.a)({
          container: {
            marginBottom: "15px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "3px",
          },
          card: {
            textAlign: "center",
            padding: "20px",
            fontSize: "22px",
            background: "#8b67d3",
            boxShadow:
              "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          },
          right: { borderRadius: "10px 0 0 10px" },
          left: { borderRadius: "0 10px 10px 0" },
          number: { fontWeight: 700, marginTop: "8px" },
          info: {
            marginBottom: "45px",
            display: "flex",
            flexDirection: "column",
            gap: "9px",
          },
        }),
        j = function (t) {
          var e = t.poolInfo,
            r = O(),
            a = e.name,
            i = e.tvl,
            u = e.totalSupply,
            s = e.decimals,
            l = Object(n.useMemo)(
              function () {
                return i.div(Object(y.b)(u, s));
              },
              [i, u]
            );
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              c.a,
              { item: !0, container: !0, className: r.container },
              o.a.createElement(
                "div",
                { className: L()(r.card, r.right) },
                o.a.createElement("div", null, a),
                o.a.createElement(
                  "div",
                  { className: r.number },
                  "$",
                  Object(y.a)(l)
                )
              ),
              o.a.createElement(
                "div",
                { className: L()(r.card, r.left) },
                o.a.createElement("div", null, "Total Value Locked"),
                o.a.createElement(
                  "div",
                  { className: r.number },
                  "$",
                  Object(y.a)(i)
                )
              )
            )
          );
        },
        k = function (t) {
          var e = t.poolInfo;
          return o.a.createElement(
            c.a,
            { item: !0, lg: 8 },
            o.a.createElement(j, { poolInfo: e }),
            o.a.createElement(x, { poolInfo: e })
          );
        },
        N = r(77),
        F = r(1134),
        T = r(1492),
        S = r(135),
        _ = r.n(S),
        B = r(11),
        I = r(1314),
        A = r.n(I),
        G = r(932),
        C = r(2109),
        P = Object(m.a)(function () {
          return {
            root: { textTransform: "none", height: "51px" },
            button: {
              height: "51px",
              width: "240px",
              background: function (t) {
                return t.error || t.disabled ? "none" : "#8b67d3";
              },
              borderRadius: "100px",
              textTransform: "none",
              color: function (t) {
                return t.error ? "#DD3434" : (t.disabled, "#FFFFFF");
              },
              "&:hover": {
                background: function (t) {
                  return t.error ? "none" : "rgba(218, 161, 14, 0.25)";
                },
              },
              "&:disabled": {
                color: function (t) {
                  return t.error
                    ? "#DD3434"
                    : t.disabled
                    ? "#FFFFFF"
                    : "#DAA10E";
                },
                background: "none",
              },
            },
          };
        }),
        D = [
          "children",
          "className",
          "onClick",
          "outLine",
          "loader",
          "disabled",
          "error",
        ],
        M = function (t) {
          var e,
            r = t.children,
            n = t.className,
            a = t.onClick,
            i = t.outLine,
            c = t.loader,
            u = t.disabled,
            s = t.error,
            l = Object(G.a)(t, D),
            f = P({ error: s, disabled: u });
          return o.a.createElement(
            C.a,
            Object.assign(
              {
                className: L()(
                  n,
                  ((e = {}),
                  Object(N.a)(e, f.button, i),
                  Object(N.a)(e, f.root, !i),
                  e)
                ),
                onClick: c ? function () {} : a,
                disabled: c || u,
              },
              l
            ),
            c ? o.a.createElement(T.a, null) : r
          );
        },
        R = r(2150),
        W = r(2148),
        z = r(1495),
        U = r.n(z),
        V = r(1494),
        Y = r.n(V),
        H = r(1007),
        $ = r(280);
      function J() {
        J = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var q = function (t) {
          var e = Object(n.useState)("0"),
            r = Object(a.a)(e, 2),
            o = r[0],
            i = r[1],
            c = Object($.a)();
          return (
            Object(n.useEffect)(
              function () {
                t.price &&
                  Object(B.a)(
                    J().mark(function e() {
                      var r;
                      return J().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), c.getTokenPrices(t.price);
                            case 2:
                              (r = e.sent), i(r);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
              },
              [t, c]
            ),
            o
          );
        },
        X = Object(m.a)(function () {
          return {
            container: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px 16px 20px",
              background: "#8b67d3",
            },
            flexContainer: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            header: { display: "flex", alignItems: "center" },
            tooltip: { marginLeft: "5px" },
            icon: { color: "#F0B90B" },
            balance: { color: "#ffffff", fontSize: "14px" },
            balanceUsd: {
              color: function (t) {
                return t.error ? "#DD3434" : "#9F9F9F";
              },
              fontSize: "14px",
            },
            tokenSelectButton: {
              display: "flex",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "100px",
              padding: "6px 8px",
              minWidth: "140px",
              marginTop: "8px",
            },
            tokenButtonLabel: {
              width: "22px",
              height: "22px",
              marginRight: "6px",
            },
            input: {
              color: function (t) {
                return t.error ? "#DD3434" : "#9F9F9F";
              },
            },
            tokenButtonImg: { width: "22px", height: "22px" },
            maxButton: { color: "#FFFFFF", "& img": { marginRight: "6px" } },
            tokenSymbol: { color: "#3FA9F5" },
          };
        }),
        K = ["provider"],
        Q = function (t) {
          var e = t.onDemandGreaterThanBalance,
            r = t.placeholder,
            i = t.header,
            u = t.tokenInfo,
            s = t.disabled,
            l = t.setTokenSelectList,
            p = t.error,
            m = t.gradient,
            v = t.value,
            y = t.onChange,
            g = t.valueWei,
            b = (t.poolInfo, t.handleMaxValue),
            w = t.showUsdPrice,
            x = t.currentToken,
            E = t.tooltip,
            L = Object($.a)(),
            O = L.provider,
            j = (Object(G.a)(L, K), new _.a(O.provider)),
            k = Object(H.a)(u.address),
            N = X({ gradient: m, error: p }),
            F = q(u),
            T = Object(n.useState)(0),
            S = Object(a.a)(T, 2),
            B = S[0],
            I = S[1];
          Object(n.useEffect)(
            function () {
              var t = Number(r);
              if (e && t > 0) {
                var n = t > Number(k);
                e(u.symbol, n);
              }
            },
            [k, e, u.symbol, r]
          ),
            Object(n.useEffect)(
              function () {
                if (v && w) {
                  var t = new f.a(F)
                    .times(new f.a(v))
                    .div(x ? 1 : 1e18)
                    .toNumber();
                  I(t);
                }
              },
              [u, v, w]
            );
          return o.a.createElement(
            c.a,
            { container: !0, alignItems: "center", className: N.container },
            o.a.createElement(
              "div",
              { className: N.flexContainer },
              i &&
                o.a.createElement(
                  "div",
                  { className: N.header },
                  i,
                  E &&
                    o.a.createElement(
                      R.a,
                      { title: E, className: N.tooltip },
                      o.a.createElement(Y.a, { className: N.icon })
                    )
                ),
              o.a.createElement(
                "div",
                { className: N.balance },
                "Balance: ".concat(
                  k ? d.d.format(j.utils.fromWei(k.toFixed(0), "ether")) : "0"
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: N.flexContainer },
              o.a.createElement(W.a, {
                value: g ? d.d.format(j.utils.fromWei(v, "ether")) : v,
                onChange: function (t) {
                  return y(t.target.value);
                },
                disabled: s,
                error: p,
                inputProps: { "aria-label": "naked", className: N.input },
                placeholder:
                  j && r ? d.d.format(j.utils.fromWei(r, "ether")) : "0",
              }),
              l
                ? o.a.createElement(
                    C.a,
                    {
                      className: N.tokenSelectButton,
                      onClick: function () {
                        return l(!0);
                      },
                    },
                    o.a.createElement(
                      h.a,
                      { className: N.tokenButtonLabel },
                      o.a.createElement("img", {
                        src: u.img,
                        className: N.tokenButtonImg,
                        alt: u.symbol,
                      })
                    ),
                    o.a.createElement("div", null, u.symbol),
                    o.a.createElement(U.a, null)
                  )
                : o.a.createElement(
                    "div",
                    { className: N.tokenSymbol },
                    u.symbol
                  )
            ),
            o.a.createElement(
              "div",
              { className: N.flexContainer },
              o.a.createElement(
                "div",
                { className: N.balanceUsd },
                p || (w && "$".concat(d.d.format(B)))
              ),
              b &&
                o.a.createElement(
                  C.a,
                  {
                    className: N.maxButton,
                    disabled: s,
                    onClick: function () {
                      b(j.utils.fromWei(k.toString(), "ether")),
                        y(j.utils.fromWei(k.toString(), "ether"));
                    },
                  },
                  o.a.createElement("span", null, "MAX")
                )
            )
          );
        };
      Q.defaultProps = { onInputGreaterThanBalance: function () {} };
      var Z = Object(n.memo)(Q, function (t, e) {
          var r, n;
          return (
            (null === (r = t.tokenInfo) || void 0 === r
              ? void 0
              : r.address) ===
              (null === (n = e.tokenInfo) || void 0 === n
                ? void 0
                : n.address) &&
            t.placeholder === e.placeholder &&
            t.error === e.error &&
            t.value === e.value
          );
        }),
        tt = r(46);
      r(964);
      var et = r(123),
        rt = r(942);
      var nt = Object(m.a)(function () {
          return {
            tokenButtonLabel: {
              width: "22px",
              height: "22px",
              marginRight: "6px",
            },
            tokenButtonImg: { width: "22px", height: "22px" },
            selectItems: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            },
            tokenButtonLogoGroup: { display: "flex", alignItems: "center" },
            usdBalance: {
              fontSize: "12px",
              color: "#9F9F9F",
              textAlign: "end",
            },
          };
        }),
        ot = function (t) {
          var e,
            r = t.poolInfo,
            i = t.token,
            c = t.handleMintWithToken,
            u = nt(),
            s = Object($.a)().provider,
            l = new _.a(s.provider),
            p = Object(H.a)(i.address),
            m = Object(et.c)(),
            v =
              null === m ||
              void 0 === m ||
              null === (e = m[i.priceId]) ||
              void 0 === e
                ? void 0
                : e.usd,
            y = Object(n.useState)(0),
            g = Object(a.a)(y, 2),
            b = g[0],
            w = g[1];
          return (
            Object(n.useEffect)(
              function () {
                if (p && v) {
                  var t = new f.a(v).times(p).div(1e18).toNumber();
                  w(t);
                }
              },
              [r, i, v, p]
            ),
            o.a.createElement(
              C.a,
              {
                size: "large",
                className: u.selectItems,
                onClick: function () {
                  return c(i);
                },
              },
              o.a.createElement(
                "div",
                { className: u.tokenButtonLogoGroup },
                o.a.createElement(
                  h.a,
                  { className: u.tokenButtonLabel },
                  o.a.createElement("img", {
                    src: i.img,
                    className: u.tokenButtonImg,
                    alt: i.symbol,
                  })
                ),
                i.symbol
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "div",
                  null,
                  p ? d.d.format(l.utils.fromWei(p.toFixed(0), "ether")) : "0"
                ),
                o.a.createElement(
                  "div",
                  { className: u.usdBalance },
                  "$",
                  d.d.format(b)
                )
              )
            )
          );
        },
        at = r(1070),
        it = r(1071),
        ct = r(285),
        ut = r(185);
      function st() {
        st = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var lt = function (t) {
          var e = t.indexPool,
            r = t.mintWithThisToken,
            o = t.indexPoolTokens,
            a = t.inputValue,
            i = t.wrappedHandleChange,
            c = t.setLoader,
            s = t.setPotentialBnbSwappedAmount,
            l = t.setIsDemandGreaterThanBalance,
            h = t.isTokenApproved,
            p = Object(u.c)(),
            m = p.account,
            v = p.chainId,
            y = Object($.a)(),
            g = y.contracts.uniswapRouterMinter,
            b = y.provider,
            w = new _.a(b.provider),
            x = Object(ct.useToasts)().addToast,
            E = Object(H.a)(r.address),
            L = Object(d.g)(
              w,
              tt.a.uniswapRouterMinter,
              tt.b[v][e].uniswapRouterMinter
            ),
            O = 1 + ut.f,
            j = r.address === ut.a || r.symbol === ut.h,
            k = j ? tt.b[v].WBNB : r.address,
            N = Object(n.useMemo)(
              function () {
                return w.utils.toWei("" === a ? "0" : a, "ether");
              },
              [a]
            ),
            F = Object(n.useMemo)(
              function () {
                return o.map(function (t) {
                  return j ||
                    t.address.toLowerCase() === k.toLowerCase() ||
                    t.address === tt.b[v].WBNB
                    ? ut.a
                    : tt.b[v].WBNB;
                });
              },
              [o, j, v]
            );
          return (
            Object(n.useEffect)(
              function () {
                a
                  ? Object(B.a)(
                      st().mark(function t() {
                        var r;
                        return st().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!j) {
                                  t.next = 7;
                                  break;
                                }
                                return (
                                  (t.next = 3),
                                  L.methods
                                    .getMaxAmountForJoin(k, F, e, N)
                                    .call()
                                );
                              case 3:
                                (r = t.sent), s(new f.a(r)), (t.next = 13);
                                break;
                              case 7:
                                if (h) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt("return");
                              case 9:
                                return (
                                  (t.next = 11),
                                  L.methods
                                    .getMaxAmountForJoin(k, F, e, N)
                                    .call()
                                );
                              case 11:
                                (r = t.sent), s(new f.a(r));
                              case 13:
                                new f.a(r).isGreaterThan(E.toString())
                                  ? l("Insufficient balance")
                                  : l(null);
                              case 14:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    )()
                  : l(null);
              },
              [a]
            ),
            {
              handleMint: (function () {
                var t = Object(B.a)(
                  st().mark(function t() {
                    var r, n, o, a, u;
                    return st().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                c(!0),
                                (t.next = 3),
                                L.methods
                                  .getMaxAmountForJoin(k, F, e, N)
                                  .call()
                                  .then(function (t) {
                                    return new f.a(t)
                                      .multipliedBy(O)
                                      .toFixed(0);
                                  })
                              );
                            case 3:
                              if (((r = t.sent), !j)) {
                                t.next = 28;
                                break;
                              }
                              return (
                                (t.next = 7),
                                L.methods
                                  .swapETHForAllTokensAndMintExact(e, F, N)
                                  .estimateGas({ from: m, value: r })
                                  .then(function (t) {
                                    return new f.a(t)
                                      .multipliedBy(ut.d)
                                      .toFixed(0);
                                  })
                                  .catch(function () {
                                    x("Error during gas estimation", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                      c(!1);
                                  })
                              );
                            case 7:
                              if ((n = t.sent)) {
                                t.next = 10;
                                break;
                              }
                              return t.abrupt("return");
                            case 10:
                              return (
                                x("Waiting for transaction success...", {
                                  appearance: "info",
                                  autoDismiss: !0,
                                }),
                                (t.prev = 11),
                                (t.next = 14),
                                g.swapETHForAllTokensAndMintExact(e, F, N, {
                                  from: m,
                                  gasLimit: n,
                                  value: r,
                                })
                              );
                            case 14:
                              return (o = t.sent), (t.next = 17), o.wait();
                            case 17:
                              x("Transaction Success!", {
                                appearance: "success",
                                autoDismiss: !0,
                              }),
                                i(""),
                                c(!1),
                                (t.next = 26);
                              break;
                            case 22:
                              (t.prev = 22),
                                (t.t0 = t.catch(11)),
                                console.log(t.t0),
                                t.t0.message.includes(
                                  "User denied transaction signature"
                                )
                                  ? (x("Denied Transaction", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1))
                                  : (x("Transaction Failed", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1));
                            case 26:
                              t.next = 49;
                              break;
                            case 28:
                              return (
                                (t.next = 30),
                                L.methods
                                  .swapTokensForAllTokensAndMintExact(
                                    k,
                                    r,
                                    F,
                                    e,
                                    N
                                  )
                                  .estimateGas({ from: m })
                                  .then(function (t) {
                                    return new f.a(t)
                                      .multipliedBy(ut.d)
                                      .toFixed(0);
                                  })
                                  .catch(function (t) {
                                    console.log(t),
                                      x("Error during gas estimation", {
                                        appearance: "error",
                                        autoDismiss: !0,
                                      }),
                                      c(!1);
                                  })
                              );
                            case 30:
                              if ((a = t.sent)) {
                                t.next = 33;
                                break;
                              }
                              return t.abrupt("return");
                            case 33:
                              return (
                                x("Waiting for transaction success...", {
                                  appearance: "info",
                                  autoDismiss: !0,
                                }),
                                (t.prev = 34),
                                (t.next = 37),
                                g.swapTokensForAllTokensAndMintExact(
                                  k,
                                  r,
                                  F,
                                  e,
                                  N,
                                  { from: m, gasLimit: a }
                                )
                              );
                            case 37:
                              return (u = t.sent), (t.next = 40), u.wait();
                            case 40:
                              x("Transaction Success!", {
                                appearance: "success",
                                autoDismiss: !0,
                              }),
                                i(""),
                                c(!1),
                                (t.next = 49);
                              break;
                            case 45:
                              (t.prev = 45),
                                (t.t1 = t.catch(34)),
                                console.log(t.t1),
                                t.t1.message.includes(
                                  "User denied transaction signature"
                                )
                                  ? (x("Denied Transaction", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1))
                                  : (x("Transaction Failed", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1));
                            case 49:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [
                        [11, 22],
                        [34, 45],
                      ]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            }
          );
        },
        ft = Object(m.a)({
          buttonGroup: { marginBottom: "10px" },
          buttonTab: {
            color: "white",
            marginRight: "20px",
            background: "none",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          },
          activeButton: { fontWeight: "700", borderBottom: "white solid 2px" },
          container: {
            background: "rgba(0, 0, 0, 0.25)",
            borderRadius: "16px",
            margin: "16px 0",
            display: "flex",
            flexDirection: "column",
          },
          selectContainer: {
            maxHeight: "285px",
            overflow: "auto",
            padding: "0 18px",
            height: "100%",
          },
          mintButton: {
            marginTop: "16px",
            borderRadius: "100px",
            width: "100%",
            color: "#FFFFFF",
            fontWeight: 500,
            background: "#8b67d3",
          },
          arrowContainer: {
            display: "flex",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            background: "rgba(0, 0, 0, 0.25)",
            width: "40px",
            height: "40px",
            color: "#F0B90B",
          },
          inputContainerTop: { borderBottom: "1px solid #3FA9F5" },
          inputContainerMulti: { margin: "16px 0" },
          inputHeader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
          infoContainer: {
            marginLeft: "5px",
            color: "#F0B90B",
            cursor: "pointer",
          },
          containerTitle: {
            margin: "16px 16px 8px",
            textAlign: "center",
            lineHeight: "160%",
            color: "#9F9F9F",
          },
          containerTitleMain: { color: "#FFFFFF", fontWeight: "bold" },
          description: { lineHeight: "160%", marginBottom: "32px" },
          backButton: { borderRadius: "32px" },
          approveStatus: {
            marginTop: "21px",
            textAlign: "right",
            color: function (t) {
              return t.checkIfAllApproved ? "#4D4D4D" : "#3FA9F5";
            },
          },
          enter: { border: "1px solid #3FA9F5" },
        });
      function ht() {
        ht = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var pt = Object(n.memo)(function (t) {
          var e = t.poolInfo,
            r = t.inputValue,
            i = t.setInputValue,
            c = t.handleChange,
            s = t.inputError,
            l = Object(u.c)().chainId,
            h = ft(),
            p = Object(n.useState)(rt.a[l][0]),
            m = Object(a.a)(p, 2),
            v = m[0],
            y = m[1],
            g = Object(n.useState)(!1),
            b = Object(a.a)(g, 2),
            w = b[0],
            x = b[1],
            E = Object(n.useState)(!1),
            O = Object(a.a)(E, 2),
            j = O[0],
            k = O[1],
            N = Object(n.useState)(null),
            F = Object(a.a)(N, 2),
            T = F[0],
            S = F[1],
            _ = Object(n.useState)(new f.a(0)),
            I = Object(a.a)(_, 2),
            G = I[0],
            C = I[1],
            P = Object(H.a)(v.address),
            D = Object(at.a)(tt.b[l][e.address].uniswapRouterMinter, v.address),
            R = Object(n.useMemo)(
              function () {
                return e.allTokensInfo.filter(function (t) {
                  return !e.tokens.includes(t.address);
                });
              },
              [e.allTokensInfo, e.tokens]
            ),
            W = Object(n.useMemo)(
              function () {
                return Object(d.f)(D);
              },
              [D]
            ),
            z = Object(it.a)(
              tt.b[l][e.address].uniswapRouterMinter,
              v.address,
              x
            ).onApprove,
            U = function (t) {
              c({ value: t, setPotentialBnbSwappedAmount: C });
            },
            V = lt({
              indexPool: e.address,
              mintWithThisToken: v,
              indexPoolTokens: e.tokens,
              inputValue: r,
              wrappedHandleChange: U,
              setPotentialBnbSwappedAmount: C,
              setIsDemandGreaterThanBalance: S,
              setLoader: x,
              isTokenApproved: W,
            }).handleMint,
            Y = function (t) {
              y(t), i(""), C(new f.a(0)), k(!1);
            },
            $ = (function () {
              var t = Object(B.a)(
                ht().mark(function t() {
                  return ht().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return x(!0), (t.next = 3), z();
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: h.description },
              "Use any single asset listed to mint the ",
              e.symbol,
              " token in one transaction."
            ),
            o.a.createElement(
              "div",
              { className: h.container },
              j
                ? o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      M,
                      { className: h.backButton },
                      o.a.createElement(A.a, {
                        onClick: function () {
                          return k(!1);
                        },
                      })
                    ),
                    o.a.createElement(
                      "div",
                      { className: h.selectContainer },
                      R.map(function (t) {
                        return o.a.createElement(ot, {
                          token: t,
                          key: t.address,
                          poolInfo: e,
                          handleMintWithToken: Y,
                        });
                      })
                    )
                  )
                : o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: h.inputContainerTop },
                      o.a.createElement(Z, {
                        poolInfo: v,
                        onChange: U,
                        tokenInfo: { symbol: e.symbol, address: e.address },
                        size: "large",
                        error: s,
                        value: r.toString(),
                        gradient: !0,
                        header: o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("b", null, "Tokens to mint"),
                          " "
                        ),
                      })
                    ),
                    o.a.createElement(Z, {
                      poolInfo: e,
                      tokenInfo: v,
                      size: "large",
                      disabled: !0,
                      valueWei: !0,
                      error: T,
                      header: o.a.createElement(
                        "span",
                        null,
                        o.a.createElement("b", null, "Mint with"),
                        " "
                      ),
                      value: G.toFixed(0),
                      tokenSelectList: j,
                      setTokenSelectList: k,
                      showUsdPrice: !0,
                    })
                  )
            ),
            W || ut.c.includes(v.symbol)
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  Number(r) > 0
                    ? o.a.createElement(
                        M,
                        {
                          variant: "contained",
                          outLine: Number(r) > 0 && T,
                          size: "large",
                          onClick: V,
                          loader: w,
                          disabled: !Number(P) || T,
                          className: h.mintButton,
                          error: Number(r) > 0 && T,
                        },
                        Number(r) > 0 && T
                          ? "Insufficient balance"
                          : "Mint ".concat(e.symbol)
                      )
                    : o.a.createElement(
                        M,
                        {
                          outLine: !0,
                          size: "large",
                          className: L()(h.mintButton, h.enter),
                          disabled: !0,
                        },
                        "Enter an Amount"
                      )
                )
              : o.a.createElement(
                  M,
                  {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    loader: w,
                    className: h.mintButton,
                    onClick: $,
                  },
                  "Approve ",
                  v.symbol
                )
          );
        }),
        dt = r(155),
        mt = r(1496),
        vt = r.n(mt),
        yt = r(2111),
        gt = r(2114),
        bt = r(2128),
        wt = r(282);
      function xt() {
        xt = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var Et = Object(wt.a)({
          root: {
            background: "#3FA9F5",
            borderRadius: 3,
            border: 0,
            color: "#fafafa",
            minHeight: 38,
            padding: "0 15px",
          },
          label: { textTransform: "capitalize" },
        })(C.a),
        Lt = function (t) {
          var e = t.poolAddress,
            r = t.poolTokenAddress,
            a = Object(at.a)(e, r),
            i = Object(it.a)(e, r).onApprove,
            c = Object(n.useMemo)(
              function () {
                return Object(d.f)(a);
              },
              [a]
            ),
            u = (function () {
              var t = Object(B.a)(
                xt().mark(function t() {
                  return xt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), i();
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            c
              ? o.a.createElement(
                  C.a,
                  { size: "small", disabled: !0, color: "secondary" },
                  "Approved"
                )
              : o.a.createElement(
                  Et,
                  {
                    size: "small",
                    onClick: u,
                    disabled: !1,
                    color: "secondary",
                  },
                  "Approve"
                )
          );
        },
        Ot = Object(m.a)(function () {
          return {
            root: { width: "100%" },
            container: {
              display: "flex",
              alignItems: "center",
              padding: "13px 18px",
            },
            itemLogo: { display: "flex", alignItems: "center", width: "50%" },
            item: { width: "25%", display: "flex", justifyContent: "center" },
            itemDemand: {
              width: "25%",
              color: function (t) {
                return t.demandBalance ? "#DD3434" : "#fafafa";
              },
            },
          };
        }),
        jt = function (t) {
          var e = t.token,
            r = t.index,
            a = t.poolAmounts,
            i = t.address,
            c = t.onDemandGreaterThanBalance,
            u = t.withButton,
            s = t.demandBalance,
            l = t.tvl,
            f = t.priceUsd,
            p = t.decimals,
            m = t.tokenBalance,
            v = Ot(),
            y = e.symbol,
            g = e.img,
            b = (e.weight, Object(H.a)(e.address)),
            w = Object($.a)().provider,
            x = new _.a(w.provider),
            E = Object(n.useMemo)(
              function () {
                return f.times(m).div(Object(d.h)(p));
              },
              [m, f, p]
            ),
            L = Object(n.useMemo)(
              function () {
                return E.div(l).times(100);
              },
              [l, E]
            );
          return (
            Object(n.useEffect)(
              function () {
                var t = Number(a[r]);
                if (c && t > 0) {
                  var e = t > Number(b);
                  c(y, e);
                }
              },
              [b, c, y, a, r]
            ),
            o.a.createElement(
              "div",
              { className: v.container },
              o.a.createElement(
                "div",
                { className: v.itemLogo },
                o.a.createElement(
                  bt.a,
                  null,
                  o.a.createElement(h.a, { alt: "Avatar", src: g })
                ),
                y
              ),
              o.a.createElement(
                "div",
                { className: v.itemDemand },
                d.d.format(x.utils.fromWei(a[r], "ether")),
                s
              ),
              u
                ? o.a.createElement(
                    "div",
                    { className: v.item },
                    o.a.createElement(
                      gt.a,
                      null,
                      o.a.createElement(Lt, {
                        poolAddress: i,
                        poolTokenAddress: e.address,
                      })
                    )
                  )
                : o.a.createElement("div", null, L.toFixed(2), "%")
            )
          );
        },
        kt = function (t) {
          var e = t.poolInfo,
            r = t.poolAmounts,
            n = t.withButton,
            a = t.onDemandGreaterThanBalance,
            i = t.demandBalanceMap,
            u = Ot();
          return o.a.createElement(
            o.a.Fragment,
            null,
            (null === e || void 0 === e ? void 0 : e.tokens) &&
              r &&
              (null === e || void 0 === e ? void 0 : e.address) &&
              o.a.createElement(
                c.a,
                { container: !0 },
                o.a.createElement(
                  yt.a,
                  { className: u.root, dense: !0 },
                  null === e || void 0 === e
                    ? void 0
                    : e.tokens.map(function (t, c) {
                        var u;
                        return o.a.createElement(jt, {
                          key: t.address,
                          address:
                            null === e || void 0 === e ? void 0 : e.address,
                          token: t,
                          index: c,
                          poolAmounts: r,
                          withButton: n,
                          totalWeight:
                            null === e || void 0 === e ? void 0 : e.totalWeight,
                          onDemandGreaterThanBalance: a,
                          demandBalance:
                            null === i || void 0 === i
                              ? void 0
                              : i[
                                  null === (u = Object.keys(i)) || void 0 === u
                                    ? void 0
                                    : u[c]
                                ],
                          tvl: null === e || void 0 === e ? void 0 : e.tvl,
                          priceUsd:
                            null === t || void 0 === t ? void 0 : t.priceUsd,
                          decimals:
                            null === t || void 0 === t ? void 0 : t.decimals,
                          tokenBalance:
                            null === t || void 0 === t ? void 0 : t.balance,
                        });
                      })
                )
              )
          );
        };
      kt.defaultProps = {
        handleMintDisabling: function () {},
        onDemandGreaterThanBalance: function () {},
      };
      var Nt = kt,
        Ft = new f.a(10).pow(18),
        Tt = new f.a(10).pow(16);
      Ft.times(new f.a(2)),
        Ft.idiv(new f.a(10).pow(10)),
        Ft.times(new f.a(0.499999999999999)),
        Ft.times(new f.a(0.333333333333333)),
        Ft.div(4);
      function St(t) {
        return new f.a(null === t || void 0 === t ? void 0 : t.toString());
      }
      function _t(t, e, r, n) {
        for (
          var o = Bt(St(n), Tt), a = It(St(n).minus(o), St(r)), i = [], c = 0;
          c < e.length;
          c++
        ) {
          var u = St(t[c]);
          St(e[c]).eq(0)
            ? i.push(St(0).toString())
            : i.push(Bt(a, u).toFixed());
        }
        return i;
      }
      function Bt(t, e) {
        return t
          .times(e)
          .plus(Ft.div(new f.a(2)))
          .idiv(Ft);
      }
      function It(t, e) {
        return t
          .times(Ft)
          .plus(e.div(new f.a(2)))
          .idiv(e);
      }
      var At = r(283);
      function Gt() {
        Gt = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var Ct = function (t, e, r) {
        var o = Object(u.c)(),
          i = o.account,
          c = o.chainId,
          s = Object($.a)().provider,
          l = new _.a(s.provider),
          f = Object(n.useState)(!0),
          h = Object(a.a)(f, 2),
          p = h[0],
          m = h[1],
          v = Object(n.useState)(!1),
          y = Object(a.a)(v, 2),
          g = y[0],
          b = y[1],
          w = t.tokens,
          x = Object(n.useCallback)(
            Object(B.a)(
              Gt().mark(function t() {
                var n, o, u, s;
                return Gt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          0 === r && !0 === g && m(!0),
                          (n = new At.MultiCall(l, ut.g[c])),
                          (o = w.map(function (t) {
                            var e = t.address;
                            return {
                              balance: Object(d.g)(
                                l,
                                tt.a.erc20,
                                e
                              ).methods.balanceOf(i),
                            };
                          })),
                          (t.next = 5),
                          n.all([o])
                        );
                      case 5:
                        (u = t.sent),
                          (s = Object(a.a)(u, 1)),
                          s[0].forEach(
                            (function () {
                              var t = Object(B.a)(
                                Gt().mark(function t(r, n) {
                                  var o, a;
                                  return Gt().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          (o = r.balance),
                                            (a = e[n] || "0"),
                                            (0 === parseInt(o) ||
                                              parseInt(o) < parseInt(a)) &&
                                              m(!1);
                                        case 3:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e, r) {
                                return t.apply(this, arguments);
                              };
                            })()
                          ),
                          b(!0);
                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [e, g]
          );
        return (
          Object(n.useEffect)(
            function () {
              i && l && x();
            },
            [i, l, x, g]
          ),
          p
        );
      };
      function Pt() {
        Pt = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var Dt = function (t) {
        var e = Object(u.c)().account,
          r = Object($.a)().provider,
          o = new _.a(r.provider),
          i = Object(n.useState)(!0),
          c = Object(a.a)(i, 2),
          s = c[0],
          l = c[1],
          f = Object(n.useState)(!1),
          h = Object(a.a)(f, 2),
          p = h[0],
          m = h[1],
          v = Object(n.useCallback)(
            (function () {
              var t = Object(B.a)(
                Pt().mark(function t(r, n) {
                  var a;
                  return Pt().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (a = Object(d.g)(o, tt.a.erc20, n)),
                              (t.next = 4),
                              a.methods.allowance(e, r).call()
                            );
                          case 4:
                            return t.abrupt("return", t.sent);
                          case 7:
                            return (
                              (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", 0)
                            );
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
              );
              return function (e, r) {
                return t.apply(this, arguments);
              };
            })(),
            [e, o]
          ),
          y = t.tokens,
          g = t.address,
          b = Object(n.useCallback)(
            Object(B.a)(
              Pt().mark(function t() {
                return Pt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        y.forEach(
                          (function () {
                            var t = Object(B.a)(
                              Pt().mark(function t(e) {
                                var r;
                                return Pt().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), v(g, e);
                                      case 2:
                                        if (((r = t.sent), Object(d.f)(r))) {
                                          t.next = 7;
                                          break;
                                        }
                                        return l(!1), t.abrupt("return", s);
                                      case 7:
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
                        ),
                          m(!0);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            []
          );
        return (
          Object(n.useEffect)(
            function () {
              e && o && b();
            },
            [e, o, p, b]
          ),
          s
        );
      };
      function Mt() {
        Mt = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var Rt = function (t) {
          var e = t.poolAddress,
            r = t.inputValue,
            o = t.maxAmountsIn,
            a = t.wrappedHandleChange,
            i = Object(u.c)().account,
            c = Object($.a)(),
            s = c.provider,
            l = c.contracts,
            h = new _.a(s.provider),
            p = Object(ct.useToasts)().addToast,
            m = Object(d.g)(h, tt.a.indexpool, e),
            v = Object(n.useMemo)(
              function () {
                return h.utils.toWei("" === r ? "0" : r, "ether");
              },
              [r, h]
            );
          return {
            handleMultiMint: (function () {
              var t = Object(B.a)(
                Mt().mark(function t() {
                  var e, r, n, c, u;
                  return Mt().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = [
                                v,
                                o.map(function (t) {
                                  return new f.a(t)
                                    .multipliedBy(ut.d)
                                    .toFixed(0);
                                }),
                              ]),
                              (t.next = 3),
                              (e = m.methods).joinPool
                                .apply(e, r)
                                .estimateGas({ from: i })
                                .then(function (t) {
                                  return new f.a(t)
                                    .multipliedBy(ut.d)
                                    .toFixed(0);
                                })
                                .catch(function () {
                                  return p("Error during gas estimation", {
                                    appearance: "error",
                                    autoDismiss: !0,
                                  });
                                })
                            );
                          case 3:
                            if ((n = t.sent)) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt("return");
                          case 6:
                            return (
                              p("Waiting for transaction success...", {
                                appearance: "info",
                                autoDismiss: !0,
                              }),
                              (t.prev = 7),
                              (t.next = 10),
                              (c = l.indexpool).joinPool.apply(
                                c,
                                r.concat([{ from: i, gasLimit: n }])
                              )
                            );
                          case 10:
                            return (u = t.sent), (t.next = 13), u.wait();
                          case 13:
                            p("Transaction Success!", {
                              appearance: "success",
                              autoDismiss: !0,
                            }),
                              a(""),
                              (t.next = 21);
                            break;
                          case 17:
                            (t.prev = 17),
                              (t.t0 = t.catch(7)),
                              console.log(t.t0),
                              t.t0.message.includes(
                                "User denied transaction signature"
                              )
                                ? p("Denied Transaction", {
                                    appearance: "error",
                                    autoDismiss: !0,
                                  })
                                : p("Transaction Failed", {
                                    appearance: "error",
                                    autoDismiss: !0,
                                  });
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[7, 17]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          };
        },
        Wt = function (t) {
          var e = t.poolInfo,
            r = t.inputValue,
            i = t.inputError,
            c = t.handleChange,
            u = Object($.a)().provider,
            s = new _.a(u.provider),
            l = ft(),
            h = Object(n.useState)(
              e.tokens.map(function () {
                return "0";
              })
            ),
            p = Object(a.a)(h, 2),
            d = p[0],
            m = p[1],
            v = Object(n.useState)({}),
            y = Object(a.a)(v, 2),
            g = y[0],
            b = y[1],
            w = Object(n.useState)(!0),
            x = Object(a.a)(w, 2),
            E = x[0],
            L = x[1],
            O = Object(n.useState)(!0),
            j = Object(a.a)(O, 2),
            k = j[0],
            F = j[1],
            T = Ct(e, d, r),
            S = Dt(e),
            B = Object(n.useCallback)(function (t, e) {
              if (void 0 !== e && t > 0) {
                var r = (function (t, e, r) {
                  for (
                    var n = It(St(r), St(e)), o = [], a = 0;
                    a < t.length;
                    a++
                  ) {
                    var i = St(t[a]);
                    o.push(Bt(n, i).toFixed());
                  }
                  return o;
                })(
                  e.tokens.map(function (t) {
                    return new f.a(t.balance);
                  }),
                  e.totalSupply,
                  t
                );
                m(r);
              }
            }, []);
          Object(n.useEffect)(
            function () {
              var t = Object.values(g);
              if (t.length === e.tokens.length) {
                var r = t.find(function (t) {
                  return t;
                });
                r && F(r);
              }
            },
            [g, e.tokens.length]
          ),
            Object(n.useEffect)(
              function () {
                B(s.utils.toWei("" === r ? "0" : r, "ether"), e), L(!1);
              },
              [B, r, e, S, T, s.utils]
            );
          var I = Object(n.useCallback)(function (t, e) {
              b(function (r) {
                return Object(dt.a)(
                  Object(dt.a)({}, r),
                  {},
                  Object(N.a)({}, t, e)
                );
              });
            }, []),
            A = function (t) {
              c({
                value: t,
                handleAmounts: B,
                setAmounts: m,
                setIsDemandGreaterThanBalance: F,
              });
            },
            G = Rt({
              poolAddress: e.address,
              maxAmountsIn: d,
              wrappedHandleChange: A,
              inputValue: r,
            }).handleMultiMint;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: l.description },
              "Multi asset entry enables you to mint ",
              e.symbol,
              " according to its asset allocation."
            ),
            o.a.createElement(
              "div",
              { className: l.inputContainerMulti },
              o.a.createElement(Z, {
                onChange: A,
                tokenInfo: { symbol: e.symbol, address: e.address },
                size: "large",
                error: i,
                value: r.toString(),
                gradient: !0,
                header: o.a.createElement(
                  "div",
                  null,
                  "Tokens to",
                  o.a.createElement("b", null, " mint")
                ),
              })
            ),
            o.a.createElement(
              "div",
              { className: l.arrowContainer },
              o.a.createElement(vt.a, { fontSize: "large" })
            ),
            o.a.createElement(
              "div",
              { className: l.container },
              o.a.createElement(
                "div",
                { className: l.containerTitle },
                o.a.createElement(
                  "div",
                  { className: l.containerTitleMain },
                  " Mint with all underlying assets"
                ),
                o.a.createElement(
                  "div",
                  null,
                  " You must have all assets listed below to mint"
                ),
                o.a.createElement(
                  "div",
                  { className: l.approveStatus },
                  S ? "Assets approved" : "Approve all assets"
                )
              ),
              o.a.createElement(Nt, {
                poolInfo: e,
                poolAmounts: d,
                withButton: !S,
                onDemandGreaterThanBalance: I,
                demandBalanceMap: g,
              })
            ),
            Number(r) > 0
              ? o.a.createElement(
                  M,
                  {
                    variant: "contained",
                    outLine: Number(r) > 0 && k,
                    color: "primary",
                    size: "large",
                    disabled: E || !S || r <= 0 || k,
                    onClick: G,
                    className: l.mintButton,
                    error: Number(r) > 0 && k,
                  },
                  Number(r) > 0 && k
                    ? "Insufficient balance"
                    : "Mint ".concat(e.symbol)
                )
              : o.a.createElement(
                  M,
                  {
                    outLine: !0,
                    size: "large",
                    className: l.mintButton,
                    disabled: !0,
                  },
                  "Enter an Amount"
                )
          );
        },
        zt = function (t) {
          var e = t.poolInfo,
            r = Object($.a)().provider,
            i = new _.a(r.provider),
            c = Object(n.useState)(""),
            u = Object(a.a)(c, 2),
            s = u[0],
            l = u[1],
            h = Object(n.useState)("ROUTER"),
            p = Object(a.a)(h, 2),
            d = p[0],
            m = p[1],
            v = Object(n.useState)(),
            y = Object(a.a)(v, 2),
            g = y[0],
            b = y[1],
            w = ft({ asset: d }),
            x = Object(n.useCallback)(
              function (t) {
                var r = t.value,
                  n = t.setPotentialBnbSwappedAmount,
                  o = t.handleAmounts,
                  a = t.setAmounts,
                  c = t.setIsDemandGreaterThanBalance;
                if (void 0 !== r && "" !== r && Number(r) >= 0) {
                  var u = i.utils.toWei(r, "ether");
                  if (new f.a(u).gt(e.totalSupply))
                    return void b(
                      "Max value is "
                        .concat(
                          new f.a(e.totalSupply).div(1e18).toFixed(4),
                          " "
                        )
                        .concat(e.symbol)
                    );
                  b(null), l(r), o && o(u, e), c && c(!1);
                } else
                  b(null),
                    l(""),
                    a &&
                      a(
                        e.tokens.map(function () {
                          return "0";
                        })
                      ),
                    n && n(new f.a(0));
              },
              [e]
            ),
            E = function (t) {
              m(t), l("");
            };
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: w.buttonGroup },
              o.a.createElement(
                "button",
                {
                  className: ""
                    .concat(w.buttonTab, " ")
                    .concat("ROUTER" === d && w.activeButton),
                  onClick: function () {
                    return E("ROUTER");
                  },
                },
                "Single Asset"
              ),
              o.a.createElement(
                "button",
                {
                  className: ""
                    .concat(w.buttonTab, " ")
                    .concat("MULTI" === d && w.activeButton),
                  onClick: function () {
                    return E("MULTI");
                  },
                },
                "Multi Asset"
              )
            ),
            "ROUTER" === d
              ? o.a.createElement(pt, {
                  poolInfo: e,
                  inputValue: s,
                  setInputValue: l,
                  handleChange: x,
                  inputError: g,
                })
              : o.a.createElement(Wt, {
                  poolInfo: e,
                  inputValue: s,
                  handleChange: x,
                  inputError: g,
                })
          );
        };
      function Ut() {
        Ut = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var Vt = function (t) {
          var e = t.indexPool,
            r = t.indexPoolTokens,
            o = t.burnWithThisToken,
            a = t.wrappedHandleChange,
            i = t.inputValue,
            c = t.setLoader,
            s = t.setPotentialBnbSwappedAmount,
            l = Object(u.c)(),
            h = l.account,
            p = l.chainId,
            m = Object($.a)(),
            v = m.provider,
            y = m.contracts,
            g = new _.a(v.provider),
            b = Object(ct.useToasts)().addToast,
            w = Object(d.g)(
              g,
              tt.a.uniswapRouterBurner,
              tt.b[p][e].uniswapRouterBurner
            ),
            x = o.address === ut.a || o.symbol === ut.h,
            E = x ? tt.b[p].WBNB : o.address,
            L = Object(n.useMemo)(
              function () {
                return r.map(function (t) {
                  return t.address.toLowerCase() ===
                    tt.b[p].WBNB.toLowerCase() || x
                    ? ut.a
                    : tt.b[p].WBNB;
                });
              },
              [r, x, p]
            ),
            O = Object(n.useMemo)(
              function () {
                return g.utils.toWei("" === i ? "0" : i, "ether");
              },
              [i, g]
            ),
            j = Object(n.useMemo)(
              function () {
                return r.map(function () {
                  return 1;
                });
              },
              [r]
            );
          return (
            Object(n.useEffect)(
              function () {
                i &&
                  Object(B.a)(
                    Ut().mark(function t() {
                      var r;
                      return Ut().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                w.methods
                                  .burnForAllTokensAndSwapForTokens(
                                    e,
                                    j,
                                    L,
                                    O,
                                    E,
                                    "1"
                                  )
                                  .call({ from: h })
                              );
                            case 2:
                              (r = t.sent), s(r);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
              },
              [h, w, L, j, E, e, i, O, s]
            ),
            {
              handleBurn: (function () {
                var t = Object(B.a)(
                  Ut().mark(function t() {
                    var r, n, i, u;
                    return Ut().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((c(!0), !x)) {
                                t.next = 25;
                                break;
                              }
                              return (
                                (t.next = 4),
                                w.methods
                                  .burnForAllTokensAndSwapForETH(
                                    e,
                                    j,
                                    L,
                                    O,
                                    "1"
                                  )
                                  .estimateGas({ from: h })
                                  .then(function (t) {
                                    return new f.a(t)
                                      .multipliedBy(ut.d)
                                      .toFixed(0);
                                  })
                                  .catch(function () {
                                    b("Error during gas estimation", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                      c(!1);
                                  })
                              );
                            case 4:
                              if ((r = t.sent)) {
                                t.next = 7;
                                break;
                              }
                              return t.abrupt("return");
                            case 7:
                              return (
                                b("Waiting for transaction success...", {
                                  appearance: "info",
                                  autoDismiss: !0,
                                }),
                                (t.prev = 8),
                                (t.next = 11),
                                y.uniswapRouterBurner.burnForAllTokensAndSwapForETH(
                                  e,
                                  j,
                                  L,
                                  O,
                                  "1",
                                  { from: h, gasLimit: r }
                                )
                              );
                            case 11:
                              return (n = t.sent), (t.next = 14), n.wait();
                            case 14:
                              b("Transaction Success!", {
                                appearance: "success",
                                autoDismiss: !0,
                              }),
                                a(""),
                                c(!1),
                                (t.next = 23);
                              break;
                            case 19:
                              (t.prev = 19),
                                (t.t0 = t.catch(8)),
                                console.log(t.t0),
                                t.t0.message.includes(
                                  "User denied transaction signature"
                                )
                                  ? (b("Denied Transaction", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1))
                                  : (b("Transaction Failed", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1));
                            case 23:
                              t.next = 46;
                              break;
                            case 25:
                              return (
                                (t.next = 27),
                                w.methods
                                  .burnForAllTokensAndSwapForTokens(
                                    e,
                                    j,
                                    L,
                                    O,
                                    o.address,
                                    "1"
                                  )
                                  .estimateGas({ from: h })
                                  .then(function (t) {
                                    return new f.a(t)
                                      .multipliedBy(ut.d)
                                      .toFixed(0);
                                  })
                                  .catch(function () {
                                    b("Error during gas estimation", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                      c(!1);
                                  })
                              );
                            case 27:
                              if ((i = t.sent)) {
                                t.next = 30;
                                break;
                              }
                              return t.abrupt("return");
                            case 30:
                              return (
                                b("Waiting for transaction success...", {
                                  appearance: "info",
                                  autoDismiss: !0,
                                }),
                                (t.prev = 31),
                                (t.next = 34),
                                y.uniswapRouterBurner.burnForAllTokensAndSwapForTokens(
                                  e,
                                  j,
                                  L,
                                  O,
                                  o.address,
                                  "1",
                                  { from: h, gasLimit: i }
                                )
                              );
                            case 34:
                              return (u = t.sent), (t.next = 37), u.wait();
                            case 37:
                              b("Transaction Success!", {
                                appearance: "success",
                                autoDismiss: !0,
                              }),
                                a(""),
                                c(!1),
                                (t.next = 46);
                              break;
                            case 42:
                              (t.prev = 42),
                                (t.t1 = t.catch(31)),
                                console.log(t.t1),
                                t.t1.message.includes(
                                  "User denied transaction signature"
                                )
                                  ? (b("Denied Transaction", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1))
                                  : (b("Transaction Failed", {
                                      appearance: "error",
                                      autoDismiss: !0,
                                    }),
                                    c(!1));
                            case 46:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [
                        [8, 19],
                        [31, 42],
                      ]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            }
          );
        },
        Yt = Object(m.a)({
          buttonGroup: { marginBottom: "10px" },
          buttonTab: {
            color: "white",
            marginRight: "20px",
            background: "none",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          },
          activeButton: { fontWeight: "700", borderBottom: "white solid 2px" },
          container: {
            background: "rgba(0, 0, 0, 0.25)",
            borderRadius: "16px",
            margin: "16px 0 16px",
            display: "flex",
            flexDirection: "column",
          },
          selectContainer: {
            maxHeight: "285px",
            overflow: "auto",
            padding: "0 18px",
            height: "100%",
          },
          mintButton: {
            marginTop: "16px",
            borderRadius: "100px",
            background: "#8b67d3",
            width: "100%",
          },
          arrowContainer: {
            display: "flex",
            borderRadius: "100%",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            background: "rgba(0, 0, 0, 0.25)",
            width: "40px",
            height: "40px",
            color: "#F0B90B",
          },
          inputContainerBot: {},
          inputContainer: { borderBottom: "1px solid #3FA9F5" },
          inputContainerMulti: { margin: "16px 0" },
          containerTitle: {
            margin: "16px",
            textAlign: "center",
            lineHeight: "160%",
            color: "#9F9F9F",
          },
          containerTitleMain: { color: "#F0B90B", fontWeight: "bold" },
          description: { lineHeight: "160%", marginBottom: "32px" },
          backButton: { borderRadius: "32px" },
          enter: { border: "1px solid #3FA9F5" },
        });
      function Ht() {
        Ht = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var $t = function (t) {
          var e = t.poolInfo,
            r = t.inputValue,
            i = t.setInputValue,
            c = t.handleChange,
            s = t.inputError,
            l = t.handleMaxValue,
            h = Object(u.c)().chainId,
            p = Object($.a)().provider,
            m = new _.a(p.provider),
            v = Yt(),
            y = Object(n.useState)(rt.a[h][0]),
            g = Object(a.a)(y, 2),
            b = g[0],
            w = g[1],
            x = Object(n.useState)(!1),
            E = Object(a.a)(x, 2),
            O = E[0],
            j = E[1],
            k = Object(n.useState)(!1),
            N = Object(a.a)(k, 2),
            F = N[0],
            T = N[1],
            S = Object(n.useState)(new f.a(0)),
            I = Object(a.a)(S, 2),
            G = I[0],
            C = I[1],
            P = Object(n.useState)(
              e.tokens.map(function () {
                return "0";
              })
            ),
            D = Object(a.a)(P, 2),
            R = (D[0], D[1]),
            W = Object(at.a)(tt.b[h][e.address].uniswapRouterBurner, e.address),
            z = Object(it.a)(
              tt.b[h][e.address].uniswapRouterBurner,
              e.address,
              j
            ).onApprove,
            U = Object(n.useMemo)(
              function () {
                return Object(d.f)(
                  W,
                  m.utils.toWei("" === r ? "0" : r, "ether")
                );
              },
              [W, r]
            ),
            V = function (t) {
              w(t), i(""), C(new f.a(0)), T(!1);
            },
            Y = (function () {
              var t = Object(B.a)(
                Ht().mark(function t() {
                  return Ht().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return j(!0), (t.next = 3), z();
                        case 3:
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
            H = function (t) {
              c({ value: t, setPotentialBnbSwappedAmount: C, setAmounts: R });
            },
            J = Vt({
              indexPool: e.address,
              indexPoolTokens: e.tokens,
              burnWithThisToken: b,
              wrappedHandleChange: H,
              inputValue: r,
              setLoader: j,
              setPotentialBnbSwappedAmount: C,
            }).handleBurn;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: v.description },
              "Burn your ",
              e.symbol,
              " token directly to a single listed asset in one transaction using the underlaying tokens."
            ),
            o.a.createElement(
              "div",
              { className: v.container },
              F
                ? o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      M,
                      { className: v.backButton },
                      o.a.createElement(A.a, {
                        onClick: function () {
                          return T(!1);
                        },
                      })
                    ),
                    o.a.createElement(
                      "div",
                      { className: v.selectContainer },
                      e.allTokensInfo.map(function (t) {
                        return o.a.createElement(ot, {
                          token: t,
                          key: t.address,
                          poolInfo: e,
                          handleMintWithToken: V,
                        });
                      })
                    )
                  )
                : o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: v.inputContainer },
                      o.a.createElement(Z, {
                        onChange: H,
                        poolInfo: e,
                        tokenInfo: { symbol: e.symbol, address: e.address },
                        size: "large",
                        value: r.toString(),
                        gradient: !0,
                        handleMaxValue: l,
                        header: o.a.createElement(
                          "div",
                          null,
                          "Tokens to ",
                          o.a.createElement("b", null, "burn")
                        ),
                      })
                    ),
                    o.a.createElement(
                      "div",
                      { className: v.inputContainerBot },
                      o.a.createElement(Z, {
                        tokenInfo: b,
                        size: "large",
                        disabled: !0,
                        valueWei: !0,
                        header: o.a.createElement(
                          "div",
                          null,
                          o.a.createElement("b", null, "Redeem")
                        ),
                        value: G.toString(),
                        tokenSelectList: F,
                        setTokenSelectList: T,
                        showUsdPrice: !0,
                      })
                    )
                  )
            ),
            U
              ? o.a.createElement(
                  o.a.Fragment,
                  null,
                  Number(r) > 0
                    ? o.a.createElement(
                        M,
                        {
                          variant: "contained",
                          color: "primary",
                          size: "large",
                          loader: O,
                          error: s,
                          onClick: J,
                          className: v.mintButton,
                        },
                        s || "Burn ".concat(e.symbol)
                      )
                    : o.a.createElement(
                        M,
                        {
                          outLine: !0,
                          error: s,
                          size: "large",
                          className: L()(v.mintButton, v.enter),
                          disabled: !0,
                        },
                        s || "Enter an Amount"
                      )
                )
              : o.a.createElement(
                  M,
                  {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    loader: O,
                    className: v.mintButton,
                    onClick: Y,
                  },
                  "Approve ",
                  e.symbol
                )
          );
        },
        Jt = r(1497),
        qt = r.n(Jt);
      function Xt() {
        Xt = function () {
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
                    var c = w(i, r);
                    if (c) {
                      if (c === l) continue;
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
                      u.arg === l)
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
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        t.wrap = u;
        var l = {};
        function f() {}
        function h() {}
        function p() {}
        var d = {};
        c(d, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(O([])));
        v && v !== e && r.call(v, o) && (d = v);
        var y = (p.prototype = f.prototype = Object.create(d));
        function g(t) {
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
        function w(t, e) {
          var r = t.iterator[e.method];
          if (void 0 === r) {
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
          var n = s(r, t.iterator, e.arg);
          if ("throw" === n.type)
            return (
              (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
            );
          var o = n.arg;
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                l)
              : o
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
        function L(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
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
          c(y, "constructor", p),
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
              (t.prototype = Object.create(y)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          g(b.prototype),
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
          g(y),
          c(y, i, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
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
                this.tryEntries.forEach(E),
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
                  ? ((this.method = "next"), (this.next = a.finallyLoc), l)
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
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), E(r), l;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    E(r);
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
                l
              );
            },
          }),
          t
        );
      }
      var Kt,
        Qt = function (t) {
          var e = t.poolAddress,
            r = t.inputValue,
            o = t.minAmountsOut,
            a = t.wrappedHandleChange,
            i = t.setLoader,
            c = Object(u.c)().account,
            s = Object($.a)(),
            l = s.provider,
            h = s.contracts,
            p = new _.a(l.provider),
            m = Object(ct.useToasts)().addToast,
            v = Object(d.g)(p, tt.a.indexpool, e),
            y = Object(n.useMemo)(
              function () {
                return p.utils.toWei("" === r ? "0" : r, "ether");
              },
              [r, p]
            );
          return {
            handleMultiBurn: (function () {
              var t = Object(B.a)(
                Xt().mark(function t() {
                  var e, r, n, u, s;
                  return Xt().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              i(!0),
                              (r = [
                                y.toString(),
                                o.map(function () {
                                  return 1;
                                }),
                              ]),
                              (t.next = 4),
                              (e = v.methods).exitPool
                                .apply(e, r)
                                .estimateGas({ from: c })
                                .then(function (t) {
                                  return new f.a(t)
                                    .multipliedBy(1.1)
                                    .toFixed(0);
                                })
                                .catch(function () {
                                  m("Error during gas estimation", {
                                    appearance: "error",
                                    autoDismiss: !0,
                                  }),
                                    i(!1);
                                })
                            );
                          case 4:
                            if ((n = t.sent)) {
                              t.next = 7;
                              break;
                            }
                            return t.abrupt("return");
                          case 7:
                            return (
                              m("Waiting for transaction success...", {
                                appearance: "info",
                                autoDismiss: !0,
                              }),
                              (t.prev = 8),
                              (t.next = 11),
                              (u = h.indexpool).exitPool.apply(
                                u,
                                r.concat([{ from: c, gasLimit: n }])
                              )
                            );
                          case 11:
                            return (s = t.sent), (t.next = 14), s.wait();
                          case 14:
                            m("Transaction Success!", {
                              appearance: "success",
                              autoDismiss: !0,
                            }),
                              a(""),
                              i(!1),
                              (t.next = 24);
                            break;
                          case 19:
                            (t.prev = 19),
                              (t.t0 = t.catch(8)),
                              console.log(t.t0),
                              t.t0.message.includes(
                                "User denied transaction signature"
                              )
                                ? m("Denied Transaction", {
                                    appearance: "error",
                                    autoDismiss: !0,
                                  })
                                : m("Transaction Failed", {
                                    appearance: "error",
                                    autoDismiss: !0,
                                  }),
                              i(!1);
                          case 24:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[8, 19]]
                  );
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
          };
        },
        Zt = function (t) {
          var e = t.poolInfo,
            r = t.inputValue,
            i = t.inputError,
            c = t.handleChange,
            u = t.poolAllowance,
            s = t.handleMaxValue,
            l = Object($.a)().provider,
            f = new _.a(l.provider),
            h = Yt(),
            p = Object(n.useState)(!1),
            d = Object(a.a)(p, 2),
            m = d[0],
            v = d[1],
            y = Object(n.useState)(
              e.tokens.map(function () {
                return "0";
              })
            ),
            g = Object(a.a)(y, 2),
            b = g[0],
            w = g[1],
            x = f.utils.toWei("" === r ? "0" : r, "ether"),
            E = Object(n.useCallback)(
              function (t, r) {
                if (void 0 !== r && t > 0) {
                  var n = _t(
                    e.tokens.map(function (t) {
                      return t.balance;
                    }),
                    e.tokens.map(function (t) {
                      return t.weight;
                    }),
                    e.totalSupply,
                    t
                  );
                  w(n);
                }
              },
              [e.tokens, e.totalSupply, e.weights]
            ),
            L = Object(it.a)(e.address, e.address, v).onApprove,
            O = function (t) {
              c({ value: t, handleAmounts: E, setAmounts: w });
            },
            j = Qt({
              poolAddress: e.address,
              minAmountsOut: b,
              inputValue: r,
              setLoader: v,
              wrappedHandleChange: O,
            }).handleMultiBurn;
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: h.description },
              "Multi asset burn enables you to redeem your ",
              e.symbol,
              " token to all underlying assets."
            ),
            o.a.createElement(
              "div",
              { className: h.inputContainerMulti },
              o.a.createElement(Z, {
                onChange: O,
                tokenInfo: { symbol: e.symbol, address: e.address },
                size: "large",
                error: i,
                value: r.toString(),
                gradient: !0,
                header: o.a.createElement(
                  "div",
                  null,
                  "Tokens to",
                  o.a.createElement("b", null, " burn")
                ),
                handleMaxValue: s,
              })
            ),
            o.a.createElement(
              "div",
              { className: h.arrowContainer },
              " ",
              o.a.createElement(qt.a, { fontSize: "large" })
            ),
            o.a.createElement(
              "div",
              { className: h.container },
              o.a.createElement(
                "div",
                { className: h.containerTitle },
                o.a.createElement(
                  "div",
                  { className: h.containerTitleMain },
                  "Redeem underlying assets"
                ),
                o.a.createElement(
                  "div",
                  null,
                  "Upon burn, you will receive all assets below"
                )
              ),
              o.a.createElement(Nt, { poolInfo: e, poolAmounts: b })
            ),
            u.toNumber() >= x
              ? Number(r) > 0
                ? o.a.createElement(
                    M,
                    {
                      variant: "contained",
                      color: "primary",
                      size: "large",
                      loader: m,
                      onClick: j,
                      className: h.mintButton,
                    },
                    "Burn ",
                    e.symbol
                  )
                : o.a.createElement(
                    M,
                    {
                      error: i,
                      outLine: !0,
                      size: "large",
                      className: h.mintButton,
                      disabled: !0,
                    },
                    i || "Enter an Amount"
                  )
              : o.a.createElement(
                  M,
                  {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    onClick: L,
                    className: h.mintButton,
                    loader: m,
                  },
                  "APPROVE"
                )
          );
        },
        te = function (t) {
          var e = t.poolInfo,
            r = Object($.a)().provider,
            i = new _.a(r.provider),
            c = Object(at.a)(e.address, e.address),
            u = Object(n.useState)(""),
            s = Object(a.a)(u, 2),
            l = s[0],
            h = s[1],
            p = Object(n.useState)("ROUTER"),
            d = Object(a.a)(p, 2),
            m = d[0],
            v = d[1],
            y = Object(n.useState)(),
            g = Object(a.a)(y, 2),
            b = g[0],
            w = g[1],
            x = Object(H.a)(e.address),
            E = Yt(),
            L = function (t) {
              var r = t.value,
                n = t.setPotentialBnbSwappedAmount,
                o = t.handleAmounts,
                a = t.setAmounts;
              if ((w(), void 0 !== r && "" !== r && Number(r) >= 0 && e)) {
                var c = i.utils.toWei(r, "ether");
                if (new f.a(c).gt(e.totalSupply))
                  return void w(
                    "Max value is "
                      .concat(new f.a(e.totalSupply).div(1e18).toFixed(4), " ")
                      .concat(e.symbol)
                  );
                if (
                  Number(r) >
                  Number(
                    i.utils.fromWei(
                      null === x || void 0 === x ? void 0 : x.toFixed(0),
                      "ether"
                    )
                  )
                )
                  return void w("Insufficient balance");
                w(null), h(r);
                var u = _t(
                  e.tokens.map(function (t) {
                    return t.balance;
                  }),
                  e.tokens.map(function (t) {
                    return t.weight;
                  }),
                  e.totalSupply,
                  c
                );
                a && a(u), o && o(c, e);
              } else {
                w(null),
                  h(""),
                  a &&
                    a(
                      e.tokens.map(function () {
                        return "0";
                      })
                    ),
                  n && n(new f.a(0));
              }
            },
            O = function (t) {
              v(t), h("");
            },
            j = function (t) {
              h(t);
            };
          return x
            ? o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "div",
                  { className: E.buttonGroup },
                  o.a.createElement(
                    "button",
                    {
                      className: ""
                        .concat(E.buttonTab, " ")
                        .concat("ROUTER" === m && E.activeButton),
                      onClick: function () {
                        return O("ROUTER");
                      },
                    },
                    "Single Asset"
                  ),
                  o.a.createElement(
                    "button",
                    {
                      className: ""
                        .concat(E.buttonTab, " ")
                        .concat("MULTI" === m && E.activeButton),
                      onClick: function () {
                        return O("MULTI");
                      },
                    },
                    "Multi Asset"
                  )
                ),
                "ROUTER" === m
                  ? o.a.createElement($t, {
                      poolInfo: e,
                      inputValue: l,
                      setInputValue: h,
                      handleChange: L,
                      inputError: b,
                      poolAllowance: c,
                      handleMaxValue: j,
                    })
                  : o.a.createElement(Zt, {
                      poolAllowance: c,
                      poolInfo: e,
                      inputValue: l,
                      handleChange: L,
                      inputError: b,
                      handleMaxValue: j,
                    })
              )
            : null;
        },
        ee = Object(m.a)({
          card: {
            height: "100%",
            backgroundColor: "#D1D1D1",
            color: "#fafafa",
            maxWidth: "410px",
            borderRadius: "32px",
          },
          header: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            height: "70px",
          },
          button: {
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#000000",
            fontSize: "20px",
            fontWeight: "400",
            marginRight: "10px",
          },
          activeButton: { fontWeight: "700" },
          content: {
            padding: "32px",
            minWidth: "100%",
            color: "#fafafa",
            backgroundColor: "#8b67d3",
            borderRadius: "32px",
            position: "relative",
            minHeight: "200px",
          },
          farmPanel: { padding: "0", paddingBottom: "20px" },
          nowrapper: { display: "flex", flexWrap: "nowrap" },
          difference: { color: "#00F600!important" },
          spinner: { display: "flex", justifyContent: "center" },
          kebabContainer: { position: "relative" },
          kebabMenu: {
            position: "absolute",
            top: "40px",
            right: "20px",
            width: "222px",
            height: "58px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#4D4D4D",
            borderRadius: "16px 4px 16px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& a": {
              display: "flex",
              alignItems: "center",
              "& svg": { "& path": { stroke: "#fff" } },
            },
          },
          menuIcon: {
            color: "#191919",
            "&:hover": { color: "#191919", opacity: 1 },
            "& svg": { color: "#191919", "&:hover": { color: "white" } },
          },
        }),
        re = function (t) {
          var e = t.poolInfo,
            r = Object(n.useState)("MINT"),
            i = Object(a.a)(r, 2),
            u = i[0],
            s = i[1],
            l = ee({ currentActionTab: u });
          return o.a.createElement(
            F.a,
            { className: l.card },
            o.a.createElement(
              c.a,
              { container: !0, alignItems: "flex-start" },
              o.a.createElement(
                "div",
                { className: l.header },
                o.a.createElement(
                  "button",
                  {
                    className: L()(
                      l.button,
                      Object(N.a)({}, l.activeButton, "MINT" === u)
                    ),
                    onClick: function () {
                      return s("MINT");
                    },
                  },
                  "Mint"
                ),
                o.a.createElement(
                  "button",
                  {
                    className: L()(
                      l.button,
                      Object(N.a)({}, l.activeButton, "BURN" === u)
                    ),
                    onClick: function () {
                      return s("BURN");
                    },
                  },
                  "Burn"
                )
              ),
              o.a.createElement(
                c.a,
                {
                  item: !0,
                  xs: 12,
                  className: L()(
                    l.content,
                    Object(N.a)({}, l.farmPanel, "FARM" === u)
                  ),
                },
                e
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      "MINT" === u && o.a.createElement(zt, { poolInfo: e }),
                      "BURN" === u && o.a.createElement(te, { poolInfo: e })
                    )
                  : o.a.createElement(
                      "div",
                      { className: l.spinner },
                      o.a.createElement(T.a, { color: "primary" })
                    )
              )
            )
          );
        },
        ne = r(963),
        oe = Object(m.a)(function () {
          return {
            container: { color: "#fafafa", padding: "100px 0" },
            button: { color: "#fafafa" },
            title: { textShadow: "0px 4px 12px #2C2B2B" },
            backgroundVideo: {
              position: "fixed",
              zIndex: "-99",
              width: "100vw",
              height: "100vh",
            },
            loader: {
              position: "absolute",
              top: "50%",
              transform: "translate(0, -50%)",
            },
            actionCard: {
              marginLeft: "48px",
              display: "flex",
              justifyContent: "center",
              maxWidth: "362px",
              "@media (max-width: 1280px)": {
                position: "absolute",
                margin: "0 auto",
                top: "96px",
                zIndex: 10,
                width: "350px",
                display: function (t) {
                  return t.showActionCard ? "block" : "none";
                },
              },
            },
            actionOverlay: {
              display: "none",
              "@media (max-width: 1280px)": {
                position: "fixed",
                top: "0px",
                left: "0px",
                background: "rgba(0, 0, 0, 0.8)",
                zIndex: 8,
                width: "100vw",
                height: "100vh",
                display: function (t) {
                  return t.showActionCard ? "block" : "none";
                },
              },
            },
            showActionButton: {
              display: "none",
              "@media (max-width: 1280px)": {
                background: "#1E1F20",
                borderRadius: "100px",
                position: "fixed",
                margin: "0 auto",
                zIndex: 5,
                display: "block",
                bottom: "32px",
              },
            },
            actionOverlayClose: {
              display: "none",
              "@media (max-width: 1280px)": {
                display: "block",
                position: "absolute",
                top: "42px",
                right: "5%",
                color: "white",
                marginRight: "20px",
                background: "white",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
                fontWeight: "bold",
                zIndex: 100,
              },
            },
          };
        }),
        ae = r(37),
        ie = r(923),
        ce = r.n(ie),
        ue = Object(ae.c)(
          Kt ||
            (Kt = Object(i.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          ce.a
        ),
        se = function () {
          var t = Object(ne.a)("0x60EBfD605Cb25C7796F729c78a4453ACeCb1CE03"),
            e = Object(u.c)().chainId,
            r = Object(n.useState)(!1),
            i = Object(a.a)(r, 2),
            l = i[0],
            f = i[1],
            h = oe({ showActionCard: l });
          return t
            ? o.a.createElement(
                s.a,
                null,
                o.a.createElement(ue, null),
                o.a.createElement(
                  c.a,
                  {
                    container: !0,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    className: h.container,
                  },
                  t && e
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(k, { poolInfo: t }),
                        o.a.createElement(
                          c.a,
                          { item: !0, lg: !0, md: !0, className: h.actionCard },
                          o.a.createElement(re, { poolInfo: t })
                        ),
                        l &&
                          o.a.createElement("div", {
                            className: h.actionOverlay,
                          }),
                        l &&
                          o.a.createElement(
                            "button",
                            {
                              className: h.actionOverlayClose,
                              onClick: function () {
                                return f(!1);
                              },
                            },
                            "CLOSE"
                          ),
                        o.a.createElement(
                          "div",
                          { className: h.showActionButton },
                          o.a.createElement(
                            M,
                            {
                              outLine: !0,
                              onClick: function () {
                                return f(!0);
                              },
                            },
                            "Mint/Burn"
                          )
                        )
                      )
                    : o.a.createElement("div", null, "Loading")
                )
              )
            : null;
        };
      e.default = function () {
        return o.a.createElement(se, null);
      };
    },
    923: function (t, e, r) {
      t.exports = r.p + "static/media/background.a537c370.jpg";
    },
  },
]);
