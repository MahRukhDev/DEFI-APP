/*!For license information please see 8.3ce5fe15.chunk.js.LICENSE.txt*/ (this[
  "webpackJsonpdexfinance-frontend"
] = this["webpackJsonpdexfinance-frontend"] || []).push([
  [8],
  {
    1026: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return U;
      }),
        t.d(n, "b", function () {
          return Y;
        }),
        t.d(n, "c", function () {
          return X;
        }),
        t.d(n, "d", function () {
          return B;
        });
      var r = t(0);
      function i(e, n, t, r) {
        return new (t || (t = Promise))(function (i, u) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (n) {
              u(n);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (n) {
              u(n);
            }
          }
          function c(e) {
            var n;
            e.done
              ? i(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(o, a);
          }
          c((r = r.apply(e, n || [])).next());
        });
      }
      function u(e, n) {
        var t,
          r,
          i,
          u,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (u = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (u[Symbol.iterator] = function () {
              return this;
            }),
          u
        );
        function a(u) {
          return function (a) {
            return (function (u) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (i =
                        2 & u[0]
                          ? r.return
                          : u[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, u[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                    case 0:
                    case 1:
                      i = u;
                      break;
                    case 4:
                      return o.label++, { value: u[1], done: !1 };
                    case 5:
                      o.label++, (r = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === u[0] || 2 === u[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                        o.label = u[1];
                        break;
                      }
                      if (6 === u[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = u);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(u);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  u = n.call(e, o);
                } catch (a) {
                  (u = [6, a]), (r = 0);
                } finally {
                  t = i = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, a]);
          };
        }
      }
      var o,
        a = function () {},
        c = a(),
        f = Object,
        s = function (e) {
          return e === c;
        },
        l = function (e) {
          return "function" == typeof e;
        },
        d = function (e, n) {
          return f.assign({}, e, n);
        },
        v = function () {
          return "undefined" != typeof window;
        },
        b = new WeakMap(),
        h = 0,
        g = function e(n) {
          var t,
            r,
            i = typeof n,
            u = n && n.constructor,
            o = u == Date;
          if (f(n) !== n || o || u == RegExp)
            t = o
              ? n.toJSON()
              : "symbol" == i
              ? n.toString()
              : "string" == i
              ? JSON.stringify(n)
              : "" + n;
          else {
            if ((t = b.get(n))) return t;
            if (((t = ++h + "~"), b.set(n, t), u == Array)) {
              for (t = "@", r = 0; r < n.length; r++) t += e(n[r]) + ",";
              b.set(n, t);
            }
            if (u == f) {
              t = "#";
              for (var a = f.keys(n).sort(); !s((r = a.pop())); )
                s(n[r]) || (t += r + ":" + e(n[r]) + ",");
              b.set(n, t);
            }
          }
          return t;
        },
        p = !0,
        y = v(),
        w = "undefined" != typeof document,
        m =
          y && window.addEventListener
            ? window.addEventListener.bind(window)
            : a,
        O = w ? document.addEventListener.bind(document) : a,
        R =
          y && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : a,
        E = w ? document.removeEventListener.bind(document) : a,
        k = {
          isOnline: function () {
            return p;
          },
          isVisible: function () {
            var e = w && document.visibilityState;
            return s(e) || "hidden" !== e;
          },
        },
        j = {
          initFocus: function (e) {
            return (
              O("visibilitychange", e),
              m("focus", e),
              function () {
                E("visibilitychange", e), R("focus", e);
              }
            );
          },
          initReconnect: function (e) {
            var n = function () {
                (p = !0), e();
              },
              t = function () {
                p = !1;
              };
            return (
              m("online", n),
              m("offline", t),
              function () {
                R("online", n), R("offline", t);
              }
            );
          },
        },
        S = !v() || "Deno" in window,
        T = function (e) {
          return v() && "undefined" != typeof window.requestAnimationFrame
            ? window.requestAnimationFrame(e)
            : setTimeout(e, 1);
        },
        V = S ? r.useEffect : r.useLayoutEffect,
        x = "undefined" !== typeof navigator && navigator.connection,
        C =
          !S &&
          x &&
          (["slow-2g", "2g"].includes(x.effectiveType) || x.saveData),
        D = function (e) {
          if (l(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          var n = [].concat(e);
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? g(e)
                : ""),
            n,
            e ? "$swr$" + e : "",
          ];
        },
        I = new WeakMap(),
        L = function (e, n, t, r, i, u, o) {
          void 0 === o && (o = !0);
          var a = I.get(e),
            c = a[0],
            f = a[1],
            s = a[3],
            l = c[n],
            d = f[n];
          if (o && d) for (var v = 0; v < d.length; ++v) d[v](t, r, i);
          return u && (delete s[n], l && l[0])
            ? l[0](2).then(function () {
                return e.get(n);
              })
            : e.get(n);
        },
        P = 0,
        F = function () {
          return ++P;
        },
        A = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          return i(void 0, void 0, void 0, function () {
            var n, t, r, i, o, a, f, v, b, h, g, p, y, w, m, O, R, E, k, j, S;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  if (
                    ((n = e[0]),
                    (t = e[1]),
                    (r = e[2]),
                    (i = e[3]),
                    (a =
                      !!s(
                        (o =
                          "boolean" === typeof i ? { revalidate: i } : i || {})
                          .populateCache
                      ) || o.populateCache),
                    (f = !1 !== o.revalidate),
                    (v = !1 !== o.rollbackOnError),
                    (b = o.optimisticData),
                    (h = D(t)),
                    (g = h[0]),
                    (p = h[2]),
                    !g)
                  )
                    return [2];
                  if (((y = I.get(n)), (w = y[2]), e.length < 3))
                    return [2, L(n, g, n.get(g), c, c, f, !0)];
                  if (
                    ((m = r),
                    (R = F()),
                    (w[g] = [R, 0]),
                    (E = !s(b)),
                    (k = n.get(g)),
                    E && ((j = l(b) ? b(k) : b), n.set(g, j), L(n, g, j)),
                    l(m))
                  )
                    try {
                      m = m(n.get(g));
                    } catch (T) {
                      O = T;
                    }
                  return m && l(m.then)
                    ? [
                        4,
                        m.catch(function (e) {
                          O = e;
                        }),
                      ]
                    : [3, 2];
                case 1:
                  if (((m = u.sent()), R !== w[g][0])) {
                    if (O) throw O;
                    return [2, m];
                  }
                  O && E && v && ((a = !0), (m = k), n.set(g, k)),
                    (u.label = 2);
                case 2:
                  return (
                    a &&
                      (O || (l(a) && (m = a(m, k)), n.set(g, m)),
                      n.set(p, d(n.get(p), { error: O }))),
                    (w[g][1] = F()),
                    [4, L(n, g, m, O, c, f, !!a)]
                  );
                case 3:
                  if (((S = u.sent()), O)) throw O;
                  return [2, a ? S : m];
              }
            });
          });
        },
        M = function (e, n) {
          for (var t in e) e[t][0] && e[t][0](n);
        },
        J = function (e, n) {
          if (!I.has(e)) {
            var t = d(j, n),
              r = {},
              i = A.bind(c, e),
              u = a;
            if ((I.set(e, [r, {}, {}, {}, i]), !S)) {
              var o = t.initFocus(setTimeout.bind(c, M.bind(c, r, 0))),
                f = t.initReconnect(setTimeout.bind(c, M.bind(c, r, 1)));
              u = function () {
                o && o(), f && f(), I.delete(e);
              };
            }
            return [e, i, u];
          }
          return [e, I.get(e)[4]];
        },
        W = J(new Map()),
        q = W[0],
        N = W[1],
        $ = d(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: function (e, n, t, r, i) {
              var u = t.errorRetryCount,
                o = i.retryCount,
                a =
                  ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) *
                  t.errorRetryInterval;
              (!s(u) && o > u) || setTimeout(r, a, i);
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: C ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: C ? 5e3 : 3e3,
            compare: function (e, n) {
              return g(e) == g(n);
            },
            isPaused: function () {
              return !1;
            },
            cache: q,
            mutate: N,
            fallback: {},
          },
          k
        ),
        G = function (e, n) {
          var t = d(e, n);
          if (n) {
            var r = e.use,
              i = e.fallback,
              u = n.use,
              o = n.fallback;
            r && u && (t.use = r.concat(u)), i && o && (t.fallback = d(i, o));
          }
          return t;
        },
        H = Object(r.createContext)({}),
        z = function (e) {
          return l(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}];
        },
        B = function () {
          return d($, Object(r.useContext)(H));
        },
        K = function (e, n, t) {
          var r = n[e] || (n[e] = []);
          return (
            r.push(t),
            function () {
              var e = r.indexOf(t);
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
            }
          );
        },
        Q = { dedupe: !0 },
        U = f.defineProperty(
          function (e) {
            var n = e.value,
              t = G(Object(r.useContext)(H), n),
              i = n && n.provider,
              u = Object(r.useState)(function () {
                return i ? J(i(t.cache || q), n) : c;
              })[0];
            return (
              u && ((t.cache = u[0]), (t.mutate = u[1])),
              V(function () {
                return u ? u[2] : c;
              }, []),
              Object(r.createElement)(H.Provider, d(e, { value: t }))
            );
          },
          "default",
          { value: $ }
        ),
        X = function (e) {
          return D(e)[0];
        },
        Y =
          ((o = function (e, n, t) {
            var o = t.cache,
              a = t.compare,
              f = t.fallbackData,
              v = t.suspense,
              b = t.revalidateOnMount,
              h = t.refreshInterval,
              g = t.refreshWhenHidden,
              p = t.refreshWhenOffline,
              y = I.get(o),
              w = y[0],
              m = y[1],
              O = y[2],
              R = y[3],
              E = D(e),
              k = E[0],
              j = E[1],
              x = E[2],
              C = Object(r.useRef)(!1),
              P = Object(r.useRef)(!1),
              M = Object(r.useRef)(k),
              J = Object(r.useRef)(n),
              W = Object(r.useRef)(t),
              q = function () {
                return W.current;
              },
              N = function () {
                return q().isVisible() && q().isOnline();
              },
              $ = function (e) {
                return o.set(x, d(o.get(x), e));
              },
              G = o.get(k),
              H = s(f) ? t.fallback[k] : f,
              z = s(G) ? H : G,
              B = o.get(x) || {},
              U = B.error,
              X = !C.current,
              Y = function () {
                return X && !s(b)
                  ? b
                  : !q().isPaused() &&
                      (v
                        ? !s(z) && t.revalidateIfStale
                        : s(z) || t.revalidateIfStale);
              },
              Z = !(!k || !n) && (!!B.isValidating || (X && Y())),
              _ = (function (e, n) {
                var t = Object(r.useState)({})[1],
                  i = Object(r.useRef)(e),
                  u = Object(r.useRef)({
                    data: !1,
                    error: !1,
                    isValidating: !1,
                  }),
                  o = Object(r.useCallback)(function (e) {
                    var r = !1,
                      o = i.current;
                    for (var a in e) {
                      var c = a;
                      o[c] !== e[c] &&
                        ((o[c] = e[c]), u.current[c] && (r = !0));
                    }
                    r && !n.current && t({});
                  }, []);
                return (
                  V(function () {
                    i.current = e;
                  }),
                  [i, u.current, o]
                );
              })({ data: z, error: U, isValidating: Z }, P),
              ee = _[0],
              ne = _[1],
              te = _[2],
              re = Object(r.useCallback)(
                function (e) {
                  return i(void 0, void 0, void 0, function () {
                    var n, r, i, f, d, v, b, h, g, p, y, w, m;
                    return u(this, function (u) {
                      switch (u.label) {
                        case 0:
                          if (
                            ((n = J.current),
                            !k || !n || P.current || q().isPaused())
                          )
                            return [2, !1];
                          (f = !0),
                            (d = e || {}),
                            (v = !R[k] || !d.dedupe),
                            (b = function () {
                              return !P.current && k === M.current && C.current;
                            }),
                            (h = function () {
                              var e = R[k];
                              e && e[1] === i && delete R[k];
                            }),
                            (g = { isValidating: !1 }),
                            (p = function () {
                              $({ isValidating: !1 }), b() && te(g);
                            }),
                            $({ isValidating: !0 }),
                            te({ isValidating: !0 }),
                            (u.label = 1);
                        case 1:
                          return (
                            u.trys.push([1, 3, , 4]),
                            v &&
                              (L(o, k, ee.current.data, ee.current.error, !0),
                              t.loadingTimeout &&
                                !o.get(k) &&
                                setTimeout(function () {
                                  f && b() && q().onLoadingSlow(k, t);
                                }, t.loadingTimeout),
                              (R[k] = [n.apply(void 0, j), F()])),
                            (m = R[k]),
                            (r = m[0]),
                            (i = m[1]),
                            [4, r]
                          );
                        case 2:
                          return (
                            (r = u.sent()),
                            v && setTimeout(h, t.dedupingInterval),
                            R[k] && R[k][1] === i
                              ? ($({ error: c }),
                                (g.error = c),
                                (y = O[k]),
                                !s(y) && (i <= y[0] || i <= y[1] || 0 === y[1])
                                  ? (p(),
                                    v && b() && q().onDiscarded(k),
                                    [2, !1])
                                  : (a(ee.current.data, r)
                                      ? (g.data = ee.current.data)
                                      : (g.data = r),
                                    a(o.get(k), r) || o.set(k, r),
                                    v && b() && q().onSuccess(r, k, t),
                                    [3, 4]))
                              : (v && b() && q().onDiscarded(k), [2, !1])
                          );
                        case 3:
                          return (
                            (w = u.sent()),
                            h(),
                            q().isPaused() ||
                              ($({ error: w }),
                              (g.error = w),
                              v &&
                                b() &&
                                (q().onError(w, k, t),
                                (("boolean" === typeof t.shouldRetryOnError &&
                                  t.shouldRetryOnError) ||
                                  (l(t.shouldRetryOnError) &&
                                    t.shouldRetryOnError(w))) &&
                                  N() &&
                                  q().onErrorRetry(w, k, t, re, {
                                    retryCount: (d.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          );
                        case 4:
                          return (
                            (f = !1),
                            p(),
                            b() && v && L(o, k, g.data, g.error, !1),
                            [2, !0]
                          );
                      }
                    });
                  });
                },
                [k]
              ),
              ie = Object(r.useCallback)(
                A.bind(c, o, function () {
                  return M.current;
                }),
                []
              );
            if (
              (V(function () {
                (J.current = n), (W.current = t);
              }),
              V(
                function () {
                  if (k) {
                    var e = k !== M.current,
                      n = re.bind(c, Q),
                      t = 0,
                      r = K(k, m, function (e, n, t) {
                        te(
                          d(
                            { error: n, isValidating: t },
                            a(ee.current.data, e) ? c : { data: e }
                          )
                        );
                      }),
                      i = K(k, w, function (e) {
                        if (0 == e) {
                          var r = Date.now();
                          q().revalidateOnFocus &&
                            r > t &&
                            N() &&
                            ((t = r + q().focusThrottleInterval), n());
                        } else if (1 == e)
                          q().revalidateOnReconnect && N() && n();
                        else if (2 == e) return re();
                      });
                    return (
                      (P.current = !1),
                      (M.current = k),
                      (C.current = !0),
                      e && te({ data: z, error: U, isValidating: Z }),
                      Y() && (s(z) || S ? n() : T(n)),
                      function () {
                        (P.current = !0), r(), i();
                      }
                    );
                  }
                },
                [k, re]
              ),
              V(
                function () {
                  var e;
                  function n() {
                    var n = l(h) ? h(z) : h;
                    n && -1 !== e && (e = setTimeout(t, n));
                  }
                  function t() {
                    ee.current.error ||
                    (!g && !q().isVisible()) ||
                    (!p && !q().isOnline())
                      ? n()
                      : re(Q).then(n);
                  }
                  return (
                    n(),
                    function () {
                      e && (clearTimeout(e), (e = -1));
                    }
                  );
                },
                [h, g, p, re]
              ),
              Object(r.useDebugValue)(z),
              v && s(z) && k)
            )
              throw (
                ((J.current = n),
                (W.current = t),
                (P.current = !1),
                s(U) ? re(Q) : U)
              );
            return {
              mutate: ie,
              get data() {
                return (ne.data = !0), z;
              },
              get error() {
                return (ne.error = !0), U;
              },
              get isValidating() {
                return (ne.isValidating = !0), Z;
              },
            };
          }),
          function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t = B(),
              r = z(e),
              i = r[0],
              u = r[1],
              a = r[2],
              c = G(t, a),
              f = o,
              s = c.use;
            if (s) for (var l = s.length; l-- > 0; ) f = s[l](f);
            return f(i, u || c.fetcher, c);
          });
    },
  },
]);
