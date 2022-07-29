/*!For license information please see 27.7d396aa2.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [27],
  {
    1019: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(26),
        a = r(0),
        i = r(68);
      function c() {
        c = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          o = n.iterator || "@@iterator",
          a = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag";
        function u(t, e, r) {
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
          u({}, "");
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
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
                    var c = x(i, r);
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
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        t.wrap = l;
        var f = {};
        function h() {}
        function p() {}
        function d() {}
        var v = {};
        u(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(j([])));
        m && m !== e && r.call(m, o) && (v = m);
        var g = (d.prototype = h.prototype = Object.create(v));
        function b(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
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
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
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
          (p.prototype = d),
          u(g, "constructor", d),
          u(d, "constructor", p),
          (p.displayName = u(d, i, "GeneratorFunction")),
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
                : ((t.__proto__ = d), u(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(g)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          u(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(l(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          b(g),
          u(g, i, "Generator"),
          u(g, o, function () {
            return this;
          }),
          u(g, "toString", function () {
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
                this.tryEntries.forEach(O),
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
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    O(r);
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
        var u = Object(a.useState)(null),
          l = Object(o.a)(u, 2),
          s = l[0],
          f = l[1],
          h = Object(i.c)().account,
          p = Object(a.useCallback)(
            Object(n.a)(
              c().mark(function r() {
                var n;
                return c().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), t.allowance(h, e);
                      case 2:
                        (n = r.sent), f(n);
                      case 4:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            ),
            [h, e, t]
          );
        return (
          Object(a.useEffect)(
            function () {
              h &&
                e &&
                t &&
                p().catch(function (t) {
                  return console.error(
                    "Failed to fetch allowance: ".concat(t.stack)
                  );
                });
            },
            [h, e, t, r, p]
          ),
          s
        );
      };
    },
    1034: function (t, e, r) {
      "use strict";
      var n = r(11),
        o = r(16),
        a = r(0),
        i = r(280),
        c = r(922);
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
        } catch (N) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
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
                    var c = x(i, r);
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
          } catch (N) {
            return { type: "throw", arg: N };
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
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
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
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(l(e, r, n, o), a);
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
                this.tryEntries.forEach(O),
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
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    O(r);
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
      e.a = function (t) {
        var e = Object(i.a)(),
          r = Object(c.a)();
        function l() {
          return (l = Object(n.a)(
            u().mark(function t(r, n, a, i, c, l) {
              var s, f;
              return u().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e.zapIn(r, n, a, i);
                    case 2:
                      return (s = t.sent), (t.next = 5), s.wait();
                    case 5:
                      return (
                        (t.next = 7), e.externalTokens[n].balanceOf(e.myAccount)
                      );
                    case 7:
                      return (
                        (f = t.sent),
                        (t.next = 10),
                        l(
                          new o.BigNumber(f.sub(c).toString())
                            .div(new o.BigNumber(10).pow(18))
                            .toFixed()
                        )
                      );
                    case 10:
                      return t.abrupt("return", t.sent);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        return {
          onZap: Object(a.useCallback)(
            function (n, o, a, i) {
              r(
                e.zapIn(n, o, a, i),
                "Zap ".concat(a, " in ").concat(t.depositTokenName, ".")
              );
            },
            [t, e, r]
          ),
          onZapV1: Object(a.useCallback)(function (n, o, a) {
            r(
              e.zapInv1(n, o, a),
              "Zap ".concat(a, " in ").concat(t.depositTokenName, ".")
            );
          }, []),
          onZapIn: function (t, e, r, n, o, a) {
            return l.apply(this, arguments);
          },
        };
      };
    },
    1061: function (t, e, r) {
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
        } catch (N) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var o = e && e.prototype instanceof h ? e : h,
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
                    var c = x(i, r);
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
          } catch (N) {
            return { type: "throw", arg: N };
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
        function E(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
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
          b(w.prototype),
          c(w.prototype, a, function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new w(l(e, r, n, o), a);
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
                this.tryEntries.forEach(O),
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
                  return this.complete(r.completion, r.afterLoc), O(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    O(r);
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
      e.a = function (t) {
        var e = Object(a.useState)(),
          r = Object(o.a)(e, 2),
          l = r[0],
          s = r[1],
          f = Object(c.a)().slowRefresh,
          h = Object(i.a)();
        return (
          Object(a.useEffect)(
            function () {
              function e() {
                return (e = Object(n.a)(
                  u().mark(function e() {
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.t0 = s),
                                (e.next = 4),
                                h.getLPStat(t)
                              );
                            case 4:
                              (e.t1 = e.sent), (0, e.t0)(e.t1), (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t2 = e.catch(0)),
                                console.error(e.t2);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [s, h, f, t]
          ),
          l
        );
      };
    },
    1091: function (t, e, r) {
      "use strict";
      var n = r(43),
        o = r(11),
        a = r(26),
        i = r(0),
        c = r.n(i),
        u = r(916),
        l = r.n(u),
        s = r(2084),
        f = r(2109),
        h = r(282),
        p = r(2119),
        d = r(2134),
        v = r(37),
        y = r(68),
        m = r(925),
        g = r(941),
        b = r(1061),
        w = r(928),
        x = r(280),
        E = r(117),
        O = r(14),
        L = r(947),
        j = r(1019),
        k = r(21);
      function N() {
        N = function () {
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
            i = new O(n || []);
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
          y = v && v(v(L([])));
        y && y !== e && r.call(y, o) && (d = y);
        var m = (p.prototype = f.prototype = Object.create(d));
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
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function L(t) {
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
          (t.values = L),
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
                  return this.complete(r.completion, r.afterLoc), E(r), s;
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
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      var _,
        S = E.a.constants.MaxUint256,
        F = O.a.from("1000000000000000000000000");
      !(function (t) {
        (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
          (t[(t.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (t[(t.PENDING = 2)] = "PENDING"),
          (t[(t.APPROVED = 3)] = "APPROVED");
      })(_ || (_ = {}));
      var P,
        T,
        G = function (t) {
          var e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Object(x.a)();
          t === k.b
            ? (e = n.BNB)
            : t === k.r
            ? (e = n.USDEX)
            : t === k.g
            ? (e = n.DEXSHARE)
            : t === k.d
            ? (e = n.externalTokens[k.d])
            : t === k.q
            ? (e = n.externalTokens[k.q])
            : t === k.a && (e = n.externalTokens[k.a]);
          var a = Object(L.a)(e.address, r ? k.x : k.w),
            c = Object(j.a)(e, r ? k.x : k.w, a),
            u = Object(i.useMemo)(
              function () {
                return e === n.BNB
                  ? _.APPROVED
                  : c
                  ? c.lt(F)
                    ? a
                      ? _.PENDING
                      : _.NOT_APPROVED
                    : _.APPROVED
                  : _.UNKNOWN;
              },
              [c, a, e, n]
            ),
            l = Object(L.b)(),
            s = Object(i.useCallback)(
              Object(o.a)(
                N().mark(function t() {
                  var n;
                  return N().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (u === _.NOT_APPROVED) {
                            t.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            t.abrupt("return")
                          );
                        case 3:
                          return (t.next = 5), e.approve(r ? k.x : k.w, S);
                        case 5:
                          (n = t.sent),
                            l(n, {
                              summary: "Approve ".concat(e.symbol),
                              approval: {
                                tokenAddress: e.address,
                                spender: r ? k.x : k.w,
                              },
                            });
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [u, e, l]
            );
          return [u, s];
        },
        A = r(35);
      function C() {
        C = function () {
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
            i = new O(n || []);
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
          y = v && v(v(L([])));
        y && y !== e && r.call(y, o) && (d = y);
        var m = (p.prototype = f.prototype = Object.create(d));
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
        function E(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function L(t) {
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
          (t.values = L),
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
                  return this.complete(r.completion, r.afterLoc), E(r), s;
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
                (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          t
        );
      }
      var I = function (t) {
          var e = t.onConfirm,
            r = t.tokenName,
            n = void 0 === r ? "" : r,
            u = t.decimals,
            h = void 0 === u ? 18 : u,
            p = t.isV1,
            d = Object(x.a)(),
            v = Object(y.c)().balance,
            E = (Number(v) / 1e18).toFixed(4).toString(),
            O = Object(w.a)(d.USDEX),
            L = Object(w.a)(d.externalTokens.USDC),
            j = Object(w.a)(d.DEXSHARE),
            N = Object(i.useState)(""),
            S = Object(a.a)(N, 2),
            F = S[0],
            P = S[1],
            T = Object(i.useState)(k.b),
            I = Object(a.a)(T, 2),
            q = I[0],
            z = I[1],
            U = Object(i.useState)(E),
            M = Object(a.a)(U, 2),
            Y = M[0],
            Z = M[1],
            $ = Object(i.useState)({ token0: "0", token1: "0" }),
            X = Object(a.a)($, 2),
            H = X[0],
            W = X[1],
            K = G(q, p),
            J = Object(a.a)(K, 2),
            Q = J[0],
            tt = J[1],
            et = Object(b.a)("USDEX-USDC-LP"),
            rt = Object(b.a)("DEXSHARE-BNB-LP"),
            nt = Object(i.useMemo)(
              function () {
                return et || null;
              },
              [et]
            ),
            ot = Object(i.useMemo)(
              function () {
                return rt || null;
              },
              [rt]
            ),
            at = n.startsWith(k.r)
              ? null === nt || void 0 === nt
                ? void 0
                : nt.ftmAmount
              : null === ot || void 0 === ot
              ? void 0
              : ot.ftmAmount;
          var it = (function () {
              var t = Object(o.a)(
                C().mark(function t(e) {
                  var r;
                  return C().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (("" !== e.currentTarget.value &&
                              0 !== e.currentTarget.value) ||
                              (P(e.currentTarget.value),
                              W({ token0: "0", token1: "0" })),
                            (o = e.currentTarget.value),
                            !isNaN(parseFloat(o)) && isFinite(o))
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            P(e.currentTarget.value),
                            (t.next = 6),
                            d.estimateZapIn(q, n, String(e.currentTarget.value))
                          );
                        case 6:
                          (r = t.sent),
                            W({
                              token0: r[0].toString(),
                              token1: r[1].toString(),
                            });
                        case 8:
                        case "end":
                          return t.stop();
                      }
                    var o;
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            ct = (function () {
              var t = Object(o.a)(
                C().mark(function t() {
                  var e;
                  return C().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            P(Y), (t.next = 3), d.estimateZapIn(q, n, String(Y))
                          );
                        case 3:
                          (e = t.sent),
                            W({
                              token0: e[0].toString(),
                              token1: e[1].toString(),
                            });
                        case 5:
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
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(D, null),
            c.a.createElement(
              s.a,
              {
                style: {
                  color: "#ffffff",
                  fontWeight: 600,
                  marginBottom: "10px",
                },
                id: "label",
              },
              "Select asset to zap with"
            ),
            c.a.createElement(
              V,
              {
                onChange: function (t) {
                  var e = t.target.value;
                  z(e),
                    Z(E),
                    t.target.value === k.q && Z(Object(A.a)(L, h)),
                    t.target.value === k.g && Z(Object(A.a)(j, h)),
                    t.target.value === k.r && Z(Object(A.a)(O, h));
                },
                labelId: "label",
                id: "select",
                style: { width: "100%" },
                value: q,
              },
              c.a.createElement(B, { value: k.b }, "BNB"),
              c.a.createElement(B, { value: k.q }, "USDC"),
              c.a.createElement(B, { value: k.r }, k.r),
              c.a.createElement(B, { value: k.g }, k.g)
            ),
            c.a.createElement(m.a, {
              onSelectMax: ct,
              onChange: it,
              value: F,
              max: Y,
              symbol: q,
              disabled: Q !== _.APPROVED,
            }),
            c.a.createElement(
              f.a,
              {
                className: l()("shinyButtonSecondary2"),
                onClick: function () {
                  return Q !== _.APPROVED ? tt() : e(q, n, F);
                },
                style: { marginTop: "20px", width: "100%" },
              },
              Q !== _.APPROVED ? "Approve" : "Let's go"
            ),
            c.a.createElement(
              "div",
              { style: { marginTop: "20px" } },
              c.a.createElement(g.a, {
                variant: "white",
                text: "Zap Estimations",
              })
            ),
            c.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "20px",
                },
              },
              c.a.createElement(
                R,
                null,
                " ",
                n,
                ": ",
                (Number(H.token0) / Number(at)).toFixed(4)
              ),
              c.a.createElement(
                R,
                null,
                " ",
                "(",
                Number(H.token0).toFixed(4),
                " ",
                Object(k.y)(n)[0],
                " /",
                " ",
                Number(H.token1).toFixed(4),
                " ",
                Object(k.y)(n)[1],
                ")",
                " "
              )
            )
          );
        },
        D = v.e.div(
          P || (P = Object(n.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (t) {
            return t.theme.spacing[4];
          },
          function (t) {
            return t.theme.spacing[4];
          }
        ),
        R = v.e.div(
          T ||
            (T = Object(n.a)([
              "\n  text-align: center;\n  color: #FFFFFF;\n  display: flex;\n  font-size: 16px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n",
            ]))
        ),
        B = Object(h.a)({
          root: {
            backgroundColor: "white",
            color: "#2c2560",
            "&:hover": {
              backgroundColor: "grey",
              color: "#2c2560",
              border: "none",
              borderBottom: "none !important",
            },
            "&:active": {
              backgroundColor: "white",
              color: "#2c2560",
              border: "none",
            },
            "&:focus": {
              backgroundColor: "white",
              color: "#2c2560",
              border: "none",
            },
            "&:after": { display: "none", borderBottom: "none !important" },
            selected: { backgroundColor: "black" },
          },
        })(p.a),
        V = Object(h.a)({
          root: {
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            color: "#000000",
            padding: "10px",
            selected: { backgroundColor: "#ffffff" },
            "&:hover": { borderBottom: "none !important" },
            "&:active": {
              borderRadius: "10px",
              backgroundColor: "white",
              color: "#2c2560",
              border: "none",
            },
            "&:focus": {
              borderRadius: "10px",
              backgroundColor: "white",
              color: "#2c2560",
              border: "none",
            },
          },
        })(d.a);
      e.a = function (t) {
        var e = t.onConfirm,
          r = t.tokenName,
          n = void 0 === r ? "" : r,
          o = t.decimals,
          a = void 0 === o ? 18 : o;
        return "-1" === Object(y.c)().balance
          ? null
          : c.a.createElement(I, { onConfirm: e, tokenName: n, decimals: a });
      };
    },
    2084: function (t, e, r) {
      "use strict";
      var n = r(6),
        o = r(44),
        a = r(0),
        i = r(281),
        c = r(1036),
        u = r(1063),
        l = r(282),
        s = r(184),
        f = a.forwardRef(function (t, e) {
          var r = t.children,
            l = t.classes,
            f = t.className,
            h = (t.color, t.component),
            p = void 0 === h ? "label" : h,
            d =
              (t.disabled,
              t.error,
              t.filled,
              t.focused,
              t.required,
              Object(o.a)(t, [
                "children",
                "classes",
                "className",
                "color",
                "component",
                "disabled",
                "error",
                "filled",
                "focused",
                "required",
              ])),
            v = Object(u.a)(),
            y = Object(c.a)({
              props: t,
              muiFormControl: v,
              states: [
                "color",
                "required",
                "focused",
                "disabled",
                "error",
                "filled",
              ],
            });
          return a.createElement(
            p,
            Object(n.a)(
              {
                className: Object(i.default)(
                  l.root,
                  l["color".concat(Object(s.a)(y.color || "primary"))],
                  f,
                  y.disabled && l.disabled,
                  y.error && l.error,
                  y.filled && l.filled,
                  y.focused && l.focused,
                  y.required && l.required
                ),
                ref: e,
              },
              d
            ),
            r,
            y.required &&
              a.createElement(
                "span",
                {
                  "aria-hidden": !0,
                  className: Object(i.default)(l.asterisk, y.error && l.error),
                },
                "\u2009",
                "*"
              )
          );
        }),
        h = Object(l.a)(
          function (t) {
            return {
              root: Object(n.a)(
                { color: t.palette.text.secondary },
                t.typography.body1,
                {
                  lineHeight: 1,
                  padding: 0,
                  "&$focused": { color: t.palette.primary.main },
                  "&$disabled": { color: t.palette.text.disabled },
                  "&$error": { color: t.palette.error.main },
                }
              ),
              colorSecondary: {
                "&$focused": { color: t.palette.secondary.main },
              },
              focused: {},
              disabled: {},
              error: {},
              filled: {},
              required: {},
              asterisk: { "&$error": { color: t.palette.error.main } },
            };
          },
          { name: "MuiFormLabel" }
        )(f),
        p = a.forwardRef(function (t, e) {
          var r = t.classes,
            l = t.className,
            s = t.disableAnimation,
            f = void 0 !== s && s,
            p = (t.margin, t.shrink),
            d =
              (t.variant,
              Object(o.a)(t, [
                "classes",
                "className",
                "disableAnimation",
                "margin",
                "shrink",
                "variant",
              ])),
            v = Object(u.a)(),
            y = p;
          "undefined" === typeof y &&
            v &&
            (y = v.filled || v.focused || v.adornedStart);
          var m = Object(c.a)({
            props: t,
            muiFormControl: v,
            states: ["margin", "variant"],
          });
          return a.createElement(
            h,
            Object(n.a)(
              {
                "data-shrink": y,
                className: Object(i.default)(
                  r.root,
                  l,
                  v && r.formControl,
                  !f && r.animated,
                  y && r.shrink,
                  "dense" === m.margin && r.marginDense,
                  { filled: r.filled, outlined: r.outlined }[m.variant]
                ),
                classes: {
                  focused: r.focused,
                  disabled: r.disabled,
                  error: r.error,
                  required: r.required,
                  asterisk: r.asterisk,
                },
                ref: e,
              },
              d
            )
          );
        });
      e.a = Object(l.a)(
        function (t) {
          return {
            root: { display: "block", transformOrigin: "top left" },
            focused: {},
            disabled: {},
            error: {},
            required: {},
            asterisk: {},
            formControl: {
              position: "absolute",
              left: 0,
              top: 0,
              transform: "translate(0, 24px) scale(1)",
            },
            marginDense: { transform: "translate(0, 21px) scale(1)" },
            shrink: {
              transform: "translate(0, 1.5px) scale(0.75)",
              transformOrigin: "top left",
            },
            animated: {
              transition: t.transitions.create(["color", "transform"], {
                duration: t.transitions.duration.shorter,
                easing: t.transitions.easing.easeOut,
              }),
            },
            filled: {
              zIndex: 1,
              pointerEvents: "none",
              transform: "translate(12px, 20px) scale(1)",
              "&$marginDense": { transform: "translate(12px, 17px) scale(1)" },
              "&$shrink": {
                transform: "translate(12px, 10px) scale(0.75)",
                "&$marginDense": {
                  transform: "translate(12px, 7px) scale(0.75)",
                },
              },
            },
            outlined: {
              zIndex: 1,
              pointerEvents: "none",
              transform: "translate(14px, 20px) scale(1)",
              "&$marginDense": { transform: "translate(14px, 12px) scale(1)" },
              "&$shrink": { transform: "translate(14px, -6px) scale(0.75)" },
            },
          };
        },
        { name: "MuiInputLabel" }
      )(p);
    },
    2146: function (t, e, r) {
      "use strict";
      r.r(e);
      var n,
        o = r(43),
        a = r(0),
        i = r.n(a),
        c = r(37),
        u = r(934),
        l = r(1091),
        s = r(1034),
        f = r(923),
        h = r.n(f),
        p = r(21),
        d = r(2106),
        v = Object(d.a)(function () {
          return {
            container: { padding: "50px 0" },
            wrap: {
              backgroundColor: "rgb(20, 33, 61)",
              borderRadius: "20px",
              padding: "1.5em",
              marginTop: "20px",
            },
          };
        }),
        y = { depositTokenName: p.a },
        m = Object(c.c)(
          n ||
            (n = Object(o.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          h.a
        );
      e.default = function () {
        var t = v(),
          e = Object(s.a)(y).onZapV1;
        return i.a.createElement(
          u.a,
          null,
          i.a.createElement(m, null),
          i.a.createElement(
            "div",
            { className: t.container },
            i.a.createElement(
              "h3",
              {
                style: {
                  textAlign: "center",
                  fontSize: 32,
                  lineHeight: 1.3,
                  color: "#8b67d3",
                },
              },
              "ZAP IN DEXIRA-BNB LP"
            ),
            i.a.createElement(
              "div",
              { className: t.wrap },
              i.a.createElement(l.a, {
                onConfirm: function (t, r, n) {
                  Number(n) <= 0 || isNaN(Number(n)) || e(t, r, n);
                },
                decimals: 18,
                tokenName: p.a,
                isV1: !0,
              })
            )
          )
        );
      };
    },
    922: function (t, e, r) {
      "use strict";
      var n = r(0),
        o = r(947),
        a = r(125);
      e.a = function () {
        var t = Object(o.b)(),
          e = Object(a.b)();
        return Object(n.useCallback)(
          function (r, n) {
            r.then(function (e) {
              return t(e, { summary: n });
            }).catch(function (t) {
              if (!t.message.includes("User denied")) {
                var r = "Unable to "
                  .concat(n[0].toLowerCase())
                  .concat(n.slice(1));
                console.error("".concat(r, ": ").concat(t.message || t.stack)),
                  e({ error: { message: r, stack: t.message || t.stack } });
              }
            });
          },
          [e, t]
        );
      };
    },
    923: function (t, e, r) {
      t.exports = r.p + "static/media/background.a537c370.jpg";
    },
    925: function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return b;
      });
      var n,
        o,
        a,
        i,
        c,
        u = r(43),
        l = r(0),
        s = r.n(l),
        f = r(37),
        h = r(1180),
        p = f.e.div(
          n ||
            (n = Object(u.a)([
              "\n  align-items: center;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  display: flex;\n  padding: 0 ",
              "px;\n  width: 100%;\n  box-sizing: border-box;\n",
            ])),
          function (t) {
            return t.theme.spacing[3];
          }
        ),
        d = f.e.input(
          o ||
            (o = Object(u.a)([
              "\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 45px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (t) {
            return t.theme.color.grey[600];
          }
        ),
        v = function (t) {
          var e = t.endAdornment,
            r = t.onChange,
            n = t.placeholder,
            o = t.startAdornment,
            a = t.value,
            i = t.disabled;
          return s.a.createElement(
            p,
            null,
            !!o && o,
            s.a.createElement(d, {
              placeholder: n,
              value: a,
              onChange: r,
              disabled: i,
            }),
            !!e && e
          );
        },
        y = f.e.button(
          a ||
            (a = Object(u.a)([
              "\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  padding: 5px 35px;\n  border-radius: 3px;\n  color: #FFFFFF;\n  font-weight: 700;\n  cursor: pointer;\n",
            ]))
        ),
        m = f.e.div(
          i ||
            (i = Object(u.a)([
              "\n  display: flex;\n  gap: 15px;\n  width: 100%;\n  \n  @media (max-width: 430px) {\n    flex-direction: column;\n  }\n",
            ]))
        ),
        g = f.e.div(
          c ||
            (c = Object(u.a)([
              "\n  align-items: center;\n  margin-bottom: 10px;\n  color: #FFFFFF;\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 35px;\n",
            ]))
        ),
        b = function (t) {
          var e = t.max,
            r = t.symbol,
            n = t.onChange,
            o = t.onSelectMax,
            a = t.value,
            i = t.disabled,
            c = t.section,
            u = t.rightSection;
          return s.a.createElement(
            "div",
            null,
            s.a.createElement(
              g,
              null,
              s.a.createElement(
                h.a,
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                },
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement("div", null, c),
                  "Balance: ",
                  e.toLocaleString(),
                  " ",
                  r
                ),
                s.a.createElement("div", null, u)
              )
            ),
            s.a.createElement(
              m,
              null,
              s.a.createElement(v, {
                onChange: n,
                placeholder: "0",
                value: a,
                disabled: i,
              }),
              s.a.createElement(y, { onClick: o }, "Max")
            )
          );
        };
    },
    947: function (t, e, r) {
      "use strict";
      r.d(e, "b", function () {
        return c;
      }),
        r.d(e, "a", function () {
          return l;
        });
      var n = r(0),
        o = r(55),
        a = r(68),
        i = r(111);
      function c() {
        var t = Object(a.c)(),
          e = t.chainId,
          r = t.account,
          c = Object(o.c)();
        return Object(n.useCallback)(
          function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = n.summary,
              a = n.approval;
            if (r && e) {
              var u = t.hash;
              if (!u) throw Error("No transaction hash found.");
              c(
                Object(i.a)({
                  hash: u,
                  from: r,
                  chainId: e,
                  approval: a,
                  summary: o,
                })
              );
            }
          },
          [c, e, r]
        );
      }
      function u() {
        var t,
          e = Object(a.c)().chainId,
          r = Object(o.d)(function (t) {
            return t.transactions;
          });
        return e && null !== (t = r[e]) && void 0 !== t ? t : {};
      }
      function l(t, e) {
        var r = u();
        return Object(n.useMemo)(
          function () {
            return (
              "string" === typeof t &&
              "string" === typeof e &&
              Object.keys(r).some(function (n) {
                var o = r[n];
                if (!o) return !1;
                if (o.receipt) return !1;
                var a = o.approval;
                return (
                  !!a &&
                  a.spender === e &&
                  a.tokenAddress === t &&
                  (function (t) {
                    return new Date().getTime() - t.addedTime < 864e5;
                  })(o)
                );
              })
            );
          },
          [r, e, t]
        );
      }
    },
  },
]);
