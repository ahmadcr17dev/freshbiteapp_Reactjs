var ex=Object.defineProperty;var tx=(t,e,n)=>e in t?ex(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fh=(t,e,n)=>tx(t,typeof e!="symbol"?e+"":e,n);function nx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function R_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k_={exports:{}},Wc={},P_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),rx=Symbol.for("react.portal"),ix=Symbol.for("react.fragment"),sx=Symbol.for("react.strict_mode"),ox=Symbol.for("react.profiler"),ax=Symbol.for("react.provider"),lx=Symbol.for("react.context"),ux=Symbol.for("react.forward_ref"),cx=Symbol.for("react.suspense"),dx=Symbol.for("react.memo"),hx=Symbol.for("react.lazy"),l0=Symbol.iterator;function fx(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var b_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N_=Object.assign,O_={};function ao(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||b_}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D_(){}D_.prototype=ao.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||b_}var Jp=Xp.prototype=new D_;Jp.constructor=Xp;N_(Jp,ao.prototype);Jp.isPureReactComponent=!0;var u0=Array.isArray,L_=Object.prototype.hasOwnProperty,Zp={current:null},M_={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)L_.call(e,r)&&!M_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:Zp.current}}function px(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function mx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var c0=/\/+/g;function ph(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mx(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case rx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ph(o,0):r,u0(i)?(n="",t!=null&&(n=t.replace(c0,"$&/")+"/"),lu(i,e,n,"",function(c){return c})):i!=null&&(em(i)&&(i=px(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(c0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",u0(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+ph(s,a);o+=lu(s,e,n,u,i)}else if(u=fx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+ph(s,a++),o+=lu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nl(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},uu={transition:null},yx={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Zp};function V_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Nl,forEach:function(t,e,n){Nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nl(t,function(){e++}),e},toArray:function(t){return Nl(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ao;ee.Fragment=ix;ee.Profiler=ox;ee.PureComponent=Xp;ee.StrictMode=sx;ee.Suspense=cx;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;ee.act=V_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)L_.call(e,u)&&!M_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ax,_context:t},t.Consumer=t};ee.createElement=j_;ee.createFactory=function(t){var e=j_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:ux,render:t}};ee.isValidElement=em;ee.lazy=function(t){return{$$typeof:hx,_payload:{_status:-1,_result:t},_init:gx}};ee.memo=function(t,e){return{$$typeof:dx,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ee.unstable_act=V_;ee.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ee.useContext=function(t){return Tt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Tt.current.useEffect(t,e)};ee.useId=function(){return Tt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Tt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};ee.useRef=function(t){return Tt.current.useRef(t)};ee.useState=function(t){return Tt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Tt.current.useTransition()};ee.version="18.3.1";P_.exports=ee;var M=P_.exports;const wt=R_(M),hf=nx({__proto__:null,default:wt},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=M,_x=Symbol.for("react.element"),wx=Symbol.for("react.fragment"),Ex=Object.prototype.hasOwnProperty,Tx=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ix={key:!0,ref:!0,__self:!0,__source:!0};function F_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ex.call(e,r)&&!Ix.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_x,type:t,key:s,ref:o,props:i,_owner:Tx.current}}Wc.Fragment=wx;Wc.jsx=F_;Wc.jsxs=F_;k_.exports=Wc;var p=k_.exports,ff={},z_={exports:{}},Ht={},U_={exports:{}},$_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var Q=$.length;$.push(G);e:for(;0<Q;){var ue=Q-1>>>1,te=$[ue];if(0<i(te,G))$[ue]=G,$[Q]=te,Q=ue;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],Q=$.pop();if(Q!==G){$[0]=Q;e:for(var ue=0,te=$.length,we=te>>>1;ue<we;){var Dt=2*(ue+1)-1,xt=$[Dt],gt=Dt+1,Ct=$[gt];if(0>i(xt,Q))gt<te&&0>i(Ct,xt)?($[ue]=Ct,$[gt]=Q,ue=gt):($[ue]=xt,$[Dt]=Q,ue=Dt);else if(gt<te&&0>i(Ct,Q))$[ue]=Ct,$[gt]=Q,ue=gt;else break e}}return G}function i($,G){var Q=$.sortIndex-G.sortIndex;return Q!==0?Q:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,g=3,y=!1,S=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=$)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function k($){if(C=!1,E($),!S)if(n(u)!==null)S=!0,hi(D);else{var G=n(c);G!==null&&Ot(k,G.startTime-$)}}function D($,G){S=!1,C&&(C=!1,w(_),_=-1),y=!0;var Q=g;try{for(E(G),f=n(u);f!==null&&(!(f.expirationTime>G)||$&&!b());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,g=f.priorityLevel;var te=ue(f.expirationTime<=G);G=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(u)&&r(u),E(G)}else r(u);f=n(u)}if(f!==null)var we=!0;else{var Dt=n(c);Dt!==null&&Ot(k,Dt.startTime-G),we=!1}return we}finally{f=null,g=Q,y=!1}}var L=!1,I=null,_=-1,x=5,R=-1;function b(){return!(t.unstable_now()-R<x)}function N(){if(I!==null){var $=t.unstable_now();R=$;var G=!0;try{G=I(!0,$)}finally{G?P():(L=!1,I=null)}}else L=!1}var P;if(typeof v=="function")P=function(){v(N)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Un=St.port2;St.port1.onmessage=N,P=function(){Un.postMessage(null)}}else P=function(){A(N,0)};function hi($){I=$,L||(L=!0,P())}function Ot($,G){_=A(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,hi(D))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Q=g;g=G;try{return $()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=g;g=$;try{return G()}finally{g=Q}},t.unstable_scheduleCallback=function($,G,Q){var ue=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,$){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Q+te,$={id:d++,callback:G,priorityLevel:$,startTime:Q,expirationTime:te,sortIndex:-1},Q>ue?($.sortIndex=Q,e(c,$),n(u)===null&&$===n(c)&&(C?(w(_),_=-1):C=!0,Ot(k,Q-ue))):($.sortIndex=te,e(u,$),S||y||(S=!0,hi(D))),$},t.unstable_shouldYield=b,t.unstable_wrapCallback=function($){var G=g;return function(){var Q=g;g=G;try{return $.apply(this,arguments)}finally{g=Q}}}})($_);U_.exports=$_;var Sx=U_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx=M,Bt=Sx;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B_=new Set,ma={};function Ki(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(ma[t]=e,t=0;t<e.length;t++)B_.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,Cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d0={},h0={};function Ax(t){return pf.call(h0,t)?!0:pf.call(d0,t)?!1:Cx.test(t)?h0[t]=!0:(d0[t]=!0,!1)}function Rx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kx(t,e,n,r){if(e===null||typeof e>"u"||Rx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);et[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);et[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);et[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kx(e,n,i,r)&&(n=null),r||i===null?Ax(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ol=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),yf=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),H_=Symbol.for("react.offscreen"),f0=Symbol.iterator;function No(t){return t===null||typeof t!="object"?null:(t=f0&&t[f0]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,mh;function $o(t){if(mh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mh=e&&e[1]||""}return`
`+mh+t}var gh=!1;function yh(t,e){if(!t||gh)return"";gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function Px(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=yh(t.type,!1),t;case 11:return t=yh(t.type.render,!1),t;case 1:return t=yh(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case mf:return"Profiler";case im:return"StrictMode";case gf:return"Suspense";case yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q_:return(t.displayName||"Context")+".Consumer";case W_:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function bx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nx(t){var e=G_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dl(t){t._valueTracker||(t._valueTracker=Nx(t))}function K_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _f(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function p0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q_(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function wf(t,e){Q_(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ef(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function m0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ef(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function g0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Bo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function Y_(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function y0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function If(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ll,J_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ox=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){Ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Z_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dx=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(Dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Af=null,Rs=null,ks=null;function v0(t){if(t=Xa(t)){if(typeof Af!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Qc(e),Af(t.stateNode,t.type,e))}}function tw(t){Rs?ks?ks.push(t):ks=[t]:Rs=t}function nw(){if(Rs){var t=Rs,e=ks;if(ks=Rs=null,v0(t),e)for(t=0;t<e.length;t++)v0(e[t])}}function rw(t,e){return t(e)}function iw(){}var vh=!1;function sw(t,e,n){if(vh)return t(e,n);vh=!0;try{return rw(t,e,n)}finally{vh=!1,(Rs!==null||ks!==null)&&(iw(),nw())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Qc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Rf=!1;if(sr)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Rf=!1}function Lx(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ta=!1,Fu=null,zu=!1,kf=null,Mx={onError:function(t){ta=!0,Fu=t}};function jx(t,e,n,r,i,s,o,a,u){ta=!1,Fu=null,Lx.apply(Mx,arguments)}function Vx(t,e,n,r,i,s,o,a,u){if(jx.apply(this,arguments),ta){if(ta){var c=Fu;ta=!1,Fu=null}else throw Error(z(198));zu||(zu=!0,kf=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ow(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _0(t){if(Qi(t)!==t)throw Error(z(188))}function Fx(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _0(i),t;if(s===r)return _0(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function aw(t){return t=Fx(t),t!==null?lw(t):null}function lw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lw(t);if(e!==null)return e;t=t.sibling}return null}var uw=Bt.unstable_scheduleCallback,w0=Bt.unstable_cancelCallback,zx=Bt.unstable_shouldYield,Ux=Bt.unstable_requestPaint,Oe=Bt.unstable_now,$x=Bt.unstable_getCurrentPriorityLevel,lm=Bt.unstable_ImmediatePriority,cw=Bt.unstable_UserBlockingPriority,Uu=Bt.unstable_NormalPriority,Bx=Bt.unstable_LowPriority,dw=Bt.unstable_IdlePriority,qc=null,Pn=null;function Wx(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Gx,qx=Math.log,Hx=Math.LN2;function Gx(t){return t>>>=0,t===0?32:31-(qx(t)/Hx|0)|0}var Ml=64,jl=4194304;function Wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $u(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wo(a):(s&=o,s!==0&&(r=Wo(s)))}else o=n&~i,o!==0?r=Wo(o):s!==0&&(r=Wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function Kx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Kx(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hw(){var t=Ml;return Ml<<=1,!(Ml&4194240)&&(Ml=64),t}function _h(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function Yx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function fw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pw,cm,mw,gw,yw,bf=!1,Vl=[],jr=null,Vr=null,Fr=null,va=new Map,_a=new Map,Ar=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function E0(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Jx(t,e,n,r,i){switch(e){case"focusin":return jr=Do(jr,t,e,n,r,i),!0;case"dragenter":return Vr=Do(Vr,t,e,n,r,i),!0;case"mouseover":return Fr=Do(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return va.set(s,Do(va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,Do(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function vw(t){var e=Ii(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=ow(n),e!==null){t.blockedOn=e,yw(t.priority,function(){mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return e=Xa(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function T0(t,e,n){cu(t)&&n.delete(e)}function Zx(){bf=!1,jr!==null&&cu(jr)&&(jr=null),Vr!==null&&cu(Vr)&&(Vr=null),Fr!==null&&cu(Fr)&&(Fr=null),va.forEach(T0),_a.forEach(T0)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,Zx)))}function wa(t){function e(i){return Lo(i,t)}if(0<Vl.length){Lo(Vl[0],t);for(var n=1;n<Vl.length;n++){var r=Vl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Lo(jr,t),Vr!==null&&Lo(Vr,t),Fr!==null&&Lo(Fr,t),va.forEach(e),_a.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)vw(n),n.blockedOn===null&&Ar.shift()}var Ps=mr.ReactCurrentBatchConfig,Bu=!0;function e4(t,e,n,r){var i=ce,s=Ps.transition;Ps.transition=null;try{ce=1,dm(t,e,n,r)}finally{ce=i,Ps.transition=s}}function t4(t,e,n,r){var i=ce,s=Ps.transition;Ps.transition=null;try{ce=4,dm(t,e,n,r)}finally{ce=i,Ps.transition=s}}function dm(t,e,n,r){if(Bu){var i=Nf(t,e,n,r);if(i===null)kh(t,e,r,Wu,n),E0(t,r);else if(Jx(i,t,e,n,r))r.stopPropagation();else if(E0(t,r),e&4&&-1<Xx.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&pw(s),s=Nf(t,e,n,r),s===null&&kh(t,e,r,Wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kh(t,e,r,null,n)}}var Wu=null;function Nf(t,e,n,r){if(Wu=null,t=am(r),t=Ii(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ow(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function _w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($x()){case lm:return 1;case cw:return 4;case Uu:case Bx:return 16;case dw:return 536870912;default:return 16}default:return 16}}var Or=null,hm=null,du=null;function ww(){if(du)return du;var t,e=hm,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return du=i.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function I0(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fl:I0,this.isPropagationStopped=I0,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=Gt(lo),Ya=xe({},lo,{view:0,detail:0}),n4=Gt(Ya),wh,Eh,Mo,Hc=xe({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(wh=t.screenX-Mo.screenX,Eh=t.screenY-Mo.screenY):Eh=wh=0,Mo=t),wh)},movementY:function(t){return"movementY"in t?t.movementY:Eh}}),S0=Gt(Hc),r4=xe({},Hc,{dataTransfer:0}),i4=Gt(r4),s4=xe({},Ya,{relatedTarget:0}),Th=Gt(s4),o4=xe({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),a4=Gt(o4),l4=xe({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u4=Gt(l4),c4=xe({},lo,{data:0}),x0=Gt(c4),d4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=f4[t])?!!e[t]:!1}function pm(){return p4}var m4=xe({},Ya,{key:function(t){if(t.key){var e=d4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g4=Gt(m4),y4=xe({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C0=Gt(y4),v4=xe({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),_4=Gt(v4),w4=xe({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),E4=Gt(w4),T4=xe({},Hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I4=Gt(T4),S4=[9,13,27,32],mm=sr&&"CompositionEvent"in window,na=null;sr&&"documentMode"in document&&(na=document.documentMode);var x4=sr&&"TextEvent"in window&&!na,Ew=sr&&(!mm||na&&8<na&&11>=na),A0=" ",R0=!1;function Tw(t,e){switch(t){case"keyup":return S4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function C4(t,e){switch(t){case"compositionend":return Iw(e);case"keypress":return e.which!==32?null:(R0=!0,A0);case"textInput":return t=e.data,t===A0&&R0?null:t;default:return null}}function A4(t,e){if(gs)return t==="compositionend"||!mm&&Tw(t,e)?(t=ww(),du=hm=Or=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ew&&e.locale!=="ko"?null:e.data;default:return null}}var R4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!R4[t.type]:e==="textarea"}function Sw(t,e,n,r){tw(r),e=qu(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,Ea=null;function k4(t){Lw(t,0)}function Gc(t){var e=_s(t);if(K_(e))return t}function P4(t,e){if(t==="change")return e}var xw=!1;if(sr){var Ih;if(sr){var Sh="oninput"in document;if(!Sh){var P0=document.createElement("div");P0.setAttribute("oninput","return;"),Sh=typeof P0.oninput=="function"}Ih=Sh}else Ih=!1;xw=Ih&&(!document.documentMode||9<document.documentMode)}function b0(){ra&&(ra.detachEvent("onpropertychange",Cw),Ea=ra=null)}function Cw(t){if(t.propertyName==="value"&&Gc(Ea)){var e=[];Sw(e,Ea,t,am(t)),sw(k4,e)}}function b4(t,e,n){t==="focusin"?(b0(),ra=e,Ea=n,ra.attachEvent("onpropertychange",Cw)):t==="focusout"&&b0()}function N4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(Ea)}function O4(t,e){if(t==="click")return Gc(e)}function D4(t,e){if(t==="input"||t==="change")return Gc(e)}function L4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:L4;function Ta(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function N0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function O0(t,e){var n=N0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=N0(n)}}function Aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rw(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M4(t){var e=Rw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Aw(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=O0(n,s);var o=O0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j4=sr&&"documentMode"in document&&11>=document.documentMode,ys=null,Of=null,ia=null,Df=!1;function D0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||ys==null||ys!==Vu(r)||(r=ys,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Ta(ia,r)||(ia=r,r=qu(Of,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},xh={},kw={};sr&&(kw=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Kc(t){if(xh[t])return xh[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kw)return xh[t]=e[n];return t}var Pw=Kc("animationend"),bw=Kc("animationiteration"),Nw=Kc("animationstart"),Ow=Kc("transitionend"),Dw=new Map,L0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){Dw.set(t,e),Ki(e,[t])}for(var Ch=0;Ch<L0.length;Ch++){var Ah=L0[Ch],V4=Ah.toLowerCase(),F4=Ah[0].toUpperCase()+Ah.slice(1);ii(V4,"on"+F4)}ii(Pw,"onAnimationEnd");ii(bw,"onAnimationIteration");ii(Nw,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(Ow,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z4=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function M0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Vx(r,e,void 0,t),t.currentTarget=null}function Lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;M0(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;M0(i,a,c),s=u}}}if(zu)throw t=kf,zu=!1,kf=null,t}function ge(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(Mw(e,t,2,!1),n.add(r))}function Rh(t,e,n){var r=0;e&&(r|=4),Mw(n,t,r,e)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Ul]){t[Ul]=!0,B_.forEach(function(n){n!=="selectionchange"&&(z4.has(n)||Rh(n,!1,t),Rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ul]||(e[Ul]=!0,Rh("selectionchange",!1,e))}}function Mw(t,e,n,r){switch(_w(e)){case 1:var i=e4;break;case 4:i=t4;break;default:i=dm}n=i.bind(null,e,n,t),i=void 0,!Rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ii(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}sw(function(){var c=s,d=am(n),f=[];e:{var g=Dw.get(t);if(g!==void 0){var y=fm,S=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":y=g4;break;case"focusin":S="focus",y=Th;break;case"focusout":S="blur",y=Th;break;case"beforeblur":case"afterblur":y=Th;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=i4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_4;break;case Pw:case bw:case Nw:y=a4;break;case Ow:y=E4;break;case"scroll":y=n4;break;case"wheel":y=I4;break;case"copy":case"cut":case"paste":y=u4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=C0}var C=(e&4)!==0,A=!C&&t==="scroll",w=C?g!==null?g+"Capture":null:g;C=[];for(var v=c,E;v!==null;){E=v;var k=E.stateNode;if(E.tag===5&&k!==null&&(E=k,w!==null&&(k=ya(v,w),k!=null&&C.push(Sa(v,k,E)))),A)break;v=v.return}0<C.length&&(g=new y(g,S,null,n,d),f.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==Cf&&(S=n.relatedTarget||n.fromElement)&&(Ii(S)||S[or]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=c,S=S?Ii(S):null,S!==null&&(A=Qi(S),S!==A||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(C=S0,k="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=C0,k="onPointerLeave",w="onPointerEnter",v="pointer"),A=y==null?g:_s(y),E=S==null?g:_s(S),g=new C(k,v+"leave",y,n,d),g.target=A,g.relatedTarget=E,k=null,Ii(d)===c&&(C=new C(w,v+"enter",S,n,d),C.target=E,C.relatedTarget=A,k=C),A=k,y&&S)t:{for(C=y,w=S,v=0,E=C;E;E=as(E))v++;for(E=0,k=w;k;k=as(k))E++;for(;0<v-E;)C=as(C),v--;for(;0<E-v;)w=as(w),E--;for(;v--;){if(C===w||w!==null&&C===w.alternate)break t;C=as(C),w=as(w)}C=null}else C=null;y!==null&&j0(f,g,y,C,!1),S!==null&&A!==null&&j0(f,A,S,C,!0)}}e:{if(g=c?_s(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var D=P4;else if(k0(g))if(xw)D=D4;else{D=N4;var L=b4}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(D=O4);if(D&&(D=D(t,c))){Sw(f,D,n,d);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Ef(g,"number",g.value)}switch(L=c?_s(c):window,t){case"focusin":(k0(L)||L.contentEditable==="true")&&(ys=L,Of=c,ia=null);break;case"focusout":ia=Of=ys=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,D0(f,n,d);break;case"selectionchange":if(j4)break;case"keydown":case"keyup":D0(f,n,d)}var I;if(mm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else gs?Tw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ew&&n.locale!=="ko"&&(gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&gs&&(I=ww()):(Or=d,hm="value"in Or?Or.value:Or.textContent,gs=!0)),L=qu(c,_),0<L.length&&(_=new x0(_,t,null,n,d),f.push({event:_,listeners:L}),I?_.data=I:(I=Iw(n),I!==null&&(_.data=I)))),(I=x4?C4(t,n):A4(t,n))&&(c=qu(c,"onBeforeInput"),0<c.length&&(d=new x0("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}Lw(f,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ya(t,n),s!=null&&r.unshift(Sa(t,s,i)),s=ya(t,e),s!=null&&r.push(Sa(t,s,i))),t=t.return}return r}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function j0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ya(n,s),u!=null&&o.unshift(Sa(n,u,a))):i||(u=ya(n,s),u!=null&&o.push(Sa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var U4=/\r\n?/g,$4=/\u0000|\uFFFD/g;function V0(t){return(typeof t=="string"?t:""+t).replace(U4,`
`).replace($4,"")}function $l(t,e,n){if(e=V0(e),V0(t)!==e&&n)throw Error(z(425))}function Hu(){}var Lf=null,Mf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vf=typeof setTimeout=="function"?setTimeout:void 0,B4=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,W4=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(t){return F0.resolve(null).then(t).catch(q4)}:Vf;function q4(t){setTimeout(function(){throw t})}function Ph(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function z0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),kn="__reactFiber$"+uo,xa="__reactProps$"+uo,or="__reactContainer$"+uo,Ff="__reactEvents$"+uo,H4="__reactListeners$"+uo,G4="__reactHandles$"+uo;function Ii(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=z0(t);t!==null;){if(n=t[kn])return n;t=z0(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[kn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Qc(t){return t[xa]||null}var zf=[],ws=-1;function si(t){return{current:t}}function ve(t){0>ws||(t.current=zf[ws],zf[ws]=null,ws--)}function pe(t,e){ws++,zf[ws]=t.current,t.current=e}var Jr={},ft=si(Jr),Pt=si(!1),Li=Jr;function zs(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Gu(){ve(Pt),ve(ft)}function U0(t,e,n){if(ft.current!==Jr)throw Error(z(168));pe(ft,e),pe(Pt,n)}function jw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,bx(t)||"Unknown",i));return xe({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Li=ft.current,pe(ft,t),pe(Pt,Pt.current),!0}function $0(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=jw(t,e,Li),r.__reactInternalMemoizedMergedChildContext=t,ve(Pt),ve(ft),pe(ft,t)):ve(Pt),pe(Pt,n)}var Qn=null,Yc=!1,bh=!1;function Vw(t){Qn===null?Qn=[t]:Qn.push(t)}function K4(t){Yc=!0,Vw(t)}function oi(){if(!bh&&Qn!==null){bh=!0;var t=0,e=ce;try{var n=Qn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,Yc=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),uw(lm,oi),i}finally{ce=e,bh=!1}}return null}var Es=[],Ts=0,Qu=null,Yu=0,Qt=[],Yt=0,Mi=null,Yn=1,Xn="";function _i(t,e){Es[Ts++]=Yu,Es[Ts++]=Qu,Qu=t,Yu=e}function Fw(t,e,n){Qt[Yt++]=Yn,Qt[Yt++]=Xn,Qt[Yt++]=Mi,Mi=t;var r=Yn;t=Xn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-mn(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function ym(t){t.return!==null&&(_i(t,1),Fw(t,1,0))}function vm(t){for(;t===Qu;)Qu=Es[--Ts],Es[Ts]=null,Yu=Es[--Ts],Es[Ts]=null;for(;t===Mi;)Mi=Qt[--Yt],Qt[Yt]=null,Xn=Qt[--Yt],Qt[Yt]=null,Yn=Qt[--Yt],Qt[Yt]=null}var Ut=null,Vt=null,Ee=!1,un=null;function zw(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function B0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Vt=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $f(t){if(Ee){var e=Vt;if(e){var n=e;if(!B0(t,e)){if(Uf(t))throw Error(z(418));e=zr(n.nextSibling);var r=Ut;e&&B0(t,e)?zw(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ut=t)}}else{if(Uf(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ee=!1,Ut=t}}}function W0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Bl(t){if(t!==Ut)return!1;if(!Ee)return W0(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=Vt)){if(Uf(t))throw Uw(),Error(z(418));for(;e;)zw(t,e),e=zr(e.nextSibling)}if(W0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ut?zr(t.stateNode.nextSibling):null;return!0}function Uw(){for(var t=Vt;t;)t=zr(t.nextSibling)}function Us(){Vt=Ut=null,Ee=!1}function _m(t){un===null?un=[t]:un.push(t)}var Q4=mr.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function q0(t){var e=t._init;return e(t._payload)}function $w(t){function e(w,v){if(t){var E=w.deletions;E===null?(w.deletions=[v],w.flags|=16):E.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=Wr(w,v),w.index=0,w.sibling=null,w}function s(w,v,E){return w.index=E,t?(E=w.alternate,E!==null?(E=E.index,E<v?(w.flags|=2,v):E):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,v,E,k){return v===null||v.tag!==6?(v=Vh(E,w.mode,k),v.return=w,v):(v=i(v,E),v.return=w,v)}function u(w,v,E,k){var D=E.type;return D===ms?d(w,v,E.props.children,k,E.key):v!==null&&(v.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&q0(D)===v.type)?(k=i(v,E.props),k.ref=jo(w,v,E),k.return=w,k):(k=_u(E.type,E.key,E.props,null,w.mode,k),k.ref=jo(w,v,E),k.return=w,k)}function c(w,v,E,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=Fh(E,w.mode,k),v.return=w,v):(v=i(v,E.children||[]),v.return=w,v)}function d(w,v,E,k,D){return v===null||v.tag!==7?(v=Pi(E,w.mode,k,D),v.return=w,v):(v=i(v,E),v.return=w,v)}function f(w,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vh(""+v,w.mode,E),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ol:return E=_u(v.type,v.key,v.props,null,w.mode,E),E.ref=jo(w,null,v),E.return=w,E;case ps:return v=Fh(v,w.mode,E),v.return=w,v;case Sr:var k=v._init;return f(w,k(v._payload),E)}if(Bo(v)||No(v))return v=Pi(v,w.mode,E,null),v.return=w,v;Wl(w,v)}return null}function g(w,v,E,k){var D=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return D!==null?null:a(w,v,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ol:return E.key===D?u(w,v,E,k):null;case ps:return E.key===D?c(w,v,E,k):null;case Sr:return D=E._init,g(w,v,D(E._payload),k)}if(Bo(E)||No(E))return D!==null?null:d(w,v,E,k,null);Wl(w,E)}return null}function y(w,v,E,k,D){if(typeof k=="string"&&k!==""||typeof k=="number")return w=w.get(E)||null,a(v,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ol:return w=w.get(k.key===null?E:k.key)||null,u(v,w,k,D);case ps:return w=w.get(k.key===null?E:k.key)||null,c(v,w,k,D);case Sr:var L=k._init;return y(w,v,E,L(k._payload),D)}if(Bo(k)||No(k))return w=w.get(E)||null,d(v,w,k,D,null);Wl(v,k)}return null}function S(w,v,E,k){for(var D=null,L=null,I=v,_=v=0,x=null;I!==null&&_<E.length;_++){I.index>_?(x=I,I=null):x=I.sibling;var R=g(w,I,E[_],k);if(R===null){I===null&&(I=x);break}t&&I&&R.alternate===null&&e(w,I),v=s(R,v,_),L===null?D=R:L.sibling=R,L=R,I=x}if(_===E.length)return n(w,I),Ee&&_i(w,_),D;if(I===null){for(;_<E.length;_++)I=f(w,E[_],k),I!==null&&(v=s(I,v,_),L===null?D=I:L.sibling=I,L=I);return Ee&&_i(w,_),D}for(I=r(w,I);_<E.length;_++)x=y(I,w,_,E[_],k),x!==null&&(t&&x.alternate!==null&&I.delete(x.key===null?_:x.key),v=s(x,v,_),L===null?D=x:L.sibling=x,L=x);return t&&I.forEach(function(b){return e(w,b)}),Ee&&_i(w,_),D}function C(w,v,E,k){var D=No(E);if(typeof D!="function")throw Error(z(150));if(E=D.call(E),E==null)throw Error(z(151));for(var L=D=null,I=v,_=v=0,x=null,R=E.next();I!==null&&!R.done;_++,R=E.next()){I.index>_?(x=I,I=null):x=I.sibling;var b=g(w,I,R.value,k);if(b===null){I===null&&(I=x);break}t&&I&&b.alternate===null&&e(w,I),v=s(b,v,_),L===null?D=b:L.sibling=b,L=b,I=x}if(R.done)return n(w,I),Ee&&_i(w,_),D;if(I===null){for(;!R.done;_++,R=E.next())R=f(w,R.value,k),R!==null&&(v=s(R,v,_),L===null?D=R:L.sibling=R,L=R);return Ee&&_i(w,_),D}for(I=r(w,I);!R.done;_++,R=E.next())R=y(I,w,_,R.value,k),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?_:R.key),v=s(R,v,_),L===null?D=R:L.sibling=R,L=R);return t&&I.forEach(function(N){return e(w,N)}),Ee&&_i(w,_),D}function A(w,v,E,k){if(typeof E=="object"&&E!==null&&E.type===ms&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Ol:e:{for(var D=E.key,L=v;L!==null;){if(L.key===D){if(D=E.type,D===ms){if(L.tag===7){n(w,L.sibling),v=i(L,E.props.children),v.return=w,w=v;break e}}else if(L.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Sr&&q0(D)===L.type){n(w,L.sibling),v=i(L,E.props),v.ref=jo(w,L,E),v.return=w,w=v;break e}n(w,L);break}else e(w,L);L=L.sibling}E.type===ms?(v=Pi(E.props.children,w.mode,k,E.key),v.return=w,w=v):(k=_u(E.type,E.key,E.props,null,w.mode,k),k.ref=jo(w,v,E),k.return=w,w=k)}return o(w);case ps:e:{for(L=E.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(w,v.sibling),v=i(v,E.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Fh(E,w.mode,k),v.return=w,w=v}return o(w);case Sr:return L=E._init,A(w,v,L(E._payload),k)}if(Bo(E))return S(w,v,E,k);if(No(E))return C(w,v,E,k);Wl(w,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,E),v.return=w,w=v):(n(w,v),v=Vh(E,w.mode,k),v.return=w,w=v),o(w)):n(w,v)}return A}var $s=$w(!0),Bw=$w(!1),Xu=si(null),Ju=null,Is=null,wm=null;function Em(){wm=Is=Ju=null}function Tm(t){var e=Xu.current;ve(Xu),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Ju=t,wm=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(Ju===null)throw Error(z(308));Is=t,Ju.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Si=null;function Im(t){Si===null?Si=[t]:Si.push(t)}function Ww(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Im(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function Sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,Im(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}function H0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,C=a;switch(g=e,y=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){f=S.call(y,f,g);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,g=typeof S=="function"?S.call(y,f,g):S,g==null)break e;f=xe({},f,g);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=f}}function G0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ja={},bn=si(Ja),Ca=si(Ja),Aa=si(Ja);function xi(t){if(t===Ja)throw Error(z(174));return t}function xm(t,e){switch(pe(Aa,e),pe(Ca,t),pe(bn,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:If(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=If(e,t)}ve(bn),pe(bn,e)}function Bs(){ve(bn),ve(Ca),ve(Aa)}function Hw(t){xi(Aa.current);var e=xi(bn.current),n=If(e,t.type);e!==n&&(pe(Ca,t),pe(bn,n))}function Cm(t){Ca.current===t&&(ve(bn),ve(Ca))}var Te=si(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nh=[];function Am(){for(var t=0;t<Nh.length;t++)Nh[t]._workInProgressVersionPrimary=null;Nh.length=0}var pu=mr.ReactCurrentDispatcher,Oh=mr.ReactCurrentBatchConfig,ji=0,Se=null,Fe=null,Be=null,tc=!1,sa=!1,Ra=0,Y4=0;function st(){throw Error(z(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function km(t,e,n,r,i,s){if(ji=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?e5:t5,t=n(r,i),sa){s=0;do{if(sa=!1,Ra=0,25<=s)throw Error(z(301));s+=1,Be=Fe=null,e.updateQueue=null,pu.current=n5,t=n(r,i)}while(sa)}if(pu.current=nc,e=Fe!==null&&Fe.next!==null,ji=0,Be=Fe=Se=null,tc=!1,e)throw Error(z(300));return t}function Pm(){var t=Ra!==0;return Ra=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Se.memoizedState=Be=t:Be=Be.next=t,Be}function tn(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=Be===null?Se.memoizedState:Be.next;if(e!==null)Be=e,Fe=t;else{if(t===null)throw Error(z(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Be===null?Se.memoizedState=Be=t:Be=Be.next=t}return Be}function ka(t,e){return typeof e=="function"?e(t):e}function Dh(t){var e=tn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((ji&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Se.lanes|=d,Vi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Tn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lh(t){var e=tn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gw(){}function Kw(t,e){var n=Se,r=tn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,bm(Xw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Yw.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(z(349));ji&30||Qw(n,e,i)}return i}function Qw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yw(t,e,n,r){e.value=n,e.getSnapshot=r,Jw(e)&&Zw(t)}function Xw(t,e,n){return n(function(){Jw(e)&&Zw(t)})}function Jw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function Zw(t){var e=ar(t,1);e!==null&&gn(e,t,1,-1)}function K0(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=Z4.bind(null,Se,t),[e.memoizedState,t]}function Pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eE(){return tn().memoizedState}function mu(t,e,n,r){var i=An();Se.flags|=t,i.memoizedState=Pa(1|e,n,void 0,r===void 0?null:r)}function Xc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Rm(r,o.deps)){i.memoizedState=Pa(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Pa(1|e,n,s,r)}function Q0(t,e){return mu(8390656,8,t,e)}function bm(t,e){return Xc(2048,8,t,e)}function tE(t,e){return Xc(4,2,t,e)}function nE(t,e){return Xc(4,4,t,e)}function rE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iE(t,e,n){return n=n!=null?n.concat([t]):null,Xc(4,4,rE.bind(null,e,t),n)}function Nm(){}function sE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oE(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aE(t,e,n){return ji&21?(Tn(n,e)||(n=hw(),Se.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function X4(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Oh.transition;Oh.transition={};try{t(!1),e()}finally{ce=n,Oh.transition=r}}function lE(){return tn().memoizedState}function J4(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uE(t))cE(e,n);else if(n=Ww(t,e,n,r),n!==null){var i=Et();gn(n,t,r,i),dE(n,e,r)}}function Z4(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uE(t))cE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var u=e.interleaved;u===null?(i.next=i,Im(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Ww(t,e,i,r),n!==null&&(i=Et(),gn(n,t,r,i),dE(n,e,r))}}function uE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function cE(t,e){sa=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}var nc={readContext:en,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},e5={readContext:en,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Q0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,rE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=An();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=An();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=J4.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:K0,useDebugValue:Nm,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=K0(!1),e=t[0];return t=X4.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=An();if(Ee){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),qe===null)throw Error(z(349));ji&30||Qw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Q0(Xw.bind(null,r,s,t),[t]),r.flags|=2048,Pa(9,Yw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=An(),e=qe.identifierPrefix;if(Ee){var n=Xn,r=Yn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Y4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t5={readContext:en,useCallback:sE,useContext:en,useEffect:bm,useImperativeHandle:iE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:Dh,useRef:eE,useState:function(){return Dh(ka)},useDebugValue:Nm,useDeferredValue:function(t){var e=tn();return aE(e,Fe.memoizedState,t)},useTransition:function(){var t=Dh(ka)[0],e=tn().memoizedState;return[t,e]},useMutableSource:Gw,useSyncExternalStore:Kw,useId:lE,unstable_isNewReconciler:!1},n5={readContext:en,useCallback:sE,useContext:en,useEffect:bm,useImperativeHandle:iE,useInsertionEffect:tE,useLayoutEffect:nE,useMemo:oE,useReducer:Lh,useRef:eE,useState:function(){return Lh(ka)},useDebugValue:Nm,useDeferredValue:function(t){var e=tn();return Fe===null?e.memoizedState=t:aE(e,Fe.memoizedState,t)},useTransition:function(){var t=Lh(ka)[0],e=tn().memoizedState;return[t,e]},useMutableSource:Gw,useSyncExternalStore:Kw,useId:lE,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Br(t),s=tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(gn(e,t,i,r),fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Br(t),s=tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,i),e!==null&&(gn(e,t,i,r),fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Br(t),i=tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ur(t,i,r),e!==null&&(gn(e,t,r,n),fu(e,t,r))}};function Y0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,r)||!Ta(i,s):!0}function hE(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=bt(e)?Li:ft.current,r=e.contextTypes,s=(r=r!=null)?zs(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function X0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=bt(e)?Li:ft.current,i.context=zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jc.enqueueReplaceState(i,i.state,null),Zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",r=e;do n+=Px(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Mh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r5=typeof WeakMap=="function"?WeakMap:Map;function fE(t,e,n){n=tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,np=r),Hf(t,e)},n}function pE(t,e,n){n=tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hf(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function J0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new r5;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=y5.bind(null,t,e,n),e.then(t,t))}function Z0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ey(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tr(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var i5=mr.ReactCurrentOwner,Rt=!1;function _t(t,e,n,r){e.child=t===null?Bw(e,null,n,r):$s(e,t.child,n,r)}function ty(t,e,n,r,i){n=n.render;var s=e.ref;return bs(e,i),r=km(t,e,n,r,s,i),n=Pm(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Ee&&n&&ym(e),e.flags|=1,_t(t,e,r,i),e.child)}function ny(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mE(t,e,s,r,i)):(t=_u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ta(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,lr(t,e,i)}return Gf(t,e,n,r,i)}function gE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(xs,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(xs,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(xs,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(xs,jt),jt|=r;return _t(t,e,i,n),e.child}function yE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=bt(n)?Li:ft.current;return s=zs(e,s),bs(e,i),n=km(t,e,n,r,s,i),r=Pm(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Ee&&r&&ym(e),e.flags|=1,_t(t,e,n,i),e.child)}function ry(t,e,n,r,i){if(bt(n)){var s=!0;Ku(e)}else s=!1;if(bs(e,i),e.stateNode===null)gu(t,e),hE(e,n,r),qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=bt(n)?Li:ft.current,c=zs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&X0(e,o,r,c),xr=!1;var g=e.memoizedState;o.state=g,Zu(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Pt.current||xr?(typeof d=="function"&&(Wf(e,n,d,r),u=e.memoizedState),(a=xr||Y0(e,n,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:an(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=bt(n)?Li:ft.current,u=zs(e,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&X0(e,o,r,u),xr=!1,g=e.memoizedState,o.state=g,Zu(e,r,o,i);var S=e.memoizedState;a!==f||g!==S||Pt.current||xr?(typeof y=="function"&&(Wf(e,n,y,r),S=e.memoizedState),(c=xr||Y0(e,n,c,r,g,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Kf(t,e,n,r,s,i)}function Kf(t,e,n,r,i,s){yE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$0(e,n,!1),lr(t,e,s);r=e.stateNode,i5.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&$0(e,n,!0),e.child}function vE(t){var e=t.stateNode;e.pendingContext?U0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&U0(t,e.context,!1),xm(t,e.containerInfo)}function iy(t,e,n,r,i){return Us(),_m(i),e.flags|=256,_t(t,e,n,r),e.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _E(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return $f(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=td(o,r,0,null),t=Pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Qf,t):Om(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return s5(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=Pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qf,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=td({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ql(t,e,n,r){return r!==null&&_m(r),$s(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s5(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Mh(Error(z(422))),ql(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=td({mode:"visible",children:r.children},i,0,null),s=Pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Qf,s);if(!(e.mode&1))return ql(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Mh(s,r,void 0),ql(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),gn(r,t,i,-1))}return Fm(),r=Mh(Error(z(421))),ql(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v5.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=zr(i.nextSibling),Ut=e,Ee=!0,un=null,t!==null&&(Qt[Yt++]=Yn,Qt[Yt++]=Xn,Qt[Yt++]=Mi,Yn=t.id,Xn=t.overflow,Mi=e),e=Om(e,r.children),e.flags|=4096,e)}function sy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bf(t.return,e,n)}function jh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sy(t,n,e);else if(t.tag===19)sy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jh(e,!0,n,null,s);break;case"together":jh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o5(t,e,n){switch(e.tag){case 3:vE(e),Us();break;case 5:Hw(e);break;case 1:bt(e.type)&&Ku(e);break;case 4:xm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?_E(t,e,n):(pe(Te,Te.current&1),t=lr(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,gE(t,e,n)}return lr(t,e,n)}var EE,Xf,TE,IE;EE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};TE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi(bn.current);var s=null;switch(n){case"input":i=_f(t,i),r=_f(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Tf(t,i),r=Tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hu)}Sf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};IE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function a5(t,e,n){var r=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return bt(e.type)&&Gu(),ot(e),null;case 3:return r=e.stateNode,Bs(),ve(Pt),ve(ft),Am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(sp(un),un=null))),Xf(t,e),ot(e),null;case 5:Cm(e);var i=xi(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)TE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ot(e),null}if(t=xi(bn.current),Bl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[xa]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)ge(qo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":p0(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":g0(r,s),ge("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$l(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$l(r.textContent,a,t),i=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Dl(r),m0(r,s,!0);break;case"textarea":Dl(r),y0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[xa]=r,EE(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)ge(qo[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":p0(t,r),i=_f(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),ge("invalid",t);break;case"textarea":g0(t,r),i=Tf(t,r),ge("invalid",t);break;default:i=r}Sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ew(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&J_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ga(t,u):typeof u=="number"&&ga(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&rm(t,s,u,o))}switch(n){case"input":Dl(t),m0(t,r,!1);break;case"textarea":Dl(t),y0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?As(t,!!r.multiple,s,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)IE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=xi(Aa.current),xi(bn.current),Bl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:$l(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$l(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return ot(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Vt!==null&&e.mode&1&&!(e.flags&128))Uw(),Us(),e.flags|=98560,s=!1;else if(s=Bl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[kn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else un!==null&&(sp(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?ze===0&&(ze=3):Fm())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Bs(),Xf(t,e),t===null&&Ia(e.stateNode.containerInfo),ot(e),null;case 10:return Tm(e.type._context),ot(e),null;case 17:return bt(e.type)&&Gu(),ot(e),null;case 19:if(ve(Te),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vo(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>qs&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(e),null}else 2*Oe()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function l5(t,e){switch(vm(e),e.tag){case 1:return bt(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ve(Pt),ve(ft),Am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cm(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return Bs(),null;case 10:return Tm(e.type._context),null;case 22:case 23:return Vm(),null;case 24:return null;default:return null}}var Hl=!1,ct=!1,u5=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){Re(t,e,r)}}var oy=!1;function c5(t,e){if(Lf=Bu,t=Rw(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++d===r&&(u=o),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},Bu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,A=S.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?C:an(e.type,C),A);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){Re(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=oy,oy=!1,S}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function Zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function SE(t){var e=t.alternate;e!==null&&(t.alternate=null,SE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[xa],delete e[Ff],delete e[H4],delete e[G4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xE(t){return t.tag===5||t.tag===3||t.tag===4}function ay(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hu));else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}var Qe=null,ln=!1;function wr(t,e,n){for(n=n.child;n!==null;)CE(t,e,n),n=n.sibling}function CE(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:ct||Ss(n,e);case 6:var r=Qe,i=ln;Qe=null,wr(t,e,n),Qe=r,ln=i,Qe!==null&&(ln?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(ln?(t=Qe,n=n.stateNode,t.nodeType===8?Ph(t.parentNode,n):t.nodeType===1&&Ph(t,n),wa(t)):Ph(Qe,n.stateNode));break;case 4:r=Qe,i=ln,Qe=n.stateNode.containerInfo,ln=!0,wr(t,e,n),Qe=r,ln=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),i=i.next}while(i!==r)}wr(t,e,n);break;case 1:if(!ct&&(Ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,wr(t,e,n),ct=r):wr(t,e,n);break;default:wr(t,e,n)}}function ly(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u5),e.forEach(function(r){var i=_5.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,ln=!1;break e;case 3:Qe=a.stateNode.containerInfo,ln=!0;break e;case 4:Qe=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(Qe===null)throw Error(z(160));CE(s,o,i),Qe=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)AE(e,t),e=e.sibling}function AE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),Sn(t),r&4){try{oa(3,t,t.return),Zc(3,t)}catch(C){Re(t,t.return,C)}try{oa(5,t,t.return)}catch(C){Re(t,t.return,C)}}break;case 1:on(e,t),Sn(t),r&512&&n!==null&&Ss(n,n.return);break;case 5:if(on(e,t),Sn(t),r&512&&n!==null&&Ss(n,n.return),t.flags&32){var i=t.stateNode;try{ga(i,"")}catch(C){Re(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Q_(i,s),xf(a,o);var c=xf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?ew(i,f):d==="dangerouslySetInnerHTML"?J_(i,f):d==="children"?ga(i,f):rm(i,d,f,c)}switch(a){case"input":wf(i,s);break;case"textarea":Y_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?As(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?As(i,!!s.multiple,s.defaultValue,!0):As(i,!!s.multiple,s.multiple?[]:"",!1))}i[xa]=s}catch(C){Re(t,t.return,C)}}break;case 6:if(on(e,t),Sn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Re(t,t.return,C)}}break;case 3:if(on(e,t),Sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(C){Re(t,t.return,C)}break;case 4:on(e,t),Sn(t);break;case 13:on(e,t),Sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=Oe())),r&4&&ly(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(c=ct)||d,on(e,t),ct=c):on(e,t),Sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(f=W=d;W!==null;){switch(g=W,y=g.child,g.tag){case 0:case 11:case 14:case 15:oa(4,g,g.return);break;case 1:Ss(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(C){Re(r,n,C)}}break;case 5:Ss(g,g.return);break;case 22:if(g.memoizedState!==null){cy(f);continue}}y!==null?(y.return=g,W=y):cy(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Z_("display",o))}catch(C){Re(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){Re(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:on(e,t),Sn(t),r&4&&ly(t);break;case 21:break;default:on(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xE(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ga(i,""),r.flags&=-33);var s=ay(t);tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ay(t);ep(t,a,o);break;default:throw Error(z(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function d5(t,e,n){W=t,RE(t)}function RE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||ct;a=Hl;var c=ct;if(Hl=o,(ct=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?dy(i):u!==null?(u.return=o,W=u):dy(i);for(;s!==null;)W=s,RE(s),s=s.sibling;W=i,Hl=a,ct=c}uy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):uy(t)}}function uy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||Zc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&G0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}G0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ct||e.flags&512&&Zf(e)}catch(g){Re(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function cy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function dy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zc(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Zf(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Zf(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var h5=Math.ceil,rc=mr.ReactCurrentDispatcher,Dm=mr.ReactCurrentOwner,Zt=mr.ReactCurrentBatchConfig,se=0,qe=null,Me=null,Je=0,jt=0,xs=si(0),ze=0,ba=null,Vi=0,ed=0,Lm=0,aa=null,At=null,Mm=0,qs=1/0,Gn=null,ic=!1,np=null,$r=null,Gl=!1,Dr=null,sc=0,la=0,rp=null,yu=-1,vu=0;function Et(){return se&6?Oe():yu!==-1?yu:yu=Oe()}function Br(t){return t.mode&1?se&2&&Je!==0?Je&-Je:Q4.transition!==null?(vu===0&&(vu=hw()),vu):(t=ce,t!==0||(t=window.event,t=t===void 0?16:_w(t.type)),t):1}function gn(t,e,n,r){if(50<la)throw la=0,rp=null,Error(z(185));Qa(t,n,r),(!(se&2)||t!==qe)&&(t===qe&&(!(se&2)&&(ed|=n),ze===4&&Rr(t,Je)),Nt(t,r),n===1&&se===0&&!(e.mode&1)&&(qs=Oe()+500,Yc&&oi()))}function Nt(t,e){var n=t.callbackNode;Qx(t,e);var r=$u(t,t===qe?Je:0);if(r===0)n!==null&&w0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&w0(n),e===1)t.tag===0?K4(hy.bind(null,t)):Vw(hy.bind(null,t)),W4(function(){!(se&6)&&oi()}),n=null;else{switch(fw(r)){case 1:n=lm;break;case 4:n=cw;break;case 16:n=Uu;break;case 536870912:n=dw;break;default:n=Uu}n=ME(n,kE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kE(t,e){if(yu=-1,vu=0,se&6)throw Error(z(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var r=$u(t,t===qe?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=se;se|=2;var s=bE();(qe!==t||Je!==e)&&(Gn=null,qs=Oe()+500,ki(t,e));do try{m5();break}catch(a){PE(t,a)}while(!0);Em(),rc.current=s,se=i,Me!==null?e=0:(qe=null,Je=0,e=ze)}if(e!==0){if(e===2&&(i=Pf(t),i!==0&&(r=i,e=ip(t,i))),e===1)throw n=ba,ki(t,0),Rr(t,r),Nt(t,Oe()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!f5(i)&&(e=oc(t,r),e===2&&(s=Pf(t),s!==0&&(r=s,e=ip(t,s))),e===1))throw n=ba,ki(t,0),Rr(t,r),Nt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:wi(t,At,Gn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=Mm+500-Oe(),10<e)){if($u(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vf(wi.bind(null,t,At,Gn),e);break}wi(t,At,Gn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h5(r/1960))-r,10<r){t.timeoutHandle=Vf(wi.bind(null,t,At,Gn),r);break}wi(t,At,Gn);break;case 5:wi(t,At,Gn);break;default:throw Error(z(329))}}}return Nt(t,Oe()),t.callbackNode===n?kE.bind(null,t):null}function ip(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=oc(t,e),t!==2&&(e=At,At=n,e!==null&&sp(e)),t}function sp(t){At===null?At=t:At.push.apply(At,t)}function f5(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Lm,e&=~ed,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function hy(t){if(se&6)throw Error(z(327));Ns();var e=$u(t,0);if(!(e&1))return Nt(t,Oe()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=Pf(t);r!==0&&(e=r,n=ip(t,r))}if(n===1)throw n=ba,ki(t,0),Rr(t,e),Nt(t,Oe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wi(t,At,Gn),Nt(t,Oe()),null}function jm(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(qs=Oe()+500,Yc&&oi())}}function Fi(t){Dr!==null&&Dr.tag===0&&!(se&6)&&Ns();var e=se;se|=1;var n=Zt.transition,r=ce;try{if(Zt.transition=null,ce=1,t)return t()}finally{ce=r,Zt.transition=n,se=e,!(se&6)&&oi()}}function Vm(){jt=xs.current,ve(xs)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,B4(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:Bs(),ve(Pt),ve(ft),Am();break;case 5:Cm(r);break;case 4:Bs();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:Tm(r.type._context);break;case 22:case 23:Vm()}n=n.return}if(qe=t,Me=t=Wr(t.current,null),Je=jt=e,ze=0,ba=null,Lm=ed=Vi=0,At=aa=null,Si!==null){for(e=0;e<Si.length;e++)if(n=Si[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Si=null}return t}function PE(t,e){do{var n=Me;try{if(Em(),pu.current=nc,tc){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(ji=0,Be=Fe=Se=null,sa=!1,Ra=0,Dm.current=null,n===null||n.return===null){ze=1,ba=e,Me=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Z0(o);if(y!==null){y.flags&=-257,ey(y,o,a,s,e),y.mode&1&&J0(s,c,e),e=y,u=c;var S=e.updateQueue;if(S===null){var C=new Set;C.add(u),e.updateQueue=C}else S.add(u);break e}else{if(!(e&1)){J0(s,c,e),Fm();break e}u=Error(z(426))}}else if(Ee&&a.mode&1){var A=Z0(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),ey(A,o,a,s,e),_m(Ws(u,a));break e}}s=u=Ws(u,a),ze!==4&&(ze=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=fE(s,u,e);H0(s,w);break e;case 1:a=u;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&($r===null||!$r.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=pE(s,a,e);H0(s,k);break e}}s=s.return}while(s!==null)}OE(n)}catch(D){e=D,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function bE(){var t=rc.current;return rc.current=nc,t===null?nc:t}function Fm(){(ze===0||ze===3||ze===2)&&(ze=4),qe===null||!(Vi&268435455)&&!(ed&268435455)||Rr(qe,Je)}function oc(t,e){var n=se;se|=2;var r=bE();(qe!==t||Je!==e)&&(Gn=null,ki(t,e));do try{p5();break}catch(i){PE(t,i)}while(!0);if(Em(),se=n,rc.current=r,Me!==null)throw Error(z(261));return qe=null,Je=0,ze}function p5(){for(;Me!==null;)NE(Me)}function m5(){for(;Me!==null&&!zx();)NE(Me)}function NE(t){var e=LE(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?OE(t):Me=e,Dm.current=null}function OE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l5(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Me=null;return}}else if(n=a5(n,e,jt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);ze===0&&(ze=5)}function wi(t,e,n){var r=ce,i=Zt.transition;try{Zt.transition=null,ce=1,g5(t,e,n,r)}finally{Zt.transition=i,ce=r}return null}function g5(t,e,n,r){do Ns();while(Dr!==null);if(se&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yx(t,s),t===qe&&(Me=qe=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gl||(Gl=!0,ME(Uu,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=ce;ce=1;var a=se;se|=4,Dm.current=null,c5(t,n),AE(n,t),M4(Mf),Bu=!!Lf,Mf=Lf=null,t.current=n,d5(n),Ux(),se=a,ce=o,Zt.transition=s}else t.current=n;if(Gl&&(Gl=!1,Dr=t,sc=i),s=t.pendingLanes,s===0&&($r=null),Wx(n.stateNode),Nt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=np,np=null,t;return sc&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===rp?la++:(la=0,rp=t):la=0,oi(),null}function Ns(){if(Dr!==null){var t=fw(sc),e=Zt.transition,n=ce;try{if(Zt.transition=null,ce=16>t?16:t,Dr===null)var r=!1;else{if(t=Dr,Dr=null,sc=0,se&6)throw Error(z(331));var i=se;for(se|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:oa(8,d,s)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var g=d.sibling,y=d.return;if(SE(d),d===c){W=null;break}if(g!==null){g.return=y,W=g;break}W=y}}}var S=s.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var A=C.sibling;C.sibling=null,C=A}while(C!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,W=E;else e:for(o=v;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zc(9,a)}}catch(D){Re(a,a.return,D)}if(a===o){W=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,W=k;break e}W=a.return}}if(se=i,oi(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(qc,t)}catch{}r=!0}return r}finally{ce=n,Zt.transition=e}}return!1}function fy(t,e,n){e=Ws(n,e),e=fE(t,e,1),t=Ur(t,e,1),e=Et(),t!==null&&(Qa(t,1,e),Nt(t,e))}function Re(t,e,n){if(t.tag===3)fy(t,t,n);else for(;e!==null;){if(e.tag===3){fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Ws(n,t),t=pE(e,t,1),e=Ur(e,t,1),t=Et(),e!==null&&(Qa(e,1,t),Nt(e,t));break}}e=e.return}}function y5(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>Oe()-Mm?ki(t,0):Lm|=n),Nt(t,e)}function DE(t,e){e===0&&(t.mode&1?(e=jl,jl<<=1,!(jl&130023424)&&(jl=4194304)):e=1);var n=Et();t=ar(t,e),t!==null&&(Qa(t,e,n),Nt(t,n))}function v5(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DE(t,n)}function _5(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),DE(t,n)}var LE;LE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,o5(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ee&&e.flags&1048576&&Fw(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=zs(e,ft.current);bs(e,n),i=km(null,e,r,t,i,n);var s=Pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sm(e),i.updater=Jc,e.stateNode=i,i._reactInternals=e,qf(e,r,t,n),e=Kf(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&ym(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=E5(r),t=an(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=ry(null,e,r,t,n);break e;case 11:e=ty(null,e,r,t,n);break e;case 14:e=ny(null,e,r,an(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),ry(t,e,r,i,n);case 3:e:{if(vE(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qw(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ws(Error(z(423)),e),e=iy(t,e,r,n,i);break e}else if(r!==i){i=Ws(Error(z(424)),e),e=iy(t,e,r,n,i);break e}else for(Vt=zr(e.stateNode.containerInfo.firstChild),Ut=e,Ee=!0,un=null,n=Bw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=lr(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return Hw(e),t===null&&$f(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jf(r,i)?o=null:s!==null&&jf(r,s)&&(e.flags|=32),yE(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&$f(e),null;case 13:return _E(t,e,n);case 4:return xm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),ty(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Xu,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Pt.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bs(e,n),i=en(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),ny(t,e,r,i,n);case 15:return mE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),gu(t,e),e.tag=1,bt(r)?(t=!0,Ku(e)):t=!1,bs(e,n),hE(e,r,i),qf(e,r,i,n),Kf(null,e,r,!0,t,n);case 19:return wE(t,e,n);case 22:return gE(t,e,n)}throw Error(z(156,e.tag))};function ME(t,e){return uw(t,e)}function w5(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new w5(t,e,n,r)}function zm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E5(t){if(typeof t=="function")return zm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Pi(n.children,i,s,e);case im:o=8,i|=8;break;case mf:return t=Jt(12,n,e,i|2),t.elementType=mf,t.lanes=s,t;case gf:return t=Jt(13,n,e,i),t.elementType=gf,t.lanes=s,t;case yf:return t=Jt(19,n,e,i),t.elementType=yf,t.lanes=s,t;case H_:return td(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W_:o=10;break e;case q_:o=9;break e;case sm:o=11;break e;case om:o=14;break e;case Sr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function td(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=H_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vh(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Fh(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function T5(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_h(0),this.expirationTimes=_h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_h(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Um(t,e,n,r,i,s,o,a,u){return t=new T5(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sm(s),t}function I5(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jE(t){if(!t)return Jr;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(bt(n))return jw(t,n,e)}return e}function VE(t,e,n,r,i,s,o,a,u){return t=Um(n,r,!0,t,i,s,o,a,u),t.context=jE(null),n=t.current,r=Et(),i=Br(n),s=tr(r,i),s.callback=e??null,Ur(n,s,i),t.current.lanes=i,Qa(t,i,r),Nt(t,r),t}function nd(t,e,n,r){var i=e.current,s=Et(),o=Br(i);return n=jE(n),e.context===null?e.context=n:e.pendingContext=n,e=tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ur(i,e,o),t!==null&&(gn(t,i,o,s),fu(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $m(t,e){py(t,e),(t=t.alternate)&&py(t,e)}function S5(){return null}var FE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}rd.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));nd(t,e,null,null)};rd.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fi(function(){nd(null,t,null,null)}),e[or]=null}};function rd(t){this._internalRoot=t}rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=gw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&vw(t)}};function Wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function my(){}function x5(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ac(o);s.call(c)}}var o=VE(e,r,t,0,null,!1,!1,"",my);return t._reactRootContainer=o,t[or]=o.current,Ia(t.nodeType===8?t.parentNode:t),Fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ac(u);a.call(c)}}var u=Um(t,0,!1,null,null,!1,!1,"",my);return t._reactRootContainer=u,t[or]=u.current,Ia(t.nodeType===8?t.parentNode:t),Fi(function(){nd(e,u,n,r)}),u}function sd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ac(o);a.call(u)}}nd(e,o,t,i)}else o=x5(n,e,t,i,r);return ac(o)}pw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wo(e.pendingLanes);n!==0&&(um(e,n|1),Nt(e,Oe()),!(se&6)&&(qs=Oe()+500,oi()))}break;case 13:Fi(function(){var r=ar(t,1);if(r!==null){var i=Et();gn(r,t,1,i)}}),$m(t,1)}};cm=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Et();gn(e,t,134217728,n)}$m(t,134217728)}};mw=function(t){if(t.tag===13){var e=Br(t),n=ar(t,e);if(n!==null){var r=Et();gn(n,t,e,r)}$m(t,e)}};gw=function(){return ce};yw=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Af=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qc(r);if(!i)throw Error(z(90));K_(r),wf(r,i)}}}break;case"textarea":Y_(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};rw=jm;iw=Fi;var C5={usingClientEntryPoint:!1,Events:[Xa,_s,Qc,tw,nw,jm]},Fo={findFiberByHostInstance:Ii,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A5={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aw(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||S5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{qc=Kl.inject(A5),Pn=Kl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C5;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wm(e))throw Error(z(200));return I5(t,e,null,n)};Ht.createRoot=function(t,e){if(!Wm(t))throw Error(z(299));var n=!1,r="",i=FE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Um(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Bm(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=aw(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Fi(t)};Ht.hydrate=function(t,e,n){if(!id(e))throw Error(z(200));return sd(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Wm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=FE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VE(e,null,t,1,n??null,i,!1,s,o),t[or]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rd(e)};Ht.render=function(t,e,n){if(!id(e))throw Error(z(200));return sd(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!id(t))throw Error(z(40));return t._reactRootContainer?(Fi(function(){sd(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Ht.unstable_batchedUpdates=jm;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!id(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return sd(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function zE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zE)}catch(t){console.error(t)}}zE(),z_.exports=Ht;var R5=z_.exports,gy=R5;ff.createRoot=gy.createRoot,ff.hydrateRoot=gy.hydrateRoot;const qm="/freshbiteapp_Reactjs/assets/logo-ClmogISy.png";var kt=function(){return kt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},kt.apply(this,arguments)};function lc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ye="-ms-",ua="-moz-",le="-webkit-",UE="comm",od="rule",Hm="decl",k5="@import",$E="@keyframes",P5="@layer",BE=Math.abs,Gm=String.fromCharCode,op=Object.assign;function b5(t,e){return We(t,0)^45?(((e<<2^We(t,0))<<2^We(t,1))<<2^We(t,2))<<2^We(t,3):0}function WE(t){return t.trim()}function Kn(t,e){return(t=e.exec(t))?t[0]:t}function Z(t,e,n){return t.replace(e,n)}function wu(t,e,n){return t.indexOf(e,n)}function We(t,e){return t.charCodeAt(e)|0}function Hs(t,e,n){return t.slice(e,n)}function Rn(t){return t.length}function qE(t){return t.length}function Ho(t,e){return e.push(t),t}function N5(t,e){return t.map(e).join("")}function yy(t,e){return t.filter(function(n){return!Kn(n,e)})}var ad=1,Gs=1,HE=0,nn=0,Le=0,co="";function ld(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:ad,column:Gs,length:o,return:"",siblings:a}}function Ir(t,e){return op(ld("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ls(t){for(;t.root;)t=Ir(t.root,{children:[t]});Ho(t,t.siblings)}function O5(){return Le}function D5(){return Le=nn>0?We(co,--nn):0,Gs--,Le===10&&(Gs=1,ad--),Le}function yn(){return Le=nn<HE?We(co,nn++):0,Gs++,Le===10&&(Gs=1,ad++),Le}function bi(){return We(co,nn)}function Eu(){return nn}function ud(t,e){return Hs(co,t,e)}function ap(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L5(t){return ad=Gs=1,HE=Rn(co=t),nn=0,[]}function M5(t){return co="",t}function zh(t){return WE(ud(nn-1,lp(t===91?t+2:t===40?t+1:t)))}function j5(t){for(;(Le=bi())&&Le<33;)yn();return ap(t)>2||ap(Le)>3?"":" "}function V5(t,e){for(;--e&&yn()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return ud(t,Eu()+(e<6&&bi()==32&&yn()==32))}function lp(t){for(;yn();)switch(Le){case t:return nn;case 34:case 39:t!==34&&t!==39&&lp(Le);break;case 40:t===41&&lp(t);break;case 92:yn();break}return nn}function F5(t,e){for(;yn()&&t+Le!==57;)if(t+Le===84&&bi()===47)break;return"/*"+ud(e,nn-1)+"*"+Gm(t===47?t:yn())}function z5(t){for(;!ap(bi());)yn();return ud(t,nn)}function U5(t){return M5(Tu("",null,null,null,[""],t=L5(t),0,[0],t))}function Tu(t,e,n,r,i,s,o,a,u){for(var c=0,d=0,f=o,g=0,y=0,S=0,C=1,A=1,w=1,v=0,E="",k=i,D=s,L=r,I=E;A;)switch(S=v,v=yn()){case 40:if(S!=108&&We(I,f-1)==58){wu(I+=Z(zh(v),"&","&\f"),"&\f",BE(c?a[c-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:I+=zh(v);break;case 9:case 10:case 13:case 32:I+=j5(S);break;case 92:I+=V5(Eu()-1,7);continue;case 47:switch(bi()){case 42:case 47:Ho($5(F5(yn(),Eu()),e,n,u),u);break;default:I+="/"}break;case 123*C:a[c++]=Rn(I)*w;case 125*C:case 59:case 0:switch(v){case 0:case 125:A=0;case 59+d:w==-1&&(I=Z(I,/\f/g,"")),y>0&&Rn(I)-f&&Ho(y>32?_y(I+";",r,n,f-1,u):_y(Z(I," ","")+";",r,n,f-2,u),u);break;case 59:I+=";";default:if(Ho(L=vy(I,e,n,c,d,i,a,E,k=[],D=[],f,s),s),v===123)if(d===0)Tu(I,e,L,L,k,s,f,a,D);else switch(g===99&&We(I,3)===110?100:g){case 100:case 108:case 109:case 115:Tu(t,L,L,r&&Ho(vy(t,L,L,0,0,i,a,E,i,k=[],f,D),D),i,D,f,a,r?k:D);break;default:Tu(I,L,L,L,[""],D,0,a,D)}}c=d=y=0,C=w=1,E=I="",f=o;break;case 58:f=1+Rn(I),y=S;default:if(C<1){if(v==123)--C;else if(v==125&&C++==0&&D5()==125)continue}switch(I+=Gm(v),v*C){case 38:w=d>0?1:(I+="\f",-1);break;case 44:a[c++]=(Rn(I)-1)*w,w=1;break;case 64:bi()===45&&(I+=zh(yn())),g=bi(),d=f=Rn(E=I+=z5(Eu())),v++;break;case 45:S===45&&Rn(I)==2&&(C=0)}}return s}function vy(t,e,n,r,i,s,o,a,u,c,d,f){for(var g=i-1,y=i===0?s:[""],S=qE(y),C=0,A=0,w=0;C<r;++C)for(var v=0,E=Hs(t,g+1,g=BE(A=o[C])),k=t;v<S;++v)(k=WE(A>0?y[v]+" "+E:Z(E,/&\f/g,y[v])))&&(u[w++]=k);return ld(t,e,n,i===0?od:a,u,c,d,f)}function $5(t,e,n,r){return ld(t,e,n,UE,Gm(O5()),Hs(t,2,-2),0,r)}function _y(t,e,n,r,i){return ld(t,e,n,Hm,Hs(t,0,r),Hs(t,r+1,-1),r,i)}function GE(t,e,n){switch(b5(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 4789:return ua+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+ua+t+ye+t+t;case 5936:switch(We(t,e+11)){case 114:return le+t+ye+Z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+ye+Z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+ye+Z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return le+t+ye+t+t;case 6165:return le+t+ye+"flex-"+t+t;case 5187:return le+t+Z(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+ye+"flex-$1$2")+t;case 5443:return le+t+ye+"flex-item-"+Z(t,/flex-|-self/g,"")+(Kn(t,/flex-|baseline/)?"":ye+"grid-row-"+Z(t,/flex-|-self/g,""))+t;case 4675:return le+t+ye+"flex-line-pack"+Z(t,/align-content|flex-|-self/g,"")+t;case 5548:return le+t+ye+Z(t,"shrink","negative")+t;case 5292:return le+t+ye+Z(t,"basis","preferred-size")+t;case 6060:return le+"box-"+Z(t,"-grow","")+le+t+ye+Z(t,"grow","positive")+t;case 4554:return le+Z(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return Z(Z(Z(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return Z(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return Z(Z(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4200:if(!Kn(t,/flex-|baseline/))return ye+"grid-column-align"+Hs(t,e)+t;break;case 2592:case 3360:return ye+Z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Kn(r.props,/grid-\w+-end/)})?~wu(t+(n=n[e].value),"span",0)?t:ye+Z(t,"-start","")+t+ye+"grid-row-span:"+(~wu(n,"span",0)?Kn(n,/\d+/):+Kn(n,/\d+/)-+Kn(t,/\d+/))+";":ye+Z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Kn(r.props,/grid-\w+-start/)})?t:ye+Z(Z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Z(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rn(t)-1-e>6)switch(We(t,e+1)){case 109:if(We(t,e+4)!==45)break;case 102:return Z(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+ua+(We(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~wu(t,"stretch",0)?GE(Z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return ye+i+":"+s+c+(o?ye+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(We(t,e+6)===121)return Z(t,":",":"+le)+t;break;case 6444:switch(We(t,We(t,14)===45?18:11)){case 120:return Z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(We(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+ye+"$2box$3")+t;case 100:return Z(t,":",":"+ye)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(t,"scroll-","scroll-snap-")+t}return t}function uc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function B5(t,e,n,r){switch(t.type){case P5:if(t.children.length)break;case k5:case Hm:return t.return=t.return||t.value;case UE:return"";case $E:return t.return=t.value+"{"+uc(t.children,r)+"}";case od:if(!Rn(t.value=t.props.join(",")))return""}return Rn(n=uc(t.children,r))?t.return=t.value+"{"+n+"}":""}function W5(t){var e=qE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function q5(t){return function(e){e.root||(e=e.return)&&t(e)}}function H5(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Hm:t.return=GE(t.value,t.length,n);return;case $E:return uc([Ir(t,{value:Z(t.value,"@","@"+le)})],r);case od:if(t.length)return N5(n=t.props,function(i){switch(Kn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ls(Ir(t,{props:[Z(i,/:(read-\w+)/,":"+ua+"$1")]})),ls(Ir(t,{props:[i]})),op(t,{props:yy(n,r)});break;case"::placeholder":ls(Ir(t,{props:[Z(i,/:(plac\w+)/,":"+le+"input-$1")]})),ls(Ir(t,{props:[Z(i,/:(plac\w+)/,":"+ua+"$1")]})),ls(Ir(t,{props:[Z(i,/:(plac\w+)/,ye+"input-$1")]})),ls(Ir(t,{props:[i]})),op(t,{props:yy(n,r)});break}return""})}}var G5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mt={},Ks=typeof process<"u"&&Mt!==void 0&&(Mt.REACT_APP_SC_ATTR||Mt.SC_ATTR)||"data-styled",KE="active",QE="data-styled-version",cd="6.1.13",Km=`/*!sc*/
`,cc=typeof window<"u"&&"HTMLElement"in window,K5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mt.REACT_APP_SC_DISABLE_SPEEDY!==""?Mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mt!==void 0&&Mt.SC_DISABLE_SPEEDY!==void 0&&Mt.SC_DISABLE_SPEEDY!==""&&Mt.SC_DISABLE_SPEEDY!=="false"&&Mt.SC_DISABLE_SPEEDY),dd=Object.freeze([]),Qs=Object.freeze({});function Q5(t,e,n){return n===void 0&&(n=Qs),t.theme!==n.theme&&t.theme||e||n.theme}var YE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Y5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X5=/(^-|-$)/g;function wy(t){return t.replace(Y5,"-").replace(X5,"")}var J5=/(a)(d)/gi,Ql=52,Ey=function(t){return String.fromCharCode(t+(t>25?39:97))};function up(t){var e,n="";for(e=Math.abs(t);e>Ql;e=e/Ql|0)n=Ey(e%Ql)+n;return(Ey(e%Ql)+n).replace(J5,"$1-$2")}var Uh,XE=5381,Cs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},JE=function(t){return Cs(XE,t)};function Z5(t){return up(JE(t)>>>0)}function eC(t){return t.displayName||t.name||"Component"}function $h(t){return typeof t=="string"&&!0}var ZE=typeof Symbol=="function"&&Symbol.for,e2=ZE?Symbol.for("react.memo"):60115,tC=ZE?Symbol.for("react.forward_ref"):60112,nC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iC=((Uh={})[tC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uh[e2]=t2,Uh);function Ty(t){return("type"in(e=t)&&e.type.$$typeof)===e2?t2:"$$typeof"in t?iC[t.$$typeof]:nC;var e}var sC=Object.defineProperty,oC=Object.getOwnPropertyNames,Iy=Object.getOwnPropertySymbols,aC=Object.getOwnPropertyDescriptor,lC=Object.getPrototypeOf,Sy=Object.prototype;function n2(t,e,n){if(typeof e!="string"){if(Sy){var r=lC(e);r&&r!==Sy&&n2(t,r,n)}var i=oC(e);Iy&&(i=i.concat(Iy(e)));for(var s=Ty(t),o=Ty(e),a=0;a<i.length;++a){var u=i[a];if(!(u in rC||n&&n[u]||o&&u in o||s&&u in s)){var c=aC(e,u);try{sC(t,u,c)}catch{}}}}return t}function Ys(t){return typeof t=="function"}function Qm(t){return typeof t=="object"&&"styledComponentId"in t}function Ci(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function xy(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Na(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function cp(t,e,n){if(n===void 0&&(n=!1),!n&&!Na(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=cp(t[r],e[r]);else if(Na(e))for(var r in e)t[r]=cp(t[r],e[r]);return t}function Ym(t,e){Object.defineProperty(t,"toString",{value:e})}function Za(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var uC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Za(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Km);return n},t}(),Iu=new Map,dc=new Map,Su=1,Yl=function(t){if(Iu.has(t))return Iu.get(t);for(;dc.has(Su);)Su++;var e=Su++;return Iu.set(t,e),dc.set(e,t),e},cC=function(t,e){Su=e+1,Iu.set(t,e),dc.set(e,t)},dC="style[".concat(Ks,"][").concat(QE,'="').concat(cd,'"]'),hC=new RegExp("^".concat(Ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fC=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},pC=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Km),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(hC);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(cC(d,c),fC(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Cy=function(t){for(var e=document.querySelectorAll(dC),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ks)!==KE&&(pC(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function mC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r2=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Ks,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,KE),r.setAttribute(QE,cd);var o=mC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},gC=function(){function t(e){this.element=r2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Za(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),yC=function(){function t(e){this.element=r2(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),vC=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Ay=cc,_C={isServer:!cc,useCSSOMInjection:!K5},i2=function(){function t(e,n,r){e===void 0&&(e=Qs),n===void 0&&(n={});var i=this;this.options=kt(kt({},_C),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&cc&&Ay&&(Ay=!1,Cy(this)),Ym(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(f){var g=function(w){return dc.get(w)}(f);if(g===void 0)return"continue";var y=s.names.get(g),S=o.getGroup(f);if(y===void 0||!y.size||S.length===0)return"continue";var C="".concat(Ks,".g").concat(f,'[id="').concat(g,'"]'),A="";y!==void 0&&y.forEach(function(w){w.length>0&&(A+="".concat(w,","))}),u+="".concat(S).concat(C,'{content:"').concat(A,'"}').concat(Km)},d=0;d<a;d++)c(d);return u}(i)})}return t.registerId=function(e){return Yl(e)},t.prototype.rehydrate=function(){!this.server&&cc&&Cy(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(kt(kt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vC(i):r?new gC(i):new yC(i)}(this.options),new uC(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Yl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Yl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Yl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),wC=/&/g,EC=/^\s*\/\/.*$/gm;function s2(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=s2(n.children,e)),n})}function TC(t){var e,n,r,i=Qs,s=i.options,o=s===void 0?Qs:s,a=i.plugins,u=a===void 0?dd:a,c=function(g,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):g},d=u.slice();d.push(function(g){g.type===od&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(wC,n).replace(r,c))}),o.prefix&&d.push(H5),d.push(B5);var f=function(g,y,S,C){y===void 0&&(y=""),S===void 0&&(S=""),C===void 0&&(C="&"),e=C,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var A=g.replace(EC,""),w=U5(S||y?"".concat(S," ").concat(y," { ").concat(A," }"):A);o.namespace&&(w=s2(w,o.namespace));var v=[];return uc(w,W5(d.concat(q5(function(E){return v.push(E)})))),v};return f.hash=u.length?u.reduce(function(g,y){return y.name||Za(15),Cs(g,y.name)},XE).toString():"",f}var IC=new i2,dp=TC(),o2=wt.createContext({shouldForwardProp:void 0,styleSheet:IC,stylis:dp});o2.Consumer;wt.createContext(void 0);function Ry(){return M.useContext(o2)}var SC=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=dp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Ym(this,function(){throw Za(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=dp),this.name+e.hash},t}(),xC=function(t){return t>="A"&&t<="Z"};function ky(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;xC(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var a2=function(t){return t==null||t===!1||t===""},l2=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!a2(s)&&(Array.isArray(s)&&s.isCss||Ys(s)?r.push("".concat(ky(i),":"),s,";"):Na(s)?r.push.apply(r,lc(lc(["".concat(i," {")],l2(s),!1),["}"],!1)):r.push("".concat(ky(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in G5||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ni(t,e,n,r){if(a2(t))return[];if(Qm(t))return[".".concat(t.styledComponentId)];if(Ys(t)){if(!Ys(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ni(i,e,n,r)}var s;return t instanceof SC?n?(t.inject(n,r),[t.getName(r)]):[t]:Na(t)?l2(t):Array.isArray(t)?Array.prototype.concat.apply(dd,t.map(function(o){return Ni(o,e,n,r)})):[t.toString()]}function CC(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ys(n)&&!Qm(n))return!1}return!0}var AC=JE(cd),RC=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&CC(e),this.componentId=n,this.baseHash=Cs(AC,n),this.baseStyle=r,i2.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ci(i,this.staticRulesId);else{var s=xy(Ni(this.rules,e,n,r)),o=up(Cs(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ci(i,o),this.staticRulesId=o}else{for(var u=Cs(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var g=xy(Ni(f,e,n,r));u=Cs(u,g+d),c+=g}}if(c){var y=up(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Ci(i,y)}}return i},t}(),u2=wt.createContext(void 0);u2.Consumer;var Bh={};function kC(t,e,n){var r=Qm(t),i=t,s=!$h(t),o=e.attrs,a=o===void 0?dd:o,u=e.componentId,c=u===void 0?function(k,D){var L=typeof k!="string"?"sc":wy(k);Bh[L]=(Bh[L]||0)+1;var I="".concat(L,"-").concat(Z5(cd+L+Bh[L]));return D?"".concat(D,"-").concat(I):I}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(k){return $h(k)?"styled.".concat(k):"Styled(".concat(eC(k),")")}(t):d,g=e.displayName&&e.componentId?"".concat(wy(e.displayName),"-").concat(e.componentId):e.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var A=e.shouldForwardProp;S=function(k,D){return C(k,D)&&A(k,D)}}else S=C}var w=new RC(n,g,r?i.componentStyle:void 0);function v(k,D){return function(L,I,_){var x=L.attrs,R=L.componentStyle,b=L.defaultProps,N=L.foldedComponentIds,P=L.styledComponentId,St=L.target,Un=wt.useContext(u2),hi=Ry(),Ot=L.shouldForwardProp||hi.shouldForwardProp,$=Q5(I,Un,b)||Qs,G=function(xt,gt,Ct){for(var fi,$n=kt(kt({},gt),{className:void 0,theme:Ct}),gr=0;gr<xt.length;gr+=1){var Bn=Ys(fi=xt[gr])?fi($n):fi;for(var Kt in Bn)$n[Kt]=Kt==="className"?Ci($n[Kt],Bn[Kt]):Kt==="style"?kt(kt({},$n[Kt]),Bn[Kt]):Bn[Kt]}return gt.className&&($n.className=Ci($n.className,gt.className)),$n}(x,I,$),Q=G.as||St,ue={};for(var te in G)G[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&G.theme===$||(te==="forwardedAs"?ue.as=G.forwardedAs:Ot&&!Ot(te,Q)||(ue[te]=G[te]));var we=function(xt,gt){var Ct=Ry(),fi=xt.generateAndInjectStyles(gt,Ct.styleSheet,Ct.stylis);return fi}(R,G),Dt=Ci(N,P);return we&&(Dt+=" "+we),G.className&&(Dt+=" "+G.className),ue[$h(Q)&&!YE.has(Q)?"class":"className"]=Dt,ue.ref=_,M.createElement(Q,ue)}(E,k,D)}v.displayName=f;var E=wt.forwardRef(v);return E.attrs=y,E.componentStyle=w,E.displayName=f,E.shouldForwardProp=S,E.foldedComponentIds=r?Ci(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=g,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(D){for(var L=[],I=1;I<arguments.length;I++)L[I-1]=arguments[I];for(var _=0,x=L;_<x.length;_++)cp(D,x[_],!0);return D}({},i.defaultProps,k):k}}),Ym(E,function(){return".".concat(E.styledComponentId)}),s&&n2(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Py(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var by=function(t){return Object.assign(t,{isCss:!0})};function PC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ys(t)||Na(t))return by(Ni(Py(dd,lc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ni(r):by(Ni(Py(r,e)))}function hp(t,e,n){if(n===void 0&&(n=Qs),!e)throw Za(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,PC.apply(void 0,lc([i],s,!1)))};return r.attrs=function(i){return hp(t,e,kt(kt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hp(t,e,kt(kt({},n),i))},r}var c2=function(t){return hp(kC,t)},_e=c2;YE.forEach(function(t){_e[t]=c2(t)});var d2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ny=wt.createContext&&wt.createContext(d2),bC=["attr","size","title"];function NC(t,e){if(t==null)return{};var n=OC(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function OC(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function hc(){return hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hc.apply(this,arguments)}function Oy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Oy(Object(n),!0).forEach(function(r){DC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Oy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function DC(t,e,n){return e=LC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LC(t){var e=MC(t,"string");return typeof e=="symbol"?e:e+""}function MC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function h2(t){return t&&t.map((e,n)=>wt.createElement(e.tag,fc({key:n},e.attr),h2(e.child)))}function Pe(t){return e=>wt.createElement(jC,hc({attr:fc({},t.attr)},e),h2(t.child))}function jC(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=NC(t,bC),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),wt.createElement("svg",hc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:fc(fc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&wt.createElement("title",null,s),t.children)};return Ny!==void 0?wt.createElement(Ny.Consumer,null,n=>e(n)):e(d2)}function VC(t){return Pe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"},child:[]}]})(t)}function FC(t){return Pe({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z"},child:[]}]})(t)}function zC(t){return Pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},child:[]}]})(t)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(this,arguments)}var Lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lr||(Lr={}));const Dy="popstate";function UC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Yi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),fp("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:pc(s))}function r(i,s){Xm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return BC(e,n,r,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $C(){return Math.random().toString(36).substr(2,8)}function Ly(t,e){return{usr:t.state,key:t.key,idx:e}}function fp(t,e,n,r){return n===void 0&&(n=null),Oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yi(e):e,{state:n,key:e&&e.key||r||$C()})}function pc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function BC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Lr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Oa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Lr.Pop;let A=d(),w=A==null?null:A-c;c=A,u&&u({action:a,location:C.location,delta:w})}function g(A,w){a=Lr.Push;let v=fp(C.location,A,w);n&&n(v,A),c=d()+1;let E=Ly(v,c),k=C.createHref(v);try{o.pushState(E,"",k)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(k)}s&&u&&u({action:a,location:C.location,delta:1})}function y(A,w){a=Lr.Replace;let v=fp(C.location,A,w);n&&n(v,A),c=d();let E=Ly(v,c),k=C.createHref(v);o.replaceState(E,"",k),s&&u&&u({action:a,location:C.location,delta:0})}function S(A){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof A=="string"?A:pc(A);return v=v.replace(/ $/,"%20"),ke(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let C={get action(){return a},get location(){return t(i,o)},listen(A){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dy,f),u=A,()=>{i.removeEventListener(Dy,f),u=null}},createHref(A){return e(i,A)},createURL:S,encodeLocation(A){let w=S(A);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:y,go(A){return o.go(A)}};return C}var My;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(My||(My={}));function WC(t,e,n){return n===void 0&&(n="/"),qC(t,e,n,!1)}function qC(t,e,n,r){let i=typeof e=="string"?Yi(e):e,s=Xs(i.pathname||"/",n);if(s==null)return null;let o=f2(t);HC(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=r3(s);a=t3(o[u],c,r)}return a}function f2(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=qr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),f2(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ZC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of p2(s.path))i(s,o,u)}),e}function p2(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=p2(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function HC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:e3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const GC=/^:[\w-]+$/,KC=3,QC=2,YC=1,XC=10,JC=-2,jy=t=>t==="*";function ZC(t,e){let n=t.split("/"),r=n.length;return n.some(jy)&&(r+=JC),e&&(r+=QC),n.filter(i=>!jy(i)).reduce((i,s)=>i+(GC.test(s)?KC:s===""?YC:XC),r)}function e3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function t3(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=mc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=mc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:qr([s,f.pathname]),pathnameBase:a3(qr([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=qr([s,f.pathnameBase]))}return o}function mc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=n3(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:g,isOptional:y}=d;if(g==="*"){let C=a[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const S=a[f];return y&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function n3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function r3(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function i3(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yi(t):t;return{pathname:n?n.startsWith("/")?n:s3(n,e):e,search:l3(r),hash:u3(i)}}function s3(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o3(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function m2(t,e){let n=o3(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function g2(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yi(t):(i=Oa({},t),ke(!i.pathname||!i.pathname.includes("?"),Wh("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Wh("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Wh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=i3(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const qr=t=>t.join("/").replace(/\/\/+/g,"/"),a3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),l3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,u3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y2=["post","put","patch","delete"];new Set(y2);const d3=["get",...y2];new Set(d3);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Da.apply(this,arguments)}const hd=M.createContext(null),v2=M.createContext(null),ai=M.createContext(null),fd=M.createContext(null),Xi=M.createContext({outlet:null,matches:[],isDataRoute:!1}),_2=M.createContext(null);function h3(t,e){let{relative:n}=e===void 0?{}:e;el()||ke(!1);let{basename:r,navigator:i}=M.useContext(ai),{hash:s,pathname:o,search:a}=md(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:qr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function el(){return M.useContext(fd)!=null}function tl(){return el()||ke(!1),M.useContext(fd).location}function w2(t){M.useContext(ai).static||M.useLayoutEffect(t)}function pd(){let{isDataRoute:t}=M.useContext(Xi);return t?x3():f3()}function f3(){el()||ke(!1);let t=M.useContext(hd),{basename:e,future:n,navigator:r}=M.useContext(ai),{matches:i}=M.useContext(Xi),{pathname:s}=tl(),o=JSON.stringify(m2(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return w2(()=>{a.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=g2(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:qr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function md(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(ai),{matches:i}=M.useContext(Xi),{pathname:s}=tl(),o=JSON.stringify(m2(i,r.v7_relativeSplatPath));return M.useMemo(()=>g2(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function p3(t,e){return m3(t,e)}function m3(t,e,n,r){el()||ke(!1);let{navigator:i}=M.useContext(ai),{matches:s}=M.useContext(Xi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=tl(),d;if(e){var f;let A=typeof e=="string"?Yi(e):e;u==="/"||(f=A.pathname)!=null&&f.startsWith(u)||ke(!1),d=A}else d=c;let g=d.pathname||"/",y=g;if(u!=="/"){let A=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(A.length).join("/")}let S=WC(t,{pathname:y}),C=w3(S&&S.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:qr([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:qr([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r);return e&&C?M.createElement(fd.Provider,{value:{location:Da({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Lr.Pop}},C):C}function g3(){let t=S3(),e=c3(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const y3=M.createElement(g3,null);class v3 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Xi.Provider,{value:this.props.routeContext},M.createElement(_2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _3(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(hd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Xi.Provider,{value:e},r)}function w3(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||ke(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:g,errors:y}=n,S=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let y,S=!1,C=null,A=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||y3,u&&(c<0&&g===0?(S=!0,A=null):c===g&&(S=!0,A=f.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),v=()=>{let E;return y?E=C:S?E=A:f.route.Component?E=M.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=d,M.createElement(_3,{match:f,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:E})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?M.createElement(v3,{location:n.location,revalidation:n.revalidation,component:C,error:y,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var E2=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(E2||{}),gc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gc||{});function E3(t){let e=M.useContext(hd);return e||ke(!1),e}function T3(t){let e=M.useContext(v2);return e||ke(!1),e}function I3(t){let e=M.useContext(Xi);return e||ke(!1),e}function T2(t){let e=I3(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function S3(){var t;let e=M.useContext(_2),n=T3(gc.UseRouteError),r=T2(gc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function x3(){let{router:t}=E3(E2.UseNavigateStable),e=T2(gc.UseNavigateStable),n=M.useRef(!1);return w2(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Da({fromRouteId:e},s)))},[t,e])}function Cn(t){ke(!1)}function C3(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Lr.Pop,navigator:s,static:o=!1,future:a}=t;el()&&ke(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:Da({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Yi(r));let{pathname:d="/",search:f="",hash:g="",state:y=null,key:S="default"}=r,C=M.useMemo(()=>{let A=Xs(d,u);return A==null?null:{location:{pathname:A,search:f,hash:g,state:y,key:S},navigationType:i}},[u,d,f,g,y,S,i]);return C==null?null:M.createElement(ai.Provider,{value:c},M.createElement(fd.Provider,{children:n,value:C}))}function A3(t){let{children:e,location:n}=t;return p3(pp(e),n)}new Promise(()=>{});function pp(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,pp(r.props.children,s));return}r.type!==Cn&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yc(){return yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yc.apply(this,arguments)}function I2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function R3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function k3(t,e){return t.button===0&&(!e||e==="_self")&&!R3(t)}const P3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],b3=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],N3="6";try{window.__reactRouterVersion=N3}catch{}const O3=M.createContext({isTransitioning:!1}),D3="startTransition",Vy=hf[D3];function L3(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=UC({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=M.useCallback(f=>{c&&Vy?Vy(()=>u(f)):u(f)},[u,c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.createElement(C3,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const M3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V3=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,g=I2(e,P3),{basename:y}=M.useContext(ai),S,C=!1;if(typeof c=="string"&&j3.test(c)&&(S=c,M3))try{let E=new URL(window.location.href),k=c.startsWith("//")?new URL(E.protocol+c):new URL(c),D=Xs(k.pathname,y);k.origin===E.origin&&D!=null?c=D+k.search+k.hash:C=!0}catch{}let A=h3(c,{relative:i}),w=z3(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(E){r&&r(E),E.defaultPrevented||w(E)}return M.createElement("a",yc({},g,{href:S||A,onClick:C||s?r:v,ref:n,target:u}))}),lt=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:d}=e,f=I2(e,b3),g=md(u,{relative:f.relative}),y=tl(),S=M.useContext(v2),{navigator:C,basename:A}=M.useContext(ai),w=S!=null&&U3(g)&&c===!0,v=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,E=y.pathname,k=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(E=E.toLowerCase(),k=k?k.toLowerCase():null,v=v.toLowerCase()),k&&A&&(k=Xs(k,A)||k);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let L=E===v||!o&&E.startsWith(v)&&E.charAt(D)==="/",I=k!=null&&(k===v||!o&&k.startsWith(v)&&k.charAt(v.length)==="/"),_={isActive:L,isPending:I,isTransitioning:w},x=L?r:void 0,R;typeof s=="function"?R=s(_):R=[s,L?"active":null,I?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(_):a;return M.createElement(V3,yc({},f,{"aria-current":x,className:R,ref:n,style:b,to:u,unstable_viewTransition:c}),typeof d=="function"?d(_):d)});var mp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(mp||(mp={}));var Fy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fy||(Fy={}));function F3(t){let e=M.useContext(hd);return e||ke(!1),e}function z3(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=pd(),c=tl(),d=md(t,{relative:o});return M.useCallback(f=>{if(k3(f,n)){f.preventDefault();let g=r!==void 0?r:pc(c)===pc(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function U3(t,e){e===void 0&&(e={});let n=M.useContext(O3);n==null&&ke(!1);let{basename:r}=F3(mp.useViewTransitionState),i=md(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Xs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Xs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mc(i.pathname,o)!=null||mc(i.pathname,s)!=null}let $3={data:""},B3=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||$3,W3=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,q3=/\/\*[^]*?\*\/|  +/g,zy=/\n+/g,kr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?kr(o,s):s+"{"+kr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=kr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=kr.p?kr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Hn={},S2=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+S2(t[n]);return e}return t},H3=(t,e,n,r,i)=>{let s=S2(t),o=Hn[s]||(Hn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Hn[o]){let u=s!==t?t:(c=>{let d,f,g=[{}];for(;d=W3.exec(c.replace(q3,""));)d[4]?g.shift():d[3]?(f=d[3].replace(zy," ").trim(),g.unshift(g[0][f]=g[0][f]||{})):g[0][d[1]]=d[2].replace(zy," ").trim();return g[0]})(t);Hn[o]=kr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&Hn.g?Hn.g:null;return n&&(Hn.g=Hn[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(Hn[o],e,r,a),o},G3=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":kr(a,""):a===!1?"":a}return r+i+(o??"")},"");function gd(t){let e=this||{},n=t.call?t(e.p):t;return H3(n.unshift?n.raw?G3(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,B3(e.target),e.g,e.o,e.k)}let x2,gp,yp;gd.bind({g:1});let ur=gd.bind({k:1});function K3(t,e,n,r){kr.p=e,x2=t,gp=n,yp=r}function li(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),u=a.className||i.className;n.p=Object.assign({theme:gp&&gp()},a),n.o=/ *go\d+/.test(u),a.className=gd.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),yp&&c[0]&&yp(a),x2(c,a)}return i}}var Q3=t=>typeof t=="function",vc=(t,e)=>Q3(t)?t(e):t,Y3=(()=>{let t=0;return()=>(++t).toString()})(),C2=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),X3=20,xu=new Map,J3=1e3,Uy=t=>{if(xu.has(t))return;let e=setTimeout(()=>{xu.delete(t),Ji({type:4,toastId:t})},J3);xu.set(t,e)},Z3=t=>{let e=xu.get(t);e&&clearTimeout(e)},vp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,X3)};case 1:return e.toast.id&&Z3(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?vp(t,{type:1,toast:n}):vp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Uy(r):t.toasts.forEach(s=>{Uy(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Cu=[],Au={toasts:[],pausedAt:void 0},Ji=t=>{Au=vp(Au,t),Cu.forEach(e=>{e(Au)})},e9={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},t9=(t={})=>{let[e,n]=M.useState(Au);M.useEffect(()=>(Cu.push(n),()=>{let i=Cu.indexOf(n);i>-1&&Cu.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||e9[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},n9=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Y3()}),nl=t=>(e,n)=>{let r=n9(e,t,n);return Ji({type:2,toast:r}),r.id},Ft=(t,e)=>nl("blank")(t,e);Ft.error=nl("error");Ft.success=nl("success");Ft.loading=nl("loading");Ft.custom=nl("custom");Ft.dismiss=t=>{Ji({type:3,toastId:t})};Ft.remove=t=>Ji({type:4,toastId:t});Ft.promise=(t,e,n)=>{let r=Ft.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Ft.success(vc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Ft.error(vc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var r9=(t,e)=>{Ji({type:1,toast:{id:t,height:e}})},i9=()=>{Ji({type:5,time:Date.now()})},s9=t=>{let{toasts:e,pausedAt:n}=t9(t);M.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(u<0){a.visible&&Ft.dismiss(a.id);return}return setTimeout(()=>Ft.dismiss(a.id),u)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=M.useCallback(()=>{n&&Ji({type:6,time:Date.now()})},[n]),i=M.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:c}=o||{},d=e.filter(y=>(y.position||c)===(s.position||c)&&y.height),f=d.findIndex(y=>y.id===s.id),g=d.filter((y,S)=>S<f&&y.visible).length;return d.filter(y=>y.visible).slice(...a?[g+1]:[0,g]).reduce((y,S)=>y+(S.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:r9,startPause:i9,endPause:r,calculateOffset:i}}},o9=ur`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,a9=ur`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,l9=ur`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,u9=li("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${o9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${a9} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${l9} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,c9=ur`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,d9=li("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${c9} 1s linear infinite;
`,h9=ur`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,f9=ur`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,p9=li("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${h9} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${f9} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,m9=li("div")`
  position: absolute;
`,g9=li("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,y9=ur`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,v9=li("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${y9} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,_9=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?M.createElement(v9,null,e):e:n==="blank"?null:M.createElement(g9,null,M.createElement(d9,{...r}),n!=="loading"&&M.createElement(m9,null,n==="error"?M.createElement(u9,{...r}):M.createElement(p9,{...r})))},w9=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,E9=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,T9="0%{opacity:0;} 100%{opacity:1;}",I9="0%{opacity:1;} 100%{opacity:0;}",S9=li("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,x9=li("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,C9=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=C2()?[T9,I9]:[w9(n),E9(n)];return{animation:e?`${ur(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ur(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},A9=M.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?C9(t.position||e||"top-center",t.visible):{opacity:0},s=M.createElement(_9,{toast:t}),o=M.createElement(x9,{...t.ariaProps},vc(t.message,t));return M.createElement(S9,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):M.createElement(M.Fragment,null,s,o))});K3(M.createElement);var R9=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=M.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return M.createElement("div",{ref:s,className:e,style:n},i)},k9=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C2()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},P9=gd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Xl=16,b9=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:u}=s9(n);return M.createElement("div",{style:{position:"fixed",zIndex:9999,top:Xl,left:Xl,right:Xl,bottom:Xl,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(c=>{let d=c.position||e,f=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=k9(d,f);return M.createElement(R9,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?P9:"",style:g},c.type==="custom"?vc(c.message,c):i?i(c):M.createElement(A9,{toast:c,position:d}))}))},ht=Ft,A2={exports:{}},R2={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=M;function N9(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var O9=typeof Object.is=="function"?Object.is:N9,D9=rl.useSyncExternalStore,L9=rl.useRef,M9=rl.useEffect,j9=rl.useMemo,V9=rl.useDebugValue;R2.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=L9(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=j9(function(){function u(y){if(!c){if(c=!0,d=y,y=r(y),i!==void 0&&o.hasValue){var S=o.value;if(i(S,y))return f=S}return f=y}if(S=f,O9(d,y))return S;var C=r(y);return i!==void 0&&i(S,C)?S:(d=y,f=C)}var c=!1,d,f,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=D9(t,s[0],s[1]);return M9(function(){o.hasValue=!0,o.value=a},[a]),V9(a),a};A2.exports=R2;var F9=A2.exports,zt="default"in hf?wt:hf,$y=Symbol.for("react-redux-context"),By=typeof globalThis<"u"?globalThis:{};function z9(){if(!zt.createContext)return{};const t=By[$y]??(By[$y]=new Map);let e=t.get(zt.createContext);return e||(e=zt.createContext(null),t.set(zt.createContext,e)),e}var Zr=z9(),U9=()=>{throw new Error("uSES not initialized!")};function Jm(t=Zr){return function(){return zt.useContext(t)}}var k2=Jm(),P2=U9,$9=t=>{P2=t},B9=(t,e)=>t===e;function W9(t=Zr){const e=t===Zr?k2:Jm(t),n=(r,i={})=>{const{equalityFn:s=B9,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:d,identityFunctionCheck:f}=e();zt.useRef(!0);const g=zt.useCallback({[r.name](S){return r(S)}}[r.name],[r,d,o.stabilityCheck]),y=P2(u.addNestedSub,a.getState,c||a.getState,g,s);return zt.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var nr=W9();function q9(t){t()}function H9(){let t=null,e=null;return{clear(){t=null,e=null},notify(){q9(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Wy={notify(){},get:()=>[]};function G9(t,e){let n,r=Wy,i=0,s=!1;function o(C){d();const A=r.subscribe(C);let w=!1;return()=>{w||(w=!0,A(),f())}}function a(){r.notify()}function u(){S.onStateChange&&S.onStateChange()}function c(){return s}function d(){i++,n||(n=t.subscribe(u),r=H9())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Wy)}function g(){s||(s=!0,d())}function y(){s&&(s=!1,f())}const S={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:g,tryUnsubscribe:y,getListeners:()=>r};return S}var K9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q9=typeof navigator<"u"&&navigator.product==="ReactNative",Y9=K9||Q9?zt.useLayoutEffect:zt.useEffect;function X9({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=zt.useMemo(()=>{const c=G9(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=zt.useMemo(()=>t.getState(),[t]);Y9(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Zr;return zt.createElement(u.Provider,{value:o},n)}var J9=X9;function b2(t=Zr){const e=t===Zr?k2:Jm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var Z9=b2();function e6(t=Zr){const e=t===Zr?Z9:b2(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var yd=e6();$9(F9.useSyncExternalStoreWithSelector);function t6(t){return Pe({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}const n6=_e.img`
    width: 7rem;
    height: 5rem;
    @media (max-width: 600px) and (min-width: 0px) {
        width: 7rem;
        height: 5rem;
        margin-left: -1.7rem;
    }
`,r6=_e.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "poppins", sans-serif;
    padding: 10px 15px 10px 15px;
    background-color: none;
    ul {
        margin-top: 40px;
        a {
            color: black;
            text-decoration: none;
            font-size: 17px;
            font-weight: normal;
            padding: 0px 15px 0px 15px;
        }
        a:hover {
            color: red;
        }
        a:nth-child(4) {
            display: none;
        }
    }
    div:nth-child(3) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;
        div {
            padding: 0px 15px 0px 15px;
            margin-top: 8px;
            span {
                position: absolute;
                top: 2.7rem;
                right: 8.7rem;
                font-size: 10px;
                border-radius: 100%;
                background-color: red;
            }
        }
        a:nth-child(2) {
            background-color: none;
            font-size: 17px;
            color: black;
            text-decoration: none;
            padding: 5px 35px 10px 35px;
            height: 2.4rem;
            border-radius: 8px;
            border: 1px solid #696969;
        }
        a:nth-child(2):hover {
            background-color: #696969;
            transition: 0.5s;
            color: white;
        }
    }
    #logout {
        font-size: 1rem;
        padding: 5px 30px 0px 30px;
    }
    #cross {
        display: none;
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: #fff;
        margin-top: 19px;
        ul {
            display: none;
            flex-direction: column;
            position: fixed;
            left: 0;
            top: 0;
            width: 0;
            height: 100vh;
            background-color: white;
            text-align: center;
            padding-top: 1rem;
            z-index: 1;
            transition: .5s;
            overflow-x: hidden;
            a {
                font-size: 1rem;
                padding: 15px 15px 15px 0px;
            }
            a:nth-child(4) {
                display: block;
                margin-bottom: 1rem;
            }
            a:nth-child(1) {
                margin-top: 3rem;
            }
        }
        div:nth-child(3) {
            margin-top: 1.5rem;
            div {
                span {
                    position: absolute;
                    top: 3.3rem;
                    right: 4.4rem;
                    z-index: 0;
                }
            }
            a {
                margin-top: 10px;
                margin-right: 10px;
            }
            a:nth-child(2) {
                display: none;
            }
        }
        #cross {
            display: block;
            position: absolute;
            right: 3%;
        }
    }
`,i6=_e.a`
    @media (max-width: 4000px) and (min-width: 601px) {
        display: none;
        width: 0%;
    }
    @media (max-width: 600px) and (min-width: 0px) {
        display: block;
        color: black;
        :hover {
            color: black;
        }
    }
`,us=()=>{const t=localStorage.getItem("users");pd();const e=nr(s=>s.cart.items.length),n=()=>{localStorage.clear("users"),ht.success("Logout Successfult"),console.log("logout",t)},r=()=>{document.getElementById("menuopen").style.display="flex",document.getElementById("menuopen").style.width="100%"},i=()=>{document.getElementById("menuopen").style.display="none",document.getElementById("menuopen").style.width="0"};return p.jsx(p.Fragment,{children:p.jsxs(r6,{children:[p.jsx("div",{children:p.jsx(n6,{src:qm,alt:"SiteLogo"})}),p.jsx("div",{children:p.jsxs("ul",{id:"menuopen",children:[p.jsx(lt,{to:"/Home",children:"Home"}),p.jsx(lt,{to:"/shop",children:"Shop"}),p.jsx(lt,{to:"/about",children:"About"}),t?p.jsx(lt,{onClick:n,children:"LogOut"}):p.jsx(lt,{to:"/Login",children:"Login"}),p.jsx(t6,{size:"1.9rem",color:"black",id:"cross",onClick:i})]})}),p.jsxs("div",{children:[p.jsxs("div",{children:[p.jsx(lt,{to:"/Cart",children:p.jsx(FC,{size:"1.7rem",color:"#383838"})}),e>=0&&p.jsx("span",{className:"badge badge-danger",children:e})]}),t?p.jsx(lt,{onClick:n,id:"logout",children:"LogOut"}):p.jsx(lt,{to:"/Login",children:"Login"}),p.jsx(i6,{children:p.jsx(zC,{size:"1.7rem",onClick:r})})]})]})})};var qy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},s6=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},O2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(g=64)),r.push(n[d],n[f],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(N2(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s6(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new o6;const g=s<<2|a>>4;if(r.push(g),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class o6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a6=function(t){const e=N2(t);return O2.encodeByteArray(e,!0)},_c=function(t){return a6(t).replace(/\./g,"")},D2=function(t){try{return O2.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u6=()=>l6().__FIREBASE_DEFAULTS__,c6=()=>{if(typeof process>"u"||typeof qy>"u")return;const t=qy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},d6=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&D2(t[1]);return e&&JSON.parse(e)},vd=()=>{try{return u6()||c6()||d6()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},L2=t=>{var e,n;return(n=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M2=t=>{const e=L2(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},j2=()=>{var t;return(t=vd())===null||t===void 0?void 0:t.config},V2=t=>{var e;return(e=vd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_c(JSON.stringify(n)),_c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function p6(){var t;const e=(t=vd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function m6(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y6(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v6(){return!p6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _6(){try{return typeof indexedDB=="object"}catch{return!1}}function w6(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E6="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=E6,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?T6(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,r)}}function T6(t,e){return t.replace(I6,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const I6=/\{\$([^}]+)}/g;function S6(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hy(s)&&Hy(o)){if(!wc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function x6(t,e){const n=new C6(t,e);return n.subscribe.bind(n)}class C6{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");A6(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qh),i.error===void 0&&(i.error=qh),i.complete===void 0&&(i.complete=qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A6(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new h6;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P6(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:k6(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function k6(t){return t===Ei?void 0:t}function P6(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R6(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const N6={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},O6=re.INFO,D6={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},L6=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=D6[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zm{constructor(e){this.name=e,this._logLevel=O6,this._logHandler=L6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const M6=(t,e)=>e.some(n=>t instanceof n);let Gy,Ky;function j6(){return Gy||(Gy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V6(){return Ky||(Ky=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z2=new WeakMap,_p=new WeakMap,U2=new WeakMap,Hh=new WeakMap,eg=new WeakMap;function F6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z2.set(n,t)}).catch(()=>{}),eg.set(e,t),e}function z6(t){if(_p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_p.set(t,e)}let wp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U6(t){wp=t(wp)}function $6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gh(this),e,...n);return U2.set(r,e.sort?e.sort():[e]),Hr(r)}:V6().includes(t)?function(...e){return t.apply(Gh(this),e),Hr(z2.get(this))}:function(...e){return Hr(t.apply(Gh(this),e))}}function B6(t){return typeof t=="function"?$6(t):(t instanceof IDBTransaction&&z6(t),M6(t,j6())?new Proxy(t,wp):t)}function Hr(t){if(t instanceof IDBRequest)return F6(t);if(Hh.has(t))return Hh.get(t);const e=B6(t);return e!==t&&(Hh.set(t,e),eg.set(e,t)),e}const Gh=t=>eg.get(t);function W6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const q6=["get","getKey","getAll","getAllKeys","count"],H6=["put","add","delete","clear"],Kh=new Map;function Qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kh.get(e))return Kh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=H6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||q6.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Kh.set(e,s),s}U6(t=>({...t,get:(e,n,r)=>Qy(e,n)||t.get(e,n,r),has:(e,n)=>!!Qy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K6(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function K6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ep="@firebase/app",Yy="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Zm("@firebase/app"),Q6="@firebase/app-compat",Y6="@firebase/analytics-compat",X6="@firebase/analytics",J6="@firebase/app-check-compat",Z6="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/database-compat",iA="@firebase/functions",sA="@firebase/functions-compat",oA="@firebase/installations",aA="@firebase/installations-compat",lA="@firebase/messaging",uA="@firebase/messaging-compat",cA="@firebase/performance",dA="@firebase/performance-compat",hA="@firebase/remote-config",fA="@firebase/remote-config-compat",pA="@firebase/storage",mA="@firebase/storage-compat",gA="@firebase/firestore",yA="@firebase/vertexai-preview",vA="@firebase/firestore-compat",_A="firebase",wA="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="[DEFAULT]",EA={[Ep]:"fire-core",[Q6]:"fire-core-compat",[X6]:"fire-analytics",[Y6]:"fire-analytics-compat",[Z6]:"fire-app-check",[J6]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-rtdb-compat",[iA]:"fire-fn",[sA]:"fire-fn-compat",[oA]:"fire-iid",[aA]:"fire-iid-compat",[lA]:"fire-fcm",[uA]:"fire-fcm-compat",[cA]:"fire-perf",[dA]:"fire-perf-compat",[hA]:"fire-rc",[fA]:"fire-rc-compat",[pA]:"fire-gcs",[mA]:"fire-gcs-compat",[gA]:"fire-fst",[vA]:"fire-fst-compat",[yA]:"fire-vertex","fire-js":"fire-js",[_A]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map,TA=new Map,Ip=new Map;function Xy(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zi(t){const e=t.name;if(Ip.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Ip.set(e,t);for(const n of Ec.values())Xy(n,t);for(const n of TA.values())Xy(n,t);return!0}function _d(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new il("app","Firebase",IA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=wA;function $2(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=j2()),!n)throw Gr.create("no-options");const s=Ec.get(i);if(s){if(wc(n,s.options)&&wc(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new b6(i);for(const u of Ip.values())o.addComponent(u);const a=new SA(n,r,o);return Ec.set(i,a),a}function tg(t=Tp){const e=Ec.get(t);if(!e&&t===Tp&&j2())return $2();if(!e)throw Gr.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let i=(r=EA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}zi(new ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="firebase-heartbeat-database",CA=1,La="firebase-heartbeat-store";let Qh=null;function B2(){return Qh||(Qh=W6(xA,CA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(La)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Qh}async function AA(t){try{const n=(await B2()).transaction(La),r=await n.objectStore(La).get(W2(t));return await n.done,r}catch(e){if(e instanceof Vn)cr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Jy(t,e){try{const r=(await B2()).transaction(La,"readwrite");await r.objectStore(La).put(e,W2(t)),await r.done}catch(n){if(n instanceof Vn)cr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function W2(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,kA=30*24*60*60*1e3;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zy(),{heartbeatsToSend:r,unsentEntries:i}=bA(this._heartbeatsCache.heartbeats),s=_c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return cr.warn(n),""}}}function Zy(){return new Date().toISOString().substring(0,10)}function bA(t,e=RA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ev(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _6()?w6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ev(t){return _c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){zi(new ei("platform-logger",e=>new G6(e),"PRIVATE")),zi(new ei("heartbeat",e=>new PA(e),"PRIVATE")),Nn(Ep,Yy,t),Nn(Ep,Yy,"esm2017"),Nn("fire-js","")}OA("");function ng(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function q2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DA=q2,H2=new il("auth","Firebase",q2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Zm("@firebase/auth");function LA(t,...e){Tc.logLevel<=re.WARN&&Tc.warn(`Auth (${Zi}): ${t}`,...e)}function Ru(t,...e){Tc.logLevel<=re.ERROR&&Tc.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw ig(t,...e)}function vn(t,...e){return ig(t,...e)}function rg(t,e,n){const r=Object.assign(Object.assign({},DA()),{[e]:n});return new il("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return rg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),rg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return H2.create(t,...e)}function K(t,e,...n){if(!t)throw ig(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ru(e),new Error(e)}function dr(t,e){t||Jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jA(){return tv()==="http:"||tv()==="https:"}function tv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jA()||m6()||"connection"in navigator)?navigator.onLine:!0}function FA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=f6()||g6()}get(){return VA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new ol(3e4,6e4);function ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ci(t,e,n,r,i={}){return K2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=sl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),G2.fetch()(Q2(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function K2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zA),e);try{const i=new BA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Jl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Jl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rg(t,d,c);rn(t,d)}}catch(i){if(i instanceof Vn)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function al(t,e,n,r,i={}){const s=await ci(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Q2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sg(t.config,i):`${t.config.apiScheme}://${i}`}function $A(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),UA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}function nv(t){return t!==void 0&&t.enterprise!==void 0}class WA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $A(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qA(t,e){return ci(t,"GET","/v2/recaptchaConfig",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e){return ci(t,"POST","/v1/accounts:delete",e)}async function Y2(t,e){return ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GA(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=og(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ca(Yh(i.auth_time)),issuedAtTime:ca(Yh(i.iat)),expirationTime:ca(Yh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yh(t){return Number(t)*1e3}function og(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const i=D2(n);return i?JSON.parse(i):(Ru("Failed to decode base64 JWT payload"),null)}catch(i){return Ru("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rv(t){const e=og(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&KA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ma(t,Y2(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?X2(s.providerUserInfo):[],a=XA(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function YA(t){const e=mt(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function X2(t){return t.map(e=>{var{providerId:n}=e,r=ng(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){const n=await K2(t,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Q2(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",G2.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZA(t,e){return ci(t,"POST","/v2/accounts:revokeToken",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=rv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ma(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GA(this,e)}reload(){return YA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await Ma(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:k,isAnonymous:D,providerData:L,stsTokenManager:I}=n;K(E&&I,e,"internal-error");const _=Os.fromJSON(this.name,I);K(typeof E=="string",e,"internal-error"),Er(f,e.name),Er(g,e.name),K(typeof k=="boolean",e,"internal-error"),K(typeof D=="boolean",e,"internal-error"),Er(y,e.name),Er(S,e.name),Er(C,e.name),Er(A,e.name),Er(w,e.name),Er(v,e.name);const x=new Zn({uid:E,auth:e,email:g,emailVerified:k,displayName:f,isAnonymous:D,photoURL:S,phoneNumber:y,tenantId:C,stsTokenManager:_,createdAt:w,lastLoginAt:v});return L&&Array.isArray(L)&&(x.providerData=L.map(R=>Object.assign({},R))),A&&(x._redirectEventId=A),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new Zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ic(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?X2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Os;a.updateFromIdToken(r);const u=new Zn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new Map;function er(t){dr(t instanceof Function,"Expected a class definition");let e=iv.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J2.type="NONE";const sv=J2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ku(this.userKey,i.apiKey,s),this.fullPersistenceKey=ku("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(er(sv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||er(sv);const o=ku(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Zn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ds(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iT(e))return"Blackberry";if(sT(e))return"Webos";if(eT(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z2(t=pt()){return/firefox\//i.test(t)}function eT(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(t=pt()){return/crios\//i.test(t)}function nT(t=pt()){return/iemobile/i.test(t)}function rT(t=pt()){return/android/i.test(t)}function iT(t=pt()){return/blackberry/i.test(t)}function sT(t=pt()){return/webos/i.test(t)}function ag(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eR(t=pt()){var e;return ag(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tR(){return y6()&&document.documentMode===10}function oT(t=pt()){return ag(t)||rT(t)||sT(t)||iT(t)||/windows phone/i.test(t)||nT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e=[]){let n;switch(t){case"Browser":n=ov(pt());break;case"Worker":n=`${ov(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(t,e={}){return ci(t,"GET","/v2/passwordPolicy",ui(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=6;class sR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new av(this),this.idTokenSubscription=new av(this),this.beforeStateQueue=new nR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Y2(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(rr(this));const n=e?mt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rR(this),n=new sR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new il("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function di(t){return mt(t)}class av{constructor(e){this.auth=e,this.observer=null,this.addObserver=x6(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aR(t){wd=t}function lT(t){return wd.loadJS(t)}function lR(){return wd.recaptchaEnterpriseScript}function uR(){return wd.gapiScript}function cR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dR="recaptcha-enterprise",hR="NO_RECAPTCHA";class fR{constructor(e){this.type=dR,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new WA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;nv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(hR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&nv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lR();u.length!==0&&(u+=a),lT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function lv(t,e,n,r=!1){const i=new fR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Cp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await lv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t,e){const n=_d(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wc(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function mR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gR(t,e,n){const r=di(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=uT(e),{host:o,port:a}=yR(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),vR()}function uT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yR(t){const e=uT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uv(o)}}}function uv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}async function _R(t,e){return ci(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(t,e){return al(t,"POST","/v1/accounts:signInWithPassword",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}async function TR(t,e){return al(t,"POST","/v1/accounts:signInWithEmailLink",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cp(e,n,"signInWithPassword",wR);case"emailLink":return ER(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cp(e,r,"signUpPassword",_R);case"emailLink":return TR(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return al(t,"POST","/v1/accounts:signInWithIdp",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="http://localhost";class Ui extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ng(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:IR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xR(t){const e=Go(Ko(t)).link,n=e?Go(Ko(e)).deep_link_id:null,r=Go(Ko(t)).deep_link_id;return(r?Go(Ko(r)).link:null)||r||n||e||t}class ug{constructor(e){var n,r,i,s,o,a;const u=Go(Ko(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=SR((i=u.mode)!==null&&i!==void 0?i:null);K(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xR(e);try{return new ug(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.providerId=ho.PROVIDER_ID}static credential(e,n){return ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ug.parseLink(n);return K(r,"argument-error"),ja._fromEmailAndCode(e,r.code,r.tenantId)}}ho.PROVIDER_ID="password";ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends cg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ll{constructor(){super("facebook.com")}static credential(e){return Ui._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ui._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends ll{constructor(){super("github.com")}static credential(e){return Ui._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ll{constructor(){super("twitter.com")}static credential(e,n){return Ui._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e){return al(t,"POST","/v1/accounts:signUp",ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zn._fromIdTokenResponse(e,r,i),o=cv(r);return new $i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cv(r);return new $i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sc(e,n,r,i)}}function cT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,s,e,r):s})}async function AR(t,e,n=!1){const r=await Ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await Ma(t,cT(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=og(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),$i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e,n=!1){if(hn(t.app))return Promise.reject(rr(t));const r="signIn",i=await cT(t,r,e),s=await $i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kR(t,e){return dT(di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PR(t,e,n){if(hn(t.app))return Promise.reject(rr(t));const r=di(t),o=await Cp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&hT(t),u}),a=await $i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bR(t,e,n){return hn(t.app)?Promise.reject(rr(t)):kR(mt(t),ho.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hT(t),r})}function NR(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function OR(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}const xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xc,"1"),this.storage.removeItem(xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=1e3,LR=10;class pT extends fT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pT.type="LOCAL";const MR=pT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT extends fT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mT.type="SESSION";const gT=mT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await jR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=dg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function FR(t){On().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function zR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $R(){return yT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebaseLocalStorageDb",BR=1,Cc="firebaseLocalStorage",_T="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Td(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function WR(){const t=indexedDB.deleteDatabase(vT);return new ul(t).toPromise()}function Ap(){const t=indexedDB.open(vT,BR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:_T})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await WR(),e(await Ap()))})})}async function dv(t,e,n){const r=Td(t,!0).put({[_T]:e,value:n});return new ul(r).toPromise()}async function qR(t,e){const n=Td(t,!1).get(e),r=await new ul(n).toPromise();return r===void 0?null:r.value}function hv(t,e){const n=Td(t,!0).delete(e);return new ul(n).toPromise()}const HR=800,GR=3;class wT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ap(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ed._getInstance($R()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zR(),!this.activeServiceWorker)return;this.sender=new VR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ap();return await dv(e,xc,"1"),await hv(e,xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Td(i,!1).getAll();return new ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wT.type="LOCAL";const KR=wT;new ol(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t,e){return e?er(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QR(t){return dT(t.auth,new hg(t),t.bypassAuthState)}function YR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),RR(n,new hg(t),t.bypassAuthState)}async function XR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),AR(n,new hg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QR;case"linkViaPopup":case"linkViaRedirect":return XR;case"reauthViaPopup":case"reauthViaRedirect":return YR;default:rn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new ol(2e3,1e4);async function ZR(t,e,n){if(hn(t.app))return Promise.reject(vn(t,"operation-not-supported-in-this-environment"));const r=di(t);MA(t,e,cg);const i=ET(r,n);return new Ai(r,"signInViaPopup",e,i).executeNotNull()}class Ai extends TT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JR.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="pendingRedirect",Pu=new Map;class tk extends TT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const r=await nk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nk(t,e){const n=sk(e),r=ik(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rk(t,e){Pu.set(t._key(),e)}function ik(t){return er(t._redirectPersistence)}function sk(t){return ku(ek,t.config.apiKey,t.name)}async function ok(t,e,n=!1){if(hn(t.app))return Promise.reject(rr(t));const r=di(t),i=ET(r,e),o=await new tk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=10*60*1e3;class lk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!IT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ak&&this.cachedEventUids.clear(),this.cachedEventUids.has(fv(e))}saveEventToCache(e){this.cachedEventUids.add(fv(e)),this.lastProcessedEventTime=Date.now()}}function fv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function IT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e={}){return ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hk=/^https?/;async function fk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ck(t);for(const n of e)try{if(pk(n))return}catch{}rn(t,"unauthorized-domain")}function pk(t){const e=Sp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hk.test(n))return!1;if(dk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new ol(3e4,6e4);function pv(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gk(t){return new Promise((e,n)=>{var r,i,s;function o(){pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pv(),n(vn(t,"network-request-failed"))},timeout:mk.get()})}if(!((i=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=On().gapi)===null||s===void 0)&&s.load)o();else{const a=cR("iframefcb");return On()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},lT(`${uR()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw bu=null,e})}let bu=null;function yk(t){return bu=bu||gk(t),bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new ol(5e3,15e3),_k="__/auth/iframe",wk="emulator/auth/iframe",Ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ik(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sg(e,wk):`https://${t.config.authDomain}/${_k}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=Tk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sl(r).slice(1)}`}async function Sk(t){const e=await yk(t),n=On().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Ik(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ek,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=On().setTimeout(()=>{s(o)},vk.get());function u(){On().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ck=500,Ak=600,Rk="_blank",kk="http://localhost";class mv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pk(t,e,n,r=Ck,i=Ak){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},xk),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pt().toLowerCase();n&&(a=tT(c)?Rk:n),Z2(c)&&(e=e||kk,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(eR(c)&&a!=="_self")return bk(e||"",a),new mv(null);const f=window.open(e||"",a,d);K(f,t,"popup-blocked");try{f.focus()}catch{}return new mv(f)}function bk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="__/auth/handler",Ok="emulator/auth/handler",Dk=encodeURIComponent("fac");async function gv(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof cg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",S6(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ll){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${Dk}=${encodeURIComponent(u)}`:"";return`${Lk(t)}?${sl(a).slice(1)}${c}`}function Lk({config:t}){return t.emulator?sg(t,Ok):`https://${t.authDomain}/${Nk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="webStorageSupport";class Mk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gT,this._completeRedirectFn=ok,this._overrideRedirectResult=rk}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gv(e,n,r,Sp(),i);return Pk(e,o,dg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gv(e,n,r,Sp(),i);return FR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sk(e),r=new lk(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xh,{type:Xh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xh];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oT()||eT()||ag()}}const jk=Mk;var yv="@firebase/auth",vv="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zk(t){zi(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},c=new oR(r,i,s,u);return mR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zi(new ei("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new Vk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(yv,vv,Fk(t)),Nn(yv,vv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=5*60,$k=V2("authIdTokenMaxAge")||Uk;let _v=null;const Bk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$k)return;const i=n==null?void 0:n.token;_v!==i&&(_v=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wk(t=tg()){const e=_d(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pR(t,{popupRedirectResolver:jk,persistence:[KR,MR,gT]}),r=V2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Bk(s.toString());OR(n,o,()=>o(n.currentUser)),NR(n,a=>o(a))}}const i=L2("auth");return i&&gR(n,`http://${i}`),n}function qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zk("Browser");var Hk="firebase",Gk="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(Hk,Gk,"app");var wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,ST;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function x(){}x.prototype=_.prototype,I.D=_.prototype,I.prototype=new x,I.prototype.constructor=I,I.C=function(R,b,N){for(var P=Array(arguments.length-2),St=2;St<arguments.length;St++)P[St-2]=arguments[St];return _.prototype[b].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,x){x||(x=0);var R=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)R[b]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(b=0;16>b;++b)R[b]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=I.g[0],x=I.g[1],b=I.g[2];var N=I.g[3],P=_+(N^x&(b^N))+R[0]+3614090360&4294967295;_=x+(P<<7&4294967295|P>>>25),P=N+(b^_&(x^b))+R[1]+3905402710&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(x^N&(_^x))+R[2]+606105819&4294967295,b=N+(P<<17&4294967295|P>>>15),P=x+(_^b&(N^_))+R[3]+3250441966&4294967295,x=b+(P<<22&4294967295|P>>>10),P=_+(N^x&(b^N))+R[4]+4118548399&4294967295,_=x+(P<<7&4294967295|P>>>25),P=N+(b^_&(x^b))+R[5]+1200080426&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(x^N&(_^x))+R[6]+2821735955&4294967295,b=N+(P<<17&4294967295|P>>>15),P=x+(_^b&(N^_))+R[7]+4249261313&4294967295,x=b+(P<<22&4294967295|P>>>10),P=_+(N^x&(b^N))+R[8]+1770035416&4294967295,_=x+(P<<7&4294967295|P>>>25),P=N+(b^_&(x^b))+R[9]+2336552879&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(x^N&(_^x))+R[10]+4294925233&4294967295,b=N+(P<<17&4294967295|P>>>15),P=x+(_^b&(N^_))+R[11]+2304563134&4294967295,x=b+(P<<22&4294967295|P>>>10),P=_+(N^x&(b^N))+R[12]+1804603682&4294967295,_=x+(P<<7&4294967295|P>>>25),P=N+(b^_&(x^b))+R[13]+4254626195&4294967295,N=_+(P<<12&4294967295|P>>>20),P=b+(x^N&(_^x))+R[14]+2792965006&4294967295,b=N+(P<<17&4294967295|P>>>15),P=x+(_^b&(N^_))+R[15]+1236535329&4294967295,x=b+(P<<22&4294967295|P>>>10),P=_+(b^N&(x^b))+R[1]+4129170786&4294967295,_=x+(P<<5&4294967295|P>>>27),P=N+(x^b&(_^x))+R[6]+3225465664&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^x&(N^_))+R[11]+643717713&4294967295,b=N+(P<<14&4294967295|P>>>18),P=x+(N^_&(b^N))+R[0]+3921069994&4294967295,x=b+(P<<20&4294967295|P>>>12),P=_+(b^N&(x^b))+R[5]+3593408605&4294967295,_=x+(P<<5&4294967295|P>>>27),P=N+(x^b&(_^x))+R[10]+38016083&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^x&(N^_))+R[15]+3634488961&4294967295,b=N+(P<<14&4294967295|P>>>18),P=x+(N^_&(b^N))+R[4]+3889429448&4294967295,x=b+(P<<20&4294967295|P>>>12),P=_+(b^N&(x^b))+R[9]+568446438&4294967295,_=x+(P<<5&4294967295|P>>>27),P=N+(x^b&(_^x))+R[14]+3275163606&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^x&(N^_))+R[3]+4107603335&4294967295,b=N+(P<<14&4294967295|P>>>18),P=x+(N^_&(b^N))+R[8]+1163531501&4294967295,x=b+(P<<20&4294967295|P>>>12),P=_+(b^N&(x^b))+R[13]+2850285829&4294967295,_=x+(P<<5&4294967295|P>>>27),P=N+(x^b&(_^x))+R[2]+4243563512&4294967295,N=_+(P<<9&4294967295|P>>>23),P=b+(_^x&(N^_))+R[7]+1735328473&4294967295,b=N+(P<<14&4294967295|P>>>18),P=x+(N^_&(b^N))+R[12]+2368359562&4294967295,x=b+(P<<20&4294967295|P>>>12),P=_+(x^b^N)+R[5]+4294588738&4294967295,_=x+(P<<4&4294967295|P>>>28),P=N+(_^x^b)+R[8]+2272392833&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^x)+R[11]+1839030562&4294967295,b=N+(P<<16&4294967295|P>>>16),P=x+(b^N^_)+R[14]+4259657740&4294967295,x=b+(P<<23&4294967295|P>>>9),P=_+(x^b^N)+R[1]+2763975236&4294967295,_=x+(P<<4&4294967295|P>>>28),P=N+(_^x^b)+R[4]+1272893353&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^x)+R[7]+4139469664&4294967295,b=N+(P<<16&4294967295|P>>>16),P=x+(b^N^_)+R[10]+3200236656&4294967295,x=b+(P<<23&4294967295|P>>>9),P=_+(x^b^N)+R[13]+681279174&4294967295,_=x+(P<<4&4294967295|P>>>28),P=N+(_^x^b)+R[0]+3936430074&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^x)+R[3]+3572445317&4294967295,b=N+(P<<16&4294967295|P>>>16),P=x+(b^N^_)+R[6]+76029189&4294967295,x=b+(P<<23&4294967295|P>>>9),P=_+(x^b^N)+R[9]+3654602809&4294967295,_=x+(P<<4&4294967295|P>>>28),P=N+(_^x^b)+R[12]+3873151461&4294967295,N=_+(P<<11&4294967295|P>>>21),P=b+(N^_^x)+R[15]+530742520&4294967295,b=N+(P<<16&4294967295|P>>>16),P=x+(b^N^_)+R[2]+3299628645&4294967295,x=b+(P<<23&4294967295|P>>>9),P=_+(b^(x|~N))+R[0]+4096336452&4294967295,_=x+(P<<6&4294967295|P>>>26),P=N+(x^(_|~b))+R[7]+1126891415&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~x))+R[14]+2878612391&4294967295,b=N+(P<<15&4294967295|P>>>17),P=x+(N^(b|~_))+R[5]+4237533241&4294967295,x=b+(P<<21&4294967295|P>>>11),P=_+(b^(x|~N))+R[12]+1700485571&4294967295,_=x+(P<<6&4294967295|P>>>26),P=N+(x^(_|~b))+R[3]+2399980690&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~x))+R[10]+4293915773&4294967295,b=N+(P<<15&4294967295|P>>>17),P=x+(N^(b|~_))+R[1]+2240044497&4294967295,x=b+(P<<21&4294967295|P>>>11),P=_+(b^(x|~N))+R[8]+1873313359&4294967295,_=x+(P<<6&4294967295|P>>>26),P=N+(x^(_|~b))+R[15]+4264355552&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~x))+R[6]+2734768916&4294967295,b=N+(P<<15&4294967295|P>>>17),P=x+(N^(b|~_))+R[13]+1309151649&4294967295,x=b+(P<<21&4294967295|P>>>11),P=_+(b^(x|~N))+R[4]+4149444226&4294967295,_=x+(P<<6&4294967295|P>>>26),P=N+(x^(_|~b))+R[11]+3174756917&4294967295,N=_+(P<<10&4294967295|P>>>22),P=b+(_^(N|~x))+R[2]+718787259&4294967295,b=N+(P<<15&4294967295|P>>>17),P=x+(N^(b|~_))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var x=_-this.blockSize,R=this.B,b=this.h,N=0;N<_;){if(b==0)for(;N<=x;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<_;)if(R[b++]=I.charCodeAt(N++),b==this.blockSize){i(this,R),b=0;break}}else for(;N<_;)if(R[b++]=I[N++],b==this.blockSize){i(this,R),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var x=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=x&255,x/=256;for(this.u(I),I=Array(16),_=x=0;4>_;++_)for(var R=0;32>R;R+=8)I[x++]=this.g[_]>>>R&255;return I};function s(I,_){var x=a;return Object.prototype.hasOwnProperty.call(x,I)?x[I]:x[I]=_(I)}function o(I,_){this.h=_;for(var x=[],R=!0,b=I.length-1;0<=b;b--){var N=I[b]|0;R&&N==_||(x[b]=N,R=!1)}this.g=x}var a={};function u(I){return-128<=I&&128>I?s(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return A(c(-I));for(var _=[],x=1,R=0;I>=x;R++)_[R]=I/x|0,x*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return A(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(_,8)),R=f,b=0;b<I.length;b+=8){var N=Math.min(8,I.length-b),P=parseInt(I.substring(b,b+N),_);8>N?(N=c(Math.pow(_,N)),R=R.j(N).add(c(P))):(R=R.j(x),R=R.add(c(P)))}return R}var f=u(0),g=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-A(this).m();for(var I=0,_=1,x=0;x<this.g.length;x++){var R=this.i(x);I+=(0<=R?R:4294967296+R)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(C(this))return"-"+A(this).toString(I);for(var _=c(Math.pow(I,6)),x=this,R="";;){var b=k(x,_).g;x=w(x,b.j(_));var N=((0<x.g.length?x.g[0]:x.h)>>>0).toString(I);if(x=b,S(x))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function C(I){return I.h==-1}t.l=function(I){return I=w(this,I),C(I)?-1:S(I)?0:1};function A(I){for(var _=I.g.length,x=[],R=0;R<_;R++)x[R]=~I.g[R];return new o(x,~I.h).add(g)}t.abs=function(){return C(this)?A(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),x=[],R=0,b=0;b<=_;b++){var N=R+(this.i(b)&65535)+(I.i(b)&65535),P=(N>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);R=P>>>16,N&=65535,P&=65535,x[b]=P<<16|N}return new o(x,x[x.length-1]&-2147483648?-1:0)};function w(I,_){return I.add(A(_))}t.j=function(I){if(S(this)||S(I))return f;if(C(this))return C(I)?A(this).j(A(I)):A(A(this).j(I));if(C(I))return A(this.j(A(I)));if(0>this.l(y)&&0>I.l(y))return c(this.m()*I.m());for(var _=this.g.length+I.g.length,x=[],R=0;R<2*_;R++)x[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<I.g.length;b++){var N=this.i(R)>>>16,P=this.i(R)&65535,St=I.i(b)>>>16,Un=I.i(b)&65535;x[2*R+2*b]+=P*Un,v(x,2*R+2*b),x[2*R+2*b+1]+=N*Un,v(x,2*R+2*b+1),x[2*R+2*b+1]+=P*St,v(x,2*R+2*b+1),x[2*R+2*b+2]+=N*St,v(x,2*R+2*b+2)}for(R=0;R<_;R++)x[R]=x[2*R+1]<<16|x[2*R];for(R=_;R<2*_;R++)x[R]=0;return new o(x,0)};function v(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function E(I,_){this.g=I,this.h=_}function k(I,_){if(S(_))throw Error("division by zero");if(S(I))return new E(f,f);if(C(I))return _=k(A(I),_),new E(A(_.g),A(_.h));if(C(_))return _=k(I,A(_)),new E(A(_.g),_.h);if(30<I.g.length){if(C(I)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var x=g,R=_;0>=R.l(I);)x=D(x),R=D(R);var b=L(x,1),N=L(R,1);for(R=L(R,2),x=L(x,2);!S(R);){var P=N.add(R);0>=P.l(I)&&(b=b.add(x),N=P),R=L(R,1),x=L(x,1)}return _=w(I,b.j(_)),new E(b,_)}for(b=f;0<=I.l(_);){for(x=Math.max(1,Math.floor(I.m()/_.m())),R=Math.ceil(Math.log(x)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(x),P=N.j(_);C(P)||0<P.l(I);)x-=R,N=c(x),P=N.j(_);S(N)&&(N=g),b=b.add(N),I=w(I,P)}return new E(b,I)}t.A=function(I){return k(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),x=[],R=0;R<_;R++)x[R]=this.i(R)&I.i(R);return new o(x,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),x=[],R=0;R<_;R++)x[R]=this.i(R)|I.i(R);return new o(x,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),x=[],R=0;R<_;R++)x[R]=this.i(R)^I.i(R);return new o(x,this.h^I.h)};function D(I){for(var _=I.g.length+1,x=[],R=0;R<_;R++)x[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(x,I.h)}function L(I,_){var x=_>>5;_%=32;for(var R=I.g.length-x,b=[],N=0;N<R;N++)b[N]=0<_?I.i(N+x)>>>_|I.i(N+x+1)<<32-_:I.i(N+x);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ST=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Oi=o}).apply(typeof wv<"u"?wv:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xT,CT,Qo,AT,Nu,Rp,RT,kT,PT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var T=0;T<l.length-1;T++){var O=l[T];if(!(O in m))break e;m=m[O]}l=l[l.length-1],T=m[l],h=h(T),h!=T&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,T=!1,O={next:function(){if(!T&&m<l.length){var j=m++;return{value:h(j,l[j]),done:!1}}return T=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,T),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function g(l,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function y(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),l.apply(this,T)}}function S(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(T,O,j){for(var U=Array(arguments.length-2),de=2;de<arguments.length;de++)U[de-2]=arguments[de];return h.prototype[O].apply(T,U)}}function C(l){const h=l.length;if(0<h){const m=Array(h);for(let T=0;T<h;T++)m[T]=l[T];return m}return[]}function A(l,h){for(let m=1;m<arguments.length;m++){const T=arguments[m];if(u(T)){const O=l.length||0,j=T.length||0;l.length=O+j;for(let U=0;U<j;U++)l[O+U]=T[U]}else l.push(T)}}class w{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function E(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function k(l){return k[" "](l),l}k[" "]=function(){};var D=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function L(l,h,m){for(const T in l)h.call(m,l[T],T,l)}function I(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function _(l){const h={};for(const m in l)h[m]=l[m];return h}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let m,T;for(let O=1;O<arguments.length;O++){T=arguments[O];for(m in T)l[m]=T[m];for(let j=0;j<x.length;j++)m=x[j],Object.prototype.hasOwnProperty.call(T,m)&&(l[m]=T[m])}}function b(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=G;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class St{constructor(){this.h=this.g=null}add(h,m){const T=Un.get();T.set(h,m),this.h?this.h.next=T:this.g=T,this.h=T}}var Un=new w(()=>new hi,l=>l.reset());class hi{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,$=!1,G=new St,Q=()=>{const l=a.Promise.resolve(void 0);Ot=()=>{l.then(ue)}};var ue=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(m){N(m)}var h=Un;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}$=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function xt(l,h){if(we.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,T=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(D){e:{try{k(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:gt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&xt.aa.h.call(this)}}S(xt,we);var gt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),fi=0;function $n(l,h,m,T,O){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!T,this.ha=O,this.key=++fi,this.da=this.fa=!1}function gr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Bn(l){this.src=l,this.g={},this.h=0}Bn.prototype.add=function(l,h,m,T,O){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var U=qd(l,h,T,O);return-1<U?(h=l[U],m||(h.fa=!1)):(h=new $n(h,this.src,j,!!T,O),h.fa=m,l.push(h)),h};function Kt(l,h){var m=h.type;if(m in l.g){var T=l.g[m],O=Array.prototype.indexOf.call(T,h,void 0),j;(j=0<=O)&&Array.prototype.splice.call(T,O,1),j&&(gr(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function qd(l,h,m,T){for(var O=0;O<l.length;++O){var j=l[O];if(!j.da&&j.listener==h&&j.capture==!!m&&j.ha==T)return O}return-1}var Hd="closure_lm_"+(1e6*Math.random()|0),Gd={};function u1(l,h,m,T,O){if(Array.isArray(h)){for(var j=0;j<h.length;j++)u1(l,h[j],m,T,O);return null}return m=h1(m),l&&l[Ct]?l.K(h,m,c(T)?!!T.capture:!!T,O):xS(l,h,m,!1,T,O)}function xS(l,h,m,T,O,j){if(!h)throw Error("Invalid event type");var U=c(O)?!!O.capture:!!O,de=Qd(l);if(de||(l[Hd]=de=new Bn(l)),m=de.add(h,m,T,U,j),m.proxy)return m;if(T=CS(),m.proxy=T,T.src=l,T.listener=m,l.addEventListener)Dt||(O=U),O===void 0&&(O=!1),l.addEventListener(h.toString(),T,O);else if(l.attachEvent)l.attachEvent(d1(h.toString()),T);else if(l.addListener&&l.removeListener)l.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function CS(){function l(m){return h.call(l.src,l.listener,m)}const h=AS;return l}function c1(l,h,m,T,O){if(Array.isArray(h))for(var j=0;j<h.length;j++)c1(l,h[j],m,T,O);else T=c(T)?!!T.capture:!!T,m=h1(m),l&&l[Ct]?(l=l.i,h=String(h).toString(),h in l.g&&(j=l.g[h],m=qd(j,m,T,O),-1<m&&(gr(j[m]),Array.prototype.splice.call(j,m,1),j.length==0&&(delete l.g[h],l.h--)))):l&&(l=Qd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=qd(h,m,T,O)),(m=-1<l?h[l]:null)&&Kd(m))}function Kd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Ct])Kt(h.i,l);else{var m=l.type,T=l.proxy;h.removeEventListener?h.removeEventListener(m,T,l.capture):h.detachEvent?h.detachEvent(d1(m),T):h.addListener&&h.removeListener&&h.removeListener(T),(m=Qd(h))?(Kt(m,l),m.h==0&&(m.src=null,h[Hd]=null)):gr(l)}}}function d1(l){return l in Gd?Gd[l]:Gd[l]="on"+l}function AS(l,h){if(l.da)l=!0;else{h=new xt(h,this);var m=l.listener,T=l.ha||l.src;l.fa&&Kd(l),l=m.call(T,h)}return l}function Qd(l){return l=l[Hd],l instanceof Bn?l:null}var Yd="__closure_events_fn_"+(1e9*Math.random()>>>0);function h1(l){return typeof l=="function"?l:(l[Yd]||(l[Yd]=function(h){return l.handleEvent(h)}),l[Yd])}function nt(){te.call(this),this.i=new Bn(this),this.M=this,this.F=null}S(nt,te),nt.prototype[Ct]=!0,nt.prototype.removeEventListener=function(l,h,m,T){c1(this,l,h,m,T)};function yt(l,h){var m,T=l.F;if(T)for(m=[];T;T=T.F)m.push(T);if(l=l.M,T=h.type||h,typeof h=="string")h=new we(h,l);else if(h instanceof we)h.target=h.target||l;else{var O=h;h=new we(T,l),R(h,O)}if(O=!0,m)for(var j=m.length-1;0<=j;j--){var U=h.g=m[j];O=yl(U,T,!0,h)&&O}if(U=h.g=l,O=yl(U,T,!0,h)&&O,O=yl(U,T,!1,h)&&O,m)for(j=0;j<m.length;j++)U=h.g=m[j],O=yl(U,T,!1,h)&&O}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],T=0;T<m.length;T++)gr(m[T]);delete l.g[h],l.h--}}this.F=null},nt.prototype.K=function(l,h,m,T){return this.i.add(String(l),h,!1,m,T)},nt.prototype.L=function(l,h,m,T){return this.i.add(String(l),h,!0,m,T)};function yl(l,h,m,T){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,j=0;j<h.length;++j){var U=h[j];if(U&&!U.da&&U.capture==m){var de=U.listener,He=U.ha||U.src;U.fa&&Kt(l.i,U),O=de.call(He,T)!==!1&&O}}return O&&!T.defaultPrevented}function f1(l,h,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function p1(l){l.g=f1(()=>{l.g=null,l.i&&(l.i=!1,p1(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class RS extends te{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:p1(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(l){te.call(this),this.h=l,this.g={}}S(vo,te);var m1=[];function g1(l){L(l.g,function(h,m){this.g.hasOwnProperty(m)&&Kd(h)},l),l.g={}}vo.prototype.N=function(){vo.aa.N.call(this),g1(this)},vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xd=a.JSON.stringify,kS=a.JSON.parse,PS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Jd(){}Jd.prototype.h=null;function y1(l){return l.h||(l.h=l.i())}function v1(){}var _o={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zd(){we.call(this,"d")}S(Zd,we);function eh(){we.call(this,"c")}S(eh,we);var pi={},_1=null;function vl(){return _1=_1||new nt}pi.La="serverreachability";function w1(l){we.call(this,pi.La,l)}S(w1,we);function wo(l){const h=vl();yt(h,new w1(h))}pi.STAT_EVENT="statevent";function E1(l,h){we.call(this,pi.STAT_EVENT,l),this.stat=h}S(E1,we);function vt(l){const h=vl();yt(h,new E1(h,l))}pi.Ma="timingevent";function T1(l,h){we.call(this,pi.Ma,l),this.size=h}S(T1,we);function Eo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function To(){this.g=!0}To.prototype.xa=function(){this.g=!1};function bS(l,h,m,T,O,j){l.info(function(){if(l.g)if(j)for(var U="",de=j.split("&"),He=0;He<de.length;He++){var oe=de[He].split("=");if(1<oe.length){var rt=oe[0];oe=oe[1];var it=rt.split("_");U=2<=it.length&&it[1]=="type"?U+(rt+"="+oe+"&"):U+(rt+"=redacted&")}}else U=null;else U=j;return"XMLHTTP REQ ("+T+") [attempt "+O+"]: "+h+`
`+m+`
`+U})}function NS(l,h,m,T,O,j,U){l.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+O+"]: "+h+`
`+m+`
`+j+" "+U})}function rs(l,h,m,T){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+DS(l,m)+(T?" "+T:"")})}function OS(l,h){l.info(function(){return"TIMEOUT: "+h})}To.prototype.info=function(){};function DS(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var T=m[l];if(!(2>T.length)){var O=T[1];if(Array.isArray(O)&&!(1>O.length)){var j=O[0];if(j!="noop"&&j!="stop"&&j!="close")for(var U=1;U<O.length;U++)O[U]=""}}}}return Xd(m)}catch{return h}}var _l={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},I1={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},th;function wl(){}S(wl,Jd),wl.prototype.g=function(){return new XMLHttpRequest},wl.prototype.i=function(){return{}},th=new wl;function yr(l,h,m,T){this.j=l,this.i=h,this.l=m,this.R=T||1,this.U=new vo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new S1}function S1(){this.i=null,this.g="",this.h=!1}var x1={},nh={};function rh(l,h,m){l.L=1,l.v=Sl(Wn(h)),l.m=m,l.P=!0,C1(l,null)}function C1(l,h){l.F=Date.now(),El(l),l.A=Wn(l.v);var m=l.A,T=l.R;Array.isArray(T)||(T=[String(T)]),z1(m.i,"t",T),l.C=0,m=l.j.J,l.h=new S1,l.g=i0(l.j,m?h:null,!l.m),0<l.O&&(l.M=new RS(g(l.Y,l,l.g),l.O)),h=l.U,m=l.g,T=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(m1[0]=O.toString()),O=m1);for(var j=0;j<O.length;j++){var U=u1(m,O[j],T||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),wo(),bS(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const h=this.M;h&&qn(l)==3?h.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const it=qn(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||G1(this.g)))){this.J||it!=4||h==7||(h==8||0>=os?wo(3):wo(2)),ih(this);var m=this.g.Z();this.X=m;t:if(A1(this)){var T=G1(this.g);l="";var O=T.length,j=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mi(this),Io(this);var U="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(T[h],{stream:!(j&&h==O-1)});T.length=0,this.h.g+=l,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=m==200,NS(this.i,this.u,this.A,this.l,this.R,it,m),this.o){if(this.T&&!this.K){t:{if(this.g){var de,He=this.g;if((de=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(de)){var oe=de;break t}}oe=null}if(m=oe)rs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sh(this,m);else{this.o=!1,this.s=3,vt(12),mi(this),Io(this);break e}}if(this.P){m=!0;let sn;for(;!this.J&&this.C<U.length;)if(sn=LS(this,U),sn==nh){it==4&&(this.s=4,vt(14),m=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==x1){this.s=4,vt(15),rs(this.i,this.l,U,"[Invalid Chunk]"),m=!1;break}else rs(this.i,this.l,sn,null),sh(this,sn);if(A1(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||U.length!=0||this.h.h||(this.s=1,vt(16),m=!1),this.o=this.o&&m,!m)rs(this.i,this.l,U,"[Invalid Chunked Response]"),mi(this),Io(this);else if(0<U.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),dh(rt),rt.M=!0,vt(11))}}else rs(this.i,this.l,U,null),sh(this,U);it==4&&mi(this),this.o&&!this.J&&(it==4?e0(this.j,this):(this.o=!1,El(this)))}else JS(this.g),m==400&&0<U.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),mi(this),Io(this)}}}catch{}finally{}};function A1(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function LS(l,h){var m=l.C,T=h.indexOf(`
`,m);return T==-1?nh:(m=Number(h.substring(m,T)),isNaN(m)?x1:(T+=1,T+m>h.length?nh:(h=h.slice(T,T+m),l.C=T+m,h)))}yr.prototype.cancel=function(){this.J=!0,mi(this)};function El(l){l.S=Date.now()+l.I,R1(l,l.I)}function R1(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Eo(g(l.ba,l),h)}function ih(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(OS(this.i,this.A),this.L!=2&&(wo(),vt(17)),mi(this),this.s=2,Io(this)):R1(this,this.S-l)};function Io(l){l.j.G==0||l.J||e0(l.j,l)}function mi(l){ih(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,g1(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function sh(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||oh(m.h,l))){if(!l.K&&oh(m.h,l)&&m.G==3){try{var T=m.Da.g.parse(h)}catch{T=null}if(Array.isArray(T)&&T.length==3){var O=T;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)kl(m),Al(m);else break e;ch(m),vt(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Eo(g(m.Za,m),6e3));if(1>=b1(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else yi(m,11)}else if((l.K||m.g==l)&&kl(m),!v(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let oe=O[h];if(m.T=oe[0],oe=oe[1],m.G==2)if(oe[0]=="c"){m.K=oe[1],m.ia=oe[2];const rt=oe[3];rt!=null&&(m.la=rt,m.j.info("VER="+m.la));const it=oe[4];it!=null&&(m.Aa=it,m.j.info("SVER="+m.Aa));const os=oe[5];os!=null&&typeof os=="number"&&0<os&&(T=1.5*os,m.L=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const sn=l.g;if(sn){const bl=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bl){var j=T.h;j.g||bl.indexOf("spdy")==-1&&bl.indexOf("quic")==-1&&bl.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(ah(j,j.h),j.h=null))}if(T.D){const hh=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;hh&&(T.ya=hh,me(T.I,T.D,hh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),T=m;var U=l;if(T.qa=r0(T,T.J?T.ia:null,T.W),U.K){N1(T.h,U);var de=U,He=T.L;He&&(de.I=He),de.B&&(ih(de),El(de)),T.g=U}else J1(T);0<m.i.length&&Rl(m)}else oe[0]!="stop"&&oe[0]!="close"||yi(m,7);else m.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?yi(m,7):uh(m):oe[0]!="noop"&&m.l&&m.l.ta(oe),m.v=0)}}wo(4)}catch{}}var MS=class{constructor(l,h){this.g=l,this.map=h}};function k1(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function P1(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function b1(l){return l.h?1:l.g?l.g.size:0}function oh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ah(l,h){l.g?l.g.add(h):l.h=h}function N1(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}k1.prototype.cancel=function(){if(this.i=O1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function O1(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return C(l.i)}function jS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,T=0;T<m;T++)h.push(l[T]);return h}h=[],m=0;for(T in l)h[m++]=l[T];return h}function VS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const T in l)h[m++]=T;return h}}}function D1(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=VS(l),T=jS(l),O=T.length,j=0;j<O;j++)h.call(void 0,T[j],m&&m[j],l)}var L1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FS(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var T=l[m].indexOf("="),O=null;if(0<=T){var j=l[m].substring(0,T);O=l[m].substring(T+1)}else j=l[m];h(j,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function gi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof gi){this.h=l.h,Tl(this,l.j),this.o=l.o,this.g=l.g,Il(this,l.s),this.l=l.l;var h=l.i,m=new Co;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),M1(this,m),this.m=l.m}else l&&(h=String(l).match(L1))?(this.h=!1,Tl(this,h[1]||"",!0),this.o=So(h[2]||""),this.g=So(h[3]||"",!0),Il(this,h[4]),this.l=So(h[5]||"",!0),M1(this,h[6]||"",!0),this.m=So(h[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}gi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(xo(h,j1,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(xo(h,j1,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xo(m,m.charAt(0)=="/"?$S:US,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xo(m,WS)),l.join("")};function Wn(l){return new gi(l)}function Tl(l,h,m){l.j=m?So(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Il(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function M1(l,h,m){h instanceof Co?(l.i=h,qS(l.i,l.h)):(m||(h=xo(h,BS)),l.i=new Co(h,l.h))}function me(l,h,m){l.i.set(h,m)}function Sl(l){return me(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function So(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,zS),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function zS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var j1=/[#\/\?@]/g,US=/[#\?:]/g,$S=/[#\?]/g,BS=/[#\?@]/g,WS=/#/g;function Co(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&FS(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Co.prototype,t.add=function(l,h){vr(this),this.i=null,l=is(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function V1(l,h){vr(l),h=is(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function F1(l,h){return vr(l),h=is(l,h),l.g.has(h)}t.forEach=function(l,h){vr(this),this.g.forEach(function(m,T){m.forEach(function(O){l.call(h,O,T,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let T=0;T<h.length;T++){const O=l[T];for(let j=0;j<O.length;j++)m.push(h[T])}return m},t.V=function(l){vr(this);let h=[];if(typeof l=="string")F1(this,l)&&(h=h.concat(this.g.get(is(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return vr(this),this.i=null,l=is(this,l),F1(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function z1(l,h,m){V1(l,h),0<m.length&&(l.i=null,l.g.set(is(l,h),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var T=h[m];const j=encodeURIComponent(String(T)),U=this.V(T);for(T=0;T<U.length;T++){var O=j;U[T]!==""&&(O+="="+encodeURIComponent(String(U[T]))),l.push(O)}}return this.i=l.join("&")};function is(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function qS(l,h){h&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(m,T){var O=T.toLowerCase();T!=O&&(V1(this,T),z1(this,O,m))},l)),l.j=h}function HS(l,h){const m=new To;if(a.Image){const T=new Image;T.onload=y(_r,m,"TestLoadImage: loaded",!0,h,T),T.onerror=y(_r,m,"TestLoadImage: error",!1,h,T),T.onabort=y(_r,m,"TestLoadImage: abort",!1,h,T),T.ontimeout=y(_r,m,"TestLoadImage: timeout",!1,h,T),a.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=l}else h(!1)}function GS(l,h){const m=new To,T=new AbortController,O=setTimeout(()=>{T.abort(),_r(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:T.signal}).then(j=>{clearTimeout(O),j.ok?_r(m,"TestPingServer: ok",!0,h):_r(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),_r(m,"TestPingServer: error",!1,h)})}function _r(l,h,m,T,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),T(m)}catch{}}function KS(){this.g=new PS}function QS(l,h,m){const T=m||"";try{D1(l,function(O,j){let U=O;c(O)&&(U=Xd(O)),h.push(T+j+"="+encodeURIComponent(U))})}catch(O){throw h.push(T+"type="+encodeURIComponent("_badmap")),O}}function Ao(l){this.l=l.Ub||null,this.j=l.eb||!1}S(Ao,Jd),Ao.prototype.g=function(){return new xl(this.l,this.j)},Ao.prototype.i=function(l){return function(){return l}}({});function xl(l,h){nt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(xl,nt),t=xl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ko(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;U1(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function U1(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ro(this):ko(this),this.readyState==3&&U1(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ro(this))},t.Qa=function(l){this.g&&(this.response=l,Ro(this))},t.ga=function(){this.g&&Ro(this)};function Ro(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ko(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function ko(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function $1(l){let h="";return L(l,function(m,T){h+=T,h+=":",h+=m,h+=`\r
`}),h}function lh(l,h,m){e:{for(T in m){var T=!1;break e}T=!0}T||(m=$1(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):me(l,h,m))}function Ae(l){nt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ae,nt);var YS=/^https?$/i,XS=["POST","PUT"];t=Ae.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():th.g(),this.v=this.o?y1(this.o):y1(th),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(j){B1(this,j);return}if(l=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var O in T)m.set(O,T[O]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const j of T.keys())m.set(j,T.get(j));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(XS,h,void 0))||T||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,U]of m)this.g.setRequestHeader(j,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{H1(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){B1(this,j)}};function B1(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,W1(l),Cl(l)}function W1(l){l.A||(l.A=!0,yt(l,"complete"),yt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,yt(this,"complete"),yt(this,"abort"),Cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?q1(this):this.bb())},t.bb=function(){q1(this)};function q1(l){if(l.h&&typeof o<"u"&&(!l.v[1]||qn(l)!=4||l.Z()!=2)){if(l.u&&qn(l)==4)f1(l.Ea,0,l);else if(yt(l,"readystatechange"),qn(l)==4){l.h=!1;try{const U=l.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var T;if(T=U===0){var O=String(l.D).match(L1)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),T=!YS.test(O?O.toLowerCase():"")}m=T}if(m)yt(l,"complete"),yt(l,"success");else{l.m=6;try{var j=2<qn(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",W1(l)}}finally{Cl(l)}}}}function Cl(l,h){if(l.g){H1(l);const m=l.g,T=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||yt(l,"ready");try{m.onreadystatechange=T}catch{}}}function H1(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),kS(h)}};function G1(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function JS(l){const h={};l=(l.g&&2<=qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<l.length;T++){if(v(l[T]))continue;var m=b(l[T]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=h[O]||[];h[O]=j,j.push(m)}I(h,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Po(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function K1(l){this.Aa=0,this.i=[],this.j=new To,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Po("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Po("baseRetryDelayMs",5e3,l),this.cb=Po("retryDelaySeedMs",1e4,l),this.Wa=Po("forwardChannelMaxRetries",2,l),this.wa=Po("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new k1(l&&l.concurrentRequestLimit),this.Da=new KS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=K1.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,T){vt(0),this.W=l,this.H=h||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.I=r0(this,null,this.W),Rl(this)};function uh(l){if(Q1(l),l.G==3){var h=l.U++,m=Wn(l.I);if(me(m,"SID",l.K),me(m,"RID",h),me(m,"TYPE","terminate"),bo(l,m),h=new yr(l,l.j,h),h.L=2,h.v=Sl(Wn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=i0(h.j,null),h.g.ea(h.v)),h.F=Date.now(),El(h)}n0(l)}function Al(l){l.g&&(dh(l),l.g.cancel(),l.g=null)}function Q1(l){Al(l),l.u&&(a.clearTimeout(l.u),l.u=null),kl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Rl(l){if(!P1(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ot||Q(),$||(Ot(),$=!0),G.add(h,l),l.B=0}}function ZS(l,h){return b1(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Eo(g(l.Ga,l,h),t0(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new yr(this,this.j,l);let j=this.o;if(this.S&&(j?(j=_(j),R(j,this.S)):j=this.S),this.m!==null||this.O||(O.H=j,j=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(h+=T,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=X1(this,O,h),m=Wn(this.I),me(m,"RID",l),me(m,"CVER",22),this.D&&me(m,"X-HTTP-Session-Id",this.D),bo(this,m),j&&(this.O?h="headers="+encodeURIComponent(String($1(j)))+"&"+h:this.m&&lh(m,this.m,j)),ah(this.h,O),this.Ua&&me(m,"TYPE","init"),this.P?(me(m,"$req",h),me(m,"SID","null"),O.T=!0,rh(O,m,null)):rh(O,m,h),this.G=2}}else this.G==3&&(l?Y1(this,l):this.i.length==0||P1(this.h)||Y1(this))};function Y1(l,h){var m;h?m=h.l:m=l.U++;const T=Wn(l.I);me(T,"SID",l.K),me(T,"RID",m),me(T,"AID",l.T),bo(l,T),l.m&&l.o&&lh(T,l.m,l.o),m=new yr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=X1(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ah(l.h,m),rh(m,T,h)}function bo(l,h){l.H&&L(l.H,function(m,T){me(h,T,m)}),l.l&&D1({},function(m,T){me(h,T,m)})}function X1(l,h,m){m=Math.min(l.i.length,m);var T=l.l?g(l.l.Na,l.l,l):null;e:{var O=l.i;let j=-1;for(;;){const U=["count="+m];j==-1?0<m?(j=O[0].g,U.push("ofs="+j)):j=0:U.push("ofs="+j);let de=!0;for(let He=0;He<m;He++){let oe=O[He].g;const rt=O[He].map;if(oe-=j,0>oe)j=Math.max(0,O[He].g-100),de=!1;else try{QS(rt,U,"req"+oe+"_")}catch{T&&T(rt)}}if(de){T=U.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,T}function J1(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ot||Q(),$||(Ot(),$=!0),G.add(h,l),l.v=0}}function ch(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Eo(g(l.Fa,l),t0(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Z1(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Eo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Al(this),Z1(this))};function dh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Z1(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Wn(l.qa);me(h,"RID","rpc"),me(h,"SID",l.K),me(h,"AID",l.T),me(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&me(h,"TO",l.ja),me(h,"TYPE","xmlhttp"),bo(l,h),l.m&&l.o&&lh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Sl(Wn(h)),m.m=null,m.P=!0,C1(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Al(this),ch(this),vt(19))};function kl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function e0(l,h){var m=null;if(l.g==h){kl(l),dh(l),l.g=null;var T=2}else if(oh(l.h,h))m=h.D,N1(l.h,h),T=1;else return;if(l.G!=0){if(h.o)if(T==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;T=vl(),yt(T,new T1(T,m)),Rl(l)}else J1(l);else if(O=h.s,O==3||O==0&&0<h.X||!(T==1&&ZS(l,h)||T==2&&ch(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),O){case 1:yi(l,5);break;case 4:yi(l,10);break;case 3:yi(l,6);break;default:yi(l,2)}}}function t0(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function yi(l,h){if(l.j.info("Error code "+h),h==2){var m=g(l.fb,l),T=l.Xa;const O=!T;T=new gi(T||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tl(T,"https"),Sl(T),O?HS(T.toString(),m):GS(T.toString(),m)}else vt(2);l.G=0,l.l&&l.l.sa(h),n0(l),Q1(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function n0(l){if(l.G=0,l.ka=[],l.l){const h=O1(l.h);(h.length!=0||l.i.length!=0)&&(A(l.ka,h),A(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function r0(l,h,m){var T=m instanceof gi?Wn(m):new gi(m);if(T.g!="")h&&(T.g=h+"."+T.g),Il(T,T.s);else{var O=a.location;T=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var j=new gi(null);T&&Tl(j,T),h&&(j.g=h),O&&Il(j,O),m&&(j.l=m),T=j}return m=l.D,h=l.ya,m&&h&&me(T,m,h),me(T,"VER",l.la),bo(l,T),T}function i0(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ae(new Ao({eb:m})):new Ae(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function s0(){}t=s0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pl(){}Pl.prototype.g=function(l,h){return new Lt(l,h)};function Lt(l,h){nt.call(this),this.g=new K1(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ss(this)}S(Lt,nt),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){uh(this.g)},Lt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Xd(l),l=m);h.i.push(new MS(h.Ya++,l)),h.G==3&&Rl(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,uh(this.g),delete this.g,Lt.aa.N.call(this)};function o0(l){Zd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}S(o0,Zd);function a0(){eh.call(this),this.status=1}S(a0,eh);function ss(l){this.g=l}S(ss,s0),ss.prototype.ua=function(){yt(this.g,"a")},ss.prototype.ta=function(l){yt(this.g,new o0(l))},ss.prototype.sa=function(l){yt(this.g,new a0)},ss.prototype.ra=function(){yt(this.g,"b")},Pl.prototype.createWebChannel=Pl.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,PT=function(){return new Pl},kT=function(){return vl()},RT=pi,Rp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_l.NO_ERROR=0,_l.TIMEOUT=8,_l.HTTP_ERROR=6,Nu=_l,I1.COMPLETE="complete",AT=I1,v1.EventType=_o,_o.OPEN="a",_o.CLOSE="b",_o.ERROR="c",_o.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Qo=v1,CT=Ao,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,xT=Ae}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});const Ev="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Zm("@firebase/firestore");function zo(){return Bi.logLevel}function q(t,...e){if(Bi.logLevel<=re.DEBUG){const n=e.map(fg);Bi.debug(`Firestore (${fo}): ${t}`,...n)}}function hr(t,...e){if(Bi.logLevel<=re.ERROR){const n=e.map(fg);Bi.error(`Firestore (${fo}): ${t}`,...n)}}function Js(t,...e){if(Bi.logLevel<=re.WARN){const n=e.map(fg);Bi.warn(`Firestore (${fo}): ${t}`,...n)}}function fg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+t;throw hr(e),new Error(e)}function he(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Qk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Yk{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new bT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new ut(e)}}class Xk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Jk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Xk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new Zk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ve(0,0))}static max(){return new X(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Va{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const nP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Va{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return nP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function rP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new ti(i,H.empty(),e)}function iP(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(X.min(),H.empty(),-1)}static max(){return new ti(X.max(),H.empty(),-1)}}function sP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==oP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function lP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function dl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pg.oe=-1;function Id(t){return t==null}function Ac(t){return t===0&&1/t==-1/0}function uP(t){return typeof t=="number"&&Number.isInteger(t)&&!Ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Iv(this.data.getIterator())}getIteratorFrom(e){return new Iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new DT("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const cP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(he(!!t),typeof t=="string"){let e=0;const n=cP.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mg(t){const e=t.mapValue.fields.__previous_value__;return Sd(e)?mg(e):e}function Fa(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sd(t)?4:fP(t)?9007199254740991:hP(t)?10:11:Y()}function Mn(t,e){if(t===e)return!0;const n=qi(t);if(n!==qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),a=ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wi(i.bytesValue).isEqual(Wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),a=Ne(s.doubleValue);return o===a?Ac(o)===Ac(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Tv(o)!==Tv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Mn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function Ua(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=qi(t),r=qi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Sv(t.timestampValue,e.timestampValue);case 4:return Sv(Fa(t),Fa(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Wi(s),u=Wi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ae(a[c],u[c]);if(d!==0)return d}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(Ne(s.latitude),Ne(o.latitude));return a!==0?a:ae(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},g=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=ae(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:xv(y,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===tu.mapValue&&o===tu.mapValue)return 0;if(s===tu.mapValue)return 1;if(o===tu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const g=ae(u[f],d[f]);if(g!==0)return g;const y=eo(a[u[f]],c[d[f]]);if(y!==0)return y}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Sv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ni(t),r=ni(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function xv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=eo(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function to(t){return kp(t)}function kp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Rc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pp(t){return!!t&&"integerValue"in t}function gg(t){return!!t&&"arrayValue"in t}function Cv(t){return!!t&&"nullValue"in t}function Av(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ou(t){return!!t&&"mapValue"in t}function hP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return po(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ou(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ou(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ou(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){po(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(da(this.value))}}function LT(t){const e=[];return po(t.fields,(n,r)=>{const i=new Xe([n]);if(Ou(r)){const s=LT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new dt(e,0,X.min(),X.min(),X.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,X.min(),X.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,X.min(),X.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.position=e,this.inclusive=n}}function Rv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n="asc"){this.field=e,this.dir=n}}function pP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{}class je extends MT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gP(e,n,r):n==="array-contains"?new _P(e,r):n==="in"?new wP(e,r):n==="not-in"?new EP(e,r):n==="array-contains-any"?new TP(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yP(e,r):new vP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(eo(n,this.value)):n!==null&&qi(this.value)===qi(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends MT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new In(e,n)}matches(e){return jT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jT(t){return t.op==="and"}function VT(t){return mP(t)&&jT(t)}function mP(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function bp(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+to(t.value);if(VT(t))return t.filters.map(e=>bp(e)).join(",");{const e=t.filters.map(n=>bp(n)).join(",");return`${t.op}(${e})`}}function FT(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Mn(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&FT(o,i.filters[a]),!0):!1}(t,e):void Y()}function zT(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(zT).join(" ,")+"}"}(t):"Filter"}class gP extends je{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class yP extends je{constructor(e,n){super(e,"in",n),this.keys=UT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vP extends je{constructor(e,n){super(e,"not-in",n),this.keys=UT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class _P extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gg(n)&&Ua(n.arrayValue,this.value)}}class wP extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class EP extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class TP extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Pv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new IP(t,e,n,r,i,s,o)}function yg(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Id(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.ue=n}return e.ue}function vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!FT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kv(t.startAt,e.startAt)&&kv(t.endAt,e.endAt)}function Np(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function SP(t,e,n,r,i,s,o,a){return new es(t,e,n,r,i,s,o,a)}function _g(t){return new es(t)}function bv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wg(t){return t.collectionGroup!==null}function Ms(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new $a(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new $a(Xe.keyField(),r))}return e.ce}function Dn(t){const e=J(t);return e.le||(e.le=xP(e,Ms(t))),e.le}function xP(t,e){if(t.limitType==="F")return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $a(i.field,s)});const n=t.endAt?new no(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new no(t.startAt.position,t.startAt.inclusive):null;return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Op(t,e){const n=t.filters.concat([e]);return new es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kc(t,e,n){return new es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xd(t,e){return vg(Dn(t),Dn(e))&&t.limitType===e.limitType}function $T(t){return`${yg(Dn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>zT(i)).join(", ")}]`),Id(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>to(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>to(i)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function Cd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Rv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ms(r),i)||r.endAt&&!function(o,a,u){const c=Rv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ms(r),i))}(t,e)}function CP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function BT(t){return(e,n)=>{let r=!1;for(const i of Ms(t)){const s=AP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AP(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?eo(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Ce(H.comparator);function fr(){return RP}const WT=new Ce(H.comparator);function Yo(...t){let e=WT;for(const n of t)e=e.insert(n.key,n);return e}function qT(t){let e=WT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ri(){return ha()}function HT(){return ha()}function ha(){return new mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const kP=new Ce(H.comparator),PP=new Ze(H.comparator);function ne(...t){let e=PP;for(const n of t)e=e.add(n);return e}const bP=new Ze(ae);function NP(){return bP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function GT(t){return{integerValue:""+t}}function OP(t,e){return uP(e)?GT(e):Eg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this._=void 0}}function DP(t,e,n){return t instanceof Pc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sd(s)&&(s=mg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ba?QT(t,e):t instanceof Wa?YT(t,e):function(i,s){const o=KT(i,s),a=Nv(o)+Nv(i.Pe);return Pp(o)&&Pp(i.Pe)?GT(a):Eg(i.serializer,a)}(t,e)}function LP(t,e,n){return t instanceof Ba?QT(t,e):t instanceof Wa?YT(t,e):n}function KT(t,e){return t instanceof bc?function(r){return Pp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pc extends Ad{}class Ba extends Ad{constructor(e){super(),this.elements=e}}function QT(t,e){const n=XT(e);for(const r of t.elements)n.some(i=>Mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends Ad{constructor(e){super(),this.elements=e}}function YT(t,e){let n=XT(e);for(const r of t.elements)n=n.filter(i=>!Mn(i,r));return{arrayValue:{values:n}}}class bc extends Ad{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Nv(t){return Ne(t.integerValue||t.doubleValue)}function XT(t){return gg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ba&&i instanceof Ba||r instanceof Wa&&i instanceof Wa?Zs(r.elements,i.elements,Mn):r instanceof bc&&i instanceof bc?Mn(r.Pe,i.Pe):r instanceof Pc&&i instanceof Pc}(t.transform,e.transform)}class jP{constructor(e,n){this.version=e,this.transformResults=n}}class ir{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ir}static exists(e){return new ir(void 0,e)}static updateTime(e){return new ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rd{}function JT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eI(t.key,ir.none()):new hl(t.key,t.data,ir.none());{const n=t.data,r=Xt.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ts(t.key,r,new fn(i.toArray()),ir.none())}}function VP(t,e,n){t instanceof hl?function(i,s,o){const a=i.value.clone(),u=Dv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(i,s,o){if(!Du(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ZT(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fa(t,e,n,r){return t instanceof hl?function(s,o,a,u){if(!Du(s.precondition,o))return a;const c=s.value.clone(),d=Lv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ts?function(s,o,a,u){if(!Du(s.precondition,o))return a;const c=Lv(s.fieldTransforms,u,o),d=o.data;return d.setAll(ZT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function FP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=KT(r.transform,i||null);s!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function Ov(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>MP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hl extends Rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ts extends Rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dv(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,LP(o,a,n[i]))}return r}function Lv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DP(s,o,e))}return r}class eI extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zP extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=JT(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>Ov(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>Ov(n,r))}}class Tg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return kP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function WP(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function tI(t){if(t===void 0)return hr("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Oi([4294967295,4294967295],0);function Mv(t){const e=qP().encode(t),n=new ST;return n.update(e),new Uint8Array(n.digest())}function jv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Oi([n,r],0),new Oi([i,s],0)]}class Ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xo(`Invalid padding: ${n}`);if(r<0)throw new Xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Oi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Oi.fromNumber(r)));return i.compare(HP)===1&&(i=new Oi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Mv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ig(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Mv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kd(X.min(),i,new Ce(ae),fr(),ne())}}class fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fl(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class nI{constructor(e,n){this.targetId=e,this.me=n}}class rI{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Vv{constructor(){this.fe=0,this.ge=zv(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new fl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GP{constructor(e){this.Le=e,this.Be=new Map,this.ke=fr(),this.qe=Fv(),this.Qe=new Ce(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Np(s))if(r===0){const o=new H(s.path);this.Ue(n,o,dt.newNoDocument(o,X.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Wi(r).toUint8Array()}catch(u){if(u instanceof DT)return Js("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ig(o,i,s)}catch(u){return Js(u instanceof Xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Np(a.target)){const u=new H(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,dt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kd(e,n,this.Qe,this.ke,r);return this.ke=fr(),this.qe=Fv(),this.Qe=new Ce(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Vv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Vv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Fv(){return new Ce(H.comparator)}function zv(){return new Ce(H.comparator)}const KP={asc:"ASCENDING",desc:"DESCENDING"},QP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YP={and:"AND",or:"OR"};class XP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dp(t,e){return t.useProto3Json||Id(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JP(t,e){return Nc(t,e.toTimestamp())}function Ln(t){return he(!!t),X.fromTimestamp(function(n){const r=ni(n);return new Ve(r.seconds,r.nanos)}(t))}function Sg(t,e){return Lp(t,e).canonicalString()}function Lp(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sI(t){const e=fe.fromString(t);return he(cI(e)),e}function Mp(t,e){return Sg(t.databaseId,e.path)}function Jh(t,e){const n=sI(e);if(n.get(1)!==t.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(aI(n))}function oI(t,e){return Sg(t.databaseId,e)}function ZP(t){const e=sI(t);return e.length===4?fe.emptyPath():aI(e)}function jp(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aI(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uv(t,e,n){return{name:Mp(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(he(d===void 0||typeof d=="string"),tt.fromBase64String(d||"")):(he(d===void 0||d instanceof Buffer||d instanceof Uint8Array),tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:tI(c.code);return new B(d,c.message||"")}(o);n=new rI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jh(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):X.min(),a=new Xt({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Lu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jh(t,r.document),s=r.readTime?Ln(r.readTime):X.min(),o=dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Lu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jh(t,r.document),s=r.removedTargetIds||[];n=new Lu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new BP(i,s),a=r.targetId;n=new nI(a,o)}}return n}function tb(t,e){let n;if(e instanceof hl)n={update:Uv(t,e.key,e.value)};else if(e instanceof eI)n={delete:Mp(t,e.key)};else if(e instanceof ts)n={update:Uv(t,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof zP))return Y();n={verify:Mp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof bc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(X.min())&&(o=Ln(s)),new jP(o,i.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[oI(t,e.path)]}}function ib(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oI(t,i);const s=function(c){if(c.length!==0)return uI(In.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:ds(g.field),direction:ab(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Dp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function sb(t){let e=ZP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const g=lI(f);return g instanceof In&&VT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(S){return new $a(hs(S.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,Id(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(f){const g=!!f.before,y=f.values||[];return new no(y,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,y=f.values||[];return new no(y,g)}(n.endAt)),SP(e,i,o,s,a,"F",u,c)}function ob(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hs(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hs(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return je.create(hs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>lI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function ab(t){return KP[t]}function lb(t){return QP[t]}function ub(t){return YP[t]}function ds(t){return{fieldPath:t.canonicalString()}}function hs(t){return Xe.fromServerFormat(t.fieldPath)}function uI(t){return t instanceof je?function(n){if(n.op==="=="){if(Av(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Av(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:lb(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>uI(i));return r.length===1?r[0]:{compositeFilter:{op:ub(n.op),filters:r}}}(t):Y()}function cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.ct=e}}function hb(t){const e=sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.un=new pb}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ti.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ro(0)}static kn(){return new ro(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.changes=new mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fa(r.mutation,i,fn.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Yo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ri();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fr();const o=ha(),a=function(){return ha()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ts)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),fa(d.mutation,c,d.mutation.getFieldMask(),Ve.now())):o.set(c.key,fn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new gb(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ha();let i=new Ce((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||fn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||ne()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=HT();d.forEach(g=>{if(!s.has(g)){const y=JT(n.get(g),r.get(g));y!==null&&f.set(g,y),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Ri());let a=-1,u=s;return o.next(c=>F.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:a,changes:qT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Yo();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(f,g){return new es(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,dt.newInvalidDocument(d)))});let a=Yo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&fa(d.mutation,c,fn.empty(),Ve.now()),Cd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:hb(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.overlays=new Ce(H.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ri();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Ri(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ri(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ri(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $P(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.Tr=new Ze($e.Er),this.dr=new Ze($e.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new $e(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new $e(n,e),i=new $e(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze($e.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ae);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new $e(new H(s),0);let a=new Ze(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new $e(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.Mr=e,this.docs=function(){return new Ce(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fr();const o=n.path,a=new H(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sP(iP(d),r)<=0||(i.has(d.key)||Cd(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ib(this)}getSize(e){return F.resolve(this.size)}}class Ib extends mb{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.persistence=e,this.Nr=new mo(n=>yg(n),vg),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xg,this.targetCount=0,this.kr=ro.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new pg(0),this.Kr=!1,this.Kr=!0,this.$r=new wb,this.referenceDelegate=e(this),this.Ur=new Sb(this),this.indexManager=new fb,this.remoteDocumentCache=function(i){return new Tb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new db(n),this.Gr=new vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _b,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Eb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Cb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Cb extends aP{constructor(e){super(),this.currentSequenceNumber=e}}class Cg{constructor(e){this.persistence=e,this.Jr=new xg,this.Yr=null}static Zr(e){return new Cg(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ag(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return v6()?8:lP(pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ab;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(zo()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(zo()<=re.DEBUG&&q("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(zo()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):F.resolve())}Yi(e,n){if(bv(n))return F.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kc(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,kc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return bv(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(zo()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.rs(e,o,n,rP(i,-1)).next(a=>a))})}ts(e,n){let r=new Ze(BT(e));return n.forEach((i,s)=>{Cd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return zo()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ti.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(ae),this._s=new mo(s=>yg(s),vg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Pb(t,e,n,r){return new kb(t,e,n,r)}async function dI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function bb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,g=f.keys();let y=F.resolve();return g.forEach(S=>{y=y.next(()=>d.getEntry(u,S)).next(C=>{const A=c.docVersions.get(S);he(A!==null),C.version.compareTo(A)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Nb(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const g=i.get(f);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let y=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(C,A,w){return C.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,y,d)&&a.push(n.Ur.updateTargetData(s,y))});let u=fr(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Ob(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function Ob(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Db(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Lb(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Vp(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!dl(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function $v(t,e,n){const r=J(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=J(u),g=f._s.get(d);return g!==void 0?F.resolve(f.os.get(g)):f.Ur.getTargetData(c,d)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(a=>(Mb(r,CP(e),a),{documents:a,Ts:s})))}function Mb(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Bv{constructor(){this.activeTargetIds=NP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jb{constructor(){this.so=new Bv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Bv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu=null;function Zh(){return nu===null?nu=function(){return 268435456+Math.round(2147483648*Math.random())}():nu++,"0x"+nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class Ub extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Zh(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Fb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Zh();return new Promise((o,a)=>{const u=new xT;u.setWithCredentials(!0),u.listenOnce(AT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Nu.NO_ERROR:const d=u.getResponseJson();q(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Nu.TIMEOUT:q(at,`RPC '${e}' ${s} timed out`),a(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const f=u.getStatus();if(q(at,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const S=function(A){const w=A.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(y.status);a(new B(S,y.message))}else a(new B(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new B(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(at,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(at,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Zh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PT(),a=kT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new CT({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(at,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let g=!1,y=!1;const S=new zb({Io:A=>{y?q(at,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(g||(q(at,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),q(at,`RPC '${e}' stream ${i} sending:`,A),f.send(A))},To:()=>f.close()}),C=(A,w,v)=>{A.listen(w,E=>{try{v(E)}catch(k){setTimeout(()=>{throw k},0)}})};return C(f,Qo.EventType.OPEN,()=>{y||(q(at,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),C(f,Qo.EventType.CLOSE,()=>{y||(y=!0,q(at,`RPC '${e}' stream ${i} transport closed`),S.So())}),C(f,Qo.EventType.ERROR,A=>{y||(y=!0,Js(at,`RPC '${e}' stream ${i} transport errored:`,A),S.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),C(f,Qo.EventType.MESSAGE,A=>{var w;if(!y){const v=A.data[0];he(!!v);const E=v,k=E.error||((w=E[0])===null||w===void 0?void 0:w.error);if(k){q(at,`RPC '${e}' stream ${i} received error:`,k);const D=k.status;let L=function(x){const R=De[x];if(R!==void 0)return tI(R)}(D),I=k.message;L===void 0&&(L=V.INTERNAL,I="Unknown error status: "+D+" with message "+k.message),y=!0,S.So(new B(L,I)),f.close()}else q(at,`RPC '${e}' stream ${i} received:`,v),S.bo(v)}}),C(a,RT.STAT_EVENT,A=>{A.stat===Rp.PROXY?q(at,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===Rp.NOPROXY&&q(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function ef(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){return new XP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $b extends pI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=eb(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Ln(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Np(u)?{documents:rb(s,u)}:{query:ib(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iI(s,o.resumeToken);const c=Dp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Nc(s,o.snapshotVersion.toTimestamp());const c=Dp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=ob(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jp(this.serializer),n.removeTarget=e,this.a_(n)}}class Bb extends pI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=nb(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tb(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Lp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Lp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(hr(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ns(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await pl(c),c.q_.set("Unknown"),c.L_.delete(4),await bd(c)}(this))})}),this.q_=new qb(r,i)}}async function bd(t){if(ns(t))for(const e of t.B_)await e(!0)}async function pl(t){for(const e of t.B_)await e(!1)}function mI(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),bg(n)?Pg(n):go(n).r_()&&kg(n,e))}function Rg(t,e){const n=J(t),r=go(n);n.N_.delete(e),r.r_()&&gI(n,e),n.N_.size===0&&(r.r_()?r.o_():ns(n)&&n.q_.set("Unknown"))}function kg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}go(t).A_(e)}function gI(t,e){t.Q_.xe(e),go(t).R_(e)}function Pg(t){t.Q_=new GP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),go(t).start(),t.q_.v_()}function bg(t){return ns(t)&&!go(t).n_()&&t.N_.size>0}function ns(t){return J(t).L_.size===0}function yI(t){t.Q_=void 0}async function Gb(t){t.q_.set("Online")}async function Kb(t){t.N_.forEach((e,n)=>{kg(t,e)})}async function Qb(t,e){yI(t),bg(t)?(t.q_.M_(e),Pg(t)):t.q_.set("Unknown")}async function Yb(t,e,n){if(t.q_.set("Online"),e instanceof rI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oc(t,r)}else if(e instanceof Lu?t.Q_.Ke(e):e instanceof nI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await hI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),gI(s,u);const f=new Mr(d.target,u,c,d.sequenceNumber);kg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Oc(t,r)}}async function Oc(t,e,n){if(!dl(e))throw e;t.L_.add(1),await pl(t),t.q_.set("Offline"),n||(n=()=>hI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bd(t)})}function vI(t,e){return e().catch(n=>Oc(t,n,e))}async function Nd(t){const e=J(t),n=ri(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Xb(e);)try{const i=await Db(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Jb(e,i)}catch(i){await Oc(e,i)}_I(e)&&wI(e)}function Xb(t){return ns(t)&&t.O_.length<10}function Jb(t,e){t.O_.push(e);const n=ri(t);n.r_()&&n.V_&&n.m_(e.mutations)}function _I(t){return ns(t)&&!ri(t).n_()&&t.O_.length>0}function wI(t){ri(t).start()}async function Zb(t){ri(t).p_()}async function e8(t){const e=ri(t);for(const n of t.O_)e.m_(n.mutations)}async function t8(t,e,n){const r=t.O_.shift(),i=Tg.from(r,e,n);await vI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nd(t)}async function n8(t,e){e&&ri(t).V_&&await async function(r,i){if(function(o){return WP(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();ri(r).s_(),await vI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nd(r)}}(t,e),_I(t)&&wI(t)}async function qv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ns(n);n.L_.add(3),await pl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bd(n)}async function r8(t,e){const n=J(t);e?(n.L_.delete(2),await bd(n)):e||(n.L_.add(2),await pl(n),n.q_.set("Unknown"))}function go(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new $b(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Gb.bind(null,t),Ro:Kb.bind(null,t),mo:Qb.bind(null,t),d_:Yb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),bg(t)?Pg(t):t.q_.set("Unknown")):(await t.K_.stop(),yI(t))})),t.K_}function ri(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new Bb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zb.bind(null,t),mo:n8.bind(null,t),f_:e8.bind(null,t),g_:t8.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nd(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Og(t,e){if(hr("AsyncQueue",`${e}: ${t}`),dl(t))return new B(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Yo(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.W_=new Ce(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class s8{constructor(){this.queries=Gv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Gv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function Gv(){return new mo(t=>$T(t),xd)}async function EI(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new i8,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Og(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Dg(n)}async function TI(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function o8(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Dg(n)}function a8(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Dg(t){t.Y_.forEach(e=>{e.next()})}var Fp,Kv;(Kv=Fp||(Fp={})).ea="default",Kv.Cache="cache";class II{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.key=e}}class xI{constructor(e){this.key=e}}class l8{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=BT(e),this.Ra=new js(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Hv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const g=i.get(d),y=Cd(this.query,f)?f:null,S=!!g&&this.mutatedKeys.has(g.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let A=!1;g&&y?g.data.isEqual(y.data)?S!==C&&(r.track({type:3,doc:y}),A=!0):this.ga(g,y)||(r.track({type:2,doc:y}),A=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!g&&y?(r.track({type:0,doc:y}),A=!0):g&&!y&&(r.track({type:1,doc:g}),A=!0,(u||c)&&(a=!0)),A&&(y?(o=o.add(y),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(y,S){const C=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return C(y)-C(S)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new io(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new xI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new SI(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return io.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class u8{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class c8{constructor(e){this.key=e,this.va=!1}}class d8{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new mo(a=>$T(a),xd),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(H.comparator),this.Na=new Map,this.La=new xg,this.Ba={},this.ka=new Map,this.qa=ro.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function h8(t,e,n=!0){const r=bI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await CI(r,e,n,!0),i}async function f8(t,e){const n=bI(t);await CI(n,e,!0,!1)}async function CI(t,e,n,r){const i=await Lb(t.localStore,Dn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await p8(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&mI(t.remoteStore,i),a}async function p8(t,e,n,r,i){t.Ka=(f,g,y)=>async function(C,A,w,v){let E=A.view.ma(w);E.ns&&(E=await $v(C.localStore,A.query,!1).then(({documents:I})=>A.view.ma(I,E)));const k=v&&v.targetChanges.get(A.targetId),D=v&&v.targetMismatches.get(A.targetId)!=null,L=A.view.applyChanges(E,C.isPrimaryClient,k,D);return Yv(C,A.targetId,L.wa),L.snapshot}(t,f,g,y);const s=await $v(t.localStore,e,!0),o=new l8(e,s.Ts),a=o.ma(s.documents),u=fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Yv(t,n,c.wa);const d=new u8(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function m8(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!xd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rg(r.remoteStore,i.targetId),zp(r,i.targetId)}).catch(cl)):(zp(r,i.targetId),await Vp(r.localStore,i.targetId,!0))}async function g8(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rg(n.remoteStore,r.targetId))}async function y8(t,e,n){const r=S8(t);try{const i=await function(o,a){const u=J(o),c=Ve.now(),d=a.reduce((y,S)=>y.add(S.key),ne());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=fr(),C=ne();return u.cs.getEntries(y,d).next(A=>{S=A,S.forEach((w,v)=>{v.isValidDocument()||(C=C.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,S)).next(A=>{f=A;const w=[];for(const v of a){const E=FP(v,f.get(v.key).overlayedDocument);E!=null&&w.push(new ts(v.key,E,LT(E.value.mapValue),ir.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,w,a)}).next(A=>{g=A;const w=A.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(y,A.batchId,w)})}).then(()=>({batchId:g.batchId,changes:qT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ce(ae)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ml(r,i.changes),await Nd(r.remoteStore)}catch(i){const s=Og(i,"Failed to persist write");n.reject(s)}}async function AI(t,e){const n=J(t);try{const r=await Nb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?he(o.va):i.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await ml(n,r,e)}catch(r){await cl(r)}}function Qv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=J(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const g of f.j_)g.Z_(a)&&(c=!0)}),c&&Dg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function v8(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(H.comparator);o=o.insert(s,dt.newNoDocument(s,X.min()));const a=ne().add(s),u=new kd(X.min(),new Map,new Ce(ae),o,a);await AI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Lg(r)}else await Vp(r.localStore,e,!1).then(()=>zp(r,e,n)).catch(cl)}async function _8(t,e){const n=J(t),r=e.batch.batchId;try{const i=await bb(n.localStore,e);kI(n,r,null),RI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ml(n,i)}catch(i){await cl(i)}}async function w8(t,e,n){const r=J(t);try{const i=await function(o,a){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(he(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);kI(r,e,n),RI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ml(r,i)}catch(i){await cl(i)}}function RI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function kI(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function zp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||PI(t,r)})}function PI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Rg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Lg(t))}function Yv(t,e,n){for(const r of n)r instanceof SI?(t.La.addReference(r.key,e),E8(t,r)):r instanceof xI?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||PI(t,r.key)):Y()}function E8(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Lg(t))}function Lg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new c8(n)),t.Oa=t.Oa.insert(n,r),mI(t.remoteStore,new Mr(Dn(_g(n.path)),r,"TargetPurposeLimboResolution",pg.oe))}}async function ml(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Ag.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,g=>F.forEach(g.$i,y=>d.persistence.referenceDelegate.addReference(f,g.targetId,y)).next(()=>F.forEach(g.Ui,y=>d.persistence.referenceDelegate.removeReference(f,g.targetId,y)))))}catch(f){if(!dl(f))throw f;q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const y=d.os.get(g),S=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(S);d.os=d.os.insert(g,C)}}}(r.localStore,s))}async function T8(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await dI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new B(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ml(n,r.hs)}}function I8(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function bI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=v8.bind(null,e),e.Ca.d_=o8.bind(null,e.eventManager),e.Ca.$a=a8.bind(null,e.eventManager),e}function S8(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w8.bind(null,e),e}class Xv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Pb(this.persistence,new Rb,e.initialUser,this.serializer)}createPersistence(e){return new xb(Cg.Zr,this.serializer)}createSharedClientState(e){return new jb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class x8{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=T8.bind(null,this.syncEngine),await r8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s8}()}createDatastore(e){const n=Pd(e.databaseInfo.databaseId),r=function(s){return new Ub(s)}(e.databaseInfo);return function(s,o,a,u){return new Wb(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Hb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Qv(this.syncEngine,n,0),function(){return Wv.D()?new Wv:new Vb}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new d8(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await pl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C8{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=NT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Og(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tf(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R8(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qv(e.remoteStore,i)),t._onlineComponents=e}function A8(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function R8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!A8(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await tf(t,new Xv)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await tf(t,new Xv);return t._offlineComponents}async function OI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Jv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Jv(t,new x8))),t._onlineComponents}function k8(t){return OI(t).then(e=>e.syncEngine)}async function Up(t){const e=await OI(t),n=e.eventManager;return n.onListen=h8.bind(null,e.syncEngine),n.onUnlisten=m8.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=f8.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=g8.bind(null,e.syncEngine),n}function P8(t,e,n={}){const r=new Kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new NI({next:g=>{o.enqueueAndForget(()=>TI(s,f)),g.fromCache&&u.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new II(a,d,{includeMetadataChanges:!0,_a:!0});return EI(s,f)}(await Up(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t,e,n){if(!n)throw new B(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function b8(t,e,n,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e_(t){if(!H.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function t_(t){if(H.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Di(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Od(t);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kk;switch(r.type){case"firstParty":return new Jk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Zv.delete(n),r.terminate())}(this),Promise.resolve()}}function N8(t,e,n,r={}){var i;const s=(t=Di(t,Dd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ut.MOCK_USER;else{a=F2(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(c)}t._authCredentials=new Qk(new bT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Qr extends Fn{constructor(e,n,r){super(e,n,_g(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new H(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function _n(t,e,...n){if(t=mt(t),LI("collection","path",e),t instanceof Dd){const r=fe.fromString(e,...n);return t_(r),new Qr(t,null,r)}{if(!(t instanceof $t||t instanceof Qr))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return t_(r),new Qr(t.firestore,null,r)}}function O8(t,e,...n){if(t=mt(t),arguments.length===1&&(e=NT.newId()),LI("doc","path",e),t instanceof Dd){const r=fe.fromString(e,...n);return e_(r),new $t(t,null,new H(r))}{if(!(t instanceof $t||t instanceof Qr))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return e_(r),new $t(t.firestore,t instanceof Qr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D8{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new fI(this,"async_queue_retry"),this.Eu=()=>{const n=ef();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=ef();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=ef();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Kr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!dl(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw hr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=Ng.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&Y()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function r_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class qa extends Dd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new D8}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jI(this),this._firestoreClient.terminate()}}function MI(t,e){const n=typeof t=="object"?t:tg(),r=typeof t=="string"?t:"(default)",i=_d(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=M2("firestore");s&&N8(i,...s)}return i}function Mg(t){return t._firestoreClient||jI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new dP(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,DI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new C8(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(tt.fromBase64String(e))}catch(n){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L8=/^__.*__$/;class M8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new hl(e,this.data,n,this.fieldTransforms)}}function FI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class zg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new zg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Dc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(FI(this.wu)&&L8.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class j8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pd(e)}Nu(e,n,r,i=!1){return new zg({wu:e,methodName:n,Ou:r,path:Xe.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ug(t){const e=t._freezeSettings(),n=Pd(t._databaseId);return new j8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V8(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);BI("Data must be an object, but it was:",o,r);const a=UI(r,o);let u,c;if(s.merge)u=new fn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const g=F8(e,f,n);if(!o.contains(g))throw new B(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);U8(d,g)||d.push(g)}u=new fn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new M8(new Xt(a),u,c)}function zI(t,e,n,r=!1){return $g(n,t.Nu(r?4:3,e))}function $g(t,e){if($I(t=mt(t)))return BI("Unsupported field value:",e,t),UI(t,e);if(t instanceof VI)return function(r,i){if(!FI(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=$g(a,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:Nc(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nc(i.serializer,s)}}if(r instanceof Vg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof so)return{bytesValue:iI(i.serializer,r._byteString)};if(r instanceof $t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Fg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Mu("VectorValues must only contain numeric values.");return Eg(a.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Od(r)}`)}(t,e)}function UI(t,e){const n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):po(t,(r,i)=>{const s=$g(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $I(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Vg||t instanceof so||t instanceof $t||t instanceof VI||t instanceof Fg)}function BI(t,e,n){if(!$I(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Od(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function F8(t,e,n){if((e=mt(e))instanceof jg)return e._internalPath;if(typeof e=="string")return WI(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const z8=new RegExp("[~\\*/\\[\\]]");function WI(t,e,n){if(e.search(z8)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jg(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(V.INVALID_ARGUMENT,a+t+u)}function U8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ld("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $8 extends Bg{data(){return super.data()}}function Ld(t,e){return typeof e=="string"?WI(t,e):e instanceof jg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wg{}class Md extends Wg{}function Lc(t,e,...n){let r=[];e instanceof Wg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof qg).length,a=s.filter(u=>u instanceof jd).length;if(o>1||o>0&&a>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jd extends Md{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jd(e,n,r)}_apply(e){const n=this._parse(e);return GI(e._query,n),new Fn(e.firestore,e.converter,Op(e._query,n))}_parse(e){const n=Ug(e.firestore);return function(s,o,a,u,c,d,f){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){a_(f,d);const y=[];for(const S of f)y.push(o_(u,s,S));g={arrayValue:{values:y}}}else g=o_(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||a_(f,d),g=zI(a,o,f,d==="in"||d==="not-in");return je.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function HI(t,e,n){const r=e,i=Ld("where",t);return jd._create(i,r,n)}class qg extends Wg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)GI(o,u),o=Op(o,u)}(e._query,n),new Fn(e.firestore,e.converter,Op(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hg extends Md{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $a(s,o)}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new es(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function i_(t,e="asc"){const n=e,r=Ld("orderBy",t);return Hg._create(r,n)}class Gg extends Md{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gg(e,n,r)}_apply(e){return new Fn(e.firestore,e.converter,kc(e._query,this._limit,this._limitType))}}function s_(t){return Gg._create("limit",t,"F")}class Kg extends Md{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kg(e,n,r)}_apply(e){const n=W8(e,this.type,this._docOrFields,this._inclusive);return new Fn(e.firestore,e.converter,function(i,s){return new es(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function B8(...t){return Kg._create("startAfter",t,!1)}function W8(t,e,n,r){if(n[0]=mt(n[0]),n[0]instanceof Bg)return function(s,o,a,u,c){if(!u)throw new B(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Ms(s))if(f.field.isKeyField())d.push(Rc(o,u.key));else{const g=u.data.field(f.field);if(Sd(g))throw new B(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const y=f.field.canonicalString();throw new B(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(g)}return new no(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ug(t.firestore);return function(o,a,u,c,d,f){const g=o.explicitOrderBy;if(d.length>g.length)throw new B(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let S=0;S<d.length;S++){const C=d[S];if(g[S].field.isKeyField()){if(typeof C!="string")throw new B(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!wg(o)&&C.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const A=o.path.child(fe.fromString(C));if(!H.isDocumentKey(A))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${A}' is not because it contains an odd number of segments.`);const w=new H(A);y.push(Rc(a,w))}else{const A=zI(u,c,C);y.push(A)}}return new no(y,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function o_(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wg(e)&&n.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rc(t,new H(r))}if(n instanceof $t)return Rc(t,n._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Od(n)}.`)}function a_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class q8{convertValue(e,n="none"){switch(qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return po(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new Fg(s)}convertGeoPoint(e){return new Vg(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);he(cI(r));const i=new za(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H8(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KI extends Bg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ld("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mu extends KI{data(e={}){return super.data(e)}}class QI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Jo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Mu(this._firestore,this._userDataWriter,r.key,r,new Jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Jo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Mu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Jo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:G8(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function G8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class Qg extends q8{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function Yr(t){t=Di(t,Fn);const e=Di(t.firestore,qa),n=Mg(e),r=new Qg(e);return qI(t._query),P8(n,t._query).then(i=>new QI(e,r,t,i))}function Yg(t,e){const n=Di(t.firestore,qa),r=O8(t),i=H8(t.converter,e);return Q8(n,[V8(Ug(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ir.exists(!1))]).then(()=>r)}function K8(t,...e){var n,r,i;t=mt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||r_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(r_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof $t)c=Di(t.firestore,qa),d=_g(t._key.path),u={next:f=>{e[o]&&e[o](Y8(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Di(t,Fn);c=Di(f.firestore,qa),d=f._query;const g=new Qg(c);u={next:y=>{e[o]&&e[o](new QI(c,g,f,y))},error:e[o+1],complete:e[o+2]},qI(t._query)}return function(g,y,S,C){const A=new NI(C),w=new II(y,A,S);return g.asyncQueue.enqueueAndForget(async()=>EI(await Up(g),w)),()=>{A.za(),g.asyncQueue.enqueueAndForget(async()=>TI(await Up(g),w))}}(Mg(c),d,a,u)}function Q8(t,e){return function(r,i){const s=new Kr;return r.asyncQueue.enqueueAndForget(async()=>y8(await k8(r),i,s)),s.promise}(Mg(t),e)}function Y8(t,e,n){const r=n.docs.get(e._key),i=new Qg(t);return new KI(t,i,e._key,r,new Jo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){fo=i})(Zi),zi(new ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new qa(new Yk(r.getProvider("auth-internal")),new eP(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nn(Ev,"4.7.1",e),Nn(Ev,"4.7.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebasestorage.googleapis.com",X8="storageBucket",J8=2*60*1e3,Z8=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Vn{constructor(e,n,r=0){super(nf(e),`Firebase Storage: ${n} (${nf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function nf(t){return"storage/"+t}function eN(){const t="An unknown error occurred, please check the error payload for server response.";return new zn(jn.UNKNOWN,t)}function tN(){return new zn(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nN(){return new zn(jn.CANCELED,"User canceled the upload/download.")}function rN(t){return new zn(jn.INVALID_URL,"Invalid URL '"+t+"'.")}function iN(t){return new zn(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function l_(t){return new zn(jn.INVALID_ARGUMENT,t)}function XI(){return new zn(jn.APP_DELETED,"The Firebase app was deleted.")}function sN(t){return new zn(jn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw iN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${i}/o${g}`,"i"),S={bucket:1,path:3},C=n===YI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",w=new RegExp(`^https?://${C}/${i}/${A}`,"i"),E=[{regex:a,indices:u,postModify:s},{regex:y,indices:S,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<E.length;k++){const D=E[k],L=D.regex.exec(e);if(L){const I=L[D.indices.bucket];let _=L[D.indices.path];_||(_=""),r=new pn(I,_),D.postModify(r);break}}if(r==null)throw rN(e);return r}}class oN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...A){c||(c=!0,e.apply(null,A))}function f(A){i=setTimeout(()=>{i=null,t(y,u())},A)}function g(){s&&clearTimeout(s)}function y(A,...w){if(c){g();return}if(A){g(),d.call(null,A,...w);return}if(u()||o){g(),d.call(null,A,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let S=!1;function C(A){S||(S=!0,g(),!c&&(i!==null?(A||(a=2),clearTimeout(i),f(0)):A||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function lN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){return t!==void 0}function u_(t,e,n,r){if(r<e)throw l_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw l_(`Invalid value for '${t}'. Expected ${n} or less.`)}function cN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Mc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mc||(Mc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,i,s,o,a,u,c,d,f,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,S)=>{this.resolve_=y,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ru(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mc.NO_ERROR,u=s.getStatus();if(!a||dN(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Mc.ABORT;r(!1,new ru(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ru(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());uN(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=eN();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?XI():nN();o(u)}else{const u=tN();o(u)}};this.canceled_?n(!1,new ru(!1,null,!0)):this.backoffId_=aN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ru{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yN(t,e,n,r,i,s,o=!0){const a=cN(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return mN(c,e),fN(c,n),pN(c,s),gN(c,r),new hN(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _N(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jc(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _N(this._location.path)}get storage(){return this._service}get parent(){const e=vN(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new jc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sN(e)}}function c_(t,e){const n=e==null?void 0:e[X8];return n==null?null:pn.makeFromBucketSpec(n,t)}function wN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:F2(i,t.app.options.projectId))}class EN{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=YI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J8,this._maxUploadRetryTime=Z8,this._requests=new Set,i!=null?this._bucket=pn.makeFromBucketSpec(i,this._host):this._bucket=c_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=c_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new oN(XI());{const o=yN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const d_="@firebase/storage",h_="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="storage";function TN(t=tg(),e){t=mt(t);const r=_d(t,JI).getImmediate({identifier:e}),i=M2("storage");return i&&IN(r,...i),r}function IN(t,e,n,r={}){wN(t,e,n,r)}function SN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new EN(n,r,i,e,Zi)}function xN(){zi(new ei(JI,SN,"PUBLIC").setMultipleInstances(!0)),Nn(d_,h_,""),Nn(d_,h_,"esm2017")}xN();const CN={apiKey:"AIzaSyAUoMzD8fdip3Oog3rb4jFLdS4vTHqybuI",authDomain:"estore-react-922c8.firebaseapp.com",projectId:"estore-react-922c8",storageBucket:"estore-react-922c8.appspot.com",messagingSenderId:"36464998952",appId:"1:36464998952:web:69254f1256a6d77180131d"},gl=$2(CN),$p=Wk(gl),wn=MI(gl);TN(gl);MI(gl);const AN=new cn(gl);function RN(t){return Pe({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(t)}const kN=_e.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,PN=_e.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 3rem auto 3rem auto;
    border: 1px solid #696969;
    padding: 1rem;
    border-radius: 10px;
    font-family: "poppins" ,sans-serif;
    h3 {
        font-size: 1.5rem;
        color: red;
        margin-bottom: 2rem;
    }
    label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #696969;
    }
    input {
        font-size: 0.8rem;
        padding-left: 0.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 1px solid #696969;
        margin-top: 0rem;
        margin-bottom: 1rem;
    }
    button {
        background-color: #696969;
        color: white;
        font-size: 15px;
        padding: 0.5rem 0rem 0.5rem 0rem;
        border-radius: 0.3rem;
        font-weight: 500;
        margin: 1rem 0rem 0rem 0rem;
        border: 1px solid #696969;
    }
    button:hover {
        background-color: #000000;
        transition: 1s;
        cursor: pointer;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.3rem;
        h5 {
            font-size: 0.7rem;
        }
        a {
            color: blue;
            font-size: 0.8rem;
            text-decoration: none;
            margin-top: -0.1rem;
        }
    }
    div:nth-child(9) {
        position: absolute;
        top: 23%;
        right: 40%;
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: white;
        /* margin-top: 15rem; */
        margin-bottom: 5rem;
    }
    #googlebutton {
        background-color: whitesmoke;
        color: #595959;
    }
    #googlebutton:hover {
        background-color: white;
    }
    #googleicon {
        margin: -.1rem .5rem 0rem 0rem;
    }
`,bN=()=>{const[t,e]=M.useState({name:"",email:"",password:"",role:"user"}),n=pd(),r=async s=>{s.preventDefault();try{const o=await PR($p,t.email,t.password),a={name:t.name,email:o.user.email,uid:o.user.uid,role:t.role,time:Ve.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})},u=_n(wn,"user");Yg(u,a),e({name:"",email:"",password:""}),ht.success("Registration Successful"),n("/Login"),console.log("Account Created",o)}catch{ht.error("User Already Existed"),setEmail(""),setPassword(""),setCnfrmpassword(""),console.log("Already Exists")}},i=async()=>{await ZR($p,AN).then(s=>{const a=cn.credentialFromResult(s).accessToken,u=s.user;console.log("Token :",a),console.log("user :",u),n("/Login"),console.log("Hello Ahmed")}).catch(s=>{const o=s.code,a=s.message,u=s.customData.email,c=cn.credentialFromError(s);console.log("errorcode: ",o),console.log("errormessage: ",a),console.log("email: ",u),console.log("credential: ",c),n("/Register")})};return p.jsx(p.Fragment,{children:p.jsxs(PN,{id:"Registerpanel",children:[p.jsx("div",{children:p.jsx(kN,{src:qm,alt:"SiteLogo"})}),p.jsx("h3",{children:"Make Some Change!"}),p.jsxs("form",{onSubmit:r,children:[p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Name"}),p.jsx("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Name",required:!0,value:t.name,onChange:s=>e({...t,name:s.target.value})})]}),p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{for:"exampleInputEmail1",className:"form-label",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:s=>e({...t,email:s.target.value})})]}),p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:s=>e({...t,password:s.target.value})})]}),p.jsx("button",{type:"submit",className:"btn btn-primary container",children:"Submit"})]}),p.jsxs("div",{className:"register",children:[p.jsx("h5",{children:"Already have an account"}),p.jsx(lt,{to:"/Login",children:"Login"})]}),p.jsx("div",{children:p.jsxs("button",{className:"container",id:"googlebutton",onClick:i,children:[p.jsx(RN,{size:"1.1rem",id:"googleicon"}),"Continue with Google"]})})]})})},NN=_e.img`
    width: 7rem;
    height: 5rem;
    margin-left: -1.5rem;
`,ON=_e.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 5rem auto 3rem auto;
    border: 1px solid #696969;
    padding: 1rem;
    border-radius: 10px;
    font-family: "poppins" ,sans-serif;
    h3 {
        font-size: 1.5rem;
        color: red;
        margin-bottom: 2rem;
    }
    label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #696969;
    }
    input {
        font-size: 0.8rem;
        padding-left: 0.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 1px solid #696969;
        margin-top: 0rem;
        margin-bottom: 1rem;
    }
    button {
        background-color: #696969;
        color: white;
        font-size: 15px;
        padding: 0.5rem 0rem 0.5rem 0rem;
        border-radius: 0.3rem;
        font-weight: 500;
        margin: 1rem 0rem 0rem 0rem;
        border: 1px solid #696969;
    }
    button:hover {
        background-color: #000000;
        transition: 1s;
        cursor: pointer;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.3rem;
        h5 {
            font-size: 0.7rem;
        }
        a {
            color: blue;
            font-size: 0.8rem;
            text-decoration: none;
            margin-top: -0.1rem;
        }
    }
    @media (max-width: 601px) and (min-width: 0px) {
        background-color: white;
        margin-top: 15rem;
        margin-bottom: 5rem;
    }
`,DN=()=>{const[t,e]=M.useState({email:"",password:""}),n=pd(),r=async i=>{var s;i.preventDefault();try{const o=await bR($p,t.email,t.password);try{const a=Lc(_n(wn,"user"),HI("uid","==",(s=o==null?void 0:o.user)==null?void 0:s.uid)),u=K8(a,c=>{let d;c.forEach(f=>d=f.data()),localStorage.setItem("users",JSON.stringify(d)),e({email:"",password:""}),ht.success("Login Successful"),console.log("User logged in:",o.user),d.role==="user"&&n("/Home")});return()=>u}catch(a){console.log("error",a)}}catch{ht.error("Login not found"),e({email:"",password:""})}};return p.jsx(p.Fragment,{children:p.jsxs(ON,{id:"loginpanel",children:[p.jsx("div",{children:p.jsx(NN,{src:qm,alt:"SiteLogo"})}),p.jsx("h3",{children:"Welcome back!"}),p.jsxs("form",{onSubmit:r,children:[p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email",required:!0,value:t.email,onChange:i=>e({...t,email:i.target.value})})]}),p.jsxs("div",{className:"mb-0",style:{flexDirection:"column"},children:[p.jsx("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),p.jsx("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,value:t.password,onChange:i=>e({...t,password:i.target.value})}),p.jsx("button",{type:"submit",children:"Login"})]})]}),p.jsxs("div",{className:"register",children:[p.jsx("h5",{children:"Don't have an account"}),p.jsx(lt,{to:"/Register",children:"Register"})]})]})})},LN="/freshbiteapp_Reactjs/assets/veg-C5rJdKzF.jpg",MN="/freshbiteapp_Reactjs/assets/fruit-lXJ3bgGr.jpg",jN=_e.div`
    margin: 5rem 0rem 1rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: "poppins", sans-serif;
    .veg-section {
        height: 30rem;
        border: 1px solid #696969;
        border-radius: 1.5rem;
        width: 38rem;
        h1 {
            color: whitesmoke;
            font-size: 3rem;
            font-weight: 600;
            margin: 5rem 0rem 0rem 3rem;
        }
        p {
            color: #898989;
            font-size: 1rem;
            font-weight: 450;
            margin: 1.5rem 0rem 0rem 3rem;
        }
        button {
            margin: 1.5rem 0rem 0rem 3rem;
            border-radius: 3rem;
            border: 0px solid none;
            font-size: 1.1rem;
            padding: 0.5rem 1.9rem 0.5rem 1.9rem;
        }
    }
    .fruit-section {
        height: 30rem;
        border: 1px solid #696969;
        border-radius: 1.5rem;
        width: 38rem;
        h1 {
            color: whitesmoke;
            font-size: 3rem;
            font-weight: 600;
            margin: 5rem 0rem 0rem 3rem;
        }
        p {
            color: #898989;
            font-size: 1rem;
            font-weight: 450;
            margin: 1.5rem 0rem 0rem 3rem;
        }
        button {
            margin: 1.5rem 0rem 0rem 3rem;
            border-radius: 3rem;
            border: 0px solid none;
            font-size: 1.1rem;
            padding: 0.5rem 1.9rem 0.5rem 1.9rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        margin: 5rem 3rem 1rem 3rem;
        .veg-section {
            height: 27rem;
            width: 32rem;
            margin: 0rem 0.5rem 0rem 0rem;
            h1 {
                font-size: 2.4rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.9rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
        .fruit-section {
            height: 27rem;
            width: 32rem;
            margin: 0rem 0rem 0rem 0.5rem;
            h1 {
                font-size: 2.4rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.9rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        margin: 5rem 1.3rem 1rem 1.3rem;
        .veg-section {
            height: 23rem;
            width: 32rem;
            margin: 0rem 0.5rem 0rem 0rem;
            h1 {
                font-size: 1.7rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.6rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 0.8rem;
                margin-left: 1.5rem;
            }
        }
        .fruit-section {
            height: 23rem;
            width: 32rem;
            margin: 0rem 0rem 0rem 0.5rem;
            h1 {
                font-size: 1.7rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.6rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 0.8rem;
                margin-left: 1.5rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5rem auto 1rem auto;
        .veg-section {
            height: 27rem;
            display: block;
            margin: 0rem auto 0rem auto;
            width: 24rem;
            h1 {
                font-size: 1.7rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.9rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
        .fruit-section {
            height: 27rem;
            width: 24rem;
            display: block;
            margin: 1rem auto 0rem auto;
            h1 {
                font-size: 1.7rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.9rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5rem auto 1rem auto;
        .veg-section {
            display: block;
            margin: 1rem auto 0rem auto;
            width: 19rem;
            height: 27rem;
            h1 {
                font-size: 1.7rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.9rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
        .fruit-section {
            display: block;
            margin: 1rem auto 0rem auto;
            width: 19rem;
            height: 27rem;
            h1 {
                font-size: 1.7rem;
                margin-left: 1.5rem;
            }
            p {
                font-size: 0.9rem;
                margin-left: 1.5rem;
            }
            button {
                font-size: 1rem;
                margin-left: 1.5rem;
            }
        }
    }
`,VN=()=>p.jsx(p.Fragment,{children:p.jsxs(jN,{children:[p.jsxs("div",{className:"veg-section",style:{backgroundImage:`url(${LN})`},children:[p.jsxs("h1",{children:["Tasty ",p.jsx("y",{style:{color:"coral"},children:" Vegetables "})," ",p.jsx("br",{})," From Farm ",p.jsx("br",{})," Vendors"]}),p.jsxs("p",{children:["Every Friday Check",p.jsx("br",{})," Best Margla Deals"]}),p.jsx("button",{className:"btn btn-success",children:"Shop Now"})]}),p.jsxs("div",{className:"fruit-section",style:{backgroundImage:`url(${MN})`},children:[p.jsxs("h1",{children:[p.jsx("y",{style:{color:"coral"},children:" Delicious "})," Fruits ",p.jsx("br",{})," From South ",p.jsx("br",{})," Africa"]}),p.jsxs("p",{children:["Every Friday Check",p.jsx("br",{})," Best Margla Deals"]}),p.jsx("button",{className:"btn btn-success",children:"Shop Now"})]})]})});function FN(t){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"},child:[]},{tag:"path",attr:{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"},child:[]},{tag:"path",attr:{d:"m18 15-2-2"},child:[]},{tag:"path",attr:{d:"m15 18-2-2"},child:[]}]})(t)}function zN(t){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"},child:[]}]})(t)}function UN(t){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},child:[]}]})(t)}function $N(t){return Pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"},child:[]}]})(t)}function BN(t){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64 64-28.656 64-64-28.656-64-64-64z"},child:[]}]})(t)}const WN=_e.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5rem 0rem 1rem 0rem;
    font-family: "poppins", sans-serif;
    text-align: center;
    h4 {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
    p {
        font-size: 0.8rem;
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        h4 {
            font-size: 0.9rem;
        }
        p {
            font-size: 0.7rem;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        h4 {
            font-size: 0.77rem;
        }
        p {
            font-size: 0.55rem;
        }
    }
`,qN=()=>p.jsx(p.Fragment,{children:p.jsxs(WN,{children:[p.jsxs("div",{children:[p.jsx(VC,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"Top Notch Support"}),p.jsx("p",{children:"Chat with us if you've any query"})]}),p.jsxs("div",{children:[p.jsx(FN,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"100% Satisfaction Guarrentae"}),p.jsx("p",{children:"Provide help in case of Dissatisfaction"})]}),p.jsxs("div",{children:[p.jsx(UN,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"Free Deliverey Acrross all US"}),p.jsx("p",{children:"Free Deliverey for all orders above $500"})]}),p.jsxs("div",{children:[p.jsx(BN,{size:"2rem",color:"tomato"}),p.jsx("h4",{children:"Secure Payment"}),p.jsx("p",{children:"We use safest Payment Technologies"})]})]})}),HN="/freshbiteapp_Reactjs/assets/first-Bd_imVfc.jpg",GN="/freshbiteapp_Reactjs/assets/third-Ba3uQAAu.jpg",KN="/freshbiteapp_Reactjs/assets/second-A7lX0XHt.jpeg",QN=_e.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin: 5rem 0rem 1rem 0rem;
    font-family: "poppins", sans-serif;
    div {
        height: 23rem;
        width: 26rem;
        border-radius: 1.5rem;
        border: 1px solid #696969;
        background-repeat: no-repeat;
        h3 {
            font-size: 2.2rem;
            color: #383838;
            margin: 7rem 0rem 0rem 1rem;
            font-weight: 550;
        }
        button {
            padding: 0.5rem 2rem 0.5rem 2rem;
            margin: 1.5rem 0rem 0rem 1rem;
            font-size: 1.1rem;
            font-weight: 500;
            border-radius: 1.5rem;
        }
    }
    div:hover {
        cursor: pointer;
        transform: translate(1.1);
        transition: 0.5s;
    }
    @media (max-width: 599px) and (min-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        div {
            margin: 1rem auto 0rem auto;
            width: 24rem;
            display: block;
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        div {
            margin: 1rem auto 0rem auto;
            width: 19rem;
            display: block;
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        justify-content: space-evenly;
        div {
            width: 15.5rem;
            height: 21rem;
            h3 {
                font-size: 1.7rem;
            }
            button {
                font-size: 0.8rem;
            }
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        justify-content: space-evenly;
        div {
            width: 20rem;
            height: 21rem;
            h3 {
                font-size: 2rem;
                margin: 5rem 0rem 0rem 1rem;
            }
            button {
                font-size: 1rem;
            }
        }
    }
`,YN=()=>p.jsx(p.Fragment,{children:p.jsxs(QN,{children:[p.jsxs("div",{style:{backgroundImage:`url(${KN})`},children:[p.jsxs("h3",{children:["Fresh ",p.jsx("y",{style:{color:"tomato"},children:" Vegies "})," ",p.jsx("br",{})," Everyday "]}),p.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})]}),p.jsxs("div",{style:{backgroundImage:`url(${HN})`},children:[p.jsxs("h3",{children:["Sweet ",p.jsx("y",{style:{color:"orange"},children:" Organic "})," ",p.jsx("br",{})," Drinks "]}),p.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})]}),p.jsxs("div",{style:{backgroundImage:`url(${GN})`},children:[p.jsxs("h3",{children:["Fairly ",p.jsx("y",{style:{color:"red"},children:" Meat "})," ",p.jsx("br",{})," Lovers "]}),p.jsx("button",{className:"btn btn-secondary",children:"Shop Now"})]})]})}),XN=_e.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem 0rem 5rem 0rem;
    font-family: "poppins", sans-serif;
    label {
        text-align: center;
        color: black;
        font-size: 3rem;
        font-weight: 600;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        input {
            width: 40rem;
            height: 3rem;
            font-size: 1.1rem;
            padding: 0.3rem 0rem 0.3rem 1rem;
            margin: 0rem 0.5rem 0rem 0rem;
            border: 1px solid #696969;
            border-radius: 0.3rem;
        }
        button {
            font-size: 1.1rem;
            background-color: #696969;
            padding: 0rem 3rem 0rem 3rem;
            font-weight: 500;
            height: 3rem;
            color: white;
            border: 0px;
            border-radius: 0.3rem;
        }
        button:hover {
            cursor: pointer;
            background-color: black;
            transition: 0.5s;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        label {
            font-size: 2.4rem;
        }
        div {
            input {
                width: 35rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        label {
            font-size: 2.1rem;
        }
        div {
            input {
                width: 30rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        label {
            font-size: 1.6rem;
        }
        div {
            display: block;
            margin: 1rem 0rem 0rem 0rem;
            input {
                width: 23rem;
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            button {
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin: 0.5rem auto 0rem auto;
                text-align: center;
            }
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        label {
            font-size: 1.8rem;
        }
        div {
            display: block;
            margin: 1rem 0rem 0rem 0rem;
            input {
                width: 18rem;
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            button {
                height: 2.5rem;
                font-size: 1rem;
                display: block;
                margin: 0.5rem auto 0rem auto;
                text-align: center;
            }
        }
    }
    #firstmsg {
        background-color: white;
        color: black;
        padding: 10px;
        position: fixed;
        top: 50%;
        right: 40%;
        left: auto;
        z-index: 1000;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
`,JN=()=>{const[t,e]=M.useState(""),n=async r=>{if(r.preventDefault(),t===""){ht.error("Email is required");return}else if(!t.includes("@")||!t.endsWith(".com")){ht.error("Put a valid email address");return}else try{const i=_n(wn,"Subscribe"),s=Lc(i,HI("Email","==",t));if(!(await Yr(s)).empty){ht.error("Already Registered"),e("");return}await Yg(i,{Email:t}),ht.success("Successfully Registered")}catch{ht.error("Failed to Subscribe. Try again"),e("")}};return p.jsx(p.Fragment,{children:p.jsxs(XN,{children:[p.jsx("label",{children:"Subscribe To Our Newsletter"}),p.jsxs("div",{children:[p.jsx("input",{id:"email",type:"email",placeholder:"Enter Your Email Address",required:!0,value:t,onChange:r=>e(r.target.value)}),p.jsx("button",{onClick:n,children:"Subscribe"})]})]})})},ZN=_e.section`
    font-family: "poppins", sans-serif;
    margin: 10rem 0rem 1rem 0rem;
    h3 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 550;
    }
    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1rem 0rem 1rem 0rem;
        i {
            color: #696969;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 450;
            margin: 0rem 0.5rem 0rem 0.5rem;
        }
        i:hover {
            color: black;
            cursor: pointer;
        }
    }
    img {
        width: 9rem;
        height: 8rem;
        display: block;
        margin: 1rem auto 1rem auto;
        background-color: lightgrey;
    }
    h5 {
        font-size: 1.3rem;
    }
    y {
        color: #696969;
        font-size: 1rem;
        font-weight: 500;
    }
    #vegies {
        margin: 5rem 0rem 1rem 0rem;
    }
    #fruits {
        margin: 5rem 0rem 1rem 0rem;
        display: none;
    }
    #others {
        margin: 5rem 0rem 1rem 0rem;
        display: none;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        h5 {
            font-size: 1rem;
        }
        h3 {
            font-size: 1.9rem;
        }
        .links {
            i {
                font-size: 0.8rem;
            }
        }
        img {
            width: 8rem;
            height: 7rem;
        }
        p {
            font-size: 0.8rem;
        }
        y {
            font-size: 0.8rem;
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        img {
            width: 9rem;
            height: 8rem;
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        img {
            width: 8rem;
            height: 7rem;
        }
        p {
            font-size: 0.7rem;
        }
        h5 {
            font-size: 0.8rem;
        }
        h3 {
            font-size: 2.2rem;
        }
        .links {
            i {
                font-size: 0.8rem;
            }
        }
        y {
            font-size: 0.7rem;
        }
    }
`,e7=()=>{const[t,e]=M.useState([]),[n,r]=M.useState([]),[i,s]=M.useState([]);M.useEffect(()=>{(async()=>{const d=_n(wn,"HomeVegProducts"),g=(await Yr(d)).docs.map(E=>({id:E.id,...E.data()}));e(g);const y=_n(wn,"HomeFruitProducts"),C=(await Yr(y)).docs.map(E=>({id:E.id,...E.data()}));r(C);const A=_n(wn,"HomeOtherProducts"),v=(await Yr(A)).docs.map(E=>({id:E.id,...E.data()}));s(v)})()},[]);const o=()=>{document.getElementById("vegies").style.display="flex",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="none"},a=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="flex",document.getElementById("others").style.display="none"},u=()=>{document.getElementById("vegies").style.display="none",document.getElementById("fruits").style.display="none",document.getElementById("others").style.display="flex"};return p.jsx(p.Fragment,{children:p.jsxs(ZN,{children:[p.jsx("h3",{children:"Best Selling of August"}),p.jsxs("div",{className:"links",children:[p.jsx("i",{onClick:o,children:"Vegies"}),p.jsx("i",{onClick:a,children:"Fruits"}),p.jsx("i",{onClick:u,children:"Others"})]}),p.jsxs("div",{children:[p.jsx("div",{id:"vegies",children:p.jsx("div",{className:"container",children:p.jsx("div",{className:"row",children:t.map((c,d)=>p.jsx("div",{className:"col-md-3 mb-3 col-6",children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),p.jsxs("div",{className:"card-body",children:[p.jsx("h5",{className:"card-title",children:c.name}),p.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.Bunch&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Bunch: "})," ",c.Bunch]}),c.quantity&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Quantity: "})," ",c.quantity,"Kg"]})]})]})},d))})})}),p.jsx("div",{id:"fruits",children:p.jsx("div",{className:"container",children:p.jsx("div",{className:"row",children:n.map((c,d)=>p.jsx("div",{className:"col-md-3 mb-3 col-6",children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),p.jsxs("div",{className:"card-body",children:[p.jsx("h5",{className:"card-title",children:c.name}),p.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.dozen&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Dozen: "})," ",c.dozen]}),c.quantity&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Quantity: "})," ",c.quantity," Kg"]})]})]})},d))})})}),p.jsx("div",{id:"others",children:p.jsx("div",{className:"container",children:p.jsx("div",{className:"row",children:i.map((c,d)=>p.jsx("div",{className:"col-md-3 mb-3 col-6",children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:c.imageurl,className:"card-img-top",alt:c.name}),p.jsxs("div",{className:"card-body",children:[p.jsx("h5",{className:"card-title",children:c.name}),p.jsxs("p",{className:"card-text",style:{color:"red"},children:[" $",c.price]}),c.size&&p.jsxs("p",{className:"card-text",children:[p.jsx("y",{children:"Size: "})," ",c.size]})]})]})},d))})})})]})]})})};var t7={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function ZI(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return t7[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function f_(t){var e=ZI(t);return"".concat(e.value).concat(e.unit)}var n7=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},Cr=function(){return Cr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Cr.apply(this,arguments)},r7=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},p_=n7("MoonLoader","100% {transform: rotate(360deg)}","moon");function yo(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,u=a===void 0?{}:a,c=t.size,d=c===void 0?60:c,f=r7(t,["loading","color","speedMultiplier","cssOverride","size"]),g=ZI(d),y=g.value,S=g.unit,C=Math.round(y/7),A=Cr({display:"inherit",position:"relative",width:"".concat("".concat(y+C*2).concat(S)),height:"".concat("".concat(y+C*2).concat(S)),animation:"".concat(p_," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"},u),w=function(k){return{width:f_(k),height:f_(k),borderRadius:"100%"}},v=Cr(Cr({},w(C)),{backgroundColor:"".concat(i),opacity:"0.8",position:"absolute",top:"".concat("".concat(y/2-C/2).concat(S)),animation:"".concat(p_," ").concat(.6/o,"s 0s infinite linear"),animationFillMode:"forwards"}),E=Cr(Cr({},w(y)),{border:"".concat(C,"px solid ").concat(i),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return n?M.createElement("span",Cr({style:A},f),M.createElement("span",{style:v}),M.createElement("span",{style:E})):null}const eS=M.createContext();var Xg={},Jg={},Ie={},Vd={};(function(t){function e(o,a,u){var c=a.slidesToShow,d=a.currentSlide;return u.length>2*c?o+2*c:d>=u.length?u.length+o:o}function n(o,a){if(a.length>2*o){for(var u={},c=a.length-2*o,d=a.length-c,f=c,g=0;g<d;g++)u[g]=f,f++;var y=a.length+d,S=y+a.slice(0,2*o).length,C=0;for(g=y;g<=S;g++)u[g]=C,C++;var A=y,w=0;for(g=d;g<A;g++)u[g]=w,w++;return u}u={};var v=3*a.length,E=0;for(g=0;g<v;g++)u[g]=E,++E===a.length&&(E=0);return u}function r(o,a){return a.length<o?a:a.length>2*o?a.slice(a.length-2*o,a.length).concat(a,a.slice(0,2*o)):a.concat(a,a)}function i(o,a){return a.length>2*o?2*o:a.length}function s(o,a,u){var c,d=o.currentSlide,f=o.slidesToShow,g=o.itemWidth,y=o.totalItems,S=0,C=0,A=d===0,w=a.length-(a.length-2*f);return a.length<f?(C=S=0,A=c=!1):a.length>2*f?((c=d>=w+a.length)&&(C=-g*(S=d-a.length)),A&&(C=-g*(S=w+(a.length-2*f)))):((c=d>=2*a.length)&&(C=-g*(S=d-a.length)),A&&(C=u.showDots?-g*(S=a.length):-g*(S=y/3))),{isReachingTheEnd:c,isReachingTheStart:A,nextSlide:S,nextPosition:C}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOriginalCounterPart=e,t.getOriginalIndexLookupTableByClones=n,t.getClones=r,t.getInitialSlideInInfiniteMode=i,t.checkClonesPosition=s})(Vd);var Vs={};Object.defineProperty(Vs,"__esModule",{value:!0});function i7(t,e,n,r){var i=0,s=r||n;return e&&s&&(i=t[s].partialVisibilityGutter||t[s].paritialVisibilityGutter),i}function s7(t,e){var n;return e[t]&&(n=(100/e[t].items).toFixed(1)),n}function o7(t,e,n){return Math.round(n/(e+(t.centerMode?1:0)))}Vs.getPartialVisibilityGutter=i7,Vs.getWidthFromDeviceType=s7,Vs.getItemClientSideWidth=o7;var Ue={};Object.defineProperty(Ue,"__esModule",{value:!0});var Bp=Vs;function Zg(t){var e=t.slidesToShow;return t.totalItems<e}function a7(t,e){var n,r=t.domLoaded,i=t.slidesToShow,s=t.containerWidth,o=t.itemWidth,a=e.deviceType,u=e.responsive,c=e.ssr,d=e.partialVisbile,f=e.partialVisible,g=!!(r&&i&&s&&o);c&&a&&!g&&(n=Bp.getWidthFromDeviceType(a,u));var y=!!(c&&a&&!g&&n);return{shouldRenderOnSSR:y,flexBisis:n,domFullyLoaded:g,partialVisibilityGutter:Bp.getPartialVisibilityGutter(u,d||f,a,t.deviceType),shouldRenderAtAll:y||g}}function l7(t,e){var n=e.currentSlide,r=e.slidesToShow;return n<=t&&t<n+r}function tS(t,e,n){var r=n||t.transform;return!e.infinite&&t.currentSlide===0||Zg(t)?r:r+t.itemWidth/2}function u7(t){return!(0<t.currentSlide)}function nS(t){var e=t.currentSlide,n=t.totalItems;return!(e+t.slidesToShow<n)}function rS(t,e,n,r){e===void 0&&(e=0);var i=t.currentSlide,s=t.slidesToShow,o=nS(t),a=!n.infinite&&o,u=r||t.transform;if(Zg(t))return u;var c=u+i*e;return a?c+(t.containerWidth-(t.itemWidth-e)*s):c}function iS(t,e){return t.rtl?-1*e:e}function c7(t,e,n){var r=e.partialVisbile,i=e.partialVisible,s=e.responsive,o=e.deviceType,a=e.centerMode,u=n||t.transform,c=Bp.getPartialVisibilityGutter(s,r||i,o,t.deviceType);return iS(e,i||r?rS(t,c,e,n):a?tS(t,e,n):u)}function d7(t,e){var n=t.domLoaded,r=t.slidesToShow,i=t.containerWidth,s=t.itemWidth,o=e.deviceType,a=e.responsive,u=e.slidesToSlide||1,c=!!(n&&r&&i&&s);return e.ssr&&e.deviceType&&!c&&Object.keys(a).forEach(function(d){var f=a[d].slidesToSlide;o===d&&f&&(u=f)}),c&&Object.keys(a).forEach(function(d){var f=a[d],g=f.breakpoint,y=f.slidesToSlide,S=g.max,C=g.min;y&&window.innerWidth>=C&&window.innerWidth<=S&&(u=y)}),u}Ue.notEnoughChildren=Zg,Ue.getInitialState=a7,Ue.getIfSlideIsVisbile=l7,Ue.getTransformForCenterMode=tS,Ue.isInLeftEnd=u7,Ue.isInRightEnd=nS,Ue.getTransformForPartialVsibile=rS,Ue.parsePosition=iS,Ue.getTransform=c7,Ue.getSlidesToSlide=d7;var e1={};Object.defineProperty(e1,"__esModule",{value:!0});var h7=function(t,e,n){var r;return function(){var i=arguments;r||(t.apply(this,i),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},e))}};e1.default=h7;var sS={};(function(t){function e(n,r){var i=r.partialVisbile,s=r.partialVisible,o=r.centerMode,a=r.ssr,u=r.responsive;if((i||s)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!u)throw a?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(u&&typeof u!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})(sS);var t1={};Object.defineProperty(t1,"__esModule",{value:!0});var f7=Ue;function p7(t,e,n){n===void 0&&(n=0);var r,i,s=t.slidesToShow,o=t.currentSlide,a=t.itemWidth,u=t.totalItems,c=f7.getSlidesToSlide(t,e),d=o+1+n+s+(0<n?0:c);return i=d<=u?-a*(r=o+n+(0<n?0:c)):u<d&&o!==u-s?-a*(r=u-s):r=void 0,{nextSlides:r,nextPosition:i}}t1.populateNextSlides=p7;var n1={};Object.defineProperty(n1,"__esModule",{value:!0});var m7=M,g7=Ue,y7=Ue;function v7(t,e,n){n===void 0&&(n=0);var r,i,s=t.currentSlide,o=t.itemWidth,a=t.slidesToShow,u=e.children,c=e.showDots,d=e.infinite,f=g7.getSlidesToSlide(t,e),g=s-n-(0<n?0:f),y=(m7.Children.toArray(u).length-a)%f;return i=0<=g?(r=g,c&&!d&&0<y&&y7.isInRightEnd(t)&&(r=s-y),-o*r):r=g<0&&s!==0?0:void 0,{nextSlides:r,nextPosition:i}}n1.populatePreviousSlides=v7;var oS={};(function(t){function e(n,r,i,s,o,a){var u,c,d=n.itemWidth,f=n.slidesToShow,g=n.totalItems,y=n.currentSlide,S=r.infinite,C=!1,A=Math.round((i-s)/d),w=Math.round((s-i)/d),v=i<o;if(o<i&&A<=f){u="right";var E=Math.abs(-d*(g-f)),k=a-(s-o),D=y===g-f;(Math.abs(k)<=E||D&&S)&&(c=k,C=!0)}return v&&w<=f&&(u="left",((k=a+(o-s))<=0||y===0&&S)&&(C=!0,c=k)),{direction:u,nextPosition:c,canContinue:C}}Object.defineProperty(t,"__esModule",{value:!0}),t.populateSlidesOnMouseTouchMove=e})(oS);Object.defineProperty(Ie,"__esModule",{value:!0});var iu=Vd;Ie.getOriginalCounterPart=iu.getOriginalCounterPart,Ie.getClones=iu.getClones,Ie.checkClonesPosition=iu.checkClonesPosition,Ie.getInitialSlideInInfiniteMode=iu.getInitialSlideInInfiniteMode;var rf=Vs;Ie.getWidthFromDeviceType=rf.getWidthFromDeviceType,Ie.getPartialVisibilityGutter=rf.getPartialVisibilityGutter,Ie.getItemClientSideWidth=rf.getItemClientSideWidth;var Tr=Ue;Ie.getInitialState=Tr.getInitialState,Ie.getIfSlideIsVisbile=Tr.getIfSlideIsVisbile,Ie.getTransformForCenterMode=Tr.getTransformForCenterMode,Ie.getTransformForPartialVsibile=Tr.getTransformForPartialVsibile,Ie.isInLeftEnd=Tr.isInLeftEnd,Ie.isInRightEnd=Tr.isInRightEnd,Ie.notEnoughChildren=Tr.notEnoughChildren,Ie.getSlidesToSlide=Tr.getSlidesToSlide;var _7=e1;Ie.throttle=_7.default;var w7=sS;Ie.throwError=w7.default;var E7=t1;Ie.populateNextSlides=E7.populateNextSlides;var T7=n1;Ie.populatePreviousSlides=T7.populatePreviousSlides;var I7=oS;Ie.populateSlidesOnMouseTouchMove=I7.populateSlidesOnMouseTouchMove;var Fd={},S7=ju&&ju.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Fd,"__esModule",{value:!0});var x7=M;function C7(t){return"clientY"in t}Fd.isMouseMoveEvent=C7;var A7=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return S7(e,t),e}(x7.Component);Fd.default=A7;var r1={},i1={};Object.defineProperty(i1,"__esModule",{value:!0});var R7=Vd,k7=Ue;function P7(t,e,n,r){var i={},s=k7.getSlidesToSlide(e,n);return Array(t).fill(0).forEach(function(o,a){var u=R7.getOriginalCounterPart(a,e,r);if(a===0)i[0]=u;else{var c=i[a-1]+s;i[a]=c}}),i}i1.getLookupTableForNextSlides=P7;Object.defineProperty(r1,"__esModule",{value:!0});var Uo=M,b7=Vd,N7=i1,m_=Ue,O7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.getState,s=e.showDots,o=e.customDot,a=e.dotListClass,u=e.infinite,c=e.children;if(!s||m_.notEnoughChildren(n))return null;var d,f=n.currentSlide,g=n.slidesToShow,y=m_.getSlidesToSlide(n,e),S=Uo.Children.toArray(c);d=u?Math.ceil(S.length/y):Math.ceil((S.length-g)/y)+1;var C=N7.getLookupTableForNextSlides(d,n,e,S),A=b7.getOriginalIndexLookupTableByClones(g,S),w=A[f];return Uo.createElement("ul",{className:"react-multi-carousel-dot-list "+a},Array(d).fill(0).map(function(v,E){var k,D;if(u){D=C[E];var L=A[D];k=w===L||L<=w&&w<L+y}else{var I=S.length-g,_=E*y;k=(D=I<_?I:_)===f||D<f&&f<D+y&&f<S.length-g}return o?Uo.cloneElement(o,{index:E,active:k,key:E,onClick:function(){return r(D)},carouselState:i()}):Uo.createElement("li",{"data-index":E,key:E,className:"react-multi-carousel-dot "+(k?"react-multi-carousel-dot--active":"")},Uo.createElement("button",{"aria-label":"Go to slide "+(E+1),onClick:function(){return r(D)}}))}))};r1.default=O7;var zd={};Object.defineProperty(zd,"__esModule",{value:!0});var Vc=M,D7=function(t){var e=t.customLeftArrow,n=t.getState,r=t.previous,i=t.disabled,s=t.rtl;if(e)return Vc.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return Vc.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return r()},type:"button",disabled:i})};zd.LeftArrow=D7;var L7=function(t){var e=t.customRightArrow,n=t.getState,r=t.next,i=t.disabled,s=t.rtl;if(e)return Vc.cloneElement(e,{onClick:function(){return r()},carouselState:n(),disabled:i,rtl:s});var o=s?"rtl":"";return Vc.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return r()},type:"button",disabled:i})};zd.RightArrow=L7;var s1={};Object.defineProperty(s1,"__esModule",{value:!0});var su=M,sf=Ie,M7=function(t){var e=t.props,n=t.state,r=t.goToSlide,i=t.clones,s=t.notEnoughChildren,o=n.itemWidth,a=e.children,u=e.infinite,c=e.itemClass,d=e.itemAriaLabel,f=e.partialVisbile,g=e.partialVisible,y=sf.getInitialState(n,e),S=y.flexBisis,C=y.shouldRenderOnSSR,A=y.domFullyLoaded,w=y.partialVisibilityGutter;return y.shouldRenderAtAll?(f&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),su.createElement(su.Fragment,null,(u?i:su.Children.toArray(a)).map(function(v,E){return su.createElement("li",{key:E,"data-index":E,onClick:function(){e.focusOnSelect&&r(E)},"aria-hidden":sf.getIfSlideIsVisbile(E,n)?"false":"true","aria-label":d||(v.props.ariaLabel?v.props.ariaLabel:null),style:{flex:C?"1 0 "+S+"%":"auto",position:"relative",width:A?((f||g)&&w&&!s?o-w:o)+"px":"auto"},className:"react-multi-carousel-item "+(sf.getIfSlideIsVisbile(E,n)?"react-multi-carousel-item--active":"")+" "+c},v)}))):null};s1.default=M7;var j7=ju&&ju.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Jg,"__esModule",{value:!0});var Ge=M,be=Ie,vi=Fd,V7=r1,g_=zd,F7=s1,ou=Ue,xn=400,y_="transform 400ms ease-in-out",z7=function(t){function e(n){var r=t.call(this,n)||this;return r.containerRef=Ge.createRef(),r.listRef=Ge.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:Ge.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=be.throttle(r.next.bind(r),n.transitionDuration||xn,r.setIsInThrottle),r.previous=be.throttle(r.previous.bind(r),n.transitionDuration||xn,r.setIsInThrottle),r.goToSlide=be.throttle(r.goToSlide.bind(r),n.transitionDuration||xn,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return j7(e,t),e.prototype.resetTotalItems=function(){var n=this,r=Ge.Children.count(this.props.children),i=be.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:i},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},e.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},e.prototype.setTransformDirectly=function(n,r){var i=this.props.additionalTransfrom;this.transformPlaceHolder=n;var s=ou.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(s+i)+"px,0,0)")},e.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||y_:"none")},e.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.setClones=function(n,r,i,s){var o=this;s===void 0&&(s=!1),this.isAnimationAllowed=!1;var a=Ge.Children.toArray(this.props.children),u=be.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,a),c=be.getClones(this.state.slidesToShow,a),d=a.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:i&&!s?d:u},function(){o.correctItemsPosition(r||o.state.itemWidth)})},e.prototype.setItemsToShow=function(n,r){var i=this,s=this.props.responsive;Object.keys(s).forEach(function(o){var a=s[o],u=a.breakpoint,c=a.items,d=u.max,f=u.min,g=[window.innerWidth];window.screen&&window.screen.width&&g.push(window.screen.width);var y=Math.min.apply(Math,g);f<=y&&y<=d&&(i.setState({slidesToShow:c,deviceType:o}),i.setContainerAndItemWidth(c,n,r))})},e.prototype.setContainerAndItemWidth=function(n,r,i){var s=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,a=be.getItemClientSideWidth(this.props,n,o);this.setState({containerWidth:o,itemWidth:a},function(){s.props.infinite&&s.setClones(n,a,r,i)}),r&&this.correctItemsPosition(a)}},e.prototype.correctItemsPosition=function(n,r,i){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var s=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;i&&this.setTransformDirectly(s,!0),this.setState({transform:s})},e.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},e.prototype.componentDidUpdate=function(n,r){var i=this,s=n.keyBoardControl,o=n.autoPlay,a=n.children,u=r.containerWidth,c=r.domLoaded,d=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==u&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){i.setItemsToShow(!0)},this.props.transitionDuration||xn)),s&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!s&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),a.length!==this.props.children.length?e.clonesTimeout=setTimeout(function(){i.props.infinite?i.setClones(i.state.slidesToShow,i.state.itemWidth,!0,!0):i.resetTotalItems()},this.props.transitionDuration||xn):this.props.infinite&&this.state.currentSlide!==d&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&be.isInRightEnd(this.state)){var f=this.props.transitionDuration||xn;e.isInThrottleTimeout=setTimeout(function(){i.setIsInThrottle(!1),i.resetAutoplayInterval(),i.goToSlide(0,void 0,!!i.props.rewindWithAnimation)},f+this.props.autoPlaySpeed)}},e.prototype.correctClonesPosition=function(n){var r=this,i=n.domLoaded,s=Ge.Children.toArray(this.props.children),o=be.checkClonesPosition(this.state,s,this.props),a=o.isReachingTheEnd,u=o.isReachingTheStart,c=o.nextSlide,d=o.nextPosition;this.state.domLoaded&&i&&(a||u)&&(this.isAnimationAllowed=!1,e.transformTimeout=setTimeout(function(){r.setState({transform:d,currentSlide:c})},this.props.transitionDuration||xn))},e.prototype.next=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!be.notEnoughChildren(this.state)){var a=be.populateNextSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition,d=this.state.currentSlide;u!==void 0&&c!==void 0&&(typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout=setTimeout(function(){s(d,r.getState())},r.props.transitionDuration||xn))}))}},e.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var i=this.props,s=i.afterChange,o=i.beforeChange;if(!be.notEnoughChildren(this.state)){var a=be.populatePreviousSlides(this.state,this.props,n),u=a.nextSlides,c=a.nextPosition;if(u!==void 0&&c!==void 0){var d=this.state.currentSlide;typeof o=="function"&&o(u,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:u},function(){typeof s=="function"&&(e.afterChangeTimeout2=setTimeout(function(){s(d,r.getState())},r.props.transitionDuration||xn))})}}},e.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),e.clonesTimeout&&clearTimeout(e.clonesTimeout),e.isInThrottleTimeout&&clearTimeout(e.isInThrottleTimeout),e.transformTimeout&&clearTimeout(e.transformTimeout),e.afterChangeTimeout&&clearTimeout(e.afterChangeTimeout),e.afterChangeTimeout2&&clearTimeout(e.afterChangeTimeout2),e.afterChangeTimeout3&&clearTimeout(e.afterChangeTimeout3)},e.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},e.prototype.getCords=function(n){var r=n.clientX,i=n.clientY;return{clientX:ou.parsePosition(this.props,r),clientY:ou.parsePosition(this.props,i)}},e.prototype.handleDown=function(n){if(!(!vi.isMouseMoveEvent(n)&&!this.props.swipeable||vi.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(vi.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY;this.onMove=!0,this.initialX=i,this.initialY=s,this.lastX=i,this.isAnimationAllowed=!1}},e.prototype.handleMove=function(n){if(!(!vi.isMouseMoveEvent(n)&&!this.props.swipeable||vi.isMouseMoveEvent(n)&&!this.props.draggable||be.notEnoughChildren(this.state))){var r=this.getCords(vi.isMouseMoveEvent(n)?n:n.touches[0]),i=r.clientX,s=r.clientY,o=this.initialX-i,a=this.initialY-s;if(this.onMove){if(!(Math.abs(o)>Math.abs(a)))return;var u=be.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,i,this.transformPlaceHolder),c=u.direction,d=u.nextPosition,f=u.canContinue;c&&(this.direction=c,f&&d!==void 0&&this.setTransformDirectly(d)),this.lastX=i}}},e.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,i=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!i&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var s=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(s)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(s=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(s)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},e.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),i=r.top,s=i===void 0?0:i,o=r.left,a=o===void 0?0:o,u=r.bottom,c=u===void 0?0:u,d=r.right,f=d===void 0?0:d;return 0<=s&&0<=a&&c<=(window.innerHeight||document.documentElement.clientHeight)&&f<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},e.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},e.prototype.handleEnter=function(n){vi.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},e.prototype.goToSlide=function(n,r,i){var s=this;if(i===void 0&&(i=!0),!this.isInThrottle){var o=this.state.itemWidth,a=this.props,u=a.afterChange,c=a.beforeChange,d=this.state.currentSlide;typeof c!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=i,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-o*n},function(){s.props.infinite&&s.correctClonesPosition({domLoaded:!0}),typeof u!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(e.afterChangeTimeout3=setTimeout(function(){u(d,s.getState())},s.props.transitionDuration||xn))})}},e.prototype.getState=function(){return this.state},e.prototype.renderLeftArrow=function(n){var r=this,i=this.props,s=i.customLeftArrow,o=i.rtl;return Ge.createElement(g_.LeftArrow,{customLeftArrow:s,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:o})},e.prototype.renderRightArrow=function(n){var r=this,i=this.props,s=i.customRightArrow,o=i.rtl;return Ge.createElement(g_.RightArrow,{customRightArrow:s,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:o})},e.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?Ge.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(i,s){return n.goToSlide(i,s)},carouselState:this.getState()}):null},e.prototype.renderDotsList=function(){var n=this;return Ge.createElement(V7.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},e.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=Ge.Children.toArray(this.props.children);n=be.getClones(this.state.slidesToShow,r)}return Ge.createElement(F7.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:be.notEnoughChildren(this.state),props:this.props})},e.prototype.render=function(){var n=this.props,r=n.deviceType,i=n.arrows,s=n.renderArrowsWhenDisabled,o=n.removeArrowOnDeviceType,a=n.infinite,u=n.containerClass,c=n.sliderClass,d=n.customTransition,f=n.additionalTransfrom,g=n.renderDotsOutside,y=n.renderButtonGroupOutside,S=n.className,C=n.rtl,A=be.getInitialState(this.state,this.props),w=A.shouldRenderOnSSR,v=A.shouldRenderAtAll,E=be.isInLeftEnd(this.state),k=be.isInRightEnd(this.state),D=i&&!(o&&(r&&-1<o.indexOf(r)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!be.notEnoughChildren(this.state)&&v,L=!a&&E,I=!a&&k,_=ou.getTransform(this.state,this.props);return Ge.createElement(Ge.Fragment,null,Ge.createElement("div",{className:"react-multi-carousel-list "+u+" "+S,dir:C?"rtl":"ltr",ref:this.containerRef},Ge.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?d||y_:"none",overflow:w?"hidden":"unset",transform:"translate3d("+(_+f)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),D&&(!L||s)&&this.renderLeftArrow(L),D&&(!I||s)&&this.renderRightArrow(I),v&&!y&&this.renderButtonGroups(),v&&!g&&this.renderDotsList()),v&&g&&this.renderDotsList(),v&&y&&this.renderButtonGroups())},e.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},e}(Ge.Component);Jg.default=z7;Object.defineProperty(Xg,"__esModule",{value:!0});var U7=Jg;Xg.default=U7.default;var $7=Xg;const Wp=R_($7),B7=_e.div`
    display: block;
    margin: 5rem auto 3rem auto;
    font-family: "poppins", sans-serif;
    text-align: center;
    h1 {
        font-size: 3rem;
        font-weight: 500;
    }
    h7 {
        font-weight: 500;
        color: #696969;
    }
    .container {
        margin: 3rem auto 1rem auto;
    }
    .stars {
        margin: 0rem auto 4rem auto;
        color: orange;
        font-size: 1.3rem;
    }
    @media (max-width: 599px) and (min-width: 0px) {
        h1 {
            font-size: 2.5rem;
        }
    }
`,W7={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},q7=[{id:1,name:"Joseph Siant",comment:"The quality of Fresh Bite's fruits, vegetables, and dairy products is consistently top-notch. Everything is always fresh, well-packed, and delivered on time. I couldn't ask for better service!",star:"3.5"},{id:2,name:"Mark Tommy",comment:"Fresh Bite has completely changed the way I shop for groceries. The convenience of having fresh produce delivered to my door is unbeatable, and the products are always in perfect condition.",star:"4.5"},{id:3,name:"Alina Sander",comment:"I've been using Fresh Bite for a few months now, and I'm really impressed. The variety of fresh fruits, vegetables, and dairy is fantastic, and I always receive my orders exactly as requested.",star:"4.5"},{id:4,name:"John Anthony",comment:"Fresh Bite makes healthy eating so much easier! The freshness of their products is unmatched, and the ease of online ordering and fast delivery has saved me so much time in my busy schedule.",star:"3.5"}],H7=()=>p.jsx(p.Fragment,{children:p.jsxs(B7,{children:[p.jsx("h1",{children:"Testimonials"}),p.jsx("h7",{children:"See what our clients are saying about us"}),p.jsx(Wp,{responsive:W7,showDots:!0,autoPlay:!0,autoPlaySpeed:5e3,infinite:!0,dotListClass:"custom-dot-list",itemClass:"carousel-item-padding-40-px",arrows:!1,pauseOnHover:!1,children:q7.map(t=>p.jsxs("div",{className:"container",children:[p.jsx("p",{className:"card-text",children:t.comment}),p.jsx("h5",{className:"card-title",children:t.name}),p.jsx("div",{className:"stars",children:Array.from({length:t.star},(e,n)=>p.jsx("span",{children:"★"},n))})]},t.id))})]})});function G7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"},child:[]}]})(t)}function K7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.974 0 0 200.974 0 448c0 192.526 122.082 357.042 292.882 420.282-4.919-43.857-4.147-115.682 3.97-150.457 7.602-32.666 49.11-208.167 49.11-208.167S333.43 484.563 333.43 447.5c0-58.244 33.744-101.7 75.767-101.7 35.742 0 52.977 26.834 52.977 58.984 0 35.951-22.857 89.652-34.696 139.422-9.873 41.702 20.907 75.703 62.012 75.703 74.431 0 131.644-78.49 131.644-191.77 0-100.266-72.03-170.38-174.906-170.38-119.144 0-189.081 89.377-189.081 181.752 0 35.983 13.852 74.575 31.167 95.579 3.414 4.155 3.914 7.78 2.9 12-3.174 13.223-10.228 41.669-11.63 47.499-1.82 7.683-6.073 9.278-13.998 5.589-52.314-24.354-85.012-100.813-85.012-162.246 0-132.093 95.965-253.428 276.718-253.428 145.286 0 258.18 103.504 258.18 241.88 0 144.334-91.02 260.482-217.316 260.482-42.441 0-82.323-22.05-95.965-48.096 0 0-21.003 79.956-26.11 99.558-8.813 33.9-46.539 104.13-65.477 136.03A446.164 446.164 0 0 0 448 896c247.035 0 448-200.965 448-448C896 200.974 695.035 0 448 0",transform:"translate(64 64)"},child:[]}]})(t)}function Q7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"},child:[]}]})(t)}function Y7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"176",cy:"416",r:"32"},child:[]},{tag:"circle",attr:{cx:"400",cy:"416",r:"32"},child:[]},{tag:"path",attr:{d:"M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z"},child:[]}]})(t)}function X7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"},child:[]},{tag:"path",attr:{d:"M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"},child:[]}]})(t)}function J7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"},child:[]}]})(t)}function Z7(t){return Pe({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 11.523438 10 L 11.382812 10.023438 C 10.942813 10.078437 10.516109 10.243719 10.162109 10.511719 C 10.083109 10.558719 10.014547 10.622547 9.9355469 10.685547 C 9.9275469 10.669547 9.9199219 10.654672 9.9199219 10.638672 C 9.9039219 10.551672 9.8958594 10.457094 9.8808594 10.371094 C 9.8568594 10.229094 9.7787187 10.158203 9.6367188 10.158203 L 9.265625 10.158203 C 9.038625 10.156203 9 10.204781 9 10.425781 L 9 17.25 C 9.008 17.352 9.07025 17.406062 9.15625 17.414062 L 9.8417969 17.414062 C 9.9357969 17.414062 9.9900469 17.352 9.9980469 17.25 C 10.006047 17.219 10.005859 17.18725 10.005859 17.15625 L 10.005859 14.828125 C 10.036859 14.859125 10.060172 14.876578 10.076172 14.892578 C 10.650172 15.372578 11.311156 15.528719 12.035156 15.386719 C 12.696156 15.252719 13.152359 14.852672 13.443359 14.263672 C 13.671359 13.815672 13.765437 13.334844 13.773438 12.839844 C 13.789438 12.295844 13.741672 11.753187 13.513672 11.242188 C 13.246672 10.613188 12.789469 10.195687 12.105469 10.054688 C 12.003469 10.030688 11.894016 10.023813 11.791016 10.007812 C 11.697016 9.9998125 11.610438 10 11.523438 10 z M 16.525391 10 C 16.494391 10.008 16.462641 10.015625 16.431641 10.015625 C 16.116641 10.031625 15.810906 10.071391 15.503906 10.150391 C 15.306906 10.197391 15.118687 10.267078 14.929688 10.330078 C 14.811687 10.369078 14.755859 10.456031 14.755859 10.582031 C 14.763859 10.684031 14.755859 10.794484 14.755859 10.896484 C 14.763859 11.053484 14.827562 11.094688 14.976562 11.054688 C 15.228563 10.991687 15.478469 10.920047 15.730469 10.873047 C 16.123469 10.802047 16.524781 10.771172 16.925781 10.826172 C 17.137781 10.865172 17.33475 10.920562 17.46875 11.101562 C 17.58675 11.250562 17.634578 11.439906 17.642578 11.628906 C 17.650578 11.895906 17.650391 12.162687 17.650391 12.429688 C 17.650391 12.445688 17.650578 12.46075 17.642578 12.46875 L 17.603516 12.46875 C 17.265516 12.38275 16.918266 12.3355 16.572266 12.3125 C 16.210266 12.2965 15.849906 12.3115 15.503906 12.4375 C 15.086906 12.5795 14.748734 12.831234 14.552734 13.240234 C 14.403734 13.554234 14.380734 13.884656 14.427734 14.222656 C 14.498734 14.678656 14.718141 15.024141 15.119141 15.244141 C 15.504141 15.456141 15.912891 15.480969 16.337891 15.417969 C 16.825891 15.346969 17.257766 15.143125 17.634766 14.828125 C 17.650766 14.812125 17.665641 14.804063 17.681641 14.789062 C 17.705641 14.915062 17.720141 15.032578 17.744141 15.142578 C 17.760141 15.244578 17.823969 15.308406 17.917969 15.316406 L 18.445312 15.316406 C 18.524313 15.316406 18.59375 15.244203 18.59375 15.158203 C 18.60175 15.134203 18.601562 15.104266 18.601562 15.072266 L 18.601562 11.658203 C 18.599563 11.524203 18.591359 11.384 18.568359 11.25 C 18.505359 10.833 18.332078 10.487578 17.955078 10.267578 C 17.743078 10.141578 17.507859 10.078063 17.255859 10.039062 C 17.137859 10.023062 17.028156 10.015 16.910156 10 L 16.525391 10 z M 23.240234 10 C 23.130234 9.992 23.027281 10.062062 22.988281 10.164062 C 22.972281 10.212062 22.957406 10.251828 22.941406 10.298828 L 21.816406 13.515625 C 21.737406 13.743625 21.651266 13.978469 21.572266 14.230469 C 21.557266 14.190469 21.550969 14.176344 21.542969 14.152344 C 21.126969 13.004344 20.717781 11.855031 20.300781 10.707031 C 20.238781 10.519031 20.166703 10.339203 20.095703 10.158203 C 20.064703 10.072203 19.994578 10.009766 19.892578 10.009766 C 19.648578 10.001766 19.404344 10.001953 19.152344 10.001953 C 19.074344 10.001953 19.034781 10.071391 19.050781 10.150391 C 19.066781 10.213391 19.089281 10.284656 19.113281 10.347656 C 19.742281 11.903656 20.380578 13.460391 21.017578 15.025391 C 21.072578 15.158391 21.080578 15.268344 21.017578 15.402344 C 20.915578 15.638344 20.82875 15.881187 20.71875 16.117188 C 20.62375 16.329187 20.466469 16.487781 20.230469 16.550781 C 20.073469 16.589781 19.899375 16.604078 19.734375 16.580078 C 19.655375 16.573078 19.577047 16.558781 19.498047 16.550781 C 19.388047 16.542781 19.334172 16.589031 19.326172 16.707031 L 19.326172 17.021484 C 19.334172 17.202484 19.389312 17.2815 19.570312 17.3125 C 19.743312 17.3445 19.924281 17.368953 20.113281 17.376953 C 20.663281 17.384953 21.095906 17.163594 21.378906 16.683594 C 21.496906 16.494594 21.591734 16.29775 21.677734 16.09375 C 22.439734 14.16775 23.194219 12.248453 23.949219 10.314453 C 23.972219 10.259453 23.988094 10.205578 23.996094 10.142578 C 24.012094 10.048578 23.965953 10.001 23.876953 10 L 23.240234 10 z M 11.517578 10.818359 C 11.997578 10.857359 12.38975 11.092391 12.59375 11.650391 C 12.71975 11.996391 12.751953 12.351891 12.751953 12.712891 C 12.751953 13.051891 12.727 13.372312 12.625 13.695312 C 12.405 14.379312 11.902812 14.646234 11.257812 14.615234 C 10.801813 14.591234 10.416688 14.418969 10.054688 14.167969 C 10.015688 14.143969 9.9900469 14.105406 9.9980469 14.066406 L 9.9980469 11.353516 C 9.9900469 11.306516 10.015687 11.266187 10.054688 11.242188 C 10.494687 10.935187 10.982578 10.779359 11.517578 10.818359 z M 16.378906 12.998047 C 16.513656 12.986297 16.649703 12.988406 16.783203 13.003906 C 17.050203 13.027906 17.318937 13.074281 17.585938 13.113281 C 17.640937 13.121281 17.65625 13.145359 17.65625 13.193359 C 17.64925 13.350359 17.65625 13.49925 17.65625 13.65625 C 17.65625 13.81325 17.648437 13.954328 17.648438 14.111328 C 17.656437 14.150328 17.632563 14.182078 17.601562 14.205078 C 17.239563 14.464078 16.846437 14.637547 16.398438 14.685547 C 16.217437 14.701547 16.036281 14.701859 15.863281 14.630859 C 15.666281 14.559859 15.517891 14.395219 15.462891 14.199219 C 15.399891 13.995219 15.398125 13.782125 15.453125 13.578125 C 15.539125 13.311125 15.728469 13.160219 15.980469 13.074219 C 16.109969 13.034719 16.244156 13.009797 16.378906 12.998047 z M 24.53125 17.498047 C 23.83125 17.507797 23.003953 17.663516 22.376953 18.103516 C 22.182953 18.237516 22.218594 18.425391 22.433594 18.400391 C 23.138594 18.316391 24.707281 18.125375 24.988281 18.484375 C 25.269281 18.843375 24.676063 20.321422 24.414062 20.982422 C 24.332062 21.179422 24.504547 21.261328 24.685547 21.111328 C 25.858547 20.128328 26.163828 18.069437 25.923828 17.773438 C 25.803828 17.625438 25.23125 17.488297 24.53125 17.498047 z M 6.1445312 17.890625 C 5.9989375 17.909797 5.9356406 18.088266 6.0878906 18.228516 C 8.6998906 20.584516 12.149469 22 15.980469 22 C 18.713469 22 21.886172 21.141391 24.076172 19.525391 C 24.438172 19.257391 24.130766 18.855625 23.759766 19.015625 C 21.303766 20.057625 18.635984 20.558594 16.208984 20.558594 C 12.611984 20.558594 9.1295 19.572641 6.3125 17.931641 C 6.25075 17.895641 6.1930625 17.884234 6.1445312 17.890625 z"},child:[]}]})(t)}function eO(t){return Pe({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355 6 2 7.355 2 9 L 2 23 C 2 24.645 3.355 26 5 26 L 27 26 C 28.645 26 30 24.645 30 23 L 30 9 C 30 7.355 28.645 6 27 6 L 5 6 z M 5 8 L 27 8 C 27.566 8 28 8.434 28 9 L 28 23 C 28 23.566 27.566 24 27 24 L 5 24 C 4.434 24 4 23.566 4 23 L 4 9 C 4 8.434 4.434 8 5 8 z M 10.998047 11 C 10.533047 11 10.002203 11.265344 9.6582031 11.652344 C 9.3922031 11.973344 9.103125 12.483187 9.203125 12.992188 C 9.680125 13.048187 10.201 12.749328 10.5 12.361328 C 10.832 12.007328 11.020047 11.509 10.998047 11 z M 13 13 L 13 19 L 13.931641 19 L 13.931641 16.945312 L 15.228516 16.945312 C 16.403516 16.945312 17.234375 16.136656 17.234375 14.972656 C 17.234375 13.797656 16.414 13 15.25 13 L 13 13 z M 7.8378906 13.523438 C 6.7988906 13.523438 6 14.433281 6 15.738281 C 6 17.438281 7.1944531 19 7.9394531 19 C 8.3894531 19 8.5543437 18.697266 9.1523438 18.697266 C 9.7033437 18.697266 9.8767031 19 10.345703 19 C 11.236703 19 11.972 17.190078 12 17.080078 C 11.853 17.006078 10.997047 16.602906 10.998047 15.628906 C 10.998047 14.682906 11.779406 14.258234 11.816406 14.240234 C 11.384406 13.597234 10.704266 13.523438 10.447266 13.523438 C 9.8502656 13.523438 9.3279688 13.845703 9.0429688 13.845703 C 8.7489688 13.845703 8.3158906 13.523438 7.8378906 13.523438 z M 13.931641 13.787109 L 15.005859 13.787109 C 15.814859 13.787109 16.28125 14.218656 16.28125 14.972656 C 16.28125 15.726656 15.814859 16.169922 15.005859 16.169922 L 13.931641 16.169922 L 13.931641 13.787109 z M 19.429688 14.53125 C 18.443687 14.53125 17.711453 15.097047 17.689453 15.873047 L 18.53125 15.873047 C 18.59825 15.507047 18.94025 15.263672 19.40625 15.263672 C 19.98225 15.263672 20.294922 15.529578 20.294922 16.017578 L 20.294922 16.349609 L 19.130859 16.427734 C 18.055859 16.494734 17.466797 16.938125 17.466797 17.703125 C 17.466797 18.479125 18.065688 19 18.929688 19 C 19.516687 19 20.061688 18.700375 20.304688 18.234375 L 20.326172 18.234375 L 20.326172 18.955078 L 21.191406 18.955078 L 21.191406 15.962891 C 21.191406 15.097891 20.493688 14.53125 19.429688 14.53125 z M 21.574219 14.587891 L 23.148438 18.966797 L 23.070312 19.232422 C 22.926313 19.676422 22.693203 19.853516 22.283203 19.853516 C 22.206203 19.853516 22.062812 19.841797 22.007812 19.841797 L 22.007812 20.5625 C 22.063813 20.5735 22.294328 20.583984 22.361328 20.583984 C 23.270328 20.583984 23.703078 20.2295 24.080078 19.1875 L 25.708984 14.587891 L 24.765625 14.587891 L 23.669922 18.134766 L 23.646484 18.134766 L 22.550781 14.587891 L 21.574219 14.587891 z M 20.294922 16.980469 L 20.294922 17.314453 L 20.292969 17.314453 C 20.292969 17.879453 19.816547 18.277344 19.185547 18.277344 C 18.686547 18.277344 18.376953 18.045688 18.376953 17.679688 C 18.376953 17.302688 18.675672 17.079875 19.263672 17.046875 L 20.294922 16.980469 z"},child:[]}]})(t)}function tO(t){return Pe({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 12 9 C 8.144531 9 5 12.144531 5 16 C 5 19.855469 8.144531 23 12 23 C 13.484375 23 14.863281 22.546875 16 21.75 C 17.132813 22.542969 18.511719 23 20 23 C 23.855469 23 27 19.855469 27 16 C 27 12.144531 23.855469 9 20 9 C 18.511719 9 17.132813 9.457031 16 10.25 C 14.863281 9.453125 13.484375 9 12 9 Z M 12 11 C 13.28125 11 14.429688 11.496094 15.3125 12.28125 C 14.902344 12.792969 14.566406 13.371094 14.34375 14 L 16.5625 14 C 16.703125 14.320313 16.835938 14.652344 16.90625 15 L 14.09375 15 C 14.039063 15.324219 14 15.65625 14 16 C 14 16.34375 14.039063 16.675781 14.09375 17 L 16.90625 17 C 16.835938 17.347656 16.703125 17.679688 16.5625 18 L 14.34375 18 C 14.566406 18.628906 14.902344 19.207031 15.3125 19.71875 C 14.429688 20.503906 13.28125 21 12 21 C 9.226563 21 7 18.773438 7 16 C 7 13.226563 9.226563 11 12 11 Z M 20 11 C 22.773438 11 25 13.226563 25 16 C 25 18.773438 22.773438 21 20 21 C 19.085938 21 18.238281 20.742188 17.5 20.3125 C 18.441406 19.121094 19 17.628906 19 16 C 19 14.371094 18.441406 12.878906 17.5 11.6875 C 18.238281 11.257813 19.085938 11 20 11 Z"},child:[]}]})(t)}function nO(t){return Pe({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 19.40625 12.375 C 17.480469 12.375 16.46875 13.324219 16.46875 14.53125 C 16.46875 16.710938 19.03125 16.410156 19.03125 17.53125 C 19.03125 17.722656 18.871094 18.15625 17.8125 18.15625 C 16.753906 18.15625 16.0625 17.78125 16.0625 17.78125 L 15.75 19.21875 C 15.75 19.21875 16.40625 19.625 17.71875 19.625 C 19.03125 19.625 20.875 18.617188 20.875 17.15625 C 20.875 15.398438 18.3125 15.28125 18.3125 14.5 C 18.3125 14.101563 18.652344 13.78125 19.5625 13.78125 C 20.15625 13.78125 20.8125 14.25 20.8125 14.25 L 21.125 12.71875 C 21.125 12.71875 20.253906 12.375 19.40625 12.375 Z M 11.1875 12.5 L 9.5 17.4375 C 9.5 17.4375 9.414063 17.011719 9.375 16.75 C 8.421875 14.609375 6.875 13.8125 6.875 13.8125 L 8.34375 19.40625 L 10.34375 19.40625 L 13.15625 12.5 Z M 13.875 12.5 L 12.78125 19.40625 L 14.625 19.40625 L 15.71875 12.5 Z M 23.8125 12.5 L 20.8125 19.40625 L 22.625 19.40625 L 23 18.4375 L 25.3125 18.4375 L 25.5 19.40625 L 27.15625 19.40625 L 25.75 12.5 Z M 4.84375 12.53125 C 4.84375 12.53125 8.441406 13.632813 9.28125 16.34375 L 8.65625 13.21875 C 8.65625 13.21875 8.382813 12.53125 7.65625 12.53125 Z M 24.5 14.5 L 25.03125 17.09375 L 23.53125 17.09375 Z"},child:[]}]})(t)}const rO=_e.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-family: "poppins", sans-serif; 
    margin: 0rem 0rem 0rem 0rem;
    background-color: whitesmoke;
    padding: 3rem 0rem 1rem 0rem;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    .mobile-desc {
        display: none;
    }
    .links {
        display: flex;
        flex-direction: column;
        a {
            text-decoration: none;
            color: #383838;
            padding: 0.3rem 0rem 0.3rem 0rem;
        }
        a:hover {
            color: black;
            text-decoration: none;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        text-align: center;
        h4 {
            margin-bottom: 2rem;
            font-size: 2rem;
        }
        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            a {
                color: #494949;
                font-size: 1.7rem;
                border: 0px solid none;
                border-radius: 50rem;
                padding: 0rem 0.1rem 0rem 0.1rem;
            }
            a:hover {
                cursor: pointer;
                color: black;
            }
        }
    }
    .store {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        a {
            padding: 0.5rem 2.5rem 0.5rem 1.3rem;
            background-color: #696969;
            border: 0px;
            border-radius: 3rem;
            color: white;
            /* height: 2.5rem; */
            width: max-content;
            margin: 0rem 0rem 0.5rem 0rem;
            font-size: 0.8rem;
            text-decoration: none;
        }
        a:hover {
            cursor: pointer;
            background-color: black;
            transition: 0.5s;
            text-decoration: none;
        }
    }
    .payment-icons {
        display: flex;
        flex-direction: row;
        justify-content: left;
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        .links {
            a {
                font-size: 0.8rem;
            }
        }
        .info {
            h4 {
                font-size: 1.6rem;
                margin-bottom: 1.5rem;
            }
            p {
                font-size: 0.8rem;
            }
        }
        .store {
            a {
                font-size: 0.8rem;
            }
            h5 {
                font-size: 1.1rem;
            }
        }
        .payment {
            h5 {
                font-size: 1.1rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        .links {
            a {
                font-size: 0.7rem;
            }
        }
        .info {
            h4 {
                font-size: 1.5rem;
                margin-bottom: 1.3rem;
            }
            p {
                font-size: 0.7rem;
            }
        }
        .store {
            a {
                font-size: 0.7rem;
            }
            h5 {
                font-size: 1rem;
            }
        }
        .payment {
            h5 {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: flex;
        flex-direction: column;
        .links {
            padding-left: 1rem;
            a {
                font-size: 1rem;
            }
        }
        .info {
            h4 {
                font-size: 1.6rem;
                margin-bottom: 1.5rem;
                text-align: left;
                padding: 3rem 0rem 0rem 1rem;
            }
            .desc {
                display: none;
                font-size: 0.7rem;
                text-align: left;
                padding: 0rem 0rem 0rem 1rem;
            }
            div {
                display: flex;
                flex-direction: row;
                justify-content: left;
                margin: 0rem 0rem 0rem 1rem;
            }
        }
        .store {
            margin: 3rem 0rem 1rem 1rem;
            a {
                font-size: 0.8rem;
            }
            h5 {
                font-size: 1.4rem;
            }
        }
        .payment {
            margin: 3rem 0rem 1rem 1rem;
            h5 {
                font-size: 1.4rem;
            }
            div {
                justify-content: left;
            }
        }
        .mobile-desc {
            display: flex;
            font-size: 0.9rem;
            margin: 0rem 0rem 0rem 1rem;
            text-align: left;
        }
    }
`,fs=()=>p.jsx(p.Fragment,{children:p.jsxs(rO,{children:[p.jsxs("div",{className:"links",children:[p.jsx("a",{href:"#about",children:"About us"}),p.jsx("a",{href:"#contact",children:"Contact us"}),p.jsx("a",{href:"#shipping",children:"Shipping Policy"}),p.jsx("a",{href:"#refund",children:"Refund Policy"}),p.jsx("a",{href:"#privacy",children:"Privacy Policy"}),p.jsx("a",{href:"#deliverey",children:"Deliverey Info"}),p.jsx("a",{href:"#terms",children:"Terms & Conditions"})]}),p.jsxs("div",{className:"info",children:[p.jsx("h4",{children:"Estore"}),p.jsxs("p",{className:"desc",children:["We're at the Estore, an innovative team of food engineers. Our unique ",p.jsx("br",{})," model minimizes fresh food handling by up to 85%, sourcing locally and ",p.jsx("br",{})," dispatching within hours through cold chain logistics in eco-friendly ",p.jsx("br",{})," containers."]}),p.jsx("p",{className:"mobile-desc",children:"We're at the Estore, an innovative team of food engineers. Our unique model minimizes fresh food handling by up to 85%, sourcing locally and dispatching within hours through cold chain logistics in eco-friendly containers."}),p.jsxs("div",{children:[p.jsxs("a",{href:"https://www.facebook.com",children:[" ",p.jsx($N,{})," "]}),p.jsxs("a",{href:"https://www.instagram.com",children:[" ",p.jsx(G7,{})," "]}),p.jsxs("a",{href:"https://www.pinterest.com",children:[" ",p.jsx(K7,{})," "]}),p.jsxs("a",{href:"https://www.twitter.com",children:[" ",p.jsx(Q7,{})," "]})]})]}),p.jsxs("div",{children:[p.jsxs("div",{className:"store",children:[p.jsx("h5",{children:"Download Our App"}),p.jsxs("a",{href:"https://www.googleplaystore.com",children:[" ",p.jsx(J7,{color:"white",size:"1.1rem",className:"store-icon"})," Play Store"]}),p.jsxs("a",{href:"https://www.applestore.com",children:[" ",p.jsx(X7,{color:"white",size:"1.1rem",className:"store-icon"})," App Store"]})]}),p.jsxs("div",{className:"payment",children:[p.jsx("h5",{children:"Payment Gateway"}),p.jsxs("div",{className:"payment-icons",children:[p.jsx(tO,{size:"2.5rem"}),p.jsx(eO,{size:"2.5rem"}),p.jsx(nO,{size:"2.5rem"}),p.jsx(Z7,{size:"2.5rem"})]})]})]})]})}),v_=()=>{const[t,e]=M.useState(!0);return M.useContext(eS),M.useEffect(()=>{const n=setTimeout(()=>{e(!1)},1500);return()=>clearTimeout(n)},[]),p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(yo,{size:60,color:"red"})," "]}):p.jsxs(p.Fragment,{children:[p.jsx(us,{}),p.jsx(VN,{}),p.jsx(qN,{}),p.jsx(YN,{}),p.jsx(e7,{}),p.jsx(H7,{}),p.jsx(JN,{}),p.jsx(fs,{})]})})};function iO(t){return Pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"},child:[]}]})(t)}function Ke(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var sO=typeof Symbol=="function"&&Symbol.observable||"@@observable",__=sO,of=()=>Math.random().toString(36).substring(7).split("").join("."),oO={INIT:`@@redux/INIT${of()}`,REPLACE:`@@redux/REPLACE${of()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${of()}`},Fc=oO;function o1(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function aS(t,e,n){if(typeof t!="function")throw new Error(Ke(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ke(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ke(1));return n(aS)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((A,w)=>{o.set(w,A)}))}function d(){if(u)throw new Error(Ke(3));return i}function f(A){if(typeof A!="function")throw new Error(Ke(4));if(u)throw new Error(Ke(5));let w=!0;c();const v=a++;return o.set(v,A),function(){if(w){if(u)throw new Error(Ke(6));w=!1,c(),o.delete(v),s=null}}}function g(A){if(!o1(A))throw new Error(Ke(7));if(typeof A.type>"u")throw new Error(Ke(8));if(typeof A.type!="string")throw new Error(Ke(17));if(u)throw new Error(Ke(9));try{u=!0,i=r(i,A)}finally{u=!1}return(s=o).forEach(v=>{v()}),A}function y(A){if(typeof A!="function")throw new Error(Ke(10));r=A,g({type:Fc.REPLACE})}function S(){const A=f;return{subscribe(w){if(typeof w!="object"||w===null)throw new Error(Ke(11));function v(){const k=w;k.next&&k.next(d())}return v(),{unsubscribe:A(v)}},[__](){return this}}}return g({type:Fc.INIT}),{dispatch:g,subscribe:f,getState:d,replaceReducer:y,[__]:S}}function aO(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Fc.INIT})>"u")throw new Error(Ke(12));if(typeof n(void 0,{type:Fc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ke(13))})}function lO(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{aO(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],g=n[f],y=o[f],S=g(y,a);if(typeof S>"u")throw a&&a.type,new Error(Ke(14));c[f]=S,u=u||S!==y}return u=u||r.length!==Object.keys(o).length,u?c:o}}function zc(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function uO(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Ke(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=zc(...a)(i.dispatch),{...i,dispatch:s}}}function cO(t){return o1(t)&&"type"in t&&typeof t.type=="string"}var lS=Symbol.for("immer-nothing"),w_=Symbol.for("immer-draftable"),Wt=Symbol.for("immer-state");function dn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var oo=Object.getPrototypeOf;function Hi(t){return!!t&&!!t[Wt]}function pr(t){var e;return t?uS(t)||Array.isArray(t)||!!t[w_]||!!((e=t.constructor)!=null&&e[w_])||$d(t)||Bd(t):!1}var dO=Object.prototype.constructor.toString();function uS(t){if(!t||typeof t!="object")return!1;const e=oo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===dO}function Uc(t,e){Ud(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Ud(t){const e=t[Wt];return e?e.type_:Array.isArray(t)?1:$d(t)?2:Bd(t)?3:0}function qp(t,e){return Ud(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function cS(t,e,n){const r=Ud(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function hO(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function $d(t){return t instanceof Map}function Bd(t){return t instanceof Set}function Ti(t){return t.copy_||t.base_}function Hp(t,e){if($d(t))return new Map(t);if(Bd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=uS(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Wt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(oo(t),r)}else{const r=oo(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function a1(t,e=!1){return Wd(t)||Hi(t)||!pr(t)||(Ud(t)>1&&(t.set=t.add=t.clear=t.delete=fO),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>a1(r,!0))),t}function fO(){dn(2)}function Wd(t){return Object.isFrozen(t)}var pO={};function Gi(t){const e=pO[t];return e||dn(0,t),e}var Ha;function dS(){return Ha}function mO(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function E_(t,e){e&&(Gi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Gp(t){Kp(t),t.drafts_.forEach(gO),t.drafts_=null}function Kp(t){t===Ha&&(Ha=t.parent_)}function T_(t){return Ha=mO(Ha,t)}function gO(t){const e=t[Wt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function I_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Wt].modified_&&(Gp(e),dn(4)),pr(t)&&(t=$c(e,t),e.parent_||Bc(e,t)),e.patches_&&Gi("Patches").generateReplacementPatches_(n[Wt].base_,t,e.patches_,e.inversePatches_)):t=$c(e,n,[]),Gp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==lS?t:void 0}function $c(t,e,n){if(Wd(e))return e;const r=e[Wt];if(!r)return Uc(e,(i,s)=>S_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Bc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Uc(s,(a,u)=>S_(t,r,i,a,u,n,o)),Bc(t,i,!1),n&&t.patches_&&Gi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function S_(t,e,n,r,i,s,o){if(Hi(i)){const a=s&&e&&e.type_!==3&&!qp(e.assigned_,r)?s.concat(r):void 0,u=$c(t,i,a);if(cS(n,r,u),Hi(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(pr(i)&&!Wd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;$c(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Bc(t,i)}}function Bc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&a1(e,n)}function yO(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:dS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=l1;n&&(i=[r],s=Ga);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var l1={get(t,e){if(e===Wt)return t;const n=Ti(t);if(!qp(n,e))return vO(t,n,e);const r=n[e];return t.finalized_||!pr(r)?r:r===af(t.base_,e)?(lf(t),t.copy_[e]=Yp(r,t)):r},has(t,e){return e in Ti(t)},ownKeys(t){return Reflect.ownKeys(Ti(t))},set(t,e,n){const r=hS(Ti(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=af(Ti(t),e),s=i==null?void 0:i[Wt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(hO(n,i)&&(n!==void 0||qp(t.base_,e)))return!0;lf(t),Qp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return af(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,lf(t),Qp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ti(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){dn(11)},getPrototypeOf(t){return oo(t.base_)},setPrototypeOf(){dn(12)}},Ga={};Uc(l1,(t,e)=>{Ga[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Ga.deleteProperty=function(t,e){return Ga.set.call(this,t,e,void 0)};Ga.set=function(t,e,n){return l1.set.call(this,t[0],e,n,t[0])};function af(t,e){const n=t[Wt];return(n?Ti(n):t)[e]}function vO(t,e,n){var i;const r=hS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function hS(t,e){if(!(e in t))return;let n=oo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=oo(n)}}function Qp(t){t.modified_||(t.modified_=!0,t.parent_&&Qp(t.parent_))}function lf(t){t.copy_||(t.copy_=Hp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var _O=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,d=>n.call(this,d,...c))}}typeof n!="function"&&dn(6),r!==void 0&&typeof r!="function"&&dn(7);let i;if(pr(e)){const s=T_(this),o=Yp(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Gp(s):Kp(s)}return E_(s,r),I_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===lS&&(i=void 0),this.autoFreeze_&&a1(i,!0),r){const s=[],o=[];Gi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else dn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){pr(t)||dn(8),Hi(t)&&(t=wO(t));const e=T_(this),n=Yp(t,void 0);return n[Wt].isManual_=!0,Kp(e),n}finishDraft(t,e){const n=t&&t[Wt];(!n||!n.isManual_)&&dn(9);const{scope_:r}=n;return E_(r,e),I_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Gi("Patches").applyPatches_;return Hi(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Yp(t,e){const n=$d(t)?Gi("MapSet").proxyMap_(t,e):Bd(t)?Gi("MapSet").proxySet_(t,e):yO(t,e);return(e?e.scope_:dS()).drafts_.push(n),n}function wO(t){return Hi(t)||dn(10,t),fS(t)}function fS(t){if(!pr(t)||Wd(t))return t;const e=t[Wt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Hp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Hp(t,!0);return Uc(n,(r,i)=>{cS(n,r,fS(i))}),e&&(e.finalized_=!1),n}var qt=new _O,pS=qt.produce;qt.produceWithPatches.bind(qt);qt.setAutoFreeze.bind(qt);qt.setUseStrictShallowCopy.bind(qt);qt.applyPatches.bind(qt);qt.createDraft.bind(qt);qt.finishDraft.bind(qt);function mS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var EO=mS(),TO=mS,IO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zc:zc.apply(null,arguments)},SO=t=>t&&typeof t.match=="function";function pa(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(En(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>cO(r)&&r.type===t,n}var gS=class Zo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Zo.prototype)}static get[Symbol.species](){return Zo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Zo(...e[0].concat(this)):new Zo(...e.concat(this))}};function x_(t){return pr(t)?pS(t,()=>{}):t}function C_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(En(10));const r=n.insert(e,t);return t.set(e,r),r}function xO(t){return typeof t=="boolean"}var CO=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new gS;return n&&(xO(n)?o.push(EO):o.push(TO(n.extraArgument))),o},AO="RTK_autoBatch",yS=t=>e=>{setTimeout(e,t)},RO=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:yS(10),kO=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?RO:t.type==="callback"?t.queueNotification:yS(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),g=r.subscribe(f);return a.add(d),()=>{g(),a.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[AO]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(d)}finally{i=!0}}})},PO=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new gS(t);return r&&i.push(kO(typeof r=="object"?r:void 0)),i};function bO(t){const e=CO(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(o1(n))a=lO(n);else throw new Error(En(1));let u;typeof r=="function"?u=r(e):u=e();let c=zc;i&&(c=IO({trace:!1,...typeof i=="object"&&i}));const d=uO(...u),f=PO(d);let g=typeof o=="function"?o(f):f();const y=c(...g);return aS(a,s,y)}function vS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(En(28));if(a in e)throw new Error(En(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function NO(t){return typeof t=="function"}function OO(t,e){let[n,r,i]=vS(e),s;if(NO(t))s=()=>x_(t());else{const a=x_(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(Hi(d)){const y=f(d,u);return y===void 0?d:y}else{if(pr(d))return pS(d,g=>f(g,u));{const g=f(d,u);if(g===void 0){if(d===null)return d;throw new Error(En(9))}return g}}return d},a)}return o.getInitialState=s,o}var DO=(t,e)=>SO(t)?t.match(e):t(e);function LO(...t){return e=>t.some(n=>DO(n,e))}var MO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",jO=(t=21)=>{let e="",n=t;for(;n--;)e+=MO[Math.random()*64|0];return e},VO=["name","message","stack","code"],uf=class{constructor(t,e){fh(this,"_type");this.payload=t,this.meta=e}},A_=class{constructor(t,e){fh(this,"_type");this.payload=t,this.meta=e}},FO=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of VO)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},zO=(()=>{function t(e,n,r){const i=pa(e+"/fulfilled",(u,c,d,f)=>({payload:u,meta:{...f||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),s=pa(e+"/pending",(u,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:u,requestStatus:"pending"}})),o=pa(e+"/rejected",(u,c,d,f,g)=>({payload:f,error:(r&&r.serializeError||FO)(u||"Rejected"),meta:{...g||{},arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"}}));function a(u){return(c,d,f)=>{const g=r!=null&&r.idGenerator?r.idGenerator(u):jO(),y=new AbortController;let S,C;function A(v){C=v,y.abort()}const w=async function(){var k,D;let v;try{let L=(k=r==null?void 0:r.condition)==null?void 0:k.call(r,u,{getState:d,extra:f});if($O(L)&&(L=await L),L===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const I=new Promise((_,x)=>{S=()=>{x({name:"AbortError",message:C||"Aborted"})},y.signal.addEventListener("abort",S)});c(s(g,u,(D=r==null?void 0:r.getPendingMeta)==null?void 0:D.call(r,{requestId:g,arg:u},{getState:d,extra:f}))),v=await Promise.race([I,Promise.resolve(n(u,{dispatch:c,getState:d,extra:f,requestId:g,signal:y.signal,abort:A,rejectWithValue:(_,x)=>new uf(_,x),fulfillWithValue:(_,x)=>new A_(_,x)})).then(_=>{if(_ instanceof uf)throw _;return _ instanceof A_?i(_.payload,g,u,_.meta):i(_,g,u)})])}catch(L){v=L instanceof uf?o(null,g,u,L.payload,L.meta):o(L,g,u)}finally{S&&y.signal.removeEventListener("abort",S)}return r&&!r.dispatchConditionRejection&&o.match(v)&&v.meta.condition||c(v),v}();return Object.assign(w,{abort:A,requestId:g,arg:u,unwrap(){return w.then(UO)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:LO(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function UO(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function $O(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var BO=Symbol.for("rtk-slice-createasyncthunk");function WO(t,e){return`${t}/${e}`}function qO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[BO];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(En(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(GO()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(E,k){const D=typeof E=="string"?E:E.type;if(!D)throw new Error(En(12));if(D in c.sliceCaseReducersByType)throw new Error(En(13));return c.sliceCaseReducersByType[D]=k,d},addMatcher(E,k){return c.sliceMatchers.push({matcher:E,reducer:k}),d},exposeAction(E,k){return c.actionCreators[E]=k,d},exposeCaseReducer(E,k){return c.sliceCaseReducersByName[E]=k,d}};u.forEach(E=>{const k=a[E],D={reducerName:E,type:WO(s,E),createNotation:typeof i.reducers=="function"};QO(k)?XO(D,k,d,e):KO(D,k,d)});function f(){const[E={},k=[],D=void 0]=typeof i.extraReducers=="function"?vS(i.extraReducers):[i.extraReducers],L={...E,...c.sliceCaseReducersByType};return OO(i.initialState,I=>{for(let _ in L)I.addCase(_,L[_]);for(let _ of c.sliceMatchers)I.addMatcher(_.matcher,_.reducer);for(let _ of k)I.addMatcher(_.matcher,_.reducer);D&&I.addDefaultCase(D)})}const g=E=>E,y=new Map;let S;function C(E,k){return S||(S=f()),S(E,k)}function A(){return S||(S=f()),S.getInitialState()}function w(E,k=!1){function D(I){let _=I[E];return typeof _>"u"&&k&&(_=A()),_}function L(I=g){const _=C_(y,k,{insert:()=>new WeakMap});return C_(_,I,{insert:()=>{const x={};for(const[R,b]of Object.entries(i.selectors??{}))x[R]=HO(b,I,A,k);return x}})}return{reducerPath:E,getSelectors:L,get selectors(){return L(D)},selectSlice:D}}const v={name:s,reducer:C,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:A,...w(o),injectInto(E,{reducerPath:k,...D}={}){const L=k??o;return E.inject({reducerPath:L,reducer:C},D),{...v,...w(L,!0)}}};return v}}function HO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var _S=qO();function GO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function KO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!YO(r))throw new Error(En(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?pa(t,o):pa(t))}function QO(t){return t._reducerDefinitionType==="asyncThunk"}function YO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function XO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(En(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:d}=n,f=i(t,s,d);r.exposeAction(e,f),o&&r.addCase(f.fulfilled,o),a&&r.addCase(f.pending,a),u&&r.addCase(f.rejected,u),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(e,{fulfilled:o||au,pending:a||au,rejected:u||au,settled:c||au})}function au(){}function En(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const JO=()=>{try{const t=localStorage.getItem("cartitem");return t?JSON.parse(t):[]}catch(t){return console.error("Error loading cart from localStorage:",t),[]}},ZO=()=>{try{const t=localStorage.getItem("selectedproduct");return t?JSON.parse(t):null}catch{return console.error("Error loading in products from local storage"),null}},eD={items:JO(),counter:0,selectedproduct:ZO(),totalitems:0,totalprice:0},tD=t=>{localStorage.setItem("cartitem",JSON.stringify(t)),localStorage.setItem("cartcount",t.length)},wS=_S({name:"cart",initialState:eD,reducers:{addtocart(t,e){t.items.push(e.payload),localStorage.setItem("cartitem",JSON.stringify(t.items)),console.log("New Product: ",localStorage.getItem("cartitem")),t.cartcount=t.items.length,tD(t.items)},deletefromcart(t,e){const n=t.items.filter(r=>r.id!=e.payload.id);t.items=n,localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},increment(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&(t.items[n].quantity+=1)},decrement(t,e){const n=t.items.findIndex(r=>r.id===e.payload.id);n>=0&&t.items[n].quantity>1?t.items[n].quantity-=1:t.items=t.items.filter(r=>r.id!==e.payload.id)},clearcart:t=>{t.items=[],localStorage.setItem("cartitem",JSON.stringify(t.items)),t.cartcount=t.items.length},initializeCart:t=>{const e=localStorage.getItem("cartcount");t.cartcount=e?parseInt(e,10):0},productdetail:(t,e)=>{t.selectedproduct=e.payload,localStorage.setItem("selectedproduct",JSON.stringify(e.payload))}}}),ES=t=>t.cart.items.reduce((e,n)=>e+n.price*n.quantity,0),TS=t=>t.cart.items.reduce((e,n)=>e+(n.quantity+1-1),0),{addtocart:IS,deletefromcart:nD,increment:rD,decrement:iD,clearcart:sD,initializeCart:oD,productdetail:aD,checkout:lD}=wS.actions,uD=wS.reducer,cD=_e.section`
    margin: 10rem 2rem 5rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: "poppins", sans-serif;
    #sidebar {
        margin: 1rem 0rem 0rem 0rem;
        width: max-content;
        #search {
            width: 20rem;
            height: 3rem;
            padding: .5rem 0rem .5rem 1.1rem;
            color: black;
            font-size: 1rem;
            background-color: whitesmoke;
            border: 1px solid #696969;
            margin: 1rem 0rem 0rem 0rem;
        }
        h1 {
            font-size: 2.1rem;
        }
    }
    #shop-products {
        img {
            width: 9rem;
            height: 9rem;
            display: block;
            margin: 1rem auto 0rem auto;
        }
        #category {
            font-size: 0.8rem;
            color: #898989;
            font-weight: 500;
        }
        #name {
            font-size: 1.5rem;
        }
        #price {
            color: red;
            font-size: .9rem;
        }
        #quantity {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #stock {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #size {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #bunch {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        #dozen {
            color: #898989;
            font-size: .9rem;
            font-weight: 500;
        }
        p {
            line-height: .7rem;
        }
    }
    #icons {
        display: flex;
        justify-content: center;
        margin: 1.8rem 0rem 0rem 0rem;
        .icons {
            background-color: #898989;
            border-radius: 100%;
            color: white;
            height: 35px;
            width: 35px;
            margin: 0rem .1rem 0rem .1rem;
        }
        .icons:hover {
            background-color: black;
        }
        .icon {
            display: block;
            margin: .5rem auto auto auto;
            padding: auto;
        }
    }
    #buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button {
            border-radius: 100%;
            border: 0px solid black;
            background-color: beige;
            padding: .5rem;
            margin: 0rem 1rem 0rem 1rem;
            height: 3.5rem;
            width: 3.5rem;
            font-size: 1.5rem;
        }
    }
    @media (max-width: 899px) and (min-width: 0px) {
        #sidebar {
            display: none;
        }
    }
`,dD=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(),[i,s]=M.useState(!0),[o,a]=M.useState(null),[u,c]=M.useState(1),d=12,f=yd(),g=nr(w=>w.cart),y=async()=>{try{const w=Lc(_n(wn,"shop"),i_("name"),s_(d)),v=await Yr(w),E=v.docs.map(k=>({id:k.id,...k.data()}));e(E),a(v.docs[v.docs.length-1]),c(u-1),s(!1)}catch(w){console.log("Error in fetching:",w)}},S=async()=>{try{if(o){const w=Lc(_n(wn,"shop"),i_("name"),B8(o),s_(d)),v=await Yr(w),E=v.docs.map(k=>({id:k.id,...k.data()}));E.length>0&&(e(E),a(v.docs[v.docs.length-1]),c(u+1),s(!1))}}catch(w){console.log("Error",w)}};M.useEffect(()=>{y()},[]);const C=w=>{g.items.some(E=>E.id===w.id)?ht.error(`${w.name} is already in the cart`):(f(IS(w)),ht.success(`${w.name} is added to the cart`))},A=w=>{f(aD(w))};return p.jsx(p.Fragment,{children:i?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(yo,{size:60,color:"red"})," "]}):p.jsxs(cD,{children:[p.jsxs("div",{id:"sidebar",children:[p.jsx("h1",{children:"Filter"}),p.jsx("input",{id:"search",type:"text",placeholder:"Search here...",value:n,onChange:w=>r(w.target.value)}),p.jsx("h5",{className:"mt-3",children:"Search by Category"}),p.jsxs("div",{className:"form-check",children:[p.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),p.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Vegetables"})]}),p.jsxs("div",{className:"form-check",children:[p.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),p.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Fruits"})]}),p.jsxs("div",{className:"form-check",children:[p.jsx("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),p.jsx("label",{className:"form-check-label",for:"flexCheckDefault",children:"Dairy"})]})]}),p.jsxs("div",{id:"shop-products",children:[p.jsx("div",{className:"container",children:p.jsxs("div",{className:"row",children:[t.map(w=>p.jsx("div",{className:'mb-3 col-md-3 col-lg-4 col-xl-3 col-6" mx-0',children:p.jsxs("div",{className:"card",children:[p.jsx("img",{src:w.imageurl,className:"card-img-top",alt:"Product Picture"}),p.jsxs("div",{className:"card-body",children:[p.jsx("p",{className:"card-text",id:"category",children:w.category}),p.jsx("h5",{className:"card-title",id:"name",children:w.name}),p.jsxs("p",{className:"card-text",id:"price",children:["$",w.price]}),p.jsxs("p",{className:"card-text",id:"stock",children:["Stock: ",w.stock]}),w.weigh&&p.jsxs("p",{className:"card-text",id:"quantity",children:["Quantity: ",w.weigh,"kg"]}),w.bunch&&p.jsxs("p",{className:"card-text",id:"bunch",children:["Bunch: ",w.bunch]}),w.size&&p.jsxs("p",{className:"card-text",id:"size",children:["Size: ",w.size," "]}),w.dozen&&p.jsxs("p",{className:"card-text",id:"dozen",children:["Dozen: ",w.dozen," "]}),p.jsxs("div",{id:"icons",children:[p.jsx(lt,{className:"icons",to:"/ProductDetail",onClick:()=>A(w),children:p.jsx(zN,{className:"icon",size:"1.1rem"})}),p.jsx(lt,{className:"icons",children:p.jsx(Y7,{className:"icon",size:"1.1rem",onClick:()=>C(w)})}),p.jsx(lt,{className:"icons",children:p.jsx(iO,{className:"icon",size:"1.1rem"})})]})]})]})},w.id)),";"]})}),p.jsxs("div",{id:"buttons",children:[p.jsx("button",{onClick:()=>{c(u-1),y()},disabled:u===1,children:"«"}),p.jsx("button",{onClick:S,children:"»"})]})]})]})})},hD=_e.section`
    background-color: white;
    padding: 7rem 0rem 7rem 0rem;
    font-size: "poppins", sans-serif;
    #product-detail {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0rem auto 0rem auto;
        border: 1px solid #898989;
        height: 38rem;
        width: 70rem;
        border-radius: 1rem;
        background-color: white;
        padding: 5rem 0rem 3rem 0rem;
        #product-info {
            width: 30rem;
        }
        img {
            height: 25rem;
            width: 19rem;
        }
        #category {
            font-size: 1.1rem;
            font-weight: 450;
            color: #898989;
        }
        #name {
            font-size: 3rem;
            font-weight: 550;
        }
        #stock {
            font-size: 1rem;
            margin: 1rem 0rem 0rem 0rem;
            font-weight: 500;
        }
        #description {
            font-size: 1rem;
            color: #898989;
            font-weight: 500;
            margin: 1.8rem 0rem 0rem 0rem;
        }
        #quantity {
            font-size: 1rem;
            font-weight: 500;
        }
        #price {
            color: red;
            font-weight: 500;
            font-size: 1.3rem;
        }
    }
    #plusminus {
        display: flex;
        flex-direction: row;
        button {
            border-radius: .4rem;
            margin-right: .5rem;
        }
        input {
            width: 1.9rem;
            padding: auto;
            margin-right: .5rem;
        }
    }
    #addtocart {
        width: 19rem;
        font-size: 1.1rem;
        padding: .5rem 1.9rem .5rem 1.9rem;
        font-weight: 470;
    }
    #placeorder {
        width: 19rem;
        font-size: 1.1rem;
        font-weight: 490;
        padding: .5rem 1.9rem .5rem 1.9rem; 
        margin: 1rem 0rem 0rem 0rem;
    }
    #msg {
        background-color: white;
        color: black;
        padding: 10px;
        position: fixed;
        top: 15%;
        right: 5%;
        left: auto;
        z-index: 1000;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #product-detail {
            width: 50rem;
            height: 33rem;
            #product-info {
                width: 19rem;
            }
            img {
                height: 17rem;
                width: 17rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        #product-detail {
            width: 45rem;
            height: 33rem;
            #product-info {
                width: 19rem;
            }
            img {
                height: 17rem;
                width: 15rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        margin-top: 3rem;
        background-color: none;
        #product-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: max-content;
            height: max-content;
            background-color: none;
            padding: 1rem;
            #product-info {
                width: 19rem; 
            }
            img {
                height: 17rem;
                width: 17rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        margin: 3rem .5rem 0rem .5rem;
        background-color: none;
        #product-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: max-content;
            height: max-content;
            background-color: none;
            padding: 1rem;
            #product-info {
                width: 15rem; 
            }
            img {
                height: 15rem;
                width: 15rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #description {
                font-size: .9rem;
            }
            #stock {
                font-size: 1rem;
            }
        }
    }
`,fD=()=>{const[t,e]=M.useState(!0),[n,r]=M.useState(null),i=yd(),s=nr(u=>u.cart),o=nr(u=>u.cart.selectedproduct);M.useEffect(()=>{const u=setTimeout(()=>{(async()=>{try{if(n)r(o),e(!1);else{const d=localStorage.getItem("selectedproduct");d&&(r(JSON.parse(d)),e(!1))}}catch(d){console.log("Error in loading: ",d)}})()},1500);return()=>clearTimeout(u)},[o]);const a=u=>{s.items.some(d=>d.id===u.id)?ht.error(`${u.name} is already in the cart`):(i(IS(u)),ht.success(`${u.name} is added to the cart`))};return p.jsxs(p.Fragment,{children:[t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(yo,{size:60,color:"red"})," "]}):p.jsx(hD,{children:p.jsx("div",{children:p.jsxs("div",{id:"product-detail",children:[p.jsx("div",{children:p.jsx("img",{src:n.imageurl,alt:"Product"})}),p.jsxs("div",{id:"product-info",children:[p.jsxs("p",{id:"category",children:[n.category," / ",n.name]}),p.jsx("h3",{id:"name",children:n.name}),p.jsx("p",{id:"description",children:n.description}),p.jsxs("p",{id:"stock",children:["stock: ",n.stock]}),n.weigh&&p.jsxs("p",{id:"quantity",children:["Weight: ",n.weigh," kg"]}),n.bunch&&p.jsxs("p",{id:"bunch",children:["Bunch: ",n.bunch]}),n.size&&p.jsxs("p",{id:"size",children:["size: ",n.size]}),n.dozen&&p.jsxs("p",{id:"dozen",children:["Dozen: ",n.dozen]}),p.jsxs("p",{id:"price",children:["$",n.price]}),p.jsx("div",{id:"plusminus",children:p.jsx("button",{className:"btn btn-success",id:"addtocart",onClick:()=>a(n),children:" Add to cart"})})]})]})})}),";"]})},pD=_e.section`
    font-family: "poppins", sans-serif;
    display: block;
    margin: 5rem auto 5rem auto;
    border: 1px solid #898989;
    border-radius: 1rem;
    width: 85%;
    height: max-content;
    padding: 3rem 1rem 3rem 1rem;
    #myform {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #formcontent {
        h1 {
            font-size: 1.9rem;
        }
        label {
            font-size: .9rem;
        }
        input {
            font-size: .9rem;
        }
        select {
            font-size: .9rem;
            margin: 0rem 0rem 0rem 1rem;
            width: 10rem;
        }
        option {
            width: 10rem;;
        }
    }
    #myorder {
        width: 100%;
        border: 1px solid #898989;
        margin: 0rem 0rem 0rem 1rem;
        padding: 3rem 1rem 1rem 1rem;
        border-radius: 0.3rem;
        h5 {
            font-size: 1.5rem;
            margin: 0rem 0rem 1rem 0rem;
        }
        #price {
            display: flex;
            justify-content: space-between;
        }
        #price p:nth-child(1) {
            color: #898989;
            font-size: 1rem;
            font-weight: 450;
        }
        #price p:nth-child(2) {
            color: black;
            font-size: 1rem;
            font-weight: 500;
        }
        #subtotal {
            display: flex;
            justify-content: space-between;
            margin: 0rem 0rem 0rem 0rem;
            font-size: 1rem;
            font-weight: 500;
        }
        #total {
            display: flex;
            justify-content: space-between;
            margin: 1.5rem 0rem 0rem 0rem;
            font-size: 1.5rem;
            font-weight: 500;
        }
        h6 {
            font-size: 1.5rem;
            margin: 1.9rem 0rem 1rem 0rem;
        }
        label {
            font-size: .9rem;
            margin: 0rem 0rem 0rem .5rem;
        }
        input {
            size: 1rem;
        }
        #para {
            font-size: .9rem;
            margin: 3rem 0rem 3rem 0rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #myorder {
            width: 150%;
        }
        #myform {
            select {
                width: 5rem;
            }
            option {
                width: 5rem;
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        #formcontent {
            h1 {
                font-size: 1.5rem;
            }
            label {
                font-size: .8rem;
            }
            input {
                font-size: .8rem;
            }
            select {
                font-size: .8rem;
                margin: 0rem .3rem 0rem 0rem;
                width: 4rem;
            }
            option {
                width: 4rem;
            }
        }
        #myorder {
        width: 170%;
        border: 1px solid #898989;
        margin: 0rem 0rem 0rem 1rem;
        padding: 3rem 1rem 1rem 1rem;
        border-radius: 0.3rem;
        h5 {
            font-size: 1.3rem;
            margin: 0rem 0rem 1rem 0rem;
        }
        #price {
            display: flex;
            justify-content: space-between;
        }
        #price p:nth-child(1) {
            color: #898989;
            font-size: .8rem;
            font-weight: 450;
        }
        #price p:nth-child(2) {
            color: black;
            font-size: .8rem;
            font-weight: 500;
        }
        #subtotal {
            display: flex;
            justify-content: space-between;
            margin: 0rem 0rem 0rem 0rem;
            font-size: .8rem;
            font-weight: 500;
        }
        #total {
            display: flex;
            justify-content: space-between;
            margin: 1.5rem 0rem 0rem 0rem;
            font-size: 1.3rem;
            font-weight: 500;
        }
        h6 {
            font-size: 1.19rem;
            margin: 1.9rem 0rem 1rem 0rem;
        }
        label {
            font-size: .8rem;
            margin: 0rem 0rem 0rem .5rem;
        }
        input {
            size: .9rem;
        }
        #para {
            font-size: .7rem;
            margin: 3rem 0rem 3rem 0rem;
        }
    }
    }
    @media (max-width: 599px) and (min-width: 400px) {
        border: 0px solid black;
        display: block;
        margin: 3rem 0rem 1rem 0rem;
        #myform {
            display: flex;
            flex-direction: column; 
            width: 110%;
        }
        #formcontent {
            border: 1px solid #898989;
            padding: 1rem;
            border-radius: 1rem;
            display: block;
            margin: 0rem auto 0rem auto;
        }
        #myorder {
            display: block;
            margin: 3rem auto 1rem auto;
            border-radius: 1rem;
            width: 100%;
        }
    }
    @media (max-width: 399px) and (min-width: 0px) {
        border: 0px solid black;
        display: block;
        margin: 3rem 0rem 1rem 0rem;
        #myform {
            display: flex;
            flex-direction: column; 
            width: 119%;
        }
        #formcontent {
            border: 1px solid #898989;
            padding: 1rem;
            border-radius: 1rem;
            display: block;
            margin: 0rem auto 0rem auto;
            h1 {
                font-size: 1.3rem;
            }
        }
        #myorder {
            display: block;
            margin: 3rem auto 1rem auto;
            border-radius: 1rem;
            width: 100%;
        }
    }
`,mD=()=>{const[t,e]=M.useState(!0),[n,r]=M.useState(""),[i,s]=M.useState(""),[o,a]=M.useState(""),[u,c]=M.useState(""),[d,f]=M.useState(""),[g,y]=M.useState(""),[S,C]=M.useState(""),[A,w]=M.useState([]),[v,E]=M.useState(""),[k,D]=M.useState(""),L=nr(TS),I=nr(ES),_={Islamabad:["Islamabad"],Punjab:["Lahore","Rawalpindi","Faisalabad","Multan","Sargodha","Bahawalpur"],Sindh:["Karachi","Hydrabad","Sakkhar"],Balochistan:["Quetta","Sibbi","Gawadar"],"Khyber Pakhtunkhwa":["Peshawar","Abbotabad","Swat","Mardaan"],"Azad Kashmir":["Muzzaffarabad","Rawalkot","Neelum Valley"],"Gilgit Baltistan":["Balakot","Skardu"]},x=b=>{const N=b.target.value;C(N),w(_[N]||[])};M.useEffect(()=>{const b=setTimeout(()=>{(async()=>{try{e(!1)}catch(P){console.log("Error is:",P)}})()},1500);return()=>clearTimeout(b)},[]);const R=async b=>{b.preventDefault();try{const N=_n(wn,"billinginfo");await Yg(N,{fname:n,house:i,street:o,state:S,city:k,zip:u,phone:d,email:g,payment:v})}catch(N){console.log("Error: ",N)}};return p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(yo,{size:60,color:"red"})," "]}):p.jsx(pD,{children:p.jsxs("form",{id:"myform",className:"form-check",onSubmit:R,children:[p.jsxs("div",{id:"formcontent",className:"row g-3",children:[p.jsx("h1",{children:"Billing Information"}),p.jsxs("div",{className:"col-md-12",children:[p.jsx("label",{htmlFor:"firstname",className:"form-label",children:"Full Name"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"first name",value:n,onChange:b=>r(b.target.value),required:!0})]}),p.jsxs("div",{className:"col-12",children:[p.jsx("label",{htmlFor:"address1",className:"form-label",children:"Enter House No."}),p.jsx("input",{type:"text",className:"form-control",placeholder:"Enter your house no.",required:!0,value:i,onChange:b=>s(b.target.value)})]}),p.jsxs("div",{className:"col-12",children:[p.jsx("label",{htmlFor:"address2",className:"form-label",children:"Enter street address"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"Enter street address",required:!0,value:o,onChange:b=>a(b.target.value)})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputState",className:"form-label",children:"State"}),p.jsxs("select",{onChange:x,value:S,required:!0,children:[p.jsx("option",{value:"",children:"Select a state"}),Object.keys(_).map(b=>p.jsx("option",{value:b,children:b},b))]})]}),p.jsxs("div",{className:"col-md-6",children:[p.jsx("label",{children:"Select City:"}),p.jsxs("select",{required:!0,value:k,onChange:b=>D(b.target.value),children:[p.jsx("option",{value:"",children:"Select a city"}),A.length>0?A.map(b=>p.jsx("option",{value:b,children:b},b)):p.jsx("option",{disabled:!0,children:"No cities available"})]})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputZip",className:"form-label",children:"Zip"}),p.jsx("input",{type:"text",className:"form-control",placeholder:"zip code",required:!0,value:u,onChange:b=>c(b.target.value)})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputcell",className:"form-label",children:"Phone"}),p.jsx("input",{type:"cell",className:"form-control",placeholder:"phone",required:!0,value:d,onChange:b=>f(b.target.value)})]}),p.jsxs("div",{className:"col-md-4",children:[p.jsx("label",{htmlFor:"inputemail",className:"form-label",children:"Email"}),p.jsx("input",{type:"email",className:"form-control",placeholder:"email address",required:!0,value:g,onChange:b=>y(b.target.value)})]})]}),p.jsxs("div",{id:"myorder",children:[p.jsx("h5",{children:"Your Order"}),p.jsxs("div",{id:"price",children:[p.jsx("p",{children:"Total Items"}),p.jsxs("p",{children:[L," items"]})]}),p.jsxs("div",{id:"subtotal",children:[p.jsx("p",{children:"SubTotal"}),p.jsxs("p",{style:{color:"black"},children:["$",parseFloat(I).toFixed(2)]})]}),p.jsxs("div",{id:"subtotal",children:[p.jsx("p",{children:"Shipping"}),p.jsx("p",{style:{color:"black"},children:"$5.00"})]}),p.jsx("hr",{}),p.jsxs("div",{id:"total",children:[p.jsx("p",{children:"Total"}),p.jsxs("p",{style:{color:"red"},children:["$",parseFloat(I+5).toFixed(2)]})]}),p.jsx("hr",{}),p.jsx("h6",{children:"Payment Methods"}),p.jsxs("div",{children:[p.jsx("input",{type:"radio",required:!0,name:"option",value:"Direct Bank Transfer",checked:v==="Direct Bank Transfer",onChange:b=>E(b.target.value)}),p.jsx("label",{htmlFor:"Direct Bank Transfer",children:"Direct Bank Transfer"})]}),p.jsxs("div",{children:[p.jsx("input",{type:"radio",required:!0,name:"option",value:"Cash on Deliverey",onChange:b=>E(b.target.value),checked:v==="Cash on Deliverey"}),p.jsx("label",{htmlFor:"Cash on Deliverey",children:"Cash on Deliverey"})]}),p.jsx("p",{id:"para",children:"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."}),p.jsx("button",{type:"submit",className:"container btn btn-danger",children:"Confirm order"})]})]})})})};function cf(t){return Pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}const gD=_e.section`
    display: block;
    margin: 5rem auto 3rem auto;
    width: 85%;
    border-radius: 1rem;
    border: 1px solid #898989;
    padding: 2rem;
    font-family: "poppins", sans-serif;
    #labels {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: coral;
        padding: .5rem 1rem 0rem 1rem;
        p {
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
        }
    }
    #items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem 0rem 1rem 0rem;
        img {
            width: 5rem;
            height: 5rem;
        }
        #itemname {
            display: flex;
        }
        p {
            margin: 1.9rem 0rem 0rem 0rem;
        }
        #buttons {
            display: flex;
            position: absolute;
            left: 43%;
            button {
                height: 2.5rem;
                margin: 1.3rem 1rem 0rem 1rem;
                border: 0px solid black;
            }
            input {
                width: 1rem;
                height: 2.5rem;
                padding: auto;
                margin: 1.3rem 0rem 0rem 0rem;
                border: 0px solid black;
            }
        }
        #trashicon {
            margin: 2rem 3rem 0rem 0rem;
        }
        #trashicon:hover {
            cursor: pointer;
        }
        #price {
            position: absolute;
            left: 29%;
            color: #696969;
            font-weight: 500;
        }
        #subtotal {
            position: absolute;
            left: 65%;
            color: #696969;
            font-weight: 500;
        }
        .quantity {
            margin: 0rem;
            font-size: .8rem;
            color: gray;
        }
    }
    .lowerbox {
        border: 1px solid #898989;
        border-radius: 1rem;
        margin: 3rem 0rem 1rem 0rem;
        padding: 1.9rem 1.1rem 1.1rem 1.1rem;
        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        div:nth-child(1) {
            h6 {
                font-size: 1rem;
            }
        }
        div:nth-child(2) {
            h4 {
                font-size: 1.8rem;
            }
            p {
                color: red;
                font-size: 1.4rem;
                font-weight: 500;
            }
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #items {
            #price {
                left: 30%;
            }
        }
        #tablet {
            display: none;
        }
    }
    @media (max-width: 899px) and (min-width: 0px) {
        display: none;
    }
`,yD=_e.div`
    @media (max-width: 1990px) and (min-width: 900px) {
        display: none;
    }
    @media (max-width: 899px) and (min-width: 600px) {
        display: block;
        border: 1px solid #898989;
        margin: 5rem auto 3rem auto;
        width: 90%;
        border-radius: 1rem;
        padding: 1rem;
        font-family: "poppins", sans-serif;
        #innerbox {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        #imagename {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            img {
                width: 8rem;
                height: 8rem;
            }
            h5 {
                margin: 3rem 0rem 0rem 0rem;
            }
            p {
                font-weight: 500;
                color: #696969;
            }
        }
        #secondbox {
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            #label {
                margin: 1.3rem 0rem 0rem 0rem;
                p {
                    padding: .8rem .8rem 0rem .8rem;
                    text-align: center;
                    font-weight: 500;
                    color: #696969;
                }
            }
            #items {
                p {
                    padding: 0rem .8rem 0rem .8rem;
                    text-align: center;
                }
            }
            #button {
            display: flex;
            padding: 0rem 1rem 0rem 0rem;
            button {
                margin: 0rem 0rem 0rem 0rem;
                border: 0px solid black;
                height: 1rem;
            }
            input {
                width: 1rem;
                height: 2.5rem;
                padding: auto;
                margin: 1.3rem 0rem 0rem 0rem;
                border: 0px solid black;
            }
        }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: none;
    }
`,vD=_e.section`
    @media (max-width: 1999px) and (min-width: 600px) {
        display: none;
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: block;
        margin-top: 3rem;
        background-color: none;
        #product-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: none;
            padding: 1rem;
            #product-info {
                width: 100%; 
            }
            img {
                display: block;
                margin: 0rem auto 0rem auto;
                height: 17rem;
                width: 17rem;
            }
            #category {
                font-size: .8rem;
            }
            #name {
                font-size: 2.1rem;
            }
            #price {
                font-size: 1.1rem;
                font-weight: 500;
                color: #696969;
            }
            #mobile-button {
                margin: 0rem 0rem 0rem 0rem;
                button {
                    border: 1px solid #898989;
                    border-radius: 0px;
                    height: 2.5rem;
                    margin: -.5rem 0rem 0rem 0rem;
                }
            }
            #trash {
                size: 1.9rem;
                color: red;
                margin: 1rem 0rem 0rem 0rem;
            }
        }
    }
`,_D=()=>{const[t,e]=M.useState(!0),n=yd(),r=nr(f=>f.cart.items),i=nr(ES),s=nr(TS);M.useEffect(()=>{const f=setTimeout(()=>{(async()=>{try{e(!1)}catch(y){console.log("Error is:",y)}})()},1500);return()=>clearTimeout(f)},[]);const o=f=>{n(nD(f)),ht.success(`${f.name} is removed from the cart`)},a=f=>{n(rD(f))},u=f=>{n(iD(f))},c=()=>{n(sD()),ht.success("Removed all items from the cart")},d=()=>{n(lD())};return p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(yo,{size:60,color:"red"})," "]}):p.jsxs(p.Fragment,{children:[p.jsxs(gD,{children:[p.jsxs("div",{id:"labels",children:[p.jsx("p",{children:"Product"}),p.jsx("p",{children:"Price"}),p.jsx("p",{children:"Quantity"}),p.jsx("p",{children:"SubTotal"}),p.jsx("p",{children:"Remove"})]}),p.jsx("div",{children:r.length===0?p.jsx("p",{children:"Your cart is empty."}):p.jsxs(p.Fragment,{children:[p.jsxs("div",{children:[r.map(f=>p.jsxs("div",{id:"items",children:[p.jsxs("div",{id:"itemname",children:[p.jsx("img",{src:f.imageurl,alt:"Product Pic"}),p.jsxs("p",{children:[f.name," ",p.jsx("br",{}),f.weigh&&p.jsxs("p",{className:"quantity",children:[f.weigh," kg"]}),f.dozen&&p.jsxs("p",{className:"quantity",children:[f.dozen," dozen"]}),f.bunch&&p.jsxs("p",{className:"quantity",children:[f.bunch," bunch"]}),f.size&&p.jsx("p",{className:"quantity",children:f.size})]})]}),p.jsxs("p",{id:"price",children:["$",f.price]}),p.jsxs("div",{id:"buttons",children:[p.jsx("button",{className:"btn",onClick:()=>u(f),disabled:f.quantity<=1,children:"-"}),p.jsx("p",{children:f.quantity}),p.jsx("button",{className:"btn",onClick:()=>a(f),disabled:f.quantity>=f.stock,children:"+"})]}),p.jsxs("p",{id:"subtotal",children:["$",parseFloat(f.quantity*f.price).toFixed(2)]}),p.jsx(cf,{onClick:()=>o(f),color:"red",id:"trashicon"})]},f.name)),p.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"})]}),p.jsxs("div",{className:"lowerbox",children:[p.jsxs("div",{children:[p.jsx("h6",{children:"Total items: "}),p.jsxs("p",{children:[s," items"]})]}),p.jsxs("div",{children:[p.jsx("h4",{children:"Total"}),p.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),p.jsx("button",{className:"container btn btn-danger",onClick:d,children:p.jsx(lt,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]}),p.jsx(yD,{id:"tablet",children:r.length===0?p.jsx("p",{children:"Your Cart is Empty!"}):p.jsxs("div",{className:"container",children:[r.map(f=>p.jsxs("div",{id:"innerbox",children:[p.jsxs("div",{id:"imagename",children:[p.jsx("img",{src:f.imageurl,alt:f.name}),p.jsxs("div",{children:[p.jsx("h5",{children:f.name}),f.weigh&&p.jsxs("p",{className:"quantity",children:[f.weigh," kg"]}),f.dozen&&p.jsxs("p",{className:"quantity",children:[f.dozen," dozen"]}),f.bunch&&p.jsxs("p",{className:"quantity",children:[f.bunch," bunch"]}),f.size&&p.jsx("p",{className:"quantity",children:f.size})]})]}),p.jsxs("div",{id:"secondbox",children:[p.jsxs("div",{id:"label",children:[p.jsx("p",{children:"Price"}),p.jsx("p",{style:{margin:"0rem 1.5rem 0rem 1.5rem"},children:"Quantity"}),p.jsx("p",{children:"SubTotal"})]}),p.jsxs("div",{id:"items",children:[p.jsxs("p",{children:["$",parseFloat(f.price).toFixed(2)]}),p.jsxs("div",{id:"button",children:[p.jsx("button",{className:"btn",onClick:()=>u(f),disabled:f.quantity<=1,children:"-"}),p.jsx("p",{children:f.quantity}),p.jsx("button",{className:"btn",onClick:()=>a(f),disabled:f.quantity>=f.stock,children:"+"})]}),p.jsxs("p",{children:["$",parseFloat(f.price*f.quantity).toFixed(2)]}),p.jsx(cf,{style:{marginRight:"-15px",marginTop:"5px"},color:"red",size:".8rem",onClick:()=>o(f)})]})]})]},f.id)),p.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),p.jsxs("div",{className:"lowerbox",style:{marginTop:"3rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h6",{children:"Total items: "}),p.jsxs("p",{children:[s," items"]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h4",{children:"Total"}),p.jsxs("p",{children:["$",parseFloat(i).toFixed(2)]})]}),p.jsx("button",{className:"container btn btn-danger",onClick:d,children:p.jsx(lt,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})}),p.jsx(vD,{children:r.length===0?p.jsx("p",{children:"Your cart is empty"}):p.jsxs("div",{className:"container",children:[r.map(f=>p.jsx("div",{children:p.jsxs("div",{id:"product-detail",className:"container",children:[p.jsx("div",{children:p.jsx("img",{src:f.imageurl,alt:"Product"})}),p.jsxs("div",{id:"product-info",children:[p.jsxs("p",{id:"category",children:[f.category," / ",f.name]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h3",{id:"name",children:f.name}),p.jsx(cf,{id:"trash",onClick:()=>o(f)})]}),f.weigh&&p.jsxs("p",{id:"quantity",children:[f.weigh," kg"]}),f.bunch&&p.jsx("p",{id:"bunch",children:f.bunch}),f.size&&p.jsx("p",{id:"size",children:f.size}),f.dozen&&p.jsx("p",{id:"dozen",children:f.dozen}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsxs("p",{id:"price",children:["$",f.price]}),p.jsxs("div",{id:"mobile-button",style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("button",{className:"btn",onClick:()=>u(f),disabled:f.quantity<=1,children:"-"}),p.jsx("p",{style:{margin:"0rem .8rem 0rem .8rem"},children:f.quantity}),p.jsx("button",{className:"btn",onClick:()=>a(f),disabled:f.quantity===f.stock,children:"+"})]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"1rem 0rem 0rem 0rem"},children:[p.jsx("h6",{style:{fontSize:"1.3rem",fontWeight:"600"},children:"SubTotal"}),p.jsxs("p",{style:{fontSize:"1.3rem",fontWeight:"630"},children:["$",parseFloat(f.price*f.quantity).toFixed(2)]})]})]})]})})),p.jsx("button",{className:"btn btn-danger mt-5",onClick:c,children:"Clear Cart"}),p.jsxs("div",{className:"lowerbox p-1",style:{margin:"3rem 0rem 3rem 0rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h6",{children:"Total items: "}),p.jsxs("p",{children:[s," items"]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[p.jsx("h4",{style:{fontSize:"1.6rem"},children:"Total"}),p.jsxs("p",{style:{color:"red",fontWeight:"600",fontSize:"1.3rem"},children:["$",parseFloat(i).toFixed(2)]})]}),p.jsx("button",{className:"container btn btn-danger",onClick:d,children:p.jsx(lt,{to:"/checkout",className:"container text-decoration-none text-white",children:"Prodeed to checkout"})})]})]})})]})})},wD="/freshbiteapp_Reactjs/assets/i-2Rfl6oER.png",ED="/freshbiteapp_Reactjs/assets/ii-BCmbO67r.png",TD="/freshbiteapp_Reactjs/assets/iii-jeyHnwtn.png",ID="/freshbiteapp_Reactjs/assets/iv-Q2Ub1bgE.png",SD=_e.section`
    display: block;
    margin: 8rem auto 3rem auto;
    padding: 3rem 5rem 3rem 5rem;
    background-color: beige;
    width: 90%;
    border-radius: 1rem;
    font-family: "poppins", sans-serif;
    #first-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div:nth-child(1) {
            margin: 2rem 0rem 0rem 0rem;
            p {
                color: #898989;
                width: 80%;
                margin: .5rem 0rem 1.5rem 0rem;
                font-weight: 400;
            }
        }
        img {
            width: 25rem;
            height: 19rem;
            border-radius: 0.3rem;
        }
    }
    @media (max-width: 1300px) and (min-width: 900px) {
        #first-box {
            img {
                width: 20rem;
                height: 16rem;
            }
            div:nth-child(1) {
                p {
                    font-size: .8rem;
                }
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
        #first-box {
            img {
                width: 17rem;
                height: 15rem;
            }
            div:nth-child(1) {
                margin: .5rem 0rem 0rem 0rem;
                p {
                    font-size: .8rem;
                }
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        padding: 1.5rem;
        #first-box {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
                display: block;
                margin: 0rem auto 0rem auto;
            }
            div:nth-child(1) {
                text-align: center;
                margin: 3rem 0rem 0rem 0rem;
                h3 {
                    font-size: 1.5rem;
                }
                p {
                    width: 100%;
                    font-size: .9rem;
                }
            }
        }
    }
`,xD=_e.section`
    display: block;
    margin: 8rem auto 3rem auto;
    padding: 3rem 0rem 3rem 0rem;
    width: 100%;
    font-family: "poppins", sans-serif;
    #second-box {
        text-align: center;
        h3 {
            font-size: 2.3rem;
        }
        p {
            font-weight: 400;
            color: #898989;
        }
        #para-1 {
            display: none;
        }
        #team-members {
            display: block;
            div {
                margin: 3rem 0rem 1rem 0rem;
                padding: 0rem .5rem 0rem .5rem;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: .3rem;
                }
                h5 {
                    padding: 1.8rem 0rem 0rem 0rem;
                }
                p {
                    font-size: .9rem;
                }
                #para-1 {
                    display: none;
                }
            }
        }
    }
    @media (max-width: 899px) and (min-width: 600px) {
        #second-box {
            h3 {
                font-size: 2rem;
            }
            p {
                font-weight: 400;
                font-size: .8rem;
            }
            #para-1 {
                display: none;
            }
            #team-members {
                div {
                    h5 {
                        font-size: 1rem;
                    }
                    p {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: block;
        margin: 8rem auto 3rem auto;
        padding: 3rem 0rem 3rem 0rem;
        width: 100%;
        #second-box {
            width: 100%;
            h3 {
                font-size: 1.5rem;
                width: 100%;
            }
            #para-1 {
                display: block;
                font-weight: 400;
                font-size: .8rem;
            }
            #para {
                display: none;
            }
            #team-members {
                div {
                    h5 {
                        font-size: 1.3rem;
                    }
                    p {
                        font-size: .8rem;
                    }
                }
            }
        }
    }
`,CD=_e.section`
    display: block;
    margin: 4rem auto 3rem auto;
    padding: 3rem 0rem 3rem 0rem;
    width: 100%;
    font-family: "poppins", sans-serif;
    #third-box {
        text-align: center;
        h3 {
            font-size: 2.3rem;
        }
        p {
            font-weight: 400;
            color: #898989;
        }
        #paras-1 {
            display: none;
        }
        .card {
            text-align: left;
            margin: 1rem .5rem 0rem .5rem;
            padding: .5rem;
        }
    }
    @media (max-width: 900px) and (min-width: 600px) {
        #third-box {
            h3 {
                font-size: 2rem;
            }
            p {
                font-weight: 400;
                font-size: .8rem;
            }
            #paras-1 {
                display: none;
            }
        }
    }
    @media (max-width: 599px) and (min-width: 0px) {
        display: block;
        margin: 3rem auto 3rem auto;
        padding: 3rem 0rem 3rem 0rem;
        width: 100%;
        #third-box {
            width: 100%;
            h3 {
                font-size: 1.5rem;
                width: 100%;
            }
            #paras-1 {
                display: block;
                font-weight: 400;
                font-size: .8rem;
            }
            #paras {
                display: none;
            }
        }
    }
`,AD=[{id:"1",image:`${wD}`,name:"Annette Black",status:"General Manager"},{id:"2",image:`${ED}`,name:"John Morrison",status:"Stock Manager"},{id:"3",image:`${TD}`,name:"Michael White",status:"Sales Manager"},{id:"4",image:`${ID}`,name:"Alexandria Great",status:"Project Manager"}],RD={desktop:{items:4,breakpoint:{max:1900,min:900}},tablet:{items:3,breakpoint:{max:899,min:600}},mobile:{items:1,breakpoint:{max:599,min:0}}},kD={desktop:{items:3,breakpoint:{max:1900,min:900}},tablet:{items:2,breakpoint:{max:899,min:600}},mobile:{items:1,breakpoint:{max:599,min:0}}},PD=()=>{const[t,e]=M.useState(!0),[n,r]=M.useState([]);return M.useEffect(()=>{const i=setTimeout(()=>{(async()=>{try{const o=_n(wn,"blog"),u=(await Yr(o)).docs.map(c=>({id:c.id,...c.data()}));r(u),e(!1)}catch{e(!0)}})()},3e3);return()=>clearTimeout(i)},[]),p.jsx(p.Fragment,{children:t?p.jsxs("p",{className:"container d-flex justify-content-center align-items-center",style:{marginTop:"5rem"},children:[" ",p.jsx(yo,{size:60,color:"red"})," "]}):p.jsxs(p.Fragment,{children:[p.jsx(SD,{children:p.jsxs("div",{id:"first-box",children:[p.jsxs("div",{children:[p.jsx("h3",{children:"What We Do"}),p.jsx("p",{children:"At Freshbite, we are passionate about delivering the freshest fruits, vegetables, and dairy products straight to your doorstep. Our mission is to make healthy eating simple and accessible by sourcing the finest produce from local farms and trusted suppliers."}),p.jsx("button",{className:"btn btn-danger",children:"Read More"})]}),p.jsx("div",{children:p.jsx("img",{src:"https://images.unsplash.com/photo-1528373553865-c5d96fe764f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",alt:"about image"})})]})}),p.jsx(xD,{children:p.jsxs("div",{id:"second-box",className:"container",children:[p.jsx("h3",{children:"Meet Our Team"}),p.jsxs("p",{id:"para",children:["Our Team consist of very dedicated & hard worker men & women ",p.jsx("br",{})," who will assist you till the end"]}),p.jsx("p",{id:"para-1",children:"Our Team consist of very dedicated & hard worker men & women who will assist you till the end"}),p.jsx("div",{id:"team-members",children:p.jsx(Wp,{autoPlay:!0,infiniteLoop:!0,swipeable:!0,showDots:!1,responsive:RD,infinite:!0,keyBoardControl:!0,ssr:!0,itemClass:"carousel-item-padding-0-px",pauseOnHover:!1,arrows:!1,children:AD.map(i=>p.jsxs("div",{children:[p.jsx("img",{src:i.image,alt:"team"}),p.jsxs("h5",{children:[i.name," "]}),p.jsx("p",{children:i.status})]},i.id))})})]})}),p.jsx(CD,{children:p.jsxs("div",{id:"third-box",className:"container",children:[p.jsx("h3",{children:"Our Blog"}),p.jsxs("p",{id:"paras",children:["Our Team consist of very dedicated & hard worker men & women ",p.jsx("br",{})," who will assist you till the end"]}),p.jsx("p",{id:"paras-1",children:"Our Team consist of very dedicated & hard worker men & women who will assist you till the end"}),p.jsx("div",{children:p.jsx(Wp,{autoPlay:!0,infiniteLoop:!0,swipeable:!0,showDots:!1,responsive:kD,infinite:!0,keyBoardControl:!0,ssr:!0,itemClass:"carousel-item-padding-0-px",pauseOnHover:!1,arrows:!1,children:n.map(i=>p.jsxs("div",{className:"card",children:[p.jsx("img",{src:i.imageurl,className:"card-img-top",alt:"Blog Pic"}),p.jsxs("div",{className:"card-body",children:[p.jsxs("p",{className:"card-text",children:["In ",i.category]}),p.jsx("h5",{className:"card-title",children:i.title.slice(0,45)}),p.jsx("p",{className:"card-text",children:i.description.slice(0,160)}),p.jsx("a",{href:i.link,className:"btn btn-danger",children:"Read More"})]})]},i.id))})})]})})]})})},bD=t=>{const e={};return p.jsx(eS.Provider,{value:e,children:t.children})},ND=_e.div`
    box-sizing: border-box;
    margin: 0%;
    max-width: 100%;
    height: auto;
`,OD=()=>{const t=yd();return M.useEffect(()=>{t(oD())},[t]),p.jsx(p.Fragment,{children:p.jsx(bD,{children:p.jsxs(ND,{children:[p.jsxs(A3,{children:[p.jsx(Cn,{path:"/",element:p.jsx(v_,{})}),p.jsx(Cn,{path:"/Home",element:p.jsx(v_,{})}),p.jsx(Cn,{path:"/Login",element:p.jsx(DN,{})}),p.jsx(Cn,{path:"/Register",element:p.jsx(bN,{})}),p.jsx(Cn,{path:"/shop",element:p.jsxs(p.Fragment,{children:[p.jsx(us,{}),p.jsx(dD,{}),p.jsx(fs,{})]})}),p.jsx(Cn,{path:"/ProductDetail",element:p.jsxs(p.Fragment,{children:[p.jsx(us,{}),p.jsx(fD,{}),p.jsx(fs,{})]})}),p.jsx(Cn,{path:"/checkout",element:p.jsxs(p.Fragment,{children:[p.jsx(us,{}),p.jsx(mD,{}),p.jsx(fs,{})]})}),p.jsx(Cn,{path:"/Cart",element:p.jsxs(p.Fragment,{children:[p.jsx(us,{}),p.jsx(_D,{}),p.jsx(fs,{})]})}),p.jsx(Cn,{path:"/About",element:p.jsxs(p.Fragment,{children:[p.jsx(us,{}),p.jsx(PD,{}),p.jsx(fs,{})]})})]}),p.jsx(b9,{})]})})})},df=zO("products/fetchProducts",async()=>(await Yr(_n(wn,"shop"))).docs.map(n=>({id:n.id,...n.data()}))),SS=_S({name:"products",initialState:{products:[],filteredProducts:[],load:!1,error:null},reducers:{searchProduct:(t,e)=>{const n=e.payload.toLowerCase();t.filteredProducts=t.products.filter(r=>r.name.toLowerCase().includes(n))}},extraReducers:t=>{t.addCase(df.pending,e=>{e.load=!0}).addCase(df.fulfilled,(e,n)=>{e.load=!1,e.products=n.payload,e.filteredProducts=n.payload}).addCase(df.rejected,(e,n)=>{e.load=!1,e.error=n.error.message})}});SS.actions;const DD=SS.reducer,LD=bO({reducer:{cart:uD,product:DD},devTools:!0}),MD=ff.createRoot(document.getElementById("root"));MD.render(p.jsx(wt.StrictMode,{children:p.jsx(J9,{store:LD,children:p.jsx(L3,{children:p.jsx(OD,{})})})}));
