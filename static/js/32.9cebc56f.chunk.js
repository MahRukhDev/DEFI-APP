(this["webpackJsonpdexfinance-frontend"] =
  this["webpackJsonpdexfinance-frontend"] || []).push([
  [32],
  {
    1004: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var n = a(26),
        r = function (e) {
          var t = {};
          return (
            e.split(";").forEach(function (e) {
              var a = e.split(":"),
                r = Object(n.a)(a, 2),
                l = r[0],
                c = r[1];
              if (l) {
                var o = (function (e) {
                  e.startsWith("--") && (e = e.substring(2));
                  var t = e.split("-");
                  return 1 === t.length
                    ? t[0]
                    : t[0] +
                        t
                          .slice(1)
                          .map(function (e) {
                            return e[0].toUpperCase() + e.slice(1);
                          })
                          .join("");
                })(l.trim());
                t[o] = c.trim();
              }
            }),
            t
          );
        };
    },
    1056: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return v;
      }),
        a.d(t, "a", function () {
          return h;
        });
      var n = a(4),
        r = a(5),
        l = a(9),
        c = a(10),
        o = a(0),
        i = a.n(o),
        s = a(282),
        u = a(2112),
        m = a(1134),
        p = a(1190),
        d = a(1004),
        E = a(34),
        b = {
          card: {
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
        f = (function (e) {
          Object(l.a)(a, e);
          var t = Object(c.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          "p",
                          { style: { textAlign: "center" } },
                          i.a.createElement(
                            "span",
                            { style: { color: "#d4d4d4" } },
                            this.props.title
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { id: "kpi-heading" },
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          "h3",
                          {
                            style: Object(d.a)(
                              "text-align: center; fontSize:32; line-height: 1.1;"
                            ),
                            "data-fontsize": "32",
                            "data-lineheight": "35.2px",
                          },
                          i.a.createElement(
                            "span",
                            { style: { color: "#ffffff", fontSize: "32px" } },
                            E.b.preLaunch ? "--" : this.props.value
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component),
        h = Object(s.a)(b)(f);
      var v = Object(s.a)(b)(function (e) {
        var t = [];
        i.a.Children.map(e.children, function (e) {
          e.type === h && t.push(e);
        });
        var a = 4;
        return (
          2 == t.length && (a = 6),
          i.a.createElement(
            u.a,
            { item: !0, xs: 12, sm: 8 },
            i.a.createElement(
              m.a,
              { className: e.classes.card },
              i.a.createElement(
                p.a,
                null,
                i.a.createElement(
                  u.a,
                  { container: !0 },
                  Object.values(t).map(function (e) {
                    return i.a.createElement(
                      u.a,
                      { item: !0, xs: 12, sm: a },
                      e
                    );
                  })
                )
              )
            )
          )
        );
      });
    },
    2139: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return I;
        });
      var n,
        r = a(43),
        l = a(0),
        c = a.n(l),
        o = a(934),
        i = a(37),
        s = a(923),
        u = a.n(s),
        m = a(1180),
        p = a(2112),
        d = a(1056),
        E = a(1004),
        b = a(4),
        f = a(5),
        h = a(9),
        v = a(10),
        g = a(2122),
        y = a(2123),
        O = a(2109),
        j = a(1134),
        x = a(900),
        R = a(2124),
        k = a(2125),
        C = a(2126),
        D = a(2127),
        S = a(282),
        N = a(931),
        w = Object(S.a)(function (e) {
          return {
            head: {
              backgroundColor: e.palette.table.head.background,
              color: e.palette.table.text.color,
            },
            body: { fontSize: 14, color: e.palette.table.text.color },
          };
        })(g.a),
        A = (function (e) {
          Object(h.a)(a, e);
          var t = Object(v.a)(a);
          function a() {
            return Object(b.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(f.a)(a, [
              {
                key: "render",
                value: function () {
                  return c.a.createElement(
                    y.a,
                    { className: this.props.classes.row },
                    c.a.createElement(
                      w,
                      null,
                      c.a.createElement(N.a, {
                        symbol: this.props.symbol,
                        size: 50,
                      })
                    ),
                    c.a.createElement(w, null, this.props.bond),
                    c.a.createElement(w, null, this.props.price),
                    c.a.createElement(w, null, this.props.roi),
                    c.a.createElement(w, null, this.props.purchased),
                    c.a.createElement(
                      w,
                      null,
                      c.a.createElement(
                        O.a,
                        { className: "shinyButton" },
                        "BOND"
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(c.a.Component),
        B = Object(S.a)(function (e) {
          return {
            root: { width: "100%", overflowX: "auto" },
            table: { minWidth: "100%" },
            row: {
              "&:nth-of-type(odd)": {
                backgroundColor: e.palette.table.rows.primary.background,
              },
              "&:nth-of-type(even)": {
                backgroundColor: e.palette.table.rows.secondary.background,
              },
            },
          };
        })(function (e) {
          var t = [];
          return (
            c.a.Children.map(e.children, function (e) {
              e.type === A && t.push(e);
            }),
            c.a.createElement(
              p.a,
              { item: !0, xs: 12, sm: 6 },
              c.a.createElement(
                m.a,
                null,
                c.a.createElement(
                  j.a,
                  null,
                  c.a.createElement(
                    x.a,
                    {
                      component: "h2",
                      variant: "h4",
                      style: {
                        marginTop: 15,
                        marginLeft: 30,
                        marginBottom: 15,
                      },
                    },
                    e.title
                  ),
                  c.a.createElement(
                    R.a,
                    { className: e.classes.root },
                    c.a.createElement(
                      k.a,
                      { className: e.classes.table },
                      c.a.createElement(
                        C.a,
                        null,
                        c.a.createElement(
                          y.a,
                          { className: e.classes.row },
                          c.a.createElement(w, null, "\xa0"),
                          c.a.createElement(w, null, "BOND"),
                          c.a.createElement(w, null, "PRICE"),
                          c.a.createElement(w, null, "ROI"),
                          c.a.createElement(w, null, "PURCHASED"),
                          c.a.createElement(w, null)
                        )
                      ),
                      c.a.createElement(
                        D.a,
                        null,
                        Object.values(t).map(function (t) {
                          return c.a.cloneElement(t, { classes: e.classes });
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        z = Object(i.c)(
          n ||
            (n = Object(r.a)([
              "\n  body {\n    background: url(",
              ") repeat !important;\n    background-size: cover !important;\n    background-color: #171923;\n  }\n",
            ])),
          u.a
        ),
        I = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              o.a,
              null,
              c.a.createElement(z, null),
              c.a.createElement(
                m.a,
                { mt: 5 },
                c.a.createElement(
                  p.a,
                  { container: !0, justify: "center", spacing: 3 },
                  c.a.createElement(
                    p.a,
                    { item: !0, xs: 12, sm: 4 },
                    c.a.createElement(
                      "h3",
                      {
                        style: Object(E.a)(
                          "text-align: left; --fontSize:32px; line-height: 1.1;"
                        ),
                        "data-fontsize": "32",
                        "data-lineheight": "35.2px",
                      },
                      c.a.createElement(
                        "span",
                        { style: Object(E.a)("color: #8b67d3;") },
                        "DEX BONDS"
                      )
                    ),
                    c.a.createElement(
                      "div",
                      {
                        style: Object(E.a)("font-weight:normal;color:#ffffff;"),
                      },
                      c.a.createElement(
                        "p",
                        { style: Object(E.a)("text-align: left;") },
                        c.a.createElement(
                          "span",
                          { style: Object(E.a)("font-weight: 400;") },
                          "Buy Money Market tokens at a discount and be vested out over a period of time."
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    d.b,
                    null,
                    c.a.createElement(d.a, {
                      title: "TREASURY BALANCE",
                      value: "--",
                    }),
                    c.a.createElement(d.a, {
                      title: "USDEX PRICE",
                      value: "--",
                    }),
                    c.a.createElement(d.a, {
                      title: "dexSHARE PRICE",
                      value: "--",
                    })
                  ),
                  c.a.createElement(
                    B,
                    { title: "USDEX BONDS" },
                    c.a.createElement(A, {
                      symbol: "DEXIRA",
                      bond: "dexIRA",
                      price: "--",
                      roi: "--",
                      purchased: "--",
                    }),
                    c.a.createElement(A, {
                      symbol: "DEXETF",
                      bond: "dexETF",
                      price: "--",
                      roi: "--",
                      purchased: "--",
                    })
                  ),
                  c.a.createElement(
                    B,
                    { title: "dexSHARE BONDS" },
                    c.a.createElement(A, {
                      symbol: "DEXIRA",
                      bond: "dexIRA",
                      price: "--",
                      roi: "--",
                      purchased: "--",
                    }),
                    c.a.createElement(A, {
                      symbol: "DEXETF",
                      bond: "dexETF",
                      price: "--",
                      roi: "--",
                      purchased: "--",
                    })
                  )
                )
              )
            )
          );
        };
    },
    923: function (e, t, a) {
      e.exports = a.p + "static/media/background.a537c370.jpg";
    },
  },
]);
