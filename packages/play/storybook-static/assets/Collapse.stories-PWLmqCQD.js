import { B as N, t as S, c as V, s as w } from "./index-CJ3PW4l7.js";
import { t as A, b as D, u as F, T as G, j as H, f as I, v as J, y as K, k as L, z as M, q as O, x as P, w as T, g as d, e as j, m as p, s as q, l as r, n as u, o as x, d as y, p as z } from "./vue.esm-bundler-9_uqMtsu.js";
const B = Symbol("collapseContext"), Q = { class: "hr-collapse" }, R = "ErCollapse", U = V(y({ name: R, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e, { emit: n }) { const l = e, i = n, o = D(l.modelValue); function a(t) { o.value = t, i("update:modelValue", t), i("change", t) } return T(() => { l.accordion && o.value.length > 1 && S() }), j(() => l.modelValue, t => a(t)), z(B, { activeNames: o, handleItemClick: function (t) { let s = [...o.value]; if (l.accordion) return s = [s[0] === t ? "" : t], void a(s); const m = s.indexOf(t); m > -1 ? s.splice(m, 1) : s.push(t), a(s) } }), (t, s) => (x(), I("div", Q, [d(t.$slots, "default", {}, void 0, !0)])) } }), [["__scopeId", "data-v-70129f9b"]]), v = e => e.style.height = "0px", h = e => e.style.height = `${e.scrollHeight}px`, f = e => e.style.height = "", b = e => e.style.overflow = "hidden", g = e => e.style.overflow = "", W = { beforeEnter(e) { v(e), b(e) }, enter: e => h(e), afterEnter(e) { f(e), g(e) }, beforeLeave(e) { h(e), b(e) }, leave: e => v(e), afterLeave(e) { f(e), g(e) } }, X = ["id"], Y = { class: "hr-collapse-item__title" }, Z = { class: "hr-collapse-item__wapper" }, ee = ["id"], ae = V(y({ name: "ErCollapseItem", __name: "CollapseItem", props: { name: {}, title: {}, disabled: { type: Boolean } }, setup(e) { const n = e, l = H(B, void 0), i = L(() => { var a; return (a = l == null ? void 0 : l.activeNames.value) == null ? void 0 : a.includes(n.name) }); function o() { n.disabled || (l == null || l.handleItemClick(n.name)) } return (a, t) => (x(), I("div", { class: u(["hr-collapse-item", { "is-disabled": a.disabled }]) }, [r("div", { class: u(["hr-collapse-item__header", { "is-disabled": a.disabled, "is-active": i.value }]), id: `item-header-${a.name}`, onClick: o }, [r("span", Y, [d(a.$slots, "title", {}, () => [J(P(a.title), 1)], !0)]), p(N, { icon: "angle-right", class: "header-angle" })], 10, X), p(G, q({ name: "slide" }, A(F(W))), { default: O(() => [K(r("div", Z, [r("div", { class: "hr-collapse-item__content", id: `item-content-${a.name}` }, [d(a.$slots, "default", {}, void 0, !0)], 8, ee)], 512), [[M, i.value]])]), _: 3 }, 16)], 2)) } }), [["__scopeId", "data-v-e1aaf935"]]), k = w(U), $ = w(ae), se = { title: "Components/Collapse", component: k, subcomponents: { ErCollapseItem: $ }, tags: ["autodocs"] }, c = {
  render: e => ({
    components: { ErCollapse: k, ErCollapseItem: $ }, setup() { return { args: e } }, template: `
    <hr-collapse v-bind="args">
      <hr-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </hr-collapse-item>
      <hr-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </hr-collapse-item>
      <hr-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </hr-collapse-item>
    </hr-collapse>
    `}), args: { accordion: !0, modelValue: ["a"] }
}; var _, C, E; c.parameters = {
  ...c.parameters, docs: {
    ...(_ = c.parameters) == null ? void 0 : _.docs, source: {
      originalSource: `{
  render: args => ({
    components: {
      ErCollapse,
      ErCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <hr-collapse v-bind="args">
      <hr-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </hr-collapse-item>
      <hr-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </hr-collapse-item>
      <hr-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </hr-collapse-item>
    </hr-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ["a"]
  }
}`, ...(E = (C = c.parameters) == null ? void 0 : C.docs) == null ? void 0 : E.source
    }
  }
}; const oe = ["Default"]; export { c as Default, oe as __namedExportsOrder, se as default };

