import { openBlock as r, createElementBlock as u, createElementVNode as A, defineComponent as I, computed as z, resolveComponent as m, Fragment as C, renderList as L, unref as f, createBlock as g, mergeProps as x, withCtx as l, createTextVNode as w, toDisplayString as k, createVNode as _, createCommentVNode as S, pushScopeId as K, popScopeId as U, renderSlot as D, ref as Y, reactive as H, toHandlers as E } from "vue";
/*! Element Plus Icons Vue v2.0.10 */
var M = (n, a) => {
  let d = n.__vccOpts || n;
  for (let [s, p] of a)
    d[s] = p;
  return d;
}, q = {
  name: "ArrowDown"
}, G = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, J = /* @__PURE__ */ A("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Q = [
  J
];
function R(n, a, d, s, p, b) {
  return r(), u("svg", G, Q);
}
var N = /* @__PURE__ */ M(q, [["render", R], ["__file", "arrow-down.vue"]]);
const W = (n) => (K("data-v-14a406e5"), n = n(), U(), n), X = { class: "c-operate" }, Z = /* @__PURE__ */ W(() => /* @__PURE__ */ A("span", { class: "c-operate-more-text" }, "\u66F4\u591A", -1)), ee = { class: "c-operate-more-text" }, te = {
  name: "COperate"
}, ne = /* @__PURE__ */ I({
  ...te,
  props: {
    columns: { default: () => [] },
    type: { default: "overStep" },
    overStepCount: { default: 3 }
  },
  setup(n) {
    const a = n, d = z(() => {
      let p = [], b = [];
      const c = a.columns.length;
      return c > a.overStepCount ? (p = a.columns.slice(0, a.overStepCount - 1), b = a.columns.slice(a.overStepCount - 1, c)) : p = a.columns, { outsideList: p, insideList: b };
    }), s = (p) => {
      p.onClick && p.onClick();
    };
    return (p, b) => {
      const c = m("el-button"), T = m("el-icon"), $ = m("el-dropdown-item"), t = m("el-dropdown-menu"), i = m("el-dropdown");
      return r(), u("div", X, [
        n.type === "overStep" ? (r(), u(C, { key: 0 }, [
          (r(!0), u(C, null, L(f(d).outsideList, (o, y) => (r(), g(c, x({
            class: "c-operate-item",
            key: y
          }, o, {
            link: "",
            type: "primary",
            onClick: o.onClick
          }), {
            default: l(() => [
              w(k(o.name), 1)
            ]),
            _: 2
          }, 1040, ["onClick"]))), 128)),
          f(d).insideList.length ? (r(), g(i, {
            key: 0,
            class: "c-operate-item",
            onCommand: s
          }, {
            dropdown: l(() => [
              _(t, null, {
                default: l(() => [
                  (r(!0), u(C, null, L(f(d).insideList, (o, y) => (r(), g($, {
                    key: y,
                    disabled: o.disabled,
                    command: o
                  }, {
                    default: l(() => [
                      w(k(o.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "command"]))), 128))
                ]),
                _: 1
              })
            ]),
            default: l(() => [
              _(c, {
                link: "",
                type: "primary"
              }, {
                default: l(() => [
                  Z,
                  _(T, null, {
                    default: l(() => [
                      _(f(N))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : S("", !0)
        ], 64)) : S("", !0),
        n.type === "custom" ? (r(!0), u(C, { key: 1 }, L(a.columns, (o, y) => (r(), u(C, { key: y }, [
          o.children && Array.isArray(o.children) ? (r(), g(i, {
            key: 0,
            class: "c-operate-item",
            disabled: o.disabled,
            onCommand: s
          }, {
            dropdown: l(() => [
              _(t, null, {
                default: l(() => [
                  (r(!0), u(C, null, L(o.children, (h, e) => (r(), g($, {
                    key: e,
                    disabled: h.disabled,
                    command: h
                  }, {
                    default: l(() => [
                      w(k(h.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "command"]))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            default: l(() => [
              _(c, {
                link: "",
                type: "primary"
              }, {
                default: l(() => [
                  A("span", ee, k(o.name), 1),
                  _(T, null, {
                    default: l(() => [
                      _(f(N))
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["disabled"])) : (r(), g(c, x({
            key: 1,
            onClick: o.onClick,
            link: "",
            type: "primary",
            class: "c-operate-item"
          }, o), {
            default: l(() => [
              w(k(o.name), 1)
            ]),
            _: 2
          }, 1040, ["onClick"]))
        ], 64))), 128)) : S("", !0)
      ]);
    };
  }
});
const O = (n, a) => {
  const d = n.__vccOpts || n;
  for (const [s, p] of a)
    d[s] = p;
  return d;
}, V = /* @__PURE__ */ O(ne, [["__scopeId", "data-v-14a406e5"]]), ae = { class: "c-status" }, oe = {
  key: 0,
  class: "dot"
}, re = {
  name: "CStatus"
}, se = /* @__PURE__ */ I({
  ...re,
  props: {
    shape: { default: "tag" }
  },
  setup(n) {
    const a = n;
    return (d, s) => {
      const p = m("el-tag");
      return r(), u("div", ae, [
        _(p, x(d.$attrs, {
          class: {
            "c-status-text": a.shape === "text",
            "c-status-dot": a.shape === "dot"
          }
        }), {
          default: l(() => [
            a.shape === "dot" ? (r(), u("span", oe)) : S("", !0),
            D(d.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]);
    };
  }
});
const j = /* @__PURE__ */ O(se, [["__scopeId", "data-v-60861d9d"]]), le = { class: "c-table-pagination" }, de = {
  key: 0,
  class: "c-pagination"
}, pe = {
  name: "CTable"
}, ie = /* @__PURE__ */ I({
  ...pe,
  props: {
    columns: { default: () => [] },
    align: { default: "left" },
    emptyText: { default: "--" },
    pagination: { type: [null, Object, Boolean], default: () => ({}) }
  },
  emits: ["paginationChange"],
  setup(n, { emit: a }) {
    const d = n;
    Y(["selection", "index"]);
    const s = H(Object.assign({
      currentPage: 1,
      pageSize: 10,
      background: !0,
      total: 60,
      pageSizes: [10, 20, 50, 100, 200],
      layout: "total, sizes, prev, pager, next, jumper",
      small: !0
    }, d.pagination)), p = (t) => {
      s.pageSize = t, a("paginationChange", s);
    }, b = (t) => {
      s.currentPage = t, a("paginationChange", s);
    }, c = z(() => (t, i) => t.renderText ? t.renderText(i) : t.prop ? i.row[t.prop] : d.emptyText || ""), T = z(() => (t, i) => t.btnList ? Array.isArray(t.btnList) ? t.btnList : t.btnList(i).filter((o) => o.show || !o.hasOwnProperty("show")) : []), $ = z(() => (t, i, o = "0") => {
      if (t.status) {
        const y = typeof t.status == "string" ? t.status : t.status(i), h = ["success", "info", "warning", "danger", "error"].indexOf(y) !== -1;
        return (o === "0" ? h : !h) ? y : null;
      }
      return null;
    });
    return (t, i) => {
      const o = m("el-table-column"), y = m("el-table"), h = m("el-pagination");
      return r(), u("div", le, [
        _(y, x(t.$attrs, E(t.$attrs), { class: "c-table" }), {
          default: l(() => [
            (r(!0), u(C, null, L(n.columns, (e, F) => (r(), g(o, x({ key: F }, e, E(e)), {
              default: l((v) => [
                !e.type || e.type && e.type === "expand" ? D(t.$slots, e.prop || e.type, {
                  key: 0,
                  row: v.row,
                  column: v.column,
                  $index: v.$index
                }, () => [
                  w(k(f(c)(e, v)), 1)
                ], !0) : e.type && e.type === "operate" && e.btnList ? (r(), g(V, {
                  key: 1,
                  type: e.btnType,
                  columns: f(T)(e, v)
                }, null, 8, ["type", "columns"])) : e.type && e.type === "status" && e.status ? (r(), g(j, {
                  key: 2,
                  shape: e.statusType,
                  type: f($)(e, v),
                  color: f($)(e, v, "1")
                }, {
                  default: l(() => [
                    w(k(f(c)(e, v)), 1)
                  ]),
                  _: 2
                }, 1032, ["shape", "type", "color"])) : S("", !0)
              ]),
              _: 2
            }, 1040))), 128))
          ]),
          _: 3
        }, 16),
        d.pagination ? (r(), u("div", de, [
          _(h, x({
            "current-page": s.currentPage,
            "onUpdate:current-page": i[0] || (i[0] = (e) => s.currentPage = e),
            "page-size": s.pageSize,
            "onUpdate:page-size": i[1] || (i[1] = (e) => s.pageSize = e)
          }, s, {
            onSizeChange: p,
            onCurrentChange: b
          }), null, 16, ["current-page", "page-size"])
        ])) : S("", !0)
      ]);
    };
  }
});
const ue = /* @__PURE__ */ O(ie, [["__scopeId", "data-v-51d052b7"]]), B = [
  ue,
  V,
  j
], P = Symbol("INSTALLED_KEY"), _e = (n) => {
  n[P] || (n[P] = !0, B.forEach((a) => n.component(a.name, a)));
}, ye = {
  install: _e,
  components: B
};
export {
  ye as default
};
