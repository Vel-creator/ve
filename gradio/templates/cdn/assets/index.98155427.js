const VERSION_RE = new RegExp('3.16.2/', 'g')
function import_fix(mod, base) {
  const url = new URL(mod, base)
  return import(
    `https://gradio.s3-us-west-2.amazonaws.com/3.16.2/${
      url.pathname?.startsWith('/')
        ? url.pathname.substring(1).replace(VERSION_RE, '')
        : url.pathname.replace(VERSION_RE, '')
    }`
  )
}
const Il = function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === 'childList')
        for (const i of a.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const a = {}
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const a = n(o)
    fetch(o.href, a)
  }
}
Il()
function J() {}
const tn = (t) => t
function en(t, e) {
  for (const n in e) t[n] = e[n]
  return t
}
function uo(t) {
  return t()
}
function Kn() {
  return Object.create(null)
}
function _t(t) {
  t.forEach(uo)
}
function Qt(t) {
  return typeof t == 'function'
}
function kt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
let je
function Zt(t, e) {
  return je || (je = document.createElement('a')), (je.href = e), t === je.href
}
function Pl(t) {
  return Object.keys(t).length === 0
}
function Mn(t, ...e) {
  if (t == null) return J
  const n = t.subscribe(...e)
  return n.unsubscribe ? () => n.unsubscribe() : n
}
function Ol(t) {
  let e
  return Mn(t, (n) => (e = n))(), e
}
function We(t, e, n) {
  t.$$.on_destroy.push(Mn(e, n))
}
function zn(t, e, n, r) {
  if (t) {
    const o = fo(t, e, n, r)
    return t[0](o)
  }
}
function fo(t, e, n, r) {
  return t[1] && r ? en(n.ctx.slice(), t[1](r(e))) : n.ctx
}
function jn(t, e, n, r) {
  if (t[2] && r) {
    const o = t[2](r(n))
    if (e.dirty === void 0) return o
    if (typeof o == 'object') {
      const a = [],
        i = Math.max(e.dirty.length, o.length)
      for (let s = 0; s < i; s += 1) a[s] = e.dirty[s] | o[s]
      return a
    }
    return e.dirty | o
  }
  return e.dirty
}
function Fn(t, e, n, r, o, a) {
  if (o) {
    const i = fo(e, n, r, a)
    t.p(i, o)
  }
}
function Dn(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32
    for (let r = 0; r < n; r++) e[r] = -1
    return e
  }
  return -1
}
function j0(t, e, n) {
  return t.set(n), e
}
function Ll(t) {
  return t && Qt(t.destroy) ? t.destroy : J
}
const mo = typeof window < 'u'
let xe = mo ? () => window.performance.now() : () => Date.now(),
  Un = mo ? (t) => requestAnimationFrame(t) : J
const ie = new Set()
function bo(t) {
  ie.forEach((e) => {
    e.c(t) || (ie.delete(e), e.f())
  }),
    ie.size !== 0 && Un(bo)
}
function nn(t) {
  let e
  return (
    ie.size === 0 && Un(bo),
    {
      promise: new Promise((n) => {
        ie.add((e = { c: t, f: n }))
      }),
      abort() {
        ie.delete(e)
      },
    }
  )
}
function b(t, e) {
  t.appendChild(e)
}
function wo(t) {
  if (!t) return document
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument
  return e && e.host ? e : t.ownerDocument
}
function Nl(t) {
  const e = A('style')
  return Rl(wo(t), e), e.sheet
}
function Rl(t, e) {
  b(t.head || t, e)
}
function v(t, e, n) {
  t.insertBefore(e, n || null)
}
function y(t) {
  t.parentNode.removeChild(t)
}
function qt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}
function A(t) {
  return document.createElement(t)
}
function Et(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t)
}
function P(t) {
  return document.createTextNode(t)
}
function R() {
  return P(' ')
}
function ot() {
  return P('')
}
function K(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
}
function F0(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e)
  }
}
function Ml(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e)
  }
}
function _(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function $n(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__)
  for (const r in e)
    e[r] == null
      ? t.removeAttribute(r)
      : r === 'style'
      ? (t.style.cssText = e[r])
      : r === '__value'
      ? (t.value = t[r] = e[r])
      : n[r] && n[r].set
      ? (t[r] = e[r])
      : _(t, r, e[r])
}
function D0(t) {
  return t === '' ? null : +t
}
function zl(t) {
  return Array.from(t.childNodes)
}
function Y(t, e) {
  ;(e = '' + e), t.wholeText !== e && (t.data = e)
}
function St(t, e) {
  t.value = e ?? ''
}
function Ft(t, e, n, r) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, r ? 'important' : '')
}
function U0(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const r = t.options[n]
    if (r.__value === e) {
      r.selected = !0
      return
    }
  }
  t.selectedIndex = -1
}
function G0(t) {
  const e = t.querySelector(':checked') || t.options[0]
  return e && e.__value
}
let Fe
function jl() {
  if (Fe === void 0) {
    Fe = !1
    try {
      typeof window < 'u' && window.parent && window.parent.document
    } catch {
      Fe = !0
    }
  }
  return Fe
}
function V0(t, e) {
  getComputedStyle(t).position === 'static' && (t.style.position = 'relative')
  const r = A('iframe')
  r.setAttribute(
    'style',
    'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;',
  ),
    r.setAttribute('aria-hidden', 'true'),
    (r.tabIndex = -1)
  const o = jl()
  let a
  return (
    o
      ? ((r.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (a = K(window, 'message', (i) => {
          i.source === r.contentWindow && e()
        })))
      : ((r.src = 'about:blank'),
        (r.onload = () => {
          a = K(r.contentWindow, 'resize', e)
        })),
    b(t, r),
    () => {
      ;(o || (a && r.contentWindow)) && a(), y(r)
    }
  )
}
function q(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e)
}
function ho(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const o = document.createEvent('CustomEvent')
  return o.initCustomEvent(t, n, r, e), o
}
class X0 {
  constructor(e = !1) {
    ;(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null)
  }
  c(e) {
    this.h(e)
  }
  m(e, n, r = null) {
    this.e ||
      (this.is_svg ? (this.e = Et(n.nodeName)) : (this.e = A(n.nodeName)),
      (this.t = n),
      this.c(e)),
      this.i(r)
  }
  h(e) {
    ;(this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes))
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) v(this.t, this.n[n], e)
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a)
  }
  d() {
    this.n.forEach(y)
  }
}
const Ye = new Map()
let Ze = 0
function Fl(t) {
  let e = 5381,
    n = t.length
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n)
  return e >>> 0
}
function Dl(t, e) {
  const n = { stylesheet: Nl(e), rules: {} }
  return Ye.set(t, n), n
}
function Je(t, e, n, r, o, a, i, s = 0) {
  const d = 16.666 / r
  let l = `{
`
  for (let x = 0; x <= 1; x += d) {
    const O = e + (n - e) * a(x)
    l +=
      x * 100 +
      `%{${i(O, 1 - O)}}
`
  }
  const c =
      l +
      `100% {${i(n, 1 - n)}}
}`,
    p = `__svelte_${Fl(c)}_${s}`,
    f = wo(t),
    { stylesheet: u, rules: h } = Ye.get(f) || Dl(f, t)
  h[p] || ((h[p] = !0), u.insertRule(`@keyframes ${p} ${c}`, u.cssRules.length))
  const S = t.style.animation || ''
  return (
    (t.style.animation = `${
      S ? `${S}, ` : ''
    }${p} ${r}ms linear ${o}ms 1 both`),
    (Ze += 1),
    p
  )
}
function Qe(t, e) {
  const n = (t.style.animation || '').split(', '),
    r = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf('__svelte') === -1,
    ),
    o = n.length - r.length
  o && ((t.style.animation = r.join(', ')), (Ze -= o), Ze || Ul())
}
function Ul() {
  Un(() => {
    Ze ||
      (Ye.forEach((t) => {
        const { stylesheet: e } = t
        let n = e.cssRules.length
        for (; n--; ) e.deleteRule(n)
        t.rules = {}
      }),
      Ye.clear())
  })
}
let ke
function ve(t) {
  ke = t
}
function Kt() {
  if (!ke) throw new Error('Function called outside component initialization')
  return ke
}
function q0(t) {
  Kt().$$.before_update.push(t)
}
function Gn(t) {
  Kt().$$.on_mount.push(t)
}
function B0(t) {
  Kt().$$.after_update.push(t)
}
function Gl(t) {
  Kt().$$.on_destroy.push(t)
}
function Vn() {
  const t = Kt()
  return (e, n, { cancelable: r = !1 } = {}) => {
    const o = t.$$.callbacks[e]
    if (o) {
      const a = ho(e, n, { cancelable: r })
      return (
        o.slice().forEach((i) => {
          i.call(t, a)
        }),
        !a.defaultPrevented
      )
    }
    return !0
  }
}
function Vl(t, e) {
  return Kt().$$.context.set(t, e), e
}
function Xl(t) {
  return Kt().$$.context.get(t)
}
function le(t, e) {
  const n = t.$$.callbacks[e.type]
  n && n.slice().forEach((r) => r.call(this, e))
}
const _e = [],
  wt = [],
  Ve = [],
  xn = [],
  _o = Promise.resolve()
let kn = !1
function yo() {
  kn || ((kn = !0), _o.then(bt))
}
function Ee() {
  return yo(), _o
}
function Jt(t) {
  Ve.push(t)
}
function Ke(t) {
  xn.push(t)
}
const cn = new Set()
let De = 0
function bt() {
  const t = ke
  do {
    for (; De < _e.length; ) {
      const e = _e[De]
      De++, ve(e), ql(e.$$)
    }
    for (ve(null), _e.length = 0, De = 0; wt.length; ) wt.pop()()
    for (let e = 0; e < Ve.length; e += 1) {
      const n = Ve[e]
      cn.has(n) || (cn.add(n), n())
    }
    Ve.length = 0
  } while (_e.length)
  for (; xn.length; ) xn.pop()()
  ;(kn = !1), cn.clear(), ve(t)
}
function ql(t) {
  if (t.fragment !== null) {
    t.update(), _t(t.before_update)
    const e = t.dirty
    ;(t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(Jt)
  }
}
let be
function Xn() {
  return (
    be ||
      ((be = Promise.resolve()),
      be.then(() => {
        be = null
      })),
    be
  )
}
function Yt(t, e, n) {
  t.dispatchEvent(ho(`${e ? 'intro' : 'outro'}${n}`))
}
const Xe = new Set()
let Rt
function Ct() {
  Rt = { r: 0, c: [], p: Rt }
}
function It() {
  Rt.r || _t(Rt.c), (Rt = Rt.p)
}
function z(t, e) {
  t && t.i && (Xe.delete(t), t.i(e))
}
function V(t, e, n, r) {
  if (t && t.o) {
    if (Xe.has(t)) return
    Xe.add(t),
      Rt.c.push(() => {
        Xe.delete(t), r && (n && t.d(1), r())
      }),
      t.o(e)
  } else r && r()
}
const qn = { duration: 0 }
function Bl(t, e, n) {
  let r = e(t, n),
    o = !1,
    a,
    i,
    s = 0
  function d() {
    a && Qe(t, a)
  }
  function l() {
    const {
      delay: p = 0,
      duration: f = 300,
      easing: u = tn,
      tick: h = J,
      css: S,
    } = r || qn
    S && (a = Je(t, 0, 1, f, p, u, S, s++)), h(0, 1)
    const x = xe() + p,
      O = x + f
    i && i.abort(),
      (o = !0),
      Jt(() => Yt(t, !0, 'start')),
      (i = nn((T) => {
        if (o) {
          if (T >= O) return h(1, 0), Yt(t, !0, 'end'), d(), (o = !1)
          if (T >= x) {
            const g = u((T - x) / f)
            h(g, 1 - g)
          }
        }
        return o
      }))
  }
  let c = !1
  return {
    start() {
      c || ((c = !0), Qe(t), Qt(r) ? ((r = r()), Xn().then(l)) : l())
    },
    invalidate() {
      c = !1
    },
    end() {
      o && (d(), (o = !1))
    },
  }
}
function H0(t, e, n) {
  let r = e(t, n),
    o = !0,
    a
  const i = Rt
  i.r += 1
  function s() {
    const {
      delay: d = 0,
      duration: l = 300,
      easing: c = tn,
      tick: p = J,
      css: f,
    } = r || qn
    f && (a = Je(t, 1, 0, l, d, c, f))
    const u = xe() + d,
      h = u + l
    Jt(() => Yt(t, !1, 'start')),
      nn((S) => {
        if (o) {
          if (S >= h) return p(0, 1), Yt(t, !1, 'end'), --i.r || _t(i.c), !1
          if (S >= u) {
            const x = c((S - u) / l)
            p(1 - x, x)
          }
        }
        return o
      })
  }
  return (
    Qt(r)
      ? Xn().then(() => {
          ;(r = r()), s()
        })
      : s(),
    {
      end(d) {
        d && r.tick && r.tick(1, 0), o && (a && Qe(t, a), (o = !1))
      },
    }
  )
}
function W0(t, e, n, r) {
  let o = e(t, n),
    a = r ? 0 : 1,
    i = null,
    s = null,
    d = null
  function l() {
    d && Qe(t, d)
  }
  function c(f, u) {
    const h = f.b - a
    return (
      (u *= Math.abs(h)),
      {
        a,
        b: f.b,
        d: h,
        duration: u,
        start: f.start,
        end: f.start + u,
        group: f.group,
      }
    )
  }
  function p(f) {
    const {
        delay: u = 0,
        duration: h = 300,
        easing: S = tn,
        tick: x = J,
        css: O,
      } = o || qn,
      T = { start: xe() + u, b: f }
    f || ((T.group = Rt), (Rt.r += 1)),
      i || s
        ? (s = T)
        : (O && (l(), (d = Je(t, a, f, h, u, S, O))),
          f && x(0, 1),
          (i = c(T, h)),
          Jt(() => Yt(t, f, 'start')),
          nn((g) => {
            if (
              (s &&
                g > s.start &&
                ((i = c(s, h)),
                (s = null),
                Yt(t, i.b, 'start'),
                O && (l(), (d = Je(t, a, i.b, i.duration, 0, S, o.css)))),
              i)
            ) {
              if (g >= i.end)
                x((a = i.b), 1 - a),
                  Yt(t, i.b, 'end'),
                  s || (i.b ? l() : --i.group.r || _t(i.group.c)),
                  (i = null)
              else if (g >= i.start) {
                const m = g - i.start
                ;(a = i.a + i.d * S(m / i.duration)), x(a, 1 - a)
              }
            }
            return !!(i || s)
          }))
  }
  return {
    run(f) {
      Qt(o)
        ? Xn().then(() => {
            ;(o = o()), p(f)
          })
        : p(f)
    },
    end() {
      l(), (i = s = null)
    },
  }
}
const Y0 =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global
function Z0(t, e) {
  t.d(1), e.delete(t.key)
}
function Hl(t, e) {
  V(t, 1, 1, () => {
    e.delete(t.key)
  })
}
function Wl(t, e, n, r, o, a, i, s, d, l, c, p) {
  let f = t.length,
    u = a.length,
    h = f
  const S = {}
  for (; h--; ) S[t[h].key] = h
  const x = [],
    O = new Map(),
    T = new Map()
  for (h = u; h--; ) {
    const w = p(o, a, h),
      E = n(w)
    let k = i.get(E)
    k ? r && k.p(w, e) : ((k = l(E, w)), k.c()),
      O.set(E, (x[h] = k)),
      E in S && T.set(E, Math.abs(h - S[E]))
  }
  const g = new Set(),
    m = new Set()
  function C(w) {
    z(w, 1), w.m(s, c), i.set(w.key, w), (c = w.first), u--
  }
  for (; f && u; ) {
    const w = x[u - 1],
      E = t[f - 1],
      k = w.key,
      Z = E.key
    w === E
      ? ((c = w.first), f--, u--)
      : O.has(Z)
      ? !i.has(k) || g.has(k)
        ? C(w)
        : m.has(Z)
        ? f--
        : T.get(k) > T.get(Z)
        ? (m.add(k), C(w))
        : (g.add(Z), f--)
      : (d(E, i), f--)
  }
  for (; f--; ) {
    const w = t[f]
    O.has(w.key) || d(w, i)
  }
  for (; u; ) C(x[u - 1])
  return x
}
function Bn(t, e) {
  const n = {},
    r = {},
    o = { $$scope: 1 }
  let a = t.length
  for (; a--; ) {
    const i = t[a],
      s = e[a]
    if (s) {
      for (const d in i) d in s || (r[d] = 1)
      for (const d in s) o[d] || ((n[d] = s[d]), (o[d] = 1))
      t[a] = s
    } else for (const d in i) o[d] = 1
  }
  for (const i in r) i in n || (n[i] = void 0)
  return n
}
function vo(t) {
  return typeof t == 'object' && t !== null ? t : {}
}
function Se(t, e, n) {
  const r = t.$$.props[e]
  r !== void 0 && ((t.$$.bound[r] = n), n(t.$$.ctx[r]))
}
function ht(t) {
  t && t.c()
}
function pt(t, e, n, r) {
  const { fragment: o, on_mount: a, on_destroy: i, after_update: s } = t.$$
  o && o.m(e, n),
    r ||
      Jt(() => {
        const d = a.map(uo).filter(Qt)
        i ? i.push(...d) : _t(d), (t.$$.on_mount = [])
      }),
    s.forEach(Jt)
}
function gt(t, e) {
  const n = t.$$
  n.fragment !== null &&
    (_t(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function Yl(t, e) {
  t.$$.dirty[0] === -1 && (_e.push(t), yo(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function Pt(t, e, n, r, o, a, i, s = [-1]) {
  const d = ke
  ve(t)
  const l = (t.$$ = {
    fragment: null,
    ctx: null,
    props: a,
    update: J,
    not_equal: o,
    bound: Kn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: Kn(),
    dirty: s,
    skip_bound: !1,
    root: e.target || d.$$.root,
  })
  i && i(l.root)
  let c = !1
  if (
    ((l.ctx = n
      ? n(t, e.props || {}, (p, f, ...u) => {
          const h = u.length ? u[0] : f
          return (
            l.ctx &&
              o(l.ctx[p], (l.ctx[p] = h)) &&
              (!l.skip_bound && l.bound[p] && l.bound[p](h), c && Yl(t, p)),
            f
          )
        })
      : []),
    l.update(),
    (c = !0),
    _t(l.before_update),
    (l.fragment = r ? r(l.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const p = zl(e.target)
      l.fragment && l.fragment.l(p), p.forEach(y)
    } else l.fragment && l.fragment.c()
    e.intro && z(t.$$.fragment),
      pt(t, e.target, e.anchor, e.customElement),
      bt()
  }
  ve(d)
}
class Ot {
  $destroy() {
    gt(this, 1), (this.$destroy = J)
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
    return (
      r.push(n),
      () => {
        const o = r.indexOf(n)
        o !== -1 && r.splice(o, 1)
      }
    )
  }
  $set(e) {
    this.$$set &&
      !Pl(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
  }
}
const oe = []
function Zl(t, e) {
  return { subscribe: $t(t, e).subscribe }
}
function $t(t, e = J) {
  let n
  const r = new Set()
  function o(s) {
    if (kt(t, s) && ((t = s), n)) {
      const d = !oe.length
      for (const l of r) l[1](), oe.push(l, t)
      if (d) {
        for (let l = 0; l < oe.length; l += 2) oe[l][0](oe[l + 1])
        oe.length = 0
      }
    }
  }
  function a(s) {
    o(s(t))
  }
  function i(s, d = J) {
    const l = [s, d]
    return (
      r.add(l),
      r.size === 1 && (n = e(o) || J),
      s(t),
      () => {
        r.delete(l), r.size === 0 && (n(), (n = null))
      }
    )
  }
  return { set: o, update: a, subscribe: i }
}
function ge(t, e, n) {
  const r = !Array.isArray(t),
    o = r ? [t] : t,
    a = e.length < 2
  return Zl(n, (i) => {
    let s = !1
    const d = []
    let l = 0,
      c = J
    const p = () => {
        if (l) return
        c()
        const u = e(r ? d[0] : d, i)
        a ? i(u) : (c = Qt(u) ? u : J)
      },
      f = o.map((u, h) =>
        Mn(
          u,
          (S) => {
            ;(d[h] = S), (l &= ~(1 << h)), s && p()
          },
          () => {
            l |= 1 << h
          },
        ),
      )
    return (
      (s = !0),
      p(),
      function () {
        _t(f), c()
      }
    )
  })
}
var Jl = function (e) {
  return Ql(e) && !Kl(e)
}
function Ql(t) {
  return !!t && typeof t == 'object'
}
function Kl(t) {
  var e = Object.prototype.toString.call(t)
  return e === '[object RegExp]' || e === '[object Date]' || es(t)
}
var $l = typeof Symbol == 'function' && Symbol.for,
  ts = $l ? Symbol.for('react.element') : 60103
function es(t) {
  return t.$$typeof === ts
}
function ns(t) {
  return Array.isArray(t) ? [] : {}
}
function Ae(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? se(ns(t), t, e) : t
}
function rs(t, e, n) {
  return t.concat(e).map(function (r) {
    return Ae(r, n)
  })
}
function os(t, e) {
  if (!e.customMerge) return se
  var n = e.customMerge(t)
  return typeof n == 'function' ? n : se
}
function as(t) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(t).filter(function (e) {
        return t.propertyIsEnumerable(e)
      })
    : []
}
function tr(t) {
  return Object.keys(t).concat(as(t))
}
function xo(t, e) {
  try {
    return e in t
  } catch {
    return !1
  }
}
function is(t, e) {
  return (
    xo(t, e) &&
    !(
      Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e)
    )
  )
}
function ls(t, e, n) {
  var r = {}
  return (
    n.isMergeableObject(t) &&
      tr(t).forEach(function (o) {
        r[o] = Ae(t[o], n)
      }),
    tr(e).forEach(function (o) {
      is(t, o) ||
        (xo(t, o) && n.isMergeableObject(e[o])
          ? (r[o] = os(o, n)(t[o], e[o], n))
          : (r[o] = Ae(e[o], n)))
    }),
    r
  )
}
function se(t, e, n) {
  ;(n = n || {}),
    (n.arrayMerge = n.arrayMerge || rs),
    (n.isMergeableObject = n.isMergeableObject || Jl),
    (n.cloneUnlessOtherwiseSpecified = Ae)
  var r = Array.isArray(e),
    o = Array.isArray(t),
    a = r === o
  return a ? (r ? n.arrayMerge(t, e, n) : ls(t, e, n)) : Ae(e, n)
}
se.all = function (e, n) {
  if (!Array.isArray(e)) throw new Error('first argument should be an array')
  return e.reduce(function (r, o) {
    return se(r, o, n)
  }, {})
}
var ss = se,
  ds = ss
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var En = function (
  t,
  e,
) {
  return (
    (En =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r
        }) ||
      function (n, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
      }),
    En(t, e)
  )
}
function rn(t, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError(
      'Class extends value ' + String(e) + ' is not a constructor or null',
    )
  En(t, e)
  function n() {
    this.constructor = t
  }
  t.prototype =
    e === null ? Object.create(e) : ((n.prototype = e.prototype), new n())
}
var W = function () {
  return (
    (W =
      Object.assign ||
      function (e) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r]
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
        }
        return e
      }),
    W.apply(this, arguments)
  )
}
function pn(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = e.length, a; r < o; r++)
      (a || !(r in e)) &&
        (a || (a = Array.prototype.slice.call(e, 0, r)), (a[r] = e[r]))
  return t.concat(a || Array.prototype.slice.call(e))
}
var B
;(function (t) {
  ;(t[(t.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = 'EXPECT_ARGUMENT_CLOSING_BRACE'),
    (t[(t.EMPTY_ARGUMENT = 2)] = 'EMPTY_ARGUMENT'),
    (t[(t.MALFORMED_ARGUMENT = 3)] = 'MALFORMED_ARGUMENT'),
    (t[(t.EXPECT_ARGUMENT_TYPE = 4)] = 'EXPECT_ARGUMENT_TYPE'),
    (t[(t.INVALID_ARGUMENT_TYPE = 5)] = 'INVALID_ARGUMENT_TYPE'),
    (t[(t.EXPECT_ARGUMENT_STYLE = 6)] = 'EXPECT_ARGUMENT_STYLE'),
    (t[(t.INVALID_NUMBER_SKELETON = 7)] = 'INVALID_NUMBER_SKELETON'),
    (t[(t.INVALID_DATE_TIME_SKELETON = 8)] = 'INVALID_DATE_TIME_SKELETON'),
    (t[(t.EXPECT_NUMBER_SKELETON = 9)] = 'EXPECT_NUMBER_SKELETON'),
    (t[(t.EXPECT_DATE_TIME_SKELETON = 10)] = 'EXPECT_DATE_TIME_SKELETON'),
    (t[(t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
      'UNCLOSED_QUOTE_IN_ARGUMENT_STYLE'),
    (t[(t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
      'EXPECT_SELECT_ARGUMENT_OPTIONS'),
    (t[(t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
      'EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE'),
    (t[(t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
      'INVALID_PLURAL_ARGUMENT_OFFSET_VALUE'),
    (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
      'EXPECT_SELECT_ARGUMENT_SELECTOR'),
    (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
      'EXPECT_PLURAL_ARGUMENT_SELECTOR'),
    (t[(t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
      'EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT'),
    (t[(t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
      'EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT'),
    (t[(t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
      'INVALID_PLURAL_ARGUMENT_SELECTOR'),
    (t[(t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
      'DUPLICATE_PLURAL_ARGUMENT_SELECTOR'),
    (t[(t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
      'DUPLICATE_SELECT_ARGUMENT_SELECTOR'),
    (t[(t.MISSING_OTHER_CLAUSE = 22)] = 'MISSING_OTHER_CLAUSE'),
    (t[(t.INVALID_TAG = 23)] = 'INVALID_TAG'),
    (t[(t.INVALID_TAG_NAME = 25)] = 'INVALID_TAG_NAME'),
    (t[(t.UNMATCHED_CLOSING_TAG = 26)] = 'UNMATCHED_CLOSING_TAG'),
    (t[(t.UNCLOSED_TAG = 27)] = 'UNCLOSED_TAG')
})(B || (B = {}))
var et
;(function (t) {
  ;(t[(t.literal = 0)] = 'literal'),
    (t[(t.argument = 1)] = 'argument'),
    (t[(t.number = 2)] = 'number'),
    (t[(t.date = 3)] = 'date'),
    (t[(t.time = 4)] = 'time'),
    (t[(t.select = 5)] = 'select'),
    (t[(t.plural = 6)] = 'plural'),
    (t[(t.pound = 7)] = 'pound'),
    (t[(t.tag = 8)] = 'tag')
})(et || (et = {}))
var de
;(function (t) {
  ;(t[(t.number = 0)] = 'number'), (t[(t.dateTime = 1)] = 'dateTime')
})(de || (de = {}))
function er(t) {
  return t.type === et.literal
}
function cs(t) {
  return t.type === et.argument
}
function ko(t) {
  return t.type === et.number
}
function Eo(t) {
  return t.type === et.date
}
function So(t) {
  return t.type === et.time
}
function Ao(t) {
  return t.type === et.select
}
function To(t) {
  return t.type === et.plural
}
function ps(t) {
  return t.type === et.pound
}
function Co(t) {
  return t.type === et.tag
}
function Io(t) {
  return !!(t && typeof t == 'object' && t.type === de.number)
}
function Sn(t) {
  return !!(t && typeof t == 'object' && t.type === de.dateTime)
}
var Po = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  gs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function us(t) {
  var e = {}
  return (
    t.replace(gs, function (n) {
      var r = n.length
      switch (n[0]) {
        case 'G':
          e.era = r === 4 ? 'long' : r === 5 ? 'narrow' : 'short'
          break
        case 'y':
          e.year = r === 2 ? '2-digit' : 'numeric'
          break
        case 'Y':
        case 'u':
        case 'U':
        case 'r':
          throw new RangeError(
            '`Y/u/U/r` (year) patterns are not supported, use `y` instead',
          )
        case 'q':
        case 'Q':
          throw new RangeError('`q/Q` (quarter) patterns are not supported')
        case 'M':
        case 'L':
          e.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][r - 1]
          break
        case 'w':
        case 'W':
          throw new RangeError('`w/W` (week) patterns are not supported')
        case 'd':
          e.day = ['numeric', '2-digit'][r - 1]
          break
        case 'D':
        case 'F':
        case 'g':
          throw new RangeError(
            '`D/F/g` (day) patterns are not supported, use `d` instead',
          )
        case 'E':
          e.weekday = r === 4 ? 'short' : r === 5 ? 'narrow' : 'short'
          break
        case 'e':
          if (r < 4)
            throw new RangeError(
              '`e..eee` (weekday) patterns are not supported',
            )
          e.weekday = ['short', 'long', 'narrow', 'short'][r - 4]
          break
        case 'c':
          if (r < 4)
            throw new RangeError(
              '`c..ccc` (weekday) patterns are not supported',
            )
          e.weekday = ['short', 'long', 'narrow', 'short'][r - 4]
          break
        case 'a':
          e.hour12 = !0
          break
        case 'b':
        case 'B':
          throw new RangeError(
            '`b/B` (period) patterns are not supported, use `a` instead',
          )
        case 'h':
          ;(e.hourCycle = 'h12'), (e.hour = ['numeric', '2-digit'][r - 1])
          break
        case 'H':
          ;(e.hourCycle = 'h23'), (e.hour = ['numeric', '2-digit'][r - 1])
          break
        case 'K':
          ;(e.hourCycle = 'h11'), (e.hour = ['numeric', '2-digit'][r - 1])
          break
        case 'k':
          ;(e.hourCycle = 'h24'), (e.hour = ['numeric', '2-digit'][r - 1])
          break
        case 'j':
        case 'J':
        case 'C':
          throw new RangeError(
            '`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead',
          )
        case 'm':
          e.minute = ['numeric', '2-digit'][r - 1]
          break
        case 's':
          e.second = ['numeric', '2-digit'][r - 1]
          break
        case 'S':
        case 'A':
          throw new RangeError(
            '`S/A` (second) patterns are not supported, use `s` instead',
          )
        case 'z':
          e.timeZoneName = r < 4 ? 'short' : 'long'
          break
        case 'Z':
        case 'O':
        case 'v':
        case 'V':
        case 'X':
        case 'x':
          throw new RangeError(
            '`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead',
          )
      }
      return ''
    }),
    e
  )
}
var fs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i
function ms(t) {
  if (t.length === 0) throw new Error('Number skeleton cannot be empty')
  for (
    var e = t.split(fs).filter(function (f) {
        return f.length > 0
      }),
      n = [],
      r = 0,
      o = e;
    r < o.length;
    r++
  ) {
    var a = o[r],
      i = a.split('/')
    if (i.length === 0) throw new Error('Invalid number skeleton')
    for (var s = i[0], d = i.slice(1), l = 0, c = d; l < c.length; l++) {
      var p = c[l]
      if (p.length === 0) throw new Error('Invalid number skeleton')
    }
    n.push({ stem: s, options: d })
  }
  return n
}
function bs(t) {
  return t.replace(/^(.*?)-/, '')
}
var nr = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
  Oo = /^(@+)?(\+|#+)?[rs]?$/g,
  ws = /(\*)(0+)|(#+)(0+)|(0+)/g,
  Lo = /^(0+)$/
function rr(t) {
  var e = {}
  return (
    t[t.length - 1] === 'r'
      ? (e.roundingPriority = 'morePrecision')
      : t[t.length - 1] === 's' && (e.roundingPriority = 'lessPrecision'),
    t.replace(Oo, function (n, r, o) {
      return (
        typeof o != 'string'
          ? ((e.minimumSignificantDigits = r.length),
            (e.maximumSignificantDigits = r.length))
          : o === '+'
          ? (e.minimumSignificantDigits = r.length)
          : r[0] === '#'
          ? (e.maximumSignificantDigits = r.length)
          : ((e.minimumSignificantDigits = r.length),
            (e.maximumSignificantDigits =
              r.length + (typeof o == 'string' ? o.length : 0))),
        ''
      )
    }),
    e
  )
}
function No(t) {
  switch (t) {
    case 'sign-auto':
      return { signDisplay: 'auto' }
    case 'sign-accounting':
    case '()':
      return { currencySign: 'accounting' }
    case 'sign-always':
    case '+!':
      return { signDisplay: 'always' }
    case 'sign-accounting-always':
    case '()!':
      return { signDisplay: 'always', currencySign: 'accounting' }
    case 'sign-except-zero':
    case '+?':
      return { signDisplay: 'exceptZero' }
    case 'sign-accounting-except-zero':
    case '()?':
      return { signDisplay: 'exceptZero', currencySign: 'accounting' }
    case 'sign-never':
    case '+_':
      return { signDisplay: 'never' }
  }
}
function hs(t) {
  var e
  if (
    (t[0] === 'E' && t[1] === 'E'
      ? ((e = { notation: 'engineering' }), (t = t.slice(2)))
      : t[0] === 'E' && ((e = { notation: 'scientific' }), (t = t.slice(1))),
    e)
  ) {
    var n = t.slice(0, 2)
    if (
      (n === '+!'
        ? ((e.signDisplay = 'always'), (t = t.slice(2)))
        : n === '+?' && ((e.signDisplay = 'exceptZero'), (t = t.slice(2))),
      !Lo.test(t))
    )
      throw new Error('Malformed concise eng/scientific notation')
    e.minimumIntegerDigits = t.length
  }
  return e
}
function or(t) {
  var e = {},
    n = No(t)
  return n || e
}
function _s(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var o = r[n]
    switch (o.stem) {
      case 'percent':
      case '%':
        e.style = 'percent'
        continue
      case '%x100':
        ;(e.style = 'percent'), (e.scale = 100)
        continue
      case 'currency':
        ;(e.style = 'currency'), (e.currency = o.options[0])
        continue
      case 'group-off':
      case ',_':
        e.useGrouping = !1
        continue
      case 'precision-integer':
      case '.':
        e.maximumFractionDigits = 0
        continue
      case 'measure-unit':
      case 'unit':
        ;(e.style = 'unit'), (e.unit = bs(o.options[0]))
        continue
      case 'compact-short':
      case 'K':
        ;(e.notation = 'compact'), (e.compactDisplay = 'short')
        continue
      case 'compact-long':
      case 'KK':
        ;(e.notation = 'compact'), (e.compactDisplay = 'long')
        continue
      case 'scientific':
        e = W(
          W(W({}, e), { notation: 'scientific' }),
          o.options.reduce(function (d, l) {
            return W(W({}, d), or(l))
          }, {}),
        )
        continue
      case 'engineering':
        e = W(
          W(W({}, e), { notation: 'engineering' }),
          o.options.reduce(function (d, l) {
            return W(W({}, d), or(l))
          }, {}),
        )
        continue
      case 'notation-simple':
        e.notation = 'standard'
        continue
      case 'unit-width-narrow':
        ;(e.currencyDisplay = 'narrowSymbol'), (e.unitDisplay = 'narrow')
        continue
      case 'unit-width-short':
        ;(e.currencyDisplay = 'code'), (e.unitDisplay = 'short')
        continue
      case 'unit-width-full-name':
        ;(e.currencyDisplay = 'name'), (e.unitDisplay = 'long')
        continue
      case 'unit-width-iso-code':
        e.currencyDisplay = 'symbol'
        continue
      case 'scale':
        e.scale = parseFloat(o.options[0])
        continue
      case 'integer-width':
        if (o.options.length > 1)
          throw new RangeError(
            'integer-width stems only accept a single optional option',
          )
        o.options[0].replace(ws, function (d, l, c, p, f, u) {
          if (l) e.minimumIntegerDigits = c.length
          else {
            if (p && f)
              throw new Error(
                'We currently do not support maximum integer digits',
              )
            if (u)
              throw new Error(
                'We currently do not support exact integer digits',
              )
          }
          return ''
        })
        continue
    }
    if (Lo.test(o.stem)) {
      e.minimumIntegerDigits = o.stem.length
      continue
    }
    if (nr.test(o.stem)) {
      if (o.options.length > 1)
        throw new RangeError(
          'Fraction-precision stems only accept a single optional option',
        )
      o.stem.replace(nr, function (d, l, c, p, f, u) {
        return (
          c === '*'
            ? (e.minimumFractionDigits = l.length)
            : p && p[0] === '#'
            ? (e.maximumFractionDigits = p.length)
            : f && u
            ? ((e.minimumFractionDigits = f.length),
              (e.maximumFractionDigits = f.length + u.length))
            : ((e.minimumFractionDigits = l.length),
              (e.maximumFractionDigits = l.length)),
          ''
        )
      })
      var a = o.options[0]
      a === 'w'
        ? (e = W(W({}, e), { trailingZeroDisplay: 'stripIfInteger' }))
        : a && (e = W(W({}, e), rr(a)))
      continue
    }
    if (Oo.test(o.stem)) {
      e = W(W({}, e), rr(o.stem))
      continue
    }
    var i = No(o.stem)
    i && (e = W(W({}, e), i))
    var s = hs(o.stem)
    s && (e = W(W({}, e), s))
  }
  return e
}
var gn,
  ys = new RegExp('^'.concat(Po.source, '*')),
  vs = new RegExp(''.concat(Po.source, '*$'))
function H(t, e) {
  return { start: t, end: e }
}
var xs = !!String.prototype.startsWith,
  ks = !!String.fromCodePoint,
  Es = !!Object.fromEntries,
  Ss = !!String.prototype.codePointAt,
  As = !!String.prototype.trimStart,
  Ts = !!String.prototype.trimEnd,
  Cs = !!Number.isSafeInteger,
  Is = Cs
    ? Number.isSafeInteger
    : function (t) {
        return (
          typeof t == 'number' &&
          isFinite(t) &&
          Math.floor(t) === t &&
          Math.abs(t) <= 9007199254740991
        )
      },
  An = !0
try {
  var Ps = Mo('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu')
  An = ((gn = Ps.exec('a')) === null || gn === void 0 ? void 0 : gn[0]) === 'a'
} catch {
  An = !1
}
var ar = xs
    ? function (e, n, r) {
        return e.startsWith(n, r)
      }
    : function (e, n, r) {
        return e.slice(r, r + n.length) === n
      },
  Tn = ks
    ? String.fromCodePoint
    : function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
        for (var r = '', o = e.length, a = 0, i; o > a; ) {
          if (((i = e[a++]), i > 1114111))
            throw RangeError(i + ' is not a valid code point')
          r +=
            i < 65536
              ? String.fromCharCode(i)
              : String.fromCharCode(
                  ((i -= 65536) >> 10) + 55296,
                  (i % 1024) + 56320,
                )
        }
        return r
      },
  ir = Es
    ? Object.fromEntries
    : function (e) {
        for (var n = {}, r = 0, o = e; r < o.length; r++) {
          var a = o[r],
            i = a[0],
            s = a[1]
          n[i] = s
        }
        return n
      },
  Ro = Ss
    ? function (e, n) {
        return e.codePointAt(n)
      }
    : function (e, n) {
        var r = e.length
        if (!(n < 0 || n >= r)) {
          var o = e.charCodeAt(n),
            a
          return o < 55296 ||
            o > 56319 ||
            n + 1 === r ||
            (a = e.charCodeAt(n + 1)) < 56320 ||
            a > 57343
            ? o
            : ((o - 55296) << 10) + (a - 56320) + 65536
        }
      },
  Os = As
    ? function (e) {
        return e.trimStart()
      }
    : function (e) {
        return e.replace(ys, '')
      },
  Ls = Ts
    ? function (e) {
        return e.trimEnd()
      }
    : function (e) {
        return e.replace(vs, '')
      }
function Mo(t, e) {
  return new RegExp(t, e)
}
var Cn
if (An) {
  var lr = Mo('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu')
  Cn = function (e, n) {
    var r
    lr.lastIndex = n
    var o = lr.exec(e)
    return (r = o[1]) !== null && r !== void 0 ? r : ''
  }
} else
  Cn = function (e, n) {
    for (var r = []; ; ) {
      var o = Ro(e, n)
      if (o === void 0 || zo(o) || zs(o)) break
      r.push(o), (n += o >= 65536 ? 2 : 1)
    }
    return Tn.apply(void 0, r)
  }
var Ns = (function () {
  function t(e, n) {
    n === void 0 && (n = {}),
      (this.message = e),
      (this.position = { offset: 0, line: 1, column: 1 }),
      (this.ignoreTag = !!n.ignoreTag),
      (this.requiresOtherClause = !!n.requiresOtherClause),
      (this.shouldParseSkeletons = !!n.shouldParseSkeletons)
  }
  return (
    (t.prototype.parse = function () {
      if (this.offset() !== 0) throw Error('parser can only be used once')
      return this.parseMessage(0, '', !1)
    }),
    (t.prototype.parseMessage = function (e, n, r) {
      for (var o = []; !this.isEOF(); ) {
        var a = this.char()
        if (a === 123) {
          var i = this.parseArgument(e, r)
          if (i.err) return i
          o.push(i.val)
        } else {
          if (a === 125 && e > 0) break
          if (a === 35 && (n === 'plural' || n === 'selectordinal')) {
            var s = this.clonePosition()
            this.bump(),
              o.push({ type: et.pound, location: H(s, this.clonePosition()) })
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r) break
            return this.error(
              B.UNMATCHED_CLOSING_TAG,
              H(this.clonePosition(), this.clonePosition()),
            )
          } else if (a === 60 && !this.ignoreTag && In(this.peek() || 0)) {
            var i = this.parseTag(e, n)
            if (i.err) return i
            o.push(i.val)
          } else {
            var i = this.parseLiteral(e, n)
            if (i.err) return i
            o.push(i.val)
          }
        }
      }
      return { val: o, err: null }
    }),
    (t.prototype.parseTag = function (e, n) {
      var r = this.clonePosition()
      this.bump()
      var o = this.parseTagName()
      if ((this.bumpSpace(), this.bumpIf('/>')))
        return {
          val: {
            type: et.literal,
            value: '<'.concat(o, '/>'),
            location: H(r, this.clonePosition()),
          },
          err: null,
        }
      if (this.bumpIf('>')) {
        var a = this.parseMessage(e + 1, n, !0)
        if (a.err) return a
        var i = a.val,
          s = this.clonePosition()
        if (this.bumpIf('</')) {
          if (this.isEOF() || !In(this.char()))
            return this.error(B.INVALID_TAG, H(s, this.clonePosition()))
          var d = this.clonePosition(),
            l = this.parseTagName()
          return o !== l
            ? this.error(B.UNMATCHED_CLOSING_TAG, H(d, this.clonePosition()))
            : (this.bumpSpace(),
              this.bumpIf('>')
                ? {
                    val: {
                      type: et.tag,
                      value: o,
                      children: i,
                      location: H(r, this.clonePosition()),
                    },
                    err: null,
                  }
                : this.error(B.INVALID_TAG, H(s, this.clonePosition())))
        } else return this.error(B.UNCLOSED_TAG, H(r, this.clonePosition()))
      } else return this.error(B.INVALID_TAG, H(r, this.clonePosition()))
    }),
    (t.prototype.parseTagName = function () {
      var e = this.offset()
      for (this.bump(); !this.isEOF() && Ms(this.char()); ) this.bump()
      return this.message.slice(e, this.offset())
    }),
    (t.prototype.parseLiteral = function (e, n) {
      for (var r = this.clonePosition(), o = ''; ; ) {
        var a = this.tryParseQuote(n)
        if (a) {
          o += a
          continue
        }
        var i = this.tryParseUnquoted(e, n)
        if (i) {
          o += i
          continue
        }
        var s = this.tryParseLeftAngleBracket()
        if (s) {
          o += s
          continue
        }
        break
      }
      var d = H(r, this.clonePosition())
      return { val: { type: et.literal, value: o, location: d }, err: null }
    }),
    (t.prototype.tryParseLeftAngleBracket = function () {
      return !this.isEOF() &&
        this.char() === 60 &&
        (this.ignoreTag || !Rs(this.peek() || 0))
        ? (this.bump(), '<')
        : null
    }),
    (t.prototype.tryParseQuote = function (e) {
      if (this.isEOF() || this.char() !== 39) return null
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'"
        case 123:
        case 60:
        case 62:
        case 125:
          break
        case 35:
          if (e === 'plural' || e === 'selectordinal') break
          return null
        default:
          return null
      }
      this.bump()
      var n = [this.char()]
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char()
        if (r === 39)
          if (this.peek() === 39) n.push(39), this.bump()
          else {
            this.bump()
            break
          }
        else n.push(r)
        this.bump()
      }
      return Tn.apply(void 0, n)
    }),
    (t.prototype.tryParseUnquoted = function (e, n) {
      if (this.isEOF()) return null
      var r = this.char()
      return r === 60 ||
        r === 123 ||
        (r === 35 && (n === 'plural' || n === 'selectordinal')) ||
        (r === 125 && e > 0)
        ? null
        : (this.bump(), Tn(r))
    }),
    (t.prototype.parseArgument = function (e, n) {
      var r = this.clonePosition()
      if ((this.bump(), this.bumpSpace(), this.isEOF()))
        return this.error(
          B.EXPECT_ARGUMENT_CLOSING_BRACE,
          H(r, this.clonePosition()),
        )
      if (this.char() === 125)
        return (
          this.bump(), this.error(B.EMPTY_ARGUMENT, H(r, this.clonePosition()))
        )
      var o = this.parseIdentifierIfPossible().value
      if (!o)
        return this.error(B.MALFORMED_ARGUMENT, H(r, this.clonePosition()))
      if ((this.bumpSpace(), this.isEOF()))
        return this.error(
          B.EXPECT_ARGUMENT_CLOSING_BRACE,
          H(r, this.clonePosition()),
        )
      switch (this.char()) {
        case 125:
          return (
            this.bump(),
            {
              val: {
                type: et.argument,
                value: o,
                location: H(r, this.clonePosition()),
              },
              err: null,
            }
          )
        case 44:
          return (
            this.bump(),
            this.bumpSpace(),
            this.isEOF()
              ? this.error(
                  B.EXPECT_ARGUMENT_CLOSING_BRACE,
                  H(r, this.clonePosition()),
                )
              : this.parseArgumentOptions(e, n, o, r)
          )
        default:
          return this.error(B.MALFORMED_ARGUMENT, H(r, this.clonePosition()))
      }
    }),
    (t.prototype.parseIdentifierIfPossible = function () {
      var e = this.clonePosition(),
        n = this.offset(),
        r = Cn(this.message, n),
        o = n + r.length
      this.bumpTo(o)
      var a = this.clonePosition(),
        i = H(e, a)
      return { value: r, location: i }
    }),
    (t.prototype.parseArgumentOptions = function (e, n, r, o) {
      var a,
        i = this.clonePosition(),
        s = this.parseIdentifierIfPossible().value,
        d = this.clonePosition()
      switch (s) {
        case '':
          return this.error(B.EXPECT_ARGUMENT_TYPE, H(i, d))
        case 'number':
        case 'date':
        case 'time': {
          this.bumpSpace()
          var l = null
          if (this.bumpIf(',')) {
            this.bumpSpace()
            var c = this.clonePosition(),
              p = this.parseSimpleArgStyleIfPossible()
            if (p.err) return p
            var f = Ls(p.val)
            if (f.length === 0)
              return this.error(
                B.EXPECT_ARGUMENT_STYLE,
                H(this.clonePosition(), this.clonePosition()),
              )
            var u = H(c, this.clonePosition())
            l = { style: f, styleLocation: u }
          }
          var h = this.tryParseArgumentClose(o)
          if (h.err) return h
          var S = H(o, this.clonePosition())
          if (l && ar(l?.style, '::', 0)) {
            var x = Os(l.style.slice(2))
            if (s === 'number') {
              var p = this.parseNumberSkeletonFromString(x, l.styleLocation)
              return p.err
                ? p
                : {
                    val: {
                      type: et.number,
                      value: r,
                      location: S,
                      style: p.val,
                    },
                    err: null,
                  }
            } else {
              if (x.length === 0)
                return this.error(B.EXPECT_DATE_TIME_SKELETON, S)
              var f = {
                  type: de.dateTime,
                  pattern: x,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? us(x) : {},
                },
                O = s === 'date' ? et.date : et.time
              return {
                val: { type: O, value: r, location: S, style: f },
                err: null,
              }
            }
          }
          return {
            val: {
              type:
                s === 'number' ? et.number : s === 'date' ? et.date : et.time,
              value: r,
              location: S,
              style: (a = l?.style) !== null && a !== void 0 ? a : null,
            },
            err: null,
          }
        }
        case 'plural':
        case 'selectordinal':
        case 'select': {
          var T = this.clonePosition()
          if ((this.bumpSpace(), !this.bumpIf(',')))
            return this.error(B.EXPECT_SELECT_ARGUMENT_OPTIONS, H(T, W({}, T)))
          this.bumpSpace()
          var g = this.parseIdentifierIfPossible(),
            m = 0
          if (s !== 'select' && g.value === 'offset') {
            if (!this.bumpIf(':'))
              return this.error(
                B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                H(this.clonePosition(), this.clonePosition()),
              )
            this.bumpSpace()
            var p = this.tryParseDecimalInteger(
              B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              B.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
            )
            if (p.err) return p
            this.bumpSpace(),
              (g = this.parseIdentifierIfPossible()),
              (m = p.val)
          }
          var C = this.tryParsePluralOrSelectOptions(e, s, n, g)
          if (C.err) return C
          var h = this.tryParseArgumentClose(o)
          if (h.err) return h
          var w = H(o, this.clonePosition())
          return s === 'select'
            ? {
                val: {
                  type: et.select,
                  value: r,
                  options: ir(C.val),
                  location: w,
                },
                err: null,
              }
            : {
                val: {
                  type: et.plural,
                  value: r,
                  options: ir(C.val),
                  offset: m,
                  pluralType: s === 'plural' ? 'cardinal' : 'ordinal',
                  location: w,
                },
                err: null,
              }
        }
        default:
          return this.error(B.INVALID_ARGUMENT_TYPE, H(i, d))
      }
    }),
    (t.prototype.tryParseArgumentClose = function (e) {
      return this.isEOF() || this.char() !== 125
        ? this.error(
            B.EXPECT_ARGUMENT_CLOSING_BRACE,
            H(e, this.clonePosition()),
          )
        : (this.bump(), { val: !0, err: null })
    }),
    (t.prototype.parseSimpleArgStyleIfPossible = function () {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char()
        switch (r) {
          case 39: {
            this.bump()
            var o = this.clonePosition()
            if (!this.bumpUntil("'"))
              return this.error(
                B.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                H(o, this.clonePosition()),
              )
            this.bump()
            break
          }
          case 123: {
            ;(e += 1), this.bump()
            break
          }
          case 125: {
            if (e > 0) e -= 1
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null,
              }
            break
          }
          default:
            this.bump()
            break
        }
      }
      return { val: this.message.slice(n.offset, this.offset()), err: null }
    }),
    (t.prototype.parseNumberSkeletonFromString = function (e, n) {
      var r = []
      try {
        r = ms(e)
      } catch {
        return this.error(B.INVALID_NUMBER_SKELETON, n)
      }
      return {
        val: {
          type: de.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? _s(r) : {},
        },
        err: null,
      }
    }),
    (t.prototype.tryParsePluralOrSelectOptions = function (e, n, r, o) {
      for (
        var a, i = !1, s = [], d = new Set(), l = o.value, c = o.location;
        ;

      ) {
        if (l.length === 0) {
          var p = this.clonePosition()
          if (n !== 'select' && this.bumpIf('=')) {
            var f = this.tryParseDecimalInteger(
              B.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              B.INVALID_PLURAL_ARGUMENT_SELECTOR,
            )
            if (f.err) return f
            ;(c = H(p, this.clonePosition())),
              (l = this.message.slice(p.offset, this.offset()))
          } else break
        }
        if (d.has(l))
          return this.error(
            n === 'select'
              ? B.DUPLICATE_SELECT_ARGUMENT_SELECTOR
              : B.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
            c,
          )
        l === 'other' && (i = !0), this.bumpSpace()
        var u = this.clonePosition()
        if (!this.bumpIf('{'))
          return this.error(
            n === 'select'
              ? B.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
              : B.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
            H(this.clonePosition(), this.clonePosition()),
          )
        var h = this.parseMessage(e + 1, n, r)
        if (h.err) return h
        var S = this.tryParseArgumentClose(u)
        if (S.err) return S
        s.push([l, { value: h.val, location: H(u, this.clonePosition()) }]),
          d.add(l),
          this.bumpSpace(),
          (a = this.parseIdentifierIfPossible()),
          (l = a.value),
          (c = a.location)
      }
      return s.length === 0
        ? this.error(
            n === 'select'
              ? B.EXPECT_SELECT_ARGUMENT_SELECTOR
              : B.EXPECT_PLURAL_ARGUMENT_SELECTOR,
            H(this.clonePosition(), this.clonePosition()),
          )
        : this.requiresOtherClause && !i
        ? this.error(
            B.MISSING_OTHER_CLAUSE,
            H(this.clonePosition(), this.clonePosition()),
          )
        : { val: s, err: null }
    }),
    (t.prototype.tryParseDecimalInteger = function (e, n) {
      var r = 1,
        o = this.clonePosition()
      this.bumpIf('+') || (this.bumpIf('-') && (r = -1))
      for (var a = !1, i = 0; !this.isEOF(); ) {
        var s = this.char()
        if (s >= 48 && s <= 57) (a = !0), (i = i * 10 + (s - 48)), this.bump()
        else break
      }
      var d = H(o, this.clonePosition())
      return a
        ? ((i *= r), Is(i) ? { val: i, err: null } : this.error(n, d))
        : this.error(e, d)
    }),
    (t.prototype.offset = function () {
      return this.position.offset
    }),
    (t.prototype.isEOF = function () {
      return this.offset() === this.message.length
    }),
    (t.prototype.clonePosition = function () {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column,
      }
    }),
    (t.prototype.char = function () {
      var e = this.position.offset
      if (e >= this.message.length) throw Error('out of bound')
      var n = Ro(this.message, e)
      if (n === void 0)
        throw Error(
          'Offset '.concat(e, ' is at invalid UTF-16 code unit boundary'),
        )
      return n
    }),
    (t.prototype.error = function (e, n) {
      return { val: null, err: { kind: e, message: this.message, location: n } }
    }),
    (t.prototype.bump = function () {
      if (!this.isEOF()) {
        var e = this.char()
        e === 10
          ? ((this.position.line += 1),
            (this.position.column = 1),
            (this.position.offset += 1))
          : ((this.position.column += 1),
            (this.position.offset += e < 65536 ? 1 : 2))
      }
    }),
    (t.prototype.bumpIf = function (e) {
      if (ar(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++) this.bump()
        return !0
      }
      return !1
    }),
    (t.prototype.bumpUntil = function (e) {
      var n = this.offset(),
        r = this.message.indexOf(e, n)
      return r >= 0
        ? (this.bumpTo(r), !0)
        : (this.bumpTo(this.message.length), !1)
    }),
    (t.prototype.bumpTo = function (e) {
      if (this.offset() > e)
        throw Error(
          'targetOffset '
            .concat(e, ' must be greater than or equal to the current offset ')
            .concat(this.offset()),
        )
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset()
        if (n === e) break
        if (n > e)
          throw Error(
            'targetOffset '.concat(
              e,
              ' is at invalid UTF-16 code unit boundary',
            ),
          )
        if ((this.bump(), this.isEOF())) break
      }
    }),
    (t.prototype.bumpSpace = function () {
      for (; !this.isEOF() && zo(this.char()); ) this.bump()
    }),
    (t.prototype.peek = function () {
      if (this.isEOF()) return null
      var e = this.char(),
        n = this.offset(),
        r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1))
      return r ?? null
    }),
    t
  )
})()
function In(t) {
  return (t >= 97 && t <= 122) || (t >= 65 && t <= 90)
}
function Rs(t) {
  return In(t) || t === 47
}
function Ms(t) {
  return (
    t === 45 ||
    t === 46 ||
    (t >= 48 && t <= 57) ||
    t === 95 ||
    (t >= 97 && t <= 122) ||
    (t >= 65 && t <= 90) ||
    t == 183 ||
    (t >= 192 && t <= 214) ||
    (t >= 216 && t <= 246) ||
    (t >= 248 && t <= 893) ||
    (t >= 895 && t <= 8191) ||
    (t >= 8204 && t <= 8205) ||
    (t >= 8255 && t <= 8256) ||
    (t >= 8304 && t <= 8591) ||
    (t >= 11264 && t <= 12271) ||
    (t >= 12289 && t <= 55295) ||
    (t >= 63744 && t <= 64975) ||
    (t >= 65008 && t <= 65533) ||
    (t >= 65536 && t <= 983039)
  )
}
function zo(t) {
  return (
    (t >= 9 && t <= 13) ||
    t === 32 ||
    t === 133 ||
    (t >= 8206 && t <= 8207) ||
    t === 8232 ||
    t === 8233
  )
}
function zs(t) {
  return (
    (t >= 33 && t <= 35) ||
    t === 36 ||
    (t >= 37 && t <= 39) ||
    t === 40 ||
    t === 41 ||
    t === 42 ||
    t === 43 ||
    t === 44 ||
    t === 45 ||
    (t >= 46 && t <= 47) ||
    (t >= 58 && t <= 59) ||
    (t >= 60 && t <= 62) ||
    (t >= 63 && t <= 64) ||
    t === 91 ||
    t === 92 ||
    t === 93 ||
    t === 94 ||
    t === 96 ||
    t === 123 ||
    t === 124 ||
    t === 125 ||
    t === 126 ||
    t === 161 ||
    (t >= 162 && t <= 165) ||
    t === 166 ||
    t === 167 ||
    t === 169 ||
    t === 171 ||
    t === 172 ||
    t === 174 ||
    t === 176 ||
    t === 177 ||
    t === 182 ||
    t === 187 ||
    t === 191 ||
    t === 215 ||
    t === 247 ||
    (t >= 8208 && t <= 8213) ||
    (t >= 8214 && t <= 8215) ||
    t === 8216 ||
    t === 8217 ||
    t === 8218 ||
    (t >= 8219 && t <= 8220) ||
    t === 8221 ||
    t === 8222 ||
    t === 8223 ||
    (t >= 8224 && t <= 8231) ||
    (t >= 8240 && t <= 8248) ||
    t === 8249 ||
    t === 8250 ||
    (t >= 8251 && t <= 8254) ||
    (t >= 8257 && t <= 8259) ||
    t === 8260 ||
    t === 8261 ||
    t === 8262 ||
    (t >= 8263 && t <= 8273) ||
    t === 8274 ||
    t === 8275 ||
    (t >= 8277 && t <= 8286) ||
    (t >= 8592 && t <= 8596) ||
    (t >= 8597 && t <= 8601) ||
    (t >= 8602 && t <= 8603) ||
    (t >= 8604 && t <= 8607) ||
    t === 8608 ||
    (t >= 8609 && t <= 8610) ||
    t === 8611 ||
    (t >= 8612 && t <= 8613) ||
    t === 8614 ||
    (t >= 8615 && t <= 8621) ||
    t === 8622 ||
    (t >= 8623 && t <= 8653) ||
    (t >= 8654 && t <= 8655) ||
    (t >= 8656 && t <= 8657) ||
    t === 8658 ||
    t === 8659 ||
    t === 8660 ||
    (t >= 8661 && t <= 8691) ||
    (t >= 8692 && t <= 8959) ||
    (t >= 8960 && t <= 8967) ||
    t === 8968 ||
    t === 8969 ||
    t === 8970 ||
    t === 8971 ||
    (t >= 8972 && t <= 8991) ||
    (t >= 8992 && t <= 8993) ||
    (t >= 8994 && t <= 9e3) ||
    t === 9001 ||
    t === 9002 ||
    (t >= 9003 && t <= 9083) ||
    t === 9084 ||
    (t >= 9085 && t <= 9114) ||
    (t >= 9115 && t <= 9139) ||
    (t >= 9140 && t <= 9179) ||
    (t >= 9180 && t <= 9185) ||
    (t >= 9186 && t <= 9254) ||
    (t >= 9255 && t <= 9279) ||
    (t >= 9280 && t <= 9290) ||
    (t >= 9291 && t <= 9311) ||
    (t >= 9472 && t <= 9654) ||
    t === 9655 ||
    (t >= 9656 && t <= 9664) ||
    t === 9665 ||
    (t >= 9666 && t <= 9719) ||
    (t >= 9720 && t <= 9727) ||
    (t >= 9728 && t <= 9838) ||
    t === 9839 ||
    (t >= 9840 && t <= 10087) ||
    t === 10088 ||
    t === 10089 ||
    t === 10090 ||
    t === 10091 ||
    t === 10092 ||
    t === 10093 ||
    t === 10094 ||
    t === 10095 ||
    t === 10096 ||
    t === 10097 ||
    t === 10098 ||
    t === 10099 ||
    t === 10100 ||
    t === 10101 ||
    (t >= 10132 && t <= 10175) ||
    (t >= 10176 && t <= 10180) ||
    t === 10181 ||
    t === 10182 ||
    (t >= 10183 && t <= 10213) ||
    t === 10214 ||
    t === 10215 ||
    t === 10216 ||
    t === 10217 ||
    t === 10218 ||
    t === 10219 ||
    t === 10220 ||
    t === 10221 ||
    t === 10222 ||
    t === 10223 ||
    (t >= 10224 && t <= 10239) ||
    (t >= 10240 && t <= 10495) ||
    (t >= 10496 && t <= 10626) ||
    t === 10627 ||
    t === 10628 ||
    t === 10629 ||
    t === 10630 ||
    t === 10631 ||
    t === 10632 ||
    t === 10633 ||
    t === 10634 ||
    t === 10635 ||
    t === 10636 ||
    t === 10637 ||
    t === 10638 ||
    t === 10639 ||
    t === 10640 ||
    t === 10641 ||
    t === 10642 ||
    t === 10643 ||
    t === 10644 ||
    t === 10645 ||
    t === 10646 ||
    t === 10647 ||
    t === 10648 ||
    (t >= 10649 && t <= 10711) ||
    t === 10712 ||
    t === 10713 ||
    t === 10714 ||
    t === 10715 ||
    (t >= 10716 && t <= 10747) ||
    t === 10748 ||
    t === 10749 ||
    (t >= 10750 && t <= 11007) ||
    (t >= 11008 && t <= 11055) ||
    (t >= 11056 && t <= 11076) ||
    (t >= 11077 && t <= 11078) ||
    (t >= 11079 && t <= 11084) ||
    (t >= 11085 && t <= 11123) ||
    (t >= 11124 && t <= 11125) ||
    (t >= 11126 && t <= 11157) ||
    t === 11158 ||
    (t >= 11159 && t <= 11263) ||
    (t >= 11776 && t <= 11777) ||
    t === 11778 ||
    t === 11779 ||
    t === 11780 ||
    t === 11781 ||
    (t >= 11782 && t <= 11784) ||
    t === 11785 ||
    t === 11786 ||
    t === 11787 ||
    t === 11788 ||
    t === 11789 ||
    (t >= 11790 && t <= 11798) ||
    t === 11799 ||
    (t >= 11800 && t <= 11801) ||
    t === 11802 ||
    t === 11803 ||
    t === 11804 ||
    t === 11805 ||
    (t >= 11806 && t <= 11807) ||
    t === 11808 ||
    t === 11809 ||
    t === 11810 ||
    t === 11811 ||
    t === 11812 ||
    t === 11813 ||
    t === 11814 ||
    t === 11815 ||
    t === 11816 ||
    t === 11817 ||
    (t >= 11818 && t <= 11822) ||
    t === 11823 ||
    (t >= 11824 && t <= 11833) ||
    (t >= 11834 && t <= 11835) ||
    (t >= 11836 && t <= 11839) ||
    t === 11840 ||
    t === 11841 ||
    t === 11842 ||
    (t >= 11843 && t <= 11855) ||
    (t >= 11856 && t <= 11857) ||
    t === 11858 ||
    (t >= 11859 && t <= 11903) ||
    (t >= 12289 && t <= 12291) ||
    t === 12296 ||
    t === 12297 ||
    t === 12298 ||
    t === 12299 ||
    t === 12300 ||
    t === 12301 ||
    t === 12302 ||
    t === 12303 ||
    t === 12304 ||
    t === 12305 ||
    (t >= 12306 && t <= 12307) ||
    t === 12308 ||
    t === 12309 ||
    t === 12310 ||
    t === 12311 ||
    t === 12312 ||
    t === 12313 ||
    t === 12314 ||
    t === 12315 ||
    t === 12316 ||
    t === 12317 ||
    (t >= 12318 && t <= 12319) ||
    t === 12320 ||
    t === 12336 ||
    t === 64830 ||
    t === 64831 ||
    (t >= 65093 && t <= 65094)
  )
}
function Pn(t) {
  t.forEach(function (e) {
    if ((delete e.location, Ao(e) || To(e)))
      for (var n in e.options)
        delete e.options[n].location, Pn(e.options[n].value)
    else
      (ko(e) && Io(e.style)) || ((Eo(e) || So(e)) && Sn(e.style))
        ? delete e.style.location
        : Co(e) && Pn(e.children)
  })
}
function js(t, e) {
  e === void 0 && (e = {}),
    (e = W({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e))
  var n = new Ns(t, e).parse()
  if (n.err) {
    var r = SyntaxError(B[n.err.kind])
    throw (
      ((r.location = n.err.location), (r.originalMessage = n.err.message), r)
    )
  }
  return e?.captureLocation || Pn(n.val), n.val
}
function un(t, e) {
  var n = e && e.cache ? e.cache : Xs,
    r = e && e.serializer ? e.serializer : Vs,
    o = e && e.strategy ? e.strategy : Ds
  return o(t, { cache: n, serializer: r })
}
function Fs(t) {
  return t == null || typeof t == 'number' || typeof t == 'boolean'
}
function jo(t, e, n, r) {
  var o = Fs(r) ? r : n(r),
    a = e.get(o)
  return typeof a > 'u' && ((a = t.call(this, r)), e.set(o, a)), a
}
function Fo(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3),
    o = n(r),
    a = e.get(o)
  return typeof a > 'u' && ((a = t.apply(this, r)), e.set(o, a)), a
}
function Hn(t, e, n, r, o) {
  return n.bind(e, t, r, o)
}
function Ds(t, e) {
  var n = t.length === 1 ? jo : Fo
  return Hn(t, this, n, e.cache.create(), e.serializer)
}
function Us(t, e) {
  return Hn(t, this, Fo, e.cache.create(), e.serializer)
}
function Gs(t, e) {
  return Hn(t, this, jo, e.cache.create(), e.serializer)
}
var Vs = function () {
  return JSON.stringify(arguments)
}
function Wn() {
  this.cache = Object.create(null)
}
Wn.prototype.get = function (t) {
  return this.cache[t]
}
Wn.prototype.set = function (t, e) {
  this.cache[t] = e
}
var Xs = {
    create: function () {
      return new Wn()
    },
  },
  fn = { variadic: Us, monadic: Gs },
  ce
;(function (t) {
  ;(t.MISSING_VALUE = 'MISSING_VALUE'),
    (t.INVALID_VALUE = 'INVALID_VALUE'),
    (t.MISSING_INTL_API = 'MISSING_INTL_API')
})(ce || (ce = {}))
var on = (function (t) {
    rn(e, t)
    function e(n, r, o) {
      var a = t.call(this, n) || this
      return (a.code = r), (a.originalMessage = o), a
    }
    return (
      (e.prototype.toString = function () {
        return '[formatjs Error: '.concat(this.code, '] ').concat(this.message)
      }),
      e
    )
  })(Error),
  sr = (function (t) {
    rn(e, t)
    function e(n, r, o, a) {
      return (
        t.call(
          this,
          'Invalid values for "'
            .concat(n, '": "')
            .concat(r, '". Options are "')
            .concat(Object.keys(o).join('", "'), '"'),
          ce.INVALID_VALUE,
          a,
        ) || this
      )
    }
    return e
  })(on),
  qs = (function (t) {
    rn(e, t)
    function e(n, r, o) {
      return (
        t.call(
          this,
          'Value for "'.concat(n, '" must be of type ').concat(r),
          ce.INVALID_VALUE,
          o,
        ) || this
      )
    }
    return e
  })(on),
  Bs = (function (t) {
    rn(e, t)
    function e(n, r) {
      return (
        t.call(
          this,
          'The intl string context variable "'
            .concat(n, '" was not provided to the string "')
            .concat(r, '"'),
          ce.MISSING_VALUE,
          r,
        ) || this
      )
    }
    return e
  })(on),
  ct
;(function (t) {
  ;(t[(t.literal = 0)] = 'literal'), (t[(t.object = 1)] = 'object')
})(ct || (ct = {}))
function Hs(t) {
  return t.length < 2
    ? t
    : t.reduce(function (e, n) {
        var r = e[e.length - 1]
        return (
          !r || r.type !== ct.literal || n.type !== ct.literal
            ? e.push(n)
            : (r.value += n.value),
          e
        )
      }, [])
}
function Ws(t) {
  return typeof t == 'function'
}
function qe(t, e, n, r, o, a, i) {
  if (t.length === 1 && er(t[0]))
    return [{ type: ct.literal, value: t[0].value }]
  for (var s = [], d = 0, l = t; d < l.length; d++) {
    var c = l[d]
    if (er(c)) {
      s.push({ type: ct.literal, value: c.value })
      continue
    }
    if (ps(c)) {
      typeof a == 'number' &&
        s.push({ type: ct.literal, value: n.getNumberFormat(e).format(a) })
      continue
    }
    var p = c.value
    if (!(o && p in o)) throw new Bs(p, i)
    var f = o[p]
    if (cs(c)) {
      ;(!f || typeof f == 'string' || typeof f == 'number') &&
        (f = typeof f == 'string' || typeof f == 'number' ? String(f) : ''),
        s.push({
          type: typeof f == 'string' ? ct.literal : ct.object,
          value: f,
        })
      continue
    }
    if (Eo(c)) {
      var u =
        typeof c.style == 'string'
          ? r.date[c.style]
          : Sn(c.style)
          ? c.style.parsedOptions
          : void 0
      s.push({ type: ct.literal, value: n.getDateTimeFormat(e, u).format(f) })
      continue
    }
    if (So(c)) {
      var u =
        typeof c.style == 'string'
          ? r.time[c.style]
          : Sn(c.style)
          ? c.style.parsedOptions
          : void 0
      s.push({ type: ct.literal, value: n.getDateTimeFormat(e, u).format(f) })
      continue
    }
    if (ko(c)) {
      var u =
        typeof c.style == 'string'
          ? r.number[c.style]
          : Io(c.style)
          ? c.style.parsedOptions
          : void 0
      u && u.scale && (f = f * (u.scale || 1)),
        s.push({ type: ct.literal, value: n.getNumberFormat(e, u).format(f) })
      continue
    }
    if (Co(c)) {
      var h = c.children,
        S = c.value,
        x = o[S]
      if (!Ws(x)) throw new qs(S, 'function', i)
      var O = qe(h, e, n, r, o, a),
        T = x(
          O.map(function (C) {
            return C.value
          }),
        )
      Array.isArray(T) || (T = [T]),
        s.push.apply(
          s,
          T.map(function (C) {
            return {
              type: typeof C == 'string' ? ct.literal : ct.object,
              value: C,
            }
          }),
        )
    }
    if (Ao(c)) {
      var g = c.options[f] || c.options.other
      if (!g) throw new sr(c.value, f, Object.keys(c.options), i)
      s.push.apply(s, qe(g.value, e, n, r, o))
      continue
    }
    if (To(c)) {
      var g = c.options['='.concat(f)]
      if (!g) {
        if (!Intl.PluralRules)
          throw new on(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            ce.MISSING_INTL_API,
            i,
          )
        var m = n
          .getPluralRules(e, { type: c.pluralType })
          .select(f - (c.offset || 0))
        g = c.options[m] || c.options.other
      }
      if (!g) throw new sr(c.value, f, Object.keys(c.options), i)
      s.push.apply(s, qe(g.value, e, n, r, o, f - (c.offset || 0)))
      continue
    }
  }
  return Hs(s)
}
function Ys(t, e) {
  return e
    ? W(
        W(W({}, t || {}), e || {}),
        Object.keys(t).reduce(function (n, r) {
          return (n[r] = W(W({}, t[r]), e[r] || {})), n
        }, {}),
      )
    : t
}
function Zs(t, e) {
  return e
    ? Object.keys(t).reduce(function (n, r) {
        return (n[r] = Ys(t[r], e[r])), n
      }, W({}, t))
    : t
}
function mn(t) {
  return {
    create: function () {
      return {
        get: function (e) {
          return t[e]
        },
        set: function (e, n) {
          t[e] = n
        },
      }
    },
  }
}
function Js(t) {
  return (
    t === void 0 && (t = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: un(
        function () {
          for (var e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r]
          return new ((e = Intl.NumberFormat).bind.apply(
            e,
            pn([void 0], n, !1),
          ))()
        },
        { cache: mn(t.number), strategy: fn.variadic },
      ),
      getDateTimeFormat: un(
        function () {
          for (var e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r]
          return new ((e = Intl.DateTimeFormat).bind.apply(
            e,
            pn([void 0], n, !1),
          ))()
        },
        { cache: mn(t.dateTime), strategy: fn.variadic },
      ),
      getPluralRules: un(
        function () {
          for (var e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r]
          return new ((e = Intl.PluralRules).bind.apply(
            e,
            pn([void 0], n, !1),
          ))()
        },
        { cache: mn(t.pluralRules), strategy: fn.variadic },
      ),
    }
  )
}
var Qs = (function () {
    function t(e, n, r, o) {
      var a = this
      if (
        (n === void 0 && (n = t.defaultLocale),
        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
        (this.format = function (i) {
          var s = a.formatToParts(i)
          if (s.length === 1) return s[0].value
          var d = s.reduce(function (l, c) {
            return (
              !l.length ||
              c.type !== ct.literal ||
              typeof l[l.length - 1] != 'string'
                ? l.push(c.value)
                : (l[l.length - 1] += c.value),
              l
            )
          }, [])
          return d.length <= 1 ? d[0] || '' : d
        }),
        (this.formatToParts = function (i) {
          return qe(
            a.ast,
            a.locales,
            a.formatters,
            a.formats,
            i,
            void 0,
            a.message,
          )
        }),
        (this.resolvedOptions = function () {
          return { locale: Intl.NumberFormat.supportedLocalesOf(a.locales)[0] }
        }),
        (this.getAst = function () {
          return a.ast
        }),
        typeof e == 'string')
      ) {
        if (((this.message = e), !t.__parse))
          throw new TypeError(
            'IntlMessageFormat.__parse must be set to process `message` of type `string`',
          )
        this.ast = t.__parse(e, { ignoreTag: o?.ignoreTag })
      } else this.ast = e
      if (!Array.isArray(this.ast))
        throw new TypeError('A message must be provided as a String or AST.')
      ;(this.formats = Zs(t.formats, r)),
        (this.locales = n),
        (this.formatters = (o && o.formatters) || Js(this.formatterCache))
    }
    return (
      Object.defineProperty(t, 'defaultLocale', {
        get: function () {
          return (
            t.memoizedDefaultLocale ||
              (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
            t.memoizedDefaultLocale
          )
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.memoizedDefaultLocale = null),
      (t.__parse = js),
      (t.formats = {
        number: {
          integer: { maximumFractionDigits: 0 },
          currency: { style: 'currency' },
          percent: { style: 'percent' },
        },
        date: {
          short: { month: 'numeric', day: 'numeric', year: '2-digit' },
          medium: { month: 'short', day: 'numeric', year: 'numeric' },
          long: { month: 'long', day: 'numeric', year: 'numeric' },
          full: {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          },
        },
        time: {
          short: { hour: 'numeric', minute: 'numeric' },
          medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
          long: {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
          },
          full: {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
          },
        },
      }),
      t
    )
  })(),
  Ks = Qs
const Xt = {},
  $s = (t, e, n) =>
    n && (e in Xt || (Xt[e] = {}), t in Xt[e] || (Xt[e][t] = n), n),
  Do = (t, e) => {
    if (e == null) return
    if (e in Xt && t in Xt[e]) return Xt[e][t]
    const n = Ie(e)
    for (let r = 0; r < n.length; r++) {
      const o = td(n[r], t)
      if (o) return $s(t, e, o)
    }
  }
let Yn
const Ce = $t({})
function Uo(t) {
  return t in Yn
}
function td(t, e) {
  return Uo(t)
    ? (function (n, r) {
        if (r == null) return
        if (r in n) return n[r]
        const o = r.split('.')
        let a = n
        for (let i = 0; i < o.length; i++)
          if (typeof a == 'object') {
            if (i > 0) {
              const s = o.slice(i, o.length).join('.')
              if (s in a) {
                a = a[s]
                break
              }
            }
            a = a[o[i]]
          } else a = void 0
        return a
      })(
        (function (n) {
          return Yn[n] || null
        })(t),
        e,
      )
    : null
}
function Go(t, ...e) {
  delete Xt[t], Ce.update((n) => ((n[t] = ds.all([n[t] || {}, ...e])), n))
}
ge([Ce], ([t]) => Object.keys(t))
Ce.subscribe((t) => (Yn = t))
const Be = {}
function Vo(t) {
  return Be[t]
}
function $e(t) {
  return (
    t != null &&
    Ie(t).some((e) => {
      var n
      return (n = Vo(e)) === null || n === void 0 ? void 0 : n.size
    })
  )
}
function ed(t, e) {
  return Promise.all(
    e.map(
      (n) => (
        (function (r, o) {
          Be[r].delete(o), Be[r].size === 0 && delete Be[r]
        })(t, n),
        n().then((r) => r.default || r)
      ),
    ),
  ).then((n) => Go(t, ...n))
}
const we = {}
function Xo(t) {
  if (!$e(t)) return t in we ? we[t] : Promise.resolve()
  const e = (function (n) {
    return Ie(n)
      .map((r) => {
        const o = Vo(r)
        return [r, o ? [...o] : []]
      })
      .filter(([, r]) => r.length > 0)
  })(t)
  return (
    (we[t] = Promise.all(e.map(([n, r]) => ed(n, r))).then(() => {
      if ($e(t)) return Xo(t)
      delete we[t]
    })),
    we[t]
  )
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function te(
  t,
  e,
) {
  var n = {}
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function') {
    var o = 0
    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      e.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
        (n[r[o]] = t[r[o]])
  }
  return n
}
const ye = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: {
    number: {
      scientific: { notation: 'scientific' },
      engineering: { notation: 'engineering' },
      compactLong: { notation: 'compact', compactDisplay: 'long' },
      compactShort: { notation: 'compact', compactDisplay: 'short' },
    },
    date: {
      short: { month: 'numeric', day: 'numeric', year: '2-digit' },
      medium: { month: 'short', day: 'numeric', year: 'numeric' },
      long: { month: 'long', day: 'numeric', year: 'numeric' },
      full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
    },
    time: {
      short: { hour: 'numeric', minute: 'numeric' },
      medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
      long: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      },
      full: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
      },
    },
  },
  warnOnMissingMessages: !0,
  ignoreTag: !0,
}
function pe() {
  return ye
}
function nd(t) {
  const { formats: e } = t,
    n = te(t, ['formats']),
    r = t.initialLocale || t.fallbackLocale
  return (
    Object.assign(ye, n, { initialLocale: r }),
    e &&
      ('number' in e && Object.assign(ye.formats.number, e.number),
      'date' in e && Object.assign(ye.formats.date, e.date),
      'time' in e && Object.assign(ye.formats.time, e.time)),
    ue.set(r)
  )
}
const bn = $t(!1)
let On
const He = $t(null)
function dr(t) {
  return t
    .split('-')
    .map((e, n, r) => r.slice(0, n + 1).join('-'))
    .reverse()
}
function Ie(t, e = pe().fallbackLocale) {
  const n = dr(t)
  return e ? [...new Set([...n, ...dr(e)])] : n
}
function Bt() {
  return On ?? void 0
}
He.subscribe((t) => {
  ;(On = t ?? void 0),
    typeof window < 'u' &&
      t != null &&
      document.documentElement.setAttribute('lang', t)
})
const ue = Object.assign(Object.assign({}, He), {
    set: (t) => {
      if (
        t &&
        (function (e) {
          if (e == null) return
          const n = Ie(e)
          for (let r = 0; r < n.length; r++) {
            const o = n[r]
            if (Uo(o)) return o
          }
        })(t) &&
        $e(t)
      ) {
        const { loadingDelay: e } = pe()
        let n
        return (
          typeof window < 'u' && Bt() != null && e
            ? (n = window.setTimeout(() => bn.set(!0), e))
            : bn.set(!0),
          Xo(t)
            .then(() => {
              He.set(t)
            })
            .finally(() => {
              clearTimeout(n), bn.set(!1)
            })
        )
      }
      return He.set(t)
    },
  }),
  rd = () =>
    typeof window > 'u'
      ? null
      : window.navigator.language || window.navigator.languages[0],
  an = (t) => {
    const e = Object.create(null)
    return (n) => {
      const r = JSON.stringify(n)
      return r in e ? e[r] : (e[r] = t(n))
    }
  },
  Te = (t, e) => {
    const { formats: n } = pe()
    if (t in n && e in n[t]) return n[t][e]
    throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`)
  },
  od = an((t) => {
    var { locale: e, format: n } = t,
      r = te(t, ['locale', 'format'])
    if (e == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers')
    return n && (r = Te('number', n)), new Intl.NumberFormat(e, r)
  }),
  ad = an((t) => {
    var { locale: e, format: n } = t,
      r = te(t, ['locale', 'format'])
    if (e == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates')
    return (
      n
        ? (r = Te('date', n))
        : Object.keys(r).length === 0 && (r = Te('date', 'short')),
      new Intl.DateTimeFormat(e, r)
    )
  }),
  id = an((t) => {
    var { locale: e, format: n } = t,
      r = te(t, ['locale', 'format'])
    if (e == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values',
      )
    return (
      n
        ? (r = Te('time', n))
        : Object.keys(r).length === 0 && (r = Te('time', 'short')),
      new Intl.DateTimeFormat(e, r)
    )
  }),
  ld = (t = {}) => {
    var { locale: e = Bt() } = t,
      n = te(t, ['locale'])
    return od(Object.assign({ locale: e }, n))
  },
  sd = (t = {}) => {
    var { locale: e = Bt() } = t,
      n = te(t, ['locale'])
    return ad(Object.assign({ locale: e }, n))
  },
  dd = (t = {}) => {
    var { locale: e = Bt() } = t,
      n = te(t, ['locale'])
    return id(Object.assign({ locale: e }, n))
  },
  cd = an(
    (t, e = Bt()) => new Ks(t, e, pe().formats, { ignoreTag: pe().ignoreTag }),
  ),
  pd = (t, e = {}) => {
    let n = e
    typeof t == 'object' && ((n = t), (t = n.id))
    const { values: r, locale: o = Bt(), default: a } = n
    if (o == null)
      throw new Error(
        '[svelte-i18n] Cannot format a message without first setting the initial locale.',
      )
    let i = Do(t, o)
    if (i) {
      if (typeof i != 'string')
        return (
          console.warn(
            `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof i}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`,
          ),
          i
        )
    } else
      pe().warnOnMissingMessages &&
        console.warn(
          `[svelte-i18n] The message "${t}" was not found in "${Ie(o).join(
            '", "',
          )}".${
            $e(Bt())
              ? `

Note: there are at least one loader still registered to this locale that wasn't executed.`
              : ''
          }`,
        ),
        (i = a ?? t)
    if (!r) return i
    let s = i
    try {
      s = cd(i, o).format(r)
    } catch (d) {
      console.warn(`[svelte-i18n] Message "${t}" has syntax error:`, d.message)
    }
    return s
  },
  gd = (t, e) => dd(e).format(t),
  ud = (t, e) => sd(e).format(t),
  fd = (t, e) => ld(e).format(t),
  md = (t, e = Bt()) => Do(t, e),
  J0 = ge([ue, Ce], () => pd)
ge([ue], () => gd)
ge([ue], () => ud)
ge([ue], () => fd)
ge([ue, Ce], () => md)
const bd = 'modulepreload',
  cr = {},
  wd = 'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/',
  G = function (e, n) {
    return !n || n.length === 0
      ? e()
      : Promise.all(
          n.map((r) => {
            if (((r = `${wd}${r}`), r in cr)) return
            cr[r] = !0
            const o = r.endsWith('.css'),
              a = o ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${r}"]${a}`)) return
            const i = document.createElement('link')
            if (
              ((i.rel = o ? 'stylesheet' : bd),
              o || ((i.as = 'script'), (i.crossOrigin = '')),
              (i.href = r),
              window.scoped_css_attach(i),
              o)
            )
              return new Promise((s, d) => {
                i.addEventListener('load', s),
                  i.addEventListener('error', () =>
                    d(new Error(`Unable to preload CSS for ${r}`)),
                  )
              })
          }),
        ).then(() => e())
  },
  hd = {
    accordion: () =>
      G(() => import_fix('./index.82581d10.js', import.meta.url), [
        'assets/index.82581d10.js',
        'assets/Column.2d03a686.js',
      ]),
    audio: () =>
      G(() => import_fix('./index.12ae7510.js', import.meta.url), [
        'assets/index.12ae7510.js',
        'assets/index.712d6db6.css',
        'assets/Upload.660f83a6.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/BlockLabel.677b0876.js',
        'assets/utils.27234e1d.js',
      ]),
    box: () => G(() => import_fix('./index.dc9bf9fe.js', import.meta.url), []),
    button: () =>
      G(() => import_fix('./index.5a3337db.js', import.meta.url), []),
    carousel: () =>
      G(() => import_fix('./index.0a9749de.js', import.meta.url), [
        'assets/index.0a9749de.js',
        'assets/CarouselItem.svelte_svelte_type_style_lang.71c539ff.js',
        'assets/CarouselItem.svelte_svelte_type_style_lang.e110d966.css',
      ]),
    carouselitem: () =>
      G(() => import_fix('./index.c7341c27.js', import.meta.url), [
        'assets/index.c7341c27.js',
        'assets/CarouselItem.svelte_svelte_type_style_lang.71c539ff.js',
        'assets/CarouselItem.svelte_svelte_type_style_lang.e110d966.css',
      ]),
    chatbot: () =>
      G(() => import_fix('./index.420d5185.js', import.meta.url), [
        'assets/index.420d5185.js',
        'assets/index.72f44ebf.css',
        'assets/BlockLabel.677b0876.js',
      ]),
    checkbox: () =>
      G(() => import_fix('./index.2953baa5.js', import.meta.url), []),
    checkboxgroup: () =>
      G(() => import_fix('./index.e747f4e7.js', import.meta.url), []),
    colorpicker: () =>
      G(() => import_fix('./index.74401308.js', import.meta.url), []),
    column: () =>
      G(() => import_fix('./index.853cecde.js', import.meta.url), [
        'assets/index.853cecde.js',
        'assets/Column.2d03a686.js',
      ]),
    dataframe: () =>
      G(() => import_fix('./index.2fdc9bcc.js', import.meta.url), [
        'assets/index.2fdc9bcc.js',
        'assets/Upload.660f83a6.js',
        'assets/dsv.7fe76a93.js',
      ]),
    dataset: () =>
      G(() => import_fix('./index.433fa3ad.js', import.meta.url), [
        'assets/index.433fa3ad.js',
        'assets/Image.6029e16a.js',
        'assets/csv.27f5436c.js',
        'assets/dsv.7fe76a93.js',
        'assets/Model3D.7d2d2bb4.js',
      ]),
    dropdown: () =>
      G(() => import_fix('./index.0cc64d4e.js', import.meta.url), []),
    file: () =>
      G(() => import_fix('./index.92516eb3.js', import.meta.url), [
        'assets/index.92516eb3.js',
        'assets/BlockLabel.677b0876.js',
        'assets/File.99c9aa38.js',
        'assets/Upload.660f83a6.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/utils.27234e1d.js',
      ]),
    form: () => G(() => import_fix('./index.8e0ac58c.js', import.meta.url), []),
    gallery: () =>
      G(() => import_fix('./index.95a03248.js', import.meta.url), [
        'assets/index.95a03248.js',
        'assets/index.10851bbc.css',
        'assets/BlockLabel.677b0876.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/utils.27234e1d.js',
        'assets/Image.8532565d.js',
      ]),
    group: () =>
      G(() => import_fix('./index.0a2a3870.js', import.meta.url), [
        'assets/index.0a2a3870.js',
        'assets/index.803c5e11.css',
      ]),
    highlightedtext: () =>
      G(() => import_fix('./index.961a62cd.js', import.meta.url), [
        'assets/index.961a62cd.js',
        'assets/index.7a93f874.css',
        'assets/color.b25386aa.js',
        'assets/BlockLabel.677b0876.js',
      ]),
    html: () => G(() => import_fix('./index.d619ae2e.js', import.meta.url), []),
    image: () =>
      G(() => import_fix('./index.37f98688.js', import.meta.url), [
        'assets/index.37f98688.js',
        'assets/BlockLabel.677b0876.js',
        'assets/Image.8532565d.js',
        'assets/Webcam.df71ae73.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/Upload.660f83a6.js',
        'assets/Image.6029e16a.js',
      ]),
    interpretation: () =>
      G(() => import_fix('./index.2daba9b4.js', import.meta.url), [
        'assets/index.2daba9b4.js',
        'assets/index.64cd2c53.css',
      ]),
    json: () =>
      G(() => import_fix('./index.1848fd6f.js', import.meta.url), [
        'assets/index.1848fd6f.js',
        'assets/BlockLabel.677b0876.js',
      ]),
    label: () =>
      G(() => import_fix('./index.3ba14455.js', import.meta.url), [
        'assets/index.3ba14455.js',
        'assets/BlockLabel.677b0876.js',
      ]),
    markdown: () =>
      G(() => import_fix('./index.e85382dc.js', import.meta.url), [
        'assets/index.e85382dc.js',
        'assets/index.1a9e15aa.css',
      ]),
    model3d: () =>
      G(() => import_fix('./index.35216f14.js', import.meta.url), [
        'assets/index.35216f14.js',
        'assets/utils.27234e1d.js',
        'assets/BlockLabel.677b0876.js',
        'assets/File.99c9aa38.js',
        'assets/_commonjsHelpers.d2428edb.js',
        'assets/Upload.660f83a6.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/Model3D.7d2d2bb4.js',
      ]),
    number: () =>
      G(() => import_fix('./index.c55420bb.js', import.meta.url), []),
    plot: () =>
      G(() => import_fix('./index.b11d8eae.js', import.meta.url), [
        'assets/index.b11d8eae.js',
        'assets/_commonjsHelpers.d2428edb.js',
        'assets/color.b25386aa.js',
        'assets/linear.955f0731.js',
        'assets/dsv.7fe76a93.js',
        'assets/BlockLabel.677b0876.js',
      ]),
    radio: () =>
      G(() => import_fix('./index.e7e4d716.js', import.meta.url), []),
    row: () => G(() => import_fix('./index.ff9173a1.js', import.meta.url), []),
    slider: () =>
      G(() => import_fix('./index.2c06fbc1.js', import.meta.url), []),
    state: () =>
      G(() => import_fix('./index.9823b33a.js', import.meta.url), []),
    statustracker: () =>
      G(() => import_fix('./index.d6803bb3.js', import.meta.url), []),
    tabs: () =>
      G(() => import_fix('./index.5e9bdb3b.js', import.meta.url), [
        'assets/index.5e9bdb3b.js',
        'assets/Tabs.4607aa1c.js',
        'assets/Column.2d03a686.js',
      ]),
    tabitem: () =>
      G(() => import_fix('./index.c2499812.js', import.meta.url), [
        'assets/index.c2499812.js',
        'assets/Tabs.4607aa1c.js',
        'assets/Column.2d03a686.js',
      ]),
    textbox: () =>
      G(() => import_fix('./index.a57de80f.js', import.meta.url), []),
    timeseries: () =>
      G(() => import_fix('./index.980ecf02.js', import.meta.url), [
        'assets/index.980ecf02.js',
        'assets/Upload.660f83a6.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/BlockLabel.677b0876.js',
        'assets/color.b25386aa.js',
        'assets/linear.955f0731.js',
        'assets/csv.27f5436c.js',
        'assets/dsv.7fe76a93.js',
      ]),
    uploadbutton: () =>
      G(() => import_fix('./index.5707bd08.js', import.meta.url), [
        'assets/index.5707bd08.js',
        'assets/_commonjsHelpers.d2428edb.js',
      ]),
    video: () =>
      G(() => import_fix('./index.ec27aec1.js', import.meta.url), [
        'assets/index.ec27aec1.js',
        'assets/index.3517cbba.css',
        'assets/utils.27234e1d.js',
        'assets/Upload.660f83a6.js',
        'assets/ModifyUpload.cecce8cd.js',
        'assets/BlockLabel.677b0876.js',
        'assets/Webcam.df71ae73.js',
      ]),
  }
function _d() {
  const t = $t({}),
    e = [],
    n = [],
    r = new Map(),
    o = new Map(),
    a = new Map(),
    i = []
  function s(l, c, p, f, u, h, S, x) {
    const O = n[l],
      T = e[l],
      g = i[l],
      m = O.map((C) => {
        let w
        const E = r.get(C) || 0
        if (g === 'pending' && c !== 'pending') {
          let k = E - 1
          r.set(C, k < 0 ? 0 : k), (w = k > 0 ? 'pending' : c)
        } else
          g === 'pending' && c === 'pending'
            ? (w = 'pending')
            : g !== 'pending' && c === 'pending'
            ? ((w = 'pending'), r.set(C, E + 1))
            : (w = c)
        return {
          id: C,
          queue_position: u,
          queue_size: f,
          eta: h,
          status: w,
          message: S,
          progress: x,
        }
      })
    T.map((C) => {
      const w = o.get(C) || 0
      if (g === 'pending' && c !== 'pending') {
        let E = w - 1
        o.set(C, E < 0 ? 0 : E), a.set(C, c)
      } else
        g !== 'pending' && c === 'pending'
          ? (o.set(C, w + 1), a.set(C, c))
          : a.delete(C)
    }),
      t.update(
        (C) => (
          m.forEach(
            ({
              id: w,
              queue_position: E,
              queue_size: k,
              eta: Z,
              status: L,
              message: rt,
              progress: X,
            }) => {
              C[w] = {
                queue: p,
                queue_size: k,
                queue_position: E,
                eta: Z,
                message: rt,
                progress: X,
                status: L,
                fn_index: l,
              }
            },
          ),
          C
        ),
      ),
      (i[l] = c)
  }
  function d(l, c, p) {
    ;(e[l] = c), (n[l] = p)
  }
  return {
    update: s,
    register: d,
    subscribe: t.subscribe,
    get_status_for_fn(l) {
      return i[l]
    },
    get_inputs_to_update() {
      return a
    },
  }
}
const qo = $t({ autoscroll: !1 }),
  Bo = '\u0623\u0631\u0633\u0644',
  Ho = '\u0623\u0645\u0633\u062D',
  Wo = '\u0641\u0633\u0650\u0651\u0631',
  Yo = '\u0628\u0644\u0650\u0651\u063A',
  Zo = '\u0623\u0645\u062B\u0644\u0629',
  Jo = '\u0623\u0648'
var yd = {
    interface: {
      drop_image:
        '\u0623\u0633\u0642\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u0647\u0646\u0627',
      drop_video:
        '\u0623\u0633\u0642\u0637 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0647\u0646\u0627',
      drop_audio:
        '\u0623\u0633\u0642\u0637 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0647\u0646\u0627',
      drop_file:
        '\u0623\u0633\u0642\u0637 \u0627\u0644\u0645\u0644\u0641 \u0647\u0646\u0627',
      drop_csv:
        '\u0623\u0633\u0642\u0637 \u0645\u0644\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0647\u0646\u0627',
      click_to_upload:
        '\u0625\u0636\u063A\u0637 \u0644\u0644\u062A\u062D\u0645\u064A\u0644',
      view_api:
        '\u0625\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0628\u0631\u0645\u062C\u0629',
      built_with_Gradio:
        '\u062A\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0621 \u0628\u0625\u0633\u062A\u062E\u062F\u0627\u0645 Gradio',
    },
    Submit: Bo,
    Clear: Ho,
    Interpret: Wo,
    Flag: Yo,
    Examples: Zo,
    or: Jo,
  },
  vd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Bo,
    Clear: Ho,
    Interpret: Wo,
    Flag: Yo,
    Examples: Zo,
    or: Jo,
    default: yd,
  })
const Qo = 'Absenden',
  Ko = 'L\xF6schen',
  $o = 'Ersteller',
  ta = 'Flag',
  ea = 'Beispiele',
  na = 'oder'
var xd = {
    interface: {
      drop_image: 'Bild hier ablegen',
      drop_video: 'Video hier ablegen',
      drop_audio: 'Audio hier ablegen',
      drop_file: 'Datei hier ablegen',
      drop_csv: 'CSV Datei hier ablegen',
      click_to_upload: 'Hochladen',
      view_api: 'API anschauen',
      built_with_Gradio: 'Mit Gradio erstellt',
    },
    Submit: Qo,
    Clear: Ko,
    Interpret: $o,
    Flag: ta,
    Examples: ea,
    or: na,
  },
  kd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Qo,
    Clear: Ko,
    Interpret: $o,
    Flag: ta,
    Examples: ea,
    or: na,
    default: xd,
  })
const ra = 'Submit',
  oa = 'Clear',
  aa = 'Interpret',
  ia = 'Flag',
  la = 'Examples',
  sa = 'or'
var Ed = {
    interface: {
      drop_image: 'Drop Image Here',
      drop_video: 'Drop Video Here',
      drop_audio: 'Drop Audio Here',
      drop_file: 'Drop File Here',
      drop_csv: 'Drop CSV Here',
      click_to_upload: 'Click to Upload',
      view_api: 'view the api',
      built_with_Gradio: 'Built with gradio',
      copy_to_clipboard: 'copy to clipboard',
      loading: 'Loading',
      error: 'ERROR',
      empty: 'Empty',
    },
    Submit: ra,
    Clear: oa,
    Interpret: aa,
    Flag: ia,
    Examples: la,
    or: sa,
  },
  Sd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: ra,
    Clear: oa,
    Interpret: aa,
    Flag: ia,
    Examples: la,
    or: sa,
    default: Ed,
  })
const da = 'Enviar',
  ca = 'Limpiar',
  pa = 'Interpretar',
  ga = 'Avisar',
  ua = 'Ejemplos',
  fa = 'o'
var Ad = {
    interface: {
      drop_image: 'Coloque la imagen aqu\xED',
      drop_video: 'Coloque el video aqu\xED',
      drop_audio: 'Coloque el audio aqu\xED',
      drop_file: 'Coloque el archivo aqu\xED',
      drop_csv: 'Coloque el CSV aqu\xED',
      click_to_upload: 'Haga click para cargar',
      view_api: 'Ver la API',
      built_with_Gradio: 'Construido con Gradio',
    },
    Submit: da,
    Clear: ca,
    Interpret: pa,
    Flag: ga,
    Examples: ua,
    or: fa,
  },
  Td = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: da,
    Clear: ca,
    Interpret: pa,
    Flag: ga,
    Examples: ua,
    or: fa,
    default: Ad,
  })
const ma = '\u0627\u0631\u0633\u0627\u0644',
  ba = '\u062D\u0630\u0641',
  wa = '\u062A\u0641\u0633\u06CC\u0631',
  ha = '\u067E\u0631\u0686\u0645',
  _a = '\u0645\u062B\u0627\u0644 \u0647\u0627',
  ya = '\u06CC\u0627'
var Cd = {
    interface: {
      drop_image:
        '\u062A\u0635\u0648\u06CC\u0631 \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F',
      drop_video:
        '\u0648\u06CC\u062F\u06CC\u0648 \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F',
      drop_audio:
        '\u0635\u0648\u062A \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F',
      drop_file:
        '\u0641\u0627\u06CC\u0644 \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F',
      drop_csv:
        '\u0641\u0627\u06CC\u0644 csv \u0631\u0627  \u0627\u06CC\u0646\u062C\u0627 \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F',
      click_to_upload:
        '\u0628\u0631\u0627\u06CC \u0622\u067E\u0644\u0648\u062F \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F',
      view_api:
        'api \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F',
      built_with_Gradio:
        '\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0628\u0627 gradio',
    },
    Submit: ma,
    Clear: ba,
    Interpret: wa,
    Flag: ha,
    Examples: _a,
    or: ya,
  },
  Id = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: ma,
    Clear: ba,
    Interpret: wa,
    Flag: ha,
    Examples: _a,
    or: ya,
    default: Cd,
  })
const va = 'Soumettre',
  xa = 'Nettoyer',
  ka = 'Interpr\xE9ter',
  Ea = 'Signaler',
  Sa = 'Exemples',
  Aa = 'ou'
var Pd = {
    interface: {
      drop_image: "D\xE9poser l'Image Ici",
      drop_video: 'D\xE9poser la Vid\xE9o Ici',
      drop_audio: "D\xE9poser l'Audio Ici",
      drop_file: 'D\xE9poser le Fichier Ici',
      drop_csv: 'D\xE9poser le CSV Ici',
      click_to_upload: 'Cliquer pour T\xE9l\xE9charger',
      view_api: "Voir l'API",
      built_with_Gradio: 'Con\xE7u avec Gradio',
    },
    Submit: va,
    Clear: xa,
    Interpret: ka,
    Flag: Ea,
    Examples: Sa,
    or: Aa,
  },
  Od = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: va,
    Clear: xa,
    Interpret: ka,
    Flag: Ea,
    Examples: Sa,
    or: Aa,
    default: Pd,
  })
const Ta = '\u05E9\u05DC\u05D7',
  Ca = '\u05E0\u05E7\u05D4',
  Ia = '\u05DC\u05E4\u05E8\u05E9',
  Pa = '\u05E1\u05DE\u05DF',
  Oa = '\u05D3\u05D5\u05D2\u05DE\u05D5\u05EA',
  La = '\u05D0\u05D5'
var Ld = {
    interface: {
      drop_image:
        '\u05D2\u05E8\u05D5\u05E8 \u05E7\u05D5\u05D1\u05E5 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05DC\u05DB\u05D0\u05DF',
      drop_video:
        '\u05D2\u05E8\u05D5\u05E8 \u05E7\u05D5\u05D1\u05E5 \u05E1\u05E8\u05D8\u05D5\u05DF \u05DC\u05DB\u05D0\u05DF',
      drop_audio:
        '\u05D2\u05E8\u05D5\u05E8 \u05DC\u05DB\u05D0\u05DF \u05E7\u05D5\u05D1\u05E5 \u05E9\u05DE\u05E2',
      drop_file:
        '\u05D2\u05E8\u05D5\u05E8 \u05E7\u05D5\u05D1\u05E5 \u05DC\u05DB\u05D0\u05DF',
      drop_csv:
        '\u05D2\u05E8\u05D5\u05E8 csv \u05E7\u05D5\u05D1\u05E5 \u05DC\u05DB\u05D0\u05DF',
      click_to_upload:
        '\u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E2\u05DC\u05D5\u05EA',
      view_api: '\u05E6\u05E4\u05D4 \u05D1 API',
      built_with_Gradio:
        '\u05D1\u05E0\u05D5\u05D9 \u05E2\u05DD \u05D2\u05E8\u05D3\u05D9\u05D5',
    },
    Submit: Ta,
    Clear: Ca,
    Interpret: Ia,
    Flag: Pa,
    Examples: Oa,
    or: La,
  },
  Nd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Ta,
    Clear: Ca,
    Interpret: Ia,
    Flag: Pa,
    Examples: Oa,
    or: La,
    default: Ld,
  })
const Na = '\u0938\u092C\u092E\u093F\u091F \u0915\u0930\u0947',
  Ra = '\u0939\u091F\u093E\u092F\u0947',
  Ma = '\u0935\u094D\u092F\u093E\u0916\u094D\u092F\u093E \u0915\u0930\u0947',
  za = '\u091A\u093F\u0939\u094D\u0928\u093F\u0924 \u0915\u0930\u0947',
  ja = '\u0909\u0926\u093E\u0939\u0930\u0923',
  Fa = '\u092F\u093E'
var Rd = {
    interface: {
      drop_image:
        '\u092F\u0939\u093E\u0901 \u0907\u092E\u0947\u091C \u0921\u094D\u0930\u0949\u092A \u0915\u0930\u0947\u0902',
      drop_video:
        '\u092F\u0939\u093E\u0901 \u0935\u0940\u0921\u093F\u092F\u094B \u0921\u094D\u0930\u0949\u092A \u0915\u0930\u0947\u0902',
      drop_audio:
        '\u092F\u0939\u093E\u0901 \u0911\u0921\u093F\u092F\u094B \u0921\u094D\u0930\u0949\u092A \u0915\u0930\u0947\u0902',
      drop_file:
        '\u092F\u0939\u093E\u0901 File \u0921\u094D\u0930\u0949\u092A \u0915\u0930\u0947\u0902',
      drop_csv:
        '\u092F\u0939\u093E\u0901 CSV \u0921\u094D\u0930\u0949\u092A \u0915\u0930\u0947\u0902',
      click_to_upload:
        '\u0905\u092A\u0932\u094B\u0921 \u0915\u0947 \u0932\u093F\u090F \u092C\u091F\u0928 \u0926\u092C\u093E\u092F\u0947\u0902',
      view_api: 'API \u0915\u094B \u0926\u0947\u0916\u0947',
      built_with_Gradio: 'Gradio \u0938\u0947 \u092C\u0928\u093E',
    },
    Submit: Na,
    Clear: Ra,
    Interpret: Ma,
    Flag: za,
    Examples: ja,
    or: Fa,
  },
  Md = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Na,
    Clear: Ra,
    Interpret: Ma,
    Flag: za,
    Examples: ja,
    or: Fa,
    default: Rd,
  })
const Da = '\u9001\u4FE1',
  Ua = '\u30AF\u30EA\u30A2',
  Ga = '\u89E3\u91C8',
  Va = '\u30D5\u30E9\u30B0\u3059\u308B',
  Xa = '\u5165\u529B\u4F8B',
  qa = '\u307E\u305F\u306F'
var zd = {
    interface: {
      drop_image:
        '\u3053\u3053\u306B\u753B\u50CF\u3092\u30C9\u30ED\u30C3\u30D7',
      drop_video:
        '\u3053\u3053\u306B\u52D5\u753B\u3092\u30C9\u30ED\u30C3\u30D7',
      drop_audio:
        '\u3053\u3053\u306B\u97F3\u58F0\u3092\u30C9\u30ED\u30C3\u30D7',
      drop_file:
        '\u3053\u3053\u306B\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30ED\u30C3\u30D7',
      drop_csv: '\u3053\u3053\u306BCSV\u3092\u30C9\u30ED\u30C3\u30D7',
      click_to_upload:
        '\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9',
      view_api: 'API\u3092\u898B\u308B',
      built_with_Gradio: 'gradio\u3067\u4F5C\u308D\u3046',
    },
    Submit: Da,
    Clear: Ua,
    Interpret: Ga,
    Flag: Va,
    Examples: Xa,
    or: qa,
  },
  jd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Da,
    Clear: Ua,
    Interpret: Ga,
    Flag: Va,
    Examples: Xa,
    or: qa,
    default: zd,
  })
const Ba = '\uC81C\uCD9C\uD558\uAE30',
  Ha = '\uD074\uB9AC\uC5B4',
  Wa = '\uC124\uBA85\uD558\uAE30',
  Ya = '\uD50C\uB798\uADF8',
  Za = '\uC608\uC2DC',
  Ja = '\uB610\uB294'
var Fd = {
    interface: {
      drop_image:
        '\uC774\uBBF8\uC9C0\uB97C \uB04C\uC5B4 \uB193\uC73C\uC138\uC694',
      drop_video:
        '\uBE44\uB514\uC624\uB97C \uB04C\uC5B4 \uB193\uC73C\uC138\uC694',
      drop_audio:
        '\uC624\uB514\uC624\uB97C \uB04C\uC5B4 \uB193\uC73C\uC138\uC694',
      drop_file: '\uD30C\uC77C\uC744 \uB04C\uC5B4 \uB193\uC73C\uC138\uC694',
      drop_csv: 'CSV\uD30C\uC77C\uC744 \uB04C\uC5B4 \uB193\uC73C\uC138\uC694',
      click_to_upload:
        '\uD074\uB9AD\uD574\uC11C \uC5C5\uB85C\uB4DC\uD558\uAE30',
      view_api: 'API \uBCF4\uAE30',
      built_with_Gradio:
        'gradio\uB85C \uC81C\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
    },
    Submit: Ba,
    Clear: Ha,
    Interpret: Wa,
    Flag: Ya,
    Examples: Za,
    or: Ja,
  },
  Dd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Ba,
    Clear: Ha,
    Interpret: Wa,
    Flag: Ya,
    Examples: Za,
    or: Ja,
    default: Fd,
  })
const Qa = 'Pateikti',
  Ka = 'Trinti',
  $a = 'Interpretuoti',
  ti = 'Pa\u017Eym\u0117ti',
  ei = 'Pavyzd\u017Eiai',
  ni = 'arba'
var Ud = {
    interface: {
      drop_image: '\u012Ekelkite paveiksl\u0117l\u012F \u010Dia',
      drop_video: '\u012Ekelkite vaizdo \u012Fra\u0161\u0105 \u010Dia',
      drop_audio: '\u012Ekelkite garso \u012Fra\u0161\u0105 \u010Dia',
      drop_file: '\u012Ekelkite byl\u0105 \u010Dia',
      drop_csv: '\u012Ekelkite CSV \u010Dia',
      click_to_upload: 'Spustel\u0117kite nor\u0117dami \u012Fkelti',
      view_api: 'per\u017Ei\u016Br\u0117ti api',
      built_with_Gradio: 'sukurta su gradio',
    },
    Submit: Qa,
    Clear: Ka,
    Interpret: $a,
    Flag: ti,
    Examples: ei,
    or: ni,
  },
  Gd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Qa,
    Clear: Ka,
    Interpret: $a,
    Flag: ti,
    Examples: ei,
    or: ni,
    default: Ud,
  })
const ri = 'Zend in',
  oi = 'Wis',
  ai = 'Interpreteer',
  ii = 'Vlag',
  li = 'Voorbeelden',
  si = 'of'
var Vd = {
    interface: {
      drop_image: 'Sleep een Afbeelding hier',
      drop_video: 'Sleep een Video hier',
      drop_audio: 'Sleep een Geluidsbestand hier',
      drop_file: 'Sleep een Document hier',
      drop_csv: 'Sleep een CSV hier',
      click_to_upload: 'Klik om the Uploaden',
      view_api: 'zie de api',
      built_with_Gradio: 'gemaakt met gradio',
    },
    Submit: ri,
    Clear: oi,
    Interpret: ai,
    Flag: ii,
    Examples: li,
    or: si,
  },
  Xd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: ri,
    Clear: oi,
    Interpret: ai,
    Flag: ii,
    Examples: li,
    or: si,
    default: Vd,
  })
const di = 'Zatwierd\u017A',
  ci = 'Wyczy\u015B\u0107',
  pi = 'Interpretuj',
  gi = 'Oznacz',
  ui = 'Przyk\u0142ady',
  fi = 'lub'
var qd = {
    interface: {
      drop_image: 'Przeci\u0105gnij tutaj zdj\u0119cie',
      drop_video: 'Przeci\u0105gnij tutaj video',
      drop_audio: 'Przeci\u0105gnij tutaj audio',
      drop_file: 'Przeci\u0105gnij tutaj plik',
      drop_csv: 'Przeci\u0105gnij tutaj CSV',
      click_to_upload: 'Kliknij, aby przes\u0142a\u0107',
      view_api: 'zobacz api',
      built_with_Gradio: 'utworzone z gradio',
    },
    Submit: di,
    Clear: ci,
    Interpret: pi,
    Flag: gi,
    Examples: ui,
    or: fi,
  },
  Bd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: di,
    Clear: ci,
    Interpret: pi,
    Flag: gi,
    Examples: ui,
    or: fi,
    default: qd,
  })
const mi = 'Enviar',
  bi = 'Limpar',
  wi = 'Interpretar',
  hi = 'Marcar',
  _i = 'Exemplos',
  yi = 'ou'
var Hd = {
    interface: {
      drop_image: 'Solte a Imagem Aqui',
      drop_video: 'Solte o V\xEDdeo Aqui',
      drop_audio: 'Solte o \xC1udio Aqui',
      drop_file: 'Solte o Arquivo Aqui',
      drop_csv: 'Solte o CSV Aqui',
      click_to_upload: 'Clique para o Upload',
      view_api: 'Veja a API',
      built_with_Gradio: 'Constru\xEDdo com gradio',
      copy_to_clipboard: 'copiar para o clipboard',
      loading: 'Carregando',
      error: 'ERRO',
      empty: 'Vazio',
    },
    Submit: mi,
    Clear: bi,
    Interpret: wi,
    Flag: hi,
    Examples: _i,
    or: yi,
  },
  Wd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: mi,
    Clear: bi,
    Interpret: wi,
    Flag: hi,
    Examples: _i,
    or: yi,
    default: Hd,
  })
const vi = '\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u044C',
  xi = '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
  ki =
    '\u0418\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C',
  Ei = '\u041F\u043E\u043C\u0435\u0442\u0438\u0442\u044C',
  Si = '\u041F\u0440\u0438\u043C\u0435\u0440\u044B',
  Ai = '\u0438\u043B\u0438'
var Yd = {
    interface: {
      drop_image:
        '\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0417\u0434\u0435\u0441\u044C',
      drop_video:
        '\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0412\u0438\u0434\u0435\u043E \u0417\u0434\u0435\u0441\u044C',
      drop_audio:
        '\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0410\u0443\u0434\u0438\u043E \u0417\u0434\u0435\u0441\u044C',
      drop_file:
        '\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0417\u0434\u0435\u0441\u044C',
      drop_csv:
        '\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 CSV \u0417\u0434\u0435\u0441\u044C',
      click_to_upload:
        '\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C',
      view_api: '\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 api',
      built_with_Gradio:
        '\u0441\u0434\u0435\u043B\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E gradio',
    },
    Submit: vi,
    Clear: xi,
    Interpret: ki,
    Flag: Ei,
    Examples: Si,
    or: Ai,
  },
  Zd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: vi,
    Clear: xi,
    Interpret: ki,
    Flag: Ei,
    Examples: Si,
    or: Ai,
    default: Yd,
  })
const Ti = '\u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF',
  Ci = '\u0B85\u0BB4\u0BBF',
  Ii = '\u0B89\u0B9F\u0BCD\u0BAA\u0BCA\u0BB0\u0BC1\u0BB3\u0BCD',
  Pi = '\u0B95\u0BCA\u0B9F\u0BBF\u0BAF\u0BBF\u0B9F\u0BC1',
  Oi =
    '\u0B8E\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD',
  Li = '\u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1'
var Jd = {
    interface: {
      drop_image: '\u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BC8 \u0BB5\u0BC8',
      drop_video:
        '\u0BB5\u0BC0\u0B9F\u0BBF\u0BAF\u0BCB\u0BB5\u0BC8 \u0BB5\u0BC8',
      drop_audio: '\u0B86\u0B9F\u0BBF\u0BAF\u0BCB\u0BB5\u0BC8 \u0BB5\u0BC8',
      drop_file: '\u0B95\u0BCB\u0BAA\u0BCD\u0BAA\u0BC8 \u0BB5\u0BC8',
      drop_csv: '\u0B9A\u0BBF\u0B8E\u0BB8\u0BCD\u0BB5\u0BBF \u0BB5\u0BC8',
      click_to_upload:
        '\u0BAA\u0BA4\u0BBF\u0BB5\u0BC7\u0BB1\u0BCD\u0BB1 \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD',
      view_api: '\u0B85\u0BAA\u0BBF\u0BAF\u0BC8 \u0B95\u0BBE\u0BA3\u0BCD',
      built_with_Gradio:
        '\u0B95\u0BCD\u0BB0\u0BC7\u0B9F\u0BBF\u0BAF\u0BCB-\u0BB5\u0BC1\u0B9F\u0BA9\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1',
    },
    Submit: Ti,
    Clear: Ci,
    Interpret: Ii,
    Flag: Pi,
    Examples: Oi,
    or: Li,
  },
  Qd = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Ti,
    Clear: Ci,
    Interpret: Ii,
    Flag: Pi,
    Examples: Oi,
    or: Li,
    default: Jd,
  })
const Ni = 'Y\xFCkle',
  Ri = 'Temizle',
  Mi = 'Yorumla',
  zi = 'Etiketle',
  ji = '\xF6rnekler',
  Fi = 'veya'
var Kd = {
    interface: {
      drop_image: 'Resmi Buraya S\xFCr\xFCkle',
      drop_video: 'Videoyu Buraya S\xFCr\xFCkle',
      drop_audio: 'Kayd\u0131 Buraya S\xFCr\xFCkle',
      drop_file: 'Dosyay\u0131 Buraya S\xFCr\xFCkle',
      drop_csv: "CSV'yi Buraya S\xFCr\xFCkle",
      click_to_upload: 'Y\xFCklemek i\xE7in T\u0131kla',
      view_api: "api'yi g\xF6r\xFCnt\xFCle",
      built_with_Gradio: 'Gradio ile olu\u015Fturulmu\u015Ftur',
    },
    Submit: Ni,
    Clear: Ri,
    Interpret: Mi,
    Flag: zi,
    Examples: ji,
    or: Fi,
  },
  $d = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Ni,
    Clear: Ri,
    Interpret: Mi,
    Flag: zi,
    Examples: ji,
    or: Fi,
    default: Kd,
  })
const Di = '\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438',
  Ui = '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438',
  Gi =
    '\u041F\u043E\u044F\u0441\u043D\u0438\u0442\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442',
  Vi = '\u041F\u043E\u0437\u043D\u0430\u0447\u0438\u0442\u0438',
  Xi = '\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u0438',
  qi = '\u0430\u0431\u043E'
var tc = {
    interface: {
      drop_image:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u044E\u0434\u0438',
      drop_video:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0432\u0456\u0434\u0435\u043E \u0441\u044E\u0434\u0438',
      drop_audio:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0430\u0443\u0434\u0456\u043E \u0441\u044E\u0434\u0438',
      drop_file:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C \u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0438',
      drop_csv:
        '\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C CSV-\u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0438',
      click_to_upload:
        '\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0449\u043E\u0431 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438',
      view_api:
        '\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 API',
      built_with_Gradio:
        '\u0417\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 gradio',
    },
    Submit: Di,
    Clear: Ui,
    Interpret: Gi,
    Flag: Vi,
    Examples: Xi,
    or: qi,
  },
  ec = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Di,
    Clear: Ui,
    Interpret: Gi,
    Flag: Vi,
    Examples: Xi,
    or: qi,
    default: tc,
  })
const Bi = '\u062C\u0645\u0639 \u06A9\u0631\u06CC\u06BA',
  Hi = '\u06C1\u0679\u0627 \u062F\u06CC\u06BA',
  Wi = '\u062A\u0634\u0631\u06CC\u062D \u06A9\u0631\u06CC\u06BA',
  Yi = '\u0646\u0634\u0627\u0646 \u0644\u06AF\u0627\u0626\u06CC\u06BA',
  Zi = '\u0645\u062B\u0627\u0644\u06CC\u06BA',
  Ji = '\u06CC\u0627'
var nc = {
    interface: {
      drop_image:
        '\u06CC\u06C1\u0627\u06BA \u062A\u0635\u0648\u06CC\u0631 \u0688\u0631\u0627\u067E \u06A9\u0631\u06CC\u06BA',
      drop_video:
        '\u06CC\u06C1\u0627\u06BA \u0648\u06CC\u0688\u06CC\u0648 \u0688\u0631\u0627\u067E \u06A9\u0631\u06CC\u06BA',
      drop_audio:
        '\u06CC\u06C1\u0627\u06BA \u0622\u0688\u06CC\u0648 \u0688\u0631\u0627\u067E \u06A9\u0631\u06CC\u06BA',
      drop_file:
        '\u06CC\u06C1\u0627\u06BA \u0641\u0627\u0626\u0644 \u0688\u0631\u0627\u067E \u06A9\u0631\u06CC\u06BA',
      drop_csv:
        '\u06CC\u06C1\u0627\u06BA \u0641\u0627\u0626\u0644 \u0688\u0631\u0627\u067E \u06A9\u0631\u06CC\u06BA',
      click_to_upload:
        '\u0627\u067E \u0644\u0648\u0688 \u06A9\u06D2 \u0644\u06CC\u06D2 \u06A9\u0644\u06A9 \u06A9\u0631\u06CC\u06BA',
      view_api: 'API \u062F\u06CC\u06A9\u06BE\u06CC\u06BA',
      built_with_Gradio:
        '\u06A9\u06D2 \u0633\u0627\u062A\u06BE \u0628\u0646\u0627\u06CC\u0627 \u06AF\u06CC\u0627 Gradio',
    },
    Submit: Bi,
    Clear: Hi,
    Interpret: Wi,
    Flag: Yi,
    Examples: Zi,
    or: Ji,
  },
  rc = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Bi,
    Clear: Hi,
    Interpret: Wi,
    Flag: Yi,
    Examples: Zi,
    or: Ji,
    default: nc,
  })
const Qi = 'Yubor',
  Ki = 'Tozalash',
  $i = 'Tushuntirish',
  tl = 'Bayroq',
  el = 'Namunalar',
  nl = '\u6216'
var oc = {
    interface: {
      drop_image: 'Rasmni Shu Yerga Tashlang',
      drop_video: 'Videoni Shu Yerga Tashlang',
      drop_audio: 'Audioni Shu Yerga Tashlang',
      drop_file: 'Faylni Shu Yerga Tashlang',
      drop_csv: 'CSVni Shu Yerga Tashlang',
      click_to_upload: 'Yuklash uchun Bosing',
      view_api: "apini ko'ring",
      built_with_Gradio: 'gradio bilan qilingan',
    },
    Submit: Qi,
    Clear: Ki,
    Interpret: $i,
    Flag: tl,
    Examples: el,
    or: nl,
  },
  ac = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: Qi,
    Clear: Ki,
    Interpret: $i,
    Flag: tl,
    Examples: el,
    or: nl,
    default: oc,
  })
const rl = '\u63D0\u4EA4',
  ol = '\u6E05\u9664',
  al = '\u89E3\u91CA',
  il = '\u6807\u8BB0',
  ll = '\u793A\u4F8B',
  sl = '\u6216'
var ic = {
    interface: {
      drop_image: '\u62D6\u653E\u56FE\u7247\u81F3\u6B64\u5904',
      drop_video: '\u62D6\u653E\u89C6\u9891\u81F3\u6B64\u5904',
      drop_audio: '\u62D6\u653E\u97F3\u9891\u81F3\u6B64\u5904',
      drop_file: '\u62D6\u653E\u6587\u4EF6\u81F3\u6B64\u5904',
      drop_csv: '\u62D6\u653ECSV\u81F3\u6B64\u5904',
      click_to_upload: '\u70B9\u51FB\u4E0A\u4F20',
      view_api: '\u67E5\u770BAPI',
      built_with_Gradio: '\u4F7F\u7528Gradio\u6784\u5EFA',
    },
    Submit: rl,
    Clear: ol,
    Interpret: al,
    Flag: il,
    Examples: ll,
    or: sl,
  },
  lc = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: rl,
    Clear: ol,
    Interpret: al,
    Flag: il,
    Examples: ll,
    or: sl,
    default: ic,
  })
const dl = '\u63D0\u4EA4',
  cl = '\u6E05\u9664',
  pl = '\u89E3\u91CB',
  gl = 'Flag',
  ul = '\u7BC4\u4F8B',
  fl = '\u6216'
var sc = {
    interface: {
      drop_image: '\u522A\u9664\u5716\u7247',
      drop_video: '\u522A\u9664\u5F71\u7247',
      drop_audio: '\u522A\u9664\u97F3\u983B',
      drop_file: '\u522A\u9664\u6A94\u6848',
      drop_csv: '\u522A\u9664CSV',
      click_to_upload: '\u9EDE\u64CA\u4E0A\u50B3',
      view_api: '\u67E5\u770BAPI',
      built_with_Gradio: '\u4F7F\u7528Gradio\u69CB\u5EFA',
    },
    Submit: dl,
    Clear: cl,
    Interpret: pl,
    Flag: gl,
    Examples: ul,
    or: fl,
  },
  dc = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    Submit: dl,
    Clear: cl,
    Interpret: pl,
    Flag: gl,
    Examples: ul,
    or: fl,
    default: sc,
  })
const pr = {
  './lang/ar.json': vd,
  './lang/de.json': kd,
  './lang/en.json': Sd,
  './lang/es.json': Td,
  './lang/fa.json': Id,
  './lang/fr.json': Od,
  './lang/he.json': Nd,
  './lang/hi.json': Md,
  './lang/ja.json': jd,
  './lang/ko.json': Dd,
  './lang/lt.json': Gd,
  './lang/nl.json': Xd,
  './lang/pl.json': Bd,
  './lang/pt-BR.json': Wd,
  './lang/ru.json': Zd,
  './lang/ta.json': Qd,
  './lang/tr.json': $d,
  './lang/uk.json': ec,
  './lang/ur.json': rc,
  './lang/uz.json': ac,
  './lang/zh-cn.json': lc,
  './lang/zh-tw.json': dc,
}
function cc() {
  let t = {}
  for (const e in pr) {
    const n = e.split('/').pop().split('.').shift()
    t[n] = pr[e].default
  }
  return t
}
const gr = cc()
for (const t in gr) Go(t, gr[t])
function pc() {
  nd({ fallbackLocale: 'en', initialLocale: rd() })
}
function ur(t, e, n) {
  const r = t.slice()
  return (
    (r[8] = e[n].component),
    (r[17] = e[n].id),
    (r[2] = e[n].props),
    (r[18] = e[n].children),
    (r[9] = e[n].has_modes),
    r
  )
}
function fr(t) {
  let e = [],
    n = new Map(),
    r,
    o,
    a = t[1]
  const i = (s) => s[17]
  for (let s = 0; s < a.length; s += 1) {
    let d = ur(t, a, s),
      l = i(d)
    n.set(l, (e[s] = mr(l, d)))
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1) e[s].c()
      r = ot()
    },
    m(s, d) {
      for (let l = 0; l < e.length; l += 1) e[l].m(s, d)
      v(s, r, d), (o = !0)
    },
    p(s, d) {
      d & 235 &&
        ((a = s[1]),
        Ct(),
        (e = Wl(e, d, i, 1, s, a, n, r.parentNode, Hl, mr, r, ur)),
        It())
    },
    i(s) {
      if (!o) {
        for (let d = 0; d < a.length; d += 1) z(e[d])
        o = !0
      }
    },
    o(s) {
      for (let d = 0; d < e.length; d += 1) V(e[d])
      o = !1
    },
    d(s) {
      for (let d = 0; d < e.length; d += 1) e[d].d(s)
      s && y(r)
    },
  }
}
function mr(t, e) {
  let n, r, o
  return (
    (r = new ml({
      props: {
        component: e[8],
        target: e[6],
        id: e[17],
        props: e[2],
        root: e[3],
        instance_map: e[0],
        children: e[18],
        dynamic_ids: e[5],
        has_modes: e[9],
        theme: e[7],
      },
    })),
    r.$on('destroy', e[12]),
    r.$on('mount', e[13]),
    {
      key: t,
      first: null,
      c() {
        ;(n = ot()), ht(r.$$.fragment), (this.first = n)
      },
      m(a, i) {
        v(a, n, i), pt(r, a, i), (o = !0)
      },
      p(a, i) {
        e = a
        const s = {}
        i & 2 && (s.component = e[8]),
          i & 64 && (s.target = e[6]),
          i & 2 && (s.id = e[17]),
          i & 2 && (s.props = e[2]),
          i & 8 && (s.root = e[3]),
          i & 1 && (s.instance_map = e[0]),
          i & 2 && (s.children = e[18]),
          i & 32 && (s.dynamic_ids = e[5]),
          i & 2 && (s.has_modes = e[9]),
          i & 128 && (s.theme = e[7]),
          r.$set(s)
      },
      i(a) {
        o || (z(r.$$.fragment, a), (o = !0))
      },
      o(a) {
        V(r.$$.fragment, a), (o = !1)
      },
      d(a) {
        a && y(n), gt(r, a)
      },
    }
  )
}
function gc(t) {
  let e,
    n,
    r = t[1] && t[1].length && fr(t)
  return {
    c() {
      r && r.c(), (e = ot())
    },
    m(o, a) {
      r && r.m(o, a), v(o, e, a), (n = !0)
    },
    p(o, a) {
      o[1] && o[1].length
        ? r
          ? (r.p(o, a), a & 2 && z(r, 1))
          : ((r = fr(o)), r.c(), z(r, 1), r.m(e.parentNode, e))
        : r &&
          (Ct(),
          V(r, 1, 1, () => {
            r = null
          }),
          It())
    },
    i(o) {
      n || (z(r), (n = !0))
    },
    o(o) {
      V(r), (n = !1)
    },
    d(o) {
      r && r.d(o), o && y(e)
    },
  }
}
function uc(t) {
  let e, n, r, o
  const a = [
    { elem_id: ('elem_id' in t[2] && t[2].elem_id) || `component-${t[4]}` },
    { target: t[6] },
    t[2],
    { theme: t[7] },
    { root: t[3] },
  ]
  function i(l) {
    t[15](l)
  }
  var s = t[8]
  function d(l) {
    let c = { $$slots: { default: [gc] }, $$scope: { ctx: l } }
    for (let p = 0; p < a.length; p += 1) c = en(c, a[p])
    return (
      l[0][l[4]].props.value !== void 0 && (c.value = l[0][l[4]].props.value),
      { props: c }
    )
  }
  return (
    s &&
      ((e = new s(d(t))),
      t[14](e),
      wt.push(() => Se(e, 'value', i)),
      e.$on('prop_change', t[10])),
    {
      c() {
        e && ht(e.$$.fragment), (r = ot())
      },
      m(l, c) {
        e && pt(e, l, c), v(l, r, c), (o = !0)
      },
      p(l, [c]) {
        const p =
          c & 220
            ? Bn(a, [
                c & 20 && {
                  elem_id:
                    ('elem_id' in l[2] && l[2].elem_id) || `component-${l[4]}`,
                },
                c & 64 && { target: l[6] },
                c & 4 && vo(l[2]),
                c & 128 && { theme: l[7] },
                c & 8 && { root: l[3] },
              ])
            : {}
        if (
          (c & 2097387 && (p.$$scope = { dirty: c, ctx: l }),
          !n &&
            c & 17 &&
            ((n = !0), (p.value = l[0][l[4]].props.value), Ke(() => (n = !1))),
          s !== (s = l[8]))
        ) {
          if (e) {
            Ct()
            const f = e
            V(f.$$.fragment, 1, 0, () => {
              gt(f, 1)
            }),
              It()
          }
          s
            ? ((e = new s(d(l))),
              l[14](e),
              wt.push(() => Se(e, 'value', i)),
              e.$on('prop_change', l[10]),
              ht(e.$$.fragment),
              z(e.$$.fragment, 1),
              pt(e, r.parentNode, r))
            : (e = null)
        } else s && e.$set(p)
      },
      i(l) {
        o || (e && z(e.$$.fragment, l), (o = !0))
      },
      o(l) {
        e && V(e.$$.fragment, l), (o = !1)
      },
      d(l) {
        t[14](null), l && y(r), e && gt(e, l)
      },
    }
  )
}
function fc(t, e, n) {
  let { root: r } = e,
    { component: o } = e,
    { instance_map: a } = e,
    { id: i } = e,
    { props: s } = e,
    { children: d } = e,
    { dynamic_ids: l } = e,
    { has_modes: c } = e,
    { parent: p = null } = e,
    { target: f } = e,
    { theme: u } = e
  const h = Vn()
  c &&
    (s.interactive === !1
      ? (s.mode = 'static')
      : s.interactive === !0 || l.has(i)
      ? (s.mode = 'dynamic')
      : (s.mode = 'static')),
    Gn(() => (h('mount', i), () => h('destroy', i))),
    Vl('BLOCK_KEY', p)
  function S(m) {
    for (const C in m.detail) n(0, (a[i].props[C] = m.detail[C]), a)
  }
  function x(m) {
    le.call(this, t, m)
  }
  function O(m) {
    le.call(this, t, m)
  }
  function T(m) {
    wt[m ? 'unshift' : 'push'](() => {
      ;(a[i].instance = m), n(0, a)
    })
  }
  function g(m) {
    t.$$.not_equal(a[i].props.value, m) && ((a[i].props.value = m), n(0, a))
  }
  return (
    (t.$$set = (m) => {
      'root' in m && n(3, (r = m.root)),
        'component' in m && n(8, (o = m.component)),
        'instance_map' in m && n(0, (a = m.instance_map)),
        'id' in m && n(4, (i = m.id)),
        'props' in m && n(2, (s = m.props)),
        'children' in m && n(1, (d = m.children)),
        'dynamic_ids' in m && n(5, (l = m.dynamic_ids)),
        'has_modes' in m && n(9, (c = m.has_modes)),
        'parent' in m && n(11, (p = m.parent)),
        'target' in m && n(6, (f = m.target)),
        'theme' in m && n(7, (u = m.theme))
    }),
    (t.$$.update = () => {
      t.$$.dirty & 3 &&
        n(1, (d = d && d.filter((m) => a[m.id].type !== 'statustracker')))
    }),
    [a, d, s, r, i, l, f, u, o, c, S, p, x, O, T, g]
  )
}
class ml extends Ot {
  constructor(e) {
    super(),
      Pt(this, e, fc, uc, kt, {
        root: 3,
        component: 8,
        instance_map: 0,
        id: 4,
        props: 2,
        children: 1,
        dynamic_ids: 5,
        has_modes: 9,
        parent: 11,
        target: 6,
        theme: 7,
      })
  }
}
const mc = 'This application is too busy. Keep trying!',
  bl = 'Connection errored out.'
async function wl(t, e) {
  try {
    var n = await fetch(t, {
      method: 'POST',
      body: JSON.stringify(e),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return [{ error: bl }, 500]
  }
  return [await n.json(), n.status]
}

function setCookie(name, value) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1 * 24 * 60 * 60 * 1000)

  document.cookie =
    name + '=' + escape(value) + ';expires=' + expect.toGMTString()
}

function getCookie(name) {
  var strcookie = document.cookie //获取cookie字符串
  var arrcookie = strcookie.split('; ') //分割
  //遍历匹配
  for (var i = 0; i < arrcookie.length; i++) {
    var arr = arrcookie[i].split('=')
    if (arr[0] == name) {
      return arr[1]
    }
  }
  return ''
}

const Ue = new Map(),
  bc = (t, e, n, r) => async ({
    action: o,
    payload: a,
    queue: i,
    backend_fn: s,
    frontend_fn: d,
    output_data: l,
    queue_callback: c,
    loading_status: p,
    cancels: f,
  }) => {
    const u = a.fn_index
    if (
      ((a.session_hash = t),
      d !== void 0 && (a.data = await d(a.data.concat(l))),
      s == !1)
    )
      return a
    if (i && ['predict', 'interpret'].includes(o)) {
      let C = function (E, k) {
        Ue.get(E)?.send(JSON.stringify(k))
      }
      p.update(u, 'pending', i, null, null, null, null)
      let w = ''
      if (r) w = `wss://${new URL(e).host}/queue/join`
      else {
        var h = e === 'run/' ? location.href : e,
          S = h.startsWith('https') ? 'wss:' : 'ws:',
          x = location.pathname === '/' ? '/' : location.pathname,
          O =
            location.origin === 'http://localhost:3000'
              ? ''.replace('http://', '').slice(0, -1)
              : location.host
        w = `${S}//${O}${x}queue/join`
      }
      var T = new WebSocket(w)
      Ue.set(u, T),
        (T.onclose = (E) => {
          E.wasClean || p.update(u, 'error', i, null, null, null, bl)
        }),
        (T.onmessage = async function (E) {
          const k = JSON.parse(E.data)
          switch (k.msg) {
            case 'send_data':
              C(u, a)
              break
            case 'send_hash':
              Ue.get(u)?.send(JSON.stringify({ session_hash: t, fn_index: u }))
              break
            case 'queue_full':
              p.update(u, 'error', i, null, null, null, mc), T.close()
              return
            case 'estimation':
              p.update(
                u,
                Ol(p)[k.fn_index]?.status || 'pending',
                i,
                k.queue_size,
                k.rank,
                k.rank_eta,
                null,
              )
              break
            case 'progress':
              p.update(u, 'pending', i, null, null, null, null, k.progress_data)
              break
            case 'process_generating':
              p.update(
                u,
                k.success ? 'generating' : 'error',
                i,
                null,
                null,
                k.output.average_duration,
                k.success ? null : k.output.error,
              ),
                k.success && c(k.output)
              break
            case 'process_completed':
              let detail = k.output.detail
              if (detail != void 0 && detail == 'Not authenticated') {
                setCookie('access-token', '')
                alert('你已被挤下线请稍后登录')
                window.location.href = '/'
                return
              }

              p.update(
                u,
                k.success ? 'complete' : 'error',
                i,
                null,
                null,
                k.output.average_duration,
                k.success ? null : k.output.error,
              ),
                k.success && c(k.output),
                T.close()
              return
            case 'process_starts':
              p.update(u, 'pending', i, k.rank, 0, null, null)
              break
          }
        })
    } else {
      p.update(u, 'pending', i, null, null, null, null)
      var [g, m] = await wl(e + o + '/', { ...a, session_hash: t })
      if (m == 200)
        p.update(u, 'complete', i, null, null, g.average_duration, null),
          f.length > 0 &&
            f.forEach((C) => {
              p.update(C, 'complete', i, null, null, null, null),
                Ue.get(C)?.close()
            })
      else
        throw (
          (p.update(u, 'error', i, null, null, null, g.error),
          g.error || 'API Error')
        )
      return g
    }
  }
function wc(t) {
  const e = t - 1
  return e * e * e + 1
}
function br(t) {
  return Object.prototype.toString.call(t) === '[object Date]'
}
function Ln(t, e, n, r) {
  if (typeof n == 'number' || br(n)) {
    const o = r - n,
      a = (n - e) / (t.dt || 1 / 60),
      i = t.opts.stiffness * o,
      s = t.opts.damping * a,
      d = (i - s) * t.inv_mass,
      l = (a + d) * t.dt
    return Math.abs(l) < t.opts.precision && Math.abs(o) < t.opts.precision
      ? r
      : ((t.settled = !1), br(n) ? new Date(n.getTime() + l) : n + l)
  } else {
    if (Array.isArray(n)) return n.map((o, a) => Ln(t, e[a], n[a], r[a]))
    if (typeof n == 'object') {
      const o = {}
      for (const a in n) o[a] = Ln(t, e[a], n[a], r[a])
      return o
    } else throw new Error(`Cannot spring ${typeof n} values`)
  }
}
function wr(t, e = {}) {
  const n = $t(t),
    { stiffness: r = 0.15, damping: o = 0.8, precision: a = 0.01 } = e
  let i,
    s,
    d,
    l = t,
    c = t,
    p = 1,
    f = 0,
    u = !1
  function h(x, O = {}) {
    c = x
    const T = (d = {})
    if (t == null || O.hard || (S.stiffness >= 1 && S.damping >= 1))
      return (u = !0), (i = xe()), (l = x), n.set((t = c)), Promise.resolve()
    if (O.soft) {
      const g = O.soft === !0 ? 0.5 : +O.soft
      ;(f = 1 / (g * 60)), (p = 0)
    }
    return (
      s ||
        ((i = xe()),
        (u = !1),
        (s = nn((g) => {
          if (u) return (u = !1), (s = null), !1
          p = Math.min(p + f, 1)
          const m = {
              inv_mass: p,
              opts: S,
              settled: !0,
              dt: ((g - i) * 60) / 1e3,
            },
            C = Ln(m, l, t, c)
          return (
            (i = g),
            (l = t),
            n.set((t = C)),
            m.settled && (s = null),
            !m.settled
          )
        }))),
      new Promise((g) => {
        s.promise.then(() => {
          T === d && g()
        })
      })
    )
  }
  const S = {
    set: h,
    update: (x, O) => h(x(c, t), O),
    subscribe: n.subscribe,
    stiffness: r,
    damping: o,
    precision: a,
  }
  return S
}
function hc(t) {
  let e, n, r, o, a, i, s, d, l, c, p, f
  return {
    c() {
      ;(e = A('div')),
        (n = Et('svg')),
        (r = Et('g')),
        (o = Et('path')),
        (a = Et('path')),
        (i = Et('path')),
        (s = Et('path')),
        (d = Et('g')),
        (l = Et('path')),
        (c = Et('path')),
        (p = Et('path')),
        (f = Et('path')),
        _(
          o,
          'd',
          'M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z',
        ),
        _(o, 'fill', '#FF7C00'),
        _(o, 'fill-opacity', '0.4'),
        _(
          a,
          'd',
          'M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z',
        ),
        _(a, 'fill', '#FF7C00'),
        _(
          i,
          'd',
          'M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z',
        ),
        _(i, 'fill', '#FF7C00'),
        _(i, 'fill-opacity', '0.4'),
        _(
          s,
          'd',
          'M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z',
        ),
        _(s, 'fill', '#FF7C00'),
        Ft(r, 'transform', 'translate(' + t[1][0] + 'px, ' + t[1][1] + 'px)'),
        _(
          l,
          'd',
          'M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z',
        ),
        _(l, 'fill', '#FF7C00'),
        _(l, 'fill-opacity', '0.4'),
        _(
          c,
          'd',
          'M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z',
        ),
        _(c, 'fill', '#FF7C00'),
        _(
          p,
          'd',
          'M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z',
        ),
        _(p, 'fill', '#FF7C00'),
        _(p, 'fill-opacity', '0.4'),
        _(
          f,
          'd',
          'M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z',
        ),
        _(f, 'fill', '#FF7C00'),
        Ft(d, 'transform', 'translate(' + t[2][0] + 'px, ' + t[2][1] + 'px)'),
        _(n, 'class', 'text-xl'),
        _(n, 'width', '5em'),
        _(n, 'height', '5em'),
        _(n, 'viewBox', '-1200 -1200 3000 3000'),
        _(n, 'fill', 'none'),
        _(n, 'xmlns', 'http://www.w3.org/2000/svg'),
        _(e, 'class', 'z-20'),
        q(e, 'm-12', t[0])
    },
    m(u, h) {
      v(u, e, h),
        b(e, n),
        b(n, r),
        b(r, o),
        b(r, a),
        b(r, i),
        b(r, s),
        b(n, d),
        b(d, l),
        b(d, c),
        b(d, p),
        b(d, f)
    },
    p(u, [h]) {
      h & 2 &&
        Ft(r, 'transform', 'translate(' + u[1][0] + 'px, ' + u[1][1] + 'px)'),
        h & 4 &&
          Ft(d, 'transform', 'translate(' + u[2][0] + 'px, ' + u[2][1] + 'px)'),
        h & 1 && q(e, 'm-12', u[0])
    },
    i: J,
    o: J,
    d(u) {
      u && y(e)
    },
  }
}
function _c(t, e, n) {
  let r,
    o,
    { margin: a = !0 } = e
  const i = wr([0, 0])
  We(t, i, (f) => n(1, (r = f)))
  const s = wr([0, 0])
  We(t, s, (f) => n(2, (o = f)))
  let d
  function l() {
    return new Promise(async (f) => {
      await Promise.all([i.set([125, 140]), s.set([-125, -140])]),
        await Promise.all([i.set([-125, 140]), s.set([125, -140])]),
        await Promise.all([i.set([-125, 0]), s.set([125, -0])]),
        await Promise.all([i.set([125, 0]), s.set([-125, 0])]),
        f()
    })
  }
  async function c() {
    await l(), d || c()
  }
  async function p() {
    await Promise.all([i.set([125, 0]), s.set([-125, 0])]), c()
  }
  return (
    Gn(() => (p(), () => (d = !0))),
    (t.$$set = (f) => {
      'margin' in f && n(0, (a = f.margin))
    }),
    [a, r, o, i, s]
  )
}
class hl extends Ot {
  constructor(e) {
    super(), Pt(this, e, _c, hc, kt, { margin: 0 })
  }
}
var _l =
    'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/static/img/api-logo.svg',
  yl = 'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/static/img/clear.svg',
  hr = 'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/static/img/python.svg',
  _r =
    'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/static/img/javascript.svg'
function yr(t, e, n) {
  const r = t.slice()
  return (r[19] = e[n]), (r[20] = e), (r[21] = n), r
}
function vr(t, e, n) {
  const r = t.slice()
  return (r[22] = e[n]), (r[24] = n), r
}
function xr(t, e, n) {
  const r = t.slice()
  return (r[22] = e[n]), (r[24] = n), r
}
function kr(t, e, n) {
  const r = t.slice()
  return (r[26] = e[n][0]), (r[27] = e[n][1]), r
}
function Er(t, e, n) {
  const r = t.slice()
  return (r[30] = e[n]), (r[31] = e), (r[24] = n), r
}
function Sr(t, e, n) {
  const r = t.slice()
  return (r[30] = e[n]), (r[32] = e), (r[24] = n), r
}
function yc(t) {
  let e, n, r, o, a, i, s, d, l, c, p, f, u
  return {
    c() {
      ;(e = A('div')),
        (n = A('h2')),
        (r = P(`No named API Routes found for
			`)),
        (o = A('span')),
        (a = P(t[0])),
        (i = R()),
        (s = A('button')),
        (d = A('img')),
        (c = R()),
        (p = A('div')),
        (p.innerHTML = `To expose an API endpoint of your app in this page, set the <span class="text-gray-800 text-sm bg-gray-200/80 dark:bg-gray-600 px-1 rounded font-mono">api_name</span>
			parameter of the event listener.<br/> For more information, visit the
			<a href="https://gradio.app/sharing_your_app/#api-page" target="_blank" class="text-orange-500 hover:text-orange-600 underline">API Page guide</a>. To hide the API documentation button and this page, set
			<span class="text-gray-800 text-sm bg-gray-200/80 dark:bg-gray-600 px-1 rounded font-mono">show_api=False</span>
			in the
			<span class="text-gray-800 text-sm bg-gray-200/80 dark:bg-gray-600 px-1 rounded font-mono">Blocks.launch()</span> method.`),
        _(o, 'class', 'italic text-orange-500'),
        Zt(d.src, (l = yl)) || _(d, 'src', l),
        _(d, 'alt', ''),
        _(d, 'class', 'w-3 dark:invert'),
        _(s, 'class', 'absolute right-6 top-5 md:top-6'),
        _(n, 'class', 'text-lg mb-4 font-semibold'),
        _(e, 'class', 'p-6')
    },
    m(h, S) {
      v(h, e, S),
        b(e, n),
        b(n, r),
        b(n, o),
        b(o, a),
        b(n, i),
        b(n, s),
        b(s, d),
        b(e, c),
        b(e, p),
        f || ((u = K(s, 'click', t[18])), (f = !0))
    },
    p(h, S) {
      S[0] & 1 && Y(a, h[0])
    },
    i: J,
    o: J,
    d(h) {
      h && y(e), (f = !1), u()
    },
  }
}
function vc(t) {
  let e,
    n,
    r,
    o,
    a,
    i,
    s,
    d,
    l,
    c,
    p,
    f,
    u,
    h,
    S,
    x,
    O,
    T = t[10] > 1 && xc(t),
    g = t[2],
    m = []
  for (let w = 0; w < g.length; w += 1) m[w] = Mr(yr(t, g, w))
  const C = (w) =>
    V(m[w], 1, 1, () => {
      m[w] = null
    })
  return {
    c() {
      ;(e = A('div')),
        (n = A('h2')),
        (r = A('img')),
        (a = P(`
			API documentation for\xA0
			`)),
        (i = A('div')),
        (s = P(t[0])),
        (d = R()),
        (l = A('button')),
        (c = A('img')),
        (f = R()),
        T && T.c(),
        (u = R()),
        (h = A('div'))
      for (let w = 0; w < m.length; w += 1) m[w].c()
      Zt(r.src, (o = _l)) || _(r, 'src', o),
        _(r, 'alt', ''),
        _(r, 'class', 'w-3.5 md:w-4 mr-1 md:mr-2'),
        _(i, 'class', 'text-orange-500'),
        Zt(c.src, (p = yl)) || _(c, 'src', p),
        _(c, 'alt', ''),
        _(c, 'class', 'w-3 dark:invert'),
        _(l, 'class', 'absolute right-6 top-5 md:top-6'),
        _(n, 'class', 'font-semibold flex'),
        _(
          e,
          'class',
          'px-6 py-4 border-b border-gray-100 dark:border-gray-900 relative text-sm md:text-lg',
        ),
        _(h, 'class', 'flex flex-col gap-6')
    },
    m(w, E) {
      v(w, e, E),
        b(e, n),
        b(n, r),
        b(n, a),
        b(n, i),
        b(i, s),
        b(n, d),
        b(n, l),
        b(l, c),
        b(e, f),
        T && T.m(e, null),
        v(w, u, E),
        v(w, h, E)
      for (let k = 0; k < m.length; k += 1) m[k].m(h, null)
      ;(S = !0), x || ((O = K(l, 'click', t[13])), (x = !0))
    },
    p(w, E) {
      if (
        ((!S || E[0] & 1) && Y(s, w[0]), w[10] > 1 && T.p(w, E), E[0] & 6655)
      ) {
        g = w[2]
        let k
        for (k = 0; k < g.length; k += 1) {
          const Z = yr(w, g, k)
          m[k]
            ? (m[k].p(Z, E), z(m[k], 1))
            : ((m[k] = Mr(Z)), m[k].c(), z(m[k], 1), m[k].m(h, null))
        }
        for (Ct(), k = g.length; k < m.length; k += 1) C(k)
        It()
      }
    },
    i(w) {
      if (!S) {
        for (let E = 0; E < g.length; E += 1) z(m[E])
        S = !0
      }
    },
    o(w) {
      m = m.filter(Boolean)
      for (let E = 0; E < m.length; E += 1) V(m[E])
      S = !1
    },
    d(w) {
      w && y(e), T && T.d(), w && y(u), w && y(h), qt(m, w), (x = !1), O()
    },
  }
}
function xc(t) {
  let e
  return {
    c() {
      ;(e = A('div')), (e.textContent = `${t[10]} API endpoints:`)
    },
    m(n, r) {
      v(n, e, r)
    },
    p: J,
    d(n) {
      n && y(e)
    },
  }
}
function Ar(t) {
  let e,
    n,
    r,
    o,
    a = t[19].api_name + '',
    i,
    s,
    d,
    l,
    c,
    p,
    f,
    u = t[19].api_name + '',
    h,
    S,
    x,
    O,
    T,
    g,
    m,
    C,
    w,
    E,
    k,
    Z,
    L,
    rt,
    X,
    F,
    U,
    Dt,
    Mt,
    yt,
    At,
    N,
    Oe,
    Le,
    Ne,
    Re,
    Me,
    I,
    D,
    $,
    Q,
    Tt,
    zt,
    vt,
    fe,
    me,
    Ht,
    sn,
    lt,
    ze,
    nt,
    Ut,
    st,
    xt,
    dt
  function Gt(j, it) {
    return j[4] === j[21] ? Ec : kc
  }
  let jt = Gt(t),
    Lt = jt(t)
  function Cl() {
    return t[14](t[19], t[21])
  }
  let ee = t[19].inputs,
    ut = []
  for (let j = 0; j < ee.length; j += 1) ut[j] = Cr(Sr(t, ee, j))
  let ne = t[19].outputs,
    ft = []
  for (let j = 0; j < ne.length; j += 1) ft[j] = Pr(Er(t, ne, j))
  let at = t[5] && Or(),
    dn = [
      ['python', hr],
      ['javascript', _r],
    ],
    Nt = []
  for (let j = 0; j < 2; j += 1) Nt[j] = Lr(kr(t, dn, j))
  function Qn(j, it) {
    if (j[3] === 'python') return Tc
    if (j[3] === 'javascript') return Ac
    if (j[3] === 'gradio client') return Sc
  }
  let re = Qn(t),
    mt = re && re(t)
  return {
    c() {
      ;(e = A('div')),
        (n = A('h3')),
        (r = A('span')),
        (r.textContent = 'POST'),
        (o = P(`
						/run/`)),
        (i = P(a)),
        (s = R()),
        (d = A('div')),
        (l = P('Endpoint: ')),
        (c = A('span')),
        (p = P(t[0])),
        (f = P('run/')),
        (h = P(u)),
        (S = R()),
        (x = A('button')),
        Lt.c(),
        (O = R()),
        (T = A('h4')),
        (T.innerHTML = `<div class="flex items-center h-1 w-3 bg-gray-300 dark:bg-gray-500 rounded-full mr-2"><div class="rounded-full h-1.5 w-1.5 bg-gray-700 dark:bg-gray-400"></div></div>
						Input Payload`),
        (g = R()),
        (m = A('div')),
        (C = P('{')),
        (w = A('br')),
        (E = P(`
						\xA0\xA0"data": [`)),
        (k = A('br')),
        (Z = R())
      for (let j = 0; j < ut.length; j += 1) ut[j].c()
      ;(L = P(`
						\xA0\xA0]`)),
        (rt = A('br')),
        (X = P(`
						}`)),
        (F = R()),
        (U = A('button')),
        (U.textContent = 'Try It Out'),
        (Dt = R()),
        (Mt = A('h4')),
        (Mt.innerHTML = `<div class="flex items-center h-1 w-3 bg-gray-300 dark:bg-gray-500 rounded-full mr-2"><div class="rounded-full h-1.5 w-1.5 bg-gray-700 dark:bg-gray-400 ml-auto"></div></div>
						Response Object`),
        (yt = R()),
        (At = A('div')),
        (N = A('div')),
        (Oe = P('{')),
        (Le = A('br')),
        (Ne = P(`
							\xA0\xA0"data": [`)),
        (Re = A('br')),
        (Me = R())
      for (let j = 0; j < ft.length; j += 1) ft[j].c()
      ;(I = P(`
							\xA0\xA0\xA0\xA0],`)),
        (D = A('br')),
        ($ = P(`
							\xA0\xA0\xA0\xA0"duration": (float)
							`)),
        (Q = A('span')),
        (Q.textContent = '// number of seconds to run function call'),
        (Tt = A('br')),
        (zt = P(`
							}`)),
        (fe = R()),
        at && at.c(),
        (me = R()),
        (Ht = A('h4')),
        (Ht.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 24 24" class="mr-1.5"><path fill="currentColor" d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6Z"></path></svg>
						Code snippets`),
        (sn = R()),
        (lt = A('div'))
      for (let j = 0; j < 2; j += 1) Nt[j].c()
      ;(ze = R()),
        (nt = A('code')),
        mt && mt.c(),
        (Ut = R()),
        _(
          r,
          'class',
          'bg-orange-100 px-1 rounded text-sm border border-orange-200 mr-2 font-semibold text-orange-600 dark:bg-orange-400 dark:text-orange-900 dark:border-orange-600',
        ),
        _(n, 'class', 'text-lg font-bold mb-1.5'),
        _(c, 'class', 'underline'),
        _(x, 'class', 'gr-button ml-2 !py-0'),
        _(d, 'class', 'text-sm md:text-base mb-6 text-gray-500'),
        _(T, 'class', 'font-bold mt-6 mb-3 flex items-center'),
        _(
          m,
          'class',
          'block bg-white border dark:bg-gray-800 p-4 font-mono text-sm rounded-lg',
        ),
        _(U, 'class', 'gr-button gr-button-lg gr-button-primary w-full mt-4'),
        _(Mt, 'class', 'font-bold mt-6 mb-3 flex items-center'),
        _(Q, 'class', 'text-gray-400'),
        _(N, 'class', (vt = t[5] ? 'hidden' : '')),
        _(
          At,
          'class',
          'bg-white border dark:bg-gray-800 p-4 font-mono text-sm rounded-lg flex flex-col',
        ),
        _(Ht, 'class', 'font-bold mt-8 mb-3 flex items-center'),
        _(lt, 'class', 'flex space-x-2 items-center mb-3'),
        _(
          nt,
          'class',
          'bg-white border dark:bg-gray-800 p-4 font-mono text-sm rounded-lg flex flex-col overflow-x-auto',
        ),
        _(
          e,
          'class',
          'bg-gradient-to-b dark:from-orange-200/5 from-orange-200/20 via-transparent to-transparent p-6 rounded',
        )
    },
    m(j, it) {
      v(j, e, it),
        b(e, n),
        b(n, r),
        b(n, o),
        b(n, i),
        b(e, s),
        b(e, d),
        b(d, l),
        b(d, c),
        b(c, p),
        b(c, f),
        b(c, h),
        b(d, S),
        b(d, x),
        Lt.m(x, null),
        b(e, O),
        b(e, T),
        b(e, g),
        b(e, m),
        b(m, C),
        b(m, w),
        b(m, E),
        b(m, k),
        b(m, Z)
      for (let M = 0; M < ut.length; M += 1) ut[M].m(m, null)
      b(m, L),
        b(m, rt),
        b(m, X),
        b(e, F),
        b(e, U),
        b(e, Dt),
        b(e, Mt),
        b(e, yt),
        b(e, At),
        b(At, N),
        b(N, Oe),
        b(N, Le),
        b(N, Ne),
        b(N, Re),
        b(N, Me)
      for (let M = 0; M < ft.length; M += 1) ft[M].m(N, null)
      b(N, I),
        b(N, D),
        b(N, $),
        b(N, Q),
        b(N, Tt),
        b(N, zt),
        b(At, fe),
        at && at.m(At, null),
        b(e, me),
        b(e, Ht),
        b(e, sn),
        b(e, lt)
      for (let M = 0; M < 2; M += 1) Nt[M].m(lt, null)
      b(e, ze),
        b(e, nt),
        mt && mt.m(nt, null),
        b(e, Ut),
        (st = !0),
        xt ||
          ((dt = [K(x, 'click', Cl), K(U, 'click', t[11].bind(null, t[21]))]),
          (xt = !0))
    },
    p(j, it) {
      if (
        ((t = j),
        (!st || it[0] & 4) && a !== (a = t[19].api_name + '') && Y(i, a),
        (!st || it[0] & 1) && Y(p, t[0]),
        (!st || it[0] & 4) && u !== (u = t[19].api_name + '') && Y(h, u),
        jt !== (jt = Gt(t)) &&
          (Lt.d(1), (Lt = jt(t)), Lt && (Lt.c(), Lt.m(x, null))),
        it[0] & 326)
      ) {
        ee = t[19].inputs
        let M
        for (M = 0; M < ee.length; M += 1) {
          const Vt = Sr(t, ee, M)
          ut[M] ? ut[M].p(Vt, it) : ((ut[M] = Cr(Vt)), ut[M].c(), ut[M].m(m, L))
        }
        for (; M < ut.length; M += 1) ut[M].d(1)
        ut.length = ee.length
      }
      if (it[0] & 134) {
        ne = t[19].outputs
        let M
        for (M = 0; M < ne.length; M += 1) {
          const Vt = Er(t, ne, M)
          ft[M] ? ft[M].p(Vt, it) : ((ft[M] = Pr(Vt)), ft[M].c(), ft[M].m(N, I))
        }
        for (; M < ft.length; M += 1) ft[M].d(1)
        ft.length = ne.length
      }
      if (
        ((!st || (it[0] & 32 && vt !== (vt = t[5] ? 'hidden' : ''))) &&
          _(N, 'class', vt),
        t[5]
          ? at
            ? it[0] & 32 && z(at, 1)
            : ((at = Or()), at.c(), z(at, 1), at.m(At, null))
          : at &&
            (Ct(),
            V(at, 1, 1, () => {
              at = null
            }),
            It()),
        it[0] & 8)
      ) {
        dn = [
          ['python', hr],
          ['javascript', _r],
        ]
        let M
        for (M = 0; M < 2; M += 1) {
          const Vt = kr(t, dn, M)
          Nt[M]
            ? Nt[M].p(Vt, it)
            : ((Nt[M] = Lr(Vt)), Nt[M].c(), Nt[M].m(lt, null))
        }
        for (; M < 2; M += 1) Nt[M].d(1)
      }
      re === (re = Qn(t)) && mt
        ? mt.p(t, it)
        : (mt && mt.d(1), (mt = re && re(t)), mt && (mt.c(), mt.m(nt, null)))
    },
    i(j) {
      st || (z(at), (st = !0))
    },
    o(j) {
      V(at), (st = !1)
    },
    d(j) {
      j && y(e),
        Lt.d(),
        qt(ut, j),
        qt(ft, j),
        at && at.d(),
        qt(Nt, j),
        mt && mt.d(),
        (xt = !1),
        _t(dt)
    },
  }
}
function kc(t) {
  let e
  return {
    c() {
      e = P('copy')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function Ec(t) {
  let e
  return {
    c() {
      e = P('copied!')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function Tr(t) {
  let e
  return {
    c() {
      ;(e = A('span')), (e.textContent = 'ERROR'), _(e, 'class', 'text-red-600')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function Cr(t) {
  let e,
    n,
    r,
    o,
    a,
    i,
    s = t[1][t[30]].documentation?.type + '',
    d,
    l,
    c,
    p,
    f,
    u = t[1][t[30]].documentation?.description + '',
    h,
    S,
    x = zr(t[1][t[30]].props.label) + '',
    O,
    T,
    g,
    m = t[1][t[30]].props.name + '',
    C,
    w,
    E,
    k,
    Z,
    L
  function rt() {
    t[15].call(n, t[21], t[24])
  }
  let X = t[8][t[21]][t[24]] && Tr()
  return {
    c() {
      ;(e = P('\xA0\xA0\xA0\xA0')),
        (n = A('input')),
        (r = R()),
        X && X.c(),
        (o = R()),
        (a = A('span')),
        (i = P(': ')),
        (d = P(s)),
        (l = P(',')),
        (c = R()),
        (p = A('span')),
        (f = P('// represents ')),
        (h = P(u)),
        (S = P(` of
								`)),
        (O = P(x)),
        (T = R()),
        (g = A('span')),
        (C = P(m)),
        (w = P(' component')),
        (E = R()),
        (k = A('br')),
        _(
          n,
          'class',
          'bg-gray-100 dark:bg-gray-600 border-none w-40 px-1 py-0.5 my-0.5 text-sm rounded ring-1 ring-gray-300 dark:ring-gray-500',
        ),
        _(n, 'type', 'text'),
        _(a, 'class', 'text-gray-500'),
        _(g, 'class', 'capitalize'),
        _(p, 'class', 'text-gray-400')
    },
    m(F, U) {
      v(F, e, U),
        v(F, n, U),
        St(n, t[6][t[21]][t[24]]),
        v(F, r, U),
        X && X.m(F, U),
        v(F, o, U),
        v(F, a, U),
        b(a, i),
        b(a, d),
        b(a, l),
        v(F, c, U),
        v(F, p, U),
        b(p, f),
        b(p, h),
        b(p, S),
        b(p, O),
        b(p, T),
        b(p, g),
        b(g, C),
        b(p, w),
        v(F, E, U),
        v(F, k, U),
        Z || ((L = K(n, 'input', rt)), (Z = !0))
    },
    p(F, U) {
      ;(t = F),
        U[0] & 64 &&
          n.value !== t[6][t[21]][t[24]] &&
          St(n, t[6][t[21]][t[24]]),
        t[8][t[21]][t[24]]
          ? X || ((X = Tr()), X.c(), X.m(o.parentNode, o))
          : X && (X.d(1), (X = null)),
        U[0] & 6 && s !== (s = t[1][t[30]].documentation?.type + '') && Y(d, s),
        U[0] & 6 &&
          u !== (u = t[1][t[30]].documentation?.description + '') &&
          Y(h, u),
        U[0] & 6 && x !== (x = zr(t[1][t[30]].props.label) + '') && Y(O, x),
        U[0] & 6 && m !== (m = t[1][t[30]].props.name + '') && Y(C, m)
    },
    d(F) {
      F && y(e),
        F && y(n),
        F && y(r),
        X && X.d(F),
        F && y(o),
        F && y(a),
        F && y(c),
        F && y(p),
        F && y(E),
        F && y(k),
        (Z = !1),
        L()
    },
  }
}
function Ir(t) {
  let e, n, r, o
  function a() {
    t[16].call(e, t[21], t[24])
  }
  return {
    c() {
      ;(e = A('input')),
        (n = P(' :')),
        (e.disabled = !0),
        _(
          e,
          'class',
          'bg-gray-100 dark:bg-gray-600 border-none w-40 px-1 py-0.5 my-0.5 text-sm rounded ring-1 ring-gray-300 dark:ring-gray-500',
        ),
        _(e, 'type', 'text')
    },
    m(i, s) {
      v(i, e, s),
        St(e, t[7][t[21]][t[24]]),
        v(i, n, s),
        r || ((o = K(e, 'input', a)), (r = !0))
    },
    p(i, s) {
      ;(t = i),
        s[0] & 128 &&
          e.value !== t[7][t[21]][t[24]] &&
          St(e, t[7][t[21]][t[24]])
    },
    d(i) {
      i && y(e), i && y(n), (r = !1), o()
    },
  }
}
function Pr(t) {
  let e,
    n,
    r,
    o = t[1][t[30]].documentation?.type + '',
    a,
    i,
    s,
    d,
    l,
    c = t[1][t[30]].documentation?.description + '',
    p,
    f,
    u = jr(t[1][t[30]].props.label) + '',
    h,
    S,
    x,
    O = t[1][t[30]].props.name + '',
    T,
    g,
    m,
    C,
    w = t[7][t[21]][t[24]] !== void 0 && Ir(t)
  return {
    c() {
      ;(e = P('\xA0\xA0\xA0\xA0')),
        w && w.c(),
        (n = R()),
        (r = A('span')),
        (a = P(o)),
        (i = P(',')),
        (s = R()),
        (d = A('span')),
        (l = P('// represents ')),
        (p = P(c)),
        (f = P(` of
									`)),
        (h = P(u)),
        (S = R()),
        (x = A('span')),
        (T = P(O)),
        (g = P(' component')),
        (m = R()),
        (C = A('br')),
        _(r, 'class', 'text-gray-500'),
        _(x, 'class', 'capitalize'),
        _(d, 'class', 'text-gray-400')
    },
    m(E, k) {
      v(E, e, k),
        w && w.m(E, k),
        v(E, n, k),
        v(E, r, k),
        b(r, a),
        b(r, i),
        v(E, s, k),
        v(E, d, k),
        b(d, l),
        b(d, p),
        b(d, f),
        b(d, h),
        b(d, S),
        b(d, x),
        b(x, T),
        b(d, g),
        v(E, m, k),
        v(E, C, k)
    },
    p(E, k) {
      E[7][E[21]][E[24]] !== void 0
        ? w
          ? w.p(E, k)
          : ((w = Ir(E)), w.c(), w.m(n.parentNode, n))
        : w && (w.d(1), (w = null)),
        k[0] & 6 && o !== (o = E[1][E[30]].documentation?.type + '') && Y(a, o),
        k[0] & 6 &&
          c !== (c = E[1][E[30]].documentation?.description + '') &&
          Y(p, c),
        k[0] & 6 && u !== (u = jr(E[1][E[30]].props.label) + '') && Y(h, u),
        k[0] & 6 && O !== (O = E[1][E[30]].props.name + '') && Y(T, O)
    },
    d(E) {
      E && y(e),
        w && w.d(E),
        E && y(n),
        E && y(r),
        E && y(s),
        E && y(d),
        E && y(m),
        E && y(C)
    },
  }
}
function Or(t) {
  let e, n, r
  return (
    (n = new hl({ props: { margin: !1 } })),
    {
      c() {
        ;(e = A('div')),
          ht(n.$$.fragment),
          _(e, 'class', 'self-center justify-self-center')
      },
      m(o, a) {
        v(o, e, a), pt(n, e, null), (r = !0)
      },
      i(o) {
        r || (z(n.$$.fragment, o), (r = !0))
      },
      o(o) {
        V(n.$$.fragment, o), (r = !1)
      },
      d(o) {
        o && y(e), gt(n)
      },
    }
  )
}
function Lr(t) {
  let e,
    n,
    r,
    o,
    a = t[26] + '',
    i,
    s,
    d,
    l,
    c
  function p() {
    return t[17](t[26])
  }
  return {
    c() {
      ;(e = A('li')),
        (n = A('img')),
        (o = R()),
        (i = P(a)),
        (s = R()),
        Zt(n.src, (r = t[27])) || _(n, 'src', r),
        _(n, 'class', 'mr-1.5 w-3'),
        _(n, 'alt', ''),
        _(
          e,
          'class',
          (d =
            'flex items-center border rounded-lg px-1.5 py-1 leading-none select-none text-smd capitalize ' +
            (t[3] === t[26]
              ? 'border-gray-400 text-gray-800 dark:bg-gray-700'
              : 'text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 hover:shadow-sm')),
        )
    },
    m(f, u) {
      v(f, e, u),
        b(e, n),
        b(e, o),
        b(e, i),
        b(e, s),
        l || ((c = K(e, 'click', p)), (l = !0))
    },
    p(f, u) {
      ;(t = f),
        u[0] & 8 &&
          d !==
            (d =
              'flex items-center border rounded-lg px-1.5 py-1 leading-none select-none text-smd capitalize ' +
              (t[3] === t[26]
                ? 'border-gray-400 text-gray-800 dark:bg-gray-700'
                : 'text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 hover:shadow-sm')) &&
          _(e, 'class', d)
    },
    d(f) {
      f && y(e), (l = !1), c()
    },
  }
}
function Sc(t) {
  let e
  return {
    c() {
      ;(e = A('pre')),
        (e.textContent = 'Hello World'),
        _(e, 'class', 'break-words whitespace-pre-wrap')
    },
    m(n, r) {
      v(n, e, r)
    },
    p: J,
    d(n) {
      n && y(e)
    },
  }
}
function Ac(t) {
  let e,
    n,
    r = t[0] + 'run/' + t[19].api_name,
    o,
    a,
    i,
    s = t[6][t[21]],
    d = []
  for (let l = 0; l < s.length; l += 1) d[l] = Nr(vr(t, s, l))
  return {
    c() {
      ;(e = A('pre')),
        (n = P('fetch("')),
        (o = P(r)),
        (a = P(`", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    data: [`))
      for (let l = 0; l < d.length; l += 1) d[l].c()
      i = P(`
	]
  })})
.then(r => r.json())
.then(
  r => {
    let data = r.data;
  }
)`)
    },
    m(l, c) {
      v(l, e, c), b(e, n), b(e, o), b(e, a)
      for (let p = 0; p < d.length; p += 1) d[p].m(e, null)
      b(e, i)
    },
    p(l, c) {
      if (
        (c[0] & 5 && r !== (r = l[0] + 'run/' + l[19].api_name) && Y(o, r),
        c[0] & 4166)
      ) {
        s = l[6][l[21]]
        let p
        for (p = 0; p < s.length; p += 1) {
          const f = vr(l, s, p)
          d[p] ? d[p].p(f, c) : ((d[p] = Nr(f)), d[p].c(), d[p].m(e, i))
        }
        for (; p < d.length; p += 1) d[p].d(1)
        d.length = s.length
      }
    },
    d(l) {
      l && y(e), qt(d, l)
    },
  }
}
function Tc(t) {
  let e,
    n,
    r = t[0] + 'run/' + t[19].api_name,
    o,
    a,
    i,
    s = t[6][t[21]],
    d = []
  for (let l = 0; l < s.length; l += 1) d[l] = Rr(xr(t, s, l))
  return {
    c() {
      ;(e = A('pre')),
        (n = P(`import requests

response = requests.post("`)),
        (o = P(r)),
        (a = P(`", json={
  "data": [`))
      for (let l = 0; l < d.length; l += 1) d[l].c()
      i = P(`
]}).json()

data = response["data"]`)
    },
    m(l, c) {
      v(l, e, c), b(e, n), b(e, o), b(e, a)
      for (let p = 0; p < d.length; p += 1) d[p].m(e, null)
      b(e, i)
    },
    p(l, c) {
      if (
        (c[0] & 5 && r !== (r = l[0] + 'run/' + l[19].api_name) && Y(o, r),
        c[0] & 4166)
      ) {
        s = l[6][l[21]]
        let p
        for (p = 0; p < s.length; p += 1) {
          const f = xr(l, s, p)
          d[p] ? d[p].p(f, c) : ((d[p] = Rr(f)), d[p].c(), d[p].m(e, i))
        }
        for (; p < d.length; p += 1) d[p].d(1)
        d.length = s.length
      }
    },
    d(l) {
      l && y(e), qt(d, l)
    },
  }
}
function Nr(t) {
  let e,
    n,
    r =
      t[12](t[22], t[1][t[2][t[21]].inputs[t[24]]].documentation?.type, 'js') +
      '',
    o,
    a
  return {
    c() {
      ;(e = A('br')), (n = P('      ')), (o = P(r)), (a = P(','))
    },
    m(i, s) {
      v(i, e, s), v(i, n, s), v(i, o, s), v(i, a, s)
    },
    p(i, s) {
      s[0] & 70 &&
        r !==
          (r =
            i[12](
              i[22],
              i[1][i[2][i[21]].inputs[i[24]]].documentation?.type,
              'js',
            ) + '') &&
        Y(o, r)
    },
    d(i) {
      i && y(e), i && y(n), i && y(o), i && y(a)
    },
  }
}
function Rr(t) {
  let e,
    n,
    r =
      t[12](t[22], t[1][t[2][t[21]].inputs[t[24]]].documentation?.type, 'py') +
      '',
    o,
    a
  return {
    c() {
      ;(e = A('br')), (n = P('    ')), (o = P(r)), (a = P(','))
    },
    m(i, s) {
      v(i, e, s), v(i, n, s), v(i, o, s), v(i, a, s)
    },
    p(i, s) {
      s[0] & 70 &&
        r !==
          (r =
            i[12](
              i[22],
              i[1][i[2][i[21]].inputs[i[24]]].documentation?.type,
              'py',
            ) + '') &&
        Y(o, r)
    },
    d(i) {
      i && y(e), i && y(n), i && y(o), i && y(a)
    },
  }
}
function Mr(t) {
  let e,
    n,
    r = t[19].api_name && Ar(t)
  return {
    c() {
      r && r.c(), (e = ot())
    },
    m(o, a) {
      r && r.m(o, a), v(o, e, a), (n = !0)
    },
    p(o, a) {
      o[19].api_name
        ? r
          ? (r.p(o, a), a[0] & 4 && z(r, 1))
          : ((r = Ar(o)), r.c(), z(r, 1), r.m(e.parentNode, e))
        : r &&
          (Ct(),
          V(r, 1, 1, () => {
            r = null
          }),
          It())
    },
    i(o) {
      n || (z(r), (n = !0))
    },
    o(o) {
      V(r), (n = !1)
    },
    d(o) {
      r && r.d(o), o && y(e)
    },
  }
}
function Cc(t) {
  let e, n, r, o
  const a = [vc, yc],
    i = []
  function s(d, l) {
    return d[10] ? 0 : 1
  }
  return (
    (e = s(t)),
    (n = i[e] = a[e](t)),
    {
      c() {
        n.c(), (r = ot())
      },
      m(d, l) {
        i[e].m(d, l), v(d, r, l), (o = !0)
      },
      p(d, l) {
        n.p(d, l)
      },
      i(d) {
        o || (z(n), (o = !0))
      },
      o(d) {
        V(n), (o = !1)
      },
      d(d) {
        i[e].d(d), d && y(r)
      },
    }
  )
}
const zr = (t) => (t ? "'" + t + "'" : 'the'),
  jr = (t) => (t ? "'" + t + "'" : 'the')
function Ic(t, e, n) {
  const r = Vn()
  Gn(
    () => (
      (document.body.style.overflow = 'hidden'),
      () => {
        document.body.style.overflow = 'auto'
      }
    ),
  )
  let { instance_map: o } = e,
    { dependencies: a } = e,
    { root: i } = e
  i === '' &&
    (i = location.protocol + '//' + location.host + location.pathname),
    i.endsWith('/') || (i += '/')
  let s = 'python',
    d = -1,
    l = !1,
    c = a.map((w) =>
      w.inputs.map((E) => {
        let k = o[E].documentation?.example_data
        return (
          k === void 0
            ? (k = '')
            : typeof k == 'object' && (k = JSON.stringify(k)),
          k
        )
      }),
    ),
    p = a.map((w) => new Array(w.outputs.length)),
    f = a.map((w) => new Array(w.inputs.length).fill(!1)),
    u = a.filter((w) => w.api_name).length
  const h = async (w) => {
      n(5, (l = !0))
      let E = a[w],
        k = 0
      try {
        var Z = c[w].map((X, F) => {
          k = F
          let U = o[E.inputs[F]]
          return (X = S(X, U.documentation?.type)), n(8, (f[w][k] = !1), f), X
        })
      } catch {
        n(8, (f[w][k] = !0), f), n(5, (l = !1))
        return
      }
      let [L, rt] = await wl(`${i}run/${E.api_name}`, { data: Z })
      n(5, (l = !1)),
        rt == 200
          ? n(
              7,
              (p[w] = L.data.map((X, F) => {
                let U = o[E.outputs[F]]
                return (
                  console.log(
                    U.documentation?.type,
                    X,
                    S(X, U.documentation?.type, 'js'),
                  ),
                  S(X, U.documentation?.type, 'js')
                )
              })),
              p,
            )
          : n(8, (f[w] = new Array(f[w].length).fill(!0)), f)
    },
    S = (w, E, k = null) =>
      E === void 0
        ? k === 'py'
          ? 'None'
          : null
        : E === 'string'
        ? k === null
          ? w
          : '"' + w + '"'
        : E === 'number'
        ? k === null
          ? parseFloat(w)
          : w
        : E === 'boolean'
        ? k === 'py'
          ? w === 'true'
            ? 'True'
            : 'False'
          : k === 'js'
          ? w
          : w === 'true'
        : k === null
        ? w === ''
          ? null
          : JSON.parse(w)
        : typeof w == 'string'
        ? w === ''
          ? k === 'py'
            ? 'None'
            : 'null'
          : w
        : JSON.stringify(w),
    x = () => r('close'),
    O = (w, E) => {
      navigator.clipboard.writeText(i + 'run/' + w.api_name),
        n(4, (d = E)),
        setTimeout(() => {
          n(4, (d = -1))
        }, 500)
    }
  function T(w, E) {
    ;(c[w][E] = this.value), n(6, c)
  }
  function g(w, E) {
    ;(p[w][E] = this.value), n(7, p)
  }
  const m = (w) => n(3, (s = w)),
    C = () => r('close')
  return (
    (t.$$set = (w) => {
      'instance_map' in w && n(1, (o = w.instance_map)),
        'dependencies' in w && n(2, (a = w.dependencies)),
        'root' in w && n(0, (i = w.root))
    }),
    [i, o, a, s, d, l, c, p, f, r, u, h, S, x, O, T, g, m, C]
  )
}
class Pc extends Ot {
  constructor(e) {
    super(),
      Pt(
        this,
        e,
        Ic,
        Cc,
        kt,
        { instance_map: 1, dependencies: 2, root: 0 },
        null,
        [-1, -1],
      )
  }
}
var Oc =
  'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/assets/logo.0a070fcf.svg'
function Fr(t) {
  return (document.title = t[2]), { c: J, m: J, d: J }
}
function Dr(t) {
  let e, n
  return {
    c() {
      ;(e = A('script')),
        (e.async = !0),
        (e.defer = !0),
        Zt(
          e.src,
          (n = 'https://www.googletagmanager.com/gtag/js?id=UA-156449732-1'),
        ) || _(e, 'src', n)
    },
    m(r, o) {
      v(r, e, o)
    },
    d(r) {
      r && y(e)
    },
  }
}
function Ur(t) {
  let e, n
  return (
    (e = new ml({
      props: {
        has_modes: t[9].has_modes,
        component: t[9].component,
        id: t[9].id,
        props: t[9].props,
        children: t[9].children,
        dynamic_ids: t[15],
        instance_map: t[11],
        root: t[0],
        target: t[4],
        theme: t[8],
      },
    })),
    e.$on('mount', t[16]),
    e.$on('destroy', t[25]),
    {
      c() {
        ht(e.$$.fragment)
      },
      m(r, o) {
        pt(e, r, o), (n = !0)
      },
      p(r, o) {
        const a = {}
        o[0] & 512 && (a.has_modes = r[9].has_modes),
          o[0] & 512 && (a.component = r[9].component),
          o[0] & 512 && (a.id = r[9].id),
          o[0] & 512 && (a.props = r[9].props),
          o[0] & 512 && (a.children = r[9].children),
          o[0] & 2048 && (a.instance_map = r[11]),
          o[0] & 1 && (a.root = r[0]),
          o[0] & 16 && (a.target = r[4]),
          o[0] & 256 && (a.theme = r[8]),
          e.$set(a)
      },
      i(r) {
        n || (z(e.$$.fragment, r), (n = !0))
      },
      o(r) {
        V(e.$$.fragment, r), (n = !1)
      },
      d(r) {
        gt(e, r)
      },
    }
  )
}
function Gr(t) {
  let e, n, r, o, a, i, s, d
  return {
    c() {
      ;(e = A('button')),
        (n = P('Use via API ')),
        (r = A('img')),
        (a = R()),
        (i = A('div')),
        (i.textContent = '\xB7'),
        Zt(r.src, (o = _l)) || _(r, 'src', o),
        _(r, 'alt', ''),
        _(r, 'class', 'w-2.5 md:w-3 mx-1'),
        _(e, 'class', 'flex items-center hover:text-gray-500')
    },
    m(l, c) {
      v(l, e, c),
        b(e, n),
        b(e, r),
        v(l, a, c),
        v(l, i, c),
        s || ((d = K(e, 'click', t[26])), (s = !0))
    },
    p: J,
    d(l) {
      l && y(e), l && y(a), l && y(i), (s = !1), d()
    },
  }
}
function Vr(t) {
  let e, n, r, o, a, i, s, d
  return (
    (a = new Pc({
      props: { instance_map: t[11], dependencies: t[1], root: t[0] },
    })),
    a.$on('close', t[28]),
    {
      c() {
        ;(e = A('div')),
          (n = A('div')),
          (r = R()),
          (o = A('div')),
          ht(a.$$.fragment),
          _(n, 'class', 'flex-1 backdrop-blur-sm'),
          _(
            o,
            'class',
            'md:w-[950px] 2xl:w-[1150px] bg-white md:rounded-l-xl shadow-2xl overflow-hidden overflow-y-auto',
          ),
          _(e, 'class', 'h-screen w-screen fixed z-50 bg-black/50 flex top-0')
      },
      m(l, c) {
        v(l, e, c),
          b(e, n),
          b(e, r),
          b(e, o),
          pt(a, o, null),
          (i = !0),
          s || ((d = K(n, 'click', t[27])), (s = !0))
      },
      p(l, c) {
        const p = {}
        c[0] & 2048 && (p.instance_map = l[11]),
          c[0] & 2 && (p.dependencies = l[1]),
          c[0] & 1 && (p.root = l[0]),
          a.$set(p)
      },
      i(l) {
        i || (z(a.$$.fragment, l), (i = !0))
      },
      o(l) {
        V(a.$$.fragment, l), (i = !1)
      },
      d(l) {
        l && y(e), gt(a), (s = !1), d()
      },
    }
  )
}
function Lc(t) {
  let e,
    n,
    r,
    o,
    a,
    i,
    s,
    d,
    l,
    c,
    p,
    f,
    u,
    h,
    S,
    x = t[6] && Fr(t),
    O = t[3] && Dr(),
    T = t[12] && Ur(t),
    g = t[5] && Gr(t),
    m = t[10] && t[12] && Vr(t)
  return {
    c() {
      x && x.c(),
        (e = ot()),
        O && O.c(),
        (n = ot()),
        (r = R()),
        (o = A('div')),
        (a = A('div')),
        T && T.c(),
        (i = R()),
        (s = A('footer')),
        g && g.c(),
        (d = R()),
        (l = A('a')),
        (c = P(`Built with Gradio
			`)),
        (p = A('img')),
        (u = R()),
        m && m.c(),
        (h = ot()),
        _(a, 'class', 'mx-auto container px-4 py-6 dark:bg-gray-950'),
        q(a, 'flex-grow', t[7]),
        _(p, 'class', 'w-2.5 md:w-3 mx-1'),
        Zt(p.src, (f = Oc)) || _(p, 'src', f),
        _(p, 'alt', 'logo'),
        _(l, 'href', 'https://gradio.app'),
        _(l, 'class', 'flex items-center hover:text-gray-500'),
        _(l, 'target', '_blank'),
        _(l, 'rel', 'noreferrer'),
        _(
          s,
          'class',
          'flex justify-center pb-6 text-gray-400 space-x-2 text-sm md:text-base',
        ),
        _(o, 'class', 'w-full flex flex-col'),
        q(o, 'min-h-screen', t[7])
    },
    m(C, w) {
      x && x.m(document.head, null),
        b(document.head, e),
        O && O.m(document.head, null),
        b(document.head, n),
        v(C, r, w),
        v(C, o, w),
        b(o, a),
        T && T.m(a, null),
        b(o, i),
        b(o, s),
        g && g.m(s, null),
        b(s, d),
        b(s, l),
        b(l, c),
        b(l, p),
        v(C, u, w),
        m && m.m(C, w),
        v(C, h, w),
        (S = !0)
    },
    p(C, w) {
      C[6]
        ? x || ((x = Fr(C)), x.c(), x.m(e.parentNode, e))
        : x && (x.d(1), (x = null)),
        C[3]
          ? O || ((O = Dr()), O.c(), O.m(n.parentNode, n))
          : O && (O.d(1), (O = null)),
        C[12]
          ? T
            ? (T.p(C, w), w[0] & 4096 && z(T, 1))
            : ((T = Ur(C)), T.c(), z(T, 1), T.m(a, null))
          : T &&
            (Ct(),
            V(T, 1, 1, () => {
              T = null
            }),
            It()),
        w[0] & 128 && q(a, 'flex-grow', C[7]),
        C[5]
          ? g
            ? g.p(C, w)
            : ((g = Gr(C)), g.c(), g.m(s, d))
          : g && (g.d(1), (g = null)),
        w[0] & 128 && q(o, 'min-h-screen', C[7]),
        C[10] && C[12]
          ? m
            ? (m.p(C, w), w[0] & 5120 && z(m, 1))
            : ((m = Vr(C)), m.c(), z(m, 1), m.m(h.parentNode, h))
          : m &&
            (Ct(),
            V(m, 1, 1, () => {
              m = null
            }),
            It())
    },
    i(C) {
      S || (z(T), z(m), (S = !0))
    },
    o(C) {
      V(T), V(m), (S = !1)
    },
    d(C) {
      x && x.d(C),
        y(e),
        O && O.d(C),
        y(n),
        C && y(r),
        C && y(o),
        T && T.d(),
        g && g.d(),
        C && y(u),
        m && m.d(C),
        C && y(h)
    },
  }
}
function Xr(t, e, n) {
  let r = 0
  for (;;) {
    const o = n[r]
    if (o === void 0) break
    let a = 0
    for (;;) {
      const i = o[e][a]
      if (i === void 0) break
      if (i === t) return !0
      a++
    }
    r++
  }
  return !1
}
function Nc(t) {
  return (Array.isArray(t) && t.length === 0) || t === '' || t === 0 || !t
}
function Rc(t, e, n) {
  let r
  pc()
  let { root: o } = e,
    { fn: a } = e,
    { components: i } = e,
    { layout: s } = e,
    { dependencies: d } = e,
    { enable_queue: l } = e,
    { title: c = 'Gradio' } = e,
    { analytics_enabled: p = !1 } = e,
    { target: f } = e,
    { id: u = 0 } = e,
    { autoscroll: h = !1 } = e,
    { show_api: S = !0 } = e,
    { control_page_title: x = !1 } = e,
    { app_mode: O } = e,
    { theme: T } = e,
    g = _d()
  We(t, g, (I) => n(24, (r = I)))
  let m = {
    id: s.id,
    type: 'column',
    props: {},
    has_modes: !1,
    instance: {},
    component: {},
  }
  i.push(m)
  const C = Object.getPrototypeOf(async function () {}).constructor
  d.forEach((I) => {
    if (I.js)
      try {
        I.frontend_fn = new C(
          '__fn_args',
          `let result = await (${I.js})(...__fn_args);
					return ${I.outputs.length} === 1 ? [result] : result;`,
        )
      } catch (D) {
        console.error('Could not parse custom js method.'), console.error(D)
      }
  })
  let E = new URLSearchParams(window.location.search).get('view') === 'api'
  const k = (I) => {
      n(10, (E = I))
      let D = new URLSearchParams(window.location.search)
      I ? D.set('view', 'api') : D.delete('view'),
        history.replaceState(null, '', '?' + D.toString())
    },
    Z = i.reduce((I, { id: D, props: $ }) => {
      const Q = Xr(D, 'inputs', d),
        Tt = Xr(D, 'outputs', d)
      return !Q && !Tt && Nc($?.value) && I.add(D), Q && I.add(D), I
    }, new Set())
  let L = i.reduce((I, D) => ((I[D.id] = D), I), {})
  function rt(I) {
    return new Promise(async (D, $) => {
      try {
        const Q = await hd[I]()
        D({ name: I, component: Q })
      } catch (Q) {
        console.error('failed to load: ' + I), console.error(Q), $(Q)
      }
    })
  }
  const X = new Set(),
    F = new Map()
  async function U(I) {
    let D = L[I.id]
    const $ = (await F.get(D.type)).component
    ;(D.component = $.Component),
      $.document && (D.documentation = $.document(D.props)),
      $.modes && $.modes.length > 1 && (D.has_modes = !0),
      I.children &&
        ((D.children = I.children.map((Q) => L[Q.id])),
        await Promise.all(I.children.map((Q) => U(Q))))
  }
  i.forEach(async (I) => {
    const D = rt(I.type)
    X.add(D), F.set(I.type, D)
  })
  let Dt = !1
  Promise.all(Array.from(X)).then(() => {
    U(s)
      .then(async () => {
        n(12, (Dt = !0)),
          await Ee(),
          window.__gradio_loader__[u].$set({ status: 'complete' })
      })
      .catch((I) => {
        console.error(I), window.__gradio_loader__[u].$set({ status: 'error' })
      })
  })
  function Mt(I, D, $) {
    I?.props || (I.props = {}), (I.props[D] = $), n(9, m)
  }
  let yt = []
  async function At() {
    await Ee()
    for (var I = f.getElementsByTagName('a'), D = 0; D < I.length; D++)
      I[D].getAttribute('target') !== '_blank' &&
        I[D].setAttribute('target', '_blank')
    d.forEach(
      (
        {
          targets: $,
          trigger: Q,
          inputs: Tt,
          outputs: zt,
          queue: vt,
          backend_fn: fe,
          frontend_fn: me,
          cancels: Ht,
          ...sn
        },
        lt,
      ) => {
        const ze = $.map((nt) => [nt, L[nt]])
        if (
          $.length === 0 &&
          !yt[lt]?.includes(-1) &&
          Q === 'load' &&
          zt.every((nt) => L?.[nt].instance) &&
          Tt.every((nt) => L?.[nt].instance)
        ) {
          let Ut = function (st) {
            st.data.forEach((xt, dt) => {
              if (
                typeof xt == 'object' &&
                xt !== null &&
                xt.__type__ === 'update'
              ) {
                for (const [Gt, jt] of Object.entries(xt))
                  Gt !== '__type__' && n(11, (L[zt[dt]].props[Gt] = jt), L)
                n(9, m)
              } else n(11, (L[zt[dt]].props.value = xt), L)
            })
          }
          const nt = a({
            action: 'predict',
            backend_fn: fe,
            frontend_fn: me,
            payload: { fn_index: lt, data: Tt.map((st) => L[st].props.value) },
            queue: vt === null ? l : vt,
            queue_callback: Ut,
            loading_status: g,
            cancels: Ht,
          })
          ;(vt === null ? l : vt) || nt.then(Ut), (yt[lt] = [-1])
        }
        ze.filter((nt) => !!nt && !!nt[1]).forEach(([nt, { instance: Ut }]) => {
          if (yt[lt]?.includes(nt) || !Ut) return
          Ut?.$on(Q, () => {
            if (g.get_status_for_fn(lt) === 'pending') return
            const xt = a({
              action: 'predict',
              backend_fn: fe,
              frontend_fn: me,
              payload: {
                fn_index: lt,
                data: Tt.map((dt) => L[dt].props.value),
              },
              output_data: zt.map((dt) => L[dt].props.value),
              queue: vt === null ? l : vt,
              queue_callback: st,
              loading_status: g,
              cancels: Ht,
            })
            ;(vt === null ? l : vt) || xt.then(st)
          })
          function st(xt) {
            xt.data.forEach((dt, Gt) => {
              if (
                typeof dt == 'object' &&
                dt !== null &&
                dt.__type__ === 'update'
              ) {
                for (const [jt, Lt] of Object.entries(dt))
                  jt !== '__type__' && n(11, (L[zt[Gt]].props[jt] = Lt), L)
                n(9, m)
              } else n(11, (L[zt[Gt]].props.value = dt), L)
            })
          }
          yt[lt] || (yt[lt] = []), yt[lt].push(nt)
        })
      },
    )
  }
  function N(I) {
    yt = yt.map((D) => D.filter(($) => $ !== I))
  }
  d.forEach((I, D) => {
    g.register(D, I.inputs, I.outputs)
  })
  function Oe(I) {
    for (const $ in I) {
      let Q = I[$],
        Tt = d[Q.fn_index]
      ;(Q.scroll_to_output = Tt.scroll_to_output),
        (Q.visible = Tt.show_progress),
        Mt(L[$], 'loading_status', Q)
    }
    const D = g.get_inputs_to_update()
    for (const [$, Q] of D) Mt(L[$], 'pending', Q === 'pending')
  }
  const Le = ({ detail: I }) => N(I),
    Ne = () => {
      k(!E)
    },
    Re = () => {
      k(!1)
    },
    Me = () => {
      k(!1)
    }
  return (
    (t.$$set = (I) => {
      'root' in I && n(0, (o = I.root)),
        'fn' in I && n(18, (a = I.fn)),
        'components' in I && n(19, (i = I.components)),
        'layout' in I && n(20, (s = I.layout)),
        'dependencies' in I && n(1, (d = I.dependencies)),
        'enable_queue' in I && n(21, (l = I.enable_queue)),
        'title' in I && n(2, (c = I.title)),
        'analytics_enabled' in I && n(3, (p = I.analytics_enabled)),
        'target' in I && n(4, (f = I.target)),
        'id' in I && n(22, (u = I.id)),
        'autoscroll' in I && n(23, (h = I.autoscroll)),
        'show_api' in I && n(5, (S = I.show_api)),
        'control_page_title' in I && n(6, (x = I.control_page_title)),
        'app_mode' in I && n(7, (O = I.app_mode)),
        'theme' in I && n(8, (T = I.theme))
    }),
    (t.$$.update = () => {
      t.$$.dirty[0] & 8388608 && qo.update((I) => ({ ...I, autoscroll: h })),
        t.$$.dirty[0] & 16777216 && Oe(r)
    }),
    [
      o,
      d,
      c,
      p,
      f,
      S,
      x,
      O,
      T,
      m,
      E,
      L,
      Dt,
      g,
      k,
      Z,
      At,
      N,
      a,
      i,
      s,
      l,
      u,
      h,
      r,
      Le,
      Ne,
      Re,
      Me,
    ]
  )
}
class Mc extends Ot {
  constructor(e) {
    super(),
      Pt(
        this,
        e,
        Rc,
        Lc,
        kt,
        {
          root: 0,
          fn: 18,
          components: 19,
          layout: 20,
          dependencies: 1,
          enable_queue: 21,
          title: 2,
          analytics_enabled: 3,
          target: 4,
          id: 22,
          autoscroll: 23,
          show_api: 5,
          control_page_title: 6,
          app_mode: 7,
          theme: 8,
        },
        null,
        [-1, -1],
      )
  }
}
function zc(t) {
  let e, n
  const r = t[1].default,
    o = zn(r, t, t[0], null)
  return {
    c() {
      ;(e = A('div')),
        o && o.c(),
        _(
          e,
          'class',
          'gr-form flex border-solid border bg-gray-200 dark:bg-gray-700 gap-px rounded-lg flex-wrap',
        ),
        Ft(e, 'flex-direction', 'inherit')
    },
    m(a, i) {
      v(a, e, i), o && o.m(e, null), (n = !0)
    },
    p(a, [i]) {
      o &&
        o.p &&
        (!n || i & 1) &&
        Fn(o, r, a, a[0], n ? jn(r, a[0], i, null) : Dn(a[0]), null)
    },
    i(a) {
      n || (z(o, a), (n = !0))
    },
    o(a) {
      V(o, a), (n = !1)
    },
    d(a) {
      a && y(e), o && o.d(a)
    },
  }
}
function jc(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e
  return (
    (t.$$set = (a) => {
      '$$scope' in a && n(0, (o = a.$$scope))
    }),
    [o, r]
  )
}
class Fc extends Ot {
  constructor(e) {
    super(), Pt(this, e, jc, zc, kt, {})
  }
}
var ln = {},
  Pe = {},
  Zn = { exports: {} },
  tt = String,
  vl = function () {
    return {
      isColorSupported: !1,
      reset: tt,
      bold: tt,
      dim: tt,
      italic: tt,
      underline: tt,
      inverse: tt,
      hidden: tt,
      strikethrough: tt,
      black: tt,
      red: tt,
      green: tt,
      yellow: tt,
      blue: tt,
      magenta: tt,
      cyan: tt,
      white: tt,
      gray: tt,
      bgBlack: tt,
      bgRed: tt,
      bgGreen: tt,
      bgYellow: tt,
      bgBlue: tt,
      bgMagenta: tt,
      bgCyan: tt,
      bgWhite: tt,
    }
  }
Zn.exports = vl()
Zn.exports.createColors = vl
Object.defineProperty(Pe, '__esModule', { value: !0 })
Pe.dim = Uc
Pe.default = void 0
var Wt = Dc(Zn.exports)
function Dc(t) {
  return t && t.__esModule ? t : { default: t }
}
let qr = new Set()
function wn(t, e, n) {
  ;(typeof process < 'u' && {}.JEST_WORKER_ID) ||
    (n && qr.has(n)) ||
    (n && qr.add(n),
    console.warn(''),
    e.forEach((r) => console.warn(t, '-', r)))
}
function Uc(t) {
  return Wt.default.dim(t)
}
var Gc = {
  info(t, e) {
    wn(
      Wt.default.bold(Wt.default.cyan('info')),
      ...(Array.isArray(t) ? [t] : [e, t]),
    )
  },
  warn(t, e) {
    wn(
      Wt.default.bold(Wt.default.yellow('warn')),
      ...(Array.isArray(t) ? [t] : [e, t]),
    )
  },
  risk(t, e) {
    wn(
      Wt.default.bold(Wt.default.magenta('risk')),
      ...(Array.isArray(t) ? [t] : [e, t]),
    )
  },
}
Pe.default = Gc
Object.defineProperty(ln, '__esModule', { value: !0 })
ln.default = void 0
var Vc = Xc(Pe)
function Xc(t) {
  return t && t.__esModule ? t : { default: t }
}
function he({ version: t, from: e, to: n }) {
  Vc.default.warn(`${e}-color-renamed`, [
    `As of Tailwind CSS ${t}, \`${e}\` has been renamed to \`${n}\`.`,
    'Update your configuration file to silence this warning.',
  ])
}
var qc = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  sky: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
  get lightBlue() {
    return he({ version: 'v2.2', from: 'lightBlue', to: 'sky' }), this.sky
  },
  get warmGray() {
    return he({ version: 'v3.0', from: 'warmGray', to: 'stone' }), this.stone
  },
  get trueGray() {
    return (
      he({ version: 'v3.0', from: 'trueGray', to: 'neutral' }), this.neutral
    )
  },
  get coolGray() {
    return he({ version: 'v3.0', from: 'coolGray', to: 'gray' }), this.gray
  },
  get blueGray() {
    return he({ version: 'v3.0', from: 'blueGray', to: 'slate' }), this.slate
  },
}
ln.default = qc
let hn = ln
var Br = (hn.__esModule ? hn : { default: hn }).default
const Q0 = [
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'teal',
    'orange',
    'cyan',
    'lime',
    'pink',
  ],
  Bc = [
    { color: 'red', primary: 600, secondary: 100 },
    { color: 'green', primary: 600, secondary: 100 },
    { color: 'blue', primary: 600, secondary: 100 },
    { color: 'yellow', primary: 500, secondary: 100 },
    { color: 'purple', primary: 600, secondary: 100 },
    { color: 'teal', primary: 600, secondary: 100 },
    { color: 'orange', primary: 600, secondary: 100 },
    { color: 'cyan', primary: 600, secondary: 100 },
    { color: 'lime', primary: 500, secondary: 100 },
    { color: 'pink', primary: 600, secondary: 100 },
  ],
  K0 = Bc.reduce(
    (t, { color: e, primary: n, secondary: r }) => ({
      ...t,
      [e]: { primary: Br[e][n], secondary: Br[e][r] },
    }),
    {},
  ),
  Hc = (t, e) => xl[e](t[e])
function Hr(t, e) {
  const n = e.reduce(
    (r, o) => (
      t[o] === void 0 || !xl[o] ? (r[o] = ' ') : (r[o] = ` ${Hc(t, o)} `), r
    ),
    {},
  )
  return (
    (n.classes = ` ${Object.values(n).join(' ').replace(/\s+/g, ' ').trim()} `),
    n
  )
}
const xl = {
    container(t) {
      return t
        ? ''
        : '!p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent'
    },
    label_container(t) {
      return t ? '' : '!border-0 !shadow-none !overflow-visible !bg-transparent'
    },
    grid(t) {
      let e = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:'],
        n = Array.isArray(t) ? t : [t]
      return [0, 0, 0, 0, 0, 0]
        .map((r, o) => `${e[o]}grid-cols-${n?.[o] || n?.[n?.length - 1]}`)
        .join(' ')
    },
    height(t) {
      return t === 'auto' ? 'auto' : ''
    },
    full_width(t) {
      return t ? 'w-full grow' : 'grow-0'
    },
    equal_height(t) {
      return t ? 'items-stretch' : 'unequal-height'
    },
    visible(t) {
      return t ? '' : '!hidden'
    },
    item_container(t) {
      return t ? '' : '!border-none'
    },
  },
  $0 = (t, e = '') => {
    let n = [],
      r = {}
    if (e === '') r = t
    else
      for (const o in t)
        if (o.startsWith(e + '_')) {
          const a = o.substring(o.indexOf('_') + 1)
          r[a] = t[o]
        }
    if (r.hasOwnProperty('margin')) {
      Array.isArray(r.margin) ||
        (r.margin = r.margin ? [!0, !0, !0, !0] : [!1, !1, !1, !1])
      let o = ['t', 'r', 'b', 'l']
      r.margin.forEach((a, i) => {
        a || n.push(`!m${o[i]}-0`)
      })
    }
    if (r.hasOwnProperty('border')) {
      Array.isArray(r.border) ||
        (r.border = r.border ? [!0, !0, !0, !0] : [!1, !1, !1, !1])
      let o = ['t', 'r', 'b', 'l']
      r.border.forEach((a, i) => {
        a || n.push(`!border-${o[i]}-0`)
      })
    }
    switch (r.rounded) {
      case !0:
        n.push('!rounded-lg')
        break
      case !1:
        n.push('!rounded-none')
        break
    }
    switch (r.full_width) {
      case !0:
        n.push('w-full')
        break
      case !1:
        n.push('!grow-0')
        break
    }
    switch (r.text_color) {
      case 'red':
        n.push('!text-red-500', 'dark:text-red-100')
        break
      case 'yellow':
        n.push('!text-yellow-500', 'dark:text-yellow-100')
        break
      case 'green':
        n.push('!text-green-500', 'dark:text-green-100')
        break
      case 'blue':
        n.push('!text-blue-500', 'dark:text-blue-100')
        break
      case 'purple':
        n.push('!text-purple-500', 'dark:text-purple-100')
        break
      case 'black':
        n.push('!text-gray-700', 'dark:text-gray-50')
        break
    }
    switch (r.bg_color) {
      case 'red':
        n.push(
          '!bg-red-100 !from-red-100 !to-red-200 !border-red-300',
          'dark:!bg-red-700 dark:!from-red-700 dark:!to-red-800 dark:!border-red-900',
        )
        break
      case 'yellow':
        n.push(
          '!bg-yellow-100 !from-yellow-100 !to-yellow-200 !border-yellow-300',
          'dark:!bg-yellow-700 dark:!from-yellow-700 dark:!to-yellow-800 dark:!border-yellow-900',
        )
        break
      case 'green':
        n.push(
          '!bg-green-100 !from-green-100 !to-green-200 !border-green-300',
          'dark:!bg-green-700 dark:!from-green-700 dark:!to-green-800 dark:!border-green-900  !text-gray-800',
        )
        break
      case 'blue':
        n.push(
          '!bg-blue-100 !from-blue-100 !to-blue-200 !border-blue-300',
          'dark:!bg-blue-700 dark:!from-blue-700 dark:!to-blue-800 dark:!border-blue-900',
        )
        break
      case 'purple':
        n.push(
          '!bg-purple-100 !from-purple-100 !to-purple-200 !border-purple-300',
          'dark:!bg-purple-700 dark:!from-purple-700 dark:!to-purple-800 dark:!border-purple-900',
        )
        break
      case 'black':
        n.push(
          '!bg-gray-100 !from-gray-100 !to-gray-200 !border-gray-300',
          'dark:!bg-gray-700 dark:!from-gray-700 dark:!to-gray-800 dark:!border-gray-900',
        )
      case 'pink':
        n.push(
          '!bg-pink-100 !from-pink-100 !to-pink-200 !border-pink-300',
          'dark:!bg-pink-700 dark:!from-pink-700 dark:!to-pink-800 dark:!border-pink-900 !text-gray-800',
        )
        break
    }
    return ' ' + n.join(' ')
  }
function _n(t) {
  let e, n, r, o
  const a = t[15].default,
    i = zn(a, t, t[14], null)
  let s = [
      { 'data-testid': t[4] },
      { id: t[0] },
      {
        class: (n =
          'gr-block gr-box relative w-full ' +
          t[8][t[1]] +
          ' ' +
          t[8][t[2]] +
          ' ' +
          t[7]),
      },
      { style: (r = t[6] || null) },
    ],
    d = {}
  for (let l = 0; l < s.length; l += 1) d = en(d, s[l])
  return {
    c() {
      ;(e = A(t[9])),
        i && i.c(),
        $n(e, d),
        q(e, '!hidden', t[5] === !1),
        q(e, 'gr-padded', t[3])
    },
    m(l, c) {
      v(l, e, c), i && i.m(e, null), (o = !0)
    },
    p(l, c) {
      i &&
        i.p &&
        (!o || c & 16384) &&
        Fn(i, a, l, l[14], o ? jn(a, l[14], c, null) : Dn(l[14]), null),
        $n(
          e,
          (d = Bn(s, [
            (!o || c & 16) && { 'data-testid': l[4] },
            (!o || c & 1) && { id: l[0] },
            (!o ||
              (c & 134 &&
                n !==
                  (n =
                    'gr-block gr-box relative w-full ' +
                    l[8][l[1]] +
                    ' ' +
                    l[8][l[2]] +
                    ' ' +
                    l[7]))) && { class: n },
            (!o || (c & 64 && r !== (r = l[6] || null))) && { style: r },
          ])),
        ),
        q(e, '!hidden', l[5] === !1),
        q(e, 'gr-padded', l[3])
    },
    i(l) {
      o || (z(i, l), (o = !0))
    },
    o(l) {
      V(i, l), (o = !1)
    },
    d(l) {
      l && y(e), i && i.d(l)
    },
  }
}
function Wc(t) {
  let e = t[9],
    n,
    r,
    o = t[9] && _n(t)
  return {
    c() {
      o && o.c(), (n = ot())
    },
    m(a, i) {
      o && o.m(a, i), v(a, n, i), (r = !0)
    },
    p(a, [i]) {
      a[9]
        ? e
          ? kt(e, a[9])
            ? (o.d(1), (o = _n(a)), o.c(), o.m(n.parentNode, n))
            : o.p(a, i)
          : ((o = _n(a)), o.c(), o.m(n.parentNode, n))
        : e && (o.d(1), (o = null)),
        (e = a[9])
    },
    i(a) {
      r || (z(o), (r = !0))
    },
    o(a) {
      V(o), (r = !1)
    },
    d(a) {
      a && y(n), o && o.d(a)
    },
  }
}
function Yc(t, e, n) {
  let r,
    o,
    { $$slots: a = {}, $$scope: i } = e,
    { style: s = {} } = e,
    { elem_id: d = '' } = e,
    { variant: l = 'solid' } = e,
    { color: c = 'grey' } = e,
    { padding: p = !0 } = e,
    { type: f = 'normal' } = e,
    { test_id: u = void 0 } = e,
    { disable: h = !1 } = e,
    { explicit_call: S = !1 } = e,
    { visible: x = !0 } = e
  const O = {
    dashed: 'border-dashed border border-gray-300',
    solid: 'border-solid border',
    grey: 'border-gray-200',
    green: 'border-green-400',
    none: '!border-0',
  }
  let T = f === 'fieldset' ? 'fieldset' : 'div'
  return (
    Xl('BLOCK_KEY'),
    (t.$$set = (g) => {
      'style' in g && n(10, (s = g.style)),
        'elem_id' in g && n(0, (d = g.elem_id)),
        'variant' in g && n(1, (l = g.variant)),
        'color' in g && n(2, (c = g.color)),
        'padding' in g && n(3, (p = g.padding)),
        'type' in g && n(11, (f = g.type)),
        'test_id' in g && n(4, (u = g.test_id)),
        'disable' in g && n(12, (h = g.disable)),
        'explicit_call' in g && n(13, (S = g.explicit_call)),
        'visible' in g && n(5, (x = g.visible)),
        '$$scope' in g && n(14, (i = g.$$scope))
    }),
    (t.$$.update = () => {
      t.$$.dirty & 13312 &&
        n(
          7,
          ({ classes: r } = S
            ? Hr(s, [])
            : h
            ? Hr({ container: !1 }, ['container'])
            : { classes: '' }),
          r,
        ),
        t.$$.dirty & 1024 &&
          n(
            6,
            (o =
              (typeof s.height == 'number' ? `height: ${s.height}px; ` : '') +
              (typeof s.width == 'number' ? `width: ${s.width}px;` : '')),
          )
    }),
    [d, l, c, p, u, x, o, r, O, T, s, f, h, S, i, a]
  )
}
class Zc extends Ot {
  constructor(e) {
    super(),
      Pt(this, e, Yc, Wc, kt, {
        style: 10,
        elem_id: 0,
        variant: 1,
        color: 2,
        padding: 3,
        type: 11,
        test_id: 4,
        disable: 12,
        explicit_call: 13,
        visible: 5,
      })
  }
}
function Jc(t) {
  let e, n
  const r = t[2].default,
    o = zn(r, t, t[1], null)
  return {
    c() {
      ;(e = A('span')),
        o && o.c(),
        _(
          e,
          'class',
          'text-gray-500 text-[0.855rem] mb-2 block dark:text-gray-200 relative z-40',
        ),
        q(e, 'sr-only', !t[0]),
        q(e, 'h-0', !t[0]),
        q(e, '!m-0', !t[0])
    },
    m(a, i) {
      v(a, e, i), o && o.m(e, null), (n = !0)
    },
    p(a, [i]) {
      o &&
        o.p &&
        (!n || i & 2) &&
        Fn(o, r, a, a[1], n ? jn(r, a[1], i, null) : Dn(a[1]), null),
        i & 1 && q(e, 'sr-only', !a[0]),
        i & 1 && q(e, 'h-0', !a[0]),
        i & 1 && q(e, '!m-0', !a[0])
    },
    i(a) {
      n || (z(o, a), (n = !0))
    },
    o(a) {
      V(o, a), (n = !1)
    },
    d(a) {
      a && y(e), o && o.d(a)
    },
  }
}
function Qc(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e,
    { show_label: a = !0 } = e
  return (
    (t.$$set = (i) => {
      'show_label' in i && n(0, (a = i.show_label)),
        '$$scope' in i && n(1, (o = i.$$scope))
    }),
    [a, o, r]
  )
}
class Kc extends Ot {
  constructor(e) {
    super(), Pt(this, e, Qc, Jc, kt, { show_label: 0 })
  }
}
function $c(t, { delay: e = 0, duration: n = 400, easing: r = tn } = {}) {
  const o = +getComputedStyle(t).opacity
  return { delay: e, duration: n, easing: r, css: (a) => `opacity: ${a * o}` }
}
function tp(
  t,
  {
    delay: e = 0,
    duration: n = 400,
    easing: r = wc,
    x: o = 0,
    y: a = 0,
    opacity: i = 0,
  } = {},
) {
  const s = getComputedStyle(t),
    d = +s.opacity,
    l = s.transform === 'none' ? '' : s.transform,
    c = d * (1 - i)
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, f) => `
			transform: ${l} translate(${(1 - p) * o}px, ${(1 - p) * a}px);
			opacity: ${d - c * f}`,
  }
}
function t0(t) {
  let e
  return {
    c() {
      e = P(t[3])
    },
    m(n, r) {
      v(n, e, r)
    },
    p(n, r) {
      r & 8 && Y(e, n[3])
    },
    d(n) {
      n && y(e)
    },
  }
}
function e0(t) {
  let e, n, r, o
  return {
    c() {
      ;(e = A('textarea')),
        _(e, 'data-testid', 'textbox'),
        _(e, 'class', 'scroll-hide block gr-box gr-input w-full gr-text-input'),
        _(e, 'placeholder', t[2]),
        _(e, 'rows', t[1]),
        (e.disabled = t[4])
    },
    m(a, i) {
      v(a, e, i),
        St(e, t[0]),
        t[19](e),
        r ||
          ((o = [
            Ll((n = t[11].call(null, e, t[0]))),
            K(e, 'input', t[18]),
            K(e, 'keypress', t[10]),
            K(e, 'blur', t[9]),
          ]),
          (r = !0))
    },
    p(a, i) {
      i & 4 && _(e, 'placeholder', a[2]),
        i & 2 && _(e, 'rows', a[1]),
        i & 16 && (e.disabled = a[4]),
        n && Qt(n.update) && i & 1 && n.update.call(null, a[0]),
        i & 1 && St(e, a[0])
    },
    d(a) {
      a && y(e), t[19](null), (r = !1), _t(o)
    },
  }
}
function n0(t) {
  let e
  function n(a, i) {
    if (a[7] === 'text') return a0
    if (a[7] === 'password') return o0
    if (a[7] === 'email') return r0
  }
  let r = n(t),
    o = r && r(t)
  return {
    c() {
      o && o.c(), (e = ot())
    },
    m(a, i) {
      o && o.m(a, i), v(a, e, i)
    },
    p(a, i) {
      r === (r = n(a)) && o
        ? o.p(a, i)
        : (o && o.d(1), (o = r && r(a)), o && (o.c(), o.m(e.parentNode, e)))
    },
    d(a) {
      o && o.d(a), a && y(e)
    },
  }
}
function r0(t) {
  let e, n, r
  return {
    c() {
      ;(e = A('input')),
        _(e, 'data-testid', 'textbox'),
        _(e, 'type', 'email'),
        _(e, 'class', 'scroll-hide block gr-box gr-input w-full gr-text-input'),
        _(e, 'placeholder', t[2]),
        (e.disabled = t[4]),
        _(e, 'autocomplete', 'email')
    },
    m(o, a) {
      v(o, e, a),
        St(e, t[0]),
        t[17](e),
        n ||
          ((r = [
            K(e, 'input', t[16]),
            K(e, 'keypress', t[10]),
            K(e, 'blur', t[9]),
          ]),
          (n = !0))
    },
    p(o, a) {
      a & 4 && _(e, 'placeholder', o[2]),
        a & 16 && (e.disabled = o[4]),
        a & 1 && e.value !== o[0] && St(e, o[0])
    },
    d(o) {
      o && y(e), t[17](null), (n = !1), _t(r)
    },
  }
}
function o0(t) {
  let e, n, r
  return {
    c() {
      ;(e = A('input')),
        _(e, 'data-testid', 'password'),
        _(e, 'type', 'password'),
        _(e, 'class', 'scroll-hide block gr-box gr-input w-full gr-text-input'),
        _(e, 'placeholder', t[2]),
        (e.disabled = t[4]),
        _(e, 'autocomplete', '')
    },
    m(o, a) {
      v(o, e, a),
        St(e, t[0]),
        t[15](e),
        n ||
          ((r = [
            K(e, 'input', t[14]),
            K(e, 'keypress', t[10]),
            K(e, 'blur', t[9]),
          ]),
          (n = !0))
    },
    p(o, a) {
      a & 4 && _(e, 'placeholder', o[2]),
        a & 16 && (e.disabled = o[4]),
        a & 1 && e.value !== o[0] && St(e, o[0])
    },
    d(o) {
      o && y(e), t[15](null), (n = !1), _t(r)
    },
  }
}
function a0(t) {
  let e, n, r
  return {
    c() {
      ;(e = A('input')),
        _(e, 'data-testid', 'textbox'),
        _(e, 'type', 'text'),
        _(e, 'class', 'scroll-hide block gr-box gr-input w-full gr-text-input'),
        _(e, 'placeholder', t[2]),
        (e.disabled = t[4])
    },
    m(o, a) {
      v(o, e, a),
        St(e, t[0]),
        t[13](e),
        n ||
          ((r = [
            K(e, 'input', t[12]),
            K(e, 'keypress', t[10]),
            K(e, 'blur', t[9]),
          ]),
          (n = !0))
    },
    p(o, a) {
      a & 4 && _(e, 'placeholder', o[2]),
        a & 16 && (e.disabled = o[4]),
        a & 1 && e.value !== o[0] && St(e, o[0])
    },
    d(o) {
      o && y(e), t[13](null), (n = !1), _t(r)
    },
  }
}
function i0(t) {
  let e, n, r, o
  n = new Kc({
    props: {
      show_label: t[5],
      $$slots: { default: [t0] },
      $$scope: { ctx: t },
    },
  })
  function a(d, l) {
    return d[1] === 1 && d[6] === 1 ? n0 : e0
  }
  let i = a(t),
    s = i(t)
  return {
    c() {
      ;(e = A('label')),
        ht(n.$$.fragment),
        (r = R()),
        s.c(),
        _(e, 'class', 'block w-full')
    },
    m(d, l) {
      v(d, e, l), pt(n, e, null), b(e, r), s.m(e, null), (o = !0)
    },
    p(d, [l]) {
      const c = {}
      l & 32 && (c.show_label = d[5]),
        l & 8388616 && (c.$$scope = { dirty: l, ctx: d }),
        n.$set(c),
        i === (i = a(d)) && s
          ? s.p(d, l)
          : (s.d(1), (s = i(d)), s && (s.c(), s.m(e, null)))
    },
    i(d) {
      o || (z(n.$$.fragment, d), (o = !0))
    },
    o(d) {
      V(n.$$.fragment, d), (o = !1)
    },
    d(d) {
      d && y(e), gt(n), s.d()
    },
  }
}
function l0(t, e, n) {
  let { value: r = '' } = e,
    { lines: o = 1 } = e,
    { placeholder: a = 'Type here...' } = e,
    { label: i } = e,
    { disabled: s = !1 } = e,
    { show_label: d = !0 } = e,
    { max_lines: l } = e,
    { type: c = 'text' } = e,
    p
  const f = Vn()
  function u(L) {
    f('change', L)
  }
  function h(L) {
    f('blur')
  }
  async function S(L) {
    await Ee(),
      ((L.key === 'Enter' && L.shiftKey && o > 1) ||
        (L.key === 'Enter' && !L.shiftKey && o === 1 && l >= 1)) &&
        (L.preventDefault(), f('submit'))
  }
  async function x(L) {
    if ((await Ee(), o === l)) return
    let rt = l === !1 ? !1 : l === void 0 ? 21 * 11 : 21 * (l + 1),
      X = 21 * (o + 1)
    const F = L.target
    F.style.height = '1px'
    let U
    rt && F.scrollHeight > rt
      ? (U = rt)
      : F.scrollHeight < X
      ? (U = X)
      : (U = F.scrollHeight),
      (F.style.height = `${U}px`)
  }
  function O(L, rt) {
    if (
      o !== l &&
      ((L.style.overflowY = 'scroll'),
      L.addEventListener('input', x),
      !!rt.trim())
    )
      return (
        x({ target: L }), { destroy: () => L.removeEventListener('input', x) }
      )
  }
  function T() {
    ;(r = this.value), n(0, r)
  }
  function g(L) {
    wt[L ? 'unshift' : 'push'](() => {
      ;(p = L), n(8, p)
    })
  }
  function m() {
    ;(r = this.value), n(0, r)
  }
  function C(L) {
    wt[L ? 'unshift' : 'push'](() => {
      ;(p = L), n(8, p)
    })
  }
  function w() {
    ;(r = this.value), n(0, r)
  }
  function E(L) {
    wt[L ? 'unshift' : 'push'](() => {
      ;(p = L), n(8, p)
    })
  }
  function k() {
    ;(r = this.value), n(0, r)
  }
  function Z(L) {
    wt[L ? 'unshift' : 'push'](() => {
      ;(p = L), n(8, p)
    })
  }
  return (
    (t.$$set = (L) => {
      'value' in L && n(0, (r = L.value)),
        'lines' in L && n(1, (o = L.lines)),
        'placeholder' in L && n(2, (a = L.placeholder)),
        'label' in L && n(3, (i = L.label)),
        'disabled' in L && n(4, (s = L.disabled)),
        'show_label' in L && n(5, (d = L.show_label)),
        'max_lines' in L && n(6, (l = L.max_lines)),
        'type' in L && n(7, (c = L.type))
    }),
    (t.$$.update = () => {
      t.$$.dirty & 323 && p && o !== l && x({ target: p }),
        t.$$.dirty & 1 && u(r)
    }),
    [r, o, a, i, s, d, l, c, p, h, S, O, T, g, m, C, w, E, k, Z]
  )
}
class s0 extends Ot {
  constructor(e) {
    super(),
      Pt(this, e, l0, i0, kt, {
        value: 0,
        lines: 1,
        placeholder: 2,
        label: 3,
        disabled: 4,
        show_label: 5,
        max_lines: 6,
        type: 7,
      })
  }
}
const ae = (t) => {
  let e = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z'],
    n = 0
  for (; t > 1e3 && n < e.length - 1; ) (t /= 1e3), n++
  let r = e[n]
  return (Number.isInteger(t) ? t : t.toFixed(1)) + r
}
function Wr(t, e, n) {
  const r = t.slice()
  return (r[32] = e[n]), (r[34] = n), r
}
function Yr(t, e, n) {
  const r = t.slice()
  return (r[32] = e[n]), r
}
function d0(t) {
  let e,
    n,
    r,
    o = t[13] && Zr(t)
  return {
    c() {
      ;(e = A('span')),
        (e.textContent = 'Error'),
        (n = R()),
        o && o.c(),
        (r = ot()),
        _(e, 'class', 'error svelte-5usjvi')
    },
    m(a, i) {
      v(a, e, i), v(a, n, i), o && o.m(a, i), v(a, r, i)
    },
    p(a, i) {
      a[13]
        ? o
          ? (o.p(a, i), i[0] & 8192 && z(o, 1))
          : ((o = Zr(a)), o.c(), z(o, 1), o.m(r.parentNode, r))
        : o && (o.d(1), (o = null))
    },
    i(a) {
      z(o)
    },
    o: J,
    d(a) {
      a && y(e), a && y(n), o && o.d(a), a && y(r)
    },
  }
}
function c0(t) {
  let e,
    n,
    r,
    o,
    a,
    i,
    s,
    d,
    l,
    c = t[8] === 'default' && t[15] && Jr(t)
  function p(g, m) {
    if (g[7]) return u0
    if (g[1] !== null && g[2] !== void 0 && g[1] >= 0) return g0
    if (g[1] === 0) return p0
  }
  let f = p(t),
    u = f && f(t),
    h = t[4] && $r(t)
  const S = [w0, b0],
    x = []
  function O(g, m) {
    return g[11] != null ? 0 : 1
  }
  ;(a = O(t)), (i = x[a] = S[a](t))
  let T = !t[4] && io()
  return {
    c() {
      c && c.c(),
        (e = R()),
        (n = A('div')),
        u && u.c(),
        (r = R()),
        h && h.c(),
        (o = R()),
        i.c(),
        (s = R()),
        T && T.c(),
        (d = ot()),
        _(n, 'class', 'dark:text-gray-400 svelte-5usjvi'),
        q(n, 'meta-text-center', t[8] === 'center'),
        q(n, 'meta-text', t[8] === 'default')
    },
    m(g, m) {
      c && c.m(g, m),
        v(g, e, m),
        v(g, n, m),
        u && u.m(n, null),
        b(n, r),
        h && h.m(n, null),
        v(g, o, m),
        x[a].m(g, m),
        v(g, s, m),
        T && T.m(g, m),
        v(g, d, m),
        (l = !0)
    },
    p(g, m) {
      g[8] === 'default' && g[15]
        ? c
          ? c.p(g, m)
          : ((c = Jr(g)), c.c(), c.m(e.parentNode, e))
        : c && (c.d(1), (c = null)),
        f === (f = p(g)) && u
          ? u.p(g, m)
          : (u && u.d(1), (u = f && f(g)), u && (u.c(), u.m(n, r))),
        g[4]
          ? h
            ? h.p(g, m)
            : ((h = $r(g)), h.c(), h.m(n, null))
          : h && (h.d(1), (h = null)),
        m[0] & 256 && q(n, 'meta-text-center', g[8] === 'center'),
        m[0] & 256 && q(n, 'meta-text', g[8] === 'default')
      let C = a
      ;(a = O(g)),
        a === C
          ? x[a].p(g, m)
          : (Ct(),
            V(x[C], 1, 1, () => {
              x[C] = null
            }),
            It(),
            (i = x[a]),
            i ? i.p(g, m) : ((i = x[a] = S[a](g)), i.c()),
            z(i, 1),
            i.m(s.parentNode, s)),
        g[4]
          ? T && (T.d(1), (T = null))
          : T || ((T = io()), T.c(), T.m(d.parentNode, d))
    },
    i(g) {
      l || (z(i), (l = !0))
    },
    o(g) {
      V(i), (l = !1)
    },
    d(g) {
      c && c.d(g),
        g && y(e),
        g && y(n),
        u && u.d(),
        h && h.d(),
        g && y(o),
        x[a].d(g),
        g && y(s),
        T && T.d(g),
        g && y(d)
    },
  }
}
function Zr(t) {
  let e,
    n,
    r,
    o,
    a,
    i,
    s,
    d,
    l,
    c = (t[6] || '') + '',
    p,
    f,
    u,
    h
  return {
    c() {
      ;(e = A('div')),
        (n = A('div')),
        (r = R()),
        (o = A('div')),
        (a = A('div')),
        (i = P(`Error
						`)),
        (s = A('button')),
        (s.textContent = '\xD7'),
        (d = R()),
        (l = A('div')),
        (p = P(c)),
        _(
          n,
          'class',
          'absolute left-0 md:left-auto border-black right-0 top-0 h-96 md:w-1/2 bg-gradient-to-b md:bg-gradient-to-bl from-red-500/5 via-transparent to-transparent',
        ),
        _(s, 'class', 'ml-auto text-gray-900 text-2xl pr-1'),
        _(
          a,
          'class',
          'flex items-center bg-gradient-to-r from-red-500/10 to-red-200/10 px-3 py-1 text-lg font-bold text-red-500',
        ),
        _(l, 'class', 'px-3 py-3 text-base font-mono'),
        _(
          o,
          'class',
          'absolute bg-white top-7 left-4 right-4 md:right-8 md:left-auto rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-2xl shadow-red-500/10 md:w-96 pointer-events-auto',
        ),
        _(e, 'class', 'fixed inset-0 z-[100]')
    },
    m(S, x) {
      v(S, e, x),
        b(e, n),
        b(e, r),
        b(e, o),
        b(o, a),
        b(a, i),
        b(a, s),
        b(o, d),
        b(o, l),
        b(l, p),
        u || ((h = [K(s, 'click', t[18]), K(o, 'click', Ml(t[25]))]), (u = !0))
    },
    p(S, x) {
      x[0] & 64 && c !== (c = (S[6] || '') + '') && Y(p, c)
    },
    i(S) {
      f ||
        Jt(() => {
          ;(f = Bl(o, $c, { duration: 100 })), f.start()
        })
    },
    o: J,
    d(S) {
      S && y(e), (u = !1), _t(h)
    },
  }
}
function Jr(t) {
  let e,
    n = `scaleX(${t[14] || 0})`
  return {
    c() {
      ;(e = A('div')),
        _(e, 'class', 'eta-bar svelte-5usjvi'),
        Ft(e, 'transform', n, !1)
    },
    m(r, o) {
      v(r, e, o)
    },
    p(r, o) {
      o[0] & 16384 &&
        n !== (n = `scaleX(${r[14] || 0})`) &&
        Ft(e, 'transform', n, !1)
    },
    d(r) {
      r && y(e)
    },
  }
}
function p0(t) {
  let e
  return {
    c() {
      e = P('processing |')
    },
    m(n, r) {
      v(n, e, r)
    },
    p: J,
    d(n) {
      n && y(e)
    },
  }
}
function g0(t) {
  let e,
    n = t[1] + 1 + '',
    r,
    o,
    a,
    i
  return {
    c() {
      ;(e = P('queue: ')),
        (r = P(n)),
        (o = P('/')),
        (a = P(t[2])),
        (i = P(' |'))
    },
    m(s, d) {
      v(s, e, d), v(s, r, d), v(s, o, d), v(s, a, d), v(s, i, d)
    },
    p(s, d) {
      d[0] & 2 && n !== (n = s[1] + 1 + '') && Y(r, n), d[0] & 4 && Y(a, s[2])
    },
    d(s) {
      s && y(e), s && y(r), s && y(o), s && y(a), s && y(i)
    },
  }
}
function u0(t) {
  let e,
    n = t[7],
    r = []
  for (let o = 0; o < n.length; o += 1) r[o] = Kr(Yr(t, n, o))
  return {
    c() {
      for (let o = 0; o < r.length; o += 1) r[o].c()
      e = ot()
    },
    m(o, a) {
      for (let i = 0; i < r.length; i += 1) r[i].m(o, a)
      v(o, e, a)
    },
    p(o, a) {
      if (a[0] & 128) {
        n = o[7]
        let i
        for (i = 0; i < n.length; i += 1) {
          const s = Yr(o, n, i)
          r[i]
            ? r[i].p(s, a)
            : ((r[i] = Kr(s)), r[i].c(), r[i].m(e.parentNode, e))
        }
        for (; i < r.length; i += 1) r[i].d(1)
        r.length = n.length
      }
    },
    d(o) {
      qt(r, o), o && y(e)
    },
  }
}
function Qr(t) {
  let e,
    n = t[32].unit + '',
    r,
    o,
    a = ' ',
    i
  function s(c, p) {
    return c[32].length != null ? m0 : f0
  }
  let d = s(t),
    l = d(t)
  return {
    c() {
      l.c(), (e = R()), (r = P(n)), (o = P(' | ')), (i = P(a))
    },
    m(c, p) {
      l.m(c, p), v(c, e, p), v(c, r, p), v(c, o, p), v(c, i, p)
    },
    p(c, p) {
      d === (d = s(c)) && l
        ? l.p(c, p)
        : (l.d(1), (l = d(c)), l && (l.c(), l.m(e.parentNode, e))),
        p[0] & 128 && n !== (n = c[32].unit + '') && Y(r, n)
    },
    d(c) {
      l.d(c), c && y(e), c && y(r), c && y(o), c && y(i)
    },
  }
}
function f0(t) {
  let e = ae(t[32].index || 0) + '',
    n
  return {
    c() {
      n = P(e)
    },
    m(r, o) {
      v(r, n, o)
    },
    p(r, o) {
      o[0] & 128 && e !== (e = ae(r[32].index || 0) + '') && Y(n, e)
    },
    d(r) {
      r && y(n)
    },
  }
}
function m0(t) {
  let e = ae(t[32].index || 0) + '',
    n,
    r,
    o = ae(t[32].length) + '',
    a
  return {
    c() {
      ;(n = P(e)), (r = P('/')), (a = P(o))
    },
    m(i, s) {
      v(i, n, s), v(i, r, s), v(i, a, s)
    },
    p(i, s) {
      s[0] & 128 && e !== (e = ae(i[32].index || 0) + '') && Y(n, e),
        s[0] & 128 && o !== (o = ae(i[32].length) + '') && Y(a, o)
    },
    d(i) {
      i && y(n), i && y(r), i && y(a)
    },
  }
}
function Kr(t) {
  let e,
    n = t[32].index != null && Qr(t)
  return {
    c() {
      n && n.c(), (e = ot())
    },
    m(r, o) {
      n && n.m(r, o), v(r, e, o)
    },
    p(r, o) {
      r[32].index != null
        ? n
          ? n.p(r, o)
          : ((n = Qr(r)), n.c(), n.m(e.parentNode, e))
        : n && (n.d(1), (n = null))
    },
    d(r) {
      n && n.d(r), r && y(e)
    },
  }
}
function $r(t) {
  let e,
    n = t[0] ? `/${t[16]}` : '',
    r,
    o
  return {
    c() {
      ;(e = P(t[17])), (r = P(n)), (o = P('s'))
    },
    m(a, i) {
      v(a, e, i), v(a, r, i), v(a, o, i)
    },
    p(a, i) {
      i[0] & 131072 && Y(e, a[17]),
        i[0] & 65537 && n !== (n = a[0] ? `/${a[16]}` : '') && Y(r, n)
    },
    d(a) {
      a && y(e), a && y(r), a && y(o)
    },
  }
}
function b0(t) {
  let e, n
  return (
    (e = new hl({ props: { margin: t[8] === 'default' } })),
    {
      c() {
        ht(e.$$.fragment)
      },
      m(r, o) {
        pt(e, r, o), (n = !0)
      },
      p(r, o) {
        const a = {}
        o[0] & 256 && (a.margin = r[8] === 'default'), e.$set(a)
      },
      i(r) {
        n || (z(e.$$.fragment, r), (n = !0))
      },
      o(r) {
        V(e.$$.fragment, r), (n = !1)
      },
      d(r) {
        gt(e, r)
      },
    }
  )
}
function w0(t) {
  let e,
    n,
    r,
    o,
    a,
    i = `scaleX(${t[11]})`,
    s = t[7] != null && to(t)
  return {
    c() {
      ;(e = A('div')),
        (n = A('div')),
        s && s.c(),
        (r = R()),
        (o = A('div')),
        (a = A('div')),
        _(n, 'class', 'm-2 mx-auto font-mono text-xs dark:text-gray-100'),
        _(a, 'class', 'progress-bar svelte-5usjvi'),
        Ft(a, 'transform', i, !1),
        _(o, 'class', 'w-2/3 h-4 rounded bg-white border'),
        _(e, 'class', 'z-20 w-full flex items-center flex-col gap-1')
    },
    m(d, l) {
      v(d, e, l),
        b(e, n),
        s && s.m(n, null),
        b(e, r),
        b(e, o),
        b(o, a),
        t[26](a)
    },
    p(d, l) {
      d[7] != null
        ? s
          ? s.p(d, l)
          : ((s = to(d)), s.c(), s.m(n, null))
        : s && (s.d(1), (s = null)),
        l[0] & 2048 &&
          i !== (i = `scaleX(${d[11]})`) &&
          Ft(a, 'transform', i, !1)
    },
    i: J,
    o: J,
    d(d) {
      d && y(e), s && s.d(), t[26](null)
    },
  }
}
function to(t) {
  let e,
    n = t[7],
    r = []
  for (let o = 0; o < n.length; o += 1) r[o] = ao(Wr(t, n, o))
  return {
    c() {
      for (let o = 0; o < r.length; o += 1) r[o].c()
      e = ot()
    },
    m(o, a) {
      for (let i = 0; i < r.length; i += 1) r[i].m(o, a)
      v(o, e, a)
    },
    p(o, a) {
      if (a[0] & 1152) {
        n = o[7]
        let i
        for (i = 0; i < n.length; i += 1) {
          const s = Wr(o, n, i)
          r[i]
            ? r[i].p(s, a)
            : ((r[i] = ao(s)), r[i].c(), r[i].m(e.parentNode, e))
        }
        for (; i < r.length; i += 1) r[i].d(1)
        r.length = n.length
      }
    },
    d(o) {
      qt(r, o), o && y(e)
    },
  }
}
function eo(t) {
  let e,
    n,
    r,
    o,
    a = t[34] !== 0 && h0(),
    i = t[32].desc != null && no(t),
    s = t[32].desc != null && t[10] && t[10][t[34]] != null && ro(),
    d = t[10] != null && oo(t)
  return {
    c() {
      a && a.c(),
        (e = R()),
        i && i.c(),
        (n = R()),
        s && s.c(),
        (r = R()),
        d && d.c(),
        (o = ot())
    },
    m(l, c) {
      a && a.m(l, c),
        v(l, e, c),
        i && i.m(l, c),
        v(l, n, c),
        s && s.m(l, c),
        v(l, r, c),
        d && d.m(l, c),
        v(l, o, c)
    },
    p(l, c) {
      l[32].desc != null
        ? i
          ? i.p(l, c)
          : ((i = no(l)), i.c(), i.m(n.parentNode, n))
        : i && (i.d(1), (i = null)),
        l[32].desc != null && l[10] && l[10][l[34]] != null
          ? s || ((s = ro()), s.c(), s.m(r.parentNode, r))
          : s && (s.d(1), (s = null)),
        l[10] != null
          ? d
            ? d.p(l, c)
            : ((d = oo(l)), d.c(), d.m(o.parentNode, o))
          : d && (d.d(1), (d = null))
    },
    d(l) {
      a && a.d(l),
        l && y(e),
        i && i.d(l),
        l && y(n),
        s && s.d(l),
        l && y(r),
        d && d.d(l),
        l && y(o)
    },
  }
}
function h0(t) {
  let e
  return {
    c() {
      e = P('\xA0/')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function no(t) {
  let e = t[32].desc + '',
    n
  return {
    c() {
      n = P(e)
    },
    m(r, o) {
      v(r, n, o)
    },
    p(r, o) {
      o[0] & 128 && e !== (e = r[32].desc + '') && Y(n, e)
    },
    d(r) {
      r && y(n)
    },
  }
}
function ro(t) {
  let e
  return {
    c() {
      e = P('-')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function oo(t) {
  let e = (100 * (t[10][t[34]] || 0)).toFixed(1) + '',
    n,
    r
  return {
    c() {
      ;(n = P(e)), (r = P('%'))
    },
    m(o, a) {
      v(o, n, a), v(o, r, a)
    },
    p(o, a) {
      a[0] & 1024 &&
        e !== (e = (100 * (o[10][o[34]] || 0)).toFixed(1) + '') &&
        Y(n, e)
    },
    d(o) {
      o && y(n), o && y(r)
    },
  }
}
function ao(t) {
  let e,
    n = (t[32].desc != null || (t[10] && t[10][t[34]] != null)) && eo(t)
  return {
    c() {
      n && n.c(), (e = ot())
    },
    m(r, o) {
      n && n.m(r, o), v(r, e, o)
    },
    p(r, o) {
      r[32].desc != null || (r[10] && r[10][r[34]] != null)
        ? n
          ? n.p(r, o)
          : ((n = eo(r)), n.c(), n.m(e.parentNode, e))
        : n && (n.d(1), (n = null))
    },
    d(r) {
      n && n.d(r), r && y(e)
    },
  }
}
function io(t) {
  let e
  return {
    c() {
      ;(e = A('p')),
        (e.textContent = 'Loading...'),
        _(e, 'class', 'timer svelte-5usjvi')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function _0(t) {
  let e, n, r, o
  const a = [c0, d0],
    i = []
  function s(d, l) {
    return d[3] === 'pending' ? 0 : d[3] === 'error' ? 1 : -1
  }
  return (
    ~(n = s(t)) && (r = i[n] = a[n](t)),
    {
      c() {
        ;(e = A('div')),
          r && r.c(),
          _(e, 'class', 'wrap svelte-5usjvi'),
          q(e, 'inset-0', t[8] === 'default'),
          q(e, 'inset-x-0', t[8] === 'center'),
          q(e, 'top-0', t[8] === 'center'),
          q(e, 'opacity-0', !t[3] || t[3] === 'complete'),
          q(
            e,
            'cover-bg',
            t[8] === 'default' && (t[3] === 'pending' || t[3] === 'error'),
          ),
          q(e, 'generating', t[3] === 'generating'),
          q(e, '!hidden', !t[5])
      },
      m(d, l) {
        v(d, e, l), ~n && i[n].m(e, null), t[27](e), (o = !0)
      },
      p(d, l) {
        let c = n
        ;(n = s(d)),
          n === c
            ? ~n && i[n].p(d, l)
            : (r &&
                (Ct(),
                V(i[c], 1, 1, () => {
                  i[c] = null
                }),
                It()),
              ~n
                ? ((r = i[n]),
                  r ? r.p(d, l) : ((r = i[n] = a[n](d)), r.c()),
                  z(r, 1),
                  r.m(e, null))
                : (r = null)),
          l[0] & 256 && q(e, 'inset-0', d[8] === 'default'),
          l[0] & 256 && q(e, 'inset-x-0', d[8] === 'center'),
          l[0] & 256 && q(e, 'top-0', d[8] === 'center'),
          l[0] & 8 && q(e, 'opacity-0', !d[3] || d[3] === 'complete'),
          l[0] & 264 &&
            q(
              e,
              'cover-bg',
              d[8] === 'default' && (d[3] === 'pending' || d[3] === 'error'),
            ),
          l[0] & 8 && q(e, 'generating', d[3] === 'generating'),
          l[0] & 32 && q(e, '!hidden', !d[5])
      },
      i(d) {
        o || (z(r), (o = !0))
      },
      o(d) {
        V(r), (o = !1)
      },
      d(d) {
        d && y(e), ~n && i[n].d(), t[27](null)
      },
    }
  )
}
let Ge = [],
  yn = !1
async function y0(t, e = !0) {
  if (
    !(
      window.__gradio_mode__ === 'website' ||
      (window.__gradio_mode__ !== 'app' && e !== !0)
    )
  ) {
    if ((Ge.push(t), !yn)) yn = !0
    else return
    await Ee(),
      requestAnimationFrame(() => {
        let n = [0, 0]
        for (let r = 0; r < Ge.length; r++) {
          const a = Ge[r].getBoundingClientRect()
          ;(r === 0 || a.top + window.scrollY <= n[0]) &&
            ((n[0] = a.top + window.scrollY), (n[1] = r))
        }
        window.scrollTo({ top: n[0] - 20, behavior: 'smooth' }),
          (yn = !1),
          (Ge = [])
      })
  }
}
function v0(t, e, n) {
  let r, o
  We(t, qo, (N) => n(24, (o = N)))
  let { eta: a = null } = e,
    { queue: i = !1 } = e,
    { queue_position: s } = e,
    { queue_size: d } = e,
    { status: l } = e,
    { scroll_to_output: c = !1 } = e,
    { timer: p = !0 } = e,
    { visible: f = !0 } = e,
    { message: u = null } = e,
    { progress: h = null } = e,
    { variant: S = 'default' } = e,
    x,
    O = !1,
    T = 0,
    g = 0,
    m = null,
    C = !1,
    w = 0,
    E = null,
    k,
    Z = null,
    L = !0
  const rt = () => {
    n(21, (T = performance.now())), n(22, (g = 0)), (O = !0), X()
  }
  function X() {
    requestAnimationFrame(() => {
      n(22, (g = (performance.now() - T) / 1e3)), O && X()
    })
  }
  const F = () => {
    n(22, (g = 0)), O && (O = !1)
  }
  Gl(() => {
    O && F()
  })
  let U = null
  const Dt = () => {
    n(13, (C = !1))
  }
  function Mt(N) {
    le.call(this, t, N)
  }
  function yt(N) {
    wt[N ? 'unshift' : 'push'](() => {
      ;(Z = N), n(12, Z)
    })
  }
  function At(N) {
    wt[N ? 'unshift' : 'push'](() => {
      ;(x = N), n(9, x)
    })
  }
  return (
    (t.$$set = (N) => {
      'eta' in N && n(0, (a = N.eta)),
        'queue' in N && n(19, (i = N.queue)),
        'queue_position' in N && n(1, (s = N.queue_position)),
        'queue_size' in N && n(2, (d = N.queue_size)),
        'status' in N && n(3, (l = N.status)),
        'scroll_to_output' in N && n(20, (c = N.scroll_to_output)),
        'timer' in N && n(4, (p = N.timer)),
        'visible' in N && n(5, (f = N.visible)),
        'message' in N && n(6, (u = N.message)),
        'progress' in N && n(7, (h = N.progress)),
        'variant' in N && n(8, (S = N.variant))
    }),
    (t.$$.update = () => {
      t.$$.dirty[0] & 11010049 &&
        (a === null
          ? n(0, (a = m))
          : i && n(0, (a = (performance.now() - T) / 1e3 + a)),
        a != null && (n(16, (U = a.toFixed(1))), n(23, (m = a)))),
        t.$$.dirty[0] & 4194305 &&
          n(14, (w = a === null || a <= 0 || !g ? null : Math.min(g / a, 1))),
        t.$$.dirty[0] & 128 && h != null && n(15, (L = !1)),
        t.$$.dirty[0] & 7296 &&
          (h != null
            ? n(
                10,
                (E = h.map((N) =>
                  N.index != null && N.length != null
                    ? N.index / N.length
                    : N.progress != null
                    ? N.progress
                    : void 0,
                )),
              )
            : n(10, (E = null)),
          E
            ? (n(11, (k = E[E.length - 1])),
              Z &&
                (k === 0
                  ? Z.classList.remove('transition-transform')
                  : Z.classList.add('transition-transform')))
            : n(11, (k = void 0))),
        t.$$.dirty[0] & 8 && (l === 'pending' ? rt() : F()),
        t.$$.dirty[0] & 17826312 &&
          x &&
          c &&
          (l === 'pending' || l === 'complete') &&
          y0(x, o.autoscroll),
        t.$$.dirty[0] & 72 && (Dt(), l === 'error' && u && n(13, (C = !0))),
        t.$$.dirty[0] & 4194304 && n(17, (r = g.toFixed(1)))
    }),
    [
      a,
      s,
      d,
      l,
      p,
      f,
      u,
      h,
      S,
      x,
      E,
      k,
      Z,
      C,
      w,
      L,
      U,
      r,
      Dt,
      i,
      c,
      T,
      g,
      m,
      o,
      Mt,
      yt,
      At,
    ]
  )
}
class Jn extends Ot {
  constructor(e) {
    super(),
      Pt(
        this,
        e,
        v0,
        _0,
        kt,
        {
          eta: 0,
          queue: 19,
          queue_position: 1,
          queue_size: 2,
          status: 3,
          scroll_to_output: 20,
          timer: 4,
          visible: 5,
          message: 6,
          progress: 7,
          variant: 8,
        },
        null,
        [-1, -1],
      )
  }
}
function lo(t) {
  let e, n
  const r = [t[10]]
  let o = {}
  for (let a = 0; a < r.length; a += 1) o = en(o, r[a])
  return (
    (e = new Jn({ props: o })),
    {
      c() {
        ht(e.$$.fragment)
      },
      m(a, i) {
        pt(e, a, i), (n = !0)
      },
      p(a, i) {
        const s = i & 1024 ? Bn(r, [vo(a[10])]) : {}
        e.$set(s)
      },
      i(a) {
        n || (z(e.$$.fragment, a), (n = !0))
      },
      o(a) {
        V(e.$$.fragment, a), (n = !1)
      },
      d(a) {
        gt(e, a)
      },
    }
  )
}
function x0(t) {
  let e,
    n,
    r,
    o,
    a = t[10] && lo(t)
  function i(d) {
    t[12](d)
  }
  let s = {
    label: t[1],
    show_label: t[6],
    lines: t[4],
    type: t[8],
    max_lines: !t[7] && t[11] === 'static' ? t[4] + 1 : t[7],
    placeholder: t[5],
    disabled: t[11] === 'static',
  }
  return (
    t[0] !== void 0 && (s.value = t[0]),
    (n = new s0({ props: s })),
    wt.push(() => Se(n, 'value', i)),
    n.$on('change', t[13]),
    n.$on('submit', t[14]),
    n.$on('blur', t[15]),
    {
      c() {
        a && a.c(), (e = R()), ht(n.$$.fragment)
      },
      m(d, l) {
        a && a.m(d, l), v(d, e, l), pt(n, d, l), (o = !0)
      },
      p(d, l) {
        d[10]
          ? a
            ? (a.p(d, l), l & 1024 && z(a, 1))
            : ((a = lo(d)), a.c(), z(a, 1), a.m(e.parentNode, e))
          : a &&
            (Ct(),
            V(a, 1, 1, () => {
              a = null
            }),
            It())
        const c = {}
        l & 2 && (c.label = d[1]),
          l & 64 && (c.show_label = d[6]),
          l & 16 && (c.lines = d[4]),
          l & 256 && (c.type = d[8]),
          l & 2192 &&
            (c.max_lines = !d[7] && d[11] === 'static' ? d[4] + 1 : d[7]),
          l & 32 && (c.placeholder = d[5]),
          l & 2048 && (c.disabled = d[11] === 'static'),
          !r && l & 1 && ((r = !0), (c.value = d[0]), Ke(() => (r = !1))),
          n.$set(c)
      },
      i(d) {
        o || (z(a), z(n.$$.fragment, d), (o = !0))
      },
      o(d) {
        V(a), V(n.$$.fragment, d), (o = !1)
      },
      d(d) {
        a && a.d(d), d && y(e), gt(n, d)
      },
    }
  )
}
function k0(t) {
  let e, n
  return (
    (e = new Zc({
      props: {
        visible: t[3],
        elem_id: t[2],
        disable: typeof t[9].container == 'boolean' && !t[9].container,
        $$slots: { default: [x0] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        ht(e.$$.fragment)
      },
      m(r, o) {
        pt(e, r, o), (n = !0)
      },
      p(r, [o]) {
        const a = {}
        o & 8 && (a.visible = r[3]),
          o & 4 && (a.elem_id = r[2]),
          o & 512 &&
            (a.disable = typeof r[9].container == 'boolean' && !r[9].container),
          o & 69107 && (a.$$scope = { dirty: o, ctx: r }),
          e.$set(a)
      },
      i(r) {
        n || (z(e.$$.fragment, r), (n = !0))
      },
      o(r) {
        V(e.$$.fragment, r), (n = !1)
      },
      d(r) {
        gt(e, r)
      },
    }
  )
}
function E0(t, e, n) {
  let { label: r = 'Textbox' } = e,
    { elem_id: o = '' } = e,
    { visible: a = !0 } = e,
    { value: i = '' } = e,
    { lines: s } = e,
    { placeholder: d = '' } = e,
    { show_label: l } = e,
    { max_lines: c } = e,
    { type: p = 'text' } = e,
    { style: f = {} } = e,
    { loading_status: u = void 0 } = e,
    { mode: h } = e
  function S(g) {
    ;(i = g), n(0, i)
  }
  function x(g) {
    le.call(this, t, g)
  }
  function O(g) {
    le.call(this, t, g)
  }
  function T(g) {
    le.call(this, t, g)
  }
  return (
    (t.$$set = (g) => {
      'label' in g && n(1, (r = g.label)),
        'elem_id' in g && n(2, (o = g.elem_id)),
        'visible' in g && n(3, (a = g.visible)),
        'value' in g && n(0, (i = g.value)),
        'lines' in g && n(4, (s = g.lines)),
        'placeholder' in g && n(5, (d = g.placeholder)),
        'show_label' in g && n(6, (l = g.show_label)),
        'max_lines' in g && n(7, (c = g.max_lines)),
        'type' in g && n(8, (p = g.type)),
        'style' in g && n(9, (f = g.style)),
        'loading_status' in g && n(10, (u = g.loading_status)),
        'mode' in g && n(11, (h = g.mode))
    }),
    [i, r, o, a, s, d, l, c, p, f, u, h, S, x, O, T]
  )
}
class so extends Ot {
  constructor(e) {
    super(),
      Pt(this, e, E0, k0, kt, {
        label: 1,
        elem_id: 2,
        visible: 3,
        value: 0,
        lines: 4,
        placeholder: 5,
        show_label: 6,
        max_lines: 7,
        type: 8,
        style: 9,
        loading_status: 10,
        mode: 11,
      })
  }
  get label() {
    return this.$$.ctx[1]
  }
  set label(e) {
    this.$$set({ label: e }), bt()
  }
  get elem_id() {
    return this.$$.ctx[2]
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), bt()
  }
  get visible() {
    return this.$$.ctx[3]
  }
  set visible(e) {
    this.$$set({ visible: e }), bt()
  }
  get value() {
    return this.$$.ctx[0]
  }
  set value(e) {
    this.$$set({ value: e }), bt()
  }
  get lines() {
    return this.$$.ctx[4]
  }
  set lines(e) {
    this.$$set({ lines: e }), bt()
  }
  get placeholder() {
    return this.$$.ctx[5]
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), bt()
  }
  get show_label() {
    return this.$$.ctx[6]
  }
  set show_label(e) {
    this.$$set({ show_label: e }), bt()
  }
  get max_lines() {
    return this.$$.ctx[7]
  }
  set max_lines(e) {
    this.$$set({ max_lines: e }), bt()
  }
  get type() {
    return this.$$.ctx[8]
  }
  set type(e) {
    this.$$set({ type: e }), bt()
  }
  get style() {
    return this.$$.ctx[9]
  }
  set style(e) {
    this.$$set({ style: e }), bt()
  }
  get loading_status() {
    return this.$$.ctx[10]
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), bt()
  }
  get mode() {
    return this.$$.ctx[11]
  }
  set mode(e) {
    this.$$set({ mode: e }), bt()
  }
}
function co(t) {
  let e, n
  return {
    c() {
      ;(e = A('p')), (n = P(t[0])), _(e, 'class', 'my-4')
    },
    m(r, o) {
      v(r, e, o), b(e, n)
    },
    p(r, o) {
      o & 1 && Y(n, r[0])
    },
    d(r) {
      r && y(e)
    },
  }
}
function po(t) {
  let e
  return {
    c() {
      ;(e = A('p')),
        (e.textContent = 'Incorrect Credentials'),
        _(e, 'class', 'my-4 text-red-600 font-semibold')
    },
    m(n, r) {
      v(n, e, r)
    },
    d(n) {
      n && y(e)
    },
  }
}
function S0(t) {
  let e, n, r, o, a, i
  function s(p) {
    t[8](p)
  }
  let d = {
    label: 'username',
    lines: 1,
    show_label: !0,
    max_lines: 1,
    mode: 'dynamic',
  }
  t[2] !== void 0 && (d.value = t[2]),
    (e = new so({ props: d })),
    wt.push(() => Se(e, 'value', s)),
    e.$on('submit', t[5])
  function l(p) {
    t[9](p)
  }
  let c = {
    label: 'password',
    lines: 1,
    show_label: !0,
    max_lines: 1,
    mode: 'dynamic',
    type: 'password',
  }
  return (
    t[3] !== void 0 && (c.value = t[3]),
    (o = new so({ props: c })),
    wt.push(() => Se(o, 'value', l)),
    o.$on('submit', t[5]),
    {
      c() {
        ht(e.$$.fragment), (r = R()), ht(o.$$.fragment)
      },
      m(p, f) {
        pt(e, p, f), v(p, r, f), pt(o, p, f), (i = !0)
      },
      p(p, f) {
        const u = {}
        !n && f & 4 && ((n = !0), (u.value = p[2]), Ke(() => (n = !1))),
          e.$set(u)
        const h = {}
        !a && f & 8 && ((a = !0), (h.value = p[3]), Ke(() => (a = !1))),
          o.$set(h)
      },
      i(p) {
        i || (z(e.$$.fragment, p), z(o.$$.fragment, p), (i = !0))
      },
      o(p) {
        V(e.$$.fragment, p), V(o.$$.fragment, p), (i = !1)
      },
      d(p) {
        gt(e, p), p && y(r), gt(o, p)
      },
    }
  )
}
function A0(t) {
  let e,
    n,
    r,
    o,
    a,
    i,
    s,
    d,
    l,
    c,
    p,
    f,
    u = t[0] && co(t),
    h = t[4] && po()
  return (
    (s = new Fc({
      props: { $$slots: { default: [S0] }, $$scope: { ctx: t } },
    })),
    {
      c() {
        ;(e = A('div')),
          (n = A('div')),
          (r = A('h2')),
          (r.textContent = 'Login'),
          (o = R()),
          u && u.c(),
          (a = R()),
          h && h.c(),
          (i = R()),
          ht(s.$$.fragment),
          (d = R()),
          (l = A('button')),
          (l.textContent = 'Login'),
          _(r, 'class', 'text-2xl font-semibold mb-6'),
          _(l, 'class', 'gr-button gr-button-lg gr-button-primary w-full mt-4'),
          _(n, 'class', 'gr-panel !p-8'),
          _(
            e,
            'class',
            'dark:bg-gray-950 w-full flex flex-col items-center justify-center',
          ),
          q(e, 'min-h-screen', t[1])
      },
      m(S, x) {
        v(S, e, x),
          b(e, n),
          b(n, r),
          b(n, o),
          u && u.m(n, null),
          b(n, a),
          h && h.m(n, null),
          b(n, i),
          pt(s, n, null),
          b(n, d),
          b(n, l),
          (c = !0),
          p || ((f = K(l, 'click', t[5])), (p = !0))
      },
      p(S, [x]) {
        S[0]
          ? u
            ? u.p(S, x)
            : ((u = co(S)), u.c(), u.m(n, a))
          : u && (u.d(1), (u = null)),
          S[4] ? h || ((h = po()), h.c(), h.m(n, i)) : h && (h.d(1), (h = null))
        const O = {}
        x & 1036 && (O.$$scope = { dirty: x, ctx: S }),
          s.$set(O),
          x & 2 && q(e, 'min-h-screen', S[1])
      },
      i(S) {
        c || (z(s.$$.fragment, S), (c = !0))
      },
      o(S) {
        V(s.$$.fragment, S), (c = !1)
      },
      d(S) {
        S && y(e), u && u.d(), h && h.d(), gt(s), (p = !1), f()
      },
    }
  )
}
function T0(t, e, n) {
  let { root: r } = e,
    { id: o } = e,
    { auth_message: a } = e,
    { app_mode: i } = e
  window.__gradio_loader__[o].$set({ status: 'complete' })
  let s = '',
    d = '',
    l = !1
  const c = async () => {
    const u = new FormData()
    u.append('username', s),
      u.append('password', d),
      (await fetch(r + 'login', { method: 'POST', body: u })).status === 400
        ? (n(4, (l = !0)), n(2, (s = '')), n(3, (d = '')))
        : location.reload()
  }
  function p(u) {
    ;(s = u), n(2, s)
  }
  function f(u) {
    ;(d = u), n(3, d)
  }
  return (
    (t.$$set = (u) => {
      'root' in u && n(6, (r = u.root)),
        'id' in u && n(7, (o = u.id)),
        'auth_message' in u && n(0, (a = u.auth_message)),
        'app_mode' in u && n(1, (i = u.app_mode))
    }),
    [a, i, s, d, l, c, r, o, p, f]
  )
}
class C0 extends Ot {
  constructor(e) {
    super(),
      Pt(this, e, T0, A0, kt, { root: 6, id: 7, auth_message: 0, app_mode: 1 })
  }
}
let I0 = -1
window.__gradio_loader__ = []
const P0 =
    'https://gradio.s3-us-west-2.amazonaws.com/3.16.2/assets/index.bdc96d69.css',
  O0 = [
    'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap',
    'https://fonts.googleapis.com/css?family=IBM Plex Mono',
  ]
let vn = null,
  Nn = window.__gradio_mode__ === 'app'
async function kl(t) {
  const e = await (await fetch(t + 'app_id')).text()
  vn === null ? (vn = e) : vn != e && location.reload(),
    setTimeout(() => kl(t), 250)
}
async function L0(t) {
  let e = await (await fetch(t + 'config')).json()
  return (e.root = t), e
}
async function N0(t) {
  return location.origin === 'http://localhost:3000'
    ? await (await fetch('config')).json()
    : t
    ? (t.endsWith('/') || (t += '/'), await L0(t))
    : window.gradio_config
}
function R0(t, e) {
  if (e) {
    let n = document.createElement('style')
    ;(n.innerHTML = e), t.appendChild(n)
  }
}
function El(t, e) {
  const n = document.createElement('link')
  return (
    (n.rel = 'stylesheet'),
    (n.href = t),
    e.appendChild(n),
    new Promise((r, o) => {
      n.addEventListener('load', () => r()),
        n.addEventListener('error', () =>
          o(new Error(`Unable to preload CSS for ${t}`)),
        )
    })
  )
}
async function Sl(t, e) {
  let n
  try {
    let [r] = await Promise.all([N0(e), El(P0, t)])
    n = r
  } catch (r) {
    return console.error(r), null
  }
  return (
    R0(t, n.css),
    (window.__is_colab__ = n.is_colab),
    n.root === void 0 && (n.root = ''),
    n.dev_mode && kl(n.root),
    (n.target = t),
    n
  )
}
function Al(t, e, n, r, o, a = !1) {
  if (t.detail === 'Not authenticated' || t.auth_required)
    new C0({
      target: n,
      props: {
        auth_message: t.auth_message,
        root: t.root,
        id: r,
        app_mode: Nn,
      },
    })
  else {
    let i = Math.random().toString(36).substring(2)
    ;(t.fn = bc(i, t.root + 'run/', t.is_space, a)),
      new Mc({
        target: n,
        props: { ...t, target: n, id: r, autoscroll: o, app_mode: Nn },
      })
  }
  e && e.append(n)
}
function M0() {
  O0.map((e) => El(e, document.head))
  class t extends HTMLElement {
    constructor() {
      super(),
        (this._id = ++I0),
        (this.root = this.attachShadow({ mode: 'open' })),
        (window.scoped_css_attach = (n) => {
          this.root.append(n)
        }),
        (this.wrapper = document.createElement('div')),
        this.wrapper.classList.add('gradio-container'),
        (this.wrapper.style.position = 'relative'),
        (this.wrapper.style.width = '100%'),
        (this.wrapper.style.minHeight = '100vh'),
        (this.theme = 'light'),
        (window.__gradio_loader__[this._id] = new Jn({
          target: this.wrapper,
          props: {
            status: 'pending',
            timer: !1,
            queue_position: null,
            queue_size: null,
          },
        })),
        this.root.append(this.wrapper),
        window.__gradio_mode__ !== 'website' && (this.theme = Tl(this.wrapper))
    }
    async connectedCallback() {
      const n = new CustomEvent('domchange', {
        bubbles: !0,
        cancelable: !1,
        composed: !0,
      })
      var r = new MutationObserver((f) => {
        this.dispatchEvent(n)
      })
      r.observe(this.root, { childList: !0 })
      const o = this.getAttribute('host'),
        a = this.getAttribute('space'),
        i = o
          ? `https://${o}`
          : a
          ? (
              await (
                await fetch(`https://huggingface.co/api/spaces/${a}/host`)
              ).json()
            ).host
          : this.getAttribute('src'),
        s = this.getAttribute('control_page_title'),
        d = this.getAttribute('initial_height'),
        c = this.getAttribute('autoscroll') === 'true'
      this.wrapper.style.minHeight = d || '300px'
      const p = await Sl(this.root, i)
      p === null
        ? this.wrapper.remove()
        : Al(
            {
              ...p,
              theme: this.theme,
              control_page_title: !!(s && s === 'true'),
            },
            this.root,
            this.wrapper,
            this._id,
            c,
            !!a,
          )
    }
  }
  customElements.define('gradio-app', t)
}
async function z0() {
  const t = document.querySelector('#root')
  t.classList.add('gradio-container'),
    window.__gradio_mode__ !== 'website' && Tl(t),
    (window.__gradio_loader__[0] = new Jn({
      target: t,
      props: {
        status: 'pending',
        timer: !1,
        queue_position: null,
        queue_size: null,
      },
    }))
  const e = await Sl(t, null)
  Al({ ...e, control_page_title: !0 }, !1, t, 0)
}
function Tl(t) {
  let e = new URL(window.location.toString()),
    n = 'light'
  const r = e.searchParams.get('__theme')
  return (
    r !== null
      ? r === 'dark'
        ? (n = Rn(t))
        : r === 'system' && (n = go(t))
      : e.searchParams.get('__dark-theme') === 'true'
      ? (n = Rn(t))
      : (n = go(t)),
    n
  )
}
function go(t) {
  const e = n()
  window
    ?.matchMedia('(prefers-color-scheme: dark)')
    ?.addEventListener('change', n)
  function n() {
    let r = 'light'
    return (
      (window?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? null) &&
        (r = Rn(t)),
      r
    )
  }
  return e
}
function Rn(t) {
  return (
    t.classList.add('dark'),
    Nn && (document.body.style.backgroundColor = 'rgb(11, 15, 25)'),
    'dark'
  )
}
window.location !== window.parent.location
  ? ((window.scoped_css_attach = (t) => {
      document.head.append(t)
    }),
    z0())
  : M0()
export {
  Vl as $,
  _t as A,
  ot as B,
  qt as C,
  Ct as D,
  It as E,
  Vn as F,
  wr as G,
  Mn as H,
  wt as I,
  Gl as J,
  le as K,
  Ke as L,
  Zt as M,
  Ll as N,
  Se as O,
  Zc as P,
  We as Q,
  en as R,
  Ot as S,
  Jn as T,
  Bn as U,
  vo as V,
  Ml as W,
  J0 as X,
  Ft as Y,
  Hr as Z,
  G as _,
  R as a,
  j0 as a0,
  $t as a1,
  Xl as a2,
  X0 as a3,
  q0 as a4,
  B0 as a5,
  K0 as a6,
  Kc as a7,
  St as a8,
  bt as a9,
  Ee as aa,
  Wl as ab,
  Hl as ac,
  Gn as ad,
  Jt as ae,
  W0 as af,
  tp as ag,
  G0 as ah,
  U0 as ai,
  Fc as aj,
  V0 as ak,
  Q0 as al,
  $c as am,
  D0 as an,
  Bl as ao,
  H0 as ap,
  Br as aq,
  Z0 as ar,
  so as as,
  Y0 as at,
  Un as au,
  _ as b,
  ht as c,
  q as d,
  A as e,
  v as f,
  b as g,
  Y as h,
  Pt as i,
  z as j,
  V as k,
  K as l,
  pt as m,
  y as n,
  gt as o,
  zn as p,
  Dn as q,
  jn as r,
  kt as s,
  P as t,
  Fn as u,
  $0 as v,
  Et as w,
  J as x,
  Qt as y,
  F0 as z,
}
