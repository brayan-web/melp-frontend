"use strict";(self["webpackChunkmelp_frontend"]=self["webpackChunkmelp_frontend"]||[]).push([[586],{926:function(e,t,n){var r=n(3043),l=n(9985),o=n(6648),a=n(4201),u=a("toStringTag"),i=Object,s="Arguments"===o(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=i(e),u))?n:s?o(t):"Object"===(r=o(t))&&l(t.callee)?"Arguments":r}},2148:function(e,t,n){var r=n(8702),l=n(2560);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),l.f(e,t,n)}},3043:function(e,t,n){var r=n(4201),l=r("toStringTag"),o={};o[l]="z",e.exports="[object z]"===String(o)},4327:function(e,t,n){var r=n(926),l=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return l(e)}},1500:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8858:function(e,t,n){var r=n(1880),l=n(8844),o=n(4327),a=n(1500),u=URLSearchParams,i=u.prototype,s=l(i.append),d=l(i["delete"]),c=l(i.forEach),v=l([].push),f=new u("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(i,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return d(this,e);var r=[];c(this,(function(e,t){v(r,{key:t,value:e})})),a(t,1);var l,u=o(e),i=o(n),f=0,p=0,m=!1,b=r.length;while(f<b)l=r[f++],m||l.key===u?(m=!0,d(this,l.key)):p++;while(p<b)l=r[p++],l.key===u&&l.value===i||s(this,l.key,l.value)}),{enumerable:!0,unsafe:!0})},1318:function(e,t,n){var r=n(1880),l=n(8844),o=n(4327),a=n(1500),u=URLSearchParams,i=u.prototype,s=l(i.getAll),d=l(i.has),c=new u("a=1");!c.has("a",2)&&c.has("a",void 0)||r(i,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return d(this,e);var r=s(this,e);a(t,1);var l=o(n),u=0;while(u<r.length)if(r[u++]===l)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(e,t,n){var r=n(7697),l=n(8844),o=n(2148),a=URLSearchParams.prototype,u=l(a.forEach);r&&!("size"in a)&&o(a,"size",{get:function(){var e=0;return u(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3769:function(e,t,n){n.d(t,{Ri:function(){return F},Y4:function(){return L},xX:function(){return M},wt:function(){return D},O_:function(){return A}});n(560);var r=n(3396),l=n(4870),o=n(6896),a=n(3539),u=n(8595),i=n(7330),s=n(1762),d=n(5503),c=n(3010),v=n(6823),f=n(6295),p=n(7724),m=n(3215);function b(e={},t=null,n=[]){for(let[r,l]of Object.entries(e))g(n,h(t,r),l);return n}function h(e,t){return e?e+"["+t+"]":t}function g(e,t,n){if(Array.isArray(n))for(let[r,l]of n.entries())g(e,h(t,r.toString()),l);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):b(n,t,e)}function y(e,t,n){let o=(0,l.iH)(null==n?void 0:n.value),a=(0,r.Fl)((()=>void 0!==e.value));return[(0,r.Fl)((()=>a.value?e.value:o.value)),function(e){return a.value||(o.value=e),null==t?void 0:t(e)}]}var x=n(461),S=n(4538);function O(e,t){return e===t}var w=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(w||{}),R=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(R||{}),I=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(I||{});function T(e){requestAnimationFrame((()=>requestAnimationFrame(e)))}let E=Symbol("ListboxContext");function P(e){let t=(0,r.f3)(E,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,P),t}return t}let F=(0,r.aZ)({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>O},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:a}){let u=(0,l.iH)(1),v=(0,l.iH)(null),h=(0,l.iH)(null),g=(0,l.iH)(null),x=(0,l.iH)([]),S=(0,l.iH)(""),O=(0,l.iH)(null),w=(0,l.iH)(1);function R(e=(e=>e)){let t=null!==O.value?x.value[O.value]:null,n=(0,f.z2)(e(x.value.slice()),(e=>(0,s.v)(e.dataRef.domRef))),r=t?n.indexOf(t):null;return-1===r&&(r=null),{options:n,activeOptionIndex:r}}let I=(0,r.Fl)((()=>e.multiple?1:0)),[T,P]=y((0,r.Fl)((()=>e.modelValue)),(e=>a("update:modelValue",e)),(0,r.Fl)((()=>e.defaultValue))),F=(0,r.Fl)((()=>void 0===T.value?(0,c.E)(I.value,{[1]:[],[0]:void 0}):T.value)),M={listboxState:u,value:F,mode:I,compare(t,n){if("string"==typeof e.by){let r=e.by;return(null==t?void 0:t[r])===(null==n?void 0:n[r])}return e.by(t,n)},orientation:(0,r.Fl)((()=>e.horizontal?"horizontal":"vertical")),labelRef:v,buttonRef:h,optionsRef:g,disabled:(0,r.Fl)((()=>e.disabled)),options:x,searchQuery:S,activeOptionIndex:O,activationTrigger:w,closeListbox(){e.disabled||1!==u.value&&(u.value=1,O.value=null)},openListbox(){e.disabled||0!==u.value&&(u.value=0)},goToOption(t,n,r){if(e.disabled||1===u.value)return;let l=R(),o=(0,i.d)(t===i.T.Specific?{focus:i.T.Specific,id:n}:{focus:t},{resolveItems:()=>l.options,resolveActiveIndex:()=>l.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.disabled});S.value="",O.value=o,w.value=null!=r?r:1,x.value=l.options},search(t){if(e.disabled||1===u.value)return;let n=""!==S.value?0:1;S.value+=t.toLowerCase();let r=(null!==O.value?x.value.slice(O.value+n).concat(x.value.slice(0,O.value+n)):x.value).find((e=>e.dataRef.textValue.startsWith(S.value)&&!e.dataRef.disabled)),l=r?x.value.indexOf(r):-1;-1===l||l===O.value||(O.value=l,w.value=1)},clearSearch(){e.disabled||1!==u.value&&""!==S.value&&(S.value="")},registerOption(e,t){let n=R((n=>[...n,{id:e,dataRef:t}]));x.value=n.options,O.value=n.activeOptionIndex},unregisterOption(e){let t=R((t=>{let n=t.findIndex((t=>t.id===e));return-1!==n&&t.splice(n,1),t}));x.value=t.options,O.value=t.activeOptionIndex,w.value=1},theirOnChange(t){e.disabled||P(t)},select(t){e.disabled||P((0,c.E)(I.value,{[0]:()=>t,[1]:()=>{let e=(0,l.IU)(M.value.value).slice(),n=(0,l.IU)(t),r=e.findIndex((e=>M.compare(n,(0,l.IU)(e))));return-1===r?e.push(n):e.splice(r,1),e}}))}};(0,p.O)([h,g],((e,t)=>{var n;M.closeListbox(),(0,f.sP)(t,f.tJ.Loose)||(e.preventDefault(),null==(n=(0,s.v)(h))||n.focus())}),(0,r.Fl)((()=>0===u.value))),(0,r.JJ)(E,M),(0,d.Rb)((0,r.Fl)((()=>(0,c.E)(u.value,{[0]:d.ZM.Open,[1]:d.ZM.Closed}))));let L=(0,r.Fl)((()=>{var e;return null==(e=(0,s.v)(h))?void 0:e.closest("form")}));return(0,r.bv)((()=>{(0,r.YP)([L],(()=>{if(L.value&&void 0!==e.defaultValue)return L.value.addEventListener("reset",t),()=>{var e;null==(e=L.value)||e.removeEventListener("reset",t)};function t(){M.theirOnChange(e.defaultValue)}}),{immediate:!0})})),()=>{let{name:l,modelValue:a,disabled:i,form:s,...d}=e,c={open:0===u.value,disabled:i,value:F.value};return(0,r.h)(r.HY,[...null!=l&&null!=F.value?b({[l]:F.value}).map((([e,t])=>(0,r.h)(m._,(0,o.oA)({features:m.A.Hidden,key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:e,value:t})))):[],(0,o.sY)({ourProps:{},theirProps:{...n,...(0,o.CE)(d,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:c,slots:t,attrs:n,name:"Listbox"})])}}}),M=(0,r.aZ)({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${(0,a.M)()}`}},setup(e,{attrs:t,slots:n}){let r=P("ListboxLabel");function l(){var e;null==(e=(0,s.v)(r.buttonRef))||e.focus({preventScroll:!0})}return()=>{let a={open:0===r.listboxState.value,disabled:r.disabled.value},{id:u,...i}=e,s={id:u,ref:r.labelRef,onClick:l};return(0,o.sY)({ourProps:s,theirProps:i,slot:a,attrs:t,slots:n,name:"ListboxLabel"})}}}),L=(0,r.aZ)({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${(0,a.M)()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=P("ListboxButton");function d(e){switch(e.key){case u.R.Space:case u.R.Enter:case u.R.ArrowDown:e.preventDefault(),a.openListbox(),(0,r.Y3)((()=>{var e;null==(e=(0,s.v)(a.optionsRef))||e.focus({preventScroll:!0}),a.value.value||a.goToOption(i.T.First)}));break;case u.R.ArrowUp:e.preventDefault(),a.openListbox(),(0,r.Y3)((()=>{var e;null==(e=(0,s.v)(a.optionsRef))||e.focus({preventScroll:!0}),a.value.value||a.goToOption(i.T.Last)}));break}}function c(e){switch(e.key){case u.R.Space:e.preventDefault();break}}function f(e){a.disabled.value||(0===a.listboxState.value?(a.closeListbox(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(a.buttonRef))?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),a.openListbox(),T((()=>{var e;return null==(e=(0,s.v)(a.optionsRef))?void 0:e.focus({preventScroll:!0})}))))}l({el:a.buttonRef,$el:a.buttonRef});let p=(0,v.f)((0,r.Fl)((()=>({as:e.as,type:t.type}))),a.buttonRef);return()=>{var r,l;let u={open:0===a.listboxState.value,disabled:a.disabled.value,value:a.value.value},{id:i,...v}=e,m={ref:a.buttonRef,id:i,type:p.value,"aria-haspopup":"listbox","aria-controls":null==(r=(0,s.v)(a.optionsRef))?void 0:r.id,"aria-expanded":0===a.listboxState.value,"aria-labelledby":a.labelRef.value?[null==(l=(0,s.v)(a.labelRef))?void 0:l.id,i].join(" "):void 0,disabled:!0===a.disabled.value||void 0,onKeydown:d,onKeyup:c,onClick:f};return(0,o.sY)({ourProps:m,theirProps:v,slot:u,attrs:t,slots:n,name:"ListboxButton"})}}}),A=(0,r.aZ)({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${(0,a.M)()}`}},setup(e,{attrs:t,slots:n,expose:a}){let v=P("ListboxOptions"),f=(0,l.iH)(null);function p(e){switch(f.value&&clearTimeout(f.value),e.key){case u.R.Space:if(""!==v.searchQuery.value)return e.preventDefault(),e.stopPropagation(),v.search(e.key);case u.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==v.activeOptionIndex.value){let e=v.options.value[v.activeOptionIndex.value];v.select(e.dataRef.value)}0===v.mode.value&&(v.closeListbox(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(v.buttonRef))?void 0:e.focus({preventScroll:!0})})));break;case(0,c.E)(v.orientation.value,{vertical:u.R.ArrowDown,horizontal:u.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),v.goToOption(i.T.Next);case(0,c.E)(v.orientation.value,{vertical:u.R.ArrowUp,horizontal:u.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),v.goToOption(i.T.Previous);case u.R.Home:case u.R.PageUp:return e.preventDefault(),e.stopPropagation(),v.goToOption(i.T.First);case u.R.End:case u.R.PageDown:return e.preventDefault(),e.stopPropagation(),v.goToOption(i.T.Last);case u.R.Escape:e.preventDefault(),e.stopPropagation(),v.closeListbox(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(v.buttonRef))?void 0:e.focus({preventScroll:!0})}));break;case u.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(v.search(e.key),f.value=setTimeout((()=>v.clearSearch()),350));break}}a({el:v.optionsRef,$el:v.optionsRef});let m=(0,d.oJ)(),b=(0,r.Fl)((()=>null!==m?(m.value&d.ZM.Open)===d.ZM.Open:0===v.listboxState.value));return()=>{var r,l,a,u;let i={open:0===v.listboxState.value},{id:d,...c}=e,f={"aria-activedescendant":null===v.activeOptionIndex.value||null==(r=v.options.value[v.activeOptionIndex.value])?void 0:r.id,"aria-multiselectable":1===v.mode.value||void 0,"aria-labelledby":null!=(u=null==(l=(0,s.v)(v.labelRef))?void 0:l.id)?u:null==(a=(0,s.v)(v.buttonRef))?void 0:a.id,"aria-orientation":v.orientation.value,id:d,onKeydown:p,role:"listbox",tabIndex:0,ref:v.optionsRef};return(0,o.sY)({ourProps:f,theirProps:c,slot:i,attrs:t,slots:n,features:o.AN.RenderStrategy|o.AN.Static,visible:b.value,name:"ListboxOptions"})}}}),D=(0,r.aZ)({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${(0,a.M)()}`}},setup(e,{slots:t,attrs:n,expose:a}){let u=P("ListboxOption"),d=(0,l.iH)(null);a({el:d,$el:d});let v=(0,r.Fl)((()=>null!==u.activeOptionIndex.value&&u.options.value[u.activeOptionIndex.value].id===e.id)),f=(0,r.Fl)((()=>(0,c.E)(u.mode.value,{[0]:()=>u.compare((0,l.IU)(u.value.value),(0,l.IU)(e.value)),[1]:()=>(0,l.IU)(u.value.value).some((t=>u.compare((0,l.IU)(t),(0,l.IU)(e.value))))}))),p=(0,r.Fl)((()=>(0,c.E)(u.mode.value,{[1]:()=>{var t;let n=(0,l.IU)(u.value.value);return(null==(t=u.options.value.find((e=>n.some((t=>u.compare((0,l.IU)(t),(0,l.IU)(e.dataRef.value)))))))?void 0:t.id)===e.id},[0]:()=>f.value}))),m=(0,S.x)(d),b=(0,r.Fl)((()=>({disabled:e.disabled,value:e.value,get textValue(){return m()},domRef:d})));function h(t){if(e.disabled)return t.preventDefault();u.select(e.value),0===u.mode.value&&(u.closeListbox(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(u.buttonRef))?void 0:e.focus({preventScroll:!0})})))}function g(){if(e.disabled)return u.goToOption(i.T.Nothing);u.goToOption(i.T.Specific,e.id)}(0,r.bv)((()=>u.registerOption(e.id,b))),(0,r.Ah)((()=>u.unregisterOption(e.id))),(0,r.bv)((()=>{(0,r.YP)([u.listboxState,f],(()=>{0===u.listboxState.value&&f.value&&(0,c.E)(u.mode.value,{[1]:()=>{p.value&&u.goToOption(i.T.Specific,e.id)},[0]:()=>{u.goToOption(i.T.Specific,e.id)}})}),{immediate:!0})})),(0,r.m0)((()=>{0===u.listboxState.value&&v.value&&0!==u.activationTrigger.value&&(0,r.Y3)((()=>{var e,t;return null==(t=null==(e=(0,s.v)(d))?void 0:e.scrollIntoView)?void 0:t.call(e,{block:"nearest"})}))}));let y=(0,x.g)();function O(e){y.update(e)}function w(t){y.wasMoved(t)&&(e.disabled||v.value||u.goToOption(i.T.Specific,e.id,0))}function R(t){y.wasMoved(t)&&(e.disabled||v.value&&u.goToOption(i.T.Nothing))}return()=>{let{disabled:r}=e,l={active:v.value,selected:f.value,disabled:r},{id:a,value:u,disabled:i,...s}=e,c={id:a,ref:d,role:"option",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,"aria-selected":f.value,disabled:void 0,onClick:h,onFocus:g,onPointerenter:O,onMouseenter:O,onPointermove:w,onMousemove:w,onPointerleave:R,onMouseleave:R};return(0,o.sY)({ourProps:c,theirProps:s,slot:l,attrs:n,slots:t,name:"ListboxOption"})}}})},6556:function(e,t,n){n.d(t,{v2:function(){return R},j2:function(){return I},sN:function(){return E},sd:function(){return T}});var r=n(3396),l=n(4870),o=n(6896),a=n(3539),u=n(8595),i=n(7330),s=n(1762),d=n(7231);function c({container:e,accept:t,walk:n,enabled:l}){(0,r.m0)((()=>{let r=e.value;if(!r||void 0!==l&&!l.value)return;let o=(0,d.r)(e);if(!o)return;let a=Object.assign((e=>t(e)),{acceptNode:t}),u=o.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,a,!1);for(;u.nextNode();)n(u.currentNode)}))}var v=n(5503),f=n(3010),p=n(6823),m=n(6295),b=n(7724),h=n(461),g=n(4538),y=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(y||{}),x=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(x||{});function S(e){requestAnimationFrame((()=>requestAnimationFrame(e)))}let O=Symbol("MenuContext");function w(e){let t=(0,r.f3)(O,null);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}let R=(0,r.aZ)({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let a=(0,l.iH)(1),u=(0,l.iH)(null),d=(0,l.iH)(null),c=(0,l.iH)([]),p=(0,l.iH)(""),h=(0,l.iH)(null),g=(0,l.iH)(1);function y(e=(e=>e)){let t=null!==h.value?c.value[h.value]:null,n=(0,m.z2)(e(c.value.slice()),(e=>(0,s.v)(e.dataRef.domRef))),r=t?n.indexOf(t):null;return-1===r&&(r=null),{items:n,activeItemIndex:r}}let x={menuState:a,buttonRef:u,itemsRef:d,items:c,searchQuery:p,activeItemIndex:h,activationTrigger:g,closeMenu:()=>{a.value=1,h.value=null},openMenu:()=>a.value=0,goToItem(e,t,n){let r=y(),l=(0,i.d)(e===i.T.Specific?{focus:i.T.Specific,id:t}:{focus:e},{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.disabled});p.value="",h.value=l,g.value=null!=n?n:1,c.value=r.items},search(e){let t=""!==p.value?0:1;p.value+=e.toLowerCase();let n=(null!==h.value?c.value.slice(h.value+t).concat(c.value.slice(0,h.value+t)):c.value).find((e=>e.dataRef.textValue.startsWith(p.value)&&!e.dataRef.disabled)),r=n?c.value.indexOf(n):-1;-1===r||r===h.value||(h.value=r,g.value=1)},clearSearch(){p.value=""},registerItem(e,t){let n=y((n=>[...n,{id:e,dataRef:t}]));c.value=n.items,h.value=n.activeItemIndex,g.value=1},unregisterItem(e){let t=y((t=>{let n=t.findIndex((t=>t.id===e));return-1!==n&&t.splice(n,1),t}));c.value=t.items,h.value=t.activeItemIndex,g.value=1}};return(0,b.O)([u,d],((e,t)=>{var n;x.closeMenu(),(0,m.sP)(t,m.tJ.Loose)||(e.preventDefault(),null==(n=(0,s.v)(u))||n.focus())}),(0,r.Fl)((()=>0===a.value))),(0,r.JJ)(O,x),(0,v.Rb)((0,r.Fl)((()=>(0,f.E)(a.value,{[0]:v.ZM.Open,[1]:v.ZM.Closed})))),()=>{let r={open:0===a.value,close:x.closeMenu};return(0,o.sY)({ourProps:{},theirProps:e,slot:r,slots:t,attrs:n,name:"Menu"})}}}),I=(0,r.aZ)({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${(0,a.M)()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=w("MenuButton");function d(e){switch(e.key){case u.R.Space:case u.R.Enter:case u.R.ArrowDown:e.preventDefault(),e.stopPropagation(),a.openMenu(),(0,r.Y3)((()=>{var e;null==(e=(0,s.v)(a.itemsRef))||e.focus({preventScroll:!0}),a.goToItem(i.T.First)}));break;case u.R.ArrowUp:e.preventDefault(),e.stopPropagation(),a.openMenu(),(0,r.Y3)((()=>{var e;null==(e=(0,s.v)(a.itemsRef))||e.focus({preventScroll:!0}),a.goToItem(i.T.Last)}));break}}function c(e){switch(e.key){case u.R.Space:e.preventDefault();break}}function v(t){e.disabled||(0===a.menuState.value?(a.closeMenu(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(a.buttonRef))?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),a.openMenu(),S((()=>{var e;return null==(e=(0,s.v)(a.itemsRef))?void 0:e.focus({preventScroll:!0})}))))}l({el:a.buttonRef,$el:a.buttonRef});let f=(0,p.f)((0,r.Fl)((()=>({as:e.as,type:t.type}))),a.buttonRef);return()=>{var r;let l={open:0===a.menuState.value},{id:u,...i}=e,p={ref:a.buttonRef,id:u,type:f.value,"aria-haspopup":"menu","aria-controls":null==(r=(0,s.v)(a.itemsRef))?void 0:r.id,"aria-expanded":0===a.menuState.value,onKeydown:d,onKeyup:c,onClick:v};return(0,o.sY)({ourProps:p,theirProps:i,slot:l,attrs:t,slots:n,name:"MenuButton"})}}}),T=(0,r.aZ)({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${(0,a.M)()}`}},setup(e,{attrs:t,slots:n,expose:a}){let d=w("MenuItems"),f=(0,l.iH)(null);function p(e){var t;switch(f.value&&clearTimeout(f.value),e.key){case u.R.Space:if(""!==d.searchQuery.value)return e.preventDefault(),e.stopPropagation(),d.search(e.key);case u.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==d.activeItemIndex.value){let e=d.items.value[d.activeItemIndex.value];null==(t=(0,s.v)(e.dataRef.domRef))||t.click()}d.closeMenu(),(0,m.wI)((0,s.v)(d.buttonRef));break;case u.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),d.goToItem(i.T.Next);case u.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),d.goToItem(i.T.Previous);case u.R.Home:case u.R.PageUp:return e.preventDefault(),e.stopPropagation(),d.goToItem(i.T.First);case u.R.End:case u.R.PageDown:return e.preventDefault(),e.stopPropagation(),d.goToItem(i.T.Last);case u.R.Escape:e.preventDefault(),e.stopPropagation(),d.closeMenu(),(0,r.Y3)((()=>{var e;return null==(e=(0,s.v)(d.buttonRef))?void 0:e.focus({preventScroll:!0})}));break;case u.R.Tab:e.preventDefault(),e.stopPropagation(),d.closeMenu(),(0,r.Y3)((()=>(0,m.EO)((0,s.v)(d.buttonRef),e.shiftKey?m.TO.Previous:m.TO.Next)));break;default:1===e.key.length&&(d.search(e.key),f.value=setTimeout((()=>d.clearSearch()),350));break}}function b(e){switch(e.key){case u.R.Space:e.preventDefault();break}}a({el:d.itemsRef,$el:d.itemsRef}),c({container:(0,r.Fl)((()=>(0,s.v)(d.itemsRef))),enabled:(0,r.Fl)((()=>0===d.menuState.value)),accept(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});let h=(0,v.oJ)(),g=(0,r.Fl)((()=>null!==h?(h.value&v.ZM.Open)===v.ZM.Open:0===d.menuState.value));return()=>{var r,l;let a={open:0===d.menuState.value},{id:u,...i}=e,c={"aria-activedescendant":null===d.activeItemIndex.value||null==(r=d.items.value[d.activeItemIndex.value])?void 0:r.id,"aria-labelledby":null==(l=(0,s.v)(d.buttonRef))?void 0:l.id,id:u,onKeydown:p,onKeyup:b,role:"menu",tabIndex:0,ref:d.itemsRef};return(0,o.sY)({ourProps:c,theirProps:i,slot:a,attrs:t,slots:n,features:o.AN.RenderStrategy|o.AN.Static,visible:g.value,name:"MenuItems"})}}}),E=(0,r.aZ)({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${(0,a.M)()}`}},setup(e,{slots:t,attrs:n,expose:a}){let u=w("MenuItem"),d=(0,l.iH)(null);a({el:d,$el:d});let c=(0,r.Fl)((()=>null!==u.activeItemIndex.value&&u.items.value[u.activeItemIndex.value].id===e.id)),v=(0,g.x)(d),f=(0,r.Fl)((()=>({disabled:e.disabled,get textValue(){return v()},domRef:d})));function p(t){if(e.disabled)return t.preventDefault();u.closeMenu(),(0,m.wI)((0,s.v)(u.buttonRef))}function b(){if(e.disabled)return u.goToItem(i.T.Nothing);u.goToItem(i.T.Specific,e.id)}(0,r.bv)((()=>u.registerItem(e.id,f))),(0,r.Ah)((()=>u.unregisterItem(e.id))),(0,r.m0)((()=>{0===u.menuState.value&&c.value&&0!==u.activationTrigger.value&&(0,r.Y3)((()=>{var e,t;return null==(t=null==(e=(0,s.v)(d))?void 0:e.scrollIntoView)?void 0:t.call(e,{block:"nearest"})}))}));let y=(0,h.g)();function x(e){y.update(e)}function S(t){y.wasMoved(t)&&(e.disabled||c.value||u.goToItem(i.T.Specific,e.id,0))}function O(t){y.wasMoved(t)&&(e.disabled||c.value&&u.goToItem(i.T.Nothing))}return()=>{let{disabled:r}=e,l={active:c.value,disabled:r,close:u.closeMenu},{id:a,...i}=e;return(0,o.sY)({ourProps:{id:a,ref:d,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:p,onFocus:b,onPointerenter:x,onMouseenter:x,onPointermove:S,onMousemove:S,onPointerleave:O,onMouseleave:O},theirProps:{...n,...i},slot:l,attrs:n,slots:t,name:"MenuItem"})}}})},3539:function(e,t,n){n.d(t,{M:function(){return o}});let r=0;function l(){return++r}function o(){return l()}},7724:function(e,t,n){n.d(t,{O:function(){return d}});var r=n(3396),l=n(4870),o=n(6295),a=n(1762),u=n(444);function i(e,t,n){u.O.isServer||(0,r.m0)((r=>{document.addEventListener(e,t,n),r((()=>document.removeEventListener(e,t,n)))}))}var s=n(2010);function d(e,t,n=(0,r.Fl)((()=>!0))){function u(r,l){if(!n.value||r.defaultPrevented)return;let u=l(r);if(null===u||!u.getRootNode().contains(u))return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:(0,a.v)(e);if(null!=t&&t.contains(u)||r.composed&&r.composedPath().includes(t))return}return!(0,o.sP)(u,o.tJ.Loose)&&-1!==u.tabIndex&&r.preventDefault(),t(r,u)}let d=(0,l.iH)(null);i("pointerdown",(e=>{var t,r;n.value&&(d.value=(null==(r=null==(t=e.composedPath)?void 0:t.call(e))?void 0:r[0])||e.target)}),!0),i("mousedown",(e=>{var t,r;n.value&&(d.value=(null==(r=null==(t=e.composedPath)?void 0:t.call(e))?void 0:r[0])||e.target)}),!0),i("click",(e=>{d.value&&(u(e,(()=>d.value)),d.value=null)}),!0),i("touchend",(e=>u(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,s.s)("blur",(e=>u(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},6823:function(e,t,n){n.d(t,{f:function(){return u}});var r=n(4870),l=n(3396),o=n(1762);function a(e,t){if(e)return e;let n=null!=t?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function u(e,t){let n=(0,r.iH)(a(e.value.type,e.value.as));return(0,l.bv)((()=>{n.value=a(e.value.type,e.value.as)})),(0,l.m0)((()=>{var e;n.value||(0,o.v)(t)&&(0,o.v)(t)instanceof HTMLButtonElement&&(null==(e=(0,o.v)(t))||!e.hasAttribute("type"))&&(n.value="button")})),n}},4538:function(e,t,n){n.d(t,{x:function(){return i}});var r=n(4870);let l=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var t,n;let r=null!=(t=e.innerText)?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let a=!1;for(let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),a=!0;let u=a?null!=(n=o.innerText)?n:"":r;return l.test(u)&&(u=u.replace(l,"")),u}function a(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map((e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():o(t).trim()}return null})).filter(Boolean);if(e.length>0)return e.join(", ")}return o(e).trim()}var u=n(1762);function i(e){let t=(0,r.iH)(""),n=(0,r.iH)("");return()=>{let r=(0,u.v)(e);if(!r)return"";let l=r.innerText;if(t.value===l)return n.value;let o=a(r).trim().toLowerCase();return t.value=l,n.value=o,o}}},461:function(e,t,n){n.d(t,{g:function(){return o}});var r=n(4870);function l(e){return[e.screenX,e.screenY]}function o(){let e=(0,r.iH)([-1,-1]);return{wasMoved(t){let n=l(t);return(e.value[0]!==n[0]||e.value[1]!==n[1])&&(e.value=n,!0)},update(t){e.value=l(t)}}}},2010:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(3396),l=n(444);function o(e,t,n){l.O.isServer||(0,r.m0)((r=>{window.addEventListener(e,t,n),r((()=>window.removeEventListener(e,t,n)))}))}},3215:function(e,t,n){n.d(t,{A:function(){return o},_:function(){return a}});var r=n(3396),l=n(6896),o=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(o||{});let a=(0,r.aZ)({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...o}=e,a={"aria-hidden":2===(2&r)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&r)&&2!==(2&r)&&{display:"none"}}};return(0,l.sY)({ourProps:a,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}})},5503:function(e,t,n){n.d(t,{Rb:function(){return i},ZM:function(){return o},ih:function(){return a},oJ:function(){return u}});var r=n(3396);let l=Symbol("Context");var o=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(o||{});function a(){return null!==u()}function u(){return(0,r.f3)(l,null)}function i(e){(0,r.JJ)(l,e)}},8595:function(e,t,n){n.d(t,{R:function(){return r}});var r=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(r||{})},7330:function(e,t,n){function r(e){throw new Error("Unexpected object: "+e)}n.d(t,{T:function(){return l},d:function(){return o}});var l=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(l||{});function o(e,t){let n=t.resolveItems();if(n.length<=0)return null;let l=t.resolveActiveIndex(),o=null!=l?l:-1,a=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=o)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:r(e)}})();return-1===a?l:a}},1762:function(e,t,n){function r(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}n.d(t,{v:function(){return r}})},444:function(e,t,n){n.d(t,{O:function(){return u}});var r=Object.defineProperty,l=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(l(e,"symbol"!=typeof t?t+"":t,n),n);class a{constructor(){o(this,"current",this.detect()),o(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}}let u=new a},6295:function(e,t,n){n.d(t,{C5:function(){return m},EO:function(){return y},TO:function(){return u},fE:function(){return i},jA:function(){return x},sP:function(){return v},tJ:function(){return c},wI:function(){return f},z2:function(){return g}});var r=n(3396),l=n(3010),o=n(7231);let a=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var u=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(u||{}),i=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(i||{}),s=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(s||{});function d(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(a)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var c=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(c||{});function v(e,t=0){var n;return e!==(null==(n=(0,o.r)(e))?void 0:n.body)&&(0,l.E)(t,{[0](){return e.matches(a)},[1](){let t=e;for(;null!==t;){if(t.matches(a))return!0;t=t.parentElement}return!1}})}function f(e){let t=(0,o.r)(e);(0,r.Y3)((()=>{t&&!v(t.activeElement,0)&&m(e)}))}var p=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(p||{});function m(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let b=["textarea","input"].join(",");function h(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,b))&&n}function g(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),l=t(n);if(null===r||null===l)return 0;let o=r.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function y(e,t){return x(d(),t,{relativeTo:e})}function x(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let a=null!=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:null==e?void 0:e.ownerDocument)?o:document,u=Array.isArray(e)?n?g(e):e:d(e);l.length>0&&u.length>1&&(u=u.filter((e=>!l.includes(e)))),r=null!=r?r:a.activeElement;let i,s=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,u.indexOf(r))-1;if(4&t)return Math.max(0,u.indexOf(r))+1;if(8&t)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=32&t?{preventScroll:!0}:{},f=0,p=u.length;do{if(f>=p||f+p<=0)return 0;let e=c+f;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}i=u[e],null==i||i.focus(v),f+=s}while(i!==a.activeElement);return 6&t&&h(i)&&i.select(),2}},3010:function(e,t,n){function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}n.d(t,{E:function(){return r}})},7231:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(1762),l=n(444);function o(e){if(l.O.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(null!=e&&e.hasOwnProperty("value")){let t=(0,r.v)(e);if(t)return t.ownerDocument}return document}},6896:function(e,t,n){n.d(t,{AN:function(){return o},CE:function(){return v},l4:function(){return a},oA:function(){return c},sY:function(){return u}});n(560);var r=n(3396),l=n(3010),o=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(o||{}),a=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(a||{});function u({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var a;let u=d(r,n),s=Object.assign(o,{props:u});if(e||2&t&&u.static)return i(s);if(1&t){let e=null==(a=u.unmount)||a?0:1;return(0,l.E)(e,{[0](){return null},[1](){return i({...o,props:{...u,hidden:!0,style:{display:"none"}}})}})}return i(s)}function i({props:e,attrs:t,slots:n,slot:l,name:o}){var a,u;let{as:i,...c}=v(e,["unmount","static"]),p=null==(a=n.default)?void 0:a.call(n,l),m={};if(l){let e=!1,t=[];for(let[n,r]of Object.entries(l))"boolean"==typeof r&&(e=!0),!0===r&&t.push(n);e&&(m["data-headlessui-state"]=t.join(" "))}if("template"===i){if(p=s(null!=p?p:[]),Object.keys(c).length>0||Object.keys(t).length>0){let[e,...n]=null!=p?p:[];if(!f(e)||n.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(t)).map((e=>e.trim())).filter(((e,t,n)=>n.indexOf(e)===t)).sort(((e,t)=>e.localeCompare(t))).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let l=d(null!=(u=e.props)?u:{},c),a=(0,r.Ho)(e,l);for(let t in l)t.startsWith("on")&&(a.props||(a.props={}),a.props[t]=l[t]);return a}return Array.isArray(p)&&1===p.length?p[0]:p}return(0,r.h)(i,Object.assign({},c,m),{default:()=>p})}function s(e){return e.flatMap((e=>e.type===r.HY?s(e.children):[e]))}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let l=n[r];for(let n of l){if(e instanceof Event&&e.defaultPrevented)return;n(e,...t)}}});return t}function c(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function f(e){return null!=e&&("string"==typeof e.type||"object"==typeof e.type||"function"==typeof e.type)}}}]);
//# sourceMappingURL=586.a399241c.js.map