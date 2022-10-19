import { openBlock as s, createElementBlock as u, createElementVNode as A, defineComponent as I, computed as z, resolveComponent as m, Fragment as v, renderList as L, unref as f, createBlock as g, mergeProps as x, withCtx as l, createTextVNode as w, toDisplayString as C, createVNode as _, createCommentVNode as S, pushScopeId as K, popScopeId as U, renderSlot as D, ref as Y, reactive as H, toHandlers as E } from "vue";
/*! Element Plus Icons Vue v2.0.10 */
var M = (n, a) => {
  let d = n.__vccOpts || n;
  for (let [r, p] of a)
    d[r] = p;
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
function R(n, a, d, r, p, k) {
  return s(), u("svg", G, Q);
}
var N = /* @__PURE__ */ M(q, [["render", R], ["__file", "arrow-down.vue"]]);
const W = (n) => (K("data-v-bc52ba6b"), n = n(), U(), n), X = { class: "c-operate" }, Z = /* @__PURE__ */ W(() => /* @__PURE__ */ A("span", { class: "c-operate-more-text" }, "\u66F4\u591A", -1)), ee = { class: "c-operate-more-text" }, te = {
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
      let p = [], k = [];
      const c = a.columns.length;
      return c > a.overStepCount ? (p = a.columns.slice(0, a.overStepCount - 1), k = a.columns.slice(a.overStepCount - 1, c)) : p = a.columns, { outsideList: p, insideList: k };
    }), r = (p) => {
      p.onClick && p.onClick();
    };
    return (p, k) => {
      const c = m("el-button"), T = m("el-icon"), $ = m("el-dropdown-item"), t = m("el-dropdown-menu"), i = m("el-dropdown");
      return s(), u("div", X, [
        n.type === "overStep" ? (s(), u(v, { key: 0 }, [
          (s(!0), u(v, null, L(f(d).outsideList, (o, y) => (s(), g(c, x({
            class: "c-operate-item",
            key: y
          }, o, {
            link: "",
            type: "primary",
            onClick: o.onClick
          }), {
            default: l(() => [
              w(C(o.name), 1)
            ]),
            _: 2
          }, 1040, ["onClick"]))), 128)),
          f(d).insideList.length ? (s(), g(i, {
            key: 0,
            class: "c-operate-item",
            onCommand: r
          }, {
            dropdown: l(() => [
              _(t, null, {
                default: l(() => [
                  (s(!0), u(v, null, L(f(d).insideList, (o, y) => (s(), g($, {
                    key: y,
                    disabled: o.disabled,
                    command: o
                  }, {
                    default: l(() => [
                      w(C(o.name), 1)
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
        n.type === "custom" ? (s(!0), u(v, { key: 1 }, L(a.columns, (o, y) => (s(), u(v, { key: y }, [
          o.children && Array.isArray(o.children) ? (s(), g(i, {
            key: 0,
            class: "c-operate-item",
            disabled: o.disabled,
            onCommand: r
          }, {
            dropdown: l(() => [
              _(t, null, {
                default: l(() => [
                  (s(!0), u(v, null, L(o.children, (h, e) => (s(), g($, {
                    key: e,
                    disabled: h.disabled,
                    command: h
                  }, {
                    default: l(() => [
                      w(C(h.name), 1)
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
                  A("span", ee, C(o.name), 1),
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
          }, 1032, ["disabled"])) : (s(), g(c, x({
            key: 1,
            onClick: o.onClick,
            link: "",
            type: "primary",
            class: "c-operate-item"
          }, o), {
            default: l(() => [
              w(C(o.name), 1)
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
  for (const [r, p] of a)
    d[r] = p;
  return d;
}, V = /* @__PURE__ */ O(ne, [["__scopeId", "data-v-bc52ba6b"]]), ae = { class: "c-status" }, oe = {
  key: 0,
  class: "dot"
}, se = {
  name: "CStatus"
}, re = /* @__PURE__ */ I({
  ...se,
  props: {
    shape: { default: "tag" }
  },
  setup(n) {
    const a = n;
    return (d, r) => {
      const p = m("el-tag");
      return s(), u("div", ae, [
        _(p, x(d.$attrs, {
          class: {
            "c-status-text": a.shape === "text",
            "c-status-dot": a.shape === "dot"
          }
        }), {
          default: l(() => [
            a.shape === "dot" ? (s(), u("span", oe)) : S("", !0),
            D(d.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]);
    };
  }
});
const j = /* @__PURE__ */ O(re, [["__scopeId", "data-v-a21a75d1"]]), le = { class: "c-table-pagination" }, de = {
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
    const r = H(Object.assign({
      currentPage: 1,
      pageSize: 10,
      background: !0,
      total: 60,
      pageSizes: [10, 20, 50, 100, 200],
      layout: "total, sizes, prev, pager, next, jumper",
      small: !0
    }, d.pagination)), p = (t) => {
      r.pageSize = t, a("paginationChange", r);
    }, k = (t) => {
      r.currentPage = t, a("paginationChange", r);
    }, c = z(() => (t, i) => t.renderText ? t.renderText(i) : t.prop ? i.row[t.prop] : d.emptyText || ""), T = z(() => (t, i) => t.btnList ? Array.isArray(t.btnList) ? t.btnList : t.btnList(i).filter((o) => o.show || !o.hasOwnProperty("show")) : []), $ = z(() => (t, i, o = "0") => {
      if (t.status) {
        const y = typeof t.status == "string" ? t.status : t.status(i), h = ["success", "info", "warning", "danger"].indexOf(y) !== -1;
        return (o === "0" ? h : !h) ? y : void 0;
      }
      return null;
    });
    return (t, i) => {
      const o = m("el-table-column"), y = m("el-table"), h = m("el-pagination");
      return s(), u("div", le, [
        _(y, x(t.$attrs, E(t.$attrs), { class: "c-table" }), {
          default: l(() => [
            (s(!0), u(v, null, L(n.columns, (e, F) => (s(), g(o, x({ key: F }, e, E(e)), {
              default: l((b) => [
                !e.type || e.type && e.type === "expand" ? D(t.$slots, e.prop || e.type, {
                  key: 0,
                  row: b.row,
                  column: b.column,
                  $index: b.$index
                }, () => [
                  w(C(f(c)(e, b)), 1)
                ], !0) : e.type && e.type === "operate" && e.btnList ? (s(), g(V, {
                  key: 1,
                  type: e.btnType,
                  columns: f(T)(e, b)
                }, null, 8, ["type", "columns"])) : e.type && e.type === "status" && e.status ? (s(), g(j, {
                  key: 2,
                  shape: e.statusType,
                  type: f($)(e, b),
                  color: f($)(e, b, "1")
                }, {
                  default: l(() => [
                    w(C(f(c)(e, b)), 1)
                  ]),
                  _: 2
                }, 1032, ["shape", "type", "color"])) : S("", !0)
              ]),
              _: 2
            }, 1040))), 128))
          ]),
          _: 3
        }, 16),
        d.pagination ? (s(), u("div", de, [
          _(h, x({
            "current-page": r.currentPage,
            "onUpdate:current-page": i[0] || (i[0] = (e) => r.currentPage = e),
            "page-size": r.pageSize,
            "onUpdate:page-size": i[1] || (i[1] = (e) => r.pageSize = e)
          }, r, {
            onSizeChange: p,
            onCurrentChange: k
          }), null, 16, ["current-page", "page-size"])
        ])) : S("", !0)
      ]);
    };
  }
});
const ue = /* @__PURE__ */ O(ie, [["__scopeId", "data-v-9d35bd6a"]]), B = [
  ue,
  V,
  j
], P = Symbol("INSTALLED_KEY"), _e = (n) => {
  n[P] || (n[P] = !0, B.forEach((a) => n.component(a.name, a)));
}, ye = {
  install: _e,
  ...B
};
export {
  ye as default
};
