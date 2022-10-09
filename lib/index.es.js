import { defineComponent as A, ref as D, reactive as V, resolveComponent as _, openBlock as o, createElementBlock as d, createVNode as i, mergeProps as b, toHandlers as E, withCtx as l, Fragment as y, renderList as k, createBlock as u, renderSlot as j, createTextVNode as w, toDisplayString as v, createCommentVNode as x, createElementVNode as z, computed as B, unref as h, pushScopeId as F, popScopeId as K } from "vue";
const U = { class: "c-table-pagination" }, Y = {
  key: 0,
  class: "c-pagination"
}, H = {
  name: "CTable"
}, M = /* @__PURE__ */ A({
  ...H,
  props: {
    columns: { default: () => [] },
    align: { default: "left" },
    emptyText: { default: "--" },
    pagination: { type: [null, Object, Boolean], default: () => ({}) }
  },
  emits: ["paginationChange"],
  setup(t, { emit: n }) {
    const p = t;
    D(["selection", "index"]);
    const r = V(Object.assign({
      currentPage: 1,
      pageSize: 10,
      background: !0,
      total: 60,
      pageSizes: [10, 20, 50, 100, 200],
      layout: "total, sizes, prev, pager, next, jumper",
      small: !0
    }, p.pagination)), c = (s) => {
      r.pageSize = s, n("paginationChange", r);
    }, f = (s) => {
      r.currentPage = s, n("paginationChange", r);
    };
    return (s, m) => {
      const S = _("c-operate"), L = _("el-table-column"), $ = _("el-table"), a = _("el-pagination");
      return o(), d("div", U, [
        i($, b(s.$attrs, E(s.$attrs), { class: "c-table" }), {
          default: l(() => [
            (o(!0), d(y, null, k(t.columns, (e, C) => (o(), u(L, b({ key: C }, e, E(e)), {
              default: l((g) => [
                !e.type || e.type && e.type === "expand" ? j(s.$slots, e.prop || e.type, {
                  key: 0,
                  row: g.row,
                  column: g.column,
                  $index: g.$index
                }, () => [
                  w(v(e.prop && g.row[e.prop] || p.emptyText), 1)
                ], !0) : e.type && e.type === "operate" && e.btnList ? (o(), u(S, {
                  key: 1,
                  type: e.btnType,
                  columns: e.btnList(g).filter((T) => T.show || !T.hasOwnProperty("show"))
                }, null, 8, ["type", "columns"])) : x("", !0)
              ]),
              _: 2
            }, 1040))), 128))
          ]),
          _: 3
        }, 16),
        p.pagination ? (o(), d("div", Y, [
          i(a, b({
            "current-page": r.currentPage,
            "onUpdate:current-page": m[0] || (m[0] = (e) => r.currentPage = e),
            "page-size": r.pageSize,
            "onUpdate:page-size": m[1] || (m[1] = (e) => r.pageSize = e)
          }, r, {
            onSizeChange: c,
            onCurrentChange: f
          }), null, 16, ["current-page", "page-size"])
        ])) : x("", !0)
      ]);
    };
  }
});
const N = (t, n) => {
  const p = t.__vccOpts || t;
  for (const [r, c] of n)
    p[r] = c;
  return p;
}, q = /* @__PURE__ */ N(M, [["__scopeId", "data-v-ce3e4e3a"]]);
/*! Element Plus Icons Vue v2.0.10 */
var G = (t, n) => {
  let p = t.__vccOpts || t;
  for (let [r, c] of n)
    p[r] = c;
  return p;
}, J = {
  name: "ArrowDown"
}, Q = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, R = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), W = [
  R
];
function X(t, n, p, r, c, f) {
  return o(), d("svg", Q, W);
}
var I = /* @__PURE__ */ G(J, [["render", X], ["__file", "arrow-down.vue"]]);
const Z = (t) => (F("data-v-b61f7390"), t = t(), K(), t), ee = { class: "c-operate" }, te = /* @__PURE__ */ Z(() => /* @__PURE__ */ z("span", { class: "c-operate-more-text" }, "\u66F4\u591A", -1)), ne = { class: "c-operate-more-text" }, oe = {
  name: "COperate"
}, ae = /* @__PURE__ */ A({
  ...oe,
  props: {
    columns: { default: () => [] },
    type: { default: "overStep" },
    overStepCount: { default: 3 }
  },
  setup(t) {
    const n = t, p = B(() => {
      let c = [], f = [];
      const s = n.columns.length;
      return s > n.overStepCount ? (c = n.columns.slice(0, n.overStepCount - 1), f = n.columns.slice(n.overStepCount - 1, s)) : c = n.columns, { outsideList: c, insideList: f };
    }), r = (c) => {
      c.onClick && c.onClick();
    };
    return (c, f) => {
      const s = _("el-button"), m = _("el-icon"), S = _("el-dropdown-item"), L = _("el-dropdown-menu"), $ = _("el-dropdown");
      return o(), d("div", ee, [
        t.type === "overStep" ? (o(), d(y, { key: 0 }, [
          (o(!0), d(y, null, k(h(p).outsideList, (a, e) => (o(), u(s, b({
            class: "c-operate-item",
            key: e
          }, a, {
            link: "",
            type: "primary",
            onClick: a.onClick
          }), {
            default: l(() => [
              w(v(a.name), 1)
            ]),
            _: 2
          }, 1040, ["onClick"]))), 128)),
          h(p).insideList.length ? (o(), u($, {
            key: 0,
            class: "c-operate-item",
            onCommand: r
          }, {
            dropdown: l(() => [
              i(L, null, {
                default: l(() => [
                  (o(!0), d(y, null, k(h(p).insideList, (a, e) => (o(), u(S, {
                    key: e,
                    disabled: a.disabled,
                    command: a
                  }, {
                    default: l(() => [
                      w(v(a.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "command"]))), 128))
                ]),
                _: 1
              })
            ]),
            default: l(() => [
              i(s, {
                link: "",
                type: "primary"
              }, {
                default: l(() => [
                  te,
                  i(m, null, {
                    default: l(() => [
                      i(h(I))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : x("", !0)
        ], 64)) : x("", !0),
        t.type === "custom" ? (o(!0), d(y, { key: 1 }, k(n.columns, (a, e) => (o(), d(y, { key: e }, [
          a.children && Array.isArray(a.children) ? (o(), u($, {
            key: 0,
            class: "c-operate-item",
            disabled: a.disabled,
            onCommand: r
          }, {
            dropdown: l(() => [
              i(L, null, {
                default: l(() => [
                  (o(!0), d(y, null, k(a.children, (C, g) => (o(), u(S, {
                    key: g,
                    disabled: C.disabled,
                    command: C
                  }, {
                    default: l(() => [
                      w(v(C.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "command"]))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            default: l(() => [
              i(s, {
                link: "",
                type: "primary"
              }, {
                default: l(() => [
                  z("span", ne, v(a.name), 1),
                  i(m, null, {
                    default: l(() => [
                      i(h(I))
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["disabled"])) : (o(), u(s, b({
            key: 1,
            onClick: a.onClick,
            link: "",
            type: "primary",
            class: "c-operate-item"
          }, a), {
            default: l(() => [
              w(v(a.name), 1)
            ]),
            _: 2
          }, 1040, ["onClick"]))
        ], 64))), 128)) : x("", !0)
      ]);
    };
  }
});
const re = /* @__PURE__ */ N(ae, [["__scopeId", "data-v-b61f7390"]]), P = [
  q,
  re
], O = Symbol("INSTALLED_KEY"), le = (t) => {
  t[O] || (t[O] = !0, P.forEach((n) => t.component(n.name, n)));
}, pe = {
  install: le,
  components: P
};
export {
  pe as default
};
