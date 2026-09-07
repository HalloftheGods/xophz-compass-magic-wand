var cu = {};
// @__NO_SIDE_EFFECTS__
function un(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = cu.NODE_ENV !== "production" ? Object.freeze({}) : {}, ur = cu.NODE_ENV !== "production" ? Object.freeze([]) : [], We = () => {
}, uu = () => !1, yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qr = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, il = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bh = Object.prototype.hasOwnProperty, fe = (e, t) => bh.call(e, t), Q = Array.isArray, sn = (e) => bi(e) === "[object Map]", ns = (e) => bi(e) === "[object Set]", oa = (e) => bi(e) === "[object Date]", ne = (e) => typeof e == "function", Ee = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", sl = (e) => (ue(e) || ne(e)) && ne(e.then) && ne(e.catch), fu = Object.prototype.toString, bi = (e) => fu.call(e), ol = (e) => bi(e).slice(8, -1), du = (e) => bi(e) === "[object Object]", Rs = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jr = /* @__PURE__ */ un(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wh = /* @__PURE__ */ un(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ms = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, kh = /-\w/g, Ue = Ms(
  (e) => e.replace(kh, (t) => t.slice(1).toUpperCase())
), xh = /\B([A-Z])/g, wn = Ms(
  (e) => e.replace(xh, "-$1").toLowerCase()
), ln = Ms((e) => e.charAt(0).toUpperCase() + e.slice(1)), $n = Ms(
  (e) => e ? `on${ln(e)}` : ""
), Bt = (e, t) => !Object.is(e, t), Nr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, rs = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, _h = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Eh = (e) => {
  const t = Ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let la;
const wi = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $e(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ee(r) ? Oh(r) : $e(r);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Ee(e) || ue(e))
    return e;
}
const Sh = /;(?![^(]*\))/g, Ch = /:([^]+)/, Nh = /\/\*[^]*?\*\//g;
function Oh(e) {
  const t = {};
  return e.replace(Nh, "").split(Sh).forEach((n) => {
    if (n) {
      const r = n.split(Ch);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ce(e) {
  let t = "";
  if (Ee(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const r = ce(e[n]);
      r && (t += r + " ");
    }
  else if (ue(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Co(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ee(t) && (e.class = ce(t)), n && (e.style = $e(n)), e;
}
const Th = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Dh = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", $h = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ah = /* @__PURE__ */ un(Th), Vh = /* @__PURE__ */ un(Dh), Ph = /* @__PURE__ */ un($h), Ih = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rh = /* @__PURE__ */ un(Ih);
function hu(e) {
  return !!e || e === "";
}
function Mh(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Ls(e[r], t[r]);
  return n;
}
function aa(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Ls(i, n[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    r[s] = 1;
  }
  return !0;
}
function Ls(e, t) {
  if (e === t) return !0;
  let n = oa(e), r = oa(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ut(e), r = ut(t), n || r)
    return e === t;
  if (n = Q(e), r = Q(t), n || r)
    return n && r ? Mh(e, t) : !1;
  if (n = ue(e), r = ue(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = sn(e), r = sn(t), n || r || (n = ns(e), r = ns(t), n || r))
      return n && r ? aa(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Ls(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const pu = (e) => !!(e && e.__v_isRef === !0), bn = (e) => Ee(e) ? e : e == null ? "" : Q(e) || ue(e) && (e.toString === fu || !ne(e.toString)) ? pu(e) ? bn(e.value) : JSON.stringify(e, gu, 2) : String(e), gu = (e, t) => pu(t) ? gu(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], s) => (n[eo(r, s) + " =>"] = i, n),
    {}
  )
} : ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => eo(n))
} : ut(t) ? eo(t) : ue(t) && !Q(t) && !du(t) ? String(t) : t, eo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var xe = {};
function pt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ze;
class mu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ze && (ze.active ? (this.parent = ze, this.index = (ze.scopes || (ze.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    } else xe.NODE_ENV !== "production" && this._warnOnRun && pt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ze, ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ze === this)
        ze = this.prevScope;
      else {
        let t = ze;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Jr(e) {
  return new mu(e);
}
function vu() {
  return ze;
}
function ot(e, t = !1) {
  ze ? ze.cleanups.push(e) : xe.NODE_ENV !== "production" && !t && pt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let be;
const to = /* @__PURE__ */ new WeakSet();
class yu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && (ze.active ? ze.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, to.has(this) && (to.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ca(this), ku(this);
    const t = be, n = Ct;
    be = this, Ct = !0;
    try {
      return this.fn();
    } finally {
      xe.NODE_ENV !== "production" && be !== this && pt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), xu(this), be = t, Ct = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cl(t);
      this.deps = this.depsTail = void 0, ca(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? to.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    No(this) && this.run();
  }
  get dirty() {
    return No(this);
  }
}
let bu = 0, Wr, Ur;
function wu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ur, Ur = e;
    return;
  }
  e.next = Wr, Wr = e;
}
function ll() {
  bu++;
}
function al() {
  if (--bu > 0)
    return;
  if (Ur) {
    let t = Ur;
    for (Ur = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Wr; ) {
    let t = Wr;
    for (Wr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ku(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xu(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), cl(r), Lh(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function No(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (_u(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function _u(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ei) || (e.globalVersion = ei, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !No(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, r = Ct;
  be = e, Ct = !0;
  try {
    ku(e);
    const i = e.fn(e._value);
    (t.version === 0 || Bt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    be = n, Ct = r, xu(e), e.flags &= -3;
  }
}
function cl(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), xe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      cl(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Lh(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ct = !0;
const Eu = [];
function Nt() {
  Eu.push(Ct), Ct = !1;
}
function Ot() {
  const e = Eu.pop();
  Ct = e === void 0 ? !0 : e;
}
function ca(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = be;
    be = void 0;
    try {
      t();
    } finally {
      be = n;
    }
  }
}
let ei = 0;
class Fh {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ul {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, xe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!be || !Ct || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new Fh(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, Su(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = r);
    }
    return xe.NODE_ENV !== "production" && be.onTrack && be.onTrack(
      Ae(
        {
          effect: be
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ei++, this.notify(t);
  }
  notify(t) {
    ll();
    try {
      if (xe.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Ae(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      al();
    }
  }
}
function Su(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Su(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), xe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const is = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ Symbol(
  xe.NODE_ENV !== "production" ? "Object iterate" : ""
), Oo = /* @__PURE__ */ Symbol(
  xe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ti = /* @__PURE__ */ Symbol(
  xe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function je(e, t, n) {
  if (Ct && be) {
    let r = is.get(e);
    r || is.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new ul()), i.map = r, i.key = n), xe.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ht(e, t, n, r, i, s) {
  const o = is.get(e);
  if (!o) {
    ei++;
    return;
  }
  const l = (a) => {
    a && (xe.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: i,
      oldTarget: s
    }) : a.trigger());
  };
  if (ll(), t === "clear")
    o.forEach(l);
  else {
    const a = Q(e), u = a && Rs(n);
    if (a && n === "length") {
      const c = Number(r);
      o.forEach((f, d) => {
        (d === "length" || d === ti || !ut(d) && d >= c) && l(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(ti)), t) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Rn)), sn(e) && l(o.get(Oo)));
          break;
        case "delete":
          a || (l(o.get(Rn)), sn(e) && l(o.get(Oo)));
          break;
        case "set":
          sn(e) && l(o.get(Rn));
          break;
      }
  }
  al();
}
function Bh(e, t) {
  const n = is.get(e);
  return n && n.get(t);
}
function rr(e) {
  const t = /* @__PURE__ */ se(e);
  return t === e ? t : (je(t, "iterate", ti), /* @__PURE__ */ it(e) ? t : t.map(an));
}
function fl(e) {
  return je(e = /* @__PURE__ */ se(e), "iterate", ti), e;
}
function Ft(e, t) {
  return /* @__PURE__ */ Gt(e) ? ri(/* @__PURE__ */ Mn(e) ? an(t) : t) : an(t);
}
const Hh = {
  __proto__: null,
  [Symbol.iterator]() {
    return no(this, Symbol.iterator, (e) => Ft(this, e));
  },
  concat(...e) {
    return rr(this).concat(
      ...e.map((t) => Q(t) ? rr(t) : t)
    );
  },
  entries() {
    return no(this, "entries", (e) => (e[1] = Ft(this, e[1]), e));
  },
  every(e, t) {
    return Zt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Zt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Ft(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Zt(
      this,
      "find",
      e,
      t,
      (n) => Ft(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Zt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Zt(
      this,
      "findLast",
      e,
      t,
      (n) => Ft(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Zt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Zt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ro(this, "includes", e);
  },
  indexOf(...e) {
    return ro(this, "indexOf", e);
  },
  join(e) {
    return rr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ro(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Zt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Or(this, "pop");
  },
  push(...e) {
    return Or(this, "push", e);
  },
  reduce(e, ...t) {
    return ua(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ua(this, "reduceRight", e, t);
  },
  shift() {
    return Or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Zt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Or(this, "splice", e);
  },
  toReversed() {
    return rr(this).toReversed();
  },
  toSorted(e) {
    return rr(this).toSorted(e);
  },
  toSpliced(...e) {
    return rr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Or(this, "unshift", e);
  },
  values() {
    return no(this, "values", (e) => Ft(this, e));
  }
};
function no(e, t, n) {
  const r = fl(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ it(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const zh = Array.prototype;
function Zt(e, t, n, r, i, s) {
  const o = fl(e), l = o !== e && !/* @__PURE__ */ it(e), a = o[t];
  if (a !== zh[t]) {
    const f = a.apply(e, s);
    return l ? an(f) : f;
  }
  let u = n;
  o !== e && (l ? u = function(f, d) {
    return n.call(this, Ft(e, f), d, e);
  } : n.length > 2 && (u = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const c = a.call(o, u, r);
  return l && i ? i(c) : c;
}
function ua(e, t, n, r) {
  const i = fl(e), s = i !== e && !/* @__PURE__ */ it(e);
  let o = n, l = !1;
  i !== e && (s ? (l = r.length === 0, o = function(u, c, f) {
    return l && (l = !1, u = Ft(e, u)), n.call(this, u, Ft(e, c), f, e);
  }) : n.length > 3 && (o = function(u, c, f) {
    return n.call(this, u, c, f, e);
  }));
  const a = i[t](o, ...r);
  return l ? Ft(e, a) : a;
}
function ro(e, t, n) {
  const r = /* @__PURE__ */ se(e);
  je(r, "iterate", ti);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ pr(n[0]) ? (n[0] = /* @__PURE__ */ se(n[0]), r[t](...n)) : i;
}
function Or(e, t, n = []) {
  Nt(), ll();
  const r = (/* @__PURE__ */ se(e))[t].apply(e, n);
  return al(), Ot(), r;
}
const jh = /* @__PURE__ */ un("__proto__,__v_isRef,__isVue"), Cu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function Wh(e) {
  ut(e) || (e = String(e));
  const t = /* @__PURE__ */ se(this);
  return je(t, "has", e), t.hasOwnProperty(e);
}
class Nu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? Vu : Au : s ? $u : Du).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Q(t);
    if (!i) {
      let a;
      if (o && (a = Hh[n]))
        return a;
      if (n === "hasOwnProperty")
        return Wh;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ De(t) ? t : r
    );
    if ((ut(n) ? Cu.has(n) : jh(n)) || (i || je(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ De(l)) {
      const a = o && Rs(n) ? l : l.value;
      return i && ue(a) ? /* @__PURE__ */ ni(a) : a;
    }
    return ue(l) ? i ? /* @__PURE__ */ ni(l) : /* @__PURE__ */ yt(l) : l;
  }
}
class Ou extends Nu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = Q(t) && Rs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ Gt(s);
      if (!/* @__PURE__ */ it(r) && !/* @__PURE__ */ Gt(r) && (s = /* @__PURE__ */ se(s), r = /* @__PURE__ */ se(r)), !o && /* @__PURE__ */ De(s) && !/* @__PURE__ */ De(r))
        return u ? (xe.NODE_ENV !== "production" && pt(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (s.value = r, !0);
    }
    const l = o ? Number(n) < t.length : fe(t, n), a = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ De(t) ? t : i
    );
    return t === /* @__PURE__ */ se(i) && a && (l ? Bt(r, s) && Ht(t, "set", n, r, s) : Ht(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = fe(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Ht(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ut(n) || !Cu.has(n)) && je(t, "has", n), r;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      Q(t) ? "length" : Rn
    ), Reflect.ownKeys(t);
  }
}
class Tu extends Nu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return xe.NODE_ENV !== "production" && pt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return xe.NODE_ENV !== "production" && pt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Uh = /* @__PURE__ */ new Ou(), Gh = /* @__PURE__ */ new Tu(), qh = /* @__PURE__ */ new Ou(!0), Kh = /* @__PURE__ */ new Tu(!0), To = (e) => e, Bi = (e) => Reflect.getPrototypeOf(e);
function Yh(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ se(i), o = sn(s), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = i[e](...r), c = n ? To : t ? ri : an;
    return !t && je(
      s,
      "iterate",
      a ? Oo : Rn
    ), Ae(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: f, done: d } = u.next();
          return d ? { value: f, done: d } : {
            value: l ? [c(f[0]), c(f[1])] : c(f),
            done: d
          };
        }
      }
    );
  };
}
function Hi(e) {
  return function(...t) {
    if (xe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      pt(
        `${ln(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ se(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xh(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ se(s), l = /* @__PURE__ */ se(i);
      e || (Bt(i, l) && je(o, "get", i), je(o, "get", l));
      const { has: a } = Bi(o), u = t ? To : e ? ri : an;
      if (a.call(o, i))
        return u(s.get(i));
      if (a.call(o, l))
        return u(s.get(l));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && je(/* @__PURE__ */ se(i), "iterate", Rn), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ se(s), l = /* @__PURE__ */ se(i);
      return e || (Bt(i, l) && je(o, "has", i), je(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ se(l), u = t ? To : e ? ri : an;
      return !e && je(a, "iterate", Rn), l.forEach((c, f) => i.call(s, u(c), u(f), o));
    }
  };
  return Ae(
    n,
    e ? {
      add: Hi("add"),
      set: Hi("set"),
      delete: Hi("delete"),
      clear: Hi("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ se(this), o = Bi(s), l = /* @__PURE__ */ se(i), a = !t && !/* @__PURE__ */ it(i) && !/* @__PURE__ */ Gt(i) ? l : i;
        return o.has.call(s, a) || Bt(i, a) && o.has.call(s, i) || Bt(l, a) && o.has.call(s, l) || (s.add(a), Ht(s, "add", a, a)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ it(s) && !/* @__PURE__ */ Gt(s) && (s = /* @__PURE__ */ se(s));
        const o = /* @__PURE__ */ se(this), { has: l, get: a } = Bi(o);
        let u = l.call(o, i);
        u ? xe.NODE_ENV !== "production" && fa(o, l, i) : (i = /* @__PURE__ */ se(i), u = l.call(o, i));
        const c = a.call(o, i);
        return o.set(i, s), u ? Bt(s, c) && Ht(o, "set", i, s, c) : Ht(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ se(this), { has: o, get: l } = Bi(s);
        let a = o.call(s, i);
        a ? xe.NODE_ENV !== "production" && fa(s, o, i) : (i = /* @__PURE__ */ se(i), a = o.call(s, i));
        const u = l ? l.call(s, i) : void 0, c = s.delete(i);
        return a && Ht(s, "delete", i, void 0, u), c;
      },
      clear() {
        const i = /* @__PURE__ */ se(this), s = i.size !== 0, o = xe.NODE_ENV !== "production" ? sn(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return s && Ht(
          i,
          "clear",
          void 0,
          void 0,
          o
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Yh(i, e, t);
  }), n;
}
function Fs(e, t) {
  const n = Xh(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    fe(n, i) && i in r ? n : r,
    i,
    s
  );
}
const Zh = {
  get: /* @__PURE__ */ Fs(!1, !1)
}, Qh = {
  get: /* @__PURE__ */ Fs(!1, !0)
}, Jh = {
  get: /* @__PURE__ */ Fs(!0, !1)
}, ep = {
  get: /* @__PURE__ */ Fs(!0, !0)
};
function fa(e, t, n) {
  const r = /* @__PURE__ */ se(n);
  if (r !== n && t.call(e, r)) {
    const i = ol(e);
    pt(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Du = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), Vu = /* @__PURE__ */ new WeakMap();
function tp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return /* @__PURE__ */ Gt(e) ? e : Bs(
    e,
    !1,
    Uh,
    Zh,
    Du
  );
}
// @__NO_SIDE_EFFECTS__
function np(e) {
  return Bs(
    e,
    !1,
    qh,
    Qh,
    $u
  );
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  return Bs(
    e,
    !0,
    Gh,
    Jh,
    Au
  );
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return Bs(
    e,
    !0,
    Kh,
    ep,
    Vu
  );
}
function Bs(e, t, n, r, i) {
  if (!ue(e))
    return xe.NODE_ENV !== "production" && pt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = tp(ol(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return /* @__PURE__ */ Gt(e) ? /* @__PURE__ */ Mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ se(t) : e;
}
function rp(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && rs(e, "__v_skip", !0), e;
}
const an = (e) => ue(e) ? /* @__PURE__ */ yt(e) : e, ri = (e) => ue(e) ? /* @__PURE__ */ ni(e) : e;
// @__NO_SIDE_EFFECTS__
function De(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return Pu(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return Pu(e, !0);
}
function Pu(e, t) {
  return /* @__PURE__ */ De(e) ? e : new ip(e, t);
}
class ip {
  constructor(t, n) {
    this.dep = new ul(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ se(t), this._value = n ? t : an(t), this.__v_isShallow = n;
  }
  get value() {
    return xe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ it(t) || /* @__PURE__ */ Gt(t);
    t = r ? t : /* @__PURE__ */ se(t), Bt(t, n) && (this._rawValue = t, this._value = r ? t : an(t), xe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function yn(e) {
  return /* @__PURE__ */ De(e) ? e.value : e;
}
function Tt(e) {
  return ne(e) ? e() : yn(e);
}
const sp = {
  get: (e, t, n) => t === "__v_raw" ? e : yn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ De(i) && !/* @__PURE__ */ De(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Iu(e) {
  return /* @__PURE__ */ Mn(e) ? e : new Proxy(e, sp);
}
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  xe.NODE_ENV !== "production" && !/* @__PURE__ */ pr(e) && pt("toRefs() expects a reactive object but received a plain one.");
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Mu(e, n);
  return t;
}
class op {
  constructor(t, n, r) {
    this._object = t, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._key = ut(n) ? n : String(n), this._raw = /* @__PURE__ */ se(t);
    let i = !0, s = t;
    if (!Q(t) || ut(this._key) || !Rs(this._key))
      do
        i = !/* @__PURE__ */ pr(s) || /* @__PURE__ */ it(s);
      while (i && (s = s.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = yn(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ De(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ De(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Bh(this._raw, this._key);
  }
}
class lp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function W(e, t, n) {
  return /* @__PURE__ */ De(e) ? e : ne(e) ? new lp(e) : ue(e) && arguments.length > 1 ? Mu(e, t, n) : /* @__PURE__ */ Ie(e);
}
function Mu(e, t, n) {
  return new op(e, t, n);
}
class ap {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ul(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ei - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return wu(this, !0), !0;
  }
  get value() {
    const t = xe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return _u(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : xe.NODE_ENV !== "production" && pt("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function cp(e, t, n = !1) {
  let r, i;
  return ne(e) ? r = e : (r = e.get, i = e.set), new ap(r, i, n);
}
const zi = {}, ss = /* @__PURE__ */ new WeakMap();
let An;
function up(e, t = !1, n = An) {
  if (n) {
    let r = ss.get(n);
    r || ss.set(n, r = []), r.push(e);
  } else xe.NODE_ENV !== "production" && !t && pt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function fp(e, t, n = we) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: a } = n, u = (E) => {
    (n.onWarn || pt)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (E) => i ? E : /* @__PURE__ */ it(E) || i === !1 || i === 0 ? nn(E, 1) : nn(E);
  let f, d, p, g, b = !1, S = !1;
  if (/* @__PURE__ */ De(e) ? (d = () => e.value, b = /* @__PURE__ */ it(e)) : /* @__PURE__ */ Mn(e) ? (d = () => c(e), b = !0) : Q(e) ? (S = !0, b = e.some((E) => /* @__PURE__ */ Mn(E) || /* @__PURE__ */ it(E)), d = () => e.map((E) => {
    if (/* @__PURE__ */ De(E))
      return E.value;
    if (/* @__PURE__ */ Mn(E))
      return c(E);
    if (ne(E))
      return a ? a(E, 2) : E();
    xe.NODE_ENV !== "production" && u(E);
  })) : ne(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (p) {
      Nt();
      try {
        p();
      } finally {
        Ot();
      }
    }
    const E = An;
    An = f;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      An = E;
    }
  } : (d = We, xe.NODE_ENV !== "production" && u(e)), t && i) {
    const E = d, L = i === !0 ? 1 / 0 : i;
    d = () => nn(E(), L);
  }
  const v = vu(), w = () => {
    f.stop(), v && v.active && il(v.effects, f);
  };
  if (s && t) {
    const E = t;
    t = (...L) => {
      const M = E(...L);
      return w(), M;
    };
  }
  let x = S ? new Array(e.length).fill(zi) : zi;
  const I = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (t) {
        const L = f.run();
        if (E || i || b || (S ? L.some((M, k) => Bt(M, x[k])) : Bt(L, x))) {
          p && p();
          const M = An;
          An = f;
          try {
            const k = [
              L,
              // pass undefined as the old value when it's changed for the first time
              x === zi ? void 0 : S && x[0] === zi ? [] : x,
              g
            ];
            x = L, a ? a(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            An = M;
          }
        }
      } else
        f.run();
  };
  return l && l(I), f = new yu(d), f.scheduler = o ? () => o(I, !1) : I, g = (E) => up(E, !1, f), p = f.onStop = () => {
    const E = ss.get(f);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const L of E) L();
      ss.delete(f);
    }
  }, xe.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? r ? I(!0) : x = f.run() : o ? o(I.bind(null, !0), !0) : f.run(), w.pause = f.pause.bind(f), w.resume = f.resume.bind(f), w.stop = w, w;
}
function nn(e, t = 1 / 0, n) {
  if (t <= 0 || !ue(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ De(e))
    nn(e.value, t, n);
  else if (Q(e))
    for (let r = 0; r < e.length; r++)
      nn(e[r], t, n);
  else if (ns(e) || sn(e))
    e.forEach((r) => {
      nn(r, t, n);
    });
  else if (du(e)) {
    for (const r in e)
      nn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && nn(e[r], t, n);
  }
  return e;
}
var y = {};
const Ln = [];
function Yi(e) {
  Ln.push(e);
}
function Xi() {
  Ln.pop();
}
let io = !1;
function $(e, ...t) {
  if (io) return;
  io = !0, Nt();
  const n = Ln.length ? Ln[Ln.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = dp();
  if (r)
    yr(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var o, l;
          return (l = (o = s.toString) == null ? void 0 : o.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${Si(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...hp(i)), console.warn(...s);
  }
  Ot(), io = !1;
}
function dp() {
  let e = Ln[Ln.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function hp(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...pp(n));
  }), t;
}
function pp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Si(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [i, ...gp(e.props), s] : [i + s];
}
function gp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Lu(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Lu(e, t, n) {
  return Ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ De(t) ? (t = Lu(e, /* @__PURE__ */ se(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ne(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ se(t), n ? t : [`${e}=`, t]);
}
function mp(e, t) {
  y.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? $(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && $(`${t} is NaN - the duration expression might be incorrect.`));
}
const dl = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    ki(i, t, n);
  }
}
function bt(e, t, n, r) {
  if (ne(e)) {
    const i = yr(e, t, n, r);
    return i && sl(i) && i.catch((s) => {
      ki(s, t, n);
    }), i;
  }
  if (Q(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(bt(e[s], t, n, r));
    return i;
  } else y.NODE_ENV !== "production" && $(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ki(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || we;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = y.NODE_ENV !== "production" ? dl[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Nt(), yr(s, null, 10, [
        e,
        a,
        u
      ]), Ot();
      return;
    }
  }
  vp(e, n, i, r, o);
}
function vp(e, t, n, r = !0, i = !1) {
  if (y.NODE_ENV !== "production") {
    const s = dl[t];
    if (n && Yi(n), $(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Xi(), r)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const et = [];
let Lt = -1;
const fr = [];
let vn = null, cr = 0;
const Fu = /* @__PURE__ */ Promise.resolve();
let os = null;
const yp = 100;
function fn(e) {
  const t = os || Fu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bp(e) {
  let t = Lt + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = et[r], s = ii(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Hs(e) {
  if (!(e.flags & 1)) {
    const t = ii(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ii(n) ? et.push(e) : et.splice(bp(t), 0, e), e.flags |= 1, Bu();
  }
}
function Bu() {
  os || (os = Fu.then(ju));
}
function Hu(e) {
  if (!Q(e))
    vn && e.id === -1 ? vn.splice(cr + 1, 0, e) : e.flags & 1 || (fr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      fr.push(e[t]);
  Bu();
}
function da(e, t, n = Lt + 1) {
  for (y.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || y.NODE_ENV !== "production" && hl(t, r))
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function zu(e) {
  if (fr.length) {
    const t = [...new Set(fr)].sort(
      (n, r) => ii(n) - ii(r)
    );
    if (fr.length = 0, vn) {
      for (let n = 0; n < t.length; n++)
        vn.push(t[n]);
      return;
    }
    for (vn = t, y.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), cr = 0; cr < vn.length; cr++) {
      const n = vn[cr];
      y.NODE_ENV !== "production" && hl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    vn = null, cr = 0;
  }
}
const ii = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ju(e) {
  y.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = y.NODE_ENV !== "production" ? (n) => hl(e, n) : We;
  try {
    for (Lt = 0; Lt < et.length; Lt++) {
      const n = et[Lt];
      if (n && !(n.flags & 8)) {
        if (y.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yr(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Lt < et.length; Lt++) {
      const n = et[Lt];
      n && (n.flags &= -2);
    }
    Lt = -1, et.length = 0, zu(e), os = null, (et.length || fr.length) && ju(e);
  }
}
function hl(e, t) {
  const n = e.get(t) || 0;
  if (n > yp) {
    const r = t.i, i = r && _l(r.type);
    return ki(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let tt = !1;
const ha = (e) => {
  try {
    return tt;
  } finally {
    tt = e;
  }
}, Zi = /* @__PURE__ */ new Map();
y.NODE_ENV !== "production" && (wi().__VUE_HMR_RUNTIME__ = {
  createRecord: so(Wu),
  rerender: so(xp),
  reload: so(_p)
});
const jn = /* @__PURE__ */ new Map();
function wp(e) {
  const t = e.type.__hmrId;
  let n = jn.get(t);
  n || (Wu(t, e.type), n = jn.get(t)), n.instances.add(e);
}
function kp(e) {
  jn.get(e.type.__hmrId).instances.delete(e);
}
function Wu(e, t) {
  return jn.has(e) ? !1 : (jn.set(e, {
    initialDef: ls(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ls(e) {
  return If(e) ? e.__vccOpts : e;
}
function xp(e, t) {
  const n = jn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, ls(r.type).render = t), r.renderCache = [], tt = !0, r.job.flags & 8 || r.update(), tt = !1;
  }));
}
function _p(e, t) {
  const n = jn.get(e);
  if (!n) return;
  t = ls(t), pa(n.initialDef, t);
  const r = [...n.instances];
  for (let i = 0; i < r.length; i++) {
    const s = r[i], o = ls(s.type);
    let l = Zi.get(o);
    l || (o !== n.initialDef && pa(o, t), Zi.set(o, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? Hs(() => {
      s.job.flags & 8 || (tt = !0, s.parent.update(), tt = !1, l.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(o);
  }
  Hu(() => {
    Zi.clear();
  });
}
function pa(e, t) {
  Ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function so(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let zt, Rr = [], Do = !1;
function xi(e, ...t) {
  zt ? zt.emit(e, ...t) : Do || Rr.push({ event: e, args: t });
}
function Uu(e, t) {
  var n, r;
  zt = e, zt ? (zt.enabled = !0, Rr.forEach(({ event: i, args: s }) => zt.emit(i, ...s)), Rr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Uu(s, t);
  }), setTimeout(() => {
    zt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Do = !0, Rr = []);
  }, 3e3)) : (Do = !0, Rr = []);
}
function Ep(e, t) {
  xi("app:init", e, t, {
    Fragment: Ve,
    Text: Zn,
    Comment: Re,
    Static: Qi
  });
}
function Sp(e) {
  xi("app:unmount", e);
}
const Cp = /* @__PURE__ */ pl(
  "component:added"
  /* COMPONENT_ADDED */
), Gu = /* @__PURE__ */ pl(
  "component:updated"
  /* COMPONENT_UPDATED */
), Np = /* @__PURE__ */ pl(
  "component:removed"
  /* COMPONENT_REMOVED */
), Op = (e) => {
  zt && typeof zt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !zt.cleanupBuffer(e) && Np(e);
};
// @__NO_SIDE_EFFECTS__
function pl(e) {
  return (t) => {
    xi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Tp = /* @__PURE__ */ qu(
  "perf:start"
  /* PERFORMANCE_START */
), Dp = /* @__PURE__ */ qu(
  "perf:end"
  /* PERFORMANCE_END */
);
function qu(e) {
  return (t, n, r) => {
    xi(e, t.appContext.app, t.uid, t, n, r);
  };
}
function $p(e, t, n) {
  xi(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Be = null, Ku = null;
function as(e) {
  const t = Be;
  return Be = e, Ku = e && e.type.__scopeId || null, t;
}
function Ce(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ps(-1);
    const s = as(t), o = on.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = on.length; a > o; a--) xl();
      as(s), r._d && ps(1);
    }
    return y.NODE_ENV !== "production" && Gu(t), l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Yu(e) {
  wh(e) && $("Do not use built-in directive ids as custom directive id: " + e);
}
function Wn(e, t) {
  if (Be === null)
    return y.NODE_ENV !== "production" && $("withDirectives can only be used inside render functions."), e;
  const n = Gs(Be), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, l, a = we] = t[i];
    s && (ne(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && nn(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Cn(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[r];
    a && (Nt(), bt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ot());
  }
}
function Yn(e, t) {
  if (y.NODE_ENV !== "production" && (!Fe || Fe.isMounted) && $("provide() can only be used inside setup()."), Fe) {
    let n = Fe.provides;
    const r = Fe.parent && Fe.parent.provides;
    r === n && (n = Fe.provides = Object.create(r)), n[e] = t;
  }
}
function st(e, t, n = !1) {
  const r = Qn();
  if (r || hr) {
    let i = hr ? hr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(r && r.proxy) : t;
    y.NODE_ENV !== "production" && $(`injection "${String(e)}" not found.`);
  } else y.NODE_ENV !== "production" && $("inject() can only be used inside setup() or functional components.");
}
const Ap = /* @__PURE__ */ Symbol.for("v-scx"), Vp = () => {
  {
    const e = st(Ap);
    return e || y.NODE_ENV !== "production" && $(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function qt(e, t) {
  return gl(e, null, t);
}
function ae(e, t, n) {
  return y.NODE_ENV !== "production" && !ne(t) && $(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gl(e, t, n);
}
function gl(e, t, n = we) {
  const { immediate: r, deep: i, flush: s, once: o } = n;
  y.NODE_ENV !== "production" && !t && (r !== void 0 && $(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && $(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && $(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Ae({}, n);
  y.NODE_ENV !== "production" && (l.onWarn = $);
  const a = t && r || !t && s !== "post";
  let u;
  if (ai) {
    if (s === "sync") {
      const p = Vp();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = We, p.resume = We, p.pause = We, p;
    }
  }
  const c = Fe;
  l.call = (p, g, b) => bt(p, c, g, b);
  let f = !1;
  s === "post" ? l.scheduler = (p) => {
    Je(p, c && c.suspense);
  } : s !== "sync" && (f = !0, l.scheduler = (p, g) => {
    g ? p() : Hs(p);
  }), l.augmentJob = (p) => {
    t && (p.flags |= 4), f && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
  };
  const d = fp(e, t, l);
  return ai && (u ? u.push(d) : a && d()), d;
}
function Pp(e, t, n) {
  const r = this.proxy, i = Ee(e) ? e.includes(".") ? Xu(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ne(t) ? s = t : (s = t.handler, n = t);
  const o = Ei(this), l = gl(i, s.bind(r), n);
  return o(), l;
}
function Xu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const gn = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ Symbol("_vte"), zs = (e) => e.__isTeleport, rn = (e) => e && (e.disabled || e.disabled === ""), Ip = (e) => e && (e.defer || e.defer === ""), ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ma = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, $o = (e, t) => {
  const n = e && e.to;
  if (Ee(n))
    if (t) {
      const r = t(n);
      return y.NODE_ENV !== "production" && !r && !rn(e) && $(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return y.NODE_ENV !== "production" && $(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return y.NODE_ENV !== "production" && !n && !rn(e) && $(`Invalid Teleport target: ${n}`), n;
}, Rp = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, i, s, o, l, a, u) {
    const {
      mc: c,
      pc: f,
      pbc: d,
      o: { insert: p, querySelector: g, createText: b, createComment: S, parentNode: v }
    } = u, w = rn(t.props);
    let { dynamicChildren: x } = t;
    y.NODE_ENV !== "production" && tt && (a = !1, x = null);
    const I = (M, k, A) => {
      M.shapeFlag & 16 && c(
        M.children,
        k,
        A,
        i,
        s,
        o,
        l,
        a
      );
    }, E = (M = t) => {
      const k = rn(M.props), A = M.target = $o(M.props, g), U = Ao(A, M, b, p);
      A ? (o !== "svg" && ga(A) ? o = "svg" : o !== "mathml" && ma(A) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(A), k || (I(M, A, U), Mr(M, !1))) : y.NODE_ENV !== "production" && !k && $("Invalid Teleport target on mount:", A, `(${typeof A})`);
    }, L = (M) => {
      const k = () => {
        if (gn.get(M) === k) {
          if (gn.delete(M), rn(M.props)) {
            const A = v(M.el) || n;
            I(M, A, M.anchor), Mr(M, !0);
          }
          E(M);
        }
      };
      gn.set(M, k), Je(k, s);
    };
    if (e == null) {
      const M = t.el = y.NODE_ENV !== "production" ? S("teleport start") : b(""), k = t.anchor = y.NODE_ENV !== "production" ? S("teleport end") : b("");
      if (p(M, n, r), p(k, n, r), Ip(t.props) || s && s.pendingBranch) {
        L(t);
        return;
      }
      w && (I(t, n, k), Mr(t, !0)), E();
    } else {
      t.el = e.el;
      const M = t.anchor = e.anchor, k = gn.get(e);
      if (k) {
        k.flags |= 8, gn.delete(e), L(t);
        return;
      }
      t.targetStart = e.targetStart;
      const A = t.target = e.target, U = t.targetAnchor = e.targetAnchor, X = rn(e.props), V = X ? n : A, F = X ? M : U;
      if (o === "svg" || ga(A) ? o = "svg" : (o === "mathml" || ma(A)) && (o = "mathml"), x ? (d(
        e.dynamicChildren,
        x,
        V,
        i,
        s,
        o,
        l
      ), qr(e, t, y.NODE_ENV === "production")) : a || f(
        e,
        t,
        V,
        F,
        i,
        s,
        o,
        l,
        !1
      ), w)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ji(
          t,
          n,
          M,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const q = $o(t.props, g);
        q ? (t.target = q, ji(
          t,
          q,
          null,
          u,
          0
        )) : y.NODE_ENV !== "production" && $(
          "Invalid Teleport target on update:",
          A,
          `(${typeof A})`
        );
      } else X && ji(
        t,
        A,
        U,
        u,
        1
      );
      Mr(t, w);
    }
  },
  remove(e, t, n, { um: r, o: { remove: i } }, s) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: c,
      target: f,
      props: d
    } = e, p = rn(d), g = s || !p, b = gn.get(e);
    if (b && (b.flags |= 8, gn.delete(e)), f && (i(u), i(c)), s && i(a), !b && (p || f) && o & 16)
      for (let S = 0; S < l.length; S++) {
        const v = l[S];
        r(
          v,
          t,
          n,
          g,
          !!v.dynamicChildren
        );
      }
  },
  move: ji,
  hydrate: Mp
};
function ji(e, t, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: a, children: u, props: c } = e, f = s === 2;
  if (f && r(o, t, n), !gn.has(e) && (!f || rn(c)) && a & 16)
    for (let d = 0; d < u.length; d++)
      i(
        u[d],
        t,
        n,
        2
      );
  f && r(l, t, n);
}
function Mp(e, t, n, r, i, s, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: u, createText: c }
}, f) {
  function d(S, v) {
    let w = v;
    for (; w; ) {
      if (w && w.nodeType === 8) {
        if (w.data === "teleport start anchor")
          t.targetStart = w;
        else if (w.data === "teleport anchor") {
          t.targetAnchor = w, S._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      w = o(w);
    }
  }
  function p(S, v) {
    v.anchor = f(
      o(S),
      v,
      l(S),
      n,
      r,
      i,
      s
    );
  }
  const g = t.target = $o(
    t.props,
    a
  ), b = rn(t.props);
  if (g) {
    const S = g._lpa || g.firstChild;
    t.shapeFlag & 16 && (b ? (p(e, t), d(g, S), t.targetAnchor || Ao(
      g,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === g ? e : null
    )) : (t.anchor = o(e), d(g, S), t.targetAnchor || Ao(g, t, c, u), f(
      S && o(S),
      t,
      g,
      n,
      r,
      i,
      s
    ))), Mr(t, b);
  } else b && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Lp = Rp;
function Mr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, i;
    for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Ao(e, t, n, r, i = null) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[Zu] = o, e && (r(s, e, i), r(o, e, i)), o;
}
const vt = /* @__PURE__ */ Symbol("_leaveCb"), Tr = /* @__PURE__ */ Symbol("_enterCb");
function Qu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return br(() => {
    e.isMounted = !0;
  }), Xn(() => {
    e.isUnmounting = !0;
  }), e;
}
const mt = [Function, Array], Ju = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: mt,
  onEnter: mt,
  onAfterEnter: mt,
  onEnterCancelled: mt,
  // leave
  onBeforeLeave: mt,
  onLeave: mt,
  onAfterLeave: mt,
  onLeaveCancelled: mt,
  // appear
  onBeforeAppear: mt,
  onAppear: mt,
  onAfterAppear: mt,
  onAppearCancelled: mt
}, ef = (e) => {
  const t = e.subTree;
  return t.component ? ef(t.component) : t;
}, Fp = {
  name: "BaseTransition",
  props: Ju,
  setup(e, { slots: t }) {
    const n = Qn(), r = Qu();
    return () => {
      const i = t.default && ml(t.default(), !0), s = i && i.length ? tf(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? $f() : void 0
      );
      if (!s)
        return;
      const o = /* @__PURE__ */ se(e), { mode: l } = o;
      if (y.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && $(`invalid <transition> mode: ${l}`), r.isLeaving)
        return oo(s);
      const a = cs(s);
      if (!a)
        return oo(s);
      let u = si(
        a,
        o,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => u = f
      );
      a.type !== Re && Un(a, u);
      let c = n.subTree && cs(n.subTree);
      if (c && c.type !== Re && !Pn(c, a) && ef(n).type !== Re) {
        let f = si(
          c,
          o,
          r,
          n
        );
        if (Un(c, f), l === "out-in" && a.type !== Re)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, oo(s);
        l === "in-out" && a.type !== Re ? f.delayLeave = (d, p, g) => {
          const b = nf(
            r,
            c
          );
          b[String(c.key)] = c, d[vt] = () => {
            p(), d[vt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            g(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return s;
    };
  }
};
function tf(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const r of e)
      if (r.type !== Re) {
        if (y.NODE_ENV !== "production" && n) {
          $(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = r, n = !0, y.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Bp = Fp;
function nf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function si(e, t, n, r, i) {
  const {
    appear: s,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: f,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: g,
    onLeaveCancelled: b,
    onBeforeAppear: S,
    onAppear: v,
    onAfterAppear: w,
    onAppearCancelled: x
  } = t, I = String(e.key), E = nf(n, e), L = (A, U) => {
    A && bt(
      A,
      r,
      9,
      U
    );
  }, M = (A, U) => {
    const X = U[1];
    L(A, U), Q(A) ? A.every((V) => V.length <= 1) && X() : A.length <= 1 && X();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(A) {
      let U = a;
      if (!n.isMounted)
        if (s)
          U = S || a;
        else
          return;
      A[vt] && A[vt](
        !0
        /* cancelled */
      );
      const X = E[I];
      X && Pn(e, X) && X.el[vt] && X.el[vt](), L(U, [A]);
    },
    enter(A) {
      if (!tt && E[I] === e) return;
      let U = u, X = c, V = f;
      if (!n.isMounted)
        if (s)
          U = v || u, X = w || c, V = x || f;
        else
          return;
      let F = !1;
      A[Tr] = (K) => {
        F || (F = !0, K ? L(V, [A]) : L(X, [A]), k.delayedLeave && k.delayedLeave(), A[Tr] = void 0);
      };
      const q = A[Tr].bind(null, !1);
      U ? M(U, [A, q]) : q();
    },
    leave(A, U) {
      const X = String(e.key);
      if (A[Tr] && A[Tr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return U();
      L(d, [A]);
      let V = !1;
      A[vt] = (q) => {
        V || (V = !0, U(), q ? L(b, [A]) : L(g, [A]), A[vt] = void 0, E[X] === e && delete E[X]);
      };
      const F = A[vt].bind(null, !1);
      E[X] = e, p ? M(p, [A, F]) : F();
    },
    clone(A) {
      const U = si(
        A,
        t,
        n,
        r,
        i
      );
      return i && i(U), U;
    }
  };
  return k;
}
function oo(e) {
  if (_i(e))
    return e = Yt(e), e.children = null, e;
}
function cs(e) {
  if (!_i(e))
    return zs(e.type) && e.children ? tf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ne(n.default))
      return n.default();
  }
}
function Un(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Un(
      zs(n.type) && cs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ml(e, t = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === Ve ? (o.patchFlag & 128 && i++, r = r.concat(
      ml(o.children, t, l)
    )) : (t || o.type !== Re) && r.push(l != null ? Yt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Xt(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function Hp() {
  const e = Qn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (y.NODE_ENV !== "production" && $(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function rf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const va = /* @__PURE__ */ new WeakSet();
function ya(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const us = /* @__PURE__ */ new WeakMap();
function Gr(e, t, n, r, i = !1) {
  if (Q(e)) {
    e.forEach(
      (b, S) => Gr(
        b,
        t && (Q(t) ? t[S] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (dr(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Gr(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Gs(r.component) : r.el, o = i ? null : s, { i: l, r: a } = e;
  if (y.NODE_ENV !== "production" && !l) {
    $(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, c = l.refs === we ? l.refs = {} : l.refs, f = l.setupState, d = /* @__PURE__ */ se(f), p = f === we ? uu : (b) => y.NODE_ENV !== "production" && (fe(d, b) && !/* @__PURE__ */ De(d[b]) && $(
    `Template ref "${b}" used on a non-ref value. It will not work in the production build.`
  ), va.has(d[b])) || ya(c, b) ? !1 : fe(d, b), g = (b, S) => !(y.NODE_ENV !== "production" && va.has(b) || S && ya(c, S));
  if (u != null && u !== a) {
    if (ba(t), Ee(u))
      c[u] = null, p(u) && (f[u] = null);
    else if (/* @__PURE__ */ De(u)) {
      const b = t;
      g(u, b.k) && (u.value = null), b.k && (c[b.k] = null);
    }
  }
  if (ne(a))
    yr(a, l, 12, [o, c]);
  else {
    const b = Ee(a), S = /* @__PURE__ */ De(a);
    if (b || S) {
      const v = () => {
        if (e.f) {
          const w = b ? p(a) ? f[a] : c[a] : g(a) || !e.k ? a.value : c[e.k];
          if (i)
            Q(w) && il(w, s);
          else if (Q(w))
            w.includes(s) || w.push(s);
          else if (b)
            c[a] = [s], p(a) && (f[a] = c[a]);
          else {
            const x = [s];
            g(a, e.k) && (a.value = x), e.k && (c[e.k] = x);
          }
        } else b ? (c[a] = o, p(a) && (f[a] = o)) : S ? (g(a, e.k) && (a.value = o), e.k && (c[e.k] = o)) : y.NODE_ENV !== "production" && $("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (o) {
        const w = () => {
          v(), us.delete(e);
        };
        w.id = -1, us.set(e, w), Je(w, n);
      } else
        ba(e), v();
    } else y.NODE_ENV !== "production" && $("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function ba(e) {
  const t = us.get(e);
  t && (t.flags |= 8, us.delete(e));
}
wi().requestIdleCallback;
wi().cancelIdleCallback;
const dr = (e) => !!e.type.__asyncLoader, _i = (e) => e.type.__isKeepAlive;
function zp(e, t) {
  sf(e, "a", t);
}
function jp(e, t) {
  sf(e, "da", t);
}
function sf(e, t, n = Fe) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (js(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      _i(i.parent.vnode) && Wp(r, t, n, i), i = i.parent;
  }
}
function Wp(e, t, n, r) {
  const i = js(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  yl(() => {
    il(r[t], i);
  }, n);
}
function js(e, t, n = Fe, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      Nt();
      const l = Ei(n), a = bt(t, n, e, o);
      return l(), Ot(), a;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (y.NODE_ENV !== "production") {
    const i = $n(dl[e].replace(/ hook$/, ""));
    $(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const dn = (e) => (t, n = Fe) => {
  (!ai || e === "sp") && js(e, (...r) => t(...r), n);
}, of = dn("bm"), br = dn("m"), Up = dn(
  "bu"
), vl = dn("u"), Xn = dn(
  "bum"
), yl = dn("um"), Gp = dn(
  "sp"
), qp = dn("rtg"), Kp = dn("rtc");
function Yp(e, t = Fe) {
  js("ec", e, t);
}
const Xp = "components", Zp = /* @__PURE__ */ Symbol.for("v-ndc");
function Qp(e) {
  return Ee(e) && Jp(Xp, e, !1) || e;
}
function Jp(e, t, n = !0, r = !1) {
  const i = Be || Fe;
  if (i) {
    const s = i.type;
    {
      const l = _l(
        s,
        !1
      );
      if (l && (l === t || l === Ue(t) || l === ln(Ue(t))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      wa(i[e] || s[e], t) || // global registration
      wa(i.appContext[e], t)
    );
    return !o && r ? s : (y.NODE_ENV !== "production" && n && !o && $(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), o);
  } else y.NODE_ENV !== "production" && $(
    `resolve${ln(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function wa(e, t) {
  return e && (e[t] || e[Ue(t)] || e[ln(Ue(t))]);
}
function wr(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Q(r))
      for (let i = 0; i < r.length; i++)
        e[r[i].name] = r[i].fn;
    else r && (e[r.name] = r.key ? (...i) => {
      const s = r.fn(...i);
      return s && (s.key = r.key), s;
    } : r.fn);
  }
  return e;
}
function Te(e, t, n, r, i, s) {
  if (n == null && (n = {}), Be.ce || Be.parent && dr(Be.parent) && Be.parent.ce) {
    const u = n, c = Object.keys(u).length > 0;
    return t !== "default" && (u.name = t), wt(), Kt(
      Ve,
      null,
      [T("slot", u, r)],
      c ? -2 : 64
    );
  }
  let o = e[t];
  y.NODE_ENV !== "production" && o && o.length > 1 && ($(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1);
  const l = on.length;
  wt();
  let a;
  try {
    const u = o && lf(o(n)), c = n.key || s || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    u && u.key;
    a = Kt(
      Ve,
      {
        key: (c && !ut(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!u && r ? "_fb" : "")
      },
      u || (r ? r() : []),
      u && e._ === 1 ? 64 : -2
    );
  } catch (u) {
    for (let c = on.length; c > l; c--) xl();
    throw u;
  } finally {
    o && o._c && (o._d = !0);
  }
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), a;
}
function lf(e) {
  return e.some((t) => Gn(t) ? !(t.type === Re || t.type === Ve && !lf(t.children)) : !0) ? e : null;
}
const Vo = (e) => e ? Af(e) ? Gs(e) : Vo(e.parent) : null, eg = (e) => {
  let t = !1;
  for (; ; ) {
    if (e.patchFlag > 0 && e.patchFlag & 2048) {
      const i = Us(e.children);
      if (!i)
        return;
      e = i, t = !0;
      continue;
    }
    const n = e.component;
    if (n && n.subTree) {
      e = n.subTree;
      continue;
    }
    const r = e.suspense;
    if (r && r.activeBranch) {
      e = r.activeBranch;
      continue;
    }
    return t ? e.el : void 0;
  }
}, tg = (e) => {
  const t = e.subTree && eg(e.subTree);
  return t === void 0 ? e.vnode.el : t;
}, Fn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => y.NODE_ENV !== "production" ? tg(e) : e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(e.props) : e.props,
    $attrs: (e) => y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(e.attrs) : e.attrs,
    $slots: (e) => y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(e.slots) : e.slots,
    $refs: (e) => y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(e.refs) : e.refs,
    $parent: (e) => Vo(e.parent),
    $root: (e) => Vo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => uf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fn.bind(e.proxy)),
    $watch: (e) => Pp.bind(e)
  })
), bl = (e) => e === "_" || e === "$", lo = (e, t) => e !== we && !e.__isScriptSetup && fe(e, t), af = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: a } = e;
    if (y.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (lo(r, t))
          return o[t] = 1, r[t];
        if (i !== we && fe(i, t))
          return o[t] = 2, i[t];
        if (fe(s, t))
          return o[t] = 3, s[t];
        if (n !== we && fe(n, t))
          return o[t] = 4, n[t];
        Po && (o[t] = 0);
      }
    }
    const u = Fn[t];
    let c, f;
    if (u)
      return t === "$attrs" ? (je(e.attrs, "get", ""), y.NODE_ENV !== "production" && ds()) : y.NODE_ENV !== "production" && t === "$slots" && je(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== we && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = a.config.globalProperties, fe(f, t)
    )
      return f[t];
    y.NODE_ENV !== "production" && Be && (!Ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== we && bl(t[0]) && fe(i, t) ? $(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && $(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    return lo(i, t) ? (i[t] = n, !0) : y.NODE_ENV !== "production" && i.__isScriptSetup && fe(i, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== we && fe(r, t) ? (r[t] = n, !0) : fe(e.props, t) ? (y.NODE_ENV !== "production" && $(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (y.NODE_ENV !== "production" && $(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (y.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o }
  }, l) {
    let a;
    return !!(n[l] || e !== we && l[0] !== "$" && fe(e, l) || lo(t, l) || fe(s, l) || fe(r, l) || fe(Fn, l) || fe(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
y.NODE_ENV !== "production" && (af.ownKeys = (e) => ($(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ng(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Fn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Fn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: We
    });
  }), t;
}
function rg(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: We
    });
  });
}
function ig(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ se(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (bl(r[0])) {
        $(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: We
      });
    }
  });
}
function sg() {
  return og("useAttrs").attrs;
}
function og(e) {
  const t = Qn();
  return y.NODE_ENV !== "production" && !t && $(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Pf(t));
}
function ka(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function lg() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? $(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Po = !0;
function ag(e) {
  const t = uf(e), n = e.proxy, r = e.ctx;
  Po = !1, t.beforeCreate && xa(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: g,
    activated: b,
    deactivated: S,
    beforeDestroy: v,
    beforeUnmount: w,
    destroyed: x,
    unmounted: I,
    render: E,
    renderTracked: L,
    renderTriggered: M,
    errorCaptured: k,
    serverPrefetch: A,
    // public API
    expose: U,
    inheritAttrs: X,
    // assets
    components: V,
    directives: F,
    filters: q
  } = t, K = y.NODE_ENV !== "production" ? lg() : null;
  if (y.NODE_ENV !== "production") {
    const [G] = e.propsOptions;
    if (G)
      for (const J in G)
        K("Props", J);
  }
  if (u && cg(u, r, K), o)
    for (const G in o) {
      const J = o[G];
      ne(J) ? (y.NODE_ENV !== "production" ? Object.defineProperty(r, G, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[G] = J.bind(n), y.NODE_ENV !== "production" && K("Methods", G)) : y.NODE_ENV !== "production" && $(
        `Method "${G}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    y.NODE_ENV !== "production" && !ne(i) && $(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = i.call(n, n);
    if (y.NODE_ENV !== "production" && sl(G) && $(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ue(G))
      y.NODE_ENV !== "production" && $("data() should return an object.");
    else if (e.data = /* @__PURE__ */ yt(G), y.NODE_ENV !== "production")
      for (const J in G)
        K("Data", J), bl(J[0]) || Object.defineProperty(r, J, {
          configurable: !0,
          enumerable: !0,
          get: () => G[J],
          set: We
        });
  }
  if (Po = !0, s)
    for (const G in s) {
      const J = s[G], Pe = ne(J) ? J.bind(n, n) : ne(J.get) ? J.get.bind(n, n) : We;
      y.NODE_ENV !== "production" && Pe === We && $(`Computed property "${G}" has no getter.`);
      const Se = !ne(J) && ne(J.set) ? J.set.bind(n) : y.NODE_ENV !== "production" ? () => {
        $(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      } : We, Me = z({
        get: Pe,
        set: Se
      });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Z) => Me.value = Z
      }), y.NODE_ENV !== "production" && K("Computed", G);
    }
  if (l)
    for (const G in l)
      cf(l[G], r, n, G);
  if (a) {
    const G = ne(a) ? a.call(n) : a;
    Reflect.ownKeys(G).forEach((J) => {
      Yn(J, G[J]);
    });
  }
  c && xa(c, e, "c");
  function oe(G, J) {
    Q(J) ? J.forEach((Pe) => G(Pe.bind(n))) : J && G(J.bind(n));
  }
  if (oe(of, f), oe(br, d), oe(Up, p), oe(vl, g), oe(zp, b), oe(jp, S), oe(Yp, k), oe(Kp, L), oe(qp, M), oe(Xn, w), oe(yl, I), oe(Gp, A), Q(U))
    if (U.length) {
      const G = e.exposed || (e.exposed = {});
      U.forEach((J) => {
        Object.defineProperty(G, J, {
          get: () => n[J],
          set: (Pe) => n[J] = Pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === We && (e.render = E), X != null && (e.inheritAttrs = X), V && (e.components = V), F && (e.directives = F), A && rf(e);
}
function cg(e, t, n = We) {
  Q(e) && (e = Io(e));
  for (const r in e) {
    const i = e[r];
    let s;
    ue(i) ? "default" in i ? s = st(
      i.from || r,
      i.default,
      !0
    ) : s = st(i.from || r) : s = st(i), /* @__PURE__ */ De(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s, y.NODE_ENV !== "production" && n("Inject", r);
  }
}
function xa(e, t, n) {
  bt(
    Q(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function cf(e, t, n, r) {
  let i = r.includes(".") ? Xu(n, r) : () => n[r];
  if (Ee(e)) {
    const s = t[e];
    ne(s) ? ae(i, s) : y.NODE_ENV !== "production" && $(`Invalid watch handler specified by key "${e}"`, s);
  } else if (ne(e))
    ae(i, e.bind(n));
  else if (ue(e))
    if (Q(e))
      e.forEach((s) => cf(s, t, n, r));
    else {
      const s = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(s) ? ae(i, s, e) : y.NODE_ENV !== "production" && $(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else y.NODE_ENV !== "production" && $(`Invalid watch option: "${r}"`, e);
}
function uf(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !i.length && !n && !r ? a = t : (a = {}, i.length && i.forEach(
    (u) => fs(a, u, o, !0)
  ), fs(a, t, o)), ue(t) && s.set(t, a), a;
}
function fs(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && fs(e, s, n, !0), i && i.forEach(
    (o) => fs(e, o, n, !0)
  );
  for (const o in t)
    if (r && o === "expose")
      y.NODE_ENV !== "production" && $(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ug[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const ug = {
  data: _a,
  props: Ea,
  emits: Ea,
  // objects
  methods: Lr,
  computed: Lr,
  // lifecycle
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  // assets
  components: Lr,
  directives: Lr,
  // watch
  watch: dg,
  // provide / inject
  provide: _a,
  inject: fg
};
function _a(e, t) {
  return t ? e ? function() {
    return Ae(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fg(e, t) {
  return Lr(Io(e), Io(t));
}
function Io(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Lr(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ea(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    ka(e),
    ka(t ?? {})
  ) : t;
}
function dg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Qe(e[r], t[r]);
  return n;
}
function ff() {
  return {
    app: null,
    config: {
      isNativeTag: uu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let hg = 0;
function pg(e, t) {
  return function(r, i = null) {
    ne(r) || (r = Ae({}, r)), i != null && !ue(i) && (y.NODE_ENV !== "production" && $("root props passed to app.mount() must be an object."), i = null);
    const s = ff(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = s.app = {
      _uid: hg++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Ia,
      get config() {
        return s.config;
      },
      set config(c) {
        y.NODE_ENV !== "production" && $(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...f) {
        return o.has(c) ? y.NODE_ENV !== "production" && $("Plugin has already been applied to target app.") : c && ne(c.install) ? (o.add(c), c.install(u, ...f)) : ne(c) ? (o.add(c), c(u, ...f)) : y.NODE_ENV !== "production" && $(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(c) {
        return s.mixins.includes(c) ? y.NODE_ENV !== "production" && $(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : s.mixins.push(c), u;
      },
      component(c, f) {
        return y.NODE_ENV !== "production" && Fo(c, s.config), f ? (y.NODE_ENV !== "production" && s.components[c] && $(`Component "${c}" has already been registered in target app.`), s.components[c] = f, u) : s.components[c];
      },
      directive(c, f) {
        return y.NODE_ENV !== "production" && Yu(c), f ? (y.NODE_ENV !== "production" && s.directives[c] && $(`Directive "${c}" has already been registered in target app.`), s.directives[c] = f, u) : s.directives[c];
      },
      mount(c, f, d) {
        if (a)
          y.NODE_ENV !== "production" && $(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          y.NODE_ENV !== "production" && c.__vue_app__ && $(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = u._ceVNode || T(r, i);
          return p.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), y.NODE_ENV !== "production" && (s.reload = () => {
            const g = Yt(p);
            g.el = null, e(g, c, d);
          }), e(p, c, d), a = !0, u._container = c, c.__vue_app__ = u, y.NODE_ENV !== "production" && (u._instance = p.component, Ep(u, Ia)), Gs(p.component);
        }
      },
      onUnmount(c) {
        y.NODE_ENV !== "production" && typeof c != "function" && $(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), l.push(c);
      },
      unmount() {
        a ? (bt(
          l,
          u._instance,
          16
        ), e(null, u._container), y.NODE_ENV !== "production" && (u._instance = null, Sp(u)), delete u._container.__vue_app__) : y.NODE_ENV !== "production" && $("Cannot unmount an app that is not mounted.");
      },
      provide(c, f) {
        return y.NODE_ENV !== "production" && c in s.provides && (fe(s.provides, c) ? $(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ) : $(
          `App already provides property with key "${String(c)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[c] = f, u;
      },
      runWithContext(c) {
        const f = hr;
        hr = u;
        try {
          return c();
        } finally {
          hr = f;
        }
      }
    };
    return u;
  };
}
let hr = null;
const gg = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${wn(t)}Modifiers`];
function mg(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || we;
  if (y.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [f]
    } = e;
    if (c)
      if (!(t in c))
        (!f || !($n(Ue(t)) in f)) && $(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${$n(Ue(t))}" prop.`
        );
      else {
        const d = c[t];
        ne(d) && (d(...n) || $(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const s = t.startsWith("update:"), o = s && gg(r, t.slice(7));
  if (o && (o.trim && (i = n.map((c) => Ee(c) ? c.trim() : c)), o.number && (i = i.map(_h))), y.NODE_ENV !== "production" && $p(e, t, i), y.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && r[$n(c)] && $(
      `Event "${c}" is emitted in component ${Si(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${wn(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = $n(t)] || // also try camelCase event handler (#2249)
  r[l = $n(Ue(t))];
  !a && s && (a = r[l = $n(wn(t))]), a && bt(
    a,
    e,
    6,
    i
  );
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, bt(
      u,
      e,
      6,
      i
    );
  }
}
const vg = /* @__PURE__ */ new WeakMap();
function df(e, t, n = !1) {
  const r = n ? vg : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, l = !1;
  if (!ne(e)) {
    const a = (u) => {
      const c = df(u, t, !0);
      c && (l = !0, Ae(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ue(e) && r.set(e, null), null) : (Q(s) ? s.forEach((a) => o[a] = null) : Ae(o, s), ue(e) && r.set(e, o), o);
}
function Ws(e, t) {
  return !e || !yi(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, wn(t)) || fe(e, t));
}
let Ro = !1;
function ds() {
  Ro = !0;
}
function Sa(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: f,
    data: d,
    setupState: p,
    ctx: g,
    inheritAttrs: b
  } = e, S = as(e);
  let v, w;
  y.NODE_ENV !== "production" && (Ro = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = i || r, L = y.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(E, {
        get(M, k, A) {
          return $(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, k, A);
        }
      }) : E;
      v = _t(
        u.call(
          L,
          E,
          c,
          y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(f) : f,
          p,
          d,
          g
        )
      ), w = l;
    } else {
      const E = t;
      y.NODE_ENV !== "production" && l === f && ds(), v = _t(
        E.length > 1 ? E(
          y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(f) : f,
          y.NODE_ENV !== "production" ? {
            get attrs() {
              return ds(), /* @__PURE__ */ jt(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : E(
          y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(f) : f,
          null
        )
      ), w = t.props ? l : yg(l);
    }
  } catch (E) {
    on.length = 0, ki(E, e, 1), v = T(Re);
  }
  let x = v, I;
  if (y.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([x, I] = hf(v)), w && b !== !1) {
    const E = Object.keys(w), { shapeFlag: L } = x;
    if (E.length) {
      if (L & 7)
        s && E.some(Qr) && (w = bg(
          w,
          s
        )), x = Yt(x, w, !1, !0);
      else if (y.NODE_ENV !== "production" && !Ro && x.type !== Re) {
        const M = Object.keys(l), k = [], A = [];
        for (let U = 0, X = M.length; U < X; U++) {
          const V = M[U];
          yi(V) ? Qr(V) || k.push(V[2].toLowerCase() + V.slice(3)) : A.push(V);
        }
        A.length && $(
          `Extraneous non-props attributes (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), k.length && $(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  if (n.dirs && (y.NODE_ENV !== "production" && !Ca(x) && $(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), x = Yt(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const E = zs(x.type) && cs(x) || x;
    y.NODE_ENV !== "production" && !Ca(E) && $(
      "Component inside <Transition> renders non-element root node that cannot be animated."
    ), Un(E, n.transition);
  }
  return y.NODE_ENV !== "production" && I ? I(x) : v = x, as(S), v;
}
const hf = (e) => {
  const t = e.children, n = e.dynamicChildren, r = Us(t, !1);
  if (r) {
    if (y.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return hf(r);
  } else return [e, void 0];
  const i = t.indexOf(r), s = n ? n.indexOf(r) : -1, o = (l) => {
    t[i] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [_t(r), o];
};
function Us(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (Gn(i)) {
      if (i.type !== Re || i.children === "v-if") {
        if (n)
          return;
        if (n = i, y.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Us(n.children);
      }
    } else
      return;
  }
  return n;
}
const yg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || yi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bg = (e, t) => {
  const n = {};
  for (const r in e)
    (!Qr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Ca = (e) => e.shapeFlag & 7 || e.type === Re;
function wg(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: l, patchFlag: a } = t, u = s.emitsOptions;
  if (y.NODE_ENV !== "production" && (i || l) && tt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Na(r, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (pf(o, r, d) && !Ws(u, d))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Na(r, o, u) : !0 : !!o;
  return !1;
}
function Na(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (pf(t, e, s) && !Ws(n, s))
      return !0;
  }
  return !1;
}
function pf(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && ue(r) && ue(i) ? !Ls(r, i) : r !== i;
}
function kg({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const gf = {}, mf = () => Object.create(gf), vf = (e) => Object.getPrototypeOf(e) === gf;
function xg(e, t, n, r = !1) {
  const i = {}, s = mf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), yf(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  y.NODE_ENV !== "production" && wf(t || {}, i, e), n ? e.props = r ? i : /* @__PURE__ */ np(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function _g(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Eg(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ se(i), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(y.NODE_ENV !== "production" && _g(e)) && (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (Ws(e.emitsOptions, d))
          continue;
        const p = t[d];
        if (a)
          if (fe(s, d))
            p !== s[d] && (s[d] = p, u = !0);
          else {
            const g = Ue(d);
            i[g] = Mo(
              a,
              l,
              g,
              p,
              e,
              !1
            );
          }
        else
          p !== s[d] && (s[d] = p, u = !0);
      }
    }
  } else {
    yf(e, t, i, s) && (u = !0);
    let c;
    for (const f in l)
      (!t || // for camelCase
      !fe(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = wn(f)) === f || !fe(t, c))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[f] = Mo(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (s !== l)
      for (const f in s)
        (!t || !fe(t, f)) && (delete s[f], u = !0);
  }
  u && Ht(e.attrs, "set", ""), y.NODE_ENV !== "production" && wf(t || {}, i, e);
}
function yf(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (jr(a))
        continue;
      const u = t[a];
      let c;
      i && fe(i, c = Ue(a)) ? !s || !s.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Ws(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, o = !0);
    }
  if (s) {
    const a = /* @__PURE__ */ se(n), u = l || we;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Mo(
        i,
        a,
        f,
        u[f],
        e,
        !fe(u, f)
      );
    }
  }
  return o;
}
function Mo(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const l = fe(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && ne(a)) {
        const { propsDefaults: u } = i;
        if (n in u)
          r = u[n];
        else {
          const c = Ei(i);
          r = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        r = a;
      i.ce && i.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === wn(n)) && (r = !0));
  }
  return r;
}
const Sg = /* @__PURE__ */ new WeakMap();
function bf(e, t, n = !1) {
  const r = n ? Sg : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, l = [];
  let a = !1;
  if (!ne(e)) {
    const c = (f) => {
      a = !0;
      const [d, p] = bf(f, t, !0);
      Ae(o, d), p && l.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!s && !a)
    return ue(e) && r.set(e, ur), ur;
  if (Q(s))
    for (let c = 0; c < s.length; c++) {
      y.NODE_ENV !== "production" && !Ee(s[c]) && $("props must be strings when using array syntax.", s[c]);
      const f = Ue(s[c]);
      Oa(f) && (o[f] = we);
    }
  else if (s) {
    y.NODE_ENV !== "production" && !ue(s) && $("invalid props options", s);
    for (const c in s) {
      const f = Ue(c);
      if (Oa(f)) {
        const d = s[c], p = o[f] = Q(d) || ne(d) ? { type: d } : Ae({}, d), g = p.type;
        let b = !1, S = !0;
        if (Q(g))
          for (let v = 0; v < g.length; ++v) {
            const w = g[v], x = ne(w) && w.name;
            if (x === "Boolean") {
              b = !0;
              break;
            } else x === "String" && (S = !1);
          }
        else
          b = ne(g) && g.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = b, p[
          1
          /* shouldCastTrue */
        ] = S, (b || fe(p, "default")) && l.push(f);
      }
    }
  }
  const u = [o, l];
  return ue(e) && r.set(e, u), u;
}
function Oa(e) {
  return e[0] !== "$" && !jr(e) ? !0 : (y.NODE_ENV !== "production" && $(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Cg(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function wf(e, t, n) {
  const r = /* @__PURE__ */ se(t), i = n.propsOptions[0], s = Object.keys(e).map((o) => Ue(o));
  for (const o in i) {
    let l = i[o];
    l != null && Ng(
      o,
      r[o],
      l,
      y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(r) : r,
      !s.includes(o)
    );
  }
}
function Ng(e, t, n, r, i) {
  const { type: s, required: o, validator: l, skipCheck: a } = n;
  if (o && i) {
    $('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (s != null && s !== !0 && !a) {
      let u = !1;
      const c = Q(s) ? s : [s], f = [];
      for (let d = 0; d < c.length && !u; d++) {
        const { valid: p, expectedType: g } = Tg(t, c[d]);
        f.push(g || ""), u = p;
      }
      if (!u) {
        $(Dg(e, t, f));
        return;
      }
    }
    l && !l(t, r) && $('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Og = /* @__PURE__ */ un(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Tg(e, t) {
  let n;
  const r = Cg(t);
  if (r === "null")
    n = e === null;
  else if (Og(r)) {
    const i = typeof e;
    n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ue(e) : r === "Array" ? n = Q(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Dg(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ln).join(" | ")}`;
  const i = n[0], s = ol(t), o = Ta(t, i), l = Ta(t, s);
  return n.length === 1 && Da(i) && $g(i, s) && (r += ` with value ${o}`), r += `, got ${s} `, Da(s) && (r += `with value ${l}.`), r;
}
function Ta(e, t) {
  return ut(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Da(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function $g(...e) {
  return e.every((t) => {
    const n = t.toLowerCase();
    return n !== "boolean" && n !== "symbol";
  });
}
const wl = (e) => e === "_" || e === "_ctx" || e === "$stable", kl = (e) => Q(e) ? e.map(_t) : [_t(e)], Ag = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ce((...i) => (y.NODE_ENV !== "production" && Fe && !(n === null && Be) && !(n && n.root !== Fe.root) && $(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), kl(t(...i))), n);
  return r._c = !1, r;
}, kf = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (wl(i)) continue;
    const s = e[i];
    if (ne(s))
      t[i] = Ag(i, s, r);
    else if (s != null) {
      y.NODE_ENV !== "production" && $(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const o = kl(s);
      t[i] = () => o;
    }
  }
}, xf = (e, t) => {
  y.NODE_ENV !== "production" && !_i(e.vnode) && $(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = kl(t);
  e.slots.default = () => n;
}, Lo = (e, t, n) => {
  for (const r in t)
    (n || !wl(r)) && (e[r] = t[r]);
}, Vg = (e, t, n) => {
  const r = e.slots = mf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Lo(r, t, n), n && rs(r, "_", i, !0)) : kf(t, r);
  } else t && xf(e, t);
}, Pg = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = !0, o = we;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? y.NODE_ENV !== "production" && tt ? (Lo(i, t, n), Ht(e, "set", "$slots")) : n && l === 1 ? s = !1 : Lo(i, t, n) : (s = !t.$stable, kf(t, i)), o = t;
  } else t && (xf(e, t), o = { default: 1 });
  if (s)
    for (const l in i)
      !wl(l) && o[l] == null && delete i[l];
};
let Dr, en;
function ir(e, t) {
  e.appContext.config.performance && hs() && en.mark(`vue-${t}-${e.uid}`), y.NODE_ENV !== "production" && Tp(e, t, hs() ? en.now() : Date.now());
}
function sr(e, t) {
  if (e.appContext.config.performance && hs()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end", i = `<${Si(e, e.type)}> ${t}`;
    en.mark(r), en.measure(i, n, r), en.clearMeasures(i), en.clearMarks(n), en.clearMarks(r);
  }
  y.NODE_ENV !== "production" && Dp(e, t, hs() ? en.now() : Date.now());
}
function hs() {
  return Dr !== void 0 || (typeof window < "u" && window.performance ? (Dr = !0, en = window.performance) : Dr = !1), Dr;
}
function Ig() {
  const e = [];
  if (y.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Je = Bg;
function Rg(e) {
  return Mg(e);
}
function Mg(e, t) {
  Ig();
  const n = wi();
  n.__VUE__ = !0, y.NODE_ENV !== "production" && Uu(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: f,
    nextSibling: d,
    setScopeId: p = We,
    insertStaticContent: g
  } = e, b = (h, m, _, D = null, N = null, C = null, B = void 0, R = null, P = y.NODE_ENV !== "production" && tt ? !1 : !!m.dynamicChildren) => {
    if (h === m)
      return;
    h && !Pn(h, m) && (D = xt(h), Y(h, N, C, !0), h = null), m.patchFlag === -2 && (P = !1, m.dynamicChildren = null);
    const { type: O, ref: re, shapeFlag: H } = m;
    switch (O) {
      case Zn:
        S(h, m, _, D);
        break;
      case Re:
        v(h, m, _, D);
        break;
      case Qi:
        h == null ? w(m, _, D, B) : y.NODE_ENV !== "production" && x(h, m, _, B);
        break;
      case Ve:
        F(
          h,
          m,
          _,
          D,
          N,
          C,
          B,
          R,
          P
        );
        break;
      default:
        H & 1 ? L(
          h,
          m,
          _,
          D,
          N,
          C,
          B,
          R,
          P
        ) : H & 6 ? q(
          h,
          m,
          _,
          D,
          N,
          C,
          B,
          R,
          P
        ) : H & 64 || H & 128 ? O.process(
          h,
          m,
          _,
          D,
          N,
          C,
          B,
          R,
          P,
          Sr
        ) : y.NODE_ENV !== "production" && $("Invalid VNode type:", O, `(${typeof O})`);
    }
    re != null && N ? Gr(re, h && h.ref, C, m || h, !m) : re == null && h && h.ref != null && Gr(h.ref, null, C, h, !0);
  }, S = (h, m, _, D) => {
    if (h == null)
      r(
        m.el = l(m.children),
        _,
        D
      );
    else {
      const N = m.el = h.el;
      m.children !== h.children && u(N, m.children);
    }
  }, v = (h, m, _, D) => {
    h == null ? r(
      m.el = a(m.children || ""),
      _,
      D
    ) : m.el = h.el;
  }, w = (h, m, _, D) => {
    [h.el, h.anchor] = g(
      h.children,
      m,
      _,
      D,
      h.el,
      h.anchor
    );
  }, x = (h, m, _, D) => {
    if (m.children !== h.children) {
      const N = d(h.anchor);
      E(h), [m.el, m.anchor] = g(
        m.children,
        _,
        N,
        D
      );
    } else
      m.el = h.el, m.anchor = h.anchor;
  }, I = ({ el: h, anchor: m }, _, D) => {
    let N;
    for (; h && h !== m; )
      N = d(h), r(h, _, D), h = N;
    r(m, _, D);
  }, E = ({ el: h, anchor: m }) => {
    let _;
    for (; h && h !== m; )
      _ = d(h), i(h), h = _;
    i(m);
  }, L = (h, m, _, D, N, C, B, R, P) => {
    if (m.type === "svg" ? B = "svg" : m.type === "math" && (B = "mathml"), h == null)
      M(
        m,
        _,
        D,
        N,
        C,
        B,
        R,
        P
      );
    else {
      const O = h.el && h.el._isVueCE ? h.el : null;
      try {
        O && O._beginPatch(), U(
          h,
          m,
          N,
          C,
          B,
          R,
          P
        );
      } finally {
        O && O._endPatch();
      }
    }
  }, M = (h, m, _, D, N, C, B, R) => {
    let P, O;
    const { props: re, shapeFlag: H, transition: ee, dirs: ie } = h;
    if (P = h.el = o(
      h.type,
      C,
      re && re.is,
      re
    ), H & 8 ? c(P, h.children) : H & 16 && A(
      h.children,
      P,
      null,
      D,
      N,
      ao(h, C),
      B,
      R
    ), ie && Cn(h, null, D, "created"), k(P, h, h.scopeId, B, D), re) {
      for (const ye in re)
        ye !== "value" && !jr(ye) && s(P, ye, null, re[ye], C, D);
      "value" in re && s(P, "value", null, re.value, C), (O = re.onVnodeBeforeMount) && It(O, D, h);
    }
    y.NODE_ENV !== "production" && (rs(P, "__vnode", h, !0), rs(P, "__vueParentComponent", D, !0)), ie && Cn(h, null, D, "beforeMount");
    const pe = Lg(N, ee);
    if (pe && ee.beforeEnter(P), r(P, m, _), (O = re && re.onVnodeMounted) || pe || ie) {
      const ye = y.NODE_ENV !== "production" && tt;
      Je(() => {
        let ge;
        y.NODE_ENV !== "production" && (ge = ha(ye));
        try {
          O && It(O, D, h), pe && ee.enter(P), ie && Cn(h, null, D, "mounted");
        } finally {
          y.NODE_ENV !== "production" && ha(ge);
        }
      }, N);
    }
  }, k = (h, m, _, D, N) => {
    if (_ && p(h, _), D)
      for (let C = 0; C < D.length; C++)
        p(h, D[C]);
    if (N) {
      let C = N.subTree;
      if (y.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && (C = Us(C.children) || C), m === C || Sf(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const B = N.vnode;
        k(
          h,
          B,
          B.scopeId,
          B.slotScopeIds,
          N.parent
        );
      }
    }
  }, A = (h, m, _, D, N, C, B, R, P = 0) => {
    for (let O = P; O < h.length; O++) {
      const re = h[O] = R ? tn(h[O]) : _t(h[O]);
      b(
        null,
        re,
        m,
        _,
        D,
        N,
        C,
        B,
        R
      );
    }
  }, U = (h, m, _, D, N, C, B) => {
    const R = m.el = h.el;
    y.NODE_ENV !== "production" && (R.__vnode = m);
    let { patchFlag: P, dynamicChildren: O, dirs: re } = m;
    P |= h.patchFlag & 16;
    const H = h.props || we, ee = m.props || we;
    let ie;
    if (_ && Nn(_, !1), (ie = ee.onVnodeBeforeUpdate) && It(ie, _, m, h), re && Cn(m, h, _, "beforeUpdate"), _ && Nn(_, !0), // HMR updated, force full diff
    (y.NODE_ENV !== "production" && tt || // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    O && (!h.dynamicChildren || h.dynamicChildren.length !== O.length)) && (P = 0, B = !1, O = null), (H.innerHTML && ee.innerHTML == null || H.textContent && ee.textContent == null) && c(R, ""), O ? (X(
      h.dynamicChildren,
      O,
      R,
      _,
      D,
      ao(m, N),
      C
    ), y.NODE_ENV !== "production" && qr(h, m)) : B || Pe(
      h,
      m,
      R,
      null,
      _,
      D,
      ao(m, N),
      C,
      !1
    ), P > 0) {
      if (P & 16)
        V(R, H, ee, _, N);
      else if (P & 2 && H.class !== ee.class && s(R, "class", null, ee.class, N), P & 4 && s(R, "style", H.style, ee.style, N), P & 8) {
        const pe = m.dynamicProps;
        for (let ye = 0; ye < pe.length; ye++) {
          const ge = pe[ye], Le = H[ge], qe = ee[ge];
          (qe !== Le || ge === "value") && s(R, ge, Le, qe, N, _);
        }
      }
      P & 1 && h.children !== m.children && c(R, m.children);
    } else !B && O == null && V(R, H, ee, _, N);
    ((ie = ee.onVnodeUpdated) || re) && Je(() => {
      ie && It(ie, _, m, h), re && Cn(m, h, _, "updated");
    }, D);
  }, X = (h, m, _, D, N, C, B) => {
    for (let R = 0; R < m.length; R++) {
      const P = h[R], O = m[R], re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(P, O) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? f(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      b(
        P,
        O,
        re,
        null,
        D,
        N,
        C,
        B,
        !0
      );
    }
  }, V = (h, m, _, D, N) => {
    if (m !== _) {
      if (m !== we)
        for (const C in m)
          !jr(C) && !(C in _) && s(
            h,
            C,
            m[C],
            null,
            N,
            D
          );
      for (const C in _) {
        if (jr(C)) continue;
        const B = _[C], R = m[C];
        B !== R && C !== "value" && s(h, C, R, B, N, D);
      }
      "value" in _ && s(h, "value", m.value, _.value, N);
    }
  }, F = (h, m, _, D, N, C, B, R, P) => {
    const O = m.el = h ? h.el : l(""), re = m.anchor = h ? h.anchor : l("");
    let { patchFlag: H, dynamicChildren: ee, slotScopeIds: ie } = m;
    y.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (tt || H & 2048) && (H = 0, P = !1, ee = null), ie && (R = R ? R.concat(ie) : ie), h == null ? (r(O, _, D), r(re, _, D), A(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      re,
      N,
      C,
      B,
      R,
      P
    )) : H > 0 && H & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === ee.length ? (X(
      h.dynamicChildren,
      ee,
      _,
      N,
      C,
      B,
      R
    ), y.NODE_ENV !== "production" ? qr(h, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || N && m === N.subTree) && qr(
        h,
        m,
        !0
        /* shallow */
      )
    )) : Pe(
      h,
      m,
      _,
      re,
      N,
      C,
      B,
      R,
      P
    );
  }, q = (h, m, _, D, N, C, B, R, P) => {
    m.slotScopeIds = R, h == null ? m.shapeFlag & 512 ? N.ctx.activate(
      m,
      _,
      D,
      B,
      P
    ) : K(
      m,
      _,
      D,
      N,
      C,
      B,
      P
    ) : oe(h, m, P);
  }, K = (h, m, _, D, N, C, B) => {
    const R = h.component = Gg(
      h,
      D,
      N
    );
    if (y.NODE_ENV !== "production" && R.type.__hmrId && wp(R), y.NODE_ENV !== "production" && (Yi(h), ir(R, "mount")), _i(h) && (R.ctx.renderer = Sr), y.NODE_ENV !== "production" && ir(R, "init"), Kg(R, !1, B), y.NODE_ENV !== "production" && sr(R, "init"), y.NODE_ENV !== "production" && tt && (h.el = null), R.asyncDep) {
      if (N && N.registerDep(R, G, B), !h.el) {
        const P = R.subTree = T(Re);
        v(null, P, m, _), h.placeholder = P.el;
      }
    } else
      G(
        R,
        h,
        m,
        _,
        N,
        C,
        B
      );
    y.NODE_ENV !== "production" && (Xi(), sr(R, "mount"));
  }, oe = (h, m, _) => {
    const D = m.component = h.component;
    if (wg(h, m, _))
      if (D.asyncDep && !D.asyncResolved) {
        y.NODE_ENV !== "production" && Yi(m), J(D, m, _), y.NODE_ENV !== "production" && Xi();
        return;
      } else
        D.next = m, D.update();
    else
      m.el = h.el, D.vnode = m;
  }, G = (h, m, _, D, N, C, B) => {
    const R = () => {
      if (h.isMounted) {
        let { next: H, bu: ee, u: ie, parent: pe, vnode: ye } = h;
        {
          const Vt = _f(h);
          if (Vt) {
            H && (H.el = ye.el, J(h, H, B)), Vt.asyncDep.then(() => {
              Je(() => {
                h.isUnmounted || O();
              }, N);
            });
            return;
          }
        }
        let ge = H, Le;
        y.NODE_ENV !== "production" && Yi(H || h.vnode), Nn(h, !1), H ? (H.el = ye.el, J(h, H, B)) : H = ye, ee && Nr(ee), (Le = H.props && H.props.onVnodeBeforeUpdate) && It(Le, pe, H, ye), Nn(h, !0), y.NODE_ENV !== "production" && ir(h, "render");
        const qe = Sa(h);
        y.NODE_ENV !== "production" && sr(h, "render");
        const At = h.subTree;
        h.subTree = qe, y.NODE_ENV !== "production" && ir(h, "patch"), b(
          At,
          qe,
          // parent may have changed if it's in a teleport
          f(At.el),
          // anchor may have changed if it's in a fragment
          xt(At),
          h,
          N,
          C
        ), y.NODE_ENV !== "production" && sr(h, "patch"), H.el = qe.el, ge === null && kg(h, qe.el), ie && Je(ie, N), (Le = H.props && H.props.onVnodeUpdated) && Je(
          () => It(Le, pe, H, ye),
          N
        ), y.NODE_ENV !== "production" && Gu(h), y.NODE_ENV !== "production" && Xi();
      } else {
        let H;
        const { el: ee, props: ie } = m, { bm: pe, m: ye, parent: ge, root: Le, type: qe } = h, At = dr(m);
        Nn(h, !1), pe && Nr(pe), !At && (H = ie && ie.onVnodeBeforeMount) && It(H, ge, m), Nn(h, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(
            qe,
            h.parent ? h.parent.type : void 0
          ), y.NODE_ENV !== "production" && ir(h, "render");
          const Vt = h.subTree = Sa(h);
          y.NODE_ENV !== "production" && sr(h, "render"), y.NODE_ENV !== "production" && ir(h, "patch"), b(
            null,
            Vt,
            _,
            D,
            h,
            N,
            C
          ), y.NODE_ENV !== "production" && sr(h, "patch"), m.el = Vt.el;
        }
        if (ye && Je(ye, N), !At && (H = ie && ie.onVnodeMounted)) {
          const Vt = m;
          Je(
            () => It(H, ge, Vt),
            N
          );
        }
        (m.shapeFlag & 256 || ge && dr(ge.vnode) && ge.vnode.shapeFlag & 256) && h.a && Je(h.a, N), h.isMounted = !0, y.NODE_ENV !== "production" && Cp(h), m = _ = D = null;
      }
    };
    h.scope.on();
    const P = h.effect = new yu(R);
    h.scope.off();
    const O = h.update = P.run.bind(P), re = h.job = P.runIfDirty.bind(P);
    re.i = h, re.id = h.uid, P.scheduler = () => Hs(re), Nn(h, !0), y.NODE_ENV !== "production" && (P.onTrack = h.rtc ? (H) => Nr(h.rtc, H) : void 0, P.onTrigger = h.rtg ? (H) => Nr(h.rtg, H) : void 0), O();
  }, J = (h, m, _) => {
    m.component = h;
    const D = h.vnode.props;
    h.vnode = m, h.next = null, Eg(h, m.props, D, _), Pg(h, m.children, _), Nt(), da(h), Ot();
  }, Pe = (h, m, _, D, N, C, B, R, P = !1) => {
    const O = h && h.children, re = h ? h.shapeFlag : 0, H = m.children, { patchFlag: ee, shapeFlag: ie } = m;
    if (ee > 0) {
      if (ee & 128) {
        Me(
          O,
          H,
          _,
          D,
          N,
          C,
          B,
          R,
          P
        );
        return;
      } else if (ee & 256) {
        Se(
          O,
          H,
          _,
          D,
          N,
          C,
          B,
          R,
          P
        );
        return;
      }
    }
    ie & 8 ? (re & 16 && he(O, N, C), H !== O && c(_, H)) : re & 16 ? ie & 16 ? Me(
      O,
      H,
      _,
      D,
      N,
      C,
      B,
      R,
      P
    ) : he(O, N, C, !0) : (re & 8 && c(_, ""), ie & 16 && A(
      H,
      _,
      D,
      N,
      C,
      B,
      R,
      P
    ));
  }, Se = (h, m, _, D, N, C, B, R, P) => {
    h = h || ur, m = m || ur;
    const O = h.length, re = m.length, H = Math.min(O, re);
    let ee;
    for (ee = 0; ee < H; ee++) {
      const ie = m[ee] = P ? tn(m[ee]) : _t(m[ee]);
      b(
        h[ee],
        ie,
        _,
        null,
        N,
        C,
        B,
        R,
        P
      );
    }
    O > re ? he(
      h,
      N,
      C,
      !0,
      !1,
      H
    ) : A(
      m,
      _,
      D,
      N,
      C,
      B,
      R,
      P,
      H
    );
  }, Me = (h, m, _, D, N, C, B, R, P) => {
    let O = 0;
    const re = m.length;
    let H = h.length - 1, ee = re - 1;
    for (; O <= H && O <= ee; ) {
      const ie = h[O], pe = m[O] = P ? tn(m[O]) : _t(m[O]);
      if (Pn(ie, pe))
        b(
          ie,
          pe,
          _,
          null,
          N,
          C,
          B,
          R,
          P
        );
      else
        break;
      O++;
    }
    for (; O <= H && O <= ee; ) {
      const ie = h[H], pe = m[ee] = P ? tn(m[ee]) : _t(m[ee]);
      if (Pn(ie, pe))
        b(
          ie,
          pe,
          _,
          null,
          N,
          C,
          B,
          R,
          P
        );
      else
        break;
      H--, ee--;
    }
    if (O > H) {
      if (O <= ee) {
        const ie = ee + 1, pe = ie < re ? m[ie].el : D;
        for (; O <= ee; )
          b(
            null,
            m[O] = P ? tn(m[O]) : _t(m[O]),
            _,
            pe,
            N,
            C,
            B,
            R,
            P
          ), O++;
      }
    } else if (O > ee)
      for (; O <= H; )
        Y(h[O], N, C, !0), O++;
    else {
      const ie = O, pe = O, ye = /* @__PURE__ */ new Map();
      for (O = pe; O <= ee; O++) {
        const Ze = m[O] = P ? tn(m[O]) : _t(m[O]);
        Ze.key != null && (y.NODE_ENV !== "production" && ye.has(Ze.key) && $(
          "Duplicate keys found during update:",
          JSON.stringify(Ze.key),
          "Make sure keys are unique."
        ), ye.set(Ze.key, O));
      }
      let ge, Le = 0;
      const qe = ee - pe + 1;
      let At = !1, Vt = 0;
      const Cr = new Array(qe);
      for (O = 0; O < qe; O++) Cr[O] = 0;
      for (O = ie; O <= H; O++) {
        const Ze = h[O];
        if (Le >= qe) {
          Y(Ze, N, C, !0);
          continue;
        }
        let Pt;
        if (Ze.key != null)
          Pt = ye.get(Ze.key);
        else
          for (ge = pe; ge <= ee; ge++)
            if (Cr[ge - pe] === 0 && Pn(Ze, m[ge])) {
              Pt = ge;
              break;
            }
        Pt === void 0 ? Y(Ze, N, C, !0) : (Cr[Pt - pe] = O + 1, Pt >= Vt ? Vt = Pt : At = !0, b(
          Ze,
          m[Pt],
          _,
          null,
          N,
          C,
          B,
          R,
          P
        ), Le++);
      }
      const ra = At ? Fg(Cr) : ur;
      for (ge = ra.length - 1, O = qe - 1; O >= 0; O--) {
        const Ze = pe + O, Pt = m[Ze], ia = m[Ze + 1], sa = Ze + 1 < re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ia.el || Ef(ia)
        ) : D;
        Cr[O] === 0 ? b(
          null,
          Pt,
          _,
          sa,
          N,
          C,
          B,
          R,
          P
        ) : At && (ge < 0 || O !== ra[ge] ? Z(Pt, _, sa, 2) : ge--);
      }
    }
  }, Z = (h, m, _, D, N = null) => {
    const { el: C, type: B, transition: R, children: P, shapeFlag: O } = h;
    if (O & 6) {
      Z(h.component.subTree, m, _, D);
      return;
    }
    if (O & 128) {
      h.suspense.move(m, _, D);
      return;
    }
    if (O & 64) {
      B.move(h, m, _, Sr);
      return;
    }
    if (B === Ve) {
      r(C, m, _);
      for (let H = 0; H < P.length; H++)
        Z(P[H], m, _, D);
      r(h.anchor, m, _);
      return;
    }
    if (B === Qi) {
      I(h, m, _);
      return;
    }
    if (D !== 2 && O & 1 && R)
      if (D === 0)
        R.persisted && !C[vt] ? r(C, m, _) : (R.beforeEnter(C), r(C, m, _), Je(() => R.enter(C), N));
      else {
        const { leave: H, delayLeave: ee, afterLeave: ie } = R, pe = () => {
          h.ctx.isUnmounted ? i(C) : r(C, m, _);
        }, ye = () => {
          const ge = C._isLeaving || !!C[vt];
          C._isLeaving && C[vt](
            !0
            /* cancelled */
          ), R.persisted && !ge ? pe() : H(C, () => {
            pe(), ie && ie();
          });
        };
        ee ? ee(C, pe, ye) : ye();
      }
    else
      r(C, m, _);
  }, Y = (h, m, _, D = !1, N = !1) => {
    const {
      type: C,
      props: B,
      ref: R,
      children: P,
      dynamicChildren: O,
      shapeFlag: re,
      patchFlag: H,
      dirs: ee,
      cacheIndex: ie,
      memo: pe
    } = h;
    if (H === -2 && (N = !1), R != null && (Nt(), Gr(R, null, _, h, !0), Ot()), ie != null && (m.renderCache[ie] = void 0), re & 256) {
      m.ctx.deactivate(h);
      return;
    }
    const ye = re & 1 && ee, ge = !dr(h);
    let Le;
    if (ge && (Le = B && B.onVnodeBeforeUnmount) && It(Le, m, h), re & 6)
      Sn(h.component, _, D);
    else {
      if (re & 128) {
        h.suspense.unmount(_, D);
        return;
      }
      ye && Cn(h, null, m, "beforeUnmount"), re & 64 ? h.type.remove(
        h,
        m,
        _,
        Sr,
        D
      ) : O && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !O.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== Ve || H > 0 && H & 64) ? he(
        O,
        m,
        _,
        !1,
        !0
      ) : (C === Ve && H & 384 || !N && re & 16) && he(P, m, _), D && ve(h);
    }
    const qe = pe != null && ie == null;
    (ge && (Le = B && B.onVnodeUnmounted) || ye || qe) && Je(() => {
      Le && It(Le, m, h), ye && Cn(h, null, m, "unmounted"), qe && (h.el = null);
    }, _);
  }, ve = (h) => {
    const { type: m, el: _, anchor: D, transition: N } = h;
    if (m === Ve) {
      y.NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && N && !N.persisted ? h.children.forEach((B) => {
        B.type === Re ? i(B.el) : ve(B);
      }) : En(_, D);
      return;
    }
    if (m === Qi) {
      E(h);
      return;
    }
    const C = () => {
      i(_), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (h.shapeFlag & 1 && N && !N.persisted) {
      const { leave: B, delayLeave: R } = N, P = () => B(_, C);
      R ? R(h.el, C, P) : P();
    } else
      C();
  }, En = (h, m) => {
    let _;
    for (; h !== m; )
      _ = d(h), i(h), h = _;
    i(m);
  }, Sn = (h, m, _) => {
    y.NODE_ENV !== "production" && h.type.__hmrId && kp(h);
    const { bum: D, scope: N, job: C, subTree: B, um: R, m: P, a: O } = h;
    $a(P), $a(O), D && Nr(D), N.stop(), C && (C.flags |= 8, Y(B, h, m, _)), R && Je(R, m), Je(() => {
      h.isUnmounted = !0;
    }, m), y.NODE_ENV !== "production" && Op(h);
  }, he = (h, m, _, D = !1, N = !1, C = 0) => {
    for (let B = C; B < h.length; B++)
      Y(h[B], m, _, D, N);
  }, xt = (h) => {
    if (h.shapeFlag & 6)
      return xt(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const m = d(h.anchor || h.el), _ = m && m[Zu];
    return _ ? d(_) : m;
  };
  let Js = !1;
  const na = (h, m, _) => {
    let D;
    h == null ? m._vnode && (Y(m._vnode, null, null, !0), D = m._vnode.component) : b(
      m._vnode || null,
      h,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = h, Js || (Js = !0, da(D), zu(), Js = !1);
  }, Sr = {
    p: b,
    um: Y,
    m: Z,
    r: ve,
    mt: K,
    mc: A,
    pc: Pe,
    pbc: X,
    n: xt,
    o: e
  };
  return {
    render: na,
    hydrate: void 0,
    createApp: pg(na)
  };
}
function ao({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Nn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Lg(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qr(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Q(r) && Q(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = tn(i[s]), l.el = o.el), !n && l.patchFlag !== -2 && qr(o, l)), l.type === Zn && (l.patchFlag === -1 && (l = i[s] = tn(l)), l.el = o.el), l.type === Re && !l.el && (l.el = o.el), y.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Fg(e) {
  const t = e.slice(), n = [0];
  let r, i, s, o, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (i = n[n.length - 1], e[i] < u) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < u ? s = l + 1 : o = l;
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function _f(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _f(t);
}
function $a(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ef(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ef(t.subTree) : null;
}
const Sf = (e) => e.__isSuspense;
function Bg(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Hu(e);
}
const Ve = /* @__PURE__ */ Symbol.for("v-fgt"), Zn = /* @__PURE__ */ Symbol.for("v-txt"), Re = /* @__PURE__ */ Symbol.for("v-cmt"), Qi = /* @__PURE__ */ Symbol.for("v-stc"), on = [];
let dt = null;
function wt(e = !1) {
  on.push(dt = e ? null : []);
}
function xl() {
  on.pop(), dt = on[on.length - 1] || null;
}
let oi = 1;
function ps(e, t = !1) {
  oi += e, e < 0 && dt && t && (dt.hasOnce = !0);
}
function Cf(e) {
  return e.dynamicChildren = oi > 0 ? dt || ur : null, xl(), oi > 0 && dt && dt.push(e), e;
}
function Nf(e, t, n, r, i, s) {
  return Cf(
    j(
      e,
      t,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function Kt(e, t, n, r, i) {
  return Cf(
    T(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  if (y.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Zi.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Hg = (...e) => Tf(
  ...e
), Of = ({ key: e }) => e ?? null, Ji = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || /* @__PURE__ */ De(e) || ne(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function j(e, t = null, n = null, r = 0, i = null, s = e === Ve ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Of(t),
    ref: t && Ji(t),
    scopeId: Ku,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Be
  };
  if (l ? (ms(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ee(n) ? 8 : 16), y.NODE_ENV !== "production" && a.key !== a.key && $("VNode created with invalid key (NaN). VNode type:", a.type), y.NODE_ENV !== "production" && t && a.shapeFlag & 1) {
    const u = t.innerHTML != null ? "innerHTML" : t.textContent != null ? "textContent" : null;
    u && zg(a.children) && $(
      `The \`${u}\` prop on <${a.type}> will override its children. Remove either the \`${u}\` prop or the children.`
    );
  }
  return oi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && dt.push(a), a;
}
function zg(e) {
  return Ee(e) ? e !== "" : Q(e) ? e.length > 0 : !1;
}
const T = y.NODE_ENV !== "production" ? Hg : Tf;
function Tf(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === Zp) && (y.NODE_ENV !== "production" && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = Re), Gn(e)) {
    const l = Yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ms(l, n), oi > 0 && !s && dt && (l.shapeFlag & 6 ? dt[dt.indexOf(e)] = l : dt.push(l)), l.patchFlag = -2, l;
  }
  if (If(e) && (e = e.__vccOpts), t) {
    t = gs(t);
    let { class: l, style: a } = t;
    l && !Ee(l) && (t.class = ce(l)), ue(a) && (/* @__PURE__ */ pr(a) && !Q(a) && (a = Ae({}, a)), t.style = $e(a));
  }
  const o = Ee(e) ? 1 : Sf(e) ? 128 : zs(e) ? 64 : ue(e) ? 4 : ne(e) ? 2 : 0;
  return y.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ pr(e) && (e = /* @__PURE__ */ se(e), $(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), j(
    e,
    t,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function gs(e) {
  return e ? /* @__PURE__ */ pr(e) || vf(e) ? Ae({}, e) : e : null;
}
function Yt(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: a } = e, u = t ? me(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Of(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Q(s) ? s.concat(Ji(t)) : [s, Ji(t)] : Ji(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: y.NODE_ENV !== "production" && o === -1 && Q(l) ? l.map(Df) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Yt(e.ssContent),
    ssFallback: e.ssFallback && Yt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && Un(
    c,
    a.clone(c)
  ), c;
}
function Df(e) {
  const t = Yt(e);
  return Q(e.children) && (t.children = e.children.map(Df)), t;
}
function jg(e = " ", t = 0) {
  return T(Zn, null, e, t);
}
function $f(e = "", t = !1) {
  return t ? (wt(), Kt(Re, null, e)) : T(Re, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? T(Re) : Q(e) ? T(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gn(e) ? tn(e) : T(Zn, null, String(e));
}
function tn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yt(e);
}
function ms(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ms(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !vf(t) ? t._ctx = Be : i === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ne(t)) {
    if (r & 65) {
      ms(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Be }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [jg(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function me(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = ce([t.class, r.class]));
      else if (i === "style")
        t.style = $e([t.style, r.style]);
      else if (yi(i)) {
        const s = t[i], o = r[i];
        o && s !== o && !(Q(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qr(i) && (t[i] = o);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function It(e, t, n, r = null) {
  bt(e, t, 7, [
    n,
    r
  ]);
}
const Wg = ff();
let Ug = 0;
function Gg(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Wg, s = {
    uid: Ug++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new mu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: bf(r, i),
    emitsOptions: df(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return y.NODE_ENV !== "production" ? s.ctx = ng(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = mg.bind(null, s), e.ce && e.ce(s), s;
}
let Fe = null;
const Qn = () => Fe || Be;
let vs, li;
{
  const e = wi(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Fe = n
  ), li = t(
    "__VUE_SSR_SETTERS__",
    (n) => ai = n
  );
}
const Ei = (e) => {
  const t = Fe;
  return vs(e), e.scope.on(), () => {
    e.scope.off(), vs(t);
  };
}, Aa = () => {
  Fe && Fe.scope.off(), vs(null);
}, qg = /* @__PURE__ */ un("slot,component");
function Fo(e, { isNativeTag: t }) {
  (qg(e) || t(e)) && $(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Af(e) {
  return e.vnode.shapeFlag & 4;
}
let ai = !1;
function Kg(e, t = !1, n = !1) {
  t && li(t);
  const { props: r, children: i } = e.vnode, s = Af(e);
  xg(e, r, s, t), Vg(e, i, n || t);
  const o = s ? Yg(e, t) : void 0;
  return t && li(!1), o;
}
function Yg(e, t) {
  const n = e.type;
  if (y.NODE_ENV !== "production") {
    if (n.name && Fo(n.name, e.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let s = 0; s < i.length; s++)
        Fo(i[s], e.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let s = 0; s < i.length; s++)
        Yu(i[s]);
    }
    n.compilerOptions && Xg() && $(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, af), y.NODE_ENV !== "production" && rg(e);
  const { setup: r } = n;
  if (r) {
    Nt();
    const i = e.setupContext = r.length > 1 ? Pf(e) : null, s = Ei(e), o = yr(
      r,
      e,
      0,
      [
        y.NODE_ENV !== "production" ? /* @__PURE__ */ jt(e.props) : e.props,
        i
      ]
    ), l = sl(o);
    if (Ot(), s(), (l || e.sp) && !dr(e) && rf(e), l) {
      if (o.then(Aa, Aa), t)
        return o.then((a) => {
          li(!0);
          try {
            Va(e, a, t);
          } finally {
            li(!1);
          }
        }).catch((a) => {
          ki(a, e, 0);
        });
      if (e.asyncDep = o, y.NODE_ENV !== "production" && !e.suspense) {
        const a = Si(e, n);
        $(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Va(e, o, t);
  } else
    Vf(e, t);
}
function Va(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) ? (y.NODE_ENV !== "production" && Gn(t) && $(
    "setup() should not return VNodes directly - return a render function instead."
  ), y.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Iu(t), y.NODE_ENV !== "production" && ig(e)) : y.NODE_ENV !== "production" && t !== void 0 && $(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Vf(e, n);
}
const Xg = () => !0;
function Vf(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || We);
  {
    const i = Ei(e);
    Nt();
    try {
      ag(e);
    } finally {
      Ot(), i();
    }
  }
  y.NODE_ENV !== "production" && !r.render && e.render === We && !t && (r.template ? $(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : $("Component is missing template or render function: ", r));
}
const Pa = y.NODE_ENV !== "production" ? {
  get(e, t) {
    return ds(), je(e, "get", ""), e[t];
  },
  set() {
    return $("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return $("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return je(e, "get", ""), e[t];
  }
};
function Zg(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return je(e, "get", "$slots"), t[n];
    }
  });
}
function Pf(e) {
  const t = (n) => {
    if (y.NODE_ENV !== "production" && (e.exposed && $("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (Q(n) ? r = "array" : /* @__PURE__ */ De(n) && (r = "ref")), r !== "object" && $(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (y.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Pa));
      },
      get slots() {
        return r || (r = Zg(e));
      },
      get emit() {
        return (i, ...s) => e.emit(i, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Pa),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Iu(rp(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Fn)
        return Fn[n](e);
    },
    has(t, n) {
      return n in t || n in Fn;
    }
  })) : e.proxy;
}
const Qg = /(?:^|[-_])\w/g, Jg = (e) => e.replace(Qg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function _l(e, t = !0) {
  return ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Si(e, t, n = !1) {
  let r = _l(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e) {
    const i = (s) => {
      for (const o in s)
        if (s[o] === t)
          return o;
    };
    r = i(e.components) || e.parent && i(
      e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? Jg(r) : n ? "App" : "Anonymous";
}
function If(e) {
  return ne(e) && "__vccOpts" in e;
}
const z = (e, t) => {
  const n = /* @__PURE__ */ cp(e, t, ai);
  if (y.NODE_ENV !== "production") {
    const r = Qn();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function kr(e, t, n) {
  try {
    ps(-1);
    const r = arguments.length;
    return r === 2 ? ue(t) && !Q(t) ? Gn(t) ? T(e, null, [t]) : T(e, t) : T(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Gn(n) && (n = [n]), T(e, t, n));
  } finally {
    ps(1);
  }
}
function em() {
  if (y.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!ue(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ De(f)) {
        Nt();
        const d = f.value;
        return Ot(), [
          "div",
          {},
          ["span", e, c(f)],
          "<",
          l(d),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ Mn(f))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ it(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${/* @__PURE__ */ Gt(f) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Gt(f))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ it(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const d = [];
    f.type.props && f.props && d.push(o("props", /* @__PURE__ */ se(f.props))), f.setupState !== we && d.push(o("setup", f.setupState)), f.data !== we && d.push(o("data", /* @__PURE__ */ se(f.data)));
    const p = a(f, "computed");
    p && d.push(o("computed", p));
    const g = a(f, "inject");
    return g && d.push(o("injected", g)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), d;
  }
  function o(f, d) {
    return d = Ae({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((p) => [
          "div",
          {},
          ["span", r, p + ": "],
          l(d[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, d = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : ue(f) ? ["object", { object: d ? /* @__PURE__ */ se(f) : f }] : ["span", n, String(f)];
  }
  function a(f, d) {
    const p = f.type;
    if (ne(p))
      return;
    const g = {};
    for (const b in f.ctx)
      u(p, b, d) && (g[b] = f.ctx[b]);
    return g;
  }
  function u(f, d, p) {
    const g = f[p];
    if (Q(g) && g.includes(d) || ue(g) && d in g || f.extends && u(f.extends, d, p) || f.mixins && f.mixins.some((b) => u(b, d, p)))
      return !0;
  }
  function c(f) {
    return /* @__PURE__ */ it(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Ia = "3.5.42", ct = y.NODE_ENV !== "production" ? $ : We;
var Dt = {};
let Bo;
const Ra = typeof window < "u" && window.trustedTypes;
if (Ra)
  try {
    Bo = /* @__PURE__ */ Ra.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Dt.NODE_ENV !== "production" && ct(`Error creating trusted types policy: ${e}`);
  }
const Rf = Bo ? (e) => Bo.createHTML(e) : (e) => e, tm = "http://www.w3.org/2000/svg", nm = "http://www.w3.org/1998/Math/MathML", Jt = typeof document < "u" ? document : null, Ma = Jt && /* @__PURE__ */ Jt.createElement("template"), rm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Jt.createElementNS(tm, e) : t === "mathml" ? Jt.createElementNS(nm, e) : n ? Jt.createElement(e, { is: n }) : Jt.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Jt.createTextNode(e),
  createComment: (e) => Jt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Jt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Ma.innerHTML = Rf(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ma.content;
      if (r === "svg" || r === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, pn = "transition", $r = "animation", gr = /* @__PURE__ */ Symbol("_vtc"), Mf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Lf = /* @__PURE__ */ Ae(
  {},
  Ju,
  Mf
), im = (e) => (e.displayName = "Transition", e.props = Lf, e), qn = /* @__PURE__ */ im(
  (e, { slots: t }) => kr(Bp, Ff(e), t)
), On = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, La = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ff(e) {
  const t = {};
  for (const V in e)
    V in Mf || (t[V] = e[V]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: i,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = s,
    appearActiveClass: u = o,
    appearToClass: c = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, g = sm(i), b = g && g[0], S = g && g[1], {
    onBeforeEnter: v,
    onEnter: w,
    onEnterCancelled: x,
    onLeave: I,
    onLeaveCancelled: E,
    onBeforeAppear: L = v,
    onAppear: M = w,
    onAppearCancelled: k = x
  } = t, A = (V, F, q, K) => {
    V._enterCancelled = K, mn(V, F ? c : l), mn(V, F ? u : o), q && q();
  }, U = (V, F) => {
    V._isLeaving = !1, mn(V, f), mn(V, p), mn(V, d), F && F();
  }, X = (V) => (F, q) => {
    const K = V ? M : w, oe = () => A(F, V, q);
    On(K, [F, oe]), Fa(() => {
      mn(F, V ? a : s), Rt(F, V ? c : l), La(K) || Ba(F, r, b, oe);
    });
  };
  return Ae(t, {
    onBeforeEnter(V) {
      On(v, [V]), Rt(V, s), Rt(V, o);
    },
    onBeforeAppear(V) {
      On(L, [V]), Rt(V, a), Rt(V, u);
    },
    onEnter: X(!1),
    onAppear: X(!0),
    onLeave(V, F) {
      V._isLeaving = !0;
      const q = () => U(V, F);
      Rt(V, f), V._enterCancelled ? (Rt(V, d), Ho(V)) : (Ho(V), Rt(V, d)), Fa(() => {
        V._isLeaving && (mn(V, f), Rt(V, p), La(I) || Ba(V, r, S, q));
      }), On(I, [V, q]);
    },
    onEnterCancelled(V) {
      A(V, !1, void 0, !0), On(x, [V]);
    },
    onAppearCancelled(V) {
      A(V, !0, void 0, !0), On(k, [V]);
    },
    onLeaveCancelled(V) {
      U(V), On(E, [V]);
    }
  });
}
function sm(e) {
  if (e == null)
    return null;
  if (ue(e))
    return [co(e.enter), co(e.leave)];
  {
    const t = co(e);
    return [t, t];
  }
}
function co(e) {
  const t = Eh(e);
  return Dt.NODE_ENV !== "production" && mp(t, "<transition> explicit duration"), t;
}
function Rt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[gr] || (e[gr] = /* @__PURE__ */ new Set())).add(t);
}
function mn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[gr];
  n && (n.delete(t), n.size || (e[gr] = void 0));
}
function Fa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let om = 0;
function Ba(e, t, n, r) {
  const i = e._endId = ++om, s = () => {
    i === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: o, timeout: l, propCount: a } = Bf(e, t);
  if (!o)
    return r();
  const u = o + "end";
  let c = 0;
  const f = () => {
    e.removeEventListener(u, d), s();
  }, d = (p) => {
    p.target === e && ++c >= a && f();
  };
  setTimeout(() => {
    c < a && f();
  }, l + 1), e.addEventListener(u, d);
}
function Bf(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), i = r(`${pn}Delay`), s = r(`${pn}Duration`), o = Ha(i, s), l = r(`${$r}Delay`), a = r(`${$r}Duration`), u = Ha(l, a);
  let c = null, f = 0, d = 0;
  t === pn ? o > 0 && (c = pn, f = o, d = s.length) : t === $r ? u > 0 && (c = $r, f = u, d = a.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? pn : $r : null, d = c ? c === pn ? s.length : a.length : 0);
  const p = c === pn && /\b(?:transform|all)(?:,|$)/.test(
    r(`${pn}Property`).toString()
  );
  return {
    type: c,
    timeout: f,
    propCount: d,
    hasTransform: p
  };
}
function Ha(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => za(n) + za(e[r])));
}
function za(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ho(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function lm(e, t, n) {
  const r = e[gr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ys = /* @__PURE__ */ Symbol("_vod"), El = /* @__PURE__ */ Symbol("_vsh"), Sl = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ys] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ar(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ar(e, !0), r.enter(e)) : r.leave(e, () => {
      Ar(e, !1);
    }) : Ar(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ar(e, t);
  }
};
function Ar(e, t) {
  e.style.display = t ? e[ys] : "none", e[El] = !t;
}
const am = /* @__PURE__ */ Symbol(Dt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), cm = /(?:^|;)\s*display\s*:/;
function um(e, t, n) {
  const r = e.style, i = Ee(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Ee(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Fr(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Fr(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? hm(
        e,
        o,
        !Ee(t) && t ? t[o] : void 0,
        l
      ) || Fr(r, o, l) : Fr(r, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = r[am];
      o && (n += ";" + o), r.cssText = n, s = cm.test(n);
    }
  } else t && e.removeAttribute("style");
  ys in e && (e[ys] = s ? r.display : "", e[El] && (r.display = "none"));
}
const fm = /[^\\];\s*$/, Wi = /\s*!important$/;
function Fr(e, t, n) {
  if (Q(n))
    n.forEach((r) => Fr(e, t, r));
  else if (n == null && (n = ""), Dt.NODE_ENV !== "production" && fm.test(n) && ct(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    Wi.test(n) ? e.setProperty(t, n.replace(Wi, ""), "important") : e.setProperty(t, n);
  else {
    const r = dm(e, t);
    Wi.test(n) ? e.setProperty(
      wn(r),
      n.replace(Wi, ""),
      "important"
    ) : e[r] = n;
  }
}
const ja = ["Webkit", "Moz", "ms"], uo = {};
function dm(e, t) {
  const n = uo[t];
  if (n)
    return n;
  let r = Ue(t);
  if (r !== "filter" && r in e)
    return uo[t] = r;
  r = ln(r);
  for (let i = 0; i < ja.length; i++) {
    const s = ja[i] + r;
    if (s in e)
      return uo[t] = s;
  }
  return t;
}
function hm(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ee(r) && n === r;
}
const Wa = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, r, i, s = Rh(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wa, t.slice(6, t.length)) : e.setAttributeNS(Wa, t, n) : n == null || s && !hu(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : ut(n) ? String(n) : n
  );
}
function Ga(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Rf(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = hu(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Dt.NODE_ENV !== "production" && !o && ct(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  o && e.removeAttribute(i || t);
}
function pm(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function gm(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const qa = /* @__PURE__ */ Symbol("_vei");
function mm(e, t, n, r, i = null) {
  const s = e[qa] || (e[qa] = {}), o = s[t];
  if (r && o)
    o.value = Dt.NODE_ENV !== "production" ? Ka(r, t) : r;
  else {
    const [l, a] = bm(t);
    if (r) {
      const u = s[t] = xm(
        Dt.NODE_ENV !== "production" ? Ka(r, t) : r,
        i
      );
      pm(e, l, u, a);
    } else o && (gm(e, l, o, a), s[t] = void 0);
  }
}
const vm = /(Once|Passive|Capture)$/, ym = /^on:?(?:Once|Passive|Capture)$/;
function bm(e) {
  let t, n;
  for (; (n = e.match(vm)) && !ym.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wn(e.slice(2)), t];
}
let fo = 0;
const wm = /* @__PURE__ */ Promise.resolve(), km = () => fo || (wm.then(() => fo = 0), fo = Date.now());
function xm(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (Q(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const o = i.slice(), l = [r];
      for (let a = 0; a < o.length && !r._stopped; a++) {
        const u = o[a];
        u && bt(
          u,
          t,
          5,
          l
        );
      }
    } else
      bt(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = km(), n;
}
function Ka(e, t) {
  return ne(e) || Q(e) ? e : (ct(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), We);
}
const Ya = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _m = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? lm(e, r, o) : t === "style" ? um(e, n, r) : yi(t) ? Qr(t) || mm(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Em(e, t, r, o)) ? (Ga(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ua(e, t, r, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Sm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ee(r))) ? Ga(e, Ue(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ua(e, t, r, o));
};
function Em(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ya(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ya(t) && Ee(n) ? !1 : t in e;
}
function Sm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Ue(t);
  return Array.isArray(n) ? n.some((i) => Ue(i) === r) : Object.keys(n).some((i) => Ue(i) === r);
}
const Hf = /* @__PURE__ */ new WeakMap(), zf = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ Symbol("_moveCb"), Xa = /* @__PURE__ */ Symbol("_enterCb"), Cm = (e) => (delete e.props.mode, e), Nm = /* @__PURE__ */ Cm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Ae({}, Lf, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Qn(), r = Qu();
    let i, s;
    return vl(() => {
      if (!i.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!$m(
        i[0].el,
        n.vnode.el,
        o
      )) {
        i = [];
        return;
      }
      i.forEach(Om), i.forEach(Tm);
      const l = i.filter(Dm);
      Ho(n.vnode.el), l.forEach((a) => {
        const u = a.el, c = u.style;
        Rt(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
        const f = u[bs] = (d) => {
          d && d.target !== u || (!d || d.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[bs] = null, mn(u, o));
        };
        u.addEventListener("transitionend", f);
      }), i = [];
    }), () => {
      const o = /* @__PURE__ */ se(e), l = Ff(o);
      let a = o.tag || Ve;
      if (i = [], s)
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && // Hidden v-show nodes have no previous layout box to animate from.
          !c.el[El] && (i.push(c), Un(
            c,
            si(
              c,
              l,
              r,
              n
            )
          ), Hf.set(c, jf(c.el)));
        }
      s = t.default ? ml(t.default()) : [];
      for (let u = 0; u < s.length; u++) {
        const c = s[u];
        c.key != null ? Un(
          c,
          si(c, l, r, n)
        ) : Dt.NODE_ENV !== "production" && c.type !== Zn && ct("<TransitionGroup> children must be keyed.");
      }
      return T(a, null, s);
    };
  }
}), Cl = Nm;
function Om(e) {
  const t = e.el;
  t[bs] && t[bs](), t[Xa] && t[Xa]();
}
function Tm(e) {
  zf.set(e, jf(e.el));
}
function Dm(e) {
  const t = Hf.get(e), n = zf.get(e), r = t.left - n.left, i = t.top - n.top;
  if (r || i) {
    const s = e.el, o = s.style, l = s.getBoundingClientRect();
    let a = 1, u = 1;
    return s.offsetWidth && (a = l.width / s.offsetWidth), s.offsetHeight && (u = l.height / s.offsetHeight), (!Number.isFinite(a) || a === 0) && (a = 1), (!Number.isFinite(u) || u === 0) && (u = 1), Math.abs(a - 1) < 0.01 && (a = 1), Math.abs(u - 1) < 0.01 && (u = 1), o.transform = o.webkitTransform = `translate(${r / a}px,${i / u}px)`, o.transitionDuration = "0s", e;
  }
}
function jf(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function $m(e, t, n) {
  const r = e.cloneNode(), i = e[gr];
  i && i.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && r.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && r.classList.add(l)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: o } = Bf(r);
  return s.removeChild(r), o;
}
const Am = /* @__PURE__ */ Ae({ patchProp: _m }, rm);
let Za;
function Vm() {
  return Za || (Za = Rg(Am));
}
const Pm = ((...e) => {
  const t = Vm().createApp(...e);
  Dt.NODE_ENV !== "production" && (Rm(t), Mm(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const i = Lm(r);
    if (!i) return;
    const s = t._component;
    !ne(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Im(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Im(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Rm(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ah(t) || Vh(t) || Ph(t),
    writable: !1
  });
}
function Mm(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ct(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ct(r), n;
      },
      set() {
        ct(r);
      }
    });
  }
}
function Lm(e) {
  if (Ee(e)) {
    const t = document.querySelector(e);
    return Dt.NODE_ENV !== "production" && !t && ct(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Dt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ct(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Fm = {};
function Bm() {
  em();
}
Fm.NODE_ENV !== "production" && Bm();
function Ut(e) {
  ct(`Vuetify: ${e}`);
}
function ws(e) {
  ct(`Vuetify error: ${e}`);
}
function Hm(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, ct(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const Ne = typeof window < "u", Nl = Ne && "IntersectionObserver" in window, zm = Ne && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Wf = Ne && "matchMedia" in window && typeof window.matchMedia == "function", ci = () => Wf && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Qa = Ne && CSS?.supports?.("-webkit-backdrop-filter", "none");
function Ja(e, t, n) {
  jm(e, t), t.set(e, n);
}
function jm(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ec(e, t, n) {
  return e.set(Uf(e, t), n), n;
}
function Qt(e, t) {
  return e.get(Uf(e, t));
}
function Uf(e, t, n) {
  if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function Wm(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let i = 0; i < r; i++) {
    if (e == null)
      return n;
    e = e[t[i]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function tc(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Wm(e, t.split("."), n));
}
function Gf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, r) => t + r);
}
function le(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const n = Number(e);
  return isNaN(n) ? String(e) : isFinite(n) ? `${n}${t}` : void 0;
}
function zo(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function nc(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function qf(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
function ho(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Um(e, t) {
  const n = {};
  for (const r of t)
    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function Kf(e, t) {
  const n = {
    ...e
  };
  return t.forEach((r) => delete n[r]), n;
}
const Gm = /^on[^a-z]/, Yf = (e) => Gm.test(e);
function qm(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function rc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function ic(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Km(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; )
    n.push(e.substr(r, t)), r += t;
  return n;
}
function Ke() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const i in e)
    r[i] = e[i];
  for (const i in t) {
    const s = e[i], o = t[i];
    if (nc(s) && nc(o)) {
      r[i] = Ke(s, o, n);
      continue;
    }
    if (n && Array.isArray(s) && Array.isArray(o)) {
      r[i] = n(s, o);
      continue;
    }
    r[i] = o;
  }
  return r;
}
function Xf(e) {
  return e.map((t) => t.type === Ve ? Xf(t.children) : t).flat();
}
function Bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Bn.cache.has(e)) return Bn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Bn.cache.set(e, t), t;
}
Bn.cache = /* @__PURE__ */ new Map();
function Br(e, t) {
  if (!t || typeof t != "object") return [];
  if (Array.isArray(t))
    return t.map((n) => Br(e, n)).flat(1);
  if (t.suspense)
    return Br(e, t.ssContent);
  if (Array.isArray(t.children))
    return t.children.map((n) => Br(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertyDescriptor(t.component.provides, e))
      return [t.component];
    if (t.component.subTree)
      return Br(e, t.component.subTree).flat(1);
  }
  return [];
}
var or = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap();
class Ym {
  constructor(t) {
    Ja(this, or, []), Ja(this, Tn, 0), this.size = t;
  }
  get isFull() {
    return Qt(or, this).length === this.size;
  }
  push(t) {
    Qt(or, this)[Qt(Tn, this)] = t, ec(Tn, this, (Qt(Tn, this) + 1) % this.size);
  }
  values() {
    return Qt(or, this).slice(Qt(Tn, this)).concat(Qt(or, this).slice(0, Qt(Tn, this)));
  }
  clear() {
    Qt(or, this).length = 0, ec(Tn, this, 0);
  }
}
function Ol(e) {
  const t = /* @__PURE__ */ yt({});
  qt(() => {
    const r = e();
    for (const i in r)
      t[i] = r[i];
  }, {
    flush: "sync"
  });
  const n = {};
  for (const r in t)
    n[r] = /* @__PURE__ */ W(() => t[r]);
  return n;
}
function ks(e, t) {
  return e.includes(t);
}
function Zf(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const sc = () => [Function, Array];
function oc(e, t) {
  return t = "on" + ln(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Kr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "details:not(:has(> summary))", "details > summary", "[tabindex]", '[contenteditable]:not([contenteditable="false"])', "audio[controls]", "video[controls]"].map((i) => `${i}${t ? ':not([tabindex="-1"])' : ""}:not([disabled], [inert])`).join(", ");
  let r;
  try {
    r = [...e.querySelectorAll(n)];
  } catch (i) {
    return ws(String(i)), [];
  }
  return r.filter((i) => !i.closest("[inert]")).filter((i) => !!i.offsetParent || i.getClientRects().length > 0).filter((i) => !i.parentElement?.closest("details:not([open])") || i.tagName === "SUMMARY" && i.parentElement?.tagName === "DETAILS");
}
function Xm(e, t) {
  if (!(Ne && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Zm(e, t) {
  if (!Ne || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
function jo() {
  const e = /* @__PURE__ */ ke(), t = (n) => {
    e.value = n;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (n) => e.value = n
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => qf(e.value)
  }), t;
}
function xs(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function Qm(e) {
  const t = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((n) => {
    let [r, i] = n;
    return t.includes(r) ? !!i : i !== void 0;
  }));
}
const Qf = ["top", "bottom"], Jm = ["start", "end", "left", "right"];
function Wo(e, t) {
  let [n, r] = e.split(" ");
  return r || (r = ks(Qf, n) ? "start" : ks(Jm, n) ? "top" : "center"), {
    side: lc(n, t),
    align: lc(r, t)
  };
}
function lc(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function po(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function go(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function ac(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function cc(e) {
  return ks(Qf, e.side) ? "y" : "x";
}
class ht {
  constructor(t) {
    const n = document.body.currentCSSZoom ?? 1, r = t instanceof Element, i = r ? 1 + (1 - n) / n : 1, {
      x: s,
      y: o,
      width: l,
      height: a
    } = r ? t.getBoundingClientRect() : t;
    this.x = s * i, this.y = o * i, this.width = l * i, this.height = a * i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function uc(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function Tl(e) {
  if (Array.isArray(e)) {
    const t = document.body.currentCSSZoom ?? 1, n = 1 + (1 - t) / t;
    return new ht({
      x: e[0] * n,
      y: e[1] * n,
      width: 0 * n,
      height: 0 * n
    });
  } else
    return new ht(e);
}
function ev(e) {
  return e === document.documentElement ? visualViewport ? new ht({
    x: visualViewport.scale > 1 || Qa ? 0 : visualViewport.offsetLeft,
    y: visualViewport.scale > 1 || Qa ? 0 : visualViewport.offsetTop,
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }) : new ht({
    x: 0,
    y: 0,
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }) : new ht(e);
}
function Jf(e) {
  const t = new ht(e), n = getComputedStyle(e), r = n.transform;
  if (r) {
    let i, s, o, l, a;
    if (r.startsWith("matrix3d("))
      i = r.slice(9, -1).split(/, /), s = Number(i[0]), o = Number(i[5]), l = Number(i[12]), a = Number(i[13]);
    else if (r.startsWith("matrix("))
      i = r.slice(7, -1).split(/, /), s = Number(i[0]), o = Number(i[3]), l = Number(i[4]), a = Number(i[5]);
    else
      return new ht(t);
    const u = n.transformOrigin, c = t.x - l - (1 - s) * parseFloat(u), f = t.y - a - (1 - o) * parseFloat(u.slice(u.indexOf(" ") + 1)), d = s ? t.width / s : e.offsetWidth + 1, p = o ? t.height / o : e.offsetHeight + 1;
    return new ht({
      x: c,
      y: f,
      width: d,
      height: p
    });
  } else
    return new ht(t);
}
function Vn(e, t, n) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let r;
  try {
    r = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof r.finished > "u" && (r.finished = new Promise((i) => {
    r.onfinish = () => {
      i(r);
    };
  })), r;
}
const es = /* @__PURE__ */ new WeakMap();
function tv(e, t) {
  Object.keys(t).forEach((n) => {
    if (Yf(n)) {
      const r = Zf(n), i = es.get(e);
      if (t[n] == null)
        i?.forEach((s) => {
          const [o, l] = s;
          o === r && (e.removeEventListener(r, l), i.delete(s));
        });
      else if (!i || ![...i].some((s) => s[0] === r && s[1] === t[n])) {
        e.addEventListener(r, t[n]);
        const s = i || /* @__PURE__ */ new Set();
        s.add([r, t[n]]), es.has(e) || es.set(e, s);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function nv(e, t) {
  Object.keys(t).forEach((n) => {
    if (Yf(n)) {
      const r = Zf(n), i = es.get(e);
      i?.forEach((s) => {
        const [o, l] = s;
        o === r && (e.removeEventListener(r, l), i.delete(s));
      });
    } else
      e.removeAttribute(n);
  });
}
const lr = 2.4, fc = 0.2126729, dc = 0.7151522, hc = 0.072175, rv = 0.55, iv = 0.58, sv = 0.57, ov = 0.62, Ui = 0.03, pc = 1.45, lv = 5e-4, av = 1.25, cv = 1.25, gc = 0.078, mc = 12.82051282051282, Gi = 0.06, vc = 1e-3;
function yc(e, t) {
  const n = (e.r / 255) ** lr, r = (e.g / 255) ** lr, i = (e.b / 255) ** lr, s = (t.r / 255) ** lr, o = (t.g / 255) ** lr, l = (t.b / 255) ** lr;
  let a = n * fc + r * dc + i * hc, u = s * fc + o * dc + l * hc;
  if (a <= Ui && (a += (Ui - a) ** pc), u <= Ui && (u += (Ui - u) ** pc), Math.abs(u - a) < lv) return 0;
  let c;
  if (u > a) {
    const f = (u ** rv - a ** iv) * av;
    c = f < vc ? 0 : f < gc ? f - f * mc * Gi : f - Gi;
  } else {
    const f = (u ** ov - a ** sv) * cv;
    c = f > -vc ? 0 : f > -gc ? f - f * mc * Gi : f + Gi;
  }
  return c * 100;
}
const _s = 0.20689655172413793, uv = (e) => e > _s ** 3 ? Math.cbrt(e) : e / (3 * _s ** 2) + 4 / 29, fv = (e) => e > _s ? e ** 3 : 3 * _s ** 2 * (e - 4 / 29);
function ed(e) {
  const t = uv, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function td(e) {
  const t = fv, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const dv = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], hv = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, pv = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], gv = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function nd(e) {
  const t = Array(3), n = hv, r = dv;
  for (let i = 0; i < 3; ++i)
    t[i] = Math.round(cn(n(r[i][0] * e[0] + r[i][1] * e[1] + r[i][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function Dl(e) {
  let {
    r: t,
    g: n,
    b: r
  } = e;
  const i = [0, 0, 0], s = gv, o = pv;
  t = s(t / 255), n = s(n / 255), r = s(r / 255);
  for (let l = 0; l < 3; ++l)
    i[l] = o[l][0] * t + o[l][1] * n + o[l][2] * r;
  return i;
}
function Uo(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function mv(e) {
  return Uo(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const bc = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, vv = {
  rgb: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  rgba: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  hsl: (e, t, n, r) => wc({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsla: (e, t, n, r) => wc({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsv: (e, t, n, r) => ui({
    h: e,
    s: t,
    v: n,
    a: r
  }),
  hsva: (e, t, n, r) => ui({
    h: e,
    s: t,
    v: n,
    a: r
  })
};
function Wt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ut(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && bc.test(e)) {
    const {
      groups: t
    } = e.match(bc), {
      fn: n,
      values: r
    } = t, i = r.split(/,\s*|\s*\/\s*|\s+/).map((s, o) => s.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(s) / 100 : parseFloat(s));
    return vv[n](...i);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length) || Ut(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Ut(`'${e}' is not a valid hex(a) color`), bv(t);
  } else if (typeof e == "object") {
    if (ho(e, ["r", "g", "b"]))
      return e;
    if (ho(e, ["h", "s", "l"]))
      return ui(rd(e));
    if (ho(e, ["h", "s", "v"]))
      return ui(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ui(e) {
  const {
    h: t,
    s: n,
    v: r,
    a: i
  } = e, s = (l) => {
    const a = (l + t / 60) % 6;
    return r - r * n * Math.max(Math.min(a, 4 - a, 1), 0);
  }, o = [s(5), s(3), s(1)].map((l) => Math.round(l * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: i
  };
}
function wc(e) {
  return ui(rd(e));
}
function rd(e) {
  const {
    h: t,
    s: n,
    l: r,
    a: i
  } = e, s = r + n * Math.min(r, 1 - r), o = s === 0 ? 0 : 2 - 2 * r / s;
  return {
    h: t,
    s: o,
    v: s,
    a: i
  };
}
function qi(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function yv(e) {
  let {
    r: t,
    g: n,
    b: r,
    a: i
  } = e;
  return `#${[qi(t), qi(n), qi(r), i !== void 0 ? qi(Math.round(i * 255)) : ""].join("")}`;
}
function bv(e) {
  e = wv(e);
  let [t, n, r, i] = Km(e, 2).map((s) => parseInt(s, 16));
  return i = i === void 0 ? i : i / 255, {
    r: t,
    g: n,
    b: r,
    a: i
  };
}
function wv(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = rc(rc(e, 6), 8, "F")), e;
}
function kv(e, t) {
  const n = ed(Dl(e));
  return n[0] = n[0] + t * 10, nd(td(n));
}
function xv(e, t) {
  const n = ed(Dl(e));
  return n[0] = n[0] - t * 10, nd(td(n));
}
function _v(e) {
  const t = Wt(e);
  return Dl(t)[1];
}
function id(e) {
  const t = Math.abs(yc(Wt(0), Wt(e)));
  return Math.abs(yc(Wt(16777215), Wt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function te(e, t) {
  return (n) => Object.keys(e).reduce((r, i) => {
    const o = typeof e[i] == "object" && e[i] != null && !Array.isArray(e[i]) ? e[i] : {
      type: e[i]
    };
    return n && i in n ? r[i] = {
      ...o,
      default: n[i]
    } : r[i] = o, t && !r[i].source && (r[i].source = t), r;
  }, {});
}
const He = te({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Xe(e, t) {
  const n = Qn();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function kn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Xe(e).type;
  return Bn(t?.aliasName || t?.name);
}
function Ev(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const mr = /* @__PURE__ */ Symbol.for("vuetify:defaults");
function Sv(e) {
  return /* @__PURE__ */ Ie(e);
}
function $l() {
  const e = st(mr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function qs(e, t) {
  const n = $l(), r = /* @__PURE__ */ Ie(e), i = z(() => {
    if (yn(t?.disabled)) return n.value;
    const o = yn(t?.scoped), l = yn(t?.reset), a = yn(t?.root);
    if (r.value == null && !(o || l || a)) return n.value;
    let u = Ke(r.value, {
      prev: n.value
    });
    if (o) return u;
    if (l || a) {
      const c = Number(l || 1 / 0);
      for (let f = 0; f <= c && !(!u || !("prev" in u)); f++)
        u = u.prev;
      return u && typeof a == "string" && a in u && (u = Ke(Ke(u, {
        prev: u
      }), u[a])), u;
    }
    return u.prev ? Ke(u.prev, u) : u;
  });
  return Yn(mr, i), i;
}
function Cv(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Bn(t)] < "u");
}
function Nv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $l();
  const r = Xe("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const i = z(() => n.value?.[e._as ?? t]), s = new Proxy(e, {
    get(a, u) {
      const c = Reflect.get(a, u);
      if (u === "class" || u === "style")
        return [i.value?.[u], c].filter((p) => p != null);
      if (Cv(r.vnode, u)) return c;
      const f = i.value?.[u];
      if (f !== void 0) return f;
      const d = n.value?.global?.[u];
      return d !== void 0 ? d : c;
    }
  }), o = /* @__PURE__ */ ke();
  qt(() => {
    if (i.value) {
      const a = Object.entries(i.value).filter((u) => {
        let [c] = u;
        return c.startsWith(c[0].toUpperCase());
      });
      o.value = a.length ? Object.fromEntries(a) : void 0;
    } else
      o.value = void 0;
  });
  function l() {
    const a = Ev(mr, r);
    Yn(mr, z(() => o.value ? Ke(a?.value ?? {}, o.value) : a?.value));
  }
  return {
    props: s,
    provideSubDefaults: l
  };
}
function Ci(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ut("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = te(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return Um(r, t);
    }, e.props._as = String, e.setup = function(r, i) {
      const s = $l();
      if (!s.value) return e._setup(r, i);
      const {
        props: o,
        provideSubDefaults: l
      } = Nv(r, r._as ?? e.name, s), a = e._setup(o, i);
      return l(), a;
    };
  }
  return e;
}
function Oe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Ci : Xt)(t);
}
function sd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Oe()({
    name: n ?? ln(Ue(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...He()
    },
    setup(r, i) {
      let {
        slots: s
      } = i;
      return () => kr(r.tag, {
        class: [e, r.class],
        style: r.style
      }, s.default?.());
    }
  });
}
function Ov(e, t, n, r) {
  if (!n || xs(e) || xs(t)) return;
  const i = n.get(e);
  if (i)
    i.set(t, r);
  else {
    const s = /* @__PURE__ */ new WeakMap();
    s.set(t, r), n.set(e, s);
  }
}
function Tv(e, t, n) {
  if (!n || xs(e) || xs(t)) return null;
  const r = n.get(e)?.get(t);
  if (typeof r == "boolean") return r;
  const i = n.get(t)?.get(e);
  return typeof i == "boolean" ? i : null;
}
function Hn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new WeakMap();
  if (e === t) return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !1;
  const i = Tv(e, t, n);
  return i || (Ov(e, t, n, !0), r.every((s) => Hn(e[s], t[s], n)));
}
function od(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Go = "cubic-bezier(0.4, 0, 0.2, 1)", kc = "cubic-bezier(0.0, 0, 0.2, 1)", xc = "cubic-bezier(0.4, 0, 1, 1)", Dv = {
  linear: (e) => e,
  easeInQuad: (e) => e ** 2,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e ** 3,
  easeOutCubic: (e) => --e ** 3 + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e ** 4,
  easeOutQuart: (e) => 1 - --e ** 4,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
  easeInQuint: (e) => e ** 5,
  easeOutQuint: (e) => 1 + --e ** 5,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5,
  instant: (e) => 1
};
function $v(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Av(e) : Al(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Es(e, t) {
  const n = [];
  if (t && e && !t.contains(e)) return n;
  for (; e && (Al(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Al(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e), n = t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight, r = t.overflowX === "scroll" || t.overflowX === "auto" && e.scrollWidth > e.clientWidth;
  return n || r;
}
function Av(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Vv(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Ge(e) {
  const t = Xe("useRender");
  t.render = e;
}
const Ye = [String, Function, Object, Array], qo = /* @__PURE__ */ Symbol.for("vuetify:icons"), Ks = te({
  icon: {
    type: Ye
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), _c = Oe()({
  name: "VComponentIcon",
  props: Ks(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const r = e.icon;
      return T(e.tag, null, {
        default: () => [e.icon ? T(r, null, null) : n.default?.()]
      });
    };
  }
}), ld = Ci({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Ks(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => T(e.tag, me(n, {
      style: null
    }), {
      default: () => [j("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? j("path", {
        d: r[0],
        "fill-opacity": r[1]
      }, null) : j("path", {
        d: r
      }, null)) : j("path", {
        d: e.icon
      }, null)])]
    });
  }
});
Ci({
  name: "VLigatureIcon",
  props: Ks(),
  setup(e) {
    return () => T(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const ad = Ci({
  name: "VClassIcon",
  props: Ks(),
  setup(e) {
    return () => T(e.tag, {
      class: ce(e.icon)
    }, null);
  }
}), Pv = (e) => {
  const t = st(qo);
  if (!t) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: z(() => {
      const r = Tt(e);
      if (!r) return {
        component: _c
      };
      let i = r;
      if (typeof i == "string" && (i = i.trim(), i.startsWith("$") && (i = t.aliases?.[i.slice(1)])), i || Ut(`Could not find aliased icon "${r}"`), Array.isArray(i))
        return {
          component: ld,
          icon: i
        };
      if (typeof i != "string")
        return {
          component: _c,
          icon: i
        };
      const s = Object.keys(t.sets).find((a) => typeof i == "string" && i.startsWith(`${a}:`)), o = s ? i.slice(s.length + 1) : i;
      return {
        component: t.sets[s ?? t.defaultSet].component,
        icon: o
      };
    })
  };
}, Iv = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  tableGroupCollapse: "mdi-chevron-down",
  tableGroupExpand: "mdi-chevron-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload",
  color: "mdi-palette",
  command: "mdi-apple-keyboard-command",
  ctrl: "mdi-apple-keyboard-control",
  space: "mdi-keyboard-space",
  shift: "mdi-apple-keyboard-shift",
  alt: "mdi-apple-keyboard-option",
  enter: "mdi-keyboard-return",
  arrowup: "mdi-arrow-up",
  arrowdown: "mdi-arrow-down",
  arrowleft: "mdi-arrow-left",
  arrowright: "mdi-arrow-right",
  backspace: "mdi-backspace",
  play: "mdi-play",
  pause: "mdi-pause",
  fullscreen: "mdi-fullscreen",
  fullscreenExit: "mdi-fullscreen-exit",
  volumeHigh: "mdi-volume-high",
  volumeMedium: "mdi-volume-medium",
  volumeLow: "mdi-volume-low",
  volumeOff: "mdi-volume-variant-off",
  search: "mdi-magnify"
}, Rv = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => kr(ad, {
    ...e,
    class: "mdi"
  })
};
function Mv() {
  return {
    svg: {
      component: ld
    },
    class: {
      component: ad
    }
  };
}
function Lv(e) {
  const t = Mv(), n = e?.defaultSet ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = Rv), Ke({
    defaultSet: n,
    sets: t,
    aliases: {
      ...Iv,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
function Ni(e, t) {
  let n;
  function r() {
    n = Jr(), n.run(() => t.length ? t(() => {
      n?.stop(), r();
    }) : t());
  }
  ae(e, (i) => {
    i && !n ? r() : i || (n?.stop(), n = void 0);
  }, {
    immediate: !0
  }), ot(() => {
    n?.stop();
  });
}
function Jn(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const s = Xe("useProxiedModel"), o = /* @__PURE__ */ Ie(e[t] !== void 0 ? e[t] : n), l = Bn(t), u = z(l !== t ? () => (e[t], !!((s.vnode.props?.hasOwnProperty(t) || s.vnode.props?.hasOwnProperty(l)) && (s.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || s.vnode.props?.hasOwnProperty(`onUpdate:${l}`)))) : () => (e[t], !!(s.vnode.props?.hasOwnProperty(t) && s.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  Ni(() => !u.value, () => {
    ae(() => e[t], (f) => {
      o.value = f;
    });
  });
  const c = z({
    get() {
      const f = e[t];
      return r(u.value ? f : o.value);
    },
    set(f) {
      const d = i(f), p = /* @__PURE__ */ se(u.value ? e[t] : o.value);
      p === d || r(p) === f || (o.value = d, s?.emit(`update:${t}`, d));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => u.value ? e[t] : o.value
  }), c;
}
const Fv = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending.",
      selectRow: "Select row",
      selectAll: "Select all",
      selectGroup: "Select group"
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    },
    ariaLabel: {
      previousMonth: "Previous month",
      nextMonth: "Next month",
      selectYear: "Select year",
      previousYear: "Previous year",
      nextYear: "Next year",
      selectMonth: "Select month",
      selectDate: "{0}",
      // Full date format
      currentDate: "Today, {0}"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time",
    hour: "Hour",
    minute: "Minute",
    second: "Second",
    notAllowed: "Value is not allowed"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  },
  command: {
    search: "Type a command or search..."
  },
  hotkey: {
    then: "then",
    ctrl: "Ctrl",
    command: "Command",
    space: "Space",
    shift: "Shift",
    alt: "Alt",
    enter: "Enter",
    escape: "Escape",
    upArrow: "Up Arrow",
    downArrow: "Down Arrow",
    leftArrow: "Left Arrow",
    rightArrow: "Right Arrow",
    backspace: "Backspace",
    option: "Option",
    plus: "plus",
    shortcut: "Keyboard shortcut: {0}",
    or: "or"
  },
  video: {
    play: "Play",
    pause: "Pause",
    seek: "Seek",
    volume: "Volume",
    showVolume: "Show volume control",
    mute: "Mute",
    unmute: "Unmute",
    enterFullscreen: "Full screen",
    exitFullscreen: "Exit full screen"
  },
  colorPicker: {
    ariaLabel: {
      eyedropper: "Select color with eyedropper",
      hueSlider: "Hue",
      alphaSlider: "Alpha",
      redInput: "Red value",
      greenInput: "Green value",
      blueInput: "Blue value",
      alphaInput: "Alpha value",
      hueInput: "Hue value",
      saturationInput: "Saturation value",
      lightnessInput: "Lightness value",
      hexInput: "HEX value",
      hexaInput: "HEX with alpha value",
      changeFormat: "Change color format"
    }
  }
}, Ec = "$vuetify.", Sc = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), cd = (e, t, n) => function(r) {
  for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
    s[o - 1] = arguments[o];
  if (!r.startsWith(Ec))
    return Sc(r, s);
  const l = r.replace(Ec, ""), a = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let c = tc(a, l, null);
  return c || (Ut(`Translation key "${r}" not found in "${e.value}", trying fallback locale`), c = tc(u, l, null)), c || (ws(`Translation key "${r}" not found in fallback`), c = r), typeof c != "string" && (ws(`Translation key "${r}" has a non-string value`), c = r), Sc(c, s);
};
function Vl(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function ud(e, t) {
  return Vl(e, t)(0.1).includes(",") ? "," : ".";
}
function mo(e, t, n) {
  const r = Jn(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, ae(n, (i) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function fd(e) {
  return (t) => {
    const n = mo(t, "locale", e.current), r = mo(t, "fallback", e.fallback), i = mo(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: r,
      messages: i,
      decimalSeparator: /* @__PURE__ */ W(() => ud(n, r)),
      t: cd(n, r, i),
      n: Vl(n, r),
      provide: fd({
        current: n,
        fallback: r,
        messages: i
      })
    };
  };
}
function Bv(e) {
  const t = /* @__PURE__ */ ke(e?.locale ?? "en"), n = /* @__PURE__ */ ke(e?.fallback ?? "en"), r = /* @__PURE__ */ Ie({
    en: Fv,
    ...e?.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: r,
    decimalSeparator: /* @__PURE__ */ W(() => e?.decimalSeparator ?? ud(t, n)),
    t: cd(t, n, r),
    n: Vl(t, n),
    provide: fd({
      current: t,
      fallback: n,
      messages: r
    })
  };
}
const Ss = /* @__PURE__ */ Symbol.for("vuetify:locale");
function Hv(e) {
  return e.name != null;
}
function zv(e) {
  const t = e?.adapter && Hv(e?.adapter) ? e?.adapter : Bv(e), n = Wv(t, e);
  return {
    ...t,
    ...n
  };
}
function dd() {
  const e = st(Ss);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function jv() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function Wv(e, t) {
  const n = /* @__PURE__ */ Ie(t?.rtl ?? jv()), r = z(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: r,
    rtl: n,
    rtlClasses: /* @__PURE__ */ W(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`)
  };
}
function Oi() {
  const e = st(Ss);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function Ti(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function Uv(e, t, n) {
  const r = [];
  let i = [];
  const s = hd(e), o = pd(e), l = n ?? Ti(t)?.firstDay ?? 0, a = (s.getDay() - l + 7) % 7, u = (o.getDay() - l + 7) % 7;
  for (let c = 0; c < a; c++) {
    const f = new Date(s);
    f.setDate(f.getDate() - (a - c)), i.push(f);
  }
  for (let c = 1; c <= o.getDate(); c++) {
    const f = new Date(e.getFullYear(), e.getMonth(), c);
    i.push(f), i.length === 7 && (r.push(i), i = []);
  }
  for (let c = 1; c < 7 - u; c++) {
    const f = new Date(o);
    f.setDate(f.getDate() + c), i.push(f);
  }
  return i.length > 0 && r.push(i), r;
}
function Yr(e, t, n) {
  let r = (n ?? Ti(t)?.firstDay ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (Ut("Invalid firstDayOfWeek, expected discrete number in range [0-6]"), r = 0);
  const i = new Date(e);
  for (; i.getDay() !== r; )
    i.setDate(i.getDate() - 1);
  return i;
}
function Gv(e, t) {
  const n = new Date(e), r = ((Ti(t)?.firstDay ?? 0) + 6) % 7;
  for (; n.getDay() !== r; )
    n.setDate(n.getDate() + 1);
  return n;
}
function hd(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function pd(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function qv(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Kv = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function gd(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Kv.test(e))
      return qv(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Cc = new Date(2e3, 0, 2);
function Yv(e, t, n) {
  const r = t ?? Ti(e)?.firstDay ?? 0;
  return Gf(7).map((i) => {
    const s = new Date(Cc);
    return s.setDate(Cc.getDate() + r + i), new Intl.DateTimeFormat(e, {
      weekday: n ?? "narrow"
    }).format(s);
  });
}
function Xv(e, t, n, r) {
  const i = gd(e) ?? /* @__PURE__ */ new Date(), s = r?.[t];
  if (typeof s == "function")
    return s(i, t, n);
  let o = {};
  switch (t) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const l = i.getDate(), a = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(i);
      return `${l} ${a}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(i.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(n, o).format(i).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(n, o).format(i).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(n, o).format(i).replace(/, /g, " ");
    default:
      o = s ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, o).format(i);
}
function Zv(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), i = ic(String(n.getMonth() + 1), 2, "0"), s = ic(String(n.getDate()), 2, "0");
  return `${r}-${i}-${s}`;
}
function Qv(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function Jv(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function ey(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function zn(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function ty(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function ny(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function fi(e) {
  return e.getFullYear();
}
function ry(e) {
  return e.getMonth();
}
function iy(e, t, n, r) {
  const i = Ti(t), s = n ?? i?.firstDay ?? 0, o = i?.firstWeekSize ?? 1;
  return r !== void 0 ? sy(e, t, s, r) : oy(e, t, s, o);
}
function sy(e, t, n, r) {
  const i = (7 + r - n) % 7, s = Yr(e, t, n), o = zn(s, 6);
  function l(d) {
    return (7 + new Date(d, 0, 1).getDay() - n) % 7;
  }
  let a = fi(s);
  a < fi(o) && l(a + 1) <= i && a++;
  const u = new Date(a, 0, 1), c = l(a), f = c <= i ? zn(u, -c) : zn(u, 7 - c);
  return 1 + Ns(Pl(s), di(f), "weeks");
}
function oy(e, t, n, r) {
  const i = Yr(e, t, n), s = zn(Yr(e, t, n), 6);
  function o(f) {
    const d = new Date(f, 0, 1);
    return 7 - Ns(d, Yr(d, t, n), "days");
  }
  let l = fi(i);
  l < fi(s) && o(l + 1) >= r && l++;
  const a = new Date(l, 0, 1), u = o(l), c = u >= r ? zn(a, u - 7) : zn(a, u);
  return 1 + Ns(Pl(i), di(c), "weeks");
}
function ly(e) {
  return e.getDate();
}
function ay(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function cy(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function uy(e) {
  return e.getHours();
}
function fy(e) {
  return e.getMinutes();
}
function dy(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function hy(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function py(e, t) {
  return Cs(e, t[0]) && vy(e, t[1]);
}
function gy(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function Cs(e, t) {
  return e.getTime() > t.getTime();
}
function my(e, t) {
  return Cs(di(e), di(t));
}
function vy(e, t) {
  return e.getTime() < t.getTime();
}
function Nc(e, t) {
  return e.getTime() === t.getTime();
}
function yy(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function by(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function wy(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function Ns(e, t, n) {
  const r = new Date(e), i = new Date(t);
  switch (n) {
    case "years":
      return r.getFullYear() - i.getFullYear();
    case "quarters":
      return Math.floor((r.getMonth() - i.getMonth() + (r.getFullYear() - i.getFullYear()) * 12) / 4);
    case "months":
      return r.getMonth() - i.getMonth() + (r.getFullYear() - i.getFullYear()) * 12;
    case "weeks":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((r.getTime() - i.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((r.getTime() - i.getTime()) / 1e3);
    default:
      return r.getTime() - i.getTime();
  }
}
function ky(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function xy(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function _y(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function Ey(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function Sy(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function di(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Pl(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Cy {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return gd(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Zv(this, t);
  }
  parseISO(t) {
    return Qv(t);
  }
  addMinutes(t, n) {
    return Jv(t, n);
  }
  addHours(t, n) {
    return ey(t, n);
  }
  addDays(t, n) {
    return zn(t, n);
  }
  addWeeks(t, n) {
    return ty(t, n);
  }
  addMonths(t, n) {
    return ny(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Uv(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Yr(t, this.locale, r);
  }
  endOfWeek(t) {
    return Gv(t, this.locale);
  }
  startOfMonth(t) {
    return hd(t);
  }
  endOfMonth(t) {
    return pd(t);
  }
  format(t, n) {
    return Xv(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Nc(t, n);
  }
  isValid(t) {
    return gy(t);
  }
  isWithinRange(t, n) {
    return py(t, n);
  }
  isAfter(t, n) {
    return Cs(t, n);
  }
  isAfterDay(t, n) {
    return my(t, n);
  }
  isBefore(t, n) {
    return !Cs(t, n) && !Nc(t, n);
  }
  isSameDay(t, n) {
    return yy(t, n);
  }
  isSameMonth(t, n) {
    return by(t, n);
  }
  isSameYear(t, n) {
    return wy(t, n);
  }
  setMinutes(t, n) {
    return xy(t, n);
  }
  setHours(t, n) {
    return ky(t, n);
  }
  setMonth(t, n) {
    return _y(t, n);
  }
  setDate(t, n) {
    return Ey(t, n);
  }
  setYear(t, n) {
    return Sy(t, n);
  }
  getDiff(t, n, r) {
    return Ns(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return Yv(this.locale, r, n);
  }
  getYear(t) {
    return fi(t);
  }
  getMonth(t) {
    return ry(t);
  }
  getWeek(t, n, r) {
    const i = n !== void 0 ? Number(n) : void 0, s = r !== void 0 ? Number(r) : void 0;
    return iy(t, this.locale, i, s);
  }
  getDate(t) {
    return ly(t);
  }
  getNextMonth(t) {
    return ay(t);
  }
  getPreviousMonth(t) {
    return cy(t);
  }
  getHours(t) {
    return uy(t);
  }
  getMinutes(t) {
    return fy(t);
  }
  startOfDay(t) {
    return di(t);
  }
  endOfDay(t) {
    return Pl(t);
  }
  startOfYear(t) {
    return dy(t);
  }
  endOfYear(t) {
    return hy(t);
  }
}
const Ny = /* @__PURE__ */ Symbol.for("vuetify:date-options"), Oc = /* @__PURE__ */ Symbol.for("vuetify:date-adapter");
function Oy(e, t) {
  const n = Ke({
    adapter: Cy,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: Ty(n, t)
  };
}
function Ty(e, t) {
  const n = /* @__PURE__ */ yt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return ae(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
const Ko = /* @__PURE__ */ Symbol.for("vuetify:display"), Tc = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Dy = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tc;
  return Ke(Tc, e);
};
function Dc(e) {
  return Ne && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function $c(e) {
  return Ne && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Ac(e) {
  const t = Ne && !e ? window.navigator.userAgent : "ssr";
  function n(g) {
    return !!t.match(g);
  }
  const r = n(/android/i), i = n(/iphone|ipad|ipod/i), s = n(/cordova/i), o = n(/electron/i), l = n(/chrome/i), a = n(/edge/i), u = n(/firefox/i), c = n(/opera/i), f = n(/win/i), d = n(/mac/i), p = n(/linux/i);
  return {
    android: r,
    ios: i,
    cordova: s,
    electron: o,
    chrome: l,
    edge: a,
    firefox: u,
    opera: c,
    win: f,
    mac: d,
    linux: p,
    touch: zm,
    ssr: t === "ssr"
  };
}
function $y(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: r
  } = Dy(e), i = /* @__PURE__ */ ke($c(t)), s = /* @__PURE__ */ ke(Ac(t)), o = /* @__PURE__ */ yt({}), l = /* @__PURE__ */ ke(Dc(t));
  function a() {
    i.value = $c(), l.value = Dc();
  }
  function u() {
    a(), s.value = Ac();
  }
  return qt(() => {
    const c = l.value < n.sm, f = l.value < n.md && !c, d = l.value < n.lg && !(f || c), p = l.value < n.xl && !(d || f || c), g = l.value < n.xxl && !(p || d || f || c), b = l.value >= n.xxl, S = c ? "xs" : f ? "sm" : d ? "md" : p ? "lg" : g ? "xl" : "xxl", v = typeof r == "number" ? r : n[r], w = l.value < v;
    o.xs = c, o.sm = f, o.md = d, o.lg = p, o.xl = g, o.xxl = b, o.smAndUp = !c, o.mdAndUp = !(c || f), o.lgAndUp = !(c || f || d), o.xlAndUp = !(c || f || d || p), o.smAndDown = !(d || p || g || b), o.mdAndDown = !(p || g || b), o.lgAndDown = !(g || b), o.xlAndDown = !b, o.name = S, o.height = i.value, o.width = l.value, o.mobile = w, o.mobileBreakpoint = r, o.platform = s.value, o.thresholds = n;
  }), Ne && (window.addEventListener("resize", a, {
    passive: !0
  }), ot(() => {
    window.removeEventListener("resize", a);
  }, !0)), {
    .../* @__PURE__ */ Ru(o),
    update: u,
    ssr: !!t
  };
}
const Ay = te({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function md() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  const n = st(Ko);
  if (!n) throw new Error("Could not find Vuetify display injection");
  const r = z(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? n.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? n.width.value < n.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? n.mobile.value : !1);
  return {
    ...n,
    displayClasses: /* @__PURE__ */ W(() => t ? {
      [`${t}--mobile`]: r.value
    } : {}),
    mobile: r
  };
}
const vd = /* @__PURE__ */ Symbol.for("vuetify:goto");
function yd() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: Dv
  };
}
function Vy(e) {
  return Il(e) ?? (document.scrollingElement || document.body);
}
function Il(e) {
  return typeof e == "string" ? document.querySelector(e) : qf(e);
}
function vo(e, t, n) {
  if (typeof e == "number") return t && n ? -e : e;
  let r = Il(e), i = 0;
  for (; r; )
    i += t ? r.offsetLeft : r.offsetTop, r = r.offsetParent;
  return i;
}
function Py(e, t) {
  return {
    rtl: t.isRtl,
    options: Ke(yd(), e)
  };
}
async function Vc(e, t, n, r) {
  const i = n ? "scrollLeft" : "scrollTop", s = Ke(r?.options ?? yd(), t), o = r?.rtl.value, l = (typeof e == "number" ? e : Il(e)) ?? 0, a = s.container === "parent" && l instanceof HTMLElement ? l.parentElement : Vy(s.container), u = ci() ? s.patterns.instant : typeof s.easing == "function" ? s.easing : s.patterns[s.easing];
  if (!u) throw new TypeError(`Easing function "${s.easing}" not found.`);
  let c;
  if (typeof l == "number")
    c = vo(l, n, o);
  else if (c = vo(l, n, o) - vo(a, n, o), s.layout) {
    const g = window.getComputedStyle(l).getPropertyValue("--v-layout-top");
    g && (c -= parseInt(g, 10));
  }
  c += s.offset, c = Ry(a, c, !!o, !!n);
  const f = a[i] ?? 0;
  if (c === f) return Promise.resolve(c);
  const d = performance.now();
  return new Promise((p) => requestAnimationFrame(function g(b) {
    const v = (b - d) / s.duration, w = Math.floor(f + (c - f) * u(cn(v, 0, 1)));
    if (a[i] = w, v >= 1 && Math.abs(w - a[i]) < 10)
      return p(c);
    if (v > 2)
      return Ut("Scroll target is not reachable"), p(a[i]);
    requestAnimationFrame(g);
  }));
}
function Iy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = st(vd), {
    isRtl: n
  } = Oi();
  if (!t) throw new Error("[Vuetify] Could not find injected goto instance");
  const r = {
    ...t,
    // can be set via VLocaleProvider
    rtl: /* @__PURE__ */ W(() => t.rtl.value || n.value)
  };
  async function i(s, o) {
    return Vc(s, Ke(e, o), !1, r);
  }
  return i.horizontal = async (s, o) => Vc(s, Ke(e, o), !0, r), i;
}
function Ry(e, t, n, r) {
  const {
    scrollWidth: i,
    scrollHeight: s
  } = e, [o, l] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let a, u;
  return r ? n ? (a = -(i - o), u = 0) : (a = 0, u = i - o) : (a = 0, u = s + -l), cn(t, a, u);
}
const hi = /* @__PURE__ */ Symbol.for("vuetify:theme"), kt = te({
  theme: String
}, "theme");
function Pc() {
  return {
    defaultTheme: "light",
    prefix: "v-",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#EEEEEE",
          "theme-on-kbd": "#000000",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#424242",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet",
    scoped: !1,
    unimportant: !1,
    utilities: !0
  };
}
function My() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pc();
  const t = Pc();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const n = {};
  for (const [r, i] of Object.entries(e.themes ?? {})) {
    const s = i.dark || r === "dark" ? t.themes?.dark : t.themes?.light;
    n[r] = Ke(s, i);
  }
  return Ke(t, {
    ...e,
    themes: n
  });
}
function Dn(e, t, n, r) {
  e.push(`${Hy(t, r)} {
`, ...n.map((i) => `  ${i};
`), `}
`);
}
function Ic(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, i = [];
  for (const [s, o] of Object.entries(e.colors)) {
    const l = Wt(o);
    i.push(`--${t}theme-${s}: ${l.r},${l.g},${l.b}`), s.startsWith("on-") || i.push(`--${t}theme-${s}-overlay-multiplier: ${_v(o) > 0.18 ? n : r}`);
  }
  for (const [s, o] of Object.entries(e.variables)) {
    const l = typeof o == "string" && o.startsWith("#") ? Wt(o) : void 0, a = l ? `${l.r}, ${l.g}, ${l.b}` : void 0;
    i.push(`--${t}${s}: ${a ?? o}`);
  }
  return i;
}
function Ly(e, t, n) {
  const r = {};
  if (n)
    for (const i of ["lighten", "darken"]) {
      const s = i === "lighten" ? kv : xv;
      for (const o of Gf(n[i], 1))
        r[`${e}-${i}-${o}`] = yv(s(Wt(t), o));
    }
  return r;
}
function Fy(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const i = e[r];
    i && (n = {
      ...n,
      ...Ly(r, i, t)
    });
  }
  return n;
}
function By(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, i = Wt(e[n]);
    t[r] = id(i);
  }
  return t;
}
function Hy(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function zy(e, t, n) {
  const r = jy(e, t);
  r && (r.innerHTML = n);
}
function jy(e, t) {
  if (!Ne) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function Wy(e) {
  const t = My(e), n = /* @__PURE__ */ ke(t.defaultTheme), r = /* @__PURE__ */ Ie(t.themes), i = /* @__PURE__ */ ke("light"), s = z({
    get() {
      return n.value === "system" ? i.value : n.value;
    },
    set(v) {
      n.value = v;
    }
  }), o = z(() => {
    const v = {};
    for (const [w, x] of Object.entries(r.value)) {
      const I = {
        ...x.colors,
        ...Fy(x.colors, t.variations)
      };
      v[w] = {
        ...x,
        colors: {
          ...I,
          ...By(I)
        }
      };
    }
    return v;
  }), l = /* @__PURE__ */ W(() => o.value[s.value]), a = /* @__PURE__ */ W(() => n.value === "system"), u = z(() => {
    const v = [], w = t.unimportant ? "" : " !important", x = t.scoped ? t.prefix : "";
    l.value?.dark && Dn(v, ":root", ["color-scheme: dark"], t.scope), Dn(v, ":root", Ic(l.value, t.prefix), t.scope);
    for (const [E, L] of Object.entries(o.value))
      Dn(v, `.${t.prefix}theme--${E}`, [`color-scheme: ${L.dark ? "dark" : "normal"}`, ...Ic(L, t.prefix)], t.scope);
    if (t.utilities) {
      const E = [], L = [], M = new Set(Object.values(o.value).flatMap((k) => Object.keys(k.colors)));
      for (const k of M)
        k.startsWith("on-") ? Dn(L, `.${k}`, [`color: rgb(var(--${t.prefix}theme-${k}))${w}`], t.scope) : (Dn(E, `.${x}bg-${k}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${k}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${k}))${w}`, `color: rgb(var(--${t.prefix}theme-on-${k}))${w}`], t.scope), Dn(L, `.${x}text-${k}`, [`color: rgb(var(--${t.prefix}theme-${k}))${w}`], t.scope), Dn(L, `.${x}border-${k}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${k})`], t.scope));
      t.layers ? v.push(`@layer background {
`, ...E.map((k) => `  ${k}`), `}
`, `@layer foreground {
`, ...L.map((k) => `  ${k}`), `}
`) : v.push(...E, ...L);
    }
    let I = v.map((E, L) => L === 0 ? E : `    ${E}`).join("");
    return t.layers && (I = `@layer vuetify.theme {
` + v.map((E) => `  ${E}`).join("") + `
}`), I;
  }), c = /* @__PURE__ */ W(() => t.isDisabled ? void 0 : `${t.prefix}theme--${s.value}`), f = /* @__PURE__ */ W(() => Object.keys(o.value));
  if (Wf) {
    let w = function() {
      i.value = v.matches ? "dark" : "light";
    };
    const v = window.matchMedia("(prefers-color-scheme: dark)");
    w(), v.addEventListener("change", w, {
      passive: !0
    }), vu() && ot(() => {
      v.removeEventListener("change", w);
    });
  }
  function d(v) {
    if (t.isDisabled) return;
    const w = v._context.provides.usehead;
    if (w) {
      let x = function() {
        return {
          style: [{
            textContent: u.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      if (w.push) {
        const I = w.push(x);
        Ne && ae(u, () => {
          I.patch(x);
        });
      } else
        Ne ? (w.addHeadObjs(/* @__PURE__ */ W(x)), qt(() => w.updateDOM())) : w.addHeadObjs(x());
    } else {
      let x = function() {
        zy(t.stylesheetId, t.cspNonce, u.value);
      };
      Ne ? ae(u, x, {
        immediate: !0
      }) : x();
    }
  }
  function p(v) {
    if (v !== "system" && !f.value.includes(v)) {
      Ut(`Theme "${v}" not found on the Vuetify theme instance`);
      return;
    }
    s.value = v;
  }
  function g() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f.value;
    const w = v.indexOf(s.value), x = w === -1 ? 0 : (w + 1) % v.length;
    p(v[x]);
  }
  function b() {
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    g(v);
  }
  const S = new Proxy(s, {
    get(v, w) {
      return Reflect.get(v, w);
    },
    set(v, w, x) {
      return w === "value" && Hm(`theme.global.name.value = ${x}`, `theme.change('${x}')`), Reflect.set(v, w, x);
    }
  });
  return {
    install: d,
    change: p,
    cycle: g,
    toggle: b,
    isDisabled: t.isDisabled,
    isSystem: a,
    name: s,
    themes: r,
    current: l,
    computedThemes: o,
    prefix: t.prefix,
    themeClasses: c,
    styles: u,
    global: {
      name: S,
      current: l
    }
  };
}
function $t(e) {
  Xe("provideTheme");
  const t = st(hi, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const n = /* @__PURE__ */ W(() => e.theme ?? t.name.value), s = {
    ...t,
    name: n,
    current: /* @__PURE__ */ W(() => t.themes.value[n.value]),
    themeClasses: /* @__PURE__ */ W(() => t.isDisabled ? void 0 : `${t.prefix}theme--${n.value}`)
  };
  return Yn(hi, s), s;
}
function Uy() {
  Xe("useTheme");
  const e = st(hi, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Os(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = jo(), r = /* @__PURE__ */ Ie();
  if (Ne) {
    const i = new ResizeObserver((s) => {
      e?.(s, i), s.length && (t === "content" ? r.value = s[0].contentRect : r.value = s[0].target.getBoundingClientRect());
    });
    Xn(() => {
      i.disconnect();
    }), ae(() => n.el, (s, o) => {
      o && (i.unobserve(o), r.value = void 0), s && i.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: /* @__PURE__ */ ni(r)
  };
}
function bd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, r = Ke(t, n), {
    aliases: i = {},
    components: s = {},
    directives: o = {}
  } = r, l = Jr();
  return l.run(() => {
    const a = Sv(r.defaults), u = $y(r.display, r.ssr), c = Wy(r.theme), f = Lv(r.icons), d = zv(r.locale), p = Oy(r.date, d), g = Py(r.goTo, d);
    function b(v) {
      for (const x in o)
        v.directive(x, o[x]);
      for (const x in s)
        v.component(x, s[x]);
      for (const x in i)
        v.component(x, Ci({
          ...i[x],
          name: x,
          aliasName: i[x].name
        }));
      const w = Jr();
      if (w.run(() => {
        c.install(v);
      }), v.onUnmount(() => w.stop()), v.provide(mr, a), v.provide(Ko, u), v.provide(hi, c), v.provide(qo, f), v.provide(Ss, d), v.provide(Ny, p.options), v.provide(Oc, p.instance), v.provide(vd, g), Ne && r.ssr)
        if (v.$nuxt)
          v.$nuxt.hook("app:suspense:resolve", () => {
            u.update();
          });
        else {
          const {
            mount: x
          } = v;
          v.mount = function() {
            const I = x(...arguments);
            return fn(() => u.update()), v.mount = x, I;
          };
        }
      v.mixin({
        computed: {
          $vuetify() {
            return /* @__PURE__ */ yt({
              defaults: ar.call(this, mr),
              display: ar.call(this, Ko),
              theme: ar.call(this, hi),
              icons: ar.call(this, qo),
              locale: ar.call(this, Ss),
              date: ar.call(this, Oc)
            });
          }
        }
      });
    }
    function S() {
      l.stop();
    }
    return {
      install: b,
      unmount: S,
      defaults: a,
      display: u,
      theme: c,
      icons: f,
      locale: d,
      date: p,
      goTo: g
    };
  });
}
const Gy = "3.13.3";
bd.version = Gy;
function ar(e) {
  const t = this.$, n = t.parent?.provides ?? t.vnode.appContext?.provides;
  if (n && e in n)
    return n[e];
}
const Di = te({
  border: [Boolean, Number, String]
}, "border");
function $i(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  return {
    borderClasses: z(() => {
      const r = e.border;
      return r === !0 || r === "" ? `${t}--border` : typeof r == "string" || r === 0 ? String(r).split(" ").map((i) => `border-${i}`) : [];
    })
  };
}
const qy = [null, "default", "comfortable", "compact"], er = te({
  density: {
    type: String,
    default: "default",
    validator: (e) => qy.includes(e)
  }
}, "density");
function xr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  return {
    densityClasses: /* @__PURE__ */ W(() => `${t}--density-${e.density}`)
  };
}
const Ai = te({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function Vi(e) {
  return {
    elevationClasses: /* @__PURE__ */ W(() => {
      const n = /* @__PURE__ */ De(e) ? e.value : e.elevation;
      return n == null ? [] : [`elevation-${n}`];
    })
  };
}
const xn = te({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function _n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  return {
    roundedClasses: z(() => {
      const r = /* @__PURE__ */ De(e) ? e.value : e.rounded, i = /* @__PURE__ */ De(e) ? !1 : e.tile, s = [];
      if (i || r === !1)
        s.push("rounded-0");
      else if (r === !0 || r === "")
        s.push(`${t}--rounded`);
      else if (typeof r == "string" || r === 0)
        for (const o of String(r).split(" "))
          s.push(`rounded-${o}`);
      return s;
    })
  };
}
const Ky = ["x-small", "small", "default", "large", "x-large"], _r = te({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Pi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  return Ol(() => {
    const n = e.size;
    let r, i;
    return ks(Ky, n) ? r = `${t}--size-${n}` : n && (i = {
      width: le(n),
      height: le(n)
    }), {
      sizeClasses: r,
      sizeStyles: i
    };
  });
}
const lt = te({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag");
function Rl(e) {
  return Ol(() => {
    const {
      class: t,
      style: n
    } = Xy(e);
    return {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function vr(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = Rl(() => ({
    text: Tt(e)
  }));
  return {
    textColorClasses: t,
    textColorStyles: n
  };
}
function Xr(e) {
  const {
    colorClasses: t,
    colorStyles: n
  } = Rl(() => ({
    background: Tt(e)
  }));
  return {
    backgroundColorClasses: t,
    backgroundColorStyles: n
  };
}
function Yy(e) {
  return {
    text: typeof e.text == "string" ? e.text.replace(/^text-/, "") : e.text,
    background: typeof e.background == "string" ? e.background.replace(/^bg-/, "") : e.background
  };
}
function Xy(e) {
  const t = Yy(Tt(e)), n = [], r = {};
  if (t.background)
    if (Uo(t.background)) {
      if (r.backgroundColor = t.background, !t.text && mv(t.background)) {
        const i = Wt(t.background);
        if (i.a == null || i.a === 1) {
          const s = id(i);
          r.color = s, r.caretColor = s;
        }
      }
    } else
      n.push(`bg-${t.background}`);
  return t.text && (Uo(t.text) ? (r.color = t.text, r.caretColor = t.text) : n.push(`text-${t.text}`)), {
    class: n,
    style: r
  };
}
const Zy = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ii(e, t) {
  return j(Ve, null, [e && j("span", {
    key: "overlay",
    class: ce(`${t}__overlay`)
  }, null), j("span", {
    key: "underlay",
    class: ce(`${t}__underlay`)
  }, null)]);
}
const tr = te({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Zy.includes(e)
  }
}, "variant");
function Ri(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  const n = /* @__PURE__ */ W(() => {
    const {
      variant: s
    } = Tt(e);
    return `${t}--variant-${s}`;
  }), {
    colorClasses: r,
    colorStyles: i
  } = Rl(() => {
    const {
      variant: s,
      color: o
    } = Tt(e);
    return {
      [["elevated", "flat"].includes(s) ? "background" : "text"]: o
    };
  });
  return {
    colorClasses: r,
    colorStyles: i,
    variantClasses: n
  };
}
const wd = te({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Di(),
  ...He(),
  ...er(),
  ...Ai(),
  ...xn(),
  ..._r({
    size: void 0
  }),
  ...lt(),
  ...kt(),
  ...tr()
}, "VBtnGroup"), Rc = Oe()({
  name: "VBtnGroup",
  props: wd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: r
    } = $t(e), {
      densityClasses: i
    } = xr(e), {
      borderClasses: s
    } = $i(e), {
      elevationClasses: o
    } = Vi(e), {
      roundedClasses: l
    } = _n(e);
    qs({
      VBtn: {
        height: /* @__PURE__ */ W(() => e.direction === "horizontal" && e.size == null ? "auto" : null),
        baseColor: /* @__PURE__ */ W(() => e.baseColor),
        color: /* @__PURE__ */ W(() => e.color),
        density: /* @__PURE__ */ W(() => e.density),
        flat: !0,
        size: /* @__PURE__ */ W(() => e.size),
        variant: /* @__PURE__ */ W(() => e.variant)
      }
    }), Ge(() => T(e.tag, {
      class: ce(["v-btn-group", `v-btn-group--${e.direction}`, {
        "v-btn-group--divided": e.divided,
        "v-btn-group--has-size": e.size != null
      }, r.value, s.value, i.value, o.value, l.value, e.class]),
      style: $e(e.style)
    }, n));
  }
}), Ml = te({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), kd = te({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Yo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const r = Xe("useGroupItem");
  if (!r)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const i = Hp();
  Yn(/* @__PURE__ */ Symbol.for(`${t.description}:id`), i);
  const s = st(t, null);
  if (!s) {
    if (!n) return s;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const o = /* @__PURE__ */ W(() => e.value), l = z(() => !!(s.disabled.value || e.disabled));
  function a() {
    s?.register({
      id: i,
      value: o,
      disabled: l
    }, r);
  }
  function u() {
    s?.unregister(i);
  }
  a(), Xn(() => u());
  const c = z(() => s.isSelected(i)), f = z(() => s.items.value[0].id === i), d = z(() => s.items.value[s.items.value.length - 1].id === i), p = z(() => c.value && [s.selectedClass.value, e.selectedClass]);
  return ae(c, (g) => {
    r.emit("group:selected", {
      value: g
    });
  }, {
    flush: "sync"
  }), {
    id: i,
    isSelected: c,
    isFirst: f,
    isLast: d,
    toggle: () => s.select(i, !c.value),
    select: (g) => s.select(i, g),
    selectedClass: p,
    value: o,
    disabled: l,
    group: s,
    register: a,
    unregister: u
  };
}
function Ll(e, t) {
  let n = !1;
  const r = /* @__PURE__ */ yt([]), i = Jn(e, "modelValue", [], (d) => d === void 0 ? [] : xd(r, d === null ? [null] : qm(d)), (d) => {
    const p = Jy(r, d);
    return e.multiple ? p : p[0];
  }), s = Xe("useGroup");
  function o(d, p) {
    const g = d, b = /* @__PURE__ */ Symbol.for(`${t.description}:id`), v = Br(b, s?.vnode).indexOf(p);
    yn(g.value) === void 0 && (g.value = v, g.useIndexAsValue = !0), v > -1 ? r.splice(v, 0, g) : r.push(g);
  }
  function l(d) {
    if (n) return;
    a();
    const p = r.findIndex((g) => g.id === d);
    r.splice(p, 1);
  }
  function a() {
    const d = r.find((p) => !p.disabled);
    d && e.mandatory === "force" && !i.value.length && (i.value = [d.id]);
  }
  br(() => {
    a();
  }), Xn(() => {
    n = !0;
  }), vl(() => {
    for (let d = 0; d < r.length; d++)
      r[d].useIndexAsValue && (r[d].value = d);
  });
  function u(d, p) {
    const g = r.find((b) => b.id === d);
    if (!(p && g?.disabled))
      if (e.multiple) {
        const b = i.value.slice(), S = b.findIndex((w) => w === d), v = ~S;
        if (p = p ?? !v, v && e.mandatory && b.length <= 1 || !v && e.max != null && b.length + 1 > e.max) return;
        S < 0 && p ? b.push(d) : S >= 0 && !p && b.splice(S, 1), i.value = b;
      } else {
        const b = i.value.includes(d);
        if (e.mandatory && b || !b && !p) return;
        i.value = p ?? !b ? [d] : [];
      }
  }
  function c(d) {
    if (e.multiple && Ut('This method is not supported when using "multiple" prop'), i.value.length) {
      const p = i.value[0], g = r.findIndex((v) => v.id === p);
      let b = (g + d) % r.length, S = r[b];
      for (; S.disabled && b !== g; )
        b = (b + d) % r.length, S = r[b];
      if (S.disabled) return;
      i.value = [r[b].id];
    } else {
      const p = r.find((g) => !g.disabled);
      p && (i.value = [p.id]);
    }
  }
  const f = {
    register: o,
    unregister: l,
    selected: i,
    select: u,
    disabled: /* @__PURE__ */ W(() => e.disabled),
    prev: () => c(r.length - 1),
    next: () => c(1),
    isSelected: (d) => i.value.includes(d),
    selectedClass: /* @__PURE__ */ W(() => e.selectedClass),
    items: /* @__PURE__ */ W(() => r),
    getItemIndex: (d) => Qy(r, d)
  };
  return Yn(t, f), f;
}
function Qy(e, t) {
  const n = xd(e, [t]);
  return n.length ? e.findIndex((r) => r.id === n[0]) : -1;
}
function xd(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.find((o) => Hn(r, o.value)), s = e[r];
    i?.value !== void 0 ? n.push(i.id) : s?.useIndexAsValue && n.push(s.id);
  }), n;
}
function Jy(e, t) {
  const n = [];
  return t.forEach((r) => {
    const i = e.findIndex((s) => s.id === r);
    if (~i) {
      const s = e[i];
      n.push(s.value !== void 0 ? s.value : i);
    }
  }), n;
}
const _d = /* @__PURE__ */ Symbol.for("vuetify:v-btn-toggle"), eb = te({
  ...wd(),
  ...Ml()
}, "VBtnToggle");
Oe()({
  name: "VBtnToggle",
  props: eb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: r,
      next: i,
      prev: s,
      select: o,
      selected: l
    } = Ll(e, _d);
    return Ge(() => {
      const a = Rc.filterProps(e);
      return T(Rc, me({
        class: ["v-btn-toggle", e.class]
      }, a, {
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: r,
          next: i,
          prev: s,
          select: o,
          selected: l
        })]
      });
    }), {
      next: i,
      prev: s,
      select: o
    };
  }
});
const tb = te({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), at = Oe(!1)({
  name: "VDefaultsProvider",
  props: tb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: r,
      disabled: i,
      reset: s,
      root: o,
      scoped: l
    } = /* @__PURE__ */ Ru(e);
    return qs(r, {
      reset: s,
      root: o,
      scoped: l,
      disabled: i
    }), () => n.default?.();
  }
}), nb = te({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Ye,
  opacity: [String, Number],
  ...He(),
  ..._r(),
  ...lt({
    tag: "i"
  }),
  ...kt()
}, "VIcon"), nt = Oe()({
  name: "VIcon",
  props: nb(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const i = /* @__PURE__ */ ke(), {
      themeClasses: s
    } = Uy(), {
      iconData: o
    } = Pv(() => i.value || e.icon), {
      sizeClasses: l
    } = Pi(e), {
      textColorClasses: a,
      textColorStyles: u
    } = vr(() => e.color);
    return Ge(() => {
      const c = r.default?.();
      c && (i.value = Xf(c).filter((d) => d.type === Zn && d.children && typeof d.children == "string")[0]?.children);
      const f = !!(n.onClick || n.onClickOnce);
      return T(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ce(["v-icon", "notranslate", s.value, l.value, a.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: $e([{
          "--v-icon-opacity": e.opacity
        }, l.value ? void 0 : {
          fontSize: le(e.size),
          height: le(e.size),
          width: le(e.size)
        }, u.value, e.style]),
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [c]
      });
    }), {};
  }
});
function Ed(e, t) {
  const n = /* @__PURE__ */ Ie(), r = /* @__PURE__ */ ke(!1);
  if (Nl) {
    const i = new IntersectionObserver((s) => {
      r.value = !!s.find((o) => o.isIntersecting);
    }, t);
    ot(() => {
      i.disconnect();
    }), ae(n, (s, o) => {
      o && (i.unobserve(o), r.value = !1), s && i.observe(s);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: r
  };
}
const rb = te({
  reveal: {
    type: [Boolean, Object],
    default: !1
  }
}, "reveal");
function ib(e) {
  const n = /* @__PURE__ */ W(() => typeof e.reveal == "object" ? Math.max(0, Number(e.reveal.duration ?? 900)) : 900), r = /* @__PURE__ */ ke(e.reveal ? "initial" : "disabled");
  return br(async () => {
    e.reveal && (r.value = "initial", await new Promise((i) => requestAnimationFrame(i)), r.value = "pending", await new Promise((i) => setTimeout(i, n.value)), r.value = "done");
  }), {
    duration: n,
    state: r
  };
}
const sb = te({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  rounded: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...He(),
  ...rb(),
  ..._r(),
  ...lt({
    tag: "div"
  }),
  ...kt()
}, "VProgressCircular"), ob = Oe()({
  name: "VProgressCircular",
  props: sb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = 20, i = 2 * Math.PI * r, s = /* @__PURE__ */ Ie(), {
      themeClasses: o
    } = $t(e), {
      sizeClasses: l,
      sizeStyles: a
    } = Pi(e), {
      textColorClasses: u,
      textColorStyles: c
    } = vr(() => e.color), {
      textColorClasses: f,
      textColorStyles: d
    } = vr(() => e.bgColor), {
      intersectionRef: p,
      isIntersecting: g
    } = Ed(), {
      resizeRef: b,
      contentRect: S
    } = Os(), {
      state: v,
      duration: w
    } = ib(e), x = /* @__PURE__ */ W(() => v.value === "initial" ? 0 : cn(parseFloat(e.modelValue), 0, 100)), I = /* @__PURE__ */ W(() => Number(e.width)), E = /* @__PURE__ */ W(() => a.value ? Number(e.size) : S.value ? S.value.width : Math.max(I.value, 32)), L = /* @__PURE__ */ W(() => r / (1 - I.value / E.value) * 2), M = /* @__PURE__ */ W(() => I.value / E.value * L.value), k = /* @__PURE__ */ W(() => {
      const U = (100 - x.value) / 100 * i;
      return e.rounded && x.value > 0 && x.value < 100 ? le(Math.min(i - 0.01, U + M.value)) : le(U);
    }), A = z(() => {
      const U = Number(e.rotate);
      return e.rounded ? U + M.value / 2 / i * 360 : U;
    });
    return qt(() => {
      p.value = s.value, b.value = s.value;
    }), Ge(() => T(e.tag, {
      ref: s,
      class: ce(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate && (e.indeterminate === "disable-shrink" || ci()),
        "v-progress-circular--revealing": ["initial", "pending"].includes(v.value)
      }, o.value, l.value, u.value, e.class]),
      style: $e([a.value, c.value, {
        "--progress-reveal-duration": `${w.value}ms`
      }, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : x.value
    }, {
      default: () => [j("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${A.value}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${L.value} ${L.value}`
      }, [j("circle", {
        class: ce(["v-progress-circular__underlay", f.value]),
        style: $e(d.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": M.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": 0
      }, null), j("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r,
        "stroke-width": M.value,
        "stroke-dasharray": i,
        "stroke-dashoffset": k.value,
        "stroke-linecap": e.rounded ? "round" : void 0
      }, null)]), n.default && j("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: x.value
      })])]
    })), {};
  }
}), Mi = te({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Li(e) {
  return {
    dimensionStyles: z(() => {
      const n = {}, r = le(e.height), i = le(e.maxHeight), s = le(e.maxWidth), o = le(e.minHeight), l = le(e.minWidth), a = le(e.width);
      return r != null && (n.height = r), i != null && (n.maxHeight = i), s != null && (n.maxWidth = s), o != null && (n.minHeight = o), l != null && (n.minWidth = l), a != null && (n.width = a), n;
    })
  };
}
const Mc = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ys = te({
  location: String
}, "location");
function Xs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: r
  } = Oi();
  return {
    locationStyles: z(() => {
      if (!e.location) return {};
      const {
        side: s,
        align: o
      } = Wo(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, r.value);
      function l(u) {
        return n ? n(u) : 0;
      }
      const a = {};
      return s !== "center" && (t ? a[Mc[s]] = `calc(100% - ${l(s)}px)` : a[s] = 0), o !== "center" ? t ? a[Mc[o]] = `calc(100% - ${l(o)}px)` : a[o] = 0 : (s === "center" ? a.top = a.left = "50%" : a[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[s]] = "50%", a.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[s]), a;
    })
  };
}
const lb = te({
  chunkCount: {
    type: [Number, String],
    default: null
  },
  chunkWidth: {
    type: [Number, String],
    default: null
  },
  chunkGap: {
    type: [Number, String],
    default: 4
  }
}, "chunks");
function ab(e, t) {
  const n = /* @__PURE__ */ W(() => !!e.chunkCount || !!e.chunkWidth), r = z(() => {
    const l = Tt(t);
    if (!l)
      return 0;
    if (!e.chunkCount)
      return Number(e.chunkWidth);
    const a = Number(e.chunkCount);
    return (l - Number(e.chunkGap) * (a - 1)) / a;
  }), i = /* @__PURE__ */ W(() => Number(e.chunkGap)), s = z(() => {
    if (!n.value)
      return {};
    const l = le(i.value), a = le(r.value);
    return {
      maskRepeat: "repeat-x",
      maskImage: `linear-gradient(90deg, #000, #000 ${a}, transparent ${a}, transparent)`,
      maskSize: `calc(${a} + ${l}) 100%`
    };
  });
  function o(l) {
    const a = Tt(t);
    if (!a)
      return l;
    const u = 100 * i.value / a, c = 100 * (r.value + i.value) / a, f = Math.floor((l + u) / c + 1e-9);
    return cn(f * c - u / 2, 0, 100);
  }
  return {
    hasChunks: n,
    chunksMaskStyles: s,
    snapValueToChunk: o
  };
}
const cb = te({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...lb(),
  ...He(),
  ...Ys({
    location: "top"
  }),
  ...xn(),
  ...lt(),
  ...kt()
}, "VProgressLinear"), ub = Oe()({
  name: "VProgressLinear",
  props: cb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = /* @__PURE__ */ Ie(), i = Jn(e, "modelValue"), {
      isRtl: s,
      rtlClasses: o
    } = Oi(), {
      themeClasses: l
    } = $t(e), {
      locationStyles: a
    } = Xs(e), {
      textColorClasses: u,
      textColorStyles: c
    } = vr(() => e.color), {
      backgroundColorClasses: f,
      backgroundColorStyles: d
    } = Xr(() => e.bgColor || e.color), {
      backgroundColorClasses: p,
      backgroundColorStyles: g
    } = Xr(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: b,
      backgroundColorStyles: S
    } = Xr(() => e.color), {
      roundedClasses: v
    } = _n(e), {
      intersectionRef: w,
      isIntersecting: x
    } = Ed(), I = z(() => parseFloat(e.max)), E = z(() => parseFloat(e.height)), L = z(() => cn(parseFloat(e.bufferValue) / I.value * 100, 0, 100)), M = z(() => cn(parseFloat(i.value) / I.value * 100, 0, 100)), k = z(() => s.value !== e.reverse), A = z(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), U = /* @__PURE__ */ ke(0), {
      hasChunks: X,
      chunksMaskStyles: V,
      snapValueToChunk: F
    } = ab(e, U);
    Ni(X, () => {
      const {
        resizeRef: G
      } = Os((J) => U.value = J[0].contentRect.width);
      qt(() => G.value = r.value);
    });
    const q = z(() => X.value ? F(L.value) : L.value), K = z(() => X.value ? F(M.value) : M.value);
    function oe(G) {
      if (!w.value) return;
      const {
        left: J,
        right: Pe,
        width: Se
      } = w.value.getBoundingClientRect(), Me = k.value ? Se - G.clientX + (Pe - Se) : G.clientX - J;
      i.value = Math.round(Me / Se * I.value);
    }
    return qt(() => {
      w.value = r.value;
    }), Ge(() => T(e.tag, {
      ref: r,
      class: ce(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && x.value,
        "v-progress-linear--reverse": k.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped,
        "v-progress-linear--clickable": e.clickable
      }, v.value, l.value, o.value, e.class]),
      style: $e([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? le(E.value) : 0,
        "--v-progress-linear-height": le(E.value),
        ...e.absolute ? a.value : {}
      }, V.value, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(i.value), I.value),
      onClick: e.clickable && oe
    }, {
      default: () => [e.stream && j("div", {
        key: "stream",
        class: ce(["v-progress-linear__stream", u.value]),
        style: {
          ...c.value,
          [k.value ? "left" : "right"]: le(-E.value),
          borderTop: `${le(E.value / 2)} dotted`,
          opacity: e.bufferOpacity != null ? parseFloat(e.bufferOpacity) : void 0,
          top: `calc(50% - ${le(E.value / 4)})`,
          width: le(100 - L.value, "%"),
          "--v-progress-linear-stream-to": le(E.value * (k.value ? 1 : -1))
        }
      }, null), j("div", {
        class: ce(["v-progress-linear__background", f.value]),
        style: $e([d.value, {
          opacity: e.bgOpacity != null ? parseFloat(e.bgOpacity) : void 0,
          width: e.stream ? 0 : void 0
        }])
      }, null), j("div", {
        class: ce(["v-progress-linear__buffer", p.value]),
        style: $e([g.value, {
          opacity: e.bufferOpacity != null ? parseFloat(e.bufferOpacity) : void 0,
          width: le(q.value, "%")
        }])
      }, null), T(qn, {
        name: A.value
      }, {
        default: () => [e.indeterminate ? j("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((G) => j("div", {
          key: G,
          class: ce(["v-progress-linear__indeterminate", G, b.value]),
          style: $e(S.value)
        }, null))]) : j("div", {
          class: ce(["v-progress-linear__determinate", b.value]),
          style: $e([S.value, {
            width: le(K.value, "%")
          }])
        }, null)]
      }), n.default && j("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: M.value,
        buffer: L.value
      })])]
    })), {};
  }
}), Sd = te({
  loading: [Boolean, String]
}, "loader");
function Cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  return {
    loaderClasses: /* @__PURE__ */ W(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function fb(e, t) {
  let {
    slots: n
  } = t;
  return j("div", {
    class: ce(`${e.name}__loader`)
  }, [n.default?.({
    color: e.color,
    isActive: e.active
  }) || T(ub, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const db = ["static", "relative", "fixed", "absolute", "sticky"], Fl = te({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => db.includes(e)
    )
  }
}, "position");
function Bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kn();
  return {
    positionClasses: /* @__PURE__ */ W(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function hb() {
  const e = Xe("useRoute");
  return z(() => e?.proxy?.$route);
}
function pb() {
  return Xe("useRouter")?.proxy?.$router;
}
function Hl(e, t) {
  const n = Qp("RouterLink"), r = /* @__PURE__ */ W(() => !!(e.href || e.to)), i = z(() => r?.value || oc(t, "click") || oc(e, "click"));
  if (typeof n == "string" || !("useLink" in n)) {
    const f = /* @__PURE__ */ W(() => e.href);
    return {
      isLink: r,
      isRouterLink: /* @__PURE__ */ W(() => !1),
      isClickable: i,
      href: f,
      linkProps: /* @__PURE__ */ yt({
        href: f
      }),
      route: /* @__PURE__ */ W(() => {
      }),
      navigate: /* @__PURE__ */ W(() => {
      })
    };
  }
  const s = n.useLink({
    to: /* @__PURE__ */ W(() => e.to || ""),
    replace: /* @__PURE__ */ W(() => e.replace)
  }), o = z(() => e.to ? s : void 0), l = hb(), a = z(() => o.value ? e.exact ? l.value ? o.value.isExactActive?.value && Hn(o.value.route.value.query, l.value.query) : o.value.isExactActive?.value ?? !1 : o.value.isActive?.value ?? !1 : !1), u = z(() => e.to ? o.value?.route.value.href : e.href);
  return {
    isLink: r,
    isRouterLink: /* @__PURE__ */ W(() => !!e.to),
    isClickable: i,
    isActive: a,
    route: /* @__PURE__ */ W(() => o.value?.route.value),
    navigate: /* @__PURE__ */ W(() => o.value?.navigate),
    href: u,
    linkProps: /* @__PURE__ */ yt({
      href: u,
      "aria-current": /* @__PURE__ */ W(() => a.value ? "page" : void 0),
      "aria-disabled": /* @__PURE__ */ W(() => e.disabled && r.value ? "true" : void 0),
      tabindex: /* @__PURE__ */ W(() => e.disabled && r.value ? "-1" : void 0)
    })
  };
}
const zl = te({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let yo = !1;
function gb(e, t) {
  let n = !1, r, i;
  Ne && e?.beforeEach && (fn(() => {
    window.addEventListener("popstate", s), r = e.beforeEach(() => yo ? n ? t() : void 0 : (yo = !0, new Promise((o) => {
      setTimeout(() => o(n ? t() : void 0));
    }))), i = e?.afterEach(() => {
      yo = !1;
    });
  }), ot(() => {
    window.removeEventListener("popstate", s), r?.(), i?.();
  }));
  function s(o) {
    o.state?.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function mb(e, t) {
  ae(() => e.isActive?.value, (n) => {
    e.isLink.value && n != null && t && fn(() => {
      t(n);
    });
  }, {
    immediate: !0
  });
}
const Xo = /* @__PURE__ */ Symbol("rippleStop"), vb = 80;
function Lc(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Zo(e) {
  return e.constructor.name === "TouchEvent";
}
function Nd(e) {
  return e.constructor.name === "KeyboardEvent";
}
const yb = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = 0, i = 0;
  if (!Nd(e)) {
    const f = new ht(t), d = Zo(e) ? e.touches[e.touches.length - 1] : e, p = Tl([d.clientX, d.clientY]);
    r = p.x - f.left, i = p.y - f.top;
  }
  let s = 0, o = 0.3;
  t._ripple?.circle ? (o = 0.15, s = t.clientWidth / 2, s = n.center ? s : s + Math.sqrt((r - s) ** 2 + (i - s) ** 2) / 4) : s = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const l = `${(t.clientWidth - s * 2) / 2}px`, a = `${(t.clientHeight - s * 2) / 2}px`, u = n.center ? l : `${r - s}px`, c = n.center ? a : `${i - s}px`;
  return {
    radius: s,
    scale: o,
    x: u,
    y: c,
    centerX: l,
    centerY: a
  };
}, Ts = {
  /* eslint-disable max-statements */
  show(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const r = document.createElement("span"), i = document.createElement("span");
    r.appendChild(i), r.className = "v-ripple__container", n.class && (r.className += ` ${n.class}`);
    const {
      radius: s,
      scale: o,
      x: l,
      y: a,
      centerX: u,
      centerY: c
    } = yb(e, t, n), f = `${s * 2}px`;
    i.className = "v-ripple__animation", i.style.width = f, i.style.height = f, t.appendChild(r);
    const d = window.getComputedStyle(t);
    d && d.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), i.classList.add("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--visible"), Lc(i, `translate(${l}, ${a}) scale3d(${o},${o},${o})`), i.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        i.classList.remove("v-ripple__animation--enter"), i.classList.add("v-ripple__animation--in"), Lc(i, `translate(${u}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const n = Array.from(t).findLast((s) => !s.dataset.isHiding);
    if (n) n.dataset.isHiding = "true";
    else return;
    const r = performance.now() - Number(n.dataset.activated), i = Math.max(250 - r, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode?.parentNode === e && e.removeChild(n.parentNode);
      }, 300);
    }, i);
  }
};
function Od(e) {
  return typeof e > "u" || !!e;
}
function pi(e) {
  const t = {}, n = e.currentTarget;
  if (!(!n?._ripple || n._ripple.touched || e[Xo])) {
    if (e[Xo] = !0, Zo(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch) return;
    if (t.center = n._ripple.centered || Nd(e), n._ripple.class && (t.class = n._ripple.class), Zo(e)) {
      if (n._ripple.showTimerCommit) return;
      n._ripple.showTimerCommit = () => {
        Ts.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        n?._ripple?.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, vb);
    } else
      Ts.show(e, n, t);
  }
}
function Ds(e) {
  e[Xo] = !0;
}
function ft(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        ft(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Ts.hide(t);
  }
}
function Td(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let gi = !1;
function bb(e, t) {
  !gi && t.includes(e.key) && (gi = !0, pi(e));
}
function Dd(e) {
  gi = !1, ft(e);
}
function $d(e) {
  gi && (gi = !1, ft(e));
}
function Ad(e, t, n) {
  const {
    value: r,
    modifiers: i
  } = t, s = Od(r);
  s || Ts.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = s, e._ripple.centered = i.center, e._ripple.circle = i.circle;
  const o = zo(r) ? r : {};
  o.class && (e._ripple.class = o.class);
  const l = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (a) => bb(a, l), s && !n) {
    if (i.stop) {
      e.addEventListener("touchstart", Ds, {
        passive: !0
      }), e.addEventListener("mousedown", Ds);
      return;
    }
    e.addEventListener("touchstart", pi, {
      passive: !0
    }), e.addEventListener("touchend", ft, {
      passive: !0
    }), e.addEventListener("touchmove", Td, {
      passive: !0
    }), e.addEventListener("touchcancel", ft), e.addEventListener("mousedown", pi), e.addEventListener("mouseup", ft), e.addEventListener("mouseleave", ft), e.addEventListener("keydown", e._ripple.keyDownHandler), e.addEventListener("keyup", Dd), e.addEventListener("blur", $d), e.addEventListener("dragstart", ft, {
      passive: !0
    });
  } else !s && n && Vd(e);
}
function Vd(e) {
  e.removeEventListener("touchstart", Ds), e.removeEventListener("mousedown", Ds), e.removeEventListener("touchstart", pi), e.removeEventListener("touchend", ft), e.removeEventListener("touchmove", Td), e.removeEventListener("touchcancel", ft), e.removeEventListener("mousedown", pi), e.removeEventListener("mouseup", ft), e.removeEventListener("mouseleave", ft), e._ripple?.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", Dd), e.removeEventListener("blur", $d), e.removeEventListener("dragstart", ft);
}
function wb(e, t) {
  Ad(e, t, !1);
}
function kb(e) {
  Vd(e), delete e._ripple;
}
function xb(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Od(t.oldValue);
  Ad(e, t, n);
}
const mi = {
  mounted: wb,
  unmounted: kb,
  updated: xb
}, _b = te({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: _d
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: Ye,
  appendIcon: Ye,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  spaced: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Di(),
  ...He(),
  ...er(),
  ...Mi(),
  ...Ai(),
  ...kd(),
  ...Sd(),
  ...Ys(),
  ...Fl(),
  ...xn(),
  ...zl(),
  ..._r(),
  ...lt({
    tag: "button"
  }),
  ...kt(),
  ...tr({
    variant: "elevated"
  })
}, "VBtn"), jl = Oe()({
  name: "VBtn",
  props: _b(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      themeClasses: i
    } = $t(e), {
      borderClasses: s
    } = $i(e), {
      densityClasses: o
    } = xr(e), {
      dimensionStyles: l
    } = Li(e), {
      elevationClasses: a
    } = Vi(e), {
      loaderClasses: u
    } = Cd(e), {
      locationStyles: c
    } = Xs(e), {
      positionClasses: f
    } = Bl(e), {
      roundedClasses: d
    } = _n(e), {
      sizeClasses: p,
      sizeStyles: g
    } = Pi(e), b = Yo(e, e.symbol, !1), S = Hl(e, n), v = z(() => e.active !== void 0 ? e.active : S.isRouterLink.value ? S.isActive?.value : b?.isSelected.value), w = /* @__PURE__ */ W(() => v.value ? e.activeColor ?? e.color : e.color), x = z(() => ({
      color: b?.isSelected.value && (!S.isLink.value || S.isActive?.value) || !b || S.isActive?.value ? w.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    })), {
      colorClasses: I,
      colorStyles: E,
      variantClasses: L
    } = Ri(x), M = z(() => b?.disabled.value || e.disabled), k = /* @__PURE__ */ W(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), A = z(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function U(X) {
      M.value || S.isLink.value && (X.metaKey || X.ctrlKey || X.shiftKey || X.button !== 0 || n.target === "_blank") || (S.isRouterLink.value ? S.navigate.value?.(X) : b?.toggle());
    }
    return mb(S, b?.select), Ge(() => {
      const X = S.isLink.value ? "a" : e.tag, V = !!(e.prependIcon || r.prepend), F = !!(e.appendIcon || r.append), q = !!(e.icon && e.icon !== !0);
      return Wn(T(X, me(S.linkProps, {
        type: X === "a" ? void 0 : "button",
        class: ["v-btn", b?.selectedClass.value, {
          "v-btn--active": v.value,
          "v-btn--block": e.block,
          "v-btn--disabled": M.value,
          "v-btn--elevated": k.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, e.spaced ? ["v-btn--spaced", `v-btn--spaced-${e.spaced}`] : [], i.value, s.value, I.value, o.value, a.value, u.value, f.value, d.value, p.value, L.value, e.class],
        style: [E.value, l.value, c.value, g.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: M.value && X !== "a" || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: U,
        value: A.value
      }), {
        default: () => [Ii(!0, "v-btn"), !e.icon && V && j("span", {
          key: "prepend",
          class: "v-btn__prepend"
        }, [r.prepend ? T(at, {
          key: "prepend-defaults",
          disabled: !e.prependIcon,
          defaults: {
            VIcon: {
              icon: e.prependIcon
            }
          }
        }, r.prepend) : T(nt, {
          key: "prepend-icon",
          icon: e.prependIcon
        }, null)]), j("span", {
          class: "v-btn__content",
          "data-no-activator": ""
        }, [!r.default && q ? T(nt, {
          key: "content-icon",
          icon: e.icon
        }, null) : T(at, {
          key: "content-defaults",
          disabled: !q,
          defaults: {
            VIcon: {
              icon: e.icon
            }
          }
        }, {
          default: () => [r.default?.() ?? bn(e.text)]
        })]), !e.icon && F && j("span", {
          key: "append",
          class: "v-btn__append"
        }, [r.append ? T(at, {
          key: "append-defaults",
          disabled: !e.appendIcon,
          defaults: {
            VIcon: {
              icon: e.appendIcon
            }
          }
        }, r.append) : T(nt, {
          key: "append-icon",
          icon: e.appendIcon
        }, null)]), !!e.loading && j("span", {
          key: "loader",
          class: "v-btn__loader"
        }, [r.loader?.() ?? T(ob, {
          color: typeof e.loading == "boolean" ? void 0 : e.loading,
          indeterminate: !0,
          width: "2"
        }, null)])]
      }), [[mi, !M.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: b
    };
  }
}), Eb = te({
  ...He(),
  ...lt()
}, "VCardActions"), Sb = Oe()({
  name: "VCardActions",
  props: Eb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return qs({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), Ge(() => T(e.tag, {
      class: ce(["v-card-actions", e.class]),
      style: $e(e.style)
    }, n)), {};
  }
}), Cb = te({
  opacity: [Number, String],
  ...He(),
  ...lt()
}, "VCardSubtitle"), Nb = Oe()({
  name: "VCardSubtitle",
  props: Cb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ge(() => T(e.tag, {
      class: ce(["v-card-subtitle", e.class]),
      style: $e([{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Ob = sd("v-card-title");
function Tb(e) {
  return {
    aspectStyles: z(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Pd = te({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...He(),
  ...Mi()
}, "VResponsive"), Fc = Oe()({
  name: "VResponsive",
  props: Pd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: r
    } = Tb(e), {
      dimensionStyles: i
    } = Li(e);
    return Ge(() => j("div", {
      class: ce(["v-responsive", {
        "v-responsive--inline": e.inline
      }, e.class]),
      style: $e([i.value, e.style])
    }, [j("div", {
      class: "v-responsive__sizer",
      style: $e(r.value)
    }, null), n.additional?.(), n.default && j("div", {
      class: ce(["v-responsive__content", e.contentClass])
    }, [n.default()])])), {};
  }
}), Id = te({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Hr = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: r,
    disabled: i,
    group: s,
    target: o,
    ...l
  } = e, {
    component: a = s ? Cl : qn,
    ...u
  } = zo(r) ? r : {};
  let c;
  return zo(r) ? c = me(u, Qm({
    disabled: i,
    group: s,
    target: o
  }), l) : c = me({
    name: i || !r ? "" : r
  }, l), kr(a, c, n);
};
function Bc(e, t) {
  if (!Nl) return;
  const n = t.modifiers || {}, r = t.value, {
    handler: i,
    options: s
  } = typeof r == "object" ? r : {
    handler: r,
    options: {}
  }, o = new IntersectionObserver(function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = arguments.length > 1 ? arguments[1] : void 0;
    const u = e._observe?.[t.instance.$.uid];
    if (!u) return;
    const c = l.some((f) => f.isIntersecting);
    i && (!n.quiet || u.init) && (!n.once || c || u.init) && i(c, l, a), c && n.once ? Qo(e, t) : u.init = !0;
  }, s);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Qo(e, t) {
  const n = e._observe?.[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Hc = {
  mounted: Bc,
  unmounted: Qo,
  updated: (e, t) => {
    e._observe?.[t.instance.$.uid] && (Qo(e, t), Bc(e, t));
  }
}, Db = te({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  imageClass: null,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Pd(),
  ...He(),
  ...xn(),
  ...Id()
}, "VImg"), Rd = Oe()({
  name: "VImg",
  directives: {
    vIntersect: Hc
  },
  props: Db(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: r
    } = t;
    const {
      backgroundColorClasses: i,
      backgroundColorStyles: s
    } = Xr(() => e.color), {
      roundedClasses: o
    } = _n(e), l = Xe("VImg"), a = /* @__PURE__ */ ke(""), u = /* @__PURE__ */ Ie(), c = /* @__PURE__ */ ke(e.eager ? "loading" : "idle"), f = /* @__PURE__ */ ke(), d = /* @__PURE__ */ ke();
    let p = !1;
    const g = z(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), b = z(() => g.value.aspect || f.value / d.value || 0);
    ae(() => e.src, () => {
      S(c.value !== "idle");
    }), ae(b, (F, q) => {
      !F && q && u.value && E(u.value);
    }), ae(u, (F) => {
      !F || c.value === "idle" || (b.value || E(F), x(F), p && (p = !1, n("load", F.currentSrc || g.value.src)));
    }), of(() => S());
    function S(F) {
      if (!(e.eager && F) && !(Nl && !F && !e.eager)) {
        if (c.value = "loading", g.value.lazySrc) {
          const q = new Image();
          q.src = g.value.lazySrc, E(q, null);
        }
        g.value.src && fn(() => {
          n("loadstart", u.value?.currentSrc || g.value.src), setTimeout(() => {
            if (!l.isUnmounted)
              if (u.value?.complete) {
                if (u.value.naturalWidth || w(), c.value === "error") return;
                b.value || E(u.value, null), c.value === "loading" && v();
              } else u.value && (b.value || E(u.value), x(u.value));
          });
        });
      }
    }
    function v() {
      l.isUnmounted || (u.value ? (x(u.value), E(u.value), n("load", u.value.currentSrc || g.value.src)) : p = !0, c.value = "loaded");
    }
    function w() {
      l.isUnmounted || (c.value = "error", n("error", u.value?.currentSrc || g.value.src));
    }
    function x(F) {
      a.value = F.currentSrc || F.src;
    }
    let I = -1;
    Xn(() => {
      clearTimeout(I);
    });
    function E(F) {
      let q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const K = () => {
        if (clearTimeout(I), l.isUnmounted) return;
        const {
          naturalHeight: oe,
          naturalWidth: G
        } = F;
        oe || G ? (f.value = G, d.value = oe) : !F.complete && c.value === "loading" && q != null ? I = window.setTimeout(K, q) : (F.currentSrc.endsWith(".svg") || F.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
      };
      K();
    }
    const L = /* @__PURE__ */ W(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), M = () => {
      if (!g.value.src || c.value === "idle") return null;
      const F = j("img", {
        class: ce(["v-img__img", L.value, e.imageClass]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.src,
        srcset: g.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: u,
        onLoad: v,
        onError: w
      }, null), q = r.sources?.();
      return T(Hr, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Wn(q ? j("picture", {
          class: "v-img__picture"
        }, [q, F]) : F, [[Sl, c.value === "loaded"]])]
      });
    }, k = () => T(Hr, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && c.value !== "loaded" && j("img", {
        class: ce(["v-img__img", "v-img__img--preload", L.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), A = () => r.placeholder ? T(Hr, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(c.value === "loading" || c.value === "error" && !r.error) && j("div", {
        class: "v-img__placeholder"
      }, [r.placeholder()])]
    }) : null, U = () => r.error ? T(Hr, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [c.value === "error" && j("div", {
        class: "v-img__error"
      }, [r.error()])]
    }) : null, X = () => e.gradient ? j("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, V = /* @__PURE__ */ ke(!1);
    {
      const F = ae(b, (q) => {
        q && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = !0;
          });
        }), F());
      });
    }
    return Ge(() => {
      const F = Fc.filterProps(e);
      return Wn(T(Fc, me({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !V.value,
          "v-img--fit-content": e.width === "fit-content"
        }, i.value, o.value, e.class],
        style: [{
          width: le(e.width === "auto" ? f.value : e.width)
        }, s.value, e.style]
      }, F, {
        aspectRatio: b.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => j(Ve, null, [T(M, null, null), T(k, null, null), T(X, null, null), T(A, null, null), T(U, null, null)]),
        default: r.default
      }), [[Hc, {
        handler: S,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: a,
      image: u,
      state: c,
      naturalWidth: f,
      naturalHeight: d
    };
  }
}), $b = te({
  start: Boolean,
  end: Boolean,
  icon: Ye,
  image: String,
  text: String,
  ...Di(),
  ...He(),
  ...er(),
  ...xn(),
  ..._r(),
  ...lt(),
  ...kt(),
  ...tr({
    variant: "flat"
  })
}, "VAvatar"), $s = Oe()({
  name: "VAvatar",
  props: $b(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: r
    } = $t(e), {
      borderClasses: i
    } = $i(e), {
      colorClasses: s,
      colorStyles: o,
      variantClasses: l
    } = Ri(e), {
      densityClasses: a
    } = xr(e), {
      roundedClasses: u
    } = _n(e), {
      sizeClasses: c,
      sizeStyles: f
    } = Pi(e);
    return Ge(() => T(e.tag, {
      class: ce(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, r.value, i.value, s.value, a.value, u.value, c.value, l.value, e.class]),
      style: $e([o.value, f.value, e.style])
    }, {
      default: () => [n.default ? T(at, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? T(Rd, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? T(nt, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ii(!1, "v-avatar")]
    })), {};
  }
}), Ab = te({
  appendAvatar: String,
  appendIcon: Ye,
  prependAvatar: String,
  prependIcon: Ye,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...He(),
  ...er(),
  ...lt()
}, "VCardItem"), Vb = Oe()({
  name: "VCardItem",
  props: Ab(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ge(() => {
      const r = !!(e.prependAvatar || e.prependIcon), i = !!(r || n.prepend), s = !!(e.appendAvatar || e.appendIcon), o = !!(s || n.append), l = !!(e.title != null || n.title), a = !!(e.subtitle != null || n.subtitle);
      return T(e.tag, {
        class: ce(["v-card-item", e.class]),
        style: $e(e.style)
      }, {
        default: () => [i && j("div", {
          key: "prepend",
          class: "v-card-item__prepend"
        }, [n.prepend ? T(at, {
          key: "prepend-defaults",
          disabled: !r,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.prependAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.prependIcon
            }
          }
        }, n.prepend) : j(Ve, null, [e.prependAvatar && T($s, {
          key: "prepend-avatar",
          density: e.density,
          image: e.prependAvatar
        }, null), e.prependIcon && T(nt, {
          key: "prepend-icon",
          density: e.density,
          icon: e.prependIcon
        }, null)])]), j("div", {
          class: "v-card-item__content"
        }, [l && T(Ob, {
          key: "title"
        }, {
          default: () => [n.title?.() ?? bn(e.title)]
        }), a && T(Nb, {
          key: "subtitle"
        }, {
          default: () => [n.subtitle?.() ?? bn(e.subtitle)]
        }), n.default?.()]), o && j("div", {
          key: "append",
          class: "v-card-item__append"
        }, [n.append ? T(at, {
          key: "append-defaults",
          disabled: !s,
          defaults: {
            VAvatar: {
              density: e.density,
              image: e.appendAvatar
            },
            VIcon: {
              density: e.density,
              icon: e.appendIcon
            }
          }
        }, n.append) : j(Ve, null, [e.appendIcon && T(nt, {
          key: "append-icon",
          density: e.density,
          icon: e.appendIcon
        }, null), e.appendAvatar && T($s, {
          key: "append-avatar",
          density: e.density,
          image: e.appendAvatar
        }, null)])])]
      });
    }), {};
  }
}), Pb = te({
  opacity: [Number, String],
  ...He(),
  ...lt()
}, "VCardText"), Ib = Oe()({
  name: "VCardText",
  props: Pb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Ge(() => T(e.tag, {
      class: ce(["v-card-text", e.class]),
      style: $e([{
        "--v-card-text-opacity": e.opacity
      }, e.style])
    }, n)), {};
  }
}), Rb = te({
  appendAvatar: String,
  appendIcon: Ye,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: Ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Di(),
  ...He(),
  ...er(),
  ...Mi(),
  ...Ai(),
  ...Sd(),
  ...Ys(),
  ...Fl(),
  ...xn(),
  ...zl(),
  ...lt(),
  ...kt(),
  ...tr({
    variant: "elevated"
  })
}, "VCard"), Md = Oe()({
  name: "VCard",
  directives: {
    vRipple: mi
  },
  props: Rb(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      themeClasses: i
    } = $t(e), {
      borderClasses: s
    } = $i(e), {
      colorClasses: o,
      colorStyles: l,
      variantClasses: a
    } = Ri(e), {
      densityClasses: u
    } = xr(e), {
      dimensionStyles: c
    } = Li(e), {
      elevationClasses: f
    } = Vi(e), {
      loaderClasses: d
    } = Cd(e), {
      locationStyles: p
    } = Xs(e), {
      positionClasses: g
    } = Bl(e), {
      roundedClasses: b
    } = _n(e), S = Hl(e, n), v = /* @__PURE__ */ ke(void 0);
    return ae(() => e.loading, (w, x) => {
      v.value = !w && typeof x == "string" ? x : typeof w == "boolean" ? void 0 : w;
    }, {
      immediate: !0
    }), Ge(() => {
      const w = e.link !== !1 && S.isLink.value, x = !e.disabled && e.link !== !1 && (e.link || S.isClickable.value), I = w ? "a" : e.tag, E = !!(r.title || e.title != null), L = !!(r.subtitle || e.subtitle != null), M = E || L, k = !!(r.append || e.appendAvatar || e.appendIcon), A = !!(r.prepend || e.prependAvatar || e.prependIcon), U = !!(r.image || e.image), X = M || A || k, V = !!(r.text || e.text != null);
      return Wn(T(I, me(S.linkProps, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": x
        }, i.value, s.value, o.value, u.value, f.value, d.value, g.value, b.value, a.value, e.class],
        style: [l.value, c.value, p.value, {
          "--v-card-height": le(e.height)
        }, e.style],
        onClick: x && S.navigate.value,
        tabindex: e.disabled ? -1 : void 0
      }), {
        default: () => [U && j("div", {
          key: "image",
          class: "v-card__image"
        }, [r.image ? T(at, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, r.image) : T(Rd, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), T(fb, {
          name: "v-card",
          active: !!e.loading,
          color: v.value
        }, {
          default: r.loader
        }), X && T(Vb, {
          key: "item",
          prependAvatar: e.prependAvatar,
          prependIcon: e.prependIcon,
          title: e.title,
          subtitle: e.subtitle,
          appendAvatar: e.appendAvatar,
          appendIcon: e.appendIcon
        }, {
          default: r.item,
          prepend: r.prepend,
          title: r.title,
          subtitle: r.subtitle,
          append: r.append
        }), V && T(Ib, {
          key: "text"
        }, {
          default: () => [r.text?.() ?? e.text]
        }), r.default?.(), r.actions && T(Sb, null, {
          default: r.actions
        }), Ii(x, "v-card")]
      }), [[mi, x && e.ripple]]);
    }), {};
  }
}), Mb = te({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function gt(e, t, n) {
  return Oe()({
    name: e,
    props: Mb({
      mode: n,
      origin: t
    }),
    setup(r, i) {
      let {
        slots: s
      } = i;
      const o = {
        onBeforeEnter(l) {
          r.origin && (l.style.transformOrigin = r.origin);
        },
        onLeave(l) {
          if (r.leaveAbsolute) {
            const {
              offsetTop: a,
              offsetLeft: u,
              offsetWidth: c,
              offsetHeight: f
            } = l;
            l._transitionInitialStyles = {
              position: l.style.position,
              top: l.style.top,
              left: l.style.left,
              width: l.style.width,
              height: l.style.height
            }, l.style.position = "absolute", l.style.top = `${a}px`, l.style.left = `${u}px`, l.style.width = `${c}px`, l.style.height = `${f}px`;
          }
          r.hideOnLeave && l.style.setProperty("display", "none", "important");
        },
        onAfterLeave(l) {
          if (r.leaveAbsolute && l?._transitionInitialStyles) {
            const {
              position: a,
              top: u,
              left: c,
              width: f,
              height: d
            } = l._transitionInitialStyles;
            delete l._transitionInitialStyles, l.style.position = a || "", l.style.top = u || "", l.style.left = c || "", l.style.width = f || "", l.style.height = d || "";
          }
        }
      };
      return () => {
        const l = r.group ? Cl : qn;
        return kr(l, {
          name: r.disabled ? "" : e,
          css: !r.disabled,
          ...r.group ? void 0 : {
            mode: r.mode
          },
          ...r.disabled ? {} : o
        }, s.default);
      };
    }
  });
}
function Wl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Oe()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: {
        type: Boolean,
        default: ci()
      },
      group: Boolean,
      hideOnLeave: Boolean
    },
    setup(r, i) {
      let {
        slots: s
      } = i;
      const o = r.group ? Cl : qn;
      return () => kr(o, {
        name: r.disabled ? "" : e,
        css: !r.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...r.disabled ? {} : {
          ...t,
          onLeave: (l) => {
            r.hideOnLeave ? l.style.setProperty("display", "none", "important") : t.onLeave?.(l);
          }
        }
      }, s.default);
    }
  });
}
function Ul() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  return {
    onBeforeEnter(i) {
      i._parent = i.parentNode, i._initialStyle = {
        transition: i.style.transition,
        overflow: i.style.overflow,
        width: i.style.width,
        height: i.style.height
      };
    },
    onEnter(i) {
      const s = i._initialStyle;
      if (!s) return;
      i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
      const o = `${i.offsetWidth}px`, l = `${i.offsetHeight}px`;
      ["x", "both"].includes(t) && (i.style.width = "0"), ["y", "both"].includes(t) && (i.style.height = "0"), i.offsetHeight, i.style.transition = s.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
        ["x", "both"].includes(t) && (i.style.width = o), ["y", "both"].includes(t) && (i.style.height = l);
      });
    },
    onAfterEnter: r,
    onEnterCancelled: r,
    onLeave(i) {
      i._initialStyle = {
        transition: "",
        overflow: i.style.overflow,
        width: i.style.width,
        height: i.style.height
      }, i.style.overflow = "hidden", ["x", "both"].includes(t) && (i.style.width = `${i.offsetWidth}px`), ["y", "both"].includes(t) && (i.style.height = `${i.offsetHeight}px`), i.offsetHeight, requestAnimationFrame(() => {
        ["x", "both"].includes(t) && (i.style.width = "0"), ["y", "both"].includes(t) && (i.style.height = "0");
      });
    },
    onAfterLeave: n,
    onLeaveCancelled: n
  };
  function n(i) {
    e && i._parent && i._parent.classList.remove(e), r(i);
  }
  function r(i) {
    if (!i._initialStyle) return;
    const {
      width: s,
      height: o
    } = i._initialStyle;
    i.style.overflow = i._initialStyle.overflow, s != null && ["x", "both"].includes(t) && (i.style.width = s), o != null && ["y", "both"].includes(t) && (i.style.height = o), delete i._initialStyle;
  }
}
const Lb = te({
  target: [Object, Array]
}, "v-dialog-transition"), bo = /* @__PURE__ */ new WeakMap(), Fb = Oe()({
  name: "VDialogTransition",
  props: Lb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = {
      onBeforeEnter(i) {
        i.style.pointerEvents = "none", i.style.visibility = "hidden";
      },
      async onEnter(i, s) {
        await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), i.style.visibility = "";
        const o = jc(e.target, i), {
          x: l,
          y: a,
          sx: u,
          sy: c,
          speed: f
        } = o;
        if (bo.set(i, o), ci())
          Vn(i, [{
            opacity: 0
          }, {}], {
            duration: 125 * f,
            easing: kc
          }).finished.then(() => s());
        else {
          const d = Vn(i, [{
            transform: `translate(${l}px, ${a}px) scale(${u}, ${c})`,
            opacity: 0
          }, {}], {
            duration: 225 * f,
            easing: kc
          });
          zc(i)?.forEach((p) => {
            Vn(p, [{
              opacity: 0
            }, {
              opacity: 0,
              offset: 0.33
            }, {}], {
              duration: 450 * f,
              easing: Go
            });
          }), d.finished.then(() => s());
        }
      },
      onAfterEnter(i) {
        i.style.removeProperty("pointer-events");
      },
      onBeforeLeave(i) {
        i.style.pointerEvents = "none";
      },
      async onLeave(i, s) {
        await new Promise((d) => requestAnimationFrame(d));
        let o;
        !bo.has(i) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = jc(e.target, i) : o = bo.get(i);
        const {
          x: l,
          y: a,
          sx: u,
          sy: c,
          speed: f
        } = o;
        ci() ? Vn(i, [{}, {
          opacity: 0
        }], {
          duration: 85 * f,
          easing: xc
        }).finished.then(() => s()) : (Vn(i, [{}, {
          transform: `translate(${l}px, ${a}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * f,
          easing: xc
        }).finished.then(() => s()), zc(i)?.forEach((p) => {
          Vn(p, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 250 * f,
            easing: Go
          });
        }));
      },
      onAfterLeave(i) {
        i.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? T(qn, me({
      name: "dialog-transition"
    }, r, {
      css: !1
    }), n) : T(qn, {
      name: "dialog-transition"
    }, n);
  }
});
function zc(e) {
  const t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;
  return t && [...t];
}
function jc(e, t) {
  const n = Tl(e), r = Jf(t), [i, s] = getComputedStyle(t).transformOrigin.split(" ").map((v) => parseFloat(v)), [o, l] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let a = n.left + n.width / 2;
  o === "left" || l === "left" ? a -= n.width / 2 : (o === "right" || l === "right") && (a += n.width / 2);
  let u = n.top + n.height / 2;
  o === "top" || l === "top" ? u -= n.height / 2 : (o === "bottom" || l === "bottom") && (u += n.height / 2);
  const c = n.width / r.width, f = n.height / r.height, d = Math.max(1, c, f), p = c / d || 0, g = f / d || 0, b = r.width * r.height / (window.innerWidth * window.innerHeight), S = b > 0.12 ? Math.min(1.5, (b - 0.12) * 10 + 1) : 1;
  return {
    x: a - (i + r.left),
    y: u - (s + r.top),
    sx: p,
    sy: g,
    speed: S
  };
}
gt("fab-transition", "center center", "out-in");
gt("dialog-bottom-transition");
gt("dialog-top-transition");
const Wc = gt("fade-transition");
gt("scale-transition");
gt("scroll-x-transition");
gt("scroll-x-reverse-transition");
gt("scroll-y-transition");
gt("scroll-y-reverse-transition");
gt("slide-x-transition");
gt("slide-x-reverse-transition");
gt("slide-y-transition");
gt("slide-y-reverse-transition");
Wl("expand-transition", Ul());
const Bb = Wl("expand-x-transition", Ul("", "x"));
Wl("expand-both-transition", Ul("", "both"));
function Hb(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isRtl: r,
    isHorizontal: i
  } = e;
  const s = vi(i, n), o = Ld(i, r, n), l = vi(i, t), a = Fd(i, t), u = l * 0.4;
  return o > a ? a - u : o + s < a + l ? a - s + l + u : o;
}
function zb(e) {
  let {
    selectedElement: t,
    containerElement: n,
    isHorizontal: r
  } = e;
  const i = vi(r, n), s = Fd(r, t), o = vi(r, t);
  return s - i / 2 + o / 2;
}
function Uc(e, t) {
  return t?.[e ? "scrollWidth" : "scrollHeight"] || 0;
}
function jb(e, t) {
  return t?.[e ? "clientWidth" : "clientHeight"] || 0;
}
function Ld(e, t, n) {
  if (!n)
    return 0;
  const {
    scrollLeft: r,
    offsetWidth: i,
    scrollWidth: s
  } = n;
  return e ? t ? s - i + r : r : n.scrollTop;
}
function vi(e, t) {
  return t?.[e ? "offsetWidth" : "offsetHeight"] || 0;
}
function Fd(e, t) {
  return t?.[e ? "offsetLeft" : "offsetTop"] || 0;
}
const Bd = /* @__PURE__ */ Symbol.for("vuetify:v-slide-group"), Hd = te({
  centerActive: Boolean,
  scrollToActive: {
    type: Boolean,
    default: !0
  },
  contentClass: null,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Bd
  },
  nextIcon: {
    type: Ye,
    default: "$next"
  },
  prevIcon: {
    type: Ye,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile", "never"].includes(e)
  },
  ...He(),
  ...Ay({
    mobile: null
  }),
  ...lt(),
  ...Ml({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Gc = Oe()({
  name: "VSlideGroup",
  props: Hd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: r
    } = Oi(), {
      displayClasses: i,
      mobile: s
    } = md(e), o = Ll(e, e.symbol), l = /* @__PURE__ */ ke(!1), a = /* @__PURE__ */ ke(0), u = /* @__PURE__ */ ke(0), c = /* @__PURE__ */ ke(0), f = z(() => e.direction === "horizontal"), {
      resizeRef: d,
      contentRect: p
    } = Os(), {
      resizeRef: g,
      contentRect: b
    } = Os(), S = Iy(), v = z(() => ({
      container: d.el,
      duration: 200,
      easing: "easeOutQuart"
    })), w = z(() => o.selected.value.length ? o.items.value.findIndex((Z) => Z.id === o.selected.value[0]) : -1), x = z(() => o.selected.value.length ? o.items.value.findIndex((Z) => Z.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Ne) {
      let Z = -1;
      ae(() => [o.selected.value, p.value, b.value, f.value], () => {
        cancelAnimationFrame(Z), Z = requestAnimationFrame(() => {
          if (p.value && b.value) {
            const Y = f.value ? "width" : "height";
            u.value = p.value[Y], c.value = b.value[Y], l.value = u.value + 1 < c.value;
          }
          if (e.scrollToActive && w.value >= 0 && g.el) {
            const Y = g.el.children[x.value];
            E(Y, e.centerActive);
          }
        });
      });
    }
    const I = /* @__PURE__ */ ke(!1);
    function E(Z, Y) {
      let ve = 0;
      Y ? ve = zb({
        containerElement: d.el,
        isHorizontal: f.value,
        selectedElement: Z
      }) : ve = Hb({
        containerElement: d.el,
        isHorizontal: f.value,
        isRtl: r.value,
        selectedElement: Z
      }), L(ve);
    }
    function L(Z) {
      if (!Ne || !d.el) return;
      const Y = vi(f.value, d.el), ve = Ld(f.value, r.value, d.el);
      if (!(Uc(f.value, d.el) <= Y || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(Z - ve) < 16)) {
        if (f.value && r.value && d.el) {
          const {
            scrollWidth: Sn,
            offsetWidth: he
          } = d.el;
          Z = Sn - he - Z;
        }
        f.value ? S.horizontal(Z, v.value) : S(Z, v.value);
      }
    }
    function M(Z) {
      const {
        scrollTop: Y,
        scrollLeft: ve
      } = Z.target;
      a.value = f.value ? ve : Y;
    }
    function k(Z) {
      if (I.value = !0, !(!l.value || !g.el)) {
        for (const Y of Z.composedPath())
          for (const ve of g.el.children)
            if (ve === Y) {
              E(ve);
              return;
            }
      }
    }
    function A(Z) {
      I.value = !1;
    }
    let U = !1;
    function X(Z) {
      !U && !I.value && !(Z.relatedTarget && g.el?.contains(Z.relatedTarget)) && K(), U = !1;
    }
    function V() {
      U = !0;
    }
    function F(Z) {
      if (!g.el) return;
      function Y(ve) {
        Z.preventDefault(), K(ve);
      }
      f.value ? Z.key === "ArrowRight" ? Y(r.value ? "prev" : "next") : Z.key === "ArrowLeft" && Y(r.value ? "next" : "prev") : Z.key === "ArrowDown" ? Y("next") : Z.key === "ArrowUp" && Y("prev"), Z.key === "Home" ? Y("first") : Z.key === "End" && Y("last");
    }
    function q(Z, Y) {
      if (!Z) return;
      let ve = Z;
      do
        ve = ve?.[Y === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (ve?.hasAttribute("disabled"));
      return ve;
    }
    function K(Z) {
      if (!g.el) return;
      let Y;
      if (!Z)
        Y = Kr(g.el)[0];
      else if (Z === "next") {
        if (Y = q(g.el.querySelector(":focus"), Z), !Y) return K("first");
      } else if (Z === "prev") {
        if (Y = q(g.el.querySelector(":focus"), Z), !Y) return K("last");
      } else Z === "first" ? (Y = g.el.firstElementChild, Y?.hasAttribute("disabled") && (Y = q(Y, "next"))) : Z === "last" && (Y = g.el.lastElementChild, Y?.hasAttribute("disabled") && (Y = q(Y, "prev")));
      Y && Y.focus({
        preventScroll: !0
      });
    }
    function oe(Z) {
      const Y = f.value && r.value ? -1 : 1, ve = (Z === "prev" ? -Y : Y) * u.value;
      let En = a.value + ve;
      if (f.value && r.value && d.el) {
        const {
          scrollWidth: Sn,
          offsetWidth: he
        } = d.el;
        En += Sn - he;
      }
      L(En);
    }
    const G = z(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), J = z(() => l.value || Math.abs(a.value) > 0), Pe = z(() => {
      switch (e.showArrows) {
        case "never":
          return !1;
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !s.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return J.value;
        // Always show on mobile
        case "mobile":
          return s.value || J.value;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !s.value && J.value;
      }
    }), Se = z(() => Math.abs(a.value) > 1), Me = z(() => {
      if (!d.value || !J.value) return !1;
      const Z = Uc(f.value, d.el), Y = jb(f.value, d.el);
      return Z - Y - Math.abs(a.value) > 1;
    });
    return Ge(() => T(e.tag, {
      class: ce(["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": Pe.value,
        "v-slide-group--is-overflowing": l.value
      }, i.value, e.class]),
      style: $e(e.style),
      tabindex: I.value || o.selected.value.length ? -1 : 0,
      onFocus: X
    }, {
      default: () => [Pe.value && j("div", {
        key: "prev",
        class: ce(["v-slide-group__prev", {
          "v-slide-group__prev--disabled": !Se.value
        }]),
        onMousedown: V,
        onClick: () => Se.value && oe("prev")
      }, [n.prev?.(G.value) ?? T(Wc, null, {
        default: () => [T(nt, {
          icon: r.value ? e.nextIcon : e.prevIcon
        }, null)]
      })]), j("div", {
        key: "container",
        ref: d,
        class: ce(["v-slide-group__container", e.contentClass]),
        onScroll: M
      }, [j("div", {
        ref: g,
        class: "v-slide-group__content",
        onFocusin: k,
        onFocusout: A,
        onKeydown: F
      }, [n.default?.(G.value)])]), Pe.value && j("div", {
        key: "next",
        class: ce(["v-slide-group__next", {
          "v-slide-group__next--disabled": !Me.value
        }]),
        onMousedown: V,
        onClick: () => Me.value && oe("next")
      }, [n.next?.(G.value) ?? T(Wc, null, {
        default: () => [T(nt, {
          icon: r.value ? e.prevIcon : e.nextIcon
        }, null)]
      })])]
    })), {
      selected: o.selected,
      scrollTo: oe,
      scrollOffset: a,
      focus: K,
      hasPrev: Se,
      hasNext: Me
    };
  }
}), zd = /* @__PURE__ */ Symbol.for("vuetify:v-chip-group"), Wb = te({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: Hn
  },
  ...Hd({
    scrollToActive: !1
  }),
  ...He(),
  ...Ml({
    selectedClass: "v-chip--selected"
  }),
  ...lt(),
  ...kt(),
  ...tr({
    variant: "tonal"
  })
}, "VChipGroup");
Oe()({
  name: "VChipGroup",
  props: Wb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: r
    } = $t(e), {
      isSelected: i,
      select: s,
      next: o,
      prev: l,
      selected: a
    } = Ll(e, zd);
    return qs({
      VChip: {
        baseColor: /* @__PURE__ */ W(() => e.baseColor),
        color: /* @__PURE__ */ W(() => e.color),
        disabled: /* @__PURE__ */ W(() => e.disabled),
        filter: /* @__PURE__ */ W(() => e.filter),
        variant: /* @__PURE__ */ W(() => e.variant)
      }
    }), Ge(() => {
      const u = Gc.filterProps(e);
      return T(Gc, me(u, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => [n.default?.({
          isSelected: i,
          select: s,
          next: o,
          prev: l,
          selected: a.value
        })]
      });
    }), {};
  }
});
const Ub = te({
  activeClass: String,
  appendAvatar: String,
  appendIcon: Ye,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: Ye,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: Ye,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: Ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: sc(),
  onClickOnce: sc(),
  ...Di(),
  ...He(),
  ...er(),
  ...Ai(),
  ...kd(),
  ...xn(),
  ...zl(),
  ..._r(),
  ...lt({
    tag: "span"
  }),
  ...kt(),
  ...tr({
    variant: "tonal"
  })
}, "VChip"), jd = Oe()({
  name: "VChip",
  directives: {
    vRipple: mi
  },
  props: Ub(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: r,
      slots: i
    } = t;
    const {
      t: s
    } = dd(), {
      borderClasses: o
    } = $i(e), {
      densityClasses: l
    } = xr(e), {
      elevationClasses: a
    } = Vi(e), {
      roundedClasses: u
    } = _n(e), {
      sizeClasses: c
    } = Pi(e), {
      themeClasses: f
    } = $t(e), d = Jn(e, "modelValue"), p = Yo(e, zd, !1), g = Yo(e, Bd, !1), b = Hl(e, n), S = /* @__PURE__ */ W(() => e.link !== !1 && b.isLink.value), v = z(() => !e.disabled && e.link !== !1 && (!!p || e.link || b.isClickable.value)), w = /* @__PURE__ */ W(() => ({
      "aria-label": s(e.closeLabel),
      disabled: e.disabled,
      onClick(k) {
        k.preventDefault(), k.stopPropagation(), d.value = !1, r("click:close", k);
      }
    }));
    ae(d, (k) => {
      k ? (p?.register(), g?.register()) : (p?.unregister(), g?.unregister());
    });
    const {
      colorClasses: x,
      colorStyles: I,
      variantClasses: E
    } = Ri(() => ({
      color: !p || p.isSelected.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    function L(k) {
      r("click", k), v.value && (b.navigate.value?.(k), p?.toggle());
    }
    function M(k) {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), L(k));
    }
    return () => {
      const k = b.isLink.value ? "a" : e.tag, A = !!(e.appendIcon || e.appendAvatar), U = !!(A || i.append), X = !!(i.close || e.closable), V = !!(i.filter || e.filter) && p, F = !!(e.prependIcon || e.prependAvatar), q = !!(F || i.prepend);
      return d.value && Wn(T(k, me(b.linkProps, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": v.value,
          "v-chip--filter": V,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && b.isActive?.value
        }, f.value, o.value, x.value, l.value, a.value, u.value, c.value, E.value, p?.selectedClass.value, e.class],
        style: [I.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: v.value ? 0 : void 0,
        onClick: L,
        onKeydown: v.value && !S.value && M
      }), {
        default: () => [Ii(v.value, "v-chip"), V && T(Bb, {
          key: "filter"
        }, {
          default: () => [Wn(j("div", {
            class: "v-chip__filter"
          }, [i.filter ? T(at, {
            key: "filter-defaults",
            disabled: !e.filterIcon,
            defaults: {
              VIcon: {
                icon: e.filterIcon
              }
            }
          }, i.filter) : T(nt, {
            key: "filter-icon",
            icon: e.filterIcon
          }, null)]), [[Sl, p.isSelected.value]])]
        }), q && j("div", {
          key: "prepend",
          class: "v-chip__prepend"
        }, [i.prepend ? T(at, {
          key: "prepend-defaults",
          disabled: !F,
          defaults: {
            VAvatar: {
              image: e.prependAvatar,
              start: !0
            },
            VIcon: {
              icon: e.prependIcon,
              start: !0
            }
          }
        }, i.prepend) : j(Ve, null, [e.prependIcon && T(nt, {
          key: "prepend-icon",
          icon: e.prependIcon,
          start: !0
        }, null), e.prependAvatar && T($s, {
          key: "prepend-avatar",
          image: e.prependAvatar,
          start: !0
        }, null)])]), j("div", {
          class: "v-chip__content",
          "data-no-activator": ""
        }, [i.default?.({
          isSelected: p?.isSelected.value,
          selectedClass: p?.selectedClass.value,
          select: p?.select,
          toggle: p?.toggle,
          value: p?.value.value,
          disabled: e.disabled
        }) ?? bn(e.text)]), U && j("div", {
          key: "append",
          class: "v-chip__append"
        }, [i.append ? T(at, {
          key: "append-defaults",
          disabled: !A,
          defaults: {
            VAvatar: {
              end: !0,
              image: e.appendAvatar
            },
            VIcon: {
              end: !0,
              icon: e.appendIcon
            }
          }
        }, i.append) : j(Ve, null, [e.appendIcon && T(nt, {
          key: "append-icon",
          end: !0,
          icon: e.appendIcon
        }, null), e.appendAvatar && T($s, {
          key: "append-avatar",
          end: !0,
          image: e.appendAvatar
        }, null)])]), X && j("button", me({
          key: "close",
          class: "v-chip__close",
          type: "button",
          "data-testid": "close-chip"
        }, w.value), [i.close ? T(at, {
          key: "close-defaults",
          defaults: {
            VIcon: {
              icon: e.closeIcon,
              size: "x-small"
            }
          }
        }, i.close) : T(nt, {
          key: "close-icon",
          icon: e.closeIcon,
          size: "x-small"
        }, null)])]
      }), [[mi, v.value && e.ripple, null]]);
    };
  }
}), Gb = ["dotted", "dashed", "solid", "double"], qb = te({
  color: String,
  contentOffset: [Number, String, Array],
  gradient: Boolean,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  variant: {
    type: String,
    default: "solid",
    validator: (e) => Gb.includes(e)
  },
  ...He(),
  ...kt()
}, "VDivider"), Wd = Oe()({
  name: "VDivider",
  props: qb(),
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const {
      themeClasses: i
    } = $t(e), {
      textColorClasses: s,
      textColorStyles: o
    } = vr(() => e.color), l = z(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = le(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = le(e.thickness)), u;
    }), a = /* @__PURE__ */ W(() => {
      const u = Array.isArray(e.contentOffset) ? e.contentOffset[0] : e.contentOffset, c = Array.isArray(e.contentOffset) ? e.contentOffset[1] : 0;
      return {
        marginBlock: e.vertical && u ? le(u) : void 0,
        marginInline: !e.vertical && u ? le(u) : void 0,
        transform: c ? `translate${e.vertical ? "X" : "Y"}(${le(c)})` : void 0
      };
    });
    return Ge(() => {
      const u = j("hr", {
        class: ce([{
          "v-divider": !0,
          "v-divider--gradient": e.gradient && !r.default,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, i.value, s.value, e.class]),
        style: $e([l.value, o.value, {
          "--v-border-opacity": e.opacity
        }, {
          "border-style": e.variant
        }, e.style]),
        "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${n.role || "separator"}`
      }, null);
      return r.default ? j("div", {
        class: ce(["v-divider__wrapper", {
          "v-divider__wrapper--gradient": e.gradient,
          "v-divider__wrapper--inset": e.inset,
          "v-divider__wrapper--vertical": e.vertical
        }])
      }, [u, j("div", {
        class: "v-divider__content",
        style: $e(a.value)
      }, [r.default()]), u]) : u;
    }), {};
  }
});
function wo(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Kb(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function qc(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: r
    } = e, i = r === "left" ? 0 : r === "center" ? t.width / 2 : r === "right" ? t.width : r, s = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return wo({
      x: i,
      y: s
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: r
    } = e, i = n === "left" ? 0 : n === "right" ? t.width : n, s = r === "top" ? 0 : r === "center" ? t.height / 2 : r === "bottom" ? t.height : r;
    return wo({
      x: i,
      y: s
    }, t);
  }
  return wo({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Ud = {
  static: Zb,
  // specific viewport position, usually centered
  connected: Jb
  // connected to a certain element
}, Yb = te({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Ud
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array],
  stickToTarget: Boolean,
  viewportMargin: {
    type: [Number, String],
    default: 12
  }
}, "VOverlay-location-strategies");
function Xb(e, t) {
  const n = /* @__PURE__ */ Ie({}), r = /* @__PURE__ */ Ie();
  Ne && Ni(() => !!(t.isActive.value && e.locationStrategy), (l) => {
    ae(() => e.locationStrategy, l), ot(() => {
      window.removeEventListener("resize", i), visualViewport?.removeEventListener("resize", s), visualViewport?.removeEventListener("scroll", o), r.value = void 0;
    }), window.addEventListener("resize", i, {
      passive: !0
    }), visualViewport?.addEventListener("resize", s, {
      passive: !0
    }), visualViewport?.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? r.value = e.locationStrategy(t, e, n)?.updateLocation : r.value = Ud[e.locationStrategy](t, e, n)?.updateLocation;
  });
  function i(l) {
    r.value?.(l);
  }
  function s(l) {
    r.value?.(l);
  }
  function o(l) {
    r.value?.(l);
  }
  return {
    contentStyles: n,
    updateLocation: r
  };
}
function Zb() {
}
function Qb(e, t) {
  const n = Jf(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function Jb(e, t, n) {
  (Array.isArray(e.target.value) || Vv(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: i,
    preferredOrigin: s
  } = Ol(() => {
    const v = Wo(t.location, e.isRtl.value), w = t.origin === "overlap" ? v : t.origin === "auto" ? po(v) : Wo(t.origin, e.isRtl.value);
    return v.side === w.side && v.align === go(w).align ? {
      preferredAnchor: ac(v),
      preferredOrigin: ac(w)
    } : {
      preferredAnchor: v,
      preferredOrigin: w
    };
  }), [o, l, a, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((v) => z(() => {
    const w = parseFloat(t[v]);
    return isNaN(w) ? 1 / 0 : w;
  })), c = z(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const v = t.offset.split(" ").map(parseFloat);
      return v.length < 2 && v.push(0), v;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = !1, d = -1;
  const p = new Ym(4), g = new ResizeObserver(() => {
    if (!f) return;
    if (requestAnimationFrame((w) => {
      w !== d && p.clear(), requestAnimationFrame((x) => {
        d = x;
      });
    }), p.isFull) {
      const w = p.values();
      if (Hn(w.at(-1), w.at(-3)) && !Hn(w.at(-1), w.at(-2)))
        return;
    }
    const v = S();
    v && p.push(v.flipped);
  });
  let b = new ht({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  ae(e.target, (v, w) => {
    w && !Array.isArray(w) && g.unobserve(w), Array.isArray(v) ? Hn(v, w) || S() : v && g.observe(v);
  }, {
    immediate: !0
  }), ae(e.contentEl, (v, w) => {
    w && g.unobserve(w), v && g.observe(v);
  }, {
    immediate: !0
  }), ot(() => {
    g.disconnect();
  });
  function S() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (b = Tl(e.target.value));
    const v = Qb(e.contentEl.value, e.isRtl.value), w = Es(e.contentEl.value), x = Number(t.viewportMargin);
    w.length || (w.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const I = w.reduce((F, q) => {
      const K = ev(q);
      return F ? new ht({
        x: Math.max(F.left, K.left),
        y: Math.max(F.top, K.top),
        width: Math.min(F.right, K.right) - Math.max(F.left, K.left),
        height: Math.min(F.bottom, K.bottom) - Math.max(F.top, K.top)
      }) : K;
    }, void 0);
    t.stickToTarget ? (I.x += Math.min(x, b.x), I.y += Math.min(x, b.y), I.width = Math.max(I.width - x * 2, b.x + b.width - x), I.height = Math.max(I.height - x * 2, b.y + b.height - x)) : (I.x += x, I.y += x, I.width -= x * 2, I.height -= x * 2);
    let E = {
      anchor: i.value,
      origin: s.value
    };
    function L(F) {
      const q = new ht(v), K = qc(F.anchor, b), oe = qc(F.origin, q);
      let {
        x: G,
        y: J
      } = Kb(K, oe);
      switch (F.anchor.side) {
        case "top":
          J -= c.value[0];
          break;
        case "bottom":
          J += c.value[0];
          break;
        case "left":
          G -= c.value[0];
          break;
        case "right":
          G += c.value[0];
          break;
      }
      switch (F.anchor.align) {
        case "top":
          J -= c.value[1];
          break;
        case "bottom":
          J += c.value[1];
          break;
        case "left":
          G -= c.value[1];
          break;
        case "right":
          G += c.value[1];
          break;
      }
      return q.x += G, q.y += J, q.width = Math.min(q.width, a.value), q.height = Math.min(q.height, u.value), {
        overflows: uc(q, I),
        x: G,
        y: J
      };
    }
    let M = 0, k = 0;
    const A = {
      x: 0,
      y: 0
    }, U = {
      x: !1,
      y: !1
    };
    let X = -1;
    for (; ; ) {
      if (X++ > 10) {
        ws("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: F,
        y: q,
        overflows: K
      } = L(E);
      M += F, k += q, v.x += F, v.y += q;
      {
        const oe = cc(E.anchor), G = K.x.before || K.x.after, J = K.y.before || K.y.after;
        let Pe = !1;
        if (["x", "y"].forEach((Se) => {
          if (Se === "x" && G && !U.x || Se === "y" && J && !U.y) {
            const Me = {
              anchor: {
                ...E.anchor
              },
              origin: {
                ...E.origin
              }
            }, Z = Se === "x" ? oe === "y" ? go : po : oe === "y" ? po : go;
            Me.anchor = Z(Me.anchor), Me.origin = Z(Me.origin);
            const {
              overflows: Y
            } = L(Me);
            (Y[Se].before <= K[Se].before && Y[Se].after <= K[Se].after || Y[Se].before + Y[Se].after < (K[Se].before + K[Se].after) / 2) && (E = Me, Pe = U[Se] = !0);
          }
        }), Pe) continue;
      }
      K.x.before && (M += K.x.before, v.x += K.x.before), K.x.after && (M -= K.x.after, v.x -= K.x.after), K.y.before && (k += K.y.before, v.y += K.y.before), K.y.after && (k -= K.y.after, v.y -= K.y.after);
      {
        const oe = uc(v, I);
        A.x = I.width - oe.x.before - oe.x.after, A.y = I.height - oe.y.before - oe.y.after, M += oe.x.before, v.x += oe.x.before, k += oe.y.before, v.y += oe.y.before;
      }
      break;
    }
    const V = cc(E.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${E.anchor.side} ${E.anchor.align}`,
      transformOrigin: `${E.origin.side} ${E.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: le(ko(k)),
      left: e.isRtl.value ? void 0 : le(ko(M)),
      right: e.isRtl.value ? le(ko(-M)) : void 0,
      minWidth: le(V === "y" ? Math.min(o.value, b.width) : o.value),
      maxWidth: le(Kc(cn(A.x, o.value === 1 / 0 ? 0 : o.value, a.value))),
      maxHeight: le(Kc(cn(A.y, l.value === 1 / 0 ? 0 : l.value, u.value)))
    }), {
      available: A,
      contentBox: v,
      flipped: U
    };
  }
  return ae(() => [i.value, s.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => S()), fn(() => {
    const v = S();
    if (!v) return;
    const {
      available: w,
      contentBox: x
    } = v;
    x.height > w.y && requestAnimationFrame(() => {
      S(), requestAnimationFrame(() => {
        S();
      });
    });
  }), {
    updateLocation: S
  };
}
function ko(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Kc(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Jo = !0;
const As = [];
function e0(e) {
  !Jo || As.length ? (As.push(e), el()) : (Jo = !1, e(), el());
}
let Yc = -1;
function el() {
  cancelAnimationFrame(Yc), Yc = requestAnimationFrame(() => {
    const e = As.shift();
    e && e(), As.length ? el() : Jo = !0;
  });
}
const Gd = {
  none: null,
  close: r0,
  block: i0,
  reposition: s0
}, t0 = te({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Gd
  }
}, "VOverlay-scroll-strategies");
function n0(e, t) {
  if (!Ne) return;
  let n;
  qt(async () => {
    n?.stop(), t.isActive.value && e.scrollStrategy && (n = Jr(), await new Promise((r) => setTimeout(r)), n.active && n.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : Gd[e.scrollStrategy]?.(t, e, n);
    }));
  }), ot(() => {
    n?.stop();
  });
}
function r0(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  qd(Gl(e.target.value, e.contentEl.value), t);
}
function i0(e, t) {
  const n = e.root.value?.offsetParent, r = Gl(e.target.value, e.contentEl.value), i = [.../* @__PURE__ */ new Set([...Es(r, t.contained ? n : void 0), ...Es(e.contentEl.value, t.contained ? n : void 0)])].filter((l) => !l.classList.contains("v-overlay-scroll-blocked")), s = window.innerWidth - document.documentElement.offsetWidth, o = ((l) => Al(l) && l)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), i.forEach((l, a) => {
    l.style.setProperty("--v-body-scroll-x", le(-l.scrollLeft)), l.style.setProperty("--v-body-scroll-y", le(-l.scrollTop)), l !== document.documentElement && l.style.setProperty("--v-scrollbar-offset", le(s)), l.classList.add("v-overlay-scroll-blocked");
  }), ot(() => {
    i.forEach((l, a) => {
      const u = parseFloat(l.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(l.style.getPropertyValue("--v-body-scroll-y")), f = l.style.scrollBehavior;
      l.style.scrollBehavior = "auto", l.style.removeProperty("--v-body-scroll-x"), l.style.removeProperty("--v-body-scroll-y"), l.style.removeProperty("--v-scrollbar-offset"), l.classList.remove("v-overlay-scroll-blocked"), l.scrollLeft = -u, l.scrollTop = -c, l.style.scrollBehavior = f;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function s0(e, t, n) {
  let r = !1, i = -1, s = -1;
  function o(l) {
    e0(() => {
      const a = performance.now();
      e.updateLocation.value?.(l), r = (performance.now() - a) / (1e3 / 60) > 2;
    });
  }
  s = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    n.run(() => {
      qd(Gl(e.target.value, e.contentEl.value), (l) => {
        r ? (cancelAnimationFrame(i), i = requestAnimationFrame(() => {
          i = requestAnimationFrame(() => {
            o(l);
          });
        })) : o(l);
      });
    });
  }), ot(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(s), cancelAnimationFrame(i);
  });
}
function Gl(e, t) {
  return Array.isArray(e) ? document.elementsFromPoint(...e).find((n) => !t?.contains(n)) : e ?? t;
}
function qd(e, t) {
  const n = [document, ...Es(e)];
  n.forEach((r) => {
    r.addEventListener("scroll", t, {
      passive: !0
    });
  }), ot(() => {
    n.forEach((r) => {
      r.removeEventListener("scroll", t);
    });
  });
}
const o0 = /* @__PURE__ */ Symbol.for("vuetify:v-menu"), l0 = te({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function a0(e, t) {
  let n = () => {
  };
  function r(o, l) {
    n?.();
    const a = o ? e.openDelay : e.closeDelay, u = Math.max(l?.minDelay ?? 0, Number(a ?? 0));
    return new Promise((c) => {
      n = Zm(u, () => {
        t?.(o), c(o);
      });
    });
  }
  function i() {
    return r(!0);
  }
  function s(o) {
    return r(!1, o);
  }
  return {
    clearDelay: n,
    runOpenDelay: i,
    runCloseDelay: s
  };
}
const c0 = te({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...l0()
}, "VOverlay-activator");
function u0(e, t) {
  let {
    isActive: n,
    isTop: r,
    contentEl: i
  } = t;
  const s = Xe("useActivator"), o = /* @__PURE__ */ Ie();
  let l = !1, a = !1, u = !0;
  const c = z(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = z(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: d,
    runCloseDelay: p
  } = a0(e, (k) => {
    k === (e.openOnHover && l || c.value && a) && !(e.openOnHover && n.value && !r.value) && (n.value !== k && (u = !0), n.value = k);
  }), g = /* @__PURE__ */ Ie(), b = {
    onClick: (k) => {
      k.stopPropagation(), o.value = k.currentTarget || k.target, n.value || (g.value = [k.clientX, k.clientY]), n.value = !n.value;
    },
    onMouseenter: (k) => {
      l = !0, o.value = k.currentTarget || k.target, d();
    },
    onMouseleave: (k) => {
      l = !1, p();
    },
    onFocus: (k) => {
      Xm(k.target, ":focus-visible") !== !1 && (a = !0, k.stopPropagation(), o.value = k.currentTarget || k.target, d());
    },
    onBlur: (k) => {
      a = !1, k.stopPropagation(), p({
        minDelay: 1
      });
    }
  }, S = z(() => {
    const k = {};
    return f.value && (k.onClick = b.onClick), e.openOnHover && (k.onMouseenter = b.onMouseenter, k.onMouseleave = b.onMouseleave), c.value && (k.onFocus = b.onFocus, k.onBlur = b.onBlur), k;
  }), v = z(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      l = !0, d();
    }, k.onMouseleave = () => {
      l = !1, p();
    }), c.value && (k.onFocusin = (A) => {
      A.target.matches(":focus-visible") && (a = !0, d());
    }, k.onFocusout = () => {
      a = !1, p({
        minDelay: 1
      });
    }), e.closeOnContentClick) {
      const A = st(o0, null);
      k.onClick = () => {
        n.value = !1, A?.closeParents();
      };
    }
    return k;
  }), w = z(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      u && (l = !0, u = !1, d());
    }, k.onMouseleave = () => {
      l = !1, p();
    }), k;
  });
  ae(r, (k) => {
    k && (e.openOnHover && !l && (!c.value || !a) || c.value && !a && (!e.openOnHover || !l)) && !i.value?.contains(document.activeElement) && p();
  }), ae(n, (k) => {
    k || setTimeout(() => {
      g.value = void 0;
    });
  }, {
    flush: "post"
  });
  const x = jo();
  qt(() => {
    x.value && fn(() => {
      o.value = x.el;
    });
  });
  const I = jo(), E = z(() => e.target === "cursor" && g.value ? g.value : I.value ? I.el : Kd(e.target, s) || o.value), L = z(() => Array.isArray(E.value) ? void 0 : E.value);
  let M;
  return ae(() => !!e.activator, (k) => {
    k && Ne ? (M = Jr(), M.run(() => {
      f0(e, s, {
        activatorEl: o,
        activatorEvents: S
      });
    })) : M && M.stop();
  }, {
    flush: "post",
    immediate: !0
  }), ot(() => {
    M?.stop();
  }), {
    activatorEl: o,
    activatorRef: x,
    target: E,
    targetEl: L,
    targetRef: I,
    activatorEvents: S,
    contentEvents: v,
    scrimEvents: w
  };
}
function f0(e, t, n) {
  let {
    activatorEl: r,
    activatorEvents: i
  } = n;
  ae(() => e.activator, (a, u) => {
    if (u && a !== u) {
      const c = l(u);
      c && o(c);
    }
    a && fn(() => s());
  }, {
    immediate: !0
  }), ae(() => e.activatorProps, () => {
    s();
  }), ot(() => {
    o();
  });
  function s() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    a && tv(a, me(i.value, u));
  }
  function o() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    a && nv(a, me(i.value, u));
  }
  function l() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const u = Kd(a, t);
    return r.value = u?.nodeType === Node.ELEMENT_NODE ? u : void 0, r.value;
  }
}
function Kd(e, t) {
  if (!e) return;
  let n;
  if (e === "parent") {
    let r = t?.proxy?.$el?.parentNode;
    for (; r?.hasAttribute("data-no-activator"); )
      r = r.parentNode;
    n = r;
  } else typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
const d0 = te({
  retainFocus: Boolean,
  captureFocus: Boolean,
  /** @deprecated */
  disableInitialFocus: Boolean
}, "focusTrap"), ts = /* @__PURE__ */ new Map();
let Xc = 0;
function Zc(e) {
  const t = document.activeElement;
  if (e.key !== "Tab" || !t) return;
  const n = Array.from(ts.values()).filter((u) => {
    let {
      isActive: c,
      contentEl: f
    } = u;
    return c.value && f.value?.contains(t);
  }).map((u) => u.contentEl.value);
  let r, i = t.parentElement;
  for (; i; ) {
    if (n.includes(i)) {
      r = i;
      break;
    }
    i = i.parentElement;
  }
  if (!r) return;
  const s = Kr(r).filter((u) => u.tabIndex >= 0);
  if (!s.length) return;
  const o = document.activeElement;
  if (s.length === 1 && s[0].classList.contains("v-list") && s[0].contains(o)) {
    e.preventDefault();
    return;
  }
  const l = s[0], a = s[s.length - 1];
  e.shiftKey && (o === l || l.classList.contains("v-list") && l.contains(o)) && (e.preventDefault(), a.focus()), !e.shiftKey && (o === a || a.classList.contains("v-list") && a.contains(o)) && (e.preventDefault(), l.focus());
}
function h0(e, t) {
  let {
    isActive: n,
    localTop: r,
    contentEl: i
  } = t;
  const s = /* @__PURE__ */ Symbol("trap");
  let o = !1, l = -1;
  async function a() {
    o = !0, l = window.setTimeout(() => {
      o = !1;
    }, 100);
  }
  async function u(d) {
    const p = d.relatedTarget, g = d.target;
    document.removeEventListener("pointerdown", a), document.removeEventListener("keydown", c), await new Promise((b) => requestAnimationFrame(b)), n.value && !o && p !== g && i.value && // We're the menu without open submenus or overlays
    Tt(r) && // It isn't the document or the container body
    ![document, i.value].includes(g) && // It isn't inside the container body
    !i.value.contains(g) && Kr(i.value)[0]?.focus();
  }
  function c(d) {
    if (d.key === "Tab" && (document.removeEventListener("keydown", c), n.value && i.value && d.target && !i.value.contains(d.target))) {
      const p = Kr(document.documentElement);
      if (d.shiftKey && d.target === p.at(0) || !d.shiftKey && d.target === p.at(-1)) {
        const g = Kr(i.value);
        g.length > 0 && (d.preventDefault(), g[0].focus());
      }
    }
  }
  const f = /* @__PURE__ */ W(() => n.value && e.captureFocus && !e.disableInitialFocus);
  Ne && (ae(() => e.retainFocus, (d) => {
    d ? ts.set(s, {
      isActive: n,
      contentEl: i
    }) : ts.delete(s);
  }, {
    immediate: !0
  }), ae(f, (d) => {
    d ? (document.addEventListener("pointerdown", a), document.addEventListener("focusin", u, {
      once: !0
    }), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", a), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c));
  }, {
    immediate: !0
  }), Xc++ < 1 && document.addEventListener("keydown", Zc)), ot(() => {
    ts.delete(s), clearTimeout(l), document.removeEventListener("pointerdown", a), document.removeEventListener("focusin", u), document.removeEventListener("keydown", c), --Xc < 1 && document.removeEventListener("keydown", Zc);
  });
}
function p0() {
  if (!Ne) return /* @__PURE__ */ ke(!1);
  const {
    ssr: e
  } = md();
  if (e) {
    const t = /* @__PURE__ */ ke(!1);
    return br(() => {
      t.value = !0;
    }), t;
  } else
    return /* @__PURE__ */ ke(!0);
}
const g0 = te({
  eager: Boolean
}, "lazy");
function m0(e, t) {
  const n = /* @__PURE__ */ ke(!1), r = /* @__PURE__ */ W(() => n.value || e.eager || t.value);
  ae(t, () => n.value = !0);
  function i() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: r,
    onAfterLeave: i
  };
}
function Yd() {
  const t = Xe("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Qc = /* @__PURE__ */ Symbol.for("vuetify:stack"), Vr = /* @__PURE__ */ yt([]);
function v0(e, t, n) {
  const r = Xe("useStack"), i = !n, s = st(Qc, void 0), o = /* @__PURE__ */ yt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Yn(Qc, o);
  const l = /* @__PURE__ */ ke(Number(Tt(t)));
  Ni(e, () => {
    const c = Vr.at(-1)?.[1];
    l.value = c ? c + 10 : Number(Tt(t)), i && Vr.push([r.uid, l.value]), s?.activeChildren.add(r.uid), ot(() => {
      if (i) {
        const f = (/* @__PURE__ */ se(Vr)).findIndex((d) => d[0] === r.uid);
        Vr.splice(f, 1);
      }
      s?.activeChildren.delete(r.uid);
    });
  });
  const a = /* @__PURE__ */ ke(!0);
  return i && qt(() => {
    const c = Vr.at(-1)?.[0] === r.uid;
    setTimeout(() => a.value = c);
  }), {
    globalTop: /* @__PURE__ */ ni(a),
    localTop: /* @__PURE__ */ W(() => !o.activeChildren.size),
    stackStyles: /* @__PURE__ */ W(() => ({
      zIndex: l.value
    }))
  };
}
function y0(e) {
  return {
    teleportTarget: z(() => {
      const n = e();
      if (n === !0 || !Ne) return;
      const r = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (r == null) {
        ct(`Unable to locate target ${n}`);
        return;
      }
      let i = [...r.children].find((s) => s.matches(".v-overlay-container"));
      return i || (i = document.createElement("div"), i.className = "v-overlay-container", r.appendChild(i)), i;
    })
  };
}
function b0() {
  return !0;
}
function Xd(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!e || !r && Zd(e, n) === !1) return !1;
  const i = od(t);
  if (typeof ShadowRoot < "u" && i instanceof ShadowRoot && i.host === e.target) return !1;
  const s = (typeof n.value == "object" && n.value.include || (() => []))();
  return s.push(t), !s.some((o) => o?.contains(e.target));
}
function Zd(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || b0)(e);
}
function w0(e, t, n) {
  const r = typeof n.value == "function" ? n.value : n.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && Xd(e, t, n) && setTimeout(() => {
    Zd(e, n) && r && r(e);
  }, 0);
}
function Jc(e, t) {
  const n = od(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const eu = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (i) => w0(i, e, t), r = (i) => {
      e._clickOutside.lastMousedownWasOutside = Xd(i, e, t, !0);
    };
    Jc(e, (i) => {
      i.addEventListener("click", n, !0), i.addEventListener("mousedown", r, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: r
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Jc(e, (n) => {
      if (!n || !e._clickOutside?.[t.instance.$.uid]) return;
      const {
        onClick: r,
        onMousedown: i
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", r, !0), n.removeEventListener("mousedown", i, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function k0(e) {
  const {
    modelValue: t,
    color: n,
    ...r
  } = e;
  return T(qn, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && j("div", me({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, r), null)]
  });
}
const Qd = te({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...c0(),
  ...He(),
  ...Mi(),
  ...g0(),
  ...Yb(),
  ...t0(),
  ...d0(),
  ...kt(),
  ...Id()
}, "VOverlay"), tu = Oe()({
  name: "VOverlay",
  directives: {
    vClickOutside: eu
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Kf(Qd(), ["disableInitialFocus"])
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: r,
      emit: i
    } = t;
    const s = Xe("VOverlay"), o = /* @__PURE__ */ Ie(), l = /* @__PURE__ */ Ie(), a = /* @__PURE__ */ Ie(), u = Jn(e, "modelValue"), c = z({
      get: () => u.value,
      set: (he) => {
        he && e.disabled || (u.value = he);
      }
    }), {
      themeClasses: f
    } = $t(e), {
      rtlClasses: d,
      isRtl: p
    } = Oi(), {
      hasContent: g,
      onAfterLeave: b
    } = m0(e, c), S = Xr(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: v,
      localTop: w,
      stackStyles: x
    } = v0(c, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: I,
      activatorRef: E,
      target: L,
      targetEl: M,
      targetRef: k,
      activatorEvents: A,
      contentEvents: U,
      scrimEvents: X
    } = u0(e, {
      isActive: c,
      isTop: w,
      contentEl: a
    }), {
      teleportTarget: V
    } = y0(() => {
      const he = e.attach || e.contained;
      if (he) return he;
      const xt = I?.value?.getRootNode() || s.proxy?.$el?.getRootNode();
      return xt instanceof ShadowRoot ? xt : !1;
    }), {
      dimensionStyles: F
    } = Li(e), q = p0(), {
      scopeId: K
    } = Yd();
    ae(() => e.disabled, (he) => {
      he && (c.value = !1);
    });
    const {
      contentStyles: oe,
      updateLocation: G
    } = Xb(e, {
      isRtl: p,
      contentEl: a,
      target: L,
      isActive: c
    });
    n0(e, {
      root: o,
      contentEl: a,
      targetEl: M,
      target: L,
      isActive: c,
      updateLocation: G
    });
    function J(he) {
      i("click:outside", he), e.persistent ? ve() : c.value = !1;
    }
    function Pe(he) {
      return c.value && w.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || he.target === l.value || he instanceof MouseEvent && he.shadowTarget === l.value);
    }
    h0(e, {
      isActive: c,
      localTop: w,
      contentEl: a
    }), Ne && ae(c, (he) => {
      he ? window.addEventListener("keydown", Se) : window.removeEventListener("keydown", Se);
    }, {
      immediate: !0
    }), Xn(() => {
      Ne && window.removeEventListener("keydown", Se);
    });
    function Se(he) {
      he.key === "Escape" && v.value && (a.value?.contains(document.activeElement) || i("keydown", he), e.persistent ? ve() : (c.value = !1, a.value?.contains(document.activeElement) && I.value?.focus()));
    }
    function Me(he) {
      he.key === "Escape" && !v.value || i("keydown", he);
    }
    const Z = pb();
    Ni(() => e.closeOnBack, () => {
      gb(Z, () => {
        if (v.value && c.value)
          return e.persistent ? ve() : c.value = !1, !1;
      });
    });
    const Y = /* @__PURE__ */ Ie();
    ae(() => c.value && (e.absolute || e.contained) && V.value == null, (he) => {
      if (he) {
        const xt = $v(o.value);
        xt && xt !== document.scrollingElement && (Y.value = xt.scrollTop);
      }
    });
    function ve() {
      e.noClickAnimation || a.value && Vn(a.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Go
      });
    }
    function En() {
      i("afterEnter");
    }
    function Sn() {
      b(), i("afterLeave");
    }
    return Ge(() => j(Ve, null, [n.activator?.({
      isActive: c.value,
      targetRef: k,
      props: me({
        ref: E
      }, A.value, e.activatorProps)
    }), q.value && g.value && T(Lp, {
      disabled: !V.value,
      to: V.value
    }, {
      default: () => [j("div", me({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": c.value,
          "v-overlay--contained": e.contained
        }, f.value, d.value, e.class],
        style: [x.value, {
          "--v-overlay-opacity": e.opacity,
          top: le(Y.value)
        }, e.style],
        ref: o,
        onKeydown: Me
      }, K, r), [T(k0, me({
        color: S,
        modelValue: c.value && !!e.scrim,
        ref: l
      }, X.value), null), T(Hr, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: L.value,
        onAfterEnter: En,
        onAfterLeave: Sn
      }, {
        default: () => [Wn(j("div", me({
          ref: a,
          class: ["v-overlay__content", e.contentClass],
          style: [F.value, oe.value]
        }, U.value, e.contentProps), [n.default?.({
          isActive: c
        })]), [[Sl, c.value], [eu, {
          handler: J,
          closeConditional: Pe,
          include: () => [I.value]
        }]])]
      })])]
    })])), {
      activatorEl: I,
      scrimEl: l,
      target: L,
      animateClick: ve,
      contentEl: a,
      rootEl: o,
      globalTop: v,
      localTop: w,
      updateLocation: G
    };
  }
}), xo = /* @__PURE__ */ Symbol("Forwarded refs");
function _o(e, t) {
  let n = e;
  for (; n; ) {
    const r = Reflect.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Object.getPrototypeOf(n);
  }
}
function x0(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return e[xo] = n, new Proxy(e, {
    get(i, s) {
      if (Reflect.has(i, s))
        return Reflect.get(i, s);
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const o of n)
          if (o.value && Reflect.has(o.value, s)) {
            const l = Reflect.get(o.value, s);
            return typeof l == "function" ? l.bind(o.value) : l;
          }
      }
    },
    has(i, s) {
      if (Reflect.has(i, s))
        return !0;
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const o of n)
        if (o.value && Reflect.has(o.value, s))
          return !0;
      return !1;
    },
    set(i, s, o) {
      if (Reflect.has(i, s))
        return Reflect.set(i, s, o);
      if (typeof s == "symbol" || s.startsWith("$") || s.startsWith("__")) return !1;
      for (const l of n)
        if (l.value && Reflect.has(l.value, s))
          return Reflect.set(l.value, s, o);
      return !1;
    },
    getOwnPropertyDescriptor(i, s) {
      const o = Reflect.getOwnPropertyDescriptor(i, s);
      if (o) return o;
      if (!(typeof s == "symbol" || s.startsWith("$") || s.startsWith("__"))) {
        for (const l of n) {
          if (!l.value) continue;
          const a = _o(l.value, s) ?? ("_" in l.value ? _o(l.value._?.setupState, s) : void 0);
          if (a) return a;
        }
        for (const l of n) {
          const a = l.value && l.value[xo];
          if (!a) continue;
          const u = a.slice();
          for (; u.length; ) {
            const c = u.shift(), f = _o(c.value, s);
            if (f) return f;
            const d = c.value && c.value[xo];
            d && u.push(...d);
          }
        }
      }
    }
  });
}
const _0 = te({
  fullscreen: Boolean,
  scrollable: Boolean,
  ...Kf(Qd({
    captureFocus: !0,
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Fb
    },
    zIndex: 2400,
    retainFocus: !0
  }), ["disableInitialFocus"])
}, "VDialog"), Jd = Oe()({
  name: "VDialog",
  props: _0(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: r
    } = t;
    const i = Jn(e, "modelValue"), {
      scopeId: s
    } = Yd(), o = /* @__PURE__ */ Ie();
    function l() {
      n("afterEnter"), (e.scrim || e.retainFocus) && o.value?.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function a() {
      n("afterLeave");
    }
    return ae(i, async (u) => {
      u || (await fn(), o.value?.activatorEl?.focus({
        preventScroll: !0
      }));
    }), Ge(() => {
      const u = tu.filterProps(e), c = me({
        "aria-haspopup": "dialog"
      }, e.activatorProps), f = me({
        tabindex: -1
      }, e.contentProps);
      return T(tu, me({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, u, {
        modelValue: i.value,
        "onUpdate:modelValue": (d) => i.value = d,
        "aria-modal": "true",
        activatorProps: c,
        contentProps: f,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: l,
        onAfterLeave: a
      }, s), {
        activator: r.activator,
        default: function() {
          for (var d = arguments.length, p = new Array(d), g = 0; g < d; g++)
            p[g] = arguments[g];
          return T(at, {
            root: "VDialog"
          }, {
            default: () => [r.default?.(...p)]
          });
        }
      });
    }), x0({}, o);
  }
}), Zr = {
  alpha: {
    label: "Alpha",
    icon: "fal fa-construction",
    color: "error",
    badgeText: "ALPHA",
    order: 0,
    guestVisible: !1,
    minTier: "alpha",
    description: "Experimental features currently in active development. Unstable."
  },
  beta: {
    label: "Beta",
    icon: "fal fa-space-station-moon-alt",
    color: "warning",
    badgeText: "BETA",
    order: 1,
    guestVisible: !1,
    minTier: "beta",
    description: "Features ready for testing before general release."
  },
  delta: {
    label: "Delta",
    icon: "fal fa-alicorn",
    color: "purple",
    badgeText: "COMING SOON",
    order: 2,
    guestVisible: !1,
    minTier: "public",
    description: "Teaser features visible as 'Coming Soon'. Core functionality is locked."
  },
  omega: {
    label: "Omega",
    icon: "fal fa-user-shield",
    color: "cyan",
    badgeText: "ADMIN",
    order: 2.5,
    guestVisible: !1,
    minTier: "omega",
    description: "Admin-only features accessible exclusively to site administrators."
  },
  pi: {
    label: "Pi",
    icon: "fal fa-user-secret",
    color: "success",
    badgeText: null,
    order: 3,
    guestVisible: !1,
    minTier: "public",
    description: "Stable, production-ready features available to all authenticated users."
  },
  chi: {
    label: "Chi",
    icon: "fal fa-users",
    color: "info",
    badgeText: "PUBLIC",
    order: 4,
    guestVisible: !0,
    minTier: "guest",
    description: "Publicly accessible features available to everyone, including guests."
  },
  disabled: {
    label: "Disabled",
    icon: "fal fa-do-not-enter",
    color: "grey",
    badgeText: null,
    order: 5,
    guestVisible: !1,
    minTier: "omega",
    description: "Features completely turned off and hidden from all users."
  }
}, E0 = Object.keys(Zr).sort((e, t) => Zr[e].order - Zr[t].order);
E0.map((e) => ({
  label: Zr[e].label,
  value: e
}));
const S0 = "youmeos:access-tier", nu = {
  guest: 0,
  public: 1,
  beta: 2,
  alpha: 3,
  omega: 4
};
function C0() {
  const e = window.xophzCompassSettings || {};
  let t = !1;
  if (e.currentUser && e.currentUser.ID !== void 0 ? (t = e.currentUser.ID > 0, t || localStorage.removeItem("user_email")) : t = !!localStorage.getItem("user_email"), Array.isArray(e.currentUser?.roles) && e.currentUser.roles.includes("administrator")) return "omega";
  const r = e.currentUser?.meta?.umeos_tester?.[0];
  if (r === "omega") return "omega";
  if (r === "alpha") return "alpha";
  if (r === "beta") return "beta";
  const i = localStorage.getItem(S0), s = i === "beta", o = i === "alpha";
  return i === "omega" ? "omega" : o ? "alpha" : s ? "beta" : t ? "public" : "guest";
}
function N0(e, t) {
  const n = Zr[e];
  if (e === "disabled") return !1;
  if (n.guestVisible) return !0;
  if (t === "guest") return !1;
  const o = nu[t], l = nu[n.minTier];
  return o >= l;
}
const O0 = /* @__PURE__ */ Xt({
  name: "XBtn",
  props: {
    featureStatus: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    return { isVisible: z(() => !e.featureStatus || e.featureStatus === "pi" ? !0 : N0(e.featureStatus, C0())) };
  }
}), hn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
};
function T0(e, t, n, r, i, s) {
  return e.isVisible ? (wt(), Kt(jl, me({ key: 0 }, e.$attrs, { class: "x-btn" }), wr({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: Ce(() => [
        Te(e.$slots, "prepend")
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: Ce(() => [
        Te(e.$slots, "append")
      ]),
      key: "1"
    } : void 0,
    e.$slots.loader ? {
      name: "loader",
      fn: Ce(() => [
        Te(e.$slots, "loader")
      ]),
      key: "2"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: Ce(() => [
        Te(e.$slots, "default")
      ]),
      key: "3"
    } : void 0
  ]), 1040)) : $f("", !0);
}
const eh = /* @__PURE__ */ hn(O0, [["render", T0]]), D0 = /* @__PURE__ */ Xt({
  name: "XCard",
  inheritAttrs: !1,
  setup() {
    const e = sg();
    return { cardAttrs: z(() => {
      const { variant: n, ...r } = e;
      return n === "glass" ? { ...r, variant: "flat" } : e;
    }) };
  }
});
function $0(e, t, n, r, i, s) {
  return wt(), Kt(Md, me(e.cardAttrs, { class: "x-card" }), wr({ _: 2 }, [
    e.$slots.image ? {
      name: "image",
      fn: Ce(() => [
        Te(e.$slots, "image")
      ]),
      key: "0"
    } : void 0,
    e.$slots.prepend ? {
      name: "prepend",
      fn: Ce(() => [
        Te(e.$slots, "prepend")
      ]),
      key: "1"
    } : void 0,
    e.$slots.title ? {
      name: "title",
      fn: Ce(() => [
        Te(e.$slots, "title")
      ]),
      key: "2"
    } : void 0,
    e.$slots.subtitle ? {
      name: "subtitle",
      fn: Ce(() => [
        Te(e.$slots, "subtitle")
      ]),
      key: "3"
    } : void 0,
    e.$slots.actions ? {
      name: "actions",
      fn: Ce(() => [
        Te(e.$slots, "actions")
      ]),
      key: "4"
    } : void 0,
    e.$slots.loader ? {
      name: "loader",
      fn: Ce(() => [
        Te(e.$slots, "loader")
      ]),
      key: "5"
    } : void 0,
    e.$slots.text ? {
      name: "text",
      fn: Ce(() => [
        Te(e.$slots, "text")
      ]),
      key: "6"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: Ce(() => [
        Te(e.$slots, "append")
      ]),
      key: "7"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: Ce(() => [
        Te(e.$slots, "default")
      ]),
      key: "8"
    } : void 0
  ]), 1040);
}
const th = /* @__PURE__ */ hn(D0, [["render", $0]]), A0 = /* @__PURE__ */ Xt({
  name: "XChip",
  setup() {
    return {};
  }
});
function V0(e, t, n, r, i, s) {
  return wt(), Kt(jd, me(e.$attrs, { class: "x-chip" }), wr({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: Ce(() => [
        Te(e.$slots, "prepend")
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: Ce(() => [
        Te(e.$slots, "append")
      ]),
      key: "1"
    } : void 0,
    e.$slots.close ? {
      name: "close",
      fn: Ce(() => [
        Te(e.$slots, "close")
      ]),
      key: "2"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: Ce(() => [
        Te(e.$slots, "default")
      ]),
      key: "3"
    } : void 0
  ]), 1040);
}
const nh = /* @__PURE__ */ hn(A0, [["render", V0]]), P0 = /* @__PURE__ */ Xt({
  name: "XDivider",
  setup() {
    return {};
  }
});
function I0(e, t, n, r, i, s) {
  return wt(), Kt(Wd, me(e.$attrs, { class: "x-divider" }), null, 16);
}
const rh = /* @__PURE__ */ hn(P0, [["render", I0]]), R0 = /* @__PURE__ */ Xt({
  name: "XDialog",
  setup() {
    return {};
  }
});
function M0(e, t, n, r, i, s) {
  return wt(), Kt(Jd, me({ "z-index": 1e7 }, e.$attrs, {
    class: "x-dialog",
    "content-class": "x-dialog-content"
  }), wr({ _: 2 }, [
    e.$slots.activator ? {
      name: "activator",
      fn: Ce((o) => [
        Te(e.$slots, "activator", Co(gs(o || {})))
      ]),
      key: "0"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: Ce((o) => [
        Te(e.$slots, "default", Co(gs(o || {})))
      ]),
      key: "1"
    } : void 0
  ]), 1040);
}
const ih = /* @__PURE__ */ hn(R0, [["render", M0]]), L0 = /* @__PURE__ */ Xt({
  name: "XIcon",
  setup() {
    return {};
  }
});
function F0(e, t, n, r, i, s) {
  return wt(), Kt(nt, me(e.$attrs, { class: "x-icon" }), wr({ _: 2 }, [
    e.$slots.default ? {
      name: "default",
      fn: Ce(() => [
        Te(e.$slots, "default")
      ]),
      key: "0"
    } : void 0
  ]), 1040);
}
const sh = /* @__PURE__ */ hn(L0, [["render", F0]]), B0 = /* @__PURE__ */ Xt({
  name: "XAlert",
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    text: {
      type: String,
      default: void 0
    },
    closable: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: "tonal"
    },
    icon: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    return {
      computedIcon: z(() => {
        if (e.icon) return e.icon;
        if (e.type === "info") return "fad fa-info-circle";
        if (e.type === "warning") return "fad fa-exclamation-triangle";
        if (e.type === "error") return "fad fa-exclamation-circle";
        if (e.type === "success") return "fad fa-check-circle";
      })
    };
  }
}), H0 = sd("v-alert-title"), z0 = te({
  iconSize: [Number, String],
  iconSizes: {
    type: Array,
    default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]]
  }
}, "iconSize");
function j0(e, t) {
  return {
    iconSize: z(() => {
      const r = new Map(e.iconSizes), i = e.iconSize ?? t() ?? "default";
      return r.has(i) ? r.get(i) : i;
    })
  };
}
const W0 = ["success", "info", "warning", "error"], U0 = te({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: Ye,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => W0.includes(e)
  },
  ...He(),
  ...er(),
  ...Mi(),
  ...Ai(),
  ...z0(),
  ...Ys(),
  ...Fl(),
  ...xn(),
  ...lt(),
  ...kt(),
  ...tr({
    variant: "flat"
  })
}, "VAlert"), G0 = Oe()({
  name: "VAlert",
  props: U0(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: r
    } = t;
    const i = Jn(e, "modelValue"), s = /* @__PURE__ */ W(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), {
      iconSize: o
    } = j0(e, () => e.prominent ? 44 : void 0), {
      themeClasses: l
    } = $t(e), {
      colorClasses: a,
      colorStyles: u,
      variantClasses: c
    } = Ri(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      densityClasses: f
    } = xr(e), {
      dimensionStyles: d
    } = Li(e), {
      elevationClasses: p
    } = Vi(e), {
      locationStyles: g
    } = Xs(e), {
      positionClasses: b
    } = Bl(e), {
      roundedClasses: S
    } = _n(e), {
      textColorClasses: v,
      textColorStyles: w
    } = vr(() => e.borderColor), {
      t: x
    } = dd(), I = /* @__PURE__ */ W(() => ({
      "aria-label": x(e.closeLabel),
      onClick(E) {
        i.value = !1, n("click:close", E);
      }
    }));
    return () => {
      const E = !!(r.prepend || s.value), L = !!(r.title || e.title), M = !!(r.close || e.closable), k = {
        density: e.density,
        icon: s.value,
        size: e.iconSize || e.prominent ? o.value : void 0
      };
      return i.value && T(e.tag, {
        class: ce(["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, l.value, a.value, f.value, p.value, b.value, S.value, c.value, e.class]),
        style: $e([u.value, d.value, g.value, e.style]),
        role: "alert"
      }, {
        default: () => [Ii(!1, "v-alert"), e.border && j("div", {
          key: "border",
          class: ce(["v-alert__border", v.value]),
          style: $e(w.value)
        }, null), E && j("div", {
          key: "prepend",
          class: "v-alert__prepend"
        }, [r.prepend ? T(at, {
          key: "prepend-defaults",
          disabled: !s.value,
          defaults: {
            VIcon: {
              ...k
            }
          }
        }, r.prepend) : T(nt, me({
          key: "prepend-icon"
        }, k), null)]), j("div", {
          class: "v-alert__content"
        }, [L && T(H0, {
          key: "title"
        }, {
          default: () => [r.title?.() ?? e.title]
        }), r.text?.() ?? e.text, r.default?.()]), r.append && j("div", {
          key: "append",
          class: "v-alert__append"
        }, [r.append()]), M && j("div", {
          key: "close",
          class: "v-alert__close"
        }, [r.close ? T(at, {
          key: "close-defaults",
          defaults: {
            VBtn: {
              icon: e.closeIcon,
              size: "x-small",
              variant: "text"
            }
          }
        }, {
          default: () => [r.close?.({
            props: I.value
          })]
        }) : T(jl, me({
          key: "close-btn",
          icon: e.closeIcon,
          size: "x-small",
          variant: "text"
        }, I.value), null)])]
      });
    };
  }
});
function q0(e, t, n, r, i, s) {
  return wt(), Kt(G0, me(e.$attrs, {
    type: e.type,
    title: e.title,
    text: e.text,
    closable: e.closable,
    variant: e.variant,
    icon: e.computedIcon,
    class: ["x-alert", "glass", e.type ? `x-alert--${e.type}` : ""]
  }), wr({ _: 2 }, [
    e.$slots.prepend ? {
      name: "prepend",
      fn: Ce(() => [
        Te(e.$slots, "prepend")
      ]),
      key: "0"
    } : void 0,
    e.$slots.append ? {
      name: "append",
      fn: Ce(() => [
        Te(e.$slots, "append")
      ]),
      key: "1"
    } : void 0,
    e.$slots.title ? {
      name: "title",
      fn: Ce(() => [
        Te(e.$slots, "title")
      ]),
      key: "2"
    } : void 0,
    e.$slots.text ? {
      name: "text",
      fn: Ce(() => [
        Te(e.$slots, "text")
      ]),
      key: "3"
    } : void 0,
    e.$slots.close ? {
      name: "close",
      fn: Ce((o) => [
        Te(e.$slots, "close", Co(gs(o || {})))
      ]),
      key: "4"
    } : void 0,
    e.$slots.default ? {
      name: "default",
      fn: Ce(() => [
        Te(e.$slots, "default")
      ]),
      key: "5"
    } : void 0
  ]), 1040, ["type", "title", "text", "closable", "variant", "icon", "class"]);
}
const oh = /* @__PURE__ */ hn(B0, [["render", q0]]), K0 = /* @__PURE__ */ Xt({
  name: "XCountdownClock",
  props: {
    expiresAt: {
      type: Number,
      required: !0
    }
  },
  emits: ["expired"],
  setup(e, { emit: t }) {
    const n = /* @__PURE__ */ Ie(0);
    let r = null;
    const i = () => {
      const a = Date.now(), u = Math.max(0, e.expiresAt - a);
      n.value = u, u === 0 && r !== null && (window.clearInterval(r), r = null, t("expired"));
    };
    br(() => {
      i(), r = window.setInterval(i, 1e3);
    }), yl(() => {
      r !== null && window.clearInterval(r);
    }), ae(() => e.expiresAt, () => {
      i(), r === null && e.expiresAt > Date.now() && (r = window.setInterval(i, 1e3));
    });
    const s = z(() => Math.floor(n.value / 36e5).toString().padStart(2, "0")), o = z(() => Math.floor(n.value % 36e5 / 6e4).toString().padStart(2, "0")), l = z(() => Math.floor(n.value % 6e4 / 1e3).toString().padStart(2, "0"));
    return {
      hours: s,
      minutes: o,
      seconds: l
    };
  }
}), Y0 = { class: "x-countdown-clock text-cyan" }, X0 = { class: "digit" }, Z0 = { class: "digit" }, Q0 = { class: "digit" };
function J0(e, t, n, r, i, s) {
  return wt(), Nf("div", Y0, [
    j("span", X0, bn(e.hours), 1),
    t[0] || (t[0] = j("span", { class: "colon" }, ":", -1)),
    j("span", Z0, bn(e.minutes), 1),
    t[1] || (t[1] = j("span", { class: "colon" }, ":", -1)),
    j("span", Q0, bn(e.seconds), 1)
  ]);
}
const lh = /* @__PURE__ */ hn(K0, [["render", J0], ["__scopeId", "data-v-4efd103a"]]);
function ql() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var nr = ql();
function ah(e) {
  nr = e;
}
var In = { exec: () => null };
function de(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (i, s) => {
    let o = typeof s == "string" ? s : s.source;
    return o = o.replace(rt.caret, "$1"), n = n.replace(i, o), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var ew = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), rt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"), blockquoteBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}>`) }, tw = /^(?:[ \t]*(?:\n|$))+/, nw = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, rw = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Fi = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, iw = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Kl = / {0,3}(?:[*+-]|\d{1,9}[.)])/, ch = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, uh = de(ch).replace(/bull/g, Kl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), sw = de(ch).replace(/bull/g, Kl).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Yl = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ow = /^[^\n]+/, Xl = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, lw = de(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Xl).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), aw = de(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Kl).getRegex(), Zs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Zl = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, cw = de("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Zl).replace("tag", Zs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), fh = de(Yl).replace("hr", Fi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Zs).getRegex(), uw = de(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", fh).getRegex(), Ql = { blockquote: uw, code: nw, def: lw, fences: rw, heading: iw, hr: Fi, html: cw, lheading: uh, list: aw, newline: tw, paragraph: fh, table: In, text: ow }, ru = de("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Fi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Zs).getRegex(), fw = { ...Ql, lheading: sw, table: ru, paragraph: de(Yl).replace("hr", Fi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ru).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Zs).getRegex() }, dw = { ...Ql, html: de(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Zl).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: In, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: de(Yl).replace("hr", Fi).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", uh).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, hw = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, pw = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, dh = /^( {2,}|\\)\n(?!\s*$)/, gw = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Er = /[\p{P}\p{S}]/u, Qs = /[\s\p{P}\p{S}]/u, Jl = /[^\s\p{P}\p{S}]/u, mw = de(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Qs).getRegex(), hh = /(?!~)[\p{P}\p{S}]/u, vw = /(?!~)[\s\p{P}\p{S}]/u, yw = /(?:[^\s\p{P}\p{S}]|~)/u, bw = de(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ew ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ph = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, ww = de(ph, "u").replace(/punct/g, Er).getRegex(), kw = de(ph, "u").replace(/punct/g, hh).getRegex(), gh = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", xw = de(gh, "gu").replace(/notPunctSpace/g, Jl).replace(/punctSpace/g, Qs).replace(/punct/g, Er).getRegex(), _w = de(gh, "gu").replace(/notPunctSpace/g, yw).replace(/punctSpace/g, vw).replace(/punct/g, hh).getRegex(), Ew = de("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Jl).replace(/punctSpace/g, Qs).replace(/punct/g, Er).getRegex(), Sw = de(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Er).getRegex(), Cw = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Nw = de(Cw, "gu").replace(/notPunctSpace/g, Jl).replace(/punctSpace/g, Qs).replace(/punct/g, Er).getRegex(), Ow = de(/\\(punct)/, "gu").replace(/punct/g, Er).getRegex(), Tw = de(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Dw = de(Zl).replace("(?:-->|$)", "-->").getRegex(), $w = de("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Dw).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Vs = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Aw = de(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", Vs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), mh = de(/^!?\[(label)\]\[(ref)\]/).replace("label", Vs).replace("ref", Xl).getRegex(), vh = de(/^!?\[(ref)\](?:\[\])?/).replace("ref", Xl).getRegex(), Vw = de("reflink|nolink(?!\\()", "g").replace("reflink", mh).replace("nolink", vh).getRegex(), iu = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, ea = { _backpedal: In, anyPunctuation: Ow, autolink: Tw, blockSkip: bw, br: dh, code: pw, del: In, delLDelim: In, delRDelim: In, emStrongLDelim: ww, emStrongRDelimAst: xw, emStrongRDelimUnd: Ew, escape: hw, link: Aw, nolink: vh, punctuation: mw, reflink: mh, reflinkSearch: Vw, tag: $w, text: gw, url: In }, Pw = { ...ea, link: de(/^!?\[(label)\]\((.*?)\)/).replace("label", Vs).getRegex(), reflink: de(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Vs).getRegex() }, tl = { ...ea, emStrongRDelimAst: _w, emStrongLDelim: kw, delLDelim: Sw, delRDelim: Nw, url: de(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", iu).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: de(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", iu).getRegex() }, Iw = { ...tl, br: de(dh).replace("{2,}", "*").getRegex(), text: de(tl.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Ki = { normal: Ql, gfm: fw, pedantic: dw }, Pr = { normal: ea, gfm: tl, breaks: Iw, pedantic: Pw }, Rw = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, su = (e) => Rw[e];
function Mt(e, t) {
  if (t) {
    if (rt.escapeTest.test(e)) return e.replace(rt.escapeReplace, su);
  } else if (rt.escapeTestNoEncode.test(e)) return e.replace(rt.escapeReplaceNoEncode, su);
  return e;
}
function ou(e) {
  try {
    e = encodeURI(e).replace(rt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function lu(e, t) {
  let n = e.replace(rt.findPipe, (s, o, l) => {
    let a = !1, u = o;
    for (; --u >= 0 && l[u] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), r = n.split(rt.splitPipe), i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; i < r.length; i++) r[i] = r[i].trim().replace(rt.slashPipe, "|");
  return r;
}
function Ir(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let i = 0;
  for (; i < r && e.charAt(r - i - 1) === t; )
    i++;
  return e.slice(0, r - i);
}
function Mw(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Lw(e, t = 0) {
  let n = t, r = "";
  for (let i of e) if (i === "	") {
    let s = 4 - n % 4;
    r += " ".repeat(s), n += s;
  } else r += i, n++;
  return r;
}
function au(e, t, n, r, i) {
  let s = t.href, o = t.title || null, l = e[1].replace(i.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let a = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: s, title: o, text: l, tokens: r.inlineTokens(l) };
  return r.state.inLink = !1, a;
}
function Fw(e, t, n) {
  let r = e.match(n.other.indentCodeCompensation);
  if (r === null) return t;
  let i = r[1];
  return t.split(`
`).map((s) => {
    let o = s.match(n.other.beginningSpace);
    if (o === null) return s;
    let [l] = o;
    return l.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
var Ps = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || nr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Ir(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Fw(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Ir(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Ir(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Ir(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let o = !1, l = [], a;
        for (a = 0; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) l.push(n[a]), o = !0;
        else if (!o) l.push(n[a]);
        else break;
        n = n.slice(a);
        let u = l.join(`
`), c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, i = i ? `${i}
${c}` : c;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(c, s, !0), this.lexer.state.top = f, n.length === 0) break;
        let d = s.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let p = d, g = p.raw + `
` + n.join(`
`), b = this.blockquote(g);
          s[s.length - 1] = b, r = r.substring(0, r.length - p.raw.length) + b.raw, i = i.substring(0, i.length - p.text.length) + b.text;
          break;
        } else if (d?.type === "list") {
          let p = d, g = p.raw + `
` + n.join(`
`), b = this.list(g);
          s[s.length - 1] = b, r = r.substring(0, r.length - d.raw.length) + b.raw, i = i.substring(0, i.length - p.raw.length) + b.raw, n = g.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), o = !1;
      for (; e; ) {
        let a = !1, u = "", c = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let f = Lw(t[2].split(`
`, 1)[0], t[1].length), d = e.split(`
`, 1)[0], p = !f.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c = f.trimStart()) : p ? g = t[1].length + 1 : (g = f.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = f.slice(g), g += t[1].length), p && this.rules.other.blankLine.test(d) && (u += d + `
`, e = e.substring(d.length + 1), a = !0), !a) {
          let b = this.rules.other.nextBulletRegex(g), S = this.rules.other.hrRegex(g), v = this.rules.other.fencesBeginRegex(g), w = this.rules.other.headingBeginRegex(g), x = this.rules.other.htmlBeginRegex(g), I = this.rules.other.blockquoteBeginRegex(g);
          for (; e; ) {
            let E = e.split(`
`, 1)[0], L;
            if (d = E, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), L = d) : L = d.replace(this.rules.other.tabCharGlobal, "    "), v.test(d) || w.test(d) || x.test(d) || I.test(d) || b.test(d) || S.test(d)) break;
            if (L.search(this.rules.other.nonSpaceChar) >= g || !d.trim()) c += `
` + L.slice(g);
            else {
              if (p || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(f) || w.test(f) || S.test(f)) break;
              c += `
` + d;
            }
            p = !d.trim(), u += E + `
`, e = e.substring(E.length + 1), f = L.slice(g);
          }
        }
        i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (o = !0)), i.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(c), loose: !1, text: c, tokens: [] }), i.raw += u;
      }
      let l = i.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let a of i.items) {
        if (this.lexer.state.top = !1, a.tokens = this.lexer.blockTokens(a.text, []), a.task) {
          if (a.text = a.text.replace(this.rules.other.listReplaceTask, ""), a.tokens[0]?.type === "text" || a.tokens[0]?.type === "paragraph") {
            a.tokens[0].raw = a.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), a.tokens[0].text = a.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let c = this.lexer.inlineQueue.length - 1; c >= 0; c--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[c].src)) {
              this.lexer.inlineQueue[c].src = this.lexer.inlineQueue[c].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let u = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (u) {
            let c = { type: "checkbox", raw: u[0] + " ", checked: u[0] !== "[ ]" };
            a.checked = c.checked, i.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = c.raw + a.tokens[0].raw, a.tokens[0].text = c.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(c)) : a.tokens.unshift({ type: "paragraph", raw: c.raw, text: c.raw, tokens: [c] }) : a.tokens.unshift(c);
          }
        }
        if (!i.loose) {
          let u = a.tokens.filter((f) => f.type === "space"), c = u.length > 0 && u.some((f) => this.rules.other.anyLine.test(f.raw));
          i.loose = c;
        }
      }
      if (i.loose) for (let a of i.items) {
        a.loose = !0;
        for (let u of a.tokens) u.type === "text" && (u.type = "paragraph");
      }
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = lu(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let o of r) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < n.length; o++) s.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: !0, align: s.align[o] });
      for (let o of i) s.rows.push(lu(o, s.header.length).map((l, a) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: s.align[a] })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) {
      let n = t[1].trim();
      return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = Ir(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = Mw(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), au(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return au(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
      let i = [...r[0]].length - 1, s, o, l = i, a = 0, u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + i); (r = u.exec(t)) !== null; ) {
        if (s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !s) continue;
        if (o = [...s].length, r[3] || r[4]) {
          l += o;
          continue;
        } else if ((r[5] || r[6]) && i % 3 && !((i + o) % 3)) {
          a += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l + a);
        let c = [...r[0]][0].length, f = e.slice(0, i + r.index + c + o);
        if (Math.min(i, o) % 2) {
          let p = f.slice(1, -1);
          return { type: "em", raw: f, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        let d = f.slice(2, -2);
        return { type: "strong", raw: f, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e, t, n = "") {
    let r = this.rules.inline.delLDelim.exec(e);
    if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
      let i = [...r[0]].length - 1, s, o, l = i, a = this.rules.inline.delRDelim;
      for (a.lastIndex = 0, t = t.slice(-1 * e.length + i); (r = a.exec(t)) !== null; ) {
        if (s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !s || (o = [...s].length, o !== i)) continue;
        if (r[3] || r[4]) {
          l += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l);
        let u = [...r[0]][0].length, c = e.slice(0, i + r.index + u + o), f = c.slice(i, -i);
        return { type: "del", raw: c, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
}, Et = class nl {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || nr, this.options.tokenizer = this.options.tokenizer || new Ps(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: rt, block: Ki.normal, inline: Pr.normal };
    this.options.pedantic ? (n.block = Ki.pedantic, n.inline = Pr.pedantic) : this.options.gfm && (n.block = Ki.gfm, this.options.breaks ? n.inline = Pr.breaks : n.inline = Pr.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: Ki, inline: Pr };
  }
  static lex(t, n) {
    return new nl(n).lex(t);
  }
  static lexInline(t, n) {
    return new nl(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(rt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.tokenizer.lexer = this, this.options.pedantic && (t = t.replace(rt.tabCharGlobal, "    ").replace(rt.spaceLine, "")); t; ) {
      let i;
      if (this.options.extensions?.block?.some((o) => (i = o.call({ lexer: this }, t, n)) ? (t = t.substring(i.raw.length), n.push(i), !0) : !1)) continue;
      if (i = this.tokenizer.space(t)) {
        t = t.substring(i.raw.length);
        let o = n.at(-1);
        i.raw.length === 1 && o !== void 0 ? o.raw += `
` : n.push(i);
        continue;
      }
      if (i = this.tokenizer.code(t)) {
        t = t.substring(i.raw.length);
        let o = n.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.at(-1).src = o.text) : n.push(i);
        continue;
      }
      if (i = this.tokenizer.fences(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.heading(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.hr(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.blockquote(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.list(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.html(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.def(t)) {
        t = t.substring(i.raw.length);
        let o = n.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title }, n.push(i));
        continue;
      }
      if (i = this.tokenizer.table(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      if (i = this.tokenizer.lheading(t)) {
        t = t.substring(i.raw.length), n.push(i);
        continue;
      }
      let s = t;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, l = t.slice(1), a;
        this.options.extensions.startBlock.forEach((u) => {
          a = u.call({ lexer: this }, l), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
        }), o < 1 / 0 && o >= 0 && (s = t.substring(0, o + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(s))) {
        let o = n.at(-1);
        r && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : n.push(i), r = s.length !== t.length, t = t.substring(i.raw.length);
        continue;
      }
      if (i = this.tokenizer.text(t)) {
        t = t.substring(i.raw.length);
        let o = n.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : n.push(i);
        continue;
      }
      if (t) {
        let o = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        } else throw new Error(o);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    this.tokenizer.lexer = this;
    let r = t, i = null;
    if (this.tokens.links) {
      let a = Object.keys(this.tokens.links);
      if (a.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(r)) !== null; ) a.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(r)) !== null; ) r = r.slice(0, i.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let s;
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(r)) !== null; ) s = i[2] ? i[2].length : 0, r = r.slice(0, i.index + s) + "[" + "a".repeat(i[0].length - s - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    r = this.options.hooks?.emStrongMask?.call({ lexer: this }, r) ?? r;
    let o = !1, l = "";
    for (; t; ) {
      o || (l = ""), o = !1;
      let a;
      if (this.options.extensions?.inline?.some((c) => (a = c.call({ lexer: this }, t, n)) ? (t = t.substring(a.raw.length), n.push(a), !0) : !1)) continue;
      if (a = this.tokenizer.escape(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.link(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(a.raw.length);
        let c = n.at(-1);
        a.type === "text" && c?.type === "text" ? (c.raw += a.raw, c.text += a.text) : n.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(t, r, l)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.br(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.del(t, r, l)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(t))) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      let u = t;
      if (this.options.extensions?.startInline) {
        let c = 1 / 0, f = t.slice(1), d;
        this.options.extensions.startInline.forEach((p) => {
          d = p.call({ lexer: this }, f), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
        }), c < 1 / 0 && c >= 0 && (u = t.substring(0, c + 1));
      }
      if (a = this.tokenizer.inlineText(u)) {
        t = t.substring(a.raw.length), a.raw.slice(-1) !== "_" && (l = a.raw.slice(-1)), o = !0;
        let c = n.at(-1);
        c?.type === "text" ? (c.raw += a.raw, c.text += a.text) : n.push(a);
        continue;
      }
      if (t) {
        let c = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else throw new Error(c);
      }
    }
    return n;
  }
}, Is = class {
  options;
  parser;
  constructor(e) {
    this.options = e || nr;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let r = (t || "").match(rt.notSpaceStart)?.[0], i = e.replace(rt.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + Mt(r) + '">' + (n ? i : Mt(i, !0)) + `</code></pre>
` : "<pre><code>" + (n ? i : Mt(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let o = 0; o < e.items.length; o++) {
      let l = e.items[o];
      r += this.listitem(l);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let o = 0; o < s.length; o++) n += this.tablecell(s[o]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${Mt(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let r = this.parser.parseInline(n), i = ou(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + Mt(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = ou(e);
    if (i === null) return Mt(n);
    e = i;
    let s = `<img src="${e}" alt="${Mt(n)}"`;
    return t && (s += ` title="${Mt(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : Mt(e.text);
  }
}, ta = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
}, St = class rl {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || nr, this.options.renderer = this.options.renderer || new Is(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ta();
  }
  static parse(t, n) {
    return new rl(n).parse(t);
  }
  static parseInline(t, n) {
    return new rl(n).parseInline(t);
  }
  parse(t) {
    this.renderer.parser = this;
    let n = "";
    for (let r = 0; r < t.length; r++) {
      let i = t[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = i, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          n += l || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          break;
        }
        case "hr": {
          n += this.renderer.hr(s);
          break;
        }
        case "heading": {
          n += this.renderer.heading(s);
          break;
        }
        case "code": {
          n += this.renderer.code(s);
          break;
        }
        case "table": {
          n += this.renderer.table(s);
          break;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          break;
        }
        case "list": {
          n += this.renderer.list(s);
          break;
        }
        case "checkbox": {
          n += this.renderer.checkbox(s);
          break;
        }
        case "html": {
          n += this.renderer.html(s);
          break;
        }
        case "def": {
          n += this.renderer.def(s);
          break;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          break;
        }
        case "text": {
          n += this.renderer.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
  parseInline(t, n = this.renderer) {
    this.renderer.parser = this;
    let r = "";
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      if (this.options.extensions?.renderers?.[s.type]) {
        let l = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          r += l || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "escape": {
          r += n.text(o);
          break;
        }
        case "html": {
          r += n.html(o);
          break;
        }
        case "link": {
          r += n.link(o);
          break;
        }
        case "image": {
          r += n.image(o);
          break;
        }
        case "checkbox": {
          r += n.checkbox(o);
          break;
        }
        case "strong": {
          r += n.strong(o);
          break;
        }
        case "em": {
          r += n.em(o);
          break;
        }
        case "codespan": {
          r += n.codespan(o);
          break;
        }
        case "br": {
          r += n.br(o);
          break;
        }
        case "del": {
          r += n.del(o);
          break;
        }
        case "text": {
          r += n.text(o);
          break;
        }
        default: {
          let l = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return r;
  }
}, zr = class {
  options;
  block;
  constructor(e) {
    this.options = e || nr;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? Et.lex : Et.lexInline;
  }
  provideParser(e = this.block) {
    return e ? St.parse : St.parseInline;
  }
}, Bw = class {
  defaults = ql();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = St;
  Renderer = Is;
  TextRenderer = ta;
  Lexer = Et;
  Tokenizer = Ps;
  Hooks = zr;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let o of s) n = n.concat(this.walkTokens(o.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = n.concat(this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let o = i[s].flat(1 / 0);
          n = n.concat(this.walkTokens(o, t));
        }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let r = { ...n };
      if (r.async = this.defaults.async || r.async || !1, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...o) {
            let l = i.renderer.apply(this, o);
            return l === !1 && (l = s.apply(this, o)), l;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new Is(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, l = n.renderer[o], a = i[o];
          i[o] = (...u) => {
            let c = l.apply(i, u);
            return c === !1 && (c = a.apply(i, u)), c || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new Ps(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, l = n.tokenizer[o], a = i[o];
          i[o] = (...u) => {
            let c = l.apply(i, u);
            return c === !1 && (c = a.apply(i, u)), c;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new zr();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, l = n.hooks[o], a = i[o];
          zr.passThroughHooks.has(s) ? i[o] = (u) => {
            if (this.defaults.async && zr.passThroughHooksRespectAsync.has(s)) return (async () => {
              let f = await l.call(i, u);
              return a.call(i, f);
            })();
            let c = l.call(i, u);
            return a.call(i, c);
          } : i[o] = (...u) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(i, u);
              return f === !1 && (f = await a.apply(i, u)), f;
            })();
            let c = l.apply(i, u);
            return c === !1 && (c = a.apply(i, u)), c;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(o) {
          let l = [];
          return l.push(s.call(this, o)), i && (l = l.concat(i.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return Et.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return St.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (t, n) => {
      let r = { ...n }, i = { ...this.defaults, ...r }, s = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && r.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
        let o = i.hooks ? await i.hooks.preprocess(t) : t, l = await (i.hooks ? await i.hooks.provideLexer(e) : e ? Et.lex : Et.lexInline)(o, i), a = i.hooks ? await i.hooks.processAllTokens(l) : l;
        i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
        let u = await (i.hooks ? await i.hooks.provideParser(e) : e ? St.parse : St.parseInline)(a, i);
        return i.hooks ? await i.hooks.postprocess(u) : u;
      })().catch(s);
      try {
        i.hooks && (t = i.hooks.preprocess(t));
        let o = (i.hooks ? i.hooks.provideLexer(e) : e ? Et.lex : Et.lexInline)(t, i);
        i.hooks && (o = i.hooks.processAllTokens(o)), i.walkTokens && this.walkTokens(o, i.walkTokens);
        let l = (i.hooks ? i.hooks.provideParser(e) : e ? St.parse : St.parseInline)(o, i);
        return i.hooks && (l = i.hooks.postprocess(l)), l;
      } catch (o) {
        return s(o);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + Mt(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
}, Kn = new Bw();
function _e(e, t) {
  return Kn.parse(e, t);
}
_e.options = _e.setOptions = function(e) {
  return Kn.setOptions(e), _e.defaults = Kn.defaults, ah(_e.defaults), _e;
};
_e.getDefaults = ql;
_e.defaults = nr;
_e.use = function(...e) {
  return Kn.use(...e), _e.defaults = Kn.defaults, ah(_e.defaults), _e;
};
_e.walkTokens = function(e, t) {
  return Kn.walkTokens(e, t);
};
_e.parseInline = Kn.parseInline;
_e.Parser = St;
_e.parser = St.parse;
_e.Renderer = Is;
_e.TextRenderer = ta;
_e.Lexer = Et;
_e.lexer = Et.lex;
_e.Tokenizer = Ps;
_e.Hooks = zr;
_e.parse = _e;
_e.options;
_e.setOptions;
_e.use;
_e.walkTokens;
_e.parseInline;
St.parse;
Et.lex;
const Hw = ["innerHTML"], zw = /* @__PURE__ */ Xt({
  __name: "x-markdown",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, n = z(() => t.content ? _e.parse(t.content) : "");
    return (r, i) => (wt(), Nf("div", {
      class: "x-markdown-container",
      innerHTML: n.value
    }, null, 8, Hw));
  }
}), yh = /* @__PURE__ */ hn(zw, [["__scopeId", "data-v-c9651a1d"]]), jw = {
  XBtn: eh,
  XCard: th,
  XChip: nh,
  XDivider: rh,
  XDialog: ih,
  XIcon: sh,
  XAlert: oh,
  XCountdownClock: lh,
  XMarkdown: yh
}, Ww = [
  {
    name: "XBtn",
    tag: "x-btn",
    category: "action",
    description: "Quantum action button with glassmorphic accents and loading states.",
    props: {
      color: { type: "string", default: "primary", options: ["primary", "secondary", "accent", "surface"] },
      variant: { type: "string", default: "elevated", options: ["elevated", "flat", "tonal", "outlined", "text", "plain"] },
      size: { type: "string", default: "default", options: ["x-small", "small", "default", "large", "x-large"] }
    }
  },
  {
    name: "XCard",
    tag: "x-card",
    category: "container",
    description: "Glassmorphic container card with elevation and slot support.",
    props: {
      elevation: { type: "number", default: 1 },
      rounded: { type: "string", default: "md", options: ["none", "xs", "sm", "md", "lg", "xl"] }
    }
  },
  {
    name: "XChip",
    tag: "x-chip",
    category: "display",
    description: "Status badge and category pill atom.",
    props: {
      color: { type: "string", default: "brand-base" },
      size: { type: "string", default: "small" }
    }
  },
  {
    name: "XCountdownClock",
    tag: "x-countdown-clock",
    category: "applet",
    description: "Autonomous countdown timer with flip animations.",
    props: {
      targetDate: { type: "string", default: "" }
    }
  }
], Eo = /* @__PURE__ */ new WeakMap();
function So(e = "[data-magic-wand-mount]") {
  const t = typeof e == "string" ? Array.from(document.querySelectorAll(e)) : [e];
  if (!t.length) return [];
  const n = bd({
    components: {
      VBtn: jl,
      VCard: Md,
      VChip: jd,
      VDivider: Wd,
      VDialog: Jd,
      VIcon: nt
    }
  }), r = [];
  return t.forEach((i) => {
    if (Eo.has(i))
      try {
        Eo.get(i)?.unmount();
      } catch {
      }
    const s = Pm({});
    s.use(n), s.component("x-btn", eh), s.component("x-card", th), s.component("x-chip", nh), s.component("x-divider", rh), s.component("x-dialog", ih), s.component("x-icon", sh), s.component("x-alert", oh), s.component("x-countdown-clock", lh), s.component("x-markdown", yh), s.mount(i), i.setAttribute("data-mw-mounted", "true"), Eo.set(i, s), r.push(s);
  }), r;
}
typeof window < "u" && (window.XophzMagicWandAtoms = {
  components: jw,
  manifest: Ww,
  mount: So
}, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
  So();
}) : So());
export {
  Ww as ATOM_MANIFEST,
  jw as atomComponents,
  So as mountMagicWandAtoms
};
