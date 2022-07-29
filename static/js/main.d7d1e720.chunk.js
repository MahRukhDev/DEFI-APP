/*!For license information please see main.d7d1e720.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [9],
  {
    111: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return p;
        });
      var a = n(48),
        i = Object(a.b)("transactions/addTransaction"),
        u = Object(a.b)("transactions/clearAllTransactions"),
        s = Object(a.b)("transactions/finalizeTransaction"),
        p = Object(a.b)("transactions/checkedTransaction");
    },
    113: function (e, t, n) {
      "use strict";
      var a = n(11),
        i = n(4),
        u = n(5),
        s = n(103),
        p = n(53);
      function r() {
        r = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (k) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function y(e, t, n, a) {
          var i = t && t.prototype instanceof l ? t : l,
            u = Object.create(i.prototype),
            s = new g(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return E();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = M(s, n);
                    if (p) {
                      if (p === d) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = o(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === d)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function o(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = y;
        var d = {};
        function l() {}
        function m() {}
        function c() {}
        var T = {};
        p(T, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          f = b && b(b(O([])));
        f && f !== t && n.call(f, i) && (T = f);
        var v = (c.prototype = l.prototype = Object.create(T));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = o(e[i], e, u);
                  if ("throw" !== r.type) {
                    var y = r.arg,
                      d = y.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (y.value = e), s(y);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function M(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                M(e, t),
                "throw" === t.method)
              )
                return d;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var a = o(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function g(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = c),
          p(v, "constructor", c),
          p(c, "constructor", m),
          (m.displayName = p(c, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(h.prototype),
          p(h.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new h(y(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          w(v),
          p(v, s, "Generator"),
          p(v, i, function () {
            return this;
          }),
          p(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = O),
          (g.prototype = {
            constructor: g,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), d)
                  : this.complete(s)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), A(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      var y = (function () {
        function e(t, n, a) {
          var u =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 18;
          Object(i.a)(this, e),
            (this.contract = void 0),
            (this.address = void 0),
            (this.symbol = void 0),
            (this.decimal = void 0),
            (this.contract = new s.b(t, o, n)),
            (this.address = t),
            (this.symbol = a),
            (this.decimal = u);
        }
        return (
          Object(u.a)(e, [
            {
              key: "connect",
              value: function (e) {
                this.contract = new s.b(this.address, o, e);
              },
            },
            {
              key: "estimateGas",
              get: function () {
                return this.contract.estimateGas;
              },
            },
            {
              key: "totalSupply",
              value: function () {
                return this.contract.totalSupply();
              },
            },
            {
              key: "balanceOf",
              value: function (e) {
                return this.contract.balanceOf(e);
              },
            },
            {
              key: "transfer",
              value: function (e, t) {
                return this.contract.transfer(e, t);
              },
            },
            {
              key: "allowance",
              value: function (e, t) {
                return this.contract.allowance(e, t);
              },
            },
            {
              key: "approve",
              value: function (e, t) {
                return this.contract.approve(e, t);
              },
            },
            {
              key: "transferFrom",
              value: function (e, t, n) {
                return this.contract.transferFrom(e, t, n);
              },
            },
            {
              key: "displayedBalanceOf",
              value: (function () {
                var e = Object(a.a)(
                  r().mark(function e(t) {
                    var n;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.balanceOf(t);
                            case 2:
                              return (
                                (n = e.sent),
                                e.abrupt(
                                  "return",
                                  Object(p.formatUnits)(n, this.decimal)
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "displayedTotalSupply",
              value: (function () {
                var e = Object(a.a)(
                  r().mark(function e() {
                    var t;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.totalSupply();
                            case 2:
                              return (
                                (t = e.sent),
                                e.abrupt(
                                  "return",
                                  Number(
                                    Object(p.formatUnits)(t, this.decimal)
                                  ).toFixed(0)
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
      t.a = y;
      var o = [
        {
          inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "symbol", type: "string" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: !0,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
    },
    123: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return o;
        });
      var a = n(155),
        i = n(26),
        u = n(0),
        s = n.n(u),
        p = Object(u.createContext)(void 0),
        r = {
          FANTOM: "fantom",
          BNB: "binancecoin",
          USDC: "usd-coin",
          USDT: "tether",
          BISON: "bishares",
          BANANA: "apeswap-finance",
          CAKE: "pancakeswap-token",
          SPIRIT: "spiritswap",
          BUSD: "binance-usd",
          MDX: "mdex",
          BSW: "biswap",
          OASIS: "oasis",
          STARS: "mogul-productions",
          NFTY: "nfty",
          CEEK: "ceek",
          USDEX: "usdex",
          DEXSHARE: "dexshare",
          DEXIRA: "dexira",
        };
      function y(e) {
        var t = e.children,
          n = Object(u.useState)(0),
          y = Object(i.a)(n, 2),
          o = y[0],
          d = y[1];
        return (
          Object(u.useEffect)(function () {
            var e = [
                "https://api.coingecko.com/api/v3/simple/price?ids=".concat(
                  Object.values(r).join(","),
                  "&vs_currencies=usd"
                ),
              ],
              t = function () {
                return Promise.all(
                  e.map(function (e) {
                    return fetch(e);
                  })
                )
                  .then(function (e) {
                    return Promise.all(
                      e.map(function (e) {
                        return e.json();
                      })
                    );
                  })
                  .then(function (e) {
                    d(Object(a.a)({}, e[0]));
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              };
            t();
            try {
              setInterval(function () {
                t();
              }, 3e4);
            } catch (n) {
              console.log(n);
            }
          }, []),
          s.a.createElement(p.Provider, { value: o }, t)
        );
      }
      var o = function () {
        return Object(u.useContext)(p);
      };
    },
    125: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var a = n(0),
        i = n(67),
        u = n(55),
        s = n(68);
      function p() {
        var e = Object(s.c)().chainId;
        return Object(u.d)(function (t) {
          return t.application.blockNumber[null !== e && void 0 !== e ? e : -1];
        });
      }
      function r() {
        var e = Object(u.c)();
        return Object(a.useCallback)(
          function (t, n) {
            e(Object(i.a)({ content: t, key: n }));
          },
          [e]
        );
      }
      function y() {
        var e = Object(u.c)();
        return Object(a.useCallback)(
          function (t) {
            e(Object(i.b)({ key: t }));
          },
          [e]
        );
      }
      function o() {
        var e = Object(u.d)(function (e) {
          return e.application.popupList;
        });
        return Object(a.useMemo)(
          function () {
            return e.filter(function (e) {
              return e.show;
            });
          },
          [e]
        );
      }
    },
    152: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var a = n(117),
        i = n(34),
        u = n(85),
        s = null;
      function p() {
        return (
          s ||
            (s = new a.a.providers.Web3Provider(
              Object(u.c)(i.b.defaultProvider),
              i.b.chainId
            )),
          s
        );
      }
    },
    156: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return r;
        }),
        n.d(t, "d", function () {
          return y;
        });
      var a = n(16),
        i = n.n(a),
        u = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return Number.isNaN(Number(e))
            ? new i.a(e)
            : e instanceof i.a
            ? void 0 !== t
              ? e.div(new i.a(10).pow(t))
              : e
            : new i.a(e.toString()).div(new i.a(10).pow(t));
        },
        s = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return u(e, n).decimalPlaces(t, i.a.ROUND_DOWN).toString();
        },
        p = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return Number.isNaN(Number(e))
            ? "NaN"
            : Number(u(e, n).decimalPlaces(t, i.a.ROUND_DOWN)).toLocaleString(
                "en-US",
                { maximumFractionDigits: t }
              );
        },
        r = function (e, t) {
          return u(e).times(new i.a(10).pow(t));
        },
        y = function (e, t) {
          return u(e, t);
        };
    },
    185: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return p;
      }),
        n.d(t, "a", function () {
          return r;
        }),
        n.d(t, "h", function () {
          return y;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "f", function () {
          return l;
        }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return c;
        });
      var a,
        i = n(77),
        u = n(16),
        s = n.n(u),
        p =
          "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        r = "0x0000000000000000000000000000000000000000",
        y = "WBNB",
        o = ["BNB", "FTM"],
        d = 1.5,
        l = 0.03,
        m = (Date.now(), Date.now(), Date.now(), 56),
        c =
          ((a = {}),
          Object(i.a)(a, m, "0xB94858b0bB5437498F5453A16039337e5Fdc269C"),
          Object(i.a)(a, 97, "0x17d40e2a60b1887e262ae2c34545ff59df8da66e"),
          a);
      Object(i.a)({}, m, "bsc"), new s.a(31536e3);
    },
    21: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "t", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "q", function () {
          return p;
        }),
        n.d(t, "r", function () {
          return r;
        }),
        n.d(t, "g", function () {
          return y;
        }),
        n.d(t, "s", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return d;
        }),
        n.d(t, "h", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "i", function () {
          return T;
        }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "u", function () {
          return f;
        }),
        n.d(t, "v", function () {
          return a;
        }),
        n.d(t, "y", function () {
          return w;
        }),
        n.d(t, "p", function () {
          return h;
        }),
        n.d(t, "w", function () {
          return M;
        }),
        n.d(t, "x", function () {
          return x;
        }),
        n.d(t, "n", function () {
          return A;
        }),
        n.d(t, "o", function () {
          return g;
        }),
        n.d(t, "m", function () {
          return O;
        }),
        n.d(t, "l", function () {
          return E;
        }),
        n.d(t, "k", function () {
          return _;
        }),
        n.d(t, "j", function () {
          return P;
        });
      var a,
        i = "BNB",
        u = "WBNB",
        s = "BTCB",
        p = "USDC",
        r = "USDEX",
        y = "DEXSHARE",
        o = "USDEX-USDC-LP",
        d = "DEXSHARE-BNB-LP",
        l = "DEXSHARE-WDEX-LP",
        m = "BNB-USDEX-LP",
        c = "BNB-DEXIRA-LP",
        T = "DEXMMETF",
        b = "DEXIRA",
        f = "WDEX-SHARE";
      !(function (e) {
        (e.WRAP = "WRAP"), (e.UNWRAP = "UNWRAP"), (e.BOTH = "BOTH");
      })(a || (a = {}));
      var v = {
          USDEX_USDC_LP: [r, p],
          DEXSHARE_BNB_LP: [i, y],
          BNB_DEXIRA_LP: [b, i],
        },
        w = function (e) {
          switch (e) {
            case o:
              return v.USDEX_USDC_LP;
            case d:
              return v.DEXSHARE_BNB_LP;
            case c:
              return v.BNB_DEXIRA_LP;
            default:
              return [];
          }
        },
        h = "0x10ed43c718714eb63d5aa57b78b54704e256024e",
        M = "0x3999F690C90f8639Ff7105a93Da401d1339cFB0A",
        x = "0x915d640b6a245a50d429aea8e72daba81d0d6b21",
        A = [
          "0x000000000000000000000000000000000000dead",
          "0x21f4dD6c491E04874f19F6Bc4fc1a3d0e661Ca39",
          "0xa5F3d6A33c5A5BCdff8F81c88CA00f457B699E0F",
          "0xa649987e48f89ef11981c9a794df2c7d3fa3aeb3",
          "0x6AF48DDd921E651123C4eaA75a4d582233daDBe7",
          "0x49F162b72C5FCf6D0bB020643C2A4C0b5364181E",
          "0x9a2d1585f4f45dc0819336311745ed62937671e8",
          "0xe5434606f79d8cc05d18285e172d7fd220172f0e",
          "0x1DF93D98EE398C3cCAE4AA5e3580C583Fb16403A",
          "0xa08099a1c8827a34ba324d683f6161333e0b1aab",
          "0xaec4b10797d9731e2a300d913fef105f5c04760a",
          "0xc98546a864ddf666c9f342dde348ed451e9059c2",
          "0x83Bd9dA5D629501BCC0574eDbb47f445B20434B7",
          "0xC35B476B2F850185B957Ac99161CD62F14439b21",
        ],
        g = [
          "0x000000000000000000000000000000000000dead",
          "0x0000000000000000000000000000000000000000",
          "0x21f4dD6c491E04874f19F6Bc4fc1a3d0e661Ca39",
          "0xa5F3d6A33c5A5BCdff8F81c88CA00f457B699E0F",
          "0xa649987e48f89ef11981c9a794df2c7d3fa3aeb3",
          "0x6AF48DDd921E651123C4eaA75a4d582233daDBe7",
          "0x49F162b72C5FCf6D0bB020643C2A4C0b5364181E",
          "0x9a2d1585f4f45dc0819336311745ed62937671e8",
          "0xe5434606f79d8cc05d18285e172d7fd220172f0e",
        ],
        O = [
          "0x21f4dD6c491E04874f19F6Bc4fc1a3d0e661Ca39",
          "0xa5F3d6A33c5A5BCdff8F81c88CA00f457B699E0F",
          "0x49F162b72C5FCf6D0bB020643C2A4C0b5364181E",
          "0xc5a27C7AF239ffBA74Be9f85a76Fd7CF1E87e2bB",
          "0xe5434606f79d8cc05d18285e172d7fd220172f0e",
          "0xCC180BfA5d2C3Ac191758B721C9bBbB263b3fd1C",
        ],
        E = [
          "0x000000000000000000000000000000000000dead",
          "0x49F162b72C5FCf6D0bB020643C2A4C0b5364181E",
          "0xa5F3d6A33c5A5BCdff8F81c88CA00f457B699E0F",
        ],
        k =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=",
        _ = "".concat(k, "usdex-stablecoin"),
        P = "".concat(k, "dexshare");
    },
    223: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return L;
      }),
        n.d(t, "a", function () {
          return C;
        });
      var a = n(11),
        i = n(26),
        u = n(0),
        s = n.n(u),
        p = n(68),
        r = n(171),
        y = n(69),
        o = n(4),
        d = n(5),
        l = n(93),
        m = n(283),
        c = n(103),
        T = n(117),
        b = n(14),
        f = n(16),
        v = n(85),
        w = n(294),
        h = n(135),
        M = n.n(h),
        x = n(113),
        A = n(35),
        g = n(152),
        O = n(423),
        E = n(34),
        k = n(53),
        _ = n(21),
        P = (b.a.from(10).pow(16).mul(101).div(100), n(156)),
        D = n(229),
        S = n(185),
        R = n(226);
      function B() {
        B = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (E) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function r(e, t, n, a) {
          var i = t && t.prototype instanceof d ? t : d,
            u = Object.create(i.prototype),
            s = new A(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return O();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = h(s, n);
                    if (p) {
                      if (p === o) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = y(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === o)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function y(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = r;
        var o = {};
        function d() {}
        function l() {}
        function m() {}
        var c = {};
        p(c, i, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          b = T && T(T(g([])));
        b && b !== t && n.call(b, i) && (c = b);
        var f = (m.prototype = d.prototype = Object.create(c));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = y(e[i], e, u);
                  if ("throw" !== r.type) {
                    var o = r.arg,
                      d = o.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (o.value = e), s(o);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function h(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                h(e, t),
                "throw" === t.method)
              )
                return o;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return o;
          }
          var a = y(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), o
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                o)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              o);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function g(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (l.prototype = m),
          p(f, "constructor", m),
          p(m, "constructor", l),
          (l.displayName = p(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === l || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(f)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          p(w.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new w(r(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          v(f),
          p(f, s, "Generator"),
          p(f, i, function () {
            return this;
          }),
          p(f, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = g),
          (A.prototype = {
            constructor: A,
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), o)
                  : this.complete(s)
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
                o
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), o;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: g(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                o
              );
            },
          }),
          e
        );
      }
      var I = (function () {
        function e(t) {
          Object(o.a)(this, e),
            (this.bnbUsdPrice = { price: "0" }),
            (this.usDexUsdPrice = { price: "0" }),
            (this.dexIraBnbPrice = { price: "0" }),
            (this.dexShareBnbPrice = { price: "0" }),
            (this.dexEtfBnbPrice = { price: "0" }),
            (this.isReady = void 0),
            (this.web3 = void 0),
            (this.myAccount = void 0),
            (this.provider = void 0),
            (this.signer = void 0),
            (this.config = void 0),
            (this.chainId = void 0),
            (this.contracts = void 0),
            (this.externalTokens = void 0),
            (this.boardroomVersionOfUser = void 0),
            (this.deployments = void 0),
            (this.USDEX_USDC_LP = void 0),
            (this.USDEX = void 0),
            (this.DEXSHARE = void 0),
            (this.DEXBOND = void 0),
            (this.DEXIRA = void 0),
            (this.DEXETF = void 0),
            (this.WDEX = void 0),
            (this.OLDWDEX = void 0),
            (this.BNB = void 0),
            (this.ETH = void 0),
            (this.USDC = void 0);
          var n = t.deployments,
            a = t.externalTokens,
            u = Object(g.a)();
          (this.web3 = new M.a(u.provider)),
            (this.contracts = {}),
            (this.deployments = n);
          for (var s = 0, p = Object.entries(n); s < p.length; s++) {
            var r = Object(i.a)(p[s], 2),
              y = r[0],
              d = r[1];
            this.contracts[y] = new c.b(d.address, d.abi, u);
          }
          this.externalTokens = {};
          for (var l = 0, m = Object.entries(a); l < m.length; l++) {
            var T = Object(i.a)(m[l], 2),
              b = T[0],
              f = Object(i.a)(T[1], 2),
              v = f[0],
              w = f[1];
            this.externalTokens[b] = new x.a(v, u, b, w);
          }
          (this.USDEX = new x.a(n.UsDex.address, u, "USDEX", 18)),
            (this.DEXSHARE = new x.a(n.DexShare.address, u, "DEXSHARE", 18)),
            (this.DEXIRA = new x.a(n.DexIra.address, u, "DEXIRA", 9)),
            (this.DEXETF = new x.a(n.DexEtf.address, u, "DEXETF", 18)),
            (this.BNB = this.externalTokens.WBNB),
            (this.WDEX = new x.a(n.Wdex.address, u, "WDEX", 18)),
            (this.OLDWDEX = new x.a(n.WdexOld.address, u, "WDEX", 18)),
            (this.USDC = this.externalTokens.USDC),
            (this.USDEX_USDC_LP = new c.b(a["USDEX-USDC-LP"][0], O, u)),
            (this.config = t),
            (this.provider = u),
            (this.chainId = this.config.chainId);
        }
        return (
          Object(d.a)(e, [
            {
              key: "init",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a, u, s, p, o, d, l, m, c;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = new T.a.providers.Web3Provider(
                                  t,
                                  this.config.chainId
                                )),
                                (this.provider = a),
                                (this.signer = a.getSigner(0)),
                                (this.chainId = a.network.chainId),
                                n)
                              ) {
                                for (
                                  this.myAccount = n,
                                    this.web3 = new M.a(a.provider),
                                    u = 0,
                                    s = Object.entries(this.contracts);
                                  u < s.length;
                                  u++
                                )
                                  (p = Object(i.a)(s[u], 2)),
                                    (o = p[0]),
                                    (d = p[1]),
                                    (this.contracts[o] = d.connect(
                                      this.signer
                                    ));
                                (l = [
                                  this.USDEX,
                                  this.DEXSHARE,
                                  this.USDEX_USDC_LP,
                                  this.DEXIRA,
                                  this.DEXETF,
                                ].concat(
                                  Object(y.a)(
                                    Object.values(this.externalTokens)
                                  )
                                )),
                                  (m = Object(r.a)(l));
                                try {
                                  for (m.s(); !(c = m.n()).done; )
                                    c.value.connect(this.signer);
                                } catch (b) {
                                  m.e(b);
                                } finally {
                                  m.f();
                                }
                                console.log(
                                  "Wallet is unlocked. Connected to: ".concat(n)
                                );
                              }
                              return (e.next = 7), this.getBnbUsdPrice();
                            case 7:
                              return (
                                (e.next = 9),
                                Promise.all([
                                  this.getDexIraBnbPrice(),
                                  this.getUsDexUsdPrice(),
                                  this.getDexShareBnbPrice(),
                                  this.getDexEtfBnbPrice(),
                                ])
                              );
                            case 9:
                              this.isReady = !0;
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isUnlocked",
              get: function () {
                return !!this.myAccount;
              },
            },
            {
              key: "getDexIraStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t,
                      n,
                      i,
                      u,
                      s,
                      p,
                      r,
                      y,
                      o,
                      d,
                      l,
                      m,
                      c = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.DEXIRA.totalSupply();
                            case 2:
                              return (
                                (t = e.sent),
                                (e.next = 5),
                                this.getDexIraBnbPrice()
                              );
                            case 5:
                              return (
                                (n = e.sent),
                                (i = n.toString()),
                                (e.next = 9),
                                this.getBnbUsdPrice()
                              );
                            case 9:
                              return (
                                (u = e.sent),
                                (s = (Number(n) * Number(u)).toFixed(5)),
                                (e.next = 13),
                                Object(v.b)(this.DEXIRA.address)
                              );
                            case 13:
                              return (
                                (p = e.sent),
                                (e.next = 16),
                                this.DEXIRA.balanceOf(
                                  this.externalTokens[_.a].address
                                ).then(function (e) {
                                  return new f.BigNumber(e.toString())
                                    .div(1e9)
                                    .times(s);
                                })
                              );
                            case 16:
                              return (
                                (r = e.sent),
                                (e.next = 19),
                                this.BNB.balanceOf(
                                  this.externalTokens[_.a].address
                                ).then(function (e) {
                                  return new f.BigNumber(e.toString())
                                    .div(1e18)
                                    .times(u);
                                })
                              );
                            case 19:
                              return (
                                (y = e.sent),
                                (o = r.plus(y).toFixed(2)),
                                (e.next = 23),
                                Promise.all(
                                  _.l.map(
                                    (function () {
                                      var e = Object(a.a)(
                                        B().mark(function e(t) {
                                          return B().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    c.DEXIRA.balanceOf(t).then(
                                                      function (e) {
                                                        return new f.BigNumber(
                                                          e.toString()
                                                        );
                                                      }
                                                    )
                                                  );
                                                case 1:
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
                            case 23:
                              return (
                                (d = e.sent),
                                (l = d.reduce(function (e, t) {
                                  return e.plus(t);
                                }, new f.BigNumber(0))),
                                (m = new f.BigNumber(t.toString())
                                  .minus(l)
                                  .div(1e9)
                                  .toFixed(2)),
                                e.abrupt("return", {
                                  tokenInFtm: i,
                                  priceInDollars: s,
                                  totalSupply: Object(A.a)(
                                    t,
                                    this.DEXIRA.decimal,
                                    0
                                  ),
                                  circulatingSupply: m,
                                  volume24Hours: p ? p.usd_24_vol : null,
                                  percent24Hours: p ? p.usd_24_percent : null,
                                  liquidity: o,
                                })
                              );
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexEtfStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, i, u, s;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.DEXETF.totalSupply();
                            case 2:
                              return (
                                (t = e.sent),
                                (e.next = 5),
                                this.getTokenPriceFromPancakeswap(this.DEXETF)
                              );
                            case 5:
                              return (
                                (n = e.sent),
                                (a = n.toString()),
                                (e.next = 9),
                                this.getBnbUsdPrice()
                              );
                            case 9:
                              return (
                                (i = e.sent),
                                (u = (Number(n) * Number(i)).toFixed(5)),
                                (e.next = 13),
                                Object(v.b)(this.DEXETF.address)
                              );
                            case 13:
                              return (
                                (s = e.sent),
                                e.abrupt("return", {
                                  tokenInFtm: a,
                                  priceInDollars: u,
                                  totalSupply: Object(A.a)(
                                    t,
                                    this.DEXETF.decimal,
                                    0
                                  ),
                                  circulatingSupply: Object(A.a)(
                                    t,
                                    this.DEXETF.decimal,
                                    0
                                  ),
                                  volume24Hours: s ? s.usd_24_vol : null,
                                  percent24Hours: s ? s.usd_24_percent : null,
                                })
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getUsDexStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t,
                      n,
                      u,
                      s,
                      p,
                      r,
                      y,
                      o,
                      d,
                      l,
                      m,
                      c,
                      T,
                      b,
                      v,
                      w,
                      h = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getUsDexUsdPrice();
                            case 2:
                              return (
                                (t = e.sent),
                                (e.next = 5),
                                this.getDexIraBnbPrice()
                              );
                            case 5:
                              return (
                                (n = e.sent),
                                (e.next = 8),
                                this.getBnbUsdPrice()
                              );
                            case 8:
                              return (
                                (u = e.sent),
                                (s = ((Number(n) * Number(u)) / 1e6).toFixed(
                                  5
                                )),
                                (p = Number(t).toFixed(5)),
                                (e.next = 13),
                                Promise.all(
                                  _.o.map(
                                    (function () {
                                      var e = Object(a.a)(
                                        B().mark(function e(t) {
                                          return B().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    h.USDEX.balanceOf(t).then(
                                                      function (e) {
                                                        return new f.BigNumber(
                                                          e.toString()
                                                        );
                                                      }
                                                    )
                                                  );
                                                case 1:
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
                            case 13:
                              return (
                                (r = e.sent),
                                (y = r.reduce(function (e, t) {
                                  return e.plus(t);
                                }, new f.BigNumber(0))),
                                (e.next = 17),
                                Promise.all([
                                  this.USDEX.totalSupply(),
                                  this.USDEX.balanceOf(
                                    this.externalTokens[_.c].address
                                  ).then(function (e) {
                                    return new f.BigNumber(e.toString())
                                      .div(1e18)
                                      .times(p);
                                  }),
                                  this.BNB.balanceOf(
                                    this.externalTokens[_.c].address
                                  ).then(function (e) {
                                    return new f.BigNumber(e.toString())
                                      .div(1e18)
                                      .times(u);
                                  }),
                                  this.USDEX.balanceOf(
                                    this.externalTokens[_.s].address
                                  ).then(function (e) {
                                    return new f.BigNumber(e.toString())
                                      .div(1e18)
                                      .times(p);
                                  }),
                                  this.externalTokens.USDC.balanceOf(
                                    this.externalTokens[_.s].address
                                  ).then(function (e) {
                                    return new f.BigNumber(e.toString()).div(
                                      1e18
                                    );
                                  }),
                                ])
                              );
                            case 17:
                              return (
                                (o = e.sent),
                                (d = Object(i.a)(o, 5)),
                                (l = d[0]),
                                (m = d[1]),
                                (c = d[2]),
                                (T = d[3]),
                                (b = d[4]),
                                (v = m.plus(T).plus(c).plus(b).toFixed(2)),
                                (w = new f.BigNumber(l.toString())
                                  .minus(y)
                                  .div(1e18)
                                  .toFixed(2)),
                                e.abrupt("return", {
                                  tokenInFtm:
                                    null === s || void 0 === s
                                      ? void 0
                                      : s.toString(),
                                  priceInDollars:
                                    null === p || void 0 === p
                                      ? void 0
                                      : p.toString(),
                                  totalSupply: Object(A.a)(
                                    l,
                                    this.USDEX.decimal,
                                    0
                                  ),
                                  circulatingSupply: w,
                                  marketCap: w,
                                  liquidity: v,
                                })
                              );
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getShareStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t,
                      n,
                      i,
                      u,
                      s,
                      p,
                      r,
                      y,
                      o,
                      d,
                      l = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.DEXSHARE.totalSupply();
                            case 2:
                              return (
                                (t = e.sent),
                                (e.next = 5),
                                Promise.all(
                                  _.m.map(
                                    (function () {
                                      var e = Object(a.a)(
                                        B().mark(function e(t) {
                                          return B().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    l.DEXSHARE.balanceOf(
                                                      t
                                                    ).then(function (e) {
                                                      return new f.BigNumber(
                                                        e.toString()
                                                      );
                                                    })
                                                  );
                                                case 1:
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
                            case 5:
                              return (
                                (n = e.sent),
                                (i = n.reduce(function (e, t) {
                                  return e.plus(t);
                                }, new f.BigNumber(0))),
                                (e.next = 9),
                                this.getDexShareBnbPrice()
                              );
                            case 9:
                              return (
                                (u = e.sent),
                                (e.next = 12),
                                this.getBnbUsdPrice()
                              );
                            case 12:
                              return (
                                (s = e.sent),
                                (p = (Number(u) * Number(s)).toFixed(2)),
                                (e.next = 16),
                                this.DEXSHARE.balanceOf(
                                  this.externalTokens[_.f].address
                                ).then(function (e) {
                                  return new f.BigNumber(e.toString())
                                    .div(1e18)
                                    .times(p);
                                })
                              );
                            case 16:
                              return (
                                (r = e.sent),
                                (e.next = 19),
                                this.BNB.balanceOf(
                                  this.externalTokens[_.f].address
                                ).then(function (e) {
                                  return new f.BigNumber(e.toString())
                                    .div(1e18)
                                    .times(s);
                                })
                              );
                            case 19:
                              return (
                                (y = e.sent),
                                (o = r.plus(y).toFixed(2)),
                                (d = new f.BigNumber(t.toString())
                                  .minus(i)
                                  .div(1e18)
                                  .toFixed(2)),
                                e.abrupt("return", {
                                  tokenInFtm: u,
                                  priceInDollars: p,
                                  totalSupply: Object(A.a)(
                                    t,
                                    this.DEXSHARE.decimal,
                                    0
                                  ),
                                  circulatingSupply: d,
                                  liquidity: o,
                                })
                              );
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getLPStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i, u, s, p, r, y, o, d, l, m, c, T, b;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.externalTokens[t]),
                                (e.next = 3),
                                n.totalSupply()
                              );
                            case 3:
                              return (
                                (a = e.sent),
                                (i = Object(A.a)(a, 18)),
                                (u = t.startsWith("USDEX")),
                                (s = u ? this.USDEX : this.DEXSHARE),
                                (p = u ? this.externalTokens.USDC : this.BNB),
                                (e.next = 10),
                                s.balanceOf(n.address)
                              );
                            case 10:
                              return (
                                (r = e.sent),
                                (y = Object(A.a)(r, 18)),
                                (e.next = 14),
                                p.balanceOf(n.address)
                              );
                            case 14:
                              return (
                                (o = e.sent),
                                (d = Object(A.a)(o, 18)),
                                (l = Number(y) / Number(i)),
                                (m = Number(d) / Number(i)),
                                (e.next = 20),
                                this.getLPTokenPrice(n, s)
                              );
                            case 20:
                              return (
                                (c = e.sent),
                                (T = Number(c).toFixed(2).toString()),
                                (b = (Number(i) * Number(c))
                                  .toFixed(2)
                                  .toString()),
                                e.abrupt("return", {
                                  tokenAmount: l.toFixed(2).toString(),
                                  ftmAmount: m.toFixed(2).toString(),
                                  priceOfOne: T,
                                  totalLiquidity: b,
                                  totalSupply: Number(i).toFixed(2).toString(),
                                })
                              );
                            case 24:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTokenPrices",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (e.t0 = t), (e.next = e.t0 === _.b ? 3 : 4);
                              break;
                            case 3:
                              return e.abrupt("return", this.getBnbUsdPrice());
                            case 4:
                              return (e.next = 6), this.getBnbUsdPrice();
                            case 6:
                              return (
                                (n = e.sent),
                                (e.next = 9),
                                this.getTokenPriceFromPancakeswap(
                                  this.externalTokens[t]
                                )
                              );
                            case 9:
                              return (
                                (a = e.sent),
                                e.abrupt("return", Number(a) * Number(n))
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getPoolAPRs",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i, u, s, p, r, y, o, d, l, m, c;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = t.depositToken),
                                (a = this.contracts[t.contract]),
                                (e.next = 4),
                                this.getDepositTokenPriceInDollars(
                                  t.depositTokenName,
                                  n
                                )
                              );
                            case 4:
                              return (
                                (i = e.sent),
                                (e.next = 7),
                                n.balanceOf(t.address)
                              );
                            case 7:
                              if (
                                ((u = e.sent),
                                (s =
                                  Number(i) *
                                  Number(Object(A.a)(u, n.decimal))),
                                "UsDex" !== t.earnTokenName)
                              ) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 12), this.getUsDexUsdPrice();
                            case 12:
                              (e.t0 = e.sent), (e.next = 18);
                              break;
                            case 15:
                              return (e.next = 17), this.getDexShareUsdPrice();
                            case 17:
                              e.t0 = e.sent;
                            case 18:
                              return (
                                (p = e.t0),
                                (e.next = 21),
                                this.getTokenPerSecond(
                                  t.earnTokenName,
                                  t.contract,
                                  a,
                                  t.depositTokenName,
                                  t.poolId
                                )
                              );
                            case 21:
                              return (
                                (r = e.sent),
                                (y = r.mul(60).mul(60)),
                                (o =
                                  Number(p) *
                                  Number(Object(A.a)(y.mul(24).mul(365)))),
                                (d =
                                  Number(p) * Number(Object(A.a)(y.mul(24)))),
                                (l =
                                  Number(i) *
                                  Number(Object(A.a)(u, n.decimal))),
                                (m = (d / l) * 100),
                                (c = (o / l) * 100),
                                e.abrupt("return", {
                                  dailyAPR: m.toFixed(2).toString(),
                                  yearlyAPR: c.toFixed(2).toString(),
                                  TVL: s.toFixed(2).toString(),
                                })
                              );
                            case 29:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTokenPerSecond",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a, u, s) {
                    var p, r, y, o, d, l, m, c, T;
                    return B().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("BOMB" !== t) {
                              e.next = 32;
                              break;
                            }
                            if (n.endsWith("BombRewardPool")) {
                              e.next = 20;
                              break;
                            }
                            return (e.next = 4), a.sharesPerSecond();
                          case 4:
                            if (((p = e.sent), "WBNB" !== u)) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              p.mul(6e3).div(11e3).div(24)
                            );
                          case 9:
                            if ("CAKE" !== u) {
                              e.next = 13;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              p.mul(2500).div(11e3).div(24)
                            );
                          case 13:
                            if ("SUSD" !== u) {
                              e.next = 17;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              p.mul(1e3).div(11e3).div(24)
                            );
                          case 17:
                            if ("SVL" !== u) {
                              e.next = 19;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              p.mul(1500).div(11e3).div(24)
                            );
                          case 19:
                            return e.abrupt("return", p.div(24));
                          case 20:
                            return (e.next = 22), a.poolStartTime();
                          case 22:
                            if (
                              ((r = e.sent),
                              (y = new Date(1e3 * r.toNumber())),
                              3456e5,
                              !(Date.now() - y.getTime() > 3456e5))
                            ) {
                              e.next = 29;
                              break;
                            }
                            return (e.next = 28), a.epochBombPerSecond(1);
                          case 28:
                            return e.abrupt("return", e.sent);
                          case 29:
                            return (e.next = 31), a.epochBombPerSecond(0);
                          case 31:
                            return e.abrupt("return", e.sent);
                          case 32:
                            return (e.next = 34), a.sharesPerSecond();
                          case 34:
                            if (((o = e.sent), !s && 0 !== s)) {
                              e.next = 44;
                              break;
                            }
                            return (
                              (e.next = 38),
                              Promise.all([
                                a.tSharePerSecond(),
                                a.poolInfo(s),
                                a.totalAllocPoint(),
                              ])
                            );
                          case 38:
                            return (
                              (d = e.sent),
                              (l = Object(i.a)(d, 3)),
                              (m = l[0]),
                              (c = l[1]),
                              (T = l[2]),
                              e.abrupt("return", m.mul(c.allocPoint).div(T))
                            );
                          case 44:
                            return e.abrupt("return", o);
                          case 45:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, a, i, u) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDepositTokenPriceInDollars",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a, i;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getBnbUsdPrice();
                            case 2:
                              if (((i = e.sent), "WBNB" !== t)) {
                                e.next = 7;
                                break;
                              }
                              (a = i), (e.next = 63);
                              break;
                            case 7:
                              if ("BOMB-BTCB-LP" !== t) {
                                e.next = 13;
                                break;
                              }
                              return (
                                (e.next = 10),
                                this.getLPTokenPrice(n, this.USDEX)
                              );
                            case 10:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 13:
                              if ("DEXSHARE-USDC-LP" !== t) {
                                e.next = 19;
                                break;
                              }
                              return (
                                (e.next = 16),
                                this.getLPTokenPrice(n, this.DEXSHARE)
                              );
                            case 16:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 19:
                              if ("USDEX-USDC-LP" !== t) {
                                e.next = 25;
                                break;
                              }
                              return (
                                (e.next = 22),
                                this.getLPTokenPrice(n, this.USDEX)
                              );
                            case 22:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 25:
                              if ("DEXSHARE-BNB-LP" !== t) {
                                e.next = 31;
                                break;
                              }
                              return (
                                (e.next = 28),
                                this.getLPTokenPrice(n, this.DEXSHARE)
                              );
                            case 28:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 31:
                              if (
                                "DEXSHARE-WDEX-LP" !== t &&
                                "WDEX-SHARE" !== t
                              ) {
                                e.next = 37;
                                break;
                              }
                              return (
                                (e.next = 34), this.getDexIraDexSharePrice()
                              );
                            case 34:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 37:
                              if ("BNB-USDEX-LP" !== t) {
                                e.next = 43;
                                break;
                              }
                              return (
                                (e.next = 40),
                                this.getLPTokenPrice(n, this.USDEX)
                              );
                            case 40:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 43:
                              if ("BNB-DEXIRA-LP" !== t) {
                                e.next = 49;
                                break;
                              }
                              return (
                                (e.next = 46), this.getLPTokenPrice(n, this.BNB)
                              );
                            case 46:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 49:
                              if ("DEXETF" !== t) {
                                e.next = 55;
                                break;
                              }
                              return (e.next = 52), this.getDexEtfUsdPrice();
                            case 52:
                              (a = e.sent), (e.next = 63);
                              break;
                            case 55:
                              if (null != n) {
                                e.next = 59;
                                break;
                              }
                              throw new Error(
                                "token " + t + " does not have an address"
                              );
                            case 59:
                              return (
                                (e.next = 61),
                                this.getTokenPriceFromPancakeswap(n)
                              );
                            case 61:
                              (a = e.sent),
                                (a = (Number(a) * Number(i)).toString());
                            case 63:
                              return e.abrupt("return", a);
                            case 64:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getCurrentEpoch",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.contracts.Treasury),
                                e.abrupt("return", t.epoch())
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getBondOraclePriceInLastTWAP",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.contracts.Treasury),
                                e.abrupt("return", t.getBondPremiumRate())
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "buyBonds",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.contracts.Treasury),
                                (e.next = 3),
                                n.getBombPrice()
                              );
                            case 3:
                              return (
                                (a = e.sent),
                                (e.next = 6),
                                n.buyBonds(Object(v.a)(t), a)
                              );
                            case 6:
                              return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "redeemBonds",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.contracts.Treasury),
                                (e.next = 3),
                                n.getBombPrice()
                              );
                            case 3:
                              return (
                                (a = e.sent),
                                (e.next = 6),
                                n.redeemBonds(Object(v.a)(t), a)
                              );
                            case 6:
                              return e.abrupt("return", e.sent);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTotalValueLocked",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, i, u, s, p, r, y, o, d, l, m;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = 0), (n = 0), (a = Object.values(E.a));
                            case 2:
                              if (!(n < a.length)) {
                                e.next = 20;
                                break;
                              }
                              if (
                                ((i = a[n]),
                                (u = this.contracts[i.contract]),
                                void 0 !==
                                  (s = this.externalTokens[i.depositTokenName]))
                              ) {
                                e.next = 8;
                                break;
                              }
                              throw new Error(
                                "couldn't find token for " + i.depositTokenName
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.getDepositTokenPriceInDollars(
                                  i.depositTokenName,
                                  s
                                )
                              );
                            case 10:
                              return (
                                (p = e.sent),
                                (e.next = 13),
                                s.balanceOf(u.address)
                              );
                            case 13:
                              (r = e.sent),
                                (y =
                                  Number(Object(A.a)(r, s.decimal)) *
                                  Number(p)),
                                (o = Number.isNaN(y) ? 0 : y),
                                (t += o);
                            case 17:
                              n++, (e.next = 2);
                              break;
                            case 20:
                              return (e.next = 22), this.getDexShareUsdPrice();
                            case 22:
                              return (
                                (d = e.sent),
                                (e.next = 25),
                                this.DEXSHARE.balanceOf(
                                  this.currentBoardroom().address
                                )
                              );
                            case 25:
                              return (
                                (l = e.sent),
                                (m =
                                  Number(
                                    Object(A.a)(l, this.DEXSHARE.decimal)
                                  ) * Number(d)),
                                e.abrupt("return", t + m)
                              );
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getPoolTotalValueLocked",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, i, u, s, p, r, y, o;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = 0), (n = 0), (a = Object.values(E.a));
                            case 2:
                              if (!(n < a.length)) {
                                e.next = 22;
                                break;
                              }
                              if (
                                "DexSharesDexEtfRewardPool" !==
                                (null === (i = a[n]) || void 0 === i
                                  ? void 0
                                  : i.contract)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt("break", 22);
                            case 6:
                              if (
                                ((u = this.contracts[i.contract]),
                                void 0 !==
                                  (s = this.externalTokens[i.depositTokenName]))
                              ) {
                                e.next = 10;
                                break;
                              }
                              throw new Error(
                                "couldn't find token for " + i.depositTokenName
                              );
                            case 10:
                              return (
                                (e.next = 12),
                                this.getDepositTokenPriceInDollars(
                                  i.depositTokenName,
                                  s
                                )
                              );
                            case 12:
                              return (
                                (p = e.sent),
                                (e.next = 15),
                                s.balanceOf(u.address)
                              );
                            case 15:
                              (r = e.sent),
                                (y =
                                  Number(Object(A.a)(r, s.decimal)) *
                                  Number(p)),
                                (o = Number.isNaN(y) ? 0 : y),
                                (t += o);
                            case 19:
                              n++, (e.next = 2);
                              break;
                            case 22:
                              return e.abrupt("return", t);
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTokenInLp",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a) {
                    var i, u;
                    return B().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.totalSupply().then(function (e) {
                                return new f.BigNumber(e.toString());
                              })
                            );
                          case 2:
                            return (
                              (i = e.sent),
                              (e.next = 5),
                              n.balanceOf(t.address).then(function (e) {
                                return new f.BigNumber(e.toString());
                              })
                            );
                          case 5:
                            return (
                              (u = e.sent),
                              e.abrupt("return", u.times(a.div(i)))
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getSellableUSDEX",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n,
                      i,
                      u,
                      s,
                      p,
                      r,
                      y,
                      o,
                      d,
                      l = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.externalTokens[_.s]),
                                (i = this.externalTokens[_.c]),
                                (e.next = 4),
                                n.balanceOf(t).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 4:
                              return (
                                (u = e.sent),
                                (e.next = 7),
                                i.balanceOf(t).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 7:
                              return (
                                (s = e.sent),
                                (e.next = 10),
                                this.getTokenInLp(n, this.USDEX, u)
                              );
                            case 10:
                              return (
                                (p = e.sent),
                                (e.next = 13),
                                this.getTokenInLp(i, this.USDEX, s)
                              );
                            case 13:
                              return (
                                (r = e.sent),
                                (e.next = 16),
                                this.USDEX.contract
                                  .totalSupply()
                                  .then(function (e) {
                                    return new f.BigNumber(e.toString());
                                  })
                              );
                            case 16:
                              return (
                                (y = e.sent),
                                (e.next = 19),
                                Promise.all(
                                  _.n.map(
                                    (function () {
                                      var e = Object(a.a)(
                                        B().mark(function e(t) {
                                          return B().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    l.USDEX.balanceOf(t).then(
                                                      function (e) {
                                                        return new f.BigNumber(
                                                          e.toString()
                                                        );
                                                      }
                                                    )
                                                  );
                                                case 1:
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
                            case 19:
                              return (
                                (o = e.sent),
                                (d = o.reduce(function (e, t) {
                                  return e.plus(t);
                                }, new f.BigNumber(0))),
                                e.abrupt(
                                  "return",
                                  y
                                    .minus(d.plus(p).plus(r))
                                    .div(1e18)
                                    .toFixed(2)
                                )
                              );
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getOwnedUSDEXLp",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i, u, s, p;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.externalTokens[_.s]),
                                (a = this.externalTokens[_.c]),
                                (e.next = 4),
                                n.contract.totalSupply().then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 4:
                              return (
                                (i = e.sent),
                                (e.next = 7),
                                a.contract.totalSupply().then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 7:
                              return (
                                (u = e.sent),
                                (e.next = 10),
                                n.contract.balanceOf(t).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 10:
                              return (
                                (s = e.sent),
                                (e.next = 13),
                                a.contract.balanceOf(t).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 13:
                              return (
                                (p = e.sent),
                                e.abrupt(
                                  "return",
                                  s.plus(p).div(i.plus(u)).times(100)
                                )
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getOwnedDexSHARELp",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.externalTokens[_.f]),
                                (e.next = 3),
                                n.contract.totalSupply().then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 3:
                              return (
                                (a = e.sent),
                                (e.next = 6),
                                n.contract.balanceOf(t).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 6:
                              return (
                                (i = e.sent),
                                e.abrupt("return", i.div(a).times(100))
                              );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getOwnedDexIraLp",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a, i, u, s;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = this.externalTokens[_.a]),
                                (e.next = 3),
                                a.contract.balanceOf(n).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 3:
                              return (
                                (i = e.sent),
                                (e.next = 6),
                                a.contract.totalSupply().then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 6:
                              return (
                                (u = e.sent),
                                (e.next = 9),
                                a.contract.balanceOf(t).then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 9:
                              return (
                                (s = e.sent),
                                e.abrupt("return", s.plus(i).div(u).times(100))
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getLPTokenPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a, i, u, s, p;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.t0 = A.b), (e.next = 3), t.totalSupply()
                              );
                            case 3:
                              return (
                                (e.t1 = e.sent),
                                (e.t2 = t.decimal),
                                (a = (0, e.t0)(e.t1, e.t2)),
                                (e.t3 = A.b),
                                (e.next = 9),
                                n.balanceOf(t.address)
                              );
                            case 9:
                              if (
                                ((e.t4 = e.sent),
                                (e.t5 = n.decimal),
                                (i = (0, e.t3)(e.t4, e.t5)),
                                "WBNB" !== n.symbol)
                              ) {
                                e.next = 18;
                                break;
                              }
                              return (e.next = 15), this.getBnbUsdPrice();
                            case 15:
                              (u = e.sent), (e.next = 28);
                              break;
                            case 18:
                              if ("USDEX" !== n.symbol) {
                                e.next = 24;
                                break;
                              }
                              return (e.next = 21), this.getUsDexUsdPrice();
                            case 21:
                              (u = e.sent), (e.next = 28);
                              break;
                            case 24:
                              if ("DEXSHARE" !== n.symbol) {
                                e.next = 28;
                                break;
                              }
                              return (e.next = 27), this.getDexShareUsdPrice();
                            case 27:
                              u = e.sent;
                            case 28:
                              return (
                                (s = Number(i) / Number(a)),
                                (p = (Number(u) * s * 2).toString()),
                                e.abrupt("return", p)
                              );
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexIraDexSharePrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, i, u, s, p, r, y, o;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.externalTokens[_.u]),
                                (n = this.DEXIRA),
                                (a = this.DEXSHARE),
                                (e.next = 5),
                                t.totalSupply().then(function (e) {
                                  return new f.BigNumber(e.toString()).div(
                                    1e18
                                  );
                                })
                              );
                            case 5:
                              return (
                                (i = e.sent),
                                (e.next = 8),
                                n.balanceOf(t.address).then(function (e) {
                                  return new f.BigNumber(e.toString()).div(1e9);
                                })
                              );
                            case 8:
                              return (
                                (u = e.sent),
                                (e.next = 11),
                                a.balanceOf(t.address).then(function (e) {
                                  return new f.BigNumber(e.toString()).div(
                                    1e18
                                  );
                                })
                              );
                            case 11:
                              return (
                                (s = e.sent),
                                (e.next = 14),
                                this.getDexIraUsdPrice()
                              );
                            case 14:
                              return (
                                (p = e.sent),
                                (e.next = 17),
                                this.getDexShareUsdPrice()
                              );
                            case 17:
                              return (
                                (r = e.sent),
                                (y = new f.BigNumber(p).times(u)),
                                (o = new f.BigNumber(r).times(s)),
                                e.abrupt("return", y.plus(o).div(i).toString())
                              );
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexIraDexSharePriceStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.externalTokens[_.u]),
                                (e.next = 3),
                                t.totalSupply().then(function (e) {
                                  return new f.BigNumber(e.toString());
                                })
                              );
                            case 3:
                              return (
                                (n = e.sent),
                                (e.next = 6),
                                this.getDexIraDexSharePrice()
                              );
                            case 6:
                              return (
                                (a = e.sent),
                                e.abrupt("return", {
                                  priceInDollars: a,
                                  totalSupply: n.div(1e18),
                                  liquidity: new f.BigNumber(a)
                                    .times(n)
                                    .div(1e18),
                                })
                              );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "earnedFromBank",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a) {
                    var i,
                      u,
                      s = arguments;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((i =
                                  s.length > 3 && void 0 !== s[3]
                                    ? s[3]
                                    : this.myAccount),
                                (u = this.contracts[t]),
                                (e.prev = 2),
                                "USDEX" !== n)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 6), u.pendingUSDEX(a, i);
                            case 6:
                              return e.abrupt("return", e.sent);
                            case 9:
                              if ("DexEtf" !== n) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 12), u.pendingRewards(a, i);
                            case 12:
                              return e.abrupt("return", e.sent);
                            case 15:
                              return (e.next = 17), u.pendingShare(a, i);
                            case 17:
                              return e.abrupt("return", e.sent);
                            case 18:
                              e.next = 24;
                              break;
                            case 20:
                              return (
                                (e.prev = 20),
                                (e.t0 = e.catch(2)),
                                console.error(
                                  "Failed to call pendingShare() on pool "
                                    .concat(t, " ")
                                    .concat(u.address, " ")
                                ),
                                e.abrupt("return", b.a.from(0))
                              );
                            case 24:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 20]]
                    );
                  })
                );
                return function (t, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "stakedBalanceOnBank",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a,
                      i,
                      u,
                      s = arguments;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a =
                                  s.length > 2 && void 0 !== s[2]
                                    ? s[2]
                                    : this.myAccount),
                                (i = this.contracts[t]),
                                (e.prev = 2),
                                (e.next = 5),
                                i.userInfo(n, a)
                              );
                            case 5:
                              return (u = e.sent), (e.next = 8), u.amount;
                            case 8:
                              return e.abrupt("return", e.sent);
                            case 11:
                              return (
                                (e.prev = 11),
                                (e.t0 = e.catch(2)),
                                console.error(
                                  "Failed to call userInfo() on pool "
                                    .concat(t, " ")
                                    .concat(i.address, " ")
                                ),
                                e.abrupt("return", b.a.from(0))
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[2, 11]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "stake",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a) {
                    var i;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = this.contracts[t]),
                                (e.next = 3),
                                i.deposit(n, a)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "wrap",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.contracts.Wdex.wrap(t);
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "unwrap",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.contracts[t].unwrapNoCollect(n)
                              );
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "claim",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.contracts.WdexRewardsManager.claim(
                                  this.myAccount
                                )
                              );
                            case 2:
                              return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "unstake",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a) {
                    var i;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = this.contracts[t]),
                                (e.next = 3),
                                i.withdraw(n, a)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "harvest",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = this.contracts[t]),
                                (e.next = 3),
                                a.withdraw(n, 0)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "exit",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a,
                      i,
                      u,
                      s = arguments;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a =
                                  s.length > 2 && void 0 !== s[2]
                                    ? s[2]
                                    : this.myAccount),
                                (i = this.contracts[t]),
                                (e.next = 4),
                                i.userInfo(n, a)
                              );
                            case 4:
                              return (
                                (u = e.sent),
                                (e.next = 7),
                                i.withdraw(n, u.amount)
                              );
                            case 7:
                              return e.abrupt("return", e.sent);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "fetchBoardroomVersionOfUser",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    return B().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt("return", "latest");
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "currentBoardroom",
              value: function () {
                return this.boardroomVersionOfUser, this.contracts.Boardroom;
              },
            },
            {
              key: "isOldBoardroomMember",
              value: function () {
                return "latest" !== this.boardroomVersionOfUser;
              },
            },
            {
              key: "getTokenPriceFromPancakeswap",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i, u, s, p;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.provider.ready;
                            case 2:
                              if (e.sent) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              return (
                                (n = this.config.externalTokens.WBNB),
                                (a = new l.h(56, n[0], n[1], "WBNB")),
                                (i = new l.h(
                                  56,
                                  t.address,
                                  t.decimal,
                                  t.symbol
                                )),
                                (e.prev = 8),
                                (e.next = 11),
                                l.c.fetchPairData(a, i, this.provider)
                              );
                            case 11:
                              return (
                                (u = e.sent),
                                (s = new l.g([u], i)),
                                (p = s.midPrice.toFixed(9)),
                                e.abrupt("return", p)
                              );
                            case 17:
                              (e.prev = 17),
                                (e.t0 = e.catch(8)),
                                console.log("~ tokenContract", t),
                                console.log(e.t0),
                                console.error(
                                  "Failed to fetch token price of: ".concat(
                                    t.symbol,
                                    " "
                                  )
                                );
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[8, 17]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTokenPriceFromPancakeswapUSDC",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i, u, s;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.provider.ready;
                            case 2:
                              if (e.sent) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              return (
                                (n = new l.h(
                                  56,
                                  this.USDC.address,
                                  this.USDC.decimal,
                                  "USDC",
                                  "USDC"
                                )),
                                (a = new l.h(
                                  56,
                                  t.address,
                                  t.decimal,
                                  t.symbol
                                )),
                                (e.prev = 7),
                                (e.next = 10),
                                l.c.fetchPairData(n, a, this.provider)
                              );
                            case 10:
                              return (
                                (i = e.sent),
                                (u = new l.g([i], a)),
                                (s = Number(u.midPrice.toFixed(12))),
                                e.abrupt("return", s.toFixed(5))
                              );
                            case 16:
                              (e.prev = 16),
                                (e.t0 = e.catch(7)),
                                console.error(
                                  "Failed to fetch token price of: ".concat(
                                    t.symbol,
                                    " "
                                  )
                                );
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[7, 16]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getBnbUsdPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this.updateCachedPrice(
                                  "bnbUsdPrice",
                                  Object(a.a)(
                                    B().mark(function e() {
                                      var n, a, u, s, p, r, y, o, d, l;
                                      return B().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.externalTokens),
                                                (a = n.WBNB),
                                                (u = n.FUSDT),
                                                (s =
                                                  t.externalTokens[
                                                    "USDT-BNB-LP"
                                                  ]),
                                                (e.next = 4),
                                                Promise.all([
                                                  a.balanceOf(s.address),
                                                  u.balanceOf(s.address),
                                                ])
                                              );
                                            case 4:
                                              return (
                                                (p = e.sent),
                                                (r = Object(i.a)(p, 2)),
                                                (y = r[0]),
                                                (o = r[1]),
                                                (d = Number(
                                                  Object(A.b)(y, a.decimal)
                                                )),
                                                (l = Number(
                                                  Object(A.b)(o, u.decimal)
                                                )),
                                                e.abrupt(
                                                  "return",
                                                  (l / d).toString()
                                                )
                                              );
                                            case 11:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexShareUsdPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, u;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.getBnbUsdPrice(),
                                  this.getDexShareBnbPrice(),
                                ])
                              );
                            case 2:
                              return (
                                (t = e.sent),
                                (n = Object(i.a)(t, 2)),
                                (a = n[0]),
                                (u = n[1]),
                                e.abrupt(
                                  "return",
                                  (Number(u) * Number(a)).toString()
                                )
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexIraUsdPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, u;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.getBnbUsdPrice(),
                                  this.getDexIraBnbPrice(),
                                ])
                              );
                            case 2:
                              return (
                                (t = e.sent),
                                (n = Object(i.a)(t, 2)),
                                (a = n[0]),
                                (u = n[1]),
                                e.abrupt(
                                  "return",
                                  (Number(u) * Number(a)).toString()
                                )
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexEtfUsdPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, u;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.getBnbUsdPrice(),
                                  this.getDexEtfBnbPrice(),
                                ])
                              );
                            case 2:
                              return (
                                (t = e.sent),
                                (n = Object(i.a)(t, 2)),
                                (a = n[0]),
                                (u = n[1]),
                                e.abrupt(
                                  "return",
                                  (Number(u) * Number(a)).toString()
                                )
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexIraBnbPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this.updateCachedPrice(
                                  "dexIraBnbPrice",
                                  function () {
                                    return t.getTokenPriceFromPancakeswap(
                                      t.DEXIRA
                                    );
                                  }
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getUsDexUsdPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this.updateCachedPrice(
                                  "usDexUsdPrice",
                                  function () {
                                    return t.getTokenPriceFromPancakeswapUSDC(
                                      t.USDEX
                                    );
                                  }
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexShareBnbPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this.updateCachedPrice(
                                  "dexShareBnbPrice",
                                  function () {
                                    return t.getTokenPriceFromPancakeswap(
                                      t.DEXSHARE
                                    );
                                  }
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getDexEtfBnbPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t = this;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                this.updateCachedPrice(
                                  "dexEtfBnbPrice",
                                  Object(a.a)(
                                    B().mark(function e() {
                                      var n,
                                        a,
                                        u,
                                        s,
                                        p,
                                        r,
                                        y,
                                        o,
                                        d,
                                        l,
                                        c,
                                        T,
                                        b,
                                        f,
                                        v;
                                      return B().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  (n = t.contracts),
                                                  (a = n.EtfOracle),
                                                  (u = n.indexpool),
                                                  (s = new m.MultiCall(
                                                    t.web3,
                                                    S.g[t.chainId]
                                                  )),
                                                  (e.next = 5),
                                                  u.getCurrentTokens()
                                                );
                                              case 5:
                                                return (
                                                  (p = e.sent),
                                                  (r = p.map(function (e) {
                                                    return {
                                                      balance: Object(D.a)(
                                                        t.web3,
                                                        t.deployments.indexpool
                                                          .abi,
                                                        u.address
                                                      ).methods.getBalance(e),
                                                    };
                                                  })),
                                                  (y = p.map(function (e) {
                                                    return {
                                                      decimals: Object(D.a)(
                                                        t.web3,
                                                        w,
                                                        e
                                                      ).methods.decimals(),
                                                    };
                                                  })),
                                                  (e.next = 10),
                                                  Promise.all([
                                                    u.totalSupply(),
                                                    a.computeAverageTokenPrices(
                                                      p,
                                                      R.b,
                                                      R.a
                                                    ),
                                                    s.all([r, y, []]),
                                                  ])
                                                );
                                              case 10:
                                                return (
                                                  (o = e.sent),
                                                  (d = Object(i.a)(o, 3)),
                                                  (l = d[0]),
                                                  (c = d[1]),
                                                  (T = Object(i.a)(d[2], 2)),
                                                  (b = T[0]),
                                                  (f = T[1]),
                                                  (v = c.reduce(function (
                                                    e,
                                                    t,
                                                    n
                                                  ) {
                                                    var a = Object(i.a)(
                                                        t,
                                                        1
                                                      )[0],
                                                      u = b[n].balance,
                                                      s = f[n].decimals,
                                                      p = Number(s),
                                                      r = Object(P.e)(a)
                                                        .div(Math.pow(2, 112))
                                                        .div(
                                                          Math.pow(10, 18 - p)
                                                        ),
                                                      y = Object(P.e)(
                                                        u,
                                                        s
                                                      ).times(r);
                                                    return e.plus(y);
                                                  },
                                                  Object(P.e)(0))),
                                                  e.abrupt(
                                                    "return",
                                                    v
                                                      .div(
                                                        Object(P.e)(
                                                          l,
                                                          18
                                                        ).toString()
                                                      )
                                                      .toString()
                                                  )
                                                );
                                              case 21:
                                                return (
                                                  (e.prev = 21),
                                                  (e.t0 = e.catch(0)),
                                                  console.error(e.t0),
                                                  e.abrupt("return", "0.2")
                                                );
                                              case 25:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[0, 21]]
                                      );
                                    })
                                  )
                                )
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "updateCachedPrice",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (i = this[t]).lastUpdateTime &&
                                !(i.lastUpdateTime.getTime() + 4e4 < Date.now())
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (e.prev = 1), (e.next = 4), n();
                            case 4:
                              (a = e.sent),
                                (this[t] = {
                                  price: a.toString(),
                                  lastUpdateTime: new Date(),
                                }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                console.error(
                                  "Failed to fetch token price of "
                                    .concat(t, ": ")
                                    .concat(e.t0)
                                );
                            case 11:
                              return e.abrupt("return", this[t].price);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                        var i;
                      },
                      e,
                      this,
                      [[1, 8]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "canUserClaimRewardFromBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.currentBoardroom()),
                                (e.next = 3),
                                t.canClaimReward(this.myAccount)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "canUserUnstakeFromBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, i, u;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.currentBoardroom()),
                                (e.next = 3),
                                t.canWithdraw(this.myAccount)
                              );
                            case 3:
                              return (
                                (n = e.sent),
                                (e.next = 6),
                                this.getStakedSharesOnBoardroom()
                              );
                            case 6:
                              return (
                                (a = e.sent),
                                (i =
                                  0 ===
                                  Number(
                                    Object(A.a)(a, this.DEXSHARE.decimal)
                                  )),
                                (u = !!i || n),
                                e.abrupt("return", u)
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "timeUntilClaimRewardFromBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    return B().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt("return", b.a.from(0));
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTotalStakedInBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.currentBoardroom()),
                                (e.next = 3),
                                t.totalSupply()
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "stakeShareToBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.isOldBoardroomMember()) {
                                e.next = 2;
                                break;
                              }
                              throw new Error(
                                "you're using old boardroom. please withdraw and deposit the BSHARE again."
                              );
                            case 2:
                              return (
                                (n = this.currentBoardroom()),
                                (e.next = 5),
                                n.stake(Object(v.a)(t))
                              );
                            case 5:
                              return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getStakedSharesOnBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.currentBoardroom()),
                                "v1" !== this.boardroomVersionOfUser)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (e.next = 4), t.getShareOf(this.myAccount);
                            case 4:
                              return e.abrupt("return", e.sent);
                            case 5:
                              return (e.next = 7), t.balanceOf(this.myAccount);
                            case 7:
                              return e.abrupt("return", e.sent);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getEarningsOnBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.currentBoardroom()),
                                "v1" !== this.boardroomVersionOfUser)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (e.next = 4),
                                t.getCashEarningsOf(this.myAccount)
                              );
                            case 4:
                              return e.abrupt("return", e.sent);
                            case 5:
                              return (e.next = 7), t.earned(this.myAccount);
                            case 7:
                              return e.abrupt("return", e.sent);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "withdrawShareFromBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.currentBoardroom()),
                                (e.next = 3),
                                n.withdraw(Object(v.a)(t))
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "harvestCashFromBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.currentBoardroom()),
                                "v1" !== this.boardroomVersionOfUser)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (e.next = 4), t.claimDividends();
                            case 4:
                              return e.abrupt("return", e.sent);
                            case 5:
                              return (e.next = 7), t.claimReward();
                            case 7:
                              return e.abrupt("return", e.sent);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "exitFromBoardroom",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.currentBoardroom()),
                                (e.next = 3),
                                t.exit()
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTreasuryNextAllocationTime",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e() {
                    var t, n, a, i;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.contracts.Treasury),
                                (e.next = 3),
                                t.nextEpochPoint()
                              );
                            case 3:
                              return (
                                (n = e.sent),
                                (a = new Date(n.mul(1e3).toNumber())),
                                (i = new Date(Date.now())),
                                e.abrupt("return", { from: i, to: a })
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "provideBombFtmLP",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a, i;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = this.contracts.TaxOffice),
                                (i = { value: Object(k.parseUnits)(t, 18) }),
                                (e.next = 4),
                                a.addLiquidityETHTaxFree(
                                  n,
                                  n.mul(992).div(1e3),
                                  Object(k.parseUnits)(t, 18).mul(992).div(1e3),
                                  i
                                )
                              );
                            case 4:
                              return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "quoteFromSpooky",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n) {
                    var a, i, u, s, p;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = this.contracts.SpookyRouter),
                                (e.next = 3),
                                this.USDEX_USDC_LP.getReserves()
                              );
                            case 3:
                              if (
                                ((i = e.sent),
                                (u = i._reserve0),
                                (s = i._reserve1),
                                "BOMB" !== n)
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.next = 9),
                                a.quote(Object(k.parseUnits)(t), s, u)
                              );
                            case 9:
                              (p = e.sent), (e.next = 15);
                              break;
                            case 12:
                              return (
                                (e.next = 14),
                                a.quote(Object(k.parseUnits)(t), u, s)
                              );
                            case 14:
                              p = e.sent;
                            case 15:
                              return e.abrupt("return", (p / 1e14).toString());
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "estimateZapIn",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a) {
                    var i, u, s, p, r;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((i = this.contracts.Zapper),
                                (u = this.externalTokens[n]),
                                (s = n === _.a ? 1e9 : 1e18),
                                t !== _.b)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (e.next = 6),
                                i.estimateZapIn(
                                  u.address,
                                  _.p,
                                  Object(k.parseUnits)(a, 18)
                                )
                              );
                            case 6:
                              (p = e.sent), (e.next = 13);
                              break;
                            case 9:
                              return (
                                (r =
                                  t === _.r
                                    ? this.USDEX
                                    : t === _.q
                                    ? this.externalTokens.USDC
                                    : this.DEXSHARE),
                                (e.next = 12),
                                i.estimateZapInToken(
                                  r.address,
                                  u.address,
                                  _.p,
                                  Object(k.parseUnits)(a, 18)
                                )
                              );
                            case 12:
                              p = e.sent;
                            case 13:
                              return e.abrupt("return", [
                                p[0] / s,
                                p[1] / 1e18,
                              ]);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "zapInv1",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a) {
                    var i, u, s, p;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((i = this.contracts.Zapper),
                                (u = this.externalTokens[n]),
                                t !== _.b)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (s = {
                                  value: Object(k.parseUnits)(a, 18),
                                  gasLimit: "1500000",
                                }),
                                (e.next = 6),
                                i.zapIn(u.address, _.p, this.myAccount, s)
                              );
                            case 6:
                              return e.abrupt("return", e.sent);
                            case 9:
                              (e.t0 = t),
                                (e.next =
                                  e.t0 === _.r
                                    ? 12
                                    : e.t0 === _.g
                                    ? 14
                                    : e.t0 === _.q
                                    ? 16
                                    : 18);
                              break;
                            case 12:
                              return (p = this.USDEX), e.abrupt("break", 19);
                            case 14:
                              return (p = this.DEXSHARE), e.abrupt("break", 19);
                            case 16:
                              return (
                                (p = this.externalTokens.USDC),
                                e.abrupt("break", 19)
                              );
                            case 18:
                              p = this.USDEX;
                            case 19:
                              return (
                                (e.next = 21),
                                i.zapInToken(
                                  p.address,
                                  Object(k.parseUnits)(a, 18),
                                  u.address,
                                  _.p,
                                  this.myAccount,
                                  { gasLimit: "1500000" }
                                )
                              );
                            case 21:
                              return e.abrupt("return", e.sent);
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "zapIn",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t, n, a, i) {
                    var u, s, p, r;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((u = this.contracts.ZapperV2),
                                (s = this.externalTokens[n]),
                                t !== _.b)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (
                                (p = {
                                  value: Object(k.parseUnits)(a, 18),
                                  gasLimit: "1500000",
                                }),
                                (e.next = 6),
                                u.zapBNBToLP(s.address, p)
                              );
                            case 6:
                              return e.abrupt("return", e.sent);
                            case 9:
                              (e.t0 = t),
                                (e.next =
                                  e.t0 === _.r
                                    ? 12
                                    : e.t0 === _.g
                                    ? 14
                                    : e.t0 === _.q
                                    ? 16
                                    : 18);
                              break;
                            case 12:
                              return (r = this.USDEX), e.abrupt("break", 19);
                            case 14:
                              return (r = this.DEXSHARE), e.abrupt("break", 19);
                            case 16:
                              return (
                                (r = this.externalTokens.USDC),
                                e.abrupt("break", 19)
                              );
                            case 18:
                              r = null;
                            case 19:
                              return (
                                (e.next = 21),
                                u.zapTokenToLP(
                                  r.address,
                                  Object(k.parseUnits)(a, 18),
                                  s.address,
                                  { gasLimit: "1500000" }
                                )
                              );
                            case 21:
                              return e.abrupt("return", e.sent);
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, n, a, i) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "swapBBondToBShare",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.contracts.BShareSwapper),
                                (e.next = 3),
                                n.swapBBondToBShare(t)
                              );
                            case 3:
                              return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "estimateAmountOfBShare",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.contracts.BShareSwapper),
                                (e.prev = 1),
                                (e.next = 4),
                                n.estimateAmountOfBShare(
                                  Object(k.parseUnits)(t, 18)
                                )
                              );
                            case 4:
                              return (
                                (a = e.sent),
                                e.abrupt("return", Object(A.a)(a, 18, 6))
                              );
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                console.error(
                                  "Failed to fetch estimate share amount: ".concat(
                                    e.t0
                                  )
                                );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getBShareSwapperStat",
              value: (function () {
                var e = Object(a.a)(
                  B().mark(function e(t) {
                    var n, a, i, u, s, p;
                    return B().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.contracts.BShareSwapper),
                                (e.next = 3),
                                n.getBShareBalance()
                              );
                            case 3:
                              return (
                                (a = e.sent), (e.next = 6), n.getBBondBalance(t)
                              );
                            case 6:
                              return (
                                (i = e.sent),
                                (e.next = 9),
                                n.getBShareAmountPerBomb()
                              );
                            case 9:
                              return (
                                (u = e.sent),
                                (s = Object(A.a)(a, 18, 5)),
                                (p = Object(A.a)(i, 18, 5)),
                                e.abrupt("return", {
                                  bshareBalance: s.toString(),
                                  bbondBalance: p.toString(),
                                  rateBSharePerBomb: u.toString(),
                                })
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "findERC20ByAddress",
              value: function (e) {
                return Object.values(this.externalTokens).find(function (t) {
                  return e.toLowerCase() === t.address.toLowerCase();
                });
              },
            },
          ]),
          e
        );
      })();
      function F() {
        F = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (E) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function r(e, t, n, a) {
          var i = t && t.prototype instanceof d ? t : d,
            u = Object.create(i.prototype),
            s = new A(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return O();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = h(s, n);
                    if (p) {
                      if (p === o) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = y(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === o)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function y(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = r;
        var o = {};
        function d() {}
        function l() {}
        function m() {}
        var c = {};
        p(c, i, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          b = T && T(T(g([])));
        b && b !== t && n.call(b, i) && (c = b);
        var f = (m.prototype = d.prototype = Object.create(c));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = y(e[i], e, u);
                  if ("throw" !== r.type) {
                    var o = r.arg,
                      d = o.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (o.value = e), s(o);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function h(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                h(e, t),
                "throw" === t.method)
              )
                return o;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return o;
          }
          var a = y(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), o
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                o)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              o);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function g(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (l.prototype = m),
          p(f, "constructor", m),
          p(m, "constructor", l),
          (l.displayName = p(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === l || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(f)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          p(w.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new w(r(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          v(f),
          p(f, s, "Generator"),
          p(f, i, function () {
            return this;
          }),
          p(f, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = g),
          (A.prototype = {
            constructor: A,
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), o)
                  : this.complete(s)
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
                o
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), o;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: g(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                o
              );
            },
          }),
          e
        );
      }
      var C = Object(u.createContext)({ dexFinance: null }),
        L = function (e) {
          var t = e.children,
            n = Object(p.c)(),
            r = n.ethereum,
            y = n.account,
            o = n.status,
            d = Object(u.useState)(!1),
            l = Object(i.a)(d, 2),
            m = l[0],
            c = l[1],
            T = Object(u.useState)(!1),
            b = Object(i.a)(T, 2),
            f = b[0],
            w = b[1],
            h = Object(u.useRef)(new I(E.b));
          return (
            Object(u.useEffect)(
              function () {
                "connecting" === o && w(!1);
                var e = setTimeout(function () {
                  "disconnected" === o && w(!0);
                }, 3e3);
                ["connected", "error"].includes(o) && (w(!0), clearTimeout(e));
              },
              [o, y]
            ),
            Object(u.useEffect)(
              function () {
                Object(a.a)(
                  F().mark(function e() {
                    var t;
                    return F().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!f) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (t =
                                "connected" === o
                                  ? r
                                  : Object(v.c)(E.b.defaultProvider)),
                              (e.next = 5),
                              h.current.init(t, y)
                            );
                          case 5:
                            c(!0);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              [y, f, r]
            ),
            s.a.createElement(
              C.Provider,
              { value: { dexFinance: h.current, isReady: m } },
              t
            )
          );
        };
    },
    226: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return k;
      }),
        n.d(t, "b", function () {
          return _;
        }),
        n.d(t, "a", function () {
          return P;
        }),
        n.d(t, "g", function () {
          return D;
        }),
        n.d(t, "f", function () {
          return S;
        }),
        n.d(t, "e", function () {
          return R;
        }),
        n.d(t, "h", function () {
          return B;
        }),
        n.d(t, "c", function () {
          return I;
        });
      var a = n(16),
        i = n.n(a),
        u = n(185),
        s = n(46),
        p = n(437),
        r = n.n(p),
        y = n(438),
        o = n.n(y),
        d = n(439),
        l = n.n(d),
        m = n(440),
        c = n.n(m),
        T = n(441),
        b = n.n(T),
        f = n(442),
        v = n.n(f),
        w = n(443),
        h = n.n(w),
        M = n(444),
        x = n.n(M),
        A = n(288),
        g = n.n(A),
        O = n(445),
        E = n.n(O),
        k = (n(123), new Intl.NumberFormat("en-US")),
        _ = "1",
        P = "172800",
        D = function (e, t, n) {
          return new e.eth.Contract(t, n);
        },
        S = function (e) {
          return Number(e) >= Number("0xffffffffffffffffffffffff");
        },
        R = function (e, t) {
          if (t === u.b)
            switch (e.toLowerCase()) {
              case s.b[t].WBNB.toLowerCase():
                return o.a;
              case s.b[t].CAKE.toLowerCase():
                return r.a;
              case s.b[t].BTCB.toLowerCase():
                return h.a;
              case s.b[t].XRP.toLowerCase():
                return E.a;
              case s.b[t].BUSD.toLowerCase():
                return g.a;
              case s.b[t].ETH.toLowerCase():
                return v.a;
              case s.b[t].ADA.toLowerCase():
                return x.a;
              case s.b[t].DEX_IRA.toLowerCase():
                return l.a;
              case s.b[t].USDEX.toLowerCase():
                return c.a;
              case s.b[t].DEX_SHARE.toLowerCase():
                return b.a;
              default:
                return "";
            }
        };
      var B = function (e) {
          return new i.a(10).exponentiatedBy(e);
        },
        I = function (e, t, n) {
          return e * Math.pow(1 + n / t, t * t);
        };
    },
    229: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e, t, n) {
        return new e.eth.Contract(t, n);
      };
    },
    280: function (e, t, n) {
      "use strict";
      var a = n(0),
        i = n(223);
      t.a = function () {
        return Object(a.useContext)(i.a).dexFinance;
      };
    },
    288: function (e, t, n) {
      e.exports = n.p + "static/media/busd.61ed49e5.svg";
    },
    289: function (e, t, n) {
      "use strict";
      var a = n(278),
        i = Object(a.a)({
          palette: {
            table: {
              text: { color: "#22272b" },
              head: { background: "#b5d8ee" },
              rows: {
                primary: { background: "#e5f1fd" },
                secondary: { background: "#b5d8ee" },
              },
            },
            type: "light",
            text: { primary: "#dddfee", secondary: "white", yellow: "#f9d749" },
            background: { default: "#121212", paper: "#0e162b" },
            primary: {
              light: "#ffe066",
              main: "#8b67d3",
              dark: "#b38f00",
              contrastText: "#000",
              text: "#FFFFFF",
            },
            secondary: {
              light: "#ff7961",
              main: "#f44336",
              dark: "#ba000d",
              contrastText: "#000",
            },
            action: {
              disabledBackground: "#CDCDCD",
              active: "#000",
              hover: "#fff",
            },
          },
          typography: {
            color: "#2c2560",
            fontFamily: ['"Rubik"', "sans-serif"].join(","),
          },
          shape: { borderRadius: "10px" },
        });
      t.a = i;
    },
    290: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var a,
        i,
        u = n(43),
        s = n(26),
        p = n(0),
        r = n.n(p),
        y = n(37),
        o = Object(p.createContext)({
          onPresent: function () {},
          onDismiss: function () {},
        }),
        d = y.e.div(
          a ||
            (a = Object(u.a)([
              "\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n",
            ]))
        ),
        l = y.e.div(
          i ||
            (i = Object(u.a)([
              "\n  background-color: #00000088;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n",
            ]))
        ),
        m = function (e) {
          var t = e.children,
            n = Object(p.useState)(!1),
            a = Object(s.a)(n, 2),
            i = a[0],
            u = a[1],
            y = Object(p.useState)(),
            m = Object(s.a)(y, 2),
            c = m[0],
            T = m[1],
            b = Object(p.useCallback)(
              function (e) {
                T(e), u(!0);
              },
              [T, u]
            ),
            f = Object(p.useCallback)(
              function () {
                T(void 0), u(!1);
              },
              [T, u]
            );
          return r.a.createElement(
            o.Provider,
            { value: { content: c, isOpen: i, onPresent: b, onDismiss: f } },
            t,
            i &&
              r.a.createElement(
                d,
                null,
                r.a.createElement(l, { onClick: f }),
                r.a.isValidElement(c) && r.a.cloneElement(c, { onDismiss: f })
              )
          );
        };
    },
    291: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return y;
        });
      var a = n(11),
        i = n(26),
        u = n(0),
        s = n.n(u);
      function p() {
        p = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function r(e, t, n) {
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
          r({}, "");
        } catch (k) {
          r = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function y(e, t, n, a) {
          var i = t && t.prototype instanceof l ? t : l,
            u = Object.create(i.prototype),
            s = new g(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return E();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = M(s, n);
                    if (p) {
                      if (p === d) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = o(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === d)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function o(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = y;
        var d = {};
        function l() {}
        function m() {}
        function c() {}
        var T = {};
        r(T, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          f = b && b(b(O([])));
        f && f !== t && n.call(f, i) && (T = f);
        var v = (c.prototype = l.prototype = Object.create(T));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            r(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = o(e[i], e, u);
                  if ("throw" !== r.type) {
                    var y = r.arg,
                      d = y.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (y.value = e), s(y);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function M(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                M(e, t),
                "throw" === t.method)
              )
                return d;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var a = o(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function g(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = c),
          r(v, "constructor", c),
          r(c, "constructor", m),
          (m.displayName = r(c, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), r(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(h.prototype),
          r(h.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new h(y(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          w(v),
          r(v, s, "Generator"),
          r(v, i, function () {
            return this;
          }),
          r(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = O),
          (g.prototype = {
            constructor: g,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), d)
                  : this.complete(s)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), A(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      var r = s.a.createContext({ slow: 0, fast: 0 }),
        y = function (e) {
          var t = e.children,
            n = Object(u.useState)(0),
            y = Object(i.a)(n, 2),
            o = y[0],
            d = y[1],
            l = Object(u.useState)(0),
            m = Object(i.a)(l, 2),
            c = m[0],
            T = m[1];
          return (
            Object(u.useEffect)(function () {
              var e = setInterval(
                Object(a.a)(
                  p().mark(function e() {
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            T(function (e) {
                              return e + 1;
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                1e4
              );
              return function () {
                return clearInterval(e);
              };
            }, []),
            Object(u.useEffect)(function () {
              var e = setInterval(
                Object(a.a)(
                  p().mark(function e() {
                    return p().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            d(function (e) {
                              return e + 1;
                            });
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                6e4
              );
              return function () {
                return clearInterval(e);
              };
            }, []),
            s.a.createElement(r.Provider, { value: { slow: o, fast: c } }, t)
          );
        };
    },
    294: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    298: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = n(155),
        i = n(11),
        u = n(26),
        s = n(0),
        p = n.n(s),
        r = Object(s.createContext)({ banks: [] }),
        y = n(280),
        o = n(34);
      function d() {
        d = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (k) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function r(e, t, n, a) {
          var i = t && t.prototype instanceof l ? t : l,
            u = Object.create(i.prototype),
            s = new g(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return E();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = M(s, n);
                    if (p) {
                      if (p === o) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = y(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === o)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function y(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = r;
        var o = {};
        function l() {}
        function m() {}
        function c() {}
        var T = {};
        p(T, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          f = b && b(b(O([])));
        f && f !== t && n.call(f, i) && (T = f);
        var v = (c.prototype = l.prototype = Object.create(T));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = y(e[i], e, u);
                  if ("throw" !== r.type) {
                    var o = r.arg,
                      d = o.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (o.value = e), s(o);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function M(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                M(e, t),
                "throw" === t.method)
              )
                return o;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return o;
          }
          var a = y(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), o
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                o)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              o);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function g(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = c),
          p(v, "constructor", c),
          p(c, "constructor", m),
          (m.displayName = p(c, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(h.prototype),
          p(h.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new h(r(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          w(v),
          p(v, s, "Generator"),
          p(v, i, function () {
            return this;
          }),
          p(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = O),
          (g.prototype = {
            constructor: g,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), o)
                  : this.complete(s)
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
                o
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), A(n), o;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                o
              );
            },
          }),
          e
        );
      }
      var l = function (e) {
        var t = e.children,
          n = Object(s.useState)([]),
          l = Object(u.a)(n, 2),
          m = l[0],
          c = l[1],
          T = Object(y.a)(),
          b = null === T || void 0 === T ? void 0 : T.isUnlocked,
          f = Object(s.useCallback)(
            Object(i.a)(
              d().mark(function e() {
                var t, n, i, u, s;
                return d().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (t = []), (n = 0), (i = Object.values(o.a));
                      case 2:
                        if (!(n < i.length)) {
                          e.next = 17;
                          break;
                        }
                        if (!(u = i[n]).finished) {
                          e.next = 13;
                          break;
                        }
                        if (T.isUnlocked) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("continue", 14);
                      case 7:
                        return (
                          (e.next = 9),
                          T.stakedBalanceOnBank(
                            u.contract,
                            u.poolId,
                            T.myAccount
                          )
                        );
                      case 9:
                        if (((s = e.sent), o.b.showUnstakedClosedPools)) {
                          e.next = 13;
                          break;
                        }
                        if (!s.lte(0)) {
                          e.next = 13;
                          break;
                        }
                        return e.abrupt("continue", 14);
                      case 13:
                        t.push(
                          Object(a.a)(
                            Object(a.a)({}, u),
                            {},
                            {
                              address: o.b.deployments[u.contract].address,
                              depositToken:
                                T.externalTokens[u.depositTokenName],
                              earnToken:
                                "BOMB" === u.earnTokenName
                                  ? T.USDEX
                                  : T.DEXSHARE,
                            }
                          )
                        );
                      case 14:
                        n++, (e.next = 2);
                        break;
                      case 17:
                        t.sort(function (e, t) {
                          return e.sort > t.sort ? 1 : -1;
                        }),
                          c(t);
                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [b]
          );
        return (
          Object(s.useEffect)(
            function () {
              T &&
                f().catch(function (e) {
                  return console.error(
                    "Failed to fetch pools: ".concat(e.stack)
                  );
                });
            },
            [b]
          ),
          p.a.createElement(r.Provider, { value: { banks: m } }, t)
        );
      };
    },
    34: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return u;
        });
      var a = {
          development: {
            chainId: 31337,
            networkName: "Local",
            ftmscanUrl: "https://bscscan.com",
            defaultProvider: "http://localhost:8545",
            deployments: n(475),
            amm: "https://pancakeswap.finance/",
            externalTokens: {
              WBNB: ["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18],
              FUSDT: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18],
              BTCB: ["0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18],
              USDC: ["0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18],
              "USDT-BNB-LP": ["0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16", 18],
              "USDT-BTCB-LP": [
                "0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62",
                18,
              ],
              "USDT-USDC-LP": [
                "0xEc6557348085Aa57C72514D67070dC863C0a5A8c",
                18,
              ],
              WDEX: ["0xc38D04c99dd8D883515b96EA145924674d62Da69", 18],
              DEXSHARE: ["0xf4914E6D97a75f014AcFcF4072f11be5CfFc4cA6", 18],
              "USDEX-USDC-LP": [
                "0x79F3bb5534b8f060b37b3e5deA032a39412F6B10",
                18,
              ],
              "DEXSHARE-BNB-LP": [
                "0x65D83463fC023bffbd8aC9a1a2E1037F4bbdB399",
                18,
              ],
              "DEXSHARE-USDC-LP": [
                "0x65D83463fC023bffbd8aC9a1a2E1037F4bbdB399",
                18,
              ],
              "DEXSHARE-WDEX-LP": [
                "0x05220A11566a954d449dCB72d241277668b8cF9E",
                18,
              ],
              "wDEXIRA-DEXSHARE": [
                "0x05220A11566a954d449dCB72d241277668b8cF9E",
                18,
              ],
            },
            preLaunch: !1,
            baseLaunchDate: new Date("2021-11-20 1:00:00Z"),
            bondLaunchesAt: new Date("2020-12-03T15:00:00Z"),
            boardroomLaunchesAt: new Date("2021-11-20T00:00:00Z"),
            refreshInterval: 15e3,
            showUnstakedClosedPools: !0,
          },
          production: {
            chainId: 56,
            networkName: "BSC Mainnet",
            ftmscanUrl: "https://bscscan.com",
            defaultProvider: "https://bsc-dataseed.binance.org/",
            amm: "https://pancakeswap.finance/",
            deployments: n(459),
            externalTokens: {
              WBNB: ["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18],
              FUSDT: ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18],
              BTCB: ["0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18],
              USDEX: ["0x829c09fcc46d9fd31967272aba245bef9f727f93", 18],
              USDC: ["0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18],
              "USDT-BNB-LP": ["0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16", 18],
              "USDT-BTCB-LP": [
                "0x3f803ec2b816ea7f06ec76aa2b6f2532f9892d62",
                18,
              ],
              "USDT-USDC-LP": [
                "0xEc6557348085Aa57C72514D67070dC863C0a5A8c",
                18,
              ],
              WDEX: ["0xc38D04c99dd8D883515b96EA145924674d62Da69", 18],
              DEXSHARE: ["0xf4914E6D97a75f014AcFcF4072f11be5CfFc4cA6", 18],
              "USDEX-USDC-LP": [
                "0x79F3bb5534b8f060b37b3e5deA032a39412F6B10",
                18,
              ],
              DEXIRA: ["0x147e07976e1ae78287c33aafaab87760d32e50a5", 18],
              DEXETF: ["0x60EBfD605Cb25C7796F729c78a4453ACeCb1CE03", 18],
              "DEXSHARE-BNB-LP": [
                "0x65D83463fC023bffbd8aC9a1a2E1037F4bbdB399",
                18,
              ],
              "BNB-USDEX-LP": [
                "0xB3a7a1AB8E85814C042AF4b6A9BED77906e417F3",
                18,
              ],
              "BNB-DEXIRA-LP": [
                "0x01B279a06F5F26bD3F469A3E730097184973FC8a",
                18,
              ],
              "DEXSHARE-USDC-LP": [
                "0x65D83463fC023bffbd8aC9a1a2E1037F4bbdB399",
                18,
              ],
              "DEXSHARE-WDEX-LP": [
                "0x05220A11566a954d449dCB72d241277668b8cF9E",
                18,
              ],
              "WDEX-SHARE": ["0x6647047433df4CFc9912d092Fd155b9d972A4a85", 18],
              "wDEXIRA-DEXSHARE": [
                "0x05220A11566a954d449dCB72d241277668b8cF9E",
                18,
              ],
            },
            preLaunch: !1,
            baseLaunchDate: new Date("2022-04-15 12:00:00Z"),
            bondLaunchesAt: new Date("2022-04-15 12:00:00Z"),
            boardroomLaunchesAt: new Date("2022-04-15 12:00:00Z"),
            refreshInterval: 1e4,
            showUnstakedClosedPools: !1,
          },
        },
        i = {
          UsdexBusdLPDexshareRewardPool: {
            name: "Earn DEXSHARE by USDEX-USDC LP",
            poolId: 0,
            sectionInUI: 2,
            contract: "UsdexBusdLPDexshareRewardPool",
            depositTokenName: "USDEX-USDC-LP",
            depositName: "USDEX/USDC",
            earnName: "dexSHARE",
            earnTokenName: "DexShare",
            finished: !1,
            sort: 0,
            closedForStaking: !1,
          },
          DesxhareBnbLPDedshareRewardPool: {
            name: "Earn DEXSHARE by wDEXIRA-DEXSHARE",
            poolId: 1,
            sectionInUI: 2,
            contract: "DesxhareBnbLPDedshareRewardPool",
            depositTokenName: "DEXSHARE-BNB-LP",
            depositName: "DEXSHARE/BNB",
            earnName: "dexSHARE",
            earnTokenName: "DexShare",
            finished: !1,
            sort: 1,
            closedForStaking: !1,
          },
          WDexDexShareLPDexshareRewardPool: {
            name: "Earn DEXSHARE by wDEXIRA-DEXSHARE",
            poolId: 5,
            sectionInUI: 2,
            contract: "WDexDexShareLPDexshareRewardPool",
            depositTokenName: "WDEX-SHARE",
            depositName: "wDEX/dexSHARE",
            earnName: "dexSHARE",
            earnTokenName: "DexShare",
            finished: !1,
            sort: 2,
            closedForStaking: !1,
          },
          WDexDexShareLPDexshareRewardPoolOld: {
            name: "Earn DEXSHARE by wDEXIRA-DEXSHARE inactive",
            poolId: 3,
            sectionInUI: 2,
            contract: "WDexDexShareLPDexshareRewardPool",
            depositTokenName: "DEXSHARE-WDEX-LP",
            depositName: "wDEX/dexSHARE",
            earnName: "dexSHARE",
            earnTokenName: "DexShare",
            finished: !0,
            sort: 2,
            closedForStaking: !1,
          },
          DexShareDexETFRewardPool: {
            name: "Earn DEXSETF by DEXSHARE",
            poolId: 0,
            sectionInUI: 4,
            contract: "DexSharesDexEtfRewardPool",
            depositTokenName: "DEXSHARE",
            depositName: "dexSHARE",
            earnName: "dexETF",
            earnTokenName: "DexEtf",
            finished: !1,
            sort: 0,
            closedForStaking: !1,
          },
        },
        u = {
          Strategy1: {
            apr: "--.--%",
            stragetyTitle: "CONSERVATIVE",
            depositTokenName: "USDEX-USDC-LP",
            earnTokenName: "DEXSHARE",
            zapContractName: "",
          },
          Strategy2: {
            apr: "--.--%",
            stragetyTitle: "BALANCED",
            depositTokenName: "USDEX-USDC-LP",
            earnTokenName: "DEXSHARE",
            zapContractName: "",
          },
          Strategy6: {
            apr: "--.--%",
            stragetyTitle: "AGGRESSIVE",
            depositTokenName: "USDEX-USDC-LP",
            earnTokenName: "DEXSHARE",
            zapContractName: "",
          },
        };
      t.b = a.production;
    },
    35: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var a = n(14),
        i = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 4,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          0 === t && (n = 0);
          var i = s(e, t - n),
            u = (i / Math.pow(10, n)).toFixed(n);
          return u.length > 12 && a ? u.slice(0, 12) + "..." : u;
        },
        u = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return i(e, t, 4, n);
        };
      function s(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return Number(e.div(a.a.from(10).pow(t)));
      }
    },
    423: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    424: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
      );
    },
    425: function (e) {
      e.exports = JSON.parse(
        '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"newDenorm","type":"uint256"}],"name":"LOG_DENORM_UPDATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"desiredDenorm","type":"uint256"}],"name":"LOG_DESIRED_DENORM_SET","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"LOG_EXIT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"exitFeeRecipient","type":"address"}],"name":"LOG_EXIT_FEE_RECIPIENT_UPDATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountIn","type":"uint256"}],"name":"LOG_JOIN","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxPoolTokens","type":"uint256"}],"name":"LOG_MAX_TOKENS_UPDATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"minimumBalance","type":"uint256"}],"name":"LOG_MINIMUM_BALANCE_UPDATED","type":"event"},{"anonymous":false,"inputs":[],"name":"LOG_PUBLIC_SWAP_ENABLED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"LOG_SWAP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"desiredDenorm","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minimumBalance","type":"uint256"}],"name":"LOG_TOKEN_ADDED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"LOG_TOKEN_READY","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"}],"name":"LOG_TOKEN_REMOVED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"VERSION_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whom","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"increaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"uniswapV2oracle","type":"address"},{"internalType":"address","name":"uniswapV2router","type":"address"},{"internalType":"address","name":"exitFeeRecipient","type":"address"},{"internalType":"address","name":"exitFeeRecipientAdditional","type":"address"}],"name":"configure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"balances","type":"uint256[]"},{"internalType":"uint96[]","name":"denorms","type":"uint96[]"},{"internalType":"address","name":"tokenProvider","type":"address"},{"internalType":"address","name":"unbindHandler","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxPoolTokens","type":"uint256"}],"name":"setMaxPoolTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"exitFeeRecipient","type":"address"},{"internalType":"bool","name":"additional","type":"bool"}],"name":"setExitFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegateCompLikeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint96[]","name":"desiredDenorms","type":"uint96[]"}],"name":"reweighTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint96[]","name":"desiredDenorms","type":"uint96[]"},{"internalType":"uint256[]","name":"minimumBalances","type":"uint256[]"}],"name":"reindexTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minimumBalance","type":"uint256"}],"name":"setMinimumBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256[]","name":"maxAmountsIn","type":"uint256[]"}],"name":"joinPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"uint256","name":"minPoolAmountOut","type":"uint256"}],"name":"joinswapExternAmountIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"}],"name":"joinswapPoolAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"}],"name":"exitPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"exitswapPoolAmountIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPoolAmountIn","type":"uint256"}],"name":"exitswapExternAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"gulp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"flashBorrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"name":"swapExactAmountIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"name":"swapExactAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isPublicSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getSwapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getExitFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getController","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getMaxPoolTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"t","type":"address"}],"name":"isBound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getNumTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentDesiredTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getDenormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenRecord","outputs":[{"components":[{"internalType":"bool","name":"bound","type":"bool"},{"internalType":"bool","name":"ready","type":"bool"},{"internalType":"uint40","name":"lastDenormUpdate","type":"uint40"},{"internalType":"uint96","name":"denorm","type":"uint96"},{"internalType":"uint96","name":"desiredDenorm","type":"uint96"},{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"uint256","name":"balance","type":"uint256"}],"internalType":"struct IIndexPool.Record","name":"record","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"extrapolatePoolValueFromToken","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotalDenormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getMinimumBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getUsedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"}],"name":"getSpotPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]'
      );
    },
    426: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"uniswapFactory","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"canUpdatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"canUpdatePrices","outputs":[{"internalType":"bool[]","name":"canUpdateArr","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthForTokens","outputs":[{"internalType":"uint144[]","name":"averageValuesInWETH","type":"uint144[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthForTokens","outputs":[{"internalType":"uint144","name":"","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthPrice","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112","name":"priceAverage","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthPrices","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112[]","name":"averagePrices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokenPrice","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112","name":"priceAverage","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokenPrices","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112[]","name":"averagePrices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"wethAmounts","type":"uint256[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokensForEth","outputs":[{"internalType":"uint144[]","name":"averageValuesInWETH","type":"uint144[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"wethAmount","type":"uint256"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokensForEth","outputs":[{"internalType":"uint144","name":"","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeTwoWayAveragePrice","outputs":[{"components":[{"internalType":"uint224","name":"priceAverage","type":"uint224"},{"internalType":"uint224","name":"ethPriceAverage","type":"uint224"}],"internalType":"struct PriceLibrary.TwoWayAveragePrice","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeTwoWayAveragePrices","outputs":[{"components":[{"internalType":"uint224","name":"priceAverage","type":"uint224"},{"internalType":"uint224","name":"ethPriceAverage","type":"uint224"}],"internalType":"struct PriceLibrary.TwoWayAveragePrice[]","name":"prices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"priceKey","type":"uint256"}],"name":"getPriceObservationInWindow","outputs":[{"components":[{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint224","name":"priceCumulativeLast","type":"uint224"},{"internalType":"uint224","name":"ethPriceCumulativeLast","type":"uint224"}],"internalType":"struct PriceLibrary.PriceObservation","name":"observation","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"timeFrom","type":"uint256"},{"internalType":"uint256","name":"timeTo","type":"uint256"}],"name":"getPriceObservationsInRange","outputs":[{"components":[{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint224","name":"priceCumulativeLast","type":"uint224"},{"internalType":"uint224","name":"ethPriceCumulativeLast","type":"uint224"}],"internalType":"struct PriceLibrary.PriceObservation[]","name":"prices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"priceKey","type":"uint256"}],"name":"hasPriceObservationInWindow","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"updatePrices","outputs":[{"internalType":"bool[]","name":"pricesUpdated","type":"bool[]"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    427: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IUniswapV2Router02","name":"uniswapRouter","type":"address"},{"internalType":"contract IIndexedUniswapV2Oracle","name":"oracle_","type":"address"},{"internalType":"address","name":"controller_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountReceived","type":"uint256"}],"name":"NewTokensToSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"premium","type":"uint8"}],"name":"PremiumPercentSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenSold","type":"address"},{"indexed":true,"internalType":"address","name":"tokenBought","type":"address"},{"indexed":false,"internalType":"uint256","name":"soldAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"boughtAmount","type":"uint256"}],"name":"SwappedTokens","type":"event"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"calcInGivenOut","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"calcOutGivenIn","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"executeSwapExactTokensForTokens","outputs":[{"internalType":"uint256","name":"premiumPaidToCaller","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"executeSwapTokensForExactTokens","outputs":[{"internalType":"uint256","name":"premiumPaidToCaller","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPremiumPercent","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"handleUnbindToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"uint8","name":"premiumPercent","type":"uint8"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IIndexedUniswapV2Oracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"premiumPercent","type":"uint8"}],"name":"setPremiumPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    428: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"factory_","type":"address"},{"internalType":"address","name":"weth_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"VERSION_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"name":"getMaxAmountForJoin","outputs":[{"internalType":"uint256","name":"amountInMax","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"name":"swapETHForAllTokensAndMintExact","outputs":[{"internalType":"uint256","name":"amountInTotal","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"name":"swapTokensForAllTokensAndMintExact","outputs":[{"internalType":"uint256","name":"amountInTotal","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    429: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"factory_","type":"address"},{"internalType":"address","name":"weth_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"VERSION_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"ethAmountOut","type":"uint256"}],"name":"burnAndSwapForExactETH","outputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"burnAndSwapForExactTokens","outputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnExactAndSwapForETH","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnExactAndSwapForTokens","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnForAllTokensAndSwapForETH","outputs":[{"internalType":"uint256","name":"amountOutTotal","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnForAllTokensAndSwapForTokens","outputs":[{"internalType":"uint256","name":"amountOutTotal","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    430: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_PAIR_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    431: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    432: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    433: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract BSWToken","name":"_BSW","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_refAddr","type":"address"},{"internalType":"address","name":"_safuaddr","type":"address"},{"internalType":"uint256","name":"_BSWPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_stakingPercent","type":"uint256"},{"internalType":"uint256","name":"_devPercent","type":"uint256"},{"internalType":"uint256","name":"_refPercent","type":"uint256"},{"internalType":"uint256","name":"_safuPercent","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BSW","outputs":[{"internalType":"contract BSWToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BSWPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositedBsw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlockDevWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingBSW","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"percentDec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accBSWPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"safuPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"safuaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refaddr","type":"address"}],"name":"setRefAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_safuaddr","type":"address"}],"name":"setSafuAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"updateBswPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawDevAndRefFee","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    434: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IMdx","name":"_mdx","type":"address"},{"internalType":"uint256","name":"_mdxPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LpOfPid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bad","type":"address"}],"name":"addBadAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addLP","type":"address"}],"name":"addMultLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bad","type":"address"}],"name":"delBadAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getBadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlackListLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lastRewardBlock","type":"uint256"}],"name":"getMdxBlockReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getMultLPAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMultLPLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halvingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBadAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"}],"name":"isMultLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mdx","outputs":[{"internalType":"contract IMdx","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mdxPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multLpChef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multLpToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pending","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"phase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolCorrespond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accMdxPerShare","type":"uint256"},{"internalType":"uint256","name":"accMultLpPerShare","type":"uint256"},{"internalType":"uint256","name":"totalAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multLpToken","type":"address"},{"internalType":"address","name":"_multLpChef","type":"address"}],"name":"replaceMultLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setHalvingPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPerBlock","type":"uint256"}],"name":"setMdxPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_multLpToken","type":"address"},{"internalType":"address","name":"_multLpChef","type":"address"}],"name":"setMultLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_sid","type":"uint256"}],"name":"setPoolCorr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"multLpRewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    435: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"StopReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    436: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_multisig","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyRewardWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"name":"StopReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyRewardWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"multisig","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reservedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    437: function (e, t, n) {
      e.exports = n.p + "static/media/cake.d8678b64.png";
    },
    438: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdQSURBVHgBxVprbBRVFD53Zrvb7rZ0W+QpMSClAW14FKhRRMAgbYUYkURAIRCjAeRHrY8gAWzLwwhiKD9QiD+sAZFfQlCoWxBRkChY24IQLRUaEiAttN0+9tHuzFzPvctud7szszuzoF8CMzv3nnvPPffc87olcB/gPmafRkX6tADCJCrABKB0GKEwkhJiBQoKIXCXUriJzysy0F8sQBsGFfrOQZIgYBKeH+z5AYksxQFepQAjwDBIE85+WlT6KjOK+i6DCRhmvqsmbYZChY34WgT3DydBouud872/GyFKmPmO6tTRQITdhJAX4AEB1apKkeWKrGJ/c0L9E+nUWeNYhjpbia+D4cHDTUS6IXOu99N4HYV4HTpd9nJkfD/8N4wzOKlM9nSesJfF66greZT4F8j4Svi/QOhe5zzvGq1mTcm7a9I/S4ZxYnFC2mOV+MwE06BkNROgVrMq86gqZWirV4NJMIbtU74G66jXwZ5/OKkFMAF2utLLVecZ+AEZf5MC2QMmQazDwDG9GkRHbvib5D4PvvoloPS1gllYCCxPn+c5EDVX5A9mDoko1qFXdIIJBCV+CCxZM2Pa5O6L4LlQDFTqBJNoo4o8LdKMRqmNIIplphlnEp96RJVxBjFjItgnHwLBOhRMYjDzM1Fzhl7cp+xTIUAMebjwIMg4Y8zinB63r+JphJ7f5pjeAaqQOVnFPafZe7/kA+QjMAGmKo4piTHOJ8SzwBZq9hALgrIu/M7+a3el5+FjLhgEM4f2/CMgZqozLnepb6Qle6ZpK4TGpMjtQi2Be8wLRCkBg+ASn35cU+K913ZAz6+z8bldtd3iLOBWycwZoJQsZc+g2lCYDQYQljgeQjX0Nu8Cf9Nm/u5v2gL+q+Wq/Rh9mgkVEgi8wp/ek2lPIjs5hojtY0FMH6fa1ttUAf7GTdHfru+Evhv7VPtbMvNR7aaCEbD8gSVAgl8mk8Eg5K5a8F1ahaNIUd+5xK99rErj++udmB2gUjd4aheC1HYKjIJnbiKQGYl0JoIt6nfgzjGceFF4AWoSH0jDdqD3+q57s0u4oFKQ2n/UpdECSznF95dbN0CcNC7kgAR7TtRkiu86UF8zKN6/wf/Ph1E0liHPQ3qBCz1rA/ZrDn/n9Iofd2k3SK3fRtHYxrwHtrHrQb57AqjsAV0Q6CWdLkcL6pDmkecuHw9nyKr4m8rRguzUHdcydAHY8z5H2gwuYW/DMgi0fqdLk5q7BWyjS/l7go6sWUDtfwh0GOcuP8IcpuaU479NmiNasmeBY9KBIOPBQSANF5Iy/GVNGjZeiHGGBB3ZSIES7Zg+NXezqgOyPbpOPYYRrGCfWMUZjgRbSNr4Hdgeq89sHDZezHd0ZKm5FaADq4D1lT6tVn/jByB3nIn5zhyQpPIdY17wXV7LrUgUmOpceg3be2NI2DhqjkzuvIDz62aCCkqe3tJqZTrnqcM43NvYz3iEA1JD4M5x8P35RtgKsYUwndczhwMdGWPcW784ns7fFdcvtzJv9bBmF5SW1HKEO5PAzSqcaGtUs5hZANbhC3HC8/0keOBk9wVIGVKI5vBtCLQcjqKxjSvnYYHS019rkt3nQEgZzFXLW7cIp42TuFBoJB3V9ioikBUQB8z+0gHbbh2xGA/jPq7jzH77r26KS8PMYeq4Mr4znj9eitkRNRo1KBQOCpih10MCGDigOKgAUidUhg+nbUwpHrx3dWmYOeSMcy4t4Mj/BlLQrOrRaAHN5BmByOQsGIQl+1lIf6Km3xyGmMtBMzr+E1Ua2+iSKHPIwczo43tREMZiGwZBohcFVh8kQG8bIWSxjdxVp9pme2RVzA5wieduU+2v+G+gQWgCY6BNgxb4znEbr1By0BAps0K1L/KkWg2RjmygA4qE2aQcU8Gf2JPnsMHMxHj+GkxIqjXjeqn9DHc2agiZw7hWRQUiDeSxsnh/Au5yVIOJsnUohxU1qgZqYIyznTOZhJ90FnqeYy/h0EBRhG1gAmqOTA8JOiCd+ciW0HuY+ezi7rOEkqNgAnwBqLtqoUQkklEVBgxlqrLm9/wc+h0VlClUKkHL0wYmoPS28B2Q0LOqQUb9Z6pilnE8nW6FylGRWhTzrJSGlqcUTILtgK9hCZdwJFi44L20IplSHygy3TjwxiQmHM4q8uynlG4Gk2A74K3v3wEmcZZYmJY48FpNRXaxN6b4q3m50OFyVGFj3JhHC8wKsXyAhdXJSBxH2ucs7FEtt+vejLALhmTq9MkC09Mvswo9K7Xade+knPN61qA3001nHhQIqooe48E+CaC92r5WEMlWs+VvQyCsDg+l7OzF75og+D0siOVEMH8O4jJD6VGFKiX39R42Eh2u9GfQF7Coy3BVWQffo3puD9XdE4Xpvz3odlnzJEh5Cxcyy2itMzgxvY0m8CsI0EPOBd5aMAHTzEeizZXxFAF5Eisd4u3dBLyGH4W+4iG8j8fqBO3D8sotPC+teAivKKA0sATI6N8ZqOFfy1wsFWVzn98AAAAASUVORK5CYII=";
    },
    439: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABa9JREFUeNrUWl1oHFUUPhuEFpV0FZEWm7KVhKYh0K19qJBUE7TFSMENWtGKSSNI+pI2fUjARBGpTaF5sGtfWgpuU7GKrew+FCOt0q02YB5qVghtpMGGpqWliG7XHyoI8Xyzd5bJ7L0zd2Yn2ewHl5n94c797vk/d0IUMObm5sJ8ifKIiGFHmkc2FAplgnxuKKDFx/jyEo8WLH5sPEO53J80eWV63v+qqx+mxoY6alxfSyv4npHicRFXJjZTFiK8eOz2+zxivODwF1+N0tj4RNHiVahZvZKaNm+kF7c1U9vWLSapOBNKLwoRoTof8diFxR+KJ2j25p2SJArpvPZyG3V37QBBEPnAK6GQRxK9kAITCAdBQAaQ6dvbBXIn+OM+JpQNjIiQQoIXHuvpP0hjP07QQgISOjL8DlQOdtOu4xhCGiTggRKj53+I9vQdpHu5v2ixAOl8+F4PbruYzAnfRASJC1AlkCgHmp7eSCNHD0BKjmRCLl5pggkYHqmcaGyopdSpjx3JVDnYRBKSKDcJAC49tnMPbhO8thZtIlabWCoAGbGepNhoZ9VClGaDTm565lWpYS975DFazkOGe79OLTgheDOOOcgE2pVEBNPrHd2DYZaIdKKHVq2hDXv2S3+7fvYzuj12TmtB/RwrEC+KNoM3r3X7W8oYBdd8+fsvcYVbTqlUq5fzJCUJ4O/bN2j2u5T0t7Xb3zCI6hivjAQw7BJoQfTd/UdIZBfFNiKksbenb8h1IbPfJimnUKPaHW/TA8sfdFaPQwPS77GBxxKnXZ8PB8RkI7zmXTKJ9PJEYd20Y+rTOP13/x+p6kVYMk4qBYnIdtqLc0GKhI2XEen8/Mw32hOBxC9MRobHNzXTow1PeVKpzt2DnrIGSIX/HxVBO08EHyAqJ9tQeSmVcUPFltm8m0qloE5+8jcR4zqtEomhlvADeCo4ADtgJ/VvFiRvpOkylUJ8EMbrGaPnLxlrtxJ59utzl3z7did7qXm+vbB79qLLsIv+Id/PFVKE0YdNIi2TV6/5nvDfP36j6dPH5ZXgczFa8WS9cd+xe2CeHcDV6laUSjLjRoYfrUJyiMlLLZJ+v/IT3b0sl+o6VjGoGp5hqpGuq3VPXQwBtEAikcmr0xQEZhzsBcZvqhgIBJXH5YSEq4LMg2AnUDGZvcAdr2raZtxDKkEVaDfymrQhUCKFFIYjvyqFCRqztwwi4cCJ5APiFvlDFTlaEAicCNytLHFEbmZKCuVrYM97YiUu2UCJwM3C3cps59qZ44XGHGrwfkWq4hVrVhtEfgaRGbQwSwU80zpLJLcCDgCxJl8YDRg1RZ8iefSK6nzrlarQc8XENXlmvqFK3xFbEGPMzLdpc7Tw28mjQ2YPuITGRB0uaVO10o3r63xPBrcqy3bhwRBbTJWyZ774DqVrSe2i/MZkTCIX0Uz2Axi2yq1aYwqiukgn5gENbDTi/Pa8QAJtVZNICp1xP3ZhRmydrBjVpywQ+rWXtq3G5qcL7he9VRbzjGjvayOiqNFzijoFUhnOV3ZFDQXUKl7tBaUBY8QeR0Zef+UFD0Gv2RgyVzulqBwLRZRExSAR0efVJsHEM2aD20rkMEskq+O9UPlFNOxChc7uAamKYXFil7XaSYx4UWQX5xBx+Hk31Iu03A6ok+lqHUtkh0YDpOJmLyALU7D2ge2R/TC7s6yTrah6V07Joqr1I+sRuNkLvhcquK+klqlZ7dlxnyO3Gb21UxpxOKoqmGTP12qZWsgkebdiHd2DtJQAlWIiMIG19iM5FRF0HXHAs2Q68rCbC2c/wW2r7KBUmv0Ktu28A1ldL7LQJHDQQ/kjuLR0zU4TVNLRm2M9IoJNK0slc/LYgZIzVa9ADpY6FXcl4SoRm81U9vG0jVBlvzAgkU5lv8JhIxShSn6pRkHKz2tOWVFLlPc1JxfVW/QXz/4XYAAAvv45nB4i1QAAAABJRU5ErkJggg==";
    },
    440: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABrpJREFUeNrMWmtoHFUUvhsLvvIYRaShTUkk0jRG2LQ/WkzbJGgLkYIbpEUrtkmhjX/SBCSBtJYgWoPND930VxHcqtgUW9kVSlKSSra2EfujdsXQVAxNaJSICm4eioIQz3f3zrq5c2fmTnbyOHDZ3dnX+e455zuPOwHms8zPzxfTA1aQlqH4SILWRCAQSPj5v2t8UBzKhmhV43F6Zs4YGR1jkz9N0frF8vlntlWyDevW4nt4Gaf1Ba0YAZvIRo9AljvfCeVHbo8Z5z/vZ8M3bjF6rvX9gvxcVrdrB6vaFuSP9BqgPiJAZ5cFiAmAdr6hf/AaOxWOKHfei5ig2lsaWdH6tbBMIwGKLxkQAtEKELT7hh8AVPLSi3Xs7RPNABcTgJK+ARFxECXFa5rbu9jwN7fYUgosdLq7A1YCiHod6wQ0QIB9omSF4jfeOs3IpdhySYZ1Gt1iJ6ABYuhM5IIBECshFeWlLHauxxVMwA1Ec1sXZ6SVFB0wOQ4xEYElVhoEBJQe2n8Ubh0h3Wq0gQAEUWtwpdzJDozQJypSgLNr0YdCxE7R2j2HljSwwUwV5U/y59Mzs9qJFMHf1Lg3Ti5WawtEuNR4aH+LsdQUW0WlSuxcmD8fvpFgoZePam/A0KUPkThByzE712qlH1WCuP+Rx1jBE2WW5VVIAewoa6Msng7mTaU8qwOcm8BLkIxJ3lNaxLTG5p37DFXGfrhwA3vqSAdb88BDC65Pfhljk1eiWjsJ5QHCLRaa299xdbVYbw+r2hpMs1imRVopwA27suPPqXts4tKn1h1+NuRqGYAAfbqBMKkWroPay0nOX+Rs2qlyrYO9Fy87fvnXm9f5kmXjqy0WSy3YPQIBBb0IShS4oS0QSgu06cUi36WA4AUuopp1E1jlnz9+X9jUEIgyAmNXZqhAQJFu8nUs1f/Ciu0ZcaSSvtT3DmZaJIReQkf+/fsvdueTsOV6PrlX0XP1luvP795uuQZqp4qBBy3WgabjlPBalJsAQHbSP8i9I5QJpLpv4Lq22REv45rxIvs6VQvKQAZTdqfYSE6AtiLYFe5VbLa6NSOjP3ry4anhAVJ6E3u0fLMlXr5993VuOZXMOCTZXnK3e0Q2cDXdZIwcROwVzBG0u6gmaezCBxaF5XiRFXJyF+iA2PFSUYzc5gYIwrWCQLUYAYgfXOJFDmQwEegVpYYdEXgR08JZT1Gm797hSRHxIcfLzN1R2uHLXGFVdpddpH/gmmeLfJ+Kt+ocP+omZPYZAqTKL3IQ29ZeW4PcSje/+kwrcaYtMjvnWMZ7G45RXNz3oDUh/iaSJygWdKuz04gfAEJC9CK+AEE8oBaTKdqswUDBcJktO/dxQCIru/brbmUKj8e8XH+AgH4Lq3bbMhrc5OMzJ7lisAhAAAwVpzwxIlfYFYhumR3ydIosrgJIAv65GEFpX7r3sOU6kiUsgqA2y3W4i8xQAIAEaQJSFZBOmZ1bRLyfIwZgSacCzU7KFMUigh7JEnIyNcr5f1Z16pitYnYZ3+wi7atl/n7cdC2ySmXWcSHXYUXrCi073ObgLpM/T3nvNFPelDCBXMUwWbvfRsKT8gYEyTEz06NBkgUxowpigFRdd2q5RUeJI4qkmRBj9CPUpHRpUe1GRckOd5qWcglcBTlEtgKotX9wOymZEAoFLUlTVRXIUreLV9YxudUdp3LatSepONzBSxCZar/rOWH7HZQkiylFQAJOLe9Yog8xV4lDo0z6DTcdcs6ooFkZBFwJVOskB1475nm0BIp2AiGKz4R58pUJ5CwFTtJukoHALtnzirI8gUUcSxhKfjplivlZNFluE06RY9LMki4aETDkXmHy505VgD2+ZYelngIAk2rdBPQK9ypan2KygrzctLuZiRIxo9Nuwxo4EMqcAysHdBQrhs4PrtSADoUlPS4Y0ClHprRDUdRFq3FkinKHGBaHp/WOs18BJkK71KC7S8slcCmiblQiJfKRnB0QuNgQ+W0Q7LEaxBzckVSqzuiV1a9AW0s7kPTaFywVCAz5WOpwNOGpH1ktYFKk4H705tiPCPQlBCaBobFbSe23oC4jZktmfRgqxUyEklVoOY6n0VKgBSB2mmCp42nXMY/XGwZQ8uJYzjhOjZDfNwzA4rDCEVr0/H269KavNwworINxfiuysV1DlAWAuAAQ9/Ib2d5Ug3q+gSxjYDKOobKu28F90MxhyC36EGTpsFcAWQNRuNwLtGpoFcNC07Nz7GsJFGg0Pz+PH7XRzsNloLR5m1MyGx0CfgeqcD3zpjO57YSy5o1nE37+738CDAC12nj2aLH+mQAAAABJRU5ErkJggg==";
    },
    441: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABs5JREFUeNrMWm9MVWUYfy+1MlK8ujJJIWhsMGd1qQ8wqXlZZbO5eVm59WcK1Bh+wZsfZANq4CzdcIuQL5JbgK201HHdnGxSwwI2/YDcD6Y0mN6gsrkyQHO1udHze+976L2X9z3nPfdCl2c7niv33HPe3/P39zzv8bAFkJmZGb/46I/7KkzHJM4ej2dyPp/pmaeFB+i0USzcd/nKGJu6fYddvjLKpqfvzF63obiQn0uKfDhF6DhPx3d0hJIF5kli8Tl0CtJRQQv39vT2s8GLYTZ4Ydjo9+vX5RGgQvbGa5v5Z5JOOloJUPh/AUIAvHRqAYDjp3pYe8cJBgskI1lrV7Pqym0c1PKMpbBSJQGKLBgQAvEenRoJgLe5tYNN/PzbvMYWgeCA9gQr8d+9BKZpXoEIK3TQwgM1tQeM3ScZCx09vB8uBzcrM7FOmgEIRGYfxUCgdMs7Cw4CAkvjWeS2ePawWEPiFrFA0A297+9rY6kQxE3bwTom4qbTNRALRM2eA14EdSpFAlNKYM4bu5YVE7BEqkFAsAZSKD5269xMFyMdFBO+VLmTDszB1g6uYKFoe9dCiqVga0GwTUlVebFI6NghMINPyMV2a4EIpNcDbwW9dtlp88svsKPtHym/o9+6ymwF24Ps/iXpc/4+dX2ETXzTrUzNfWc+Q82JiZd412ohl/I6LQR0RBc7bc11vLCZSO6Wt9nKdc+yjCcLYo70x7PZzaF+bWr+lNgECrMyRgR3qmgwjAvEj6qyQ2OiMtsKAGSWbFJ+N3biCPvnz9+1vwUtomf7JZYdYxHOnUxpB+Jnx8565XegGXA/nTy44hGWt61K+d2NwXPs1pVLjs8WHhFUAQm2R01mLCCLusyGvK9zMV1c/HVjnF0/84XRs8VaA8KTokDQT5AlvImwWNwQ9F1FAEURi3W9l8rYw5nZc/5+7++73KVMRbJKQLbIxrO9/QmnxPLqemWqhnuhKs+Co0DOejGgvEeELAGLuJHBC1yBW2Ug/p7egYSBAET5zgbldx9+UMMTAFwpf3tQec3NoQF+uJWeqPL9MhCfW1ab93oVW19Vx10lqp1hVF799RTcuriIiLhAJsM9caiuVSkQyQnZKw3/uG2QsPhVzz3P8/2tH4Zm/45mKz7OYKl7TzzNF6mLC5whyFb3PZTOa0mBxnpzEs7VUZxyuEXGfzEHIvu5yq+Rkq14gYXCP/3BC5+yuFHljv/9yOetHBjAWNZ2ypwWEN/09G0jELKf6/wa1gVThf9+3P6VVrPQPmpGvKAQWq4GhUFxJgIgxmnX8nP5Ybog3FHdwHLIEih+qsXapVpZSfmamuO61Y0JrmtX+Rl+vPKxVbbXIoZwqMRyHztZIhRw99dxx2stIJNIjyYCV5i+NsI1lLn1Xe11KHg5mrhA5c5d8QBPy3bJBDECAKMnjxi7VjhrbaaxVSxtYrGqYARIXaq14qKtuV7Lx/h9RTJxIo9zXGv5sqXGQGQqoQpGJwoCS4jJIqcwsjcAfIGUTJzIozWxRAJNQ3Ni3dhU8ICJb0PczTJLXjGi5j+SJYt8+dwSsXzsPwb9KMUULID7RwzJY9Ya7k0RjyCNw9TZ+ZKZWSE7PbNrn9KlABo149L3XzNVPKLeNNuwArvJ5Fj4LCNjeKysFRYT8oRFR81hNatl1TVtaMTcegVkQxGf7ofl9HvarhEyoSy6uEBykOtLj4ZlIwGYtsiWvLqJp/euWSBkmRBpZDIRrdhRc5lHWYKqr+J2eLZJiyy7lVB+KL4ghuRAdEtZTFtW8DAMwhNpkeN7HWxBWANuGcheNEGmxTGZlhVJRddW27XIstRGrdc1h6IIZJ21hua1qq9TXNhNYVQcDyC62vc7zoJJ4RF5qB3PtWAVx1iRq6+qZTWtxjW1+5UtMjKoTqEAKuhNpdPItIk01YiRqd1gTZWl3ExBZF9/Kk5xUGRGxjIWeHPXnOsx4aTfYPO0zBaIANN3/FSPX0zAF42I7QXs/ubG7wLraHwZXEyegKRaSooL5T2SSaN+RFxYCvSLAQxcreswH5pX6ravtY2V+EHKwcASoS8PIcgT23qT4iVl+4gokFaGsgNhBESAwXy1m7KZDykz2RcETOgH4oGyE2pbmcnbEG5fGGiiUyNoNyrzQuxoWS8MEJiQsITROyqJvMIB63QQCD82XI652IpwIoAoglSxof3dut3beQMiAcLMtZyOClDzs+cG2ODFYWNQ1uJLin2zBJBFX6oJJbKepF9zEvuO4CuYimP86sXkMv4Vp9lmiLJQ9prVFjnF4k+z6GtOkWTW4ZlvHxdZDu6nazn5y2duXcdJ/hVgAHA+bx10HFumAAAAAElFTkSuQmCC";
    },
    442: function (e, t, n) {
      e.exports = n.p + "static/media/ethereum.6594b16f.png";
    },
    443: function (e, t) {
      e.exports =
        "data:image/png;base64,UklGRlIEAABXRUJQVlA4TEYEAAAvH8AHECK5sW0re6P+U/36mPn70czMzMzMzAy/3/d+lfB6MDPbBXDsUQPmHlCQugRx6NwRc27Pl5sa0JwZF+CQPRADuI3bdP9p/xIHUKAcAQAMSZpvqDG2bbWqe21vZtu2bYY2z6lt26F9sEMBIKB0v9kNYLsWcW3k+j3fPlkjnG2Ep8ht28a8pXu8gkVtPVageUNncgsusqHD6YCnjJlcCPhNQv+kTWfT0I+Z0KHs0ueZ4tNFxwqwgspygPVsmHgK0AgFhAARIeA/ZVDLBkRallkrK5DceUdToR5CqHYAqYAkVDsdcN+m1DA1WWHL6VBfPgQfXEHP0iHeW5aZpyRb4iAEy/pgSiVpPJkzsRtJtthyQDDrEUTxLEWoQxShscwVckRg/7eLH03HFFh/nw3ZSR6Y9smRhPGEFCbwljzvIGOsLIz3wcHHwYtU9+TyreE7b+v91zONWjjF5vtt+jvnMsnFKxnfNWMsU++ah6ftyCNixC5afR9Nfaf0S4/FfWDT/ZQmXJ90wKCMie7ElbvuyjPPvvn2JGy5RdhymbT7NtxXALbcX/PeFUv6yNb7py0ZWHQvftzRog9Wn1frjIuzYcmBIkmIlX0DiAE87pderrzqSC7OovllnvDXdmHJjqZuWZ8D3vdNtznvonJgpyufCoIlx38Y+5Fje9iUDc3tzfcHypsR79Chzi6x+X5BPCADDpEcW8OWrU+GLGi6pkqM1f3AlNWTJ4bMfgIT3x5DVk8Ili3PFuacLjOKmjG7DJj3rgoB/j9pTpKN9x0wOONqbhGOaDL86jKi0GVwB0D1yr61vC9UA6v7UQBhP6leR/+jyYDCB/MPB8fuinm9Jl/Fot5TFd1Lo2F9VpUOxYkYK/qaLiNVWh5BZ5uw5f4ZsUs06d0g6eizOtpHVRoRF/aO3VXApD2gSGPv3gvDdlZ+mhDKXtJ3I5qQIjWSKZsFvWXi27X+PgN6pF6c1z21gNrmThSTrGhCxqrPZSmRXgEAJr4dnVzktodfK6db1meADfeNjctVgizlvxXNofWjmVaQ12UpEBw8uqbS+N3yAcDW+6e2vBbA5HdIksI5goKiIH8qxpliWUSSTFQLJ4vnviumvJPKEQPl83uDhd1Hkmp5iDG1ihVJ0rYoqYiBGYJXPrjN99vsd15bZ+iZJr3SrKVTXb1PkiSpGxXN5v+lgvROGAmSMGLT3zkb7ztbTl1cDo8qaa6rEV2xPKXSIdnCV2FESNLI3RZGqF+6reknGaJcoJEtehKP3c920CSYFxEk+RGguHQhppAQJLUK5hlJq3BHBM1wgyoVEX5SLbrJomQhy6KQN24QhZUMQjTy9IPRJE4xKAa+5QaqlwykgANSkMuHjK7oWIEmKXCUAyomBvpPDCTiEyeoIAYKysOb+8YK+lZczoS48LFgKMyZ98TByxUP9zchzg9vXpaD9ygYCimFD+VP3jiLYg==";
    },
    444: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAPoA+gMBIgACEQEDEQH/xAA1AAEAAgIDAQAAAAAAAAAAAAAABwgBBgIEBQMBAQADAQEBAQAAAAAAAAAAAAADBAUGAgEH/9oADAMBAAIQAxAAAAC5YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMYzXe3WsPyjeRYZOYil+cEzpVbay7K+xq+0ZN/kI5eOfMqjoUbhOPLPvAAAAAAAAOh3zz1/trsQ3q1gc9bs0bQPoDGYUsQTV0dDkrz9yIZgAAAAABxGdF3b3H9R4kiqsd7+vu4/le9jOHratVO0tRew5yxsuwtNPPbGKcXH+Xr5XKynz5w+8inb4tG2qWL0RFKAAAA8/0D5Q64+w9nZzTjCmfcm1D8vfHwjyJYs6bDupsVErjZ1z1tBgPVNehd72aQXTwtTu50OKoZLIvP8AQz7lKbEyP9NfN5DH1AAAAAAPnRq8+qbGZVa6WubJ8+0q16z1fO05vxLORXaTF0KK8Z/hjoMrxrowtYzl9yusLXp1X78bzx5czuZEcgAAABiMZoZNzAk+e/PS6Vfo+3Mu7g5rcimtey6X+k8VtlsaRWNzbk1cjiOpfL66968QBFfxfqvBzFZWhF5OP6H1ej3q2YunOewUbvHagy0KKIZLKjOvAAOr2j55Xq4yab4MnZtV8nCrYr9BV89N6nBqNb7x4rmhs8g6b+Z3eXX0GIblbVdVsptXSYtcrhfD6czt9nVtoZ1yNJMxn38+XV7+IveQ9AAAAAcKcXHqt0WL5tu6xWd8eqd6bvGj9xzC1dVLZ42jVnpep5fQZPK69K7s8ruxJAll4Qnis3tng+9xPTchFMAAAAA63Z+TzVSx0RTTvZXrDB1xg1yGLErtOIpe16uNytPcTybvsckeSNhn3MsZilAq3MesyFv4+yjA2AAAAAAANLr5Ptc+r561/reL7XLbsdVMvv4O7lRVOnz+mTo4rdZGtWjT2OcoJnaKTkMrQAAAAAAAAxjMEWa87Izk2P3kRS4cIPsV5zz5XqV58h94Z6dT9Clb5jOfdAAAAAAAAeT6p86ncxkB961T7c8NClrWz5xRtZHn3jxvZz98h89AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAMxAAAQQBAwIDCAAFBQAAAAAABAECAwUGAAcREDESEyEUFRYgMDJAQTNRcHGBFyIjJGH/2gAIAQEAAQwA/oRz6dEXSdXORqKqqiJY70NhsJIwqhJxKO4EvqsOyEVfK6/2/Edrdu8vQ7gQKAucYPbGztLXGI5rGR8r+ssbZYpI3drHavKhrGSAQRpI+I0K45QA1r5Ukk620hUFbYShx+MnGMhyZ+T1ro7Eqchv7/DOrK+yjbGYFCQyKKKBjI4o2sZpOvCfy+TnXCLqOuAgnkJjBgZP+Jk2RhYxVy2BaKrQ96pVMRDaRjBBCYS4ISIHo+Lp49I7noqprLd1/c1lPXVgUZEmD7gQZYswswyDm/gc65+TdejOt6GCQOJ8rxRCjSIxhR5Jp8arZaihqQJnI6VdZde/DVEbZIxHyF5dkxpSlS3hiSbYZibkI5YNi/zS007Wb0B9Jf2SkQv8jaKgPdbvuZIHxiInXnXb6irwnOp9wsRFOcDJcMSRj0e1HtVFb1aMOyR0jIWNf0zahlyTHja+FzUnKq7IIlwpAE8U+1GKH08JtofA6GVNenGpIo5G8PY16NajURGoiJ0d21cbhYxRmqCWc504B4doJAYHOyYf6S6tYpyK4+EZ/gnlDKGJcHONI0jCwza/GKUU7n2np6dCSYBYZJ55mRRF7r4cLKsbS559UmWUOQo73aeyV/hRV7asrSvqBnlHlxjwu3cxBk/g80p7ai+qL6BZq0+Mhnpwuk0vR3bWU1NlWXtlEZDJ49rKuxrMZRpzHxu+mqJpRh3SpKsDFkRunfausq3ZSpPnAqQ4yX4bujFfnR11iGwYnleNbpZSRa3M9TDKrQtBmFV5UBYk7oZ8VyBmQ48FZu4Y/MsnLye5IIfIvsuqG8Ox6zHsA3qj68uGxBFMhXmPNM1FxASJXRLOWBvTcMK/71aO8ausBrUIYwaTxwaWNjvvaiqiIn13/aurYQkCzsBSmq2bEQyjsmo4Rmu8f61lo8ouTX8UqKj+m2VeR8BzsX/ar43wudE9qo/XPGsOFlDxehgmRUfvQCU20qj/AAuUbW3YJNfiFTASitk+vz0XV7huP5E9slgAjpqPFKLHGye7QWxPVzUT1VE1uFt+7JFbY1qtbYE43kAcqxT0hrX4xtpe3REbzhpAQQw4ARRxR40jhz/bQkwye3o2o978cv2S+U6jO8eE7XnkFwWF7AsAyPYi+DxJyeAFZiyiGDMngB28xAAphUFQxZUTjpz9Jdc8c651xow0QCF05ZMcEVZe1Fyj1rrIclOm4mdvxiOIEDwrYGWtnYyumMsCJ5Mfza/x2eN8Bskw9Hbh39UHYiO/40To7S8InOs53HsLMycCoJcOAk86Seak8iPwLcY8I4atuCnzht4VOh1gFWDyEmlRwQ1WT0N46RlbaQEP6J87tbo3drSUET66R0L9psjvbM+xBOLmKH1vGcZLfiBPc5BcZOMrr+oIDc5JmdNxJppszvFl79NlpZXU1vE7+H057aymaUfHLyWH0lT9dFXhFVF41SSyy09VJL/E1vMUY66rRXq5BKQowK4rCA3OQhvZNbi2NpV4scTWPcyXae8vSMhkDeZOSG35k0UIMdBIOUPHNDWU9XTwuhrwYRo9ZXhtVlkMbTEfHNjO2FPjpzT3ESmkJ9vTdnESXE/EAULpGd05T1QUQk0mEYWB80+E458MUMAciopHPp059NTxRzxSxSNRzMuxU3FbOUeWNyicLrDMSLyq0iYkbkBjY2ONrWtRG/tNZLilTlArYD4nc47tlQY8ZGd5k5RP+NSRslY5r2I5odZX16PQMKAdPm7a51/ddenGl1x0fK1icuVETlj290VDtvcQsJXTTUsSPsycP23DWaCuijnK3iySWVVHEDhjxnd+IyeMS7FjHVHIqIqdsx3Br8V4GYz2qwfvBlay+JsYLWY1uDUZdxT3ldDHP/pxhaSeb7hh5GEFBgjgGgjhhYRBI5zGTRucioqdEb0T6yrwirrMMosMjti3SEPaJgeVWFFdgwoS9wP61n9rNbZXbvkcvg6bbXUhuGRyEuVzrKwntDzDp3q6XTHPje17HK1+L2TregqD5Pv3eyU8JQaYSZ8LBSiQp4yBiHwzYTeS5BjddYTonn/gr2XWY7eXVbZlkV4MpYGC7fXJVsGfZhvFCRfT01uLTTU+VWSuavk9Nu6J9ViUA5TFbLd1RFJanVxDFa/UEExM0MEEayTY9W+56Srr1VFXcvCiskhFOrkRxoWA5caS0dKSeLWNUkWPUwNZG/xp9YshgoxBD/sK3WyuY5xI5UcI+MXTchowLNI/LX5MhxuqyUJRLCBXIbsrYNmX2O7gfDjO09ZTzwmWJHt0+sqwmoyqJvtTFiJk2Uskn4jvBvJxPbqpxeRCvG4s75HdtZTuRkcl2bEAc4QXbzJyMno3TlsahX05o2ysex7UVpWyrnnOUW6SMKnqxaatErxWqkPRdc+vfovGskvh8cqC7IhFck+6+YykrLGVBFHguYMy4CV8sSRGa765/wDdKvPV3bWR7SjXFpOeFZKImNY4FjFWyvEVzk+nxrj5M3ydMWpZDGRJJOLujmEBiEyWDJ2UlrBdVQFjCioxE51ubTl3GLTsEY6SZfTuutmqcwYeztJo3MiTS6zjci6bcmV1QV7LBtvn9lcHrT20iTSJ141x+DnuMSZRROFHe1pQ23uYEGIL7lmiWgqY6Knr61j1c3tpfXU+MY8UT7XNSByTsY1jWta1ERO2l1nO3V4lybYVQbihttcCtKqx98W0HkOT8bhE+T06enRyfz6L+H+tbsZNe1R1cCAVKLDtfe2l7QzyWMjpX9XObG1XOVEQ7ecOA98QtQ+cSptBLqvFsBH+KDqbJLAITLDH45KrN8tffiTrZkTSM/DtKWquYmw2NfCTGGEKBBGMINHDD1JhaRBNC77TdsstFPeLBWqRFiFI/Hsfr618iPk68dtR4/SwnOsI6oZhaJ+V+uPl/wA/0L//xAAzEAACAgAEBQMDBAEDBQAAAAABAgMRAAQSMRAhQVFhEyBxMDJAIlKBkUJwcrEUUGOhwf/aAAgBAQANPwD/AEOAsnCOR6jylGcDquJ1sA7qQaKnyD+ScuJFMTFPUe+dkYWeSOKZ93jGxPf2MpU/BFYLn0pxIiDRfLUCbBGIwzSuNi7mzXgexMvI0K1duFJUVifMoksTuzB1LfrDIeQAH4imwsqK4B7i8KKVVAUAdgB9N/vlWNVdvlgLP4thI41+53bZRgtRMUpaRBiVFdGGxUiwffA2iaaViEDdVUDESayga1dLospP42Tn9V4k5lkKlSQOpGJGpYkBLE9q6Yy+WSNyNtQHPhGAsSE0DI5pbxqsaJWjVfCqpAAxlQrLLsZIzy5gdRxnzEksE1HS6uxb+xdEYigdEdgQJHkoUt7gfhK2hmAYxq3YuBWGAIINgj2NuwUAn5PE6ZIS3IF4zYBwGoxtG1345c8ZpVSKJxTBAbJYcexAP/OAPYpAdYkZ9BPRiMSrqR0Ngj6jwSJE3ZypCnCPoaIqderatO5OI8sqyA7r1CnyPailndyFUDuScfvhhZkwotojaSAdyjUeC7u5ofA7nAP3iBtOAabQeanswPMe6TMySJIQSJFdiQynE87zRxPyKIwAFjzv9UbPpF/3xgcpLNKxCBhuqhcS8onRrjkO9Ueanhkm0smweUblvA4RMGjkU0QR/wDO464ZCJ1GyuhpsRuyZWPoiA0Gr9zbk8Iz+tOkidUbuDieJZUvs4sYnsQQ3W27MeijDHmsJZXUYmjDxttYPAGxY/BizDhwdydRN/yOd4GajkJA+1I2DMx8AcBnZW+Q7agf5B45uTNNF8ONAOIyVYHcMORH9jgMLkotQ8lcNlzCG6BwxbgUaTQd1WRyyj8MChKrFHrsWXD/AHyEl3YdizWeCLpZG5LMg/4YYB2ELsD8FQQcAgu8o0yMvZFOIY1SNRsFAoDEpLz5WwpL9XjJxdafQfERDrlWr1JGG2sDZcAbXzxIKaNxYOENprZ3CnwGJH4K7vIwRR/Jwv3ek4Yj5HGdNVsNQhTbUR3OCbJeRj/QuhgH9eWlcujDsL+04mS9J3UjkVPkH2xOUMsZp5yDRN7hcXevW2q/m7xMwRJpDbwsTS2d2Tim8kjBVH8nCC2RW/UB3o0a+nPmFieZd0UgnCQCQSSnWY2sALZ6NwiyqyRr0LuTbY/6mNKH+auwUoe4IPFJVjUdkRBxTOAr8sgv2Jkp2XwdBxXADD5SFn/3FATwTK+rGOhcsQzYTMxiOtySwGnyDdEcNUavIm8aFqZhh4JJJhK7SBGGzAkn6Egp43UMpHkHDGysSBQT3PCIH0p4+TqDuOxBxGbhaRQqp5CjrxKKubVRZUpyWThIwCRoLYnwMOTLmCNjI/sdSrA7FWFEYdictP0dOg8MNiOETg5qbZQoPNAerHCgAAdAOEZJilQ6XQnejiM3E0xFIe4VQOBFEEWCPIw5thFGqWfND6w6k0MHqDeCbJiLRX8hCMTArFFELmlre3ayFGOiFWkP8kkYdgFzMRPp2dtYPNcHDrawBqVB0aRsfs9JjiXkivTwTHxq2bHa30/1eEFKiKFUfAGBuAwJHyB+JHIyQQBiFVASASOrHc4zMyRTwklkpyFDqOjDhBK2WiXoEjNcciZIWbclIhqX/wBYzErSEnyeQ+AOAYMrA0QwNgjyDifLIz/76psTxGadkJVmW9ISxhCCsiMVYHveGDJLQoF42Kkj8OaRpEMS63TWbKMoxlpFlqUU8rIbVQvDNyHMQt0Kyc2HyDxzeueVDyKiUUFOIJCFJG6f4MPBHCRwkaDcsTQAxl8ukZI2LAc8ZVWQxEhfVQ86BOzDBajJMNEajuWxAn6n/c5Ns38k/XijaRvhAScXaZf01ZQnQMTzJxPHbL2YEqwHix7QS0cimnjbupx/5oyrfzpxGQyIU0Qqw8WSxHBBUeZjoOPBvdcd2iYNiuU8gACXvoA92XneKNEVbb0yQWckHEEphldRQc0CHA+o6lSOhBFEYL2FeItIi9gcZeMIt8yfJ8k8z74gAqDkXcmlUYuxCsKsvxZ5nGXYLOinkb2dfB+hO5eaMx6xrbdlwGLySt90jtux/BkcRQIdi5BNt4AGLtoHiURkdhQBGMzCsgB3F7g/HCCVJwiiy4SwQBgGj4xmvTSC+WtUss/HKyGJpFCl5HTkxsg0uHjZ4J6AclOZRq/GhkE0GrkpYAgqT5BxdNLLQjHm8ZaFU1dzuTxuzI0KFie55YAoAcqHHNSmUon3xu+4KnCRskEBILW/Iu1f91eAzNJHyZ2sjTeIcwYknYUXWgfYosnCOR63qaGcDqq4nTUhIojoQR0IPI+xInZE/cwBIH84mzKK2WJJjYOwBQJ+IptRIoaj3GIxSRxqFUDwB7JEZT3oisa6jnV1CFehNm1xEhMjDYuzFmr2kkmdYlD2dzf+lf8A/8QANxEAAQMDAQYCBgkFAAAAAAAAAgEDBAAFEhEGEBMiMkIUQSAwMVJhcSEjM1BRcoGRwUNikrHi/9oACAECAQE/APuSDDKdIFgDAdfMqfaWO860RISiWO6ys2x03/HF2cmRY08jaPOo19nmuH5d0K3OTmpLgugHCTu9UiqK6pUe3TZbZussqYj7VpU0+hd8aJImOcNgMip9l+K6bLoqBepcZeaQVcbMcunId1tvz1vjOMIwhJ20ZqZka9RLlWzQQDZfVxGyfy7/AHauyRhuD6Rvs/h06+elWy5OWx4nBDJCTQhqfOcuMk3zHHt3HHfbbBw2jEC6Sx9IVxIVq6Xg7k0y2rCBhzfrUWJImucNgMiqTFkQ3eE+GJVbNmgfji/JM+bmQB92rxZituBtnk0a4/EVqFsw0bAHKM+IXYPbV3tRWx0UEsmy6FqNaJ8tlXmmdQ/bX5UqKJaFU69OTYbMYmkHDu+XqLJdBtjzquBkDmnT7U0q8XIbnJEwDEQHH41abpFkxGRV7B0QxIPy1tHc47oNx2TzLPMvhp5VBukSXHAxeAD7w92tpLixLJlhgs0b5iOrbtE1DhJHcaPIelR86edV5111faRKX7+lHYKS80yK8xrpUyIcGQbBkhENRtnvEW/xXiNHFDIQ8v13WW3Ro8Nk0DJ1wBIj/NW0tuYGN4oAwcE/p/uy3Njm4A+8tRIEaIyDTbX/AF862lgsRnWXmhw4mWQfLzq3Q/Hy22FPES86vFsS2PNALuYklMW1x6DIlo6CC12+giqi6pREpLqRZLQTpbbBMC+aNF2brXtEkNgY8hoyEegh6qluXDaAASNHwjj3H3FUqFJhOcN9rEqh2afMbR1pvEfIiLGhv7sFOBPiHxh7h05vjV0uTtzeQ1DFsOgKBxxoxNs8SGnpD0k83nVMqQiRNMuX09m3IbctzxGGWHJnW0TkRyYCxsNcOfCrYrawIitdOA1tQrPhWMuvicv81HUCYZVvpwHH5VtWrWEVP6uZf41Y5NsC2iJG2J83Fy0/mpCtFIeVr7PMsPl6aaZc1Xd60uMRkhj9Ynt5ceX4/iu+Jc5sJFFl5UH3fbTUO53tTeyyx5cjX/VBcLnbFOMjyjj29X7U/IfkuE686plvnyLS5bo4RmsX+Xt9n46r5+psY2hYb3icOLzZZ6dPlpTiAjrvD6M1x+VWi+rbWTZJnMdchqbKObJdfMcclqxJAWYXjMNMOTPpyq8pDScfhMeHiPT05fD1UKI5NkAwBIJF71SGDivOsmvMJaLujQpMxSRhpTx6qISEiEh0Id0G2uzwfIDAeEmvN6oSUV1EsSpVUl1Vd1vuci2k6rWPP71OOE6ZmXUS5LuQiHLQ1HL7m//EAC8RAAEEAQIEBQMDBQAAAAAAAAIBAwQSAAUTEBEiMhQgMEJSITFiI1DBYXKBovH/2gAIAQMBAT8A/ZJUkYjO4Q2xl1HmgcT3cNScmgjXhh/uxlTVppXO6vVwlTRiuNArRluekqIqclx6ZGjmLZnUsRbfXjIkNRgu6VRxp1qQAuAth9EHWzUkA7V4TdKCW+ju5X5YAoACKe3NaKUjrVL7f85p6vLEa3u7J0IZrYgpVUchxUiMi0hW4C80ZEAuCRD5lTmipkHTkhuOnu2vj8lmMNnTrjEhmQ3uNHYcm6ybbpNsAHT7izTtSSYhC4FXByTrbguGLIdI/LNOnpNAuY1cHHtQix3do3OrEVCHmmRtMGNJN5HLc/Q1OCU1sUEuRDmnQlhMkJnzIsnwn2Xz6OYl2lmjQnhI3nBqNKjkmE+w8aKHTmjRDZu64NbduTNIORIV0D6S7saDabAPj5nnUYaNwu0cjSBlNC4I1x7V9qZsbXSh14ajLeekupfpE60zRpbqvbBFcS/14GVQJeXbj8p590zI80SU48DrbhWrkyT4WObqDbNOnLObIiCpDjk0G5TUdQKxeRU54goKckwokcnd1Wv1Pln2ydo6yHd1k62yOETSS5vO2e/H25HlMyRs0dskalEjltmVi/HC0sZRbsR8Nsvl7cgwwgt1vYi7sMAdAgMbCWNMtMDVoKjlUVefn1kJBMhtc6++uaOEgY5bt+Vui2TEPxT+53XzREc8Q8o9tP8AmOoaOmh92aCh3fX2fzmpMzCmkoiZfDGEcRlpHO6vV517V5Zp7c8HXVkF08X4EaSvM2urHJELS0BpB7vjhRIU5Bepa3+MaZbYCjYVHjEanhMdJ4/0/R1Qp6SA2b19tfl/XG77YX7q9WahpXjHBMXalkWOkZgGkK1c1XxPhx2L93VX75pviPDDv935ffl6UmQEVonCxl4X2gdHtLg/KZjIKunW2CSEiKn24SpoRDaEgMtz0lFCTkuIiD9E4S4LUym57cAEbARHtHgoiX3H9m//2Q==";
    },
    445: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////+RlJcjKS8+REnk5OWsr7GtrrHW19gwNjwxNjzIysvy8vKDhorj5OU+Q0nx8vKDh4p2eX26vL5aX2M/REnIycueoaRoa3A/Q0lNUVZaXmN1eX2srrGfoaStr7GfoqRo+6DCAAAAFHRSTlMAEEBwj6/P3++/YJ8gUG9fMJCwoELXNE4AAAABYktHRAH/Ai3eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QEaDQoSiRe0SwAAAypJREFUaN7tmtt2mzAQRQEBEhfXEA+xHVPHl7Z2mzaJ2///t0J9AxuNRkKsvPQ8ZWVF+0Qz0khIchySXI/5QcgFVBI8CnzmuY4tuXHCoUNhEqcW6CwCRFFPDw+lHxWMzP95DiTx2Ij/SQBZBhYeBy1pWqQBaCvRSPdYgIHInXB9MJRPmnwpB2NxQpgyAT3EM2X4oafGisEPvcUG5qMOY7AiaZQysKTM/vhsS3SOVtcavxqtXTPOB4vy7/kxWNV4uARI0pCAZQWDBqiW1zJoBah4PGo6o6Fm01ODeWskIR3Qc+jmt0vGbYafNBxkfBAukgG6g5Tf7ELHEKU6IPxrFkZdLWkOGP86kLr3KBQHnA/RaRJLWqsdFHwAF59kKgcl/5Rm+Q4ad1iUKv4xRimSQ8zhzC8XCMBVlSG5A4kPsbKOyhxofEgqgxCfSU8n0ucWaUnj13PNVdWCSy6Ly6+ez9VQxa+T4AHZYbpa1vRlUZL51WRmQHeomc2f1fxqJuSg56DHh9whfSytN/f8zZrS8sGJKH8G2y+3/GJLahg61O3K+msz+qs1sRl36B8022+r3b4s97vV9y25kXBgYP03UBvQk/z84+VnPYR+vcxnGkmmDtPla3MWvC3IwzSkbT9fbyfaG60XEa1ULDuK0XRBKxWUYjd/7NQ7qdgxLX6535daDoyw4Fz4u8O/CrT+vaE7eOol88wvD9ff/SmpDq6jGqfzzvJ/WSDeVdXacSYGfLJDotp4FdLli+ZQb7xcIz7RIcU3vwW6/BIcjh8IzIzfcDhgEZLHqFBuHy4OBRYhWYwKwvZE4fBwPqc25ascRshnbEHcXmEO18MEZsxHHa5n2a4w5iMOzdMQZs6XO8TK45wNcX/Y7cDbFx729ys3twmBbX5yeygo7PLvbxLiQQNUK7fJzz/iaNliGmRXOUMf71tLNHKfxmzw0UscNjDfQpSU941Zr9Eqso+/aqxmnPGczqkvFWKjTgiNO+t0os8P9N4n6HaCe9q3+joWghm9S6BacGb8DGVEWEkjz+mjNMafnjALb2jSeNJ5HMCT2OILHY/lQXR+/hMGOfn5z1+b3UJdbsb1pAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0yNlQxMzowNDo1MiswMDowML2qScYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMjZUMTM6MDQ6NTIrMDA6MDDM9/F6AAAAAElFTkSuQmCC";
    },
    451: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABOdJREFUeNrsWrGOEzEQTXxUV+Ukiusu8AV7H4C06ahQtqMj6egu+wW5fEHyB3sl3UZ0VDlEQ5d8AbeiplgaasZocuT27PXM2F4QxFK0UhJ7PeN5M+/Z7vWO7diO7X9ufdOXT5+9SOAxFoy3+nb3qY496VfvvszgMWB2u3n/+nlFcgA6YQuPhPsScMA0svHX8Jgzu92C8SPTD6qlUwYf7mpOwHHjiMYnAuO1DdZFsToAVlKHSy6YZwFOGEQwXo9ZCrpOTaFPiQDthBsd1swXSifqdCx8htycBMav2/5w4hrh9OziIzxewuec8eIh9Pv+o/76OWDSmzG77cD4zPUn5foDZnVJYpsDFIZ/I+5ZDkAn7AT5wBsKiPtCUPJyWP1dMAegE1bwWDMnkkAUXHv4YCkpxWA8OW8p5uA6rCoBFBLB6utyOmF2Y1euPndiYEwKj41gYpdUlgjG69yxFYT+JTX0pRGgoXALjwWz25CZyMqYuPeKgINI0FGQMrtl4MC1Y/WXgpK3ppS8IBHgSZVbWSIYnwqMl5ZpPwcI+cG+rIWkuhmsft25A9AJOpxXzG5jiIJJINwvwPjb4PsBgnzAlc41OO8slsTltCeEWpwQNhYyZtmqYlBdhFFzvnVbdeg7OPimYZQeaGTCHIZ1QZy85gQVTngrUHmZTeXBmKZotPIDxeDgNWrr2lM6Z7jXEEvimqpTiTaRk+Dc4MUFgWjkGCXWpIVEai9xubtHOxcJQ3hODUSsIEEAcV9KiQby/q2JrIDxWQu8KNAZUdkevKMwaIlpUygpAwcvDAmLXO8t0vl+jC4kbks0LtH5VgiYajGbaDSkc424rz0k7pojcREK+0pRN4nYYT5QDQ4uwb1LOucYFT4SV0R1ce7NnJHgIvzOARbcexMNvSW2z/hdSlxDPigNCfdXPlAW3NdYTrzaQbnrVOISN3J0PhgqNLaJ8cpHYFgkLhf3OgJXId6PtpiJEP7YXO0EJx3CeKnEzQIuwMQAAR1dlWpJFjPMDT4v/iMS10Dpl7aqog7CRCuyprQsbBQy4tbWvcTVmyd650myqXpoQ2MOD6qKMiSLZt0shZ6fCbbMdrgQh5Q8JYosau55oGcUgUenqNd9w46Fezxl3ucOfb6wZM5hbMg9jzZQ+gweTarHISQu7hveGeAz2ospwhya/XV0XVLVYG6omyUxH4SQuLbcURKP3kuDlM/IcthSGocuLFrKDUvi4lGaLXcMCHMw9c9tdwT6hMHmLkkZSuK2SOlHEYqCy8Q5NhwpH2RTFKGxEbC9e2diaFNzR435wJsmq16YNg8gceeM3OGEQmcOsJQbicTlEiZ2aQwOgZASt6X0uRqpNMaKgGASF3eMJAKo9LmVpjxW/zq0xMWV5Epgr3yghManPdlpjnOFwQmurXVT0+eNs04c0JHEnfb4R++iqziqI9yvOKe4WN8XXUDhhLn6OszeCiQuO7npS5anZxcpU1ecQ58B9P0QPAJCSFwJbARQmOFFrnAOiHVRmQAF6fUXcmmkRoBE4t64LioTnSC5hULOB4qw+lKJm/fCtUWs0tgn4D7qKS61MaQySzUqB+4lp7iL0MbHLI0qgsRd9SI1cIKm31zh06oaVWSJG6NJWKK1NNpuib0ReDoPeZ7YEgUVGKOdcMXseiWw6diO7dj+8fZTgAEAeyqFfxT1WrYAAAAASUVORK5CYII=";
    },
    459: function (e) {
      e.exports = JSON.parse(
        '{"WdexOld":{"address":"0x05220A11566a954d449dCB72d241277668b8cF9E","abi":[{"inputs":[{"internalType":"address","name":"_dexIra","type":"address"},{"internalType":"address","name":"_dexShare","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"collectSpecificRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ratioManager","type":"address"}],"name":"setRatioManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsManager","type":"address"}],"name":"setRewardsManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrapNoCollect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"wrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"WdexRatioCalculatorOld":{"address":"0x9D84A0bBd352ed9B8044a2d852C2E3dc908e02A8","abi":[{"inputs":[{"internalType":"address","name":"_a","type":"address"},{"internalType":"address","name":"_b","type":"address"},{"internalType":"address","name":"_wrapper","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAutomation","type":"address"},{"indexed":true,"internalType":"address","name":"newAutomation","type":"address"}],"name":"AutomationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"automation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"walletAddress","type":"address"}],"name":"calculateMaxWrappable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"calculateAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateUnwrap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateWrap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"readAAmount","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"readBAmount","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"_a","type":"int256"},{"internalType":"int256","name":"_b","type":"int256"}],"name":"setAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAutomation","type":"address"}],"name":"transferAutomation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"WdexRewardsManagerOld":{"address":"0xE27d6d13589C7AEf73c834617b01be0388df69bd","abi":[{"inputs":[{"internalType":"address","name":"wrapper","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAutomation","type":"address"},{"indexed":true,"internalType":"address","name":"newAutomation","type":"address"}],"name":"AutomationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"wDexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWDex","type":"uint256"}],"name":"SetAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousWrapper","type":"address"},{"indexed":true,"internalType":"address","name":"newWrapper","type":"address"}],"name":"WrapperTransferred","type":"event"},{"inputs":[],"name":"automation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimableRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"}],"name":"claimableRewardsForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"}],"name":"collectRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"logDisbursement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"wDexAmount","type":"uint256"},{"internalType":"uint256","name":"_totalWDex","type":"uint256"}],"name":"setAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardTokenAddress","type":"address"}],"name":"setRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAutomation","type":"address"}],"name":"transferAutomation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWrapper","type":"address"}],"name":"transferWrappable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"Wdex":{"address":"0x6647047433df4CFc9912d092Fd155b9d972A4a85","abi":[{"inputs":[{"internalType":"address","name":"_dexIra","type":"address"},{"internalType":"address","name":"_dexShare","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DrainedRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DrainedTokenRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexIra","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexShare","type":"uint256"}],"name":"Unwrapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexIra","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexShare","type":"uint256"}],"name":"Wrapped","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGEMENT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"collectSpecificRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"drainReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"drainTokenReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getClaimBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRatioManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"pushRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ratioManager","type":"address"}],"name":"setRatioManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsManager","type":"address"}],"name":"setRewardsManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnershipMaintainAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrapNoCollect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"wrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"wDEXIRA-DEXSHARE":{"address":"0x6647047433df4CFc9912d092Fd155b9d972A4a85","abi":[{"inputs":[{"internalType":"address","name":"_dexIra","type":"address"},{"internalType":"address","name":"_dexShare","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DrainedRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DrainedTokenRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexIra","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexShare","type":"uint256"}],"name":"Unwrapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexIra","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dexShare","type":"uint256"}],"name":"Wrapped","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGEMENT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"collectSpecificRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"drainReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"drainTokenReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getClaimBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRatioManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"pushRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ratioManager","type":"address"}],"name":"setRatioManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsManager","type":"address"}],"name":"setRewardsManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnershipMaintainAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrapNoCollect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"wrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"WdexRatioCalculator":{"address":"0xeB5D8D9da84c8375Eb5c03Bb7cdf25120a74470A","abi":[{"inputs":[{"internalType":"address","name":"_a","type":"address"},{"internalType":"address","name":"_b","type":"address"},{"internalType":"address","name":"_wrapper","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAutomation","type":"address"},{"indexed":true,"internalType":"address","name":"newAutomation","type":"address"}],"name":"AutomationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"automation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"walletAddress","type":"address"}],"name":"calculateMaxWrappable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"calculateAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateUnwrap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateWrap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"readAAmount","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"readBAmount","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"_a","type":"int256"},{"internalType":"int256","name":"_b","type":"int256"}],"name":"setAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAutomation","type":"address"}],"name":"transferAutomation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"WdexRewardsManager":{"address":"0x0C848e5A48Dd1810b46FE9d05Ba0E4c01AF18d69","abi":[{"inputs":[{"internalType":"address","name":"wrapper","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAutomation","type":"address"},{"indexed":true,"internalType":"address","name":"newAutomation","type":"address"}],"name":"AutomationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"wDexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWDex","type":"uint256"}],"name":"SetAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousWrapper","type":"address"},{"indexed":true,"internalType":"address","name":"newWrapper","type":"address"}],"name":"WrapperTransferred","type":"event"},{"inputs":[],"name":"automation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimableRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"}],"name":"claimableRewardsForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"}],"name":"collectRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"logDisbursement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"wDexAmount","type":"uint256"},{"internalType":"uint256","name":"_totalWDex","type":"uint256"}],"name":"setAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardTokenAddress","type":"address"}],"name":"setRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAutomation","type":"address"}],"name":"transferAutomation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWrapper","type":"address"}],"name":"transferWrappable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"DexShareDexIraRewardPool":{"address":"0x92e7902632ddA5FaB42bD18e085Cc3dE35422f18","abi":[{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_sharesPerSecond","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddRewards","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ClaimReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Drained","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SetAllocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SetClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"sharesPerSecond","type":"uint256"}],"name":"SetSharesPerSecond","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGEMENT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewards","type":"uint256"}],"name":"addRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allocatedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"emergencyDrainReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"setAllocations","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"setClaimed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sps","type":"uint256"}],"name":"setSharesPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnershipMaintainAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"EtfOracle":{"address":"0x3B186d534c714679cf9d0504D1FBFD56c2339E7C","abi":[{"inputs":[{"internalType":"address","name":"uniswapFactory","type":"address"},{"internalType":"address","name":"weth","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"canUpdatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"canUpdatePrices","outputs":[{"internalType":"bool[]","name":"canUpdateArr","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"tokenAmounts","type":"uint256[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthForTokens","outputs":[{"internalType":"uint144[]","name":"averageValuesInWETH","type":"uint144[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthForTokens","outputs":[{"internalType":"uint144","name":"","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthPrice","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112","name":"priceAverage","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageEthPrices","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112[]","name":"averagePrices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokenPrice","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112","name":"priceAverage","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokenPrices","outputs":[{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112[]","name":"averagePrices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"wethAmounts","type":"uint256[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokensForEth","outputs":[{"internalType":"uint144[]","name":"averageValuesInWETH","type":"uint144[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"wethAmount","type":"uint256"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeAverageTokensForEth","outputs":[{"internalType":"uint144","name":"","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeTwoWayAveragePrice","outputs":[{"components":[{"internalType":"uint224","name":"priceAverage","type":"uint224"},{"internalType":"uint224","name":"ethPriceAverage","type":"uint224"}],"internalType":"struct PriceLibrary.TwoWayAveragePrice","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"minTimeElapsed","type":"uint256"},{"internalType":"uint256","name":"maxTimeElapsed","type":"uint256"}],"name":"computeTwoWayAveragePrices","outputs":[{"components":[{"internalType":"uint224","name":"priceAverage","type":"uint224"},{"internalType":"uint224","name":"ethPriceAverage","type":"uint224"}],"internalType":"struct PriceLibrary.TwoWayAveragePrice[]","name":"prices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"priceKey","type":"uint256"}],"name":"getPriceObservationInWindow","outputs":[{"components":[{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint224","name":"priceCumulativeLast","type":"uint224"},{"internalType":"uint224","name":"ethPriceCumulativeLast","type":"uint224"}],"internalType":"struct PriceLibrary.PriceObservation","name":"observation","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"timeFrom","type":"uint256"},{"internalType":"uint256","name":"timeTo","type":"uint256"}],"name":"getPriceObservationsInRange","outputs":[{"components":[{"internalType":"uint32","name":"timestamp","type":"uint32"},{"internalType":"uint224","name":"priceCumulativeLast","type":"uint224"},{"internalType":"uint224","name":"ethPriceCumulativeLast","type":"uint224"}],"internalType":"struct PriceLibrary.PriceObservation[]","name":"prices","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"priceKey","type":"uint256"}],"name":"hasPriceObservationInWindow","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"updatePrices","outputs":[{"internalType":"bool[]","name":"pricesUpdated","type":"bool[]"}],"stateMutability":"nonpayable","type":"function"}]},"DexIra":{"address":"0x147e07976e1ae78287c33aafaab87760d32e50a5","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"BuyBackWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":true,"internalType":"uint256","name":"bnbSpent","type":"uint256"}],"name":"BuyBackWithNoFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newBNBRewardsFee","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newLiquidityFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newOperationsFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBuyBackFee","type":"uint256"}],"name":"FeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"LiquidityWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMigrationSwapContract","type":"address"},{"indexed":true,"internalType":"address","name":"oldMigrationSwapContract","type":"address"}],"name":"MigrationSwapContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"OperationsWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[],"name":"BNBRewardsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_airDropAddressNextSellDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_airDropTokensRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_airDroppedTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_holderLastSellDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isAirdoppedWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airDropDailySellPerc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airDropLimitInEffect","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airDropLimitLiftDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"airdropWallets","type":"address[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"airdropToWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackTokensWithNoFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableTransferDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"dividendTokenBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendTracker","outputs":[{"internalType":"contract DexIRADividendTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeMultipleAccountsFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountDividendsInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountDividendsInfoAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getBNBAvailableForHolderBuyBack","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClaimWait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDividendTokensMinimum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getHolderSellFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getRawBNBDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getRewardTokenSelectionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTradingIsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUserCurrentRewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUserHasCustomRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getWalletMaxAirdropSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getWalletTokensAvailableToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"holderBNBUsedForBuyBacks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ammAddress","type":"address"}],"name":"isAMMWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"isBlacklistedToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSellTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrationSwapContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operationsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operationsWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellFeeIncreaseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"bool","name":"isBlacklisted","type":"bool"}],"name":"setBlacklistToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardTokenAddress","type":"address"}],"name":"setRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardTokenAddress","type":"address"},{"internalType":"address","name":"ammContractAddress","type":"address"}],"name":"setRewardTokenWithCustomAMM","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ammAddress","type":"address"},{"internalType":"bool","name":"isWhiteListed","type":"bool"}],"name":"setWhiteListAMM","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingEnabledTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferDelayEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unsetRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newBuyBackWallet","type":"address"}],"name":"updateBuyBackWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimumToEarnDivs","type":"uint256"}],"name":"updateDividendTokensMinimum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnbRewardPerc","type":"uint256"},{"internalType":"uint256","name":"liquidityPerc","type":"uint256"},{"internalType":"uint256","name":"operationsPerc","type":"uint256"},{"internalType":"uint256","name":"buyBackPerc","type":"uint256"}],"name":"updateFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newLiquidityWallet","type":"address"}],"name":"updateLiquidityWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxnAmount","type":"uint256"}],"name":"updateMaxTxn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMigrationSwapContract","type":"address"}],"name":"updateMigrationSwapContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperationsWallet","type":"address"}],"name":"updateOperationsWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]},"DexEtf":{"address":"0x60EBfD605Cb25C7796F729c78a4453ACeCb1CE03","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"BuyBackWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":true,"internalType":"uint256","name":"bnbSpent","type":"uint256"}],"name":"BuyBackWithNoFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"accounts","type":"address[]"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeMultipleAccountsFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newBNBRewardsFee","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"newLiquidityFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newOperationsFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBuyBackFee","type":"uint256"}],"name":"FeesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"LiquidityWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newMigrationSwapContract","type":"address"},{"indexed":true,"internalType":"address","name":"oldMigrationSwapContract","type":"address"}],"name":"MigrationSwapContractUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newLiquidityWallet","type":"address"},{"indexed":true,"internalType":"address","name":"oldLiquidityWallet","type":"address"}],"name":"OperationsWalletUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[],"name":"BNBRewardsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_airDropAddressNextSellDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_airDropTokensRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_airDroppedTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_holderLastSellDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isAirdoppedWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airDropDailySellPerc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airDropLimitInEffect","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airDropLimitLiftDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"airdropWallets","type":"address[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"airdropToWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"automatedMarketMakerPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBackTokensWithNoFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableTransferDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"dividendTokenBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendTracker","outputs":[{"internalType":"contract DexIRADividendTracker","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeMultipleAccountsFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasForProcessing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountDividendsInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountDividendsInfoAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getBNBAvailableForHolderBuyBack","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getClaimWait","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDividendTokensMinimum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getHolderSellFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastProcessedIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfDividendTokenHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getRawBNBDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getRewardTokenSelectionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDividendsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTradingIsEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUserCurrentRewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getUserHasCustomRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getWalletMaxAirdropSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"getWalletTokensAvailableToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"holderBNBUsedForBuyBacks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInDividends","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ammAddress","type":"address"}],"name":"isAMMWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"isBlacklistedToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSellTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrationSwapContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operationsFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operationsWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"processDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellFeeIncreaseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAutomatedMarketMakerPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"bool","name":"isBlacklisted","type":"bool"}],"name":"setBlacklistToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardTokenAddress","type":"address"}],"name":"setRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rewardTokenAddress","type":"address"},{"internalType":"address","name":"ammContractAddress","type":"address"}],"name":"setRewardTokenWithCustomAMM","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ammAddress","type":"address"},{"internalType":"bool","name":"isWhiteListed","type":"bool"}],"name":"setWhiteListAMM","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingEnabledTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferDelayEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unsetRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newBuyBackWallet","type":"address"}],"name":"updateBuyBackWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimWait","type":"uint256"}],"name":"updateClaimWait","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimumToEarnDivs","type":"uint256"}],"name":"updateDividendTokensMinimum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendTracker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateDividendUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnbRewardPerc","type":"uint256"},{"internalType":"uint256","name":"liquidityPerc","type":"uint256"},{"internalType":"uint256","name":"operationsPerc","type":"uint256"},{"internalType":"uint256","name":"buyBackPerc","type":"uint256"}],"name":"updateFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGasForProcessing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newLiquidityWallet","type":"address"}],"name":"updateLiquidityWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxnAmount","type":"uint256"}],"name":"updateMaxTxn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMigrationSwapContract","type":"address"}],"name":"updateMigrationSwapContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperationsWallet","type":"address"}],"name":"updateOperationsWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdrawableDividendOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]},"Bomb":{"address":"0x829c09fCc46D9fd31967272ABA245BEF9f727F93","abi":[{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"TaxOfficeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_DEX_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoCalculateTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_dexPool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersRatesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersTwapsCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxOffice","type":"address"}],"name":"setTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setTokenOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxCollectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxOffice","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersTwaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"UsDex":{"address":"0x829c09fCc46D9fd31967272ABA245BEF9f727F93","abi":[{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"TaxOfficeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_DEX_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoCalculateTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_dexPool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersRatesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersTwapsCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxOffice","type":"address"}],"name":"setTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setTokenOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxCollectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxOffice","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersTwaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"BShare":{"address":"0xf4914E6D97a75f014AcFcF4072f11be5CfFc4cA6","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}]},"DexShare":{"address":"0xf4914E6D97a75f014AcFcF4072f11be5CfFc4cA6","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}]},"BBond":{"address":"0xF5DdBB7DA0888A87b472Caf05285f610C253F863","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DexBond":{"address":"0xF5DdBB7DA0888A87b472Caf05285f610C253F863","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Treasury":{"address":"0x1DF93D98EE398C3cCAE4AA5e3580C583Fb16403A","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"BoardroomFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"dexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BoughtBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BurnedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DaoFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DevFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"dexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"RedeemedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"TreasuryFunded","type":"event"},{"inputs":[],"name":"PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bbond","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boardroom","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"boardroomAllocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"boardroomGovernanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"boardroomSetLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"boardroomSetOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pegRegulationAddress","type":"address"}],"name":"boardroomSetPegRegulationAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bondDepletionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dexAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"buyBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPriceCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPriceOne","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochSupplyContractionLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"excludedFromTotalSupply","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondDiscountRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondPremiumRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnableDexLeft","outputs":[{"internalType":"uint256","name":"_burnableDexLeft","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexPrice","outputs":[{"internalType":"uint256","name":"dexPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexUpdatedPrice","outputs":[{"internalType":"uint256","name":"_dexPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRedeemableBonds","outputs":[{"internalType":"uint256","name":"_redeemableBonds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"address","name":"_bbond","type":"address"},{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"address","name":"_dexOracle","type":"address"},{"internalType":"address","name":"_boardroom","type":"address"},{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDebtRatioPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDiscountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxExpansionTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPremiumRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyContractionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintingFactorForPayingDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousEpochDexPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"redeemBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seigniorageExpansionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seigniorageSaved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_boardroom","type":"address"}],"name":"setBoardroom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondDepletionFloorPercent","type":"uint256"}],"name":"setBondDepletionFloorPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondSupplyExpansionPercent","type":"uint256"}],"name":"setBondSupplyExpansionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bootstrapEpochs","type":"uint256"},{"internalType":"uint256","name":"_bootstrapSupplyExpansionPercent","type":"uint256"}],"name":"setBootstrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setDexOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dexPriceCeiling","type":"uint256"}],"name":"setDexPriceCeiling","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountPercent","type":"uint256"}],"name":"setDiscountPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_daoFund","type":"address"},{"internalType":"uint256","name":"_daoFundSharedPercent","type":"uint256"},{"internalType":"address","name":"_devFund","type":"address"},{"internalType":"uint256","name":"_devFundSharedPercent","type":"uint256"}],"name":"setExtraFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDebtRatioPercent","type":"uint256"}],"name":"setMaxDebtRatioPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDiscountRate","type":"uint256"}],"name":"setMaxDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxExpansionTiersEntry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPremiumRate","type":"uint256"}],"name":"setMaxPremiumRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyContractionPercent","type":"uint256"}],"name":"setMaxSupplyContractionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyExpansionPercent","type":"uint256"}],"name":"setMaxSupplyExpansionPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintingFactorForPayingDebt","type":"uint256"}],"name":"setMintingFactorForPayingDebt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumPercent","type":"uint256"}],"name":"setPremiumPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumThreshold","type":"uint256"}],"name":"setPremiumThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setSupplyTiersEntry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supplyTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]},"Oracle":{"address":"0x55E2dc63bcF251D487752C6fa72180A73164d62e","abi":[{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"}],"name":"Updated","type":"event"},{"inputs":[],"name":"blockTimestampLast","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastEpochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epoch","type":"uint256"}],"name":"setEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"twap","outputs":[{"internalType":"uint144","name":"_amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DexSharesDexEtfRewardPool":{"address":"0xd69dB827939e26511068AA2bf742E7463b292190","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"drainPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeTires","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"},{"internalType":"uint256","name":"_runningTime","type":"uint256"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setFeeTiersEntry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enableFees","type":"bool"}],"name":"setFeesStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setStakingTiersEntry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingTires","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Boardroom":{"address":"0xA649987E48F89Ef11981c9A794DF2C7D3fa3AeB3","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"boardroomHistory","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"rewardReceived","type":"uint256"},{"internalType":"uint256","name":"rewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"canClaimReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getDexPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"getLastSnapshotIndexOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPegRegulationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_dex","type":"address"},{"internalType":"contract IERC20","name":"_share","type":"address"},{"internalType":"contract ITreasury","name":"_treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestSnapshotIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"members","outputs":[{"internalType":"uint256","name":"lastSnapshotIndex","type":"uint256"},{"internalType":"uint256","name":"rewardEarned","type":"uint256"},{"internalType":"uint256","name":"epochTimerStart","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pegRegulationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"setLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pegRegulationAddress","type":"address"}],"name":"setPegRegulationAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"share","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]},"TaxOffice":{"address":"0xbc36e7DAaE10316804179C6bc4F9e23Dbaaf294E","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"dex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddressFromTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddressInTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dex","type":"address"}],"name":"setDex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setTaxableDexOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTaxOffice","type":"address"}],"name":"transferTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TaxOfficeV2":{"address":"0x370527F134f00726a00326FEEDF2a34b1d4ec2Be","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"amtDex","type":"uint256"},{"internalType":"uint256","name":"amtDexMin","type":"uint256"},{"internalType":"uint256","name":"amtEthMin","type":"uint256"}],"name":"addLiquidityETHTaxFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amtDex","type":"uint256"},{"internalType":"uint256","name":"amtToken","type":"uint256"},{"internalType":"uint256","name":"amtDexMin","type":"uint256"},{"internalType":"uint256","name":"amtTokenMin","type":"uint256"}],"name":"addLiquidityTaxFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddressFromTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddressInTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setTaxExclusionForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setTaxableDexOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxExclusionEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"taxFreeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTaxOffice","type":"address"}],"name":"transferTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"TaxOracle":{"address":"0xedFB5CD2B8A789154fE5D78f339A99C096A54ED2","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"},{"internalType":"address","name":"_pair","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWbnbBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dex","type":"address"}],"name":"setDex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"setPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wbnb","type":"address"}],"name":"setWbnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wbnb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"UsDexGenesisRewardPool":{"address":"0x7F352c6463F180371192c1c56869A5AD3267D921","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDexPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"BombRewardPool":{"address":"0x7d9e051B60ef6DbB9721Af9F6AA51B2c7772feEB","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochDexPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDexPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DexRewardPool":{"address":"0x7d9e051B60ef6DbB9721Af9F6AA51B2c7772feEB","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochDexPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDexPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"BShareRewardPool":{"address":"0xCC180BfA5d2C3Ac191758B721C9bBbB263b3fd1C","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DesxhareBnbLPDedshareRewardPool":{"address":"0xCC180BfA5d2C3Ac191758B721C9bBbB263b3fd1C","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"UsdexBusdLPDexshareRewardPool":{"address":"0xCC180BfA5d2C3Ac191758B721C9bBbB263b3fd1C","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"WDexDexShareLPDexshareRewardPool":{"address":"0xCC180BfA5d2C3Ac191758B721C9bBbB263b3fd1C","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Zapper":{"address":"0x915d640b6a245a50D429aeA8e72DabA81D0D6B21","abi":[{"inputs":[{"internalType":"address","name":"_WNATIVE","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fee_to","type":"address"},{"indexed":false,"internalType":"uint16","name":"rate","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"min","type":"uint16"}],"name":"FeeChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"uint16","name":"min","type":"uint16"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"bridgeToken","type":"address"}],"name":"setTokenBridgeForRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setUseNativeRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"useNativeRouter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_toRouter","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapAcross","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapIn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapInToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"ZapperV2":{"address":"0x3999F690C90f8639Ff7105a93Da401d1339cFB0A","abi":[{"inputs":[{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_WBNB","type":"address"},{"internalType":"address","name":"_TOKEN","type":"address"},{"internalType":"address","name":"_SHARE","type":"address"},{"internalType":"address","name":"_USDC","type":"address"},{"internalType":"address","name":"_PEGLP","type":"address"},{"internalType":"address","name":"_SHARELP","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"approveNewInputToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"breakLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"delAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAddressLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"routePair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"route","type":"address"}],"name":"setRoutePairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelisterRole","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"zapBNBToLP","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"zapTokenToLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"TWAPOracle":{"address":"0x4933a348f7b870092C168f01C3AFe48C008D3557","abi":[{"inputs":[{"internalType":"address","name":"_pair","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"}],"name":"createAndUpdateOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"}],"name":"createOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"oracleOfPair","outputs":[{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"},{"internalType":"uint32","name":"blockTimestampLast","type":"uint32"},{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112","name":"price0Average","type":"tuple"},{"components":[{"internalType":"uint224","name":"_x","type":"uint224"}],"internalType":"struct FixedPoint.uq112x112","name":"price1Average","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"}],"name":"updateOracle","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"SpookyRouter":{"address":"0x10ED43C718714eb63d5aA57B78B54704E256024E","abi":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"uniswapRouterMinter":{"address":"0x064F3792Ccc17300357019f7191168f92acff049","abi":[{"inputs":[{"internalType":"address","name":"factory_","type":"address"},{"internalType":"address","name":"weth_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"VERSION_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"name":"getMaxAmountForJoin","outputs":[{"internalType":"uint256","name":"amountInMax","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"name":"swapETHForAllTokensAndMintExact","outputs":[{"internalType":"uint256","name":"amountInTotal","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"}],"name":"swapTokensForAllTokensAndMintExact","outputs":[{"internalType":"uint256","name":"amountInTotal","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]},"uniswapRouterBurner":{"address":"0x0D673c2b9e9523e71868dA0915316Ef175E19c57","abi":[{"inputs":[{"internalType":"address","name":"factory_","type":"address"},{"internalType":"address","name":"weth_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"VERSION_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"ethAmountOut","type":"uint256"}],"name":"burnAndSwapForExactETH","outputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"burnAndSwapForExactTokens","outputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnExactAndSwapForETH","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnExactAndSwapForTokens","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnForAllTokensAndSwapForETH","outputs":[{"internalType":"uint256","name":"amountOutTotal","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"indexPool","type":"address"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"},{"internalType":"address[]","name":"intermediaries","type":"address[]"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"burnForAllTokensAndSwapForTokens","outputs":[{"internalType":"uint256","name":"amountOutTotal","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]},"indexpool":{"address":"0x60EBfD605Cb25C7796F729c78a4453ACeCb1CE03","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"newDenorm","type":"uint256"}],"name":"LOG_DENORM_UPDATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"desiredDenorm","type":"uint256"}],"name":"LOG_DESIRED_DENORM_SET","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"LOG_EXIT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"exitFeeRecipient","type":"address"}],"name":"LOG_EXIT_FEE_RECIPIENT_UPDATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountIn","type":"uint256"}],"name":"LOG_JOIN","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"maxPoolTokens","type":"uint256"}],"name":"LOG_MAX_TOKENS_UPDATED","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"minimumBalance","type":"uint256"}],"name":"LOG_MINIMUM_BALANCE_UPDATED","type":"event"},{"anonymous":false,"inputs":[],"name":"LOG_PUBLIC_SWAP_ENABLED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"tokenIn","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOut","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmountOut","type":"uint256"}],"name":"LOG_SWAP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"desiredDenorm","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minimumBalance","type":"uint256"}],"name":"LOG_TOKEN_ADDED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"LOG_TOKEN_READY","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"}],"name":"LOG_TOKEN_REMOVED","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"VERSION_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whom","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"increaseApproval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"controller","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"uniswapV2oracle","type":"address"},{"internalType":"address","name":"uniswapV2router","type":"address"},{"internalType":"address","name":"exitFeeRecipient","type":"address"},{"internalType":"address","name":"exitFeeRecipientAdditional","type":"address"}],"name":"configure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"balances","type":"uint256[]"},{"internalType":"uint96[]","name":"denorms","type":"uint96[]"},{"internalType":"address","name":"tokenProvider","type":"address"},{"internalType":"address","name":"unbindHandler","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxPoolTokens","type":"uint256"}],"name":"setMaxPoolTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"exitFeeRecipient","type":"address"},{"internalType":"bool","name":"additional","type":"bool"}],"name":"setExitFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegateCompLikeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint96[]","name":"desiredDenorms","type":"uint96[]"}],"name":"reweighTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint96[]","name":"desiredDenorms","type":"uint96[]"},{"internalType":"uint256[]","name":"minimumBalances","type":"uint256[]"}],"name":"reindexTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"minimumBalance","type":"uint256"}],"name":"setMinimumBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256[]","name":"maxAmountsIn","type":"uint256[]"}],"name":"joinPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"uint256","name":"minPoolAmountOut","type":"uint256"}],"name":"joinswapExternAmountIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"poolAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"}],"name":"joinswapPoolAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256[]","name":"minAmountsOut","type":"uint256[]"}],"name":"exitPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"poolAmountIn","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"exitswapPoolAmountIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPoolAmountIn","type":"uint256"}],"name":"exitswapExternAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"gulp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"flashBorrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"tokenAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"name":"swapExactAmountIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"tokenAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"name":"swapExactAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isPublicSwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getSwapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getExitFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getController","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getMaxPoolTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"t","type":"address"}],"name":"isBound","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getNumTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentDesiredTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getDenormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenRecord","outputs":[{"components":[{"internalType":"bool","name":"bound","type":"bool"},{"internalType":"bool","name":"ready","type":"bool"},{"internalType":"uint40","name":"lastDenormUpdate","type":"uint40"},{"internalType":"uint96","name":"denorm","type":"uint96"},{"internalType":"uint96","name":"desiredDenorm","type":"uint96"},{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"uint256","name":"balance","type":"uint256"}],"internalType":"struct IIndexPool.Record","name":"record","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"extrapolatePoolValueFromToken","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotalDenormalizedWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getMinimumBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getUsedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"}],"name":"getSpotPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]},"dexLocker":{"address":"0x296772DeEabb9521bdfF09A98E27A4c7D0bd11BB","abi":[{"inputs":[{"internalType":"contract ERC20","name":"_dexIRA","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_ownerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexIRA","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasUnstaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isStaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"lockTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"timeStampDiff","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"unStakedUserDetails","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"unStakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}}'
      );
    },
    46: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return T;
        });
      var a = n(424),
        i = n(425),
        u = n(426),
        s = n(427),
        p = n(428),
        r = n(429),
        y = n(430),
        o = n(431),
        d = n(432),
        l = n(433),
        m = n(434),
        c = {
          erc20: a,
          oldFarm: n(435),
          newFarm: n(436),
          masterChef: d,
          masterChefBiSwap: l,
          masterChefMDEX: m,
          indexpool: i,
          uniswapV2oracle: u,
          indexseller: s,
          factory: y,
          pairs: o,
          uniswapRouterMinter: p,
          uniswapRouterBurner: r,
        },
        T = {
          56: {
            factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
            router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
            uniswapV2oracle: "0x3B186d534c714679cf9d0504D1FBFD56c2339E7C",
            MULTISIG: "0x60731C18EDd8a0Fd2A0d0C8B6462c8026e1939A7",
            WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            USDEX: "0x829c09fCc46D9fd31967272ABA245BEF9f727F93",
            DEX_SHARE: "0xf4914E6D97a75f014AcFcF4072f11be5CfFc4cA6",
            DEX_IRA: "0x147e07976e1ae78287c33aafaab87760d32e50a5",
            BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            ADA: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
            CAKE: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
            XRP: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
            BTCB: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
            ETH: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
            "0x60EBfD605Cb25C7796F729c78a4453ACeCb1CE03": {
              uniswapRouterBurner: "0x0D673c2b9e9523e71868dA0915316Ef175E19c57",
              uniswapRouterMinter: "0x064F3792Ccc17300357019f7191168f92acff049",
            },
          },
        };
    },
    467: function (e, t, n) {
      e.exports = n(875);
    },
    472: function (e, t, n) {},
    475: function (e) {
      e.exports = JSON.parse(
        '{"Wdex":{"address":"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0","abi":[{"inputs":[{"internalType":"address","name":"_dexIra","type":"address"},{"internalType":"address","name":"_dexShare","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ratioManager","type":"address"}],"name":"setRatioManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsManager","type":"address"}],"name":"setRewardsManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unwrapNoCollect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"wrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"WdexRatioCalculator":{"address":"0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9","abi":[{"inputs":[{"internalType":"address","name":"_a","type":"address"},{"internalType":"address","name":"_b","type":"address"},{"internalType":"address","name":"_wrapper","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAutomation","type":"address"},{"indexed":true,"internalType":"address","name":"newAutomation","type":"address"}],"name":"AutomationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"automation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"walletAddress","type":"address"}],"name":"calculateMaxWrappable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"calculateAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateUnwrap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateWrap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"_a","type":"int256"},{"internalType":"int256","name":"_b","type":"int256"}],"name":"setAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAutomation","type":"address"}],"name":"transferAutomation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"WdexRewardsManager":{"address":"0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9","abi":[{"inputs":[{"internalType":"address","name":"wrapper","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAutomation","type":"address"},{"indexed":true,"internalType":"address","name":"newAutomation","type":"address"}],"name":"AutomationTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CollectReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"wDexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWDex","type":"uint256"}],"name":"SetAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousWrapper","type":"address"},{"indexed":true,"internalType":"address","name":"newWrapper","type":"address"}],"name":"WrapperTransferred","type":"event"},{"inputs":[],"name":"automation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimableRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"}],"name":"claimableRewardsForToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"}],"name":"collectRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"logDisbursement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"wDexAmount","type":"uint256"},{"internalType":"uint256","name":"_totalWDex","type":"uint256"}],"name":"setAccount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardTokenAddress","type":"address"}],"name":"setRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAutomation","type":"address"}],"name":"transferAutomation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWrapper","type":"address"}],"name":"transferWrappable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrapper","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"DexSharesDexEtfRewardPool":{"address":"0x5FbDB2315678afecb367f032d93F642f64180aa3","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"drainPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeTires","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"},{"internalType":"uint256","name":"_runningTime","type":"uint256"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setFeeTiersEntry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enableFees","type":"bool"}],"name":"setFeesStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setStakingTiersEntry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingTires","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Bomb":{"address":"0xBbF7d5478840eE4fFcd4006fb50C1aEB1190eb39","abi":[{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"TaxOfficeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_DEX_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoCalculateTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_dexPool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersRatesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersTwapsCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setDex1Oracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxOffice","type":"address"}],"name":"setTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxCollectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxOffice","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersTwaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"UsDex":{"address":"0xBbF7d5478840eE4fFcd4006fb50C1aEB1190eb39","abi":[{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"TaxOfficeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_DEX_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoCalculateTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_dexPool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersRatesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersTwapsCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setDex1Oracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxOffice","type":"address"}],"name":"setTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxCollectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxOffice","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersTwaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"BShare":{"address":"0xE2D2A763cc9e65512166841FbA233535cf347B2D","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}]},"DexShare":{"address":"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}]},"BBond":{"address":"0xCb8F02C62a3AA6a7C782De46AB9B1b36C3812c39","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DexBond":{"address":"0xCb8F02C62a3AA6a7C782De46AB9B1b36C3812c39","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DexIra":{"address":"0x5FbDB2315678afecb367f032d93F642f64180aa3","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}]},"DexEtf":{"address":"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}]},"Treasury":{"address":"0x0C238b50d1a9CA1897839fe59bFa575079Bf6058","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"BoardroomFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"dexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BoughtBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BurnedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DaoFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DevFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"dexAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"RedeemedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"TreasuryFunded","type":"event"},{"inputs":[],"name":"PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bbond","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"boardroom","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"boardroomAllocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"boardroomGovernanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"boardroomSetLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"boardroomSetOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bondDepletionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dexAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"buyBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPriceCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPriceOne","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochSupplyContractionLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"excludedFromTotalSupply","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondDiscountRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondPremiumRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnableDexLeft","outputs":[{"internalType":"uint256","name":"_burnableDexLeft","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexPrice","outputs":[{"internalType":"uint256","name":"dexPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexUpdatedPrice","outputs":[{"internalType":"uint256","name":"_dexPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRedeemableBonds","outputs":[{"internalType":"uint256","name":"_redeemableBonds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"address","name":"_bbond","type":"address"},{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"address","name":"_dexOracle","type":"address"},{"internalType":"address","name":"_boardroom","type":"address"},{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_bondTreasury","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDebtRatioPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDiscountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxExpansionTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPremiumRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyContractionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintingFactorForPayingDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousEpochDexPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"redeemBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seigniorageExpansionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seigniorageSaved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_boardroom","type":"address"}],"name":"setBoardroom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondDepletionFloorPercent","type":"uint256"}],"name":"setBondDepletionFloorPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondSupplyExpansionPercent","type":"uint256"}],"name":"setBondSupplyExpansionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bondTreasury","type":"address"}],"name":"setBondTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bootstrapEpochs","type":"uint256"},{"internalType":"uint256","name":"_bootstrapSupplyExpansionPercent","type":"uint256"}],"name":"setBootstrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setDexOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dexPriceCeiling","type":"uint256"}],"name":"setDexPriceCeiling","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountPercent","type":"uint256"}],"name":"setDiscountPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_daoFund","type":"address"},{"internalType":"uint256","name":"_daoFundSharedPercent","type":"uint256"},{"internalType":"address","name":"_devFund","type":"address"},{"internalType":"uint256","name":"_devFundSharedPercent","type":"uint256"}],"name":"setExtraFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDebtRatioPercent","type":"uint256"}],"name":"setMaxDebtRatioPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDiscountRate","type":"uint256"}],"name":"setMaxDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxExpansionTiersEntry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPremiumRate","type":"uint256"}],"name":"setMaxPremiumRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyContractionPercent","type":"uint256"}],"name":"setMaxSupplyContractionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyExpansionPercent","type":"uint256"}],"name":"setMaxSupplyExpansionPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintingFactorForPayingDebt","type":"uint256"}],"name":"setMintingFactorForPayingDebt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumPercent","type":"uint256"}],"name":"setPremiumPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumThreshold","type":"uint256"}],"name":"setPremiumThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setSupplyTiersEntry","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supplyTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]},"Oracle":{"address":"0x6045d0E0DE1673a32E975939CCF45C157daEAAe6","abi":[{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"}],"name":"Updated","type":"event"},{"inputs":[],"name":"blockTimestampLast","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastEpochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epoch","type":"uint256"}],"name":"setEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"twap","outputs":[{"internalType":"uint144","name":"_amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Boardroom":{"address":"0xd0C286b755d7C5Add1372f8D478eC606Aaf04533","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"boardroomHistory","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"rewardReceived","type":"uint256"},{"internalType":"uint256","name":"rewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"canClaimReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getDexPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"getLastSnapshotIndexOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPegRegulationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_dex","type":"address"},{"internalType":"contract IERC20","name":"_share","type":"address"},{"internalType":"contract ITreasury","name":"_treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestSnapshotIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"members","outputs":[{"internalType":"uint256","name":"lastSnapshotIndex","type":"uint256"},{"internalType":"uint256","name":"rewardEarned","type":"uint256"},{"internalType":"uint256","name":"epochTimerStart","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pegRegulationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"setLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pegRegulationAddress","type":"address"}],"name":"setPegRegulationAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"share","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]},"TaxOffice":{"address":"0xF627FcE4649F64f56E47454d6c5Afe8d1F2d7d7a","abi":[{"inputs":[{"internalType":"address","name":"_df1","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"},{"internalType":"address","name":"_pair","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"df1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDf1Balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWbnbBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_df1","type":"address"}],"name":"setDf1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"setPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wbnb","type":"address"}],"name":"setWbnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wbnb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"TaxOfficeV2":{"address":"0x3b19F80817bCBC4c363dDCD7d3B120863Ad1622D","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"amtDex","type":"uint256"},{"internalType":"uint256","name":"amtDexMin","type":"uint256"},{"internalType":"uint256","name":"amtEthMin","type":"uint256"}],"name":"addLiquidityETHTaxFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amtDex","type":"uint256"},{"internalType":"uint256","name":"amtToken","type":"uint256"},{"internalType":"uint256","name":"amtDexMin","type":"uint256"},{"internalType":"uint256","name":"amtTokenMin","type":"uint256"}],"name":"addLiquidityTaxFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddressFromTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddressInTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setTaxExclusionForAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dexOracle","type":"address"}],"name":"setTaxableDexOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxExclusionEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"taxFreeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTaxOffice","type":"address"}],"name":"transferTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"TaxOracle":{"address":"0xF5a1E19AE1bC0422f1669E6892703Bca36e919c9","abi":[{"inputs":[{"internalType":"address","name":"_df1","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"},{"internalType":"address","name":"_pair","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"df1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDf1Balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWbnbBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_df1","type":"address"}],"name":"setDf1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"}],"name":"setPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wbnb","type":"address"}],"name":"setWbnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wbnb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]},"RebateTreasury":{"address":"0x0778eC6D2774651B2F790D95945D9CD0f3585B7a","abi":[{"inputs":[{"internalType":"address","name":"dex","type":"address"},{"internalType":"address","name":"dexOracle","type":"address"},{"internalType":"address","name":"treasury","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DexOracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"assets","outputs":[{"internalType":"bool","name":"isAdded","type":"bool"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"bool","name":"isLP","type":"bool"},{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bondFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondVesting","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buybackAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"claimableDex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondPremium","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDexPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getDexReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBuyback","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"redeemAssetsForBuyback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondaryFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"secondaryThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"isAdded","type":"bool"},{"internalType":"uint256","name":"multiplier","type":"uint256"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"bool","name":"isLP","type":"bool"},{"internalType":"address","name":"pair","type":"address"}],"name":"setAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"primaryThreshold","type":"uint256"},{"internalType":"uint256","name":"primaryFactor","type":"uint256"},{"internalType":"uint256","name":"secondThreshold","type":"uint256"},{"internalType":"uint256","name":"secondFactor","type":"uint256"},{"internalType":"uint256","name":"vestingPeriod","type":"uint256"}],"name":"setBondParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dex","type":"address"}],"name":"setDex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oracle","type":"address"}],"name":"setDexOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalVested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"vesting","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"period","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimed","type":"uint256"}],"stateMutability":"view","type":"function"}]},"UsDexGenesisRewardPool":{"address":"0x92381f4093F72a77B2289dEA940699C711Ab3526","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDexPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"BombRewardPool":{"address":"0xb6AB16735D127eF0a21B6d54D09Ede5195ca48F9","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochDexPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDexPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DexRewardPool":{"address":"0xb6AB16735D127eF0a21B6d54D09Ede5195ca48F9","abi":[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dex","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochDexPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDexPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"BShareRewardPool":{"address":"0x047dd90F631148fABb5E71D1db612C6054a4dB87","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"DesxhareBnbLPDedshareRewardPool":{"address":"0x047dd90F631148fABb5E71D1db612C6054a4dB87","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"UsdexBusdLPDexshareRewardPool":{"address":"0x047dd90F631148fABb5E71D1db612C6054a4dB87","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"WDexDexShareLPDexshareRewardPool":{"address":"0x047dd90F631148fABb5E71D1db612C6054a4dB87","abi":[{"inputs":[{"internalType":"address","name":"_dexshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dexshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accDEXSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Zapper":{"address":"0x59d926782F8A751D6fadd7B6abA8082b5D17fc98","abi":[{"inputs":[{"internalType":"address","name":"_WNATIVE","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fee_to","type":"address"},{"indexed":false,"internalType":"uint16","name":"rate","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"min","type":"uint16"}],"name":"FeeChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"uint16","name":"min","type":"uint16"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"bridgeToken","type":"address"}],"name":"setTokenBridgeForRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setUseNativeRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"useNativeRouter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_toRouter","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapAcross","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapIn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapInToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"ZapperV2":{"address":"0x5Df680526fCfed2B7AF8f0e81C73b187d4C84713","abi":[{"inputs":[{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_WBNB","type":"address"},{"internalType":"address","name":"_TOKEN","type":"address"},{"internalType":"address","name":"_SHARE","type":"address"},{"internalType":"address","name":"_USDC","type":"address"},{"internalType":"address","name":"_PEGLP","type":"address"},{"internalType":"address","name":"_SHARELP","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"approveNewInputToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"breakLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"delAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAddressLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressOf","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"routePair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"route","type":"address"}],"name":"setRoutePairAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelisterRole","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"zapBNBToLP","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"zapTokenToLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]},"SpookyRouter":{"address":"0x10ED43C718714eb63d5aA57B78B54704E256024E","abi":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}}'
      );
    },
    478: function (e, t) {},
    485: function (e, t) {},
    502: function (e, t) {},
    506: function (e, t) {},
    510: function (e, t) {},
    511: function (e, t) {},
    527: function (e, t) {},
    529: function (e, t) {},
    538: function (e, t) {},
    540: function (e, t) {},
    549: function (e, t) {},
    551: function (e, t) {},
    566: function (e, t) {},
    599: function (e, t) {},
    616: function (e, t) {},
    624: function (e, t) {},
    67: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return i;
      }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return r;
        });
      var a = n(48),
        i = Object(a.b)("app/updateBlockNumber"),
        u = Object(a.b)("app/toggleWalletModal"),
        s = Object(a.b)("app/toggleSettingsMenu"),
        p = Object(a.b)("app/addPopup"),
        r = Object(a.b)("app/removePopup");
    },
    683: function (e, t) {},
    720: function (e, t) {},
    722: function (e, t) {},
    729: function (e, t) {},
    730: function (e, t) {},
    754: function (e, t) {},
    761: function (e, t) {},
    835: function (e, t) {},
    85: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return y;
      }),
        n.d(t, "a", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return d;
        });
      var a = n(11),
        i = n(135),
        u = n.n(i),
        s = {
          testing: !1,
          autoGasMultiplier: 1.5,
          defaultConfirmations: 3,
          defaultGas: "6000000",
          defaultGasPrice: "7000000000000",
          ethereumNodeTimeout: 1e4,
        },
        p = n(53);
      function r() {
        r = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (k) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function y(e, t, n, a) {
          var i = t && t.prototype instanceof l ? t : l,
            u = Object.create(i.prototype),
            s = new g(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return E();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = M(s, n);
                    if (p) {
                      if (p === d) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = o(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === d)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function o(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = y;
        var d = {};
        function l() {}
        function m() {}
        function c() {}
        var T = {};
        p(T, i, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          f = b && b(b(O([])));
        f && f !== t && n.call(f, i) && (T = f);
        var v = (c.prototype = l.prototype = Object.create(T));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = o(e[i], e, u);
                  if ("throw" !== r.type) {
                    var y = r.arg,
                      d = y.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (y.value = e), s(y);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function M(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                M(e, t),
                "throw" === t.method)
              )
                return d;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var a = o(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function g(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = c),
          p(v, "constructor", c),
          p(c, "constructor", m),
          (m.displayName = p(c, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(h.prototype),
          p(h.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new h(y(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          w(v),
          p(v, s, "Generator"),
          p(v, i, function () {
            return this;
          }),
          p(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = O),
          (g.prototype = {
            constructor: g,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), d)
                  : this.complete(s)
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
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), A(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function y(e, t) {
        var n = Object.assign(s, t || {});
        return new (
          e.includes("wss")
            ? u.a.providers.WebsocketProvider
            : u.a.providers.HttpProvider
        )(e, { timeout: n.ethereumNodeTimeout });
      }
      function o(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return Object(p.parseUnits)(String(e), t);
      }
      function d(e) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = Object(a.a)(
          r().mark(function e(t) {
            var n, a, i;
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n =
                        "https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=" +
                        t +
                        "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false"),
                      (e.next = 3),
                      fetch(n)
                    );
                  case 3:
                    if (!(a = e.sent).ok) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 7), a.json();
                  case 7:
                    return (
                      (i = e.sent),
                      e.abrupt("return", {
                        usd: i[t].usd.toString(),
                        usd_24_vol: i[t].usd_24h_vol.toString(),
                        usd_24_percent: i[t].usd_24h_change.toString(),
                      })
                    );
                  case 11:
                    return (
                      console.error(
                        "Unable to fetch coingecko stats for address " + t
                      ),
                      e.abrupt("return", null)
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    875: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        u = n(79),
        s = n.n(u),
        p = (n(472), n(55)),
        r = n(286),
        y = n(40),
        o = n(906),
        d = n(37),
        l = n(68),
        m = n(11),
        c = n(26),
        T = n(34);
      function b() {
        b = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (k) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function r(e, t, n, a) {
          var i = t && t.prototype instanceof d ? t : d,
            u = Object.create(i.prototype),
            s = new g(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return E();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = M(s, n);
                    if (p) {
                      if (p === o) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = y(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === o)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function y(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = r;
        var o = {};
        function d() {}
        function l() {}
        function m() {}
        var c = {};
        p(c, i, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          f = T && T(T(O([])));
        f && f !== t && n.call(f, i) && (c = f);
        var v = (m.prototype = d.prototype = Object.create(c));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function h(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = y(e[i], e, u);
                  if ("throw" !== r.type) {
                    var o = r.arg,
                      d = o.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (o.value = e), s(o);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function M(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                M(e, t),
                "throw" === t.method)
              )
                return o;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return o;
          }
          var a = y(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), o
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                o)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              o);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function g(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (l.prototype = m),
          p(v, "constructor", m),
          p(m, "constructor", l),
          (l.displayName = p(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === l || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(h.prototype),
          p(h.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = h),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new h(r(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          w(v),
          p(v, s, "Generator"),
          p(v, i, function () {
            return this;
          }),
          p(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = O),
          (g.prototype = {
            constructor: g,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), o)
                  : this.complete(s)
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
                o
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), A(n), o;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    A(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                o
              );
            },
          }),
          e
        );
      }
      var f = function () {
          var e = Object(a.useState)(!1),
            t = Object(c.a)(e, 2),
            n = t[0],
            i = t[1],
            u = window.ethereum,
            s = (function () {
              var e = Object(m.a)(
                b().mark(function e(t) {
                  return b().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.request({
                              method: "wallet_addEthereumChain",
                              params: [
                                {
                                  chainId: "0x".concat(
                                    T.b.chainId.toString(16)
                                  ),
                                  chainName: T.b.networkName,
                                  nativeCurrency: {
                                    name: "BNB",
                                    symbol: "BNB",
                                    decimals: 18,
                                  },
                                  rpcUrls: [T.b.defaultProvider],
                                  blockExplorerUrls: [T.b.ftmscanUrl],
                                },
                              ],
                            })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(a.useEffect)(
            function () {
              n ||
                (u &&
                  u.networkVersion !== T.b.chainId.toString() &&
                  (s(u), i(!0)));
            },
            [n, u]
          );
        },
        v = n(298),
        w = n(223),
        h = n(290),
        M = n(69),
        x = n(48),
        A = n(275),
        g = n(111),
        O = function () {
          return new Date().getTime();
        },
        E = Object(x.d)({}, function (e) {
          return e
            .addCase(g.a, function (e, t) {
              var n,
                a,
                i = t.payload,
                u = i.chainId,
                s = i.from,
                p = i.hash,
                r = i.approval,
                y = i.summary;
              if (null === (n = e[u]) || void 0 === n ? void 0 : n[p])
                throw Error("Attempted to add existing transaction.");
              var o = null !== (a = e[u]) && void 0 !== a ? a : {};
              (o[p] = {
                hash: p,
                approval: r,
                summary: y,
                from: s,
                addedTime: O(),
              }),
                (e[u] = o);
            })
            .addCase(g.c, function (e, t) {
              var n = t.payload.chainId;
              e[n] && (e[n] = {});
            })
            .addCase(g.b, function (e, t) {
              var n,
                a = t.payload,
                i = a.chainId,
                u = a.hash,
                s = a.blockNumber,
                p = null === (n = e[i]) || void 0 === n ? void 0 : n[u];
              p &&
                (p.lastCheckedBlockNumber
                  ? (p.lastCheckedBlockNumber = Math.max(
                      s,
                      p.lastCheckedBlockNumber
                    ))
                  : (p.lastCheckedBlockNumber = s));
            })
            .addCase(g.d, function (e, t) {
              var n,
                a = t.payload,
                i = a.hash,
                u = a.chainId,
                s = a.receipt,
                p = null === (n = e[u]) || void 0 === n ? void 0 : n[i];
              p && ((p.receipt = s), (p.confirmedTime = O()));
            });
        }),
        k = n(67),
        _ = Object(x.d)(
          {
            blockNumber: {},
            popupList: [],
            walletModalOpen: !1,
            settingsMenuOpen: !1,
          },
          function (e) {
            return e
              .addCase(k.e, function (e, t) {
                var n = t.payload,
                  a = n.chainId,
                  i = n.blockNumber;
                "number" !== typeof e.blockNumber[a]
                  ? (e.blockNumber[a] = i)
                  : (e.blockNumber[a] = Math.max(i, e.blockNumber[a]));
              })
              .addCase(k.d, function (e) {
                e.walletModalOpen = !e.walletModalOpen;
              })
              .addCase(k.c, function (e) {
                e.settingsMenuOpen = !e.settingsMenuOpen;
              })
              .addCase(k.a, function (e, t) {
                var n = t.payload,
                  a = n.content,
                  i = n.key,
                  u = n.removeAfterMs,
                  s = void 0 === u ? 15e3 : u;
                e.popupList = (
                  i
                    ? e.popupList.filter(function (e) {
                        return e.key !== i;
                      })
                    : e.popupList
                ).concat([
                  {
                    key: i || Object(x.g)(),
                    show: !0,
                    content: a,
                    removeAfterMs: s,
                  },
                ]);
              })
              .addCase(k.b, function (e, t) {
                var n = t.payload.key;
                e.popupList.forEach(function (e) {
                  e.key === n && (e.show = !1);
                });
              });
          }
        ),
        P = ["transactions"],
        D = Object(x.a)({
          reducer: { application: _, transactions: E },
          middleware: [].concat(Object(M.a)(Object(x.f)({ thunk: !1 })), [
            Object(A.save)({ states: P }),
          ]),
          preloadedState: Object(A.load)({ states: P }),
        }),
        S = {
          color: {
            black: "#000",
            grey: {
              100: "#f5f5f5",
              200: "#eeeeee",
              300: "#e0e0e0",
              400: "#bdbdbd",
              500: "#9e9e9e",
              600: "#757575",
              700: "#616161",
              800: "#424242",
              900: "#212121",
            },
            yellow: { 200: "#ffdb4d", 400: "#ab47bc", 700: "#e6b800" },
            primary: {
              light: "#7575FF",
              main: "".concat("#8b67d3"),
              text: "#FFFFFF",
            },
            secondary: { main: "".concat("#8b67d3") },
            white: "#FFF",
            teal: { 200: "#64ffda" },
            newNavy: { 200: "171923" },
          },
          siteWidth: 1200,
          spacing: { 1: 4, 2: 8, 3: 16, 4: 24, 5: 32, 6: 48, 7: 64 },
          topBarSize: 72,
        },
        R = n(289);
      var B = "visibilityState" in document;
      function I() {
        return !B || "hidden" !== document.visibilityState;
      }
      var F = n(152);
      function C() {
        var e = Object(l.c)(),
          t = e.ethereum,
          n = e.chainId,
          i = Object(p.c)(),
          u = (function () {
            var e = Object(a.useState)(I()),
              t = Object(c.a)(e, 2),
              n = t[0],
              i = t[1],
              u = Object(a.useCallback)(
                function () {
                  i(I());
                },
                [i]
              );
            return (
              Object(a.useEffect)(
                function () {
                  if (B)
                    return (
                      document.addEventListener("visibilitychange", u),
                      function () {
                        document.removeEventListener("visibilitychange", u);
                      }
                    );
                },
                [u]
              ),
              n
            );
          })(),
          s = Object(a.useState)({ chainId: n, blockNumber: null }),
          r = Object(c.a)(s, 2),
          y = r[0],
          o = r[1],
          d = Object(a.useCallback)(
            function (e) {
              o(function (t) {
                return n === t.chainId
                  ? "number" !== typeof t.blockNumber
                    ? { chainId: n, blockNumber: e }
                    : { chainId: n, blockNumber: Math.max(e, t.blockNumber) }
                  : t;
              });
            },
            [n, o]
          );
        Object(a.useEffect)(
          function () {
            if (t && n && u) {
              o({ chainId: n, blockNumber: null });
              var e = Object(F.a)();
              return (
                e
                  .getBlockNumber()
                  .then(d)
                  .catch(function (e) {
                    return console.error(
                      "Failed to get block number for chainId: ".concat(n),
                      e
                    );
                  }),
                e.on("block", d),
                function () {
                  return e.removeListener("block", d);
                }
              );
            }
          },
          [i, n, t, d, u]
        );
        var m = (function (e, t) {
          var n = Object(a.useState)(e),
            i = Object(c.a)(n, 2),
            u = i[0],
            s = i[1];
          return (
            Object(a.useEffect)(
              function () {
                var n = setTimeout(function () {
                  s(e);
                }, t);
                return function () {
                  clearTimeout(n);
                };
              },
              [e, t]
            ),
            u
          );
        })(y, 100);
        return (
          Object(a.useEffect)(
            function () {
              m.chainId &&
                m.blockNumber &&
                u &&
                i(
                  Object(k.e)({
                    chainId: m.chainId,
                    blockNumber: m.blockNumber,
                  })
                );
            },
            [u, i, m.blockNumber, m.chainId]
          ),
          null
        );
      }
      var L = n(125);
      function N() {
        var e,
          t = Object(l.c)(),
          n = t.chainId,
          i = t.ethereum,
          u = Object(L.c)(),
          s = Object(p.c)(),
          r = Object(p.d)(function (e) {
            return e.transactions;
          }),
          y = n && null !== (e = r[n]) && void 0 !== e ? e : {},
          o = Object(L.b)();
        return (
          Object(a.useEffect)(
            function () {
              if (n && i && u) {
                var e = Object(F.a)();
                Object.keys(y)
                  .filter(function (e) {
                    return (function (e, t) {
                      if (t.receipt) return !1;
                      if (!t.lastCheckedBlockNumber) return !0;
                      var n = e - t.lastCheckedBlockNumber;
                      if (n < 1) return !1;
                      var a = (new Date().getTime() - t.addedTime) / 1e3 / 60;
                      return a > 60 ? n > 9 : !(a > 5) || n > 2;
                    })(u, y[e]);
                  })
                  .forEach(function (t) {
                    e.getTransactionReceipt(t)
                      .then(function (e) {
                        var a;
                        e
                          ? (s(
                              Object(g.d)({
                                chainId: n,
                                hash: t,
                                receipt: {
                                  blockHash: e.blockHash,
                                  blockNumber: e.blockNumber,
                                  contractAddress: e.contractAddress,
                                  from: e.from,
                                  status: e.status,
                                  to: e.to,
                                  transactionHash: e.transactionHash,
                                  transactionIndex: e.transactionIndex,
                                },
                              })
                            ),
                            o(
                              {
                                txn: {
                                  hash: t,
                                  success: 1 === e.status,
                                  summary:
                                    null === (a = y[t]) || void 0 === a
                                      ? void 0
                                      : a.summary,
                                },
                              },
                              t
                            ))
                          : s(
                              Object(g.b)({
                                chainId: n,
                                hash: t,
                                blockNumber: u,
                              })
                            );
                      })
                      .catch(function (e) {
                        console.error(
                          "failed to check transaction hash: ".concat(t),
                          e
                        );
                      });
                  });
              }
            },
            [n, i, y, u, s, o]
          ),
          null
        );
      }
      var U,
        j,
        W,
        H = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(C, null),
            i.a.createElement(N, null)
          );
        },
        X = n(900),
        G = function () {
          return i.a.createElement(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
            i.a.createElement(X.a, null, "Loading...")
          );
        },
        V = n(43),
        Q = n(905),
        q = n(222),
        z = n(903),
        Y = n(904),
        J = d.e.div(U || (U = Object(V.a)(["\n  flex-wrap: nowrap;\n"])));
      function Z(e) {
        var t = e.hash,
          n = e.success,
          u = e.summary,
          s = Object(l.c)().chainId,
          p = Object(a.useContext)(d.a);
        return i.a.createElement(
          J,
          null,
          i.a.createElement(
            "div",
            { style: { paddingRight: 16 } },
            n
              ? i.a.createElement(z.a, { color: p.color.teal[200], size: 24 })
              : i.a.createElement(Y.a, { color: "#FF6871", size: 24 })
          ),
          i.a.createElement(
            "div",
            null,
            i.a.createElement(
              te,
              null,
              null !== u && void 0 !== u
                ? u
                : "Hash: " + t.slice(0, 8) + "..." + t.slice(58, 65)
            ),
            s &&
              i.a.createElement(
                ne,
                {
                  target: "_blank",
                  href: "".concat(T.b.ftmscanUrl, "/tx/").concat(t),
                },
                "View on BSCscan"
              )
          )
        );
      }
      var K,
        $,
        ee,
        te = d.e.span(
          j || (j = Object(V.a)(["\n  font-weight: 500;\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[300];
          }
        ),
        ne = d.e.a(
          W || (W = Object(V.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[500];
          }
        );
      function ae() {
        ae = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function p(e, t, n) {
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
          p({}, "");
        } catch (E) {
          p = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function r(e, t, n, a) {
          var i = t && t.prototype instanceof d ? t : d,
            u = Object.create(i.prototype),
            s = new A(a || []);
          return (
            (u._invoke = (function (e, t, n) {
              var a = "suspendedStart";
              return function (i, u) {
                if ("executing" === a)
                  throw new Error("Generator is already running");
                if ("completed" === a) {
                  if ("throw" === i) throw u;
                  return O();
                }
                for (n.method = i, n.arg = u; ; ) {
                  var s = n.delegate;
                  if (s) {
                    var p = h(s, n);
                    if (p) {
                      if (p === o) continue;
                      return p;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === a)
                      throw ((a = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  a = "executing";
                  var r = y(e, t, n);
                  if ("normal" === r.type) {
                    if (
                      ((a = n.done ? "completed" : "suspendedYield"),
                      r.arg === o)
                    )
                      continue;
                    return { value: r.arg, done: n.done };
                  }
                  "throw" === r.type &&
                    ((a = "completed"), (n.method = "throw"), (n.arg = r.arg));
                }
              };
            })(e, n, s)),
            u
          );
        }
        function y(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = r;
        var o = {};
        function d() {}
        function l() {}
        function m() {}
        var c = {};
        p(c, i, function () {
          return this;
        });
        var T = Object.getPrototypeOf,
          b = T && T(T(g([])));
        b && b !== t && n.call(b, i) && (c = b);
        var f = (m.prototype = d.prototype = Object.create(c));
        function v(e) {
          ["next", "throw", "return"].forEach(function (t) {
            p(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var a;
          this._invoke = function (i, u) {
            function s() {
              return new t(function (a, s) {
                !(function a(i, u, s, p) {
                  var r = y(e[i], e, u);
                  if ("throw" !== r.type) {
                    var o = r.arg,
                      d = o.value;
                    return d && "object" == typeof d && n.call(d, "__await")
                      ? t.resolve(d.__await).then(
                          function (e) {
                            a("next", e, s, p);
                          },
                          function (e) {
                            a("throw", e, s, p);
                          }
                        )
                      : t.resolve(d).then(
                          function (e) {
                            (o.value = e), s(o);
                          },
                          function (e) {
                            return a("throw", e, s, p);
                          }
                        );
                  }
                  p(r.arg);
                })(i, u, a, s);
              });
            }
            return (a = a ? a.then(s, s) : s());
          };
        }
        function h(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                h(e, t),
                "throw" === t.method)
              )
                return o;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return o;
          }
          var a = y(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), o
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                o)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              o);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function g(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                u = function t() {
                  for (; ++a < e.length; )
                    if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (u.next = u);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (l.prototype = m),
          p(f, "constructor", m),
          p(m, "constructor", l),
          (l.displayName = p(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === l || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), p(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(f)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          v(w.prototype),
          p(w.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, a, i, u) {
            void 0 === u && (u = Promise);
            var s = new w(r(t, n, a, i), u);
            return e.isGeneratorFunction(n)
              ? s
              : s.next().then(function (e) {
                  return e.done ? e.value : s.next();
                });
          }),
          v(f),
          p(f, s, "Generator"),
          p(f, i, function () {
            return this;
          }),
          p(f, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var a = t.pop();
                  if (a in e) return (n.value = a), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = g),
          (A.prototype = {
            constructor: A,
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
              function a(n, a) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (t.next = n),
                  a && ((t.method = "next"), (t.arg = void 0)),
                  !!a
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var u = this.tryEntries[i],
                  s = u.completion;
                if ("root" === u.tryLoc) return a("end");
                if (u.tryLoc <= this.prev) {
                  var p = n.call(u, "catchLoc"),
                    r = n.call(u, "finallyLoc");
                  if (p && r) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  } else if (p) {
                    if (this.prev < u.catchLoc) return a(u.catchLoc, !0);
                  } else {
                    if (!r)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < u.finallyLoc) return a(u.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var u = i;
                  break;
                }
              }
              u &&
                ("break" === e || "continue" === e) &&
                u.tryLoc <= t &&
                t <= u.finallyLoc &&
                (u = null);
              var s = u ? u.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                u
                  ? ((this.method = "next"), (this.next = u.finallyLoc), o)
                  : this.complete(s)
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
                o
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), o;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var a = n.completion;
                  if ("throw" === a.type) {
                    var i = a.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: g(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                o
              );
            },
          }),
          e
        );
      }
      var ie = d.e.div(K || (K = Object(V.a)(["\n  flex-wrap: nowrap;\n"])));
      function ue(e) {
        var t = e.message,
          n = e.stack,
          u = Object(a.useCallback)(
            Object(m.a)(
              ae().mark(function e() {
                return ae().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          navigator.clipboard.writeText(
                            "".concat(t, "\n").concat(n)
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [t, n]
          );
        return i.a.createElement(
          ie,
          null,
          i.a.createElement(
            "div",
            { style: { paddingRight: 16 } },
            i.a.createElement(Y.a, { color: "#FF6871", size: 24 })
          ),
          i.a.createElement(
            "div",
            null,
            i.a.createElement(le, null, t),
            i.a.createElement(
              me,
              { onClick: u, href: "#" },
              "Copy error details"
            )
          )
        );
      }
      var se,
        pe,
        re,
        ye,
        oe,
        de,
        le = d.e.span(
          $ || ($ = Object(V.a)(["\n  font-weight: 500;\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[300];
          }
        ),
        me = d.e.a(
          ee || (ee = Object(V.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[500];
          }
        ),
        ce = Object(d.e)(Q.a)(
          se ||
            (se = Object(V.a)([
              "\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n",
            ]))
        ),
        Te = d.e.div(
          pe ||
            (pe = Object(V.a)([
              "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
              ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  @media (max-width: 768px) {\n    min-width: 290px;\n  }\n",
            ])),
          function (e) {
            return e.theme.color.grey[700];
          }
        ),
        be = d.e.div(
          re ||
            (re = Object(V.a)([
              "\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        fe = Object(q.a)(be);
      function ve(e) {
        var t = e.removeAfterMs,
          n = e.content,
          u = e.popKey,
          s = Object(L.d)(),
          p = Object(a.useCallback)(
            function () {
              return s(u);
            },
            [u, s]
          );
        Object(a.useEffect)(
          function () {
            if (null !== t) {
              var e = setTimeout(function () {
                p();
              }, t);
              return function () {
                clearTimeout(e);
              };
            }
          },
          [t, p]
        );
        var r,
          y = Object(a.useContext)(d.a);
        if ("txn" in n) {
          var o = n.txn,
            l = o.hash,
            m = o.success,
            c = o.summary;
          r = i.a.createElement(Z, { hash: l, success: m, summary: c });
        }
        if ("error" in n) {
          var T = n.error,
            b = T.message,
            f = T.stack;
          r = i.a.createElement(ue, { message: b, stack: f });
        }
        var v = Object(q.b)({
          from: { width: "100%" },
          to: { width: "0%" },
          config: { duration: null !== t && void 0 !== t ? t : void 0 },
        });
        return i.a.createElement(
          Te,
          null,
          i.a.createElement(ce, { color: y.text2, onClick: p }),
          r,
          null !== t ? i.a.createElement(fe, { style: v }) : null
        );
      }
      var we = d.e.div(
          ye ||
            (ye = Object(V.a)([
              "\n  position: relative;\n  max-width: 100%;\n  height: ",
              ";\n  margin: ",
              ";\n  margin-bottom: ",
              "};\n\n  display: none;\n  @media (max-width: 768px) {\n    display: block;\n  };\n",
            ])),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.height ? "0 auto;" : 0;
          },
          function (e) {
            return e.height ? "20px" : 0;
          }
        ),
        he = d.e.div(
          oe ||
            (oe = Object(V.a)([
              "\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
            ]))
        ),
        Me = d.e.div(
          de ||
            (de = Object(V.a)([
              "\n  position: fixed;\n  top: 64px;\n  margin-right: 24px;\n  right: 3rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  @media (max-width: 768px) {\n    display: none;\n  } ;\n",
            ]))
        );
      function xe() {
        var e = Object(L.a)();
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            Me,
            null,
            e.map(function (e) {
              return i.a.createElement(ve, {
                key: e.key,
                content: e.content,
                popKey: e.key,
                removeAfterMs: e.removeAfterMs,
              });
            })
          ),
          i.a.createElement(
            we,
            {
              height:
                (null === e || void 0 === e ? void 0 : e.length) > 0
                  ? "fit-content"
                  : 0,
            },
            i.a.createElement(
              he,
              null,
              e
                .slice(0)
                .reverse()
                .map(function (e) {
                  return i.a.createElement(ve, {
                    key: e.key,
                    content: e.content,
                    popKey: e.key,
                    removeAfterMs: e.removeAfterMs,
                  });
                })
            )
          )
        );
      }
      var Ae = n(291),
        ge = n(451),
        Oe = n.n(ge),
        Ee = n(285),
        ke = n(123),
        _e = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(2), n.e(3), n.e(7), n.e(16)]).then(
            n.bind(null, 2135)
          );
        }),
        Pe = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(2), n.e(3), n.e(7), n.e(15)]).then(
            n.bind(null, 2131)
          );
        }),
        De = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(29), n.e(1), n.e(5), n.e(24)]).then(
            n.bind(null, 2136)
          );
        }),
        Se = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(6), n.e(1), n.e(32)]).then(
            n.bind(null, 2139)
          );
        }),
        Re = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(5), n.e(28)]).then(
            n.bind(null, 2140)
          );
        }),
        Be = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(6), n.e(1), n.e(33)]).then(
            n.bind(null, 2141)
          );
        }),
        Ie = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(2), n.e(25), n.e(1), n.e(30)]).then(
            n.bind(null, 2130)
          );
        }),
        Fe = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(4), n.e(8), n.e(23), n.e(20)]).then(
            n.bind(null, 2132)
          );
        }),
        Ce = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(22)]).then(
            n.bind(null, 2137)
          );
        }),
        Le = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(31)]).then(
            n.bind(null, 2142)
          );
        }),
        Ne = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(4), n.e(8), n.e(14), n.e(18)]).then(
            n.bind(null, 2129)
          );
        }),
        Ue =
          (Object(a.lazy)(function () {
            return Promise.all([n.e(0), n.e(2), n.e(3), n.e(4), n.e(19)]).then(
              n.bind(null, 2133)
            );
          }),
          Object(a.lazy)(function () {
            return Promise.all([n.e(0), n.e(2), n.e(3), n.e(1), n.e(27)]).then(
              n.bind(null, 2146)
            );
          })),
        je = function () {
          return i.a.createElement(
            "h3",
            {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
            "URL Not Found. ",
            i.a.createElement("a", { href: "/" }, "Go back home.")
          );
        },
        We = function (e) {
          var t = e.children;
          return i.a.createElement(
            d.b,
            { theme: S },
            i.a.createElement(
              o.a,
              { theme: R.a },
              i.a.createElement(
                l.a,
                {
                  chainId: T.b.chainId,
                  connectors: {
                    walletconnect: { rpcUrl: T.b.defaultProvider },
                    walletlink: {
                      url: T.b.defaultProvider,
                      appName: "dexfinance.com",
                      appLogoUrl: Oe.a,
                    },
                  },
                },
                i.a.createElement(
                  p.a,
                  { store: D },
                  i.a.createElement(H, null),
                  i.a.createElement(
                    Ae.b,
                    null,
                    i.a.createElement(
                      w.b,
                      null,
                      i.a.createElement(
                        h.b,
                        null,
                        i.a.createElement(
                          v.b,
                          null,
                          i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(xe, null),
                            t
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        He = function () {
          return (
            ("undefined" !== typeof localStorage.version_app &&
              "1.1" === localStorage.version_app) ||
              (localStorage.clear(),
              localStorage.setItem("connectorId", ""),
              localStorage.setItem("version_app", "1.1")),
            f(),
            i.a.createElement(
              Ee.ToastProvider,
              {
                autoDismiss: !0,
                autoDismissTimeout: 6e3,
                placement: "bottom-right",
              },
              i.a.createElement(
                We,
                null,
                i.a.createElement(
                  ke.a,
                  null,
                  i.a.createElement(
                    r.a,
                    null,
                    i.a.createElement(
                      a.Suspense,
                      { fallback: i.a.createElement(G, null) },
                      i.a.createElement(
                        y.c,
                        null,
                        i.a.createElement(
                          y.a,
                          { exact: !0, path: "/" },
                          i.a.createElement(_e, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/farm" },
                          i.a.createElement(Pe, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/regulation" },
                          i.a.createElement(De, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/bond" },
                          i.a.createElement(Se, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/pad" },
                          i.a.createElement(Be, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/wrap" },
                          i.a.createElement(Re, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/etf" },
                          i.a.createElement(Ie, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/dexpad" },
                          i.a.createElement(Fe, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/dexDao" },
                          i.a.createElement(Le, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/dexIRA" },
                          i.a.createElement(Ce, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/predictions" },
                          i.a.createElement(Ne, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "/zapdexira" },
                          i.a.createElement(Ue, null)
                        ),
                        i.a.createElement(
                          y.a,
                          { path: "*" },
                          i.a.createElement(je, null)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(
        i.a.createElement(i.a.StrictMode, null, i.a.createElement(He, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[467, 10, 11]],
]);
